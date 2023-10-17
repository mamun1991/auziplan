
function yearly_cash_flow(){
	 var html = '';

	 $.ajax({
	    url: "Report/CashFlow/ajax-yearly_cash_flow_report",
	    type: "GET",
	    dataType: "JSON",
	      success: function (data)
	      {

	      	html +="<div class='panel-group' id='cash_flow_accordion'>"
	        +"<div class='panel panel-default'>"
	          +"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#cash_flow_accordion' href='#cash_income_yearly' class='accordion-toggle'>Yearly Cash Flow Forecast</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='cash_income_yearly' class='panel-collapse collapse in'>"
              +"<div class='table-responsive'>"
                +"<table id='table-report-cash-year_0' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='25'>Account</th>"
                        +"<th>Year 1</th>"
                        +"<th>Year 2</th>"
                        +"<th>Year 3</th>"
                      +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='4'><strong>Projected Yearly Cash Income</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='25%'>Opening Cash Balance</td>"
                      +"<td width='25%' id='yearly_opening_cash_balance_1'>"+data['currency']+' '+number_format(data['yearly_opening_cash_balance_1'],0,'.',',')+"</td>"
                      +"<td width='25%' id='yearly_opening_cash_balance_2'>"+data['currency']+' '+number_format(data['yearly_opening_cash_balance_2'],0,'.',',')+"</td>"
                      +"<td width='25%' id='yearly_opening_cash_balance_3'>"+data['currency']+' '+number_format(data['yearly_opening_cash_balance_3'],0,'.',',')+"</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='25%'>Imported Products</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['cogimportyear1'],0,'.',',')+"</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['cogimportyear2'],0,'.',',')+"</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['cogimportyear3'],0,'.',',')+"</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='25%'>Products</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['cogproductyear1'],0,'.',',')+"</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['cogproductyear2'],0,'.',',')+"</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['cogproductyear3'],0,'.',',')+"</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='25%'>Services</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['serviceyear'],0,'.',',')+"</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['serviceyear2'],0,'.',',')+"</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['serviceyear3'],0,'.',',')+"</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td colspan='13'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='25%'>Sub Total Income</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['grandyear'],0,'.',',')+"</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['grandyear2'],0,'.',',')+"</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['grandyear3'],0,'.',',')+"</td>"
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='25%'>GST/VAT Collected</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['grandgstvat'],0,'.',',')+"</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['grandgstvat2'],0,'.',',')+"</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['grandgstvat3'],0,'.',',')+"</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td colspan='13'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='25%'>Total Cash Income</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['yearly_total_income'],0,'.',',')+"</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['yearly_total_income2'],0,'.',',')+"</td>"
                      +"<td width='25%'>"+data['currency']+' '+number_format(data['yearly_total_income3'],0,'.',',')+"</td>"
                  +"</tr>"
                  +"</table>"
              +"</div>"
          	+"</div>"
          	+"</div>"
          	+"<div class='panel panel-default'>"
	          +"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#cash_flow_accordion' href='#yearly_debtors_receipts' class='accordion-toggle collapsed'>Yearly Debtors Receipts</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='yearly_debtors_receipts' class='panel-collapse collapse'>"
	              +"<div class='table-responsive'>"
	                +"<table id='table-report-cash-year_1' class='table table-striped table-condensed'>"
	                  +"<thead>"
	                    +"<tr class='warning'>"
	                        +"<th width='25'>Account</th>"
	                        +"<th>Year 1</th>"
	                        +"<th>Year 2</th>"
	                        +"<th>Year 3</th>"
	                      +"</tr>"
	                  +"</thead>"
	                  +"<tr class='success'>"
	                      +"<td colspan='4'><strong>Projected Yearly Debtors Receipts </strong></td>"
	                  +"</tr>"
	                  +"<tr>"
	                      +"<td width='25%'>Opening Debtors Balance</td>"
	                      +"<td width='25%'>"+data['currency']+' '+number_format(data['yearly_opening_debt_1'],0,'.',',')+"</td>"
	                      +"<td width='25%'>"+data['currency']+' '+number_format(data['yearly_opening_debt_2'],0,'.',',')+"</td>"
	                      +"<td width='25%'>"+data['currency']+' '+number_format(data['yearly_opening_debt_3'],0,'.',',')+"</td>"
	                      +"</tr>"
	                  +"<tr>"
	                      +"<td width='25%'>Aged Receivables</td>";
	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_aged_received_1'],0,'.',',')+"</td>"
	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_aged_received_2'],0,'.',',')+"</td>"
	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_aged_received_3'],0,'.',',')+"</td>"
	                  html += "</tr>"
	                    +"<tr>"
	                      +"<td colspan='4'>&nbsp;</td>"
	                    +"</tr>"
	                    +"<tr class='info'>"
	                        +"<td width='25%'>Total Receipts</td>"
	                        html += "<td id='yearly_receipt_1'>"+data['currency']+' '+number_format(data['yearly_receipt_1'],0,'.',',')+"</td>"
	                        html += "<td id='yearly_receipt_2'>"+data['currency']+' '+number_format(data['yearly_receipt_2'],0,'.',',')+"</td>"
	                        html += "<td id='yearly_receipt_3'>"+data['currency']+' '+number_format(data['yearly_receipt_3'],0,'.',',')+"</td>"
	                  html +="</tr>"
	                  +"</table>"
	              +"</div>"
	          +"</div>"
	          +"</div>"
	          +"<div class='panel panel-primary'>"
	          +"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#cash_flow_accordion' href='#yearly_disbursement' class='accordion-toggle collapsed'>Yearly Disbursements</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='yearly_disbursement' class='panel-collapse collapse'>"
	              +"<div class='table-responsive'>"
	                +"<table id='table-report-cash-year_2' class='table table-striped table-condensed'>"
	                  +"<thead>"
	                    +"<tr class='warning'>"
	                        +"<th width='25'>Account</th>"
	                        +"<th>Year 1</th>"
	                        +"<th>Year 2</th>"
	                        +"<th>Year 3</th>"
	                      +"</tr>"
	                  +"</thead>"
	                  +"<tr class='success'>"
	                      +"<td colspan='4'><strong>Projected Yearly Disbursements</strong></td>"
	                  +"</tr>"
	                  +"<tr>"
	                      +"<td width='25%'>Opening Creditors Balance</td>"
	                      +"<td width='25%'>"+data['currency']+' '+number_format(data['yearly_opening_credit_1'],0,'.',',')+"</td>"
	                      +"<td width='25%'>"+data['currency']+' '+number_format(data['yearly_opening_credit_2'],0,'.',',')+"</td>"
	                      +"<td width='25%'>"+data['currency']+' '+number_format(data['yearly_opening_credit_3'],0,'.',',')+"</td>"
	                      +"</tr>"
	                  +"<tr>"
                    		+"<td width='25%'>Import Product Costs</td>";

	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_import_disburs_1'],0,'.',',')+"</td>"
	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_import_disburs_2'],0,'.',',')+"</td>"
	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_import_disburs_3'],0,'.',',')+"</td>"

	                  html += "</tr>"
	                  +"<tr>"
	                      +"<td width='25%'>Local Product Costs </td>";

	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_product_disburs_1'],0,'.',',')+"</td>"
	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_product_disburs_2'],0,'.',',')+"</td>"
	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_product_disburs_3'],0,'.',',')+"</td>"

	                  html += "</tr>"
	                  +"<tr>"
	                      +"<td width='25%'>Service Costs </td>";

	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_service_disburs_1'],0,'.',',')+"</td>"
	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_service_disburs_2'],0,'.',',')+"</td>"
	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_service_disburs_3'],0,'.',',')+"</td>"

	                  html += "</tr>"
	                   +"<tr>"
	                      +"<td width='25%'>Operating Expenses </td>";

	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_oe_disburs_1'],0,'.',',')+"</td>"
	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_oe_disburs_2'],0,'.',',')+"</td>"
	                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['yearly_oe_disburs_3'],0,'.',',')+"</td>"

	                  html += "</tr>"
	                    +"<tr>"
	                      +"<td colspan='4'>&nbsp;</td>"
	                    +"</tr>"
	                    +"<tr class='info'>"
	                        +"<td width='25%'>Sub - Total Costs</td>"
	                        html += "<td id='yearlysubtotal_1'>"+data['currency']+' '+number_format(data['yealy_disburs_subtotal_1'],0,'.',',')+"</td>"
	                        html += "<td id='yearlysubtotal_2'>"+data['currency']+' '+number_format(data['yealy_disburs_subtotal_2'],0,'.',',')+"</td>"
	                        html += "<td id='yearlysubtotal_3'>"+data['currency']+' '+number_format(data['yealy_disburs_subtotal_3'],0,'.',',')+"</td>"
	                  html +="</tr>"
	                  +"<tr class='info'>"
	                        +"<td width='25%'>VAT/GST Component</td>"
	                        html += "<td id='yearlygstvat_comp_1'>"+data['currency']+' '+number_format(data['yearly_gstvat_comp_1'],0,'.',',')+"</td>"
	                        html += "<td id='yearlygstvat_comp_2'>"+data['currency']+' '+number_format(data['yearly_gstvat_comp_2'],0,'.',',')+"</td>"
	                        html += "<td id='yearlygstvat_comp_3'>"+data['currency']+' '+number_format(data['yearly_gstvat_comp_3'],0,'.',',')+"</td>"
	                  html +="</tr>"
	                  +"<tr>"
	                      +"<td colspan='4'>&nbsp;</td>"
	                  +"</tr>"
	                  +"<tr class='info'>"
	                        +"<td width='25%'>Total Disburstments</td>"
	                        html += "<td id='yearlytotaldisburstment_1'>"+data['currency']+' '+number_format(data['yearly_total_disburs_1'],0,'.',',')+"</td>"
	                        +"<td id='yearlytotaldisburstment_2'>"+data['currency']+' '+number_format(data['yearly_total_disburs_2'],0,'.',',')+"</td>"
	                        +"<td id='yearlytotaldisburstment_3'>"+data['currency']+' '+number_format(data['yearly_total_disburs_3'],0,'.',',')+"</td>"
	                  html +="</tr>"
	                  +"</table>"
	              +"</div>"
	          +"</div>"
	          +"</div>"
	          +"<div class='panel panel-primary'>"
	          +"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#cash_flow_accordion' href='#yearly_payroll_liabilities' class='accordion-toggle collapsed'>Yearly Payroll Liabilities</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='yearly_payroll_liabilities' class='panel-collapse collapse'>"
	              +"<div class='table-responsive'>"
	                +"<table id='table-report-cash-year_3' class='table table-striped table-condensed'>"
	                  +"<thead>"
	                    +"<tr class='warning'>"
	                        +"<th width='25%'>Account</th>"
	                        +"<th>Year 1</th>"
	                        +"<th>Year 2</th>"
	                        +"<th>Year 3</th>"
	                      +"</tr>"
	                  +"</thead>"
	                  +"<tr class='success'>"
	                      +"<td colspan='13'><strong>Projected Yearly Payroll Liabilities</strong></td>"
	                  +"</tr>"
	                  +"<tr>"
	                      +"<td colspan='13'>&nbsp;</td>"
	                  +"</tr>"
	                  +"<tr class='info'>"
	                      +"<td width='25%'>Total Payroll Liabilities</td>"
	                      +"<td width='25%' id='tot_payrol_liability_1'>"+data['currency']+' '+number_format(data['yearly_total_payroll_1'],0,'.',',')+"</td>"
	                      +"<td width='25%' id='tot_payrol_liability_2'>"+data['currency']+' '+number_format(data['yearly_total_payroll_2'],0,'.',',')+"</td>"
	                      +"<td width='25%' id='tot_payrol_liability_3'>"+data['currency']+' '+number_format(data['yearly_total_payroll_3'],0,'.',',')+"</td>"
	                  +"</tr>"
	                +"</table>"
	              +"</div>"
	          +"</div>"
	          +"</div>"
	          +"<div class='panel panel-primary'>"
	          +"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#cash_flow_accordion' href='#yearly_operation_outgoing' class='accordion-toggle collapsed'>Yearly Operating Outgoings</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='yearly_operation_outgoing' class='panel-collapse collapse'>"
	              +"<div class='table-responsive'>"
	                +"<table id='table-report-cash-year_4' class='table table-striped table-condensed'>"
	                  +"<thead>"
	                    +"<tr class='warning'>"
	                       +"<th width='25'>Account</th>"
	                        +"<th>Year 1</th>"
	                        +"<th>Year 2</th>"
	                        +"<th>Year 3</th>"
	                      +"</tr>"
	                  +"</thead>"
	                  +"<tr class='success'>"
	                      +"<td colspan='13'><strong>Projected Yearly Total Operating Outgoings</strong></td>"
	                  +"</tr>"
	                  +"<tr>"
	                      +"<td colspan='13'>&nbsp;</td>"
	                  +"</tr>"
	                  +"<tr class='info'>"
	                      +"<td width='25%'>Total Operating Outgoings</td>"
	                      +"<td width='25%' id='yeartot_operating_outgoing_1'>"+data['currency']+' '+number_format(data['yearly_total_operating_1'],0,'.',',')+"</td>"
	                      +"<td width='25%' id='yeartot_operating_outgoing_2'>"+data['currency']+' '+number_format(data['yearly_total_operating_2'],0,'.',',')+"</td>"
	                      +"<td width='25%' id='yeartot_operating_outgoing_3'>"+data['currency']+' '+number_format(data['yearly_total_operating_3'],0,'.',',')+"</td>"
	                  +"</tr>"
	                +"</table>"
	              +"</div>"
	          +"</div>"
	          +"</div>"
	          +"<div class='panel panel-primary'>"
	          +"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#cash_flow_accordion' href='#yearly_business_activity' class='accordion-toggle collapsed'>Yearly Business Activity Statement</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='yearly_business_activity' class='panel-collapse collapse'>"
	              +"<div class='table-responsive'>"
	                +"<table id='table-report-cash-year_5' class='table table-striped table-condensed'>"
	                  +"<thead>"
	                    +"<tr class='warning'>"
		                       +"<th width='25'>Account</th>"
		                        +"<th>Year 1</th>"
		                        +"<th>Year 2</th>"
		                        +"<th>Year 3</th>"
		                      +"</tr>"
	                  +"</thead>"
	                  +"<tr class='success'>"
	                      +"<td colspan='13'><strong>Projected Yearly Business Activity Statement</strong></td>"
	                  +"</tr>"
	                  +"<tr>"
	                      +"<td width='25%'>GST/ VAT Payment </td>"
	                        for (count=1;count<=3;count++){
	                            html += "<td id='yearly_gstvat_payment_"+count+"'>"+data['currency']+' '+number_format(data['yearly_gstvat_payment_'+count],0,'.',',')+"</td>"
	                        }
	                  html+="</tr>"
	                  +"<tr>"
	                      +"<td width='25%'>Company Tax</td>"
	                      for (i=1;i<=3;i++){
	                      	html +="<td id='company_tax_"+i+"'>"+data['currency']+' '+number_format(data['yearl_company_tax_'+i],0,'.',',')+"</td>"
	                      }
	                  html +="</tr>"
	                  +"<tr>"
	                      +"<td colspan='13'>&nbsp;</td>"
	                  +"</tr>"
	                  +"<tr class='info'>"
	                      +"<td width='25%'>Total Business Activity</td>"
	                      for (i=1;i<=3;i++){
	                      	html +="<td id='yearly_tot_business_activity_"+i+"'>"+data['currency']+' '+number_format(data['yearly_total_business_activity_'+i],0,'.',',')+"</td>"
	                      }
	                  html +="</tr>"
	                  +"</table>"
	              +"</div>"
	          +"</div>"
	          +"</div>"
	          +"<div class='panel panel-primary'>"
	          +"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#cash_flow_accordion' href='#yearly_total_outgoings' class='accordion-toggle collapsed'>Yearly Total Outgoings </a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='yearly_total_outgoings' class='panel-collapse collapse'>"
	              +"<div class='table-responsive'>"
	                +"<table id='table-report-cash-year_6' class='table table-striped table-condensed'>"
	                  +"<thead>"
	                    +"<tr class='warning'>"
		                       +"<th width='25'>Account</th>"
		                        +"<th>Year 1</th>"
		                        +"<th>Year 2</th>"
		                        +"<th>Year 3</th>"
		                      +"</tr>"
	                  +"</thead>"
	                  +"<tr class='success'>"
	                      +"<td colspan='13'><strong>Projected Yearly Total Outgoings </strong></td>"
	                  +"</tr>"
	                  +"<tr class='info'>"
	                      +"<td width='25%'>Total Outgoings</td>"
	                      for (i=1;i<=3;i++){
	                      	html +="<td width='25%' id='yearly_tot_outgoings_"+i+"'>"+data['currency']+' '+number_format(data['yearly_total_outgoing_'+i],0,'.',',')+"</td>"
	                      }
	                  html +="</tr>"
	                +"</table>"
	              +"</div>"
	          +"</div>"
	          +"</div>"
	          +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#cash_flow_accordion' href='#yearly_net_gains' class='accordion-toggle collapsed'>Yearly Net Operating Cash Gain (Loss)</a>"
            +"</h4>"
          +"</div>"
          +"<div id='yearly_net_gains' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<form method='post' action='' id='yearly_form_cash_flow'>"
                +"<table id='table-report-cash-year_7' class='table table-striped table-condensed'>"
                  +"<thead>"
	                    +"<tr class='warning'>"
		                       +"<th width='25'>Account</th>"
		                        +"<th>Year 1</th>"
		                        +"<th>Year 2</th>"
		                        +"<th>Year 3</th>"
		                      +"</tr>"
	                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='4'><strong>Net Operating Cash Gain (Loss)</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='25%'>Net Cash Gain (Loss)</td>"
                      for (i=1;i<=3;i++){
                      	html +="<td width='25%' id='yearly_net_operating_cash_gain_"+i+"'>"+data['currency']+' '+number_format(data['yearly_netcash_gain_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='25%'>Capital Purchase</td>"
             		  		+"<td width='25%' id='yearly_cp_1'>"+data['currency']+' '+number_format(0,0,'.',',')+"</td>"
             		  		for (i=2;i<=3;i++){
	                      html +="<td width='25%'>"
	                          +"<div class='form-group'>"
	                            +"<input type='number' class='form-control inputfont' id='yearly_cp_"+i+"' name='yearly_cp_"+i+"' value='"+data['yearly_cp_'+i]+"' onchange='calculationYearlySection8()'>"
	                          +"</div>"
	                      +"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='25%'>Investor Issued (Shares)</td>"
                      +"<td width='25%' id='yearly_is_1'>"+data['currency']+' '+number_format(0,0,'.',',')+"</td>"
                      for (i=2;i<=3;i++){
	                      html +="<td width='25%'>"
	                          +"<div class='form-group'>"
	                            +"<div class='form-group'>"
	                            +"<input type='number' class='form-control inputfont' id='yearly_is_"+i+"' name='yearly_is_"+i+"' value='"+data['yearly_is_'+i]+"' onchange='calculationYearlySection8()'>"
	                          +"</div>"
	                      +"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='25%'>Dividends Paid</td>"
                      	+"<td width='25%' id='yearly_dp_1'>"+data['currency']+' '+number_format(0,0,'.',',')+"</td>"
                      for (i=2;i<=3;i++){
                      html +="<td width='25%'>"
                          +"<div class='form-group'>"
                            +"<div class='form-group'>"
                            +"<input type='number' class='form-control inputfont' id='yearly_dp_"+i+"' name='yearly_dp_"+i+"' value='"+data['yearly_dp_'+i]+"' onchange='calculationYearlySection8()'>"
                          +"</div>"
                      +"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='25%'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='25%'>Total Capital Items</td>"
                      for (i=1;i<=3;i++){
                      	html +="<td width='25%' id='yearly_tot_capital_items_"+i+"'>"+data['currency']+" "+number_format(data['total_capital_items'][i],0,'.',',')+" </td>"
                      }
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td width='25%'>Closing Cash Balance</td>"
                      for (i=1;i<=3;i++){
                      	html +="<td width='25%' id='yearly_closing_cash_balance_"+i+"'>"+data['currency']+" "+number_format(data['yearly_closing_cash_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"</table>"
                  +"</form>"
              +"</div>"
          +"</div>"
          +"</div>"
          +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#cash_flow_accordion' href='#yearly_gstvst_collected' class='accordion-toggle collapsed'>Yearly GST / VAT Collected</a>"
            +"</h4>"
          +"</div>"
          +"<div id='yearly_gstvst_collected' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-report-cash-year_8' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                     	+"<th width='25'>Account</th>"
                      +"<th>Year 1</th>"
                      +"<th>Year 2</th>"
                      +"<th>Year 3</th>"
                    +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='4'><strong> Yearly GST/VAT Analysis</strong></td>"
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='25%'> GST/VAT Collected</td>"
                        for (i=1;i<=3;i++){
                          html += "<td width='25%' id='yearly_gstvat_collected_"+i+"'>"+data['currency']+' '+number_format(data['yearly_gstvat_collect_'+i],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td width='25%'>GST/VAT Paid</td>"
                        for (i=1;i<=3;i++){
                          html += "<td width='25%' id='yearly_gstvat_id_"+i+"'>"+data['currency']+' '+number_format(data['yearly_gstvat_paids_'+i],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td width='25%'>GST Remittance</td>"
                        for (i=1;i<=3;i++){
                          html += "<td width='25%' id='yearly_gstvat_remittance_"+i+"'>"+data['currency']+' '+number_format(data['yearly_gstvat_remittance_'+i],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                +"</table>"
              +"</div>"
          +"</div>"
          +"</div>"
		    +"</div>"
		    +"</div>"

	      	$('.btn_pdf').attr('href', 'Report/CashFlow/yearly_cash_flow_pdf');

	        $('#ReportModalBody').append(html);

	        $('#ReportModalTitle').html('Yearly Cash Flow Report');

	        $('#ReportModal').modal('show');

	        for (k=0;k<=8;k++){

	          $("#table-report-cash-year_"+k).tableHeadFixer({'left' : 1});

	          $("#table-report-cash-year_"+k).css({
	               "min-width": "920px"
	          });
	        }

	        //calculationYearlyCashFlow(data['currency']);

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


function calculationYearlySection8(){

	var $form = $("#yearly_form_cash_flow").serialize();

  $.ajax({
    url: "Report/CashFlow/save_yearly_cash_flow",
    type: "POST",
    data: $form,
    dataType: 'json',
    encode: true,
    success: function (data){
      calculationYearlyCashFlow(data['currency']);
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(textStatus, errorThrown);
    }
  })

}
function calculationYearlyCashFlow(currency){

	var total_capital_items = 0;
	var yearly_closing_cash = 0;
	for (count=1;count <=3; count++){
		if (count == 1){
			total_capital_items = parseFloat($('#yearly_cp_'+count).html().replace(/\$ |\€ |\₹ /g, '')) + parseFloat($('#yearly_is_'+count).html().replace(/\$ |\€ |\₹ /g, '')) + parseFloat($('#yearly_dp_'+count).html().replace(/\$ |\€ |\₹ /g, ''));
		}else{
			total_capital_items = parseFloat($('#yearly_cp_'+count).val()) + parseFloat($('#yearly_is_'+count).val()) + parseFloat($('#yearly_dp_'+count).val());
		}
		$('#yearly_tot_capital_items_'+count).html(currency+' '+number_format(total_capital_items,0,'.',','));
		if (count == 1){
			yearly_closing_cash = parseFloat($('#yearly_opening_cash_balance_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, '')) + parseFloat($('#yearly_net_operating_cash_gain_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, '')) + total_capital_items;
		}else{
			yearly_closing_cash = 0 + parseFloat($('#yearly_net_operating_cash_gain_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, '')) + total_capital_items;
		}
		$('#yearly_closing_cash_balance_'+count).html(currency+' '+number_format(yearly_closing_cash,0,'.',','));

	}

}