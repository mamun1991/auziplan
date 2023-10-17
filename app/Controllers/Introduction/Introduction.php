<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Introduction extends CI_Controller {
    
    function __construct() {

	parent::__construct();
	$this->load->database(); 

	$this->load->model('introduction/introduction_model');
	if (!isset($this->session->userdata('user')->logged_in) || $this->session->userdata('user')->logged_in !== true) {
	    redirect(base_url() . 'login');
	}

	$this->load->model('profile_model');
	
    }

	public function index(){

		$this->load->view('other-layouts/head',$data);
        $this->load->view('other-layouts/leftbar');
        $this->load->view('other-layouts/header');
		$this->load->view('introduction/introduction');
		$this->load->view('other-layouts/footer');


	}

		
}
