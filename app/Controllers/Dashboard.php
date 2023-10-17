<?php

namespace App\Controllers;

ob_start();

class Dashboard extends BaseController {

    /**

     * Index Page for this controller.

     *

     * Maps to the following URL

     *        http://example.com/index.php/welcome

     *    - or -

     *        http://example.com/index.php/welcome/index

     *    - or -

     * Since this controller is set as the default controller in

     * config/routes.php, it's displayed at http://example.com/

     *

     * So any other public methods not prefixed with an underscore will

     * map to /index.php/welcome/<method_name>

     * @see https://codeigniter.com/user_guide/general/urls.html

     */
    public function __construct() {

		if (!isset($this->session->userdata('user')->logged_in) || $this->session->userdata('user')->logged_in !== true) {
			redirect(base_url() . 'login');
		} else {
			$curdate = strtotime(date('Y-m-d H:i:s'));

			$plan_end_date = strtotime($this->session->userdata('user')->plan_end_date);

			if (($this->session->userdata('user')->subscribed == "n" || $curdate > $plan_end_date) && $this->session->userdata('user')->type == "u") {
			redirect(base_url() . 'plans');
			}
		}

		$this->load->model('company_setup_model');
		$this->load->library('PdfMyPlan');
		$this->load->library('Graphics');
		$this->load->helper('report_helper');
		$this->load->model('Startup_model');
		// fetch_balanceSheet();
    }

    /* ============================================================================
      Operating Expenses - Starts
      ============================================================================== */

    public function get_operating_expense($user_id) {
	$this->load->model('Expenses_model');
	$expense_summary = $this->Expenses_model->get_expense_summary($user_id);
	$cost_increase_percentage = $this->Expenses_model->get_cost_increase($user_id);
	$total_expenses = $this->Expenses_model->get_total_expense($user_id);
	$row['expense_summary'] = $expense_summary;
	$row['cost_increase_percentage'] = $cost_increase_percentage;
	$row['total'] = $total_expenses[0];
	return $row;
    }

    /* ============================================================================
      Balance Sheet - Starts
      ============================================================================== */

    public function ajax_balance_sheet() {
	// fetch_balanceSheet();
	$user_id = $this->session->userdata('user')->id;
	$query2 = $this->db->query('select *from one_time_cost where user_id="' . $user_id . '" AND one_time_cost = "Security_Deposit"');
	$sql2 = $query2->result();

	if ($query2->num_rows() > 0) {
	    foreach ($sql2 as $sq) {
		$sd_total += $sq->total_cost;
	    }
	} else {
	    $sd_total = 0;
	}
	$query3 = $this->db->query('select *from one_time_cost where user_id="' . $user_id . '" AND one_time_cost = "ONE_TIME_COSTS"');
	$sql3 = $query3->result();
	if ($query3->num_rows() > 0) {
	    foreach ($sql3 as $ot) {
		$ot_total += $ot->total_cost;
	    }
	} else {
	    $ot_total = 0;
	}
	$query4 = $this->db->query('select *from one_time_cost where user_id="' . $user_id . '" AND one_time_cost = "Plant_Equipment"');
	$sql4 = $query4->result();
	if ($query4->num_rows() > 0) {
	    foreach ($sql4 as $pe) {
		$pe_total += $pe->total_cost;
	    }
	} else {
	    $pe_total = 0;
	}
	$query5 = $this->db->query('select *from one_time_cost where user_id="' . $user_id . '" AND one_time_cost = "Land_Buildings"');
	$sql5 = $query5->result();
	if ($query5->num_rows() > 0) {
	    foreach ($sql5 as $lb) {
		$lb_total += $lb->amount_paid;
	    }
	} else {
	    $lb_total = 0;
	}

	$query7 = $this->db->query('select *from one_time_cost where user_id="' . $user_id . '" AND one_time_cost = "Interlectual_Property"');
	$sql7 = $query7->result();
	if ($query7->num_rows() > 0) {
	    foreach ($sql7 as $lp) {
		$lp_total += $lp->total_cost;
	    }
	} else {
	    $lp_total = 0;
	}

	$query6 = $this->db->query('select *from issues_table WHERE user_id="' . $user_id . '"');
	$rowissued = $query6->row();
	//fecth from director
	$this->db->from('director');
	$this->db->where('user_id', $user_id);
	$query = $this->db->get();
	$dir = $query->result();
	foreach ($dir as $d) {
	    $dir_total = $dir_total + $d->amount;
	}
	//fecth from investor
	$this->db->from('investor');
	$this->db->where('user_id', $user_id);
	$query = $this->db->get();
	$inv = $query->result();
	foreach ($inv as $i) {
	    $inv_total = $inv_total + $i->amount;
	}
	$this->balshe['inv_total'] = $inv_total;
	$founder_total = ($rowissued->issues_shared_1 * $rowissued->price_share2_1);
	$balance = $this->db->query('select *from balancesheet_table where user_id="' . $user_id . '"')->row();
	if ($this->db->query('select *from balancesheet_table where user_id="' . $user_id . '"')->num_rows() <= 0) {
	    $balance = new stdClass();
	    $balance->balance_gst_payable = 0;
	    $balance->balance_intellectual_prop = 0;
	    $balance->balance_director_loan = 0;
	    $balance->balance_revaluation_reserve = 0;
	    $balance->balance_accu_profit_loss = 0;
	    $balance->balance_currentyear_profit_loss = 0;
	    $balance->balance_issued_share = 0;
	}
	//$opening_stock_local = $this->db->query('SELECT SUM(oq_1) as total_product_oq FROM localproduct')->row();
	//$opening_stock_imported = $this->db->query('SELECT SUM(oq_1) as total_imported_oq FROM importedproduct')->row();
	for ($y = 0; $y <= 3; $y++) {
	    if ($y == 0) {
		//Section I Current Assets
		$this->balshe['balance_sheet_debtors_0'] = $this->data['yearly_opening_debt_1'];
		//TODO
		$this->balshe['balance_cash_bank_0'] = $this->data['opening_cash'] - $this->data['capitalisation'];
		$this->balshe['balance_deposite_assets_0'] = $sd_total;
		$this->balshe['balance_stock_hand_0'] = $this->data['product_soq_1'] + $this->data['imported_soq_1'];
		$this->balshe['balance_tot_current_assets_0'] = $this->balshe['balance_sheet_debtors_0'] + $this->data['opening_cash'] - $this->data['capitalisation'] +
			$this->balshe['balance_deposite_assets_0'] + $this->balshe['balance_stock_hand_0'];

		//Section II Current Liabilities
		$this->balshe['balance_trade_creditors_0'] = $this->data['yearly_opening_credit_1'];
		$this->db->from('one_time_cost');
		$this->db->where('user_id', $user_id);
		$this->db->where('one_time_cost', 'Land_Buildings');
		$query = $this->db->get();
		$Land = $query->result();
		foreach ($Land as $la) {
		    $la_total = $la_total + $la->total_cost;
		}
		$this->balshe['balance_gst_payable_0'] = - ($la_total + $pe_total + $sd_total + $ot_total + $total_month) * $this->data['company_vat_collected'] / 100;
		$this->balshe['balance_tot_current_libilities_0'] = $this->balshe['balance_trade_creditors_0'] + $this->balshe['balance_gst_payable_0'];

		//Section III Working Capital
		$this->balshe['balance_working_capital_0'] = round($this->balshe['balance_tot_current_assets_0'] - $this->balshe['balance_tot_current_libilities_0']);

		//Section 4 None Current Assets
		$this->balshe['balance_brand_setup_0'] = $ot_total;
		$this->balshe['balance_land_buildings_0'] = $lb_total;
		//$this->balshe['balance_land_buildings_0'] = $balance->balance_land_buildings;
		$this->balshe['balance_intellectual_prop_0'] = $lp_total;
		$this->balshe['balance_prop_equip_0'] = $pe_total;
		$this->balshe['balance_tot_noncurrent_assets_0'] = $this->balshe['balance_brand_setup_0'] + $this->balshe['balance_land_buildings_0'] + $this->balshe['balance_intellectual_prop_0'] + $this->balshe['balance_prop_equip_0'];

		//Section 5 None Current Liabilities
		$this->balshe['balance_director_loan_0'] = $dir_total;
		$this->balshe['balance_long_term_0'] = $this->data['loan_amount'];
		// Removed $this->balshe['balance_director_loan_0'] from below
		$this->balshe['balance_tot_libilities_0'] = $this->balshe['inv_total'] + $this->balshe['balance_long_term_0'];

		//Section 6 Net Assets
		$this->balshe['balance_net_assets_0'] = $this->balshe['balance_working_capital_0'] + $this->balshe['balance_tot_noncurrent_assets_0'] - $this->balshe['balance_tot_libilities_0'];

		//Section 7 Shareholders Equity
		$this->balshe['balance_founder_capital_0'] = $founder_total;
		$this->balshe['balance_revaluation_reserve_0'] = $balance->balance_revaluation_reserve;
		$this->balshe['balance_issued_share_0'] = $balance->balance_issued_share;
		$this->balshe['balance_accu_profit_loss_0'] = $balance->balance_accu_profit_loss;
		$this->balshe['balance_currentyear_profit_loss_0'] = $balance->balance_currentyear_profit_loss;
		// $this->balshe['balance_issued_share_0'] removed from below and added $this->balshe['balance_director_loan_0']
		$this->balshe['balance_tot_equity_0'] = $this->balshe['balance_founder_capital_0'] + $this->balshe['balance_revaluation_reserve_0'] +
			$this->balshe['balance_director_loan_0'] + $this->balshe['balance_accu_profit_loss_0'] + $this->balshe['balance_currentyear_profit_loss_0'];

		//Section 8 Audir Check
		$this->balshe['balance_audits_0'] = (int) $this->balshe['balance_tot_equity_0'] - (int) $this->balshe['balance_net_assets_0'];
		$this->data['closing_debtors_0'] = $this->data['yearly_opening_debt_1'];
		$this->data['closing_creditors_0'] = $this->data['yearly_opening_credit_1'];
	    } else {
		$w = $y - 1;
		$this->data['opening_debtors_' . $y] = $this->data['closing_debtors_' . $w];
		// Added By raza 19sep2020
		($y == 1) ? $this->data['grandgstvat' . $y] = ($this->data['opening_debtors_' . $y] + $this->data['cogimportyear' . $y] + $this->data['local_prodserv_year_' . $y] + $this->data['annual_revenue_yearly' . $y]) * ($this->data['company_vat_collected'] / 100) : $this->data['grandgstvat' . $y] = $this->data['grandgstvat' . $y];
		($y == 1) ? $this->data['yearly_total_income'] = $this->data['cogimportyear' . $y] + $this->data['local_prodserv_year_' . $y] + $this->data['annual_revenue_yearly' . $y] + $this->data['grandgstvat' . $y] : $this->data['yearly_total_income' . $y] = $this->data['grandyear' . $y] + $this->data['grandgstvat' . $y]; //Removing $this->data['grandyear'] and adding $this->data['cogimportyear' . $year]+ $this->data['local_prodserv_year_' . $year]+ $this->data['annual_revenue_yearly' . $year] this sepratly  //Added By Raza 11sep2020
		($y == 1) ? $this->data['yearly_receipt_' . $y] = $this->data['opening_debtors_' . $y] + $this->data['yearly_total_income'] : $this->data['yearly_receipt_' . $y] = $this->data['yearly_total_income' . $y];  //Added By Raza 11sep2020

		$this->balshe['loanpaymentyear_' . $y] = $this->data['loanpaymentyear_' . $y];
		$this->data['less_cash_receipts_' . $y] = $this->data['yearly_receipt_' . $y]; //Added By Raza 11sep2020
		if ($y == 1) {
		    $this->data['closing_debtors_' . $y] = $this->data['opening_debtors_' . $y] + $this->data['invoicing_' . $y] - $this->data['less_cash_receipts_' . $y];
		} else {
		    $this->data['closing_debtors_' . $y] = $this->data['closing_debtors_' . $w] + $this->data['invoicing_' . $y] - $this->data['less_cash_receipts_' . $y];
		}
		$this->data['opening_creditors_' . $y] = $this->data['closing_creditors_' . $w];
		$this->data['less_cash_payments_' . $y] = ($this->data['yealy_disburs_subtotal_' . $y] - $this->data['grandroyaltyyear_' . $y]) + $this->data['grandplyear' . $y]; //added - $this->data['grandroyaltyyear_' . $y] because less cash payment should be without royality fee
		$this->data['purchases_and_expenses_' . $y] = $this->data['total_product_scp' . $y] + $this->data['total_imported_scp' . $y] + $this->data['cogserviceyear' . $y] + $this->data['oeyear' . $y] + $this->data['grandplyear' . $y] + $this->data['annual_cost_yearly' . $y];
		$this->data['closing_creditors_' . $y] = $this->data['opening_creditors_' . $y] +
			$this->data['purchases_and_expenses_' . $y] - $this->data['less_cash_payments_' . $y];
		($y == 1) ? $this->data['grandgstvat' . $y] = $this->data['grandgstvat'] : $this->data['grandgstvat' . $y] = $this->data['grandgstvat' . $y];
		//Section I
		$this->balshe['balance_sheet_debtors_' . $y] = $this->data['closing_debtors_' . $y];
		$this->balshe['balance_cash_bank_' . $y] = $this->data['yearly_closing_cash_' . $y];

		$this->balshe['balance_deposite_assets_' . $y] = $this->balshe['balance_deposite_assets_' . $w];
		$this->balshe['balance_stock_hand_' . $y] = $this->data['total_imported_scq_' . $y] + $this->data['total_product_scq_' . $y];
		$this->balshe['balance_tot_current_assets_' . $y] = $this->balshe['balance_sheet_debtors_' . $y] +
			$this->balshe['balance_cash_bank_' . $y] + $this->balshe['balance_deposite_assets_' . $y] + $this->balshe['balance_stock_hand_' . $y];
		//Section II
		$this->balshe['balance_trade_creditors_' . $y] = $this->data['closing_creditors_' . $y];
		$this->balshe['balance_gst_payable_' . $y] = + ($this->balshe['balance_gst_payable_' . $w] + $this->data['profit_grandgstvat' . $y] - $this->data['yearly_gstvat_collect_' . $y]);
		$this->balshe['balance_tot_current_libilities_' . $y] = $this->balshe['balance_trade_creditors_' . $y] + $this->balshe['balance_gst_payable_' . $y];
		//Section III
		$this->balshe['balance_working_capital_' . $y] = (int) $this->balshe['balance_tot_current_assets_' . $y] - $this->balshe['balance_tot_current_libilities_' . $y];
		//Section 4
		$this->balshe['balance_brand_setup_' . $y] = $this->balshe['balance_brand_setup_' . $w];
		$this->balshe['balance_land_buildings_' . $y] = $this->balshe['balance_land_buildings_' . $w];
		$this->balshe['balance_intellectual_prop_' . $y] = $this->balshe['balance_intellectual_prop_' . $w];
		//$this->balshe['balance_prop_equip_' . $y] = $this->balshe['balance_prop_equip_' . $w] - $this->data['yearly_cp_' . $y]- $this->data['pedyear' . $y] ;
		if ($y > 1) {
		    $this->data['pedyear' . $y] += $this->data['pedyear' . $w];
		}
		$this->balshe['balance_prop_equip_' . $y] = $this->balshe['balance_prop_equip_' . $w] - $this->data['yearly_cp_' . $y];
		$this->balshe['balance_tot_noncurrent_assets_' . $y] = $this->balshe['balance_brand_setup_' . $y] + $this->balshe['balance_land_buildings_' . $y] +
			$this->balshe['balance_intellectual_prop_' . $y] + $this->balshe['balance_prop_equip_' . $y] - $this->data['pedyear' . $y];
		//Section 5

		$this->balshe['balance_director_loan_' . $y] = $this->balshe['balance_director_loan_' . $w];
		$this->balshe['balance_long_term_' . $y] = $this->balshe['balance_long_term_' . $w] - $this->data['loanpaymentyear_' . $y] + $this->data['yearly_interest_' . $y];
		// Removed + $this->balshe['balance_director_loan_' . $y] from below
		$this->balshe['balance_tot_libilities_' . $y] = $this->balshe['inv_total'] + $this->balshe['balance_long_term_' . $y];
		//Section 6
		$this->balshe['balance_net_assets_' . $y] = $this->balshe['balance_working_capital_' . $y] + $this->balshe['balance_tot_noncurrent_assets_' . $y] - $this->balshe['balance_tot_libilities_' . $y];
		//Section 7
		$this->balshe['balance_founder_capital_' . $y] = $this->balshe['balance_founder_capital_' . $w];
		$this->balshe['balance_revaluation_reserve_' . $y] = $this->balshe['balance_revaluation_reserve_' . $w];
		$this->balshe['balance_issued_share_' . $y] = $this->data['yearly_is_' . $y] + $this->balshe['balance_issued_share_' . $w];
		$this->balshe['balance_accu_profit_loss_' . $y] = $this->balshe['balance_accu_profit_loss_' . $w] + $this->data['yearly_dp_' . $y] + $this->balshe['balance_currentyear_profit_loss_' . $w];
		$this->balshe['balance_currentyear_profit_loss_' . $y] = $this->data['netprofityear' . $y];
		// $this->balshe['balance_issued_share_' . $y] remove from below and added  $this->balshe["balance_director_loan_" . $i]
		$this->balshe['balance_tot_equity_' . $y] = $this->balshe['balance_founder_capital_' . $y] +
			$this->balshe['balance_revaluation_reserve_' . $y] + $this->balshe["balance_director_loan_" . $y] + $this->balshe['balance_accu_profit_loss_' . $y] + $this->balshe['balance_currentyear_profit_loss_' . $y];
		//Section 8
		$this->balshe['balance_audits_' . $y] = $this->balshe['balance_tot_equity_' . $y] - $this->balshe['balance_net_assets_' . $y];
		$this->balshe['yearly_dp_' . $y] = $this->data['yearly_dp_' . $y];
		$this->balshe['grandgstvat' . $y] = $this->data['profit_grandgstvat' . $y];
		$this->balshe['yearly_gstvat_collect_' . $y] = $this->data['yearly_gstvat_collect_' . $y];
		$this->balshe['netprofityear' . $y] = $this->data['netprofityear' . $y];
	    }
	}

	$this->balshe['currency'] = $this->data['currency'];
	//echo json_encode($this->balshe);
	return $this->balshe;
    }

    /* ============================================================================
      Company Valuation - Starts
      ============================================================================== */

    public function ajax_company_value() {
	$user_id = $this->session->userdata('user')->id;

	$dir_total = 0;
	$inv_total = 0;

	$query = $this->db->query('select company_tax from general_assumption where user_id="' . $user_id . '"');
	$company_tax = $query->row()->company_tax;

	if ($company_tax === null) {
	    $company_tax = 0;
	}

	$slide = $this->db->query('select *from sensitivity_table where user_id="' . $user_id . '"')->row();
	if ($slide->lower === null) {
	    $slide->lower = 0;
	}
	if ($slide->higher === null) {
	    $slide->higher = 0;
	}

	$comp_cal = $this->db->query('select *from comp_valuation_table where user_id="' . $user_id . '"')->row();

	//--Calculation for Valuation---//

	$query = $this->db->query('select *from director WHERE user_id="' . $user_id . '"');

	$sql = $query->result();

	$query2 = $this->db->query('select *from issues_table WHERE user_id="' . $user_id . '"');

	$row = $query2->row();

	$query3 = $this->db->query('select *from investor WHERE user_id="' . $user_id . '"');

	$row3 = $query3->result();

	if ($query2->num_rows() >= 1) {
	    $this->var['capitalisation_1'] = $row->issues_shared_1 * $row->price_share2_1;
	    $this->var['capital_raised_1'] = $row->issues_shared_1 * $row->price_share2_1;
	    $this->var['issued_share_2'] = $row->issues_shared_1;
	    $this->var['price_share2_2'] = $row->price_share2_1;
	    $this->var['capitalisation_2'] = $this->var['issued_share_2'] * $this->var['price_share2_2'];

	    $this->var['capital_raised_2'] = $row->price_share_3 * $row->share_issue_5;
	    $this->var['issued_share_3'] = $this->var['issued_share_2'] + $row->share_issue_5;
	    $this->var['price_share2_3'] = $row->price_share_3;
	    $this->var['capitalisation_3'] = $this->var['issued_share_3'] * $this->var['price_share2_3'];

	    $this->var['capital_raised_3'] = $row->price_share_4 * $row->share_issue_7;
	    $this->var['issued_share_4'] = $this->var['issued_share_3'] + $row->share_issue_7;
	    $this->var['price_share2_4'] = $row->price_share_4;
	    $this->var['capitalisation_4'] = $this->var['issued_share_4'] * $this->var['price_share2_4'];

	    $this->var['capital_raised_4'] = $row->price_share_5 * $row->share_issue_9;
	    $this->var['issued_share_5'] = $this->var['issued_share_4'] + $row->share_issue_9;
	    $this->var['price_share2_5'] = $row->price_share_5;
	    $this->var['capitalisation_5'] = $this->var['issued_share_5'] * $this->var['price_share2_5'];

	    $this->var['capital_raised_5'] = $row->price_share_6 * $row->share_issue_11;
	    $this->var['issued_share_6'] = $this->var['issued_share_5'] + $row->share_issue_11;
	    $this->var['price_share2_6'] = $row->price_share_6;
	    $this->var['capitalisation_6'] = $this->var['issued_share_6'] * $this->var['price_share2_6'];

	    $this->var['capital_raised_5'] = $row->price_share_7 * $row->share_issue_13;
	    $this->var['issued_share_7'] = $this->var['issued_share_6'] + $row->share_issue_13;
	    $this->var['price_share2_7'] = $row->price_share_7;
	    $this->var['capitalisation_7'] = $this->var['issued_share_7'] * $this->var['price_share2_7'];

	    $this->var['f_round_investor_7'] = $row->share_issue_5;
	    $this->var['s_round_investor_7'] = $row->share_issue_7;
	    $this->var['t_round_investor_7'] = $row->share_issue_9;
	    $this->var['t_float_7'] = $row->share_issue_11;

	    $this->var['valuation_f_round_investor_7'] = $row->share_issue_5 * $this->var['price_share2_7'];
	    $this->var['valuation_s_round_investor_7'] = $row->share_issue_7 * $this->var['price_share2_7'];
	    $this->var['valuation_t_round_investor_7'] = $row->share_issue_9 * $this->var['price_share2_7'];
	    $this->var['valuation_t_float_7'] = $row->share_issue_11 * $this->var['price_share2_7'];

	    if ($query->num_rows() >= 1) {
		for ($z = 0; $z < $query->num_rows(); $z++) {
		    $this->var['director_' . $z] = ($sql[$z]->director == null) ? "Director 1" : $sql[$z]->director;
		    $director = 'director_' . $z . '_1';
		    $this->var['director_' . $z . '_7'] = $row->$director;
		    $this->var['valuation_director_' . $z . '_7'] = $this->var['director_' . $z . '_7'] * $this->var['price_share2_7'];
		    $this->var['total_issued_share_7'] += (int) $this->var['director_' . $z . '_7'];
		    $this->var['total_valuation_7'] += (int) $this->var['valuation_director_' . $z . '_7'];
		}

		$this->var['total_issued_share_7'] += $this->var['f_round_investor_7'] + $this->var['s_round_investor_7'] + $this->var['t_round_investor_7'] + $this->var['t_float_7'];
		$this->var['total_valuation_7'] += $this->var['valuation_f_round_investor_7'] + $this->var['valuation_s_round_investor_7'] + $this->var['valuation_t_round_investor_7'] + $this->var['valuation_t_float_7'];
	    }
	}

	if ($query->num_rows() >= 1) {
	    foreach ($sql as $sql_field) {
		$dir_total += $sql_field->amount;
	    }
	}
	if ($query3->num_rows() >= 1) {
	    foreach ($row3 as $row3_field) {
		$inv_total += $row3_field->amount;
	    }
	}

	//--END Calculation for Valuation---//

	for ($i = 1; $i <= 3; $i++) {
	    $gross_profit = 0;

	    if ($i == 1) {
		$this->compval['comp_val_value_range_' . $i] = 80;

		$gross_profit = ($slide->lower / 100) * $this->data['grandgpyear3'];
	    } elseif ($i == 2) {
		$this->compval['comp_val_value_range_' . $i] = 100;

		$gross_profit = $this->data['grandgpyear3'];
	    } elseif ($i == 3) {
		$this->compval['comp_val_value_range_' . $i] = 120;

		$gross_profit = (($slide->higher / 100) * $this->data['grandgpyear3']) + $this->data['grandgpyear3'];
	    }

	    $tot_expenses = $gross_profit - ($this->data['grandoeyear3'] + $this->data['grandplyear3']);

	    $tax = ($company_tax / 100) * $tot_expenses;

	    $after_tax = $tot_expenses - $tax;

	    $this->compval['comp_val_after_tax_' . $i] = $after_tax;

	    if ($i == 1) {
		$this->var['gross_profit_' . $i] = 0;

		$this->var['gross_profit_' . $i] = ($slide->lower / 100) * $this->data['grandgpyear3'];

		$this->var['tot_expenses_' . $i] = $this->var['gross_profit_' . $i] - ($this->data['grandoeyear3'] + $this->data['grandplyear3']);

		$tax = ($company_tax / 100) * $this->var['tot_expenses_' . $i];

		$this->var['after_tax_' . $i] = $this->var['tot_expenses_' . $i] - $tax;
	    } elseif ($i == 2) {
		$this->var['gross_profit_' . $i] = 0;

		$this->var['gross_profit_' . $i] = $this->data['grandgpyear3'];

		$this->var['tot_expenses_' . $i] = $this->var['gross_profit_' . $i] - ($this->data['grandoeyear3'] + $this->data['grandplyear3']);

		$tax = ($company_tax / 100) * $this->var['tot_expenses_' . $i];

		$this->var['after_tax_' . $i] = $this->var['tot_expenses_' . $i] - $tax;
	    } else {
		$this->var['gross_profit_' . $i] = 0;

		$this->var['gross_profit_' . $i] = (($slide->higher / 100) * $this->data['grandgpyear3']) + $this->data['grandgpyear3'];

		$this->var['tot_expenses_' . $i] = $this->var['gross_profit_' . $i] - ($this->data['grandoeyear3'] + $this->data['grandplyear3']);

		$tax = ($company_tax / 100) * $this->var['tot_expenses_' . $i];
		$this->var['after_tax_' . $i] = $this->var['tot_expenses_' . $i] - $tax;
	    }
	    $this->compval['comp_val_price_earn_' . $i] = ($this->var['after_tax_' . $i] == 0) ? 0 : $this->var['total_valuation_7'] / $this->var['after_tax_' . $i];

	    $this->compval['comp_val_gross_value_' . $i] = $this->compval['comp_val_price_earn_' . $i] * $after_tax;

	    $this->compval['comp_val_risk_discount3_' . $i] = $comp_cal->slide_2;

	    $this->compval['comp_val_net_present2_' . $i] = $this->npv($this->compval['comp_val_risk_discount3_' . $i] / 100, array($this->compval['comp_val_gross_value_' . $i]));

	    $this->compval['comp_val_risk_discount2_' . $i] = $comp_cal->slide_2;

	    $this->compval['comp_val_net_present1_' . $i] = $this->npv($this->compval['comp_val_risk_discount2_' . $i] / 100, array($this->compval['comp_val_net_present2_' . $i]));

	    $this->compval['comp_val_risk_discount1_' . $i] = $comp_cal->slide_2;

	    $this->compval['comp_val_net_present0_' . $i] = $this->npv($this->compval['comp_val_risk_discount1_' . $i] / 100, array($this->compval['comp_val_net_present1_' . $i]));

	    $comp_val = 'comp_val_investment_' . $i;

	    $this->compval['comp_val_investment_' . $i] = $comp_cal->$comp_val + $dir_total + $inv_total;

	    $this->compval['comp_val_equity_percentage_' . $i] = ($this->compval['comp_val_net_present0_' . $i] == 0) ? 0 : $this->compval['comp_val_investment_' . $i] / $this->compval['comp_val_net_present0_' . $i];
	}
	$this->compval['currency'] = $this->data['currency'];

	return $this->compval;
    }

    /* ============================================================================
      Import Products - Starts
      ============================================================================== */

    public function ajax_calculating_summary_imp_product() {
	$user_id = $this->session->userdata('user')->id;

	$this->db->select('SUM(oq_1) as total_oq_1,SUM(sp_1) as total_sp_1, SUM(sp_2) as total_sp_2,  SUM(sp_3) as total_sp_3, SUM(sp_4) as total_sp_4, SUM(sp_5) as total_sp_5, SUM(sp_6) as total_sp_6, SUM(sp_7) as total_sp_7, SUM(sp_8) as total_sp_8, SUM(sp_9) as total_sp_9, SUM(sp_10) as total_sp_10, SUM(sp_11) as total_sp_11, SUM(sp_12) as total_sp_12, SUM(p_1) as total_p_1, SUM(p_2) as total_p_2, SUM(p_3) as total_p_3,SUM(p_4) as total_p_4, SUM(p_5) as total_p_5, SUM(p_6) as total_p_6, SUM(p_7) as total_p_7,SUM(p_8) as total_p_8,SUM(p_9) as total_p_9,SUM(p_10) as total_p_10,SUM(p_11) as total_p_11, SUM(p_12) as total_p_12');

	$this->db->where('user_id', $user_id);
	$product = $this->db->get('importedproduct')->result();

	$user_id = $this->session->userdata('user')->id;
	// Currency
	$query = $this->db->query('select *from company_detail where user_id="' . $user_id . '"');
	$currency = $query->row()->currency;
	$month = $query->row()->financial_year;

	$query = $this->db->query('select imported_sales_income_increase from general_assumption where user_id="' . $user_id . '"');
	$sales_increase = $query->row()->imported_sales_income_increase;

	if ($sales_increase === null) {
	    $sales_increase = 0;
	}

	$cur = '';

	if ($currency == "AUD" || $currency == "USD") {
	    $cur = "$";
	} elseif ($currency == "EUR") {
	    $cur = "€";
	} elseif ($currency == "UK") {
	    $cur = "£";
	} elseif ($currency == "INR") {
	    $cur = "₹";
	}


	$grand_total_sp = 0;
	$grand_total_p = 0;
	$row = array();

	$row["total_oq_1"] = $product[0]->total_oq_1;
	$row["total_sp_1"] = $product[0]->total_sp_1;
	$row["total_sp_2"] = $product[0]->total_sp_2;
	$row["total_sp_3"] = $product[0]->total_sp_3;
	$row["total_sp_4"] = $product[0]->total_sp_4;
	$row["total_sp_5"] = $product[0]->total_sp_5;
	$row["total_sp_6"] = $product[0]->total_sp_6;
	$row["total_sp_7"] = $product[0]->total_sp_7;
	$row["total_sp_8"] = $product[0]->total_sp_8;
	$row["total_sp_9"] = $product[0]->total_sp_9;
	$row["total_sp_10"] = $product[0]->total_sp_10;
	$row["total_sp_11"] = $product[0]->total_sp_11;
	$row["total_sp_12"] = $product[0]->total_sp_12;

	for ($i = 1; $i <= 12; $i++) {
	    $str = 'total_sp_' . $i;
	    $grand_total_sp += $product[0]->$str;
	}

	$row["total_p_1"] = $product[0]->total_p_1;
	$row["total_p_2"] = $product[0]->total_p_2;
	$row["total_p_3"] = $product[0]->total_p_3;
	$row["total_p_4"] = $product[0]->total_p_4;
	$row["total_p_5"] = $product[0]->total_p_5;
	$row["total_p_6"] = $product[0]->total_p_6;
	$row["total_p_7"] = $product[0]->total_p_7;
	$row["total_p_8"] = $product[0]->total_p_8;
	$row["total_p_9"] = $product[0]->total_p_9;
	$row["total_p_10"] = $product[0]->total_p_10;
	$row["total_p_11"] = $product[0]->total_p_11;
	$row["total_p_12"] = $product[0]->total_p_12;

	for ($j = 1; $j <= 12; $j++) {
	    $str = 'total_p_' . $j;
	    $grand_total_p += $product[0]->$str;
	}

	$row["total_sp_13"] = $grand_total_sp;

	$row['total_sp_14'] = (($sales_increase / 100) * $row["total_sp_13"]) + $row["total_sp_13"];
	$row['total_sp_15'] = (($sales_increase / 100) * $row["total_sp_14"]) + $row["total_sp_14"];

	$row["total_p_13"] = $grand_total_p;

	$row['total_p_14'] = (($sales_increase / 100) * $row["total_p_13"]) + $row["total_p_13"];
	$row['total_p_15'] = (($sales_increase / 100) * $row["total_p_14"]) + $row["total_p_14"];

	//$row['total_oq_1'] = $row["total_oq_1"];
	$grand_total_cq = 0;
	$grand_total_oq = 0;
	for ($l = 1; $l <= 12; $l++) {
	    if ($l > 1) {
		$m = $l - 1;
		$row['total_oq_' . $l] = $row['total_cq_' . $m];
		$grand_total_oq += $row['total_oq_' . $l];
	    }
	    $row['total_cq_' . $l] = $row['total_oq_' . $l] + $row['total_p_' . $l] - $row['total_sp_' . $l];
	}

	$row['total_oq_13'] = $row['total_oq_1'];

	$grand_total_cq = $row['total_oq_13'] + $row['total_p_13'] - $row['total_sp_13'];

	$row['total_cq_13'] = $grand_total_cq;

	$row['total_oq_14'] = $row['total_cq_13'];

	$row['total_cq_14'] = ($row['total_oq_14'] + $row['total_p_14']) - $row['total_sp_14'];

	$row['total_oq_15'] = $row['total_cq_14'];
	$row['total_cq_15'] = ($row['total_oq_15'] + $row['total_p_15']) - $row['total_sp_15'];

	$this->db->where('user_id', $user_id);
	$list = $this->db->get('importedproduct')->result();

	$query = $this->db->where('user_id', $user_id)
		->get('importedproduct');

	$countimportproduct = $query->num_rows();

	if ($countimportproduct <= 0) {
	    $row["total_oq_1"] = 0;
	    $row["total_sp_1"] = 0;
	    $row["total_sp_2"] = 0;
	    $row["total_sp_3"] = 0;
	    $row["total_sp_4"] = 0;
	    $row["total_sp_5"] = 0;
	    $row["total_sp_6"] = 0;
	    $row["total_sp_7"] = 0;
	    $row["total_sp_8"] = 0;
	    $row["total_sp_9"] = 0;
	    $row["total_sp_10"] = 0;
	    $row["total_sp_11"] = 0;
	    $row["total_sp_12"] = 0;

	    for ($i = 1; $i <= 12; $i++) {
		$str = 'total_sp_' . $i;
		$grand_total_sp += $product[0]->$str;
	    }

	    $row["total_p_1"] = 0;
	    $row["total_p_2"] = 0;
	    $row["total_p_3"] = 0;
	    $row["total_p_4"] = 0;
	    $row["total_p_5"] = 0;
	    $row["total_p_6"] = 0;
	    $row["total_p_7"] = 0;
	    $row["total_p_8"] = 0;
	    $row["total_p_9"] = 0;
	    $row["total_p_10"] = 0;
	    $row["total_p_11"] = 0;
	    $row["total_p_12"] = 0;

	    for ($j = 1; $j <= 12; $j++) {
		$str = 'total_p_' . $j;
		$grand_total_p += $product[0]->$str;
	    }

	    $row['total_soq_1'] = 0;

	    for ($k = 1; $k <= 12; $k++) {
		if ($k > 1) {
		    $n = $k - 1;
		    $row['total_soq_' . $k] = (int) $row['total_scq_' . $n];

		    $grand_total_soq += $row['total_scq_' . $n];
		}
		$sp = 'sp_' . $k;
		$row['total_ssp_' . $k] = 0;
		$grand_total_ssp = 0;

		$p = 'p_' . $k;
		$row['total_scp_' . $k] = 0;
		$grand_total_scp = 0;

		$row['total_scq_' . $k] = 0;
		$grand_total_scq = 0;

		$row['total_spp_' . $k] = 0;
		$grand_total_spp = 0;

		$row['total_pp_' . $k] = 0;
		$grand_total_pp = 0;

		$row['total_pg_' . $k] = 0;
		$grand_total_pg = 0;
	    }

	    $row['total_soq_13'] = $row['total_soq_1'];
	    $row['total_ssp_13'] = $grand_total_ssp;
	    $row['total_scp_13'] = $grand_total_scp;
	    $row['total_scq_13'] = $row['total_soq_1'] + $grand_total_scp - $grand_total_ssp;

	    $row['total_ssp_14'] = 0;
	    $row['total_ssp_15'] = 0;

	    $row['total_scp_14'] = 0;
	    $row['total_scp_15'] = 0;

	    $row['total_soq_14'] = $row['total_scq_13'];

	    $row['total_scq_14'] = $row['total_soq_14'] + $row['total_scp_14'] - $row['total_ssp_14'];
	    $row['total_scq_15'] = $row['total_soq_15'] + $row['total_scp_15'] - $row['total_ssp_15'];

	    $row['total_soq_15'] = $row['total_scq_14'];

	    $row['total_spp_13'] = $grand_total_spp;
	    $row['total_pp_13'] = $grand_total_pp;
	    $row['total_pg_13'] = $grand_total_pg;

	    $row['total_spp_14'] = 0;
	    $row['total_spp_15'] = 0;

	    $row['total_pp_14'] = 0;
	    $row['total_pp_15'] = 0;

	    $row['total_pg_14'] = $grand_total_pg;
	    $row['total_pg_15'] = $grand_total_pg;

	    $average_whosale_price = 0;

	    $average_unit_cost = 0;

	    $average_gross_cost = 0;

	    $percentage_on_cost = 0;

	    $row['average_whosale_price'] = $average_whosale_price;
	    $row['average_unit_cost'] = $average_unit_cost;
	    $row['average_gross_cost'] = $average_gross_cost;
	    $row['percentage_on_cost'] = $percentage_on_cost;
	} else {
	    foreach ($list as $product) {
		$landed_cost = 0;
		$total_unit_cost = 0;
		$rrp = 0;
		$import_cost = 0;

		$landed_cost = $product->ExchangeRate * $product->UnitCost;

		$import_cost += bcdiv($product->import_duty / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->comp_fee / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->cargo_auto / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->custom_clearance_fee / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->aqis_fee / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->dec_processing_fee / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->delivery_order / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->lcl_transport_fee / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->port_service_fee / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->transport_fues_fee / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->insurance_fee / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->misc_fee / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->other_fee_1 / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->other_fee_2 / 100 * $landed_cost, 1, 2);
		$import_cost += bcdiv($product->other_fee_3 / 100 * $landed_cost, 1, 2);

		$total_unit_cost = $import_cost + $landed_cost;

		$rrp = (($total_unit_cost * $product->MarkUpOnCost / 100) + $total_unit_cost);

		$row['total_soq_1'] = $row["total_oq_1"] * $total_unit_cost;

		for ($k = 1; $k <= 12; $k++) {
		    if ($k > 1) {
			$n = $k - 1;
			$row['total_soq_' . $k] = (int) $row['total_scq_' . $n];

			$grand_total_soq += $row['total_scq_' . $n];
		    }
		    $sp = 'sp_' . $k;
		    $row['total_ssp_' . $k] += $total_unit_cost * $product->$sp;
		    $grand_total_ssp += $total_unit_cost * $product->$sp;

		    $p = 'p_' . $k;
		    $row['total_scp_' . $k] += $total_unit_cost * $product->$p;
		    $grand_total_scp += $total_unit_cost * $product->$p;

		    $row['total_scq_' . $k] = $row['total_soq_' . $k] + $row['total_scp_' . $k] - $row['total_ssp_' . $k];
		    $grand_total_scq += $row['total_soq_' . $k] + $row['total_scp_' . $k] - $row['total_ssp_' . $k];

		    $row['total_spp_' . $k] += $product->$sp * $rrp;
		    $grand_total_spp += $product->$sp * $rrp;

		    $row['total_pp_' . $k] += $product->$sp * $total_unit_cost;
		    $grand_total_pp += $product->$sp * $total_unit_cost;

		    $row['total_pg_' . $k] += ($product->$sp * $rrp) - ($product->$sp * $total_unit_cost);
		    $grand_total_pg += ($product->$sp * $rrp) - ($product->$sp * $total_unit_cost);
		}
	    }

	    $row['total_soq_13'] = $row['total_soq_1'];
	    $row['total_ssp_13'] = $grand_total_ssp;
	    $row['total_scp_13'] = $grand_total_scp;
	    $row['total_scq_13'] = $row['total_soq_1'] + $grand_total_scp - $grand_total_ssp;

	    $row['total_ssp_14'] = $row['total_sp_14'] * $total_unit_cost;
	    $row['total_ssp_15'] = $row['total_sp_15'] * $total_unit_cost;

	    $row['total_scp_14'] = $row['total_p_14'] * $total_unit_cost;
	    $row['total_scp_15'] = $row['total_p_15'] * $total_unit_cost;

	    $row['total_soq_14'] = $row['total_scq_13'];

	    $row['total_scq_14'] = $row['total_soq_14'] + $row['total_scp_14'] - $row['total_ssp_14'];

	    $row['total_soq_15'] = $row['total_scq_14'];

	    $row['total_scq_15'] = $row['total_soq_15'] + $row['total_scp_15'] - $row['total_ssp_15'];

	    $row['total_spp_13'] = $grand_total_spp;
	    $row['total_pp_13'] = $grand_total_pp;
	    $row['total_pg_13'] = $grand_total_pg;

	    $row['total_spp_14'] = $rrp * $row['total_sp_14'];
	    $row['total_spp_15'] = $rrp * $row['total_sp_15'];

	    $row['total_pp_14'] = $total_unit_cost * $row['total_sp_14'];
	    $row['total_pp_15'] = $total_unit_cost * $row['total_sp_15'];

	    $row['total_pg_14'] = $row['total_spp_14'] - $row['total_pp_14'];
	    $row['total_pg_15'] = $row['total_spp_15'] - $row['total_pp_15'];

	    $average_whosale_price = 0;
	    $average_whosale_price = ($grand_total_sp == 0) ? 0 : $grand_total_spp / $grand_total_sp;

	    $average_unit_cost = 0;
	    $average_unit_cost = ($grand_total_sp == 0) ? 0 : $grand_total_pp / $grand_total_sp;

	    $average_gross_cost = 0;
	    $average_gross_cost = $average_whosale_price - $average_unit_cost;

	    $percentage_on_cost = 0;
	    $percentage_on_cost = ($average_whosale_price == 0) ? 0 : $average_gross_cost / $average_whosale_price;

	    $row['average_whosale_price'] = $average_whosale_price;
	    $row['average_unit_cost'] = $average_unit_cost;
	    $row['average_gross_cost'] = $average_gross_cost;
	    $row['percentage_on_cost'] = $percentage_on_cost;
	}

	$row['cur'] = $cur;
	$row['table_header'] = get_table_header($month);

	return $row;
    }

    /* ============================================================================
      Summary Products - Starts
      ============================================================================== */

    public function ajax_calculating_summary_product() {
	$this->load->model('Product_model', 'product');

	$user_id = $this->session->userdata('user')->id;

	$this->db->select('SUM(oq_1) as total_oq_1, SUM(sp_1) as total_sp_1, SUM(sp_2) as total_sp_2,  SUM(sp_3) as total_sp_3, SUM(sp_4) as total_sp_4, SUM(sp_5) as total_sp_5, SUM(sp_6) as total_sp_6, SUM(sp_7) as total_sp_7, SUM(sp_8) as total_sp_8, SUM(sp_9) as total_sp_9, SUM(sp_10) as total_sp_10, SUM(sp_11) as total_sp_11, SUM(sp_12) as total_sp_12, SUM(p_1) as total_p_1, SUM(p_2) as total_p_2, SUM(p_3) as total_p_3,SUM(p_4) as total_p_4, SUM(p_5) as total_p_5, SUM(p_6) as total_p_6, SUM(p_7) as total_p_7,SUM(p_8) as total_p_8,SUM(p_9) as total_p_9,SUM(p_10) as total_p_10,SUM(p_11) as total_p_11, SUM(p_12) as total_p_12');
	$this->db->where('user_id', $user_id);
	$product = $this->db->get('localproduct')->result();

	// Currency
	$query = $this->db->query('select *from company_detail where user_id="' . $user_id . '"');
	$currency = $query->row()->currency;
	$month = $query->row()->financial_year;

	$query = $this->db->query('select sales_income_increase from general_assumption where user_id="' . $user_id . '"');
	$sales_increase = $query->row()->sales_income_increase;

	if ($sales_increase === null) {
	    $sales_increase = 0;
	}

	$cur = '';

	if ($currency == "AUD" || $currency == "USD") {
	    $cur = "$";
	} elseif ($currency == "EUR") {
	    $cur = "€";
	} elseif ($currency == "UK") {
	    $cur = "£";
	} elseif ($currency == "INR") {
	    $cur = "₹";
	}

	$data = array();
	$grand_total_sp = 0;
	$grand_total_p = 0;
	$row = array();

	$row["total_oq_1"] = $product[0]->total_oq_1;
	$row["total_sp_1"] = $product[0]->total_sp_1;
	$row["total_sp_2"] = $product[0]->total_sp_2;
	$row["total_sp_3"] = $product[0]->total_sp_3;
	$row["total_sp_4"] = $product[0]->total_sp_4;
	$row["total_sp_5"] = $product[0]->total_sp_5;
	$row["total_sp_6"] = $product[0]->total_sp_6;
	$row["total_sp_7"] = $product[0]->total_sp_7;
	$row["total_sp_8"] = $product[0]->total_sp_8;
	$row["total_sp_9"] = $product[0]->total_sp_9;
	$row["total_sp_10"] = $product[0]->total_sp_10;
	$row["total_sp_11"] = $product[0]->total_sp_11;
	$row["total_sp_12"] = $product[0]->total_sp_12;

	for ($i = 1; $i <= 12; $i++) {
	    $str = 'total_sp_' . $i;
	    $grand_total_sp += $product[0]->$str;
	}

	$row["total_p_1"] = $product[0]->total_p_1;
	$row["total_p_2"] = $product[0]->total_p_2;
	$row["total_p_3"] = $product[0]->total_p_3;
	$row["total_p_4"] = $product[0]->total_p_4;
	$row["total_p_5"] = $product[0]->total_p_5;
	$row["total_p_6"] = $product[0]->total_p_6;
	$row["total_p_7"] = $product[0]->total_p_7;
	$row["total_p_8"] = $product[0]->total_p_8;
	$row["total_p_9"] = $product[0]->total_p_9;
	$row["total_p_10"] = $product[0]->total_p_10;
	$row["total_p_11"] = $product[0]->total_p_11;
	$row["total_p_12"] = $product[0]->total_p_12;

	for ($j = 1; $j <= 12; $j++) {
	    $str = 'total_p_' . $j;
	    $grand_total_p += $product[0]->$str;
	}

	$row["total_sp_13"] = $grand_total_sp;

	$row['total_sp_14'] = (($sales_increase / 100) * $row["total_sp_13"]) + $row["total_sp_13"];
	$row['total_sp_15'] = (($sales_increase / 100) * $row["total_sp_14"]) + $row["total_sp_14"];

	$row["total_p_13"] = $grand_total_p;

	$row['total_p_14'] = (($sales_increase / 100) * $row["total_p_13"]) + $row["total_p_13"];
	$row['total_p_15'] = (($sales_increase / 100) * $row["total_p_14"]) + $row["total_p_14"];

	//$row['total_oq_1'] = 0;
	$grand_total_cq = 0;
	$grand_total_oq = 0;
	for ($l = 1; $l <= 12; $l++) {
	    if ($l > 1) {
		$m = $l - 1;
		$row['total_oq_' . $l] = $row['total_cq_' . $m];
		$grand_total_oq += $row['total_oq_' . $l];
	    }

	    $row['total_cq_' . $l] = $row['total_oq_' . $l] + $row['total_p_' . $l] - $row['total_sp_' . $l];
	}

	$row['total_oq_13'] = $row['total_oq_1'];

	$grand_total_cq = $row['total_oq_13'] + $row['total_p_13'] - $row['total_sp_13'];

	$row['total_cq_13'] = $grand_total_cq;

	$row['total_oq_14'] = $row['total_cq_13'];

	$row['total_cq_14'] = ($row['total_oq_14'] + $row['total_p_14']) - $row['total_sp_14'];

	$row['total_oq_15'] = $row['total_cq_14'];
	$row['total_cq_15'] = ($row['total_oq_15'] + $row['total_p_15']) - $row['total_sp_15'];
	$this->db->where('user_id', $user_id);
	$list = $this->db->get('localproduct')->result();

	if ($this->product->count_by_user($user_id) <= 0) {
	    $row["total_sp_1"] = 0;
	    $row["total_sp_2"] = 0;
	    $row["total_sp_3"] = 0;
	    $row["total_sp_4"] = 0;
	    $row["total_sp_5"] = 0;
	    $row["total_sp_6"] = 0;
	    $row["total_sp_7"] = 0;
	    $row["total_sp_8"] = 0;
	    $row["total_sp_9"] = 0;
	    $row["total_sp_10"] = 0;
	    $row["total_sp_11"] = 0;
	    $row["total_sp_12"] = 0;

	    for ($i = 1; $i <= 12; $i++) {
		$str = 'total_sp_' . $i;
		$grand_total_sp += $product[0]->$str;
	    }

	    $row["total_p_1"] = 0;
	    $row["total_p_2"] = 0;
	    $row["total_p_3"] = 0;
	    $row["total_p_4"] = 0;
	    $row["total_p_5"] = 0;
	    $row["total_p_6"] = 0;
	    $row["total_p_7"] = 0;
	    $row["total_p_8"] = 0;
	    $row["total_p_9"] = 0;
	    $row["total_p_10"] = 0;
	    $row["total_p_11"] = 0;
	    $row["total_p_12"] = 0;

	    for ($j = 1; $j <= 12; $j++) {
		$str = 'total_p_' . $j;
		$grand_total_p += $product[0]->$str;
	    }

	    $row['total_soq_1'] = 0;

	    for ($k = 1; $k <= 12; $k++) {
		if ($k > 1) {
		    $n = $k - 1;
		    $row['total_soq_' . $k] = (int) $row['total_scq_' . $n];

		    $grand_total_soq += $row['total_scq_' . $n];
		}
		$sp = 'sp_' . $k;
		$row['total_ssp_' . $k] = 0;
		$grand_total_ssp = 0;

		$p = 'p_' . $k;
		$row['total_scp_' . $k] = 0;
		$grand_total_scp = 0;

		$row['total_scq_' . $k] = 0;
		$grand_total_scq = 0;

		$row['total_spp_' . $k] = 0;
		$grand_total_spp = 0;

		$row['total_pp_' . $k] = 0;
		$grand_total_pp = 0;

		$row['total_pg_' . $k] = 0;
		$grand_total_pg = 0;
	    }

	    $row['total_soq_13'] = $row['total_soq_1'];
	    $row['total_ssp_13'] = $grand_total_ssp;
	    $row['total_scp_13'] = $grand_total_scp;
	    $row['total_scq_13'] = $row['total_soq_1'] + $grand_total_scp - $grand_total_ssp;

	    $row['total_ssp_14'] = 0;
	    $row['total_ssp_15'] = 0;

	    $row['total_scp_14'] = 0;
	    $row['total_scp_15'] = 0;

	    $row['total_soq_14'] = $row['total_scq_13'];

	    $row['total_scq_14'] = $row['total_soq_14'] + $row['total_scp_14'] - $row['total_ssp_14'];
	    $row['total_scq_15'] = $row['total_soq_15'] + $row['total_scp_15'] - $row['total_ssp_15'];

	    $row['total_soq_15'] = $row['total_scq_14'];

	    $row['total_spp_13'] = $grand_total_spp;
	    $row['total_pp_13'] = $grand_total_pp;
	    $row['total_pg_13'] = $grand_total_pg;

	    $row['total_spp_14'] = 0;
	    $row['total_spp_15'] = 0;

	    $row['total_pp_14'] = 0;
	    $row['total_pp_15'] = 0;

	    $row['total_pg_14'] = $grand_total_pg;
	    $row['total_pg_15'] = $grand_total_pg;

	    $average_whosale_price = 0;

	    $average_unit_cost = 0;

	    $average_gross_cost = 0;

	    $percentage_on_cost = 0;

	    $row['average_whosale_price'] = $average_whosale_price;
	    $row['average_unit_cost'] = $average_unit_cost;
	    $row['average_gross_cost'] = $average_gross_cost;
	    $row['percentage_on_cost'] = $percentage_on_cost;
	} else {
	    foreach ($list as $product) {
		$rrp = 0;
		$product_cost = 0;
		$grand_product_cost = 0;
		$grand_rrp = 0;
		$totalprice = 0;
		$totalavecost = 0;

		$query = $this->db->where(array('localproduct_id' => $product->id));
		$boms = $this->db->get('localproduct_bom')->result();
		foreach ($boms as $bom) {
		    if ($product->monthly_qty != 0) {
			$yearly_qty = $product->monthly_qty * 12;
		    } else {
			for ($i = 1; $i <= 12; $i++) {
			    $sp = 'sp_' . $i;
			    $yearly_qty += $product->$sp;
			}
		    }
		    $mts = ($yearly_qty) * $bom->qty;

		    $price = $mts * $bom->price;

		    $vat = $price * 0.1;

		    $cost = $price + $vat;

		    $ave_cost = $cost / ($yearly_qty);

		    $totalprice += $price;

		    $totalavecost += round($ave_cost, 2);
		}

		$product_cost = $product->UnitCost + $totalavecost;
		$rrp = ($product_cost * $product->MarkUpOnCost / 100) + $product_cost;

		$row['total_soq_1'] = $row["total_oq_1"] * $product->UnitCost;

		for ($k = 1; $k <= 12; $k++) {
		    if ($k > 1) {
			$n = $k - 1;
			$row['total_soq_' . $k] = (int) $row['total_scq_' . $n];

			$grand_total_soq += $row['total_scq_' . $n];
		    }
		    $sp = 'sp_' . $k;
		    $row['total_ssp_' . $k] += $product_cost * $product->$sp;
		    $grand_total_ssp += $product_cost * $product->$sp;

		    $p = 'p_' . $k;
		    $row['total_scp_' . $k] += $product_cost * $product->$p;
		    $grand_total_scp += $product_cost * $product->$p;

		    $row['total_scq_' . $k] = $row['total_soq_' . $k] + $row['total_scp_' . $k] - $row['total_ssp_' . $k];
		    $grand_total_scq += $row['total_soq_' . $k] + $row['total_scp_' . $k] - $row['total_ssp_' . $k];

		    $row['total_spp_' . $k] += $product->$sp * $rrp;
		    $grand_total_spp += $product->$sp * $rrp;

		    $row['total_pp_' . $k] += $product->$sp * $product_cost;
		    $grand_total_pp += $product->$sp * $product_cost;

		    $row['total_pg_' . $k] += ($product->$sp * $rrp) - ($product->$sp * $product_cost);
		    $grand_total_pg += ($product->$sp * $rrp) - ($product->$sp * $product_cost);
		}

		//$grand_product_cost += round($product_cost,2);
		//$grand_rrp += round($rrp,2);
	    }

	    $row['total_soq_13'] = $row['total_soq_1'];
	    $row['total_ssp_13'] = $grand_total_ssp;
	    $row['total_scp_13'] = $grand_total_scp;
	    $row['total_scq_13'] = $row['total_soq_1'] + $grand_total_scp - $grand_total_ssp;

	    $row['total_ssp_14'] = $row['total_sp_14'] * $product_cost;
	    $row['total_ssp_15'] = $row['total_sp_15'] * $product_cost;

	    $row['total_scp_14'] = $row['total_p_14'] * $product_cost;
	    $row['total_scp_15'] = $row['total_p_15'] * $product_cost;

	    $row['total_soq_14'] = $row['total_scq_13'];

	    $row['total_scq_14'] = $row['total_soq_14'] + $row['total_scp_14'] - $row['total_ssp_14'];

	    $row['total_soq_15'] = $row['total_scq_14'];

	    $row['total_scq_15'] = $row['total_soq_15'] + $row['total_scp_15'] - $row['total_ssp_15'];

	    $row['total_spp_13'] = $grand_total_spp;
	    $row['total_pp_13'] = $grand_total_pp;
	    $row['total_pg_13'] = $grand_total_pg;

	    $row['total_spp_14'] = $rrp * $row['total_sp_14'];
	    $row['total_spp_15'] = $rrp * $row['total_sp_15'];

	    $row['total_pp_14'] = $product_cost * $row['total_sp_14'];
	    $row['total_pp_15'] = $product_cost * $row['total_sp_15'];

	    $row['total_pg_14'] = $row['total_spp_14'] - $row['total_pp_14'];
	    $row['total_pg_15'] = $row['total_spp_15'] - $row['total_pp_15'];

	    $average_whosale_price = 0;
	    $average_whosale_price = ($grand_total_sp == 0) ? 0 : $grand_total_spp / $grand_total_sp;

	    $average_unit_cost = 0;
	    $average_unit_cost = ($grand_total_sp == 0) ? 0 : $grand_total_pp / $grand_total_sp;

	    $average_gross_cost = 0;
	    $average_gross_cost = $average_whosale_price - $average_unit_cost;

	    $percentage_on_cost = 0;
	    $percentage_on_cost = ($average_whosale_price == 0) ? 0 : $average_gross_cost / $average_whosale_price;

	    $row['average_whosale_price'] = $average_whosale_price;
	    $row['average_unit_cost'] = $average_unit_cost;
	    $row['average_gross_cost'] = $average_gross_cost;
	    $row['percentage_on_cost'] = $percentage_on_cost;
	}
	$row['cur'] = $cur;
	$row['table_header'] = get_table_header($month);
	//output to json format
	//print_r('<pre>');
	//print_r($row);
	//print_r('</pre>');

	return $row;
    }

    public function ajax_cash_flow_report() {
	$this->data = $this->data + cash_flow_report();

	return $this->data;
    }

    /* ============================================================================
      Yearly Cashflow  - Starts
      ============================================================================== */

    public function ajax_yearly_cash_flow_report() {
	$user_id = $this->session->userdata('user')->id;

	$this->load->model('Company_setup_model');
	$company_detail = $this->Company_setup_model->get_company_detail();

	$query = $this->db->query('select opening_debit_balance,opening_credit_balance,opening_bank_balance,vat_paid_in_days,pybl_in_days,rsvbl_in_days,company_vat, company_vat_collected from general_assumption where user_id="' . $user_id . '" AND company_id="' . $company_detail['id'] . '"');

	$opening_bank = $query->row()->opening_bank_balance;
	$company_vat = $query->row()->company_vat;
	$company_vat_collected = $query->row()->company_vat_collected;
	$opening_debt = $query->row()->opening_debit_balance;
	$rsvbl_in_days = $query->row()->rsvbl_in_days;
	$opening_credit = $query->row()->opening_credit_balance;
	$pybl_in_days = $query->row()->pybl_in_days;
	$vat_in_days = $query->row()->vat_paid_in_days;

	if ($opening_bank === null) {
	    $opening_bank = 0;
	} elseif ($company_vat === null) {
	    $company_vat = 0;
	} elseif ($opening_debt === null) {
	    $opening_debt = 0;
	} elseif ($opening_credit === null) {
	    $opening_credit = 0;
	} elseif ($pybl_in_days === null) {
	    $pybl_in_days = 0;
	} elseif ($vat_in_days === null) {
	    $vat_in_days = 0;
	}

	$this->data['company_vat_collected'] = $company_vat_collected;

	for ($s = 1; $s <= 3; $s++) {
	    //Section I  --> Opening Balance not include on calculation YET
	    /*
	      $this->data['yearly_opening_cash_balance_cashflow_1'] = $this->data['opening_cash_balance_1'];
	      $this->data['yearly_opening_cash_balance_1'] = $this->data['opening_cash_balance_1'];
	     */
	    $this->data['yearly_opening_cash_balance_cashflow_1'] = $this->data['opening_cash']; // please check kuldip changes 27-05
	    $this->data['yearly_opening_cash_balance_1'] = $this->data['opening_cash'];

	    /*
	      echo "<pre>";
	      print_r($this->data);
	      exit;
	     */
	    //      if ($s == 1) {
	    //        $this->data['grandgstvat'] = $this->data['grandyear'] * ($company_vat_collected / 100);
	    //        $this->data['yearly_total_income'] = $this->data['grandyear'] + $this->data['grandgstvat'];
	    //      } else if ($s == 2 || $s == 3) {

	    $this->data['grandgstvat' . $s] = $this->data['grandyear' . $s] * ($company_vat_collected / 100);
	    $this->data['yearly_total_income' . $s] = $this->data['grandgstvat' . $s] + $this->data['grandyear' . $s];
	    //      }
	    //Section II

	    $this->data['yearly_opening_debt_1'] = (int) $opening_debt;
	    if ($s == 1) {
		switch ($rsvbl_in_days) {
		    case '0':
			for ($i = 1; $i <= 12; $i++) {
			    if ($i == 1) {
				$this->data['opening_debt_' . $i] = $opening_debt / 2;
			    } elseif ($i == 2) {
				$this->data['opening_debt_' . $i] = $opening_debt / 2;
			    } else {
				$this->data['opening_debt_' . $i] = 0;
			    }
			    $total_reciveable += $this->data['total_cash_' . $i];
			    $this->data['yearly_gst_vat_receivables_' . $s] += $this->data["gst_vat_on_receiable" . $i];
			    $this->data['yearly_aged_received_' . $s] = $this->data['cogimportyear' . $s] + $this->data['local_prodserv_year_' . $s] + $this->data['annual_revenue_yearly' . $s] + $this->data['yearly_gst_vat_receivables_' . $s];
			    $this->data['yearly_receipt_cashflow_' . $s] += $this->data['tot_receipt_' . $i];
			    $this->data['gstvat_collect_cashflow_' . $i] = $this->data['total_income_' . $i] * ($company_vat_collected / 100);
			    $this->data['yearly_gstvat_collect_cashflow_' . $s] += $this->data['gstvat_collect_' . $i];
			}
			//$this->data['yearly_aged_received_1'] = $this->data['yearly_total_income'];
			break;

		    case '30':
			for ($k = 1; $k <= 12; $k++) {
			    if ($k == 1) {
				$this->data['opening_debt_' . $k] = $opening_debt / 2;
			    } elseif ($k == 2) {
				$this->data['opening_debt_' . $k] = $opening_debt / 2;
				//$total_reciveable += $this->data['total_cash_'.$k];
			    } else {
				//$i = $k - 1;
				//$total_reciveable += $this->data['total_cash_' . $i];
			    }

			    $total_reciveable += $this->data['total_cash_' . $k];
			    $this->data['yearly_gst_vat_receivables_' . $s] += $this->data["gst_vat_on_receiable" . $k];
			    $this->data['yearly_aged_received_1'] = $this->data['cogimportyear' . $s] + $this->data['local_prodserv_year_' . $s] + $this->data['annual_revenue_yearly' . $s] + $this->data['yearly_gst_vat_receivables_' . $s];
			    $this->data['yearly_receipt_cashflow_1'] += $this->data['tot_receipt_' . $k];
			    $this->data['gstvat_collect_cashflow_' . $k] = $this->data['total_income_' . $k] * ($company_vat_collected / 100);
			    $this->data['yearly_gstvat_collect_cashflow_' . $s] += $this->data['gstvat_collect_' . $k];
			}
			//$this->data['yearly_aged_received_1'] = $this->data['yearly_total_income'] - $this->data['yearly_total_income']/12;
			break;

		    case '60':
			for ($k = 1; $k <= 12; $k++) {
			    if ($k == 1 || $k == 2) {
				$this->data['opening_debt_' . $k] = $opening_debt / 2;
			    } else {
				$this->data['opening_debt_' . $k] = 0;
				//$i = $k - 2;
				//$total_reciveable += $this->data['total_cash_' . $i];
			    }
			    $total_reciveable += $this->data['total_cash_' . $k];
			    $this->data['yearly_gst_vat_receivables_' . $s] += $this->data["gst_vat_on_receiable" . $k];
			    $this->data['yearly_aged_received_1'] = $this->data['cogimportyear' . $s] + $this->data['local_prodserv_year_' . $s] + $this->data['annual_revenue_yearly' . $s] + $this->data['yearly_gst_vat_receivables_' . $s];
			    $this->data['yearly_receipt_cashflow_1'] += $this->data['tot_receipt_' . $k];
			    $this->data['gstvat_collect_cashflow_' . $k] = $this->data['total_income_' . $k] * ($company_vat_collected / 100);
			    $this->data['yearly_gstvat_collect_cashflow_' . $s] += $this->data['gstvat_collect_' . $k];
			}

			//$this->data['yearly_aged_received_1'] = $this->data['yearly_total_income'] - ($this->data['yearly_total_income']/12 * 2);

			break;

		    default:
			for ($k = 1; $k <= 12; $k++) {
			    if ($k == 1 || $k == 2) {
				$this->data['opening_debt_' . $k] = $opening_debt / 2;
			    } else {
				$this->data['opening_debt_' . $k] = 0;
				//$i = $k - 3;
				//$total_reciveable += $this->data['total_cash_' . $i];
			    }

			    $total_reciveable += $this->data['total_cash_' . $k];
			    $this->data['yearly_gst_vat_receivables_' . $s] += $this->data["gst_vat_on_receiable" . $k];
			    $this->data['yearly_aged_received_1'] = $this->data['cogimportyear' . $s] + $this->data['local_prodserv_year_' . $s] + $this->data['annual_revenue_yearly' . $s] + $this->data['yearly_gst_vat_receivables_' . $s];
			    $this->data['yearly_receipt_cashflow_1'] += $this->data['tot_receipt_' . $k];
			    $this->data['gstvat_collect_cashflow_' . $k] = $this->data['total_income_' . $k] * ($company_vat_collected / 100);
			    $this->data['yearly_gstvat_collect_cashflow_' . $s] += $this->data['gstvat_collect_' . $k];
			}



			//$this->data['yearly_aged_received_1'] = $this->data['yearly_total_income'] - ($this->data['yearly_total_income']/12 * 3);

			break;
		}

		//section 3

		$this->data['yearly_opening_credit_1'] = (int) $opening_credit;

		for ($f = 1; $f <= 12; $f++) {
		    $this->data['yearly_royalty_cashflow_print_1'] += $this->data['royalty_fee_month_' . $f];
		}
		switch ($pybl_in_days) {
		    case '0':
			$this->data['yearly_import_disburs_cashflow_1'] = $this->data['imported_scp_year1'];

			for ($k = 1; $k <= 12; $k++) {
			    $this->data['yearly_product_disburs_cashflow_1'] += $this->data['product_scp_' . $k];

			    $this->data['yearly_service_disburs_cashflow_1'] += $this->data['cogserviceyear1'] / 12;

			    $this->data['yearly_oe_disburs_cashflow_1'] += $this->data['oeyear1'] / 12;

			    //$this->data['yearly_royalty_cashflow_print_1'] += $this->data['royalty_'.$k];
			    $this->data['annual_cost_yearly_cashflow_1'] += $this->data['annual_cost_yearly1'] / 12;
			}

			$this->data['yealy_disburs_subtotal_cashflow' . $s] = $this->data['yearly_opening_credit_' . $s] + $this->data['yearly_import_disburs_cashflow_' . $s] + $this->data['yearly_product_disburs_cashflow_' . $s] + $this->data['yearly_service_disburs_cashflow_' . $s] + $this->data['yearly_oe_disburs_cashflow_' . $s] + $this->data['annual_cost_yearly_cashflow_' . $s] + $this->data['yearly_royalty_cashflow_print_' . $s];

			$this->data['yearly_gstvat_comp_cashflow_' . $s] = $this->data['yearly_gstvat_paids_cashflow_' . $s]; // the value take from total bussiness activity

			$this->data['yearly_total_disburs_cashflow_' . $s] = $this->data['yealy_disburs_subtotal_cashflow' . $s] + $this->data['yearly_gstvat_comp_cashflow_' . $s];

			break;

		    case '30':
			$this->data['yearly_import_disburs_cashflow_1'] = $this->data['imported_scp_year1'];

			for ($k = 2; $k <= 12; $k++) {
			    $this->data['yearly_product_disburs_cashflow_1'] += $this->data['product_scp_' . $k];

			    $this->data['yearly_service_disburs_cashflow_1'] += $this->data['cogserviceyear1'] / 12;

			    $this->data['yearly_oe_disburs_cashflow_1'] += $this->data['oeyear1'] / 12;

			    //$this->data['yearly_royalty_cashflow_print_1'] += $this->data['royalty_'.$k];
			    $this->data['annual_cost_yearly_cashflow_1'] += $this->data['annual_cost_yearly1'] / 12;
			}

			$this->data['yealy_disburs_subtotal_cashflow' . $s] = $this->data['yearly_opening_credit_' . $s] + $this->data['yearly_import_disburs_cashflow_' . $s] + $this->data['yearly_product_disburs_cashflow_' . $s] + $this->data['yearly_service_disburs_cashflow_' . $s] + $this->data['yearly_oe_disburs_cashflow_' . $s] + $this->data['annual_cost_yearly_cashflow_' . $s] + $this->data['yearly_royalty_cashflow_print_' . $s];

			$this->data['yearly_gstvat_comp_cashflow_' . $s] = $this->data['yearly_gstvat_paids_cashflow_' . $s]; // the value take from total bussiness activity

			$this->data['yearly_total_disburs_cashflow_' . $s] = $this->data['yealy_disburs_subtotal_cashflow' . $s] + $this->data['yearly_gstvat_comp_cashflow_' . $s];

			break;

		    case '60':
			$this->data['yearly_import_disburs_cashflow_1'] = $this->data['imported_scp_year1'];

			for ($k = 3; $k <= 12; $k++) {
			    $this->data['yearly_product_disburs_cashflow_1'] += $this->data['product_scp_' . $k];

			    $this->data['yearly_service_disburs_cashflow_1'] += $this->data['cogserviceyear1'] / 12;

			    $this->data['yearly_oe_disburs_cashflow_1'] += $this->data['oeyear1'] / 12;

			    //$this->data['yearly_royalty_cashflow_print_1'] += $this->data['royalty_'.$k];
			    $this->data['annual_cost_yearly_cashflow_1'] += $this->data['annual_cost_yearly1'] / 12;
			}

			$this->data['yealy_disburs_subtotal_cashflow' . $s] = $this->data['yearly_opening_credit_' . $s] + $this->data['yearly_import_disburs_cashflow_' . $s] + $this->data['yearly_product_disburs_cashflow_' . $s] + $this->data['yearly_service_disburs_cashflow_' . $s] + $this->data['yearly_oe_disburs_cashflow_' . $s] + $this->data['annual_cost_yearly_cashflow_' . $s] + $this->data['yearly_royalty_cashflow_print_' . $s];

			$this->data['yearly_gstvat_comp_cashflow_' . $s] = $this->data['yearly_gstvat_paids_cashflow_' . $s]; // the value take from total bussiness activity

			$this->data['yearly_total_disburs_cashflow_' . $s] = $this->data['yealy_disburs_subtotal_cashflow' . $s] + $this->data['yearly_gstvat_comp_cashflow_' . $s];

			break;

		    case '90':
			$this->data['yearly_import_disburs_cashflow_1'] = $this->data['imported_scp_year1'];

			for ($k = 4; $k <= 12; $k++) {
			    $this->data['yearly_product_disburs_cashflow_1'] += $this->data['product_scp_' . $k];

			    $this->data['yearly_service_disburs_cashflow_1'] += $this->data['cogserviceyear1'] / 12;

			    $this->data['yearly_oe_disburs_cashflow_1'] += $this->data['oeyear1'] / 12;

			    //$this->data['yearly_royalty_cashflow_print_1'] += $this->data['royalty_'.$k];
			    $this->data['annual_cost_yearly_cashflow_1'] += $this->data['annual_cost_yearly1'] / 12;
			}

			$this->data['yealy_disburs_subtotal_cashflow' . $s] = $this->data['yearly_opening_credit_' . $s] + $this->data['yearly_import_disburs_cashflow_' . $s] + $this->data['yearly_product_disburs_cashflow_' . $s] + $this->data['yearly_service_disburs_cashflow_' . $s] + $this->data['yearly_oe_disburs_cashflow_' . $s] + $this->data['annual_cost_yearly_cashflow_' . $s] + $this->data['yearly_royalty_cashflow_print_' . $s];

			$this->data['yearly_gstvat_comp_cashflow_' . $s] = $this->data['yearly_gstvat_paids_cashflow_' . $s]; // the value take from total bussiness activity

			$this->data['yearly_total_disburs_cashflow_' . $s] = $this->data['yealy_disburs_subtotal_cashflow' . $s] + $this->data['yearly_gstvat_comp_cashflow_' . $s];

			break;
		}
	    } else {
		//section III

		$this->data['yearly_import_disburs_cashflow_' . $s] = $this->data['imported_scp_year' . $s];

		$this->data['yearly_product_disburs_cashflow_' . $s] = $this->data['product_scp_year' . $s];

		$this->data['yearly_service_disburs_cashflow_' . $s] = $this->data['cogserviceyear' . $s];

		$this->data['yearly_oe_disburs_cashflow_' . $s] = $this->data['oeyear' . $s];

		$this->data['yearly_royalty_cashflow_print_' . $s] = $this->data['grandroyaltyyear_' . $s];

		$this->data['yealy_disburs_subtotal_cashflow' . $s] = $this->data['yearly_opening_credit_' . $s] + $this->data['yearly_import_disburs_cashflow_' . $s] + $this->data['yearly_product_disburs_cashflow_' . $s] + $this->data['yearly_service_disburs_cashflow_' . $s] + $this->data['yearly_oe_disburs_cashflow_' . $s] + $this->data['annual_cost_yearly' . $s] + $this->data['yearly_royalty_cashflow_print_' . $s];

		$this->data['yearly_gstvat_comp_cashflow_' . $s] = $this->data['yearly_gstvat_paids_cashflow_' . $s]; // the value take from total bussiness activity

		$this->data['yearly_total_disburs_cashflow_' . $s] = $this->data['yealy_disburs_subtotal_cashflow' . $s] + $this->data['yearly_gstvat_comp_cashflow_' . $s];
	    }

	    if ($s > 1) {
		//          $this->data['yearly_baddebt_'.$year] = $this->data['yearly_opening_debt_'.$year] + $this->data['yearly_total_income'.$year]* $porivision_baddebt/100;
		/* =============================================================================== added by me kuldip ladola 09-05 ====================== */
		$this->data['yearly_aged_received_' . $s] = $this->data['yearly_total_income' . $s];

		$this->data['yearly_receipt_cashflow_' . $s] = $this->data['yearly_opening_debt_' . $s] + $this->data['yearly_aged_received_' . $s] - $this->data['yearly_baddebt_' . $i]; // this is change by kuldip ladola 24-05
		//        $this->data['yearly_receipt_' . $year] = $this->data['yearly_opening_debt_' . $year] + $this->data['yearly_aged_received_' . $year] - $this->data['yearly_baddebt_' . $year];
		$this->data['yearly_gstvat_collect_cashflow_' . $s] = $this->data['grandyear' . $s] * ($company_vat_collected / 100);
	    }

	    //echo "<pre>";
	    //print_r($this->data['yearly_receipt_cashflow_' . $s]);
	    //exit;
	    //Section 9
	    //$this->data['yearly_gstvat_collect_cashflow_'.$s] = $this->data['yearly_receipt_cashflow_'.$s] * ($company_vat / 100);


	    if ($company_vat_collected != 0) {
		$this->data['yearly_total_disburs_cashflow_without_tax' . $s] = ($this->data['yearly_total_disburs_cashflow_' . $s]) / ((1 + ($company_vat_collected / 100)));
		$this->data['yearly_gstvat_paids_cashflow_' . $s] = ($this->data['yearly_total_disburs_cashflow_' . $s] - $this->data['yearly_total_disburs_cashflow_without_tax' . $s]);

		// change by Raza 14 april 2020
	    } else {
		$this->data['yearly_gstvat_paids_cashflow_' . $s] = 0; // change by raza
	    }
	    //        $this->data['yearly_gstvat_paids_cashflow_' . $s] = $this->data['yearly_total_disburs_cashflow_' . $s] / 11; // change by kuldip ladola 24-05
	    //Added by Raza 14 april 2020
	    if ($company_vat != 0) {
		$this->data['new_yearly_gstvat_paids_cashflow_' . $s] = $this->data['yearly_total_disburs_cashflow_' . $s] / $company_vat; // change by kuldip ladola 11-05
	    } else {
		$this->data['new_yearly_gstvat_paids_cashflow_' . $s] = 0; // change by raza
	    }



	    $this->data['yearly_gstvat_remittance_cashflow_' . $s] = $this->data['yearly_gstvat_collect_cashflow_' . $s] - $this->data['yearly_gstvat_paids_cashflow_' . $s];

	    //Section III



	    $this->data['yearly_gstvat_comp_cashflow_' . $s] = $this->data['yearly_gstvat_paids_cashflow_' . $s];

	    $this->data['yearly_total_disburs_cashflow_' . $s] = $this->data['yealy_disburs_subtotal_cashflow' . $s] + $this->data['yearly_gstvat_comp_cashflow_' . $s];

	    //Section IV
	    $this->data['yearly_payg_tax_' . $s] = 0;
	    for ($j = 1; $j <= 12; $j++) {
		$this->data['yearly_payg_tax_' . $s] += $this->peoplexpenses["other"] + $this->peoplexpenses["income"] + $this->peoplexpenses["medicare"];
	    }
	    if ($s == 2) {
		$this->data['yearly_payg_tax_' . $s] = (($this->data['yearly_payg_tax_' . $s] * ($this->data['people_income'] / 100)) + $this->data['yearly_payg_tax_' . $s]);
	    } elseif ($s == 3) {
		$this->data['yearly_payg_tax_' . $s] = (($this->data['yearly_payg_tax_2'] * ($this->data['people_income'] / 100)) + $this->data['yearly_payg_tax_2']);
	    }

	    $this->data['yearly_total_payroll_' . $s] = $this->data['grandplyear' . $s];

	    //Section V

	    $this->data['yearly_total_operating_cashflow_' . $s] = $this->data['yearly_total_disburs_cashflow_' . $s] + $this->data['grandplyear' . $s] - ($this->data['yearly_payg_tax_' . $s]);

	    $query_string = "SELECT ((SELECT cp_1 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT cp_2 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) +
			(SELECT cp_3 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT cp_4 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT cp_5 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT cp_6 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT cp_7 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT cp_8 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT cp_9 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT cp_10 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT cp_11 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT cp_12 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id))
			as yearly_cp_1, yearly_cp_2, yearly_cp_3,
			((SELECT is_1 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT is_2 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) +
			(SELECT is_3 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT is_4 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT is_5 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT is_6 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT is_7 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT is_8 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT is_9 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT is_10 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT is_11 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT is_12 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id))
			as yearly_is_1, yearly_is_2, yearly_is_3,
			((SELECT dp_1 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT dp_2 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) +
			(SELECT dp_3 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT dp_4 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT dp_5 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT dp_6 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT dp_7 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT dp_8 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT dp_9 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT dp_10 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT dp_11 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id) + (SELECT dp_12 FROM cash_flow_table WHERE cash_flow_table.user_id = yearly_cash_flow_table.user_id))
			as yearly_dp_1, yearly_dp_2, yearly_dp_3
			FROM `yearly_cash_flow_table` WHERE user_id= '$user_id'";

	    $query = $this->db->query($query_string);
	    $num_val = $query->num_rows();

	    if ($num_val <= 0) {
		$query_string = "SELECT (cp_1+cp_2+cp_3+cp_4+cp_5+cp_6+cp_7+cp_8+cp_9+cp_10+cp_11+cp_12) as yearly_cp_1, (is_1+is_2+is_3+is_4+is_5+is_6+is_7+is_8+is_9+is_10+is_11+is_12) as yearly_is_1, (dp_1+dp_2+dp_3+dp_4+dp_5+dp_6+dp_7+dp_8+dp_9+dp_10+dp_11+dp_12) as yearly_dp_1   FROM cash_flow_table WHERE user_id= '$user_id'";

		$query = $this->db->query($query_string);
	    }

	    $value = $query->row();
	    if ($value === null) {
		$value = new stdClass();
		$value->yearly_cp_1 = 0;
		$value->yearly_cp_2 = 0;
		$value->yearly_cp_3 = 0;
		$value->yearly_is_1 = 0;
		$value->yearly_is_2 = 0;
		$value->yearly_is_3 = 0;
		$value->yearly_dp_1 = 0;
		$value->yearly_dp_2 = 0;
		$value->yearly_dp_3 = 0;
	    }

	    //Section VI

	    $this->data['yearly_gstvat_payment_cashflow_' . $s] = $this->data['yearly_gstvat_remittance_cashflow_' . $s]; //Value available after GSTVAT Remitee

	    $this->data['yearl_company_tax_' . $s] = $this->data['comptaxyear' . $s];

	    $this->data['yearly_total_business_activity_cashflow_' . $s] = $this->data['yearly_gstvat_payment_cashflow_' . $s] + $this->data['yearly_payg_tax_' . $s] + $this->data['yearl_company_tax_' . $s];

	    //Section VII

	    $this->data['yearly_total_outgoing_cashflow_' . $s] = +$this->data['yearly_total_disburs_cashflow_' . $s] + ($this->data['yearly_total_payroll_' . $s] - $this->data['yearly_payg_tax_' . $s]) + $this->data['yearly_total_business_activity_cashflow_' . $s];
	    //echo '<pre>';
	    //print_r($this->data['yearly_total_outgoing_cashflow_' . $s]);
	    //Section VIII

	    $this->data['yearly_netcash_gain_cashflow_' . $s] = $this->data['yearly_receipt_cashflow_' . $s] - $this->data['yearly_total_outgoing_cashflow_' . $s];

	    $this->data['net_cash_gain'] = array();

	    // for ($i = 1; $i <= 3; $i++) {
	    //     $cp_cashflow = 'yearly_cp_' . $i;
	    //     $is_cashflow = 'yearly_is_' . $i;
	    //     $dp_cashflow = 'yearly_dp_' . $i;
	    //     $this->data['yearly_cp_' . $i] = $value->$cp_cashflow;
	    //     $this->data['yearly_is_' . $i] = $value->$is_cashflow;
	    //     $this->data['yearly_dp_' . $i] = $value->$dp_cashflow;
	    // old
	    // $this->data['total_capital_items'][$i] = ($value->$cp_cashflow + $this->data["payment_frequency_year_" . $i] + $this->data["payment_frequency_director_year_" . $i]);
	    // new
	    $this->data['total_capital_items'][$s] = ($this->data["payment_frequency_year_" . $s] + $this->data["payment_frequency_director_year_" . $s]);

	    $this->data['yearly_receipt_' . $s] = $this->data['yearly_opening_debt_' . $s] + $this->data['yearly_aged_received_' . $s] - $this->data['yearly_baddebt_' . $s];

	    $yearly_receipt_graph[] = $this->data["yearly_receipt_" . $s];

	    $yearly_total_outgoing_graph[] = $this->data["yearly_total_outgoing_cashflow_" . $s];

	    $this->data['net_cash_gain'][$s] = $this->data["yearly_receipt_" . $s] - $this->data["yearly_total_outgoing_cashflow_" . $s];

	    // $this->data["new_yearly_closing_cash_cashflow_" . $s] = ($this->data["yearly_opening_cash_balance_cashflow_" . $s]
	    //     + $this->data['net_cash_gain'][$s]) + $this->data['total_capital_items'][$s] - $this->data['loanpaymentyear_' . $s];

	    $this->data["new_yearly_closing_cash_cashflow_" . $s] = $this->data["yearly_opening_cash_balance_cashflow_" . $s] + $this->data['net_cash_gain'][$s] - $this->data['loanpaymentyear_' . $s];

	    if ($s == 2 || $s == 3) {
		$this->data["new_yearly_closing_cash_cashflow_" . $s] = $this->data["yearly_opening_cash_balance_cashflow_" . $s] + $this->data['net_cash_gain'][$s] + $this->data['total_capital_items'][$s] - $this->data['loanpaymentyear_' . $s];
	    }

	    $next = $s + 1;
	    $this->data['yearly_opening_cash_balance_cashflow_' . $next] = $this->data["new_yearly_closing_cash_cashflow_" . $s];
	    $this->balshe['balance_cash_bank_' . $s] = $this->data['new_yearly_closing_cash_cashflow_' . $s];
	    $closing_cash_balance_graph[] = $this->data["new_yearly_closing_cash_cashflow_" . $s];
	    // }

	    if ($s == 2 || $s == 3) {
		//$l = $s - 1;
		//Back to Section I
		//Added By Raza 14
		// if ($this->data['new_yearly_closing_cash_cashflow_' . $l] > 0) {
		//     $this->data['yearly_opening_cash_balance_cashflow_' . $s] = $this->data['new_yearly_closing_cash_cashflow_' . $l];
		// } else {
		//     $this->data['yearly_opening_cash_balance_cashflow_' . $s] = 0;
		// }
		$this->data['yearly_opening_debt_' . $s] = 0;
		$this->data['yearly_opening_credit_' . $s] = 0;
	    }
	}
	//    $this->data['yearly_aged_received_1'] = 24200;
	return $this->data;
    }

    public function ajax_break_even() {
	for ($i = 1; $i <= 3; $i++) {
	    $this->breven['break_even_total_income_' . $i] = ($i == 1) ? $this->data['grandyear'] : $this->data['grandyear' . $i];
	    $this->breven['break_even_variable_costs_' . $i] = $this->data['grandcogyear' . $i];
	    $this->breven['break_even_contribution_' . $i] = $this->breven['break_even_total_income_' . $i] - $this->breven['break_even_variable_costs_' . $i];
	    $this->breven['break_even_contribution_margin_' . $i] = ($this->breven['break_even_total_income_' . $i] == 0) ? 0 : $this->breven['break_even_contribution_' . $i] / $this->breven['break_even_total_income_' . $i];
	    $this->breven['break_even_employement_expense_' . $i] = $this->data['grandplyear' . $i];
	    $this->breven['break_even_overheads_' . $i] = $this->data['grandoeyear' . $i];
	    $this->breven['break_even_total_fixed_costs_' . $i] = $this->breven['break_even_employement_expense_' . $i] + $this->breven['break_even_overheads_' . $i];
	    $this->breven['break_even_income_required_' . $i] = ($this->breven['break_even_contribution_margin_' . $i] == 0) ? 0 : $this->breven['break_even_total_fixed_costs_' . $i] / $this->breven['break_even_contribution_margin_' . $i];
	    $this->breven['break_even_forecast_income_' . $i] = ($this->breven['break_even_total_income_' . $i] == 0) ? 0 : $this->breven['break_even_income_required_' . $i] / $this->breven['break_even_total_income_' . $i];
	}

	for ($k = 1; $k <= 12; $k++) {
	    $this->breven['break_even_total_income2_' . $k] = $this->data['total_income_' . $k];
	    $this->breven['break_even_total_expenses_' . $k] = $this->data['grandexpensesyear1'] / 12 + $this->data['total_income2_' . $k] - $this->data["interest_" . $k];
	    $this->breven['break_even_operating_profit_' . $k] = $this->breven['break_even_total_income2_' . $k] - $this->breven['break_even_total_expenses_' . $k];
	    $this->breven['break_even_audit_check_' . $k] = $this->breven['break_even_operating_profit_' . $k] - $this->data['pretax_profit_month_' . $k];
	    $this->breven['graph_data_1_' . $k] = $this->breven['break_even_total_income2_' . $k];
	    $this->breven['graph_data_2_' . $k] = $this->breven['break_even_total_expenses_' . $k];
	    $this->breven['graph_data_3_' . $k] = $this->breven['break_even_operating_profit_' . $k];
	}
	$this->breven['currency'] = $this->data['currency'];
	$this->breven['table_header'] = $this->data['table_header'];
	return $this->breven;
    }

    /* ============================================================================
      Debtors and Creditors  - Starts
      ============================================================================== */

    public function creditor_debtor_balance_report() {
	fetch_result();

	$user_id = $this->session->userdata('user')->id;

	$query = $this->db->query('select pybl_in_days,rsvbl_in_days,opening_credit_balance,opening_debit_balance,opening_credit_balance,company_vat,company_vat_collected from general_assumption where user_id="' . $user_id . '"');

	$opening_debit = $query->row()->opening_debit_balance;
	$opening_credit = $query->row()->opening_credit_balance;
	$company_vat = $query->row()->company_vat;
	$company_vat_collected = (int) $query->row()->company_vat_collected;
	$rsvbl_in_days = $query->row()->rsvbl_in_days;
	$pybl_in_days = $query->row()->pybl_in_days;
	if ($opening_debit === null) {
	    $opening_debit = 0;
	}
	if ($opening_credit === null) {
	    $opening_credit = 0;
	}
	if ($company_vat === null) {
	    $company_vat = 0;
	}
	if ($rsvbl_in_days === null) {
	    $rsvbl_in_days = 0;
	}
	if ($pybl_in_days === null) {
	    $pybl_in_days = 0;
	}

	for ($year = 1; $year <= 3; $year++) {
	    /* if ($count == 1){
	      $this->data['grandgstvat'] = $company_vat / 100 * $this->data['grandyear'];
	      }else{
	      $this->data['grandgstvat'.$count] = $company_vat / 100 * $this->data['grandyear'.$count];
	      } */

	    $this->credeb['purchase_expenses_' . $year] = $this->data['grandcogyear' . $year] + $this->data['oeyear' . $year] + $this->data['grandplyear' . $year];
	    // Added By raza 19sep2020
	    ($year == 1) ? $this->data['grandgstvat' . $year] = ($opening_debit + $this->data['cogimportyear' . $year] + $this->data['local_prodserv_year_' . $year] + $this->data['annual_revenue_yearly' . $year]) * ($company_vat_collected / 100) : $this->data['grandgstvat' . $year] = $company_vat_collected / 100 * $this->data['grandyear'];
	    ($year == 1) ? $this->data['yearly_total_income'] = $this->data['cogimportyear' . $year] + $this->data['local_prodserv_year_' . $year] + $this->data['annual_revenue_yearly' . $year] + $this->data['grandgstvat' . $year] : $this->data['yearly_total_income' . $year] = $this->data['grandyear' . $year] + $this->data['grandgstvat' . $year]; //Removing $this->data['grandyear'] and adding $this->data['cogimportyear' . $year]+ $this->data['local_prodserv_year_' . $year]+ $this->data['annual_revenue_yearly' . $year] this sepratly
	    ($year == 1) ? $this->data['yearly_receipt_' . $year] = $opening_debit + $this->data['yearly_total_income'] : $this->data['yearly_receipt_' . $year] = $this->data['yearly_total_income' . $year];
	    $this->data['yearly_opening_credit_1'] = (int) $opening_credit;
	    $this->credeb['less_cash_receipts_' . $year] = $this->data['less_cash_receipts_' . $year];
	    if ($year == 1) {
		switch ($rsvbl_in_days) {
		    case '0':
			for ($i = 1; $i <= 12; $i++) {
			    if ($i == 1) {
				$this->data['opening_debt_' . $i] = $opening_debit / 2;
			    } elseif ($i == 2) {
				$this->data['opening_debt_' . $i] = $opening_debit / 2;
			    } else {
				$this->data['opening_debt_' . $i] = 0;
			    }
			}
			break;
		    case '30':
			for ($k = 1; $k <= 12; $k++) {
			    if ($k == 1) {
				$this->data['opening_debt_' . $k] = $opening_debit / 2;
			    } elseif ($k == 2) {
				$this->data['opening_debt_' . $k] = $opening_debit / 2;
			    } else {
				$this->data['opening_debt_' . $k] = 0;
				$i = $k - 1;
			    }
			}
			break;
		    case '60':
			for ($k = 1; $k <= 12; $k++) {
			    if ($k == 1 || $k == 2) {
				$this->data['opening_debt_' . $k] = $opening_debit / 2;
			    } else {
				$this->data['opening_debt_' . $k] = 0;

				$i = $k - 2;
			    }
			}

			break;

		    case '90':
			for ($k = 1; $k <= 12; $k++) {
			    if ($k == 1 || $k == 2) {
				$this->data['opening_debt_' . $k] = $opening_debit / 2;
			    } else {
				$this->data['opening_debt_' . $k] = 0;
				$i = $k - 3;
			    }
			}
			break;
		}
		switch ($pybl_in_days) {
		    case '0':
			$this->data['yearly_import_disburs_1'] = $this->data['imported_scp_year1'];
			for ($k = 1; $k <= 12; $k++) {
			    $this->data['yearly_product_disburs_1'] += $this->data['product_scp_' . $k];
			    $this->data['yearly_service_disburs_1'] += $this->data['cogserviceyear1'] / 12;
			    $this->data['yearly_oe_disburs_1'] += $this->data['oeyear1'] / 12;
			    $this->data['annual_cost_yearly_1'] += $this->data['annual_cost_yearly1'] / 12;
			}
			break;
		    case '30':
			$this->data['yearly_import_disburs_1'] = $this->data['imported_scp_year1'];
			for ($k = 1; $k <= 11; $k++) {
			    $this->data['yearly_product_disburs_1'] += $this->data['product_scp_' . $k];
			    $this->data['yearly_service_disburs_1'] += $this->data['cogserviceyear1'] / 12;
			    $this->data['yearly_oe_disburs_1'] += $this->data['oeyear1'] / 12;
			    $this->data['annual_cost_yearly_1'] += $this->data['annual_cost_yearly1'] / 12;
			}
			break;

		    case '60':
			$this->data['yearly_import_disburs_1'] = $this->data['imported_scp_year1'];
			for ($k = 1; $k <= 10; $k++) {
			    $this->data['yearly_product_disburs_1'] += $this->data['product_scp_' . $k];
			    $this->data['yearly_service_disburs_1'] += $this->data['cogserviceyear1'] / 12;
			    $this->data['yearly_oe_disburs_1'] += $this->data['oeyear1'] / 12;
			    $this->data['annual_cost_yearly_1'] += $this->data['annual_cost_yearly1'] / 12;
			}
			break;

		    case '90':
			$this->data['yearly_import_disburs_1'] = $this->data['imported_scp_year1'];
			for ($k = 1; $k <= 9; $k++) {
			    $this->data['yearly_product_disburs_1'] += $this->data['product_scp_' . $k];
			    $this->data['yearly_service_disburs_1'] += $this->data['cogserviceyear1'] / 12;
			    $this->data['yearly_oe_disburs_1'] += $this->data['oeyear1'] / 12;
			    $this->data['annual_cost_yearly_1'] += $this->data['annual_cost_yearly1'] / 12;
			}

			break;
		}
	    } else {
		//section III

		$this->data['yearly_import_disburs_' . $year] = $this->data['imported_scp_year' . $year];
		$this->data['yearly_product_disburs_' . $year] = $this->data['product_scp_year' . $year];
		$this->data['yearly_service_disburs_' . $year] = $this->data['cogserviceyear' . $year];
		$this->data['yearly_oe_disburs_' . $year] = $this->data['oeyear' . $year];
		$this->data['yealy_disburs_subtotal_' . $year] = $this->data['yearly_opening_credit_' . $year] + $this->data['yearly_import_disburs_' . $year] + $this->data['yearly_product_disburs_' . $year] + $this->data['yearly_service_disburs_' . $year] + $this->data['yearly_oe_disburs_' . $year] + $this->data['annual_cost_yearly' . $year];
		$this->data['yearly_gstvat_comp_' . $year] = $this->data['yearly_gstvat_paids_' . $year]; // the value take from total bussiness activity
		$this->data['yearly_total_disburs_' . $year] = $this->data['yealy_disburs_subtotal_' . $year] + $this->data['yearly_gstvat_comp_' . $year];
	    }
	    //Section 9

	    $this->data['yearly_gstvat_collect_' . $year] = $this->data['yearly_receipt_' . $year] * ($company_vat / 100);
	    $this->data['yearly_gstvat_paids_' . $year] = 0;
	    if (!empty($company_vat)) {
		$this->data['yearly_gstvat_paids_' . $year] = $this->data['yearly_total_disburs_' . $year] / $company_vat; // change by kuldip ladola please check
	    }
	    $this->data['yearly_gstvat_remittance_' . $year] = $this->data['yearly_gstvat_collect_' . $year] - $this->data['yearly_gstvat_paids_' . $year];

	    //Section III

	    $this->data['yearly_gstvat_comp_' . $year] = $this->data['yearly_gstvat_paids_' . $year];
	    $this->data['yearly_total_disburs_' . $year] = $this->data['yealy_disburs_subtotal_' . $year] + $this->data['yearly_gstvat_comp_' . $year];

	    for ($i = 1; $i <= 12; $i++) {
		if ($i == 1) {
		    $this->data['creditors_' . $i] = $opening_credit / 2;
		} elseif ($i == 2) {
		    $this->data['creditors_' . $i] = $opening_credit / 2;
		} else {
		    $this->data['creditors_' . $i] = 0;
		}
	    }

	    if ($year == 1) {
		//Section I
		$this->credeb['opening_debtors_' . $year] = $opening_debit;
		$this->credeb['profit_grandgstvat' . $year] = ($company_vat_collected / 100) * $this->data['profit_grandyear' . $year];
		$this->credeb['invoicing_' . $year] = $this->data['profit_grandyear' . $year] + $this->credeb['profit_grandgstvat' . $year];
		$this->credeb['less_cash_receipts_' . $year] = $this->data['yearly_receipt_' . $year];
		$this->credeb['closing_debtors_' . $year] = $opening_debit + $this->credeb['invoicing_' . $year] - $this->credeb['less_cash_receipts_' . $year];

		//Section II
		$this->credeb['opening_creditors_' . $year] = $opening_credit;
		$this->credeb['less_cash_payments_' . $year] = $this->data['yealy_disburs_subtotal_' . $year] + $this->data['grandplyear' . $year];
		$this->credeb['closing_creditors_' . $year] = round(((int) $opening_credit + $this->credeb['purchase_expenses_' . $year]) - $this->credeb['less_cash_payments_' . $year]);
	    } else {
		//Section I

		$j = $year - 1;

		$this->credeb['opening_debtors_' . $year] = $this->credeb['closing_debtors_' . $j];
		$this->credeb['profit_grandgstvat' . $year] = ($company_vat_collected / 100) * $this->data['profit_grandyear' . $year];
		$this->credeb['invoicing_' . $year] = $this->data['profit_grandyear' . $year] + $this->credeb['profit_grandgstvat' . $year];
		$this->credeb['closing_debtors_' . $year] = $this->credeb['closing_debtors_' . $j] + $this->credeb['invoicing_' . $year] - $this->credeb['less_cash_receipts_' . $year];

		//Section II

		$this->credeb['opening_creditors_' . $year] = $this->credeb['closing_creditors_' . $j];
		$this->credeb['less_cash_payments_' . $year] = $this->data['yealy_disburs_subtotal_' . $year] + $this->data['grandplyear' . $year];
		$this->credeb['closing_creditors_' . $year] = round(($this->credeb['closing_creditors_' . $j] + $this->credeb['purchase_expenses_' . $year]) - $this->credeb['less_cash_payments_' . $year]);
	    }

	    $this->credeb['currency'] = $this->data['currency'];
	}

	echo json_encode($this->credeb);

	return $this->credeb;
    }

    /* ============================================================================
      Key Ratios  - Starts
      ============================================================================== */

    public function ajax_key_ratio_loss() {
	$this->ajax_cash_flow_report();
	$user_id = $this->session->userdata('user')->id;
	$query = $this->db->query('select *from director WHERE user_id="' . $user_id . '"');
	$sql = $query->result();
	$query2 = $this->db->query('select *from issues_table WHERE user_id="' . $user_id . '"');
	$row = $query2->row();

	if ($query2->num_rows() >= 1) {
	    $this->var['capitalisation_1'] = $row->issues_shared_1 * $row->price_share2_1;
	    $this->var['capital_raised_1'] = $row->issues_shared_1 * $row->price_share2_1;
	    $this->var['issued_share_2'] = $row->issues_shared_1;
	    $this->var['price_share2_2'] = $row->price_share2_1;
	    $this->var['capitalisation_2'] = $this->var['issued_share_2'] * $this->var['price_share2_2'];
	    $this->var['capital_raised_2'] = $row->price_share_3 * $row->share_issue_5;
	    $this->var['issued_share_3'] = $this->var['issued_share_2'] + $row->share_issue_5;
	    $this->var['price_share2_3'] = $row->price_share_3;
	    $this->var['capitalisation_3'] = $this->var['issued_share_3'] * $this->var['price_share2_3'];
	    $this->var['f_round_investor_3'] = $row->share_issue_5;

	    if ($query->num_rows() >= 1) {
		for ($z = 0; $z < $query->num_rows(); $z++) {
		    $this->var['director_' . $z] = ($sql[$z]->director == null) ? "Director 1" : $sql[$z]->director;
		    $director = 'director_' . $z . '_1';
		    $this->var['director_' . $z . '_3'] = $row->$director;
		    $this->var['total_issued_share_3'] += (int) $this->var['director_' . $z . '_3'];
		}
		$this->var['total_issued_share_3'] += $this->var['f_round_investor_3'];
	    }
	}

	$query3 = $this->db->query('select *from one_time_cost where user_id="' . $user_id . '" AND one_time_cost = "Security_Deposit"');
	$sql3 = $query3->result();

	if ($query3->num_rows() > 0) {
	    foreach ($sql3 as $sq) {
		$sd_total += $sq->total_cost;
	    }
	} else {
	    $sd_total = 0;
	}

	$query4 = $this->db->query('select company_vat from general_assumption where user_id="' . $user_id . '"');
	$company_vat = $query4->row()->company_vat;
	for ($i = 1; $i <= 3; $i++) {
	    $y = $i - 1;

	    $this->keyrat['key_ratios_gross_profit_' . $i] = $this->data['gppercentyear' . $i];
	    $this->keyrat['key_ratios_net_profit_' . $i] = $this->data['netprofitpercentyear' . $i];
	    $this->keyrat['key_ratios_employement_costs_' . $i] = $this->data['plpercentyear' . $i];
	    $this->keyrat['key_ratios_operating_expenses_' . $i] = $this->data['oepercentyear' . $i];
	    $this->keyrat['key_ratios_earn_share_' . $i] = ($this->var['total_issued_share_3'] == 0) ? 0 : $this->data['netprofityear' . $i] / $this->var['total_issued_share_3'];
	    $this->keyrat['balance_tot_current_assets_' . $i] = $this->data['closing_debtors_' . $i] + $this->data['yearly_closing_cash_' . $i] + $sd_total + $this->data['total_imported_scq_' . $i] + $this->data['total_product_scq_' . $i];
	    $this->data['balance_gst_payable_0'] = 0;
	    $this->data['balance_gst_payable_' . $i] = $this->data['balance_gst_payable_' . $y] + ($this->data['grandgstvat' . $i] - $this->data['yearly_gstvat_collect_' . $i]);
	    $this->keyrat['balance_tot_current_libilities_' . $i] = $this->data['closing_creditors_' . $i] + $this->data['balance_gst_payable_' . $y] + ($this->data['grandgstvat' . $i] - $this->data['yearly_gstvat_collect_' . $i]);
	    $this->keyrat['key_ratios_work_cap_' . $i] = (abs($this->keyrat['balance_tot_current_libilities_' . $i]) == 0) ? 0 : $this->keyrat['balance_tot_current_assets_' . $i] / abs($this->keyrat['balance_tot_current_libilities_' . $i]);
	    if ($i == 1) {
		$this->data['grandgstvat'] = ($company_vat / 100) * $this->data['grandyear'];
		$this->data['yearly_total_income'] = $this->data['grandyear'] + $this->data['grandgstvat'];
		$this->keyrat['key_ratios_debtors_turn_' . $i] = ($this->data['closing_debtors_' . $i] == 0) ? 0 : $this->data['yearly_total_income'] / $this->data['closing_debtors_' . $i];
	    } elseif ($i == 2 || $i == 3) {
		$this->data['grandgstvat' . $i] = ($company_vat / 100) * $this->data['grandyear' . $i];
		$this->data['yearly_total_income' . $i] = $this->data['grandgstvat' . $i] + $this->data['grandyear' . $i];
		$this->keyrat['key_ratios_debtors_turn_' . $i] = ($this->data['closing_debtors_' . $i] == 0 && $this->data['closing_debtors_' . $y] == 0) ? 0 : $this->data['yearly_total_income' . $i] / ($this->data['closing_debtors_' . $i] + $this->data['closing_debtors_' . $y] / 2);
	    }
	}

	$this->keyrat['currency'] = $this->data['currency'];
	return $this->keyrat;
    }

    /* ============================================================================
      Profit and Loss - Starts
      ============================================================================== */

    public function ajax_profit_loss_sensitivity() {
	$user_id = $this->session->userdata('user')->id;
	$query = $this->db->query('select company_tax from general_assumption where user_id="' . $user_id . '"');
	$company_tax = $query->row()->company_tax;

	if ($company_tax === null) {
	    $company_tax = 0;
	}

	$slide = $this->db->query('select *from sensitivity_table where user_id="' . $user_id . '"')->row();
	if ($slide->lower === null) {
	    $slide->lower = 0;
	}

	if ($slide->higher === null) {
	    $slide->higher = 0;
	}
	for ($i = 0; $i <= 3; $i++) {
	    //section 2

	    $this->proloss['sensitivity_lower_tot_income_' . $i] = ($i == 1) ? ($slide->lower / 100) * $this->data['grandyear'] : ($slide->lower / 100) * $this->data['grandyear' . $i];
	    $this->proloss['sensitivity_lower_gross_profit_' . $i] = ($slide->lower / 100) * $this->data['grandgpyear' . $i];
	    $this->proloss['sensitivity_lower_gross_percent_' . $i] = $this->data['gppercentyear' . $i] * 100;
	    $this->proloss['sensitivity_lower_employement_' . $i] = $this->data['grandplyear' . $i];
	    $this->proloss['sensitivity_lower_overheads_' . $i] = $this->data['grandoeyear' . $i];
	    $this->proloss['sensitivity_lower_tot_expenses_' . $i] = $this->proloss['sensitivity_lower_employement_' . $i] + $this->proloss['sensitivity_lower_overheads_' . $i];
	    $this->proloss['sensitivity_lower_before_tax_' . $i] = $this->proloss['sensitivity_lower_gross_profit_' . $i] - $this->proloss['sensitivity_lower_tot_expenses_' . $i];
	    $this->proloss['sensitivity_lower_tax_' . $i] = ($company_tax / 100) * $this->proloss['sensitivity_lower_before_tax_' . $i];
	    $this->proloss['sensitivity_lower_after_tax_' . $i] = $this->proloss['sensitivity_lower_before_tax_' . $i] - $this->proloss['sensitivity_lower_tax_' . $i];

	    //Section 3

	    $this->proloss['sensitivity_current_tot_income_' . $i] = ($i == 1) ? $this->data['grandyear'] : $this->data['grandyear' . $i];
	    $this->proloss['sensitivity_current_gross_profit_' . $i] = $this->data['grandgpyear' . $i];
	    $this->proloss['sensitivity_current_gross_percent_' . $i] = $this->data['gppercentyear' . $i] * 100;
	    $this->proloss['sensitivity_current_employement_' . $i] = $this->data['grandplyear' . $i];
	    $this->proloss['sensitivity_current_overheads_' . $i] = $this->data['grandoeyear' . $i];
	    $this->proloss['sensitivity_current_tot_expenses_' . $i] = $this->proloss['sensitivity_current_employement_' . $i] + $this->proloss['sensitivity_current_overheads_' . $i];
	    $this->proloss['sensitivity_current_before_tax_' . $i] = $this->proloss['sensitivity_current_gross_profit_' . $i] - $this->proloss['sensitivity_current_tot_expenses_' . $i];
	    $this->proloss['sensitivity_current_tax_' . $i] = ($company_tax / 100) * $this->proloss['sensitivity_current_before_tax_' . $i];
	    $this->proloss['sensitivity_current_after_tax_' . $i] = $this->proloss['sensitivity_current_before_tax_' . $i] - $this->proloss['sensitivity_current_tax_' . $i];

	    //Section 4

	    $this->proloss['sensitivity_higher_tot_income_' . $i] = ($i == 1) ? (($slide->higher / 100) * $this->data['grandyear']) + $this->data['grandyear'] : (($slide->higher / 100) * $this->data['grandyear' . $i]) + $this->data['grandyear' . $i];
	    $this->proloss['sensitivity_higher_gross_profit_' . $i] = (($slide->higher / 100) * $this->data['grandgpyear' . $i]) + $this->data['grandgpyear' . $i];
	    $this->proloss['sensitivity_higher_gross_percent_' . $i] = $this->data['gppercentyear' . $i] * 100;
	    $this->proloss['sensitivity_higher_employement_' . $i] = $this->data['grandplyear' . $i];
	    $this->proloss['sensitivity_higher_overheads_' . $i] = $this->data['grandoeyear' . $i];
	    $this->proloss['sensitivity_higher_tot_expenses_' . $i] = $this->proloss['sensitivity_higher_employement_' . $i] + $this->proloss['sensitivity_higher_overheads_' . $i];
	    $this->proloss['sensitivity_higher_before_tax_' . $i] = $this->proloss['sensitivity_higher_gross_profit_' . $i] - $this->proloss['sensitivity_higher_tot_expenses_' . $i];
	    $this->proloss['sensitivity_higher_tax_' . $i] = ($company_tax / 100) * $this->proloss['sensitivity_higher_before_tax_' . $i];
	    $this->proloss['sensitivity_higher_after_tax_' . $i] = $this->proloss['sensitivity_higher_before_tax_' . $i] - $this->proloss['sensitivity_higher_tax_' . $i];

	    //section 1

	    $this->proloss['sensitivity_tot_lower_' . $i] = $this->proloss['sensitivity_lower_before_tax_' . $i];
	    $this->proloss['sensitivity_tot_current_' . $i] = $this->proloss['sensitivity_current_before_tax_' . $i];
	    $this->proloss['sensitivity_tot_higher_' . $i] = $this->proloss['sensitivity_higher_before_tax_' . $i];
	}

	$this->proloss['currency'] = $this->data['currency'];
	$this->proloss['company_tax'] = $company_tax;
	$this->proloss['lower'] = $slide->lower;
	$this->proloss['higher'] = $slide->higher;

	return $this->proloss;
    }

    /* ============================================================================
      People Expenses - Starts
      ============================================================================== */

    public function ajax_people_calculating_summary() {
	$list = $this->people_model->get_datatables();
	$user_id = $this->session->userdata('user')->id;
	$query = $this->db->query('select currency from company_detail where user_id="' . $user_id . '"');
	$currency = $query->row()->currency;
	$cur = '';

	if ($currency == "AUD" || $currency == "USD") {
	    $cur = "$";
	} elseif ($currency == "EUR") {
	    $cur = "€";
	} elseif ($currency == "UK") {
	    $cur = "£";
	} elseif ($currency == "INR") {
	    $cur = "₹";
	}
	$data = array();

	if (empty($list)) {
	    $this->peoplexpenses['gross_salary'] = 0;
	    $this->peoplexpenses['subsidies_recieved'] = 0;
	    $this->peoplexpenses['commission_recieved'] = 0;
	    $this->peoplexpenses['other_recieved'] = 0;
	    $this->peoplexpenses['pension'] = 0;
	    $this->peoplexpenses['medicare'] = 0;
	    $this->peoplexpenses['retirement'] = 0;
	    $this->peoplexpenses['income'] = 0;
	    $this->peoplexpenses['union'] = 0;
	    $this->peoplexpenses['sick'] = 0;
	    $this->peoplexpenses['fringe'] = 0;
	    $this->peoplexpenses['other'] = 0;
	    $this->peoplexpenses['super'] = 0;
	    $this->peoplexpenses['work'] = 0;
	} else {
	    foreach ($list as $people) {
		$this->peoplexpenses = array();
		//$gross_income = $people->gross_income + $people->other;
		$gross_salary = $people->gross_income / 12;

		//$subsidies_recieved = ($people->subsidies / 100) * $gross_salary;
		//$commission_recieved = ($people->commission / 100) * $gross_salary;
		$other_recieved = $people->other / 12;
		$tot_gross = $gross_salary + $other_recieved;

		// $pension = ($people->pension / 100) * $tot_gross;

		$medicare_levi = $people->medicare_levi / 12;

		// $retirement_annuity = ($people->retirement_annuity / 100) * $tot_gross;

		$income_tax = $people->income_tax / 12;

		// $union_fee = ($people->union_fee / 100) * $tot_gross;
		// $sick_leave = ($people->sick_leave / 100) * $tot_gross;
		// $fringe_benefit = ($people->fringe_benefit / 100) * $tot_gross;
		// $other_deduction = ($people->other_deduction / 100) * $tot_gross;



		$superannuation = ($people->superannuation / 100) * $tot_gross;

		$work_cover = ($people->work_cover / 100) * $tot_gross;

		$total_gross_salary += $gross_salary;

		// $total_subsidi_recieved += $subsidies_recieved;
		// $total_commision_recieved += $commission_recieved;

		$total_other_recieved += $other_recieved;

		// $total_pension += $pension;

		$total_medicare_levi += $medicare_levi;

		// $total_retirement_annuity += $retirement_annuity;

		$total_income_tax += $income_tax;

		// $total_union_fee += $union_fee;
		// $total_sick_leave += $sick_leave;
		// $total_fringe_benefit += $fringe_benefit;
		// $total_other_deduction += $other_deduction;



		$total_superannuation += $superannuation;

		$total_work_cover += $work_cover;
	    }

	    $this->peoplexpenses['gross_salary'] = $total_gross_salary;

	    // $this->peoplexpenses['subsidies_recieved'] = $total_subsidi_recieved;
	    // $this->peoplexpenses['commission_recieved'] = $total_commision_recieved;

	    $this->peoplexpenses['other_recieved'] = $total_other_recieved;

	    // $this->peoplexpenses['pension'] = $total_pension;

	    $this->peoplexpenses['medicare'] = $total_medicare_levi;

	    // $this->peoplexpenses['retirement'] = $total_retirement_annuity;

	    $this->peoplexpenses['income'] = $total_income_tax;

	    // $this->peoplexpenses['union'] = $total_union_fee;
	    // $this->peoplexpenses['sick'] = $total_sick_leave;
	    // $this->peoplexpenses['fringe'] = $total_fringe_benefit;
	    // $this->peoplexpenses['other'] = $total_other_deduction;



	    $this->peoplexpenses['super'] = $total_superannuation;
	    $this->peoplexpenses['work'] = $total_work_cover;
	}

	$this->peoplexpenses['currency'] = $cur;
	return $this->peoplexpenses;
    }

    public function NPV($rate, $values) {
	if (!is_array($values)) {
	    return null;
	}

	$npv = 0.0;

	for ($i = 0; $i < count($values); $i++) {
	    $npv += $values[$i] / pow(1 + $rate, $i + 1);
	}
	return (is_finite($npv) ? $npv : null);
    }

    /* ============================================================================
      Index Expenses - Starts
      ============================================================================== */

    public function index() {
	$this->load->model('Dashboard_model');
	$data['page'] = $this->uri->segment(1);
	$data['user'] = $this->profile_model->get_detail_by_id($this->session->userdata('user')->id);
	//$data['no_of_user'] = $this->Dashboard_model->no_of_user();
	//$data['no_of_payments'] = $this->Dashboard_model->no_of_payments();
	$this->load->template_left_nav('Dashboard', $data);
    }

    /* ============================================================================
      Cover Page  - Starts
      ============================================================================== */

    public function my_plan_pdf() {
	$startup_total_funding = 0;
	$this->db->where(array('user_id' => $this->session->userdata('user')->id));
	$data[] = $this->company_setup_model->get_company_detail();
	$query = $this->db->get_where('directors', array('company_id' => $data[0]['id']));
	$data[] = $query->num_rows();
	$data[] = $query->result();
	$data[] = $this->db->get_where('planning_table', array('user_id' => $this->session->userdata('user')->id))->result();
	$data[] = $this->db->get_where('general_assumption', array('user_id' => $this->session->userdata('user')->id, 'company_id' => $data[0]['id']))->row();
	//log_message('error', "$ data[4] = " . $data[4]);
	$data[] = $this->get_operating_expense($this->session->userdata('user')->id);

	if ($data[0]['currency'] == "AUD" || $data[0]['currency'] == "USD") {
	    $cur = "$";
	} elseif ($data[0]['currency'] == "EUR") {
	    $cur = "€";
	} elseif ($data[0]['currency'] == "INR") {
	    $cur = "₹";
	} elseif ($data[0]['currency'] == "UK") {
	    $cur = "£";
	}

	// echo "<pre>";
	// print_r($this->ajax_break_even());
	// exit;


	$index = "";
	$tbl['index'] = "";
	$tbl['index'] = $tbl['index'] . '

        <table border="0" cellspacing="3" cellpadding="1">
            <thead>
                <tr style="background-color:#fff;font-weight:bold;text-align:center;">
                    <th colspan="2" width="100%">Index</th>
                </tr>
            </thead>
            <tr class="success">
                <td width="90%" colspan="1">&nbsp;</td>
                <td>Page</td>
            </tr>

            <tr style="background-color:#fff;font-weight:bold;font-style: italic;">
                <td colspan="2" width="100%">Introduction</td>
            </tr>

	    <tr>
                <td width="90%">Cover Page</td>
                <td>1</td>
            </tr>

	    <tr>
                <td width="90%">Index</td>
                <td>2</td>
            </tr>

            <tr style="background-color:#fff;font-weight:bold;font-style: italic;">
                <td colspan="2" width="100%">Assumptions</td>
            </tr>

            <tr>
                <td width="90%">General Business Assumptions</td>
                <td>3</td>
            </tr>

            <tr style="background-color:#fff;font-weight:bold;font-style: italic;">
                <td colspan="2" width="100%">Strategy and Planning</td>
            </tr>

            <tr>
                <td width="90%">Business Narrative</td>
                <td>4</td>
            </tr>


            <tr style="background-color:#fff;font-weight:bold;font-style: italic;">
                <td colspan="2" width="100%">Operating Expenses Reports</td>
            </tr>


            <tr>
                <td width="90%">Start Up Expenses</td>
                <td>5</td>
            </tr>


            <tr>
                <td width="90%">Operating Expenses Summary</td>
                <td>6</td>
            </tr>
            <tr>
                <td width="90%">Table Expenses Report</td>
                <td>7</td>
            </tr>
            <tr>
                <td width="90%">Payroll Expenses</td>
                <td>8</td>
            </tr>
            <tr>
                <td width="90%">Debtors and Creditors</td>
                <td>9</td>
            </tr>
            <tr style="background-color:#fff;font-weight:bold;font-style: italic;">
                <td colspan="2" width="100%">Monthly Reports</td>
            </tr>
            <tr>
                <td width="90%">Monthly Profit and Loss Statement</td>
                <td>10, 11</td>
            </tr>
            <tr>
                <td width="90%">Monthly Income Statement</td>
                <td>12,13,14</td>
            </tr>
            <tr>
                <td width="90%">Monthly Stock Analysis</td>
                <td>15, 16</td>
            </tr>
            <tr>
                <td width="90%">Monthly Break Even</td>
                <td>17</td>
            </tr>
            <tr style="background-color:#fff;font-weight:bold;font-style: italic;">
                <td colspan="2" width="100%">Year To Date (YTD) Reports</td>
            </tr>
            <tr>
                <td width="90%">YTD Profit And Loss</td>
                <td>18, 19</td>
            </tr>
            <tr>
                <td width="90%">YTD Income Statement</td>
                <td>20, 21</td>
            </tr>
            <tr>
                <td width="90%">YTD Balance Sheet</td>
                <td>22</td>
            </tr>
            <tr style="background-color:#fff;font-weight:bold;font-style: italic;">
                <td colspan="2" width="100%">Summary</td>
            </tr>
            <tr>
                <td width="90%">Debtors, Creditors and Key Ratios</td>
                <td>23</td>
            </tr>



        </table>';

	$tbl['genasum'] = "";

	$tbl['genasum'] = $tbl['genasum'] . '

        <table border="0" cellspacing="3" cellpadding="1">

            <thead>

                <tr style="background-color:#fff;font-weight:bold;text-align:center;">

                    <th colspan="2" width="100%">General Assumptions</th>

                </tr>

            </thead>

            <tr>

                <td width="100%" colspan="2" style="background-color:#fff;font-weight:bold;">Government Liabilities</td>

            </tr>

            <tr>

                <td width="90%">Company Tax</td>

                <td>' . $data[4]->company_tax . ' %</td>

            </tr>

            <tr>

                <td width="90%">GST/VAT Collected on Sales</td>

                <td>' . $data[4]->company_vat_collected . ' %</td>

            </tr>


            <tr>

                <td width="100%" colspan="2" style="background-color:#fff;font-weight:bold;">Trading Terms</td>

            </tr>

            <tr>

                <td width="90%">Receivables In Days</td>

                <td>' . $data[4]->rsvbl_in_days . ' Days</td>

            </tr>

            <tr>

                <td width="90%">Payables In Days</td>

                <td>' . $data[4]->pybl_in_days . ' Days</td>

            </tr>

            <tr>

                <td width="90%">GST/VAT Paid In Days</td>

                <td>' . $data[4]->vat_paid_in_days . ' Days</td>

            </tr>

            <tr>

                <td width="90%">Company Tax Paid In Days</td>

                <td>' . $data[4]->cmpnytx_paid_in_days . ' Days</td>

            </tr>

            <tr>

                <td width="100%" colspan="2" style="background-color:#fff;font-weight:bold;">Opening Balance</td>

            </tr>

            <tr>

                <td width="90%">Opening Cash Balance</td>

                <td>' . $cur . number_format($data[4]->opening_bank_balance, 0, '.', ',') . '</td>

            </tr>

            <tr>

                <td width="90%">Opening Debtors Balance</td>

                <td>' . $cur . number_format($data[4]->opening_debit_balance, 0, '.', ',') . '</td>

            </tr>

            <tr>

                <td width="90%">Opening Creditors</td>

                <td>' . $cur . number_format($data[4]->opening_credit_balance, 0, '.', ',') . '</td>

            </tr>

            <tr>

                <td width="100%" colspan="2" style="background-color:#fff;font-weight:bold;">Sales</td>

            </tr>

            <tr>

                <td width="90%">Sales Increase Each Year By</td>

                <td>' . $data[4]->sales_income_increase . ' %</td>

            </tr>

            <tr>

                <td width="90%">Service Cost Increase Each Year By</td>

                <td>' . $data[4]->services_income . ' %</td>

            </tr>

            <tr>

                <td width="100%" colspan="2" style="background-color:#fff;font-weight:bold;">Product Cost</td>

            </tr>

            <tr>

                <td width="90%">Sales Cost Increase Each year By</td>

                <td>' . $data[4]->sales_cost_increase . ' %</td>

            </tr>

            <tr>

                <td width="90%">Service Cost Increase Each Year By</td>

                <td>' . $data[4]->service_cost_increase . ' %</td>

            </tr>

            <tr>

                <td width="90%">Service Cost As % Of Service Income</td>

                <td>' . (int) $data[4]->sales_cost_increase . ' %</td>

            </tr>

            <tr>

                <td width="100%" colspan="2" style="background-color:#fff;font-weight:bold;">General Operating Expenses</td>

            </tr>

	    <tr>

                <td width="90%">Franchise and Royalty Fees</td>

                <td>' . $data[4]->franchise_royalty . ' %</td>

            </tr>


            <tr>

                <td width="90%">Marketing Increase Each Year By</td>

                <td>' . $data[4]->marketing_increase . ' %</td>

            </tr>

            <tr>

                <td width="90%">Public Relations Increase Each Year By</td>

                <td>' . $data[4]->public_reactions . ' %</td>

            </tr>

            <tr>

                <td width="90%">Administration Increase Each Year By</td>

                <td>' . $data[4]->administration_cost . ' %</td>

            </tr>

            <tr>

                <td width="90%">Other Increase Each Year By</td>

                <td>' . $data[4]->other_increase . ' %</td>

            </tr>

            <tr>

                <td width="90%">Depreciation On Equipment</td>

                <td>' . $data[4]->depreciation_on_equipment . ' %</td>

            </tr>

            <tr>

                <td width="90%">Bad Debt Written Off</td>

                <td>' . $data[4]->marketing_increase . ' %</td>

            </tr>

        </table>';

	/* ============================================================================
	  Payroll Liabilities  - Starts
	  ============================================================================== */

	$tbl['payroll'] = "";

	if ($data[0]['country'] != "Australia") {
	    $tbl['payroll'] = $tbl['payroll'] . '
            <p align="center" style="font-size:12px;font-weight:bold;">' . $data[0]['country'] . ' Payroll Tax Brackets</p>
            <table class="table table-striped table-bordered" cellpadding="2">
              <tr style="background-color:#F5F5F5;font-weight:bold;">
                <th width="25%">Income Tax Brackets</th>
                <th width="20%">Tax Bracket Value</th>
                <th width="15%">Tax Rate</th>
                <th width="20%">Equivelent Value</th>
                <th width="20%">Effective Rate</th>
              </tr>
              <tr>
                <td width="25%">From 0 to 14,000</td>
                <td width="20%">14,000</td>
                <td width="15%">10.5 %</td>
                <td width="20%">$ 1,470</td>
                <td width="20%">10.5 %</td>
              </tr>
              <tr>
                <td width="25%">From 14,000 to 48,000</td>
                <td width="20%">48,000</td>
                <td width="15%">17.5 %</td>
                <td width="20%">$ 5,950</td>
                <td width="20%">12.4 %</td>
              </tr>
              <tr>
                <td width="25%">From 48,000 to 70,000</td>
                <td width="20%">70,000</td>
                <td width="15%">30.5 %</td>
                <td width="20%">$ 12,660</td>
                <td width="20%">18.1 %</td>
              </tr>
              <tr>
                <td width="25%">From 70,001 to Above</td>
                <td width="20%">70,001</td>
                <td width="15%">33.0 %</td>
                <td width="20%">$ 12,660</td>
                <td width="20%">18.1 %</td>
              </tr>
            </table>

            <p align="center" style="font-size:12px;font-weight:bold;">' . $data[0]['country'] . ' Payroll Assumptions</p>

          <table class="table table-striped table-bordered" cellpadding="2">
            <tr>
              <td>Child Support Deductions</td>
              <td>1.0 %</td>
            </tr>
            <tr>
              <td>Student Load Deduction</td>
              <td>1.0 %</td>
            </tr>
            <tr>
              <td>Kiwi-Saver Employee Deductions </td>
              <td>2.0 %</td>
            </tr>
            <tr>
              <td>Income Tax (PAYG)</td>
              <td>12.0 %</td>
            </tr>
            <tr>
              <td>ACC Levies</td>
              <td>1.0 %</td>
            </tr>
            <tr>
              <td>Tax Credit For Payroll Donation</td>
              <td>-1.0 %</td>
            </tr>
            <tr>
              <td>Sick Leave</td>
              <td>1.0 %</td>
            </tr>
            <tr>
              <td>Holiday Pay Loading</td>
              <td>1.0 %</td>
            </tr>
          </table>

            <p align="center" style="font-size:12px;font-weight:bold;">' . $data[0]['country'] . ' Employer Contribution</p>

          <table class="table table-striped table-bordered" cellpadding="2">
            <tr>
              <td>Super Annuation :</td>
              <td>3.0 %</td>
            </tr>
          </table>';
	} else {
	    $tbl['payroll'] = $tbl['payroll'] . '
          <p align="center" style="font-size:12px;font-weight:bold;">' . $data[0]['country'] . ' Payroll Tax Brackets</p>
          <table class="table table-striped table-bordered" cellpadding="2">
              <tr style="background-color:#F5F5F5;font-weight:bold;">
                <th width="25%">Income Tax Brackets</th>
                <th width="20%">Tax Bracket Value</th>
                <th width="15%">Tax Rate</th>
                <th width="20%">Equivelent Value</th>
                <th width="20%">Effective Rate</th>
              </tr>
              <tr>
                <td width="25%">From 0 to 18,200</td>
                <td width="20%">18,200</td>
                <td width="15%">0.0 %</td>
                <td width="20%">$ 0</td>
                <td width="20%">0.0 %</td>
              </tr>
              <tr>
                <td width="25%">From 18,200 to 37,000</td>
                <td width="20%">37,000</td>
                <td width="15%">19.0 %</td>
                <td width="20%">$ 3,572</td>
                <td width="20%">9.7 %</td>
              </tr>
              <tr>
                <td width="25%">From 37,000 to 80,000</td>
                <td width="20%">80,000</td>
                <td width="15%">32.5 %</td>
                <td width="20%">$ 17,547</td>
                <td width="20%">21.9 %</td>
              </tr>
              <tr>
                <td width="25%">From 80,000 to 180,000</td>
                <td width="20%">180,000</td>
                <td width="15%">37.0 %</td>
                <td width="20%">$ 54,547</td>
                <td width="20%">30.3 %</td>
              </tr>
              <tr>
                <td width="25%">From 180,000 to above</td>
                <td width="20%">180,001</td>
                <td width="15%">45.0 %</td>
                <td width="20%">$ 54,547</td>
                <td width="20%">30.3 %</td>
              </tr>
          </table>

            <p align="center" style="font-size:12px;font-weight:bold;">' . $data[0]['country'] . ' Payroll Assumptions</p>

          <table class="table table-striped table-bordered" cellpadding="2">
            <tr>
              <td>Pension :</td>
              <td>1.0 %</td>
            </tr>
            <tr>
              <td>Medicare Levi :</td>
              <td>2.0 %</td>
            </tr>
            <tr>
              <td>Retirement Annuity :</td>
              <td>1.0 %</td>
            </tr>
            <tr>
              <td>Union Fee :</td>
              <td>0.5 %</td>
            </tr>
            <tr>
              <td>Sick Leave :</td>
              <td>1.0 %</td>
            </tr>
            <tr>
              <td>Fringe Benefit Tax :</td>
              <td>1.0 %</td>
            </tr>
          </table>

            <p align="center" style="font-size:12px;font-weight:bold;">' . $data[0]['country'] . ' Employer Contribution</p>

          <table class="table table-striped table-bordered" cellpadding="2">
            <tr>
              <td>Super Annuation :</td>
              <td>9.5 %</td>
            </tr>
            <tr>
              <td>Work Cover :</td>
              <td>3.0 %</td>
            </tr>
          </table>

            <p>How Low Income Tax Offset <b>(LITO)</b> is calculated,
            The Low Income Tax Offset is $ 455 in 2016-2017</p>
          <table class="table table-striped table-bordered" cellpadding="2">
            <tr style="background-color:#F5F5F5;font-weight:bold;">
              <td>Taxable Income</td>
              <td>LITO Offset Amount / Formula</td>
            </tr>
            <tr>
              <td>0 - $ 37,000</td>
              <td>$ 455</td>
            </tr>
            <tr>
              <td>$ 37,001 - $ 66,667</td>
              <td>$ 455 - [Taxable Income - $ 37,000] x 1.5 %</td>
            </tr>
            <tr>
              <td>$ 66,667 +</td>
              <td>NILL</td>
            </tr>
          </table>
        ';
	}

















	/* ============================================================================
	  Startup Expenses  - Starts
	  ============================================================================== */



	$user_id = $this->session->userdata('user')->id;

	$query = $this->db->query('select currency from company_detail where user_id="' . $user_id . '"');

	$data['everydata'] = $this->Startup_model->fetch_record($user_id);

	$currency = $query->row()->currency;

	$cur = '';

	if ($currency == "AUD" || $currency == "USD") {
	    $cur = "$";
	} elseif ($currency == "EUR") {
	    $cur = "€";
	} elseif ($currency == "UK") {
	    $cur = "£";
	} elseif ($currency == "INR") {
	    $cur = "₹";
	}



	$tbl['startup'] = $tbl['startup'] . '<table border="0" cellspacing="3" cellpadding="1">

      <thead>

        <tr style="background-color:#F5F5F5;font-weight:bold;text-align:center;">

            <th colspan="2" width="100%">Startup Expenses</th>

         </tr>

        <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

          <th colspan="2">Summary Working Capital</th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td width="80%">Directors Capital Investment</td>

          <td width="20%">';

	$user_id = $this->session->userdata('user')->id;

	$this->db->from('director');

	$this->db->where('user_id', $user_id);

	$query = $this->db->get();

	$dir = $query->result();

	foreach ($dir as $d) {
	    $dir_total = $dir_total + $d->amount;
	}

	$tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format($dir_total, 2, '.', ',');

	$tbl['startup'] = $tbl['startup'] . '</td>

        </tr>
       <tr>

          <td width="80%">Investor Capital Investment</td>

          <td width="20%">';

	$user_id = $this->session->userdata('user')->id;

	$this->db->from('investor');

	$this->db->where('user_id', $user_id);

	$query = $this->db->get();

	$inv = $query->result();

	foreach ($inv as $i) {
	    $inv_total = $inv_total + $i->amount;
	}


	$tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format($inv_total, 2, '.', ',');

	$tbl['startup'] = $tbl['startup'] . '</td>

        </tr>

        <tr>

          <td width="80%">Loan Amount</td>

          <td width="20%">';

	$tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format($data['everydata'][0]['loan_amount'], 2, '.', ',');

	$tbl['startup'] = $tbl['startup'] . '</td>

        </tr>

        <tr style="background-color:#F5F5F5">

          <td width="80%">Total Funding</td>

          <td width="20%">';
	$startup_total_funding = (int) $data['everydata'][0]['loan_amount'] + (int) $dir_total + (int) $inv_total;
	$tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format($startup_total_funding, 2, '.', ',');

	$tbl['startup'] = $tbl['startup'] . '</td>

        </tr>

      </tbody>

    </table>

    <table border="0" cellspacing="3" cellpadding="1">

      <thead>

        <tr>

          <th colspan="2">&nbsp;</th>

        </tr>

        <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

          <th colspan="2">Summary Startup Costs</th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td width="80%">Land & Buildings</td>

          <td width="20%">';

	$user_id = $this->session->userdata('user')->id;

	$this->db->from('one_time_cost');

	$this->db->where('user_id', $user_id);

	$this->db->where('one_time_cost', 'Land_Buildings');

	$query = $this->db->get();

	$Land = $query->result();

	foreach ($Land as $la) {
	    $la_total = $la_total + $la->total_cost;
	}

	if ($la_total) {
	    $tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format($la_total, 2, '.', ',');
	} else {
	    $tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format(0, 2, '.', ',');
	}

	$tbl['startup'] = $tbl['startup'] . '</td>

        </tr>

        <tr>

          <td width="80%">Plant & Equipment</td>

          <td width="20%">';

	$user_id = $this->session->userdata('user')->id;

	$this->db->from('one_time_cost');

	$this->db->where('user_id', $user_id);

	$this->db->where('one_time_cost', 'Plant_Equipment');

	$query = $this->db->get();

	$Land = $query->result();

	foreach ($Land as $la) {
	    $pe_total = $pe_total + $la->total_cost;
	}

	if ($pe_total) {
	    $tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format($pe_total, 2, '.', ',');
	} else {
	    $tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format(0, 2, '.', ',');
	}

	$tbl['startup'] = $tbl['startup'] . '</td>

        </tr>

        <tr>

          <td width="80%">Security Deposit(s)</td>

          <td width="20%">';

	$user_id = $this->session->userdata('user')->id;

	$this->db->from('one_time_cost');

	$this->db->where('user_id', $user_id);

	$this->db->where('one_time_cost', 'Security_Deposit');

	$query = $this->db->get();

	$Land = $query->result();

	foreach ($Land as $sd) {
	    $sd_total = $sd_total + $sd->total_cost;
	}

	if ($sd_total) {
	    $tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format($sd_total, 2, '.', ',');
	} else {
	    $tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format(0, 2, '.', ',');
	}

	$tbl['startup'] = $tbl['startup'] . '</td>

        </tr>

        <tr>

          <td width="80%">One -Time Costs</td>

          <td width="20%">';

	$user_id = $this->session->userdata('user')->id;

	$this->db->from('one_time_cost');

	$this->db->where('user_id', $user_id);

	$this->db->where('one_time_cost', 'ONE_TIME_COSTS');

	$query = $this->db->get();

	$Land = $query->result();

	foreach ($Land as $ot) {
	    $ot_total = $ot_total + $ot->total_cost;
	}

	if ($ot_total) {
	    $tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format($ot_total, 2, '.', ',');
	} else {
	    $tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format(0, 2, '.', ',');
	}

	$tbl['startup'] = $tbl['startup'] . '</td>

        </tr>

        <tr style="background-color:#F5F5F5">

          <td width="80%">Total</td>

          <td width="20%">';

	$tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format($la_total + $pe_total + $sd_total + $ot_total, 2, '.', ',');

	$tbl['startup'] = $tbl['startup'] . '</td>

        </tr>

        <tr>

          <td colspan="2">&nbsp;</td>

        </tr>

        <tr>

          <td width="80%">Total Average Monthly Budget Expenses</td>

          <td width="20%">';

	$user_id = $this->session->userdata('user')->id;

	$this->db->from('monthly_expense_budget');

	$this->db->where('user_id', $user_id);

	$query = $this->db->get();

	$monthly_budget = $query->result();

	foreach ($monthly_budget as $mb) {
	    $mb_total = $mb_total + $mb->total_cost;
	}

	if ($mb_total) {
	    $tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format($mb_total, 2, '.', ',');
	}

	$tbl['startup'] = $tbl['startup'] . '</td>

        </tr>

        <tr>

          <td width="80%">Total Capital Required</td>

          <td width="20%">';

	$tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format($la_total + $pe_total + $sd_total + $ot_total + $mb_total, 2, '.', ',');

	$tbl['startup'] = $tbl['startup'] . '</td>

        </tr>

        <tr style="background-color:#F5F5F5">

          <td width="80%">Opening Cash Balance</td>

          <td width="20%" >';

	$tbl['startup'] = $tbl['startup'] . $cur . ' ' . number_format(((int) $data['everydata'][0]['loan_amount'] + (int) $dir_total + (int) $inv_total) - ($la_total + $pe_total + $sd_total + $ot_total + $mb_total), 2, '.', ',');

	$tbl['startup'] = $tbl['startup'] . '</td>

        </tr>

      </tbody>

    </table>';

	/* ============================================================================
	  Operating Expenses  - Starts
	  ============================================================================== */



	$tbl['opexpenses'] = "";

	$tbl['opexpenses'] = $tbl['opexpenses'] . '

        <table border="0" cellspacing="3" cellpadding="1">

            <thead>

            <tr style="background-color:#F5F5F5;font-weight:bold;text-align:center;">

                <th colspan="6" width="100%">Operating Expenses Summary</th>

            </tr>

          </thead>

          <tr>

                    <td width="100%" colspan="6">&nbsp;</td>

                </tr>

                <tr style="background-color:#F5F5F5;font-weight:bold;">

                    <td width="40%">Account</td>

                    <td width="10%">Weekly</td>

                    <td width="10%">Monthly</td>

                    <td width="10%">Quaterly</td>

                    <td width="10%">Year 1</td>

                    <td width="10%">Year 2</td>

                    <td width="10%">Year 3</td>

                </tr>';

	foreach ($data[5]['expense_summary'] as $summary) {
	    $tbl['opexpenses'] = $tbl['opexpenses'] . '<tr>

          <td>Total ' . str_replace('_', ' ', $summary['purpose']) . '</td>

          <td>' . $cur . number_format($summary['weekly_cost'], 0, '.', ',') . '</td>

          <td>' . $cur . number_format($summary['monthly_cost'], 0, '.', ',') . '</td>

          <td>' . $cur . number_format($summary['quarterly_cost'], 0, '.', ',') . '</td>';

	    if ($summary['purpose'] == 'Marketing') {
		$cost_increase = (float) $data[5]['cost_increase_percentage'][0]['marketing'] / 100;
	    } elseif ($summary['purpose'] == 'Public_Relations') {
		$cost_increase = (float) $data[5]['cost_increase_percentage'][0]['pr'] / 100;
		//$cost_increase = (float) $data[4]->public_reactions / 100;
	    } elseif ($summary['purpose'] == 'Other') {
		$cost_increase = (float) $data[5]['cost_increase_percentage'][0]['other'] / 100;
	    } elseif ($summary['purpose'] == 'Administration') {
		$cost_increase = (float) $data[5]['cost_increase_percentage'][0]['ac'] / 100;
	    } else {
		$cost_increase = 1;
	    }

	    $year1 = $summary['yearly_cost'];

	    $year2 = intval($year1) * $cost_increase + intval($year1);

	    $year3 = intval($year2) * $cost_increase + intval($year2);

	    $total_year1 = $total_year1 + $year1;

	    $total_year2 = $total_year2 + $year2;

	    $total_year3 = $total_year3 + $year3;

	    $total_w += $summary['weekly_cost'];

	    $total_m += $summary['monthly_cost'];

	    $total_q += $summary['quarterly_cost'];

	    $tbl['opexpenses'] = $tbl['opexpenses'] . '<td>' . $cur . number_format($year1, 0, '.', ',') . '</td>

                  <td>' . $cur . number_format($year2, 0, '.', ',') . '</td>

                  <td>' . $cur . number_format($year3, 0, '.', ',') . '</td>

                </tr>';
	}



	$tbl['opexpenses'] = $tbl['opexpenses'] . '<tr style="background-color:#F5F5F5;font-weight:bold;">

            <td><b>Total Expenses :</b></td>

            <td><b>' . $cur . number_format($total_w, 0, '.', ',') . '</b></td>

            <td><b>' . $cur . number_format($total_m, 0, '.', ',') . '</b></td>

                <td><b>' . $cur . number_format($total_q, 0, '.', ',') . '</b></td>

            <td><b>' . $cur . number_format($total_year1, 0, '.', ',') . '</b></td>

            <td><b>' . $cur . number_format($total_year2, 0, '.', ',') . '</b></td>

            <td><b>' . $cur . number_format($total_year3, 0, '.', ',') . '</b></td>

            </tr>

          </table>';

	//===Graph============
	//$total_year1 = 0;
	//$total_year2 = 0;
	//$total_year3 = 0;

	if ($total_year1 > $total_year2) {
	    $max_x = $total_year1;
	} elseif ($total_year2 > $total_year3) {
	    $max_x = $total_year2;
	} elseif ($total_year2 > $total_year1) {
	    $max_x = $total_year2;
	} elseif ($total_year3 > $total_year2) {
	    $max_x = $total_year3;
	} elseif ($total_year3 > $total_year1) {
	    $max_x = $total_year3;
	} elseif ($total_year1 > $total_year3) {
	    $max_x = $total_year1;
	}

	// Pie Grahph



	$pieGraphValues = array();
	$pieGraphLables = array();
	$pieGraphColors = array();
	foreach ($data[5]['expense_summary'] as $summary) {
	    if ($summary['purpose'] == 'Marketing') {
		$pieGraphColors[] = '#FFE1E6';
	    } elseif ($summary['purpose'] == 'Public_Relations') {
		$pieGraphColors[] = '#D2EBFF';
	    } elseif ($summary['purpose'] == 'Other') {
		$pieGraphColors[] = '#EEE';
	    } elseif ($summary['purpose'] == 'Administration') {
		$pieGraphColors[] = '#FFF3D9';
	    } else {
		$pieGraphColors[] = '';
	    }
	    $pieGraphValues[$summary['purpose']] = $summary['yearly_cost'];
	    $pieGraphLables[] = $summary['purpose'];
	}
	$settings = array(
	    'graph_title' => 'Operating Expenses',
	    'graph_title_font_size' => 22,
	    'top' => 0,
	    'back_colour' => '#eee',
	    'stroke_colour' => '#000',
	    'back_stroke_width' => 0,
	    'back_stroke_colour' => '#eee',
	    'show_labels' => true,
	    'show_label_amount' => true,
	    'label_font' => 'Georgia',
	    'label_font_size' => '11',
	    'label_colour' => '#000',
	    'label_position' => '0.60',
	    'units_before_label' => $this->data["currency"],
	    'sort' => false,
	    'pad_right' => 120,
	    'legend_entry_height' => 15,
	    'legend_entry_width' => 15,
	    'legend_entry_pad' => 0,
	    // 'legend_title' => 'Legend',
	    'legend_text_side' => 'right',
	    'legend_columns' => 1,
	    'legend_position' => 'outer right 0 80',
	    // 'legend_stroke_width' => 0,
	    'legend_shadow_opacity' => 0,
	    // 'aspect_ratio' => 'auto',
	    'legend_entries' => $pieGraphLables,
	);

	$oppiegraph = new SVGGraph(350, 250, $settings);

	//$colour = $pieGraphColors;
	$oppiegraph->Colours($pieGraphColors);
	$oppiegraph->Values($pieGraphValues);

	$graph[] = $oppiegraph->Fetch('PieGraph', false);

	// Bar Graph
	$colour = array('#FFF3D9', '#D2EBFF', '#FFE1E6');

	$settings = array(
	    'axis_max_v' => $max_x,
	    'graph_title' => 'Operating Expenses',
	    'graph_title_font_size' => 22,
	    'top' => 0,
	    'back_colour' => '#eee', 'stroke_colour' => '#000',
	    'back_stroke_width' => 0, 'back_stroke_colour' => '#eee',
	    'axis_colour' => '#333', 'axis_overlap' => 2,
	    'axis_font' => 'Georgia', 'axis_font_size' => 12,
	    'label_y' => 'Value show in ' . $this->data["currency"],
	);

	$opgraph = new SVGGraph(350, 250, $settings);

	$opgraph->Colours($colour);

	$opgraph->Values(array('Year 1' => $total_year1, 'Year 2' => $total_year2, 'Year 3' => $total_year3));

	$graph[] = $opgraph->Fetch('BarGraph', false);

	/* ============================================================================
	  Table Expenses  - Starts
	  ============================================================================== */

	$user_id = $this->session->userdata('user')->id;

	$query3 = $this->db->query('select *from company_detail where user_id="' . $user_id . '"');
	$currency = $query3->row()->currency;

	$cur = '';

	if ($currency == "AUD" || $currency == "USD") {
	    $cur = "$";
	} elseif ($currency == "EUR") {
	    $cur = "€";
	} elseif ($currency == "UK") {
	    $cur = "£";
	} elseif ($currency == "INR") {
	    $cur = "?";
	}

	$tbl['expenses_report'] = "";
	$tbl['expenses_report'] = $tbl['expenses_report'] . '<table border="0" cellspacing="3" cellpadding="1">
            <tr style="font-size:17px;font-weight:bold;text-align:center;">
                <td colspan="5">Table Expenses Report</td>
            </tr>';

	$query = $this->db->query("SELECT purpose FROM expenses WHERE user_id = '$user_id' AND purpose !='' GROUP BY purpose ORDER BY purpose ASC");

	foreach ($query->result() as $row) {
	    $tbl['expenses_report'] = $tbl['expenses_report'] . '
                <tr style="font-size:17px;font-weight:bold;">
                    <td colspan="5">' . $row->purpose . '</td>
                </tr>

                <tbody>
                    <tr style="background-color:#d4d7dc;font-weight:bold;">
                        <td width="16%">Expenses ID</td>
                        <td width="16%">Description</td>
                        <td width="16%">Weekly Costs</td>
                        <td width="16%">Monthly Costs</td>
                        <td width="16%">Quarterly Costs</td>
                        <td width="16%">Yearly Costs</td>
                    </tr>';

	    $query2 = $this->db->query("SELECT *FROM expenses WHERE purpose ='$row->purpose' AND user_id='$user_id'");

	    foreach ($query2->result() as $expenses) {
		$tbl['expenses_report'] = $tbl['expenses_report'] . '<tr>
                    <td>' . $expenses->id . '</td>
                    <td>' . $expenses->description . '</td>
                    <td>' . $cur . ' ' . number_format($expenses->weekly_cost, 0, '.', ',') . '</td>
                    <td>' . $cur . ' ' . number_format($expenses->monthly_cost, 0, '.', ',') . '</td>
                    <td>' . $cur . ' ' . number_format($expenses->quarterly_cost, 0, '.', ',') . '</td>
                    <td>' . $cur . ' ' . number_format($expenses->yearly_cost, 0, '.', ',') . '</td>
                </tr>';

		$total_weekly = $total_weekly + $expenses->weekly_cost;
		$total_monthly = $total_monthly + $expenses->monthly_cost;
		$total_quaterly = $total_quaterly + $expenses->quarterly_cost;
		$total_yearly = $total_yearly + $expenses->yearly_cost;
	    }
	    $tbl['expenses_report'] = $tbl['expenses_report'] . '<tr style="background-color:#F5F5F5">
                <td colspan="2">Total :</td>
                <td>' . $cur . ' ' . number_format($total_weekly, 0, '.', ',') . '</td>
                <td>' . $cur . ' ' . number_format($total_monthly, 0, '.', ',') . '</td>
                <td>' . $cur . ' ' . number_format($total_quaterly, 0, '.', ',') . '</td>
                <td>' . $cur . ' ' . number_format($total_yearly, 0, '.', ',') . '</td>
            </tr>';
	    $tbl['expenses_report'] = $tbl['expenses_report'] . '<tr>
                <td colspan="6"><hr/></td>
            </tr>';

	    $total_weekly = 0;
	    $total_monthly = 0;
	    $total_quaterly = 0;
	    $total_yearly = 0;
	}


	$tbl['expenses_report'] = $tbl['expenses_report'] . '</tbody></table>';

	//echo '<pre>'; print_r($settings); exit;
	/* ============================================================================
	  Payroll  - Starts
	  ============================================================================== */


	$this->ajax_people_calculating_summary();

	$tbl['payexpenses'] = "";

	$tbl['payexpenses'] = $tbl['payexpenses'] . '

        <table border="0" cellspacing="3" cellpadding="1">

        <thead>

          <tr style="font-weight:bold;text-align:center;">

                <th colspan="13" width="100%"><p align="center" style="font-size:12px;font-weight:bold;">' . $data[0]['country'] . ' Company Payroll Liabilities</p></th>

          </tr>

          <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:left;">

              <th width="12%">Account</th>';

	for ($i = 0; $i < 12; $i++) {
	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<th width="7%">' . $this->data['table_header'][$i] . '</th>';
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '<th width="7%"><strong>Total</strong></th>

          </tr>

        </thead>

          <tr>

              <td colspan="14"><strong>Renumerations</strong></td>

          </tr>

          <tr>

            <td width="12%">Gross Salary</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $total += $this->peoplexpenses['gross_salary'];

	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($this->peoplexpenses["gross_salary"], 0, ".", ",") . '</td>';

	    if ($i == 12) {
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total, 0, ".", ",") . '</td>';

		$total_gross_salary = $total;
	    }
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>

          <tr>

            <td width="12%">Other</td>';

	$total = 0;

	for ($i = 1; $i <= 12; $i++) {
	    $total += $this->peoplexpenses['other_recieved'];

	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($this->peoplexpenses["other_recieved"], 0, ".", ",") . '</td>';

	    if ($i == 12) {
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total, 0, ".", ",") . '</td>';

		$total_other = $total;
	    }
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>

          <tr style="background-color:#F5F5F5">

            <td width="12%"><b>Total Renumeration</b></td>';

	$total_1 = 0;

	for ($i = 1; $i <= 12; $i++) {
	    $total_1 = $this->peoplexpenses["other_recieved"] + $this->peoplexpenses["commission_recieved"] + $this->peoplexpenses["subsidies_recieved"] + $this->peoplexpenses["gross_salary"];

	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_1, 0, ".", ",") . '</td>';

	    if ($i == 12) {
		$total_renumeration = $total_gross_salary + $total_commission + $total_subsidi + $total_other;

		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_renumeration, 0, ".", ",") . '</td>';
	    }
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr></table>';

	$tbl['payexpenses'] = $tbl['payexpenses'] . '

      <table border="0" cellspacing="3" cellpadding="1">

        <tr>

            <td colspan="14"><strong>Payroll Liabilities</strong></td>

        </tr>

    <tr>

    <td width="12%">Payroll Tax</td>';

	$total = 0;

	for ($i = 1; $i <= 12; $i++) {
	    $total += $this->peoplexpenses['income'];

	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($this->peoplexpenses["income"], 0, ".", ",") . '</td>';

	    if ($i == 12) {
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total, 0, ".", ",") . '</td>';

		$total_income = $total;
	    }
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>


    <tr>

    <td width="12%">Medicare Levi</td>';

	$total = 0;

	for ($i = 1; $i <= 12; $i++) {
	    $total += $this->peoplexpenses['medicare'];

	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($this->peoplexpenses["medicare"], 0, ".", ",") . '</td>';

	    if ($i == 12) {
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total, 0, ".", ",") . '</td>';

		$total_medicare = $total;
	    }
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>

  <tr>



    <tr style="background-color:#F5F5F5">

          <td width="12%"><b>Total Deductions</b></td>';

	$total_2 = 0;

	for ($i = 1; $i <= 12; $i++) {
	    $total_2 = $this->peoplexpenses["other"] + $this->peoplexpenses["fringe"] + $this->peoplexpenses["sick"] + $this->peoplexpenses["union"] + $this->peoplexpenses["income"] + $this->peoplexpenses["retirement"] + $this->peoplexpenses["medicare"] + $this->peoplexpenses["pension"];

	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_2, 0, ".", ",") . '</td>';

	    if ($i == 12) {
		$total_deducation = $total_income + $total_other;

		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_deducation, 0, ".", ",") . '</td>';
	    }
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr></table>';

	$tbl['payexpenses'] = $tbl['payexpenses'] . '

      <table border="0" cellspacing="3" cellpadding="1">

        <tr>

            <td colspan="14"><strong>Superannuation / WorkCover</strong></td>

        </tr>

        <tr>

    <td width="12%">Superannuation</td>';

	$total = 0;

	for ($i = 1; $i <= 12; $i++) {
	    $total += $this->peoplexpenses['super'];

	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($this->peoplexpenses["super"], 0, ".", ",") . '</td>';

	    if ($i == 12) {
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total, 0, ".", ",") . '</td>';

		$total_super = $total;
	    }
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>

        <tr>

          <td width="12%">WorkCover</td>';

	$total = 0;

	for ($i = 1; $i <= 12; $i++) {
	    $total += $this->peoplexpenses['work'];

	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($this->peoplexpenses["work"], 0, ".", ",") . '</td>';

	    if ($i == 12) {
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total, 0, ".", ",") . '</td>';

		$total_work = $total;
	    }
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>

        <tr style="background-color:#F5F5F5">

          <td width="12%"><b>Total</b></td>';

	$total_3 = 0;

	for ($i = 1; $i <= 12; $i++) {
	    $total_3 = $this->peoplexpenses["super"] + $this->peoplexpenses["work"];

	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_3, 0, ".", ",") . '</td>';

	    if ($i == 12) {
		$total_superwork = $total_super + $total_work;

		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_superwork, 0, ".", ",") . '</td>';
	    }
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>

        <tr style="background-color:#F5F5F5">

          <td width="12%"><b>Total Liabilities</b></td>';

	$total_4 = 0;

	for ($i = 1; $i <= 12; $i++) {
	    $total_4 = ($this->peoplexpenses["super"] + $this->peoplexpenses["work"]) + ($this->peoplexpenses["other_recieved"] + $this->peoplexpenses["commission_recieved"] + $this->peoplexpenses["subsidies_recieved"] + $this->peoplexpenses["gross_salary"]);

	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_4, 0, ".", ",") . '</td>';

	    if ($i == 12) {
		$total_payroll = $total_renumeration + $total_superwork;

		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_payroll, 0, ".", ",") . '</td>';
	    }
	}



	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>






        <p align="center" style="font-size:16px;font-weight:thin;">' . $data[0]['country'] . ' Company Payroll Liabilities Summary Charts<br> We will add some interesting full bar charts on this vacant space</p> '
		. '</table>';

	/* ============================================================================
	  Debtors and Creditors  - Starts
	  ============================================================================== */


	$this->creditor_debtor_balance_report();
	$tbl['debandcre'] = "";
	$tbl['debandcre'] = $tbl['debandcre'] . '
      <table border="0" cellspacing="3" cellpadding="1">
         <thead>
            <tr style="font-weight:bold;text-align:center;">
               <th colspan="13" width="100%">Debtors and Creditors Balances</th>
            </tr>
                <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
                  <th width="40%">Account</th>
                  <th width="20%">Year 1</th>
                  <th width="20%">Year 2</th>
                  <th width="20%">Year 3</th>
               </tr>
            </thead>
         <tr style="font-weight:bold;text-align:center;">
         <td colspan="4"><strong>Debtors Calculation Schedule</strong></td>
      </tr>

      <tr>
          <td width="40%"><b>Opening Debtors</b></td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['debandcre'] = $tbl['debandcre'] . '<td width="20%" style="text-align:right;">' . $this->credeb["currency"] . " " . number_format($this->credeb["opening_debtors_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['debandcre'] = $tbl['debandcre'] . '
      </tr>

      <tr>
          <td width="40%">Invoicing</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['debandcre'] = $tbl['debandcre'] . '<td width="20%" style="text-align:right;">' . $this->credeb["currency"] . " " . number_format($this->credeb["invoicing_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['debandcre'] = $tbl['debandcre'] . '
      </tr>

      <tr>
          <td width="40%">Less Cash Receipts</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['debandcre'] = $tbl['debandcre'] . '<td width="20%" style="text-align:right;">' . $this->credeb["currency"] . " " . number_format($this->credeb['less_cash_receipts_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['debandcre'] = $tbl['debandcre'] . '
      </tr>

      <tr style="background-color:#F5F5F5">
          <td width="40%"><b>Closing Debtors</b></td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['debandcre'] = $tbl['debandcre'] . '<td width="20%" style="text-align:right;">' . $this->credeb["currency"] . " " . number_format($this->credeb['closing_debtors_' . $i], 0, ".", ",") . '</td>';
	}

	$tbl['debandcre'] = $tbl['debandcre'] . '
          </tr>

      <tr class="success">
          <td colspan="4">&nbsp;</td>
      </tr>

      <tr style="font-weight:bold;text-align:center;">
         <td colspan="4"><strong>Creditors Calculation Schedule</strong></td>
     </tr>

      <tr>
         <td width="40%"><b>Opening Creditors</b></td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['debandcre'] = $tbl['debandcre'] . '<td width="20%" style="text-align:right;">' . $this->credeb["currency"] . " " . number_format($this->credeb["opening_creditors_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['debandcre'] = $tbl['debandcre'] . '
      </tr>
      <tr>
          <td width="40%">Purchases and Expenses</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['debandcre'] = $tbl['debandcre'] . '<td width="20%" style="text-align:right;">' . $this->credeb["currency"] . " " . number_format($this->credeb["purchase_expenses_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['debandcre'] = $tbl['debandcre'] . '
      </tr>

      <tr>
         <td width="40%">Less Cash Payments</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['debandcre'] = $tbl['debandcre'] . '<td width="20%" style="text-align:right;">' . $this->credeb["currency"] . " " . number_format($this->credeb["less_cash_payments_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['debandcre'] = $tbl['debandcre'] . '</tr>
        <tr style="background-color:#F5F5F5;">
         <td width="40%"><b>Closing Creditors</b></td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['debandcre'] = $tbl['debandcre'] . '<td width="20%" style="text-align:right;">' . $this->credeb["currency"] . " " . number_format($this->credeb["closing_creditors_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['debandcre'] = $tbl['debandcre'] . '</tr></table>';

	/* ============================================================================
	  Monthly Profit and Loss - Starts
	  ============================================================================== */




	$tbl['mon_proloss'] = "";
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '

        <table border="0" cellspacing="3" cellpadding="1">
            <thead>
                <tr style="font-weight:bold;text-align:center;">
                    <th colspan="13" width="100%">Monthly Profit Loss</th>
                </tr>
                  <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

                <td width="17%">Account</td>';

	for ($i = 0; $i < 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%">' . $this->data['table_header'][$i] . '</td>';
	}

	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>

            </thead>

                <tr class="success">
                    <td colspan="13"><strong>Income From Sales</strong></td>
                </tr>
            <tr>

            <td width="17%">Imported Products</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["imported_spp_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>
          <tr>
            <td width="17%">Local Products</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["product_spp_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>
                  <tr>
                    <td width="17%">Local Services</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["service_month_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>

        <tr>
            <td width="17%">Online Revenue</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["annual_revenue_yearly1"] / 12, 0, ".", ",") . '</td>';
	}

	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>

        <tr style="background-color:#F5F5F5;">

          <td width="17%"><strong>Total Revenue</strong></td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['total_income_' . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>
      <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>

            <tr class="success">
              <td colspan="4"><strong>Cost Of Goods</strong></td>
            </tr>
             <tr>
            <td width="17%">Imported Products</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['imported_ssp_' . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>

          <tr>

            <td width="17%">Local Products</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['product_ssp_' . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>

        <tr>

        <td width="17%">Local Services</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['cogserviceyear1'] / 12, 0, ".", ",") . '</td>';
	}

	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>

        <tr>

        <td width="17%">Online Product Costs</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['annual_cost_yearly1'] / 12, 0, ".", ",") . '</td>';
	}


	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>

                  <tr style="background-color:#F5F5F5">

                <td width="17%"><strong>Total Cost of Goods</strong></td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['total_income2_' . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>

                  <tr style="background-color:#F5F5F5">

                <td width="17%">% of income</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . number_format($this->data['tot_income_percent_' . $i], 0, '.', ',') . '%</td>';
	}

	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>

      <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>

            <tr class="success">
              <td colspan="13"><strong>Gross Profit </strong></td>
            </tr>

          <tr style="background-color:#F5F5F5">

            <td width="17%"><strong>Total Gross Profit</strong></td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['gross_profit_' . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>

          <tr style="background-color:#F5F5F5">

            <td width="17%">% of income</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . number_format($this->data['gross_profit_percent_' . $i], 0, '.', ',') . '%</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>
            <td colspan="4">&nbsp;</td>

        </tr>



          <tr class="success">
            <td colspan="13"><strong>Payroll</strong></td>
        </tr>
        <tr style="background-color:#F0F8FF">
          <td width="17%"><strong>Total Payroll Expenses</strong></td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['grandplyear1'] / 12, 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>



        <tr style="background-color:#F5F5F5">
          <td width="17%">% of income</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . number_format($this->data['plpercentyear_' . $i], 0, '.', ',') . '%</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>
         <td colspan="4">&nbsp;</td>

        </tr>

        <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>

        <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>

        <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>


  <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>
  <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>



  <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>








        <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
            <td width="17%">Account</td>';
	for ($i = 0; $i < 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%">' . $this->data['table_header'][$i] . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>
        </thead>


        <tr class="success">
            <td colspan="13"><strong>Overheads </strong></td>
        </tr>

        <tr>
        <td width="17%">Operating Expenses</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['oeyear1'] / 12, 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>


        <tr style="background-color:#F0F8FF">
          <td width="17%">Total Royalty Fee</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['royalty_fee_month_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>




        <tr>
            <td width="17%">Bad Debts Off</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['baddebt_' . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>




        <tr style="background-color:#F0F8FF">
          <td width="17%"><strong>Total Overheads</strong></td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['grandoemonth_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>



        <tr style="background-color:#F5F5F5">
          <td width="17%">% of income</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . number_format($this->data['oepercentmonth_' . $i], 2, '.', ',') . '%</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>



        <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>


        <tr style="background-color:#F0F8FF">
          <td width="17%"><strong>Total Expenses</strong></td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['grandexpensesmonth_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>


        <tr style="background-color:#F5F5F5">
          <td width="17%">% of inocome</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . number_format($this->data['expensespercentyear1'] / 12, 2, '.', ',') . '%</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>


        <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>

        <tr>
        <td width="17%"><strong>EBITDA</strong></td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['ebitda_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>


        <tr style="background-color:#F5F5F5">
          <td width="17%">% of income</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . number_format($this->data['ebitda_income_ratio_' . $i], 0, '.', ',') . '%</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>



        <tr class="success">
                <td colspan="4">&nbsp;</td>
        </tr>

        <tr>
            <td colspan="4"><strong>Property,Pant & Equipment </strong></td>
        </tr>

        <tr>
        <td width="17%">(PP&E) Depreciation</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['pedyear1'] / 12, 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>


       <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>

        <tr>
        <td width="17%"><strong>EBIT</strong></td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['ebit_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>


        <tr style="background-color:#F5F5F5">
          <td width="17%">% of income</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . number_format($this->data['ebit_income_ratio_' . $i], 0, '.', ',') . '%</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>


        <tr class="success">
        <td colspan="4">&nbsp;</td>
        </tr>




        <tr>
            <td colspan="4"><strong>Finance</strong></td>
        </tr>




        <tr>
            <td width="17%">Interest on Finance</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['interest_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>


        <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>





        <tr style="background-color:#F0F8FF">
          <td width="17%"><strong>Net Profit before Tax</strong></td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['pretax_profit_month_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>



        <tr style="background-color:#F5F5F5">
          <td width="17%">% of income</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . number_format($this->data['pretaxpercent_month_' . $i], 0, '.', ',') . '%</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>



        <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>



        <tr>
          <td width="17%"><strong>Company Tax</strong></td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['comptax_month_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>


        <tr>
          <td colspan="13">&nbsp;</td>
        </tr>


        <tr>
          <td width="17%"><strong>Net Profit after Tax</strong></td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['net_profit_month_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>

        <tr style="background-color:#F5F5F5">
          <td width="17%">% of income</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . number_format($this->data['posttaxpercent_month_' . $i], 0, '.', ',') . '%</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>


        <tr>
          <td colspan="13">&nbsp;</td>
        </tr>



        <tr class="success">
            <td colspan="13"><strong>Accumulated Net Profit</strong></td>
        </tr>

        <tr style="background-color:#F5F5F5">
          <td width="17%"><strong>Total Net Profit</strong></td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_proloss'] = $tbl['mon_proloss'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['accumulatedgrossprofit_month_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_proloss'] = $tbl['mon_proloss'] . '</tr>
  </table>';

	/* ============================================================================
	  Monthly Cash Flow - Starts
	  ============================================================================== */

	$this->ajax_cash_flow_report();
	for ($j = 1; $j <= 12; $j++) {
	    $total_capital_item[$j] = 0;
	    // Old
	    //$total_capital_item[$j] = ($this->data["cp_" . $j] + $this->data["is_" . $j] + $this->data["dp_" . $j]);
	    // New
	    $total_capital_item[$j] = ($this->data["cp_" . $j] + $this->data['payment_frequency_' . $j] + $this->data['payment_frequency_director_' . $j]);
	    $gstvat_id[$j] = $this->data["gstvat_paids_" . $j];
	    //Section III

	    $cal_total_disburstment[$j] = 0;
	    $cal_total_disburstment[$j] = $gstvat_id[$j] + $this->data["subtot_cost_" . $j];

	    //Section V

	    $tot_outgoing_operation[$j] = 0;
	    $tot_outgoing_operation[$j] = $cal_total_disburstment[$j] + ($this->data["grandplyear1"] / 12);

	    //Section VI

	    $gstvat_pay[$j] = 0;
	    $payg_tax[$j] = 0;
	    if ($this->data["vat_in_days"] == "30") {
		$gstvat_pay[$j] = $this->data["gstvat_remittance_" . $j];
		$payg_tax[$j] = $this->peoplexpenses["other"] + $this->peoplexpenses["income"] + $this->peoplexpenses["medicare"];
	    }

	    if ($this->data["vat_in_days"] == "90") {
		if ($j == 4) {
		    for ($i = 1; $i <= 3; $i++) {
			$gstvat_payment += $this->data["gstvat_remittance_" . $i];
			$payg_tax_payment += $this->peoplexpenses["other"] + $this->peoplexpenses["income"] + $this->peoplexpenses["medicare"];
		    }
		    $gstvat_pay[$j] = $gstvat_payment;
		    $payg_tax[$j] = $payg_tax_payment;
		    $gstvat_payment = 0;
		    $payg_tax_payment = 0;
		} elseif ($j == 7) {
		    for ($i = 4; $i <= 6; $i++) {
			$gstvat_payment += $this->data["gstvat_remittance_" . $i];
			$payg_tax_payment += $this->peoplexpenses["other"] + $this->peoplexpenses["income"] + $this->peoplexpenses["medicare"];
		    }
		    $gstvat_pay[$j] = $gstvat_payment;
		    $payg_tax[$j] = $payg_tax_payment;
		    $gstvat_payment = 0;
		    $payg_tax_payment = 0;
		} elseif ($j == 10) {
		    for ($i = 7; $i <= 9; $i++) {
			$gstvat_payment += $this->data["gstvat_remittance_" . $i];
			$payg_tax_payment += $this->peoplexpenses["other"] + $this->peoplexpenses["income"] + $this->peoplexpenses["medicare"];
		    }
		    $gstvat_pay[$j] = $gstvat_payment;
		    $payg_tax[$j] = $payg_tax_payment;
		    $gstvat_payment = 0;
		    $payg_tax_payment = 0;
		} elseif ($j == 12) {
		    for ($i = 10; $i <= 12; $i++) {
			$gstvat_payment += $this->data["gstvat_remittance_" . $i];
			$payg_tax_payment += $this->peoplexpenses["other"] + $this->peoplexpenses["income"] + $this->peoplexpenses["medicare"];
		    }
		    $gstvat_pay[$j] = $gstvat_payment;
		    $payg_tax[$j] = $payg_tax_payment;
		    $gstvat_payment = 0;
		    $payg_tax_payment = 0;
		}
	    }
	    $tot_business_activity[$j] = 0;
	    $tot_business_activity[$j] = $gstvat_pay[$j] + $this->data["comptax_month_" . $j] + $payg_tax[$j];
	    //Section VII
	    // Added By raza 2sep 2020

	    $subt_tot_outgoing[$j] = 0;
	    $subt_tot_outgoing[$j] = $tot_outgoing_operation[$j] - ($this->peoplexpenses["other"] + $this->peoplexpenses["income"] + $this->peoplexpenses["medicare"]);

	    $tot_outgoing[$j] = 0;
	    $tot_outgoing[$j] = $tot_business_activity[$j] + $subt_tot_outgoing[$j]; //Removeing from this + $this->data['royalty_fee_month_' . $j];
	    //Section VIII

	    $tot_net_cash_gain[$j] = 0;
	    $tot_net_cash_gain[$j] = ($this->data["tot_receipt_" . $j] + $this->data["gst_vat_on_receiable" . $j]) - $tot_outgoing[$j]; // + $payg_tax[$j] is removed after $this->data["tot_receipt_" . $j]
	    $closing_cash_balance[$j] = 0;
	    $opening_cash_balance[$j] = 0;

	    if ($j == 1) {
		$closing_cash_balance[$j] = $this->data["opening_bank"] + $tot_net_cash_gain[$j] + $total_capital_item[$j];
	    }

	    if ($j >= 2) {
		$k = $j - 1;

		$opening_cash_balance[$j] = $closing_cash_balance[$k];
		$closing_cash_balance[$j] = $opening_cash_balance[$j] + $tot_net_cash_gain[$j] + $total_capital_item[$j];
	    }

	    $closing_cash_balance[$j] -= $this->data["loanpaymentmonth_" . $j];
	}

	$tbl['mon_cashflow'] = "";

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '

        <table border="0" cellspacing="3" cellpadding="1">

         <thead>

         <tr style="font-weight:bold;text-align:center;">

            <th colspan="13" width="100%">Monthly Cash Flow</th>

        </tr>

          <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

            <th width="17%">Account</th>';

	for ($i = 0; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<th width="7%">' . $this->data["table_header"][$i] . '</th>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

          </thead>

          <tr class="success">

              <td colspan="13"><strong>Cash Income</strong></td>

          </tr>

          <tr>



      <td width="17%">Opening Cash Balance</td>';

	for ($i = 1; $i <= 12; $i++) {
	    if ($i == 1) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["opening_bank"], 0, ".", ",") . '</td>';
	    } else {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($opening_cash_balance[$i], 0, ".", ",") . '</td>';
	    }
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>






<-----





          <tr>

            <td width="17%">Imported Products</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["imported_spp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

          <tr>

            <td width="17%">Products</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["product_spp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

          <tr>

            <td width="17%">Services</td>';

	$service_month = $this->data['serviceyear'] / 12;
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($service_month, 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

          <tr>

            <td width="17%">Online Revenue</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['annual_revenue_yearly1'] / 12, 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

----->








          <tr style="background-color:#F5F5F5;">
            <td width="17%"><strong>Projected Revenue</strong></td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['sub_total_income_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

          <tr>
            <td width="17%">GST/VAT on Revenue</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["gst_vat_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

    <tr style="background-color:#F5F5F5">
        <td width="17%"><strong>Total Revenue</strong></td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["total_cash_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

 <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>
          <tr class="success">
            <td colspan="4"><strong>Aged Receivables</strong></td>';
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>
          <tr>
            <td width="17%">Opening Debtors Balance</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["opening_debt_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>
          <tr>
            <td width="17%">Imported Products</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["imported_spp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>
          <tr>
            <td width="17%">Local Products/Services</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["local_products_services_month_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>
          <tr>
            <td width="17%">Online Revenue</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['annual_revenue_yearly1'] / 12, 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>
        <tr>
            <td width="17%">Sub-Total Receipt</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["sub-tot_receipt_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>
        <tr>
            <td width="17%">GST/VAT On Receivables</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["gst_vat_on_receiable" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>
        <tr style="background-color:#F5F5F5">
            <td width="17%">Provision for Bad Debt</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " -" . number_format($this->data["baddebt_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

          <tr style="background-color:#F5F5F5">

            <td width="17%"><strong>Total Receipts</strong></td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format(($this->data["tot_receipt_" . $i] + $this->data["gst_vat_on_receiable" . $i]), 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

          <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>

    <td colspan="4"><strong>Disbursements</strong></td>';
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>
    <tr>
        <td width="17%">Opening Creditors Balance</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["creditors_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '
    </tr>

    <tr>
        <td width="17%">Import Product Costs</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["imported_scp_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '
    </tr>

    <tr>

        <td width="17%">Local Product Costs</td>';
	if ($this->data['colspan_pybl'] == "0") {
	    for ($i = 1; $i <= 12; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["product_scp_" . $i], 0, ".", ",") . '</td>';
	    }
	} else {
	    for ($i = 1; $i <= 12; $i++) {
		$local_product_costs = $this->data["product_scp_" . $i];
		if ($i <= $this->data['colspan_pybl']) {
		    $local_product_costs = 0;
		}

		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($local_product_costs, 0, ".", ",") . '</td>';
	    }
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>



        <tr>
            <td width="17%">Local Service Costs</td>';
	if ($this->data["colspan_pybl"] == "0") {
	    for ($i = 1; $i <= 12; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["cogserviceyear1"] / 12, 0, ".", ",") . '</td>';
	    }
	} else {
	    for ($i = 1; $i <= $this->data["colspan_pybl"]; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format(0, 0, ".", ",") . '</td>';
	    }

	    for ($i = 1 + $this->data["colspan_pybl"]; $i <= 12; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["cogserviceyear1"] / 12, 0, ".", ",") . '</td>';
	    }
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>



        <tr>
    <td width="17%">Online Products Costs</td>';

	if ($this->data["colspan_pybl"] == "0") {
	    for ($i = 1; $i <= 12; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["annual_cost_yearly1"] / 12, 0, ".", ",") . '</td>';
	    }
	} else {
	    for ($i = 1; $i <= $this->data["colspan_pybl"]; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format(0, 0, ".", ",") . '</td>';
	    }

	    for ($i = 1 + $this->data["colspan_pybl"]; $i <= 12; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["annual_cost_yearly1"] / 12, 0, ".", ",") . '</td>';
	    }
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>
        <tr>
            <td width="17%">Operating Expenses</td>';
	if ($this->data["colspan_pybl"] == "0") {
	    for ($i = 1; $i <= 12; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["oeyear1"] / 12, 0, ".", ",") . '</td>';
	    }
	} else {
	    for ($i = 1; $i <= $this->data["colspan_pybl"]; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format(0, 0, ".", ",") . '</td>';
	    }

	    for ($i = 1 + $this->data["colspan_pybl"]; $i <= 12; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["oeyear1"] / 12, 0, ".", ",") . '</td>';
	    }
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>
    <tr>

    <td width="17%">Franchise/Royalty Fees</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["royalty_fee_month_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '

    </tr>


        <tr style="background-color:#F5F5F5">
            <td width="17%"><strong>Sub - Total Costs</strong></td>';

	if ($this->data["colspan_pybl"] == "0") {
	    for ($i = 1; $i <= 12; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["subtot_cost_" . $i], 0, ".", ",") . '</td>';
	    }
	} else {
	    for ($i = 1; $i <= $this->data["colspan_pybl"]; $i++) {
		if ($i == 1 || $i == 2 || $i == 3) {
		    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["subtot_cost_" . $i], 0, ".", ",") . '</td>';
		}
		//echo '<pre>';
		//print_r($this->data["subtot_cost_" . $i]);
	    }

	    for ($i = 1 + $this->data["colspan_pybl"]; $i <= 12; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["subtot_cost_" . $i], 0, ".", ",") . '</td>';
	    }
	}
	//exit;


	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '
        </tr>




    <tr class="success">
        <td width="17%">VAT/GST Component</td>';

	if ($this->data["colspan_pybl"] == "0") {
	    for ($i = 1; $i <= 12; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($gstvat_id[$i], 0, ".", ",") . '</td>';
	    }
	} else {
	    for ($i = 1; $i <= $this->data["colspan_pybl"]; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($gstvat_id[$i], 0, ".", ",") . '</td>';
	    }

	    for ($i = 1 + $this->data["colspan_pybl"]; $i <= 12; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($gstvat_id[$i], 0, ".", ",") . '</td>';
	    }
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

          <tr style="background-color:#F5F5F5">

            <td width="17%"><strong>Total Disburstments</strong></td>';

	if ($this->data["colspan_pybl"] == "0") {
	    for ($i = 1; $i <= 12; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($cal_total_disburstment[$i], 0, ".", ",") . '</td>';
	    }
	} else {
	    for ($i = 1; $i <= $this->data["colspan_pybl"]; $i++) {
		if ($i == 1 || $i == 2 || $i == 3) {
		    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($cal_total_disburstment[$i], 0, ".", ",") . '</td>';
		} else {
		    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format(0, 0, ".", ",") . '</td>';
		}
	    }

	    for ($i = 1 + $this->data["colspan_pybl"]; $i <= 12; $i++) {
		$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($cal_total_disburstment[$i], 0, ".", ",") . '</td>';
	    }
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

 <tr class="success">

            <td colspan="4">&nbsp;</td>

        </tr>


  <tr class="success">

            <td colspan="4">&nbsp;</td>

        </tr>


  <tr class="success">

            <td colspan="4">&nbsp;</td>

        </tr>

























 <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
            <th width="17%">Account</th>';
	for ($i = 0; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<th width="7%">' . $this->data["table_header"][$i] . '</th>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

          </thead>
          <tr class="success">
              <td colspan="13"><strong>Payroll</strong></td>
          </tr>

















          <tr style="background-color:#F5F5F5">

            <td width="17%"><strong>Payroll Liabilities<br />(Exc:PAYG)</strong></td>';

	for ($i = 1; $i <= 12; $i++) {
	    // change by Raza 14 april 2020
	    $payroll_liabilities = 0;
	    $payg_tax_quarter = 0;
	    if (($i > $this->data['vat_in_days_offset']) && ($this->data["vat_in_days"] == '30')) {
		$payroll_liabilities = (($this->data["grandplyear1"] / 12) - $payg_tax[$i]);
	    } elseif (($i > $this->data['vat_in_days_offset']) && ($this->data["vat_in_days"] == '90')) {
		$payg_tax_quarter = $this->peoplexpenses["other"] + $this->peoplexpenses["income"] + $this->peoplexpenses["medicare"];
		$payroll_liabilities = (($this->data["grandplyear1"] / 12) - $payg_tax_quarter);
	    } else {
		$payroll_liabilities = 0;
	    }
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($payroll_liabilities, 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

 <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>


          <tr style="background-color:#F5F5F5">

            <td width="17%"><strong>Sub-Total</strong></td>';

	for ($i = 1; $i <= 12; $i++) {

	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($subt_tot_outgoing[$i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

        <tr class="success">

            <td colspan="4">&nbsp;</td>

        </tr>


          <tr class="success">

            <td colspan="4"><strong>Business Activity Statement</strong></td>

          </tr>


        <tr>
            <td width="17%">GST/VAT Payment</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($gstvat_pay[$i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '
        </tr>

        <tr>
            <td width="17%">PAYG Tax/Medicare</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($payg_tax[$i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '
        </tr>

        <tr>

            <td width="17%">Company Tax</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["comptax_month_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

          <tr style="background-color:#F5F5F5">

            <td width="17%" ><b>Total Business Activity</b></td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($tot_business_activity[$i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

         <tr class="success">

            <td colspan="4">&nbsp;</td>

        </tr>


    <tr style="background-color:#F5F5F5">
        <td width="17%"><strong>Total Outgoings</strong></td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($tot_outgoing[$i], 0, ".", ",") . '</td>';
	    //echo '<pre>';
	    //print_r($tot_outgoing[$i]);
	}
	//exit;
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>
    <tr>

    <td colspan="13">&nbsp;</td>

    </tr>

          <tr class="success">
            <td colspan="4" ><strong>Net Operating Cash Gain (Loss)</strong></td>
          </tr>
        <tr>
    <td width="17%">Net Cash Gain (Loss)</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($tot_net_cash_gain[$i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

       <tr>

        <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>


        <tr class="success">
          <td colspan="4"><strong>Business Expense</strong></td>
          </tr>



    <td width="17%">Capital Purchase</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["cp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

          <tr>

            <td width="17%">Investor Issued (Shares)</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['payment_frequency_' . $i], 0, ".", ",") . '</td>';
	}

	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>

          <tr>

            <td width="17%">Dividends Paid</td>';

	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['payment_frequency_director_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr>



    <tr style="background-color:#F5F5F5">
        <td width="17%"><strong>Total Capital Items</strong></td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($total_capital_item[$i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '
    </tr>


    <tr class="success">
        <td colspan="4">&nbsp;</td>
    </tr>


    <tr class="success">
          <td colspan="4"><strong>Business Finance</strong></td>
        </tr>




  <tr>
        <td width="17%">Loan Principal Repayments</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;color:red;">' . $this->data["currency"] . " -" . number_format($this->data["principal_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '
    </tr>

  <tr>
        <td width="17%">Loan Interest Repayments</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;color:red;">' . $this->data["currency"] . " -" . number_format($this->data["interest_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '
    </tr>

    <tr>
        <td width="17%">Loan Interest Repayments</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;color:red;">' . $this->data["currency"] . " -" . number_format($this->data["loanpaymentmonth_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '
    </tr>


    <tr class="success">
        <td colspan="4">&nbsp;</td>
    </tr>





    <tr style="background-color:#F5F5F5">
        <td width="17%"><strong>Closing Cash Balance</strong></td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($closing_cash_balance[$i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '
    </tr>



    <tr>
        <td colspan="13">&nbsp;</td>
    </tr>













  <tr class="success">
          <td colspan="4"><strong>Business Activity</strong></td>
        </tr>








    <tr style="background-color:#F5F5F5">
        <td width="17%">GST/VAT Collected</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["gstvat_collect_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '
    </tr>

    <tr style="background-color:#F5F5F5">
        <td width="17%">GST/VAT Paid
    </td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["gstvat_paids_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '
    </tr>

    <tr style="background-color:#F5F5F5">
        <td width="17%"><strong>GST Remittance</strong></td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '<td width="7%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["gstvat_remittance_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['mon_cashflow'] = $tbl['mon_cashflow'] . '</tr></table>';

	/* ============================================================================
	  Summary Product  - Starts
	  ============================================================================== */



	$localresult = $this->ajax_calculating_summary_product();

	$tbl['summary_product'] = "";

	$tbl['summary_product'] = $tbl['summary_product'] . '

            <table border="0" cellspacing="3" cellpadding="1">

          <thead>

            <tr style="font-weight:bold;text-align:center;font-size:12px;">

                <th colspan="15" width="100%">Local Products - Projected Sales by Products</th>

              </tr>

            <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

              <th width="12%">Account</th>';

	for ($i = 0; $i < 12; $i++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">' . $this->data["table_header"][$i] . '</th>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">Year 1</th>

              <th width="6%">Year 2</th>

              <th width="6%">Year 3</th>

            </tr>

          </thead>

          <tbody>

            <tr style="background-color:#F5F5F5">

              <td width="12%">Opening Qty</td>';

	for ($summary_oq = 1; $summary_oq <= 15; $summary_oq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . number_format($localresult["total_oq_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>

            <tr>

            <td width="12%">Sales Projection</td>';

	for ($summary_sp = 1; $summary_sp <= 15; $summary_sp++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . number_format($localresult["total_sp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>

            <tr>

            <td width="12%">Purchases</td>';

	for ($summary_p = 1; $summary_p <= 15; $summary_p++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . number_format($localresult["total_p_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>

            <tr style="background-color:#F5F5F5">

            <td width="12%">Closing Qty</td>';

	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . number_format($localresult["total_cq_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>

            <tr>

                <td colspan="15">&nbsp;</td>

            </tr>

            <tr>

                <td colspan="15">&nbsp;</td>

            </tr>

          </tbody>

      </table>';

	$tbl['summary_product'] = $tbl['summary_product'] . '

            <table border="0" cellspacing="3" cellpadding="1">

        <thead>

            <tr style="font-weight:bold;text-align:center;font-size:12px;">

                <th colspan="15" width="100%">Local Products - Stock Cost Evaluation</th>

              </tr>

            <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

              <th width="12%">Account</th>';

	for ($i = 0; $i < 12; $i++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">' . $this->data["table_header"][$i] . '</th>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">Year 1</th>

              <th width="6%">Year 2</th>

              <th width="6%">Year 3</th>

            </tr>

        </thead>

        <tbody>

          <tr style="background-color:#F5F5F5">

            <td width="12%">Opening Qty</td>';

	for ($summary_oq = 1; $summary_oq <= 15; $summary_oq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_soq_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>

          <tr>

          <td width="12%">Sales Projection</td>';

	for ($summary_sp = 1; $summary_sp <= 15; $summary_sp++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_ssp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>

          <tr>

          <td width="12%">Purchases</td>';

	for ($summary_p = 1; $summary_p <= 15; $summary_p++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_scp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>

          <tr style="background-color:#F5F5F5">

          <td width="12%">Closing Qty</td>';

	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_scq_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>

          <tr>

            <td colspan="15">&nbsp;</td>

          </tr>

          <tr>

            <td colspan="15">&nbsp;</td>

          </tr>

      </tbody>

    </table>';

	$tbl['summary_product'] = $tbl['summary_product'] . '

            <table border="0" cellspacing="3" cellpadding="1">

        <thead>

            <tr style="font-weight:bold;text-align:center;font-size:12px;">

                <th colspan="15" width="100%">Local Products - Monthly Gross Profit Projection</th>

              </tr>

            <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

              <th width="12%">Account</th>';

	for ($i = 0; $i < 12; $i++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">' . $this->data["table_header"][$i] . '</th>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">Year 1</th>

              <th width="6%">Year 2</th>

              <th width="6%">Year 3</th>

            </tr>

        </thead>

        <tbody>

          <tr>

            <td width="12%">Sales Projection</td>';

	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_spp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>

            <tr>

            <td width="12%">Purchases</td>';

	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_pp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>

            <tr style="background-color:#F5F5F5">

            <td width="12%">Gross/Profit</td>';

	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_pg_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>

          <tr>

            <td colspan="15">&nbsp;</td>

          </tr>

          <tr>

            <td colspan="15">&nbsp;</td>

          </tr>

        </tbody>

        </table>';

	/* ============================================================================
	  Import Product  - Starts
	  ============================================================================== */



	$impproduct_all = $this->ajax_calculating_summary_imp_product();

	$tbl['summary_imp_product'] = "";

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '

          <table border="0" cellspacing="3" cellpadding="1">

          <thead>

            <tr style="font-weight:bold;text-align:center;font-size:12px;">

              <th colspan="15" width="100%">Imported Products - Projected Sales by Products</th>

            </tr>

            <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

              <th width="12%">Account</th>';

	for ($i = 0; $i < 12; $i++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<th width="6%">' . $this->data["table_header"][$i] . '</th>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<th width="6%">Year 1</th>

              <th width="6%">Year 2</th>

              <th width="6%">Year 3</th>

            </tr>

          </thead>

          <tbody>

            <tr style="background-color:#F5F5F5">

              <td width="12%">Opening Qty</td>';

	for ($summary_oq = 1; $summary_oq <= 15; $summary_oq++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<td width="6%" style="text-align:right;">' . number_format($impproduct_all["total_oq_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '</tr>

            <tr>

            <td width="12%">Sales Projection</td>';

	for ($summary_sp = 1; $summary_sp <= 15; $summary_sp++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<td width="6%" style="text-align:right;">' . number_format($impproduct_all["total_sp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '</tr>

            <tr>

            <td width="12%">Purchases</td>';

	for ($summary_p = 1; $summary_p <= 15; $summary_p++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<td width="6%" style="text-align:right;">' . number_format($impproduct_all["total_p_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '</tr>

            <tr style="background-color:#F5F5F5">

            <td width="12%">Closing Qty</td>';

	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<td width="6%" style="text-align:right;">' . number_format($impproduct_all["total_cq_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '</tr>

            <tr>

              <td colspan="15">&nbsp;</td>

            </tr>

            <tr>

              <td colspan="15">&nbsp;</td>

            </tr>

          </tbody>

      </table>';

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '

      <table border="0" cellspacing="3" cellpadding="1">

        <thead>

            <tr style="font-weight:bold;text-align:center;font-size:12px;">

              <th colspan="15" width="100%">Imported Products - Stock Cost Evaluation</th>

            </tr>

            <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

              <th width="12%">Account</th>';

	for ($i = 0; $i < 12; $i++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<th width="6%">' . $this->data["table_header"][$i] . '</th>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<th width="6%">Year 1</th>

              <th width="6%">Year 2</th>

              <th width="6%">Year 3</th>

            </tr>

        </thead>

        <tbody>

          <tr style="background-color:#F5F5F5">

            <td width="12%">Opening Qty</td>';

	for ($summary_oq = 1; $summary_oq <= 15; $summary_oq++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<td width="6%" style="text-align:right;">' . $impproduct_all['cur'] . " " . number_format($impproduct_all["total_soq_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '</tr>

          <tr>

          <td width="12%">Sales Projection</td>';

	for ($summary_sp = 1; $summary_sp <= 15; $summary_sp++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<td width="6%" style="text-align:right;">' . $impproduct_all['cur'] . " " . number_format($impproduct_all["total_ssp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '</tr>

          <tr>

          <td width="12%">Purchases</td>';

	for ($summary_p = 1; $summary_p <= 15; $summary_p++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<td width="6%" style="text-align:right;">' . $impproduct_all['cur'] . " " . number_format($impproduct_all["total_scp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '</tr>

          <tr style="background-color:#F5F5F5">

          <td width="12%">Closing Qty</td>';

	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<td width="6%" style="text-align:right;">' . $impproduct_all['cur'] . " " . number_format($impproduct_all["total_scq_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '</tr>

          <tr>

            <td colspan="15">&nbsp;</td>

          </tr>

          <tr>

            <td colspan="15">&nbsp;</td>

          </tr>

      </tbody>

    </table>';

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '

      <table border="0" cellspacing="3" cellpadding="1">

        <thead>

            <tr style="font-weight:bold;text-align:center;font-size:12px;">

              <th colspan="15" width="100%">Imported Products - Monthly Gross Profit Projection</th>

            </tr>

            <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

              <th width="12%">Account</th>';

	for ($i = 0; $i < 12; $i++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<th width="6%">' . $this->data["table_header"][$i] . '</th>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<th width="6%">Year 1</th>

              <th width="6%">Year 2</th>

              <th width="6%">Year 3</th>

            </tr>

        </thead>

        <tbody>

          <tr>

            <td width="12%">Sales Projection</td>';

	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<td width="6%" style="text-align:right;">' . $impproduct_all['cur'] . " " . number_format($impproduct_all["total_spp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '</tr>

          <tr>

            <td width="12%">Purchases</td>';

	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<td width="6%" style="text-align:right;">' . $impproduct_all['cur'] . " " . number_format($impproduct_all["total_pp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '</tr>

          <tr style="background-color:#F5F5F5">

            <td width="12%">Gross/Profit</td>';

	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '<td width="6%" style="text-align:right;">' . $impproduct_all['cur'] . " " . number_format($impproduct_all["total_pg_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['summary_imp_product'] = $tbl['summary_imp_product'] . '</tr>

          <tr>

            <td colspan="15">&nbsp;</td>

          </tr>

          <tr>

            <td colspan="15">&nbsp;</td>

          </tr>

        </tbody>

      </table>';

	//===========================Import Products Ends ===========================










	/* ============================================================================
	  Breakeven Point - Starts
	  ============================================================================== */


	$this->ajax_break_even();

	$tbl['breakeven'] = "";
	$tbl['breakeven'] = $tbl['breakeven'] . '
    <table border="0" cellspacing="3" cellpadding="1">
        <thead>
        <tr style="background-color:#F5F5F5;font-size:12px;font-weight:bold;text-align:center;">
              <th colspan="13" width="100%">Breakeven Report</th>
        </tr>
        <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
            <th width="40%">Account</th>
            <th width="20%">Year 1</th>
            <th width="20%">Year 2</th>
            <th width="20%">Year 3</th>
          </tr>
      </thead>
      <tr class="success">
          <td colspan="4"><strong>Breakeven Income Level</strong></td>
      </tr>
      <tr>
        <td width="40%">Total Income</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<td width="20%" style="text-align:right;">' . $this->breven["currency"] . " " . number_format($this->breven["break_even_total_income_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr>
      <tr>
        <td width="40%">Variable Costs</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<td width="20%" style="text-align:right;">' . $this->breven["currency"] . " " . number_format($this->breven["break_even_variable_costs_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr>
      <tr>
        <td width="40%">Contribution</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<td width="20%" style="text-align:right;">' . $this->breven["currency"] . " " . number_format($this->breven["break_even_contribution_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr>
      <tr>
        <td width="40%">Contribution Margin %</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<td width="20%" style="text-align:right;">' . number_format($this->breven["break_even_contribution_margin_" . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr>
        <tr class="success">
          <td colspan="4">&nbsp;</td>
      </tr>
        <tr class="success">
          <td colspan="4"><strong>Fixed Costs</strong></td>
      </tr>
      <tr>
        <td width="40%">Employment Expenses</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<td width="20%" style="text-align:right;">' . $this->breven["currency"] . " " . number_format($this->breven["break_even_employement_expense_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr>
      <tr>
        <td width="40%">Overheads</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<td width="20%" style="text-align:right;">' . $this->breven["currency"] . " " . number_format($this->breven["break_even_overheads_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr>
         <tr class="success">
          <td colspan="4">&nbsp;</td>
      </tr>
      <tr style="background-color:#F5F5F5">
        <td width="40%">Total Fixed Costs</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<td width="20%" style="text-align:right;">' . $this->breven["currency"] . " " . number_format($this->breven["break_even_total_fixed_costs_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr>
         <tr class="success">
          <td colspan="4">&nbsp;</td>
      </tr>
      <tr style="background-color:#F5F5F5">
        <td width="40%">Breakeven Income Required</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<td width="20%" style="text-align:right;">' . $this->breven["currency"] . " " . number_format($this->breven["break_even_income_required_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr>
      <tr style="background-color:#F5F5F5">
        <td width="40%">Percentage of Forecast Income</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<td width="20%" style="text-align:right;">' . number_format($this->breven["break_even_forecast_income_" . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr></table>';
	$tbl['breakeven'] = $tbl['breakeven'] . '
        <table border="0" cellspacing="3" cellpadding="1">
            <thead>
            <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
                <th width="17%">Account</th>';
	for ($i = 0; $i < 12; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<th width="7%">' . $this->breven["table_header"][$i] . '</th>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr>
          </thead>
          <tr class="success">
              <td colspan="4">&nbsp;</td>
          </tr>
          <tr>
            <td width="17%">Total Income</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<td width="7%" style="text-align:right;">' . $this->breven["currency"] . " " . number_format($this->breven["break_even_total_income2_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr>
        <tr>
          <td width="17%">Total Expenses</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<td width="7%" style="text-align:right;">' . $this->breven["currency"] . " " . number_format($this->breven["break_even_total_expenses_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr>
        <tr>
          <td width="17%">Operating Profit \ (Loss) before tax</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<td width="7%" style="text-align:right;">' . $this->breven["currency"] . " " . number_format($this->breven["break_even_operating_profit_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr>
        <tr class="success">
              <td colspan="4">&nbsp;</td>
          </tr>
        <tr style="background-color:#F5F5F5">
          <td width="17%">Audit Check</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $tbl['breakeven'] = $tbl['breakeven'] . '<td width="7%" style="text-align:right;">' . $this->breven["currency"] . " " . number_format($this->breven["break_even_audit_check_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['breakeven'] = $tbl['breakeven'] . '</tr><tr class="success">

            </tr></table>';

	//===Breackeven Graph============

	$settings = array(
	    'graph_title' => 'Breakeven Report',
	    'graph_title_font_size' => 22,
	    'top' => 200,
	    'back_colour' => '#eee', 'stroke_colour' => '#000',
	    'back_stroke_width' => 0, 'back_stroke_colour' => '#eee',
	    'axis_colour' => '#333', 'axis_overlap' => 2,
	    'axis_font' => 'Georgia', 'axis_font_size' => 12,
	    'label_y' => 'Value show in ' . $this->data["currency"],
	    'grid_colour' => '#333', 'label_colour' => '#000',
	    'pad_right' => 60, 'pad_left' => 5,
	    'link_base' => '/', 'link_target' => '_top',
	    'marker_size' => 5,
	    'marker_type' => array('circle', 'circle', 'circle'),
	    'marker_colour' => array('blue', 'red', 'yellow'),
	);
	$pegraph = new SVGGraph(1000, 350, $settings);

	$graph_1 = array();
	$value_1 = array();
	$graph_2 = array();
	$value_2 = array();
	$graph_3 = array();
	$value_3 = array();
	for ($i = 1; $i <= 12; $i++) {
	    $value_1 . array_push($value_1, $this->breven['graph_data_1_' . $i]);
	    $value_2 . array_push($value_2, $this->breven['graph_data_2_' . $i]);
	    $value_3 . array_push($value_3, $this->breven['graph_data_3_' . $i]);
	}
	$graph_1 = array_combine($this->breven['table_header'], $value_1);
	$graph_2 = array_combine($this->breven['table_header'], $value_2);
	$graph_3 = array_combine($this->breven['table_header'], $value_3);

	//$graph_1.array_push($graph_1, $this->breven['graph_data_1_'.$i]);
	//$graph_2.array_push($graph_2, $this->breven['graph_data_2_'.$i]);
	//$graph_3.array_push($graph_3, $this->breven['graph_data_3_'.$i]);
	//print_r($values);
	$pegraph->Values(array($graph_1, $graph_2, $graph_3));
	$graph[] = $pegraph->Fetch('MultiLineGraph', false);

	/* ============================================================================
	  Yearly Profit and Loss - Starts
	  ============================================================================== */


	$tbl['yearly_proloss'] = "";

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

        <table border="0" cellspacing="3" cellpadding="1">

          <thead>

            <tr style="font-weight:bold;text-align:center;">

              <th colspan="13" width="100%">Yearly Profit Loss Report</th>

            </tr>

            <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

                <th width="40%">Account</th>

                <th width="20%">Year 1</th>

                <th width="20%">Year 2</th>

                <th width="20%">Year 3</th>

              </tr>

          </thead>

          <tr class="success">

              <td colspan="4"><strong>Income From Sales</strong></td>

          </tr>

          <tr>

            <td width="40%">Imported Products</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["cogimportyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr>

            <td width="40%">Local Products</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["cogproductyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr>

            <td width="40%">Local Services</td>';

	for ($i = 1; $i <= 3; $i++) {
	    ($i == 1) ? $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["serviceyear"], 0, ".", ",") . '</td>' :
			    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["serviceyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr>

            <td width="40%">Online  Revenue</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["annual_revenue_yearly" . $i], 0, ".", ",") . '</td>';
	}


	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr style="background-color:#F5F5F5">

            <td width="40%"><b>Total Revenue</b></td>';
	$pre_profit_graph = array();

	for ($i = 1; $i <= 3; $i++) {
	    if ($i == 1) {
		$pre_profit_graph[] = $this->data["grandyear"];
	    } else {
		$pre_profit_graph[] = $this->data["grandyear" . $i];
	    }
	    ($i == 1) ? $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["grandyear"], 0, ".", ",") . '</td>' :
			    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["grandyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr>

              <td colspan="4">&nbsp;</td>

          </tr>

          <tr class="success">

              <td colspan="4"><strong>Cost Of Goods From Sales</strong></td>

          </tr>

          <tr>

            <td width="40%">Imported Products</td>';

	for ($i = 1; $i <= 3; $i++) {
	    ($i == 1) ? $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["importedyear"], 0, ".", ",") . '</td>' :
			    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["importedyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr>

            <td width="40%">Local Products</td>';

	for ($i = 1; $i <= 3; $i++) {
	    ($i == 1) ? $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["productyear"], 0, ".", ",") . '</td>' :
			    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["productyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr>

            <td width="40%">Local Services</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["cogserviceyear" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr>

            <td width="40%">Online Costs</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["annual_cost_yearly" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr style="background-color:#F5F5F5">

            <td width="40%"><b>Total Cost Of Goods</b></td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["grandcogyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr style="background-color:#F5F5F5">

            <td width="40%">% Cost Of Goods</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . number_format($this->data["cogpercentyear" . $i], 0, ".", ",") . ' %</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr>

              <td colspan="4">&nbsp;</td>

          </tr>

          <tr class="success">

              <td colspan="4"><strong>Gross Profit</strong></td>

          </tr>

          <tr style="background-color:#F5F5F5">

            <td width="40%"><b>Total Gross Profit</b></td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["grandgpyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr style="background-color:#F5F5F5">

            <td width="40%">% Gross Profit</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . number_format($this->data["gppercentyear" . $i], 0, ".", ",") . ' %</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr>

              <td colspan="4">&nbsp;</td>

          </tr>





        <tr style="background-color:#F5F5F5">

            <td width="40%"><strong>Total Payroll Expenses</strong></td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["grandplyear" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

        </tr>
            <tr style="background-color:#F5F5F5">
                <td width="40%">% of income</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . number_format($this->data["yearly_total_payroll_expenses_percent" . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

            </tr>

            <tr>
                <td colspan="4">&nbsp;</td>
          </tr>

          <tr class="success">
                  <td colspan="4"><strong>Overheades</strong></td>
          </tr>


          <tr>
                <td width="40%">Operating Expenses</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["oeyear" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

            </tr>

            <tr style="background-color:#F5F5F5">
                <td width="40%">Total Royalty Fee</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["grandroyaltyyear_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

            </tr>

            <td width="40%">Bad Debts Off</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['yearly_baddebt_' . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr style="background-color:#F5F5F5">
                <td width="40%"><strong>Total Overheads</strong></td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["grandoeyear" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr style="background-color:#F5F5F5">
                <td width="40%">% of income</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["oepercentyear" . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '
          </tr>


          <tr>
              <td colspan="4">&nbsp;</td>
          </tr>


          <tr style="background-color:#F5F5F5">

              <td width="40%"><strong>Total Expenses</strong></td>';
	$tot_expenses_graph = array();
	for ($i = 1; $i <= 3; $i++) {
	    $tot_expenses_graph[] = $this->data["grandexpensesyear" . $i];
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["grandexpensesyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>
          <tr style="background-color:#F5F5F5">
            <td width="40%">% Expenses</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . number_format($this->data["expensespercentyear" . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '
          </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>

            <tr style="background-color:#F5F5F5">
                <td width="40%"><strong>EBITDA</strong></td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['ebitda_year_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

            </tr>
            <tr style="background-color:#F5F5F5">
                <td width="40%">% of income</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data[""] . " " . number_format($this->data["ebitda_year_perc_" . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '
            </tr>

            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>

         <tr>
            <td colspan="4"><strong>Property,Pant & Equipment </strong></td>
        </tr>



            <tr>
            <td width="40%">(PP&E) Depreciation</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["pedyear" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr>
              <td colspan="4">&nbsp;</td>
          </tr>


            <tr style="background-color:#F5F5F5">
                <td width="40%"><strong>EBIT</strong></td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['ebit_year_' . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '
          </tr>

          <tr style="background-color:#F5F5F5">
                <td width="40%">% of income</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data[""] . " " . number_format($this->data['ebit_year_perc_' . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '
            </tr>
        <tr>
            <td colspan="4">&nbsp;</td>
        </tr>





        <tr>
              <td colspan="4"><strong>Finance</strong></td>
          </tr>


        <tr>
            <td width="40%">Interest on Finance</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_interest_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

        </tr>




            <tr>
              <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>


       <thead>

          <tr style="font-weight:bold;text-align:center;">

              <th colspan="13" width="100%">Profit and Loss Report</th>

            </tr>

            <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

                <th width="40%">Account</th>

                <th width="20%">Year 1</th>

                <th width="20%">Year 2</th>

                <th width="20%">Year 3</th>

              </tr>

          </thead>

          <tr class="success">

              <td colspan="4"><strong>Continued...</strong></td>

          </tr>















            <tr style="background-color:#F5F5F5">
                <td width="40%"><strong>Net Profit before Tax</strong></td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["grandpretaxyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '
          </tr>
          <tr style="background-color:#F5F5F5">
                <td width="40%">% of income</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . number_format($this->data["pretaxpercentyear" . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr>
              <td colspan="4">&nbsp;</td>
          </tr>



          <tr>
                <td width="40%"><strong>Tax Expense</strong></td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["comptaxyear" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>

          <tr>

            <td width="40%"><strong>Net Profit after Tax</strong></td>';
	$grandgpyear_graph = array();
	for ($i = 1; $i <= 3; $i++) {
	    $grandgpyear_graph[] = $this->data["netprofityear" . $i];
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["netprofityear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '

          </tr>

          <tr>

            <td width="40%">% Net Profit</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . number_format($this->data["netprofitpercentyear" . $i], 0, ".", ",") . ' %</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '</tr>
          <tr>
              <td colspan="4">&nbsp;</td>
          </tr>
          <tr>
              <td colspan="4"><strong>Accumulated Net Profit</strong></td>
          </tr>
          <tr style="background-color:#F5F5F5">
            <td width="40%">&nbsp;</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["accumulatedgrossprofityear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_proloss'] = $tbl['yearly_proloss'] . '</tr></table>';

	$pretax_graph = array();
	$tt_expenses = array();
	$grandgpyear_gh = array();
	$l = 1;
	for ($k = 0; $k <= 2; $k++) {
	    $pretax_graph["Year $l"] = $pre_profit_graph[$k];
	    $tt_expenses["Year $l"] = $tot_expenses_graph[$k];
	    $grandgpyear_gh["Year $l"] = $grandgpyear_graph[$k];
	    $l++;
	}

	$max_1[] = max($pre_profit_graph);
	$max_1[] = max($tot_expenses_graph);
	$max_1[] = max($grandgpyear_graph);
	$max_x = max($max_1);
	$settings = array(
	    'back_colour' => '#eee',
	    'stroke_colour' => '#000',
	    'show_grid_h' => true,
	    'label_y' => 'Value show in ' . $this->data["currency"],
	    'show_grid_v' => false,
	    'back_stroke_width' => 0,
	    'back_stroke_colour' => '#eee',
	    'axis_colour' => '#333',
	    'axis_overlap' => 2,
	    'axis_font' => 'lato',
	    'axis_font_size' => 10,
	    'grid_colour' => '#666',
	    'label_colour' => '#000',
	    'pad_right' => 200,
	    'pad_left' => 20,
	    'link_base' => '/',
	    'link_target' => '_top',
	    'project_angle' => 45,
	    'minimum_grid_spacing' => 20,
	    'axis_max_v' => $max_x,
	    'group_space' => 1,
	    'bar_space' => 20,
	    'graph_title' => 'Annual Profit Forecast',
	    'graph_title_font_size' => 22,
	    //      'show_data_labels' => true,
	    //      'data_label_type' => array('plain', 'box', 'bubble', 'line',
	    //        'circle', 'square', 'linecircle', 'linebox', 'linesquare', 'line2'),
	    //      'data_label_space' => 5,
	    //      'data_label_back_colour' => array('#ccc', null, null, '#ccc'),
	    //      'data_label_padding' => 5,
	    //      'data_label_round' => 4,
	    //      'data_label_tail_length' => "auto",
	    //      'data_label_tail_width' => 5,
	    //      'data_label_font_size' => 12,
	    //      'data_label_fill' => array(
	    //        array('#ccc','#fff','#ccc','h'),
	    //      ),
	    //      'data_label_outline_thickness' => 2,
	    //      'data_label_position' => 'top',
	    //      'data_label_tail_end' => 'taper',
	    //      'data_label_tail_end_width' => 16,
	    'legend_entries' => array('Total income', 'Total expenses', 'Gross Trading Profit'),
	    'legend_title' => "Annual Profit Forecast",
	    'legend_position' => "inside top outside right 1 40"
	);

	$prlossgraph = new SVGGraph(600, 300, $settings);

	$colour = array(
	    array('#FFF3D9'),
	    array('#D2EBFF'),
	    array('#FFE1E6'),
		//        array('green', 'pattern' => 'polkadot', 'size' => 6),
		//        array('orange','pattern' => 'check', 'size' => 6)
	);

	$prlossgraph->colours($colour);

	//    $opgraph->Values(array('Year 1' => $total_year1, 'Year 2' => $total_year2, 'Year 3' => $total_year3));

	$prlossgraph->Values(array(
	    $pretax_graph,
	    $tt_expenses,
	    $grandgpyear_gh
	));

	$graph[] = $prlossgraph->Fetch('GroupedBarGraph', false);

	/* ============================================================================
	  Yearly Cash Flow - Starts
	  ============================================================================== */


	$this->ajax_yearly_cash_flow_report();
	$tbl['yearly_cashflow'] = "";

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '

        <table border="0" cellspacing="3" cellpadding="1">

          <thead>

          <tr style="font-weight:bold;text-align:center;">

              <th colspan="13" width="100%">Yearly Cash FLow Report</th>

            </tr>

            <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

                <th width="40%">Account</th>

                <th width="20%">Year 1</th>

                <th width="20%">Year 2</th>

                <th width="20%">Year 3</th>

              </tr>

          </thead>

          <tr class="success">

              <td colspan="4"><strong>Cash Income</strong></td>

          </tr>

          <tr>

            <td width="40%">Opening Cash Balance</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_opening_cash_balance_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>




<!--

// Nuri :No need to show these rows :
        <tr>

            <td width="40%">Imported Products</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["cogimportyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td width="40%">Local Products</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["cogproductyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td width="40%">Local Services</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["serviceyear" . ($i == 1 ? '' : $i)], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td width="40%">Online Revenue</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["annual_revenue_yearly" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>



-->








          <tr style="background-color:#F5F5F5">

            <td width="40%">Projected Revenue</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["grandyear" . ($i == 1 ? '' : $i)], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td width="40%">GST/VAT On Revenue</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["grandgstvat" . $i], 0, ".", ",") . '</td>';
	}


	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

        <tr style="background-color:#F5F5F5">

            <td width="40%"><b>Total Revenue</b></td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_total_income" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>









          <tr>

            <td colspan="4">&nbsp;</td>

          </tr>

          <tr>

            <td colspan="4"><strong>Aged Receivables</strong></td>

          </tr>

          <tr>

            <td width="40%">Opening Debtors Balance</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_opening_debt_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

        <tr>

            <td width="40%">Imported Products</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["cogimportyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

        <tr>

            <td width="40%">Local Products/Services</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["local_prodserv_year_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

        <tr>

            <td width="40%">Online Revenue</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["annual_revenue_yearly" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

        <tr>
            <td width="40%">Sub-Total Receipt</td>';
	// Adde by Raza 20 July 2020
	for ($i = 1; $i <= 3; $i++) {
	    $this->data['yearly_sub_total_receipt_' . $i] = $this->data['yearly_opening_debt_' . $i] + $this->data['cogimportyear' . $i] + $this->data['local_prodserv_year_' . $i] + $this->data['annual_revenue_yearly' . $i];
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_sub_total_receipt_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

        <tr>

            <td width="40%">GST/VAT On Receivables</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $this->data['yearly_gst_vat_receivables_' . $i] = ($this->data['yearly_opening_debt_' . $i] + $this->data['cogimportyear' . $i] + $this->data['local_prodserv_year_' . $i] + $this->data['annual_revenue_yearly' . $i]) * ($this->data['company_vat_collected'] / 100);
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_gst_vat_receivables_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

        <tr>

            <td width="40%">Less Allowance for Bad Debts</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " -" . number_format($this->data["yearly_baddebt_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr style="background-color:#F5F5F5">

            <td width="40%"><b>Total Receipts</b></td>';
	$yearly_receipt_graph = array();
	for ($i = 1; $i <= 3; $i++) {
	    $this->data['yearly_receipt_' . $i] = $this->data['yearly_opening_debt_' . $i] + $this->data['cogimportyear' . $i] + $this->data['local_prodserv_year_' . $i] + $this->data['annual_revenue_yearly' . $i] + $this->data['yearly_gst_vat_receivables_' . $i] - $this->data['yearly_baddebt_' . $i];
	    $yearly_receipt_graph[] = $this->data["yearly_receipt_" . $i];
	    $this->data['less_cash_receipts_' . $i] = $this->data['yearly_receipt_' . $i];
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_receipt_" . $i], 0, ".", ",") . '</td>';
	    //      $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_receipt_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td colspan="4">&nbsp;</td>

          </tr>

          <tr>

            <td colspan="4"><strong>Disbursements</strong></td>

          </tr>

          <tr>

            <td width="40%">Opening Creditors Balance</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_opening_credit_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td width="40%">Import Product Costs</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_import_disburs_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td width="40%">Local Product Costs</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_product_disburs_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td width="40%">Local Service Costs</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_service_disburs_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>


          <tr>

            <td width="40%">Online Costs</td>';

	for ($i = 1; $i <= 3; $i++) {
	    // Added by Raza 12sep 2020
	    if ($i == 1) {
		$this->data["annual_cost_yearly" . $i] = $this->data["annual_cost_yearly_cashflow_" . $i];
	    } else {
		$this->data["annual_cost_yearly" . $i] = $this->data["annual_cost_yearly" . $i];
	    }
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["annual_cost_yearly" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>







          <tr>

            <td width="40%">Operating Expenses</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_oe_disburs_cashflow_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>









        <tr>
            <td width="40%">Franchise/Royalty Fees</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_royalty_cashflow_print_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '
        </tr>

          <tr style="background-color:#F5F5F5">

            <td width="40%"><strong>Sub - Total Costs</strong></td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yealy_disburs_subtotal_cashflow" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td width="40%">VAT/GST Component</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_gstvat_comp_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr style="background-color:#F5F5F5">

            <td width="40%"><strong>Total Disbursements</strong></td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_total_disburs_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td colspan="4">&nbsp;</td>

          </tr>



          <tr style="background-color:#F5F5F5">

            <td width="40%"><strong>Total Payroll Liabilities</strong></td>';

	$this->data['yearly_total_payroll_1'] = 0;
	for ($i = 1; $i <= 12; $i++) {
	    if ($i > $this->data['vat_in_days_offset']) {
		$this->data['yearly_total_payroll_1'] += (($this->data["grandplyear1"] / 12) - $payg_tax[$i]);
	    }
	}

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data['yearly_total_payroll_1'], 0, ".", ",") . '</td>';
	    //echo '<pre>';
	    //print_r($this->data['yearly_total_payroll_1']);
	} //exit;

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td colspan="4">&nbsp;</td>

          </tr>



          <tr style="background-color:#F5F5F5">

            <td width="40%"><strong>Total Operating Outgoings</strong></td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_total_operating_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td colspan="4">&nbsp;</td>

          </tr>

          <tr>

            <td colspan="4"><strong>Business Activity Statement</strong></td>

          </tr>

        <tr>

        <td width="40%">GST/VAT Payment</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_gstvat_payment_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>





        <td width="40%">PAYG Tax/Medicare</td>';
	$this->data['yearly_payg_tax_1'] = 0;
	for ($i = 1; $i <= 12; $i++) {
	    if ($i > $this->data['vat_in_days_offset']) {
		$this->data['yearly_payg_tax_1'] += $payg_tax[$i];
	    }
	}

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_payg_tax_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>






        <tr>
            <td width="40%">Company Tax</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearl_company_tax_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

        <tr style="background-color:#F5F5F5">

        <td width="40%"style="background-color:#F5F5F5"><b>Total Business Activity</b></td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_total_business_activity_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td colspan="4">&nbsp;</td>

          </tr>

          <tr>

            <td colspan="4"><strong>Outgoings</strong></td>

          </tr>




        <tr style="background-color:#F5F5F5">

        <td width="40%"><b>Total Outgoings</b></td>';
	$yearly_total_outgoing_graph = array();
	for ($i = 1; $i <= 3; $i++) {
	    $yearly_total_outgoing_graph[] = $this->data["yearly_total_outgoing_cashflow_" . $i];
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_total_outgoing_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

        <tr>

            <td colspan="4">&nbsp;</td>

        </tr>

        <tr>

            <td colspan="4">&nbsp;</td>

        </tr>

        <tr>

            <td colspan="4">&nbsp;</td>

        </tr>

        <tr>

            <td colspan="4">&nbsp;</td>

        </tr>





       <thead>

          <tr style="font-weight:bold;text-align:center;">

              <th colspan="13" width="100%">Yearly Cash FLow Report</th>

            </tr>

            <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">

                <th width="40%">Account</th>

                <th width="20%">Year 1</th>

                <th width="20%">Year 2</th>

                <th width="20%">Year 3</th>

              </tr>

          </thead>

          <tr class="success">

              <td colspan="4"><strong>Continued...</strong></td>

          </tr>














        <tr>

            <td colspan="4"><strong>Net Operating Cash Gain (Loss)</strong></td>

        </tr>

        <tr>

            <td width="40%">Net Cash Gain (Loss)</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $net_cash_gain = $yearly_receipt_graph[$i - 1] - $yearly_total_outgoing_graph[$i - 1];
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($net_cash_gain, 0, ".", ",") . '</td>';
	    //      $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_netcash_gain_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td width="40%">Capital Purchase</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_cp_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td width="40%">Investor Issued (Shares)</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["payment_frequency_year_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

        <tr>
            <td width="40%">Dividends Paid</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["payment_frequency_director_year_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '
        </tr>



        <tr style="background-color:#F5F5F5">
            <td width="40%">Total Capital Items</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["total_capital_items"][$i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '
        </tr>


            <tr class="success">
                <td colspan="4">&nbsp;</td>
            </tr>


            <tr>
                <td colspan="4"><strong>Business Finance</strong></td>
            </tr>


            <tr>
                <td width="40%">Loan Principle Repayments</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;color:red;">' . $this->data["currency"] . " -" . number_format($this->data["c_principal_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '
            </tr>

            <td width="40%">Loan Interest Repayments</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;color:red;">' . $this->data["currency"] . " -" . number_format($this->data["yearly_interest_" . $i], 0, ".", ",") . '</td>';
	}


	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '

          </tr>

            <tr>
                <td width="40%">Loan Principal & Interest</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;color:red;">' . $this->data["currency"] . " -" . number_format($this->data["loanpaymentyear_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '
            </tr>


        <tr class="success">
               <td colspan="4">&nbsp;</td>
           </tr>





    <tr style="background-color:#F5F5F5">
        <td width="40%">Closing Cash Balance</td>';
	$closing_cash_balance_graph = array();
	for ($i = 1; $i <= 3; $i++) {
	    // - $this->data['total_capital_items'][$i] - $this->data["loanpaymentyear_" . $i] Removed Because We Already Did Same Thing Above
	    // $this->data["new_yearly_closing_cash_cashflow_" . $i] = ($this->data["yearly_opening_cash_balance_cashflow_" . $i] + ($yearly_receipt_graph[$i - 1] - $yearly_total_outgoing_graph[$i - 1]));
	    $closing_cash_balance_graph[] = $this->data["new_yearly_closing_cash_cashflow_" . $i];
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["new_yearly_closing_cash_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	//    echo "<br/>";
	//    echo $this->data["yearly_opening_cash_balance_cashflow_3"];
	//    echo "<br/>";
	//    echo $yearly_receipt_graph[2]."=>".$yearly_total_outgoing_graph[2];
	//    echo "<br/>";
	//    echo $this->data['total_capital_items'][3];
	//    echo "<br/>";
	//    echo "<pre>";
	//    print_r($this->data);
	//    exit;

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '
    </tr>


    <tr class="success">
        <td colspan="4">&nbsp;</td>
    </tr>


    <tr class="success">
        <td colspan="4">&nbsp;</td>
    </tr>



    <tr>
      <td colspan="4"><strong>GST/VAT Analysis</strong></td>
    </tr>
    <tr>

    <td width="40%">GST/VAT Collected</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_gstvat_collect_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr>

            <td width="40%">GST/VAT Paid</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_gstvat_paids_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr>

          <tr style="background-color:#F5F5F5">

            <td width="40%">GST Remittance</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '<td width="20%" style="text-align:right;">' . $this->data["currency"] . " " . number_format($this->data["yearly_gstvat_remittance_cashflow_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['yearly_cashflow'] = $tbl['yearly_cashflow'] . '</tr></table>';

	//    echo "test<pre>";
	//    print_r($closing_cash_balance_graph);
	//    exit;

	$closing_graph = array();
	$outgoing_graph = array();
	$receipt_graph = array();
	$l = 1;
	for ($k = 0; $k <= 2; $k++) {
	    $closing_graph["Year $l"] = $closing_cash_balance_graph[$k];
	    $outgoing_graph["Year $l"] = $yearly_total_outgoing_graph[$k];
	    $receipt_graph["Year $l"] = $yearly_receipt_graph[$k];
	    $l++;
	}

	$max_1[] = max($closing_cash_balance_graph);
	$max_1[] = max($yearly_total_outgoing_graph);
	$max_1[] = max($yearly_receipt_graph);
	$max_x = max($max_1);
	$settings = array(
	    'back_colour' => '#eee',
	    'stroke_colour' => '#000',
	    'show_grid_h' => true,
	    'label_y' => 'Value show in ' . $this->data["currency"],
	    'show_grid_v' => false,
	    'back_stroke_width' => 0,
	    'back_stroke_colour' => '#eee',
	    'axis_colour' => '#333',
	    'axis_overlap' => 2,
	    'axis_font' => 'Georgia',
	    'axis_font_size' => 10,
	    'grid_colour' => '#666',
	    'label_colour' => '#000',
	    'pad_right' => 200,
	    'pad_left' => 20,
	    'link_base' => '/',
	    'link_target' => '_top',
	    'project_angle' => 45,
	    'minimum_grid_spacing' => 20,
	    'axis_max_v' => $max_x,
	    'group_space' => 1,
	    'bar_space' => 20,
	    'graph_title' => 'Annual Cash Forecast',
	    //      'show_data_labels' => true,
	    //      'data_label_type' => array('plain', 'box', 'bubble', 'line',
	    //        'circle', 'square', 'linecircle', 'linebox', 'linesquare', 'line2'),
	    //      'data_label_space' => 5,
	    //      'data_label_back_colour' => array('#ccc', null, null, '#ccc'),
	    //      'data_label_padding' => 5,
	    //      'data_label_round' => 4,
	    //      'data_label_tail_length' => "auto",
	    //      'data_label_tail_width' => 5,
	    //      'data_label_font_size' => 12,
	    //      'data_label_fill' => array(
	    //        array('#ccc','#fff','#ccc','h'),
	    //      ),
	    //      'data_label_outline_thickness' => 2,
	    //      'data_label_position' => 'top',
	    //      'data_label_tail_end' => 'taper',
	    //      'data_label_tail_end_width' => 16,
	    'legend_entries' => array('Closing Cash Balance', 'Total Outgoings', 'Total Receipts'),
	    'legend_title' => "Annual Cash Forecast",
	    'legend_position' => "inside top outside right 1 40"
	);

	$opgraph = new SVGGraph(600, 300, $settings);

	$colour = array(
	    array('#FFF3D9'),
	    array('#D2EBFF'),
	    array('#FFE1E6'),
		//        array('green', 'pattern' => 'polkadot', 'size' => 6),
		//        array('orange','pattern' => 'check', 'size' => 6)
	);

	$opgraph->colours($colour);

	//    $opgraph->Values(array('Year 1' => $total_year1, 'Year 2' => $total_year2, 'Year 3' => $total_year3));

	$opgraph->Values(array(
	    $closing_graph,
	    $outgoing_graph,
	    $receipt_graph
	));

	$graph[] = $opgraph->Fetch('GroupedBarGraph', false);
	//        echo "<pre>";
	//      print_r($graph[2]);
	//      exit;




	/* ============================================================================
	  Balance Sheet  - Starts
	  ============================================================================== */







	$this->ajax_balance_sheet();

	//    echo "<pre>";
	//    print_r($this->balshe);
	//    exit;


	$tbl['balance_sheet'] = "";
	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '
          <table border="0" cellspacing="3" cellpadding="1">
            <thead>
              <tr style="font-weight:bold;text-align:center;">
                <th colspan="13" width="100%">Balance Sheet Report</th>
              </tr>
              <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
                  <th width="30%">Account</th>
                  <th width="17%">Current</th>
                  <th width="17%">Year 1</th>
                  <th width="17%">Year 2</th>
                  <th width="17%">Year 3</th>
                </tr>
            </thead>
            <tr class="success">
                <td colspan="4"><strong>Current Assets</strong></td>
            </tr>
            <tr>
              <td width="30%">Cash At Bank</td>';
	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_cash_bank_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

        <tr>
            <td width="30%">Account Recievables</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe['balance_sheet_debtors_' . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr>
                <td width="30%">Less allowance doubtful accts</td>';
	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;color: red;">' . $this->balshe["currency"] . " -" . number_format($this->data['yearly_baddebt_' . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>
            <tr>

              <td width="30%">Deposite and Other Assets</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_deposite_assets_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr>

              <td width="30%">Stock on Hand</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_stock_hand_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr style="background-color:#F5F5F5">

              <td width="30%"><b>Total Current Assets</b></td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_tot_current_assets_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>


   <tr class="success">
         <td colspan="4">&nbsp;</td>
         </tr>



            <tr class="success">

              <td colspan="4"><strong>Current Liabilities</strong></td>';

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr>

              <td width="30%">Trade Creditors</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_trade_creditors_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr>

              <td width="30%">GST Payable</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;color: red;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_gst_payable_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr style="background-color:#F5F5F5">

              <td width="30%"><b>Total Current Liabilities</b></td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_tot_current_libilities_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>



            <tr class="success">';

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

   <tr class="success">
         <td colspan="4">&nbsp;</td>
         </tr>





         <tr style="background-color:#F5F5F5">

         <td width="30%"><b>Working Capital</b></td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_working_capital_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

         <tr class="success">
         <td colspan="4">&nbsp;</td>
         </tr>



         <tr class="success">

         <td colspan="4"><strong>None Current Assets</strong></td>';

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

         <tr>
            <td width="30%">Brand and Set Up Costs</td>';
	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_brand_setup_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

         <tr>
              <td width="30%">Intellectual Property</td>';
	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_intellectual_prop_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>


      <tr>

        <td width="30%">Less Accumulated Amortization</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;color: red;">' . $this->balshe["currency"] . " -" . number_format($this->data["" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>


      <tr>

        <td width="30%">Land and Buildings</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_land_buildings_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>




        <----- <tr>

        <td width="30%">Less Accumulated Depreciation</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;color: red;">' . $this->balshe["currency"] . " -" . number_format($this->data["" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr> ----->

         <tr>





         <td width="30%">Property Plant and Equipment</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_prop_equip_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>
        <tr>

        <td width="30%">Less Accumulated Depreciation</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;color: red;">' . $this->balshe["currency"] . " -" . number_format($this->data["pedyear" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>




            <tr style="background-color:#F5F5F5">

              <td width="30%"><b>Total Non Current Assets</b></td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_tot_noncurrent_assets_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

      <tr class="success">
         <td colspan="4">&nbsp;</td>
         </tr>


            <tr class="success">

              <td colspan="4"><strong>None Current Liabilities</strong></td>';

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr>

              <td width="30%">Directors Loan</td>';
	// $this->balshe["balance_director_loan_" . $i] remove from below
	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format(0, 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>
        <tr>

        <td width="30%">Investors Capital</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe['inv_total'], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr>

              <td width="30%">Long term Debt</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_long_term_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr style="background-color:#F5F5F5">

              <td width="30%">Total Liabilities</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_tot_libilities_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>
         <tr class="success">';
	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>


         <tr class="success">
         <td colspan="4">&nbsp;</td>
         </tr>





         <tr style="background-color:#F5F5F5">

            <td width="30%"><strong>Net Assets</strong></td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_net_assets_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

      <tr class="success">
         <td colspan="4">&nbsp;</td>
         </tr>


            <tr class="success">

              <td colspan="4"><strong>Shareholder Equity</strong></td>';

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr>

              <td width="30%">Founders Capital</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_founder_capital_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr>

              <td width="30%">Revaluation Reserve</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_revaluation_reserve_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr>

              <td width="30%">Issued Shared</td>';
	//   Removed $this->balshe["balance_issued_share_" . $i] from below row
	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_director_loan_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr>

              <td width="30%">Accumulated Profit \ (Loss)</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_accu_profit_loss_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr>

              <td width="30%">Current Year Profit \ (Loss)</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_currentyear_profit_loss_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>

            <tr style="background-color:#F5F5F5">

              <td width="30%">Total Equity</td>';

	for ($i = 0; $i <= 3; $i++) {
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($this->balshe["balance_tot_equity_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>



            <tr class="success">

              <td><strong>&nbsp;</strong></td>';

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr>
            <tr class="success">
              <td><strong>Audit Check</strong></td>
            </tr>
            <tr style="background-color:#F5F5F5">
              <td width="30%">Credit/Negative </td>';

	for ($i = 0; $i <= 3; $i++) {
	    $balance_audits = ($this->balshe["balance_audits_" . $i] <= 0) ? $this->balshe["balance_audits_" . $i] : 0;
	    $tbl['balance_sheet'] = $tbl['balance_sheet'] . '<td width="17%" style="text-align:right;">' . $this->balshe["currency"] . " " . number_format($balance_audits, 0, ".", ",") . '</td>';
	}

	$tbl['balance_sheet'] = $tbl['balance_sheet'] . '</tr></table>';

	/* ============================================================================
	  Compnay Valuation  - Starts
	  ============================================================================== */

	$this->ajax_company_value();
	$tbl['comp_val'] = "";
	$tbl['comp_val'] = $tbl['comp_val'] . '
        <table border="0" cellspacing="3" cellpadding="1">
          <thead>
            <tr style="font-weight:bold;text-align:center;">
                <th colspan="13" width="100%">Company Valuation</th>
          </tr>
            <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
                <th width="40%">Account</th>
                <th width="20%">Low</th>
                <th width="20%">Actual</th>
                <th width="20%">Height</th>
              </tr>
          </thead>
          <tr class="success">
              <td colspan="4"><strong>Company Valuation</strong></td>
          </tr>
          <tr style="background-color:#F5F5F5">
            <td width="40%">Valuation Range</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['comp_val'] = $tbl['comp_val'] . '<td width="20%" style="text-align:right;">' . number_format($this->compval["comp_val_value_range_" . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['comp_val'] = $tbl['comp_val'] . '</tr>
          <tr>
            <td width="40%">After Tax Profit Forecast in Year 3</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['comp_val'] = $tbl['comp_val'] . '<td width="20%" style="text-align:right;">' . $this->compval["currency"] . " " . number_format($this->compval["comp_val_after_tax_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['comp_val'] = $tbl['comp_val'] . '</tr>
          <tr>
            <td width="40%">Price Earnings Multiple</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['comp_val'] = $tbl['comp_val'] . '<td width="20%" style="text-align:right;">' . number_format($this->compval["comp_val_price_earn_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['comp_val'] = $tbl['comp_val'] . '</tr>
          <tr>
            <td width="40%">Gross Value in Year 3</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['comp_val'] = $tbl['comp_val'] . '<td width="20%" style="text-align:right;">' . $this->compval["currency"] . " " . number_format($this->compval["comp_val_gross_value_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['comp_val'] = $tbl['comp_val'] . '</tr>
          <tr>
            <td colspan="4">&nbsp;</td>
          </tr>
          <tr style="background-color:#F5F5F5">
            <td width="40%">Risk Rate\ Discount Multiple</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['comp_val'] = $tbl['comp_val'] . '<td width="20%" style="text-align:right;">' . number_format($this->compval["comp_val_risk_discount3_" . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['comp_val'] = $tbl['comp_val'] . '</tr>
          <tr>
            <td width="40%">Net Present Value Year 2</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['comp_val'] = $tbl['comp_val'] . '<td width="20%" style="text-align:right;">' . $this->compval["currency"] . " " . number_format($this->compval["comp_val_net_present2_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['comp_val'] = $tbl['comp_val'] . '</tr>
          <tr >
            <td colspan="4">&nbsp;</td>
          </tr>
          <tr style="background-color:#F5F5F5">
            <td width="40%">Risk Rate\ Discount Multiple</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['comp_val'] = $tbl['comp_val'] . '<td width="20%" style="text-align:right;">' . number_format($this->compval["comp_val_risk_discount2_" . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['comp_val'] = $tbl['comp_val'] . '</tr>
          <tr>
            <td width="40%">Net Present Value Year 1</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['comp_val'] = $tbl['comp_val'] . '<td width="20%" style="text-align:right;">' . $this->compval["currency"] . " " . number_format($this->compval["comp_val_net_present1_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['comp_val'] = $tbl['comp_val'] . '</tr>
          <tr>
            <td colspan="4">&nbsp;</td>
          </tr>
          <tr style="background-color:#F5F5F5">
            <td width="40%">Risk Rate\ Discount Multiple</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['comp_val'] = $tbl['comp_val'] . '<td width="20%" style="text-align:right;">' . number_format($this->compval["comp_val_risk_discount1_" . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['comp_val'] = $tbl['comp_val'] . '</tr>
          <tr>
            <td width="40%">Net Present Value Year 0</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['comp_val'] = $tbl['comp_val'] . '<td width="20%" style="text-align:right;">' . $this->compval["currency"] . " " . number_format($this->compval["comp_val_net_present0_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['comp_val'] = $tbl['comp_val'] . '</tr>
          <tr>
            <td colspan="4">&nbsp;</td>
          </tr>
          <tr>
            <td width="40%">Investment</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['comp_val'] = $tbl['comp_val'] . '<td width="20%" style="text-align:right;">' . $this->compval["currency"] . " " . number_format($this->compval["comp_val_investment_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['comp_val'] = $tbl['comp_val'] . '</tr>
          <tr style="background-color:#F5F5F5">
            <td width="40%">Equity Percentage</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['comp_val'] = $tbl['comp_val'] . '<td width="20%" style="text-align:right;">' . number_format($this->compval["comp_val_equity_percentage_" . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['comp_val'] = $tbl['comp_val'] . '</tr></table>';

	/* ============================================================================
	  Key Ratios  - Starts
	  ============================================================================== */


	$this->ajax_key_ratio_loss();
	$tbl['keyrat'] = "";
	$tbl['keyrat'] = $tbl['keyrat'] . '





         <table border="0" cellspacing="3" cellpadding="1">
            <thead>
               <tr style="font-weight:bold;text-align:center;">
               <th colspan="13" width="100%">Key Ratios</th>
              </tr>



               <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
                  <th width="40%">Account</th>
                  <th width="20%">Year 1</th>
                  <th width="20%">Year 2</th>
                  <th width="20%">Year 3</th>
               </tr>



            </thead>



        <tr class="success">
            <td colspan="4"><strong>Profitability Ratios</strong></td>
        </tr>
        <tr>
          <td width="40%">Gross Profit Percentage</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['keyrat'] = $tbl['keyrat'] . '<td width="20%" style="text-align:right;">' . number_format($this->keyrat["key_ratios_gross_profit_" . $i], 2, ".", ",") . ' %</td>';
	}
	$tbl['keyrat'] = $tbl['keyrat'] . '</tr>
        <tr>
          <td width="40%">Net Profit Percentage</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['keyrat'] = $tbl['keyrat'] . '<td width="20%" style="text-align:right;">' . number_format($this->keyrat["key_ratios_net_profit_" . $i], 2, ".", ",") . ' %</td>';
	}
	$tbl['keyrat'] = $tbl['keyrat'] . '</tr>
        <tr >
          <td width="40%">Employement Costs</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['keyrat'] = $tbl['keyrat'] . '<td width="20%" style="text-align:right;">' . number_format($this->keyrat["key_ratios_employement_costs_" . $i], 2, ".", ",") . ' %</td>';
	}
	$tbl['keyrat'] = $tbl['keyrat'] . '</tr>
        <tr >
          <td width="40%">Operating Expenses</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['keyrat'] = $tbl['keyrat'] . '<td width="20%" style="text-align:right;">' . number_format($this->keyrat["key_ratios_operating_expenses_" . $i], 2, ".", ",") . ' %</td>';
	}
	$tbl['keyrat'] = $tbl['keyrat'] . '</tr>
        <tr class="success">
            <td colspan="4">&nbsp;</td>
        </tr>
        <tr class="success">
            <td colspan="4"><strong>Balance Sheet Ratios</strong></td>
        </tr>
        <tr>
          <td width="40%">Earnings per share</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['keyrat'] = $tbl['keyrat'] . '<td width="20%" style="text-align:right;">' . $this->keyrat["currency"] . " " . number_format($this->keyrat["key_ratios_earn_share_" . $i], 2, ".", ",") . '</td>';
	}
	$tbl['keyrat'] = $tbl['keyrat'] . '</tr>
        <tr>
          <td width="40%">Working Capital Ratio</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['keyrat'] = $tbl['keyrat'] . '<td width="20%" style="text-align:right;">' . number_format($this->keyrat["key_ratios_work_cap_" . $i], 2, ".", ",") . '</td>';
	}
	$tbl['keyrat'] = $tbl['keyrat'] . '</tr>
        <tr >
          <td width="40%">Debtors Turnover</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['keyrat'] = $tbl['keyrat'] . '<td width="20%" style="text-align:right;">' . number_format($this->keyrat["key_ratios_debtors_turn_" . $i], 2, ".", ",") . '</td>';
	}
	$tbl['keyrat'] = $tbl['keyrat'] . '</tr></table>';

	/* ============================================================================
	  Sensitivity Report  - Starts
	  ============================================================================== */


	$this->ajax_profit_loss_sensitivity();
	$tbl['sensitivity'] = "";
	$tbl['sensitivity'] = $tbl['sensitivity'] . '
      <table border="0" cellspacing="3" cellpadding="1">
        <thead>
          <tr style="font-weight:bold;text-align:center;">
                <th colspan="13" width="100%">Sensitivity Report</th>
          </tr>
          <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
              <th width="40%">Account</th>
              <th width="20%">Year 1</th>
              <th width="20%">Year 2</th>
              <th width="20%">Year 3</th>
            </tr>
        </thead>
        <tr class="success">
            <td colspan="4"><strong>Profit and Loss Sensitivity</strong></td>
        </tr>
        <tr>
          <td width="40%">Total Income Lower than Forecast</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_tot_lower_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>
        <tr>
          <td width="40%">Expected Total Income Forecast</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_tot_current_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>
        <tr>
          <td width="40%">Total Income Higher than Forecast</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_tot_higher_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>
        <tr>
          <td colspan="4">&nbsp;</td>
        </tr>
        <tr class="success">
            <td colspan="4"><strong>Income Lower Than Forecast</strong></td>
        </tr>
        <tr>
          <td width="40%">Total Income</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_lower_tot_income_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>
        <tr>
          <td width="40%">Gross Profit</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_lower_gross_profit_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>
        <tr>
          <td width="40%">Gross Profit</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . number_format($this->proloss["sensitivity_lower_gross_percent_" . $i], 0, ".", ",") . ' %</td>';
	}
	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>
        <tr>
          <td width="40%">Employment Expenses</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_lower_employement_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>
        <tr>
          <td width="40%">Overheads</td>';
	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_lower_overheads_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr style="background-color:#F5F5F5

          <td width="40%">Total Expenses</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_lower_tot_expenses_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Operating Profit \ (Loss) before tax</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_lower_before_tax_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Tax at ';
	$tbl['sensitivity'] = $tbl['sensitivity'] . $this->proloss['company_tax'] . '%</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_lower_tax_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr style="background-color:#F5F5F5">

          <td width="40%">After Tax</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_lower_after_tax_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td colspan="4">&nbsp;</td>

        </tr>

        <tr class="success">

            <td colspan="4"><strong>Current Income Expected</strong></td>

        </tr>

        <tr>

          <td width="40%">Total Income</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_current_tot_income_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Gross Profit</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_current_gross_profit_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Gross Profit</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . number_format($this->proloss["sensitivity_current_gross_percent_" . $i], 0, ".", ",") . ' %</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Employment Expenses</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_current_employement_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Overheads</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_current_overheads_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr style="background-color:#F5F5F5">

          <td width="40%">Total Expenses</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_current_tot_expenses_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Operating Profit \ (Loss) before tax</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_current_before_tax_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Tax at ';
	$tbl['sensitivity'] = $tbl['sensitivity'] . $this->proloss['company_tax'] . '%</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_current_tax_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr style="background-color:#F5F5F5">

          <td width="40%">After Tax</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_current_after_tax_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td colspan="4">&nbsp;</td>

        </tr>

        <tr class="success">

            <td colspan="4"><strong>Income Higher Than Forecast</strong></td>

        </tr>

        <tr>

          <td width="40%">Total Income</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_higher_tot_income_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Gross Profit</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_higher_gross_profit_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Gross Profit</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . number_format($this->proloss["sensitivity_higher_gross_percent_" . $i], 0, ".", ",") . ' %</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Employment Expenses</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_higher_employement_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Overheads</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_higher_overheads_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr style="background-color:#F5F5F5">

          <td width="40%">Total Expenses</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_higher_tot_expenses_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Operating Profit \ (Loss) before tax</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_higher_before_tax_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr>

          <td width="40%">Tax at ';
	$tbl['sensitivity'] = $tbl['sensitivity'] . $this->proloss['company_tax'] . '%</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_higher_tax_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr>

        <tr style="background-color:#F5F5F5">

          <td width="40%">After Tax</td>';

	for ($i = 1; $i <= 3; $i++) {
	    $tbl['sensitivity'] = $tbl['sensitivity'] . '<td width="20%" style="text-align:right;">' . $this->proloss["currency"] . " " . number_format($this->proloss["sensitivity_higher_after_tax_" . $i], 0, ".", ",") . '</td>';
	}

	$tbl['sensitivity'] = $tbl['sensitivity'] . '</tr></table>';

	//print_r($user_id);
	//exit;

	$this->dashboard_generate_pdf($tbl, 'My Plan', 'P', $data, $graph);
    }

    /* ============================================================================
      Paroll Expenses  - Starts
      ============================================================================== */

    public function printPayrollExpenses() {
	$this->ajax_people_calculating_summary();
	$tbl['payexpenses'] = "";
	$tbl['payexpenses'] = $tbl['payexpenses'] . '
    <table border="0" cellspacing="3" cellpadding="1">
      <thead>
        <tr style="font-weight:bold;text-align:center;">
              <th colspan="13" width="100%">Summary People Expenses Report</th>
        </tr>
        <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
            <th width="12%">Account</th>';
	for ($i = 0; $i < 12; $i++) {
	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<th width="7%">' . $this->data['table_header'][$i] . '</th>';
	}
	$tbl['payexpenses'] = $tbl['payexpenses'] . '<th width="7%"><strong>Total</strong></th>
        </tr>
      </thead>
        <tr>
            <td colspan="14"><strong>Renumerations</strong></td>
        </tr>
        <tr>


    td width="12%">Gross Salary</td>';
	for ($i = 1; $i <= 12; $i++) {
	    $total += $this->peoplexpenses['gross_salary'];
	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($this->peoplexpenses["gross_salary"], 0, ".", ",") . '</td>';
	    if ($i == 12) {
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total, 0, ".", ",") . '</td>';
		$total_gross_salary = $total;
	    }
	}
	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>

    <tr>
    <td width="12%">Other</td>';

	$total = 0;
	for ($i = 1; $i <= 12; $i++) {
	    $total += $this->peoplexpenses['other_recieved'];
	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($this->peoplexpenses["other_recieved"], 0, ".", ",") . '</td>';
	    if ($i == 12) {
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total, 0, ".", ",") . '</td>';
		$total_other = $total;
	    }
	}
	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>
        <tr style="background-color:#F5F5F5">
          <td width="12%">Total Renumeration</td>';
	$total_1 = 0;
	for ($i = 1; $i <= 12; $i++) {
	    $total_1 = $this->peoplexpenses["other_recieved"] + $this->peoplexpenses["commission_recieved"] + $this->peoplexpenses["subsidies_recieved"] + $this->peoplexpenses["gross_salary"];
	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_1, 0, ".", ",") . '</td>';
	    if ($i == 12) {
		$total_renumeration = $total_gross_salary + $total_commission + $total_subsidi + $total_other;
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_renumeration, 0, ".", ",") . '</td>';
	    }
	}
	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr></table>';
	$tbl['payexpenses'] = $tbl['payexpenses'] . '



    <table border="0" cellspacing="3" cellpadding="1">
      <tr>
          <td colspan="14"><strong>Payroll Liabilities</strong></td>
      </tr>


 <tr>
        <td width="12%">Payroll Tax</td>';
	$total = 0;
	for ($i = 1; $i <= 12; $i++) {
	    $total += $this->peoplexpenses['income'];
	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($this->peoplexpenses["income"], 0, ".", ",") . '</td>';
	    if ($i == 12) {
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total, 0, ".", ",") . '</td>';
		$total_income = $total;
	    }
	}
	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>

    <tr style="background-color:#F5F5F5">
        <td width="12%">Total Deductions</td>';
	$total_2 = 0;
	for ($i = 1; $i <= 12; $i++) {
	    $total_2 = $this->peoplexpenses["other"] + $this->peoplexpenses["fringe"] + $this->peoplexpenses["sick"] + $this->peoplexpenses["union"] + $this->peoplexpenses["income"] + $this->peoplexpenses["retirement"] + $this->peoplexpenses["medicare"] + $this->peoplexpenses["pension"];
	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_2, 0, ".", ",") . '</td>';
	    if ($i == 12) {
		$total_deducation = $total_income + $total_other;
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_deducation, 0, ".", ",") . '</td>';
	    }
	}
	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>

    <tr style="background-color:#F5F5F5">
        <td width="12%">Net Salary</td>';
	$net_salary = 0;
	for ($i = 1; $i <= 12; $i++) {
	    $net_salary = ($this->peoplexpenses["other_recieved"] + $this->peoplexpenses["commission_recieved"] + $this->peoplexpenses["subsidies_recieved"] + $this->peoplexpenses["gross_salary"]) - ($this->peoplexpenses["other"] + $this->peoplexpenses["fringe"] + $this->peoplexpenses["sick"] + $this->peoplexpenses["union"] + $this->peoplexpenses["income"] + $this->peoplexpenses["retirement"] + $this->peoplexpenses["medicare"] + $this->peoplexpenses["pension"]);

	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($net_salary, 0, ".", ",") . '</td>';
	    if ($i == 12) {
		$total_netsalary = $total_renumeration - $total_deducation;
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_netsalary, 0, ".", ",") . '</td>';
	    }
	}



	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr></table>';
	$tbl['payexpenses'] = $tbl['payexpenses'] . '


<table border="0" cellspacing="3" cellpadding="1">
      <tr>
          <td colspan="14"><strong>SuperAnnuation / Work Cover</strong></td>
      </tr>

    <tr>
        <td width="12%">Super Annuation</td>';

	$total = 0;
	for ($i = 1; $i <= 12; $i++) {
	    $total += $this->peoplexpenses['super'];
	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($this->peoplexpenses["super"], 0, ".", ",") . '</td>';
	    if ($i == 12) {
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total, 0, ".", ",") . '</td>';
		$total_super = $total;
	    }
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>
      <tr>
        <td width="12%">Work Order</td>';
	$total = 0;
	for ($i = 1; $i <= 12; $i++) {
	    $total += $this->peoplexpenses['work'];
	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($this->peoplexpenses["work"], 0, ".", ",") . '</td>';
	    if ($i == 12) {
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total, 0, ".", ",") . '</td>';
		$total_work = $total;
	    }
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>
      <tr style="background-color:#F5F5F5">
        <td width="12%">Total</td>';
	$total_3 = 0;
	for ($i = 1; $i <= 12; $i++) {
	    $total_3 = $this->peoplexpenses["super"] + $this->peoplexpenses["work"];
	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_3, 0, ".", ",") . '</td>';
	    if ($i == 12) {
		$total_superwork = $total_super + $total_work;
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_superwork, 0, ".", ",") . '</td>';
	    }
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr>
      <tr style="background-color:#F5F5F5">
        <td width="12%">Total Payroll Liabilities</td>';
	$total_4 = 0;

	for ($i = 1; $i <= 12; $i++) {
	    $total_4 = ($this->peoplexpenses["super"] + $this->peoplexpenses["work"]) + ($this->peoplexpenses["other_recieved"] + $this->peoplexpenses["commission_recieved"] + $this->peoplexpenses["subsidies_recieved"] + $this->peoplexpenses["gross_salary"]);

	    $tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_4, 0, ".", ",") . '</td>';
	    if ($i == 12) {
		$total_payroll = $total_renumeration + $total_superwork;
		$tbl['payexpenses'] = $tbl['payexpenses'] . '<td width="7%" style="text-align:right;">' . $this->peoplexpenses["currency"] . " " . number_format($total_payroll, 0, ".", ",") . '</td>';
	    }
	}

	$tbl['payexpenses'] = $tbl['payexpenses'] . '</tr></table>';
	generate_pdf($tbl['payexpenses'], 'Payroll Expenses', 'L');
    }

    /* ============================================================================
      Stock Analysis  - Starts
      ============================================================================== */

    public function printStockAnalysis() {
	$localresult = $this->ajax_calculating_summary_product();

	$tbl['summary_product'] = "";
	$tbl['summary_product'] = $tbl['summary_product'] . '
        <table border="0" cellspacing="3" cellpadding="1">
        <thead>
          <tr style="font-weight:bold;text-align:center;font-size:12px;">
            <th colspan="15" width="100%">Local Products - Projected Sales by Products</th>
          </tr>
          <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
            <th width="12%">Account</th>';
	for ($i = 0; $i < 12; $i++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">' . $this->data['table_header'][$i] . '</th>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">Year 1</th>
            <th width="6%">Year 2</th>
            <th width="6%">Year 3</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background-color:#F5F5F5">
            <td width="12%">Opening Qty</td>';
	for ($summary_oq = 1; $summary_oq <= 15; $summary_oq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . number_format($localresult["total_oq_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
          <tr>
          <td width="12%">Sales Projection</td>';
	for ($summary_sp = 1; $summary_sp <= 15; $summary_sp++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . number_format($localresult["total_sp_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
          <tr>
          <td width="12%">Purchases</td>';
	for ($summary_p = 1; $summary_p <= 15; $summary_p++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . number_format($localresult["total_p_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
          <tr style="background-color:#F5F5F5">
          <td width="12%">Closing Qty</td>';
	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . number_format($localresult["total_cq_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
          <tr>
            <td colspan="15">&nbsp;</td>
          </tr>
          <tr>
            <td colspan="15">&nbsp;</td>
          </tr>
        </tbody>
    </table>';

	$tbl['summary_product'] = $tbl['summary_product'] . '
    <table border="0" cellspacing="3" cellpadding="1">
      <thead>
          <tr style="font-weight:bold;text-align:center;font-size:12px;">
            <th colspan="15" width="100%">Local Products - Stock Cost Evaluation</th>
          </tr>
          <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
            <th width="12%">Account</th>';
	for ($i = 0; $i < 12; $i++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">' . $this->data["table_header"][$i] . '</th>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">Year 1</th>
            <th width="6%">Year 2</th>
            <th width="6%">Year 3</th>
          </tr>
      </thead>
      <tbody>
        <tr style="background-color:#F5F5F5">
          <td width="12%">Opening Qty</td>';
	for ($summary_oq = 1; $summary_oq <= 15; $summary_oq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_soq_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr>
        <td width="12%">Sales Projection</td>';
	for ($summary_sp = 1; $summary_sp <= 15; $summary_sp++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_ssp_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr>
        <td width="12%">Purchases</td>';
	for ($summary_p = 1; $summary_p <= 15; $summary_p++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_scp_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr style="background-color:#F5F5F5">
        <td width="12%">Closing Qty</td>';
	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_scq_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr>
          <td colspan="15">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="15">&nbsp;</td>
        </tr>
    </tbody>
  </table>';

	$tbl['summary_product'] = $tbl['summary_product'] . '
    <table border="0" cellspacing="3" cellpadding="1">
      <thead>
          <tr style="font-weight:bold;text-align:center;font-size:12px;">
            <th colspan="15" width="100%">Local Products - Monthly Gross Profit Projection</th>
          </tr>
          <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
            <th width="12%">Account</th>';
	for ($i = 0; $i < 12; $i++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">' . $this->data["table_header"][$i] . '</th>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">Year 1</th>
            <th width="6%">Year 2</th>
            <th width="6%">Year 3</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td width="12%">Sales Projection</td>';
	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_spp_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr>
          <td width="12%">Purchases</td>';
	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_pp_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr style="background-color:#F5F5F5">
          <td width="12%">Gross/Profit</td>';
	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $localresult['cur'] . " " . number_format($localresult["total_pg_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr>
          <td colspan="15">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="15">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="15">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="15">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="15">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="15">&nbsp;</td>
        </tr>
      </tbody>
    </table>';

	$importresult = $this->ajax_calculating_summary_imp_product();

	$tbl['summary_product'] = $tbl['summary_product'] . '
        <table border="0" cellspacing="3" cellpadding="1">
        <thead>
          <tr style="font-weight:bold;text-align:center;font-size:12px;">
            <th colspan="15" width="100%">Imported Products - Projected Sales by Products</th>
          </tr>
          <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
            <th width="12%">Account</th>';
	for ($i = 0; $i < 12; $i++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">' . $this->data["table_header"][$i] . '</th>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">Year 1</th>
            <th width="6%">Year 2</th>
            <th width="6%">Year 3</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background-color:#F5F5F5">
            <td width="12%">Opening Qty</td>';
	for ($summary_oq = 1; $summary_oq <= 15; $summary_oq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . number_format($importresult["total_oq_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
          <tr>
          <td width="12%">Sales Projection</td>';
	for ($summary_sp = 1; $summary_sp <= 15; $summary_sp++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . number_format($importresult["total_sp_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
          <tr>
          <td width="12%">Purchases</td>';
	for ($summary_p = 1; $summary_p <= 15; $summary_p++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . number_format($importresult["total_p_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
          <tr style="background-color:#F5F5F5">
          <td width="12%">Closing Qty</td>';
	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . number_format($importresult["total_cq_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
          <tr>
            <td colspan="15">&nbsp;</td>
          </tr>
          <tr>
            <td colspan="15">&nbsp;</td>
          </tr>
        </tbody>
    </table>';
	$tbl['summary_product'] = $tbl['summary_product'] . '
    <table border="0" cellspacing="3" cellpadding="1">
      <thead>
          <tr style="font-weight:bold;text-align:center;font-size:12px;">
            <th colspan="15" width="100%">Imported Products - Stock Cost Evaluation</th>
          </tr>
          <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
            <th width="12%">Account</th>';
	for ($i = 0; $i < 12; $i++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">' . $this->data["table_header"][$i] . '</th>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">Year 1</th>
            <th width="6%">Year 2</th>
            <th width="6%">Year 3</th>
          </tr>
      </thead>
      <tbody>
        <tr style="background-color:#F5F5F5">
          <td width="12%">Opening Qty</td>';
	for ($summary_oq = 1; $summary_oq <= 15; $summary_oq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $importresult['cur'] . " " . number_format($importresult["total_soq_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr>
        <td width="12%">Sales Projection</td>';
	for ($summary_sp = 1; $summary_sp <= 15; $summary_sp++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $importresult['cur'] . " " . number_format($importresult["total_ssp_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr>
        <td width="12%">Purchases</td>';
	for ($summary_p = 1; $summary_p <= 15; $summary_p++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $importresult['cur'] . " " . number_format($importresult["total_scp_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr style="background-color:#F5F5F5">
        <td width="12%">Closing Qty</td>';
	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $importresult['cur'] . " " . number_format($importresult["total_scq_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr>
          <td colspan="15">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="15">&nbsp;</td>
        </tr>
    </tbody>
  </table>';

	$tbl['summary_product'] = $tbl['summary_product'] . '
    <table border="0" cellspacing="3" cellpadding="1">
      <thead>
          <tr style="font-weight:bold;text-align:center;font-size:12px;">
            <th colspan="15" width="100%">Imported Products - Monthly Gross Profit Projection</th>
          </tr>
          <tr style="background-color:#F5F5F5;font-size:11px;font-weight:bold;text-align:center;">
            <th width="12%">Account</th>';
	for ($i = 0; $i < 12; $i++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">' . $this->data["table_header"][$i] . '</th>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '<th width="6%">Year 1</th>
            <th width="6%">Year 2</th>
            <th width="6%">Year 3</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td width="12%">Sales Projection</td>';
	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $importresult['cur'] . " " . number_format($importresult["total_spp_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr>
          <td width="12%">Purchases</td>';
	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $importresult['cur'] . " " . number_format($importresult["total_pp_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr style="background-color:#F5F5F5">
          <td width="12%">Gross/Profit</td>';
	for ($summary_cq = 1; $summary_cq <= 15; $summary_cq++) {
	    $tbl['summary_product'] = $tbl['summary_product'] . '<td width="6%" style="text-align:right;">' . $importresult['cur'] . " " . number_format($importresult["total_pg_" . $i], 0, ".", ",") . '</td>';
	}
	$tbl['summary_product'] = $tbl['summary_product'] . '</tr>
        <tr>
          <td colspan="15">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="15">&nbsp;</td>
        </tr>
      </tbody>
    </table>';

	generate_pdf($tbl['summary_product'], 'Stock Analysis', 'L');
    }

    /* ============================================================================
      PDF Reports  - Starts
      ============================================================================== */

    public function dashboard_generate_pdf($tbl, $title, $orientation = 'P', $data, $graph) {
	$pdf = new PdfMyPlan(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

	// set document information

	$pdf->SetCreator(PDF_CREATOR);

	$pdf->SetAuthor(PDF_CREATOR);

	$pdf->SetTitle($title);

	$pdf->SetSubject($title);

	// set default header data
	//$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, 'Report - 001', PDF_HEADER_STRING);
	// set header and footer fonts
	//$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));

	$pdf->setFooterFont(array(PDF_FONT_NAME_DATA, 'italic', PDF_FONT_SIZE_DATA));

	//$pdf->setPrintHeader(false);
	// set default monospaced font

	$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

	// set margins

	$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);

	$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);

	$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

	// set auto page breaks

	$pdf->SetAutoPageBreak(true, PDF_MARGIN_BOTTOM);

	// set image scale factor

	$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

	// set some language-dependent strings (optional)

	if (@file_exists(dirname(__FILE__) . '/lang/eng.php')) {
	    require_once(dirname(__FILE__) . '/lang/eng.php');

	    $pdf->setLanguageArray($l);
	}



	// ---------------------------------------------------------
	// set font



	$pdf->SetFont('dejavusanscondensed', 'B', 20);

	// add a page
	//$pdf->AddPage($orientation, 'latter');
	$pdf->AddPage('P');

	$pdf->Write(0, $title, '', 0, 'C', true, 0, false, false, 0);
	$pdf->SetY(40);
	$pdf->SetFont('dejavusanscondensed', 'B', 17);
	$pdf->Cell(0, 0, 'Year 1 - Year 3', 0, 0, 'C');
	$pdf->SetY(50);
	$pdf->Cell(0, 0, $data[0]['company_name'], 0, 0, 'C');
	$pdf->SetFont('dejavusanscondensed', '', 8);

	$pdf->SetY(60);
	$pdf->Cell(0, 0, 'ABN Number : ' . $data[0]['abn_no'], 0, 0, 'C');
	$pdf->SetFont('dejavusanscondensed', '', 8);
	$pdf->SetY(68);
	$pdf->Cell(0, 0, 'Start Date : ' . date('d.m.Y', strtotime($data[0]['start_date'])), 0, 0, 'C');
	$pdf->SetFont('dejavusanscondensed', 'B', 8);
	if ($data[1] != 0) {
	    for ($i = 0; $i < $data[1]; $i++) {
		$j += 25;
		$pdf->SetXY(60, 65 + $j);
		$pdf->Cell(0, 0, 'Director : ' . $data[2][$i]->name, 0, 0, 'L');
		$pdf->Ln();
		$pdf->SetX(60);
		$pdf->Cell(0, 0, 'Education : ' . $data[2][$i]->education, 0, 0, 'L');
		$pdf->Ln();
		$pdf->SetX(60);
		$pdf->Cell(0, 0, 'Experience : ' . $data[2][$i]->experience, 0, 0, 'L');

		if ($data[2][$i]->image == "") {
		    $thumb = asset_path() . 'uploads/director_logo/no-photo.jpg'; // *** Very IMP: make sure this image is available on given path on your server
		} else {
		    $thumb = asset_path() . 'uploads/director_logo/' . $data[2][$i]->image;
		}

		$pdf->Image($thumb, 20, 65 + $j, 13);
	    }
	}
	$pdf->SetY(220);
	$pdf->Cell(0, 0, 'Company Address : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->Cell(0, 0, $data[0]['street_no'] . ' ' . $data[0]['street_name'] . ' - ' . $data[0]['suburb'], 0, 0, 'L');
	$pdf->Ln();
	$pdf->Cell(0, 0, $data[0]['state'] . ' - ' . $data[0]['zipcode'], 0, 0, 'L');
	$pdf->Ln();
	$pdf->Cell(0, 0, $data[0]['country'], 0, 0, 'L');
	$pdf->SetY(250);
	$pdf->Cell(0, 0, 'Telephone : ' . $data[0]['telephone'], 0, 0, 'L');
	$pdf->Ln();
	$pdf->Cell(0, 0, 'Fax : ' . $data[0]['fax'], 0, 0, 'L');
	$pdf->Ln();
	$pdf->Cell(0, 0, 'Email : ' . $data[0]['company_email'], 0, 0, 'L');
	$pdf->Ln();
	$pdf->Cell(0, 0, 'Website : ' . $data[0]['website'], 0, 0, 'L');
	$pdf->AddPage('P');
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(30);
	$pdf->writeHTML($tbl['index'], true, false, false, false, '');

	//General Business Assumption

	$pdf->AddPage('P');
	$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(30);
	$pdf->writeHTML($tbl['genasum'], true, false, false, false, '');

	//Mission and Vision Statement

	$pdf->AddPage('P');
	$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', 'B', 12);
	//$pdf->Cell(0, 0, 'Mission Statement : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_mission, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_mission, true, 0, true, 0);
	$pdf->SetFont('dejavusanscondensed', 'B', 12);
	//$pdf->Cell(0, 0, 'Vision Statement : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_vission, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_vission, true, 0, true, 0);
	$pdf->SetFont('dejavusanscondensed', 'B', 12);
	//$pdf->Cell(0, 0, 'Company Background : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_cbackground, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_cbackground, true, 0, true, 0);

	//Company Ownership
	//$pdf->AddPage();
	//$pdf->SetY(30);

	$pdf->SetFont('dejavusanscondensed', 'B', 12);
	//$pdf->Cell(0, 0, 'Company Ownership : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_cownership, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_cownership, true, 0, true, 0);
	$pdf->SetFont('dejavusanscondensed', 'B', 9);
	//$pdf->Cell(0, 0, 'Goal and Objective : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_goals, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_goals, true, 0, true, 0);
	//Property Plant dan Equipment / Product
	//$pdf->AddPage();
	//$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', 'B', 9);
	//$pdf->Cell(0, 0, 'Property Plant and Equipment : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_propertyplan, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_propertyplan, true, 0, true, 0);
	$pdf->SetFont('dejavusanscondensed', 'B', 9);
	//$pdf->Cell(0, 0, 'Product : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_product, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_product, true, 0, true, 0);
	//Property Plant dan Equipment / Product Servrices
	//$pdf->AddPage();
	//$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', 'B', 9);
	//$pdf->Cell(0, 0, 'Target market : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_market, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_market, true, 0, true, 0);
	$pdf->SetFont('dejavusanscondensed', 'B', 9);
	//$pdf->Cell(0, 0, 'Potential Customers : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_potentional, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_potentional, true, 0, true, 0);
	//Strength And Opertunities, Weaknesses And Threats
	//$pdf->AddPage();
	//$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', 'B', 9);
	//$pdf->Cell(0, 0, 'Strength And Opertunities : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_strengts, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_strengts, true, 0, true, 0);
	$pdf->SetFont('dejavusanscondensed', 'B', 9);
	//$pdf->Cell(0, 0, 'Weaknesses And Threats : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_weakness, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_weakness, true, 0, true, 0);
	//Daily Operations, Facilities And Wharehousing
	//$pdf->AddPage();
	//$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', 'B', 9);
	//$pdf->Cell(0, 0, 'Daily Operations : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_daily, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_daily, true, 0, true, 0);
	$pdf->SetFont('dejavusanscondensed', 'B', 9);
	//$pdf->Cell(0, 0, 'Facilities And Wharehousing : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_facilities, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_facilities, true, 0, true, 0);
	//Personals and Services
	//$pdf->AddPage();
	//$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', 'B', 9);
	//$pdf->Cell(0, 0, 'Personals : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_keypersonal, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_keypersonal, true, 0, true, 0);
	$pdf->SetFont('dejavusanscondensed', 'B', 9);
	//$pdf->Cell(0, 0, 'Services : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $data[3][0]->t_services, 0, 'L');
	$pdf->writeHTML($data[3][0]->t_services, true, 0, true, 0);

	//$pdf->AddPage();
	//Executive Summary
	//$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', 'B', 9);
	//$pdf->Cell(0, 0, 'Executive Summary : ', 0, 0, 'L');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$executive_sum = str_split($data[3][0]->t_execuitve, 3900);
	//$pdf->MultiCell(0, 0, $executive_sum[0], 0, 'L');
	$pdf->writeHTML($executive_sum[0], true, 0, true, 0);

	//Executive Summary Line 2
	// //$pdf->AddPage();
	//$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->MultiCell(0, 0, $executive_sum[1], 0, 'L');
	$pdf->writeHTML($executive_sum[1], true, 0, true, 0);

	//Payroll Liabilities
	//$pdf->AddPage();
	//$pdf->SetY(30);
	//$pdf->SetFont('dejavusanscondensed', '', 10);
	//$pdf->SetY(30);
	//$pdf->writeHTML($tbl['payroll'], true, false, false, false, '');
	//Start Up Expenses

	$pdf->AddPage('P');
	$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(30);
	$pdf->writeHTML($tbl['startup'], true, false, false, false, '');

	//Operating Expenses

	$pdf->AddPage('P');
	$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(30);
	$pdf->writeHTML($tbl['opexpenses'], true, false, false, false, '');
	$pdf->SetY(120);
	$pdf->SetFont('dejavusanscondensed', 'B', 10);
	//$pdf->Cell(0, 0, 'Graph Description', 0, 0, 'C');
	$pdf->Ln();
	$pdf->ImageSVG('@' . $graph[0], $x = 45, $y = 90, $w = '', $h = '', $align = '', $palign = '', $border = 1, $fitonpage = false);
	$pdf->Ln();
	$pdf->ImageSVG('@' . $graph[1], $x = 45, $y = 180, $w = '', $h = '', $align = '', $palign = '', $border = 1, $fitonpage = false);

	//table Expenses report

	$pdf->AddPage();
	$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(30);
	$pdf->writeHTML($tbl['expenses_report'], true, false, false, false, '');

	//Payroll Expenses

	$pdf->AddPage('L');
	$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(30);
	$pdf->writeHTML($tbl['payexpenses'], true, false, false, false, '');

	//monthly profit Loss-- page 18

	$pdf->AddPage('L');
	$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(30);
	$pdf->writeHTML($tbl['mon_proloss'], true, false, false, false, '');

	//Monthly Cash Flow  -- page 21

	$pdf->AddPage('L');
	$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(30);
	$pdf->writeHTML($tbl['mon_cashflow'], true, false, false, false, '');

	//Monthly Stock Analysis -- page 23
	//$pdf->AddPage('L');
	//$pdf->SetY(30);
	//$pdf->SetFont('dejavusanscondensed', '', 8);
	//$pdf->SetY(30);
	//$pdf->writeHTML($tbl['summary_product'], true, false, false, false, '');
	//Monthly Stock Analysis -- page 24
	// $pdf->AddPage('L');
	// $pdf->SetY(30);
	// $pdf->SetFont('dejavusanscondensed', '', 8);
	//$pdf->SetY(30);
	// $pdf->writeHTML($tbl['summary_imp_product'], true, false, false, false, '');
	//Monthly Break Even -- page 25

	$pdf->AddPage('L');
	$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(30);
	$pdf->writeHTML($tbl['breakeven'], true, false, false, false, '');
	$pdf->Ln();
	$pdf->SetFont('dejavusanscondensed', 'B', 10);
	//$pdf->Cell(0, 0, 'BreakEven Graph', 0, 0, 'C');
	$pdf->Ln();
	$pdf->ImageSVG('@' . $graph[2], $x = 20, $y = 160, $w = '', $h = '', $align = '', $palign = '', $border = 1, $fitonpage = false);

	//Yearly Profit and Loss -- page 24

	$pdf->AddPage('P');
	$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(30);
	$pdf->writeHTML($tbl['yearly_proloss'], true, false, false, false, '');
	$pdf->Ln();
	$pdf->ImageSVG('@' . $graph[3], $x = 20, $y = 160, $w = '', $h = '', $align = '', $palign = '', $border = 1, $fitonpage = false);

	//Yearly Cash Flow -- page 24

	$pdf->AddPage('P');
	$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(30);
	$pdf->writeHTML($tbl['yearly_cashflow'], true, false, false, false, '');
	$pdf->Ln();
	$pdf->ImageSVG('@' . $graph[4], $x = 20, $y = 160, $w = '', $h = '', $align = '', $palign = '', $border = 1, $fitonpage = false);

	//Balance Sheet

	$pdf->AddPage('P');
	$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(30);
	$pdf->writeHTML($tbl['balance_sheet'], true, false, false, false, '');

	//Debtors/Creditors

	$pdf->AddPage('P');
	$pdf->SetY(30);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(30);
	$pdf->writeHTML($tbl['debandcre'], true, false, false, false, '');

	//Key Ratios -- page 25
	//$pdf->AddPage('P');
	$pdf->SetY(150);
	$pdf->SetFont('dejavusanscondensed', '', 9);
	$pdf->SetY(150);
	$pdf->writeHTML($tbl['keyrat'], true, false, false, false, '');

	//Company Valuation -- page 25
	//$pdf->AddPage('P');
	//$pdf->SetY(30);
	//$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->SetY(30);
	//$pdf->writeHTML($tbl['comp_val'], true, false, false, false, '');
	//Sensitivity report -- page 25
	//$pdf->AddPage('P');
	//$pdf->SetY(100);
	//$pdf->SetFont('dejavusanscondensed', '', 9);
	//$pdf->SetY(100);
	//$pdf->writeHTML($tbl['sensitivity'], true, false, false, false, '');
	// -----------------------------------------------------------------------------

	ob_clean();

	//Close and output PDF document

	$pdf->Output($title . '.pdf', 'I');
    }

}
