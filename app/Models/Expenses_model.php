<?php
class Expenses_model extends CI_Model
{
    public $table = 'expenses';
    public $order = array('id' => 'desc');
    public $column_order = array('description','weekly_cost','monthly_cost','quarterly_cost','yearly_cost','purpose',null); //set column field database for datatable orderable
    public $column_search = array('description','weekly_cost','monthly_cost','quarterly_cost','yearly_cost','purpose'); //set column field database for datatable searchable just firstname , lastname , address are searchable


    private function _get_datatables_query()
    {
        $this->db->from($this->table);

        $i = 0;

        foreach ($this->column_search as $item) { // loop column
            if (isset($_POST['search']) && isset($_POST['search']['value'])) { // if datatable send POST for search
                if ($i===0) { // first loop
                    $this->db->group_start(); // open bracket. query Where with OR clause better with bracket. because maybe can combine with other WHERE with AND.
                    $this->db->like($item, $_POST['search']['value']);
                } else {
                    $this->db->or_like($item, $_POST['search']['value']);
                }

                if (count($this->column_search) - 1 == $i) { //last loop
                    $this->db->group_end();
                } //close bracket
            }
            $i++;
        }

        if (isset($_POST['order'])) { // here order processing
            $this->db->order_by($this->column_order[$_POST['order']['0']['column']], $_POST['order']['0']['dir']);
        } elseif (isset($this->order)) {
            $order = $this->order;
            $this->db->order_by(key($order), $order[key($order)]);
        }
    }
    public function insert_user($data)
    {
        $this->db->insert('user', $data);
        return $this->db->insert_id();
    }

    public function get_all_expenses($user_id)
    {
        $this->db->where('user_id', $user_id);
        $query = $this->db->get('expenses');

        return $query->result_array();
    }

    public function save($data)
    {
        $this->db->insert('expenses', $data);
        return $this->db->insert_id();
    }
    


    public function count_filtered($user_id)
    {
        //$this->_get_datatables_query();
        $this->db->where('user_id', $user_id);
        $query = $this->db->get('expenses');

        return $query->num_rows();
    }

    public function count_all()
    {
        $this->db->from($this->table);
        $user_id = $this->session->userdata('user')->id;
        $this->db->where('user_id', $user_id);
        return $this->db->count_all_results();
    }
    public function get_by_id($id)
    {
        $this->db->from($this->table);
        $this->db->where('id', $id);
        $query = $this->db->get();
        return $query->row();
    }
    public function update($where, $data)
    {
        $this->db->update($this->table, $data, $where);

        return $this->db->affected_rows();
    }
    public function delete_by_id($id)
    {
        $this->db->where('id', $id);
        if($this->db->delete($this->table)){
            return true;
        }else{
            return false;
        }
    }

    public function get_expense_summary($id)
    {
        $summary=$this->db->query('SELECT sum(weekly_cost) as weekly_cost , sum(quarterly_cost) as quarterly_cost , sum(monthly_cost) as monthly_cost, sum(yearly_cost) as `yearly_cost`,purpose,count(*) as total_entries FROM `expenses` WHERE 1 and user_id= '.$id.' group by purpose')->result_array();
        return $summary;
    }

    public function get_total_expense($id)
    {
        $summary=$this->db->query('SELECT sum(weekly_cost) as weekly_cost , sum(quarterly_cost) as quarterly_cost , sum(monthly_cost) as monthly_cost, sum(yearly_cost) as `yearly_cost`,count(*) as total_entries FROM `expenses` WHERE 1 and user_id= '.$id.' ')->result_array();
        return $summary;
    }

    public function get_cost_increase($id)
    {
        $summary=$this->db->query('SELECT `marketing_increase` as marketing,`public_reactions` as pr,`administration_cost` as ac,`other_increase` as other FROM `general_assumption` WHERE user_id='.$id.' limit 0,1')->result_array();
        return $summary;
    }

    public function updateExpenseIncrease($data)
    {
        $result = $this->db->query('UPDATE general_assumption set marketing_increase='.$data['marketing_increase'].', public_reactions='.$data['public_reactions'].', administration_cost='.$data['administration_cost'].',other_increase='.$data['other_increase'].' where user_id='.$data['user_id']);
        return $result;
    }


    public function savePeople($data)
    {
        if($this->db->insert('people', $data)){
            return true;
        }else{
            return false;
        }
    }

    public function updatePeople($where, $data)
    {
        if($this->db->update('people', $data, $where)){
            return true;
        }else{
            return false;
        }
    }


    public function get_all_peoples($user_id)
    {
        //$this->_get_datatables_query();
        //if($_POST['length'] != -1)
        //$this->db->limit($_POST['length'], $_POST['start']);
        $this->db->where('user_id', $user_id);
        $query = $this->db->get('people');

        return $query->result_array();
    }
 
    public function count_people()
    {
        $this->db->from('people');
        $user_id = $this->session->userdata('user')->id; 
        $this->db->where('user_id', $user_id);
        return $this->db->count_all_results();
    }

    public function get_by_id_people($id)
    {
        $this->db->from('people');
        $this->db->where('id', $id);
        $query = $this->db->get();
        return $query->row();
    } 

    public function delete_by_id_people($id)
    {
        $this->db->where('id', $id);
        if($this->db->delete('people')){
            return true;
        }else{
            return false;
        }
    }
}
