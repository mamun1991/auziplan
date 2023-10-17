<?php

namespace App\Controllers\Print_center;

use App\Controllers\BaseController;
//use App\Models\Print_center\Printcentermodel;


class PrintCenter extends BaseController
{
    /**
     * @var Printer
     */
    //protected $printer;

    public function __construct()
    {
       // $this->printer = new Printcentermodel();
        $session = \Config\Services::session();

		if (!$session->has('user')) {
			return redirect()->to(site_url() . 'login');
		}
    }


    public function index(){

    	$this->data['controller'] = 'print_center';
		//$this->data['t_mission'] = $t_mission;
		$this->data['user'] = $this->session->get('user');
		$this->data['company_detail']['pdfImage'] = "";


		return view('other-layouts/head', $this->data)
			. view('other-layouts/leftbar')
			. view('other-layouts/header')
			. view('print_center/print_center')
			. view('other-layouts/footer');


	}
}

