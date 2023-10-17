        <div class="col-lg-12 col-md-12 col-sm-12" id="director_div" style='margin-top: 16px;'>
            <div id="tableExample2">
                <div class="table-responsive table-scroll">
                    <div class="fixTableHead">
                    <table id="loadownersDT" class="table  table-striped" style="width:100%">
                    <thead class="bg-200 text-900">
                        <tr>
                            <th>ID</th>
                            <th>Photo ID</th>
                            <th>Name</th>
                            <th>Amount Contributed</th>
                            <th>Number of Shares</th>
                            <th>Price Per Share</th>
                            <th>Net Profit Percentage</th>
                            <th>Payment Frequency</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    <tfoot>
                    <tr>
                        <th></th>        
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
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
    </div>
</div>

    <script type="text/javascript">
        var save_method_director; //for save method string
        var table_director;
        $(document).ready(function() {    
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

        function add_director() {
            var isVisible = document.getElementById("director-add").style.display == "block";
            if (isVisible) {
                $("#director-add").hide();
            } else {
                $("#director-add").show();
                save_method_director = 'add';
            }
        }
        function edit_director(id) {
            edit_method = 'update';
            $('#director_save').val(edit_method);
            //        $("label.error").remove();
            //        //$('#form_director')[0].reset(); // reset form on modals
            //        $('.form-group').removeClass('has-error'); // clear error class
            //        $('.help-block').empty(); // clear error string

            //Ajax Load data from ajax
            $.ajax({
                url: "<?php echo site_url('director/ajax-edit') ?>" + id,
                type: "GET",
                dataType: "JSON",
                success: function(data) {
                    $('#director_modal').modal('show');
                    $('#director_name').val(data.name);
                    $('#eduAndExp').val(data.eduAndExp);
                    $('#directorRole').val(data.directerRole).trigger('change');
                    $('#share_qty').val(number_format(data.share_qty, 0, '.', ','));
                    $('#price_per_share').val(data.currency + number_format(data.price_per_share, 0, '.', ','));
                    $("#share_class_sc").val(data.share_class_sc).trigger('change');
                    $('#director_amount_paid').val(data.currency + number_format(data.amount, 0, '.', ','));
                    $('#directorNetProfit').val(number_format(data.netProfit, 0, '.', ',')+'%');
                    $("#directorPaymentFrequency").val(data.payment_frequency).trigger('change');
                    $('#director_id').val(data.director_id);
                    $('#cu-d').html(data.currency);
                    checkempty();
                    if (data.image == '') {
                        path = siteUrl + 'assets/img/avatars/avatar.png';
                    } else if (data.image == 'assets/img/avatars/avatar.png') {
                        path = siteUrl + 'assets/img/avatars/avatar.png';
                    } else {
                        path = siteUrl + 'assets/img/' + data.image;
                    }
                    if (data.image != "assets/img/avatars/avatar.png") {
                        var btnReset = '<button type="button" class="btn btn-outline-danger fileinput-remove fileinput-remove-button" title="Cancel or reset changes" ' + 'onclick="restoreDefault(' + data.director_id + ')">' + '<i class="fa fa-remove"></i>' + '</button>';
                    } else {
                        var btnReset = '{remove}';
                    }
                    $("#director_logo").fileinput('refresh', {
                        overwriteInitial: true,
                        maxFileSize: 500,
                        showClose: false,
                        showCaption: false,
                        browseLabel: '',
                        removeLabel: '',
                        previewClass: 'company_setup',
                        browseIcon: '<i class="fa fa-folder-open"></i>',
                        removeIcon: '<i class="fa fa-remove"></i>',
                        removeTitle: 'Cancel or reset changes',
                        elErrorContainer: '#kv-avatar-errors',
                        msgErrorClass: 'alert alert-block alert-danger',
                        defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + path + '" alt="Director Logo" width="80px" height="80px">',
                        layoutTemplates: {
                            main2: '{preview}  ' + btnReset + ' {browse} '
                        },
                        allowedFileExtensions: ["jpg", "png", "gif"]
                    });
                    //$("#director_logo").val(data.image);

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert('Error get data from ajax');
                }
            });
        }

        function reload_table() {
            //reload_summary();
            table_director.ajax.reload(null, false); //reload datatable ajax
        }

        function restoreDefault(id) {
            $('#director_modal').modal('hide');
            $('#modalConfirmYesNo').css("z-index", "9999");
            $('#modalConfirmYesNo').modal('show');

            $("#lblTitleConfirmYesNo").html("User Confirmation");
            $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this image ??");

            $("#btnYesConfirmYesNo").off('click').click(function() {
                $.ajax({
                    type: 'POST',
                    url: 'director/restoreDefault/' + id,
                    success: function() {
                        $('#modalConfirmYesNo').modal('hide');
                        reload_table();
                        edit_director(id);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        showResultFailed(jqXHR.responseText);
                        hideWaitingFail();
                    }
                })
            });

            $("#btnNoConfirmYesNo").off('click').click(function() {
                $('#modalConfirmYesNo').modal('hide');
                edit_director(id);
            });
        }

        function delete_confirmation_director(id) {
            /*if (confirm("Do you want insert Bill of Materials ??") == true) {

            $('.nav a[href="#add_menu1"]').tab('show');
            }else{

            $('#markup_on_cost').focus();
            }*/
            $('#modalConfirmYesNo').modal('show');
            $("#lblTitleConfirmYesNo").html("User Confirmation");
            $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this director ??");
            $("#btnYesConfirmYesNo").off('click').click(function() {

                delete_director(id)

                $('#modalConfirmYesNo').modal('hide');
            });
            $("#btnNoConfirmYesNo").off('click').click(function() {


                $('#modalConfirmYesNo').modal('hide');
            });
        }

        function delete_director(id) {
            //if(confirm('Are you sure delete this data?'))
            //{
            // ajax delete data to database
            $.ajax({
                url: "<?php echo site_url('director/ajax-delete') ?>" + id,
                type: "POST",
                dataType: "JSON",
                success: function(data) {
                    //if success reload ajax table
                    $('#modal_form_director').modal('hide');
                    reload_table();
                    ajax_issued_shares();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert('Error deleting data');
                }
            });
            //}
        }
    </script>

    <style>
        th{
            font-size: 13px;
            white-space: nowrap;
        }
        td{
            font-size: 14px;
            vertical-align: middle;
        }
    </style>