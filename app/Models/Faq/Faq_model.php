<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Faq_model extends CI_Model {

    private $table = 'user';

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

    public function edit_profile($data, $id) {

        $this->db->set($data);

        $this->db->where(array('id' => $id));

        $this->db->update($this->table);
    }

    public function get_directors($id) {

        $this->db->select('d1.*,d2.user_id, d2.amount,d2.id as amtid');
        $this->db->from('directors as d1');
        $this->db->join('director as d2', 'd2.director_id = d1.id', 'left');

        $this->db->where('d1.company_id', $id);
        $this->db->order_by('d1.id', ASC);
        $result = $this->db->get()->result_array();
        return $result;
    }

}

?>