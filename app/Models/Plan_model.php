<?php

namespace App\Models;

use CodeIgniter\Model;

class Plan_model extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'plans';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $insertID         = 0;
    protected $returnType       = 'object';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];


    public function get_all_plans($type=''){

        $builder = $this->db->table($this->table);

        if($type!=''){
            $builder->where('type',$type);
        }
        $query = $builder->get();
        //print_r($query);exit;
        $plans =array();

        if($builder->countAllResults() >= 1){
            foreach ($query->getResultArray() as $plan) {
                $plans[] = $plan;
            }
        }
        
        return $plans;
    }
}


/**
<?php
Class Plan_model extends CI_Model
{
	//insert transaction data
    public function insertTransaction($data = array()){
        $insert = $this->db->insert('payments',$data);
        if($insert){

            $plan_start_date = date('Y-m-d H:i:s');
            if($data['plan_id'] == 2){
                $plan_end_date = date('Y-m-d H:i:s',strtotime("+1 year"));
            }else{
                $plan_end_date = date('Y-m-d H:i:s',strtotime("+1 month"));
            }
        	
            $data2=array(
        		"subscribed" => "y",
                "plan_start_date" => $plan_start_date,
                "plan_end_date" => $plan_end_date
        	);
            
        	$this->db->where('id',$data['user_id']);
        	if($this->db->update('user',$data2)){
        		return true;
        	}
        }
    }

    public function update_subscription($data = array()){

            if($data['plan_id'] == 2){
                $plan_end_date = date('Y-m-d H:i:s',strtotime("+1 year"));
            }else{
                $plan_end_date = date('Y-m-d H:i:s',strtotime("+1 month"));
            }

        $data2=array(
            "subscribed" => "y",
            "plan_end_date" => $plan_end_date

        );
        $this->db->where('id',$this->session->userdata('user')->id);
        if($this->db->update('user',$data2)){
            return true;
        }
    }

    public function get_all_plans($type=''){
        if($type!=''){
            $this->db->where('type',$type);
        }
        $query = $this->db->get('plans');

        $plans =array();

        if($query->num_rows() >= 1){
            foreach ($query->result_array() as $plan) {
                $plans[] = $plan;
            }
        }
        
        return $plans;
    }

    public function update_plan($id,$type,$data){
        $this->db->where('id',$id);
        $this->db->where('type',$type);
        if($this->db->update('plans',$data)){
            return true;
        }else{
            return false;
        }

    }
}
?>
**/