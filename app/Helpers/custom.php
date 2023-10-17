<?php

function checkDuplicate($table,$column,$value){

    $ci =& get_instance();
    $ci->load->database();
    
    $sql = "SELECT * from $table where $column = '".$value."' and isActive = 'y' ";     
    
    $query = $ci->db->query($sql);
    
    $row = $query->row();

    if($row){
        return true;
    }else{
        return false;
    }

}


function getUserCurrency(){

    $ci =& get_instance();
    $ci->load->database();

    $user_id = $ci->session->get('user')->id;

    $sql = 'select currency from company_detail where user_id="' . $user_id . '"';
    $query = $ci->db->query($sql);
    
    $currency = $query->row()->currency;
    $cur = '';

    if ($currency == "AUD" || $currency == "USD") {
        $cur = "$";
    } else if ($currency == "EUR") {
        $cur = "€";
    } else if ($currency == "UK") {
        $cur = "£";
    } else if ($currency == "INR") {
        $cur = "₹";
    }

    return $cur;
}

?>