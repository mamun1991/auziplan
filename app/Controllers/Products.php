<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Products extends CI_Controller {
    
    function __construct() {

	parent::__construct();
	$this->load->database(); 

	$this->load->model('products_model');
	if (!isset($this->session->userdata('user')->logged_in) || $this->session->userdata('user')->logged_in !== true) {
	    redirect(base_url() . 'login');
	}

	$this->load->model('profile_model');
	
    }

	public function index(){

		$this->load->view('other-layouts/head',$data);
        $this->load->view('other-layouts/leftbar');
        $this->load->view('other-layouts/header');
		$this->load->view('products');
		$this->load->view('other-layouts/footer');
		$this->load->helper('report_helper');

	}

		































	
}
