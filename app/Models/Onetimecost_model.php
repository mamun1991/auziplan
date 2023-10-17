<?php

defined('BASEPATH') or exit('No direct script access allowed');



class Onetimecost_model extends CI_Model
{



    var $table = 'one_time_cost';

    //var $column_order = array('firstname','lastname','gender','address','dob',null); //set column field database for datatable orderable

    //var $column_search = array('firstname','lastname','address'); //set column field database for datatable searchable just firstname , lastname , address are searchable

    var $order = array('id' => 'desc'); // default order



    public function __construct()

    {

        parent::__construct();

        $this->load->database();
    }



    private function _get_datatables_query()

    {



        $this->db->from($this->table);



        $i = 0;



        foreach ($this->column_search as $item) // loop column

        {

            if ($_POST['search']['value']) // if datatable send POST for search

            {



                if ($i === 0) // first loop

                {

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



        if (isset($_POST['order'])) // here order processing

        {

            $this->db->order_by($this->column_order[$_POST['order']['0']['column']], $_POST['order']['0']['dir']);
        } else if (isset($this->order)) {

            $order = $this->order;

            $this->db->order_by(key($order), $order[key($order)]);
        }
    }



    function get_datatables()

    {

        $this->_get_datatables_query();

        if ($_POST['length'] != -1)

            $this->db->limit($_POST['length'], $_POST['start']);

        $user_id = $this->session->userdata('user')->id;

        $this->db->where('user_id', $user_id);

        $query = $this->db->get();

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

        $this->db->from($this->table);

        $user_id = $this->session->userdata('user')->id;

        $this->db->where('user_id', $user_id);

        return $this->db->count_all_results();
    }


    public function count_plan_equipment()

    {

        $this->db->from($this->table);

        $user_id = $this->session->userdata('user')->id;

        $this->db->where('user_id', $user_id);

        $this->db->where('one_time_cost', 'Plant_Equipment');

        return $this->db->count_all_results();
    }


    public function count_land_building()

    {

        $this->db->from($this->table);

        $user_id = $this->session->userdata('user')->id;

        $this->db->where('user_id', $user_id);

        $this->db->where('one_time_cost', 'Land_Buildings');

        return $this->db->count_all_results();
    }


    public function count_one_time_cost()

    {

        $this->db->from($this->table);

        $user_id = $this->session->userdata('user')->id;

        $this->db->where('user_id', $user_id);

        $this->db->where('one_time_cost !=', 'Land_Buildings');

        $this->db->where('one_time_cost !=', 'Plant_Equipment');

        return $this->db->count_all_results();
    }


    public function get_by_id($id)

    {

        $this->db->from($this->table);

        $this->db->where('id', $id);

        $query = $this->db->get();



        return $query->row();
    }



    public function save($data)

    {

        $this->db->insert($this->table, $data);

        return $this->db->insert_id();
    }



    public function update($where, $data)

    {

        $this->db->update($this->table, $data, $where);

        return $this->db->affected_rows();
    }



    public function delete_by_id($id)

    {

        $this->db->where('id', $id);

        $this->db->delete($this->table);
    }


    public function get_onetimecost_total()
    {
        $user_id = $this->session->userdata('user')->id;
        $query = $this->db
            ->query(
                'SELECT *
                FROM `one_time_cost`
                WHERE `user_id` = "' . $user_id . '"
                    AND `one_time_cost`
                    IN ("Interlectual_Property","Security_Deposit", "One_Time_Costs" )
                GROUP BY 1'
            );
        $onetimecost = $query->result();
        $ip_total = 0;
        $sd_total = 0;
        $otc_total = 0;
        foreach ($onetimecost as $onc) {
            if ($onc->one_time_cost == "Interlectual_Property") {
                $ip_total = $ip_total + $onc->amount_paid;
            } elseif ($onc->one_time_cost == "Security_Deposit") {
                $sd_total = $sd_total + $onc->amount_paid;
            } elseif ($onc->one_time_cost == "One_Time_Costs") {
                $otc_total = $otc_total + $onc->amount_paid;
            } else {
                $ip_total = 0;
                $sd_total = 0;
                $otc_total = 0;
            }
        }
        $total = $ip_total + $sd_total + $otc_total;
        $result = [$ip_total, $sd_total, $otc_total, $total];
        return $result;
    }

    public function get_plant_total()
    {
        $this->db->from('one_time_cost');
        $user_id = $this->session->userdata('user')->id;
        $this->db->where('user_id', $user_id);
        $this->db->where('one_time_cost', 'Plant_Equipment');
        $query = $this->db->get();
        $plant = $query->result();

        $plant_total = 0;
        foreach ($plant as $p) {
            $plant_total = $plant_total + $p->total_cost;
        }
        return $plant_total;
    }


    public function get_land_total()
    {
        $this->db->from('one_time_cost');
        $user_id = $this->session->userdata('user')->id;
        $this->db->where('user_id', $user_id);
        $this->db->where('one_time_cost', 'Land_Buildings');
        $query = $this->db->get();
        $land = $query->result();

        $land_total = 0;
        foreach ($land as $l) {
            $land_total = $land_total + $l->amount_paid;
        }
        return $land_total;
    }

    /**
     * Return one time cost assumptions
     *
     * @return object
     */
    public function get_one_time_cost_assumptions()
    {
        $query = $this->db
            ->query(
                'SELECT `one_time_cost`, sum(`total_cost`) as `total`
                FROM `one_time_cost`
                WHERE `user_id` = "' . $this->user_id . '"
                    AND `one_time_cost`
                    IN ("Land_Buildings", "Plant_Equipment",
                        "Security_Deposit", "ONE_TIME_COSTS" )
                GROUP BY 1'
            );

        $asumptions = $query->result();
        $one_time_cost_total = 0;
        foreach ($asumptions as $row) {
            $one_time_cost_total = $one_time_cost_total + $row->total;
        }

        $asumptions['one_time_cost_total'] = $one_time_cost_total;
        return $asumptions;
    }


    public function get_motor_vehicle($user_id)
    {
        $this->db->where('user_id', $user_id);
        $query = $this->db->get('mv_loan');

        //echo $this->db->last_query();

        return $query->result();
    }


    public function count_motor_vehicle()

    {

        $this->db->from('mv_loan');

        $user_id = $this->session->userdata('user')->id;

        $this->db->where('user_id', $user_id);

        return $this->db->count_all_results();
    }
}
