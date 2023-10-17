<?php

/**
 *  @author Nuri <nuri@squareplans.com>
 *  @description Director model
 */
class Director_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->user_id = $this->session->userdata('user')->id;
    }

    public function update_director_detail($data, $id = 0)
    {
        if ($id != 0) {
            $this->db->where('director_id', $id);
            $this->db->update('director', $data);
            return $id;
        }
    }

    private function _get_datatables_query()
    {
        $this->db->from('director');
        $i = 0;
        foreach ($this->column_search as $item) { // loop column
            if ($_POST['search']['value']) { // if datatable send POST for search
                if ($i === 0) { // first loop
                    $this->db->group_start(); // open bracket. query Where with OR clause better with bracket. because maybe can combine with other WHERE with AND.
                    $this->db->like($item, $_POST['search']['value']);
                } else {
                    $this->db->or_like($item, $_POST['search']['value']);
                }
                if (count($this->column_search) - 1 == $i) //last loop
                    $this->db->group_end(); //close bracket
            }
            $i++;
        }
        if (isset($_POST['order'])) { // here order processing
            $this->db->order_by($this->column_order[$_POST['order']['0']['column']], $_POST['order']['0']['dir']);
        } else if (isset($this->order)) {
            $order = $this->order;
            $this->db->order_by(key($order), $order[key($order)]);
        }
    }

    public function get_director_detail($id)
    {
        $this->db->select('*');
        $this->db->from('director');
        $this->db->where('director_id', $id);
        $query = $this->db->get();
        return $query->row_array();
    }

    function get_datatables()
    {
        $user_id = $this->session->userdata('user')->id;
        $this->db->where('user_id', $user_id);
        $query = $this->db->get('director');
        return $query->result();
    }

    function count_filtered()
    {
        $this->_get_datatables_query();
        $query = $this->db->get();
        return $query->num_rows();
    }

    public function count_all()
    {
        $this->db->from('director');
        $user_id = $this->session->userdata('user')->id;
        $this->db->where('user_id', $user_id);
        return $this->db->count_all_results();
    }

    public function get_by_id($id)
    {
        $this->db->from('director');
        $this->db->where('director_id', $id);
        $query = $this->db->get();
        return $query->row();
    }

    public function get_directors_capital_investment()
    {
        $this->db->from('director');
        $user_id = $this->session->userdata('user')->id;
        $this->db->where('user_id', $user_id);
        $query = $this->db->get();
        $dir = $query->result();
        $dir_total = 0;
        foreach ($dir as $d) {
            $dir_total = $dir_total + $d->amount;
        }
        return $dir_total;
    }

    public function save($data)
    {
        $this->db->insert("director", $data);
        //small hack: use pk as director id
        $id = $this->db->insert_id();
        $data['director_id'] = $id;
        //this->db->update_string($this->table, $data);
        return $id;
    }

    public function update($where, $data)
    {
        $this->db->update('director', $data, $where);
        return $this->db->affected_rows();
    }

    public function delete_by_id($id)
    {
        $this->db->where('director_id', $id);
        
        if($this->db->delete('director')){
            return true;
        }else{
            return false;
        }

        //echo $this->db->last_query();
    }

    public function getAllID($user)
    {
        $this->db->select('director_id,name');
        $this->db->from('director');
        $this->db->where('user_id', $user);
        $query = $this->db->get();
        return $query->result();
    }
}
