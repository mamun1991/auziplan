<?php

namespace App\Models;

use CodeIgniter\Model;

class LocalProductModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'localproduct';
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

    public function countAll($userId) {
        $builder = $this->db->table($this->table);
        $builder->where('user_id', $userId);
        return $builder->countAllResults();
    }


    public function get_all_expenses($user_id)
    {
        $builder = $this->db->table('expenses');
        $builder->where('user_id', $user_id);
        $query = $builder->get();
        return $query->getResultArray();
    }

    
    public function get_all_peoples($user_id)
    {
        $builder = $this->db->table('people');
        $builder->where('user_id', $user_id);
        $query = $builder->get();
        return $query->getResultArray();
    }

    public function get_list($user_id)
    {
        $builder = $this->db->table($this->table);
        $builder->where('user_id', $user_id);
        $query = $builder->get();
        return $query->getResult();
    }

}
