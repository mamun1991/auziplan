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
   

$("#btnsaveonetimecost").click(function () {

    if (validate('one_time-form')) {

        var url = baseURL + "opening-cost/ajax-add";

        var param = {

            one_time_cost_type : "one_time_cost_type",
            one_time_cost_cat : $('#one_time_cost_cat').val(),
            one_time_cost_description : $('#one_time_cost_description').val(),
            amount_paid : $('#amount_paid').val(),
            openingcost_id: $('#openingcost_id').val()
        }

        var openingcost_id = $('#openingcost_id').val();


        $.post(url, param,function(result) {

            //console.log("hi"+result);

            if(result === 'success'){


                if(openingcost_id > 0){


                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record updated successfully',
                      })

                    reset_form('one_time-form');
                    $('.one_time-form_collapse').toggle();
                    $('#openingcost_id').val('0');

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
    
                            reset_form('one_time-form');
                            get_user_currency();
                          
                        }else{
    
                            reset_form('one_time-form');
                            $('.one_time-form_collapse').toggle();
    
                        }
                
                      })
                    
                }

                load_onetime_cost_dt(baseURL);

                //load_company_owners();

                // var img_src = baseURL + "/template-assets/img/team/avatar.png";
                // $('#uploadownerpic_pre').attr('src',img_src);
                

                //success_message("Record Saved Successfully");
            }else{

                if(openingcost_id > 0){
                    
                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record saved with no changes',
                      })
                      
                      reset_form('one_time-form');
                      $('.one_time-form_collapse').toggle();
                      $('#openingcost_id').val('0');
                    
                }

            }

        },'html');

    }else{
        error_message("Please fill required fields");
    }

});

load_onetime_cost_dt(baseURL);


function load_onetime_cost_dt(baseURL){

    if ( $.fn.dataTable.isDataTable( '#onetimecostsDT' ) ) {
        $( '#onetimecostsDT' ).DataTable().destroy();
    }
//datatables
var table_one;
table_one = $('#onetimecostsDT').DataTable({
    responsive: true,
    "processing": true, //Feature control the processing indicator.
    "serverSide": true, //Feature control DataTables' server-side processing mode.
    "order": [], //Initial no order.

    // Load data for the table's content from an Ajax source
    "ajax": {
        "url": baseURL+ "opening-cost/ajax-list-onetime-cost",
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
        var numFormat = $.fn.dataTable.render.number('\,', '.').display;
        var response = this.api().ajax.json();
        // Remove the formatting to get integer data for summation
        var intVal = function(i) {
            return typeof i === 'string' ?
                i.replace(/[\$,\€,\₹,\£]/g, '') * 1 :
                typeof i === 'number' ?
                i : 0;
        };

        // Total over all pages
        total = api
            .column(2)
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        // Total over this page
        pageTotal = api
            .column(2, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        // Update footer
        $(api.column(2).footer()).html(
            response['currency'] + numFormat(pageTotal)
        );

        pageTotal = api
            .column(4, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);


        pageTotal = api
            .column(3, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        // Update footer
        $(api.column(3).footer()).html(
            response['currency'] + numFormat(pageTotal)
        );
    }
});

}

function load_onetime_cost_dt_OLD(baseURL){

    //alert(controller);


    var cur2;

    var url = baseURL + "user/currency";

    var param = "";

    $.post(url, param,function(result) {

        cur2  = result;

        //alert(cur2);

    });

    if ( $.fn.dataTable.isDataTable( '#onetimecostsDT' ) ) {
        $( '#onetimecostsDT' ).DataTable().destroy();
    }

    var table =  $('#onetimecostsDT').DataTable( {
        "processing": true,
        "ajax": baseURL + "opening-cost/onetime_cost_dt",
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
                ''+cur2+' '+rpageTotal.toLocaleString() +''
                //''+rpageTotal +' ( '+ rtotal +' total)'
            );
        }
        // end grand total


    });
}


$(document).on('click', '#one_time-form_toogle', function(e) {

    $('.one_time-form_collapse').toggle();

});


$(document).on('click', '#btncancelonetimecost', function(e) {


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

            reset_form('one_time-form');
            $('.one_time-form_collapse').toggle();
        }

      })

});


$(document).on('click', '.editopeningcost', function(e) {

    $('.one_time-form_collapse').show();

    var edit_id = $(this).attr('id');

    $('#openingcost_id').val(edit_id);

    //alert(edit_id);

    $.ajax({
        url: baseURL + "opening-cost/ajax-edit/" + edit_id,
        type: "GET",
        dataType: "JSON",
        success: function(data) {
            var cur = window.currency_icon;

            $('#one_time_cost_cat').val(data.one_time_cost);
            $('#one_time_cost_description').val(data.description);
            $('#amount_paid').val(cur+""+parseFloat(data.amount_paid).toLocaleString());
           
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error get data from ajax');
        }
    });

});


$(document).on('click', '.removeonetimecost', function(e) {

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
                url: baseURL + "opening-cost/ajax-delete/" + edit_id,
                type: "DELETE",
                dataType: "html",
                success: function(data) {
                    if(data === 'success'){
                        load_onetime_cost_dt(baseURL);
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


$(document).on('click', '.removeplanequipment', function(e) {

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
                url: baseURL + "opening-cost/ajax-delete/" + edit_id,
                type: "DELETE",
                dataType: "html",
                success: function(data) {
                    if(data === 'success'){
                        load_plan_equipment_dt(baseURL);
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

$(document).on('click', '.removelandbuilding', function(e) {
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
                url: baseURL + "opening-cost/ajax-delete/" + edit_id,
                type: "DELETE",
                dataType: "html",
                success: function(data) {
                    if(data === 'success'){

                        load_land_building_dt(baseURL);

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

            var amount_paid = $('#amount_paid').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

            console.log(amount_paid);
            if(amount_paid !== "" && amount_paid !== "NaN"){
                $('#amount_paid').val(result + '' + parseInt(amount_paid).toLocaleString());
            }else{
                $('#amount_paid').val(result);
            }
        }
    })

}

  load_plan_equipment_dt(baseURL);

  function load_plan_equipment_dt(baseURL){
  
    if ( $.fn.dataTable.isDataTable( '#planequipmentDT' ) ) {
        $( '#planequipmentDT' ).DataTable().destroy();
    }
    //datatables for One time cost Plant
    table_one_plant_equipment = $('#planequipmentDT').DataTable({
        responsive: true,
        "processing": true, //Feature control the processing indicator.
        "serverSide": true, //Feature control DataTables' server-side processing mode.
        "order": [], //Initial no order.

        // Load data for the table's content from an Ajax source
        "ajax": {
            "url": baseURL + "opening-cost/ajax-list-plant-equipment",
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
            var numFormat = $.fn.dataTable.render.number('\,', '.').display;
            var response = this.api().ajax.json();
            // Remove the formatting to get integer data for summation
            var intVal = function(i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,\€,\₹,\£]/g, '') * 1 :
                    typeof i === 'number' ?
                    i : 0;
            };

            // Total over all pages
            total = api
                .column(2)
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Total over this page
            aquisitionCost = api
                .column(2, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(2).footer()).html(
                response['currency'] + numFormat(aquisitionCost)
            );

            pageTotal = api
                .column(3, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(3).footer()).html(
                response['currency'] + numFormat(pageTotal)
            );

            gstTotal = api
                .column(4, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            // Update footer
            $(api.column(4).footer()).html(
                response['currency'] + numFormat(gstTotal)
            );

            salvageTotal = api
                .column(7, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            // Update footer
            $(api.column(7).footer()).html(
                response['currency'] + numFormat(salvageTotal)
            );

            monthlyTotal = api
                .column(8, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            // Update footer
            $(api.column(8).footer()).html(
                response['currency'] + numFormat(monthlyTotal)
            );

            year1Total = api
                .column(9, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            // Update footer
            $(api.column(9).footer()).html(
                response['currency'] + numFormat(year1Total)
            );

            year2Total = api
                .column(10, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            // Update footer
            $(api.column(10).footer()).html(
                response['currency'] + numFormat(year2Total)
            );

            year3Total = api
                .column(11, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            // Update footer
            $(api.column(11).footer()).html(
                response['currency'] + numFormat(year3Total)
            );

            pageTotal = api
                .column(12, {
                    page: 'current'
                })
                .data()
                .reduce(function(a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

        }
    });
  }

  $("#btnsaveplantequipment").click(function () {

    if (validate('plant_equipment_collapse')) {

        var url = baseURL + "opening-cost/ajax-add";

        var plantequipment_id = $('#plantequipment_id').val();

        var param = {

            one_time_cost_type : "Plant_Equipment",
            asset_description : $('#asset_description').val(),
            aquistion_cost : $('#aquistion_cost').val(),
            qty : $('#plantequip_qty').val(),
            depreciation_method: $('#depreciation_method').val(),
            useful_life: $('#useful_life').val(),
            salvage_value: $('#salvage_value').val(),
            plantequipment_id: plantequipment_id,
        }


        $.post(url, param,function(result) {

            //console.log("hi"+result);

            if(result === 'success'){


                if(plantequipment_id > 0){


                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record updated successfully',
                      })

                    reset_form('plant_equipment_collapse');
                    $('#plant_equipment_collapse').toggle();
                    $('#plantequipment_id').val('0');

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
    
                            reset_form('plant_equipment_collapse');
                            get_user_currency();
                          
                        }else{
    
                            reset_form('plant_equipment_collapse');
                            $('#plant_equipment_collapse').toggle();
    
                        }
                
                      })
                    
                }

                load_plan_equipment_dt(baseURL);

                //load_company_owners();

                // var img_src = baseURL + "/template-assets/img/team/avatar.png";
                // $('#uploadownerpic_pre').attr('src',img_src);
                

                //success_message("Record Saved Successfully");
            }else{

                if(plantequipment_id > 0){
                    
                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record saved with no changes',
                      })
                      
                    reset_form('plant_equipment_collapse');
                    $('#plant_equipment_collapse').toggle();
                    $('#plantequipment_id').val('0');
                    
                }

            }

        },'html');

    }else{
        error_message("Please fill required fields");
    }

});


$(document).on('click', '#plant_equipment_toogle', function(e) {

    $('#plant_equipment_collapse').toggle();

});


$(document).on('click', '#btncanceplantequipment', function(e) {

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

            reset_form('plant_equipment_collapse');
            $('#plant_equipment_collapse').toggle();
        }

      })
});


load_land_building_dt(baseURL);

function load_land_building_dt(baseURL){

  if ( $.fn.dataTable.isDataTable( '#landbuildingDT' ) ) {
      $( '#landbuildingDT' ).DataTable().destroy();
  }


  //datatables for One time cost land and buildings
  table_one_land_buildings = $('#landbuildingDT').DataTable({
    responsive: true,
    "processing": true, //Feature control the processing indicator.
    "serverSide": true, //Feature control DataTables' server-side processing mode.
    "order": [], //Initial no order.

    // Load data for the table's content from an Ajax source
    "ajax": {
        "url": baseURL +"opening-cost/ajax-list-land-buildings",
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
        var numFormat = $.fn.dataTable.render.number('\,', '.').display;
        var response = this.api().ajax.json();
        // Remove the formatting to get integer data for summation
        var intVal = function(i) {
            return typeof i === 'string' ?
                i.replace(/[\$,\€,\₹,\£]/g, '') * 1 :
                typeof i === 'number' ?
                i : 0;
        };

        // Total over this page
        purchaseCost = api
            .column(2, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        // Update footer
        $(api.column(2).footer()).html(
            response['currency'] + numFormat(purchaseCost)
        );





        landValue = api
            .column(3, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        // Update footer
        $(api.column(3).footer()).html(
            response['currency'] + numFormat(landValue)
        );





        building_depreciable_basis = api
            .column(4, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        // Update footer
        $(api.column(4).footer()).html(
            response['currency'] + numFormat(building_depreciable_basis)
        );



        gstTotal = api
            .column(5, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        // Update footer
        $(api.column(5).footer()).html(
            response['currency'] + numFormat(gstTotal)
        );



        value_depreciate = api
            .column(6, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        // Update footer
        $(api.column(6).footer()).html(
            response['currency'] + numFormat(value_depreciate)
        );




        monthlyTotal = api
            .column(8, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        // Update footer
        $(api.column(8).footer()).html(
            response['currency'] + numFormat(monthlyTotal)
        );



        year1Total = api
            .column(9, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        // Update footer
        $(api.column(9).footer()).html(
            response['currency'] + numFormat(year1Total)
        );

        year2Total = api
            .column(10, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        // Update footer
        $(api.column(10).footer()).html(
            response['currency'] + numFormat(year2Total)
        );

        year3Total = api
            .column(11, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        // Update footer
        $(api.column(11).footer()).html(
            response['currency'] + numFormat(year3Total)
        );

        pageTotal = api
            .column(12, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

    }
});

}

$("#btnsavelandbuilding").click(function () {

    if (validate('land_building_collapse')) {

        var url = baseURL + "opening-cost/ajax-add";

        var landbuilding_id = $('#landbuilding_id').val();

        var param = {

            one_time_cost_type : "Land_Buildings",
            acquisition_date : $('#acquisition_date').val(),
            property_description : $('#property_description').val(),
            purchase_price : $('#purchase_price').val(),
            land_value: $('#land_value').val(),
            estimated_useful_life: $('#estimated_useful_life').val(),
            landbuilding_id: landbuilding_id,
        }

        


        $.post(url, param,function(result) {

            //console.log("hi"+result);

            if(result === 'success'){


                if(landbuilding_id > 0){


                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record updated successfully',
                      })

                    reset_form('land_building_collapse');
                    $('#land_building_collapse').toggle();
                    $('#openingcost_id').val('0');

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
    
                            reset_form('land_building_collapse');
                            get_user_currency();
                          
                        }else{
    
                            reset_form('land_building_collapse');
                            $('#land_building_collapse').toggle();
    
                        }
                
                      })
                    
                }

                load_land_building_dt(baseURL);
            }else{

                if(landbuilding_id > 0){
                    
                    Swal.fire({
                        icon: 'Success',
                        title: 'Success',
                        text: 'Record saved with no changes',
                      })
                      
                      reset_form('land_building_collapse');
                      $('#land_building_collapse').toggle();
                      $('#openingcost_id').val('0');
                    
                }

            }

        },'html');

    }else{
        error_message("Please fill required fields");
    }

});


$(document).on('click', '#land_building_toogle', function(e) {

    $('#land_building_collapse').toggle();

});


$(document).on('click', '#btncancellandbuilding', function(e) {

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

            reset_form('land_building_collapse');
            $('#land_building_collapse').toggle();
        }

      })
});


$(document).on('click', '.editplanequipment', function(e) {

    $('#plant_equipment_collapse').show();

    var edit_id = $(this).attr('id');

    $('#plantequipment_id').val(edit_id);

    //alert(edit_id);

    $.ajax({
        url: baseURL + "opening-cost/ajax-edit/" + edit_id,
        type: "GET",
        dataType: "JSON",
        success: function(data) {
            var cur = currency_icon;
            $('#asset_description').val(data.description);
            $('#aquistion_cost').val(cur+""+parseFloat(data.amount_paid).toLocaleString());
            $('#plantequip_qty').val(data.qty);
            $('#depreciation_method').val(data.method);
            $('#salvage_value').val(cur+""+parseFloat(data.salvage).toLocaleString());
            $('#useful_life').val(data.year);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error get data from ajax');
        }
    });

});


$(document).on('click', '.editlandbuilding', function(e) {

    $('#land_building_collapse').show();

    var edit_id = $(this).attr('id');

    $('#landbuilding_id').val(edit_id);

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
        url: baseURL + "opening-cost/ajax-edit/" + edit_id,
        type: "GET",
        dataType: "JSON",
        success: function(data) {

            $('#acquisition_date').val(data.purchase_date);
            $('#property_description').val(data.description);
            $('#purchase_price').val(cur+""+parseFloat(data.amount_paid).toLocaleString());
            $('#land_value').val(cur+""+parseFloat(data.land_value).toLocaleString());
            $('#estimated_useful_life').val(data.year);

               
           
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error get data from ajax');
        }
    });

});



    /* ============================================================================
      MV-Motor Vehicle  - Starts





function checkForZero(field) {
        if (field.value == 0 || field.value.length == 0) {
            alert ("This field can't be 0!");
            field.focus(); }
        else
        calculatePayment(field.form);
    }

    function cmdCalc_Click(form) {
        if (form.cprice.value == 0 || form.cprice.value.length == 0) {
            alert ("The Price field can't be 0!");
            form.cprice.focus(); }
        else if (form.cir.value == 0 || form.cir.value.length == 0) {
            alert ("The Interest Rate field can't be 0!");
            form.cir.focus(); }
        else if (form.cterm.value == 0 || form.cterm.value.length == 0) {
            alert ("The Term field can't be 0!");
            form.cterm.focus(); }
        else
            calculatePayment(form);
    }

    function calculatePayment(form) {
        cfinamt = form.cprice.value - form.cdp.value - form.ctv.value; 
        cintRate = (form.cir.value/100) / 12;
        cmonths = form.cterm.value;
        form.cpmt.value = Math.floor((cfinamt*cintRate)/(1-Math.pow(1+cintRate,(-1*cmonths)))*100)/100;
    form.cfinance.value = cfinamt;
    form.cpayments.value = cmonths;
    }

      ============================================================================== */


    function checkForZero(field) {
        if (field.value == 0 || field.value.length == 0) {
            //alert ("This field can't be 0!");
            field.focus(); }
        else
        calculatePayment(field.form);
    }

    function cmdCalc_Click(form) {
        if (form.cprice.value == 0 || form.cprice.value.length == 0) {
            alert ("The Price field can't be 0!");
            form.cprice.focus(); }
        else if (form.cir.value == 0 || form.cir.value.length == 0) {
            alert ("The Interest Rate field can't be 0!");
            form.cir.focus(); }
        else if (form.cterm.value == 0 || form.cterm.value.length == 0) {
            alert ("The Term field can't be 0!");
            form.cterm.focus(); }
        else
            calculatePayment(form);
    }

        function calculatePayment(form) {

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

            // Amount Financed
                cfinamt = form.cprice.value.replace(/\,|\$|\€|\₹|\£|\%/g, '') - form.cdp.value.replace(/\,|\$|\€|\₹|\£|\%/g, '') - form.ctv.value.replace(/\,|\$|\€|\₹|\£|\%/g, '');
                form.cfinance.value = cur+""+parseFloat(cfinamt).toLocaleString();

                // Total Payments
                var cmonths = form.cterm.value;
                form.cpayments.value = cmonths;
 
                // Monthly Payments
                cintRate = form.cir.value.replace(/\,|\$|\€|\₹|\£|\%/g, '')/100 / 12;


                var monthly_payments = ((cfinamt*cintRate) + cfinamt)/ cmonths;
                var monthly_payments = Math.floor((cfinamt*cintRate)/(1-Math.pow(1+cintRate,(-1*cmonths)))*100)/100;
                if(cmonths !== ""){
                      // I have made this change please check
                   form.cpmt.value = Math.floor((cfinamt*cintRate)/(1-Math.pow(1+cintRate,(-1*cmonths)))*100)/100;
                }

                // Monthy Interest
                var cir = form.cir.value.replace(/\,|\$|\€|\₹|\£|\%/g, '') / 100;
                var monthly_interest = (form.cfinance.value.replace(/\,|\$|\€|\₹|\£|\%/g, '') * cir)/cmonths; 
                if(cmonths !== ""){
                    form.cint.value = monthly_interest;
                }
                //form.cint.value = monthly_interest;
            

        }
  


      
            $('#btninfo_s3').on("click", function () {
            $('.tab-active-caret li a.active').removeClass('active');
            $("#crm-s3-tab").addClass("active");
        });

        $(document).on('click', '#motor_vehicle_toogle', function(e) {

            $('#motor_vehicle_collapse').toggle();
        
        });



    $("#btnmotor").click(function () {

        if (validate('motor_vehicle_collapse')) {
    
            var url = baseURL + "opening-cost/ajax-add-motors";
    
            var motor_id = $('#motor_id').val();
    
            var param = {
    
                acquisition_date : $('#acquisition_date').val(),
                mv_description : $('#mv_description').val(),
                cprice : $('#cprice').val(),
                cdp : $('#cdp').val(),
                ctv: $('#ctv').val(),
                cfinance: $('#cfinance').val(),
                cir: $('#cir').val(),
                cterm: $('#cterm').val(),
                cpayments: $('#cpayments').val(),
                cpmt: $('#cpmt').val(),
                cint: $('#cint').val(),
                motor_id: motor_id,
            }
    
            
    
    
            $.post(url, param,function(result) {
    
                //console.log("hi"+result);
    
                if(result === 'success'){
    
    
                    if(motor_id > 0){
    
    
                        Swal.fire({
                            icon: 'Success',
                            title: 'Success',
                            text: 'Record updated successfully',
                            })
    
                        reset_form('motor_vehicle_collapse');
                        $('#motor_vehicle_collapse').toggle();
                        $('#motor_id').val('0');
    
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
        
                                reset_form('motor_vehicle_collapse');
                                get_user_currency();
                                
                            }else{
        
                                reset_form('motor_vehicle_collapse');
                                $('#motor_vehicle_collapse').toggle();
        
                            }
                    
                            })
                        
                    }
    
                    load_motor_vehicle_dt(baseURL);
                }
    
            },'html');
    
        }else{
            error_message("Please fill required fields");
        }
    
    });


    $(document).on('click', '.editmotor', function(e) {

        $('#motor_vehicle_collapse').show();
    
        var edit_id = $(this).attr('id');
    
        $('#motor_id').val(edit_id);
    
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
            url: baseURL + "opening-cost/motor-edit/" + edit_id,
            type: "GET",
            dataType: "JSON",
            success: function(data) {
    
                

                    $('#acquisition_date').val(data.acquisition_date);
                    $('#mv_description').val(data.mv_description);
                    $('#cprice').val(cur+""+parseFloat(data.cprice).toLocaleString());
                    $('#cdp').val(cur+""+parseFloat(data.cdp).toLocaleString());
                    $('#ctv').val(cur+""+parseFloat(data.ctv).toLocaleString());
                    $('#cfinance').val(cur+""+parseFloat(data.cfinance).toLocaleString());
                    $('#cir').val(parseFloat(data.cir).toLocaleString()+"%");
                    $('#cterm').val(data.cterm);
                    $('#cpayments').val(parseFloat(data.cpayments).toLocaleString());
                    $('#cpmt').val(cur+""+parseFloat(data.cpmt).toLocaleString());
                    $('#cint').val(cur+""+parseFloat(data.cint).toLocaleString());   
               
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Error get data from ajax');
            }
        });
    
    });

    load_motor_vehicle_dt(baseURL);

function load_motor_vehicle_dt(baseURL){

  if ( $.fn.dataTable.isDataTable( '#motorvehicleDT' ) ) {
      $( '#motorvehicleDT' ).DataTable().destroy();
  }


  //datatables for One time cost land and buildings
  table_one_land_buildings = $('#motorvehicleDT').DataTable({
    responsive: true,
    "processing": true, //Feature control the processing indicator.
    "serverSide": true, //Feature control DataTables' server-side processing mode.
    "order": [], //Initial no order.

    // Load data for the table's content from an Ajax source
    "ajax": {
        "url": baseURL + "opening-cost/ajax-list-motor-vehicle",
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
        var numFormat = $.fn.dataTable.render.number('\,', '.').display;
        var response = this.api().ajax.json();
        // Remove the formatting to get integer data for summation
        var intVal = function(i) {
            return typeof i === 'string' ?
                i.replace(/[\$,\€,\₹,\£]/g, '') * 1 :
                typeof i === 'number' ?
                i : 0;
        };

        // Total over this page
        purchaseprice = api
            .column(2, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        // Update footer
        $(api.column(2).footer()).html(
            response['currency'] + numFormat(purchaseprice)
        );


        downpayment = api
            .column(3, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);

        // Update footer
        $(api.column(3).footer()).html(
            response['currency'] + numFormat(downpayment)
        );


        tradeinvalue = api
            .column(4, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        // Update footer
        $(api.column(4).footer()).html(
            response['currency'] + numFormat(tradeinvalue)
        );



        amountfinanced = api
            .column(5, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        // Update footer
        $(api.column(5).footer()).html(
            response['currency'] + numFormat(amountfinanced)
        );

        monthlypayment = api
            .column(9, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        // Update footer
        $(api.column(9).footer()).html(
            response['currency'] + numFormat(monthlypayment)
        );



        year1 = api
            .column(10, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        // Update footer
        $(api.column(10).footer()).html(
            response['currency'] + numFormat(year1)
        );


        year2 = api
            .column(11, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        // Update footer
        $(api.column(11).footer()).html(
            response['currency'] + numFormat(year2)
        );


        year3 = api
            .column(12, {
                page: 'current'
            })
            .data()
            .reduce(function(a, b) {
                return intVal(a) + intVal(b);
            }, 0);
        // Update footer
        $(api.column(12).footer()).html(
            response['currency'] + numFormat(year3)
        );

    }

    // end total col
});

}


$(document).on('click', '.removemotor', function(e) {

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
            $.ajax({
                url: baseURL + "opening-cost/delete-motor/" + edit_id,
                type: "DELETE",
                dataType: "html",
                success: function(data) {
                    if(data === 'success'){

                        load_motor_vehicle_dt(baseURL);

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


$(document).on('click', '#btncancelmotor', function(e) {


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

            reset_form('motor_vehicle_collapse');
            $('#motor_vehicle_collapse').toggle();
        }

      })

});


