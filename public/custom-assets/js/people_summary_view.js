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
		formattedNumber = thousandsSep + numbersString.slice(-3) + formattedNumber;
		numbersString = numbersString.slice(0,-3);
	}

	return (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');
	}
	var table1;
	$(document).ready(function () {

		$('#save').click(function () {
			vi = $('.RangeSelectorInput').val();
			var datapass = 'si=' + vi;

			$.ajax({
				type: 'POST',
				data: datapass,
				url: site_url+"people/saving_range",
				datatype: 'json',
				success:
                                    function (data) {
                                    //console.log(data);
                                    var datas = jQuery.parseJSON(data);
                                    //alert(datas);
                                    if (datas.status == 'yes') {

                                    $('#modalConfirmYesNo').modal('show');
                                    $("#lblTitleConfirmYesNo").html("");
			            $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
			            +"<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
			            +"<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
			            +"c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
			            +"c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
			            +"<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
			            +"<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
			            +"<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
			            +"</svg>"
			            +"</div>"
			            +"<p class='alert-box'>Your changes have been saved successfully</p>");

			          $("#btnNoConfirmYesNo").hide();

			          $("#btnYesConfirmYesNo").html('Okey');

			          $("#btnYesConfirmYesNo").off('click').click(function () {

			          $('#modalConfirmYesNo').modal('hide');

			          $("#btnNoConfirmYesNo").show();

			           $("#btnYesConfirmYesNo").html('Yes');
			          });
                                    }
                                    if (datas.status == 'no') {
                                            $('#modalConfirmYesNo').modal('show');

	              	$("#lblTitleConfirmYesNo").html("User Information");
	              	$("#lblMsgConfirmYesNo").html("Error while saving the change");

	              	$("#btnNoConfirmYesNo").hide();

	              	$("#btnYesConfirmYesNo").html('Okey');

	              	$("#btnYesConfirmYesNo").off('click').click(function () {

	                $('#modalConfirmYesNo').modal('hide');

	                $("#btnNoConfirmYesNo").show();

	              	$("#btnYesConfirmYesNo").html('Yes');
	              });

							}
						}
			});
		});

		//datatables
		table1 = $('#tablepeoplesummary').DataTable({
			"Processing": true, //Feature control the processing indicator.
			"ServerSide": true, //Feature control DataTables' server-side processing mode.

			//"order": [], //Initial no order.

			// Load data for the table's content from an Ajax source
			"ajax": {
				"url": site_url+"People/peoplesummary",
				"type": "GET"
			},
			"drawCallback": function (d) {
				if (d.json !== undefined)
				{
					setTimeout(function () {
						CalcSerVal(d.json.Service_income, d.json.currency);
					}, 300);
					$('.RangeSelectorInput').val(parseInt(d.json.Service_income));
					$('.ServiceIncomePers').text(parseInt(d.json.Service_income));
					$('.RangeSelectorInput').on("input change", function () {
						$('#ChartDisplay').html('');
						var vi = $(this).val();
						//var vi = $('.ServiceIncomePers').text();
						$('.ServiceIncomePers').text(vi);
						//$("#ChartDisplay").find("div").remove();
						setTimeout(function () {
							CalcSerVal(vi, d.json.currency);
						}, 300);
					});
				}
			}
		});

	});
	function reload_tablepeoplesummary()
	{
		table1.ajax.reload(null, false); //reload datatable ajax
	}
	var myChart;
	function CalcSerVal(ser, cur) {
		$('#ChartDisplay').html('');
		var tb = $('#tablepeoplesummary');
		ser = parseInt(ser);
		var ty1 = 0, ty2 = 0, ty3 = 0, tw = 0, tm = 0, tq = 0;
		tb.find('tbody tr').each(function () {
			var w = parseInt($(this).find('td:eq(4)').text().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
			var m = parseInt($(this).find('td:eq(5)').text().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
			var q = parseInt($(this).find('td:eq(6)').text().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
			var y1 = parseInt($(this).find('td:eq(7)').text().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
			var y2 = parseInt((y1 * (ser / 100)) + y1);
			var y3 = parseInt((y2 * (ser / 100)) + y2);
			tw += w;
			tm += m;
			tq += q;
			ty1 += y1;
			ty2 += y2;
			ty3 += y3;
			if (isNaN(y2)) {
				$(this).find('td:eq(8)').text(cur + number_format(y1, 0, '.', ','));
				$(this).find('td:eq(9)').text(cur + number_format(y1, 0, '.', ','));
			} else {
				$(this).find('td:eq(8)').text(cur + number_format(y2, 0, '.', ','));
				$(this).find('td:eq(9)').text(cur + number_format(y3, 0, '.', ','));
			}

		});
		if (isNaN(tw)){
		  $('.SumWTotal').text(cur + number_format(0, 0, '.', ','));
		}else{
		  $('.SumWTotal').text(cur + number_format(tw, 0, '.', ','));
		}
		if (isNaN(tm)){
		  $('.SumMTotal').text(cur + number_format(0, 0, '.', ','));
		}else{
		  $('.SumMTotal').text(cur + number_format(tm, 0, '.', ','));
		}
		if (isNaN(tq)){
		  $('.SumQTotal').text(cur + number_format(0, 0, '.', ','));
		}else{
		  $('.SumQTotal').text(cur + number_format(tq, 0, '.', ','));
		}
		if(isNaN(ty1)){
		  $('.SumYTotal1').text(cur + number_format(0, 0, '.', ','));
		}else{
		  $('.SumYTotal1').text(cur + number_format(ty1, 0, '.', ','));
		}
		if (isNaN(ty2)) {
		  $('.SumYTotal2').text(cur + number_format(0, 0, '.', ','));
		}else {
		  $('.SumYTotal2').text(cur + number_format(ty2, 0, '.', ','));
		}
		if (isNaN(ty3)) {
		  $('.SumYTotal3').text(cur + number_format(0, 0, '.', ','));
		}else {
		  $('.SumYTotal3').text(cur + number_format(ty3, 0, '.', ','));
		}
		//ChartDisplay

		var ctx = document.getElementById("ChartDisplay");
		if (myChart != undefined) {
			myChart.destroy();
		}
		myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["Year 1", "Year 2", "Year 3"],
				datasets: [{
                                data: [ty1, ty2, ty3],
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
                                borderWidth: 1
                            }]
			},
			options: {
                            legend: {
                                display: false
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            },
                            tooltips: {
	       mode: 'label',
	       label: 'mylabel',
	       callbacks: {
	           label: function(tooltipItem, data) {
	               return cur+' '+number_format(tooltipItem.yLabel,0,'.',','); },},
	      },
			}
		});
	}