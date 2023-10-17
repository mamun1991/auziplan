<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use Ssp;
use App\Models\LocalProductModel;

class Revenue extends BaseController {

    /**
     * @var LocalProductModel
     */
    protected $localProduct;
    
    public function __construct() {
        $this->localProduct = new LocalProductModel();
    }

    
    //<!-- ===============================================-->
    //<!--   Products Revenue 
    //<!-- ===============================================-->    
	
    public function index() {
        helper('report_helper');

        if (!$this->session->has('user')) {
            return redirect()->to(site_url() . 'login');
        }

        $this->data['currency'] = $this->currency;
        $this->data['controller'] = 'revenue';
        $this->data['user'] = $this->session->get('user');

		return view('other-layouts/head',$this->data)
            . view('other-layouts/leftbar', $this->data)
            . view('other-layouts/header', $this->data)
            . view('revenue', $this->data)
            . view('other-layouts/footer', $this->data);
	}


	public function ajaxAddProduct()
    {
        
        $user_id = $this->session->get('user')->id;
        
        $edit_id = $this->request->getVar('product_id');

        $search = array(
			'[', ']', 
			'{', '}', 
			'(', ')',
			'€',
			'₹',
			'$',
			'%',
            '£',
		);
		
		$replace = '';

        $product_type = $this->request->getVar('product_type');
        $description = $this->request->getVar('description');
		$opening_stock_qty = $this->request->getVar('opening_stock_qty');
        $Qty = $this->request->getVar('monthly_qty');
        $unit_cost = $this->request->getVar('average_cost_price');
        $markUp_on_cost = $this->request->getVar('percent_markup_on_cost');
        $month_stock_allowance = $this->request->getVar('month_stock_allowance'); // which col
        $selling_price = $this->request->getVar('selling_price');
        $monthly_revenue = $this->request->getVar('monthly_revenue');
        $year_1 = $this->request->getVar('year_1');
        $year_1_cost = $this->request->getVar('year_1_cost');
        //$cpmt = str_replace($search, $replace, $this->request->getVar('cpmt'));
        $year_1_gross_profit = $this->request->getVar('year_1_gross_profit');
        $total_stock_allowance = $this->request->getVar('total_stock_allowance');
        

        $data = array(
            'user_id' => $user_id,
            'product_type' => $product_type,
            'description' => $description,
			'opening_stock_qty'  => round(preg_replace('/[^0-9]/', '', $opening_stock_qty)),
            'Qty'  => round(preg_replace('/[^0-9]/', '', $Qty)),
            'unit_cost' => round(preg_replace('/[^0-9]/', '', $unit_cost)),
            'markUp_on_cost'      => round(preg_replace('/[^0-9]/', '', $markUp_on_cost)),
            'selling_price'         => round(preg_replace('/[^0-9]/', '', $selling_price)),
            'monthly_revenue'        => round(preg_replace('/[^0-9]/', '', $monthly_revenue)),
            'year_1'     => round(preg_replace('/[^0-9]/', '', $year_1)),
            'year_1_cost' => round(preg_replace('/[^0-9]/', '', $year_1_cost)),
            'year_1_gross_profit' => round(preg_replace('/[^0-9]/', '', $year_1_gross_profit)),
            'total_stock_allowance' => round(preg_replace('/[^0-9]/', '', $total_stock_allowance)),
			'month_stock_allowance' => round(preg_replace('/[^0-9]/', '', $month_stock_allowance)),
        );


        $insert = 0;

        $builder = $this->db->table('localproduct');
        if ($edit_id > 0) {
            $builder->where('id', $edit_id);
            $builder->update($data);
            $insert = 1;
        } else {
            $builder->insert($data);
            $insert = 1;
        }
		
		if($insert){
			echo "success";
		}else{
			echo "failed";
		}

    }

	
	public function loadProductRevenueDt() {
        if (!$this->session->has('user')) {
            return redirect()->to(site_url() . 'login');
        }

        /**OLD CODE
        $user_id = $this->session->get('user')->id;

        $list = $this->localProduct->get_list($user_id);

        $currency = $this->currency;

        $cur = '';

        if ($currency == "AUD" || $currency == "USD") {
            $cur = "$";
        } else if ($currency == "EUR") {
            $cur = "€";
        } else if ($currency == "UK") {
            $cur = "£";
        } else if ($currency == "INR") {
            $cur = "₹";
        }

        $data = array();
		
        foreach ($list as $res) {
            //print_r($list);
                $row = array();
                $row[] = $res->product_type;
                $row[] = $res->description;
                $row[] = number_format($res->opening_stock_qty);
                $row[] = number_format($res->Qty); 
                $row[] = $cur . number_format($res->unit_cost);
				$row[] = number_format($res->markUp_on_cost)."%";
				$row[] = $cur . number_format($res->selling_price);
                $row[] = number_format($res->month_stock_allowance);   
                $row[] = $cur . number_format($res->total_stock_allowance);
                $row[] = $cur . number_format($res->monthly_revenue);
                $row[] = $cur . number_format($res->monthly_revenue * 12);
                $row[] = $cur . number_format($res->monthly_revenue * 12);
                $row[] = $cur . number_format($res->monthly_revenue * 12);
                $row[] = '<div class="btn-group btn-group end-0 me-4" style="margin-right: 0px !important;margin-top:-2px;">
                            <button class="btn btn-light pe-2 editproductrevenue" id='.$res->id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                <span class="fas fa-edit"></span>
                            </button>
                            <button class="btn btn-light pe-2 removeproductrevenue" id='.$res->id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                <span class="fas fa-trash"></span>
                            </button>
                        </div>';

                $data[] = $row;
        }
        //exit;
        $recordsTotal = $this->localProduct->countAll($user_id);
        $output = array(
            "draw" => isset($_GET['draw']) ? $_GET['draw'] : false,
            "recordsTotal" => $recordsTotal,
            "recordsFiltered" => $recordsTotal, //$this->onetimecost->count_filtered(),
            "data" => $data,
            "currency" => $cur
        );
        //output to json format
        echo json_encode($output);

        */


        $user_id = $this->session->get('user')->id;


        $sql = 'select * from localproduct where user_id="' . $user_id . '"';
        $table = ($sql);
        $primaryKey = 'id';
        $columns = array(

            array('db' => 'id',  'dt' => 0),
            array('db' => 'product_type',  'dt' => 1),
            array('db' => 'description',  'dt' => 2),
            array(
                'db' => 'opening_stock_qty',  'dt' => 3,
                'formatter' => function ($id, $row) {
                    return number_format($id,);
                }
            ),
            array(
                'db' => 'Qty',  'dt' => 4,
                'formatter' => function ($id, $row) {
                    return number_format($id);
                }
            ),
            array(
                'db' => 'unit_cost',  'dt' => 5,
                'formatter' => function ($id, $row) {
                    $currency = $this->currency;
                    $cur = '';

                    if ($currency == "AUD" || $currency == "USD") {
                        $cur = "$";
                    } else if ($currency == "EUR") {
                        $cur = "€";
                    } else if ($currency == "UK") {
                        $cur = "£";
                    } else if ($currency == "INR") {
                        $cur = "₹";
                    }
                    return $cur . '' . number_format($id);
                }
            ),
            array(
                'db' => 'markUp_on_cost',  'dt' => 6,
                'formatter' => function ($id, $row) {
                    return number_format($id)."%";
                }
            ),
            array(
                'db' => 'selling_price',  'dt' => 7,
                'formatter' => function ($id, $row) {
                    $currency = $this->currency;
                    $cur = '';

                    if ($currency == "AUD" || $currency == "USD") {
                        $cur = "$";
                    } else if ($currency == "EUR") {
                        $cur = "€";
                    } else if ($currency == "UK") {
                        $cur = "£";
                    } else if ($currency == "INR") {
                        $cur = "₹";
                    }
                    return $cur . '' . number_format($id);
                }
            ),
            array(
                'db' => 'month_stock_allowance',  'dt' => 8,
                'formatter' => function ($id, $row) {
                    return number_format($id);
                }
            ),
            array(
                'db' => 'total_stock_allowance',  'dt' => 9,
                'formatter' => function ($id, $row) {
                    $currency = $this->currency;
                    $cur = '';

                    if ($currency == "AUD" || $currency == "USD") {
                        $cur = "$";
                    } else if ($currency == "EUR") {
                        $cur = "€";
                    } else if ($currency == "UK") {
                        $cur = "£";
                    } else if ($currency == "INR") {
                        $cur = "₹";
                    }
                    return $cur . '' . number_format($id);
                }
            ),
            array(
                'db' => 'monthly_revenue',  'dt' => 10,
                'formatter' => function ($id, $row) {
                    $currency = $this->currency;
                    $cur = '';

                    if ($currency == "AUD" || $currency == "USD") {
                        $cur = "$";
                    } else if ($currency == "EUR") {
                        $cur = "€";
                    } else if ($currency == "UK") {
                        $cur = "£";
                    } else if ($currency == "INR") {
                        $cur = "₹";
                    }
                    return $cur . '' . number_format($id * 12);
                }
            ),
            array(
                'db' => 'monthly_revenue',  'dt' => 11,
                'formatter' => function ($id, $row) {
                    $currency = $this->currency;
                    $cur = '';

                    if ($currency == "AUD" || $currency == "USD") {
                        $cur = "$";
                    } else if ($currency == "EUR") {
                        $cur = "€";
                    } else if ($currency == "UK") {
                        $cur = "£";
                    } else if ($currency == "INR") {
                        $cur = "₹";
                    }
                    return $cur . '' . number_format($id * 12);
                }
            ),
            array(
                'db' => 'monthly_revenue',  'dt' => 12,
                'formatter' => function ($id, $row) {
                    $currency = $this->currency;
                    $cur = '';

                    if ($currency == "AUD" || $currency == "USD") {
                        $cur = "$";
                    } else if ($currency == "EUR") {
                        $cur = "€";
                    } else if ($currency == "UK") {
                        $cur = "£";
                    } else if ($currency == "INR") {
                        $cur = "₹";
                    }
                    return $cur . '' . number_format($id * 12);
                }
            ),
            array(
                'db' => 'monthly_revenue',  'dt' => 13,
                'formatter' => function ($id, $row) {
                    $currency = $this->currency;
                    $cur = '';

                    if ($currency == "AUD" || $currency == "USD") {
                        $cur = "$";
                    } else if ($currency == "EUR") {
                        $cur = "€";
                    } else if ($currency == "UK") {
                        $cur = "£";
                    } else if ($currency == "INR") {
                        $cur = "₹";
                    }
                    return $cur . '' . number_format($id * 12);
                }
            ),
            array(
                'db' => 'id',  'dt' => 14,
                'formatter' => function ($id, $row) {
                    return '<div class="btn-group btn-group end-0 me-4" style="margin-right: 0px !important;margin-top:-2px;">
                            <button class="btn btn-light pe-2 editproductrevenue" id='.$id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                <span class="fas fa-edit"></span>
                            </button>
                            <button class="btn btn-light pe-2 removeproductrevenue" id='.$id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                <span class="fas fa-trash"></span>
                            </button>
                        </div>';
                }
            ),

        );

        // Database connection details

        $sql_details = array(
            'user' => $this->db->username,
            'pass' => $this->db->password,
            'db'   => $this->db->database,
            'host' => $this->db->hostname
        );

        require('custom-assets/Ssp.php');

        echo json_encode(
            Ssp::simple($_GET, $sql_details, $table, $primaryKey, $columns)
        );
        
    }


	public function delete_product_revenue($id)
    {
        $builder = $this->db->table('localproduct');
        $builder->where('id', $id);
        if ($builder->delete()) {
            echo "success";
        } else {
            echo "failed";
        }
        
        //echo json_encode(array("status" => TRUE));
    }


	public function product_revenue_edit($id)
    {
        $builder = $this->db->table('localproduct');
        $builder->where('id', $id);
        $query = $builder->get();
        $data = $query->getRow();

        echo json_encode($data);
    }


	public function getOperatingCost(){
		$user_id = $this->session->get('user')->id;
        $query = $this->db->query('SELECT sum(monthly_cost)*12 as operating_cost  FROM `expenses` where user_id="' . $user_id . '"');
        $operating_cost = $query->getRow()->operating_cost;
		echo $operating_cost;
	}

    



     //<!-- ===============================================-->
    //<!--   Hourly Rate Revenue 
    //<!-- ===============================================-->    
	

    public function load_hourly_rate_dt()
    {
        
        $user_id = $this->session->get('user')->id;
        $list = $this->revenue_model->get_hourly_rate_list($user_id);
        $query = $this->db->query('select currency from company_detail where user_id="' . $user_id . '"');
        $currency = $query->row()->currency;
        $query = $this->db->query('SELECT sum(monthly_cost)*12 + sum(yearly_cost) as operating_cost  FROM `expenses` where user_id="' . $user_id . '"');
        $year1 = $query->row()->operating_cost;

        $cur = '';

        if ($currency == "AUD" || $currency == "USD") {
            $cur = "$";
        } else if ($currency == "EUR") {
            $cur = "€";
        } else if ($currency == "UK") {
            $cur = "£";
        } else if ($currency == "INR") {
            $cur = "₹";
        }

        $data = array();
		
        foreach ($list as $res) {
            //print_r($list);
                $row = array();
                $row[] = $res->operating_costs;
                $row[] = $cur . $res->net_income_required;
                $row[] = number_format($res->days_per_year);
                $row[] = $cur . number_format($res->hourly_rate); 
                $row[] = $cur . number_format($res->revenue_required / 12);
                $row[] = $cur . number_format($year1);
                $row[] = "";
                $row[] = "";
                $row[] = '<div class="btn-group btn-group end-0 me-4" style="margin-right: 0px !important;margin-top:-2px;">
                            <button class="btn btn-light pe-2 editproductrevenue" id='.$res->id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                <span class="fas fa-edit"></span>
                            </button>
                            <button class="btn btn-light pe-2 removeproductrevenue" id='.$res->id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                <span class="fas fa-trash"></span>
                            </button>
                        </div>';

                $data[] = $row;
        }
        //exit;
        $recordsTotal = $this->revenue_model->count_hourly_rate_list();
        $output = array(
            "draw" => $_POST['draw'],
            "recordsTotal" => $recordsTotal,
            "recordsFiltered" => $recordsTotal, //$this->onetimecost->count_filtered(),
            "data" => $data,
            "currency" => $cur
        );
        //output to json format
        echo json_encode($output);
    }


    public function ajaxAddHourlyRate()
    {
        
        $user_id = $this->session->get('user')->id;
        
        $edit_id = $this->request->getVar('hourlyrateid');

        $search = array(
			'[', ']', 
			'{', '}', 
			'(', ')',
			'€',
			'₹',
			'$',
			'%',
            '£',
		);
		
		$replace = '';

        $revenue_type = $this->request->getVar('revenue_type');
        $net_income_required = str_replace($search, $replace, $this->request->getVar('net_income_required'));
        $days_per_week = $this->request->getVar('days_per_week');
        $sickness_days = $this->request->getVar('sickness_days');
        $hours_per_day = $this->request->getVar('hours_per_day');
        $none_billable_hours_per_day = $this->request->getVar('none_billable_hours_per_day'); // which col
        $revenue_growth_input_hourly_rate = $this->request->getVar('revenue_growth_input');
        
        $net_income_requiredcal = round(preg_replace('/[^0-9]/', '', $net_income_required));
        $monthlyhr =  $net_income_requiredcal/12;
        $year1hr = $net_income_requiredcal;
        $year2hr = ($net_income_requiredcal/17) + $net_income_requiredcal;
        // $operating_costs = str_replace($search, $replace, $this->request->getVar('operating_costs'));
        // $total_revenue_required = str_replace($search, $replace, $this->request->getVar('total_revenue_required'));
        // $days_per_year = $this->request->getVar('total_days_per_year');
        // $vacation_days = $this->request->getVar('vacation_days');
        // $working_days_per_year = $this->request->getVar('working_days_per_year');
        // $billable_hours = $this->request->getVar('billable_hour_per_day');
        // $billable_hours_per_year = $this->request->getVar('billable_hours_per_year');
        // $hourly_rate = $this->request->getVar('hourly_rate');
        

        $data = array(
            'user_id' => $user_id,
            'serviceID' => $revenue_type,
            'net_income_required'  => round(preg_replace('/[^0-9]/', '', $net_income_required)),
            'days_per_week'  => round(preg_replace('/[^0-9]/', '', $days_per_week)),
            'sickness_days'        => round(preg_replace('/[^0-9]/', '', $sickness_days)),
            'hours_per_day' =>  $hours_per_day,
            'none_billable_hours_per_day' => round(preg_replace('/[^0-9]/', '', $none_billable_hours_per_day)),
            'growth_rate' => $revenue_growth_input_hourly_rate,
            'monthly_revenue' => $monthlyhr,
            'year_1' => $year1hr,
            'year_2' => $year2hr,
            // 'operating_costs' => $operating_costs,
            // 'revenue_required'  => round(preg_replace('/[^0-9]/', '', $total_revenue_required)),
            // 'days_per_year'      => round(preg_replace('/[^0-9]/', '', $days_per_year)),
            // 'vacation_days' => round(preg_replace('/[^0-9]/', '', $vacation_days)),
            // 'working_days_per_year'     => round(preg_replace('/[^0-9]/', '', $working_days_per_year)),
            // 'billable_hours' => round(preg_replace('/[^0-9]/', '', $billable_hours)),          
			// 'billable_hours_per_year' => round(preg_replace('/[^0-9]/', '', $billable_hours_per_year)),
            // 'hourly_rate' => $hourly_rate,
        );

        $builder = $this->db->table('hourly_rate_income');

        if($edit_id > 0) {
            $builder->where('id', $edit_id);
            $insert = $builder->update($data);
        }else{
            $insert = $builder->insert($data);
        }
		
		if($insert){
			echo "success";
		}else{
			echo "failed";
		}

        // $insert = $this->onetimecost->save($data);
        // echo json_encode(array("status" => TRUE));
    }




    public function revenue_stream_total_revenue_required()
    {

        $user_id = $this->session->get('user')->id;
        $data = array();
        $builder = $this->db->table("hourly_rate_income");
        $builder->where(array('user_id' => $user_id));
        $query = $builder->get();
        $result = $query->getRow();
        $data[] = $result;

        // start revenue_stream_expense
        //$user_id = $this->session->userdata('user')->id;

        $list = $this->localProduct->get_all_expenses($user_id);

        $query1 = $this->db->query('select * from general_assumption where user_id="' . $user_id . '"');
        $result = $query1->getRow();
        
        $y1 = 0;
        $y2 = 0;
        $y3 = 0;

        foreach ($list as $expense) {

            if($expense['purpose'] == "Administration"){
                $rate = ($result->administration_increase / 100);
            }

            if($expense['purpose'] == "Marketing"){
                $rate = ($result->marketing_increase / 100);
            }

            if($expense['purpose'] == "Other"){
                $rate = $result->other_increase / 100;
            }

            if($expense['purpose'] == "Public_Relations"){
                $rate = $result->public_relations_increase / 100;
            }

            $y1 = $y1 + $expense['yearly_cost'];

            $year2 = ($expense['yearly_cost'] * $rate)+$expense['yearly_cost'];

            $y2 = $y2 + $year2;

            $year3 = ($year2 * $rate) + $year2;

            $y3 = $y3 + $year3;
        }

        $query = $this->db->query('SELECT sum(monthly_cost) as monthly_cost,sum(yearly_cost) as yearly_cost  FROM `expenses` where user_id="' . $user_id . '"');
        $operating_cost = $query->getRow();

        $data['monthly_cost'] = round($operating_cost->monthly_cost);
        $data['yearly_cost'] = round($operating_cost->yearly_cost);
        $data['year2'] = round($y2);
        $data['year3'] = round($y3);

        echo json_encode($data);


        // end revenue_stream_expense
        //echo json_encode($data);

    }


    public function revenue_stream_payroll_expense(){
        
        $user_id = $this->session->get('user')->id;

        $list = $this->localProduct->get_all_peoples($user_id);

        $y1 = 0;
        $y2 = 0;
        $y3 = 0;

        foreach ($list as $expense) {

            $year1 = $expense['gross_salary']*12;

            $pay_increase = $this->get_payroll_assumptions_val('pay_increase')/100;

            $year2 = $year1 * $pay_increase + $year1;
            
            $year3 = $year2 * $pay_increase + $year2;

            $y1 = $y1 + $year1;
            $y2 = $y2 + $year2;
            $y3 = $y3 + $year3;
        }

        $data = array();

        $query = $this->db->query('SELECT sum(gross_salary) as monthly_cost,sum(gross_salary) * 12 as yearly_cost  FROM `people` where user_id="' . $user_id . '"');
        $payroll_expense = $query->getRow();
        $data[] = $payroll_expense;
        $pay_increase = $this->get_payroll_assumptions_val('pay_increase')/100;
        $year2 = $y1 * $pay_increase + $payroll_expense->yearly_cost;
    
        $year3 = $y2 * $pay_increase + $y2;
        $data['year2'] = round($y2);
        $data['year3'] = round($y3);
        echo json_encode($data);

    }



    public function get_payroll_assumptions_val($val)
    {
        $builder = $this->db->table("general_assumption");
        $builder->where(array('user_id' => $this->session->get('user')->id));
        $query = $builder->get();
        $result = $query->getRow();
        if($val == "pay_increase"){
            return $result->pay_increase;
        }
    }
    
	
}
