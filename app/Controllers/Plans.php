<?php
namespace App\Controllers;

use App\Models\Plan_model;
use App\Controllers\BaseController;
use App\Libraries\Paypal_lib;

require_once APPPATH.'libraries/swift_mailer/swift_required.php';
//require_once APPPATH.'libraries/paypal_lib.php';

class Plans extends BaseController {


	// public function __construct()
	// {
	// 	parent::__construct();
	// 	$this->load->database();  
  //       $this->load->library('paypal_lib');
  //       $this->load->model('Plan_model');
	// } 

  protected $planModel;

  public function __construct()
  {
    helper('url');
    $this->planModel = new Plan_model();
    $this->paypal_lib = new Paypal_lib();
  }

    public function index()
	{
		$this->data['controller'] = 'Plans';

		return view('site-layouts/head', $this->data)
		. view('site-layouts/header', $this->data)
    . view('plans', $this->data)
		. view('site-layouts/footer', $this->data);
	}


    public function subscribe(){
      $name = "";
        //Set variables for paypal form
        //$paypalURL = 'https://www.sandbox.paypal.com/cgi-bin/webscr'; //test PayPal api url
        $paypalID = 'inquiries-facilitator@excelplans.com.au'; //business email
        $returnURL = site_url().'paypal/success'; //payment success url
        $cancelURL = site_url().'paypal/cancel'; //payment cancel url		//$cancelURL = site_url().'plans'; //payment cancel url
        $notifyURL = site_url().'paypal/ipn'; //ipn url
        //get particular product data
        //$product = $this->product->getRows($id);
        $plan_detail = $this->planModel->get_all_plans();

      if($name=='monthly'){
          $item_number = 1;
          $planname= $plan_detail[0]['title'];
          $amount = $plan_detail[0]['price'];
        $timeperiod = 'M';
      }else{
        $item_number = 2;
        $planname= $plan_detail[1]['title'];
        $amount = $plan_detail[1]['price'];
        $timeperiod = 'Y';
      }
        $userID = isset($this->session->get('user')->id) ? $this->session->get('user')->id : 1; //current user id
        $logo = base_url().'assets/img/cbpLogoSmall_3x.png';

        $this->paypal_lib->add_field('business', $paypalID);
        $this->paypal_lib->add_field('return', $returnURL);
        $this->paypal_lib->add_field('cancel_return', $cancelURL);
        $this->paypal_lib->add_field('notify_url', $notifyURL);
        $this->paypal_lib->add_field('item_name', $planname);
        $this->paypal_lib->add_field('custom', $userID);

        $this->paypal_lib->add_field('a3', $amount);
        $this->paypal_lib->add_field('t3', $timeperiod);
        $this->paypal_lib->add_field('p3', '1');

        $this->paypal_lib->add_field('item_number',  $item_number);
        $this->paypal_lib->add_field('amount',  $amount);
        $this->paypal_lib->image($logo);
        $this->paypal_lib->paypal_auto_form();
  }

}