<?php
namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\DirectorModel;
use App\Models\CompanyDetail;
use Ssp;

class Director extends BaseController
{
    /**
     * @var DirectorModel
     */
    protected $director;

    /**
     * @var CompanyDetail
     */
    protected $company;

    public function __construct()
    {
        $this->director = new DirectorModel();
        $this->company = new CompanyDetail();
    }

    public function index()
    {
        helper('url');
        return view('director_view', $this->data);
    }

    public function ajaxList()
    {
        if (!$this->session->has('user')) {
            return redirect()->to(site_url() . 'login');
        }

        $list = $this->director->get_datatables();

        $user_id = $this->session->userdata('user')->id;

        $sql = 'select currency from company_detail where user_id="' . $user_id . '"';
       
        $query = $this->db->query($sql);
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
        $data = array();
        $no = $this->request->getVar('start');
        foreach ($list as $director) {
            $row = array();
            if ($director->image != '' && $director->image != 'assets/img/avatars/avatar.png') {
                $path = site_url() . '/img/' . $director->image;
            } else {
                $path = site_url() . 'template-assets/img/team/nuri.png';
            }

            $row[] = '<a href="javascript:void(0)" onclick="edit_director(' . $director->director_id . ')"><img src="' . $path . '" width="50" height="50" class="rounded-circle"></a>';
            $row[] = $director->name;

            $row[] = $cur . number_format($director->amount);
            $row[] = number_format($director->share_qty);
            $row[] = $cur . number_format($director->price_per_share);
            $row[] = $director->share_class_sc;
            $row[] = $director->netProfit . '%';
            $row[] = $director->payment_frequency;
            $row[] = $director->eduAndExp;
            $row[] = $director->directerRole;
          
            $row[] = '<div>
                <button class="btn p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><svg class="svg-inline--fa fa-edit fa-w-18 text-500" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg><!-- <span class="text-500 fas fa-edit"></span> Font Awesome fontawesome.com --></button>
                <button class="btn p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><svg class="svg-inline--fa fa-trash-alt fa-w-14 text-500" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg><!-- <span class="text-500 fas fa-trash-alt"></span> Font Awesome fontawesome.com --></button>
            </div>';

            $data[] = $row;
        }
        $recordsTotal = $this->director->count_all();
        $output = array(
            "draw" => $_POST['draw'],
            "recordsTotal" => $recordsTotal,
            "recordsFiltered" => $recordsTotal, //$this->director->count_filtered(),
            "data" => $data,
            "currency" => $cur,
        );

        echo json_encode($output);
    }

    public function ajaxListJs()
    {
        $list = $this->company->where('user_id', $this->session->get('user')->id)->find();
        echo("<pre>");
        print_r($list);
        echo("<pre>");
        die();
        $currency = $list ? $list[0]->currency : null;
        //echo "sfsdfdfdf".$currency;
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
        $directors_array = array();
        
        foreach ($list as $director) {
            if ($director->image != '' && $director->image != 'assets/img/avatars/avatar.png') {
                $path = site_url() . 'uploads/' . $director->image;
            } else {
                $path = site_url() . 'template-assets/img/team/nuri.png';
            }

            $directors_array[] = array(
                'image' => '<img src="' . $path . '" width="50" height="50" class="rounded-circle">',
                'name' => $director->name,
                'amount' => '<span class="currencydynamic">'.$cur.'</span>'. number_format($director->amount,2),
                'share_qty' => number_format($director->share_qty),
                'price_per_share' => '<span class="currencydynamic">'.$cur.'</span>' . number_format($director->price_per_share,2),
                'netProfit' => $director->netProfit . '%',
                'payment_frequency' => $director->payment_frequency,
                'directerRole'=> $director->directerRole,
                'action' => '
                <div class="btn-group btn-group hover-actions end-0 me-4" style="margin-right: 0px !important;    margin-top: -10px;">
                    <button class="btn btn-light pe-2 editcompanyowner" id='.$director->director_id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                        <span class="fas fa-edit"></span>
                    </button>
                    <button class="btn btn-light pe-2 removecompanyowner" id='.$director->director_id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                        <span class="fas fa-trash"></span>
                    </button>
                </div>'

            );
        }
            
        echo json_encode($directors_array);
    }


    public function ajax_get_details()
    {
        $user_id = $this->session->userdata('user')->id;
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

        $director = $this->director->get_directors_capital_investment();

        $output = array(
            "total" => $director,
            "currency" => $cur,
        );

        echo json_encode($output);
    }

    public function ajax_edit($id)
    {
        $builder = $this->db->table('director');
        $data = $builder->where('director_id', $id)->get()->getRow();
        $user_id = $this->session->get('user')->id;

        $query = $this->db->query('select currency from company_detail where user_id="' . $user_id . '"');
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
        $data->currency = $cur;
        echo json_encode($data);
    }

    public function ajaxAdd()
    {
        $str = ['$', '€', '₹', '£', '%', ','];
        $rplc = ['', '', '', '', '', ''];
        $user_id = $this->session->get('user')->id;
        $director_id = $this->request->getVar('director_id');
        $director_name = $this->request->getVar('director_name');
        $share_qty = str_replace($str, $rplc, $this->request->getVar('share_qty'));
        $price_per_share = str_replace($str, $rplc, $this->request->getVar('price_per_share'));
        $share_class_sc = $this->request->getVar('share_class_sc');
        $amount_paid = str_replace($str, $rplc, $this->request->getVar('amount'));
        $netProfit =str_replace($str, $rplc, $this->request->getVar('netProfit'));
        $payment_frequency = str_replace($str, $rplc, $this->request->getVar('payment_frequency'));
        $image = $this->request->getVar('uploadownerpic_val');
        $eduAndExp = "";
        $directerRole = $this->request->getVar('directerRole');

        $data = array(
            'user_id' => $user_id,
            'name' => $director_name,
            'amount' => $amount_paid,
            'eduAndExp' => $eduAndExp,
            'directerRole' => $directerRole,
            'share_qty' => $share_qty,
            'price_per_share' => $price_per_share,
            'share_class_sc' => $share_class_sc,
            'netProfit' => $netProfit,
            'payment_frequency' => $payment_frequency,
            'image' => $image,
        );

        $builder = $this->db->table('director');

        if($director_id > 0){
            $builder->set($data);
            $builder->where('director_id', $director_id);
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

    public function ajax_update()
    {
        $str = ['$', '€', '₹', '£', '%', ','];
        $rplc = ['', '', '', '', '', ''];

        $user_id = $this->session->userdata('user')->id;
        $director_name = $this->request->getVar('director_name');
        $share_qty = str_replace($str, $rplc, $this->request->getVar('share_qty'));
        $price_per_share = str_replace($str, $rplc, $this->request->getVar('price_per_share'));
        $share_class_sc = $this->request->getVar('share_class_sc');
        $amount_paid = str_replace($str, $rplc, $this->request->getVar('director_amount_paid'));
        $netProfit = str_replace($str, $rplc, $this->request->getVar('netProfit'));
        $payment_frequency = str_replace($str, $rplc, $this->request->getVar('payment_frequency'));
        //$image = $this->request->getVar('image');
        $director_id = $this->request->getVar('director_id');
        $eduAndExp = $this->request->getVar('eduAndExp');
        $directerRole = $this->request->getVar('directerRole');

        $data = array(
            'user_id' => $user_id,
            'name' => $director_name,
            'amount' => $amount_paid,
            // 'image' => $image,   
            'director_id' => $director_id,
            'eduAndExp' => $eduAndExp,
            'directerRole' => $directerRole,
            'share_qty' => $share_qty,
            'price_per_share' => $price_per_share,
            'share_class_sc' => $share_class_sc,
            'netProfit' => $netProfit,
            'payment_frequency' => $payment_frequency,

        );

        if (isset($_FILES['director_logo']) && !empty($_FILES['director_logo']['tmp_name'])) {
            $prev_logo = $this->director->get_director_detail($director_id);
            //check if previous logo already exist
            if ($prev_logo['image'] == $_FILES['director_logo']['name']) {

                if ($prev_logo['image'] != "") {

                    unlink('assets/img/' . $prev_logo['image']);

                    if ($_FILES['director_logo']['name'] != '') {

                        $response = $this->do_upload('director_logo');
                    }
                } else {
                    if ($_FILES['director_logo']['name'] != '') {

                        $response = $this->do_upload('director_logo');
                    }
                }
            }
            if ($response !== false) {
                $data['image'] = $_FILES['director_logo']['name'];
            }
        }

        $this->director->update(array('director_id' => $director_id), $data);
        echo json_encode(array("status" => TRUE));
    }

    public function ajax_delete($id)
    {
        if($this->director->delete_by_id($id)){
            echo "success";
        }else{
            echo "failed";
        }
    }
    public function load_currency($id)
    {
        $data = $this->director->get_by_id($id);

        $user_id = $this->session->userdata('user')->id;

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
        $data->currency = $cur;
        echo json_encode($data);
    }

    public function restoreDefault($id)
    {

        $director_detail = $this->director->get_by_id($id);

        //print_r($product_detail->ThumbNail);

        $photo_data = array(
            'image' => "assets/img/avatars/avatar.png",
        );


        if ($director_detail->image != "assets/img/avatars/avatar.png") {

            unlink($director_detail->image);
        }

        $this->db->where('director_id', $id);
        $this->db->update('director', $photo_data);

        $response = array(
            'status' => 'success',
            'message' => "Photo has been delete !!!"
        );
        $this->session->set_flashdata('response', $response);
    }

    public function do_upload($file_name)
    {
        if ($file_name == "director_logo") {
            // $config['upload_path'] = $this->config->item('base_upload_path') . '/company_logo/';
            $config['upload_path'] = './assets/img/';
        } else {
            //$config['upload_path'] = $this->config->item('base_upload_path') . 'director_logo/';
            $config['upload_path'] = './assets/img/';
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


    public function ajaxListDt() {

        $user_id = $this->session->get('user')->id;


        $curbuilder =  $this->db->table('company_detail');  
        $curdata = $curbuilder->where('user_id', $user_id)->get()->getRow();
        $cur = $curdata->currency;


        $sql = 'select * from director where user_id="' . $user_id . '"'; 
        $table = ($sql);    
        $primaryKey = 'director_id';

        $columns = array(
    
        array( 'db' => 'director_id',  'dt' => 0 ),
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

        array( 'db' => 'name',  'dt' => 2 ),
        array( 'db' => 'amount',  'dt' => 3,
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

        array( 'db' => 'share_qty',  'dt' => 4,
            'formatter' => function($id, $row ) {
                return number_format($id,2);
            }
        ),
        array( 'db' => 'price_per_share',  'dt' => 5,
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
                return $cur.''.number_format($id,2);
            }
        ),
        array( 'db' => 'netProfit',  'dt' => 6,
        'formatter' => function($id, $row ) {
            return $id."%";
        }
        ),
        array( 'db' => 'payment_frequency',  'dt' => 7 ),
        array( 'db' => 'directerRole',  'dt' => 8 ),
        array( 'db' => 'director_id',  'dt' => 9,
            'formatter' => function($id, $row ) {
                return '<div class="btn-group btn-group end-0 me-4" style="margin-right: 0px !important;    margin-top: -10px;">
                        <button class="btn btn-light pe-2 editcompanyowner" id='.$id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                            <span class="fas fa-edit"></span>
                        </button>
                        <button class="btn btn-light pe-2 removecompanyowner" id='.$id.' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
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
}
