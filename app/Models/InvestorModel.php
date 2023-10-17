<?php

namespace App\Models;

use CodeIgniter\Model;
use Config\Database;

class InvestorModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'investor';
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

    private function getDatatablesQuery()
    {
        $builder = $this->db->table($this->table);
        $i = 0;
        foreach ($this->columnSearch as $item)
        {
            if ($_POST['search']['value'])
            {
                if ($i === 0)
                {
                    $builder->groupStart();
                    $builder->like($item, $_POST['search']['value']);
                } else {
                    $builder->orLike($item, $_POST['search']['value']);
                }
                if (count($this->column_search) - 1 == $i)
                    $builder->groupEnd();
            }
            $i++;
        }
        if (isset($_POST['order']))
        {
            $builder->orderBy($this->columnOrder[$_POST['order']['0']['column']], $_POST['order']['0']['dir']);
        } else if (isset($this->order)) {
            $order = $this->order;
            $builder->orderBy(key($order), $order[key($order)]);
        }

        return $builder;
    }

    public function getDatatables() {
        $builder = $this->getDatatablesQuery();
        if ($_POST['length'] != -1)
            $builder->limit($_POST['length'], $_POST['start']);
        
        $userId = $this->session->get('user')->id;
        return $builder->where('user_id', $userId)->findAll();
    }


    public function delete_by_id($id)
    {
        $builder = $this->db->table($this->table);

        $builder->where('id', $id);

        if($builder->delete()){
            return true;
        }else{
            return false;
        }
    }


}
