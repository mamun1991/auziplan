var base_url = "revenue";
var controller = get_controller();


check_login();

remove_validate();



//////////////////////////////////////////////////////////////////////////////////////
/// Local Products Projections Start/////////////////
var globalcurr;

var globalcururl = window.baseURL + "user/currency";

$.ajax({
    url: globalcururl,
    type: 'post',
    dataType: 'html',
    async: false,
    success: function(data) {
        globalcurr = data;
    }
})


function calculations(){

    var url = baseURL+"user/currency";
    var cur;
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'html',
        async: false,
        success: function(data) {
            result = data;
        } 
    });
    cur = result;

        var opening_stock_qty = $('#opening_stock_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        var monthly_qty = $('#monthly_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        var average_cost_price = $('#average_cost_price').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        var percent_markup_on_cost = $('#percent_markup_on_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        var month_stock_allowance = $('#month_stock_allowance').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        
        var selling_price;
        var monthly_revenue;
        var year_1;
        var year_1_cost;
        var year_1_gross_profit;
        var total_stock_allowance;


        /*average selling price = average cost price x percentage markup + average cost price*/
        var res1 = average_cost_price * (percent_markup_on_cost / 100);
        selling_price = parseInt(res1) + parseInt(average_cost_price);
        if(selling_price > 0){
            $('#selling_price').val(cur+""+selling_price.toLocaleString());
        }
        
        /*Average monthly revenue = sales per month x selling price*/
        monthly_revenue = monthly_qty * selling_price;
        if(monthly_revenue > 0){
            $('#monthly_revenue').val(cur+""+monthly_revenue.toLocaleString());
        }
        
        /*Year 1 revenue = average monthly revenue x 12*/
        year_1 = monthly_revenue * 12;
        if(year_1 > 0){
            $('#year_1').val(cur+""+year_1.toLocaleString());
        }
        

        /*Year 1 product cost = sales per month x cost of this product*/
        year_1_cost = (monthly_qty * 12) * average_cost_price;
        if(year_1_cost > 0){
            $('#year_1_cost').val(cur+""+year_1_cost.toLocaleString());
        }
        
        /*Year gross profit = year_ 1 - year_1 cost*/
        year_1_gross_profit = parseInt(year_1) - parseInt(year_1_cost);
        if(year_1_gross_profit > 0){
            $('#year_1_gross_profit').val(cur+""+year_1_gross_profit.toLocaleString());
        }


        /*Stock allowance = months stock allowance x  cost of this product*/
        //total_stock_allowance = month_stock_allowance * average_cost_price;
        total_stock_allowance = (month_stock_allowance*monthly_qty )* average_cost_price;
        if(total_stock_allowance > 0){
            $('#total_stock_allowance').val(cur+""+total_stock_allowance.toLocaleString());
        }

}


/// Currency Start/////////////////

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
        if(focusoutvalue != ""){
            $(this).val(globalcurr + '' + parseInt(focusoutvalue).toLocaleString());
        }
    } else if ($(this).hasClass('numberSign')) {
        //console.log('here'+focusoutvalue.toLocaleString());
        $(this).val(parseInt(focusoutvalue).toLocaleString());
    }else if ($(this).hasClass('percentSign')) {
        $(this).val(focusoutvalue + '%');
     }
});



/// Collapse dropview Start/////////////////

$(document).on('click', '#product_toogle', function(e) {

    $('#product_collapse').toggle();

});

/// Save button Start/////////////////
$("#btnsaveproduct").click(function () {

    if (validate('product_collapse')) {

        var url = baseURL+"revenue/ajax_add_product";

        var product_id = $('#productrevenueid').val();

        var param = {
            product_type : $('#product_type').val(),
            description : $('#description').val(),
            opening_stock_qty : $('#opening_stock_qty').val(),
            monthly_qty : $('#monthly_qty').val(),
            average_cost_price : $('#average_cost_price').val(),
            percent_markup_on_cost: $('#percent_markup_on_cost').val(),
            month_stock_allowance: $('#month_stock_allowance').val(),
            selling_price: $('#selling_price').val(),
            monthly_revenue: $('#monthly_revenue').val(),
            year_1: $('#year_1').val(),
            year_1_cost: $('#year_1_cost').val(),
            year_1_gross_profit: $('#year_1_gross_profit').val(),
            total_stock_allowance: $('#total_stock_allowance').val(),
            product_id: product_id,
        }

        console.log("hi"+param);

        $.post(url, param,function(result) {

            

            if(result === 'success'){


                if(product_id > 0){


                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record updated successfully',
                      })

                    reset_form('product_collapse');
                    $('#product_collapse').toggle();
                    $('#product_id').val('0');

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
    
                            reset_form('product_collapse');
                            get_user_currency();
                          
                        }else{
    
                            reset_form('product_collapse');
                            $('#product_collapse').toggle();
    
                        }
                
                      })
                    
                }

                load_product_revenue_dt(baseURL);

                //load_company_owners();

                // var img_src = base_url+"/template-assets/img/team/avatar.png";
                // $('#uploadownerpic_pre').attr('src',img_src);
                

                //success_message("Record Saved Successfully");
            }else{

                if(product_id > 0){
                    
                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record saved with no changes',
                      })
                      
                    reset_form('product_collapse');
                    $('#product_collapse').toggle();
                    $('#product_id').val('0');
                    
                }

            }

        },'html');

    }else{
        error_message("Please fill required fields");
    }

});


load_product_revenue_dt(baseURL);

function load_product_revenue_dt(baseURL){

  if ( $.fn.dataTable.isDataTable( '#product_revenueDT' ) ) {
      $( '#product_revenueDT' ).DataTable().destroy();
  }


  var table;
  //datatables for One time cost land and buildings
  table = $('#product_revenueDT').DataTable({
    "processing": true, //Feature control the processing indicator.
    "serverSide": true, //Feature control DataTables' server-side processing mode.
    "order": [], //Initial no order.

    // Load data for the table's content from an Ajax source
    "ajax": {
        "url": baseURL+"revenue/load_product_revenue_dt",
        "type": "GET"
    },

    //Set column definition initialisation properties.
    "columnDefs": [{
        "targets": [-1], //last column
        "orderable": false, //set not orderable
    }, ],
    "footerCallback": function(row, data, start, end, display) {
        var api = this.api(),
            data;

        var response = this.api().ajax.json();

        var numFormat = $.fn.dataTable.render.number('\,', '.').display;
        // Remove the formatting to get integer data for summation
        var intVal = function(i) {
            return typeof i === 'string' ?
                i.replace(/[\$,\€,\₹,\£]/g, '') * 1 :
                typeof i === 'number' ?
                i : 0;
        };

        // Total over this page
        openingstock = api
            .column(3, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        //Update footer
        $(api.column(3).footer()).html(
            numFormat(openingstock)
        );


        // Total over this page
        monthlysaleqty = api
            .column(4, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        //Update footer
        $(api.column(4).footer()).html(
            numFormat(monthlysaleqty)
        );


        // Total over this page
        stockallowance = api
            .column(9, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        //Update footer
        $(api.column(9).footer()).html(
            globalcurr + numFormat(stockallowance)
        );


        // Total over this page
        monthlyrevenue = api
            .column(10, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        //Update footer
        $(api.column(10).footer()).html(
            globalcurr + numFormat(monthlyrevenue)
        );


        // Total over this page
        year1 = api
            .column(11, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        //Update footer
        $(api.column(11).footer()).html(
            globalcurr + numFormat(year1)
        );


        // Total over this page
        year2 = api
            .column(12, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        //Update footer
        $(api.column(12).footer()).html(
            globalcurr + numFormat(year2)
        );


        // Total over this page
        year3 = api
            .column(13, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        //Update footer
        $(api.column(13).footer()).html(
            globalcurr + numFormat(year3)
        );


    },
});

}

/// Delete button Start/////////////////
$(document).on('click', '.removeproductrevenue', function(e) {

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
                url: baseURL+"revenue/delete_product_revenue/" + edit_id,
                type: "GET",
                dataType: "html",
                success: function(data) {

                    console.log(data);

                    if(data === 'success'){

                        load_product_revenue_dt(baseURL);

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


/// Edit button Start/////////////////
$(document).on('click', '.editproductrevenue', function(e) {

    $('#product_collapse').show();

    var edit_id = $(this).attr('id');

    $('#productrevenueid').val(edit_id);

    //alert(edit_id);

    $.ajax({
        url: baseURL+"revenue/product_revenue_edit/" + edit_id,
        type: "GET",
        dataType: "JSON",
        success: function(data) {

                $('#product_type').val(data.product_type);
                $('#description').val(data.description);
                $('#opening_stock_qty').val(parseFloat(data.opening_stock_qty).toLocaleString());
                $('#monthly_qty').val(parseFloat(data.Qty).toLocaleString());
                $('#average_cost_price').val(globalcurr+""+parseFloat(data.unit_cost).toLocaleString());
                $('#percent_markup_on_cost').val(parseFloat(data.markUp_on_cost).toLocaleString()+"%");
                $('#month_stock_allowance').val(parseFloat(data.month_stock_allowance).toLocaleString());
                $('#selling_price').val(globalcurr+""+data.selling_price);
                $('#monthly_revenue').val(globalcurr+""+parseFloat(data.monthly_revenue).toLocaleString());
                $('#year_1').val(globalcurr+""+parseFloat(data.year_1).toLocaleString());
                $('#year_1_cost').val(globalcurr+""+parseFloat(data.year_1_cost).toLocaleString());
                $('#year_1_gross_profit').val(globalcurr+""+parseFloat(data.year_1_gross_profit).toLocaleString());
                $('#total_stock_allowance').val(globalcurr+""+parseFloat(data.total_stock_allowance).toLocaleString());
              
           
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error get data from ajax');
        }
    });

});

/// Cancel button Start/////////////////
$(document).on('click', '#btncancelproductrevenue', function(e) {


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

            reset_form('product_collapse');
            $('#product_collapse').toggle();
            $('#experience-form1').hide();
        }

      })

});



//////////////////////////////////////////////////////////////////////////////////////
/// Hourly Rate revenue projections start/////////////////

// 2, revenue_require = operating_costs + net_income_required

// 3, working_days_per_year = days_per_week * 52 

// 4, days_per_year = working_days_per_year - vacation_days - sickness_days

// 5  billable_hours_per_day = hours_per_day - none_billable_per-day

// 6, billable_hours_per_year = working_days_per_year * billable_hours_per_day 

// 7, billable_hours_per_year = working_days_per_year * billable_hours_per_day




// Hourly rate calculations
function hourly_rate_revenue(){

    var url = baseURL+"user/currency";
    
    var param = "";

    var cur;

    $.post(url, param,function(result) {

        cur = result; 


        var operating_costs = $('#operating_costs').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        var net_income_required = $('#net_income_required').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        var days_per_week = $('#days_per_week').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        var vacation_days = $('#vacation_days').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        var sickness_days = $('#sickness_days').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        var hours_per_day = $('#hours_per_day').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        var none_billable_hours_per_day = $('#none_billable_hours_per_day').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        
        var total_revenue_required;
        var total_days_per_year;
        var working_days_per_year;
        var billable_hour_per_day;
        var billable_hour_per_year;
        var hourly_rate;


        //revenue_require = operating_costs + net_income_required
        total_revenue_required = parseInt(operating_costs) + parseInt(net_income_required);
        if(total_revenue_required > 0){
            $('#total_revenue_required').val(cur+""+parseFloat(total_revenue_required).toLocaleString());
        }
        
        //working_days_per_year = days_per_week * 52 
        working_days_per_year = parseInt(days_per_week) * 52;
        if(working_days_per_year > 0){
            $('#working_days_per_year').val(working_days_per_year);
        }


        //days_per_year = working_days_per_year - vacation_days - sickness_days
        total_days_per_year =  parseInt(working_days_per_year) -  parseInt(vacation_days) -  parseInt(sickness_days);
        if(total_days_per_year > 0){
            $('#total_days_per_year').val(total_days_per_year);
        }

        //billable_hours_per_day = hours_per_day - none_billable_per-day
        //console.log('hours_per_day>'+hours_per_day);
        //console.log('none_billable_hours_per_day>'+none_billable_hours_per_day);
        billable_hour_per_day =  (hours_per_day - none_billable_hours_per_day);
        //console.log('billable_hour_per_day>'+billable_hour_per_day);
        if(billable_hour_per_day > 0){
            $('#billable_hour_per_day').val(billable_hour_per_day);
        }

        //billable_hours_per_year = working_days_per_year * billable_hour_per-day
        //console.log('total_days_per_year>'+total_days_per_year);
        //console.log('billable_hour_per_day>'+billable_hour_per_day);
        //console.log('billable_hour_per_year>'+billable_hour_per_year);
        billable_hour_per_year =  (total_days_per_year * billable_hour_per_day);
        if(billable_hour_per_year > 0){
            $('#billable_hour_per_year').val(billable_hour_per_year.toLocaleString());
        }

        //hourly_rate = revenue_required / billable_hours_per_year
        hourly_rate =  parseInt(total_revenue_required) /  parseInt(billable_hour_per_year);
        console.log("hourly_rate>>>"+hourly_rate);
        //if(hourly_rate > 0){
            $('#hourly_rate').val(cur+""+parseFloat(hourly_rate).toFixed(2));
            //$('#hourly_rate').val(cur+""+hourly_rate);
        //}

    })
}



load_hourly_rate_dt(baseURL);

function load_hourly_rate_dt(baseURL){

  if ( $.fn.dataTable.isDataTable( '#hourlyraterevenueDT' ) ) {
      $( '#hourlyraterevenueDT' ).DataTable().destroy();
  }


  //datatables for One time cost land and buildings
  table_one_land_buildings = $('#hourlyraterevenueDT').DataTable({
    responsive: true,
    "processing": true, //Feature control the processing indicator.
    "serverSide": true, //Feature control DataTables' server-side processing mode.
    "order": [], //Initial no order.

    // Load data for the table's content from an Ajax source
    "ajax": {
        "url": baseURL+"revenue/load_hourly_rate_dt",
        "type": "POST"
    },

    //Set column definition initialisation properties.
    "columnDefs": [{
        "targets": [-1], //last column
        "orderable": false, //set not orderable
    }, ],
});

}


/// Save button Start/////////////////
$("#btnsavehourlyrate").click(function () {

    if (validate('hourly_rate_c')) {

        var url = baseURL+"revenue/ajax_add_hourly_rate";

        var hourlyrateid = $('#hourlyrateid').val();

        var revenue_growth_input = $('#net_income_required').val();

        var param = {
            revenue_type : $('#revenue_type').val(),
            net_income_required : $('#net_income_required').val(),
            days_per_week : $('#days_per_week').val(),
            vacation_days : $('#vacation_days').val(),
            sickness_days : $('#sickness_days').val(),
            vacation_days : $('#vacation_days').val(),
            hours_per_day: $('#hours_per_day').val(),
            none_billable_hours_per_day: $('#none_billable_hours_per_day').val(),
            revenue_growth_input: $('#revenue_growth_input_hourly_rate').val(),
            // operating_costs : $('#operating_costs').val(),
            // vacation_days : $('#vacation_days').val(),
            // total_revenue_required: $('#total_revenue_required').val(),
            // working_days_per_year: $('#working_days_per_year').val(),
            // total_days_per_year: $('#total_days_per_year').val(),
            // billable_hour_per_day: $('#billable_hour_per_day').val(),
            // billable_hour_per_year: $('#billable_hour_per_year').val(),
            // hourly_rate: $('#hourly_rate').val(),
            hourlyrateid: hourlyrateid,
        }


        $.post(url, param,function(result) {

            //console.log("hi"+result);

            if(result === 'success'){


                if(hourlyrateid > 0){


                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record updated successfully',
                      })

                    reset_form('product_collapse');
                    $('#product_collapse').toggle();
                    $('#product_id').val('0');

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
    
                            reset_form('product_collapse');
                            get_user_currency();
                          
                        }else{
    
                            reset_form('product_collapse');
                            $('#product_collapse').toggle();
    
                        }
                
                      })
                    
                }

                // get total revenue requried

                load_hourly_rate_revenue();

                // end get total revenue required

                //load_hourly_rate_dt(base_url);

                //load_company_owners();

                // var img_src = base_url+"/template-assets/img/team/avatar.png";
                // $('#uploadownerpic_pre').attr('src',img_src);
                

                //success_message("Record Saved Successfully");
            }else{

                if(product_id > 0){
                    
                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record saved with no changes',
                      })
                      
                    reset_form('product_collapse');
                    $('#product_collapse').toggle();
                    $('#product_id').val('0');
                    
                }

            }

        },'html');

    }else{
        error_message("Please fill required fields");
    }

});




// Fetch Operating Cost
// var url = base_url+"/Revenue/revenue_stream_expense";

// var param = "";

// $.post(url, param,function(result1) {
//     //console.log(result1);
//     //console.log(result1.monthly_cost);
//     var url1 = base_url+"/user/get_user_currency";
//     var param1 = "";
//     var cur;

//     $.post(url1, param1,function(result) {
//         cur = result;
//         $('#operatingExpenseMonthly').html(cur+""+parseFloat(result1[0]['monthly_cost']).toLocaleString());
//         $('#operatingExpenseMonthlyYear1').html(cur+""+parseFloat(result1[0]['yearly_cost']).toLocaleString());
//         $('#operatingExpenseMonthlyYear2').html(cur+""+parseFloat(result1.year2).toLocaleString());
//         $('#operatingExpenseMonthlyYear3').html(cur+""+parseFloat(result1.year3).toLocaleString());
//     })

// },'json')


// Fetch Payroll Expense ROW 2

    var url = baseURL + "revenue/revenue_stream_payroll_expense";
    var param = "";

    var url1 = baseURL+"user/currency";
    var cur;
    $.ajax({
        url: url1,
        type: 'post',
        dataType: 'html',
        async: false,
        success: function(data) {
            result = data;
        } 
    });
    cur = result;



    $.post(url, param,function(result1) {
        
            if(result1[0].monthly_cost != null)
            {
                $('#payrollExpenseMonthly').html(cur+""+parseFloat(result1[0].monthly_cost).toLocaleString());
            }
            else
            {
                $('#payrollExpenseMonthly').html(cur+"0");
            }
            if(result1[0].yearly_cost != null)
            {
                $('#payrollExpenseyear1').html(cur+""+parseFloat(result1[0].yearly_cost).toLocaleString());
            }
            else
            {
                $('#payrollExpenseyear1').html(cur+"0");
            }
            if(result1.year2 != null)
            {
                $('#payrollExpenseyear2').html(cur+""+parseFloat(result1.year2).toLocaleString());
            }
            else
            {
                $('#payrollExpenseyear2').html(cur+"0");
            }
            if(result1.year2 != null)
            {
                $('#payrollExpenseyear3').html(cur+""+parseFloat(result1.year3).toLocaleString());
            }
            else
            {
                $('#payrollExpenseyear3').html(cur+"0");
            }
        

    },'json')



    load_hourly_rate_revenue(g = 0);

    function load_hourly_rate_revenue(g){
    
        var url = baseURL+"revenue/revenue_stream_total_revenue_required";
    
        var param = "";
            
        var url1 = baseURL+"/user/currency";
        var cur;
        $.ajax({
            url: url1,
            type: 'post',
            dataType: 'html',
            async: false,
            success: function(data) {
                result = data;
            } 
        });
        cur = result;

            $.post(url, param,function(result1) {
                //console.log(result1);
                //console.log(result1.monthly_cost);

                    if(result1.monthly_cost != null)
                    {
                        $('#operatingExpenseMonthly').html(cur+""+parseFloat(result1.monthly_cost).toLocaleString());
                    }
                    else
                    {
                        $('#operatingExpenseMonthly').html(cur+"0");
                    }
                    if(result1.yearly_cost != null)
                    {
                        $('#operatingExpenseMonthlyYear1').html(cur+""+parseFloat(result1.yearly_cost).toLocaleString());
                    }
                    else
                    {
                        $('#operatingExpenseMonthlyYear1').html(cur+"0");
                    }
                    if(result1.year2 != null)
                    {
                        $('#operatingExpenseMonthlyYear2').html(cur+""+parseFloat(result1.year2).toLocaleString());
                    }
                    else
                    {
                        $('#operatingExpenseMonthlyYear2').html(cur+"0");
                    }
                    if(result1.monthly_cost != null)
                    {
                        $('#operatingExpenseMonthly').html(cur+""+parseFloat(result1.monthly_cost).toLocaleString());
                    }
                    else
                    {
                        $('#operatingExpenseMonthly').html(cur+"0");
                    }
                    if(result1.yearly_cost != null)
                    {
                        $('#operatingExpenseMonthlyYear1').html(cur+""+parseFloat(result1.yearly_cost).toLocaleString());
                    }
                    else
                    {
                        $('#operatingExpenseMonthlyYear1').html(cur+"0");
                    }
                    if(result1.year3 != null)
                    {
                        $('#operatingExpenseMonthlyYear3').html(cur+""+parseFloat(result1.year3).toLocaleString());
                    }
                    else
                    {
                        $('#operatingExpenseMonthlyYear3').html(cur+"0");
                    }

                    var selected_growth_rate = $("#revenue_growth_input_hourly_rate_val").val();

                    if(g === 0){
                        $("#revenue_growth_text_hourly_rate").html(result1[0].growth_rate+"%");
                        $("#revenue_growth_input_hourly_rate").val(result1[0].growth_rate);
                        $("#revenue_growth_input_hourly_rate_val").val(result1[0].growth_rate);
                    }
                    
                    

                    $('#net_income_required').val(cur+""+parseFloat(result1[0].net_income_required).toLocaleString());
                    $('#days_per_week').val(parseFloat(result1[0].days_per_week).toLocaleString());
                    $('#vacation_days').val(parseFloat(result1[0].vacation_days).toLocaleString());
                    $('#sickness_days').val(parseFloat(result1[0].sickness_days).toLocaleString());
                    $('#vacation_days').val(parseFloat(result1[0].vacation_days).toLocaleString());
                    $('#hours_per_day').val(parseFloat(result1[0].hours_per_day).toLocaleString());
                    $('#none_billable_hours_per_day').val(parseFloat(result1[0].none_billable_hours_per_day).toLocaleString());
                    $('#hourlyrateid').val(result1[0].id);

            
                    $('#TrevenueRequriedMonthly').html(cur+""+parseFloat(result1[0].monthly_revenue).toLocaleString());
                    var TrevenueRequriedyear1 = result1[0].year_1;
                    $('#TrevenueRequriedyear1').html(cur+""+parseFloat(TrevenueRequriedyear1).toLocaleString());

                    
                    var growth_rate = selected_growth_rate / 100;
                    //var growth_rate = result1[0].growth_rate / 100;
                    var first = TrevenueRequriedyear1 * growth_rate;

                    //alert(first);

                    var TrevenueRequriedyear2 = parseInt(first) + parseInt(TrevenueRequriedyear1);

                    //alert(TrevenueRequriedyear2);

                    $('#TrevenueRequriedyear2').html(cur+""+parseFloat(TrevenueRequriedyear2).toLocaleString());

                    //Year 3 = Year 2 if $220,000  x slider value if 10% = $22,000 + Year 2 if $220,000
                    // So Year 3 = ($220,000 + $22,000) = $242,000 

                    var three = TrevenueRequriedyear2 * growth_rate;

                    var TrevenueRequriedyear3 = parseInt(three) + parseInt(TrevenueRequriedyear2);
                    $('#TrevenueRequriedyear3').html(cur+""+parseFloat(TrevenueRequriedyear3).toLocaleString());

                    // var TrevenueRequriedyear3 = parseInt(TrevenueRequriedyear2 * first) + parseInt(TrevenueRequriedyear2);
                    // $('#TrevenueRequriedyear3').html(cur+""+parseFloat(TrevenueRequriedyear3).toLocaleString());

                    // var operatingExpenseMonthly;
                    // var payrollExpenseMonthly;
                    // console.log(operatingExpenseMonthly);
                    // console.log(payrollExpenseMonthly);
    
                    var monthlytotal = parseInt(result1[0].monthly_revenue) + parseInt($('#operatingExpenseMonthly').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#payrollExpenseMonthly').html().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    var year1 = parseInt(result1[0].year_1) + parseInt($('#operatingExpenseMonthlyYear1').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#payrollExpenseyear1').html().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    var year2 = parseInt(TrevenueRequriedyear2) + parseInt($('#operatingExpenseMonthlyYear2').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#payrollExpenseyear2').html().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    var year3 = parseInt(TrevenueRequriedyear3) + parseInt($('#operatingExpenseMonthlyYear3').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#payrollExpenseyear3').html().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    $('#monthlytotal').html(cur+""+parseFloat(monthlytotal).toLocaleString());
                    $('#year1total').html(cur+""+parseFloat(year1).toLocaleString());
                    $('#year2total').html(cur+""+parseFloat(year2).toLocaleString());
                    $('#year3total').html(cur+""+parseFloat(year3).toLocaleString());

                    var many_days_per_year_1 = parseInt('52') * parseInt(result1[0].days_per_week);
                    var many_days = parseInt(many_days_per_year_1/12);
                    $('#many_days').html(parseFloat(many_days).toLocaleString());
                    $('#many_days_per_year_1').html(parseFloat(many_days_per_year_1).toLocaleString());
                    var many_days_per_year_2 = many_days_per_year_1;
                    $('#many_days_per_year_2').html(parseFloat(many_days_per_year_2).toLocaleString());
                    var many_days_per_year_3 = many_days_per_year_1;
                    $('#many_days_per_year_3').html(parseFloat(many_days_per_year_3).toLocaleString());

                    var many_vacations_year_1 = parseInt(many_days_per_year_1) - (parseInt(result1[0].vacation_days) + parseInt(result1[0].sickness_days));
                    var many_vacations = parseInt(many_vacations_year_1/12);
                    $('#many_vacations').html(parseFloat(many_vacations).toLocaleString());
                    $('#many_vacations_year_1').html(parseFloat(many_vacations_year_1).toLocaleString());
                    var many_vacations_year_2 = parseInt(many_days_per_year_2) - (parseInt(result1[0].vacation_days) + parseInt(result1[0].sickness_days));
                    $('#many_vacations_year_2').html(parseFloat(many_vacations_year_2).toLocaleString());
                    var many_vacations_year_3 = parseInt(many_days_per_year_3) - (parseInt(result1[0].vacation_days) + parseInt(result1[0].sickness_days));
                    $('#many_vacations_year_3').html(parseFloat(many_vacations_year_3).toLocaleString());
                    //alert(result1.hours_per_day);
                    var billable_hours_per_day_y1 = result1[0].hours_per_day - result1[0].none_billable_hours_per_day;
                    //alert(billable_hours_per_day_y1);
                    $('#billable_hours_per_day_y1').html(parseFloat(billable_hours_per_day_y1).toLocaleString());
                    $('#billable_hours_per_day').html(parseFloat(billable_hours_per_day_y1).toLocaleString());
                    var billable_hours_per_day_y2 = billable_hours_per_day_y1;
                    $('#billable_hours_per_day_y2').html(parseFloat(billable_hours_per_day_y2).toLocaleString());
                    var billable_hours_per_day_y3 = billable_hours_per_day_y1;
                    $('#billable_hours_per_day_y3').html(parseFloat(billable_hours_per_day_y3).toLocaleString());

                    var billable_hours_per_year_y1 = many_vacations_year_1 * billable_hours_per_day_y1;
                    $('#billable_hours_per_year_y1').html(parseFloat(billable_hours_per_year_y1).toLocaleString());
                    var billable_hours_per_year_y2 = many_vacations_year_2 * billable_hours_per_day_y2;
                    $('#billable_hours_per_year_y2').html(parseFloat(billable_hours_per_year_y2).toLocaleString());
                    var billable_hours_per_year_y3 = many_vacations_year_3 * billable_hours_per_day_y3;
                    $('#billable_hours_per_year_y3').html(parseFloat(billable_hours_per_year_y3).toLocaleString());
                    var billable_hours_per_year = parseInt(billable_hours_per_year_y1/12);
                    $('#billable_hours_per_year').html(parseFloat(billable_hours_per_year).toLocaleString());

                    var hourly_rate = parseFloat(monthlytotal) / parseInt(billable_hours_per_year);
                    $('#hourly_rate').html(cur+""+parseFloat(hourly_rate).toLocaleString());
                    var hourly_rate_year_1 = parseFloat(year1) / parseInt(billable_hours_per_year_y1);
                    $('#hourly_rate_year_1').html(cur+""+parseFloat(hourly_rate_year_1).toLocaleString());
                    var hourly_rate_year_2 = parseFloat(year2) / parseInt(billable_hours_per_year_y2);
                    $('#hourly_rate_year_2').html(cur+""+parseFloat(hourly_rate_year_2).toLocaleString());
                    var hourly_rate_year_3 = parseFloat(year3) / parseInt(billable_hours_per_year_y3);
                    $('#hourly_rate_year_3').html(cur+""+parseFloat(hourly_rate_year_3).toLocaleString());


                    //////////////////////////////////////////////////////////////////////////////////////
                    /// Hourly Rate and Revenue Required Chart Start/////////////////
                    

                    var barChartData = {
                        labels: [
                            "Year 1",
                            "Year 2",
                            "Year 3"
                        ],       
                        
                        datasets: [              
                            {
                            label: "Revenue Required",
                            data: [TrevenueRequriedyear1, TrevenueRequriedyear2, TrevenueRequriedyear3],

                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1,             
                            }
                                 
                           // {
                            //label: "Hourly Rate",
                            //backgroundColor:'rgba(54, 162, 235, 0.2)',
                            //borderColor: 'rgba(54, 162, 235, 1)',
                            //borderWidth: 1,
                            //data: [140000,60000,80000]
                            //data: [hourly_rate_year_1,hourly_rate_year_2,hourly_rate_year_3]
                           // }
                        ]
                    };


                    var chartOptions = {
                        responsive: true,
                        legend: {
                            position: "bottom"
                        },
                        title: {
                            display: true,
                            text: "Revenue Required"
                        },
                        scales: {
                            yAxes: [{
                            ticks: {
                            beginAtZero: true
                            }
                            }]
                        }
                        }
            
                        //window.onload = function() {
                        $('#canvas').remove();
                        $('#chartDiv').append('<canvas id="canvas"></canvas>');
                    
                        var ctx = document.getElementById("canvas").getContext("2d");
                        window.myChart = new Chart(ctx, {
                            type: "bar",
                            data: barChartData,
                            options: chartOptions
                        });
                        
                        //}; 

                    // end chart      
    
            },'json')
    }

    //////////////////////////////////////////////////////////////////////////////////////
    /// Growth Slider /////////////////

    $('#revenue_growth_input_hourly_rate').on("input change", function () {
        //alert('ddd');
        //load_hourly_rate_revenue();
        var pct = parseInt($("#revenue_growth_input_hourly_rate").val());
        $("#revenue_growth_text_hourly_rate").text(pct+"%");
        $("#revenue_growth_input_hourly_rate").val(pct);
        $("#revenue_growth_input_hourly_rate_val").val(pct);
        load_hourly_rate_revenue(g = 1);
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

        $(document).on('click', '#btncollapseshowHourlyRate', function(e) {

            $('#divcollapseshowHourlyRate').toggle();
        
        });







    //Product Revenue Stream
    $('#revenue_growth_input_product_revenue').on("input change", function () {
        var pct = parseInt($("#revenue_growth_input_product_revenue").val());
        $("#revenue_growth_text_product_revenue").text(pct+"%");
        $("#revenue_growth_input_product_revenue").val(pct);
        $("#revenue_growth_input_product_revenue_val").val(pct);
    });