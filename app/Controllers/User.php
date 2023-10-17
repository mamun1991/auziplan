<?php

namespace App\Controllers;

use App\Models\BankLoanModel;
use App\Models\CompanyDetail;
use App\Models\UserModel;
use Swift_Mailer;
use Swift_Message;
use Swift_SmtpTransport;

class User extends BaseController
{
    /**
     * @var CompanyDetail
     */
    protected $company;
    public function __construct()
    {
        $this->company = new CompanyDetail();
    }
    public function companysetup()
    {
        if (!$this->session->has('user')) {
            return redirect()->to(site_url() . 'login');
        }
        
        $userObj = new UserModel();
        $userId = $this->session->get('user')->id;
        $company = $this->company->where('user_id', $userId)->find();

        $this->data['user'] = $userObj->find($userId);
        $this->data['controller'] = 'user';
        $this->data['company'] = $company ? $company[0] : null;

        return view('other-layouts/head', $this->data)
            .view('other-layouts/leftbar', $this->data)
            .view('other-layouts/header', $this->data)
            .view('companysetup', $this->data)
            .view('other-layouts/footer', $this->data);
    }

    public function doCompanySetup()
    {
        $user_id = $this->session->get('user')->id;
        $company_settings = array(
            "user_id" => $user_id,
            "company_logo" => $this->request->getVar('companylogo'),
            "company_name" => $this->request->getVar('company_name'),
            "start_date" => date("Y-m-d", strtotime($this->request->getVar('start_date'))),
            "abn_no" => $this->request->getVar('abn_no'),
            "register_no" => $this->request->getVar('register_no'),
            "street_no" => $this->request->getVar('street_no'),
            "street_name" => $this->request->getVar('street_name'),
            "suburb" => $this->request->getVar('suburb'),
            "state" => $this->request->getVar('state'),
            "zipcode" => $this->request->getVar('zipcode'),
            "country" => $this->request->getVar('country'),
            "company_email" => $this->request->getVar('email'),
            "website" => $this->request->getVar('website'),
            "cmpy_structure" => $this->request->getVar('cmpy_structure'),
            "industry" => $this->request->getVar('industry'),
            "currency" => $this->request->getVar('currency'),
            "financial_year" => $this->request->getVar('financial_year')
        );

        $builder = $this->db->table("company_detail");
        $builder->where(array('user_id' => $this->session->get('user')->id));
        $query = $builder->get();
        $row = $query->getRow();

        //print_r($company_settings);exit;
        if ($row) {
            $builder->where('id', $row->id);

            if ($builder->update($company_settings)) {
                $saved = true;
            } else {
                $saved = false;
            }

        } else {
            $saved = $this->User_model->save_companysetup($company_settings);
        }

        if ($saved) {
            echo "success";
        } else {
            echo "failed";
        }
    }

    public function logout()
    {
        $this->session->destroy();
        return view('logout');
    }

    public function changepassword()
    {
        return view('changepassword');
    }

    public function doNewpwd()
    {
        if ($this->request->getVar('password') != $this->request->getVar('cpassword')) {

            echo "mismatch";
            return;
        } else {
            $data = array(
                'password' => md5($this->request->getVar('password')),
            );

            $this->db->where('id', $this->session->get('user')->id);
            $this->db->update('user', $data);

            echo "changed";
            return;
        }
    }

    public function saveFinance()
    {
        $financeid = $this->request->getVar('financeid');
        $interest = ($this->request->getVar('loan_amount') * $this->request->getVar('annual_interest')) / 100;

        $saveFinance = array(
            "user_id" => $this->session->get('user')->id,
            "loan_amount" => $this->request->getVar('loan_amount'),
            "loan_length" => $this->request->getVar('loan_length'),
            "annual_interest" => $this->request->getVar('annual_interest'),
            "total_paid" => 0,
            "total_interest" => $interest,
            "total_period" => $this->request->getVar('loan_length') * 12,
        );

        $builder = $this->db->table('bankloan');
    
        if ($financeid > 0) {
            $builder->where('id', $financeid);
            $builder->update($saveFinance);
            $saved = true;
        } else {
            $saved = $builder->insert($saveFinance);
        }


        if ($saved) {
            echo "success";
        } else {
            echo "failed";
        }
    }


    public function amortization()
    {
        $cur = '$';
        $companyObject = new CompanyDetail();
        $company = $companyObject->where('user_id', $this->session->get('user')->id)->find();
      
        if ($company) {
            $currency = $company[0]['currency'];
            if ($currency == "AUD" || $currency == "USD") {
                $cur = "$";
            } else if ($currency == "EUR") {
                $cur = "€";
            } else if ($currency == "UK") {
                $cur = "£";
            } else if ($currency == "INR") {
                $cur = "₹";
            }
        }

        $periods = array(
            52 => 'Weekly',
            26 => 'Bi-weekly',
            12 => 'Monthly',
            6 => 'Bi-monthly',
            4 => 'Quarterly',
            2 => 'Semi-annually',
            1 => 'Annually'
        );

        $pay_periods = '';

        $pay_periodicity = "12";

        $periodicity = $periods[$pay_periodicity];

        $loan_amount = $this->request->getVar('loan_amount');
        $c_balance = $loan_amount;
        $total_periods = $this->request->getVar('loan_length') * $pay_periodicity;
        $interest_percent = $this->request->getVar('annual_interest') / 100;
        $period_interest = $interest_percent / $pay_periodicity;
        $pow = pow((1 + $period_interest), - ($total_periods));
        
        $c_period_payment = $loan_amount * ($period_interest / (1 - $pow == 1 ? 0 : $pow));
        $total_paid = $c_period_payment * $total_periods;
        $total_interest = $c_period_payment * $total_periods - $loan_amount;
        $total_principal = $loan_amount;
        $loan_amount = $loan_amount;
        $annual_interest = $this->request->getVar('annual_interest');
        $period_payment = $c_period_payment;

        $amortization_table_rows = '';
        $totalInterest = 0;

        for ($period = 1; $period <= $total_periods; $period++) {

            $c_interest = $c_balance * $period_interest;
            $c_principal = $c_period_payment - $c_interest;
            $c_balance -= $c_principal;
            $interest = $c_interest;
            $totalInterest += $c_interest;
            $principal = $c_principal;
            $balance = $c_balance;
            // if ($period == 1) {
                $b_balance = $loan_amount;
            // } else {
                // $b_balance = $b_balance - $principal;
            // }
            $evenrow_row_modifier = ($period % 2) ? '' : 'class=evenrow';
            $amortization_table_rows .= '<tr>
                <td align=center class=bordered>' . $period . '.</td>
                <td align=center class=bordered><span class="currencydynamic"></span>' . $cur . ' ' . number_format(abs($b_balance), 2, '.', ',') . '</td>
                <td align=center class=bordered><span class="currencydynamic"></span>' . $cur . ' ' . number_format($interest, 2, '.', ',') . '</td>
                <td align=center class=bordered><span class="currencydynamic"></span>' . $cur . ' ' . number_format($principal, 2, '.', ',') . '</td>
                <td align=center class=bordered><span class="currencydynamic"></span>' . $cur . ' ' . number_format(abs($balance), 2, '.', ',') . '</td>
            </tr>';
        }

        echo $amortization_table_rows . "|" . $totalInterest;
    }

    public function getFinanceTable()
    {
        $bankLoanObj = new BankLoanModel();

        $result = $bankLoanObj->where('user_id', $this->session->get('user')->id);
        
        echo json_encode($result->findAll());
    }

    public function saveAssumptions()
    {
        $assumptionid = $this->request->getVar('assumptionid');

        $saveassumption = [
            "user_id" => $this->session->get('user')->id,
            "opening_credit_balance" => $this->request->getVar('opening_credit_balance'),
            "opening_debit_balance" => $this->request->getVar('opening_debit_balance'),
            "opening_bank_balance" => $this->request->getVar('opening_bank_balance'),
            "opening_stock_balance" => $this->request->getVar('opening_stock_balance'),
            "rsvbl_in_days" => $this->request->getVar('rsvbl_in_days'),
            "pybl_in_days" => $this->request->getVar('pybl_in_days'),
            "vat_paid_in_days" => $this->request->getVar('vat_paid_in_days'),
            "cmpnytx_paid_in_days" => $this->request->getVar('cmpnytx_paid_in_days'),
            "porivision_baddebt" => $this->request->getVar('porivision_baddebt'),
            "depreciation_on_equipment" => $this->request->getVar('depreciation_on_equipment'),
            "franchise_royalty" => $this->request->getVar('franchise_royalty'),
            "company_tax" => $this->request->getVar('company_tax'),
            "company_vat_collected" => $this->request->getVar('company_vat_collected'),
            "servicecost_service" => $this->request->getVar('servicecost_service'),
            "administration_increase" => $this->request->getVar('administration_increase'),
            "marketing_increase" => $this->request->getVar('marketing_increase'),
            "public_relations_increase" => $this->request->getVar('public_relations_increase'),
            "other_increase" => $this->request->getVar('other_increase'),
            "superannuation" => $this->request->getVar('superannuation'),
            "work_cover" => $this->request->getVar('work_cover'),
            "commission" => $this->request->getVar('commission'),
            "other" => $this->request->getVar('other'),
            "pay_increase" => $this->request->getVar('pay_increase')
        ];

        $builder = $this->db->table('general_assumption');
        $saved = null;

        if ($builder->get($assumptionid)->getNumRows() > 0) {
            $builder->where('id', (int)$assumptionid);
            $saved = $builder->update($saveassumption);
            if ($saved) {
                echo $assumptionid;
                return;
            }
        } else {
            $saved = $builder->insert($saveassumption);
        }

        echo json_encode($saved);
    }

    public function getAssumptionsData()
    {
        $builder = $this->db->table('general_assumption');
        $result = $builder->where('user_id', $this->session->get('user')->id)->get();
        return $this->response->setJSON($result->getRow());
    }

    public function currency()
    {
        $cur = '$';
        $companyObject = new CompanyDetail();
        $company = $companyObject->where('user_id', $this->session->get('user')->id)->find();
        if ($company) {
            $currency = $company[0]['currency'];
            if ($currency == "AUD" || $currency == "USD") {
                $cur = "$";
            } else if ($currency == "EUR") {
                $cur = "€";
            } else if ($currency == "UK") {
                $cur = "£";
            } else if ($currency == "INR") {
                $cur = "₹";
            }
        }

        return $this->response->setJSON($cur);
    }

    function askQuestionEmail()
    {
        $to = "support@auziplan.com";
        $msg = "";
        $msg .= "<p>Name : " . $this->request->getVar('ayourq_name') . "</p>";
        $msg .= "<p>Email : " . $this->request->getVar('ayourq_email') . "</p>";
        $msg .= "<p>How can we help you?: " . $this->request->getVar('ayourq_question') . "</p>";

        $mail_content = $msg;

        $subject = "New Question";

        if ($this->send_switft_mail($subject, $mail_content, $to)) {
            echo 'emailsent';
        } else {
            echo "failed";
        }
    }

    public function send_switft_mail($subject, $mail_content, $email)
    {
           
        $mailer = new Swift_Mailer(
        Swift_SmtpTransport::newInstance('node6754.myfcloud.com',465,'ssl')
        ->setUsername('support@auziplan.com')
        ->setPassword('Starlight2022')
        );

        $message = Swift_Message::newInstance($subject)
            ->setFrom(array('support@auziplan.com' => 'AuziPlan'))
            ->setTo(array($email => 'AuziPlan'))
            ->setBody($mail_content, 'text/html');

        if (!$mailer->send($message)) {
            return false;
        } else {
            return true;
        }
    }
}
