<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');



require_once dirname(__FILE__) . '/SVGGraph/SVGGraph.php';



class Graphics extends SVGGraph{

	

	function __construct($w = 100, $h=100, $settings = NULL){



        parent::__construct();



    }

}