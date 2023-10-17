<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\ExpenseModel;
use App\Models\PeopleModel;

class OperatingCosts extends BaseController {

    /**
     * @var ExpenseModel
     */
    protected $expense;

    /**
     * @var PeopleModel
     */
    protected $people;

    public function __construct() {
        $this->expense = new ExpenseModel();
        $this->people = new PeopleModel();
        $session = \Config\Services::session();
        if (!isset($session->get('user')->logged_in) || $session->get('user')->logged_in !== true) {
            return redirect()->to(site_url() . 'login');
        }	
    }

	public function index() {
        if (!$this->session->get('user')) {
            return redirect()->to(site_url() . 'login');
        }
        
        $this->data['user'] = $this->session->get('user');
        
        if ($this->currency == "AUD" || $this->currency == "USD") {
            $cur = "$";
        } elseif ($this->currency == "EUR") {
            $cur = "€";
        } elseif ($this->currency == "UK") {
            $cur = "£";
        } elseif ($this->currency == "INR") {
            $cur = "₹";
        }

		$this->data['controller'] = 'operating_costs';
        $this->data['currency'] = $cur;

		return view('other-layouts/head', $this->data)
            .view('other-layouts/leftbar')
            .view('other-layouts/header', $this->data)
            .view('operating_costs', $this->data)
            .view('other-layouts/footer');
	}

	public function ajaxAdd() {
        $user_id = $this->session->get('user')->id;
		$edit_id = $this->request->getVar('operatingcostexpense_id');
        // $weekly = floatval(str_replace(',', '', preg_replace('/[^\d'.preg_quote(',').']/', '', $this->request->getVar('weekly_cost'))));
        // $monthly = floatval(str_replace(',', '', preg_replace('/[^\d'.preg_quote(',').']/', '', $this->request->getVar('monthly_cost'))));
        // $quaterly = floatval(str_replace(',', '', preg_replace('/[^\d'.preg_quote(',').']/', '', $this->request->getVar('quarterly_cost'))));
        // $yearly = floatval(str_replace(',', '', preg_replace('/[^\d'.preg_quote(',').']/', '', $this->request->getVar('yearly_cost'))));
        // $weekly = round(preg_replace('/[^0-9]/', '', $this->request->getVar('weekly_cost')));
        $monthly = round(preg_replace('/[^0-9]/', '', $this->request->getVar('monthly_cost')));
        // $quaterly = round(preg_replace('/[^0-9]/', '', $this->request->getVar('quarterly_cost')));
        $yearly = round(preg_replace('/[^0-9]/', '', $this->request->getVar('yearly_cost')));
        $num_month = ($this->request->getVar('num_month') == "")? 0:$this->request->getVar('num_month');

        $data = array(
            'user_id' => $user_id,
            'description' => $this->request->getVar('description'),
            'monthly_cost' => $monthly,
            'yearly_cost' => $yearly,
            'purpose' => $this->request->getVar('purpose'),
            'selectDescription' => $this->request->getVar('selectDescription'),
            'num_month'=>$num_month,
            'startupallowance'=>$monthly * $num_month
        );

        $builder = $this->db->table('expenses');

        if($edit_id > 0) {
            //echo "edit";
            $builder->where('id', $edit_id);
            $insert = $builder->update($data);
            //echo $insert;
        }else {
            //echo "new";
            $insert = $builder->insert($data);
        }
		
		if($insert){
			echo "success";
		}else{
			echo "failed";
		}
    }

	public function ajaxList()
    {
        $user_id = $this->session->get('user')->id;
        $list = $this->expense->where('user_id', $user_id)->find();
        $currency = $this->currency;

        $query1 = $this->db->query('select * from general_assumption where user_id="' . $user_id . '"');
        $result = $query1->getRow();

        $cur = '';

        if ($currency == "AUD" || $currency == "USD") {
            $cur = "$";
        } elseif ($currency == "EUR") {
            $cur = "€";
        } elseif ($currency == "UK") {
            $cur = "£";
        } elseif ($currency == "INR") {
            $cur = "₹";
        }

        $data = array();
        $no = 0;
        foreach ($list as $expense) {
            $no++;

            if($expense['purpose'] == "Administration"){
                $rate = ($result->administration_increase / 100);
            }

            if($expense['purpose'] == "Marketing"){
                $rate = ($result->marketing_increase / 100);
            }

            if($expense['purpose'] == "Other"){
                $rate = $result->other_increase / 100;
            }

            if($expense['purpose'] == "Public_Relations"){
                $rate = $result->public_relations_increase / 100;
            }

            $year2 = ($expense['yearly_cost'] * $rate)+$expense['yearly_cost'];
            //$year2 = $rate;
            $year3 = ($year2 * $rate) + $year2;

            $row = array();
            $row[] = $expense['purpose'];
            $row[] = $expense['description'];
            $row[] = $cur.number_format($expense['startupallowance']);
            $row[] = $cur.number_format($expense['monthly_cost']);
            $row[] = $cur.number_format($expense['yearly_cost']);
            $row[] = $cur.number_format($year2);
            $row[] = $cur.number_format($year3);
            $row[] = '<div class="btn-group btn-group end-0 me-4" style="margin-right: 0px !important; margin-top:-2px;">
                            <button class="btn btn-light pe-2 editoperatingcostexpense" id='.$expense['id'].' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                <span class="fas fa-edit"></span>
                            </button>
                            <button class="btn btn-light pe-2 removeoperatingcostexpense" id='.$expense['id'].' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                <span class="fas fa-trash"></span>
                            </button>
                        </div>';
            $data[] = $row;
        }

		$recordsTotal = $this->expense->countAll($user_id);

        $output = array(
            "draw" => isset($_GET['draw']) ? $_GET['draw'] : false,
            "recordsTotal" => $recordsTotal,
            "recordsFiltered" => $recordsTotal,
            "data" => $data,
            "currency"=>$cur,
        );
        //output to json format
        echo json_encode($output);
    }

	public function ajaxEdit($id) {
        $data = $this->expense->find($id);
        echo json_encode($data);
    }


	public function ajaxDelete($id)
    {
        $builder = $this->db->table('expenses');
        $builder->where('id', $id);

		if($builder->delete()){
            echo "success";
        }else{
            echo "failed";
        }
    }

    public function getPeopleSliderValue()
    {
        $user_id = $this->session->get('user')->id;
        $list = $this->expense->where('user_id', $user_id)->find();

        $edit_id = $this->request->getVar('operatingcostexpense_id');

        $query = $this->db->query('select currency from company_detail where user_id="' . $user_id . '"');
        $currency = $query->row()->currency;

        $query1 = $this->db->query('select * from general_assumption where user_id="' . $user_id . '"');
        $result = $query1->row();

        $cur = '';

        if ($currency == "AUD" || $currency == "USD") {
            $cur = "$";
        } elseif ($currency == "EUR") {
            $cur = "€";
        } elseif ($currency == "UK") {
            $cur = "£";
        } elseif ($currency == "INR") {
            $cur = "₹";
        }
 
        $data = array();
        $no = 0;
        foreach ($list as $expense) {
            $no++;

            if($expense['purpose'] == "Administration"){
                $rate = ($result->administration_increase / 100);
            }

            if($expense['purpose'] == "Marketing"){
                $rate = ($result->marketing_increase / 100);
            }

            if($expense['purpose'] == "Other"){
                $rate = $result->other_increase / 100;
            }

            if($expense['purpose'] == "Public_Relations"){
                $rate = $result->public_relations_increase / 100;
            }

            $year2 = ($expense['yearly_cost'] * $rate)+$expense['yearly_cost'];
            //$year2 = $rate;
            $year3 = ($year2 * $rate) + $year2;

            $row = array();
            $row[] = $expense['purpose'];
            $row[] = $expense['description'];
            $row[] = $cur.number_format($expense['startupallowance'], 0, '.', ',');
            $row[] = $cur.number_format($expense['monthly_cost'], 0, '.', ',');
            $row[] = $cur.number_format($expense['yearly_cost'], 0, '.', ',');
            $row[] = $cur.$year2;
            $row[] = $cur.$year3;
            $row[] = '<div class="btn-group btn-group end-0 me-4" style="margin-right: 0px !important;margin-top:-2px;">
                            <button class="btn btn-light pe-2 editoperatingcostexpense" id='.$expense['id'].' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                <span class="fas fa-edit"></span>
                            </button>
                            <button class="btn btn-light pe-2 removeoperatingcostexpense" id='.$expense['id'].' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                <span class="fas fa-trash"></span>
                            </button>
                        </div>';
            $data[] = $row;
        }

		$recordsTotal = $this->Expenses_model->count_all($user_id);

        $output = array(
            "draw" => $_POST['draw'],
            "recordsTotal" => $recordsTotal,
            "recordsFiltered" => $recordsTotal,
            "data" => $data,
            "currency"=>$cur,
        );
        //output to json format
        echo json_encode($output);
    }


    public function getPayrollAssumptions()
    {
        $builder = $this->db->table("general_assumption");
        $builder->where(array('user_id' => $this->session->get('user')->id));
        $query = $builder->get();
        $result = $query->getRow();
        echo json_encode($result);
    }


    public function ajaxAddPeople()
    {
        $user_id = $this->session->get('user')->id;

		$edit_id = $this->request->getVar('operatingpeople_id');
  
  
        //$hour_worked = floatval(str_replace(',', '', preg_replace('/[^\d'.preg_quote(',').']/', '', $this->request->getVar('hour_worked'))));
        $hour_worked = round(preg_replace('/[^0-9]/', '', $this->request->getVar('hour_worked')));

        //$num_people = floatval(str_replace(',', '', preg_replace('/[^\d'.preg_quote(',').']/', '', $this->request->getVar('num_people'))));
        $num_people = round(preg_replace('/[^0-9]/', '', $this->request->getVar('num_people')));

        //$rates = floatval(str_replace(',', '', preg_replace('/[^\d'.preg_quote(',').']/', '', $this->request->getVar('rates'))));
        $rates = round(preg_replace('/[^0-9]/', '', $this->request->getVar('rates')));

        //$gross_salary = floatval(str_replace(',', '', preg_replace('/[^\d'.preg_quote(',').']/', '', $this->request->getVar('gross_salary'))));
        //$gross_salary = preg_replace('/[^0-9]/', '', $this->request->getVar('gross_salary'));
        $gross_salary = round(preg_replace('/[^0-9.]/', '', $this->request->getVar('gross_salary')));
       
        //$superannuation_people = floatval(str_replace(',', '', preg_replace('/[^\d'.preg_quote(',').']/', '', $this->request->getVar('superannuation_people'))));
        $superannuation_people = round(preg_replace('/[^0-9]/', '', $this->request->getVar('superannuation_people')));

        //$work_cover_people = floatval(str_replace(',', '', preg_replace('/[^\d'.preg_quote(',').']/', '', $this->request->getVar('work_cover_people'))));
        $work_cover_people = round(preg_replace('/[^0-9]/', '', $this->request->getVar('work_cover_people')));
       
        //$commission_people = floatval(str_replace(',', '', preg_replace('/[^\d'.preg_quote(',').']/', '', $this->request->getVar('commission_people'))));
        $commission_people = round(preg_replace('/[^0-9]/', '', $this->request->getVar('commission_people')));
       
        //$payroll_people = floatval(str_replace(',', '', preg_replace('/[^\d'.preg_quote(',').']/', '', $this->request->getVar('payroll_people'))));
        $payroll_people = round(preg_replace('/[^0-9]/', '', $this->request->getVar('payroll_people')));
       
        //$yearly_salary_people = floatval(str_replace(',', '', preg_replace('/[^\d'.preg_quote(',').']/', '', $this->request->getVar('yearly_salary_people'))));
        $yearly_salary_people = preg_replace('/[^0-9]/', '', $this->request->getVar('yearly_salary_people'));

        $num_payroll_month = preg_replace('/[^0-9]/', '', $this->request->getVar('num_payroll_month'));
        $startup_payroll_allowance = preg_replace('/[^0-9]/', '', $this->request->getVar('startup_payroll_allowance'));


        
        $data = array(
            'user_id' => $user_id,
            'role' => $this->request->getVar('role'),
            'hour_worked' => $hour_worked,
            'num_people' => $num_people,
            'rates' => $rates,
            'gross_salary' => $gross_salary,
            'superannuation' => $superannuation_people,
            'work_cover' => $work_cover_people,
            'commission'=>$commission_people,
            'payroll_cost'=>$payroll_people,
            'yearly_salary'=>$yearly_salary_people,
            'num_payroll_month'=>$num_payroll_month,
            'startup_payroll_allowance'=>$startup_payroll_allowance,
        );


        $builder = $this->db->table('people');
        if($edit_id > 0){
            $builder->where('id', $edit_id);
            $builder->update($data);
            $insert = 1;
        }else{
            $builder->insert($data);
            $insert = 1;
        }
		
		if($insert){
			echo "success";
		}else{
			echo "failed";
		}
    }

    public function getPayrollAssumptionsVal($val)
    {
        $builder = $this->db->table("general_assumption");
        $builder->where(array('user_id' => $this->session->get('user')->id));
        $query = $builder->get();
        $result = $query->getRow();
        if($val == "pay_increase"){
            return $result->pay_increase;
        }
    }

    public function ajaxPeople()
    {
        $user_id = $this->session->get('user')->id;
        $list = $this->people->where('user_id', $user_id)->find();
        $currency = $this->currency;
        $cur = '';

        if ($currency == "AUD" || $currency == "USD") {
            $cur = "$";
        } elseif ($currency == "EUR") {
            $cur = "€";
        } elseif ($currency == "UK") {
            $cur = "£";
        } elseif ($currency == "INR") {
            $cur = "₹";
        }

        $data = array();
        $no = 0;
        foreach ($list as $expense) {
            $no++;

            $year1 = $expense['gross_salary']*12;

            $pay_increase = $this->getPayrollAssumptionsVal('pay_increase')/100;

            $year2 = $year1 * $pay_increase + $year1;
            
            $year3 = $year2 * $pay_increase + $year2;

            $row = array();
            $row[] = $expense['role'];
            $row[] = $expense['num_people'];
            $row[] = $cur.number_format($expense['superannuation']);
            $row[] = $cur.number_format($expense['work_cover']);
            $row[] = $cur.number_format($expense['commission']);
            $row[] = $cur.number_format($expense['payroll_cost']);
            $row[] = $cur.number_format($expense['startup_payroll_allowance']);
            $row[] = $cur.number_format($expense['gross_salary']);
            $row[] = $cur.number_format($year1);
            $row[] = $cur.number_format($year2);
            //$row[] = $cur."".$year2;
            $row[] = $cur.number_format($year3);
            //$row[] = $cur."".$year3;      
            $row[] = '<div class="btn-group btn-group end-0 me-4" style="margin-right: 0px !important;margin-top:-2px;">
                            <button class="btn btn-light pe-2 editoperatingcostpeople" id='.$expense['id'].' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                <span class="fas fa-edit"></span>
                            </button>
                            <button class="btn btn-light pe-2 removeoperatingcostpeople" id='.$expense['id'].' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                <span class="fas fa-trash"></span>
                            </button>
                        </div>';
            $data[] = $row;
        }

		$recordsTotal = $this->people->countPeople($user_id);

        $output = array(
            "draw" => isset($_GET['draw']) ? $_GET['draw'] : false,
            "recordsTotal" => $recordsTotal,
            "recordsFiltered" => $recordsTotal,
            "data" => $data,
            "currency"=>$cur,
        );
        //output to json format
        echo json_encode($output);
    }


    public function ajaxEditPeople($id)
    {
        $builder = $this->db->table('people');
        $builder->where('id', $id);
        $query = $builder->get();
        $data = $query->getRow();

        echo json_encode($data);
    }


    public function ajaxDeletePeople($id)
    {
        $builder = $this->db->table('people');
        $builder->where('id', $id);
		if ($builder->delete()) {
            echo "success";
        } else {
            echo "failed";
        }
    }

    
		
}
