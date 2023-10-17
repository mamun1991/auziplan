<?php if (! defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once dirname(__FILE__) . '/tcpdf/tcpdf.php';

class PdfwithProfitLoss extends TCPDF
{
    public function __construct()
    {
        parent::__construct();
        $this->CI =& get_instance();
        $this->CI->load->model('profile_model');

        $var = $this->CI->session->userdata;
        $user_id = $var['user']->id;
        $query = $this->CI->db->query('select *from company_detail where user_id="' . $user_id . '"');
        $this->company_detail = $query->row();
    }

    public function Header()
    {

        // Logo
        if ($this->company_detail->company_logo == "") {
            $image_file = asset_path().'img/favicons/apple-icon-152x152.png'; // *** Very IMP: make sure this image is available on given path on your server
        } else {
            $image_file = asset_path().'uploads/company_logo/'.$this->company_detail->company_logo;
        }
        $this->Image($image_file, 10, 13, 13);
        $this->Ln();
        $this->SetFont('times', 'B', 6);
        $this->setXY(195, 13);
        $this->Cell(0, 0, $this->company_detail->company_name, 0, 0, 'R');
        $this->setXY(195, 16);
        $this->Cell(0, 0, $this->company_detail->street_no .' '.$this->company_detail->street_name .' - '. $this->company_detail->suburb, 0, 0, 'R');
        $this->setXY(195, 19);
        $this->Cell(0, 0, $this->company_detail->state .' - '. $this->company_detail->zipcode, 0, 0, 'R');
        $this->setXY(195, 21);
        $this->Cell(0, 0, $this->company_detail->country, 0, 0, 'R');
    }

    public function Footer()
    {

        // Position at 25 mm from bottom
        $this->SetY(-20);
        // Set font
        $this->SetFont('helvetica', 'I', 8);

        //Page date
        $this->Cell(20, 10, date('d.m.Y'), 0, false, 'L', 0, '', 0, false, 'T', 'M');

        $this->Cell(0, 0, 'Profit / Loss Report - '.$this->company_detail->company_name.', P : '.$this->company_detail->telephone, 0, 0, 'C');
        $this->Ln();
        $this->Cell(0, 0, $this->company_detail->website.' - E : '.$this->company_detail->company_email, 0, false, 'C', 0, '', 0, false, 'T', 'M');
        $this->SetY(-20);
        // Page number

        $this->Cell(0, 10, $this->getAliasRightShift().$this->getAliasNumPage().'/'.$this->getAliasNbPages(), 0, 0, 'R');
        //$this->Cell(, 10, 'Page '.$this->getAliasNumPage().'/'.$this->getAliasNbPages(), 0, false, 'R', 0, '', 0, false, 'T', 'M');
    }
}
/*Author:Tutsway.com */
/* End of file Pdf.php */
/* Location: ./application/libraries/Pdf.php */
