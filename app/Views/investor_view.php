

    

<div class="col-lg-12 col-md-12 col-sm-12" id="investor_div">
  <!--<button class="btn btn-default" onclick="reload_table_investor();return false;"><i class="fa fa-refresh"></i> <strong id="tabs"> Reload</strong></button>-->
    
        <div id="div_invstor_table" data-list='{"page":1,"pagination":true}'>
             <div class="table-responsive table-scroll">
                <div class="fixTableHead">
                <table class="table  table-striped fs--1 mb-0">
                  <thead class="bg-200 text-900">
                      <tr>
                        <th class="sort" data-sort="image">Photo ID</th>
                        <th class="sort" data-sort="investor">Name</th>
                        <th class="sort" data-sort="investor_type">Type</th>
                        <th class="sort" data-sort="amount">Amount</th>
                        <th class="sort" data-sort="netProfit">Net Profit</th>
                        <th class="sort" data-sort="payment_frequency">Payment Frequency</th>
                        <th >Action</th>
                      </tr>
                  </thead>
                  <tbody class="list">
                      <tr class="hover-actions-trigger">
                        <td class="image"></td>
                        <td class="investor"></td>
                        <td class="investor_type"></td>
                        <td class="amount"></td>
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




    <script type="text/javascript" charset="utf-8">
      var table_investor;
      $(document).ready(function() {

      });

      function add_investor() {
        save_method_investor = 'add';
        $("label.error").remove();
        $('#form_investor')[0].reset(); // reset form on modals
        $('.form-group').removeClass('has-error'); // clear error class
        $('.help-block').empty(); // clear error string
        $('#investor_modal').modal('show');
        $('.modal-title').text('Add A Investor'); // Set Title to Bootstrap modal title

      
        var listtext = $("#import_tab1").text();
        var tabtext = $('.moving-tab').text();
        if (tabtext != listtext) {
          $('.moving-tab').text('');
          $('.moving-tab').text(listtext);
        }

        $('#investor_logo').val('');
        // $('#director_id').val('');
        //$("#director_logo").unset();
        //alert("called");
        // $('#director_logo').fileinput('reset');
        path = siteUrl + 'assets/img/avatars/avatar.png';

        $("#investor_logo").fileinput('refresh', {
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
            main2: '{preview}  {remove} {browse} '
          },
          allowedFileExtensions: ["jpg", "png", "gif"]
        });

        $.ajax({
          url: "<?php echo site_url('Investor/load_currency/') ?>/",
          type: "GET",
          dataType: "JSON",
          success: function(data) {
            $('#cu-i').html(data.currency);
          }
        });
      }

      function edit_investor(id) {

        save_method_investor = 'update';
        $("#investor_save").val(save_method_investor);
        $("label.error").remove();
        $('#form_investor')[0].reset(); // reset form on modals
        $('.form-group').removeClass('has-error'); // clear error class
        $('.help-block').empty(); // clear error string

        //Ajax Load data from ajax
        $.ajax({
          url: "<?php echo site_url('Investor/ajax-edit/') ?>" + id,
          type: "GET",
          dataType: "JSON",
          success: function(data) {
            //if ($('#investorForm').attr('aria-expanded') == "false") {
            $('#investor_modal').modal('show')
            //}
            var listtext = $("a[href='#servicestep1-1']").text();
            var tabtext = $('.moving-tab').text();
            if (tabtext != listtext) {
              $('.moving-tab').text('');
              $('.moving-tab').text(listtext);
            }
            $('[name="investor_name"]').focus();
            $('[name="id"]').val(data.id);
            $('[name="investor_name"]').val(data.investor);
            $('[name="investor_type"]').val(data.investor_type).trigger('change');
            $('[name="investor_amount_paid"]').val(data.currency + number_format(data.amount, 0, '.', ','));
            $('[name="netProfit"]').val(data.netProfit + '%');
            $('[name="payment_frequency"]').val(data.payment_frequency).trigger('change');
            $('[name="eduAndExp"]').val(data.eduAndExp);
            $('[name="vat_paid_in_days"]').val(data.vat_paid_in_days);
            $('#cu-i').html(data.currency);

            $('#modal_form_investor').modal('show'); // show bootstrap modal when complete loaded
            $('.modal-title').text('Edit Investor Cost'); // Set title to Bootstrap modal title
            checkempty();

            if (data.image == '') {
              path = siteUrl + 'assets/img/avatars/avatar.png';
            } else if (data.image == 'assets/img/avatars/avatar.png') {
              path = siteUrl + 'assets/img/avatars/avatar.png';
            } else {
              path = siteUrl + 'assets/img/investor/' + data.image;
            }
            if (data.image != "assets/img/avatars/avatar.png") {
              var btnReset = '<button type="button" class="btn btn-flat fileinput-remove fileinput-remove-button" title="Cancel or reset changes" ' + 'onclick="restoreDefaultLogo(' + data.id + ')">' + '<i class="fa fa-remove"></i>' + '</button>';
            } else {
              var btnReset = '{remove}';
            }
            $("#investor_logo").fileinput('refresh', {
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
              defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + path + '" alt="Investor Logo" width="80px" height="80px">',
              layoutTemplates: {
                main2: '{preview}  ' + btnReset + ' {browse} '
              },
              allowedFileExtensions: ["jpg", "png", "gif"]
            });
            $('input').each(function() {
              var $this = $(this);
              if ($this.val())
                $this.addClass('used');
              else
                $this.removeClass('used');
            });


          },
          error: function(jqXHR, textStatus, errorThrown) {

            alert('Error get data from ajax');
          }
        });
      }

      function reload_table_investor() {

        reload_summary();
        table_investor.ajax.reload(null, false); //reload datatable ajax
      }

      function restoreDefaultLogo(id) {
        $('#investor_modal').modal('hide');
        $('#modalConfirmYesNo').css("z-index", "9999");
        $('#modalConfirmYesNo').modal('show');

        $("#lblTitleConfirmYesNo").html("User Confirmation");
        $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this image ??");

        $("#btnYesConfirmYesNo").off('click').click(function() {
          $.ajax({
            type: 'POST',
            url: 'investor/restoreDefault/' + id,
            success: function() {
              $('#modalConfirmYesNo').modal('hide');
              reload_table_investor();
              edit_investor(id);
            },
            error: function(jqXHR, textStatus, errorThrown) {
              showResultFailed(jqXHR.responseText);
              hideWaitingFail();
            }
          })

        });

        $("#btnNoConfirmYesNo").off('click').click(function() {
          $('#modalConfirmYesNo').modal('hide');
          edit_investor(id);
        });
      }

      function delete_confirmation_investor(id) {

        $('#modalConfirmYesNo').modal('show');

        $("#lblTitleConfirmYesNo").html("User Confirmation");
        $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this investor ??");
        $("#btnYesConfirmYesNo").off('click').click(function() {

          $.ajax({
            url: "<?php echo site_url('Investor/ajax-delete') ?>" + id,
            type: "POST",
            dataType: "JSON",
            success: function(data) {

              reload_table_investor();
            },
            error: function(jqXHR, textStatus, errorThrown) {

              alert('Error deleting data');
            }
          });

          $('#modalConfirmYesNo').modal('hide');
        });

        $("#btnNoConfirmYesNo").off('click').click(function() {

          $('#modalConfirmYesNo').modal('hide');
        });

      }
    </script>