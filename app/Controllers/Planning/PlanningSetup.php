<?php

namespace App\Controllers\Planning;

use App\Controllers\BaseController;
use PdfMyPlan;

class PlanningSetup extends BaseController
{
	public function __construct()
	{
		// $this->load->model('Planning/Planning_setup_model');
		$session = \Config\Services::session();

		if (!$session->has('user')) {
			return redirect()->to(site_url() . 'login');
		}

		// $this->load->model('profile_model');	
	}

	public function index()
	{
		if (!$this->session->has('user')) {
			return redirect()->to(site_url() . 'login');
		}
		$t_mission = "";

		$builder = $this->db->table("planning_table");

		$builder->where(array('user_id' => $this->session->get('user')->id));

		$query = $builder->get();

		$row = $query->getRow();

		if ($row) {
			$t_mission = $row->t_mission;
		}

		$this->data['controller'] = 'planning';
		$this->data['t_mission'] = $t_mission;
		$this->data['user'] = $this->session->get('user');

		return view('other-layouts/head', $this->data)
			. view('other-layouts/leftbar')
			. view('other-layouts/header')
			. view('planning/planning_setup', $this->data)
			. view('other-layouts/footer');
	}

	public function ajaxSavePlanning()
	{
		$builder = $this->db->table('planning_table');
		$user_id = $this->session->get('user')->id;
		//search for user_id on tble cash_flow
		$query2 = $this->db->query('select * from planning_table where user_id="' . $user_id . '"');

		if ($query2->getNumRows() >= 1) {
			$data = ['t_mission' => $this->request->getVar('t_mission')];
			$builder->where('user_id', $user_id);
			$builder->update($data);
		} else {
			$data = [
				'user_id' => $user_id,
				't_mission' => $this->request->getVar('mission')
			];

			$builder->insert($data);
		}

		echo "success";
	}

	public function ajaxClearPlanning()
	{
		$user_id = $this->session->get('user')->id;
		//search for user_id on tble cash_flow
		$query2 = $this->db->query('select * from planning_table where user_id="' . $user_id . '"');
		if ($query2->getNumRows() >= 1) {
			$data = array(
				't_mission' => ""
			);
			$builder = $this->db->table('planning_table');
			$builder->where('user_id', $user_id);
		}
		echo json_encode(array("status" => TRUE));
	}

	public function setupCompany($data, $id)
	{
		$status = $this->Planning_setup_model->inser_update_planning_detail($data, $id);
		if ($status) {
			$message = $this->session->set_flashdata('success', 'Your narrative has been saved Successfully');
			//$this->load->view('Dashboard',$message);
			//$this->get_data($status);
			//redirect('Dashboard');
		} else {

			$message = $this->session->set_flashdata('error', 'Your narrative has not been saved !');
			//$this->load->view('Dashboard',$message);
			redirect('Dashboard');
		}
	}

	public function get_data($status)
	{
		$data['fxetch'] = $this->Planning_setup_model->get_planning_detail($status);
		$this->load->template_left_nav('planning_setup', $data);
	}

	function printMission()
	{
		$this->load->library('PdfMyPlan');
		$data[] = $this->db->get_where('planning_table', array('user_id' => $this->session->get('user')->id))->result();

		//$mission = ($data[0][0]->mission_heading) ? "<h3>".$data[0][0]->mission_heading .": </h3>" : "<h3>Mission Statement: </h3>";
		$mission = $data[0][0]->t_mission . "<br/><br/>";
		$pdf = new PdfMyPlan(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

		// set document information
		$pdf->SetCreator(PDF_CREATOR);
		$pdf->SetAuthor(PDF_CREATOR);
		$pdf->SetTitle('Mission');
		$pdf->SetSubject('Mission');

		$pdf->setFooterFont(array(PDF_FONT_NAME_DATA, 'italic', PDF_FONT_SIZE_DATA));
		$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);
		$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
		$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
		$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);
		$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);
		//$pdf->SetAutoPageBreak(TRUE, 0);
		$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
		//$pdf->setCellPaddings(0,0,0,0);
		//$pdf->SetMargins(10, 10, 10, true);

		if (@file_exists(dirname(__FILE__) . '/lang/eng.php')) {
			require_once(dirname(__FILE__) . '/lang/eng.php');
			$pdf->setLanguageArray($l);
		}
		$pdf->SetFont('helvetica', '', 10);
		$pdf->AddPage();

		$pdf->writeHTML($mission, true, 0, true, 0);

		ob_clean();
		//Close and output PDF document
		$pdf->Output('mission.pdf', 'I');
	}
}
