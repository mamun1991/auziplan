<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use Ssp;
use App\Models\OneTimeCostModel;
use App\Models\CompanyDetail;

class OpeningCosts extends BaseController
{
    /**
     * @var OneTimeCostModel
     */
    protected $onetimecost;

    /**
     * @var CompanyDetail
     */
    protected $company;

    public function __construct()
    {
        $this->onetimecost = new OneTimeCostModel();
        $session = \Config\Services::session();
        $this->company = new CompanyDetail();
        if (!$session->get('user')) {
            return redirect()->to(site_url() . 'login');
        }
    }

    public function index()
    {
        if (!$this->session->get('user')) {
            return redirect()->to(site_url() . 'login');
        }
        $this->data['controller'] = 'opening_costs';
        $this->data['currency'] = $this->currency;
        $this->data['user'] = $this->session->get('user');

        return view('other-layouts/head', $this->data)
            . view('other-layouts/leftbar')
            . view('other-layouts/header', $this->data)
            . view('opening_costs')
            . view('other-layouts/footer');
    }

    public function onetimeCostDt()
    {
        $user_id = $this->session->get('user')->id;
        $sql = 'select * from one_time_cost where user_id="' . $user_id . '"';

        $table = ($sql);
        $primaryKey = 'id';

        $columns = array(

            array('db' => 'id',  'dt' => 0),
            array('db' => 'one_time_cost',  'dt' => 1),
            array('db' => 'description',  'dt' => 2),
            array(
                'db' => 'amount_paid',  'dt' => 3,
                'formatter' => function ($id, $row) {
                    $cur = $this->currency;
                    return $cur . '' . number_format($id, 2);
                }
            ),
            array(
                'db' => 'id',  'dt' => 4,
                'formatter' => function ($id, $row) {
                    return '<div class="btn-group btn-group end-0 me-4" style="margin-right: 0px !important;margin-top:-2px;">
				<button class="btn btn-light pe-2 editopeningcost" id=' . $id . ' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
					<span class="fas fa-edit"></span>
				</button>
				<button class="btn btn-light pe-2 removeonetimecost" id=' . $id . ' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
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

    public function ajaxListOnetimeCost()
    {
        $user_id = $this->session->get('user')->id;
        $list = $this->onetimecost->getDatatables($user_id);
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
        $no = $_GET['start'];
        foreach ($list as $onetimecost) {
            if ($onetimecost->one_time_cost != 'Plant_Equipment' && $onetimecost->one_time_cost != 'Land_Buildings') {
                $no++;
                $row = array();
                $row[] = $onetimecost->one_time_cost;
                $row[] = $onetimecost->description;
                $row[] = $cur . number_format($onetimecost->amount_paid);
                $row[] = $cur . number_format($onetimecost->total_cost);
                $row[] = '<div class="btn-group btn-group end-0 me-4" style="margin-right: 0px !important;margin-top:-2px;">
                            <button class="btn btn-light pe-2 editopeningcost" id=' . $onetimecost->id . ' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                <span class="fas fa-edit"></span>
                            </button>
                            <button class="btn btn-light pe-2 removeonetimecost" id=' . $onetimecost->id . ' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                <span class="fas fa-trash"></span>
                            </button>
                        </div>';

                $data[] = $row;
            }
        }
        $recordsTotal = $this->onetimecost->countOneTimeCost($user_id);
        $output = array(
            "draw" => $_GET['draw'],
            "recordsTotal" => $recordsTotal,
            "recordsFiltered" => $recordsTotal,
            "data" => $data,
            "currency" => $cur
        );

        echo json_encode($output);
    }



    public function ajaxEdit($id)
    {
        $query = $this->db->query('select * from one_time_cost where id="' . $id . '"');
        $data = $query->getRow();
        echo json_encode($data);
    }


    public function motorEdit($id)
    {
        $query = $this->db->query('select * from mv_loan where id="' . $id . '"');
        $data = $query->getRow();
        echo json_encode($data);
    }


    public function ajaxAdd()
    {
        $str = ['$', '€', '₹', '£', '%', ','];
        $rplc = ['', '', '', '', '', ''];
        $user_id = $this->session->get('user')->id;
        $one_time_cost_type = $this->request->getVar('one_time_cost_type');

        $company_detail = $this->company->where('user_id', $this->session->get('user')->id)->find();

        $query = $this->db->query('select company_vat_collected from general_assumption where user_id="' . $user_id . '" AND company_id="' . $company_detail[0]['id'] . '"');

        $amount_paid = 0;
        $total_vat_gst = 0;
        $total_cost = $amount_paid + $total_vat_gst;
        $vat_gst = 1;
        if ($query->getNumRows()) {
            $vat_gst = $query->getRow()->company_vat_collected;
        }

        //$total_cost = $amount_paid + $total_vat_gst;

        if($this->request->getVar('hour_worked') !== null)
        {
            $hour_worked = round(preg_replace('/[^0-9]/', '', $this->request->getVar('hour_worked')));
        }
        

        if ($one_time_cost_type == 'Land_Buildings') {
            $one_time_cost_cat = 'Land_Buildings';
            $edit_id = $this->request->getVar('landbuilding_id');
            $purchase_date = $this->request->getVar('acquisition_date');
            $one_time_cost_description = $this->request->getVar('property_description');
            $amount_paid = str_replace($str, $rplc, $this->request->getVar('purchase_price'));
            $land_value = str_replace($str, $rplc, $this->request->getVar('land_value'));
            $method = $this->request->getVar('depreciation_method');
            $qty = $this->request->getVar('qty');
            $salvage = '';
            $year = $this->request->getVar('estimated_useful_life');
            $total_without_gst = (($amount_paid - $land_value) / (1 + ($vat_gst / 100)));
            $total_vat_gst = ($amount_paid - $land_value) - $total_without_gst;
            $total_cost = '';
        } elseif ($one_time_cost_type == 'Plant_Equipment') {
            $one_time_cost_cat = 'Plant_Equipment';
            $edit_id = $this->request->getVar('plantequipment_id');
            $one_time_cost_description = $this->request->getVar('asset_description');
            $amount_paid = round(preg_replace('/[^0-9]/', '', $this->request->getVar('aquistion_cost')));
            $qty = $this->request->getVar('qty');
            $method = $this->request->getVar('depreciation_method');
            $year = $this->request->getVar('useful_life');
            $salvage = round(preg_replace('/[^0-9]/', '', $this->request->getVar('salvage_value')));
            $total_cost = $amount_paid * $qty;
            $total_without_gst = (($total_cost) / (1 + ($vat_gst / 100)));
            $total_vat_gst = $total_cost - $total_without_gst;
            $purchase_date = '';
            $land_value = '';
        } else {
            $one_time_cost_cat = $this->request->getVar('one_time_cost_cat');
            $edit_id = $this->request->getVar('openingcost_id');
            $one_time_cost_description = $this->request->getVar('one_time_cost_description');
            $amount_paid = round(preg_replace('/[^0-9]/', '', $this->request->getVar('amount_paid')));
            $total_cost = $amount_paid;
            $total_vat_gst = ($vat_gst * $amount_paid) / 100;
            $purchase_date = '';
            $land_value = '';
            $qty = '';
            $method = '';
            $year = '';
            $salvage = '';
        }

        $data = array(
            'user_id' => $user_id,
            'purchase_date' => $purchase_date,
            'description' => $one_time_cost_description,
            'land_value'  => $land_value,
            'amount_paid' => $amount_paid,
            'method'      => $method,
            'qty'         => $qty,
            'year'        => $year,
            'salvage'     => $salvage,
            'one_time_cost' => $one_time_cost_cat,
            'total_vat_gst' => $total_vat_gst,
            'total_cost' => $total_cost,
        );

        $insert = 0;

        $builder = $this->db->table('one_time_cost');
        if ($edit_id > 0) {
            $builder->where('id', $edit_id);
            $builder->update($data);
            $insert = 1;
        } else {
            $builder->insert($data);
            $insert = 1;
        }

        if ($insert) {
            echo "success";
        } else {
            echo "failed";
        }
    }

    public function ajaxDelete($id)
    {
        $builder = $this->db->table('one_time_cost');
        $builder->where('id', $id);

        if ($builder->delete()) {
            echo "success";
        } else {
            echo "failed";
        }

        //echo json_encode(array("status" => TRUE));
    }


    public function deleteMotor($id)
    {
        $builder = $this->db->table('mv_loan');
        $builder->where('id', $id);

        if ($builder->delete()) {
            echo "success";
        } else {
            echo "failed";
        }
    }


    public function ajaxListPlantEquipment()
    {
        $user_id = $this->session->get('user')->id;
        $list = $this->onetimecost->getDatatables($user_id);
        $currency = $this->currency;
        $company = $this->company->where('user_id', $user_id)->find();

        $query = $this->db->query('select company_vat_collected from general_assumption where user_id="' . $user_id . '" AND company_id="' . $company[0]['id'] . '"');
        $vat_gst = 0;
        if ($query->getRow()) {
            $vat_gst = $query->getRow()->company_vat_collected;
        }

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
        $no = $_GET['start'];
        foreach ($list as $onetimecost) {
            if ($onetimecost->one_time_cost == 'Plant_Equipment') {
                $no++;
                $total_without_gst = 0;
                $total_vat_gst = 0;
                $yearlyAmount = 0;
                $total_without_gst = (($onetimecost->total_cost) / (1 + ($vat_gst / 100)));
                $total_vat_gst = $onetimecost->total_cost - $total_without_gst;
                $yearlyAmount = (($onetimecost->total_cost - $total_vat_gst - $onetimecost->salvage) / $onetimecost->year);
                $row = array();
                $row[] = $onetimecost->description;
                $row[] = $onetimecost->qty;
                $row[] = $cur . number_format($onetimecost->amount_paid);
                $row[] = $cur . number_format($onetimecost->total_cost);
                $row[] = $cur . number_format($total_vat_gst);
                $row[] = $onetimecost->method;
                $row[] = $onetimecost->year;
                $row[] = $cur . number_format($onetimecost->salvage);
                $row[] = $cur . number_format($yearlyAmount / 12);
                $row[] = $cur . number_format($yearlyAmount);
                $row[] = $cur . number_format($yearlyAmount);
                $row[] = $cur . number_format($yearlyAmount);

                $row[] = '<div class="btn-group btn-group end-0 me-4" style="margin-right: 0px !important;margin-top:-2px;">
                            <button class="btn btn-light pe-2 editplanequipment" id=' . $onetimecost->id . ' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                <span class="fas fa-edit"></span>
                            </button>
                            <button class="btn btn-light pe-2 removeplanequipment" id=' . $onetimecost->id . ' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                <span class="fas fa-trash"></span>
                            </button>
                        </div>';

                $data[] = $row;
            }
        }
        //exit;
        $recordsTotal = $this->onetimecost->countPlanEquipment($user_id);
        $output = array(
            "draw" => isset($_GET['draw']) ? $_GET['draw'] : false,
            "recordsTotal" => $recordsTotal,
            "recordsFiltered" => $recordsTotal,
            "data" => $data,
            "currency" => $cur
        );
        //output to json format
        echo json_encode($output);
    }


    public function ajaxListLandBuildings()
    {
        $user_id = $this->session->get('user')->id;
        $list = $this->onetimecost->getDatatables($user_id);
        $currency = $this->currency;
        $company = $this->company->where('user_id', $user_id)->find();


        $query = $this->db->query('select company_vat_collected from general_assumption where user_id="' . $user_id . '" AND company_id="' . $company[0]['id'] . '"');
        $vat_gst = 0;

        if ($query->getRow()) {
            $vat_gst = $query->getRow()->company_vat_collected;
        }

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
        $no = isset($_GET['start']) ? $_GET['start'] : 0;
        foreach ($list as $onetimecost) {
            if ($onetimecost->one_time_cost == 'Land_Buildings') {
                $no++;
                $building_depreciable_basis = 0;
                $total_without_gst = 0;
                $total_vat_gst = 0;
                $value_depreciate = 0;
                $yearlyAmount = 0;
                $building_depreciable_basis = $onetimecost->amount_paid - $onetimecost->land_value;
                $total_without_gst = (($building_depreciable_basis) / (1 + ($vat_gst / 100)));
                $total_vat_gst = $building_depreciable_basis - $total_without_gst;
                $value_depreciate = $building_depreciable_basis - $total_vat_gst;
                $yearlyAmount = $value_depreciate / $onetimecost->year;
                $row = array();
                $row[] = $onetimecost->description;
                $row[] = $onetimecost->purchase_date;
                $row[] = $cur . number_format($onetimecost->amount_paid);
                $row[] = $cur . number_format($onetimecost->land_value);
                $row[] = $cur . number_format($building_depreciable_basis);
                $row[] = $cur . number_format($total_vat_gst);
                $row[] = $cur . number_format($value_depreciate);
                $row[] = $onetimecost->year;
                $row[] = $cur . number_format($yearlyAmount / 12);
                $row[] = $cur . number_format($yearlyAmount);
                $row[] = $cur . number_format($yearlyAmount);
                $row[] = $cur . number_format($yearlyAmount);

                $row[] = '<div class="btn-group btn-group end-0 me-4" style="margin-right: 0px !important;margin-top:-2px;">
                            <button class="btn btn-light pe-2 editlandbuilding" id=' . $onetimecost->id . ' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                <span class="fas fa-edit"></span>
                            </button>
                            <button class="btn btn-light pe-2 removelandbuilding" id=' . $onetimecost->id . ' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                <span class="fas fa-trash"></span>
                            </button>
                        </div>';

                $data[] = $row;
            }
        }
        $recordsTotal = $this->onetimecost->countLandBuilding($user_id);
        $output = array(
            "draw" => isset($_GET['draw']) ? $_GET['draw'] : false,
            "recordsTotal" => $recordsTotal,
            "recordsFiltered" => $recordsTotal,
            "data" => $data,
            "currency" => $cur
        );
        echo json_encode($output);
    }


    public function ajaxAddMotors()
    {

        $user_id = $this->session->get('user')->id;

        $edit_id = $this->request->getVar('motor_id');

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

        $acquisition_date = $this->request->getVar('acquisition_date');
        $mv_description = $this->request->getVar('mv_description');
        $cprice = $this->request->getVar('cprice');
        $cdp = $this->request->getVar('cdp');
        $ctv = $this->request->getVar('ctv');
        $cfinance = $this->request->getVar('cfinance');
        $cir = $this->request->getVar('cir');
        $cterm = $this->request->getVar('cterm');
        $cpayments = $this->request->getVar('cpayments');
        $cpmt = str_replace($search, $replace, $this->request->getVar('cpmt'));
        $cint = $this->request->getVar('cint');


        $data = array(
            'user_id' => $user_id,
            'acquisition_date' => $acquisition_date,
            'mv_description' => $mv_description,
            'cprice'  => round(preg_replace('/[^0-9]/', '', $cprice)),
            'cdp' => round(preg_replace('/[^0-9]/', '', $cdp)),
            'ctv'      => round(preg_replace('/[^0-9]/', '', $ctv)),
            'cfinance'         => round(preg_replace('/[^0-9]/', '', $cfinance)),
            'cir'        => round(preg_replace('/[^0-9]/', '', $cir)),
            'cterm'     => $cterm,
            'cpayments' => round(preg_replace('/[^0-9]/', '', $cpayments)),
            'cpmt' => round($cpmt),
            'cint' => round(preg_replace('/[^0-9]/', '', $cint)),
        );


        $insert = 0;

        $builder = $this->db->table('mv_loan');
        if ($edit_id > 0) {
            $builder->where('id', $edit_id);
            $builder->update($data);
            $insert = 1;
        } else {
            $builder->insert($data);
            $insert = 1;
        }

        if ($insert) {
            echo "success";
        } else {
            echo "failed";
        }

    }

    public function ajaxListMotorVehicle()
    {

        $user_id = $this->session->get('user')->id;
        $builder = $this->db->table('mv_loan');
        $list = $builder->where('user_id', $user_id)->get()->getResultObject();
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

        foreach ($list as $onetimecost) {
            //print_r($list);
            $row = array();
            $row[] = $onetimecost->acquisition_date;
            $row[] = $onetimecost->mv_description;
            $row[] = $cur . number_format($onetimecost->cprice);
            $row[] = $cur . number_format($onetimecost->cdp);
            $row[] = $cur . number_format($onetimecost->ctv);
            $row[] = $cur . number_format($onetimecost->cfinance);
            $row[] = number_format($onetimecost->cir) . "%";
            $row[] = number_format($onetimecost->cterm);
            $row[] = number_format($onetimecost->cpayments);
            $row[] = $cur . number_format($onetimecost->cpmt);
            $row[] = $cur . number_format($onetimecost->cpmt * 12);
            $row[] = $cur . number_format($onetimecost->cpmt * 12);
            $row[] = $cur . number_format($onetimecost->cpmt * 12);

            $row[] = '<div class="btn-group btn-group end-0 me-4" style="margin-right: 0px !important;margin-top:-2px;">
                            <button class="btn btn-light pe-2 editmotor" id=' . $onetimecost->id . ' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                <span class="fas fa-edit"></span>
                            </button>
                            <button class="btn btn-light pe-2 removemotor" id=' . $onetimecost->id . ' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                <span class="fas fa-trash"></span>
                            </button>
                        </div>';

            $data[] = $row;
        }
        //exit;
        $recordsTotal = $this->onetimecost->countMotorVehicle($user_id);
        $output = array(
            "draw" => isset($_GET['draw']) ? $_GET['draw'] : false,
            "recordsTotal" => $recordsTotal,
            "recordsFiltered" => $recordsTotal,
            "data" => $data,
            "currency" => $cur
        );
        echo json_encode($output);
    }
}
