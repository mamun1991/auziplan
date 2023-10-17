function creditor_debtors() {

	var html = '';

	$.ajax({
	    url: "Report/CreditorsDebtors/creditor_debtor_balance_report",
	    type: "GET",
	    dataType: "JSON",
	      success: function (credeb)
	      {
	      	html +="<div class='panel-group' id='creditors_debtors_accordion'>"
	        +"<div class='panel panel-primary'>"
	        	+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#creditors_debtors_accordion' href='#tab_1' class='accordion-toggle'>Debtors Calculation Schedule</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='tab_1' class='panel-collapse collapse in'>"
              +"<div class='table-responsive'>"
                +"<table id='table-creditor_balance_0' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='30%'>Account</th>"
                        +"<th>Year 1</th>"
                        +"<th>Year 2</th>"
                        +"<th>Year 3</th>"
                      +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='4'><strong>Debtors Calculation Schedule</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='25%'>Opening Debtors</td>"
                      for (count=1;count<=3;count++){
                          html += "<td id='opening_debtors_"+count+"'>"+credeb['currency']+' '+number_format(credeb['opening_debtors_'+count],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='25%'>Invoicing</td>"
                      for (count=1;count<=3;count++){
                          html += "<td id='invoicing_"+count+"'>"+credeb['currency']+' '+number_format(credeb['invoicing_'+count],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='25%'>Less Cash Receipts</td>"
                      for (count=1;count<=3;count++){
                          html += "<td id='less_cash_receipts_"+count+"'>"+credeb['currency']+' '+number_format(credeb['less_cash_receipts_'+count],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td colspan='4'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='25%'>Closing Debtors</td>"
                      for (count=1;count<=3;count++){
                          html += "<td id='closing_debtors_"+count+"'>"+credeb['currency']+' '+number_format(credeb['closing_debtors_'+count],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"</table>"
              +"</div>"
          	+"</div>"
          	+"</div>"
          	+"<div class='panel panel-primary'>"
          	+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#creditors_debtors_accordion' href='#tab_2' class='accordion-toggle  collapsed'>Creditors Calculation Schedule</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='tab_2' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-creditor_balance_1' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='30%'>Account</th>"
                        +"<th>Year 1</th>"
                        +"<th>Year 2</th>"
                        +"<th>Year 3</th>"
                      +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='4'><strong>Creditors Calculation Schedule</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='25%'>Opening Creditors</td>"
                      for (count=1;count<=3;count++){
                          html += "<td id='opening_creditors_"+count+"'>"+credeb['currency']+' '+number_format(credeb['opening_creditors_'+count],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='25%'>Purchases and Expenses</td>"
                      for (count=1;count<=3;count++){
                          html += "<td id='purchase_expenses_"+count+"'>"+credeb['currency']+' '+number_format(credeb['purchase_expenses_'+count],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='25%'>Less Cash Payments</td>"
                      for (count=1;count<=3;count++){
                          html += "<td id='less_cash_payments_"+count+"'>"+credeb['currency']+' '+number_format(credeb['less_cash_payments_'+count],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td colspan='4'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='25%'>Closing Creditors</td>"
                      for (count=1;count<=3;count++){
                          html += "<td id='closing_creditors_"+count+"'>"+credeb['currency']+' '+number_format(credeb['closing_creditors_'+count],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"</table>"
              +"</div>"
          	+"</div>"
          	+"</div>"
	        +"</div>"
	        +"</div>"

	      	$('.btn_pdf').attr('href', 'Report/CreditorsDebtors/creditor_debtor_balance_report_pdf');

	        $('#ReportModalBody').append(html);

	        $('#ReportModalTitle').html('Creditors And Debtors Balance Report');

	        $('#ReportModal').modal('show');

	        for (k=0;k<=8;k++){

	          $("#table-creditor_balance_"+k).tableHeadFixer({'left' : 1});

	          $("#table-creditor_balance_"+k).css({
	               "min-width": "920px"
	          });
	        }
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