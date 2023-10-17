function balance_sheet(){

	var html = '';

	$.ajax({
	    url: "Report/BalanceSheet/ajax-balance_sheet",
	    type: "GET",
	    dataType: "JSON",
	      success: function (balshe)
	      {
	      	html +="<form method='post' action='' id='balance_form'>"
          +"<div class='panel-group' id='balance_sheet_accordion'>"
	      	+"<div class='panel panel-defualt'>"
      			+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#balance_sheet_accordion' href='#assets_table' class='accordion-toggle'>Current Assets</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='assets_table' class='panel-collapse collapse in'>"
              +"<div class='table-responsive'>"
                +"<table id='table-balance_sheet_0' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                        +"<th>Current</th>"
                        +"<th>Year 1</th>"
                        +"<th>Year 2</th>"
                        +"<th>Year 3</th>"
                      +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='5'><strong>Current Assets</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='20%'>Debtors</td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_sheet_debtors_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_sheet_debtors_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='20%'>Cash At Bank</td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_cash_bank_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_cash_bank_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='20%'>Deposite and Other Assets</td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_deposite_assets_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_deposite_assets_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='20%'>Stock on Hand</td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_stock_hand_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_stock_hand_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td colspan='5'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='20%'><strong>Total Current Assets</strong></td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_tot_current_assets_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_tot_current_assets_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                +"</table>"
              +"</div>"
          	+"</div>"
          	+"</div>"
          	+"<div class='panel panel-defualt'>"
          	+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#balance_sheet_accordion' href='#cur_liabilities_table' class='accordion-toggle  collapsed'>Current Liabilities</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='cur_liabilities_table' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-balance_sheet_1' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                        +"<th>Current</th>"
                        +"<th>Year 1</th>"
                        +"<th>Year 2</th>"
                        +"<th>Year 3</th>"
                      +"</tr>"
                  +"</thead>"
                   +"<tr class='success'>"
                      +"<td colspan='5'><strong>Current Liabilities</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='20%'>Trade Creditors</td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_trade_creditors_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_trade_creditors_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='20%'>GST Payable</td>"
                      +"<td witdh='20%'>"
                          +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='balance_gst_payable_0' name='balance_gst_payable_0' value='"+balshe['balance_gst_payable_0']+"' onchange='calculationBalshe()'>"
                          +"</div>"
                      +"</td>"
                      for (i=1;i<=3;i++) {
                      	html +="<td width='20%' id='balance_gst_payable_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_gst_payable_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td colspan='5'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='20%'><strong>Total Current Liabilities</strong></td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_tot_current_libilities_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_tot_current_libilities_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"</table>"
              +"</div>"
          	+"</div>"
          	+"</div>"
          	+"<div class='panel panel-defualt'>"
          	+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#balance_sheet_accordion' href='#working_capital_table' class='accordion-toggle  collapsed'>Working Capital</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='working_capital_table' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-balance_sheet_2' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                        +"<th>Current</th>"
                        +"<th>Year 1</th>"
                        +"<th>Year 2</th>"
                        +"<th>Year 3</th>"
                      +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='5'><strong>Working Capital</strong></td>"
                  +"</tr>"
          				+"<tr>"
                      +"<td width='20%'><strong>Working Capital</strong></td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_working_capital_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_working_capital_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"</table>"
              +"</div>"
          	+"</div>"
          	+"</div>"
          	+"<div class='panel panel-defualt'>"
          	+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#balance_sheet_accordion' href='#non_assest_table' class='accordion-toggle  collapsed'>None Current Assets</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='non_assest_table' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-balance_sheet_3' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                        +"<th>Current</th>"
                        +"<th>Year 1</th>"
                        +"<th>Year 2</th>"
                        +"<th>Year 3</th>"
                      +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='5'><strong>None Current Assets</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='20%'>Branding</td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_brand_setup_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_brand_setup_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='20%'>Intellectual Property </td>"
                      +"<td witdh='20%'>"
                        +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='balance_intellectual_prop_0' name='balance_intellectual_prop_0' value='"+balshe['balance_intellectual_prop_0']+"' onchange='calculationBalshe()'>"
                          +"</div>"
                      +"</td>"
                      for (i=1;i<=3;i++) {
                      	html +="<td width='20%' id='balance_intellectual_prop_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_intellectual_prop_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='20%'>Property Plant and Equipment </td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_prop_equip_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_prop_equip_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td colspan='5'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='20%'><strong>Total Non Current Assets</strong></td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_tot_noncurrent_assets_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_tot_noncurrent_assets_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"</table>"
              +"</div>"
          	+"</div>"
          	+"</div>"
          	+"<div class='panel panel-defualt'>"
          	+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#balance_sheet_accordion' href='#non_cur_liability' class='accordion-toggle  collapsed'>None Current Liabilities</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='non_cur_liability' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-balance_sheet_4' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                        +"<th>Current</th>"
                        +"<th>Year 1</th>"
                        +"<th>Year 2</th>"
                        +"<th>Year 3</th>"
                      +"</tr>"
                  +"</thead>"
                   +"<tr class='success'>"
                      +"<td colspan='5'><strong>None Current Liabilities</strong></td>"
                  +"</tr>"
                	 +"<tr>"
                      +"<td width='20%'>Directors Loan</td>"
                      +"<td witdh='20%'>"
                        +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='balance_director_loan_0' name='balance_director_loan_0' value='"+balshe['balance_director_loan_0']+"' onchange='calculationBalshe()'>"
                          +"</div>"
                      +"</td>"
                      for (i=1;i<=3;i++) {
                      	html +="<td width='20%' id='balance_director_loan_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_director_loan_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td colspan='5'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='20%'><strong>Total Liabilities</strong></td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_tot_libilities_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_tot_libilities_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
               	 +"</table>"
              +"</div>"
          	+"</div>"
          	+"</div>"
          	+"<div class='panel panel-defualt'>"
          	+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#balance_sheet_accordion' href='#netassets_table' class='accordion-toggle  collapsed'>Net Assets</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='netassets_table' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-balance_sheet_5' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                        +"<th>Current</th>"
                        +"<th>Year 1</th>"
                        +"<th>Year 2</th>"
                        +"<th>Year 3</th>"
                      +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='5'><strong>Net Assets</strong></td>"
                  +"</tr>"
          	 			+"<tr>"
                      +"<td width='20%'><strong>Net Assets</strong></td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_net_assets_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_net_assets_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"</table>"
              +"</div>"
          	+"</div>"
          	+"</div>"
          	+"<div class='panel panel-defualt'>"
          	+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#balance_sheet_accordion' href='#shareholder_table' class='accordion-toggle  collapsed'>Shareholder Equity</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='shareholder_table' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-balance_sheet_6' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                        +"<th>Current</th>"
                        +"<th>Year 1</th>"
                        +"<th>Year 2</th>"
                        +"<th>Year 3</th>"
                      +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='5'><strong>Shareholder Equity</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='20%'>Founders Capital</td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_founder_capital_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_founder_capital_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='20%'>Revaluation Reserve </td>"
                      +"<td witdh='20%'>"
                        +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='balance_revaluation_reserve_0' name='balance_revaluation_reserve_0' value='"+balshe['balance_revaluation_reserve_0']+"' onchange='calculationBalshe()'>"
                          +"</div>"
                      +"</td>"
                      for (i=1;i<=3;i++) {
                      	html +="<td width='20%' id='balance_revaluation_reserve_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_revaluation_reserve_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='20%'>Issued Shared </td>"
                      +"<td witdh='20%'>"
                        +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='balance_issued_share_0' name='balance_issued_share_0' value='"+balshe['balance_issued_share_0']+"' readonly>"
                          +"</div>"
                      +"</td>"
                      for (i=1;i<=3;i++) {
                      	html +="<td width='20%' id='balance_issued_share_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_issued_share_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='20%'>Accumulated Profit \ (Loss) </td>"
                      +"<td witdh='20%'>"
                        +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='balance_accu_profit_loss_0' name='balance_accu_profit_loss_0' value='"+balshe['balance_accu_profit_loss_0']+"' onchange='calculationBalshe()'>"
                          +"</div>"
                      +"</td>"
                      for (i=1;i<=3;i++) {
                      	html +="<td width='20%' id='balance_accu_profit_loss_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_accu_profit_loss_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                   +"<tr>"
                      +"<td width='20%'>Current Year Profit \ (Loss) </td>"
                      +"<td witdh='20%'>"
                        +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='balance_currentyear_profit_loss_0' name='balance_currentyear_profit_loss_0' value='"+balshe['balance_currentyear_profit_loss_0']+"' onchange='calculationBalshe()'>"
                          +"</div>"
                      +"</td>"
                      for (i=1;i<=3;i++) {
                      	html +="<td width='20%' id='balance_currentyear_profit_loss_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_currentyear_profit_loss_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td colspan='5'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='20%'><strong>Total Equity</strong></td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_tot_equity_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_tot_equity_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td colspan='5'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr class='danger'>"
                      +"<td width='20%'><strong>Audits</strong></td>"
                      for (i=0;i<=3;i++) {
                      	html +="<td width='20%' id='balance_audits_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_audits_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"</table>"
                  +"</form>"
              +"</div>"
          	+"</div>"
          	+"</div>"
	      	+"</div>"
	      	+"</div>"

          var msg = "";



          if (parseFloat(balshe['balance_audits_1']) < 0 || parseFloat(balshe['balance_audits_2']) < 0 || parseFloat(balshe['balance_sheet_3']) < 0){

            msg = "<div class='alert alert-danger' role='alert'><p class='text-center'><b>Warning !!</b></p></div>"
            +"<div class='alert alert-danger' role='alert'>"
            +"<p class='text-center'>Your Balance Sheet is not balanced</p>"
            +"<p class='text-center'>"
              +"<ul>"
                +"<li>Directors should inject more funds.</li>"
                +"<li>You need to secure further finance from a bank or investor.</li>"
                +"<li>Review and re- negotiate your start up costs to bring you projections in line with available funding.</li>"
              +"</ul>"
            +"</div>"
            +"</p>";
            $("#btnYesConfirmYesNo").removeClass('btn-primary');
            $("#btnYesConfirmYesNo").addClass('btn-danger');

          }else if(parseFloat(balshe['balance_audits_1']) > 0 || parseFloat(balshe['balance_audits_2']) > 0 || parseFloat(balshe['balance_sheet_3']) > 0) {

            msg = "<div class='alert alert-danger' role='alert'><p class='text-center'><b>Warning !!</b></p></div>"
            +"<div class='alert alert-danger' role='alert'>"
            +"<p class='text-center'>Your Financials are not balanced</p>"
            +"<p class='text-center'>"
              +"<ul>"
                +"<li>Directors should inject more funds.</li>"
                +"<li>You need to secure further finance from a bank or investor.</li>"
                +"<li>Review and re- negotiate your start up costs to bring you projections in line with available funding.</li>"
              +"</ul>"
            +"</div>"
            +"</p>";

            $("#btnYesConfirmYesNo").removeClass('btn-primary');
            $("#btnYesConfirmYesNo").addClass('btn-danger');

          }else if(parseFloat(balshe['balance_audits_1']) == 0 || parseFloat(balshe['balance_audits_2']) == 0 || parseFloat(balshe['balance_sheet_3']) == 0){

            msg = "<div class='alert alert-success' role='alert'><p class='text-center'><b>User Information !!</b></p></div>"
            +"<div class='alert alert-success' role='alert'>"
            +"<p class='text-center'>Excellent !! Your Balance Sheet is correct and balanced</p>"
            +"<p class='text-center'>"
              
            +"</div>"
            +"</p>";

            $("#btnYesConfirmYesNo").removeClass('btn-danger');
            $("#btnYesConfirmYesNo").addClass('btn-success');
          }

	      	$('.btn_pdf').attr('href', 'Report/BalanceSheet/balance_sheet_pdf');

          $('#modalConfirmYesNo').modal('show');

          $("#lblTitleConfirmYesNo").html("");
          $("#lblMsgConfirmYesNo").html(msg);

          $("#btnNoConfirmYesNo").hide();
          $("#btnYesConfirmYesNo").html('Okey');

          $("#btnYesConfirmYesNo").off('click').click(function () {

            $('#ReportModalBody').append(html);

            $('#ReportModalTitle').html('Balance Sheet Report');

            $('#ReportModal').modal('show');

            for (k=0;k<=6;k++){

              $("#table-balance_sheet_"+k).tableHeadFixer({'left' : 1});

              $("#table-balance_sheet_"+k).css({
                   "min-width": "920px"
              });
            }

            $('#modalConfirmYesNo').modal('hide');

            $("#btnYesConfirmYesNo").removeClass('btn-danger');

            $("#btnYesConfirmYesNo").addClass('btn-primary');

            $("#btnYesConfirmYesNo").html('Okey');

            $("#btnNoConfirmYesNo").show();
          });
	      },
	      error: function (jqXHR, textStatus, errorThrown)
	      {
	          alert(errorThrown);
	      }
	  });

	  $('#ReportModal').on('hidden.bs.modal', function(){

	    $('#ReportModalBody').html("");

	    active = true;

	  })

}

function calculationBalshe(){

  var form_balance = $("#balance_form").serialize();

  $.ajax({
    url: "Report/BalanceSheet/save_calculation",
    type: "POST",
    data: form_balance,
    dataType: 'json',
    encode: true,
    success: function (data){

      for (i=0;i<=3;i++){



        if (i == 0){
          //current liabilities
          $('#balance_tot_current_libilities_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_trade_creditors_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_gst_payable_'+i).val()),0,'.',','))

          $('#balance_working_capital_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_tot_current_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - Math.abs(parseFloat($('#balance_tot_current_libilities_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))),0,'.',','));

          $('#balance_tot_noncurrent_assets_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_brand_setup_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_intellectual_prop_'+i).val()) + parseFloat($('#balance_prop_equip_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

          $('#balance_tot_libilities_'+i).html(data['currency']+' '+number_format($('#balance_director_loan_'+i).val(),0,'.',','));

          $('#balance_net_assets_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_working_capital_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_tot_noncurrent_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '') - parseFloat($('#balance_tot_libilities_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))),0,'.',','));

          $('#balance_tot_equity_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_founder_capital_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('balance_revaluation_reserve_'+i).val()) + parseFloat($('#balance_issued_share_'+i).val()) + parseFloat($('#balance_accu_profit_loss_'+i).val()) + parseFloat($('#balance_currentyear_profit_loss_'+i).val()),0,'.',','));

          $('#balance_audits_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_tot_equity_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseFloat($('#balance_net_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

        }else if(i == 1){
          //current liabilities
          j = i - 1;

          $('#balance_gst_payable_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_gst_payable_'+j).val()) + (parseFloat(data['grandgstvat'+i]) + parseFloat(data['yearly_gstvat_collect_'+i])),0,'.',','));

          $('#balance_tot_current_libilities_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_trade_creditors_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_gst_payable_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

          $('#balance_working_capital_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_tot_current_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - Math.abs(parseFloat($('#balance_tot_current_libilities_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))),0,'.',','));

          $('#balance_intellectual_prop_'+i).html(data['currency']+' '+number_format($('#balance_intellectual_prop_'+j).val(),0,'.',','));

          $('#balance_tot_noncurrent_assets_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_brand_setup_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_intellectual_prop_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_prop_equip_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

          $('#balance_director_loan_'+i).html(data['currency']+' '+number_format($('#balance_director_loan_'+j).val(),0,'.',','));

          $('#balance_tot_libilities_'+i).html(data['currency']+' '+number_format($('#balance_director_loan_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''),0,'.',','));

          $('#balance_net_assets_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_working_capital_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_tot_noncurrent_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '') - parseFloat($('#balance_tot_libilities_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))),0,'.',','));

          $('#balance_revaluation_reserve_'+i).html(data['currency']+' '+number_format($('#balance_revaluation_reserve_'+j).val(),0,'.',','));

          $('#balance_accu_profit_loss_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_accu_profit_loss_'+j).val()) + parseFloat(data['yearly_dp_'+i]) + parseFloat($('#balance_currentyear_profit_loss_'+j).val()),0,'.',','));


          $('#balance_currentyear_profit_loss_'+i).html(data['currency']+' '+number_format(data['netprofityear'+i],0,'.',','));

          $('#balance_tot_equity_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_founder_capital_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_revaluation_reserve_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_issued_share_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_accu_profit_loss_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_currentyear_profit_loss_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

          $('#balance_audits_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_tot_equity_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseFloat($('#balance_net_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

        }else{

          j = i - 1;

          $('#balance_gst_payable_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_gst_payable_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat(data['grandgstvat'+i]) + parseFloat(data['yearly_gstvat_collect_'+i]),0,'.',','));

          $('#balance_tot_current_libilities_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_trade_creditors_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_gst_payable_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

          $('#balance_working_capital_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_tot_current_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - Math.abs(parseFloat($('#balance_tot_current_libilities_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))),0,'.',','));

          $('#balance_intellectual_prop_'+i).html(data['currency']+' '+number_format($('#balance_intellectual_prop_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''),0,'.',','));

          $('#balance_tot_noncurrent_assets_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_brand_setup_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_intellectual_prop_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_prop_equip_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

          $('#balance_director_loan_'+i).html(data['currency']+' '+number_format($('#balance_director_loan_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''),0,'.',','));

          $('#balance_tot_libilities_'+i).html(data['currency']+' '+number_format($('#balance_director_loan_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''),0,'.',','));

          $('#balance_net_assets_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_working_capital_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_tot_noncurrent_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '') - parseFloat($('#balance_tot_libilities_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))),0,'.',','));

          $('#balance_revaluation_reserve_'+i).html(data['currency']+' '+number_format($('#balance_revaluation_reserve_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''),0,'.',','));

          $('#balance_accu_profit_loss_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_accu_profit_loss_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat(data['yearly_dp_'+i]) + parseFloat($('#balance_currentyear_profit_loss_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));


          $('#balance_currentyear_profit_loss_'+i).html(data['currency']+' '+number_format(data['netprofityear'+i],0,'.',','));


          $('#balance_tot_equity_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_founder_capital_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_revaluation_reserve_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_issued_share_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_accu_profit_loss_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_currentyear_profit_loss_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

          $('#balance_audits_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_tot_equity_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseFloat($('#balance_net_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

        }
      }
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(textStatus, errorThrown);
    }
  });

}