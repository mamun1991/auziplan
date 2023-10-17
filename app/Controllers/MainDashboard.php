<?php
namespace App\Controllers;

class MainDashboard extends BaseController {
	public function index() {
		if (!$this->session->has('user')) {
			$this->session->set('redirect', 'main-dashboard');
			return redirect()->to(site_url() . 'login');
		}
		$this->data['user'] = $this->session->get('user');
		$this->data['cur'] = $this->currency;
		return view('other-layouts/head',$this->data)
        . view('other-layouts/leftbar')
        . view('other-layouts/header')
		. view('main_dashboard/main_dashboard')
		. view('other-layouts/footer');
	}
}
