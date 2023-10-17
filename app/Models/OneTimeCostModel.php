<?php

namespace App\Models;

use CodeIgniter\Model;
use Config\Database;

class OneTimeCostModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'one_time_cost';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $insertID         = 0;
    protected $returnType       = 'array';
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

    protected $columnOrder = array('firstname','lastname','gender','address','dob',null);

    protected $columnSearch = array('firstname','lastname','address');

    protected $order = array('id' => 'desc');

    /**
	 * @var Database::connect()
	 */
	protected $db;

    public function __construct()
    {
        $this->db = Database::connect();
    }

    public function getQuery() {
        $builder = $this->db->table($this->table);
        $i = 0;

        foreach ($this->columnSearch as $item) {
            if ($_GET['search']['value']) {
                if ($i === 0) {
                    $builder->groupStart();
                    $builder->like($item, $_GET['search']['value']);
                } else {
                    $builder->orLike($item, $_GET['search']['value']);
                }
                if (count($this->columnSearch) - 1 == $i)
                    $builder->groupEnd();
            }
            $i++;
        }

        if (isset($_GET['order'])) {
            $builder->orderBy($this->columnOrder[$_GET['order']['0']['column']], $_GET['order']['0']['dir']);
        } else if (isset($this->order)) {
            $order = $this->order;
            $builder->orderBy(key($order), $order[key($order)]);
        }

        return $builder;
    }

    public function getDatatables($userId) {
        $builder = $this->getQuery();
        if ($_GET['length'] != -1)
            $builder->limit($_GET['length'], $_GET['start']);
        $query = $builder->where('user_id', $userId)->get();
        return $query->getResult();
    }

    public function countOneTimeCost($userId) {
        $builder = $this->db->table($this->table);
        $builder->where('user_id', $userId);

        $builder->where('one_time_cost !=', 'Land_Buildings');  

        $builder->where('one_time_cost !=', 'Plant_Equipment');
        return $builder->countAllResults();
    }

    public function countPlanEquipment($userId) {
        $builder = $this->db->table($this->table);
        $builder->where('user_id', $userId);

        $builder->where('one_time_cost !=', 'Land_Buildings');

        $builder->where('one_time_cost !=', 'Plant_Equipment');
        return $builder->countAllResults();
    }

    public function countLandBuilding($userId) {
        $builder = $this->db->table($this->table);
        $builder->where('user_id', $userId);
        $builder->where('one_time_cost', 'Land_Buildings');
        return $builder->countAllResults();
    }

    public function countMotorVehicle($userId) {
        $builder = $this->db->table('mv_loan');
        $builder->where('user_id', $userId);
        return $builder->countAllResults();
    }
}
