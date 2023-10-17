        //if ($.cookie('modal_analysis') != 'loaded')
        //{
        //	$.cookie('modal_analysis', 'loaded');
        //	// code to show modal
        //	setTimeout(function(){
        //		$('#modal_analysis').modal('show');
        //	}, 2000);//
        //}




        var html;
        var count, colspan;
        var active;

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
          var target = $(e.target).attr("href") // activated tab
          if ((target == '#menu0')) {
		
        //if(active == false){
        active = true;
        $('.panel-collapse').collapse('hide');
        $('.accordion-toggle').attr('data-toggle', 'collapse');

        $('#collapseOne').addClass('in');
        $('#collapseOne').css('height','');
        $('#collapseOne').attr("aria-expanded","true");
        $('#collapseOne_a').removeClass('collapsed');
        //}
            }
        });




                    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                          var target = $(e.target).attr("href") // activated tab
                          if ((target == '#startupstep2')) {

                            active = true;
                            $('.YTD_cash_flow').html('');

                            $.ajax({
			    url: "Report/CashFlow/ajax-yearly_cash_flow_report",
			    type: "GET",
			    dataType: "JSON",
			      success: function (data){

			      	html = '';
			      	html +="<div class='panel-group' id='director_accordion'>"
			        +"<div class='panel panel-default'>"
			          +"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Yearly Cash Flow Forecast"
			            +"</h3>"
			          +"</div>"
			          +"<div id='cash_income_yearly' class='panel-collapse'>"
		          		+"<div class='panel-body'>"
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
			                      +"<td width='25%'>Annual Revenue</td>"
			                      +"<td width='25%'>"+data['currency']+' '+number_format(data['annual_revenue_yearly1'],0,'.',',')+"</td>"
			                      +"<td width='25%'>"+data['currency']+' '+number_format(data['annual_revenue_yearly2'],0,'.',',')+"</td>"
			                      +"<td width='25%'>"+data['currency']+' '+number_format(data['annual_revenue_yearly3'],0,'.',',')+"</td>"
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
	          	+"</div>"

	          	+"<div class='panel panel-default'>"
			          +"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Yearly Debtors Receipts"
			            +"</h3>"
			          +"</div>"
			          +"<div id='yearly_debtors_receipts' class='panel-collapse'>"
			          	+"<div class='panel-body'>"
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
		          +"</div>"

		          +"<div class='panel panel-default'>"
			          +"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Yearly Disbursements"
			            +"</h3>"
			          +"</div>"
			          +"<div id='yearly_disbursement' class='panel-collapse'>"
			         		+"<div class='panel-body'>"
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
		                      +"<td width='25%'>Annual Costs </td>";

		                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['annual_cost_yearly1'],0,'.',',')+"</td>"
		                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['annual_cost_yearly2'],0,'.',',')+"</td>"
		                          html += "<td width='25%'>"+data['currency']+' '+number_format(data['annual_cost_yearly3'],0,'.',',')+"</td>"			                          
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
		          +"</div>"

		          +"<div class='panel panel-default'>"
			          +"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Yearly Payroll Liabilities"
			            +"</h3>"
			          +"</div>"
			          +"<div id='yearly_payroll_liabilities' class='panel-collapse'>"
			          	+"<div class='panel-body'>"
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
		          +"</div>"

		          +"<div class='panel panel-default'>"
			          +"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Yearly Operating Outgoings"
			            +"</h3>"
			          +"</div>"
			          +"<div id='yearly_operation_outgoing' class='panel-collapse'>"
			          	+"<div class='panel-body'>"
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
		          +"</div>"

		          +"<div class='panel panel-default'>"
			          +"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Yearly Business Activity Statement"
			            +"</h3>"
			          +"</div>"
			          +"<div id='yearly_business_activity' class='panel-collapse'>"
			          	+"<div class='panel-body'>"
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
		          +"</div>"

		          +"<div class='panel panel-default'>"
			          +"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Yearly Total Outgoings"
			            +"</h3>"
			          +"</div>"
			          +"<div id='yearly_total_outgoings' class='panel-collapse'>"
			          	+"<div class='panel-body'>"
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
			                      +"<td width='25%'>Franchise/Royalty Fees</td>"
			                      for (i=1;i<=3;i++){
			                      	html +="<td width='25%' id='grandroyaltyyear_"+i+"'>"+data['currency']+' '+number_format(data['grandroyaltyyear_'+i],0,'.',',')+"</td>"
			                      }
			                  html +="</tr>"
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
		          +"</div>"

		          +"<div class='panel panel-default'>"
		          	+"<div class='panel-heading'>"
		            	+"<h3 class='panel-title'>"
		              	+"Yearly Net Operating Cash Gain (Loss)"
		            	+"</h3>"
		          	+"</div>"
		          	+"<div id='yearly_net_gains' class='panel-collapse'>"
		          		+"<div class='panel-body'>"
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
			             		  		+"<td width='25%' id='yearly_cp_1'>"+data['currency']+' '+number_format(data['yearly_cp_1'],0,'.',',')+"</td>"
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
			                      +"<td width='25%' id='yearly_is_1'>"+data['currency']+' '+number_format(data['yearly_is_1'],0,'.',',')+"</td>"
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
			                      	+"<td width='25%' id='yearly_dp_1'>"+data['currency']+' '+number_format(data['yearly_dp_1'],0,'.',',')+"</td>"
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
			                      +"<td width='25%'>Loan Payments</td>"
			                      for (i=1;i<=3;i++){
			                      html +="<td width='25%' id='loanpaymentyear_"+i+"' style='color:red;'>-"+data['currency']+' '+number_format(data['loanpaymentyear_'+i],0,'.',',')+"</td>"
			                      }
			                  html +="</tr>"
			                  +"<tr>"
			                      +"<td width='25%'>&nbsp;</td>"
			                  +"</tr>"
			                  +"<tr class='info'>"
			                      +"<td width='25%'>Total Capital Items</td>"
			                      for (i=1;i<=3;i++){
									html +="<td width='25%' id='yearly_tot_capital_items_"+i+"'>"+data['currency']+" "+number_format(data['total_capital_items'],0,'.',',')+" </td>"
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
		          +"</div>"

		          +"<div class='panel panel-default'>"
			          +"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Yearly GST / VAT Collected"
			            +"</h3>"
			          +"</div>"
		          	+"<div id='yearly_gstvst_collected' class='panel-collapse'>"
		          		+"<div class='panel-body'>"
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

                        +"</div>";

			      	

                    $('.YTD_cash_flow').append(html);


                    for (k=0;k<=8;k++){

                      $("#table-report-cash-year_"+k).tableHeadFixer({'left' : 1});

                      $("#table-report-cash-year_"+k).css({
                           "min-width": "1020px"
                      });
                    }

                    //calculationYearlyCashFlow(data['currency']);

                  },
                  error: function (jqXHR, textStatus, errorThrown){

                      alert(errorThrown);
                  }
            });

	  
      }
  });
  
  
  
  
  
  
  
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var target = $(e.target).attr("href") // activated tab
      if ((target == '#startupstep3')) {

      	active = true;
      	$('.sensitivity').html('');

      	$.ajax({
            url: "Report/ProfitLossSensitivity/ajax-profit_loss_sensitivity",
            type: "GET",
            dataType: "JSON",
		      success: function (proloss){
		      	html = '';
		      	html +="<div class='panel-group' id='plan_accordion'>"
		      	+"<div class='panel panel-primary'>"
		      		+"<div class='panel-heading'>"
		            +"<h3 class='panel-title'>"
		              +"Profit and Loss Sensitivity"
		            +"</h3>"
		          +"</div>"
		          +"<div id='sensitivity_section1' class='panel-collapse'>"
	              +"<div class='panel-body'>"
		              +"<div class='table-responsive'>"
		                +"<form method='post' action='' id='form_sensitivity_report'>"
		                +"<table id='table-sensitivity_0' class='table table-striped table-condensed'>"
		                  +"<thead>"
		                    +"<tr class='warning'>"
		                        +"<th width='30%'>Account</th>"
		                        +"<th>Year 1</th>"
		                        +"<th>Year 2</th>"
		                        +"<th>Year 3</th>"
		                      +"</tr>"
		                  +"</thead>"
		                  +"<tr class='success'>"
		                      +"<td colspan='4'><strong>Profit and Loss Sensitivity</strong></td>"
		                  +"</tr>"
		                  	+"<tr>"
		                    +"<td width='21%'>Total Income Lower than Forecast</td>"
		                    	for (i=1;i<=3;i++) {
		                    		html +="<td id='sensitivity_tot_lower_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_tot_lower_'+i],0,'.',',')+"</td>"
		                    	}
		                  html +="</tr>"
		                   +"<tr>"
		                      +"<td>"
		                            +"<div class='col-xs-12'>"
		                            +"<p style='text-align: center;display: table; margin: 0 auto;width: 40px; height: 40px;border-radius: 50%;background: #5bc0de; color: white; margin-top: 2px;font-size:14px;'><span class='sensitivity_val_slider_1_text' style='vertical-align:middle;line-height:40px;'>"+proloss['lower']+" %</span></p>"
		                            +"<input name='sensitivity_val_slider_1' id='sensitivity_val_slider_1' type='range' min='0' max='100' value='"+proloss['lower']+"' class='RangeSelectorInput' style='margin-top: 10px;'/>"
		                          +"</div>"
		                      +"</td>"
		                      +"<td colspan='3'>&nbsp;</td>"
		                  +"</tr>"
		                  +"<tr>"
		                    +"<td width='21%'>Expected Total Income Forecast</td>"
		                    	for (i=1;i<=3;i++) {
		                    		html +="<td id='sensitivity_tot_current_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_tot_current_'+i],0,'.',',')+"</td>"
		                    	}
		                  html +="</tr>"
		                   +"<tr>"
		                      +"<td colspan='4'>&nbsp;</td>"
		                  +"</tr>"
		                   +"<tr>"
		                    +"<td width='21%'>Total Income Higher than Forecast</td>"
		                    	for (i=1;i<=3;i++) {
		                    		html +="<td id='sensitivity_tot_higher_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_tot_higher_'+i],0,'.',',')+"</td>"
		                    	}
		                  html +="</tr>"
		                   +"<tr>"
		                      +"<td>"
		                          +"<div class='col-xs-12'>"
		                          	+"<p style='text-align: center;display: table; margin: 0 auto;width: 40px; height: 40px;border-radius: 50%;background: #5bc0de; color: white; margin-top: 2px;font-size:14px;'><span class='sensitivity_val_slider_3_text' style='vertical-align:middle;line-height:40px;'>"+proloss['higher']+" %</span></p>"
		                            +"<input name='sensitivity_val_slider_3' id='sensitivity_val_slider_3' type='range' min='0' max='100' value='"+proloss['higher']+"' class='RangeSelectorInput' style='margin-top: 10px;'/>"
		                          +"</div>"
		                      +"</td>"
		                      +"<td colspan='3'>&nbsp;</td>"
		                  +"</tr>"
		                +"</table>"
		                +"</form>"
		              +"</div>"
	              +"</div>"
	          	+"</div>"
          	+"</div>"

	          +"<div class='panel panel-danger'>"
	      			+"<div class='panel-heading'>"
		            +"<h3 class='panel-title'>"
		              +"Income Lower Than Forecast"
		            +"</h3>"
	          	+"</div>"
			        +"<div id='sensitivity_section2' class='panel-collapse'>"
			        	+"<div class='panel-body'>"
		              +"<div class='table-responsive'>"
		                +"<table id='table-sensitivity_1' class='table table-striped table-condensed'>"
		                  +"<thead>"
	                    +"<tr class='danger'>"
		                        +"<th width='30%'>Account</th>"
		                        +"<th>Year 1</th>"
		                        +"<th>Year 2</th>"
		                        +"<th>Year 3</th>"
		                      +"</tr>"
		                  +"</thead>"
	                  +"<tr class='danger'>"
		                      +"<td colspan='4'><strong>Income Lower Than Forecast</strong></td>"
	                	+"</tr>"
	                  +"<tr>"
	                    +"<td width='21%'>Total Income</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_lower_tot_income_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_lower_tot_income_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                   +"<tr>"
	                    +"<td width='21%'>Gross Profit</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_lower_gross_profit_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_lower_gross_profit_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                   +"<tr>"
	                    +"<td width='21%'>Gross Profit Percentage</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_lower_gross_percent_"+i+"'>"+number_format(proloss['sensitivity_lower_gross_percent_'+i],0,'.',',')+" %</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr>"
	                    +"<td width='21%'>Employment Expenses</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_lower_employement_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_lower_employement_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"

	                  +"<tr>"
	                    +"<td width='21%'>Overheads</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_lower_overheads_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_lower_overheads_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr class='info'>"
		                      +"<td colspan='4'>&nbsp;</td>"
	                	+"</tr>"
	                	+"<tr>"
	                    +"<td width='21%'>Total Expenses</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_lower_tot_expenses_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_lower_tot_expenses_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr>"
	                    +"<td width='21%'>Operating Profit \ (Loss) before tax</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_lower_before_tax_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_lower_before_tax_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr class='info'>"
		                      +"<td colspan='4'>&nbsp;</td>"
	                	+"</tr>"
	                	+"<tr>"
	                    +"<td width='21%'>Tax at 30%</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_lower_tax_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_lower_tax_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr>"
	                    +"<td width='21%'>After Tax</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_lower_after_tax_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_lower_after_tax_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
		                +"</table>"
		              +"</div>"
		            +"</div>"
	          	+"</div>"
                    +"</div>"

                    +"<div class='panel panel-primary'>"
	      			+"<div class='panel-heading'>"
		            +"<h3 class='panel-title'>"
		              +"Current Income Expected"
		            +"</h3>"
	          	+"</div>"
		          +"<div id='sensitivity_section3' class='panel-collapse'>"
		          	+"<div class='panel-body'>"
		              +"<div class='table-responsive'>"
		                +"<table id='table-sensitivity_2' class='table table-striped table-condensed'>"
		                  +"<thead>"
		                    +"<tr class='warning'>"
		                        +"<th width='30%'>Account</th>"
		                        +"<th>Year 1</th>"
		                        +"<th>Year 2</th>"
		                        +"<th>Year 3</th>"
		                      +"</tr>"
		                  +"</thead>"
		                  +"<tr class='success'>"
		                      +"<td colspan='4'><strong>Current Income Expected</strong></td>"
		                  +"</tr>"
		                  +"<tr>"
	                    +"<td width='21%'>Total Income</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_current_tot_income_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_current_tot_income_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                   +"<tr>"
	                    +"<td width='21%'>Gross Profit</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_current_gross_profit_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_current_gross_profit_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                   +"<tr>"
	                    +"<td width='21%'>Gross Profit Percentage</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_current_gross_percent_"+i+"'>"+number_format(proloss['sensitivity_current_gross_percent_'+i],0,'.',',')+" %</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr>"
	                    +"<td width='21%'>Employment Expenses</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_current_employement_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_current_employement_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"

	                  +"<tr>"
	                    +"<td width='21%'>Overheads</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_current_overheads_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_current_overheads_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr class='info'>"
		                      +"<td colspan='4'>&nbsp;</td>"
	                	+"</tr>"
	                	+"<tr>"
	                    +"<td width='21%'>Total Expenses</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_current_tot_expenses_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_current_tot_expenses_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr>"
	                    +"<td width='21%'>Operating Profit \ (Loss) before tax</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_current_before_tax_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_current_before_tax_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr class='info'>"
		                      +"<td colspan='4'>&nbsp;</td>"
	                	+"</tr>"
	                	+"<tr>"
	                    +"<td width='21%'>Tax at "+proloss['company_tax']+" %</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_current_tax_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_current_tax_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr>"
	                    +"<td width='21%'>After Tax</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_current_after_tax_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_current_after_tax_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
		                +"</table>"
		              +"</div>"
		            +"</div>"
	          	+"</div>"
          	+"</div>"

          	+"<div class='panel panel-success'>"
	      			+"<div class='panel-heading'>"
		            +"<h3 class='panel-title'>"
		              +"Income Higher Than Forecast"
		            +"</h3>"
	          	+"</div>"
		          +"<div id='sensitivity_section4' class='panel-collapse'>"
		          	+"<div class='panel-body'>"
		              +"<div class='table-responsive'>"
		                +"<table id='table-sensitivity_3' class='table table-striped table-condensed'>"
		                  +"<thead>"
		                    +"<tr class='success'>"
		                        +"<th width='30%'>Account</th>"
		                        +"<th>Year 1</th>"
		                        +"<th>Year 2</th>"
		                        +"<th>Year 3</th>"
		                      +"</tr>"
		                  +"</thead>"
		                  +"<tr class='success'>"
		                      +"<td colspan='4'><strong>Income Higher Than Forecast</strong></td>"
		                  +"</tr>"
		                  +"<tr>"
	                    +"<td width='21%'>Total Income</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_higher_tot_income_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_higher_tot_income_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                   +"<tr>"
	                    +"<td width='21%'>Gross Profit</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_higher_gross_profit_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_higher_gross_profit_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                   +"<tr>"
	                    +"<td width='21%'>Gross Profit Percentage</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_higher_gross_percent_"+i+"'>"+number_format(proloss['sensitivity_higher_gross_percent_'+i],0,'.',',')+" %</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr>"
	                    +"<td width='21%'>Employment Expenses</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_higher_employement_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_higher_employement_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"

	                  +"<tr>"
	                    +"<td width='21%'>Overheads</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_higher_overheads_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_higher_overheads_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr class='info'>"
		                      +"<td colspan='4'>&nbsp;</td>"
	                	+"</tr>"
	                	+"<tr>"
	                    +"<td width='21%'>Total Expenses</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_higher_tot_expenses_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_higher_tot_expenses_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr>"
	                    +"<td width='21%'>Operating Profit \ (Loss) before tax</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_higher_before_tax_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_higher_before_tax_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr class='info'>"
		                      +"<td colspan='4'>&nbsp;</td>"
	                	+"</tr>"
	                	+"<tr>"
	                    +"<td width='21%'>Tax at 30%</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_higher_tax_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_higher_tax_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr>"
	                    +"<td width='21%'>After Tax</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='sensitivity_higher_after_tax_"+i+"'>"+proloss['currency']+' '+number_format(proloss['sensitivity_higher_after_tax_'+i],0,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
		                +"</table>"
		              +"</div>"
		            +"</div>"
	          	+"</div>"
          	+"</div>"
		      	
		      +"</div>";		      	

	        $('.sensitivity').append(html);


	        for (k=0;k<=3;k++){

	          $("#table-sensitivity_"+k).tableHeadFixer({'left' : 1});

	          $("#table-sensitivity_"+k).css({
	               "min-width": "1020px"
	          });
	        }

          $('#sensitivity_val_slider_1').on('input change', function(){

            var $form = $("#form_sensitivity_report").serialize();

            $.ajax({
                url: "Report/ProfitLossSensitivity/save_sensitivity_slider",
                type: "POST",
                data: $form,
                dataType: 'json',
                encode: true,
                success: function (data){

                  var slider = $('#sensitivity_val_slider_1').val();

                  $('.sensitivity_val_slider_1_text').html(slider+' %');

                  for (i=1;i<=3;i++){

                    var percent = (slider / 100) * parseFloat($('#sensitivity_current_tot_income_'+i).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, ''));

                    $('#sensitivity_lower_tot_income_'+i).html(proloss['currency']+' '+number_format(percent,0,'.',','));

                    var gross = parseFloat($('#sensitivity_lower_tot_income_'+i).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, '')) * parseFloat($('#sensitivity_current_gross_percent_'+i).html().replace(/| \%/g, '').replace(/\./g, '')) / 100;

                    $('#sensitivity_lower_gross_profit_'+i).html(proloss['currency']+' '+number_format(gross,0,'.',','));

                    var new_percent = parseFloat($('#sensitivity_lower_gross_profit_'+i).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, '')) / parseFloat($('#sensitivity_lower_tot_income_'+i).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, '')) * 100;

                    if (isNaN(new_percent)){

                        new_percent = 0;

                    }

                    $('#sensitivity_lower_gross_percent_'+i).html(number_format(new_percent,0,'.',',')+ ' %');

                    var before_tax = parseFloat($('#sensitivity_lower_gross_profit_'+i).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, '')) - parseFloat($('#sensitivity_lower_tot_expenses_'+i).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, ''));

                    $('#sensitivity_lower_before_tax_'+i).html(proloss['currency']+' '+number_format(before_tax,0,'.',','));

                    var tax = (proloss['company_tax'] / 100) * parseFloat($('#sensitivity_lower_before_tax_'+i).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, ''))

                    $('#sensitivity_lower_tax_'+i).html(proloss['currency']+' '+number_format(tax,0,'.',','))

                    var after_tax = parseFloat($('#sensitivity_lower_before_tax_'+i).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, '')) - parseFloat($('#sensitivity_lower_tax_'+i).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, ''));

                    $('#sensitivity_lower_after_tax_'+i).html(proloss['currency']+' '+number_format(after_tax,0,'.',','));

                    $('#sensitivity_tot_lower_'+i).html($('#sensitivity_lower_before_tax_'+i).html())
                  }
                },
                error: function (jqXHR, textStatus, errorThrown){

                      alert("Could Not Save Slider value");
                }
             });
          })

          $('#sensitivity_val_slider_3').on('input change', function(){

            var $form = $("#form_sensitivity_report").serialize();

            $.ajax({
                url: "Report/ProfitLossSensitivity/save_sensitivity_slider",
                type: "POST",
                data: $form,
                dataType: 'json',
                encode: true,
                success: function (data){

                  var slider = $('#sensitivity_val_slider_3').val();

                  $('.sensitivity_val_slider_3_text').html(slider+' %');

                  for (k=1;k<=3;k++){

                    var percent = (slider / 100) * parseFloat($('#sensitivity_current_tot_income_'+k).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, '')) + parseFloat($('#sensitivity_current_tot_income_'+k).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, ''));

                    $('#sensitivity_higher_tot_income_'+k).html(proloss['currency']+' '+number_format(percent,0,'.',','));

                    var gross = parseFloat($('#sensitivity_higher_tot_income_'+k).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, '')) * parseFloat($('#sensitivity_current_gross_percent_'+k).html().replace(/| \%/g, '').replace(/\./g, '')) / 100;

                    $('#sensitivity_higher_gross_profit_'+k).html(proloss['currency']+' '+number_format(gross,0,'.',','));

                    var new_percent_high = parseFloat($('#sensitivity_higher_gross_profit_'+k).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, '')) / parseFloat($('#sensitivity_higher_tot_income_'+k).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, '')) * 100;

                    if (isNaN(new_percent_high)){

                        new_percent_high = 0;

                    }

                    $('#sensitivity_higher_gross_percent_'+k).html(number_format(new_percent_high,0,'.',',')+ ' %');

                    var before_tax = parseFloat($('#sensitivity_higher_gross_profit_'+k).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, '')) - parseFloat($('#sensitivity_higher_tot_expenses_'+k).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, ''));

                    $('#sensitivity_higher_before_tax_'+k).html(proloss['currency']+' '+number_format(before_tax,0,'.',','));

                    var tax = (proloss['company_tax'] / 100) * parseFloat($('#sensitivity_higher_before_tax_'+k).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, ''))

                    $('#sensitivity_higher_tax_'+k).html(proloss['currency']+' '+number_format(tax,0,'.',','))

                    var after_tax = parseFloat($('#sensitivity_higher_before_tax_'+k).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, '')) - parseFloat($('#sensitivity_higher_tax_'+k).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, ''));

                    $('#sensitivity_higher_after_tax_'+k).html(proloss['currency']+' '+number_format(after_tax,0,'.',','));

                    $('#sensitivity_tot_higher_'+k).html($('#sensitivity_higher_before_tax_'+k).html())

                  }
                },
                error: function (jqXHR, textStatus, errorThrown){

                      alert("Could Not Save Slider value");
                }
            });

          })

	      	},
	      	error: function (jqXHR, textStatus, errorThrown){
	          	alert(errorThrown);
	      	}
	  		});
      }
   });
   
   
   $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var target = $(e.target).attr("href") // activated tab
      if ((target == '#startupstep4')) {

      	active = true;
      	$('.valuation').html('');

      	$.ajax({
			    url: "Report/CompanyValuation/ajax-company_value",
			    type: "GET",
			    dataType: "JSON",
			      success: function (compval){

			      	html = "";
			      	html +="<form method='post' action='' id='company_form'>"
		          +"<div class='panel-group' id='print_accordion'>"
			      	+"<div class='panel panel-defualt'>"
		      			+"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Company Valuation"
			            +"</h3>"
			          +"</div>"
			          +"<div id='comp_value' class='panel-collapse'>"
			          	+"<div class='panel-body'>"
			              +"<div class='table-responsive'>"
			                +"<table id='table-comp_value_0' class='table table-striped table-condensed'>"
			                  +"<thead>"
			                    +"<tr class='warning'>"
			                        +"<th width='30%'>Account</th>"
			                        +"<th>Low</th>"
			                        +"<th>Actual</th>"
			                        +"<th>High</th>"
			                      +"</tr>"
			                  +"</thead>"
			                  +"<tr class='success'>"
			                      +"<td colspan='4'><strong>Company Valuation</strong></td>"
			                  +"</tr>"
			                  +"<tr>"
			                      +"<td width='25%'>Valuation Range</td>"
			                      for (i=1;i<=3;i++) {
			                      	html +="<td>"+number_format(compval['comp_val_value_range_'+i],0,'.',',')+" %</td>"
			                      }
			                  html +="</tr>"
			                  +"<tr>"
			                      +"<td width='25%'>After Tax Profit Forecast in Year 3</td>"
			                      	for (i=1;i<=3;i++) {
			                      		html +="<td id='comp_val_after_tax_"+i+"'>"+compval['currency']+' '+number_format(compval['comp_val_after_tax_'+i],0,'.',',')+"</td>"
			                      	}
			                  html +="</tr>"
			                  +"<tr>"
			                      +"<td width='25%'>Price Earnings Multiple</td>"
			                      	for (i=1;i<=3;i++) {
			                      		html +="<td id='comp_val_price_earn_"+i+"'>"+number_format(compval['comp_val_price_earn_'+i],2,'.',',')+"</td>"
			                      	}
			                  html +="</tr>"

			                  +"<tr>"
			                      +"<td width='25%'>Gross Value in Year 3</td>"
			                      	for (i=1;i<=3;i++) {
			                      		html +="<td id='comp_val_gross_value_"+i+"'>"+compval['currency']+' '+number_format(compval['comp_val_gross_value_'+i],0,'.',',')+"</td>"
			                      	}
			                  html +="</tr>"
			                  +"<tr>"
			                    +"<td width='25%'>Risk Rate\ Discount Multiple</td>"
			                    	for (i=1;i<=3;i++) {
			                    		html +="<td id='comp_val_risk_discount3_"+i+"'>"+number_format(compval['comp_val_risk_discount3_'+i],0,'.',',')+" %</td>"
			                    	}
			                  html +="</tr>"
			                  +"<tr>"
			                      +"<td>"
			                          +"<input name='comp_val_slider_2' id='comp_val_slider_2' type='range' min='0' max='100' value='"+compval['comp_val_risk_discount3_1']+"' class='RangeSelectorInput' style='margin-top: 25px;'/>"
			                      +"</td>"
			                      +"<td colspan='3'>&nbsp;</td>"
			                  +"</tr>"
			                  +"<tr>"
			                    +"<td width='25%'>Net Present Value Year 2</td>"
			                    	for (i=1;i<=3;i++) {
			                    		html +="<td id='comp_val_net_present2_"+i+"'>"+compval['currency']+' '+number_format(compval['comp_val_net_present2_'+i],0,'.',',')+"</td>"
			                    	}
			                  html +="</tr>"
			                  +"<tr>"
			                    +"<td width='25%'>Risk Rate\ Discount Multiple</td>"
			                    	for (i=1;i<=3;i++) {
			                    		html +="<td id='comp_val_risk_discount2_"+i+"'>"+number_format(compval['comp_val_risk_discount2_'+i],0,'.',',')+" %</td>"
			                    	}
			                  html +="</tr>"
			                  +"<tr>"
			                      +"<td width='25%'>Net Present Value Year 1</td>"
			                      	for (i=1;i<=3;i++) {
			                      		html +="<td id='comp_val_net_present1_"+i+"'>"+compval['currency']+' '+number_format(compval['comp_val_net_present1_'+i],0,'.',',')+"</td>"
			                      	}
			                  html +="</tr>"
			                  +"<tr>"
			                      +"<td width='25%'>Risk Rate\ Discount Multiple</td>"
			                      	for (i=1;i<=3;i++) {
			                      		html +="<td id='comp_val_risk_discount1_"+i+"'>"+number_format(compval['comp_val_risk_discount1_'+i],0,'.',',')+" %</td>"
			                      	}
			                  html +="</tr>"
			                  +"<tr>"
			                      +"<td width='25%'>Net Present Value Year 0</td>"
			                      	for (i=1;i<=3;i++) {
			                      		html +="<td id='comp_val_net_present0_"+i+"'>"+compval['currency']+' '+number_format(compval['comp_val_net_present0_'+i],0,'.',',')+"</td>"
			                      	}
			                  html +="</tr>"
			                  +"<tr class='info'>"
			                      +"<td colspan='4'>&nbsp;</td>"
			                  +"</tr>"
			                  +"<tr>"
			                      +"<td width='25%'>Investment</td>"
			                      	for (i=1;i<=3;i++) {
			                      		html +="<td id='comp_val_investment_"+i+"'>"
			                            +"<div class='form-group'>"
			                              +"<input type='number' class='form-control inputfont' id='comp_val_investment_"+i+"' name='comp_val_investment_"+i+"' value='"+compval['comp_val_investment_'+i]+"'>"
			                            +"</div>"
			                          "</td>"
			                      	}
			                  html +="</tr>"
			                  +"<tr>"
			                      +"<td width='25%'><strong>Equity Percentage</strong></td>"
			                      	for (i=1;i<=3;i++) {
			                      		html +="<td id='comp_val_equity_percentage_"+i+"'>"+number_format(compval['comp_val_equity_percentage_'+i],1,'.',',')+" %</td>"
			                      	}
			                  html +="</tr>"
			                +"</table>"
			                +"</form>"
			              +"</div>"
			            +"</div>"
		          	+"</div>"
	          	+"</div>"
			      	
			      	+"</div>";

			      	

			        $('.valuation').append(html);

			        
			        for (k=0;k<=1;k++){

			          $("#table-comp_value_"+k).tableHeadFixer({'left' : 1});

			          $("#table-comp_value_"+k).css({
			               "min-width": "1020px"
			          });
			        }

		          $('#comp_val_slider_2').on('input change', function (){
		            var percent2 = parseInt($('#comp_val_slider_2').val());
		            var $form = $("#company_form").serialize();

		            $.ajax({
		              url: "Report/CompanyValuation/save_slider2",
		              type: "POST",
		              data: $form,
		              dataType: 'json',
		              encode: true,
		              success: function (compval){
		                for (k=1;k<=3;k++){

		                  $('#comp_val_risk_discount3_'+k).html(number_format(percent2,0,'.',',')+' %');
		                  $('#comp_val_net_present2_'+k).html(compval['currency']+' '+number_format(compval['comp_val_net_present2_'+k],0,'.',','));

		                  $('#comp_val_risk_discount2_'+k).html(number_format(percent2,0,'.',',')+' %');
		                  $('#comp_val_net_present1_'+k).html(compval['currency']+' '+number_format(compval['comp_val_net_present1_'+k],0,'.',','));

		                  $('#comp_val_risk_discount1_'+k).html(number_format(percent2,0,'.',',')+' %');
		                  $('#comp_val_net_present0_'+k).html(compval['currency']+' '+number_format(compval['comp_val_net_present0_'+k],0,'.',','));

		                }
		              },
		              error: function(jqXHR, textStatus, errorThrown){
		                console.log(textStatus, errorThrown);
		              }
		            })
		          })

		          for (j=1;j<=3;j++){
		            $('#comp_val_investment_'+j).on('change', function (){

		              var $form = $("#company_form").serialize();
		              $.ajax({
		                url: "Report/CompanyValuation/save_fields",
		                type: "POST",
		                data: $form,
		                dataType: 'json',
		                encode: true,
		                success: function (compval){
		                  for (k=1;k<=3;k++){

		                    $('#comp_val_equity_percentage_'+k).html(number_format(compval['comp_val_equity_percentage_'+k],1,'.',',')+' %');

		                  }
		                },
		                error: function(jqXHR, textStatus, errorThrown){
		                  console.log(textStatus, errorThrown);
		                }
		        			})

	            	})
		          }
			      },
			      error: function (jqXHR, textStatus, errorThrown){

			          alert(errorThrown);
			      }
			  });
      }
   });
   
   

   
   $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var target = $(e.target).attr("href") // activated tab
      if ((target == '#startupstep5')) {
			
				active = true;
				$('.balance_sheet').html('');

				$.ajax({
			    url: "Report/BalanceSheet/ajax-balance_sheet",
			    type: "GET",
			    dataType: "JSON",
		     	success: function (balshe){

	     		html = "";
		      	html +="<form method='post' action='' id='balance_form'>"
	          +"<div class='panel-group' id='summary_accordion'>"
			      	+"<div class='panel panel-defualt'>"
		      			+"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Current Assets"
			            +"</h3>"
			          +"</div>"
		          	+"<div id='assets_table' class='panel-collapse'>"
			          	+"<div class='panel-body'>"
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
	          	+"</div>"

	          	+"<div class='panel panel-defualt'>"
		          	+"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Current Liabilities"
			            +"</h3>"
			          +"</div>"
			          +"<div id='cur_liabilities_table' class='panel-collapse'>"
			          	+"<div class='panel-body'>"
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
	          	+"</div>"
		          
	          	+"<div class='panel panel-defualt'>"
		          	+"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Working Capital"
			            +"</h3>"
			          +"</div>"
			          +"<div id='working_capital_table' class='panel-collapse'>"
			          	+"<div class='panel-body'>"
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
	          	+"</div>"

	          	+"<div class='panel panel-defualt'>"
		          	+"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"None Current Assets"
			            +"</h3>"
			          +"</div>"
			          +"<div id='non_assest_table' class='panel-collapse'>"
			          	+"<div class='panel-body'>"
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
			                      +"<td width='20%'>Brand and Set Up Costs</td>"
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
	          	+"</div>"

	          	+"<div class='panel panel-defualt'>"
		          	+"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"None Current Liabilities"
			            +"</h3>"
			          +"</div>"
			          +"<div id='non_cur_liability' class='panel-collapse'>"
			          	+"<div class='panel-body'>"
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
			                  +"</tr>"
			                	 +"<tr>"
			                      +"<td width='20%'>Long Term Debt</td>"
			                      +"<td witdh='20%' id='balance_long_term_0'>"
			                        +balshe['currency']+' '+number_format(balshe['balance_long_term_0'],0,'.',',')
			                      +"</td>"
			                      for (i=1;i<=3;i++) {
			                      	html +="<td width='20%' id='balance_long_term_"+i+"'>"+balshe['currency']+' '+number_format(balshe['balance_long_term_'+i],0,'.',',')+"</td>"
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
	          	+"</div>"

	          	+"<div class='panel panel-defualt'>"
		          	+"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Net Assets"
			            +"</h3>"
			          +"</div>"
			          +"<div id='netassets_table' class='panel-collapse'>"
			          	+"<div class='panel-body'>"
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
	          	+"</div>"

	          	+"<div class='panel panel-defualt'>"
		          	+"<div class='panel-heading'>"
			            +"<h3 class='panel-title'>"
			              +"Shareholder Equity"
			            +"</h3>"
			          +"</div>"
			          +"<div id='shareholder_table' class='panel-collapse'>"
			          	+"<div class='panel-body'>"
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
			                          +"<input type='number' class='form-control inputfont' id='balance_issued_share_0' name='balance_issued_share_0' value='"+balshe['balance_issued_share_0']+"' onchange='calculationBalshe()'>"
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
			                  if (balshe['balance_audits_1'] != 0){
			                  	html +="<tr class='danger'>"
			                  }else{
			                  	html +="<tr class='success'>"
			                  }
			                      html +="<td width='20%'><strong>Audits</strong></td>"
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
	      		+"</div>";

		     		var msg = "";
	      		if (parseFloat(balshe['balance_audits_1']) < 0 || parseFloat(balshe['balance_audits_2']) < 0 || parseFloat(balshe['balance_sheet_3']) < 0){

	            msg = "<div class='alert alert-danger' role='alert'><p class='text-center'><b>Warning !!</b></p></div>"
                    
	            +"<div class='alert alert-danger' role='alert'>"
                 
                    + "<h3 class='text-left'>The audit check comparese the Net Assets with the  Total Equity to ensure the balance sheet balances in all Years.<br><br>If the values are not zero then the opening balances have not been entered correctly.<br><br>You must make sure that the Net Assets equal the Total Equity. </h3>"
              
	            +"</div>"
	            +"</p>";
	            $("#btnYesConfirmYesNo").removeClass('btn-primary');
	            $("#btnYesConfirmYesNo").addClass('btn-danger');

	          }else if(parseFloat(balshe['balance_audits_1']) > 0 || parseFloat(balshe['balance_audits_2']) > 0 || parseFloat(balshe['balance_sheet_3']) > 0) {

	            msg = "<div class='alert  role='alert'><p class='text-center'style='background-color: rgba(255, 255, 255, 0.0);color:rgba(255, 0, 0, 1.0);font-size:25px;font-weight:thin; '><b>Warning !!</b> <br>Your balance sheet is not correct.</p></div>"
	            +"<div class='alert  role='alert'>"

         
                    + "<h3 class='text-left'>The audit check comparese the Net Assets with the Total Equity to ensure the balance sheet balances in all Years.<br><br>If the values are not zero then the opening balances have not been entered correctly.<br><br>You must make sure that the Net Assets equal the Total Equity.</h3>"
                                        
                   +"<p class='text-center'>"
	             
	            +"</div>"
	            +"</p>";

	            $("#btnYesConfirmYesNo").removeClass('btn');
	            $("#btnYesConfirmYesNo").addClass('btn');

	          }else if(parseFloat(balshe['balance_audits_1']) == 0 || parseFloat(balshe['balance_audits_2']) == 0 || parseFloat(balshe['balance_sheet_3']) == 0){

	            msg = "<div ></div>"
                    
                    
                    
                    
                    + "<div class='checkmark'>"
                    +"<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                    +"<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                    +"c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                    +"c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                    +"<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                    +"<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                    +"<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                    +"</svg>"
                    +"</div>"
                    +"<p class='alert-box'>Excellent !! Your Balance Sheet is correct.</p>"

                    
                    
                    
                    
                  
   
	            +"</div>"
    
	            +"</p>";


	            $("#btnYesConfirmYesNo").removeClass('btn-danger btn-flat btn-sm');
	            $("#btnYesConfirmYesNo").addClass('btn-success btn-flat btn-sm');
	          }

	          $('#modalConfirmYesNo').modal('show');

                $("#lblTitleConfirmYesNo").html("");
                $("#lblMsgConfirmYesNo").html(msg);

                $("#btnNoConfirmYesNo").hide();
          	$("#btnYesConfirmYesNo").html('Close');

          	$("#btnYesConfirmYesNo").off('click').click(function () {
			      	

            	$('.balance_sheet').append(html);

		            for (k=0;k<=6;k++){

		              $("#table-balance_sheet_"+k).tableHeadFixer({'left' : 1});

		              $("#table-balance_sheet_"+k).css({
		                   "min-width": "1020px"
		              });
		            }

		          $('#modalConfirmYesNo').modal('hide');
          	});
		      },
		      error: function (jqXHR, textStatus, errorThrown){

		          alert(errorThrown);
		      }
			  });
      }
  });
  
  
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
  });
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

	          $('#balance_working_capital_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_tot_current_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseFloat($('#balance_tot_current_libilities_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	          $('#balance_tot_noncurrent_assets_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_brand_setup_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_intellectual_prop_'+i).val()) + parseFloat($('#balance_prop_equip_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	          $('#balance_tot_libilities_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_director_loan_'+i).val().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_long_term_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	          $('#balance_net_assets_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_working_capital_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_tot_noncurrent_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '') - parseFloat($('#balance_tot_libilities_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))),0,'.',','));

	          $('#balance_tot_equity_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_founder_capital_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_revaluation_reserve_'+i).val()) + parseFloat($('#balance_issued_share_'+i).val()) + parseFloat($('#balance_accu_profit_loss_'+i).val()) + parseFloat($('#balance_currentyear_profit_loss_'+i).val()),0,'.',','));

	          $('#balance_audits_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_tot_equity_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseFloat($('#balance_net_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	        }else if(i == 1){
	          //current liabilities
	          j = i - 1;

	          $('#balance_gst_payable_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_gst_payable_'+j).val()) + (parseFloat(data['grandgstvat'+i]) - parseFloat(data['yearly_gstvat_collect_'+i])),0,'.',','));

	          $('#balance_tot_current_libilities_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_trade_creditors_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_gst_payable_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	          $('#balance_working_capital_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_tot_current_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseFloat($('#balance_tot_current_libilities_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	          $('#balance_intellectual_prop_'+i).html(data['currency']+' '+number_format($('#balance_intellectual_prop_'+j).val(),0,'.',','));

	          $('#balance_tot_noncurrent_assets_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_brand_setup_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_intellectual_prop_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_prop_equip_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	          $('#balance_director_loan_'+i).html(data['currency']+' '+number_format($('#balance_director_loan_'+j).val(),0,'.',','));

	          $('#balance_long_term_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_long_term_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseFloat(data['loanpaymentyear_'+i]),0,'.',','));

	          $('#balance_tot_libilities_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_director_loan_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_long_term_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	          $('#balance_net_assets_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_working_capital_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_tot_noncurrent_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '') - parseFloat($('#balance_tot_libilities_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))),0,'.',','));

	          $('#balance_revaluation_reserve_'+i).html(data['currency']+' '+number_format($('#balance_revaluation_reserve_'+j).val(),0,'.',','));

	          $('#balance_issued_share_'+i).html(data['currency']+' '+number_format(data['balance_issued_share_'+i],0,'.',','));

	          $('#balance_accu_profit_loss_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_accu_profit_loss_'+j).val()) + parseFloat(data['yearly_dp_'+i]) + parseFloat($('#balance_currentyear_profit_loss_'+j).val()),0,'.',','));


	          $('#balance_currentyear_profit_loss_'+i).html(data['currency']+' '+number_format(data['netprofityear'+i],0,'.',','));

	          $('#balance_tot_equity_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_founder_capital_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_revaluation_reserve_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_issued_share_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_accu_profit_loss_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_currentyear_profit_loss_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	          $('#balance_audits_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_tot_equity_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseFloat($('#balance_net_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	        }else{
	       
	          j = i - 1;

	          $('#balance_gst_payable_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_gst_payable_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat(data['grandgstvat'+i]) - parseFloat(data['yearly_gstvat_collect_'+i]),0,'.',','));

	          $('#balance_tot_current_libilities_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_trade_creditors_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_gst_payable_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	          $('#balance_working_capital_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_tot_current_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseFloat($('#balance_tot_current_libilities_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	          $('#balance_intellectual_prop_'+i).html(data['currency']+' '+number_format($('#balance_intellectual_prop_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''),0,'.',','));

	          $('#balance_tot_noncurrent_assets_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_brand_setup_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_intellectual_prop_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_prop_equip_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	          $('#balance_director_loan_'+i).html(data['currency']+' '+number_format($('#balance_director_loan_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''),0,'.',','));

	          $('#balance_long_term_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_long_term_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseFloat(data['loanpaymentyear_'+i]),0,'.',','));

	          $('#balance_tot_libilities_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_director_loan_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_long_term_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')),0,'.',','));

	          $('#balance_net_assets_'+i).html(data['currency']+' '+number_format(parseFloat($('#balance_working_capital_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#balance_tot_noncurrent_assets_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '') - parseFloat($('#balance_tot_libilities_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))),0,'.',','));

	          $('#balance_revaluation_reserve_'+i).html(data['currency']+' '+number_format($('#balance_revaluation_reserve_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''),0,'.',','));

	           $('#balance_issued_share_'+i).html(data['currency']+' '+number_format(data['balance_issued_share_'+i],0,'.',','));
	           
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
	
	
            function calculationYearlyCashFlow(currency){

		var total_capital_items = 0;
		var yearly_closing_cash = 0;
		for (count=1;count <=3; count++){
			if (count == 1){
				total_capital_items = parseFloat($('#yearly_cp_'+count).html().replace(/\$ |\€ |\₹ /g, '')) + parseFloat($('#yearly_is_'+count).html().replace(/\$ |\€ |\₹ /g, '')) + parseFloat($('#yearly_dp_'+count).html().replace(/\$ |\€ |\₹ /g, '')) + parseFloat($('#loanpaymentyear_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''));
			}else{
				total_capital_items = parseFloat($('#yearly_cp_'+count).val()) + parseFloat($('#yearly_is_'+count).val()) + parseFloat($('#yearly_dp_'+count).val()) + parseFloat($('#loanpaymentyear_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''));
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

	    var gstvat_id = $('#gstvat_id_'+count).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '');

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

	    tot_capital_items = parseFloat($('#cp_'+count).val()) + parseFloat($('#is_'+count).val()) + parseFloat($('#dp_'+count).val()) + parseFloat($('#loanpaymentmonth_'+count).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''));

	    $('#tot_capital_items_'+count).html(currency+' '+number_format(tot_capital_items,0,'.',','));

	    if (count == 1){

	      closing_cash_balance = parseFloat($('#opening_cash_balance_'+count).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#net_operating_cash_gain_'+count).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + tot_capital_items;

	      $('#closing_cash_balance_'+count).html(currency+' '+number_format(closing_cash_balance,0,'.',','));

	    }

	    if (count >= 2){

	      var prev = 0;

	      prev = count - 1;

	      var closing_prev = parseFloat($('#closing_cash_balance_'+prev).html().replace(/,/g, '').replace(/\$ |\€ |\₹ /g, ''));

	      $('#opening_cash_balance_'+count).html(currency+' '+number_format(closing_prev,0,'.',','))

	      closing_cash_balance = parseFloat($('#opening_cash_balance_'+count).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseFloat($('#net_operating_cash_gain_'+count).html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + tot_capital_items;

	      $('#closing_cash_balance_'+count).html(currency+' '+number_format(closing_cash_balance,0,'.',','));

	    }

	  }
	}
	
function number_format(number, decimals, decPoint, thousandsSep){
  decimals = decimals || 0;
  number = parseFloat(number);

  if(!decPoint || !thousandsSep){
    decPoint = '.';
    thousandsSep = ',';
  }

  var roundedNumber = Math.round( Math.abs( number ) * ('1e' + decimals) ) + '';
  // add zeros to decimalString if number of decimals indicates it
  roundedNumber = (1 > number && -1 < number && roundedNumber.length <= decimals)
          ? Array(decimals - roundedNumber.length + 1).join("0") + roundedNumber
          : roundedNumber;
  var numbersString = decimals ? roundedNumber.slice(0, decimals * -1) : roundedNumber.slice(0);
  var checknull = parseInt(numbersString) || 0;

  // check if the value is less than one to prepend a 0
  numbersString = (checknull == 0) ? "0": numbersString;
  var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : '';

  var formattedNumber = "";
  while(numbersString.length > 3){
    formattedNumber = thousandsSep + numbersString.slice(-3) + formattedNumber
    numbersString = numbersString.slice(0,-3);
  }

  return (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');
	}

	$('.next-step, .prev-step').on('click', function (e) {
    var $activeTab = $('.tab-pane.active');
    if ( $(e.target).hasClass('next-step') ){

      var nextTab = $activeTab.next('.tab-pane').attr('id');
      $('[href="#'+ nextTab +'"]').removeClass('btn-default');
      $('[href="#'+ nextTab +'"]').tab('show');
      $("body").scrollTop(0);

    }else{

      var prevTab = $activeTab.prev('.tab-pane').attr('id');
      $('[href="#'+ prevTab +'"]').removeClass('btn-default');
      $('[href="#'+ prevTab +'"]').tab('show');
      $("body").scrollTop(0);
    }
  });

  $('.expandcollapse').click(function() {

	  if (active) {
	      active = false;
	      $('.panel-collapse').collapse('show');
	      $('.accordion-toggle').attr('data-toggle', '');
	      glyphicon = "minus";
	      text = "Collapse";
	      console.log(active);
	      $(this).html("<i class=\"glyphicon glyphicon-" + glyphicon + "-sign\"></i> " + text +" All");
	  } else {
	      active = true;
	      $('.panel-collapse').collapse('hide');
	      $('.accordion-toggle').attr('data-toggle', 'collapse');
	      glyphicon = "plus";
	      text = "Expand";
	      console.log(active);
	      $(this).html("<i class=\"glyphicon glyphicon-" + glyphicon + "-sign\"></i> " + text +" All");
		}
	});
        