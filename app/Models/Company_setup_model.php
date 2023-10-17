<?php

use CodeIgniter\Model;

Class Company_setup_model extends Model
{

    public function inser_update_company_detail($data,$id=0){
        if($id != 0){
            $this->db->where('id',$id);
            //unset($data['company_name']);
            $this->db->update('company_detail',$data);
            return $id;
        }else{
            $this->db->insert('company_detail',$data);
            return $this->db->insert_id();
            }
	}
	public function inser_update_general_assumptions($data,$type){
        $this->db->where('company_id',$data['company_id']);
        $result = $this->db->get('general_assumption')->row();
        if($type == 'insert' || $result == ''){
            $this->db->insert('general_assumption',$data);
        }else{
            $this->db->where('company_id',$data['company_id']);
            $this->db->update('general_assumption',$data);
        }
	}
	public function inser_update_import_duty_assumptions($data,$type){
        if($type == 'insert'){
            $this->db->insert('import_cost_assumption',$data);
        }else{
            $this->db->where('company_id',$data['company_id']);
            $this->db->update('import_cost_assumption',$data);
        }
	}
	public function inser_update_aus_payroll_assumptions($data,$type){
        if($type == 'insert'){
            $this->db->insert('australian_payroll_liabilities',$data);
        }else{
            $this->db->where('company_id',$data['company_id']);
            $this->db->update('australian_payroll_liabilities',$data);
        }
	}
	public function get_company_detail($company_id=0){
            $this->db->select('*');
            $this->db->from('company_detail');
            $this->db->where('user_id',$this->session->userdata('user')->id);
            if($company_id != 0){
                $this->db->where('id',$company_id);
            }
            $query = $this->db->get();

            //return $this->db->last_query();

            return $query->row_array();
    }
	public function get_general_assumptions($company_id){
            $this->db->select('*');
            $this->db->from('general_assumption');
            $where = array('user_id =' => $this->session->userdata('user')->id, 'company_id' => $company_id);
            $this->db->where($where);
            $query = $this->db->get();
            return $query->row_array();
	}
	public function get_import_duty_assumptions(){
            $this->db->select('*');
            $this->db->from('import_cost_assumption');
            $this->db->where('user_id',$this->session->userdata('user')->id);
            $query = $this->db->get();
            return $query->row_array();
	}
	public function get_australian_payroll(){
            $this->db->select('*');
            $this->db->from('australian_payroll_liabilities');
            $this->db->where('user_id',$this->session->userdata('user')->id);
            $query = $this->db->get();
            return $query->row_array();
	}
	public function get_directors($company_id){
            $this->db->select('id,name,image,education,experience');
            $this->db->from('directors');
            $this->db->where('company_id',$company_id);
            $query = $this->db->get();
            return $query->result_array();
	}
	public function get_directors_byid($id){
            $this->db->select('id,name,image');
            $this->db->from('directors');
            $this->db->where('id',$id);
            $query = $this->db->get();
            return $query->result_array();
	}
	public function get_company_list($id){
            $this->db->select('id,company_name');
            $this->db->from('company_detail');
            $this->db->where('user_id',$id);
            $query = $this->db->get();
            return $query->result_array();
	}
    
}
?>