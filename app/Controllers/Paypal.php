<?php
namespace App\Controllers;

use App\Models\Plan_model;
use App\Controllers\BaseController;
use App\Libraries\Paypal_lib;

use Swift_Mailer;
use Swift_Message;
use Swift_SmtpTransport;

class Paypal extends BaseController {

    function success(){
        //get the transaction data
        /*$paypalInfo = $this->request->getVar();
        $data['item_number'] = $paypalInfo['item_number'];
        $data['txn_id'] = $paypalInfo["tx"];
        $data['payment_amt'] = $paypalInfo["amt"];
        $data['currency_code'] = $paypalInfo["cc"];
        $data['status'] = $paypalInfo["st"];*/

        $paypalInfo    = $this->request->getVar();
        $data['payment_status']  = $paypalInfo["payment_status"];
        $data['plan_id']    = (int)$paypalInfo["item_number"];


        //echo $payment_status;

        //redirect(base_url().'Login');

        /*echo '<br><br><pre>';
        var_dump($_POST);
         echo '</pre>';
        die();*/

        //$payment_status = ;

        $response=array(
        'status'=>'success',
        'message' => 'Thank you ! you have successfully completed payment process.'
        );


        $this->session->set_flashdata('response', $response);
        $this->session->userdata('user')->subscribed = "y";
        $this->session->userdata('user')->plan_end_date = date('Y-m-d H:i:s',strtotime("+1 month"));

        $update_id = $this->Plan_model->update_subscription($data);

            //mail sending
            $email_id = $this->session->userdata('user')->email;
            $template_data=array("name" => $this->session->userdata('user')->f_name.$this->session->userdata('user')->l_name);


            $mail_content= $this->load->view('email_template/subscription_success',$template_data,true);
            $subject = "Thank you for choosing to use Auziplan";
            $send_m = $this->send_switft_mail($subject,$mail_content,$email_id);

            //redirect(base_url().'Login');

        return view('paypalsuccess');

         }

         /*function cancel(){
            $this->load->view('paypal/cancel');
         }*/
         function cancel(){
            redirect()->to(site_url().'plans');
        }

     function ipn(){
        //paypal return transaction details array
        $paypalInfo    = $this->request->getVar();

        $data['user_id'] = $paypalInfo['custom'];
        $data['plan_id']    = (int)$paypalInfo["item_number"];
        $data['txn_id']    = $paypalInfo["txn_id"];
        $data['payment_gross'] = $paypalInfo["payment_gross"];
        $data['currency_code'] = $paypalInfo["mc_currency"];
        $data['payer_email'] = $paypalInfo["payer_email"];
        $data['payment_status']    = $paypalInfo["payment_status"];
        $data['createdDate']    = date('Y-m-d H:i:s');

        $paypalURL = $this->paypal_lib->paypal_url;
        $result    = $this->paypal_lib->curlPost($paypalURL,$paypalInfo);

        //check whether the payment is verified
        if(eregi("VERIFIED",$result)){
            //insert the transaction data into the database
            $this->Plan_model->insertTransaction($data);
        }
    }

    public function send_switft_mail($subject,$mail_content,$email){

        /*  $mailer = new Swift_Mailer(
            Swift_SmtpTransport::newInstance('mail.excelplans.com.au',465, 'ssl')
              ->setUsername('suppport@excelplans.com.au')
              ->setPassword('B&ZHJ#rgKv]U')
            );*/



   
          $mailer = new Swift_Mailer(
      Swift_SmtpTransport::newInstance('node6754.myfcloud.com',465,'ssl')
      ->setUsername('support@auziplan.com')
      ->setPassword('Starlight2022')
      );

          $message = Swift_Message::newInstance($subject)
            ->setFrom(array('support@auziplan.com' => 'AuziPlan'))
            ->setTo(array($email => 'AuziPlan'))
            ->setBody($mail_content, 'text/html');

              if(!$mailer->send($message)){
                echo "error";
              }
    }


}