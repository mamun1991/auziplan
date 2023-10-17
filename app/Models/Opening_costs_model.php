<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Opening_costs_model extends CI_Model {

    private $table = 'one_time_cost';

    public function __construct() {
        parent::__construct();
        $this->load->database();
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

    public function update_motor($where, $data)
    {
        if($this->db->update('mv_loan', $data, $where)){
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


    public function delete_motor($id)
    {
        $this->db->where('id', $id);
        
        if($this->db->delete('mv_loan')){
            return true;
        }else{
            return false;
        }

        //echo $this->db->last_query();
    }



}

?>