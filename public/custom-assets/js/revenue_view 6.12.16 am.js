//if ($.cookie('modal-revenue') != 'loaded')
//{
//	$.cookie('modal-revenue', 'loaded');
	// code to show modal
//	setTimeout(function(){
//		$('#modal-revenue').modal('show');
//	}, 2000)
//}

$(function(){
	calculationRevenue(cur);
	if(count == 0) {
		$('#revenue_form').find('input[type=text]').each(function () {
			$(this).val('0');
			var $this = $(this);
			if ($this.val())
				$this.addClass('used');
			else
				$this.removeClass('used');
		});
	}else{
		$('#revenue_form').find('input[type=text]').each(function (e) {
			var $this = $(this);
			if ($this.val())
				$this.addClass('used');
			else
				$this.removeClass('used');
		});

		$('#revenue_form').find('input[name="percent_purch"]').each(function (e) {

			$(this).val(number_format($(this).val(), 2 ,'.', ',')+' %')
		})
		$('#revenue_form').find('input[name="sales_increase"]').each(function (e) {

			$(this).val(number_format($(this).val(), 2 ,'.', ',')+' %')
		})

		$('#revenue_form').find('input[name="projected_cost"]').each(function (e) {

			$(this).val(number_format($(this).val(), 2 ,'.', ',')+' %')
		})
	}

	var d = new Date();
	$('#no_days').val(days_of_a_year(d.getFullYear()));
});


$('#max_view').on('change', function (){
	calculationRevenue(cur);
	$(this).mask('########0', {reverse: true})
});

$('#no_days').on('change', function(){
	calculationRevenue(cur);
	$(this).mask('########0', {reverse: true})
});

$('#percent_purch').on('change', function(){
	calculationRevenue(cur);
	$(this).mask('##0', {reverse: true})
	$(this).val(number_format($(this).val(), 2 ,'.', ',')+' %');
});

$('#no_purchase').on('change', function(){
	calculationRevenue(cur);
	$(this).mask('########0', {reverse: true})
});

$('#no_reorder').on('change', function(){
	calculationRevenue(cur);
	$(this).mask('########0', {reverse: true})
});
$('#product_price').on('change', function(){
	calculationRevenue(cur);
	$(this).mask('########0', {reverse: true})

});

$('#projected_cost').on('change', function(){
	calculationRevenue(cur);
	$(this).mask('########0', {reverse: true})

	$(this).val(number_format($(this).val(), 2 ,'.', ',')+' %');
});

$('#sales_increase').on('change', function (){
	$(this).mask('#00', {reverse: true})
	$(this).val(number_format($(this).val(), 2 ,'.', ',')+' %');
});


$('#btnSavingSales').on('click', function(e){
    event.preventDefault();
    $('#myModal2').modal('hide');
	$('#revenue_form').find('input[type=text]').each(function(e){
		if($(this).val() == ""){

			$('#modalConfirmYes').modal('show');
			$("#lblTitleConfirmYes").html("User Confirmation");
			$("#lblMsgConfirmYes").html("Please insert all required fields ??");
			$("#btnYesConfirmYes").off('click').click(function () {
				$('#modalConfirmYes').modal('hide');
				//$('.btn-next').trigger("click");
			});
			e.preventDefault();
			return false;
		}
	});

	var form = $('#revenue_form').serialize();
	$.ajax({
		url : site_url+"revenue/AjaxSavingSales",
		type: "POST",
		data: form,
		dataType: 'json',
		encode: true,
		success: function(data)
		{
			//console.log(data);return false;
			if(data.status){
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
					+"<p class='alert-box'>Your Sales has been saved successfully !!!</p>");

				$("#btnYesConfirmYesNo").hide();
				$("#btnNoConfirmYesNo").html('Close');

				$("#btnNoConfirmYesNo").off('click').click(function () {

					$('#modalConfirmYesNo').modal('hide');
					$("#btnYesConfirmYesNo").show();
					$("#btnNoConfirmYesNo").html('No');

					location.reload();
				});
			}
		},
		error: function (xhr, ajaxOptions, thrownError){
			alert('Error adding / update data');
			console.log(xhr.status);
			console.log(xhr.responseText);
			console.log(thrownError);
		}
	});
});


$('#btnClearSales').on('click', function(){
	$.ajax({
		url : site_url+"revenue/AjaxDeleteSales",
		type: "POST",
		dataType: 'json',
		encode: true,
		success: function(data)
		{
			//console.log(data);return false;
			if(data.status){
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
					+"<p class='alert-box'>Your Sales have been delete successfully !!!</p>");

				$("#btnYesConfirmYesNo").hide();
				$("#btnNoConfirmYesNo").html('Close');

				$("#btnNoConfirmYesNo").off('click').click(function () {
					$('#modalConfirmYesNo').modal('hide');
					$("#btnYesConfirmYesNo").show();
					$("#btnNoConfirmYesNo").html('No');
					location.reload();
				});
			}
		},
		error: function (xhr, ajaxOptions, thrownError){
			alert('Error adding / update data');
			console.log(xhr.status);
			console.log(xhr.responseText);
			console.log(thrownError);
		}

	})
})



function cancel() {
	$('#modalConfirmYesNo').modal('show');
	$("#lblTitleConfirmYesNo").html("User Confirmation");
	$("#lblMsgConfirmYesNo").html("Are you sure wanted to cancel this item?");
	$("#btnYesConfirmYesNo").off('click').click(function () {
        clearForm();
        $("#revenue_form").hide();
        $('#modalConfirmYesNo').modal('hide');
	});

	$("#btnNoConfirmYesNo").off('click').click(function () {
	$('#modalConfirmYesNo').modal('hide');
	});
}

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

	$(wizard).append('<div class="footer"><button type="button" id="btnFormPrev" class="btn btn-default">Prev</button><button id="btnFormNext" type="button" class="btn btn-primary">Next</button></div>');

	$(wizard).find("#btnFormPrev").click(function() {
		selectPanel($(".wizardProgress .selected").index() - 1);
	});
	$(wizard).find("#btnFormNext").click(function() {
		selectPanel($(".wizardProgress .selected").index() + 1);
	});

	selectPanel(0);
	function selectPanel(index) {
		if (index == 0) {
			$(wizard).find("#btnFormPrev").fadeOut();
		} else {
			$(wizard).find("#btnFormPrev").fadeIn();
		}

		if (index == $(".wizardProgress div").length - 1) {
			$(wizard).find("#btnFormNext").fadeOut();
		} else {
			$(wizard).find("#btnFormNext").fadeIn();
		}

		$(".wizardProgress .selected").removeClass("selected");
		var selectedTab = $(".wizardProgress div").get(index);
		$(selectedTab).addClass("selected");

		$(".wizardPanel").slideUp();
		var selectedPanel = $(wizard).find(".wizardPanel").get(index);
		$(selectedPanel).slideDown();
	}
});


function modify_online_revenue_form(){
    $('#myModal2').modal('show');
}

function calculationRevenue(cur){
	/*change table unit sales*/
	$('#potential_cust_yearly').html(parseFloat($('#max_view').val()) * parseFloat($('#no_days').val()));
	$('#potential_cust_quaterly').html((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val())/4));
	$('#potential_cust_monthly').html((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val())/12));
	$('#potential_cust_weekly').html((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val())/52));

	$('#actual_cust_yearly').html((((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val())) * $('#percent_purch').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) / 100));
	$('#actual_cust_quaterly').html((((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val())) * $('#percent_purch').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) / 100)/4);
	$('#actual_cust_monthly').html((((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val())) * $('#percent_purch').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) / 100)/12);
	$('#actual_cust_weekly').html((((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val())) * $('#percent_purch').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) / 100)/52);

	$('#product_sold_yearly').html(parseFloat($('#actual_cust_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''))*(parseFloat($('#no_purchase').val())*parseFloat($('#no_reorder').val())));
	$('#product_sold_quaterly').html(parseFloat($('#product_sold_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/4);
	$('#product_sold_monthly').html(parseFloat($('#product_sold_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/12);
	$('#product_sold_weekly').html(parseFloat($('#product_sold_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/52);

	$('#avgcust_purch_yearly').html((parseFloat($('#no_purchase').val())*parseFloat($('#product_price').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')))*parseFloat($('#no_reorder').val()));
	$('#avgcust_purch_quaterly').html(parseFloat($('#avgcust_purch_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/4);
	$('#avgcust_purch_monthly').html(parseFloat($('#avgcust_purch_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/12);
	$('#avgcust_purch_weekly').html(parseFloat($('#avgcust_purch_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/52);

	$('#avg_purchase').val(parseFloat($('#no_purchase').val())*parseFloat($('#product_price').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')));

	$('#avg_cost').val((parseFloat($('#product_price').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))*parseFloat($('#projected_cost').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))) / 100);

	$('#customer_cost').val((parseFloat($('#no_purchase').val()) * parseFloat($('#avg_cost').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')))*parseFloat($('#no_reorder').val()));

	/*change table summary*/
	$('#annual_revenue_yearly').html(parseFloat($('#actual_cust_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * parseFloat($('#avgcust_purch_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')));
	$('#annual_revenue_quaterly').html(parseFloat($('#annual_revenue_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/4);
	$('#annual_revenue_monthly').html(parseFloat($('#annual_revenue_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/12);
	$('#annual_revenue_weekly').html(parseFloat($('#annual_revenue_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/52);

	$('#annual_cost_yearly').html(parseFloat($('#actual_cust_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * parseFloat($('#customer_cost').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')));
	$('#annual_cost_quaterly').html(parseFloat($('#annual_cost_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/4);
	$('#annual_cost_monthly').html(parseFloat($('#annual_cost_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/12);
	$('#annual_cost_weekly').html(parseFloat($('#annual_cost_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/52);

	$('#annual_gopro_yearly').html(parseFloat($('#annual_revenue_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) - parseFloat($('#annual_cost_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')));
	$('#annual_gopro_quaterly').html(parseFloat($('#annual_gopro_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/4);
	$('#annual_gopro_monthly').html(parseFloat($('#annual_gopro_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/12);
	$('#annual_gopro_weekly').html(parseFloat($('#annual_gopro_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))/52);

	if ($('#projected_cost').val() != 0) {

		$('#project_cost_percent_yearly').html(parseFloat($('#annual_cost_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) / parseFloat($('#annual_revenue_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * 100);
		$('#project_cost_percent_quaterly').html(parseFloat($('#annual_cost_quaterly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) / parseFloat($('#annual_revenue_quaterly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))* 100);
		$('#project_cost_percent_monthly').html(parseFloat($('#annual_cost_monthly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) / parseFloat($('#annual_revenue_monthly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))* 100);
		$('#project_cost_percent_weekly').html(parseFloat($('#annual_cost_weekly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) / parseFloat($('#annual_revenue_weekly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))* 100);

		$('#project_gopro_percent_yearly').html(parseFloat($('#annual_gopro_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) / parseFloat($('#annual_revenue_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * 100);
		$('#project_gopro_percent_quaterly').html(parseFloat($('#annual_gopro_quaterly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) / parseFloat($('#annual_revenue_quaterly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * 100);
		$('#project_gopro_percent_monthly').html(parseFloat($('#annual_gopro_monthly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) / parseFloat($('#annual_revenue_monthly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * 100);
		$('#project_gopro_percent_weekly').html(parseFloat($('#annual_gopro_weekly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) / parseFloat($('#annual_revenue_weekly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * 100);
	}


	/*number format each column except column number 1*/
	$('table#table_unit_sales > tbody > tr > td:not(:first-child)').each(function(){
		$(this).html(number_format($(this).html(), 0 ,'.', ','));
	});

	/*number format each column except column number 1*/
	$('table#table_summary > tbody > tr > td:not(:first-child):not([id*="percent"])').each(function(){

		$(this).html(cur+' '+number_format($(this).html(), 0 ,'.', ','));

	});
	$('table#table_summary > tbody > tr > td[id*="percent"]').each(function(){


		$(this).html(number_format($(this).html(), 2 ,'.', ',')+' %');

	});

	/*number format for each readonly fields on the form*/
	$('#revenue_form').find('input[type=text][readonly]').each(function(){
		$(this).val(cur+' '+number_format($(this).val(), 0 ,'.', ','));
		$(this).prop('readonly', true);
	})
}


$('#ex1').on("input change", function(){
	var sv = parseInt($("#ex1").val());
	$("#ex1_view").html(sv);
	var $form = $("#variable_form").serialize();
	$.ajax({
		url: site_url+"revenue/AjaxSavingViewVar",
		type: "POST",
		data: $form,
		dataType: 'json',
		encode: true,
		success: function (data) {
			if (data.status) {
				calculationRevenue_summary(cur, ser);
				drawBarChart($('#potential_cust_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
					$('#potential_cust_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
					$('#potential_cust_yearly_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
					cur
				);
			}else{

				$('#modalConfirmYesNo').modal('show');
				$("#lblTitleConfirmYesNo").html("User Confirmation");
				$("#lblMsgConfirmYesNo").html("Please save first than you can change the variable");
				$("#btnYesConfirmYesNo").hide()

				$("#btnNoConfirmYesNo").html('Okey');
				$("#btnNoConfirmYesNo").off('click').click(function () {

					$('#modalConfirmYesNo').modal('hide');
					$("#btnNoConfirmYesNo").html('No');
					$("#btnYesConfirmYesNo").show();
				});
			}
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert('Error adding / update data');
			console.log(xhr.status);
			console.log(xhr.responseText);
			console.log(thrownError);
		}
	})
});


$('#ex2').on("input change", function(){
        var sv = parseInt($("#ex2").val());
        $("#ex2_view").html(sv);
        var $form = $("#variable_form").serialize();
        $.ajax({
            url: site_url+"revenue/AjaxSavingPurchVar",
            type: "POST",
            data: $form,
            dataType: 'json',
            encode: true,
            success: function (data) {
                if (data.status) {
                calculationRevenue_summary(cur, ser);
                drawBarChart($('#potential_cust_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
                    $('#potential_cust_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
                    $('#potential_cust_yearly_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
                    cur
                );
                }else{

                    $('#modalConfirmYesNo').modal('show');
                    $("#lblTitleConfirmYesNo").html("User Confirmation");
                    $("#lblMsgConfirmYesNo").html("Please save first than you can change the variable");
                    $("#btnYesConfirmYesNo").hide()

                    $("#btnNoConfirmYesNo").html('Okey');
                    $("#btnNoConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');
                        $("#btnNoConfirmYesNo").html('No');
                        $("#btnYesConfirmYesNo").show();
                    });
                }

            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert('Error adding / update data');
                console.log(xhr.status);
                console.log(xhr.responseText);
                console.log(thrownError);
            }
        })
    });

    $('#ex3').on("input change", function(){
        var sv = parseInt($("#ex3").val());
        $("#ex3_view").html(sv);
        var $form = $("#variable_form").serialize();
        $.ajax({
            url: site_url+"revenue/AjaxSavingPriceVar",
            type: "POST",
            data: $form,
            dataType: 'json',
            encode: true,
            success: function (data) {
                if (data.status) {
                calculationRevenue_summary(cur, ser);
                drawBarChart($('#potential_cust_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
                    $('#potential_cust_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
                    $('#potential_cust_yearly_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
                    cur
                );
                }else{
                    $('#modalConfirmYesNo').modal('show');
                    $("#lblTitleConfirmYesNo").html("User Confirmation");
                    $("#lblMsgConfirmYesNo").html("Please save first than you can change the variable");
                    $("#btnYesConfirmYesNo").hide()

                    $("#btnNoConfirmYesNo").html('Okey');
                    $("#btnNoConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');
                        $("#btnNoConfirmYesNo").html('No');
                        $("#btnYesConfirmYesNo").show();
                    });
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert('Error adding / update data');
                console.log(xhr.status);
                console.log(xhr.responseText);
                console.log(thrownError);
            }
        })
    });

    $('#ex4').on("input change", function(){
        var sv = parseInt($("#ex4").val());
        $("#ex4_view").html(sv);
        var $form = $("#variable_form").serialize();
        $.ajax({
            url: site_url+"revenue/AjaxSavingCostVar",
            type: "POST",
            data: $form,
            dataType: 'json',
            encode: true,
            success: function (data) {
                if (data.status) {
                calculationRevenue_summary(cur, ser);
                drawBarChart($('#potential_cust_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
                    $('#potential_cust_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
                    $('#potential_cust_yearly_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
                    cur
                );
                }else{
                    $('#modalConfirmYesNo').modal('show');
                    $("#lblTitleConfirmYesNo").html("User Confirmation");
                    $("#lblMsgConfirmYesNo").html("Please save first than you can change the variable");
                    $("#btnYesConfirmYesNo").hide()

                    $("#btnNoConfirmYesNo").html('Okey');
                    $("#btnNoConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');
                        $("#btnNoConfirmYesNo").html('No');
                        $("#btnYesConfirmYesNo").show();
                    });
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert('Error adding / update data');
                console.log(xhr.status);
                console.log(xhr.responseText);
                console.log(thrownError);
            }
        })
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e){
        var target = $(e.target).attr("href");
        if(target == '#menu3'){
            calculationRevenue_summary(cur, ser);
            calculationSummary(cur);
            $('#average_whosale_price').html(cur+' '+number_format(parseFloat($('#summary_spp_15').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) / parseFloat($('#summary_sp_15').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')), 0 ,'.', ','));

            $('#average_unit_cost').html(cur+' '+number_format(parseFloat($('#summary_pp_15').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) / parseFloat($('#summary_p_15').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')), 0 ,'.', ','));

            $('#average_gross_cost').html(cur+' '+number_format(parseFloat($('#summary_pg_15').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) / parseFloat($('#summary_sp_15').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')), 0 ,'.', ','));

            $('#percentage_on_cost').html(number_format((parseFloat($('#summary_pg_15').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) / parseFloat($('#summary_spp_15').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''))) * 100, 2 ,'.', ',')+ ' %');

            $("#table_1_online_sales_summary").tableHeadFixer({'left': 1});

            $("#table_2_online_sales_summary").tableHeadFixer({'left': 1});

            $("#table_3_online_sales_summary").tableHeadFixer({'left': 1});
        }

    });

    function calculationSummary(cur){
        var j = 1;
        var sales_projection = 0;
        var purchase = 0;
        var stock_sales_projection = 0;
        var stock_purchase = 0;
        var annual_revenue = 0;
        var annual_cost = 0;

        $('#summary_sp_1').html($('#product_sold_monthly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));

        /*table 2*/
        $('#summary_ssp_1').html($('#annual_cost_monthly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));
        $('#summary_scp_1').html($('#summary_ssp_1').html());

        /*table 3*/
        $('#summary_spp_1').html($('#annual_revenue_monthly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));
        $('#summary_pp_1').html($('#annual_cost_monthly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));

        for (i=1;i<=12;i++){
            /*table 1*/
            $('#summary_p_'+i).html((0 + parseFloat($('#summary_sp_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''))) - parseFloat($('#summary_oq_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) )
            $('#summary_oq_'+i).html(parseFloat($('#summary_oq_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) + parseFloat($('#summary_p_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) - parseFloat($('#summary_sp_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')))

            if (j <= 11){
                j = j + 1
                /*table 1*/
                $('#summary_sp_'+j).html($('#summary_sp_1').html());
                $('#summary_ssp_'+j).html($('#summary_ssp_'+i).html());

                /*table 2*/
                $('#summary_scp_'+j).html($('#summary_ssp_'+j).html());
                $('#summary_soq_'+j).html($('#summary_soq_'+i).html());
                $('#summary_scq_'+j).html((parseFloat($('#summary_soq_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) + parseFloat($('#summary_scp_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''))) - parseFloat($('#summary_ssp_'+j).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));

                /*table 3*/
                $('#summary_spp_'+j).html($('#summary_spp_'+i).html());
                $('#summary_pp_'+j).html($('#summary_pp_'+i).html());

            }

            /*table 3*/
            $('#summary_pg_'+i).html(parseFloat($('#summary_spp_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) - parseFloat($('#summary_pp_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));

            sales_projection = sales_projection + parseFloat($('#summary_sp_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''))
            purchase = purchase + parseFloat($('#summary_p_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''))

            stock_sales_projection = stock_sales_projection + parseFloat($('#summary_ssp_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));
            stock_purchase = stock_purchase + parseFloat($('#summary_scp_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''))

            annual_revenue = annual_revenue + parseFloat($('#summary_spp_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));
            annual_cost = annual_cost + parseFloat($('#summary_pp_'+i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));

        }
        /*table 1 year 1 - year 3*/
        $('#summary_sp_13').html(sales_projection);
        $('#summary_sp_14').html($('#summary_sp_13').html());
        $('#summary_sp_15').html($('#summary_sp_14').html());

        $('#summary_p_13').html(purchase);
        $('#summary_p_14').html($('#summary_p_13').html());
        $('#summary_p_15').html($('#summary_p_14').html());

        /*table 2 year 1 - year 3*/
        $('#summary_ssp_13').html(stock_sales_projection);
        $('#summary_ssp_14').html($('#annual_cost_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));
        $('#summary_ssp_15').html($('#annual_cost_yearly_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));

        $('#summary_scp_13').html(stock_purchase);
        $('#summary_scp_14').html($('#annual_cost_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));
        $('#summary_scp_15').html($('#annual_cost_yearly_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));

        /*table 3 Year 1 - Year 2*/
        $('#summary_spp_13').html(annual_revenue);
        $('#summary_spp_14').html($('#annual_revenue_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));
        $('#summary_spp_15').html($('#annual_revenue_yearly_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));

        $('#summary_pp_13').html(annual_cost);
        $('#summary_pp_14').html($('#annual_cost_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));
        $('#summary_pp_15').html($('#annual_cost_yearly_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));

        $('#summary_pg_13').html(parseFloat($('#summary_spp_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) - parseFloat($('#summary_pp_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));
        $('#summary_pg_14').html($('#annual_gopro_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));
        $('#summary_pg_15').html($('#annual_gopro_yearly_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''));

        $('table#table_1_online_sales_summary > tbody > tr > td:not(:first-child)').each(function(){

            $(this).html(number_format($(this).html(), 0 ,'.', ','));
        });

        $('table#table_2_online_sales_summary > tbody > tr > td:not(:first-child)').each(function(){

            $(this).html(cur+' '+number_format($(this).html(), 0 ,'.', ','));
        });

        $('table#table_3_online_sales_summary > tbody > tr > td:not(:first-child)').each(function(){

            $(this).html(cur+' '+number_format($(this).html(), 0 ,'.', ','));
        });

    }

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if ((target == '#menu2')) {
            calculationRevenue_summary(cur, ser);
            drawBarChart($('#potential_cust_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
                $('#potential_cust_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
                $('#potential_cust_yearly_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
                cur
            );
            $('#graphTitle').html('Total potential customers');
            $("#table_unit_sales_summary tbody tr:eq(1)").addClass('active');
        }
    });

    $('.clickable-row').on('click', function(event) {
        if ($(this).closest('table').attr('id') == "table_unit_sales_summary"){
            $(this).addClass('active').siblings().removeClass('active');
            $("#table_sales_summary").find("tbody>tr:not(:first-child)").each(function(){
                if($(this).hasClass('active'))
                   $(this).removeClass('active')
            })

        }else{
            $(this).addClass('active').siblings().removeClass('active');
            $("#table_unit_sales_summary").find("tbody>tr:not(:first-child)").each(function(){
                if($(this).hasClass('active'))
                    $(this).removeClass('active')
            })
        }

        $('#graphTitle').html($(this).children('td:first').html());
        drawBarChart($(this).children('td:eq(1)').text().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
            $(this).children('td:eq(2)').text().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
            $(this).children('td:eq(3)').text().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''),
            cur
        );
    });

    function calculationRevenue_summary(cur, ser){
        var ex1_value;
        var ex2_value;
        var ex3_value;
        var ex4_value;

        if (parseFloat($('#ex1').val()) == 0){ex1_value = 1}else{ex1_value = $('#ex1').val();}
        if (parseFloat($('#ex2').val()) == 0){ex2_value = 1}else{ex2_value = $('#ex2').val();}
        if (parseFloat($('#ex3').val()) == 0){ex3_value = 1}else{ex3_value = $('#ex3').val();}
        if (parseFloat($('#ex4').val()) == 0){ex4_value = 1}else{ex4_value = $('#ex4').val();}

        $('#potential_cust_yearly_1').html(parseFloat(($('#max_view').val()) * ex1_value) * parseFloat($('#no_days').val()));
        $('#potential_cust_yearly_2').html((parseFloat($('#potential_cust_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#potential_cust_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));
        $('#potential_cust_yearly_3').html((parseFloat($('#potential_cust_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#potential_cust_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));

        $('#actual_cust_yearly_1').html((((parseFloat(($('#max_view').val()) * ex1_value) * parseFloat($('#no_days').val())) * $('#percent_purch').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '') ) / 100));
        $('#actual_cust_yearly_2').html((parseFloat($('#actual_cust_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#actual_cust_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));
        $('#actual_cust_yearly_3').html((parseFloat($('#actual_cust_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#actual_cust_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));

        $('#product_sold_yearly_1').html(parseFloat($('#actual_cust_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, ''))*(parseFloat($('#no_purchase').val())*parseFloat($('#no_reorder').val())));
        $('#product_sold_yearly_2').html((parseFloat($('#product_sold_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#product_sold_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));
        $('#product_sold_yearly_3').html((parseFloat($('#product_sold_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#product_sold_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));


        $('#avgcust_purch_yearly_1').html((parseFloat($('#no_purchase').val()) * ex2_value) * (parseFloat($('#product_price').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * ex3_value) * parseFloat($('#no_reorder').val()));
        $('#avgcust_purch_yearly_2').html((parseFloat($('#avgcust_purch_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#avgcust_purch_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));
        $('#avgcust_purch_yearly_3').html((parseFloat($('#avgcust_purch_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#avgcust_purch_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));

        $('#annual_revenue_yearly_1').html(parseFloat($('#actual_cust_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * parseFloat($('#avgcust_purch_yearly').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')));
        $('#annual_revenue_yearly_2').html((parseFloat($('#annual_revenue_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#annual_revenue_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));
        $('#annual_revenue_yearly_3').html((parseFloat($('#annual_revenue_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#annual_revenue_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));

        $('#annual_cost_yearly_1').html(parseFloat($('#actual_cust_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * (parseFloat($('#customer_cost').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * ex4_value));
        $('#annual_cost_yearly_2').html((parseFloat($('#annual_cost_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#annual_cost_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));
        $('#annual_cost_yearly_3').html((parseFloat($('#annual_cost_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#annual_cost_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));

        $('#annual_gopro_yearly_1').html(parseFloat($('#annual_revenue_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) - parseFloat($('#annual_cost_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')));
        $('#annual_gopro_yearly_2').html((parseFloat($('#annual_gopro_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#annual_gopro_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));
        $('#annual_gopro_yearly_3').html((parseFloat($('#annual_gopro_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#annual_gopro_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));


        if ($('#projected_cost').val() != 0) {

            $('#project_cost_percent_yearly_1').html(parseFloat($('#annual_cost_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) / parseFloat($('#annual_revenue_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * 100);
            $('#project_cost_percent_yearly_2').html((parseFloat($('#project_cost_percent_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#project_cost_percent_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));
            $('#project_cost_percent_yearly_3').html((parseFloat($('#project_cost_percent_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#project_cost_percent_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));

            $('#project_gopro_percent_yearly_1').html(parseFloat($('#annual_gopro_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) / parseFloat($('#annual_revenue_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * 100);
            $('#project_gopro_percent_yearly_2').html((parseFloat($('#project_gopro_percent_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#project_gopro_percent_yearly_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));
            $('#project_gopro_percent_yearly_3').html((parseFloat($('#project_gopro_percent_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) * (ser / 100)) + parseFloat($('#project_gopro_percent_yearly_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')));
        }

        $('table#table_unit_sales_summary > tbody > tr > td:not(:first-child)').each(function(){
            $(this).html(number_format($(this).html(), 0 ,'.', ','));
        });

        /*number format each column except column number 1*/
        $('table#table_sales_summary > tbody > tr > td:not(:first-child):not([id*="percent"])').each(function(){
            $(this).html(cur+' '+number_format($(this).html(), 0 ,'.', ','));
        });
        $('table#table_sales_summary > tbody > tr > td[id*="percent"]').each(function(){
            $(this).html(number_format($(this).html(), 2 ,'.', ',')+' %');
        });
    }

    function drawBarChart(ty1, ty2, ty3, cur){
        $('#ChartDisplay').html('');
        var myChart;
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
                        label: function (tooltipItem, data) {
                            return cur + ' ' + number_format(tooltipItem.yLabel, 0, '.', ',');
                        }, },
                },
            }
        });
    }

    function days_of_a_year(year){
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
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
            formattedNumber = thousandsSep + numbersString.slice(-3) + formattedNumber;
            numbersString = numbersString.slice(0,-3);
        }

        return (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');
    }

setTimeout(function(){
    $('#modal-default').modal('show');
}, 2000)


setTimeout(function(){
    $('#modal-default').modal('hide');
}, 40000)

//-------cancel revenue modal by rizwan
function cancel_product() {
    $('#modalConfirmYesNo').css('z-index', '9999');
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure you want to cancel?");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        //clearForm();
        $('#revenue_form').trigger("reset");
        var nextId = "onlinestep1-1";
        $('[href=#' + nextId + ']').tab('show');
        
        $("#myModal2").modal('hide');
        $('#modalConfirmYesNo').css('z-index', 'unset');
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').css('z-index', 'unset');
     
        $('#modalConfirmYesNo').modal('hide');
    });
}