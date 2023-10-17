<?
defined('BASEPATH') OR exit('No direct script access allowed');

class Plans extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	function  __construct() {
        parent::__construct();
        $this->load->library('paypal_lib');
        $this->load->model('Plan_model');
        if(!isset($this->session->userdata('user')->logged_in) || $this->session->userdata('user')->logged_in !== true) {
        	redirect(base_url().'login');
        }else{
            $curdate=strtotime(date('Y-m-d H:i:s'));
            $plan_end_date = strtotime($this->session->userdata('user')->plan_end_date);

            if($this->session->userdata('user')->subscribed == "y" && $curdate < $plan_end_date){
              redirect(base_url().'User_dashboard');
            }
        }
        //$this->load->model('product');
    }

	public function index()
	{
		$data['page'] = $this->uri->segment(1);
        $data['plans'] = $this->Plan_model->get_all_plans();
		$this->load->template_top_nav('Plans',$data);
	}

	public function subscribe($name){
          //Set variables for paypal form
          $paypalURL = 'https://www.sandbox.paypal.com/cgi-bin/webscr'; //test PayPal api url
          $paypalID = 'inquiries-facilitator@excelplans.com.au'; //business email
          $returnURL = base_url().'paypal/success'; //payment success url
          $cancelURL = base_url().'paypal/cancel'; //payment cancel url		//$cancelURL = base_url().'plans'; //payment cancel url
          $notifyURL = base_url().'paypal/ipn'; //ipn url
          //get particular product data
          //$product = $this->product->getRows($id);
          $plan_detail = $this->Plan_model->get_all_plans();

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
          $userID = isset($this->session->userdata('user')->id) ? $this->session->userdata('user')->id : 1; //current user id
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
