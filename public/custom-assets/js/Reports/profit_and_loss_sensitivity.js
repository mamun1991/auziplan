function profit_and_loss_sensitivity(){
	var html = '';

	$.ajax({
	    url: "Report/ProfitLossSensitivity/ajax-profit_loss_sensitivity",
	    type: "GET",
	    dataType: "JSON",
	      success: function (proloss)
	      {
	      	html +="<div class='panel-group' id='sensitivity_accordion'>"
	      	+"<div class='panel panel-primary'>"
	      		+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#sensitivity_accordion' href='#sensitivity_section1' class='accordion-toggle collapsed'>Profit and Loss Sensitivity</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='sensitivity_section1' class='panel-collapse collapse'>"
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
                            +"<div class='col-xs-8'>"
                            +"<input name='sensitivity_val_slider_1' id='sensitivity_val_slider_1' type='range' min='0' max='100' value='"+proloss['lower']+"' class='RangeSelectorInput' style='margin-top: 10px;'/>"
                          +"</div>"
                          +"<div class='col-xs-4'>"
                            +"<p style='text-align: center;display: table; margin: 0 auto;width: 40px; height: 40px;border-radius: 50%;background: #5bc0de; color: white; margin-top: 2px;'><span class='sensitivity_val_slider_1_text' style='vertical-align:middle;line-height:40px;'>"+proloss['lower']+" %</span></p>"
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
                          +"<div class='col-xs-8'>"
                            +"<input name='sensitivity_val_slider_3' id='sensitivity_val_slider_3' type='range' min='0' max='100' value='"+proloss['higher']+"' class='RangeSelectorInput' style='margin-top: 10px;'/>"
                          +"</div>"
                          +"<div class='col-xs-4'>"
                            +"<p style='text-align: center;display: table; margin: 0 auto;width: 40px; height: 40px;border-radius: 50%;background: #5bc0de; color: white; margin-top: 2px;'><span class='sensitivity_val_slider_3_text' style='vertical-align:middle;line-height:40px;'>"+proloss['higher']+" %</span></p>"
                          +"</div>"
                      +"</td>"
                      +"<td colspan='3'>&nbsp;</td>"
                  +"</tr>"
                +"</table>"
                +"</form>"
              +"</div>"
          	+"</div>"
          	+"</div>"
          	+"<div class='panel panel-danger'>"
	      			+"<div class='panel-heading'>"
		            +"<h4 class='panel-title'>"
		              +"<a data-toggle='collapse' data-parent='#sensitivity_accordion' href='#sensitivity_section2' class='accordion-toggle collapsed'>Income Lower Than Forecast</a>"
		            +"</h4>"
	          	+"</div>"
		          +"<div id='sensitivity_section2' class='panel-collapse collapse'>"
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
          	+"<div class='panel panel-primary'>"
	      			+"<div class='panel-heading'>"
		            +"<h4 class='panel-title'>"
		              +"<a data-toggle='collapse' data-parent='#sensitivity_accordion' href='#sensitivity_section3' class='accordion-toggle '>Current Income Expected</a>"
		            +"</h4>"
	          	+"</div>"
		          +"<div id='sensitivity_section3' class='panel-collapse collapse in'>"
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
          	+"<div class='panel panel-success'>"
	      			+"<div class='panel-heading'>"
		            +"<h4 class='panel-title'>"
		              +"<a data-toggle='collapse' data-parent='#sensitivity_accordion' href='#sensitivity_section4' class='accordion-toggle collapsed'>Income Higher Than Forecast</a>"
		            +"</h4>"
	          	+"</div>"
		          +"<div id='sensitivity_section4' class='panel-collapse collapse'>"
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
	      	+"</div>"

	      	$('.btn_pdf').attr('href', 'Report/ProfitLossSensitivity/profit_loss_sensitivity_pdf');

	        $('#ReportModalBody').append(html);

	        $('#ReportModalTitle').html('Profit and Loss Sensitivity');

	        $('#ReportModal').modal('show');

	        for (k=0;k<=3;k++){

	          $("#table-sensitivity_"+k).tableHeadFixer({'left' : 1});

	          $("#table-sensitivity_"+k).css({
	               "min-width": "920px"
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