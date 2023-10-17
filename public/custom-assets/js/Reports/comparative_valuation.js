function ComparativeValuation(){

	var html = '';

	$.ajax({
    url: "Report/ComparativeValuation/ajax-comparative_value",
    type: "GET",
    dataType: "JSON",
      success: function (comp){

      	html +="<div class='panel-group' id='comparative_accordion'>"
	      	+"<div class='panel panel-primary'>"
	      		+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#comparative_accordion' href='#comparative_value' class='accordion-toggle'>Comparative Valuation</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='comparative_value' class='panel-collapse collapse in'>"
              +"<div class='table-responsive'>"
                +"<table id='table-comparative_0' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='25%'>Description</th>"
                        +"<th width='10%'>%</th>"
                        +"<th width='15%'>Valuation</th>"
                        +"<th width='15%'>Sales</th>"
                        +"<th width='15%'>Profit After Tax</th>"
                        +"<th width='15%'>Price Earning Multiple</th>"
                    +"</tr>"
                  +"</thead>"
                	+"<tr>"
                    +"<td width='25%'>Results are lower then Actual Projections</td>"
                    for (i=1;i<=5;i++) {

                    	if (i == 1){

                    		html +="<td>"+number_format(comp['comparative_lower_'+i],2,'.',',')+" %</td>"

                    	}else if (i == 5) {

                    		html +="<td>"+number_format(comp['comparative_lower_'+i],2,'.',',')+"</td>"

                    	}else{

                    		html +="<td>"+comp['currency']+' '+number_format(comp['comparative_lower_'+i],0,'.',',')+"</td>"
                    	}
                    }
                	html +="</tr>"
                	+"<tr>"
                    +"<td width='25%'>Actual Projections</td>"
                    for (i=1;i<=5;i++) {
                    	if (i == 1){

                    		html +="<td>"+number_format(comp['comparative_actual_'+i],2,'.',',')+" %</td>"

                    	}else if (i == 5) {

                    		html +="<td>"+number_format(comp['comparative_actual_'+i],2,'.',',')+"</td>"
                    	}else{

                    		html +="<td>"+comp['currency']+' '+number_format(comp['comparative_actual_'+i],0,'.',',')+"</td>"

                    	}
                    }
                	html +="</tr>"
                	+"<tr>"
                    +"<td width='25%'>Results are higher then Actual Projections</td>"
                    for (i=1;i<=5;i++) {
                    	if (i == 1){

                    		html +="<td>"+number_format(comp['comparative_higher_'+i],2,'.',',')+" %</td>"

                    	}else if (i == 5) {

                    		html +="<td>"+number_format(comp['comparative_higher_'+i],2,'.',',')+"</td>"

                    	}else{

                    		html +="<td>"+comp['currency']+' '+number_format(comp['comparative_higher_'+i],0,'.',',')+"</td>"
                    	}
                    }
                	html +="</tr>"
                +"</table>"
            +"</div>"
	      	+"</div>"
      	+"</div>"
      	+"<div class='panel panel-primary'>"
          +"<div class='panel-heading'>"
            +"<h4 class='panel-title'>"
              +"<a data-toggle='collapse' data-parent='#comparative_accordion' href='#comparative_graphics' class='accordion-toggle collapsed'>Comparative of Valuations and Price Earning Multiple</a>"
            +"</h4>"
        	+"</div>"
        	+"<div id='comparative_graphics' class='panel-collapse collapse'>"
            +"<div class='box-body chart-responsive'>"
              +"<canvas id='Graphs'  width='200' height='100' ></canvas>"
            +"</div>"
        	+"</div>"
    		+"</div>";

      	$('.btn_pdf').attr('href', 'Report/ComparativeValuation/comparative_value_pdf');

        $('#ReportModalBody').append(html);

        $('#ReportModalTitle').html('Comparative Valuation Report');

        $('#ReportModal').modal('show');

        for (k=0;k<=1;k++){

          $("#table-comparative_"+k).tableHeadFixer({'left' : 1});

          $("#table-comparative_"+k).css({
               "min-width": "920px"
          });
        }

        $('#comparative_graphics').on('shown.bs.collapse', function(){

	         drawGraphics(comp['comparative_lower_2'],comp['comparative_actual_2'],comp['comparative_higher_2'],comp['comparative_lower_5'],comp['comparative_actual_5'],comp['comparative_higher_5']);

        })
      },
      error: function (jqXHR, textStatus, errorThrown){

          alert(errorThrown);
      }
  });

	$('#ReportModal').on('hidden.bs.modal', function(){

    $('#ReportModalBody').html("");

    active = true;

  })

}
var Charts;


function drawGraphics(b1, b2, b3, l1, l2, l3){

	var b1 = b1, b2 = b2, b3 = b3, l1 = l1, l2 = l2, l3 = l3;
	$('#Graphs').html('');

	var ctx = document.getElementById("Graphs");
  if (Charts != undefined) {
      Charts.destroy();
  }
  Charts = new Chart(ctx, {
      type: 'bar',
      data: {
  			labels: ["Lower", "Actual", "Higher"],
      	datasets: [{
      		type: 'bar',
      		label: 'Valuation',
          data: [b1, b2, b3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1,

        },{
      		type: 'line',
      		label: 'Price Earning Multiple',
          data: [l1, l2, l3],
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          yAxisID: "y-axis-1",
        }],
      },
      options: {
          legend: {
              display: true
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              },{
				        position: "right",
				        "id": "y-axis-1"
				      }]
          }
      }
  });
}