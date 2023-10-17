//if ($.cookie('modal_reports') != 'loaded')
//{
  // $.cookie('modal_reports', 'loaded');
   // code to show modal
   //setTimeout(function(){
	//	$('#modal_reports').modal('show');
	//}, 2000)
//}


var active = true;



function cash_flow(){

  var html = '';
  var count, colspan;

  $.ajax({
    url: site_url+"FinancialReport/ajax-cash_flow_report",
    type: "GET",
    dataType: "JSON",
      success: function (data)
      {

        html += "<div class='panel-group' id='issued_shares_accordion'>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#cash_income' class='accordion-toggle'>Cash Flow Forecast</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='cash_income' class='panel-collapse collapse in'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report-cash_0' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='20%'>Account</th>"
                          for(i=0;i<data['table_header'].length;i++){
                            html +="<th>"+data['table_header'][i]+"</th>"
                          }
                        html +="</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='13'><strong>Projected Cash Income</strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td width='16%'>Opening Cash Balance</td>"
						for(i=1;i<=12;i++){
							+"<td width='6%' id='opening_cash_balance_"+i+"'>"+data['currency']+' '+number_format(data['opening_bank'],0,'.',',')+"</td>"
						}
                    +"</tr>"
                    +"<tr>"
                        +"<td width='16%'>Imported Products</td>"
						for(i=1;i<=12;i++){
							+"<td width='6%'>"+data['currency']+' '+number_format(data['imported_spp_'+i],0,'.',',')+"</td>"
						}
                    +"</tr>"
                    +"<tr>"
                        +"<td width='16%'>Products</td>"
						for(i=1;i<=12;i++){
							+"<td width='6%'>"+data['currency']+' '+number_format(data['product_spp_'+i],0,'.',',')+"</td>"
						}
                    +"</tr>"
                    +"<tr>"
                        +"<td width='16%'>Services</td>"
						for(i=1;i<=12;i++){
							+"<td width='6%'>"+data['currency']+' '+number_format(data['serviceyear'] / 12,0,'.',',')+"</td>"
						}
                    +"</tr>"
                    +"<tr>"
                        +"<td colspan='13'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='16%'>Sub Total Income</td>"
						for(i=1;i<=12;i++){
							+"<td width='6%'>"+data['currency']+' '+number_format(data['total_income_'+i],0,'.',',')+"</td>"
						}
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='16%'>GST/VAT Collected</td>"
						for(i=1;i<=12;i++){
							 +"<td width='6%'>"+data['currency']+' '+number_format(data['gst_vat_'+i],0,'.',',')+"</td>"
						}
                    +"</tr>"
                    +"<tr>"
                        +"<td colspan='13'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='16%'>Total Cash Income</td>"
						for(i=1;i<=12;i++){
							+"<td width='6%'>"+data['currency']+' '+number_format(data['total_cash_'+i],0,'.',',')+"</td>"
						}
                    +"</tr>"
                  +"</table>"
                +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#debtors_receipts' class='accordion-toggle collapsed'>Debtors Receipts</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='debtors_receipts' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report-cash_1' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='20%'>Account</th>"
                          for(i=0;i<data['table_header'].length;i++){

                            html +="<th>"+data['table_header'][i]+"</th>"

                          }
                        html +="</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='13'><strong>Projected Debtors Receipts </strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td width='16%'>Opening Debtors Balance</td>"
                        for (i=1;i<=12;i++){

                          html += "<td width='6%'>"+data['currency']+' '+number_format(data['opening_debt_'+i],0,'.',',')+"</td>"

                        }
                    html +="</tr>"
                    +"<tr>"
                        +"<td width='16%'>Aged Receivables</td>";
                        if (data['colspan_rsvbl'] == "0"){
							for (i=1;i<=12;i++){
							   html += "<td width='6%'>"+data['currency']+' '+number_format(data['total_cash_'+i],0,'.',',')+"</td>"
							}
                        }else{

                          for (colspan = 1; colspan <= data['colspan_rsvbl'];colspan++){
                            html += "<td width='6%'>"+data['currency']+' '+number_format(0,0,'.',',')+"</td>"
                          }

                          for (count = 1;count<=12 - data['colspan_rsvbl'];count++){
                            html += "<td width='6%'>"+data['currency']+' '+number_format(data['total_cash_'+count],0,'.',',')+"</td>"
                          }

                        }
                    html += "</tr>"
                      +"<tr>"
                        +"<td colspan='13'>&nbsp;</td>"
                      +"</tr>"
                      +"<tr class='info'>"
                          +"<td width='16%'>Total Receipts</td>"
                          if (data['colspan_rsvbl'] == "0"){
							for (i=1;i<=12;i++){
							   html += "<td width='6%' id='tot_receipt_"+i+"'>"+data['currency']+' '+number_format(data['tot_receipt_'+i],0,'.',',')+"</td>"
							}
                          }else{

                            for (count = 1;count<=12 ;count++){
                              html += "<td width='6%' id='tot_receipt_"+count+"'>"+data['currency']+' '+number_format(data['tot_receipt_'+count],0,'.',',')+"</td>"
                            }
                          }
                    html +="</tr>"
                    +"</table>"
                +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#disbursement' class='accordion-toggle collapsed'>Disbursements</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='disbursement' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report-cash_2' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='20%'>Account</th>"
                          for(i=0;i<data['table_header'].length;i++){

                            html +="<th>"+data['table_header'][i]+"</th>"

                          }
                        html +="</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='13'><strong>Projected Disbursements</strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td width='16%'>Opening Creditors Balance</td>"
                          for (i=1;i<=12;i++){
                              html += "<td width='6%'>"+data['currency']+' '+number_format(data['creditors_'+i],0,'.',',')+"</td>"
                          }
                    html+="</tr>"
                    +"<tr>"
                        +"<td width='16%'>Import Product Costs</td>";
                          for (i=1;i<=12;i++){
                            html += "<td width='6%'>"+data['currency']+' '+number_format(data['imported_scp_'+i],0,'.',',')+"</td>"
                          }

                    html +="</tr>"
                        +"<td width='16%'>Local Product Costs </td>"
                        if (data['colspan_pybl'] == "0"){

                          for (i=1;i<=12;i++){
                            html += "<td width='6%'>"+data['currency']+' '+number_format(data['product_scp_'+i],0,'.',',')+"</td>"
                          }

                        }else{

                          for (colspan = 1; colspan <= data['colspan_pybl'];colspan++){
                            html += "<td width='6%'>"+data['currency']+' '+number_format(0,0,'.',',')+"</td>"
                          }

                          for (count= 1;count<=12 - data['colspan_pybl'];count++){
                            html += "<td width='6%'>"+data['currency']+' '+number_format(data['product_scp_'+count],0,'.',',')+"</td>"
                          }
                        }
                    html +="</tr>"
                    +"<tr>"
                        +"<td width='16%'>Service Costs </td>"
                        if (data['colspan_pybl'] == "0"){

                          for (i=1;i<=12;i++){
                            html += "<td width='6%'>"+data['currency']+' '+number_format(data['cogserviceyear1']/12,0,'.',',')+"</td>"
                          }

                        }else{

                          for (colspan = 1; colspan <= data['colspan_pybl'];colspan++){
                            html += "<td width='6%'>"+data['currency']+' '+number_format(0,0,'.',',')+"</td>"
                          }

                          for (count= 1 + data['colspan_pybl'];count<=12;count++){
                            html += "<td width='6%'>"+data['currency']+' '+number_format(data['cogserviceyear1']/12,0,'.',',')+"</td>"
                          }
                        }
                    html +="</tr>"
                    +"<tr>"
                        +"<td width='16%'>Operating Expenses </td>"
                        if (data['colspan_pybl'] == "0"){

                          for (i=1;i<=12;i++){
                            html += "<td width='6%'>"+data['currency']+' '+number_format(data['oeyear1']/12,0,'.',',')+"</td>"
                          }

                        }else{

                          for (colspan = 1; colspan <= data['colspan_pybl'];colspan++){
                            html += "<td width='6%'>"+data['currency']+' '+number_format(0,0,'.',',')+"</td>"
                          }

                          for (count= 1 + data['colspan_pybl'];count<=12;count++){
                            html += "<td width='6%'>"+data['currency']+' '+number_format(data['oeyear1']/12,0,'.',',')+"</td>"
                          }
                        }
                    html +="</tr>"
                    +"<tr>"
                      +"<td colspan='13'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                      +"<td width='16%'>Sub - Total Costs</td>"
                        if (data['colspan_pybl'] == "0"){

                          for (i=1;i<=12;i++){
                            html += "<td width='6%' id='total_cost_"+i+"'>"+data['currency']+' '+number_format(data['subtot_cost_'+i],0,'.',',')+"</td>"
                          }

                        }else{

                          for (colspan = 1; colspan <= data['colspan_pybl'];colspan++){
                              if (colspan == 1 || colspan == 2 || colspan == 3){
                                html += "<td width='6%' id='total_cost_"+colspan+"'>"+data['currency']+' '+number_format(data['subtot_cost_'+colspan],0,'.',',')+"</td>"
                              }
                          }

                          for (count= 1 + data['colspan_pybl'];count<=12;count++){
                            html += "<td width='6%' id='total_cost_"+count+"'>"+data['currency']+' '+number_format(data['subtot_cost_'+count],0,'.',',')+"</td>"
                          }
                        }
                    html +="</tr>"
                    +"<tr class='info'>"
                      +"<td width='16%'>VAT/GST Component</td>"
                        if (data['colspan_pybl'] == "0"){

                          for (i=1;i<=12;i++){
                            html += "<td width='6%' id='gstvat_comp_"+i+"'>"+data['currency']+' '+number_format(data['vatgst_component_'+i],0,'.',',')+"</td>"
                          }

                        }else{

                          for (colspan = 1; colspan <= data['colspan_pybl'];colspan++){

                                html += "<td width='6%' id='gstvat_comp_"+colspan+"'>"+data['currency']+' '+number_format(0,0,'.',',')+"</td>"

                          }

                          for (count= 1 + data['colspan_pybl'];count<=12;count++){
                            html += "<td width='6%' id='gstvat_comp_"+count+"'>"+data['currency']+' '+number_format(data['vatgst_component_'+count],0,'.',',')+"</td>"
                          }
                        }
                    html+="</tr>"
                    +"<tr>"
                      +"<td colspan='13'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                      +"<td width='16%'>Total Disburstments</td>"
                        if (data['colspan_pybl'] == "0"){

                          for (i=1;i<=12;i++){
                            html += "<td width='6%' id='total_disburstment_"+i+"'>"+data['currency']+' '+number_format(data['tot_disbusrt_'+i],0,'.',',')+"</td>"
                          }

                        }else{

                          for (colspan = 1; colspan <= data['colspan_pybl'];colspan++){
                              if (colspan == 1 || colspan == 2){
                                  html += "<td width='6%' id='total_disburstment_"+colspan+"'>"+data['currency']+' '+number_format(data['tot_disbusrt_'+colspan],0,'.',',')+"</td>"
                              }else{
                                  html += "<td width='6%' id='total_disburstment_"+colspan+"'>"+data['currency']+' '+number_format(0,0,'.',',')+"</td>"
                              }
                          }

                          for (count= 1 + data['colspan_pybl'] ;count<=12;count++){
                            html += "<td width='6%' id='total_disburstment_"+count+"'>"+data['currency']+' '+number_format(data['tot_disbusrt_'+count],0,'.',',')+"</td>"
                          }
                        }
                    html+="</tr>"
                  +"</table>"
                +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#payroll_liabilities' class='accordion-toggle collapsed'>Payroll Liabilities</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='payroll_liabilities' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report-cash_3' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='20%'>Account</th>"
                          for(i=0;i<data['table_header'].length;i++){

                            html +="<th>"+data['table_header'][i]+"</th>"

                          }
                        html +="</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='13'><strong>Projected Payroll Liabilities</strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td colspan='13'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='16%'>Total Payroll Liabilities</td>"
						for(i=1;i<=12;i++){
						+"<td width='6%' id='tot_payrol_liability_"+i+"'>"+data['currency']+' '+number_format(data['grandplyear1']/12,0,'.',',')+"</td>"	
						}
                    +"</tr>"
                  +"</table>"
                +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#operation_outgoing' class='accordion-toggle collapsed'>Total Operating Outgoings</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='operation_outgoing' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report-cash_4' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='20%'>Account</th>"
                          for(i=0;i<data['table_header'].length;i++){

                            html +="<th>"+data['table_header'][i]+"</th>"

                          }
                        html +="</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='13'><strong>Projected Total Operating Outgoings</strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td colspan='13'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='16%'>Total Operating Outgoings</td>"
						for(i=1;i<=12;i++){
							+"<td width='6%' id='tot_operating_outgoing_"+i+"'>"+data['currency']+' '+number_format(data['totoperate_outgoing_'+i],0,'.',',')+"</td>"
						}
                    +"</tr>"
                  +"</table>"
                +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#business_activity' class='accordion-toggle collapsed'>Business Activity Statement</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='business_activity' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report-cash_5' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='20%'>Account</th>"
                          for(i=0;i<data['table_header'].length;i++){

                            html +="<th>"+data['table_header'][i]+"</th>"

                          }
                        html +="</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='13'><strong>Projected Business Activity Statement</strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td width='16%'>GST/ VAT Payment </td>"

                          for (count=1;count<=12;count++){
                              html += "<td width='6%' id='gstvat_payment_"+count+"'>"+data['currency']+' '+number_format(data['gstvat_payment'],0,'.',',')+"</td>"
                          }

                    html+="</tr>"
                    +"<tr>"
                        +"<td width='16%'>Company Tax</td>"
						for (i=1;i<=12;i++){
						+"<td width='6%' id='company_tax_"+i+"'>"+data['currency']+' '+number_format(data['comptax_month_'+i],0,'.',',')+"</td>"
						}
                    +"</tr>"
                    +"<tr>"
                        +"<td colspan='13'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='16%'>Total Business Activity</td>"
						for (i=1;i<=12;i++){
							+"<td width='6%' id='tot_business_activity_"+i+"'>"+data['currency']+' '+number_format(data['totbusiness_act_'+i],0,'.',',')+"</td>"
						}
                    +"</tr>"
                    +"</table>"
                +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#total_outgoings' class='accordion-toggle collapsed'>Total Outgoings </a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='total_outgoings' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report-cash_6' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='20%'>Account</th>"
                          for(i=0;i<data['table_header'].length;i++){

                            html +="<th>"+data['table_header'][i]+"</th>"

                          }
                        html +="</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='13'><strong>Projected Total Outgoings </strong></td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='16%'>Total Outgoings</td>"
						for (i=1;i<=12;i++){
							+"<td width='6%' id='tot_outgoings_"+i+"'>"+data['currency']+' '+number_format(data['tot_outgoings_'+i],0,'.',',')+"</td>"
						}
                    +"</tr>"
                  +"</table>"
                +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#net_gains' class='accordion-toggle collapsed'>Net Operating Cash Gain (Loss)</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='net_gains' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<form method='post' action='' id='form_cash_flow'>"
                  +"<table id='table-report-cash_7' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='20%'>Account</th>"
                          for(i=0;i<data['table_header'].length;i++){

                            html +="<th>"+data['table_header'][i]+"</th>"

                          }
                        html +="</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='2'><strong>Net Operating Cash Gain (Loss)</strong></td>"
                        +"<td colspan='11'></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td width='16%'>Net Cash Gain (Loss)</td>"
                        
						for (i=1;i<=12;i++){
							+"<td width='6%' id='net_operating_cash_gain_"+i+"'>"+data['currency']+' '+number_format(data['netcash_gain_'+i],0,'.',',')+"</td>"
						}
                    +"</tr>"
                    +"<tr>"
                        +"<td width='16%'>Capital Purchase</td>"
                        
						for (i=1;i<=12;i++){
							+"<td width='6%'>"
                            +"<div class='form-group'>"
                              +"<input type='number' class='form-control inputfont' id='cp_"+i+"' name='cp_"+i+"' value='"+data['cp_'+i]+"' onchange='calculationSection8()'>"
                            +"</div>"
                        +"</td>"
						}
                    +"</tr>"
                    +"<tr>"
                        +"<td width='16%'>Investor Issued (Shares)</td>"
                        
						for (i=1;i<=12;i++){
							+"<td width='6%'>"
                            +"<div class='form-group'>"
                              +"<input type='number' class='form-control inputfont' id='is_"+i+"' name='is_"+i+"' value='"+data['is_'+i]+"' onchange='calculationSection8()'>"
                            +"</div>"
                        +"</td>"
						}
                    +"</tr>"
                    +"<tr>"
                        +"<td width='16%'>Dividends Paid</td>"
                        
						for (i=1;i<=12;i++){
							+"<td width='6%'>"
                            +"<div class='form-group'>"
                              +"<input type='number' class='form-control inputfont' id='dp_"+i+"' name='dp_"+i+"' value='"+data['dp_'+i]+"' onchange='calculationSection8()'>"
                            +"</div>"
							+"</td>"
						}
                    +"</tr>"
                    +"<tr>"
                        +"<td width='6%'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='16%'>Total Capital Items</td>"
                        
						for (i=1;i<=12;i++){
							+"<td width='6%' id='tot_capital_items_"+i+"'>"+data['currency']+" 0</td>"
						}
						
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='16%'>Closing Cash Balance</td>"
                       
						for (i=1;i<=12;i++){
							+"<td width='6%' id='closing_cash_balance_"+i+"'>"+data['currency']+" 0</td>"
						}
                    +"</tr>"
                    +"</table>"
                    +"</form>"
                +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#gstvst_collected' class='accordion-toggle collapsed'>GST / VAT Collected</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='gstvst_collected' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<form method='post' action='' id='form_cash_flow'>"
                  +"<table id='table-report-cash_8' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='20%'>Account</th>"
                         for(i=0;i<data['table_header'].length;i++){

                            html +="<th>"+data['table_header'][i]+"</th>"

                          }
                        html +="</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='2'><strong> GST/VAT Analysis</strong></td>"
                        +"<td colspan='11'></td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='16%'> GST/VAT Collected</td>"
                          for (i=1;i<=12;i++){
                            html += "<td width='6%'>"+data['currency']+' '+number_format(data['gstvat_collect_'+i],0,'.',',')+"</td>"
                          }
                    html +="</tr>"
                    +"<tr class='info'>"
                        +"<td width='16%'>GST/VAT Paid</td>"
                          for (i=1;i<=12;i++){
                            html += "<td width='6%' id='gstvat_id_"+i+"'>"+data['currency']+' '+number_format(data['gstvat_paids_'+i],0,'.',',')+"</td>"
                          }
                    html +="</tr>"
                    +"<tr class='info'>"
                        +"<td width='16%'>GST </td>"
                          for (i=1;i<=12;i++){
                            html += "<td width='6%' id='gstvat_remittance_"+i+"'>"+data['currency']+' '+number_format(data['gstvat_remittance_'+i],0,'.',',')+"</td>"
                          }
                    html +="</tr>"
                  +"</table>"
                +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
      +"</div>"


        $('.btn_pdf').attr('href', 'FinancialReport/monthly_cash_flow_pdf');

        $('#ReportModalBody').append(html);

        $('#ReportModalTitle').html('Monthly Cash Flow Report');

        $('#ReportModal').modal('show');

        for (k=0;k<=8;k++){

          $("#table-report-cash_"+k).tableHeadFixer({'left' : 1});

          $("#table-report-cash_"+k).css({
               "min-width": "920px"
          });
        }

        calculationCashFlow(data['currency'], data['vat_in_days']);
      },
      error: function (jqXHR, textStatus, errorThrown)
      {
          alert(errorThrown);
      }
  });
  $('#ReportModal').on('hidden.bs.modal', function(){

    $('#ReportModalBody').html("");
    active = true

  })

}

function calculationSection8(){

  var $form = $("#form_cash_flow").serialize();

  $.ajax({
    url: site_url+"FinancialReport/save_cash_flow",
    type: "POST",
    data: $form,
    dataType: 'json',
    encode: true,
    success: function (data){
      calculationCashFlow(data['currency']);
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(textStatus, errorThrown);
    }
  })

}

function calculationCashFlow(currency, vat_in_days){

  for(count=1;count<=12;count++){


    var tot_business_activity = 0
    var tot_outgoing = 0;
    var tot_capital_items = 0;
    var closing_cash_balance = 0;
    var tot_outgoing_operation = 0;
    var tot_net_cash_gain = 0;

    $('#tot_capital_items_'+count).html(currency+' '+number_format(tot_capital_items,0,'.',','));


    var gstvat_id = $('#gstvat_id_'+count).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g,'');

    $('#gstvat_comp_'+count).html(currency+' '+number_format(gstvat_id,0,'.',','));

    var cal_total_disburstment = 0;

    cal_total_disburstment = parseFloat($('#total_cost_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, '')) + parseFloat($('#gstvat_comp_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''))

    $('#total_disburstment_'+count).html(currency+' '+number_format(cal_total_disburstment,0,'.',','));

      //section 6
      var gstvat_pay = 0;
      if (vat_in_days == "30") {
        gstvat_pay = $('#gstvat_remittance_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, '');
        $('#gstvat_payment_'+count).html(currency+' '+number_format(gstvat_pay,0,'.',','));
        gstvat_pay = 0;
      }
      if (vat_in_days == "90") {
        if (count == 4){
          for (i=1;i<=3;i++){
            gstvat_pay += parseFloat($('#gstvat_remittance_'+i).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''))
          }
          $('#gstvat_payment_'+count).html(currency+' '+number_format(gstvat_pay,0,'.',','));
          gstvat_pay = 0;
        }else if (count == 7){
          for (i=4;i<=6;i++){
            gstvat_pay += parseFloat($('#gstvat_remittance_'+i).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''))
          }
          $('#gstvat_payment_'+count).html(currency+' '+number_format(gstvat_pay,0,'.',','));
          gstvat_pay = 0;
        }else if (count == 10){
          for (i=7;i<=9;i++){
            gstvat_pay += parseFloat($('#gstvat_remittance_'+i).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''))
          }
          $('#gstvat_payment_'+count).html(currency+' '+number_format(gstvat_pay,0,'.',','));
          gstvat_pay = 0;
        }else if (count == 12){
          for (i=10;i<=12;i++){
            gstvat_pay += parseFloat($('#gstvat_remittance_'+i).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''))
          }
          $('#gstvat_payment_'+count).html(currency+' '+number_format(gstvat_pay,0,'.',','));
          gstvat_pay = 0;
        }
      }

    tot_business_activity = parseFloat($('#gstvat_payment_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, '')) + parseFloat($('#company_tax_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''));
    $('#tot_business_activity_'+count).html(currency+' '+number_format(tot_business_activity,0,'.',','));

    //Section 5
    tot_outgoing_operation = parseFloat($('#total_disburstment_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, '')) + parseFloat($('#tot_payrol_liability_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''));
    $('#tot_operating_outgoing_'+count).html(currency+' '+number_format(tot_outgoing_operation,0,'.',','))

    //Section 7

    tot_outgoing = parseFloat($('#tot_operating_outgoing_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, '')) + parseFloat($('#tot_business_activity_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''));

    $('#tot_outgoings_'+count).html(currency+' '+number_format(tot_outgoing,0,'.',','))

    //Section 8
    tot_net_cash_gain = parseFloat($('#tot_receipt_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, '')) - parseFloat($('#tot_outgoings_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''));

    $('#net_operating_cash_gain_'+count).html(currency+' '+number_format(tot_net_cash_gain,0,'.',','));

    tot_capital_items = parseFloat($('#cp_'+count).val()) + parseFloat($('#is_'+count).val()) + parseFloat($('#dp_'+count).val());

    if (count == 1){

      closing_cash_balance = parseFloat($('#opening_cash_balance_'+count).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g,'')) + parseFloat($('#net_operating_cash_gain_'+count).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g,'')) + tot_capital_items;

      $('#closing_cash_balance_'+count).html(currency+' '+number_format(closing_cash_balance,0,'.',','));

    }

    if (count >= 2){

      var prev = 0;

      prev = count - 1;

      var closing_prev = parseFloat($('#closing_cash_balance_'+prev).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''));

      $('#opening_cash_balance_'+count).html(currency+' '+number_format(closing_prev,0,'.',','))

      closing_cash_balance = parseFloat($('#opening_cash_balance_'+count).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g,'')) + parseFloat($('#net_operating_cash_gain_'+count).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g,'')) + tot_capital_items;

      $('#closing_cash_balance_'+count).html(currency+' '+number_format(closing_cash_balance,0,'.',','));

    }

  }
}

function monthly_profit_loss(){

  var html='';

  $.ajax({
    url: site_url+"FinancialReport/ajax-profit_lost_report",
    type: "GET",
    dataType: "JSON",
      success: function (data)
      {
        html += "<div class='panel-group' id='issued_shares_accordion'>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#profit_loss' class='accordion-toggle'>Projected Income</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='profit_loss' class='panel-collapse collapse in'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report-monthly_0' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='20%'>Account</th>"
                          for(i=0;i<data['table_header'].length;i++){

                            html +="<th>"+data['table_header'][i]+"</th>"

                          }
                        html +="</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='13'><strong>Projected Income From Sales</strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td width='6%'>Imported Products</td>"
                       
						for (i=1;i<=12;i++){
							+"<td width='6%'>"+data['currency']+' '+number_format(data['imported_spp_'+i],0,'.',',')+"</td>"
						}
                    +"</tr>"
                    +"<tr>"
                        +"<td width='6%'>Products</td>"
                        
						for (i=1;i<=12;i++){
							+"<td width='6%'>"+data['currency']+' '+number_format(data['product_spp_'+i],0,'.',',')+"</td>"
						}
                    +"</tr>"
                    +"<tr>"
                        +"<td width='6%'>Services</td>"
                        
						for (i=1;i<=12;i++){
							+"<td width='6%'>"+data['currency']+' '+number_format(data['serviceyear'] / 12,0,'.',',')+"</td>"
						}
                    +"</tr>"
                    +"<tr>"
                        +"<td colspan='13'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='6%'>Total Income</td>"
                        
						for (i=1;i<=12;i++){
							+"<td width='6%'>"+data['currency']+' '+number_format(data['total_income_'+i],0,'.',',')+"</td>" 
						}
                    +"</tr>"
                  +"</table>"
                +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#cost_goods' class='accordion-toggle collapsed'>Projected Cost Of Goods</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='cost_goods' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report-monthly_1' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='20%'>Account</th>"
                          for(i=0;i<data['table_header'].length;i++){

                            html +="<th>"+data['table_header'][i]+"</th>"

                          }
                        html +="</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='13'><strong>Projected Cost Of Goods From Sales </strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td width='6%'>Imported Products</td>"
                       
						for (i=1;i<=12;i++){
							+"<td width='6%'>"+data['currency']+' '+number_format(data['imported_ssp_'+i],0,'.',',')+"</td>"
						}
                      +"</tr>"
                    +"<tr>"
                        +"<td width='6%'>Products</td>"
                        
						for (i=1;i<=12;i++){
							+"<td width='6%'>"+data['currency']+' '+number_format(data['product_ssp_'+i],0,'.',',')+"</td>"
						}
                      +"</tr>"
                    +"<tr>"
                        +"<td width='6%'>Services</td>"
                        
						for (i=1;i<=12;i++){
							+"<td width='6%'>"+data['currency']+' '+number_format(data['cogserviceyear1']/12,0,'.',',')+"</td>"
						}
                      +"</tr>"
                    +"<tr>"
                        +"<td colspan='13'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='6%'>Total Cost Of Goods</td>"
                       
						for (i=1;i<=12;i++){
							+"<td width='6%'>"+data['currency']+' '+number_format(data['total_income2_'+i],0,'.',',')+"</td>"
						}
                      +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='6%'>% Cost Of Goods</td>"
                       
						for (i=1;i<=12;i++){
							+"<td width='6%'>"+number_format(data['tot_income_percent_'+i],2,'.',',')+" %</td>"
						}
                      +"</tr>"
                  +"</table>"
                +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#gross_profit' class='accordion-toggle collapsed'>Projected Gross Profit</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='gross_profit' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-report-monthly_2' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                        for(i=0;i<data['table_header'].length;i++){

                          html +="<th>"+data['table_header'][i]+"</th>"

                        }
                      html +="</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='13'><strong>Projected Gross Profit </strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td colspan='13'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='6%'>Total Gross Profit</td>"
                     
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+data['currency']+' '+number_format(data['gross_profit_'+i],0,'.',',')+"</td>" 
					  }
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='6%'>% Gross Profit</td>"
                      
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+number_format(data['gross_profit_percent_'+i],2,'.',',')+" %</td>"  
					  }
                    +"</tr>"
                +"</table>"
              +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#projected_operating_expense' class='accordion-toggle collapsed'>Projected Marketing and Operating Expenses</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='projected_operating_expense' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-report-monthly_3' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                       for(i=0;i<data['table_header'].length;i++){

                          html +="<th>"+data['table_header'][i]+"</th>"

                        }
                      html +="</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='13'><strong>Projected Marketing and Operating Expenses</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='6%'>Bad Debts Off</td>"
                      
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+data['currency']+' '+number_format(data['bdfyear1']/12,0,'.',',')+"</td>"  
					  }
                    +"</tr>"
                  +"<tr>"
                      +"<td width='6%'>P/E Depreciation</td>"
                     
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+data['currency']+' '+number_format(data['pedyear1']/12,0,'.',',')+"</td>"  
					  }
                    +"</tr>"
                  +"<tr>"
                      +"<tr>"
                      +"<td width='16%'>Operating Expenses </td>"

                        for (i=1;i<=12;i++){
                          html += "<td width='6%'>"+data['currency']+' '+number_format(data['oeyear1']/12,0,'.',',')+"</td>"
                        }


                  html += "<tr>"
                      +"<td colspan='13'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='6%'>Total Operating Expenses</td>"


                        for (i=1;i<=12;i++){
                          html += "<td width='6%'>"+data['currency']+' '+number_format(data['grandoeyear1']/12,0,'.',',')+"</td>"
                        }

                  html += "<tr>"
                  +"<tr class='info'>"
                      +"<td width='6%'>% Operating Expenses</td>"
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+number_format(data['oepercentmonth_'+i],2,'.',',')+" %</td>"  
					  }
                    +"</tr>"
                +"</table>"
              +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#payroll_expense' class='accordion-toggle collapsed'>Projected Payroll Expenses</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='payroll_expense' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-report-monthly_4' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                        for(i=0;i<data['table_header'].length;i++){

                          html +="<th>"+data['table_header'][i]+"</th>"

                        }
                      html +="</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='13'><strong>Projected Payroll Expenses</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td colspan='13'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='6%'>Total Payroll Liabilities</td>"
                     
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+data['currency']+' '+number_format(data['grandplyear1']/12,0,'.',',')+"</td>"
					  }
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='6%'>% Payroll Liabilities</td>"
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+number_format(data['plpercentyear1']/12,2,'.',',')+" %</td>"  
					  }
                  +"</tr>"
                +"</table>"
              +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#operating_expense' class='accordion-toggle collapsed'>Operating Expenses</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='operating_expense' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-report-monthly_5' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                        for(i=0;i<data['table_header'].length;i++){

                          html +="<th>"+data['table_header'][i]+"</th>"

                        }
                      html +="</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='13'><strong>Operating Expenses</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td colspan='13'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='6%'>Total Expenses</td>"
                      
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+data['currency']+' '+number_format(data['grandexpensesyear1']/12,0,'.',',')+"</td>"  
					  }
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='6%'>% Expenses</td>"
                      
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+number_format(data['expensespercentyear1']/12,2,'.',',')+" %</td>"  
					  }
                  +"</tr>"
                +"</table>"
              +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#tax_profit' class='accordion-toggle collapsed'>Pre Tax Profit</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='tax_profit' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-report-monthly_6' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                        for(i=0;i<data['table_header'].length;i++){

                          html +="<th>"+data['table_header'][i]+"</th>"

                        }
                      html +="</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='13'><strong>Pre- Tax Profit</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td colspan='13'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='6%'>Total Pre Tax Profit</td>"
                      
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+data['currency']+' '+number_format(data['pretax_profit_month_'+i],0,'.',',')+"</td>"  
					  }
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='6%'>% Pre Tax Profit</td>"
                      
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+number_format(data['pretaxpercentyear1']/12,2,'.',',')+" %</td>"  
					  }
                  +"</tr>"
                +"</table>"
              +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#net_profit' class='accordion-toggle collapsed'>Projected Net Profit</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='net_profit' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-report-monthly_7' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                        for(i=0;i<data['table_header'].length;i++){

                          html +="<th>"+data['table_header'][i]+"</th>"

                        }
                      html +="</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='13'><strong>Projected Net Profit</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='6%'>Company Tax</td>"
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+data['currency']+' '+number_format(data['comptax_month_'+i],0,'.',',')+"</td>"  
					  }
                  +"</tr>"
                  +"<tr>"
                      +"<td width='6%'>Net Profit</td>"
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+data['currency']+' '+number_format(data['net_profit_month_'+i],0,'.',',')+"</td>"  
					  }
                  +"</tr>"
                  +"<tr>"
                      +"<td colspan='13'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='6%'>% Net Profit</td>"
                      
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+number_format(data['netprofitpercentyear1']/12,2,'.',',')+" %</td>"  
					  }
                +"</tr>"
                +"</table>"
              +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
        +"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#accumulate_gross' class='accordion-toggle collapsed'>Accumulated Net Profit</a>"
            +"</h4>"
          +"</div>"
          +"<div class='panel-body'>"
            +"<div id='accumulate_gross' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-report-monthly_8'  class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='20%'>Account</th>"
                        for(i=0;i<data['table_header'].length;i++){

                          html +="<th>"+data['table_header'][i]+"</th>"

                        }
                      html +="</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='13'><strong>Accumulated Net Profit</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td colspan='13'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr class='info'>"
                      +"<td width='6%'>&nbsp;</td>"
					  for (i=1;i<=12;i++){
						+"<td width='6%'>"+data['currency']+' '+number_format(data['accumulatedgrossprofit_month_'+i],0,'.',',')+"</td>"  
					  }
                  +"</tr>"
                +"</table>"
              +"</div>"
            +"</div>"
          +"</div>"
        +"</div>"
      +"</div>"

        $('.btn_pdf').attr('href', 'FinancialReport/monthly_profit_loss_pdf');

        $('#ReportModalBody').append(html);

        $('#ReportModalTitle').html('Monthly Profit and Loss Report');

        $('#ReportModal').modal('show');

        for (i=0;i<=8;i++){

          $("#table-report-monthly_"+i).tableHeadFixer({'left' : 1});

          $("#table-report-monthly_"+i).css({
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

    active = true

  })
}

$('.next-step, .prev-step').on('click', function (e) {
    var $activeTab = $('.tab-pane.active');
    $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
    if ($(e.target).hasClass('next-step'))
    {
        var nextTab = $activeTab.next('.tab-pane').attr('id');
        $('[href="#' + nextTab + '"]').removeClass('btn-default');
        $('[href="#' + nextTab + '"]').tab('show');
        $("body").scrollTop(0);
    } else
    {
        var prevTab = $activeTab.prev('.tab-pane').attr('id');
        $('[href="#' + prevTab + '"]').removeClass('btn-default');
        $('[href="#' + prevTab + '"]').tab('show');
        $("body").scrollTop(0);
    }
});


/*function profit_loss_report(){
    var html ='';

    $.ajax({
    url: "<?php// echo site_url('FinancialReport/ajax-profit_lost_report') ?>",
    type: "GET",
    dataType: "JSON",
      success: function (data)
      {
        html +="<div class='panel-group' id='issued_shares_accordion'>"
        +"<div class='panel panel-primary'>"
            +"<div class='panel-heading'>"
              +"<h4 class='panel-title'>"
                +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#profit_loss' class='accordion-toggle'>Projected Income</a>"
              +"</h4>"
            +"</div>"
            +"<div class='panel-body'>"
              +"<div id='profit_loss' class='panel-collapse collapse in'>"
                  +"<div class='table-responsive'>"
                    +"<table id='table-report_0' class='table table-striped table-condensed'>"
                      +"<thead>"
                        +"<tr class='warning'>"
                            +"<th width='25%'>Account</th>"
                            +"<th>Year 1</th>"
                            +"<th>Year 2</th>"
                            +"<th>Year 3</th>"
                          +"</tr>"
                      +"</thead>"
                      +"<tr class='success'>"
                          +"<td colspan='4'><strong>Projected Income From Sales</strong></td>"
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
                          +"<td colspan='4'>&nbsp;</td>"
                      +"</tr>"
                      +"<tr class='info'>"
                          +"<td width='25%'>Total Income</td>"
                          +"<td width='25%'>"+data['currency']+' '+number_format(data['grandyear'],0,'.',',')+"</td>"
                          +"<td width='25%'>"+data['currency']+' '+number_format(data['grandyear2'],0,'.',',')+"</td>"
                          +"<td width='25%'>"+data['currency']+' '+number_format(data['grandyear3'],0,'.',',')+"</td>"


                      +"</tr>"
                    +"</table>"
                  +"</div>"
              +"</div>"
            +"</div>"
          +"</div>"
          +"<div class='panel panel-primary'>"
            +"<div class='panel-heading'>"
              +"<h4 class='panel-title'>"
                +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#cost_goods' class='accordion-toggle collapsed'>Projected Cost Of Goods</a>"
              +"</h4>"
            +"</div>"
            +"<div class='panel-body'>"
              +"<div id='cost_goods' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report_1' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='25%'>Account</th>"
                          +"<th>Year 1</th>"
                          +"<th>Year 2</th>"
                          +"<th>Year 3</th>"
                        +"</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='4'><strong>Projected Cost Of Goods From Sales </strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td width='25%'>Imported Products</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['importedyear'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['importedyear2'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['importedyear3'],0,'.',',')+"</td>"

                    +"</tr>"
                    +"<tr>"
                        +"<td width='25%'>Products</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['productyear'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['productyear2'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['productyear3'],0,'.',',')+"</td>"

                    +"</tr>"
                    +"<tr>"
                        +"<td width='25%'>Services</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['cogserviceyear1'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['cogserviceyear2'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['cogserviceyear3'],0,'.',',')+"</td>"

                    +"</tr>"
                    +"<tr>"
                        +"<td colspan='4'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='25%'>Total Cost Of Goods</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandcogyear1'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandcogyear2'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandcogyear3'],0,'.',',')+"</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='25%'>% Cost Of Goods</td>"
                        +"<td width='25%'>"+number_format(data['cogpercentyear1'],2,'.',',')+" %</td>"
                        +"<td width='25%'>"+number_format(data['cogpercentyear2'],2,'.',',')+" %</td>"
                        +"<td width='25%'>"+number_format(data['cogpercentyear3'],2,'.',',')+" %</td>"
                    +"</tr>"
                  +"</table>"
                +"</div>"
              +"</div>"
            +"</div>"
          +"</div>"
          +"<div class='panel panel-primary'>"
            +"<div class='panel-heading'>"
              +"<h4 class='panel-title'>"
                +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#gross_profit' class='accordion-toggle collapsed'>Projected Gross Profit</a>"
              +"</h4>"
            +"</div>"
            +"<div class='panel-body'>"
              +"<div id='gross_profit' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report_2' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='25%'>Account</th>"
                          +"<th>Year 1</th>"
                          +"<th>Year 2</th>"
                          +"<th>Year 3</th>"
                        +"</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='4'><strong>Projected Gross Profit </strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td colspan='4'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='25%'>Total Gross Profit</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandgpyear1'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandgpyear2'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandgpyear3'],0,'.',',')+"</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='25%'>% Gross Profit</td>"
                        +"<td width='25%'>"+number_format(data['gppercentyear1'],2,'.',',')+" %</td>"
                        +"<td width='25%'>"+number_format(data['gppercentyear2'],2,'.',',')+" %</td>"
                        +"<td width='25%'>"+number_format(data['gppercentyear3'],2,'.',',')+" %</td>"
                    +"</tr>"
                  +"</table>"
                +"</div>"
              +"</div>"
            +"</div>"
          +"</div>"
          +"<div class='panel panel-primary'>"
            +"<div class='panel-heading'>"
              +"<h4 class='panel-title'>"
                +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#projected_operating_expense' class='accordion-toggle collapsed'>Projected Marketing and Operating Expenses</a>"
              +"</h4>"
            +"</div>"
            +"<div class='panel-body'>"
              +"<div id='projected_operating_expense' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report_3' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='25%'>Account</th>"
                          +"<th>Year 1</th>"
                          +"<th>Year 2</th>"
                          +"<th>Year 3</th>"
                        +"</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='4'><strong>Projected Marketing and Operating Expenses</strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td width='25%'>Bad Debts Off</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['bdfyear1'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['bdfyear2'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['bdfyear3'],0,'.',',')+"</td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td width='25%'>P/E Depreciation</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['pedyear1'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['pedyear2'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['pedyear3'],0,'.',',')+"</td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td width='25%'>Operating Expenses</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['oeyear1'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['oeyear2'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['oeyear3'],0,'.',',')+"</td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td colspan='4'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='25%'>Total Operating Expenses</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandoeyear1'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandoeyear2'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandoeyear3'],0,'.',',')+"</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='25%'>% Operating Expenses</td>"
                        +"<td width='25%'>"+number_format(data['oepercentyear1'],2,'.',',')+" %</td>"
                        +"<td width='25%'>"+number_format(data['oepercentyear2'],2,'.',',')+" %</td>"
                        +"<td width='25%'>"+number_format(data['oepercentyear3'],2,'.',',')+" %</td>"
                    +"</tr>"
                  +"</table>"
                +"</div>"
              +"</div>"
            +"</div>"
          +"</div>"
          +"<div class='panel panel-primary'>"
            +"<div class='panel-heading'>"
              +"<h4 class='panel-title'>"
                +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#payroll_expense' class='accordion-toggle collapsed'>Projected Payroll Expenses</a>"
              +"</h4>"
            +"</div>"
            +"<div class='panel-body'>"
              +"<div id='payroll_expense' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report_4' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='25%'>Account</th>"
                          +"<th>Year 1</th>"
                          +"<th>Year 2</th>"
                          +"<th>Year 3</th>"
                        +"</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='4'><strong>Projected Payroll Expenses</strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td colspan='4'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='25%'>Total Payroll Liabilities</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandplyear1'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandplyear2'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandplyear3'],0,'.',',')+"</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='25%'>% Payroll Liabilities</td>"
                        +"<td width='25%'>"+number_format(data['plpercentyear1'],2,'.',',')+" %</td>"
                        +"<td width='25%'>"+number_format(data['plpercentyear2'],2,'.',',')+" %</td>"
                        +"<td width='25%'>"+number_format(data['plpercentyear3'],2,'.',',')+" %</td>"
                    +"</tr>"
                  +"</table>"
                +"</div>"
              +"</div>"
            +"</div>" 
          +"</div>"
          +"<div class='panel panel-primary'>"
            +"<div class='panel-heading'>"
              +"<h4 class='panel-title'>"
                +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#operating_expense' class='accordion-toggle collapsed'>Operating Expenses</a>"
              +"</h4>"
            +"</div>"
            +"<div class='panel-body'>"
              +"<div id='operating_expense' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report_5' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='25%'>Account</th>"
                          +"<th>Year 1</th>"
                          +"<th>Year 2</th>"
                          +"<th>Year 3</th>"
                        +"</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='4'><strong>Operating Expenses</strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td colspan='4'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='25%'>Total Expenses</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandexpensesyear1'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandexpensesyear2'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandexpensesyear3'],0,'.',',')+"</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='25%'>% Expenses</td>"
                        +"<td width='25%'>"+number_format(data['expensespercentyear1'],2,'.',',')+" %</td>"
                        +"<td width='25%'>"+number_format(data['expensespercentyear2'],2,'.',',')+" %</td>"
                        +"<td width='25%'>"+number_format(data['expensespercentyear3'],2,'.',',')+" %</td>"
                    +"</tr>"
                  +"</table>"
                +"</div>"
              +"</div>"
            +"</div>"
          +"</div>"
          +"<div class='panel panel-primary'>"
            +"<div class='panel-heading'>"
              +"<h4 class='panel-title'>"
                +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#tax_profit' class='accordion-toggle collapsed'>Pre Tax Profit</a>"
              +"</h4>"
            +"</div>"
            +"<div class='panel-body'>"
              +"<div id='tax_profit' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report_6' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='25%'>Account</th>"
                          +"<th>Year 1</th>"
                          +"<th>Year 2</th>"
                          +"<th>Year 3</th>"
                        +"</tr>"
                    +"</thead>"
                    +"<tr class='success'>"
                        +"<td colspan='4'><strong>Pre- Tax Profit</strong></td>"
                    +"</tr>"
                    +"<tr>"
                        +"<td colspan='4'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='25%'>Total Pre Tax Profit</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandpretaxyear1'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandpretaxyear2'],0,'.',',')+"</td>"
                        +"<td width='25%'>"+data['currency']+' '+number_format(data['grandpretaxyear3'],0,'.',',')+"</td>"
                    +"</tr>"
                    +"<tr class='info'>"
                        +"<td width='25%'>% Pre Tax Profit</td>"
                        +"<td width='25%'>"+number_format(data['pretaxpercentyear1'],2,'.',',')+" %</td>"
                        +"<td width='25%'>"+number_format(data['pretaxpercentyear2'],2,'.',',')+" %</td>"
                        +"<td width='25%'>"+number_format(data['pretaxpercentyear3'],2,'.',',')+" %</td>"
                    +"</tr>"
                  +"</table>"
                +"</div>"
              +"</div>"
            +"</div>"
          +"</div>"
          +"<div class='panel panel-primary'>"
            +"<div class='panel-heading'>"
              +"<h4 class='panel-title'>"
                +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#net_profit' class='accordion-toggle collapsed'>Projected Net Profit</a>"
              +"</h4>"
            +"</div>"
            +"<div class='panel-body'>"
              +"<div id='net_profit' class='panel-collapse collapse'>"
                +"<div class='table-responsive'>"
                  +"<table id='table-report_7' class='table table-striped table-condensed'>"
                    +"<thead>"
                      +"<tr class='warning'>"
                          +"<th width='25%'>Account</th>"
                          +"<th>Year 1</th>"
                          +"<th>Year 2</th>"

*/

             
             
             
             
      /**
 * Created by Kupletsky Sergey on 05.11.14.
 *
 * Material Design Responsive Table
 * Tested on Win8.1 with browsers: Chrome 37, Firefox 32, Opera 25, IE 11, Safari 5.1.7
 * You can use this table in Bootstrap (v3) projects. Material Design Responsive Table CSS-style will override basic bootstrap style.
 * JS used only for table constructor: you don't need it in your project
 */



$(document).ready(function() {

    var table = $('#table');

    // Table bordered
    $('#table-bordered').change(function() {
        var value = $( this ).val();
        table.removeClass('table-bordered').addClass(value);
    });

    // Table striped
    $('#table-striped').change(function() {
        var value = $( this ).val();
        table.removeClass('table-striped').addClass(value);
    });
  
    // Table hover
    $('#table-hover').change(function() {
        var value = $( this ).val();
        table.removeClass('table-hover').addClass(value);
    });

    // Table color
    $('#table-color').change(function() {
        var value = $(this).val();
        table.removeClass(/^table-mc-/).addClass(value);
    });
});




// jQuery’s hasClass and removeClass on steroids
// by Nikita Vasilyev
// https://github.com/NV/jquery-regexp-classes
(function(removeClass) {

	jQuery.fn.removeClass = function( value ) {
		if ( value && typeof value.test === "function" ) {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var elem = this[i];
				if ( elem.nodeType === 1 && elem.className ) {
					var classNames = elem.className.split( /\s+/ );

					for ( var n = classNames.length; n--; ) {
						if ( value.test(classNames[n]) ) {
							classNames.splice(n, 1);
						}
					}
					elem.className = jQuery.trim( classNames.join(" ") );
				}
			}
		} else {
			removeClass.call(this, value);
		}
		return this;
	}

})(jQuery.fn.removeClass);       
             
     
     
     
     
     
     
             
             
$(".wizard").each(function() {
  var index = 0;
  var wizard = $(this);

  $(wizard).prepend('<div class="wizardProgress"></div>');
  $(wizard).prepend('<div class="header"></div>');

  $(wizard).find(".wizardPanel").each(function() {

    $(wizard).find(".wizardProgress").append("<div>" + $(this).data("title") + "</div>");
  });

  $(wizard).find(".wizardProgress div").click(function() {
    selectPanel($(this).index());
  });

  $(wizard).append('<div class="footer"><button id="btnPrev" class="btn btn-default">Prev</button><button id="btnNext" class="btn btn-primary">Next</button></div>');

  $(wizard).find("#btnPrev").click(function() {
    selectPanel($(".wizardProgress .selected").index() - 1);
  });
  $(wizard).find("#btnNext").click(function() {
    selectPanel($(".wizardProgress .selected").index() + 1);
  });

  selectPanel(0);

  function selectPanel(index) {


      if (index == 0) {
        $(wizard).find("#btnPrev").fadeOut();
      } else {
        $(wizard).find("#btnPrev").fadeIn();
      }

      if (index == $(".wizardProgress div").length - 1) {
        $(wizard).find("#btnNext").fadeOut();
      } else {
        $(wizard).find("#btnNext").fadeIn();
      }

      $(".wizardProgress .selected").removeClass("selected");
      var selectedTab = $(".wizardProgress div").get(index);
      $(selectedTab).addClass("selected");

      $(".wizardPanel").slideUp();
      var selectedPanel = $(wizard).find(".wizardPanel").get(index);
      $(selectedPanel).slideDown();
    }
  

});