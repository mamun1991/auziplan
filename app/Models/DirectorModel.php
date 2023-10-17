<?php

namespace App\Models;

use CodeIgniter\Model;
use Config\Database;

class DirectorModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'director';
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



    protected $db;

    public function __construct()
    {
        $this->db = Database::connect();
    }



    public function delete_by_id($id)
    {
        $builder = $this->db->table($this->table);

        $builder->where('director_id', $id);

        if($builder->delete()){
            return true;
        }else{
            return false;
        }
    }

}
