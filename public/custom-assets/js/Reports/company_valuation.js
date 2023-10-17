function company_valuation(){

	var html = '';

	$.ajax({
	    url: "Report/CompanyValuation/ajax-company_value",
	    type: "GET",
	    dataType: "JSON",
	      success: function (compval)
	      {
	      	html +="<form method='post' action='' id='company_form'>"
          +"<div class='panel-group' id='company_value_accordion'>"
	      	+"<div class='panel panel-primary'>"
	      			+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#company_value_accordion' href='#comp_value' class='accordion-toggle'>Company Valuation</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='comp_value' class='panel-collapse collapse in'>"
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
	      	+"</div>"

	      	$('.btn_pdf').attr('href', 'Report/CompanyValuation/company_value_pdf');

	        $('#ReportModalBody').append(html);

	        $('#ReportModalTitle').html('Company Valuation Report');

	        $('#ReportModal').modal('show');

	        for (k=0;k<=1;k++){

	          $("#table-comp_value_"+k).tableHeadFixer({'left' : 1});

	          $("#table-comp_value_"+k).css({
	               "min-width": "920px"
	          });
	        }

          $('#comp_val_slider_1').on('input change', function (){
            var percent1 = parseInt($('#comp_val_slider_1').val());

            var $form = $("#company_form").serialize();

            $.ajax({
              url: "Report/CompanyValuation/save_slider1",
              type: "POST",
              data: $form,
              dataType: 'json',
              encode: true,
              success: function (compval){
                for (k=1;k<=3;k++){

                  $('#comp_val_price_earn_'+k).html(number_format(percent1,2,'.',','));
                  $('#comp_val_gross_value_'+k).html(number_format(parseFloat($('#comp_val_after_tax_'+k).html().replace(/\$ |\€ |\₹ /g, '').replace(/,/g, '')) * percent1,0,'.',','));

                  $('#comp_val_net_present2_'+k).html(compval['currency']+' '+number_format(compval['comp_val_net_present2_'+k],0,'.',','));
                  $('#comp_val_net_present1_'+k).html(compval['currency']+' '+number_format(compval['comp_val_net_present1_'+k],0,'.',','));
                  $('#comp_val_net_present0_'+k).html(compval['currency']+' '+number_format(compval['comp_val_net_present0_'+k],0,'.',','));
                }
              },
              error: function(jqXHR, textStatus, errorThrown){
                console.log(textStatus, errorThrown);
              }
            })


          })

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