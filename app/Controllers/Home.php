<?php

namespace App\Controllers;

class Home extends BaseController
{
	public function index()
	{
		$this->data['controller'] = 'home';
		return view('site-layouts/head')
			. view('site-layouts/header', $this->data)
			. view('landing', $this->data)
			. view('site-layouts/footer', $this->data);
	}

	public function logout()
	{
		$this->session->destroy();
		return redirect()->to(site_url());
		exit();
	}
}
