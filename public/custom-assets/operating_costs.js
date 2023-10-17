var base_url = get_base_url();
var controller = get_controller();


check_login();

remove_validate();

var globalcurr;

var globalcururl = baseURL + "user/currency";

$.ajax({
    url: globalcururl,
    type: 'post',
    dataType: 'html',
    async: false,
    success: function(data) {
        globalcurr = data;
    }
})

$(document).on('click', '#operating_budget_toogle', function(e) {

    $('#operating_budget_collapse').toggle();

});
$(document).on('click', '#operating_payroll_toggle', function(e) {
    $('#operating_payroll_collapse').toggle();
});

$("#btnsaveexpense").click(function () {

    if (validate('operating_budget_collapse')) {

        var url = baseURL+"operating-cost/ajax-add";

        var operatingcostexpense_id = $('#operatingcostexpense_id').val();

        //alert($('#purpose').val());

        var param = {

            purpose : $('#purpose').val(),
            selectDescription : $('#selectDescription').val(),
            description : $('#custome_description').val(),
            num_month: $('#num_month').val(),
            // weekly_cost: $('#weekly_cost').val(),
            monthly_cost: $('#monthly_cost').val(),
            // quarterly_cost: $('#quarterly_cost').val(),
            yearly_cost: $('#yearly_cost').val(),
            operatingcostexpense_id: operatingcostexpense_id,
        }


        $.post(url, param,function(result) {

            //alert(result);

            if(result === 'success'){


                if(operatingcostexpense_id > 0){


                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record updated successfully',
                      })
                      
                    reset_form('operating_budget_collapse');
                    $('#operating_budget_collapse').toggle();
                    $('#operatingcostexpense_id').val('0');

                }else{


                    Swal.fire({
                        title: 'Record Added Successfully.',
                        text: "Do you want to add another",
                        icon: 'success',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                      }).then((result) => {
    
                        if (result.isConfirmed) {
    
                            reset_form('operating_expense_collapse');
                            get_user_currency();
                          
                        }else{
    
                            reset_form('operating_expense_collapse');
                            $('#operating_expense_collapse').toggle();
    
                        }
                
                      })
                    
                }

                load_operating_cost_expense(base_url);

                //load_company_owners();

                // var img_src = base_url+"/template-assets/img/team/avatar.png";
                // $('#uploadownerpic_pre').attr('src',img_src);
                

                //success_message("Record Saved Successfully");
            }else{

                if(operatingcostexpense_id > 0){
                    
                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record saved with no changes',
                      })
                      
                    reset_form('operating_budget_collapse');
                    $('#operating_budget_collapse').toggle();
                    $('#operatingcostexpense_id').val('0');
                    

                }

            }

        },'html');

    }else{
        error_message("Please fill required fields");
    }

});






load_operating_cost_expense(base_url);

function load_operating_cost_expense(base_url){

    if ( $.fn.dataTable.isDataTable( '#monthly_expenseDT' ) ) {
        $( '#monthly_expenseDT' ).DataTable().destroy();
    }


    var table;
    //datatables
    table = $('#monthly_expenseDT').DataTable({
        "processing": true, //Feature control the processing indicator.
        "serverSide": true, //Feature control DataTables' server-side processing mode.
        "order": [], //Initial no order.

        // Load data for the table's content from an Ajax source
        "ajax": {
            "url": baseURL + "operating-cost/ajax-list",
            "type": "GET"
        },

        //Set column definition initialisation properties.
        "columnDefs": [{
            "targets": [-1], //last column
            "orderable": false, //set not orderable
        }, ],
        "footerCallback": function(data, start, end, display) {
            var api = this.api(),
                data;

            var res = this.api().ajax.json();

            var number_format = $.fn.dataTable.render.number(0, '.', '\,').display;

            // Remove the formatting to get integer data for summation
            var intVal = function(i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,\€,\₹,\£]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page

            totalweekly = api
                .column(2, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(2).footer()).html(
                res['currency'] + (totalweekly.toLocaleString())
            );


            totalmonthly = api
                .column(3, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(3).footer()).html(
                res['currency'] + (totalmonthly.toLocaleString())
            );

            totalquaterly = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(4).footer()).html(
                res['currency'] + (totalquaterly.toLocaleString())
            );

            totalyearly = api
                .column(5, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(5).footer()).html(
                res['currency'] + (totalyearly.toLocaleString())
            );


            year3 = api
                .column(6, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(6).footer()).html(
                res['currency'] + (year3.toLocaleString())
            );

        },
    });

}


$(document).on('click', '.editoperatingcostexpense', function(e) {
    $('#operating_budget_collapse').show();
    var edit_id = $(this).attr('id');
    $('#operatingcostexpense_id').val(edit_id);

    $.ajax({
        url: baseURL+"operating-cost/ajax-edit/" + edit_id,
        type: "GET",
        dataType: "JSON",
        success: function(data) {
            console.log('data ', data);
            var cur = window.currency_icon;

            $('#purpose').val(data.purpose);
            $('#selectDescription').val(data.selectDescription);
            $('#custome_description').val(data.description);
            $('#num_month').val(data.num_month);
            $('#weekly_cost').val(cur+""+parseFloat(data.weekly_cost).toLocaleString());
            $('#monthly_cost').val(cur+""+parseFloat(data.monthly_cost).toLocaleString());
            $('#quarterly_cost').val(cur+""+parseFloat(data.quarterly_cost).toLocaleString());
            $('#yearly_cost').val(cur+""+parseFloat(data.yearly_cost).toLocaleString());
            $('#startupAllowance').val(cur+""+parseFloat(data.startupallowance).toLocaleString());
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error get data from ajax');
        }
    });

});

$(document).on('click', '.removeoperatingcostexpense', function(e) {
    var edit_id = $(this).attr('id');

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

            $.ajax({
                url: baseURL+"operating-cost/ajax-delete/" + edit_id,
                type: "DELETE",
                dataType: "html",
                success: function(data) {
                    if(data === 'success'){
                        load_operating_cost_expense(baseURL);
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
        }
      })
});


function calculateCostFromMonthly(){
    var monthly_cost = document.getElementById("monthly_cost").value.replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var num_month = document.getElementById("num_month").value.replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var yearly_cost = monthly_cost * 12;
    var startupAllowance = monthly_cost * num_month;
    var cur = $('#getcur').val();

    console.log("monthly_cost"+monthly_cost);
    console.log("num_month"+num_month);
    console.log("yearly_cost"+yearly_cost);

    $('#yearly_cost').val(cur+""+yearly_cost.toLocaleString());
    $('#startupAllowance').val(cur+""+startupAllowance.toLocaleString());
}


function calculateFromNumMonths(){
    var monthly_cost = document.getElementById("monthly_cost").value.replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var num_month = document.getElementById("num_month").value.replace(/\,|\$|\€|\₹|\£|\%/g, '');
    // alert("monthlycost"+monthly_cost);
    // alert("nummonth"+num_month);
    var startupAllowance = monthly_cost * num_month;
    // alert("allowance"+startupAllowance);
    var cur = $('#getcur').val();
    $('#yearly_cost').val(cur+""+(monthly_cost * 12).toLocaleString());
    $('#startupAllowance').val(cur+""+startupAllowance.toLocaleString());
}


$(document).on('click', '#cancelsaveexpense', function(e) {

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

            reset_form('operating_budget_collapse');
            $('#operating_budget_collapse').toggle();
        }

      })
});

// var monthly_cost = $('#monthly_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
// $('#monthly_cost').val("$ " + '' + monthly_cost);


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






//people

$("#btnSave_people").click(function () {

    if (validate('operating_payroll_collapse')) {

        var url = baseURL+"operating-cost/ajax-add-people";

        var operatingpeople_id = $('#operatingcostpeople_id').val();

        var param = {

            role : $('#role').val(),
            hour_worked : $('#hour_worked').val(),
            num_people : $('#num_people').val(),
            rates: $('#rates').val(),
            gross_salary: $('#gross_salary').val(),
            superannuation_people: $('#superannuation_people').val(),
            work_cover_people: $('#work_cover_people').val(),
            commission_people: $('#commission_people').val(),
            payroll_people: $('#payroll_people').val(),
            yearly_salary_people: $('#yearly_salary_people').val(),
            operatingpeople_id: operatingpeople_id,
            num_payroll_month: $('#num_payroll_months').val(),
            startup_payroll_allowance: $('#yearly_salary_people').val(),
        }


        $.post(url, param,function(result) {

            //console.log("hi"+result);

            if(result === 'success'){

                $('#operatingpeople_id').val('0');    

                if(operatingpeople_id > 0){


                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record updated successfully',
                      })

                    reset_form('operating_payroll_collapse');
                    $('#operating_payroll_collapse').toggle();
                    
                }else{


                    Swal.fire({
                        title: 'Record Added Successfully.',
                        text: "Do you want to add another",
                        icon: 'success',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                      }).then((result) => {
    
                        if (result.isConfirmed) {
    
                            reset_form('operating_payroll_collapse');
                          
                        }else{
    
                            reset_form('operating_payroll_collapse');
                            $('#operating_payroll_collapse').toggle();
    
                        }
                
                      })
                    
                }

                load_operating_cost_people(base_url);
            }else{

                if(operatingpeople_id > 0){
                    
                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record saved with no changes',
                      })
                      
                    reset_form('operating_payroll_collapse');
                    $('#operating_payroll_collapse').toggle();
                    $('#operatingpeople_id').val('0');
                    

                }

            }

        },'html');

    }else{
        error_message("Please fill required fields");
    }

});

function calculategrossSalary(){

    var url = baseURL + "operating-cost/get-payroll-assumptions";

    $.get(url, param,function(result) {
        var cur = $('#getcur').val();
        var assumptions_slider = result.superannuation/100;
        var work_cover_slider = result.work_cover/100;
        var commission_slider = result.commission/100;
        var payroll_slider = result.pay_increase;
        var other_slider = result.other/100; 

        var hour_worked = document.getElementById("hour_worked").value;
        var num_people = document.getElementById("num_people").value;
        var rates = document.getElementById("rates").value; 

        var gross_salary = (num_people * hour_worked * rates * 52) / 12;

        var superannuation_people = gross_salary * assumptions_slider * 12;
        $('#superannuation_people').val(cur+""+superannuation_people.toLocaleString());

        var work_cover_people = gross_salary * work_cover_slider * 12;
        $('#work_cover_people').val(cur+""+work_cover_people.toLocaleString());

        var commission_people = gross_salary * commission_slider * 12;
        $('#commission_people').val(cur+""+commission_people.toLocaleString());

        var payroll_people = gross_salary * other_slider * 12;
        $('#payroll_people').val(cur+""+payroll_people.toLocaleString());

        var yearly_salary_people = (superannuation_people+work_cover_people+commission_people+payroll_people);
        $('#yearly_salary_people').val(cur+""+yearly_salary_people.toLocaleString());

        var final_gross_salary = gross_salary + (yearly_salary_people / 12);
        $('#gross_salary').val(cur+""+final_gross_salary.toLocaleString());

        var num_payroll_months = document.getElementById("num_payroll_months").value;

        var startup_payroll_allowance = final_gross_salary * num_payroll_months;
        $('#startup_payroll_allowance').val(cur+""+startup_payroll_allowance.toLocaleString());


    },'json');    
}

load_operating_cost_people(base_url);

function load_operating_cost_people(base_url){

    if ( $.fn.dataTable.isDataTable( '#operating_cost_peopleDT' ) ) {
        $( '#operating_cost_peopleDT' ).DataTable().destroy();
    }

    var table;
    table = $('#operating_cost_peopleDT').DataTable({
        "processing": true, //Feature control the processing indicator.
        "serverSide": true, //Feature control DataTables' server-side processing mode.
        "order": [], //Initial no order.

        // Load data for the table's content from an Ajax source
        "ajax": {
            "url": baseURL+"operating-cost/ajax-people",
            "type": "GET"
        },

        //Set column definition initialisation properties.
        "columnDefs": [{
            "targets": [-1], //last column
            "orderable": false, //set not orderable
        }, ],
        "footerCallback": function(data, start, end, display) {
            var api = this.api(),
                data;

            var res = this.api().ajax.json();

            var number_format = $.fn.dataTable.render.number(0, '.', '\,').display;

            // Remove the formatting to get integer data for summation
            var intVal = function(i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,\€,\₹,\£]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over this page

            totalweekly = api
                .column(2, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(2).footer()).html(
                res['currency'] + (totalweekly.toLocaleString())
            );


            totalmonthly = api
                .column(3, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(3).footer()).html(
                res['currency'] + (totalmonthly.toLocaleString())
            );

            totalquaterly = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(4).footer()).html(
                res['currency'] + (totalquaterly.toLocaleString())
            );

            totalyearly = api
                .column(5, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(5).footer()).html(
                res['currency'] + (totalyearly.toLocaleString())
            );


            year33 = api
                .column(6, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(6).footer()).html(
                res['currency'] + (year33.toLocaleString())
            );

            year1 = api
                .column(7, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(7).footer()).html(
                res['currency'] + (year1.toLocaleString())
            );


            year2 = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(8).footer()).html(
                res['currency'] + (year2.toLocaleString())
            );


            year3 = api
                .column(9, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(9).footer()).html(
                res['currency'] + (year3.toLocaleString())
            );


            year313 = api
                .column(10, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(10).footer()).html(
                res['currency'] + (year313.toLocaleString())
            );

        },
        
    });

}

$(document).on('click', '.editoperatingcostpeople', function(e) {

    
    $('#operating_payroll_collapse').show();

    var edit_id = $(this).attr('id');

    $('#operatingcostpeople_id').val(edit_id);

    //alert(edit_id);
    var url = baseURL + "user/currency";
    
    var param = "";
    
    var cur;
    
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'html',
        async: false,
        success: function(data) {
            result1 = data;
        } 
    });

    cur = result1;

    $.ajax({
        url: baseURL+"operating-cost/ajax-edit-people/" + edit_id,
        type: "GET",
        dataType: "JSON",
        success: function(data) {
                    $('#role').val(data.role);
                    $('#hour_worked').val(data.hour_worked);
                    $('#num_people').val(data.num_people);
                    $('#rates').val(data.rates);
                    $('#gross_salary').val(cur+""+parseFloat(data.gross_salary).toLocaleString());
                    $('#superannuation_people').val(cur+""+parseFloat(data.superannuation).toLocaleString());
                    $('#work_cover_people').val(cur+""+parseFloat(data.work_cover).toLocaleString());
                    $('#commission_people').val(cur+""+parseFloat(data.commission).toLocaleString());
                    $('#payroll_people').val(cur+""+parseFloat(data.payroll_cost).toLocaleString());
                    $('#yearly_salary_people').val(cur+""+parseFloat(data.yearly_salary).toLocaleString());
                    $('#num_payroll_months').val(data.num_payroll_month);
                    $('#startup_payroll_allowance').val(cur+""+parseFloat(data.startup_payroll_allowance).toLocaleString());

            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error get data from ajax');
        }
    });

});



$(document).on('click', '.removeoperatingcostpeople', function(e) {

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
                url: baseURL+"operating-cost/ajax-delete-people/" + edit_id,
                type: "DELETE",
                dataType: "html",
                success: function(data) {

                    console.log(data);

                    if(data === 'success'){

                        load_operating_cost_people(base_url);

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


$(document).on('click', '#btncancelpeople', function(e) {

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

            reset_form('operating_payroll_collapse');
            $('#operating_payroll_collapse').toggle();
        }

      })
});




	
    $(document).ready(function() {
       if (document.cookie.indexOf("FooBar=true") == -1) {
           document.cookie = "FooBar=true; max-age=86400"; // 86400: seconds in a day
           $('#operatingCostsModal').modal('show');
       }
     });


    $('#btninfo_s4').on("click", function () {
        $('.tab-active-caret li a.active').removeClass('active');
        $("#crm-s4-tab").addClass("active");
    });


    $(document).on('change', '#purpose', function (e) {
    var parent = $(this).val()
    if (parent == 'Administration') {
        $('#selectDescription').find('optgroup').each(function () {
        if ($(this)[0].id !== parent) {
            $(this).hide();
        } else {
            $(this).show();
        }
        });
    } else if (parent == 'Marketing') {
        $('#selectDescription').find('optgroup').each(function () {
        if ($(this)[0].id !== parent) {
            $(this).hide();
        } else {
            $(this).show();
        }
        });

    } else if (parent == 'Other') {
        $('#selectDescription').find('optgroup').each(function () {
        if ($(this)[0].id !== parent) {
            $(this).hide();
        } else {
            $(this).show();
        }
        });

    } else if (parent == 'Public_Relations') {
        $('#selectDescription').find('optgroup').each(function () {
        if ($(this)[0].id !== parent) {
            $(this).hide();
        } else {
            $(this).show();
        }
        });

    } else {
        $('#selectDescription').find('optgroup').each(function () {
        $(this).show();
        });
    }
    });

                             