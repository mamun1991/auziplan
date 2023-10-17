<?php

namespace App\Controllers;

class Analysis extends BaseController {
	public function index() {
		if (!$this->session->has('user')) {
            return redirect()->to(site_url() . 'login');
        }

		$user_id = $this->session->get('user')->id;
		$builder = $this->db->table('director');
		$builder->where('user_id', $user_id);
		$query = $builder->get();
		$this->data['dir'] = $query->getResult();
		
		$builder = $this->db->table('investor');
		$builder->where('user_id', $user_id);
		$query = $builder->get();
		$this->data['inv'] = $query->getResult();

		$builder = $this->db->table('bankloan');
		$builder->where('user_id', $user_id);
		$query = $builder->get();
		$this->data['bankloan'] = $query->getResult();

		$builder = $this->db->table('one_time_cost');
		$builder->where('user_id', $user_id);
		$builder->where('one_time_cost', 'Land_Buildings');
		$query = $builder->get();
		$this->data['land'] = $query->getResult();

		$builder = $this->db->table('expenses');
		$builder->where('user_id', $user_id);
		$builder->groupBy('purpose');
		$query = $builder->get();
		$this->data['expenses'] = $query->getResult();
		
		$this->data['user'] = $this->session->get('user');
		$this->data['currency'] = $this->currency;

		$this->data['db'] = $this->db;

		return view('other-layouts/head',$this->data)
			.view('other-layouts/leftbar')
			.view('other-layouts/header')
			.view('analysis', $this->data)
			.view('other-layouts/footer');
	}		
}
