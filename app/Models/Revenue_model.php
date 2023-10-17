<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Revenue_model extends CI_Model {

    private $table = 'localproduct';

    public function __construct() {
        parent::__construct();
        $this->load->database();
    }

    public function get_list($user_id)
    {
        $this->db->where('user_id', $user_id);
        $query = $this->db->get($this->table);

        //echo $this->db->last_query();

        return $query->result();
    }

    public function get_detail_by_id($id) {

        $this->db->from($this->table);

        $this->db->where(array('id' => $id));

        $query = $this->db->get();

        return $query->row();
    }


    public function update($where, $data)
    {
        $this->db->update($this->table, $data, $where);
        return $this->db->affected_rows();
    }

    public function update_product_revenue($where, $data)
    {
        if($this->db->update($this->table, $data, $where)){
            return true;
        }else{
            return false;
        }
    }


    public function delete_by_id($id)
    {
        $this->db->where('id', $id);
        
        if($this->db->delete($this->table)){
            return true;
        }else{
            return false;
        }

        //echo $this->db->last_query();
    }


    public function delete_product_revenue($id)
    {
        $this->db->where('id', $id);
        
        if($this->db->delete($this->table)){
            return true;
        }else{
            return false;
        }

        //echo $this->db->last_query();
    }


    public function count_product_revenue()

    {

        $this->db->from($this->table);

        $user_id = $this->session->userdata('user')->id;

        $this->db->where('user_id', $user_id);

        return $this->db->count_all_results();
    }

    public function get_hourly_rate_list($user_id)
    {
        $this->db->where('user_id', $user_id);
        $query = $this->db->get("hourly_rate_income");

        //echo $this->db->last_query();

        return $query->result();
    }

    public function count_hourly_rate_list()

    {

        $this->db->from("hourly_rate_income");

        $user_id = $this->session->userdata('user')->id;

        $this->db->where('user_id', $user_id);

        return $this->db->count_all_results();
    }



}

?>