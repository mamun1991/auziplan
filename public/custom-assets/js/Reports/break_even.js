function break_even(){

	var html = '';

	$.ajax({
	    url: "Report/BreakEvenPoint/ajax-break_even",
	    type: "GET",
	    dataType: "JSON",
	      success: function (breven)
	      {
	      	html +="<div class='panel-group' id='break_even_accordion'>"
	      	+"<div class='panel panel-primary'>"
	      			+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#break_even_accordion' href='#breakeven_income' class='accordion-toggle'>Yearly Cash Flow Forecast</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='breakeven_income' class='panel-collapse collapse in'>"
              +"<div class='table-responsive'>"
                +"<table id='table-break_even_0' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='21%'>Account</th>"
                        +"<th>Year 1</th>"
                        +"<th>Year 2</th>"
                        +"<th>Year 3</th>"
                        +"<th>Description</th>"
                      +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='4'><strong>Breakeven Income Level</strong></td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='21%' colspan='1'>Total Income</td>"
                      for (i=1;i<=3;i++) {
                      	html +="<td>"+breven['currency']+' '+number_format(breven['break_even_total_income_'+i],0,'.',',')+"</td>"
                      }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='21%' colspan='1'>Variable Costs</td>"
                      	for (i=1;i<=3;i++) {
                      		html +="<td>"+breven['currency']+' '+number_format(breven['break_even_variable_costs_'+i],0,'.',',')+"</td>"
                      	}
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='21%' colspan='1'>Contribution</td>"
                      	for (i=1;i<=3;i++) {
                      		html +="<td>"+breven['currency']+' '+number_format(breven['break_even_contribution_'+i],0,'.',',')+"</td>"
                      	}
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td colspan='4'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='21%' colspan='1'>Contribution Margin %</td>"
                      	for (i=1;i<=3;i++) {
                      		html +="<td>"+number_format(breven['break_even_contribution_margin_'+i],2,'.',',')+" %</td>"
                      	}
                  html +="</tr>"
                  +"<tr>"
                      +"<td colspan='4'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td colspan='4'><strong>Fixed Costs</strong></td>"
                  +"</tr>"
                  +"<tr>"
                    +"<td width='21%' colspan='1'>Employment Expenses</td>"
                    	for (i=1;i<=3;i++) {
                    		html +="<td>"+breven['currency']+' '+number_format(breven['break_even_employement_expense_'+i],0,'.',',')+"</td>"
                    	}
                  html +="</tr>"
                  +"<tr>"
                    +"<td width='21%' colspan='1'>Overheads</td>"
                    	for (i=1;i<=3;i++) {
                    		html +="<td>"+breven['currency']+' '+number_format(breven['break_even_overheads_'+i],0,'.',',')+"</td>"
                    	}
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td colspan='4'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='21%' colspan='1'><strong>Total Fixed Costs</strong></td>"
                      	for (i=1;i<=3;i++) {
                      		html +="<td>"+breven['currency']+' '+number_format(breven['break_even_total_fixed_costs_'+i],0,'.',',')+"</td>"
                      	}
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td colspan='4'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='21%' colspan='1'><strong>Breakeven Income Required</strong></td>"
                      	for (i=1;i<=3;i++) {
                      		html +="<td>"+breven['currency']+' '+number_format(breven['break_even_income_required_'+i],0,'.',',')+"</td>"
                      	}
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='21%' colspan='1'><strong>Percentage of Forecast Income</strong></td>"
                      	for (i=1;i<=3;i++) {
                      		html +="<td>"+number_format(breven['break_even_forecast_income_'+i],2,'.',',')+" %</td>"
                      	}
                  html +="</tr>"
                +"</table>"
              +"</div>"
          	+"</div>"
          	+"</div>"
          	+"<div class='panel panel-primary'>"
          	+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#break_even_accordion' href='#breakeven_point' class='accordion-toggle  collapsed'>BreakEven Point</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='breakeven_point' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-break_even_1' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='21%'>Account</th>"
                        for(i=0;i<breven['table_header'].length;i++){

                          html +="<th>"+breven['table_header'][i]+"</th>"

                        }
                      html +="</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                      +"<td colspan='13'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='21%'>Total Income</td>"
                      for (count=1;count<=12;count++){
                          html += "<td id='break_even_total_income2_"+count+"'>"+breven['currency']+' '+number_format(breven['break_even_total_income2_'+count],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='21%'>Total Expenses</td>"
                      for (count=1;count<=12;count++){
                          html += "<td id='break_even_total_expenses_"+count+"'>"+breven['currency']+' '+number_format(breven['break_even_total_expenses_'+count],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"<tr>"
                      +"<td width='21%'>Operating Profit \ (Loss) before tax</td>"
                      for (count=1;count<=12;count++){
                          html += "<td id='break_even_operating_profit_"+count+"'>"+breven['currency']+' '+number_format(breven['break_even_operating_profit_'+count],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"<tr class='info'>"
                      +"<td colspan='13'>&nbsp;</td>"
                  +"</tr>"
                  +"<tr>"
                      +"<td width='21%'>Audit Check</td>"
                      for (count=1;count<=12;count++){
                          html += "<td id='break_even_audit_check_"+count+"'>"+breven['currency']+' '+number_format(breven['break_even_audit_check_'+count],0,'.',',')+"</td>"
                        }
                  html +="</tr>"
                  +"</table>"
              +"</div>"
          	+"</div>"
          	+"</div>"
            +"<div class='panel panel-primary'>"
              +"<div class='panel-heading'>"
                +"<h4 class='panel-title'>"
                  +"<a data-toggle='collapse' data-parent='#break_even_accordion' href='#break_even_graphics' class='accordion-toggle  collapsed'>Line Chart BreakEven Point</a>"
                +"</h4>"
              +"</div>"
              +"<div id='break_even_graphics' class='panel-collapse collapse'>"
                  +"<div class='box-body chart-responsive'>"
                    +"<canvas id='breakeven_canvas' height='30%' width='100%'></canvas>"
                  +"</div>"
              +"</div>"
            +"</div>"
	      	+"</div>"
	      	+"</div>"

	      	$('.btn_pdf').attr('href', 'Report/BreakEvenPoint/break_even_pdf');

	        $('#ReportModalBody').append(html);

	        $('#ReportModalTitle').html('Break Even Point Report');

	        $('#ReportModal').modal('show');

	        for (k=0;k<=2;k++){

	          $("#table-break_even_"+k).tableHeadFixer({'left' : 1});

	          $("#table-break_even_"+k).css({
	               "min-width": "920px"
	          });
	        }

          $('#break_even_graphics').on('shown.bs.collapse', function(){

            var graph_1 = new Array;
            var graph_2 = new Array;
            var graph_3 = new Array;

            for (i=1;i<=12;i++){
              graph_1.push(breven['graph_data_1_'+i]);
              graph_2.push(breven['graph_data_2_'+i]);
              graph_3.push(breven['graph_data_3_'+i]);
            }

              drawgraphs(graph_1, graph_2, graph_3, breven['currency'], breven['table_header']);

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


function drawgraphs(graph_data_1, graph_data_2, graph_data_3, cur, label){

    var myChart;

  $('#breakeven_canvas').html('');

  var ctx = document.getElementById('breakeven_canvas');
  if (myChart != undefined) {
      myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: label,
      datasets: [{
        label: "Total Income",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        data : graph_data_1,
        //fill: false
      },{
        label: "Total Expenses",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        data : graph_data_2,
        //fill: false
      },{
        label: "Total Gross Profit",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 0.2)",
        data : graph_data_3,
        //fill: false
      }]
    },
    responsive: false,
    maintainAspectRatio: false,
    options: {
      legend: {
        display: true
      },
      scales: {
        scaleBeginAtZero: false,
        scaleOverride: true,
        scaleSteps: 20,
        scaleStepWidth: 2,
        scaleStartValue: -20,
      },
      tooltips: {
       mode: 'label',
       label: 'mylabel',
       callbacks: {
          label: function(tooltipItem, data) {
             return cur+' '+number_format(tooltipItem.yLabel,2,'.',',');
          },
        },
      },
    }
  })
}