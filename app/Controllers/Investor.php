<?php
namespace App\Controllers;
error_reporting(1);
use App\Models\InvestorModel;
use App\Models\CompanyDetail;
use Ssp;

class Investor extends BaseController
{
	/**
	 * @var InvestorModel
	 */
	protected $investor;

	/**
	 * @var CompanyDetail
	 */
	protected $company;	

	public function __construct()
	{
		$this->investor = new InvestorModel();
		$this->company =  new CompanyDetail();
	}
	public function ajaxListInvestor()
	{
		if (!$this->session->has('user')) {
            return redirect()->to(site_url() . 'login');
        }
		
		$list = $this->investor->getDatatables();
		$user_id = $this->session->get('user')->id;
		$query = $this->company->where('user_id', $user_id)->find();
		$currency = $query->currency;
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
		$no = $_POST['start'];
		foreach ($list as $investor) {
			$no++;
			$row = array();
			if ($investor->image != '' && $investor->image != 'assets/img/avatars/avatar.png') {
				$path = site_url() . 'img/investor/' . $investor->image;
			} else {
				$path = site_url() . 'template-assets/img/team/nuri.png';
			}

			$row[] = '<a href="javascript:void(0)" onclick="edit_investor(' . $investor->id . ')"><img src="' . $path . '" width="50" height="50" class="rounded-circle"></a>';
			$row[] = $investor->investor;
			$row[] = $cur . number_format($investor->amount);
			$row[] = $investor->netProfit . '%';
			$row[] = $investor->payment_frequency;

			$row[] = '<div>
                <button class="btn p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><svg class="svg-inline--fa fa-edit fa-w-18 text-500" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg><!-- <span class="text-500 fas fa-edit"></span> Font Awesome fontawesome.com --></button>
                <button class="btn p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><svg class="svg-inline--fa fa-trash-alt fa-w-14 text-500" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg><!-- <span class="text-500 fas fa-trash-alt"></span> Font Awesome fontawesome.com --></button>
            </div>';
			
			$data[] = $row;
		}
		$recordsTotal = $this->investor->count_all();
		$output = array(
			"draw" => $_POST['draw'],
			"recordsTotal" => $recordsTotal,
			"recordsFiltered" => $recordsTotal, //$this->investor->count_filtered(),
			"data" => $data,
			"currency" => $cur,
		);
		//output to json format
		echo json_encode($output);
	}

	public function ajaxListJs()
    {
		$builder = $this->db->table('investor');
        $userId = $this->session->get('user')->id;
        $list = $builder->where('user_id', $userId)->get()->getResult();
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

        $row = array();

        $investor_array = array();
        echo("<pre>");
		print_r($list);
		echo("<pre>");
		die();
        foreach ($list as $investor) {
            if ($investor->image != '' && $investor->image != 'assets/img/avatars/avatar.png') {
                $path = site_url() . 'uploads/' . $investor->image;
            } else {
                $path = site_url() . 'template-assets/img/team/nuri.png';
            }

            $investor_array[] = array( 

                'image' => '<img src="' . $path . '" width="50" height="50" class="rounded-circle">',
                'investor' => $investor->investor,
                'investor_type' => $investor->investor_type,
				'amount' => '<span class="currencydynamic">'.$cur.'</span>' . number_format($investor->amount,2),
                'netProfit' => $investor->netProfit . '%',
                'payment_frequency' => $investor->payment_frequency,
				// 'action' => '<span class="far fa-edit"></span><span class="editcompanyinvestor" style="cursor:pointer;" id='.$investor->id.'>Edit</span> <span class="fa fa-trash"></span><span style="cursor:pointer;" class="removecompanyinvestor" id='.$investor->id.'>Delete</span>'
				'action' => '
                <div class="btn-group btn-group hover-actions end-0 me-4" style="margin-right: 0px !important;    margin-top: -10px;">
                    <button class="btn btn-light pe-2 editcompanyinvestor" id='.$investor->id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                        <span class="fas fa-edit"></span>
                    </button>
                    <button class="btn btn-light pe-2 removecompanyinvestor" id='.$investor->id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                        <span class="fas fa-trash"></span>
                    </button>
                </div>'

            );
          

        }
            
        echo json_encode($investor_array);
    }

	public function ajaxListDt() {
        $user_id = $this->session->get('user')->id;
        $sql = 'select * from investor where user_id="' . $user_id . '"';
        $table = ($sql);
        $primaryKey = 'id';    
        $columns = array(
    
        array( 'db' => 'id',  'dt' => 0 ),
        array( 'db' => 'image',  'dt' => 1,
    
            'formatter' => function($id, $row ) {
                if ($id != '' && $id != 'assets/img/avatars/avatar.png') {
                    $path = site_url() . 'uploads/' . $id;
                } else {
                    $path = site_url() . 'template-assets/img/team/nuri.png';
                }
                return '<img src="' . $path . '" width="50" height="50" class="rounded-circle">';
            }
        ),
        array( 'db' => 'investor',  'dt' => 2 ),
        array( 'db' => 'investor_type',  'dt' => 3 ),
        array( 'db' => 'amount',  'dt' => 4,
		'formatter' => function($id, $row ) {
			$cur = '$';
                $companyObject = new CompanyDetail();
                $company = $companyObject->where('user_id', $this->session->get('user')->id)->find();
                if ($company) {
                    $currency = $company[0]['currency'];
                    if ($currency == "AUD" || $currency == "USD") {
                        $cur = "$";
                    } else if ($currency == "EUR") {
                        $cur = "€";
                    } else if ($currency == "UK") {
                        $cur = "£";
                    } else if ($currency == "INR") {
                        $cur = "₹";
                    }
                }
			return $cur.' '.number_format($id,2);
		}
		),
        array( 'db' => 'netProfit',  'dt' => 5,
		'formatter' => function($id, $row ) {
			return $id."%";
		}
		),
		array( 'db' => 'payment_frequency',  'dt' => 6 ),
        array( 'db' => 'id',  'dt' => 7,
            'formatter' => function($id, $row ) {
                return '<div class="btn-group btn-group end-0 me-4" style="margin-right: 0px !important;    margin-top: -10px;">
				<button class="btn btn-light pe-2 editcompanyinvestor" id='.$id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
					<span class="fas fa-edit"></span>
				</button>
				<button class="btn btn-light pe-2 removecompanyinvestor" id='.$id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
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
    
        require( 'custom-assets/Ssp.php' );
    
        echo json_encode(
            Ssp::simple( $_GET, $sql_details, $table, $primaryKey, $columns)
        );
    
    }


	public function ajax_get_details()
	{
		$user_id = $this->session->get('user')->id;
		$query = $this->db->query('select currency from company_detail where user_id="' . $user_id . '"');
		$currency = $query->row()->currency;
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

		$investor = $this->investor->get_investor_capital_investment();

		$output = array(
			"total" => $investor,
			"currency" => $cur,
		);

		echo json_encode($output);
	}


	public function ajaxAdd()
	{
		$str = ['$', '€', '₹', '£', '%', ','];
		$rplc = ['', '', '', '', '', ''];
		$user_id = $this->session->get('user')->id;
		$investor_id = $this->request->getVar('investor_id');
		$investor_name = $this->request->getVar('investor_name');
		$investor_type = $this->request->getVar('investor_type');
		$investor_amount = $this->request->getVar('investor_amount');
		$investor_netProfit = $this->request->getVar('investor_netProfit');
		$investor_payment_frequency = $this->request->getVar('investor_payment_frequency');
		$image = $this->request->getVar('uploadinvestorpic_val');
		// $eduAndExp = $this->request->getVar('eduAndExp');
		// $vat_paid_in_days = $this->request->getVar('vat_paid_in_days');
		$data = array(
			'user_id' => $user_id,
			'investor' => $investor_name,
			'investor_type' => $investor_type,
			'amount' => $investor_amount,
			'netProfit' => $investor_netProfit,
			'payment_frequency' => $investor_payment_frequency,
			'image' => $image,
			// 'eduAndExp' => $eduAndExp,
			// 'vat_paid_in_days' => $vat_paid_in_days,
		);

		$builder = $this->db->table('investor');

		if($investor_id > 0) {
			$builder->set($data);
            $builder->where('user_id', $user_id);
            $insert =  $builder->update();
        }else{
            $insert = $builder->insert($data);
        }
		
		if($insert){
            echo "success";
        }else{
            echo "failed";
        }
	}
	public function ajaxUpdate()
	{
		$str = ['$', '€', '₹', '£', '%', ','];
		$rplc = ['', '', '', '', '', ''];
		$user_id = $this->session->get('user')->id;
		$investor_name = $this->request->getVar('investor_name');
		$investor_type = $this->request->getVar('investor_type');
		$amount_paid = str_replace($str, $rplc, $this->request->getVar('investor_amount_paid'));
		$netProfit = str_replace($str, $rplc, $this->request->getVar('netProfit'));
		$payment_frequency = $this->request->getVar('payment_frequency');
		$eduAndExp = $this->request->getVar('eduAndExp');
		$vat_paid_in_days = $this->request->getVar('vat_paid_in_days');
		$data = array(
			'user_id' => $user_id,
			'investor' => $investor_name,
			'investor_type' => $investor_type,
			'amount' => $amount_paid,
			'netProfit' => $netProfit,
			'payment_frequency' => $payment_frequency,
			'eduAndExp' => $eduAndExp,
			'vat_paid_in_days' => $vat_paid_in_days,
		);

		if (isset($_FILES['investor_logo']) && !empty($_FILES['investor_logo']['tmp_name'])) {
			$prev_logo = $this->investor->get_by_id($this->request->getVar('id'));
			//check if previous logo already exist
			if ($prev_logo->image == $_FILES['investor_logo']['name']) {

				if ($prev_logo->image != "") {

					unlink('assets/img/investor/' . $prev_logo->image);

					if ($_FILES['investor_logo']['name'] != '') {

						$response = $this->do_upload('investor_logo');
					}
				} else {
					if ($_FILES['investor_logo']['name'] != '') {

						$response = $this->do_upload('investor_logo');
					}
				}
			}
			if ($response !== false) {
				$data['image'] = $_FILES['investor_logo']['name'];
			}
		}
		$this->investor->update($this->request->getVar('id'), $data);
		echo json_encode(array("status" => TRUE));
	}

	public function ajax_delete($id)
	{
		if($this->investor->delete_by_id($id)){
            echo "success";
        }else{
            echo "failed";
        }

		//echo json_encode(array("status" => TRUE));
	}


	public function ajaxEdit($id)
	{
		$builder = $this->db->table('investor');
		$data = $builder->where('id', $id)->get()->getRow();

		$currency = $this->currency;
		//print_r($currency); exit;
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

		$data->currency = $cur;
		echo json_encode($data);
	}
	public function load_currency($id)
	{
		$data = $this->investor->get_by_id($id);

		$user_id = $this->session->get('user')->id;

		$query = $this->db->query('select currency from company_detail where user_id="' . $user_id . '"');
		$currency = $query->row()->currency;
		//print_r($currency); exit;
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
		$data->currency = $cur;
		echo json_encode($data);
	}

	public function restoreDefault($id)
	{

		$investor_detail = $this->investor->get_by_id($id);

		//print_r($product_detail->ThumbNail);

		$photo_data = array(
			'image' => "assets/img/avatars/avatar.png",
		);


		if ($investor_detail->image != "assets/img/avatars/avatar.png") {

			unlink($investor_detail->image);
		}

		$this->db->where('id', $id);
		$this->db->update('investor', $photo_data);

		$response = array(
			'status' => 'success',
			'message' => "Photo has been delete !!!"
		);
		$this->session->set_flashdata('response', $response);
	}

	public function do_upload($file_name)
	{

		if ($file_name == "investor_logo") {
			// $config['upload_path'] = $this->config->item('base_upload_path') . '/company_logo/';
			$config['upload_path'] = './assets/img/investor';
		} else {
			//$config['upload_path'] = $this->config->item('base_upload_path') . 'director_logo/';
			$config['upload_path'] = './assets/img/investor';
		}
		$config['allowed_types'] = 'gif|jpg|png|jpeg';
		$config['max_size'] = 1000;
		$config['max_width'] = 3068;
		$config['max_height'] = 2014;

		$this->load->library('upload', $config);

		if (!$this->upload->do_upload($file_name)) {
			$error = array('error' => $this->upload->display_errors());
		} else {
			$data = array('upload_data' => $this->upload->data());
			return $data;
			//$this->load->view('upload_success', $data);
		}
	}
}
