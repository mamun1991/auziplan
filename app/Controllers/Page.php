<?php

namespace App\Controllers;
use App\Controllers\BaseController;

class Page extends BaseController {
	public function index() {
		echo "<h1>Welcome</h1>";
	}
	public function about()
	{
		return view('site-layouts/head')
		. view('site-layouts/header', $this->data)
		. view('pages/about')
		. view('site-layouts/footer');

	}

	public function gettingstarted()
	{
		return view('site-layouts/head')
		. view('site-layouts/header', $this->data)
		. view('pages/getting_started')
		. view('site-layouts/footer');
	}

	public function pricing()
	{
		return view('site-layouts/head')
		. view('site-layouts/header', $this->data)
		. view('pages/pricing')
		. view('site-layouts/footer');

	}

	public function features()
	{
		return view('site-layouts/head')
		. view('site-layouts/header', $this->data)
		. view('pages/features')
		. view('site-layouts/footer');
		
	}

	public function privacy()
	{
		return view('site-layouts/head')
		. view('site-layouts/header', $this->data)
		. view('pages/privacy')
		. view('site-layouts/footer');
	}

	public function FAQ()
	{
		return view('site-layouts/head')
		. view('site-layouts/header', $this->data)
		. view('pages/faq')
		. view('site-layouts/footer');
	}
}
