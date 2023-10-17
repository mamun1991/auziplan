// var base_url = get_base_url();
var base_url = window.baseURL;
var controller = get_controller();


check_login();

remove_validate();


var globalcurr;

var globalcururl = base_url + "user/currency";

$.ajax({
    url: globalcururl,
    type: 'post',
    dataType: 'html',
    async: false,
    success: function(data) {
        globalcurr = data;
    }
})


function calculate_inetrest(amount,annualIntest){

    return amount * annualIntest / 100;
    
}

$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}

function values_on_slider_change(){


    var principalAmount = parseInt($("#loanAmount").val());
    $("#principalAmount").text(principalAmount.toLocaleString());
    var calculate_intrest = calculate_inetrest(principalAmount,parseInt($("#loanIntrest").val()));
    $("#interestAmount").text(calculate_intrest.toLocaleString());
    $('#totalPayable').html((principalAmount + calculate_intrest).toLocaleString());
    $('#monthlyLoanPayment').html((Math.round(parseInt(principalAmount) + parseInt(calculate_intrest) / $("#loanYear").val())).toLocaleString());

    $('#loanamount_acc2').html(principalAmount.toLocaleString());
    $('#Interest_acc2').html(calculate_intrest.toLocaleString());
    $('#loanterm_acc2').html($("#loanYear").val());
    $('#interestrate_acc2').html($("#loanIntrest").val());
    
    $('#loan_amount_acc3').html(principalAmount.toLocaleString());
    $('#loan_length_acc3').html($("#loanYear").val());
    $('#annual_interest_acc3').html($("#loanIntrest").val());
}

$(".savecompanyprofile").click(function () {

    check_login();
    
    

    if (validate('frm'+controller)) {
        var url = baseURL + controller+ "/do-companysetup";
        var param = {

            companylogo : $('#companylogo_val').val(),

            //Company Profile Details
            user_id : $('#companyuser').val(),
            company_name : $('#company_name').val(),
            start_date : $('#start_date').val(),
            abn_no : $('#abn_no').val(),
            register_no : $('#register_no').val(),
            


            // Company Location Details
            street_no : $('#street_no').val(),
            street_name : $('#street_name').val(),
            suburb : $('#suburb').val(),
            state : $('#state').val(),
            zipcode : $('#zipcode').val(),
            country : $('#country').val(),
            email : $('#email').val(),
            website : $('#website').val(),
            

            // Company Structure
            cmpy_structure : $('#cmpy_structure').val(),
            industry : $('#industry').val(),
            currency : $('#currency').val(),
            financial_year : $('#financial_year').val(),

            
            // Company Opening Balances
            opening_credit_balance : $('#opening_credit_balance').val(),
            opening_debit_balance : $('#opening_debit_balance').val(),
            opening_bank_balance : $('#opening_bank_balance').val(),


            // Company Trading Terms
            rsvbl_in_days : $('#rsvbl_in_days').val(),
            pybl_in_days : $('#pybl_in_days').val(),
            vat_paid_in_days : $('#vat_paid_in_days').val(),
            cmpnytx_paid_in_days : $('#cmpnytx_paid_in_days').val(),


            // Company Business Assumptions
            company_tax : $('#company_tax').val(),
            company_vat_collected : $('#company_vat_collected').val(),
            servicecost_service : $('#servicecost_service').val(),
            porivision_baddebt : $('#porivision_baddebt').val(),
            depreciation_on_equipment : $('#depreciation_on_equipment').val(),
            franchise_royalty : $('#franchise_royalty').val(),

            // Operating Expense Assumptions
            administration_increase : $('#administration_increase').val(),
            marketing_increase : $('#marketing_increase').val(),
            public_relations_increase : $('#public_relations_increase').val(),
            other_increase : $('#other_increase').val(),            


            // Payroll Assumptions
            superannuation : $('#superannuation').val(),
            work_cover : $('#work_cover').val(),
            commission : $('#commission').val(),
            other : $('#other').val(),            
            pay_increase : $('#pay_increase').val(),         
        

       }



       $.post(url, param,function(result) {

            console.log(result);

            if(result === 'success'){

                //success_message("Record Saved Successfully");
                Swal.fire({
                    icon: 'Success',
                    title: 'Success',
                    text: 'Record saved successfully!',
                  })
                  
                  load_company_owners_dt(base_url);
                  load_company_investors_dt(base_url);

                  $('#company_details-form-toogle').toggle();
            }
            


       },'html');



    }else{

        error_message("Please fill all required fields");

    }

});


$(document).on('click', '#company_details-form-collapse', function(e) {

    $('#company_details-form-toogle').toggle();

});   


$(document).on('click', '#new_owner_collapse', function(e) {

    $('#experience-form1').toggle();

});   

// START OWNERS

//load_company_owners();

function load_company_owners(){
    var reload_table = $('#reload_table').val();

    var ownerList;

    //alert("reload_table"+reload_table);

    var options = {
        valueNames: [ 'image', 'name', 'amount', 'share_qty', 'price_per_share', 'share_class_sc', 'netProfit', 'payment_frequency', 'directerRole', 'action'],
    };

    $.ajax({
        url: base_url + "director/ajax-list-js",
        dataType: "json",
        success: function(result) {
            var values = [
                result
            ];            
            
            var ownerList = new List('tableExample2', options);

            if(reload_table > 0){
                //alert("here");
                ownerList.remove();
            }else{
                //alert('skipted');
;            }
            ownerList.add( result );

            $('#reload_table').val(Object.keys(result).length);
        }
    });
}

function load_company_owners_edit(){

    var options = {
        valueNames: [ 'image', 'name', 'amount', 'share_qty', 'price_per_share', 'share_class_sc', 'netProfit', 'payment_frequency', 'directerRole', 'action'],
    };

    $.ajax({
        url: base_url+"director/ajax-list-js",
        dataType: "json",
        success: function(result){

            console.log(result);

            var values = [
                result
            ];
            
            var ownerList = new List('tableExample2', options);

            ownerList.remove();

            ownerList.add( result );
        }
    });

}



$("#savecompanyowner").click(function () {

    if (validate('frmcompanyowner')) {

        console.log($('#uploadownerpic_val').val());
        
        // var directerRole = $('#directorRole').val();

        // alert(directerRole);

        var url = base_url+" director/ajax-add";

        var param = {

            director_name : $('#director_name').val(),
            directerRole : $('#directerRole').val(),
            share_qty : $('#share_qty').val(),
            share_class_sc : $('#share_class_sc').val(),
            price_per_share : $('#price_per_share').val(),
            amount : $('#amount').val(),
            payment_frequency : $('#directorPaymentFrequency').val(),
            director_id : $('#director_id').val(),
            netProfit : $('#netProfit').val(),
            uploadownerpic_val : $('#uploadownerpic_val').val()

        }

        var d_id = $('#director_id').val();

        $.post(url, param,function(result) {

            if(result === 'success'){
                if(d_id > 0) {
                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record updated successfully',
                      })

                    reset_form('frmcompanyowner');
                    $('#experience-form1').toggle();
                    $('#director_id').val('0');

                }else{


                    Swal.fire({
                        title: 'Member Added Successfully.',
                        text: "Do you want to add another",
                        icon: 'success',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                      }).then((result) => {
    
                        if (result.isConfirmed) {
    
                            reset_form('frmcompanyowner');
                          
                        }else{
    
                            reset_form('frmcompanyowner');
                            $('#experience-form1').toggle();
    
                        }
                
                      })
                    
                }

                
                load_company_owners_dt(base_url);

                var img_src = base_url+ "template-assets/img/team/avatar.png";
                $('#uploadownerpic_pre').attr('src',img_src);
                

                //success_message("Record Saved Successfully");
            }else{

                if(d_id > 0){
                    
                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record saved with no changes',
                      })
                      
                      reset_form('frmcompanyowner');
                      $('#experience-form1').toggle();
                      $('#director_id').val('0');
                    
                }

            }

        },'html');

    }else{
        error_message("Please fill required fields");
    }

});



$(document).on('click', '.editcompanyowner', function(e) {

    $('#experience-form1').show();

    var edit_id = $(this).attr('id');

    $('#director_id').val(edit_id);

    //alert(edit_id);

    $.ajax({
        url: base_url+"director/ajax-edit/" + edit_id,
        type: "GET",
        dataType: "JSON",
        success: function(data) {
            $('#director_name').val(data.name);
            $('#eduAndExp').val(data.eduAndExp);
            $('#directerRole').val(data.directerRole).trigger('change');
            $('#share_qty').val(data.share_qty);
            $('#price_per_share').val(data.price_per_share);
            $("#share_class_sc").val(data.share_class_sc).trigger('change');
            $('#amount').val(data.amount );
            $('#netProfit').val(data.netProfit+'%');
            $("#directorPaymentFrequency").val(data.payment_frequency).trigger('change');
            $('#director_id').val(data.director_id);
            $('#cu-d').html(data.currency);
            

            if (data.image != '') {

                var img_src = base_url + "uploads/"+data.image;
                $('#uploadownerpic_pre').attr('src',img_src);
                $('#uploadownerpic_val').val(data.image);

            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error get data from ajax');
        }
    });

});


$(document).on('click', '.removecompanyowner', function(e) {

    //alert('delete clicked');

    var edit_id = $(this).attr('id');

    //alert(edit_id);

    //$('#director_id').val(edit_id);

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            // start ajax delete

            $.ajax({
                url: base_url+"director/ajax-delete/" + edit_id,
                type: "GET",
                dataType: "html",
                success: function(data) {

                    console.log(data);

                    if(data === 'success'){

                        //load_company_owners();
                        load_company_owners_dt(base_url);

                        Swal.fire(
                            'Deleted!',
                            'Record has been deleted.',
                            'success'
                          )

                    }else{

                        alert('Delete Failed');
                    }
        
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert('Ajax Error');
                }
            });

            // end ajax delete


          
        }
      })

});


$(document).on('click', '#new_investor_collapse', function(e) {

    $('#investor-form').toggle();

});   


// START INVESTORS

load_company_investors();

function load_company_investors(){

    var reload_table = $('#reload_table_invest').val();

    var options = {
        valueNames: [ 'image', 'investor', 'investor_type', 'amount', 'netProfit', 'payment_frequency', 'action'],
    };

    $.ajax({
        url: base_url+"investor/ajax-list-js",
        dataType: "json",
        success: function(result){

            console.log(result);

            var values = [
                result
            ];
            
            var investorList = new List('div_invstor_table', options);

            if(reload_table > 0){
                //alert("here");
                investorList.remove();
            }else{
                //alert('skipted');
;            }

            investorList.add( result );

            $('#reload_table_invest').val(Object.keys(result).length);
        }
    });

}



function load_company_investors_edit(){

    var options = {
        valueNames: [ 'image', 'investor', 'investor_type', 'amount', 'netProfit', 'payment_frequency', 'action'],
    };

    $.ajax({
        url: base_url + "investor/ajax-list-js",
        type: 'get',
        dataType: "json",
        success: function(result){
            var values = [
                result
            ];
            
            var investorList = new List('div_invstor_table', options);

            investorList.remove();

            investorList.add( result );
        }
    });

}

$("#savecompanyinvestor").click(function () {

    //alert($('#investor_name').val());

    if (validate('frmcompanyinvestor')) {

        var url = base_url+"investor/ajax-add";

        var param = {

            investor_id : $('#investor_id').val(),
            investor_name : $('#investor_name').val(),
            investor_type : $('#investor_type').val(),
            investor_amount : $('#investor_amount').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''),
            investor_netProfit : $('#investor_netProfit').val(),
            investor_payment_frequency : $('#investor_payment_frequency').val(),
            uploadinvestorpic_val : $('#uploadinvestorpic_val').val()
        }

        var inves_id = $('#investor_id').val();

        $.post(url, param,function(result) {

            //console.log("hi"+result);

            if(result === 'success'){


                if(inves_id > 0){

                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record updated successfully',
                      })

                    reset_form('frmcompanyinvestor');
                    $('#investor-form').toggle();
                    $('#investor_id').val('0');

                }else{


                    Swal.fire({
                        title: 'Investor Added Successfully.',
                        text: "Do you want to add another",
                        icon: 'success',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                      }).then((result) => {
    
                        if (result.isConfirmed) {
    
                            reset_form('frmcompanyinvestor');
                            
                        }else{
    
                            reset_form('frmcompanyinvestor');
                            $('#investor-form').toggle();
    
                        }
                
                      })


                }

                

                //load_company_investors();
                load_company_investors_dt(base_url);

                var img_src = base_url + "template-assets/img/team/avatar.png";
                $('#uploadinvestorpic_pre').attr('src',img_src);
            }else{

                if(inves_id > 0){
                    
                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record saved with no changes',
                      })
                      
                      reset_form('frmcompanyinvestor');
                      $('#investor-form').toggle();
                      $('#investor_id').val('0');
                    
                }

            }

        },'html');

    }else{
        error_message("Please fill required fields");
    }

});


$(document).on('click', '.editcompanyinvestor', function(e) {

    $('#investor-form').show();

    var edit_id = $(this).attr('id');

    $('#investor_id').val(edit_id);

    //alert(edit_id);

    $.ajax({
        url: base_url+"investor/ajax-edit/" + edit_id,
        type: "GET",
        dataType: "JSON",
        success: function(data) {

            console.log(data);
           
            $('#investor_id').val(data.id);
            $('#investor_name').val(data.investor);
            $('#investor_type').val(data.investor_type);
            $('#investor_amount').val(data.amount );
            $('#investor_netProfit').val(data.netProfit+'%');
            $('#investor_payment_frequency').val(data.payment_frequency).trigger('change');
            
            if (data.image != '') {

                var img_src = base_url+"uploads/"+data.image;
                $('#uploadinvestorpic_pre').attr('src',img_src);

            }

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error get data from ajax');
        }
    });

});


$(document).on('click', '.removecompanyinvestor', function(e) {

    //alert('delete clicked');

    var edit_id = $(this).attr('id');

    //alert(edit_id);

    //$('#director_id').val(edit_id);

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            // start ajax delete

            $.ajax({
                url: base_url+"investor/ajax-delete/" + edit_id,
                type: "GET",
                dataType: "html",
                success: function(data) {

                    console.log(data);

                    if(data === 'success'){

                        //load_company_investors_edit();
                        load_company_investors_dt(base_url);

                        Swal.fire(
                            'Deleted!',
                            'Record has been deleted.',
                            'success'
                          )

                    }else{

                        alert('Delete Failed');
                    }
        
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert('Ajax Error');
                }
            });

            // end ajax delete


          
        }

      })

});

// END INVESTORS

$('#IssuedShared').on("input change", function () {
    var is = parseInt($("#IssuedShared").val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    var pps = parseInt($("#PricePerShare").val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    var totalCapitalization = is * pps;
    $("#TotalCapitalization").val(cur + ' ' + number_format(totalCapitalization, 0, '.', ','));
});

// Price Per Share Range Selector
$('#PricePerShare').on("input change", function () {
    var is = parseInt($("#IssuedShared").val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    var pps = parseInt($("#PricePerShare").val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    var totalCapitalization = is * pps;
    $("#TotalCapitalization").val(cur + ' ' + number_format(totalCapitalization, 0, '.', ','));

});
//  Business Assumptions Range Slider Start


// Provision Company Tax Range Selector
$('#company_tax').on("input change", function () {
    var pct = parseInt($("#company_tax").val());
    $("#pct_percent").text(pct);
    $("#company_tax").val(pct);

});
// Franchise Royalty Fee Share Range Selector
$('#franchise_royalty').on("input change", function () {
    var frf = parseInt($("#franchise_royalty").val());
    $("#frf_percent").text(frf);
    $("#franchise_royalty").val(frf);

});

// Company Vat Range Selector
$('#company_vat_collected').on("input change", function () {
    var cvc = parseInt($("#company_vat_collected").val());
    $("#cvc_percent").text(cvc);
    $("#company_vat_collected").val(cvc);

});
// Price Per Share Range Selector
$('#porivision_baddebt').on("input change", function () {
    var pbd = parseInt($("#porivision_baddebt").val());
    $("#pbd_percent").text(pbd);
    $("#porivision_baddebt").val(pbd);

});
// Price Per Share Range Selector
$('#depreciation_on_equipment').on("input change", function () {
    var doe = parseInt($("#depreciation_on_equipment").val());
    $("#doe_percent").text(doe);
    $("#depreciation_on_equipment").val(doe);

});
// Price Per Share Range Selector
$('#servicecost_service').on("input change", function () {
    var scs = parseInt($("#servicecost_service").val());
    $("#scs_percent").text(scs);
    $("#servicecost_service").val(scs);

});




// Nuri Added 

// Administration Range Selector
$('#administration_increase').on("input change", function () {
    var adm = parseInt($("#administration_increase").val());
    $("#adm_percent").text(adm);
    $("#administration_increase").val(adm);

});



// Marketing Range Selector
$('#marketing_increase').on("input change", function () {
    var mkt = parseInt($("#marketing_increase").val());
    $("#mkt_percent").text(mkt);
    $("#marketing_increase").val(mkt);

});



// Public Relations Range Selector
$('#public_relations_increase').on("input change", function () {
    var pr = parseInt($("#public_relations_increase").val());
    $("#pr_percent").text(pr);
    $("#public_relations_increase").val(pr);

});


// Other Range Selector
$('#other_increase').on("input change", function () {
    var oth = parseInt($("#other_increase").val());
    $("#oth_percent").text(oth);
    $("#other_increase").val(oth);
    

});

// Superannuation Range Selector
$('#superannuation').on("input change", function () {
    var sup = parseInt($("#superannuation").val());
    $("#sup_percent").text(sup);
    $("#superannuation").val(sup);

});


// WorkCover Range Selector
$('#work_cover').on("input change", function () {
    var wc = parseInt($("#work_cover").val());
    $("#wc_percent").text(wc);
    $("#work_cover").val(wc);

});


// Commission Range Selector
$('#commission').on("input change", function () {
    var com = parseInt($("#commission").val());
    $("#com_percent").text(com);
    $("#commission").val(com);
    
});


// Other Range Selector
$('#other').on("input change", function () {
    var ot = parseInt($("#other").val());
    $("#ot_percent").text(ot);
    $("#other").val(ot);
    
});

// Pay Increase Range Selector
$('#pay_increase').on("input change", function () {
    var pay1 = parseInt($("#pay_increase").val());
    $("#pay_percent").text(pay1);
    $("#pay_increase").val(pay1);
    

});



//Close






$('#loanAmount').on("input change", function () {
    var pct = parseInt($("#loanAmount").val());
    $("#loanAmountText").text(pct.toLocaleString());
    $("#loanAmount").val(pct);
    values_on_slider_change();
});


$('#loanYear').on("input change", function () {
    var pct = parseInt($("#loanYear").val());
    $("#loanYearText").text(pct);
    $("#loanYear").val(pct);
    values_on_slider_change();

});


$('#loanIntrest').on("input change", function () {
    var pct = parseInt($("#loanIntrest").val());
    $("#loanIntrestText").text(pct);
    $("#loanIntrest").val(pct);
    values_on_slider_change();

});


$('#btncancelcompanystup').on("click", function () {
   
    Swal.fire({
        title: 'Are you sure you want to cancel ?',
        //text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {

            $('#company_details-form-toogle').toggle();
        }

      })

});

$('#btncancelowner').on("click", function () {
   
    Swal.fire({
        title: 'Are you sure you want to cancel ?',
        //text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {

            reset_form('frmcompanyowner');
            var img_src = base_url+"template-assets/img/team/avatar.png";
            $('#uploadownerpic_pre').attr('src',img_src);

            $('#experience-form1').toggle();
        }

      })

});


$('#btncancelinvestor').on("click", function () {
   
    Swal.fire({
        title: 'Are you sure you want to cancel ?',
        //text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {

            reset_form('frmcompanyinvestor');
            var img_src = base_url+"template-assets/img/team/avatar.png";
            $('#uploadinvestorpic_pre').attr('src',img_src);

            $('#investor-form').toggle();
        }

      })

});



$('.calc_amount_contributed').on("keyup", function () {


    var share_qty = $('#share_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

    console.log(share_qty);

    var price_per_share = $('#price_per_share').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

    console.log(price_per_share);

    var amount = share_qty * price_per_share;

    console.log(amount);

    if(amount > 0){
        
        $('#amount').val("$" + '' + parseInt(amount).toLocaleString());
    }

});

$(document).on('input','#uploadownerpic', function () {   

    

    formdata = new FormData();
    if($(this).prop('files').length > 0)
    {
        //alert('picked');
        file =$(this).prop('files')[0];
        formdata.append("music", file);
    }


    jQuery.ajax({
        url: baseURL+"uploadfile/upload-company-setup-pics",
        type: "POST",
        data: formdata,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            $('#uploadownerpic_val').val(result.filePath);
            $('#uploadownerpic_pre').attr('src',result.fileUrl);
        }
    });
});



$(document).on('input','#uploadinvestorpic', function () {   

    

    formdata = new FormData();
    if($(this).prop('files').length > 0)
    {
        //alert('picked');
        file =$(this).prop('files')[0];
        formdata.append("music", file);
    }

    jQuery.ajax({
        url: baseURL+"uploadfile/upload-company-setup-pics",
        type: "POST",
        data: formdata,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            $('#uploadinvestorpic_val').val(result.filePath);
            $('#uploadinvestorpic_pre').attr('src',result.fileUrl);
        }
    });
});


$(document).on('input','#uploadcompanylogo', function () {   

    formdata = new FormData();
    if($(this).prop('files').length > 0)
    {
        //alert('picked');
        file =$(this).prop('files')[0];
        formdata.append("music", file);
    }

    jQuery.ajax({
        url: baseURL+"uploadfile/upload-company-setup-pics",
        type: "POST",
        data: formdata,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            $('#companylogo_val').val(result.filePath);
            $('#companylogo_pre').attr('src',result.fileUrl);
        }
    });
});

$("#btnchangepassword").click(function () {
    if (validate('frm'+controller)) {

        // START AUTH
        var url = baseURL + controller+"/doNewpwd";

     //    console.log(controller);

     //    return;

        var param = {

                 password : $('#newpwd').val(),
                 cpassword : $('#cnewpwd').val(),
            }

        $.post(url, param,function(result) {

             console.log(result);

             if (result === "mismatch") {

                 error_message("Confirm Password not matched");

             }


             if (result === "changed") {

                 reset_form('frm'+controller);

                 (async () => {

                     const { value: accept } = await Swal.fire({
                     title: '',
                     icon: 'success',
                     html:
                           'Password Change successfully.',
                     confirmButtonText:
                         '<i class="fa fa-thumbs-up"></i> Back to Home ',                       
                     })
                     
                     if (accept) {
                         window.location.replace(base_url);
                     }
         
                 })()

             }


            },'html');
        // END AUTH

    }else{
        error_message("Please fill required fields");
    }

});

// $(document).on('click', '#finance-form-collapse', function(e) {

//     $('#finance-form-toogle').toggle();

// });  

$(document).on('click', '#new_finance_collapse', function(e) {
    
    $('#finance-form-toogle').toggle();

}); 

$(".saveFinance").click(function () {

    check_login();

    $("#tbodyid").empty();
    
    if (validate('frmfinance')) {
        var financeid = $('#financeid').val();
        var url = base_url + controller+"/save-finance";
        var param = {
            financeid : financeid,
            loan_amount : $('#loanAmount').val(),
            loan_length : $('#loanYear').val(),
            annual_interest : $('#loanIntrest').val(),
       }

       $.post(url, param,function(result) {
            if(result === 'success') {
                $("#fullsummary tbody").empty();

                Swal.fire({
                    icon: 'Success',
                    title: 'Success',
                    text: 'Your Loan has been saved successfully!',
                  })

                $('#finance-form-toogle').toggle();

                getFinanceAccordian1();

                $('#financeid').val(financeid);
            }

        },'html');

        
        

    }else{

        error_message("Please fill required fields");
    }

});

function getLoanTable(){
    alert('hi');
    
}

getFinanceAccordian1();

function getFinanceAccordian1(){

    var curr;

    var url1 = base_url + controller+"/currency";

    $.ajax({
        url: url1,
        type: 'post',
        dataType: 'html',
        async: false,
        success: function(data) {
            result1 = data;
        } 
     });

    curr = result1;


    check_login();

    var url = base_url + controller + "/get-finance-table";

    var param = '';

    $.get(url, param,function(result) {

        console.log("imran" + result[0].loan_amount);
        //console.log(result.loan_amount);
        
        if(result[0] === null){
            //alert(result);
            $('#financeid').val("0");
            return;
        }

        $('#loanAmountText').text(parseInt(result[0].loan_amount).toLocaleString());
        $('#loanYearText').text(result[0].loan_length);
        $('#loanIntrestText').text(result[0].annual_interest+" %");
        $('#loanAmount').val(result[0].loan_amount);
        $('#loanYear').val(result[0].loan_length);
        $('#loanIntrest').val(result[0].annual_interest);

        $('#financeid').val(result[0].id);
        $('#principalAmount').text(parseInt(result[0].loan_amount).toLocaleString());
        //$('#interestAmount').text(parseInt(result.total_interest).toLocaleString());
        $('#totalPayable').text((parseInt(result[0].loan_amount) + parseInt(result[0].total_interest)).toLocaleString());
        $('#monthlyLoanPayment').text(parseInt(Math.round(parseInt(result[0].loan_amount) + parseInt(result[0].total_interest) / result[0].loan_length)).toLocaleString());
        $('#loanamount_acc2').text(parseInt(result[0].loan_amount).toLocaleString());
        $('#Interest_acc2').text(parseInt(result[0].total_interest).toLocaleString());
        $('#loanterm_acc2').text(result[0].loan_length);
        $('#interestrate_acc2').text(parseInt(result[0].annual_interest).toLocaleString());

        
        $('#loan_amount_acc3').text(parseInt(result[0].loan_amount).toLocaleString());
        $('#loan_length_acc3').text(result[0].loan_length);
        $('#annual_interest_acc3').text(parseInt(result[0].annual_interest).toLocaleString());
        $('#total_paid_acc3').text((parseInt(result[0].loan_amount) + parseInt(result[0].total_interest)).toLocaleString());
        $('#total_interest_acc3').text(parseInt(result[0].total_interest).toLocaleString());
        $('#total_periods_acc3').text(result[0].total_period);

        $('#totalfooter').text(parseInt(result.loan_amount).toLocaleString());

        var param1 = {
            loan_amount : result[0].loan_amount,
            loan_length : result[0].loan_length,
            annual_interest : result[0].annual_interest,
        }

        var amortization_url = base_url + controller+"/amortization";

        $.post(amortization_url, param1,function(result) {

            var res = result.split('|');
            $("#fullsummary tbody").append(res[0]);
            $('#interestAmount').text(parseInt(res[1]).toLocaleString());
            //$('#Interest_acc2').text(parseInt(res[1]).toLocaleString());
            //$('#total_interest_acc3').text(parseInt(res[1]).toLocaleString());

            $('#totalprincipalfooter').text(parseInt(res[1]).toLocaleString());
            
        },'html');
        

    },'json');


    

}

$(document).on('click', '#new-assumption-form', function(e) {

    $('#assumption-form-toogle').toggle();

});   


$(".saveAssumptions").click(function () {

    check_login();
    
    if (validate('frmassumptions')) {

        var assumptionid = $('#assumptionid').val();

        //alert(assumptionid);

        var url = base_url + controller+"/save-assumptions";

        var param = {

            assumptionid : assumptionid,
            opening_credit_balance : $('#opening_credit_balance').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''),
            opening_debit_balance : $('#opening_debit_balance').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''),
            opening_bank_balance : $('#opening_bank_balance').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''),
            opening_stock_balance : $('#opening_stock_balance').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''),
            rsvbl_in_days : $('#rsvbl_in_days').val(),
            pybl_in_days : $('#pybl_in_days').val(),
            vat_paid_in_days : $('#vat_paid_in_days').val(),
            cmpnytx_paid_in_days : $('#cmpnytx_paid_in_days').val(),
            porivision_baddebt : $('#porivision_baddebt').val(),
            depreciation_on_equipment : $('#depreciation_on_equipment').val(),
            franchise_royalty : $('#franchise_royalty').val(),
            company_tax : $('#company_tax').val(),
            company_vat_collected : $('#company_vat_collected').val(),
            servicecost_service : $('#servicecost_service').val(),

            // Operating Assumptions
            administration_increase : $('#administration_increase').val(),
            marketing_increase : $('#marketing_increase').val(),
            public_relations_increase : $('#public_relations_increase').val(),
            other_increase : $('#other_increase').val(),


            // Payroll Assumptions
            superannuation : $('#superannuation').val(),
            work_cover : $('#work_cover').val(),
            commission : $('#commission').val(),
            other : $('#other').val(),            
            pay_increase : $('#pay_increase').val(),    





       }


       $.post(url, param,function(result) {

            //console.log(result);
            //alert(result);

            if(result >0){

                //reset_form('frmassumptions');

                //$('.clearAmountText').html("0");

                Swal.fire({
                    icon: 'Success',
                    title: 'Success',
                    text: 'Your Business  Assumptions have been saved successfully!',
                  })

                  $('#assumption-form-toogle').toggle();

                //success_message("Record Saved Successfully");

                //getFinanceAccordian1();

                $('#assumptionid').val(result);
            }

        },'html');
        

    }else{

        error_message("Please fill required fields");
    }

});


getAssumptionsData();

function getAssumptionsData(){

    check_login();

    var curr;

    var url1 = base_url + controller+"/currency";

    $.ajax({
        url: url1,
        type: 'post',
        dataType: 'html',
        async: false,
        success: function(data) {
            result1 = data;
        } 
     });

    curr = result1;

    var url = base_url + controller + "/assumptions-data";

    var param = "";

    $.get(url, param,function(result) {

        //console.log(result.loan_amount);
        
        if(result === null){
            //alert(result);
            $('#assumptionid').val("0");
            return;
        }


        $('#assumptionid').val(result.id);
        $('#opening_credit_balance').val(curr + result.opening_credit_balance);
        $('#opening_debit_balance').val(curr + result.opening_debit_balance);
        $('#opening_bank_balance').val(curr + result.opening_bank_balance);
        $('#opening_stock_balance').val(curr + result.opening_stock_balance);
        $('#rsvbl_in_days').val(result.rsvbl_in_days);
        $('#pybl_in_days').val(result.pybl_in_days);
        $('#vat_paid_in_days').val(result.vat_paid_in_days);
        $('#cmpnytx_paid_in_days').val(result.cmpnytx_paid_in_days);
        $('#porivision_baddebt').val(result.porivision_baddebt);
        $('#pbd_percent').html(result.porivision_baddebt);
        $('#depreciation_on_equipment').val(result.depreciation_on_equipment);
        $('#doe_percent').html(result.depreciation_on_equipment);
        $('#franchise_royalty').val(result.franchise_royalty);
        $('#frf_percent').html(result.franchise_royalty);
        $('#company_tax').val(result.company_tax);
        $('#pct_percent').html(result.company_tax);
        $('#company_vat_collected').val(result.company_vat_collected);
        $('#cvc_percent').html(result.company_vat_collected);
        $('#servicecost_service').val(result.servicecost_service);
        $('#scs_percent').html(result.servicecost_service);


        $('#adm_percent').html(result.administration_increase);
        $('#administration_increase').val(result.administration_increase);
        $('#mkt_percent').html(result.marketing_increase);
        $('#marketing_increase').val(result.marketing_increase);
        $('#pr_percent').html(result.public_relations_increase);
        $('#public_relations_increase').val(result.public_relations_increase);
        $('#oth_percent').html(result.other_increase);
        $('#other_increase').val(result.other_increase);



        $('#sup_percent').html(result.superannuation);
        $('#superannuation').val(result.superannuation);
        $('#wc_percent').html(result.work_cover);
        $('#work_cover').val(result.work_cover);
        $('#com_percent').html(result.commission);
        $('#commission').val(result.commission);
        $('#ot_percent').html(result.other);
        $('#other').val(result.other);
        $('#pay_percent').html(result.pay_increase);
        $('#pay_increase').val(result.pay_increase);





    },'json');

}


$('#btncancelfinance').on("click", function () {
   
    Swal.fire({
        title: 'Are you sure you want to cancel ?',
        //text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
            //getFinanceAccordian1();
            //$('#finance-form-toogle').toggle();
            $('#finance-form-toogle').toggle();
        }

      })

});


$('#btncancelassumptions').on("click", function () {
   
    Swal.fire({
        title: 'Are you sure you want to cancel ?',
        //text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
            $('#assumption-form-toogle').toggle();
        }

      })

});


$(".editcompany").click(function () {
    
    $('#company_details-form').toggle();

});


function get_user_currency(){

    
    var curr;

    var url1 = base_url + controller+"/currency";

    $.ajax({
        url: url1,
        type: 'post',
        dataType: 'html',
        async: false,
        success: function(data) {
            result = data;


        $('.currencydynamic').html(result);

        var opening_credit_balance = $('#opening_credit_balance').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if(opening_credit_balance !== ""){
            $('#opening_credit_balance').val(result + '' + parseInt(opening_credit_balance).toLocaleString());
        }

        var opening_debit_balance = $('#opening_debit_balance').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if(opening_debit_balance !== ""){
            $('#opening_debit_balance').val(result + '' + parseInt(opening_debit_balance).toLocaleString());
        }

        var opening_bank_balance = $('#opening_bank_balance').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if(opening_bank_balance !== ""){
            $('#opening_bank_balance').val(result + '' + parseInt(opening_bank_balance).toLocaleString());
        }

        var price_per_share = $('#price_per_share').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if(price_per_share !== ""){
            $('#price_per_share').val(result + '' + parseInt(price_per_share).toLocaleString());
        }

        var amount = $('#amount').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if(amount !== ""){
            $('#amount').val(result + '' + parseInt(amount).toLocaleString());
        }

        var investor_amount = $('#investor_amount').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if(investor_amount !== ""){
            $('#investor_amount').val(result + '' + parseInt(investor_amount).toLocaleString());
        }

        var share_qty = $('#share_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if(share_qty !== ""){
            $('#share_qty').val(parseInt(share_qty).toLocaleString());
        }




            } 
     });
}


$('.handlecurrencyformat').find('input[type="text"]').focus(function() {
    var focusvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    if ($(this).hasClass('currencySign')) {
        $(this).val(focusvalue);
    } else if ($(this).hasClass('numberSign')) {
        $(this).val(focusvalue);
    }else if ($(this).hasClass('percentSign')) {
        $(this).val(focusvalue);
     }
});


$('.handlecurrencyformat').find('input[type="text"]').focusout(function() {
    var focusoutvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    if ($(this).hasClass('currencySign')) {
        $(this).val(globalcurr + '' + parseInt(focusoutvalue).toLocaleString());
    } else if ($(this).hasClass('numberSign')) {
        //console.log('here'+focusoutvalue.toLocaleString());
        $(this).val(parseInt(focusoutvalue).toLocaleString());
    }else if ($(this).hasClass('percentSign')) {
        $(this).val(focusoutvalue + '%');
     }
});


load_company_owners_dt(base_url);

function load_company_owners_dt(base_url){

    var cur1;

    var url = base_url + controller+"/currency";

    var param = "";

    $.ajax({
        url: url,
        type: 'post',
        dataType: 'html',
        async: false,
        success: function(data) {
            result = data;
        } 
     });

    cur1 = result;

    if ( $.fn.dataTable.isDataTable( '#loadownersDT' ) ) {
        $( '#loadownersDT' ).DataTable().destroy();
    }

    var table =  $('#loadownersDT').DataTable( {
        "processing": true,
        "ajax": base_url+"director/ajax-list-dt",
        "order": [[ 0, "desc" ]],
        "columnDefs": [
            {
                "targets": [ 0 ],
                "visible": false,
                "searchable": false
            },
        ],


        // start grand total
        "footerCallback": function ( row, data, start, end, display ) {
            var api = this.api(), data;
 
            // Remove the formatting to get integer data for summation
            var intVal = function ( i ) {
                return typeof i === 'string' ?
                    i.replace(/[\$\₹\€\£,]/g, '')*1 :
                    typeof i === 'number' ?
                        i : 0;
            };

 
            // Total over this page
            rpageTotal = api
                .column( 3, { page: 'current'} )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
            // Update footer
            $( api.column( 3 ).footer() ).html(
                ''+cur1+' '+rpageTotal.toLocaleString() +''
                //''+rpageTotal +' ( '+ rtotal +' total)'
            );


             // Total over this page
             rpageTotal = api
             .column( 4, { page: 'current'} )
             .data()
             .reduce( function (a, b) {
                 return intVal(a) + intVal(b);
             }, 0 );
         // Update footer
         $( api.column( 4 ).footer() ).html(
             ''+rpageTotal.toLocaleString() +''
             //''+rpageTotal +' ( '+ rtotal +' total)'
         );

        }
    // end grand total
    });
}


load_company_investors_dt(base_url);

function load_company_investors_dt(base_url){

    //alert(base_url);


    var cur2;

    var url = base_url + controller + "/currency";

    var param = "";


    $.ajax({
        url: url,
        type: 'post',
        dataType: 'html',
        async: false,
        success: function(data) {
            result = data;
        } 
     });

    cur2 = result;

    if ( $.fn.dataTable.isDataTable( '#loadinvestorsDT' ) ) {
        $( '#loadinvestorsDT' ).DataTable().destroy();
    }

    var table =  $('#loadinvestorsDT').DataTable( {
        "processing": true,
        "ajax": base_url+"investor/ajax-list-dt",
        "order": [[ 0, "desc" ]],
        "columnDefs": [
            {
                "targets": [ 0 ],
                "visible": false,
                "searchable": false
            },
        ],

        // start grand total
        "footerCallback": function ( row, data, start, end, display ) {
            var api = this.api(), data;
 
            // Remove the formatting to get integer data for summation
            var intVal = function ( i ) {
                return typeof i === 'string' ?
                    i.replace(/[\$\₹\€\£,]/g, '')*1 :
                    typeof i === 'number' ?
                        i : 0;
            };

 
            // Total over this page
            rpageTotal = api
                .column( 4, { page: 'current'} )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
            // Update footer
            $( api.column( 4 ).footer() ).html(
                ''+cur2+' '+rpageTotal.toLocaleString() +''
                //''+rpageTotal +' ( '+ rtotal +' total)'
            );
        }
        // end grand total
    });
}

(() => {
    get_user_currency()
})()

$( document ).ajaxComplete(function(event, request, settings) {
    if (settings.url != baseURL + 'user/currency') {
        // console.log('settings.url ', settings.url)
        // get_user_currency()
    }
});