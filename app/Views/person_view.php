
   <div class="col-lg-12 col-md-12 col-sm-12" id="expense_table" style='margin-top: 16px;'>
        <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
            <div class="table-responsive scrollbar">
                <div class="fixTableHead">
                <table class="table  table-striped fs--1 mb-0">
                <thead class="bg-200 text-900">
                    <tr>
                        <th class="sort" data-sort="image">Photo ID</th>
                        <th class="sort" data-sort="name">Name</th>
                        <th class="sort" data-sort="amount">Amount</th>
                        <th class="sort" data-sort="share_qty">Number Of Shares</th>
                        <th class="sort" data-sort="price_per_share">Price Per Share</th>    
                        <th class="sort" data-sort="netProfit">Net Profit</th>         
                        <th class="sort" data-sort="directerRole"> Role</th>

                        <th >Action</th>
                    </tr>
                </thead>
                <tbody class="list">
                    <tr>
                        <td class="image"></td>
                        <td class="name"></td>
                        <td class="amount"></td>
                        <td class="share_qty"></td>
                        <td class="price_per_share"></td>
                        <td class="netProfit"></td>
                        <td class="payment_frequency"></td>
                        <td class="action"></td>
                    </tr>
                </tbody>
            </table>
                       
        </div>
    </div>
        <div class="d-flex justify-content-center mt-3 mb-2">
            <button class="btn btn-sm btn-falcon-default me-1" type="button" title="Previous" data-list-pagination="prev"><span class="fas fa-chevron-left"></span></button>
            <ul class="pagination mb-0"></ul>
            <button class="btn btn-sm btn-falcon-default ms-1" type="button" title="Next" data-list-pagination="next"><span class="fas fa-chevron-right"> </span></button>
        </div>
    </div>
</div>





<!--

Old Table 

<div class="col-md-12" id="expense_table">
    
    <div class="table-responsive">
        <table id="table" class="table">
            <thead class="table-light">
                <tr>
                  <th>ID</th>
                  <th>Purpose</th>
                  <th>Description</th>
                  <th>Weekly Cost</th>
                  <th>Monthly Cost</th>
                  <th>Quarterly Cost</th>
                  <th>Yearly Cost</th>
                  <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
            <tfoot class="table-light">
                <tr>
                  <th></th>
                  <th></th>
                  <th style="text-align: right;">Total</th>                     
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
            </tfoot>
        </table>
    </div>
</div>


-->






<script type="text/javascript">
    var save_method; //for save method string
    var table;

    $(document).ready(function() {
        //datatables
        table = $('#table').DataTable({
            "processing": true, //Feature control the processing indicator.
            "serverSide": true, //Feature control DataTables' server-side processing mode.
            "order": [], //Initial no order.

            // Load data for the table's content from an Ajax source
            "ajax": {
                "url": "<?php echo site_url('expenses/ajax-list') ?>",
                "type": "POST"
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

                var numFormat = $.fn.dataTable.render.number(0, '.', '\,').display;

                // Remove the formatting to get integer data for summation
                var intVal = function(i) {
                    return typeof i === 'string' ?
                        i.replace(/[\$,\€,\₹,\£]/g, '') * 1 :
                        typeof i === 'number' ?
                        i : 0;
                };

                // Total over this page
                totalweekly = api
                    .column(3, {
                        page: 'current'
                    })
                    .data()
                    .reduce(function(a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

                // Update footer
                $(api.column(3).footer()).html(
                    res['currency'] + number_format(totalweekly)
                );

                totalmonthly = api
                    .column(4, {
                        page: 'current'
                    })
                    .data()
                    .reduce(function(a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

                // Update footer
                $(api.column(4).footer()).html(
                    res['currency'] + number_format(totalmonthly)
                );

                totalquaterly = api
                    .column(5, {
                        page: 'current'
                    })
                    .data()
                    .reduce(function(a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

                // Update footer
                $(api.column(5).footer()).html(
                    res['currency'] + number_format(totalquaterly)
                );

                totalyearly = api
                    .column(6, {
                        page: 'current'
                    })
                    .data()
                    .reduce(function(a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

                // Update footer
                $(api.column(6).footer()).html(
                    res['currency'] + number_format(totalyearly)
                );

            },
            "aoColumnDefs": [{
                "aTargets": [7],
                "mData": null,
                "mRender": function(data, type, full) {
                    return '<a id="edit" style=" margin-right: 8px; " class="btn btn-outline-primary" href="javascript:void(0)" title="Edit" onclick="edit_expense(' + full[0] + ')"><i class="fa fa-pencil"></i></a><a id="delete" style="" class="btn btn-outline-danger" href="javascript:void(0)" title="Delete" onclick="delete_confirmation_expense(' + full[0] + ')"><i class="fa fa-trash"></i></a>';
                }
            }]
        });

        $("#form").validate({
            invalidHandler: function(event, validator) {
                var errors = validator.numberOfInvalids();
                if (errors)
                    $('.nav a[href="#' + jQuery(validator.errorList[0].element).closest(".tab-pane").attr('id') + '"]').tab('show')
            },
            ignore: "",
            rules: {
                description: {
                    required: true
                },
                weekly_cost: {
                    required: true,
                    // number: true,

                },
                monthly_cost: {
                    required: true,
                    // number: true,

                },
                quarterly_cost: {
                    required: true,
                    // number: true,

                },
                yearly_cost: {
                    required: true,
                    // number: true,

                },
                num_month: {
                    required: true,
                    number: true,
                    max: 12

                }
            }
        });

        $("#btnSave").click(function(e) {
            e.preventDefault();
            if ($("#form").valid()) {
                save();
            }
        });

        //datepicker
        $('.datepicker').datepicker({
            autoclose: true,
            format: "yyyy-mm-dd",
            todayHighlight: true,
            orientation: "top auto",
            todayBtn: true,
            todayHighlight: true,
        });

    });

    function delete_confirmation_person(id) {
        /*if (confirm("Do you want insert Bill of Materials ??") == true) {

            $('.nav a[href="#add_menu1"]').tab('show');
        }else{

            $('#markup_on_cost').focus();
        }*/
        $('#modalConfirmYesNo').modal('show');

        $("#lblTitleConfirmYesNo").html("User Confirmation");
        $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this expense ??");

        $("#btnYesConfirmYesNo").off('click').click(function() {

            delete_person(id)

            $('#modalConfirmYesNo').modal('hide');
        });
        $("#btnNoConfirmYesNo").off('click').click(function() {
            $('#modalConfirmYesNo').modal('hide');
        });
    }

    function add_expenses() {

        save_method = 'add';
        $("label.error").remove();
        $('#form_expenses')[0].reset(); // reset form on modal
        $('.form-group').removeClass('has-error'); // clear error class
        $('.help-block').empty(); // clear error string
        //$('#modal_form').modal('show'); // show bootstrap modal
        //$('.modal-title').text('Add Expense'); // Set Title to Bootstrap modal title
    }


    function edit_person(id) {
        save_method = 'update';
        $("label.error").remove();
        $('#form_expenses')[0].reset(); // reset form on modals
        $('.form-group').removeClass('has-error'); // clear error class
        $('.help-block').empty(); // clear error string

        //Ajax Load data from ajax
        $.ajax({
            url: "<?php echo site_url('person/ajax-edit/') ?>" + id,
            type: "GET",
            dataType: "JSON",
            success: function(data) {

                $('[name="id"]').val(data.id);
                $('[name="cost_item_description"]').val(data.cost_description);
                $('[name="no_months"]').val(data.months);
                $('[name="monthly_cost"]').val(data.monthly_cost);
                $('#modal_form').modal('show'); // show bootstrap modal when complete loaded
                $('.modal-title').text('Edit Monthly Expense'); // Set title to Bootstrap modal title

            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Error get data from ajax');
            }
        });
    }




    function reload_table1() {
        table.ajax.reload(function(json) {
            reload_summary();
        });

    }





    function edit_expense(e_id) {

        var id = e_id;
        save_method = 'update';
        $("label.error").remove();
        //$('#form')[0].reset(); // reset form on modals
        $('.form-group').removeClass('has-error'); // clear error class
        $('.help-block').empty(); // clear error string

        //Ajax Load data from ajax
        $.ajax({
            url: "<?php echo site_url(); ?>expenses/ajax-edit/" + id,
            type: "GET",
            dataType: "JSON",
            success: function(data) {
                $('#expenseForm').collapse('show')

                $('[name="id"]').val(data.id);
                $('[name="description"]').val(data.description);
                $('[name="weekly_cost"]').val(number_format(data.weekly_cost, 0, '.', ','));
                $('[name="monthly_cost"]').val(number_format(data.monthly_cost, 0, '.', ','));
                $('[name="quarterly_cost"]').val(number_format(data.quarterly_cost, 0, '.', ','));
                $('[name="yearly_cost"]').val(number_format(data.yearly_cost, 0, '.', ','));
                $('[name="purpose"]').val(data.purpose);
                $('[name="num_month"]').val(data.num_month);
                //$('#modal_form').modal('show'); // show bootstrap modal when complete loaded
                //$('.modal-title').text('Edit Expense'); // Set title to Bootstrap modal title

                calculateMonth();
            },
            error: function(jqXHR, textStatus, errorThrown) {

                throw (errorThrown);
            }
        });
    } /* end function edit() */

    function delete_confirmation_expense(id) {
        /*if (confirm("Do you want insert Bill of Materials ??") == true) {

            $('.nav a[href="#add_menu1"]').tab('show');
        }else{

            $('#markup_on_cost').focus();
        }*/
        $('#modalConfirmYesNo').modal('show');

        $("#lblTitleConfirmYesNo").html("User Confirmation");
        $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this expanse?");

        $("#btnYesConfirmYesNo").off('click').click(function() {

            delete_expense(id)

            $('#modalConfirmYesNo').modal('hide');
        });

        $("#btnNoConfirmYesNo").off('click').click(function() {


            $('#modalConfirmYesNo').modal('hide');
        });


    }

    function delete_expense(e_id) {

        //if(confirm('Are you sure delete this data?')){

        var id = e_id;
        // ajax delete data to database
        $.ajax({
            url: "<?php echo site_url(); ?>expenses/ajax-delete/" + id,
            type: "POST",
            dataType: "JSON",
            success: function(data) {
                //if success reload ajax table
                //$('#modal_form').modal('hide');
                reload_table1();


            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Error deleting data');
            }
        });
        //}
    } /* end function delete() */

    function calculateCostFromYearly() {
        var yearly = parseFloat($("#yearly_cost").val().replace(/\,|\$|\€|\₹|\£/g, ''));
        if (!isNaN(yearly)) {
            $("#quarterly_cost").val(cur + number_format(yearly / 4, 0, '.', ','));
            $("#weekly_cost").val(cur + number_format(yearly / 52), 0, '.', ',');
            $("#monthly_cost").val(cur + number_format(yearly / 12, 0, '.', ','));
        }
    }

    function calculateCostFromQuaterly() {
        var quarterly = parseFloat($("#quarterly_cost").val().replace(/\,|\$|\€|\₹|\£/g, ''));
        if (!isNaN(quarterly)) {

            $("#yearly_cost").val(cur + number_format(quarterly * 4, 0, '.', ','));
            $("#weekly_cost").val(cur + number_format(quarterly * 4 / 52, 0, '.', ','));
            $("#monthly_cost").val(cur + number_format(quarterly * 4 / 12, 0, '.', ','));
        }
    }

    function calculateCostFromWeekly() {
        var weekly = parseFloat($("#weekly_cost").val().replace(/\,|\$|\€|\₹|\£/g, ''));
        if (!isNaN(weekly) && weekly > 0) {
            $("#yearly_cost").val(cur + number_format(weekly * 52, 0, '.', ','));
            $("#quarterly_cost").val(cur + number_format(weekly * 52 / 4, 0, '.', ','));
            $("#monthly_cost").val(cur + number_format(weekly * 52 / 12, 0, '.', ','));

        }


    }

    function calculateCostFromMonthly() {
        var monthly_cost = parseFloat($("#monthly_cost").val().replace(/\,|\$|\€|\₹|\£/g, ''));
        if (!isNaN(monthly_cost)) {

            $("#yearly_cost").val(cur + number_format(monthly_cost * 12, 0, '.', ','));
            $("#weekly_cost").val(cur + number_format(monthly_cost * 12 / 52, 0, '.', ','));
            $("#quarterly_cost").val(cur + number_format(monthly_cost * 12 / 4, 0, '.', ','));
        }
    }

    function calculateMonth() {
        var num_month = parseFloat($("#num_month").val().replace(/\,|\$|\€|\₹|\£/g, ''));
        var monthly_cost = $("#weekly_cost").val() * 52 / 12;

        var result = num_month * monthly_cost;

        $('#no_months').val(cur+number_format(result, 0, '.', ','));
    }


    /*$('#saveResults').click(function(){
       $("#success_msg").text("Comment Saved successfully!");
    });*/



    //$("#ex8").change(function(){
    $('#ex8').on("input change", function() {
        var sv = parseInt($("#ex8").val());
        $("#m_perc").text(sv);
        $("#ex8").val(sv);
        if ($("#Marketing").length > 0) {

            var account = "Marketing";
            var years = [];
            years['year1'] = parseInt($("#Marketing_year1").attr('data-val'));
            years['year2'] = parseInt(years['year1'] * (sv / 100)) + years['year1'];
            years['year3'] = parseInt(years['year2'] * (sv / 100)) + years['year2'];

            $("#Marketing_year2").attr('data-val', years['year2']);
            $("#Marketing_year3").attr('data-val', years['year3']);
            $("#Marketing_year2").text(cur + number_format(years['year2'], 0, '.', ','));
            $("#Marketing_year3").text(cur + number_format(years['year3'], 0, '.', ','));
            calculate_total();
            update_graph(account);

        }

    });
    $('#ex9').on("input change", function() {
        var sv = parseInt($("#ex9").val());
        $("#p_perc").text(sv);
        $("#ex9").val(sv);
        if ($("#Public-Relations").length > 0) {
            var account = "Public-Relations";
            var years = [];
            years['year1'] = parseInt($("#Public-Relations_year1").attr('data-val'));
            years['year2'] = parseInt(years['year1'] * (sv / 100)) + years['year1'];
            years['year3'] = parseInt(years['year2'] * (sv / 100)) + years['year2'];

            $("#Public-Relations_year2").attr('data-val', years['year2']);
            $("#Public-Relations_year3").attr('data-val', years['year3']);
            $("#Public-Relations_year2").text(cur + number_format(years['year2'], 0, '.', ','));
            $("#Public-Relations_year3").text(cur + number_format(years['year3'], 0, '.', ','));
            calculate_total();
            update_graph(account);
        }
    });
    $('#ex10').on("input change", function() {
        var sv = parseInt($("#ex10").val());
        $("#a_perc").text(sv);
        $("#ex10").val(sv);
        if ($("#Administration").length > 0) {
            var account = "Administration";
            var years = [];
            years['year1'] = parseInt($("#Administration_year1").attr('data-val'));
            years['year2'] = parseInt(years['year1'] * (sv / 100)) + years['year1'];
            years['year3'] = parseInt(years['year2'] * (sv / 100)) + years['year2'];

            $("#Administration_year2").attr('data-val', years['year2']);
            $("#Administration_year3").attr('data-val', years['year3']);
            $("#Administration_year2").text(cur + number_format(years['year2'], 0, '.', ','));
            $("#Administration_year3").text(cur + number_format(years['year3'], 0, '.', ','));
            calculate_total();
            update_graph(account);
        }
    });
    $('#ex11').on("input change", function() {
        var sv = parseInt($("#ex11").val());
        $("#o_perc").text(sv);
        $("#ex11").val(sv);
        if ($("#Other").length > 0) {
            var account = "Other";
            var years = [];
            years['year1'] = parseInt($("#Other_year1").attr('data-val'));
            years['year2'] = parseInt(years['year1'] * (sv / 100)) + years['year1'];
            years['year3'] = parseInt(years['year2'] * (sv / 100)) + years['year2'];

            $("#Other_year2").attr('data-val', years['year2']);
            $("#Other_year3").attr('data-val', years['year3']);
            $("#Other_year2").text(cur + number_format(years['year2'], 0, '.', ','));
            $("#Other_year3").text(cur + number_format(years['year3'], 0, '.', ','));
            calculate_total();
            update_graph(account);
        }
    });

    $('#save').click(function() {
        var m_perc = $("#ex8").val();
        var p_perc = $("#ex9").val();
        var a_perc = $("#ex10").val();
        var o_perc = $("#ex11").val();

        $.ajax({
            type: 'GET',
            url: "<?php echo site_url('Expenses/updateExpensesIncrease'); ?>?m=" + m_perc + "&p=" + p_perc + "&a=" + a_perc + "&o=" + o_perc,

            success: function(data) {

                $('#modalConfirmYesNo').modal('show');

                $("#lblTitleConfirmYesNo").html("");
                $("#lblMsgConfirmYesNo").html("<div class='checkmark'>" +
                    "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" +
                    "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" +
                    "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" +
                    "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" +
                    "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" +
                    "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" +
                    "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" +
                    "</svg>" +
                    "</div>" +
                    "<p class='alert-box'>Your changes have been saved successfully</p>");

                $("#btnNoConfirmYesNo").hide();

                $("#btnYesConfirmYesNo").html('Okey');

                $("#btnYesConfirmYesNo").off('click').click(function() {

                    $('#modalConfirmYesNo').modal('hide');

                    $("#btnNoConfirmYesNo").show();

                    $("#btnYesConfirmYesNo").html('Yes');
                });

                //$("#btnNoConfirmYesNo").off('click').click(function () {

                //    $('#modalConfirmYesNo').modal('hide');
                //});
                calculate_total();
            }
        });


    });

    function calculate_total() {

        var total_y1 = 0;
        var total_y2 = 0;
        var total_y3 = 0;

        total_y1 = parseFloat(($("#Marketing_year1").length > 0) ? $("#Marketing_year1").attr('data-val') : 0.00) + parseFloat(($("#Public-Relations_year1").length > 0) ? $("#Public-Relations_year1").attr('data-val') : 0.00) + parseFloat(($("#Administration_year1").length > 0) ? $("#Administration_year1").attr('data-val') : 0.00) + parseFloat(($("#Other_year1").length > 0) ? $("#Other_year1").attr('data-val') : 0.00);
        total_y2 = parseFloat(($("#Marketing_year2").length > 0) ? $("#Marketing_year2").attr('data-val') : 0.00) + parseFloat(($("#Public-Relations_year2").length > 0) ? $("#Public-Relations_year2").attr('data-val') : 0.00) + parseFloat(($("#Administration_year2").length > 0) ? $("#Administration_year2").attr('data-val') : 0.00) + parseFloat(($("#Other_year2").length > 0) ? $("#Other_year2").attr('data-val') : 0.00);
        total_y3 = parseFloat(($("#Marketing_year3").length > 0) ? $("#Marketing_year3").attr('data-val') : 0.00) + parseFloat(($("#Public-Relations_year3").length > 0) ? $("#Public-Relations_year3").attr('data-val') : 0.00) + parseFloat(($("#Administration_year3").length > 0) ? $("#Administration_year3").attr('data-val') : 0.00) + parseFloat(($("#Other_year3").length > 0) ? $("#Other_year3").attr('data-val') : 0.00);

        $("#total_y1").attr('data-val', total_y1);
        $("#total_y2").attr('data-val', total_y2);
        $("#total_y3").attr('data-val', total_y3);

        $("#total_y1").text(cur + number_format(total_y1, 0, '.', ','));
        $("#total_y2").text(cur + number_format(total_y2, 0, '.', ','));
        $("#total_y3").text(cur + number_format(total_y3, 0, '.', ','));
    }
</script>