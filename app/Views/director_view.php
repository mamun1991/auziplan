   <div class="col-lg-12 col-md-12 col-sm-12" id="director_div" style='margin-top: 16px;'>
       <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
           <div class="table-responsive table-scroll">
               <div class="fixTableHead">
                   <table class="table  table-striped fs--1 mb-0">
                       <thead class="bg-200 text-900">
                           <tr>
                               <th class="sort" data-sort="image">Photo ID</th>
                               <th class="sort" data-sort="name">Name</th>
                               <th class="sort" data-sort="amount">Amount</th>
                               <th class="sort" data-sort="share_qty">Number Of Shares</th>
                               <th class="sort" data-sort="price_per_share">Price Per Share</th>
                               <!--<th class="sort" data-sort="share_class_sc">Share Structure</th>-->
                               <th class="sort" data-sort="netProfit">Net Profit</th>
                               <th class="sort" data-sort="payment_frequency">Payment Frequency</th>
                               <th class="sort" data-sort="directerRole"> Role</th>
                               <th>Action</th>
                           </tr>
                       </thead>
                       <tbody class="list">
                           <tr class="hover-actions-trigger">
                               <td class="image"></td>
                               <td class="name"></td>
                               <td class="amount"></td>
                               <td class="share_qty"></td>
                               <td class="price_per_share"></td>
                               <!--<td class="share_class_sc"></td>-->
                               <td class="netProfit"></td>
                               <td class="payment_frequency"></td>
                               <td class="directerRole"></td>
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

           //Ajax Load data from ajax
           $.ajax({
               url: "<?php echo site_url('director/ajax-edit/') ?>" + id,
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
                   $('#directorNetProfit').val(number_format(data.netProfit, 0, '.', ',') + '%');
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