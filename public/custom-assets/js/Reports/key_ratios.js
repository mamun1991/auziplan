function key_ratios_loss(){

	var html = '';

	$.ajax({
	    url: "Report/KeyRatios/ajax-key_ratio_loss",
	    type: "GET",
	    dataType: "JSON",
	      success: function (keyrat)
	      {
	      	html +="<div class='panel-group' id='key_ratios_accordion'>"
	      	+"<div class='panel panel-primary'>"
	      			+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#key_ratios_accordion' href='#key_ratios' class='accordion-toggle'>Profitability Ratios</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='key_ratios' class='panel-collapse collapse in'>"
              +"<div class='table-responsive'>"
                +"<table id='table-key_ratios_0' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='30%'>Account</th>"
                        +"<th>Year 1</th>"
                        +"<th>Year 2</th>"
                        +"<th>Year 3</th>"
                      +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='4'><strong>Profitability Ratios</strong></td>"
                  +"</tr>"
                  +"<tr>"
                    +"<td width='25%'>Gross Profit Percentage</td>"
                    	for (i=1;i<=3;i++) {
                    		html +="<td id='key_ratios_gross_profit_"+i+"'>"+number_format(keyrat['key_ratios_gross_profit_'+i],2,'.',',')+" %</td>"
                    	}
                  html +="</tr>"
                  +"<tr>"
                    +"<td width='25%'>Net Profit Percentage</td>"
                    	for (i=1;i<=3;i++) {
                    		html +="<td id='key_ratios_net_profit_"+i+"'>"+number_format(keyrat['key_ratios_net_profit_'+i],2,'.',',')+" %</td>"
                    	}
                  html +="</tr>"
                  +"<tr>"
                    +"<td width='25%'>Employement Costs</td>"
                    	for (i=1;i<=3;i++) {
                    		html +="<td id='key_ratios_employement_costs_"+i+"'>"+number_format(keyrat['key_ratios_employement_costs_'+i],2,'.',',')+" %</td>"
                    	}
                  html +="</tr>"
                   +"<tr>"
                    +"<td width='25%'>Operating Expenses</td>"
                    	for (i=1;i<=3;i++) {
                    		html +="<td id='key_ratios_operating_expenses_"+i+"'>"+number_format(keyrat['key_ratios_operating_expenses_'+i],2,'.',',')+" %</td>"
                    	}
                  html +="</tr>"
                +"</table>"
              +"</div>"
          	+"</div>"
          	+"</div>"
          	+"<div class='panel panel-primary'>"
	      			+"<div class='panel-heading'>"
		            +"<h4 class='panel-title'>"
		              +"<a data-toggle='collapse' data-parent='#key_ratios_accordion' href='#balance_sheet_ratio' class='accordion-toggle collapsed'>Balance Sheet Ratios</a>"
		            +"</h4>"
	          	+"</div>"
		          +"<div id='balance_sheet_ratio' class='panel-collapse collapse'>"
	              +"<div class='table-responsive'>"
	                +"<table id='table-key_ratios_1' class='table table-striped table-condensed'>"
	                  +"<thead>"
	                    +"<tr class='warning'>"
	                        +"<th width='30%'>Account</th>"
	                        +"<th>Year 1</th>"
	                        +"<th>Year 2</th>"
	                        +"<th>Year 3</th>"
	                      +"</tr>"
	                  +"</thead>"
	                  +"<tr class='success'>"
	                      +"<td colspan='4'><strong>Balance Sheet Ratios</strong></td>"
	                  +"</tr>"
	                  +"<tr>"
	                    +"<td width='25%'>Earnings per share</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='key_ratios_earn_share_"+i+"'>"+keyrat['currency']+' '+number_format(keyrat['key_ratios_earn_share_'+i],2,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                  +"<tr>"
	                    +"<td width='25%'>Working Capital Ratio</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='key_ratios_work_cap_"+i+"'>"+number_format(keyrat['key_ratios_work_cap_'+i],2,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                   +"<tr>"
	                    +"<td width='25%'>Debtors Turnover</td>"
	                    	for (i=1;i<=3;i++) {
	                    		html +="<td id='key_ratios_debtors_turn_"+i+"'>"+number_format(keyrat['key_ratios_debtors_turn_'+i],2,'.',',')+"</td>"
	                    	}
	                  html +="</tr>"
	                +"</table>"
	              +"</div>"
	          	+"</div>"
          	+"</div>"
	      	+"</div>"
	      	+"</div>"

	      	$('.btn_pdf').attr('href', 'Report/KeyRatios/key_ratios_loss_pdf');

	        $('#ReportModalBody').append(html);

	        $('#ReportModalTitle').html('Key Ratios');

	        $('#ReportModal').modal('show');

	        for (k=0;k<=1;k++){

	          $("#table-key_ratios_"+k).tableHeadFixer({'left' : 1});

	          $("#table-key_ratios_"+k).css({
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