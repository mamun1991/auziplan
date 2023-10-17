<?php
Class Planning_setup_model extends CI_Model
{
	public function inser_update_planning_detail($data,$id){
		$this->db->select('*');
		$this->db->from('planning_table');
		$this->db->where('user_id', $id );
		$query = $this->db->get();
		if($query->num_rows() > 0 ){
			$this->db->where('user_id',$id);
			$this->db->update('planning_table',$data);
			return  $id; 
		}else{
			$this->db->insert('planning_table',$data);
			return $this->db->insert_id();
		}
	}
	public function get_planning_detail($id)
	{
		$this->db->select('*');
		$this->db->from('planning_table');
		$this->db->where('user_id', $id );
		$query = $this->db->get();
		if ( $query->num_rows() > 0 )
		{
			return $query->row_array();
		}
	}
}
?>