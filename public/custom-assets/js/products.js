// if ($.cookie('modal-imported_products') != 'loaded') {
//    $.cookie('modal-imported_products', 'loaded');
//    // code to show modal
//    setTimeout(function () {
//        $('#modal-imported_products').modal('show');
//    }, 2000)
// }

$('input').blur(function () {
    var $this = $(this);
    if ($this.val())
        $this.addClass('used');
    else
        $this.removeClass('used');

});

$(document).ready(function () {
    $('input').each(function () {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');

    });

});


function getRate() {
    var rangeRate = $("#getCurrentChangeRate").val();
    $("#importedexchange_range").val(rangeRate);
    var imported_unit_cost = $('#unit_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    if (imported_unit_cost == '') {
        $("#landed_cost").val(0);
    } else {
        var countCosts = rangeRate * imported_unit_cost;
        $("#landed_cost").val(cur + number_format(parseFloat(countCosts), 2, '.', ','));
    }
    $("#exchangeRateList").modal('hide');
    $("#myModal2").modal('show');
    $("#importedexchange_range").addClass('used');

    var a1;
    for (a1 = 0; a1 <= 2; a1++) {
        countCost(a1);
    }

    // countCost('#port_service_fee', '#port_service_fee_cal');
    // countCost('#transport_fues_fee', '#transport_fues_fee_cal');
    // countCost('#insurance_fee', '#insurance_fee_cal');
    // countCost('#misc_fee', '#misc_fee_cal');
    // countCost('#other_fee_1', '#other_fee_1_cal');
    // countCost('#other_fee_2', '#other_fee_2_cal');
    // countCost('#other_fee_3', '#other_fee_3_cal');
}
$("#imported_unit_cost").change(function () {
    var rangeRate = $("#importedexchange_range").val();
    var imported_unit_cost = $("#imported_unit_cost").val();
    if (imported_unit_cost == '') {
        $("#landed_cost").val(0);
    } else {
        var countCost = rangeRate * imported_unit_cost;
        $("#landed_cost").val(cur + number_format(countCost, 2, '.', ','));
    } TableCalculation();
});


$(document).ready(function () {
    $('#purchases').find('td input').each(function () {
        $(this).prop('readonly', true);
    })

    /* IPAD KeyBoard Fixed*/
    $('#modalConfirmYesNo').css('position', 'fixed');
    $('#modalConfirmYes').css('position', 'fixed');
})

function showAllRate() {
    $("#myModal2").modal('hide');
    $("#exchangeRateList").modal('show');
}

var cur;
var total_unit_cost = 0;
var MarkUpOnCost;
var ExchangeRate;
var subtotal_1 = 0;
var sub_total_2 = 0;

$(document).ready(function () {
    $('#purchases').find('td input').each(function () {
        $(this).prop('readonly', true);
    })

    /* IPAD KeyBoard Fixed*/
    $('#modalConfirmYesNo').css('position', 'fixed');
    $('#modalConfirmYes').css('position', 'fixed');

    $('.next').click(function () {
        var nextId = $(this).parents('.tab-pane').next().attr("id");
        $('[href=#' + nextId + ']').tab('show');
        return false;
    })

    // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) { // update progress
    //     var step = $(e.target).data('step');
    //     var percent = (parseInt(step) / 3) * 100;
    //     $('.progress-bar').css({
    //         width: percent + '%'
    //     });
    //     $('.progress-bar').text("Step " + step + " of 3");
    // })
    // $('.progress-bar').css({
    //             width: '50%'
    //          });
    // $('.progress-bar').text("");
})


var cur;
var products_cost = 0;
var MarkUpOnCost = 0;
var rrp_cost = 0;
var counter = 2;

jQuery('a#add_row').click(function (event) {
    event.preventDefault();
    //Get Current Number Of rows added by raza 7 march 2020
    var current_rows = $("#table_bom > tbody").children().length;
    //row counter starts from 0 so -1 from current rows added by raza 7 march 2020
    counter = current_rows - 1;
    counter++;
    var newRow = '<tr id="row_id_' + counter + '">' + '<input name="id_' + counter + '" id="id_' + counter + '" type="hidden">' + '<td id="td_type_' + counter + '">' + '<div class="form-group is-empty no-margin"><input name="type_' + counter + '" class="form-control" id="type_' + counter + '" placeholder="Enter Item Type" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_description_' + counter + '">' + '<div class="form-group is-empty no-margin"><input name="description_' + counter + '" class="form-control" id="description_' + counter + '" placeholder="Enter Item Description" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_qty_' + counter + '">' + '<div class="form-group no-margin"><input name="qty_' + counter + '" class="form-control used numberFormat" id="qty_' + counter + '" onchange="getTotalMts(' + counter + ')" value="0" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_price_' + counter + '">' + '<div class="form-group no-margin"><input name="price_' + counter + '" class="form-control used currencyFormat" id="price_' + counter + '" onchange="getTotal(' + counter + ')" value="0" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_totmts_' + counter + '">0</td>' + '<td id="td_total_' + counter + '">0</td>' + '<td id="td_vat_' + counter + '">0</td>' + '<td id="td_totcost_' + counter + '">0</td>' + '<td id="td_avecost_' + counter + '">0</td></tr>';
    var newRow1 = "<tr id='row_id_" + counter + "'>" + "<input name='id_" + counter + "' id='id_" + counter + "' type='hidden'>" + "<td id='td_type_" + counter + "'>" + "<input type='text' name='type_" + counter + "' class='form-control' placeholder='Enter Item Type' id='type_" + counter + "'>" + "</td>" + "<td id='td_description_" + counter + "'>" + "<input type='text' name='description_" + counter + "' class='form-control' placeholder='Enter Item Description' id='description_" + counter + "'>" + "</td>" + "<td id='td_qty_" + counter + "'>" + "<input type='text' name='qty_" + counter + "' class='form-control numberFormat' id='qty_" + counter + "' onChange='getTotalMts(" + counter + ")' value='0'>" + "</td>" + "<td id='td_price_" + counter + "'>" + "<input type='text' name='price_" + counter + "' class='form-control currencyFormat' id='price_" + counter + "' onChange='getTotal(" + counter + ")' value='0'>" + "</td>" + "<td id='td_totmts_" + counter + "'>0" + "</td>" + "<td id='td_total_" + counter + "'>0" + "</td>" + "<td id='td_vat_" + counter + "'>0" + "</td>" + "<td id='td_totcost_" + counter + "'>0" + "</td>" + "<td id='td_avecost_" + counter + "'>0" + "</td>" + "</tr>";
    jQuery('table.table_bom').append(newRow);
});

// Added By Raza 27 feb 2020

jQuery('a#add_row_import').click(function (event) {
    event.preventDefault();
    //Get Current Number Of rows added by raza 7 march 2020
    var current_rows = $("#table_import_bom > tbody").children().length;
    //row counter starts from 0 so -1 from current rows added by raza 7 march 2020
    counter = current_rows - 1;
    counter++;
    var newRowImport = '<tr id="row_id1_' + counter + '">' + '<input name="id1_' + counter + '" id="id1_' + counter + '" type="hidden">' + '<td id="td_description1_' + counter + '">' + '<div class="form-group is-empty no-margin"><input name="description1_' + counter + '" class="form-control" id="description1_' + counter + '" placeholder="Enter Item Description" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_percentage_cost_' + counter + '">' + '<div class="form-group no-margin"><input name="percentage_cost_' + counter + '" class="form-control used percentSign" id="percentage_cost_' + counter + '" onchange="countCost(' + counter + ')" value="0" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_total_cost_' + counter + '">' + '<div class="form-group no-margin"><input name="total_cost_' + counter + '" class="form-control used" id="total_cost_' + counter + '" readonly="readonly" value="0" type="text"></input><span class="material-input"></span></div></td></tr>';
    jQuery('table.table_import_bom').append(newRowImport);
});


function open_gallery(id) {
    var html = '';
    html += '<div id="myCarousel" class="carousel slide" data-ride="carousel">' + '<ol class="carousel-indicators"></ol>' + '<div class="carousel-inner" role="listbox">' + '</div>' + '<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">' + '<span class="fa fa-chevron-left" aria-hidden="true"></span>' + '<span class="sr-only">Previous</span>' + '</a>' + '<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">' + '<span class="fa fa-chevron-right" aria-hidden="true"></span>' + '<span class="sr-only">Next</span>' + '</a>' + '<div/>';

    $('#lblGalleryLblMessage').append(html);

    $('#ModalGallery').modal('show');

    $('#ModalGallery').on('hidden.bs.modal', function () {

        $('#myCarousel').remove();
    })

    $.ajax({
        url: site_url + 'Products/ajax-get_image/' + id,
        type: "GET",
        dataType: "JSON",
        success: function (data) { // $(data.data).each(function (key, val) {

            for (i = 0; i < data.length; i++) {

                $('<li data-target="#myCarousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators');
                $('<div class="item"><img src="' + site_url + data[i]["ThumbNail"] + '" alt="Product id #' + data[i]["id"] + '"><div class="carousel-caption"><h3>Product ID #' + data[i]["id"] + '</h3><p>' + data[i]["Description"] + '</p></div></div>').appendTo('.carousel-inner');

            };

            $('#myCarousel .carousel-indicators > li').first().addClass('active');
            $('#myCarousel .item').first().addClass('active');

            $('#myCarousel').carousel({ interval: 3500 });

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}


function getTotalMts(i) {

    // Add Symbol And Currency On Change

    $('input[type="text"]').focus(function () {
        var focusvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if ($(this).hasClass('currencyFormat')) {
            $(this).val(focusvalue);
        } else if ($(this).hasClass('percentFormat')) {
            $(this).val(focusvalue);
        } else if ($(this).hasClass('numberFormat')) {
            $(this).val(focusvalue);
        } else {

        }
    });
    $('input[type="text"]').focusout(function () {
        var focusoutvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if ($(this).hasClass('currencySign')) {
            $(this).val(cur + '' + number_format(parseFloat(focusoutvalue), 2, '.', ','));
        } else if ($(this).hasClass('percentFormat')) {
            $(this).val(parseFloat(focusoutvalue) + '%');
        } else if ($(this).hasClass('numberFormat')) {
            $(this).val(number_format(parseFloat(focusoutvalue), 2, '.', ','));
        } else {

        }

    });


    var total_mts = 0;

    if ($('#qty_' + i).val() == "") {

        $('#qty_' + i).val(0);

    }
    total_mts = parseInt($('#sp_13').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) * parseFloat($('#qty_' + i).val().replace(/\,|\$|\€|\₹|\£|\%/g, '')).toFixed(2);

    if (total_mts == 0) {
        $('#td_totmts_' + i).html(total_mts);
    } else {
        $('#td_totmts_' + i).html(number_format(total_mts, 2, '.', ','))
    }
}


function getTotal(i) {

    // Add Symbol And Currency On Change

    $('input[type="text"]').focus(function () {
        var focusvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if ($(this).hasClass('currencyFormat')) {
            $(this).val(focusvalue);
        } else if ($(this).hasClass('percentSign')) {
            $(this).val(focusvalue);
        } else if ($(this).hasClass('numberFormat')) {
            $(this).val(focusvalue);
        } else {

        }
    });
    $('input[type="text"]').focusout(function () {
        var focusoutvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if ($(this).hasClass('currencyFormat')) {
            $(this).val(cur + '' + number_format(parseFloat(focusoutvalue), 2, '.', ','));
        } else if ($(this).hasClass('percentSign')) {
            $(this).val(parseFloat(focusoutvalue) + '%');
        } else if ($(this).hasClass('numberFormat')) {
            $(this).val(number_format(parseFloat(focusoutvalue), 2, '.', ','));
        } else {

        }

    });


    var total = 0;
    var sum_total = 0;
    var vat = 0;
    var sum_vat = 0;
    var tot_cost = 0;
    var sum_totcost = 0;
    var ave_cost = 0;
    var sum_totave = 0;
    products_cost = 0;

    if ($('#price_' + i).val().replace(/\,|\$|\€|\₹|\£|\%/g, '') == "") {
        $('#price_' + i).val(0);
    }

    total = (parseInt($('#sp_13').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) * parseFloat($('#qty_' + i).val().replace(/\,|\$|\€|\₹|\£|\%/g, '')).toFixed(2)) * parseFloat($('#price_' + i).val()).toFixed(2)

    if (total == 0) {
        $('#td_total_' + i).html(cur + total);
    } else {
        $('#td_total_' + i).html(cur + number_format(total, 2, '.', ','));
    }

    for (j = 0; j <= counter; j++) {

        sum_total += parseFloat($('#td_total_' + j).html().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    }

    if (sum_total == 0) {
        $('.SumTotal').html(cur + sum_total)
    } else {
        $('.SumTotal').html(cur + number_format(sum_total, 2, '.', ','))
    } vat = total * 0.1;
    if (vat == 0) {
        $('#td_vat_' + i).html(cur + vat)
    } else {
        $('#td_vat_' + i).html(cur + number_format(vat, 2, '.', ','))
    }

    for (k = 0; k <= counter; k++) {
        sum_vat += parseFloat($('#td_vat_' + k).html().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    }

    if (sum_vat == 0) {
        $('.SumVat').html(cur + sum_vat)
    } else {
        $('.SumVat').html(cur + number_format(sum_vat, 2, '.', ','))
    } tot_cost = total + vat

    if (tot_cost == 0) {
        $('#td_totcost_' + i).html(cur + tot_cost)
    } else {
        $('#td_totcost_' + i).html(cur + number_format(tot_cost, 2, '.', ','))
    }


    for (l = 0; l <= counter; l++) {
        sum_totcost += parseFloat($('#td_totcost_' + l).html().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    }

    if (sum_totcost == 0) {
        $('.SumTotCost').html(cur + sum_totcost)
    } else {
        $('.SumTotCost').html(cur + number_format(sum_totcost, 2, '.', ','))
    } ave_cost = tot_cost / parseInt($('#sp_13').html().replace(/\,|\$|\€|\₹|\£|\%/g, ''))

    if (ave_cost == 0) {
        $('#td_avecost_' + i).html(cur + ave_cost);
    } else {
        $('#td_avecost_' + i).html(cur + number_format(ave_cost, 2, '.', ','));
    }

    for (m = 0; m <= counter; m++) {
        sum_totave += parseFloat($('#td_avecost_' + m).html().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    }

    if (sum_totave == 0) {
        $('.SumAveCost').html(cur + sum_totave)
        $('#bom_cost').val(cur + sum_totave);
    } else {
        $('.SumAveCost').html(cur + number_format(sum_totave, 2, '.', ','))
        $('#bom_cost').val(cur + number_format(sum_totave, 2, '.', ','));
    } products_cost = parseFloat($('#unit_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseFloat($('.SumAveCost').html().replace(/\,|\$|\€|\₹|\£|\%/g, ''));

    if (products_cost == 0) {
        $('#products_cost').val(cur + products_cost);
    } else {
        $('#products_cost').val(cur + number_format(parseFloat(products_cost), 2, '.', ','));
    }

    if ($('#markup_on_cost').val() == "") {
        $('#markup_on_cost').val(0)
    }

    rrp_cost = $('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    if (rrp_cost == 0 || rrp_cost == '') {
        $('#rrp_cost').val(cur + 0)
    } else {
        $('#rrp_cost').val(cur + number_format(parseFloat(rrp_cost), 2, '.', ','))
    }
    if (rrp_cost > 0 && products_cost > 0) {
        $('#moc').val(cur + number_format(rrp_cost - products_cost, 2, '.', ','));
        $('#markup_on_cost').val(((rrp_cost - products_cost) / products_cost * 100).toFixed(2) + '%');
    } else {
        $('#moc').val(cur + 0);
        $('#markup_on_cost').val(0 + '%');
    }
}


$('#products_cost').on('change', function () {
    products_cost = parseFloat($('#products_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    rrp_cost = $('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    if (rrp_cost == 0 || rrp_cost == '') {
        $('#rrp_cost').val(cur + 0)
    } else {
        $('#rrp_cost').val(number_format(parseFloat(rrp_cost), 2, '.', ','))
    } MarkUpOnCost = parseFloat($('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));

    if (rrp_cost > 0 && products_cost > 0) {
        $('#moc').val(cur + number_format(rrp_cost - products_cost, 2, '.', ','));
        $('#markup_on_cost').val(((rrp_cost - products_cost) / products_cost * 100).toFixed(2) + '%');
    } else {
        $('#moc').val(cur + 0);
        $('#markup_on_cost').val(0 + '%');
    }
    TableCalculation();
})

$('#markup_on_cost').on('change', function () {
    if ($("#indus_type").val() != "Cosmetics") {
        products_cost = parseFloat($('#products_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
        rrp_cost = $('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if (rrp_cost == 0 || rrp_cost == '') {
            $('#rrp_cost').val(cur + 0)
        } else {

            $('#rrp_cost').val(cur + number_format(parseFloat(rrp_cost), 2, '.', ','))
        } MarkUpOnCost = parseFloat($('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));

        if (rrp_cost > 0 && products_cost > 0) {
            $('#moc').val(cur + number_format(rrp_cost - products_cost, 2, '.', ','));
            $('#markup_on_cost').val(((rrp_cost - products_cost) / products_cost * 100).toFixed(2) + '%');
        } else {
            $('#moc').val(cur + 0);
            $('#markup_on_cost').val(0 + '%');
        }
        TableCalculation();
    }
})

$('#table_projected_sales').on('change', 'input', function () {
    TableCalculation();
});


/*===============================This is for the Monthly Sales  confirmation =========================*/


function cancel() {
    $('#modalConfirmYesNo').css('z-index', '9999');
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure wanted to cancel this product?");
    $("#btnYesConfirmYesNo").off('click').click(function () {

        clearForm();

        $("#myModal2").modal('hide');
        $('#modalConfirmYesNo').css('z-index', 'unset');
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').css('z-index', 'unset');
        $('#modalConfirmYesNo').modal('hide');
    });
}


function confirmation() { /*if (confirm("Do you want input monthly sales manually ??") == true) {
	 manualEntry();
	 } else {
	 automaticEntry();
	 */
    $('#modalConfirmYesNo').css('z-index', '9999');
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Option 1: <br/>Enter unit sales on a month by month bases.<br/><br/>Option 2:<br/>Enter an average equel qty for each month.");
    $("#btnYesConfirmYesNo").off('click').click(function () {

        $('#sales_projection').find('td input').each(function () {
            if ($(this).prop('readonly', true)) {
                $(this).prop('readonly', false);
            }
        })

        $('#purchases').find('td input').each(function () {
            if ($(this).prop('readonly', true)) {
                $(this).prop('readonly', false);
            }
        })

        var index = $(".wizardProgress .selected").index() + 1;
        selectPanel(index);
        $('#rad_manual').prop('checked', true);
        $('.manual').addClass('active');
        $('.year').removeClass('active');

        $('#monthlytable_qty').val("0")
        $('[name="unit_cost"]').val("0")
        $('[name="markup_on_cost"]').val("0")
        $('#sp_1').focus();
        $('#modalConfirmYesNo').modal('hide');

    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#sales_projection').find('td input').each(function () {
            if ($(this).prop('readonly', false)) {
                $(this).prop('readonly', true);
            }
        })

        $('#monthlytable_qty').focus();
        $('#modalConfirmYesNo').modal('hide');
    });
}


/*==================================== This is for the Bill of materials confirmation ========================*/
/*iThis is for the Bill of materials confirmation*/

function confirmationBOM() {
    $('#modalConfirmYesNo').css('z-index', '9999');
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Do you want to insert Bill of Materials ??");
    $("#btnYesConfirmYesNo").off('click').click(function () {

        selectPanel(2);
        /*$('.nav a[href="#add_menu1"]').tab('show');*/
        $('#type_0').focus();
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {

        var index = $(".wizardProgress .selected").index() + 3;
        selectPanel(3);

        $('#markup_on_cost').focus();
        $('#modalConfirmYesNo').modal('hide');
    });
}

function delete_confirmation(id, type) { /*if (confirm("Do you want insert Bill of Materials ??") == true) {
	 $('.nav a[href="#add_menu1"]').tab('show');
	 }else{
	 $('#markup_on_cost').focus();
	 }*/

    $('#modalConfirmYesNo').css('z-index', '9999');
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this product ??");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        if (type == '0') {
            delete_localproduct(id)
        } else if (type == '1') {
            delete_importproduct(id)
        } else if (type == '2') {
            delete_cosmeticproduct(id)
        }
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
    });
}

function manualEntryMonthly() {
    selectPanel(1);
    $('#rad_manual').prop('checked', true);
    $('#sales_projection').find('td input').each(function () {
        if ($(this).prop('readonly', true)) {
            $(this).prop('readonly', false);
        }
    })
    $('#purchases').find('td input').each(function () {
        if ($(this).prop('readonly', true)) {
            $(this).prop('readonly', false);
        }
    })
    $("sp_1").focus();

}

function automaticEntryMonthly() {
    if ($('#monthlytable_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '') == "") {
        alert("How many units do you plan to sell each month ?");
        $('#monthlytable_qty').focus();
    } else {
        $('#sales_projection').find('td input').each(function () {
            $(this).val(number_format($('#monthlytable_qty').val(), 0, '.', ','));
        });
        $('#purchases').find('td input').each(function () {
            $(this).val(number_format($('#monthlytable_qty').val(), 0, '.', ','));
        });

        $('#unit_cost').focus();
        TableCalculation();
    }
}


$(function () { // $('#start_date').daterangepicker({singleDatePicker: true});
    $("[data-mask]").inputmask();
    $('.btn-circle').on('click', function () {
        $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
        $(this).addClass('btn-info').removeClass('btn-default').blur();
    });
    $('.next-step, .prev-step').on('click', function (e) {
        var $activeTab = $('.tab-pane.active');
        $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
        if ($(e.target).hasClass('next-step')) {
            var nextTab = $activeTab.next('.tab-pane').attr('id');
            $('[href="#' + nextTab + '"]').removeClass('btn-default');
            $('[href="#' + nextTab + '"]').tab('show');
            $("body").scrollTop(0);
        } else {
            var prevTab = $activeTab.prev('.tab-pane').attr('id');
            $('[href="#' + prevTab + '"]').removeClass('btn-default');
            $('[href="#' + prevTab + '"]').tab('show');
            $("body").scrollTop(0);
        }
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if ((target == '#localproductstep2')) {

            table1.ajax.reload(null, false);

        }
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if ((target == '#localproductstep3')) {
            $.ajax({
                url: site_url + 'Products/ajax-calculating_summary',
                type: "GET",
                dataType: "JSON",
                success: function (row) {
                    for (i = 1; i <= 15; i++) {

                        j = i - 1;
                        if (i < 13) {
                            $('#sales_month_' + i).html(row['table_header'][j]);
                            $('#stock_month_' + i).html(row['table_header'][j]);
                            $('#gross_month_' + i).html(row['table_header'][j]);
                        }

                        $('#summary_oq_' + i).html(number_format(row['total_oq_' + i], 0, '.', ','));
                        $('#summary_sp_' + i).html(number_format(row['total_sp_' + i], 0, '.', ','));
                        $('#summary_p_' + i).html(number_format(row['total_p_' + i], 0, '.', ','));
                        $('#summary_cq_' + i).html(number_format(row['total_cq_' + i], 0, '.', ','));

                        $('#summary_soq_' + i).html(row['cur'] + number_format(row['total_soq_' + i], 0, '.', ','));
                        $('#summary_ssp_' + i).html(row['cur'] + number_format(row['total_ssp_' + i], 0, '.', ','));
                        $('#summary_scp_' + i).html(row['cur'] + number_format(row['total_scp_' + i], 0, '.', ','));
                        $('#summary_scq_' + i).html(row['cur'] + number_format(row['total_scq_' + i], 0, '.', ','));

                        $('#summary_spp_' + i).html(row['cur'] + number_format(row['total_spp_' + i], 0, '.', ','));
                        $('#summary_pp_' + i).html(row['cur'] + number_format(row['total_pp_' + i], 0, '.', ','));
                        $('#summary_pg_' + i).html(row['cur'] + number_format(row['total_pg_' + i], 0, '.', ','));
                    }

                    $('#average_whosale_price').html(row['cur'] + number_format(row['average_whosale_price'], 2, '.', ','));
                    $('#average_unit_cost').html(row['cur'] + number_format(row['average_unit_cost'], 2, '.', ','));
                    $('#average_gross_cost').html(row['cur'] + number_format(row['average_gross_cost'], 2, '.', ','));
                    $('#percentage_on_cost').html(number_format(row['percentage_on_cost'], 2, '.', ',') + '%');

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Error fetching data');
                }
            })
        }
    });


    $('input:radio[name="option"]').change(function () {

        if ($(this).val() == 'manual') {

            if ($('#yearlytable_qty').val() == "") {

                alert("How many units do you plan to sell each year ?");

            } else {

                // $('#weeklytable_qty').prop('readonly', true);
                // $('#monthlytable_qty').prop('readonly', true);
                // $('#yearlytable_qty').prop('readonly', true);

                $('#purchases').find('td input').each(function () {
                    if ($(this).prop('readonly', true)) {
                        $(this).prop('readonly', false);
                    }
                })
                $('#sales_projection').find('td input').each(function () {
                    if ($(this).prop('readonly', true)) {
                        $(this).prop('readonly', false);
                    }
                })
            }

        }
        if ($(this).val() == 'year') {
            $('#purchases').find('td input').each(function () {
                if ($(this).prop('readonly', false)) {
                    $(this).prop('readonly', true);
                }
            })
            $('#sales_projection').find('td input').each(function () {
                if ($(this).prop('readonly', false)) {
                    $(this).prop('readonly', true);
                }
            })
            // $('#weeklytable_qty').prop('readonly', false);
            // selectPanel(0);
            $('#monthlytable_qty').prop('readonly', false);
            $('#monthlytable_qty').focus();
            // $('#yearlytable_qty').prop('readonly', false);
        }
    });
    $('#monthlytable_qty').on('change', function () {

        if ($('#monthlytable_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '') == "") {

            $('#monthlytable_qty').focus();

        } else { /*$('#modal_dialog').modal('show')*/
            $('#sales_projection').find('td input').each(function () {
                $(this).val(number_format($('#monthlytable_qty').val(), 0, '.', ','));
            });
            $('#purchases').find('td input').each(function () {
                $(this).val(number_format($('#monthlytable_qty').val(), 0, '.', ','));
            });

            $('#unit_cost').focus();

        }

    })

    $('#bom_cost').on('change', function () {

        $('#products_cost').val(cur + number_format(parseFloat($('#bom_cost').val()) + parseFloat($('#unit_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')), 2, '.', ','));


        products_cost = parseFloat($('#products_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));

        rrp_cost = $('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

        if (rrp_cost == 0 || rrp_cost == '') {
            $('#rrp_cost').val(cur + 0)

        } else {

            $('#rrp_cost').val(cur + number_format(parseFloat(rrp_cost), 2, '.', ','))
        } MarkUpOnCost = parseFloat($('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));

        if (rrp_cost > 0 && products_cost > 0) {
            $('#moc').val(cur + number_format(rrp_cost - products_cost, 2, '.', ','));
            $('#markup_on_cost').val(((rrp_cost - products_cost) / products_cost * 100).toFixed(2) + '%');
        } else {
            $('#moc').val(cur + 0);
            $('#markup_on_cost').val(0 + '%');
        }

        TableCalculation();

    })


    $('#rrp_cost').on('change', function () {

        $('#moc').val(cur + number_format(parseFloat($('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseFloat($('#products_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')), 2, '.', ','));
        if ($('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '') > 0 && $('#products_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '') > 0) {
            $('#moc').val(cur + number_format(parseFloat($('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseFloat($('#products_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')), 2, '.', ','));
            $('#markup_on_cost').val(((parseFloat($('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseFloat($('#products_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))) / parseFloat($('#products_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) * 100).toFixed(2) + '%');
        } else {
            $('#moc').val(cur + 0);
            $('#markup_on_cost').val(0 + '%');
        }

    })

    $('#unit_cost').on('change', function () {

        if ($('#unit_cost').val() == "") {
            $('#unit_cost').focus();

        } else {

            $('#rad_manual').prop('checked', true);


            $('#purchases').find('td input').each(function () {
                if ($(this).prop('readonly', true)) {
                    $(this).prop('readonly', false);
                }
            })
            $('#sales_projection').find('td input').each(function () {
                if ($(this).prop('readonly', true)) {
                    $(this).prop('readonly', false);
                }
            })

            if ($('#importedexchange_range').val() != "") {
                $('#landed_cost').val(cur + number_format(parseFloat(parseFloat($('#unit_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseFloat($('#importedexchange_range').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))), 2, '.', ','));

                var b1;
                for (b1 = 0; b1 <= counter; b1++) {
                    countCost(b1);
                }
                // countCost('#port_service_fee', '#port_service_fee_cal');
                // countCost('#transport_fues_fee', '#transport_fues_fee_cal');
                // countCost('#insurance_fee', '#insurance_fee_cal');
                // countCost('#misc_fee', '#misc_fee_cal');
                // countCost('#other_fee_1', '#other_fee_1_cal');
                // countCost('#other_fee_2', '#other_fee_2_cal');
                // countCost('#other_fee_3', '#other_fee_3_cal');
            }
            $('#products_cost').val(cur + number_format(parseFloat($('#bom_cost').val()) + parseFloat($('#unit_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')), 2, '.', ','));


            products_cost = parseFloat($('#products_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));

            rrp_cost = $('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

            if (rrp_cost == 0 || rrp_cost == '') {
                $('#rrp_cost').val(cur + 0)

            } else {

                $('#rrp_cost').val(cur + number_format(parseFloat(rrp_cost), 2, '.', ','))
            } MarkUpOnCost = parseFloat($('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));


            if (rrp_cost > 0 && products_cost > 0) {
                $('#moc').val(cur + number_format(rrp_cost - products_cost, 2, '.', ','));
                $('#markup_on_cost').val(((rrp_cost - products_cost) / products_cost * 100).toFixed(2) + '%');
            } else {
                $('#moc').val(cur + 0);
                $('#markup_on_cost').val(0 + '%');
            }

            TableCalculation();
        }

    })

    $("#table_projected_sales").tableHeadFixer({ 'left': 1 });

    $("#table_stock_cost").tableHeadFixer({ 'left': 1 });

    $("#table_monthly_gross").tableHeadFixer({ 'left': 1 });

    $("#table_projected_sales_summary").tableHeadFixer({ 'left': 1 });

    $("#table_stock_cost_summary").tableHeadFixer({ 'left': 1 });

    $("#table_monthly_gross_summary").tableHeadFixer({ 'left': 1 });
});


function TableCalculation() {
    $('#sales_projection').find('td input').each(function () {
        if ($(this).val() == "") {
            $(this).val(0)
        }
    });
    $('#purchases').find('td input').each(function () {
        if ($(this).val() == "") {
            $(this).val(0)
        }
    })

    var total_purchases = 0;
    var toq = 0;
    var tp = 0;
    var tsp = 0;
    var tproject = 0;

    $('#oq_13').html("0");
    $('#sp_13').html("0");
    $('#p_13').html("0");
    $('#cq_13').html("0");
    if ($("#indus_type").val() == "Cosmetics") {
        $('#oq_0').html($('#oq_1').val());
    }

    $('#cq_1').html(number_format(Math.floor(parseInt($('#oq_1').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#p_1').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseInt($('#sp_1').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))), 0, '.', ','));
    $('#oq_2').html($('#cq_1').html());
    $('#cq_2').html(number_format(Math.floor(parseInt($('#oq_2').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#p_2').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseInt($('#sp_2').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))), 0, '.', ','));

    $('#oq_3').html($('#cq_2').html());
    $('#cq_3').html(number_format(Math.floor(parseInt($('#oq_3').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#p_3').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseInt($('#sp_3').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))), 0, '.', ','));

    $('#oq_4').html($('#cq_3').html());
    $('#cq_4').html(number_format(Math.floor(parseInt($('#oq_4').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#p_4').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseInt($('#sp_4').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))), 0, '.', ','));

    $('#oq_5').html($('#cq_4').html());
    $('#cq_5').html(number_format(Math.floor(parseInt($('#oq_5').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#p_5').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseInt($('#sp_5').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))), 0, '.', ','));

    $('#oq_6').html($('#cq_5').html());
    $('#cq_6').html(number_format(Math.floor(parseInt($('#oq_6').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#p_6').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseInt($('#sp_6').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))), 0, '.', ','));

    $('#oq_7').html($('#cq_6').html());
    $('#cq_7').html(number_format(Math.floor(parseInt($('#oq_7').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#p_7').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseInt($('#sp_7').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))), 0, '.', ','));

    $('#oq_8').html($('#cq_7').html());
    $('#cq_8').html(number_format(Math.floor(parseInt($('#oq_8').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#p_8').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseInt($('#sp_8').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))), 0, '.', ','));

    $('#oq_9').html($('#cq_8').html());
    $('#cq_9').html(number_format(Math.floor(parseInt($('#oq_9').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#p_9').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseInt($('#sp_9').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))), 0, '.', ','));

    $('#oq_10').html($('#cq_9').html());
    $('#cq_10').html(number_format(Math.floor(parseInt($('#oq_10').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#p_10').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseInt($('#sp_10').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))), 0, '.', ','));

    $('#oq_11').html($('#cq_10').html());
    $('#cq_11').html(number_format(Math.floor(parseInt($('#oq_11').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#p_11').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseInt($('#sp_11').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))), 0, '.', ','));

    $('#oq_12').html($('#cq_11').html());
    $('#cq_12').html(number_format(Math.floor(parseInt($('#oq_12').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseInt($('#p_12').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) - parseInt($('#sp_12').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))), 0, '.', ','));


    $('#purchases').find('td input').each(function () {

        total_purchases = total_purchases + parseInt(Math.floor($(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '')))
    })

    toq = $('#oq_1').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    tp = total_purchases;

    $('#sales_projection').find('td input').each(function () {

        tsp += parseInt(Math.floor($(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '')))
    })

    tproject = parseInt(toq) + parseInt(tp) - parseInt(tsp);
    $('#oq_13').html(number_format(toq, 0, '.', ','));
    $('#sp_13').html(number_format(tsp, 0, '.', ','));
    $('#p_13').html(number_format(tp, 0, '.', ','));
    $('#cq_13').html(number_format(tproject, 0, '.', ','));
    tableCalculationPrice()
}

function tableCalculationPrice() {
    var total_purchasesprice = 0;
    var total_sspprice = 0;
    var tscp = 0;
    var tssp = 0;
    var tsoq = 0;
    var total = 0;

    $('#soq_13').html("0");
    $('#scp_13').html("0");
    $('#ssp_13').html("0");
    $('#scq_13').html("0");

    for (sce = 1; sce <= 12; sce++) {
        $('#ssp_' + sce).html(cur + number_format($('#sp_' + sce).val().replace(/\,|\$|\€|\₹|\£|\%/g, '') * products_cost), 0, '.', ',');
        $('#scp_' + sce).html(cur + number_format($('#p_' + sce).val().replace(/\,|\$|\€|\₹|\£|\%/g, '') * products_cost), 0, '.', ',');
    }
    $('#soq_1').html(cur + number_format(parseInt($('#oq_1').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) * parseInt($('#unit_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')), 0, '.', ','));
    $('#scq_1').html(cur + number_format(parseInt($('#soq_1').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_1').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_1').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_2').html(cur + number_format(parseInt($('#scq_1').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_2').html(cur + number_format(parseInt($('#soq_2').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_2').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_2').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_3').html(cur + number_format(parseInt($('#scq_2').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_3').html(cur + number_format(parseInt($('#soq_3').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_3').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_3').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_4').html(cur + number_format(parseInt($('#scq_3').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_4').html(cur + number_format(parseInt($('#soq_4').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_4').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_4').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_5').html(cur + number_format(parseInt($('#scq_4').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_5').html(cur + number_format(parseInt($('#soq_5').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_5').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_5').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_6').html(cur + number_format(parseInt($('#scq_5').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_6').html(cur + number_format(parseInt($('#soq_6').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_6').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_6').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_7').html(cur + number_format(parseInt($('#scq_6').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_7').html(cur + number_format(parseInt($('#soq_7').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_7').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_7').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_8').html(cur + number_format(parseInt($('#scq_7').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_8').html(cur + number_format(parseInt($('#soq_8').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_8').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_8').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_9').html(cur + number_format(parseInt($('#scq_8').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_9').html(cur + number_format(parseInt($('#soq_9').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_9').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_9').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_10').html(cur + number_format(parseInt($('#scq_9').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_10').html(cur + number_format(parseInt($('#soq_10').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_10').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_10').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_11').html(cur + number_format(parseInt($('#scq_10').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_11').html(cur + number_format(parseInt($('#soq_11').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_11').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_11').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_12').html(cur + number_format(parseInt($('#scq_11').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_12').html(cur + number_format(parseInt($('#soq_12').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_12').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_12').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    // calcuation is wrong ned to be fix.

    $('#purchasesprice').find('td').each(function () {
        if (!isNaN($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))) {
            total_purchasesprice += parseInt($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))
        }
    })
    $('#sales_projection_price').find('td').each(function () {
        if (!isNaN($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))) {
            total_sspprice += parseInt($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))
        }
    })

    tscp = total_purchasesprice;
    tssp = total_sspprice;
    tsoq = $('#soq_1').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '');
    $('#soq_13').html(cur + number_format(tsoq, 0, '.', ','));
    $('#scp_13').html(cur + number_format(tscp, 0, '.', ','));
    $('#ssp_13').html(cur + number_format(tssp, 0, '.', ','));
    total = parseInt(tscp) + parseInt(tsoq) - parseInt(tssp);
    $('#scq_13').html(cur + number_format(total, 0, '.', ','));
    tableCalculationprofit()
}

function tableCalculationprofit() {

    var total_sales_profit = 0;
    var total_purchases_profit = 0;
    var tspp = 0;
    var tpp = 0;
    var tpg = 0;

    $('#spp_13').html("0");
    $('#pp_13').html("0");
    $('#pg_13').html("0");

    $('#spp_1').html(cur + number_format($('#sp_1').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_1').html(cur + number_format($('#sp_1').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_1').html(cur + number_format(parseInt($('#spp_1').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_1').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_2').html(cur + number_format($('#sp_2').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_2').html(cur + number_format($('#sp_2').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_2').html(cur + number_format(parseInt($('#spp_2').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_2').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_3').html(cur + number_format($('#sp_3').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_3').html(cur + number_format($('#sp_3').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_3').html(cur + number_format(parseInt($('#spp_3').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_3').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_4').html(cur + number_format($('#sp_4').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_4').html(cur + number_format($('#sp_4').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_4').html(cur + number_format(parseInt($('#spp_4').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_4').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_5').html(cur + number_format($('#sp_5').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_5').html(cur + number_format($('#sp_5').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_5').html(cur + number_format(parseInt($('#spp_5').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_5').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_6').html(cur + number_format($('#sp_6').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_6').html(cur + number_format($('#sp_6').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_6').html(cur + number_format(parseInt($('#spp_6').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_6').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_7').html(cur + number_format($('#sp_7').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_7').html(cur + number_format($('#sp_7').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_7').html(cur + number_format(parseInt($('#spp_7').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_7').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_8').html(cur + number_format($('#sp_8').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_8').html(cur + number_format($('#sp_8').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_8').html(cur + number_format(parseInt($('#spp_8').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_8').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_9').html(cur + number_format($('#sp_9').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_9').html(cur + number_format($('#sp_9').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_9').html(cur + number_format(parseInt($('#spp_9').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_9').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_10').html(cur + number_format($('#sp_10').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_10').html(cur + number_format($('#sp_10').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_10').html(cur + number_format(parseInt($('#spp_10').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_10').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_11').html(cur + number_format($('#sp_11').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_11').html(cur + number_format($('#sp_11').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_11').html(cur + number_format(parseInt($('#spp_11').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_11').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_12').html(cur + number_format($('#sp_12').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_12').html(cur + number_format($('#sp_12').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_12').html(cur + number_format(parseInt($('#spp_12').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_12').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    // matematic still not right-- need to fix it
    $('#table_monthly_gross').find('tbody tr:not(#sales_projection_profit, #grossprofit) td').each(function () {
        if (!isNaN($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))) {
            total_purchases_profit += parseInt($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
        }


    })
    $('#table_monthly_gross').find('tbody tr:not(#purchasesprofit, #grossprofit) td').each(function () {
        if (!isNaN($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))) {
            total_sales_profit += parseInt($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))
        }
    })

    tspp = total_sales_profit;
    tpp = total_purchases_profit;

    tpg = parseInt(total_sales_profit) - parseInt(total_purchases_profit)

    $('#spp_13').html(cur + number_format(tspp, 0, '.', ','));
    $('#pp_13').html(cur + number_format(tpp, 0, '.', ','));
    $('#pg_13').html(cur + number_format(tpg, 0, '.', ','));
}
function add_localproduct() {
    // var isVisible = document.getElementById("product_form").style.display == "block";
    // if (isVisible){
    // $("#product_form").hide();
    // }
    // else{
    // $("#product_form").show();
    // }

    $("#myModal2").modal('show');
    $("a[href='#locaprodsteps1-1']").trigger('click');
    $("label.error").remove();
    save_method = 'add';
    // $('#table_form')[0].reset();
    clearForm();
    $('.form-group').removeClass('has-error'); // clear error class
    $('.help-block').empty(); // clear error string
    $('#stock_modal').modal('show'); // show bootstrap modal
    $('#stock_modal').on('shown.bs.modal', function () {
        $('.nav a[href="#add_menu0"]').tab('show');
    })
    $('.modal-title').text('Add Product'); // Set Title to Bootstrap modal title

    $('#weeklytable_qty').prop('readonly', false)
    $('#monthlytable_qty').prop('readonly', false)
    $('#yearlytable_qty').prop('readonly', false)

    $('#optionYear').trigger('click');
    $('#optionAuto').trigger('click');

    unitType('withUnitCost');

    // disable boom Table As Default
    $('#table_bom tbody').find('td input').each(function () {
        $(this).prop('readonly', true);
    })

    //$('.year').addClass('active');
    //$('.manual').removeClass('active');

    $('#purchases').find('td input').each(function () {

        $(this).prop('readonly', true);

    })
    $('#sales_projection').find('td input').each(function () {

        $(this).prop('readonly', true);

    });
    if ($("#indus_type").val() == "Cosmetics") {
        drawPieGraphsCosmetics('cosmetics_canvas', '#cosmetics_canvas', '', '', '', '', '', '', cur);
        // Clicked Default Checked Box
        $("#ing_access input:radio:first").trigger('click');
        $('#accessory_list').hide();
        $('#ingredients_list').show();
        clearMonthlySale();
    }



    //counter = current_rows - 1;

    $("#flnFile").fileinput('refresh', {
        overwriteInitial: true,
        maxFileSize: 500,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        browseIcon: '<i class="fa fa-folder-open"></i>',
        removeIcon: '<i class="fa fa-remove"></i>',
        removeTitle: 'Cancel or reset changes',
        elErrorContainer: '#kv-avatar-errors-1',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + site_url + 'assets/img/avatars/avatar.png" alt="Product Picture" width="80px" height="80px">',
        layoutTemplates: {
            main2: '{preview}  {remove} {browse} '
        },
        allowedFileExtensions: ["jpg", "png", "gif"]
    });

}




$(".stepwizard-step a.btn[id^=lprod]").on('click', function (e) {
    var target = $(e.target).attr("href"); // activated tab
    if ((target == '#locaprodstep1-1')) {
        $("#btnNextStep").show()
        $("#btnSaveTable").hide()
    }
    if ((target == '#locaprodstep1-2')) {
        $("#btnNextStep").show()
        $("#btnSaveTable").hide()
    }
    if ((target == '#locaprodstep1-3')) {
        $("#btnNextStep").show()
        $("#btnSaveTable").hide()

    }
    if ((target == '#locaprodstep1-4')) {
        $("#btnNextStep").hide()
        $("#btnSaveTable").show()
    }

});

function get_boom_table(id) {
    // Ajax Load data from ajax
    $.ajax({
        url: site_url + 'Products/ajax-edit/' + id,
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            cur = data[1].cur;
            if (Object.keys(data[2]).length > 0) {
                var table_boom_length = Object.keys(data[2]).length - 1;
                $("#table_bom tr:first").append("<th id='action_title'>Action</th>");

                $('#table_bom tr:not(:first)').each(function (e) {
                    if (e <= table_boom_length) {
                        $(this).append("<td id='td_action_" + e + "'></td>");
                    }
                });
                $("#table_bom > tfoot tr").find("#footaction").remove();
                for (m = 0; m < Object.keys(data[2]).length; m++) {
                    if (m > 2) {
                        //empty appended row if any added by raza 
                        $('#table_bom tr#row_id_' + m).remove();
                        //append rows
                        var editnewRow = '<tr id="row_id_' + m + '">' + '<input name="id_' + m + '" id="id_' + m + '" type="hidden">' + '<td id="td_type_' + m + '">' + '<div class="form-group is-empty no-margin"><input name="type_' + m + '" class="form-control" id="type_' + m + '" placeholder="Enter Item Type" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_description_' + m + '">' + '<div class="form-group is-empty no-margin"><input name="description_' + m + '" class="form-control" id="description_' + m + '" placeholder="Enter Item Description" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_qty_' + m + '">' + '<div class="form-group no-margin"><input name="qty_' + m + '" class="form-control used numberFormat" id="qty_' + m + '" onchange="getTotalMts(' + m + ')" value="0" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_price_' + m + '">' + '<div class="form-group no-margin"><input name="price_' + m + '" class="form-control used currencyFormat" id="price_' + m + '" onchange="getTotal(' + m + ')" value="0" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_totmts_' + m + '">0</td>' + '<td id="td_total_' + m + '">0</td>' + '<td id="td_vat_' + m + '">0</td>' + '<td id="td_totcost_' + m + '">0</td>' + '<td id="td_avecost_' + m + '">0</td><td id="td_action_' + m + '"></td></tr>';
                        $('table.table_bom').append(editnewRow);
                    }
                    $('#id_' + m).val(data[2][m].id)
                    $('#type_' + m).val(data[2][m].type);
                    $('#description_' + m).val(data[2][m].description);
                    number_format($('#qty_' + m).val(data[2][m].qty), 2, '.', ',');
                    number_format($('#price_' + m).val(data[2][m].price), 2, '.', ',');
                    $('#td_action_' + m).html("<a href='#' class='btn btn-warning' onclick='delete_bom(" + data[2][m].id + "," + m + ")'>Delete</a>");

                    var total_mts = 0;
                    total_mts = parseFloat($('#sp_13').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) * data[2][m].qty

                    $('#td_totmts_' + m).html(number_format(total_mts, 2, '.', ','))

                    var total = 0;
                    var sum_total = 0;
                    var vat = 0;
                    var sum_vat = 0;
                    var tot_cost = 0;
                    var sum_totcost = 0;
                    var ave_cost = 0;
                    var sum_totave = 0;

                    total = (parseFloat($('#sp_13').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) * data[2][m].qty) * data[2][m].price;

                    if (total == 0) {
                        $('#td_total_' + m).html(cur + total)
                    } else {
                        $('#td_total_' + m).html(cur + number_format(total, 2, '.', ','))
                    }

                    for (j = 0; j <= m; j++) {
                        sum_total += parseFloat($('#td_total_' + j).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                    }
                    if (sum_total == 0) {
                        $('.SumTotal').html(cur + sum_total)
                    } else {
                        $('.SumTotal').html(cur + number_format(sum_total, 2, '.', ','))
                    } vat = total * 0.1;

                    if (vat == 0) {
                        $('#td_vat_' + m).html(cur + vat)
                    } else {
                        $('#td_vat_' + m).html(cur + number_format(vat, 2, '.', ','))
                    }


                    for (k = 0; k <= m; k++) {
                        sum_vat += parseFloat($('#td_vat_' + k).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                    }
                    if (sum_vat == 0) {
                        $('.SumVat').html(cur + sum_vat)
                    } else {
                        $('.SumVat').html(cur + number_format(sum_vat, 2, '.', ','))
                    } tot_cost = total + vat

                    if (tot_cost == 0) {
                        $('#td_totcost_' + m).html(cur + tot_cost)
                    } else {
                        $('#td_totcost_' + m).html(cur + number_format(tot_cost, 2, '.', ','))
                    }


                    for (l = 0; l <= m; l++) {
                        sum_totcost += parseFloat($('#td_totcost_' + l).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                    }

                    if (sum_totcost == 0) {
                        $('.SumTotCost').html(cur + sum_totcost)
                    } else {
                        $('.SumTotCost').html(cur + number_format(sum_totcost, 2, '.', ','))
                    }
                    ave_cost = parseFloat(tot_cost) / parseFloat($('#sp_13').html().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                    if (ave_cost == 0) {
                        $('#td_avecost_' + m).html(cur + ave_cost);
                    } else {
                        $('#td_avecost_' + m).html(cur + number_format(ave_cost, 2, '.', ','));
                    }

                    for (n = 0; n <= m; n++) {
                        sum_totave += parseFloat($('#td_avecost_' + n).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                    }
                    if (sum_totave == 0) {
                        $('.SumAveCost').html(cur + sum_totave)
                    } else {
                        $('.SumAveCost').html(cur + number_format(sum_totave, 2, '.', ','))
                    }


                }

                if (sum_totave == 0 || sum_totave === undefined) {
                    sum_totave = 0;
                    $('#bom_cost').val(data[1].cur + sum_totave);
                } else {
                    $('#bom_cost').val(data[1].cur + number_format(sum_totave, 2, '.', ','));
                } products_cost = parseFloat(data[0].UnitCost) + parseFloat($('.SumAveCost').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));

                if (products_cost == 0) {
                    $('#products_cost').val(data[1].cur + products_cost);
                } else {
                    $('#products_cost').val(data[1].cur + number_format(parseFloat(products_cost), 2, '.', ','));
                } rrp_cost = data[0].rrp_cost

                if (rrp_cost == 0 || rrp_cost == '') {
                    $('#rrp_cost').val(data[1].cur + 0)

                } else {

                    $('#rrp_cost').val(data[1].cur + number_format(rrp_cost, 2, '.', ','))

                }
                products_cost = parseFloat(products_cost);
                MarkUpOnCost = parseFloat(rrp_cost);

                if (rrp_cost > 0 && products_cost > 0) {
                    $('#moc').val(cur + number_format(rrp_cost - products_cost, 2, '.', ','));
                    $('#markup_on_cost').val(((rrp_cost - products_cost) / products_cost * 100).toFixed(2) + '%');
                } else {
                    $('#moc').val(cur + 0);
                    $('#markup_on_cost').val(0 + '%');
                }

                tableCalculationPrice();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}

function edit_product(id, flag) {
    $("#save_product").val("SAVE");
    if ($("#indus_type").val() == "Cosmetics") {
        edit_cosmetic_product(id);
    } else if (flag == 0) {

        // local product edit

        // hide exchange rate
        $("#collapseExample_ser_2").hide();
        $("#localInput").show();
        $("#importInput").hide();
        $("#Step4").html("Bill of Materials");

        $("#myModal2").modal('show');
        $("label.error").remove();
        save_method = 'update';
        // $('#table_form')[0].reset(); // reset form on modals
        clearForm();
        $('.form-group').removeClass('has-error'); // clear error class
        $('.help-block').empty(); // clear error string

        $('.year').addClass('active');
        $('.manual').removeClass('active');

        // $('#weeklytable_qty').prop('readonly', false)
        $('#monthlytable_qty').prop('readonly', false)
        // $('#yearlytable_qty').prop('readonly', false)

        $('#purchases').find('td input').each(function () {

            $(this).prop('readonly', true);

        })
        $('#sales_projection').find('td input').each(function () {

            $(this).prop('readonly', true);

        });

        // Ajax Load data from ajax
        $.ajax({
            url: site_url + 'Products/ajax-edit/' + id,
            type: "GET",
            dataType: "JSON",
            success: function (data) {
                if (data[0].monthly_qty > 0) {
                    $('#optionYear').trigger('click');
                } else {
                    $('#optionMonth').trigger('click');
                }
                if (data[0].UnitCost > 0) {
                    $('#optionAuto').trigger('click');
                    unitType('withUnitCost');
                } else {
                    $('#optionManual').trigger('click');
                    unitType('withBoom');
                }
                $("#product_form").show();
                selectPanel(0);
                $('[name="status"]').val("update");
                $('[name="methode"]').val(0);
                $('#product_description').focus();
                $('[name="id"]').val(data[0].id);
                $('#id_item').val(data[0].id);
                $('[name="product_description"]').val(data[0].Description);
                // $('[name="Quantity"]').val(data[0].Qty);
                $('[name="unit_cost"]').val(data[1].cur + number_format(data[0].UnitCost, 0, '.', ','));
                $('[name="markup_on_cost"]').val(data[0].MarkUpOnCost + '%');
                // $('[name="weeklytable_qty"]').val(data[0].weekly_qty);
                $('[name="monthlytable_qty"]').val(number_format(data[0].monthly_qty, 0, '.', ','));
                // $('[name="yearlytable_qty"]').val(data[0].yearly_qty);
                // $('[name="flnFile"]').val(data.ThumbNail);
                $('[name="oq_1"]').val(number_format(data[0].oq_1, 0, '.', ','));
                $('[name="sp_1"]').val(number_format(data[0].sp_1, 0, '.', ','));
                $('[name="sp_2"]').val(number_format(data[0].sp_2, 0, '.', ','));
                $('[name="sp_3"]').val(number_format(data[0].sp_3, 0, '.', ','));
                $('[name="sp_4"]').val(number_format(data[0].sp_4, 0, '.', ','));
                $('[name="sp_5"]').val(number_format(data[0].sp_5, 0, '.', ','));
                $('[name="sp_6"]').val(number_format(data[0].sp_6, 0, '.', ','));
                $('[name="sp_7"]').val(number_format(data[0].sp_7, 0, '.', ','));
                $('[name="sp_8"]').val(number_format(data[0].sp_8, 0, '.', ','));
                $('[name="sp_9"]').val(number_format(data[0].sp_9, 0, '.', ','));
                $('[name="sp_10"]').val(number_format(data[0].sp_10, 0, '.', ','));
                $('[name="sp_11"]').val(number_format(data[0].sp_11, 0, '.', ','));
                $('[name="sp_12"]').val(number_format(data[0].sp_12, 0, '.', ','));

                $('[name="p_1"]').val(number_format(data[0].p_1, 0, '.', ','));
                $('[name="p_2"]').val(number_format(data[0].p_2, 0, '.', ','));
                $('[name="p_3"]').val(number_format(data[0].p_3, 0, '.', ','));
                $('[name="p_4"]').val(number_format(data[0].p_4, 0, '.', ','));
                $('[name="p_5"]').val(number_format(data[0].p_5, 0, '.', ','));
                $('[name="p_6"]').val(number_format(data[0].p_6, 0, '.', ','));
                $('[name="p_7"]').val(number_format(data[0].p_7, 0, '.', ','));
                $('[name="p_8"]').val(number_format(data[0].p_8, 0, '.', ','));
                $('[name="p_9"]').val(number_format(data[0].p_9, 0, '.', ','));
                $('[name="p_10"]').val(number_format(data[0].p_10, 0, '.', ','));
                $('[name="p_11"]').val(number_format(data[0].p_11, 0, '.', ','));
                $('[name="p_12"]').val(number_format(data[0].p_12, 0, '.', ','));
                cur = data[1].cur;

                if (data[0].ThumbNail != "assets/img/avatars/avatar.png") {
                    var btnReset = '<button type="button" class="btn btn-outline-danger fileinput-remove fileinput-remove-button" title="Cancel or reset changes" ' + 'onclick="restoreDefault(' + data[0].id + ',' + 0 + ')">' + '<i class="fa fa-remove"></i>' + '</button>';
                } else {
                    var btnReset = '{remove}';
                }
                $("#flnFile").fileinput('refresh', {
                    overwriteInitial: true,
                    maxFileSize: 500,
                    showClose: false,
                    showCaption: false,
                    browseLabel: '',
                    removeLabel: '',
                    browseIcon: '<i class="fa fa-folder-open"></i>',
                    removeIcon: '<i class="fa fa-remove"></i>',
                    removeTitle: 'Cancel or reset changes',
                    elErrorContainer: '#kv-avatar-errors-1',
                    msgErrorClass: 'alert alert-block alert-danger',
                    defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + site_url + data[0].ThumbNail + '" alt="Product Picture" width="80px" height="80px">',
                    layoutTemplates: {
                        main2: '{preview}  ' + btnReset + ' {browse} '
                    },
                    allowedFileExtensions: ["jpg", "png", "gif"]
                });


                $('#stock_modal').modal('show'); // show bootstrap modal when complete loaded

                $('#stock_modal').on('shown.bs.modal', function () {
                    $('.nav a[href="#add_menu0"]').tab('show');
                })
                $('.modal-title').text('Edit Product'); // Set title to Bootstrap modal title


                TableCalculation();


                if (Object.keys(data[2]).length > 0) {
                    var table_boom_length = Object.keys(data[2]).length - 1;
                    $("#table_bom tr:first").append("<th id='action_title'>Action</th>");

                    $('#table_bom tr:not(:first)').each(function (e) {
                        if (e <= table_boom_length) {
                            $(this).append("<td id='td_action_" + e + "'></td>");
                        }
                    });
                    $("#table_bom > tfoot tr").find("#footaction").remove();
                    $("#table_bom > tfoot tr").append("<th id='footaction'></th>");
                } else {
                    $("#table_bom > tfoot tr").find("#footaction").remove();
                }


                for (m = 0; m < Object.keys(data[2]).length; m++) {
                    if (m > 2) {
                        //empty appended row if any added by raza 
                        $('#table_bom tr#row_id_' + m).remove();
                        //append rows
                        var editnewRow = '<tr id="row_id_' + m + '">' + '<input name="id_' + m + '" id="id_' + m + '" type="hidden">' + '<td id="td_type_' + m + '">' + '<div class="form-group is-empty no-margin"><input name="type_' + m + '" class="form-control" id="type_' + m + '" placeholder="Enter Item Type" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_description_' + m + '">' + '<div class="form-group is-empty no-margin"><input name="description_' + m + '" class="form-control" id="description_' + m + '" placeholder="Enter Item Description" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_qty_' + m + '">' + '<div class="form-group no-margin"><input name="qty_' + m + '" class="form-control used numberFormat" id="qty_' + m + '" onchange="getTotalMts(' + m + ')" value="0" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_price_' + m + '">' + '<div class="form-group no-margin"><input name="price_' + m + '" class="form-control used currencyFormat" id="price_' + m + '" onchange="getTotal(' + m + ')" value="0" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_totmts_' + m + '">0</td>' + '<td id="td_total_' + m + '">0</td>' + '<td id="td_vat_' + m + '">0</td>' + '<td id="td_totcost_' + m + '">0</td>' + '<td id="td_avecost_' + m + '">0</td><td id="td_action_' + m + '"></td></tr>';
                        $('table.table_bom').append(editnewRow);
                    }
                    $('#id_' + m).val(data[2][m].id)
                    $('#type_' + m).val(data[2][m].type);
                    $('#description_' + m).val(data[2][m].description);
                    number_format($('#qty_' + m).val(data[2][m].qty), 2, '.', ',');
                    number_format($('#price_' + m).val(data[2][m].price), 2, '.', ',');
                    $('#td_action_' + m).html("<a href='#' class='btn btn-warning' onclick='delete_bom(" + data[2][m].id + "," + m + ")'>Delete</a>");

                    var total_mts = 0;
                    total_mts = parseFloat($('#sp_13').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) * data[2][m].qty

                    $('#td_totmts_' + m).html(number_format(total_mts, 2, '.', ','))

                    var total = 0;
                    var sum_total = 0;
                    var vat = 0;
                    var sum_vat = 0;
                    var tot_cost = 0;
                    var sum_totcost = 0;
                    var ave_cost = 0;
                    var sum_totave = 0;

                    total = (parseFloat($('#sp_13').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) * data[2][m].qty) * data[2][m].price;

                    if (total == 0) {
                        $('#td_total_' + m).html(cur + total)
                    } else {
                        $('#td_total_' + m).html(cur + number_format(total, 2, '.', ','))
                    }

                    for (j = 0; j <= m; j++) {
                        sum_total += parseFloat($('#td_total_' + j).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                    }
                    if (sum_total == 0) {
                        $('.SumTotal').html(cur + sum_total)
                    } else {
                        $('.SumTotal').html(cur + number_format(sum_total, 2, '.', ','))
                    } vat = total * 0.1;

                    if (vat == 0) {
                        $('#td_vat_' + m).html(cur + vat)
                    } else {
                        $('#td_vat_' + m).html(cur + number_format(vat, 2, '.', ','))
                    }


                    for (k = 0; k <= m; k++) {
                        sum_vat += parseFloat($('#td_vat_' + k).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                    }
                    if (sum_vat == 0) {
                        $('.SumVat').html(cur + sum_vat)
                    } else {
                        $('.SumVat').html(cur + number_format(sum_vat, 2, '.', ','))
                    } tot_cost = total + vat

                    if (tot_cost == 0) {
                        $('#td_totcost_' + m).html(cur + tot_cost)
                    } else {
                        $('#td_totcost_' + m).html(cur + number_format(tot_cost, 2, '.', ','))
                    }


                    for (l = 0; l <= m; l++) {
                        sum_totcost += parseFloat($('#td_totcost_' + l).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                    }

                    if (sum_totcost == 0) {
                        $('.SumTotCost').html(cur + sum_totcost)
                    } else {
                        $('.SumTotCost').html(cur + number_format(sum_totcost, 2, '.', ','))
                    }
                    ave_cost = parseFloat(tot_cost) / parseFloat($('#sp_13').html().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                    if (ave_cost == 0) {
                        $('#td_avecost_' + m).html(cur + ave_cost);
                    } else {
                        $('#td_avecost_' + m).html(cur + number_format(ave_cost, 2, '.', ','));
                    }

                    for (n = 0; n <= m; n++) {
                        sum_totave += parseFloat($('#td_avecost_' + n).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                    }
                    if (sum_totave == 0) {
                        $('.SumAveCost').html(cur + sum_totave)
                    } else {
                        $('.SumAveCost').html(cur + number_format(sum_totave, 2, '.', ','))
                    }


                }

                if (sum_totave == 0 || sum_totave === undefined) {
                    sum_totave = 0;
                    $('#bom_cost').val(data[1].cur + sum_totave);
                } else {
                    $('#bom_cost').val(data[1].cur + number_format(sum_totave, 2, '.', ','));
                } products_cost = parseFloat(data[0].UnitCost) + parseFloat($('.SumAveCost').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));

                if (products_cost == 0) {
                    $('#products_cost').val(data[1].cur + products_cost);
                } else {
                    $('#products_cost').val(data[1].cur + number_format(parseFloat(products_cost), 2, '.', ','));
                } rrp_cost = data[0].rrp_cost;

                if (rrp_cost == 0 || rrp_cost == '') {
                    $('#rrp_cost').val(data[1].cur + 0)

                } else {

                    $('#rrp_cost').val(data[1].cur + number_format(rrp_cost, 2, '.', ','))

                }

                if (rrp_cost > 0 && products_cost > 0) {
                    $('#moc').val(cur + number_format(rrp_cost - products_cost, 2, '.', ','));
                    $('#markup_on_cost').val(((rrp_cost - products_cost) / products_cost * 100).toFixed(2) + '%');
                } else {
                    $('#moc').val(cur + 0);
                    $('#markup_on_cost').val(0 + '%');
                }
                products_cost = parseFloat(products_cost);
                MarkUpOnCost = parseFloat(rrp_cost);

                tableCalculationPrice();
                // Edit Sales
                if (data[3][0]) {
                    $("#tab_logic tr:first").append("<th id='action_sale_title'>Action</th>");
                    $('#tab_logic tr:not(:first)').each(function (e) {
                        $(this).append("<td id='td_action_sale" + e + "'></td>");
                    });
                }
                if (Object.keys(data[3]).length) {
                    // Append Sale Table
                    for (k = 0; k < Object.keys(data[3]).length; k++) {
                        if (k > 0) {
                            //empty appended row if any added by raza 
                            $('#tab_logic tr#addr' + k).remove();
                            //append rows
                            var editSaleRow = "<tr id='addr" + (k) + "'><input type='hidden' name='sale_id_" + k + "'>\n\
                        <td><input name='region" + k + "' type='text' placeholder='Region' class='form-control'/> </td>\n\
                        <td><input  name='jul" + k + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                        <td><input  name='aug" + k + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                        <td><input  name='sep" + k + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                        <td><input  name='oct" + k + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                        <td><input  name='nov" + k + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                        <td><input  name='dec" + k + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                        <td><input  name='jan" + k + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                        <td><input  name='feb" + k + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                        <td><input  name='mar" + k + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                        <td><input  name='apr" + k + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                        <td><input  name='may" + k + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                        <td><input  name='jun" + k + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                        <td id='total_manual_sales" + k + "'></td><td id='td_action_sale" + k + "'></td><input type='hidden' name='total_sale_" + k + "' value=''></tr>";
                            $('table#tab_logic').append(editSaleRow);
                        }
                        $('[name="sale_id_' + k + '"]').val(data[3][k].id)
                        $('[name="region' + k + '"]').val(data[3][k].region);
                        $('[name="jul' + k + '"]').val(number_format(data[3][k].jul, 0, '.', ','));
                        $('[name="aug' + k + '"]').val(number_format(data[3][k].aug, 0, '.', ','));
                        $('[name="sep' + k + '"]').val(number_format(data[3][k].sep, 0, '.', ','));
                        $('[name="oct' + k + '"]').val(number_format(data[3][k].oct, 0, '.', ','));
                        $('[name="nov' + k + '"]').val(number_format(data[3][k].nov, 0, '.', ','));
                        $('[name="dec' + k + '"]').val(number_format(data[3][k].decm, 0, '.', ','));
                        $('[name="jan' + k + '"]').val(number_format(data[3][k].jan, 0, '.', ','));
                        $('[name="feb' + k + '"]').val(number_format(data[3][k].feb, 0, '.', ','));
                        $('[name="mar' + k + '"]').val(number_format(data[3][k].mar, 0, '.', ','));
                        $('[name="apr' + k + '"]').val(number_format(data[3][k].apr, 0, '.', ','));
                        $('[name="may' + k + '"]').val(number_format(data[3][k].may, 0, '.', ','));
                        $('[name="jun' + k + '"]').val(number_format(data[3][k].jun, 0, '.', ','));
                        $('#total_manual_sales' + k + '').html(number_format(data[3][k].total, 0, '.', ','));
                        $('[name="total_sale_' + k + '"]').val(data[3][k].total);
                        $('#td_action_sale' + k).html("<a href='#' class='btn btn-warning' onclick='delete_sale(" + data[3][k].id + "," + k + ")'>Delete</a>");
                    }
                }
                $('#product_method').hide();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(textStatus);
            }
        });
    } else if (flag == 1) { // import product edit
        $("#myModal2").modal('show');
        $("label.error").remove();
        save_method = 'update';
        // $('#table_form')[0].reset(); // reset form on modals
        clearForm();
        $('.form-group').removeClass('has-error'); // clear error class
        $('.help-block').empty(); // clear error string

        $('.year').addClass('active');
        $('.manual').removeClass('active');

        // $('#weeklytable_qty').prop('readonly', false)
        $('#monthlytable_qty').prop('readonly', false)
        // $('#yearlytable_qty').prop('readonly', false)

        $('#purchases').find('td input').each(function () {

            $(this).prop('readonly', true);

        })
        $('#sales_projection').find('td input').each(function () {

            $(this).prop('readonly', true);

        });

        // Ajax Load data from ajax
        $.ajax({
            url: site_url + 'ImportedProducts/ajax-editimported/' + id,
            type: "GET",
            dataType: "JSON",
            success: function (data) {
                // alert(JSON.stringify(data));
                // $('#btnOpenForm').click();
                $("#product_form").show();
                selectPanel(0);
                $('[name="status"]').val("update");
                $('[name="methode"]').val(1);

                $('#product_description').focus();
                $('[name="id"]').val(data[0].id);
                $('#id_item').val(data[0].id);
                $('[name="product_description"]').val(data[0].Description);
                // $('[name="Quantity"]').val(data.Qty);
                $('[name="unit_cost"]').val(data[1].cur + number_format(data[0].UnitCost, 0, '.', ','));
                $('[name="markup_on_cost"]').val(data[0].MarkUpOnCost + '%');
                // $('[name="weeklytable_qty"]').val(data.weekly_qty);
                $('[name="monthlytable_qty"]').val(number_format(data[0].monthly_qty, 0, '.', ','));
                // $('[name="yearlytable_qty"]').val(data.yearly_qty);
                // $('[name="flnFile"]').val(data.ThumbNail);
                $('[name="oq_1"]').val(number_format(data[0].oq_1), 0, '.', ',');
                $('[name="sp_1"]').val(number_format(data[0].sp_1), 0, '.', ',');
                $('[name="sp_2"]').val(number_format(data[0].sp_2), 0, '.', ',');
                $('[name="sp_3"]').val(number_format(data[0].sp_3), 0, '.', ',');
                $('[name="sp_4"]').val(number_format(data[0].sp_4), 0, '.', ',');
                $('[name="sp_5"]').val(number_format(data[0].sp_5), 0, '.', ',');
                $('[name="sp_6"]').val(number_format(data[0].sp_6), 0, '.', ',');
                $('[name="sp_7"]').val(number_format(data[0].sp_7), 0, '.', ',');
                $('[name="sp_8"]').val(number_format(data[0].sp_8), 0, '.', ',');
                $('[name="sp_9"]').val(number_format(data[0].sp_9), 0, '.', ',');
                $('[name="sp_10"]').val(number_format(data[0].sp_10), 0, '.', ',');
                $('[name="sp_11"]').val(number_format(data[0].sp_11), 0, '.', ',');
                $('[name="sp_12"]').val(number_format(data[0].sp_12), 0, '.', ',');

                $('[name="p_1"]').val(number_format(data[0].p_1), 0, '.', ',');
                $('[name="p_2"]').val(number_format(data[0].p_2), 0, '.', ',');
                $('[name="p_3"]').val(number_format(data[0].p_3), 0, '.', ',');
                $('[name="p_4"]').val(number_format(data[0].p_4), 0, '.', ',');
                $('[name="p_5"]').val(number_format(data[0].p_5), 0, '.', ',');
                $('[name="p_6"]').val(number_format(data[0].p_6), 0, '.', ',');
                $('[name="p_7"]').val(number_format(data[0].p_7), 0, '.', ',');
                $('[name="p_8"]').val(number_format(data[0].p_8), 0, '.', ',');
                $('[name="p_9"]').val(number_format(data[0].p_9), 0, '.', ',');
                $('[name="p_10"]').val(number_format(data[0].p_10), 0, '.', ',');
                $('[name="p_11"]').val(number_format(data[0].p_11), 0, '.', ',');
                $('[name="p_12"]').val(number_format(data[0].p_12), 0, '.', ',');

                cur = data[1].cur;

                if (data[0].ThumbNail != "assets/img/avatars/avatar.png") {
                    var btnReset = '<button type="button" class="btn btn-outline-danger fileinput-remove fileinput-remove-button" title="Cancel or reset changes" ' + 'onclick="restoreDefault(' + data[0].id + ',' + 1 + ')">' + '<i class="fa fa-remove"></i>' + '</button>';
                } else {
                    var btnReset = '{remove}';
                }

                $("#flnFile").fileinput('refresh', {
                    overwriteInitial: true,
                    maxFileSize: 500,
                    showClose: false,
                    showCaption: false,
                    browseLabel: '',
                    removeLabel: '',
                    browseIcon: '<i class="fa fa-folder-open"></i>',
                    removeIcon: '<i class="fa fa-remove"></i>',
                    removeTitle: 'Cancel or reset changes',
                    elErrorContainer: '#kv-avatar-errors-1',
                    msgErrorClass: 'alert alert-block alert-danger',
                    defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + site_url + data[0].ThumbNail + '" alt="Product Picture" width="80px" height="80px">',
                    layoutTemplates: {
                        main2: '{preview}  ' + btnReset + ' {browse} '
                    },
                    allowedFileExtensions: ["jpg", "png", "gif"]
                });

                $('#stock_modal').modal('show'); // show bootstrap modal when complete loaded

                $('#stock_modal').on('shown.bs.modal', function () {
                    $('.nav a[href="#add_menu0"]').tab('show');
                })
                $('.modal-title').text('Edit Product');
                // Set title to Bootstrap modal title


                $("#table_import_bom tr:first").append("<th id='action1_title'>Action</th>");

                $('#table_import_bom tr:not(:first)').each(function (e) {

                    $(this).append("<td id='td_action1_" + e + "'></td>");

                });

                // show import view
                $("#collapseExample_ser_2").show();
                $("#localInput").hide();
                $("#importInput").show();
                $("#Step4").html("Import Costs");

                // counting landed cost
                $('#importedexchange_range').val(data[0].ExchangeRate);
                var imported_unit_cost = $("#unit_cost").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                if (imported_unit_cost == '') {
                    $("#landed_cost").val(0);
                } else {
                    var countCosts = data[0].ExchangeRate * imported_unit_cost;
                    $("#landed_cost").val(cur + number_format(countCosts, 2, '.', ','));
                }

                $("#importedexchange_range").addClass('used');

                // conting fees
                // console.log(data)
                for (m1 = 0; m1 < Object.keys(data[2]).length; m1++) {
                    if (m1 > 2) {
                        $('#table_import_bom tr#row_id1_' + m1).remove();

                        var editnewRowImport = '<tr id="row_id1_' + m1 + '">'
                            + '<input name="id1_' + m1 + '" id="id1_' + m1 + '" type="hidden">'
                            + '<td id="td_description1_' + m1 + '">'
                            + '<div class="form-group is-empty no-margin"><input name="description1_' + m1 + '" class="form-control" id="description1_' + m1 + '" placeholder="Enter Item Description" type="text"></input><span class="material-input"></span></div></td>'
                            + '<td id="td_percentage_cost_' + m1 + '">'
                            + '<div class="form-group no-margin"><input name="percentage_cost_' + m1 + '" class="form-control used percentSign" id="percentage_cost_' + m1 + '" onchange="countCost(' + m1 + ')" value="0" type="text"></input><span class="material-input"></span></div></td>'
                            + '<td id="td_total_cost_' + m1 + '">'
                            + '<div class="form-group no-margin"><input name="total_cost_' + m1 + '" class="form-control used" id="total_cost_' + m1 + '" value="0" readonly="readonly"  type="text"></input><span class="material-input"></span></div></td><td id="td_action1_' + m1 + '"></td></tr>';
                        $('table.table_import_bom').append(editnewRowImport);
                    }
                    $('#id1_' + m1).val(data[2][m1].id);
                    $('#type_' + m1).val(data[2][m1].type);
                    $('#description1_' + m1).val(data[2][m1].description);
                    number_format($('#percentage_cost_' + m1).val(data[2][m1].percentage_cost), 2, '.', ',');
                    number_format($('#total_cost_' + m1).val(data[2][m1].total_cost), 2, '.', ',');
                    $('#td_action1_' + m1).html("<a href='#' class='btn btn-warning' onclick='delete_import_bom(" + data[2][m1].id + "," + m1 + ")'>Delete</a>");


                    var total_mts = 0;
                    var total_cost = 0;
                    var total_all = 0;
                    var landed_cost = 0;

                    if ($('#percentage_cost_' + m1).val().replace(/\$|\€|\£/g, '') == "") {

                        $('#percentage_cost_' + m1).val(0);

                    }

                    total_mts = (($('#landed_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) * parseFloat($('#percentage_cost_' + m1).val().replace(/\$|\€|\£/g, '')).toFixed(2)) / 100;

                    if (total_mts == 0) {
                        $('#total_cost_' + m1).val(total_mts);
                    } else {
                        $('#total_cost_' + m1).val(number_format(total_mts, 2, '.', ','));
                    }

                    for (x1 = 0; x1 <= m1; x1++) {
                        total_cost += parseFloat($('#total_cost_' + x1).val().replace(/\$|\€|\£/g, '')).toFixed(2) * 1;
                    }

                    landed_cost = parseFloat($('#landed_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')).toFixed(2) * 1;

                    total_all = total_cost;

                    $('#bom_cost').val(cur + number_format(total_all, 2, '.', ','));
                    products_cost = total_all + landed_cost;

                    $('#products_cost').val(cur + number_format(parseFloat(products_cost), 2, '.', ','));

                    if (total_all == 0) {
                        $('.SumVat').html(0)
                    } else {
                        $('.SumVat').html(number_format(total_all, 2, '.', ','))
                    }


                }
                // $('#port_service_fee').val(data.port_service_fee);
                // $('#transport_fues_fee').val(data.transport_fues_fee);
                // $('#insurance_fee').val(data.insurance_fee);
                // $('#misc_fee').val(data.misc_fee);
                // $('#other_fee_1').val(data.other_fee_1);
                // $('#other_fee_2').val(data.other_fee_2);
                // $('#other_fee_3').val(data.other_fee_3);

                // countCost('#port_service_fee', '#port_service_fee_cal');
                // countCost('#transport_fues_fee', '#transport_fues_fee_cal');
                // countCost('#insurance_fee', '#insurance_fee_cal');
                // countCost('#misc_fee', '#misc_fee_cal');
                // countCost('#other_fee_1', '#other_fee_1_cal');
                // countCost('#other_fee_2', '#other_fee_2_cal');
                // countCost('#other_fee_3', '#other_fee_3_cal');

                tableCalculationPrice();

                // products_cost = parseFloat(countCosts) + parseFloat($('.SumVat').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));

                // if (products_cost == 0) {
                // $('#products_cost').val(products_cost);
                // } else {
                // $('#products_cost').val(products_cost);
                // }

                rrp_cost = data[0].rrp_cost

                if (rrp_cost == 0 || rrp_cost == '') {
                    $('#rrp_cost').val(cur + 0)

                } else {

                    $('#rrp_cost').val(cur + number_format(rrp_cost, 2, '.', ','))

                } products_cost = parseFloat($('#products_cost').val());
                MarkUpOnCost = parseFloat($('#rrp_cost').val());

                $('#product_method').hide();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(textStatus);
            }
        });
    } else {

    }
}
function delete_sale(id, row) {
    $('#myModal2').modal('hide');
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this Record ??");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        $.ajax({
            url: site_url + 'Products/ajax-delete_sale/' + id,
            type: "POST",
            dataType: "JSON",
            row: row,
            success: function (data) {
                // remove row dari table
                $('#addr' + this.row).remove();
                updateSalesProjections();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error deleting data');
            }
        });
        $('#modalConfirmYesNo').css('z-index', '');
        $('#modalConfirmYesNo').modal('hide');
        $('#myModal2').modal('show');
        $("a[href='#locaprodsteps1-2']").trigger('click');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').css('z-index', '');
        $('#modalConfirmYesNo').modal('hide');
        $('#myModal2').modal('show');
        $("a[href='#locaprodsteps1-2']").trigger('click');
    });

}

function delete_bom(id, row) {
    $('#myModal2').modal('hide');
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this Record ??");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        $.ajax({
            url: site_url + 'Products/ajax-delete_bom/' + id,
            type: "POST",
            dataType: "JSON",
            row: row,
            success: function (data) {
                var temp_sumtotal = 0;
                var sumtotal_new = 0
                var temp_sumvat = 0;
                var sumvat_new = 0
                var temp_sumcost = 0;
                var sumcost_new = 0;
                var temp_sumave = 0;
                var sumave_new = 0
                var temp_total = 0;
                var temp_vat = 0;
                var temp_cost = 0;
                var temp_ave = 0;
                // get SUM Total
                $('#table_bom tfoot').find('.SumTotal').each(function () {
                    temp_sumtotal = parseFloat($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))
                })
                $('#table_bom tfoot').find('.SumVat').each(function () {
                    temp_sumvat = parseFloat($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))
                })
                $('#table_bom tfoot').find('.SumTotCost').each(function () {
                    temp_sumcost = parseFloat($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))
                })

                $('#table_bom tfoot').find('.SumAveCost').each(function () {
                    temp_sumave = parseFloat($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))
                })
                $('#row_id_' + this.row).find('td:eq(0) input').each(function () {
                    $(this).val("");
                })
                $('#row_id_' + this.row).find('td:eq(1) input').each(function () {
                    $(this).val("");
                })
                $('#row_id_' + this.row).find('td:eq(2) input').each(function () {
                    $(this).val(0);
                })
                $('#row_id_' + this.row).find('td:eq(3) input').each(function () {
                    $(this).val(0);
                })
                $('#row_id_' + this.row).find('td:eq(4)').each(function () {
                    $(this).html(0);
                })
                $('#row_id_' + this.row).find('td:eq(5)').each(function () {
                    temp_total = parseFloat($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                    $(this).html(0);
                })
                $('#row_id_' + this.row).find('td:eq(6)').each(function () {
                    temp_vat = parseFloat($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                    $(this).html(0);
                })
                $('#row_id_' + this.row).find('td:eq(7)').each(function () {
                    temp_cost = parseFloat($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                    $(this).html(0);
                })
                $('#row_id_' + this.row).find('td:eq(8)').each(function () {
                    temp_ave = parseFloat($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                    $(this).html(0);
                })
                $('#td_action_' + this.row).html("");

                sumtotal_new = temp_sumtotal - temp_total;
                sumvat_new = temp_sumvat - temp_vat;
                sumcost_new = temp_sumcost - temp_cost;
                sumave_new = temp_sumave - temp_ave;

                $('#table_bom tfoot').find('.SumTotal').each(function () {
                    $(this).html(data.cur + number_format(sumtotal_new, 2, '.', ','));
                })
                $('#table_bom tfoot').find('.SumVat').each(function () {
                    $(this).html(data.cur + number_format(sumvat_new, 2, '.', ','));
                })
                $('#table_bom tfoot').find('.SumTotCost').each(function () {
                    $(this).html(data.cur + number_format(sumcost_new, 2, '.', ','));
                })
                $('#table_bom tfoot').find('.SumAveCost').each(function () {
                    $(this).html(data.cur + number_format(sumave_new, 2, '.', ','));
                })
                //update Boom
                $('#bom_cost').val(number_format(sumave_new, 2, '.', ','));
                // remove row dari table
                $('#row_id_' + this.row).remove();

            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error deleting data');
            }
        });
        $('#modalConfirmYesNo').modal('hide');
        $('#myModal2').modal('show');
        $("a[href='#locaprodsteps1-3']").trigger('click');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
        $('#myModal2').modal('show');
        $("a[href='#locaprodsteps1-3']").trigger('click');
    });
}
// Added By Raza On 29 feb 2020

function delete_import_bom(id, row) {

    if (confirm('Are you sure you want to delete this data?')) { // ajax delete data to database
        $.ajax({
            url: site_url + 'ImportedProducts/ajax-delete_import_bom/' + id,
            type: "POST",
            dataType: "JSON",
            row: row,
            success: function (data) {
                var temp_sumtotal = 0;
                var sumvat_new = 0
                var temp_total = 0;
                // get SUM Total
                $('#table_import_bom tfoot').find('.SumVat').each(function () {
                    temp_sumtotal = parseFloat($(this).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''))
                })
                $('#row_id1_' + this.row).find('td:eq(0) input').each(function () {
                    $(this).val("");
                })
                $('#row_id1_' + this.row).find('td:eq(1) input').each(function () {
                    $(this).val("");
                })
                $('#row_id1_' + this.row).find('td:eq(2) input').each(function () {
                    temp_total = parseFloat($(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                    $(this).val(0);
                })
                $('#td_action1_' + this.row).html("");

                sumvat_new = temp_sumtotal - temp_total;

                $('#table_import_bom tfoot').find('.SumVat').each(function () {
                    $(this).html(number_format(sumvat_new, 2, '.', ','));
                })
                //update Boom
                $('#bom_cost').val(number_format(sumvat_new, 2, '.', ','));
                // remove row dari table
                $('#row_id1_' + this.row).remove();

            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error deleting data');
            }
        });
    }

}


function clearForm() {
    //Reintial Counter On reset added by raza On 10 march 2020
    counter = 2;
    var chk_industry = $("#indus_type").val();
    if (chk_industry == "Cosmetics") {
        $("#product_type").val('1').trigger('change');
        $("#product_code").val('');
        $("#product_methods").val('');
        $("#base_ingredients").val('');
        $("#base_purchase_volume").val('');
        $("#base_purchase_price").val('');
        $("#base_cost_per").val('');
        $("#base_volume").val('');
        $("#base_volume_cost").val('');
        $("#drops").val('');
        $("#cost_per_drop").val('');
        $("#productitemslist").html('');
        $('#total_unit').html('0');
        $('#bi_unit').html('0');
        $('#p_unit').html('0');
        $('#dh_unit').html('0');
        $('#pac_unit').html('0');
        $('#bnd_unit').html('0');
        $('#aing_unit').html('0');
        $('#total_prod').html('0');
        $('#bi_prod').html('0');
        $('#p_prod').html('0');
        $('#dh_prod').html('0');
        $('#pac_prod').html('0');
        $('#bnd_prod').html('0');
        $('#aing_prod').html('0');
        $('#rrp_cost').val('0');
        $('#gross_profit').val('0');
        $('#monthly_revenue').val('0');
        $('#monthly_gross_profit').val('0');
        $('#production_volume').val('');
        $('#inc_ingredients').val('');
        $('#supplier_ingredients').val('');
        $('#formula_pecentage').val('');
        $('#amount_used').val('');
        $('#cosmetics_description').val('');
        $('#cosmetics_description_1').val('');
        $('#cosmetics_description_2').val('');
        $('#cosmetics_description_3').val('');
        $('input').each(function () {
            var $this = $(this);
            $this.removeClass('used');
        });
        $("#markup_on_cost").addClass('used');
        $("#rrp_cost").addClass('used');
        $("#cosmetics_canvas").html('');
        $('#cosmetics-progress-bar').find('.progress-bar').text();
        $('#cosmetics-progress-bar').find('.progress-bar').attr('aria-valuenow', '0').width('0%');

        // Remove Appended Rows
        var current_cosmetics_rows = '';
        current_cosmetics_rows = $("#table_cosmetics_ingredients > tbody").children().length;
        var cosmetics_rows = current_cosmetics_rows - 1;
        $("#table_cosmetics_ingredients tr:first").find("#action_title").remove();
        for (var z = 0; z <= cosmetics_rows; z++) {
            if (z > 2) {
                $('#table_cosmetics_ingredients tr#row_id_' + z).remove();
            }
            $('#row_id_' + z).find('td input').each(function () {
                $(this).val("");
            })
            $('#id_' + z + '').val('');
            $("#category_" + z + "").val('1').trigger('change');
            $('#table_cosmetics_ingredients tr').find('#td_action_' + z).remove();
        }
        $('#table_cosmetics_ingredients').find('.FormulaTotal').text('');
        $('#table_cosmetics_ingredients').find('.AmountTotal').text('');
        $('#table_cosmetics_ingredients').find('.PurchaseVolumePriceTotal').text('');
        $('#table_cosmetics_ingredients').find('.CostPerTotal').text('');
        $('#table_cosmetics_ingredients').find('.CostProductTotal').text('');
        // Remove Appended Row for Accessory
        var current_accessory_rows = '';
        current_accessory_rows = $("#table_cosmetics_accessory > tbody").children().length;
        var accessory_rows = current_accessory_rows - 1;
        $("#table_cosmetics_accessory tr:first").find("#action_title").remove();
        for (var x = 0; x <= accessory_rows; x++) {
            if (x > 2) {
                $('#table_cosmetics_accessory tr#row_accessory_id_' + x).remove();
            }
            $('#row_accessory_id_' + x).find('td input').each(function () {
                $(this).val("");
            })
            $('#accessory_id_' + x + '').val('');
            $("#accessory_category_" + x + "").val('5').trigger('change');
            $('#table_cosmetics_accessory tr').find('#td_action_accessory_' + x).remove();
        }
        $('#table_cosmetics_accessory').find('.PurchaseQtyPriceTotal').text('');
        $('#table_cosmetics_accessory').find('.ItemCostTotal').text('');
    } else {
        $("#Step4").html("Bill of Materials");
    }

    //On Modal Open radio button set to default added by raza 8 march 2020
    $('input[type=radio][name=revenue]').prop('checked', function () {
        return this.getAttribute('checked') == 'checked';
    });
    $("#collapseExample_ser_2").hide();
    $("#localInput").show();
    $("#importInput").hide();


    $('[name="unit_cost"]').val("0");
    $('[name="rrp_cost"]').val("0");
    $('[name="moc"]').val("0");
    save_method == 'add';
    $('[name="status"]').val("");
    $('[name="id"]').val("");
    $('[name="product_description"]').val("");

    $('[name="markup_on_cost"]').val("0");
    $('[name="products_cost"]').val("0");
    $('[name="monthlytable_qty"]').val("0");
    $('[name="importedexchange_range"]').val(number_format('1', 2, '.', ','));
    $('[name="landed_cost"]').val("0");
    $('[name="bom_cost"]').val("0");
    $('#flnFile').val("");


    //Delete All Appended Rows
    //Get Current Number Of rows
    var current_local_rows = '';
    var current_import_rows = '';
    var current_sale_rows = '';
    current_local_rows = $("#table_bom > tbody").children().length;
    current_import_rows = $("#table_import_bom > tbody").children().length;
    current_sale_rows = $("#tab_logic tbody tr").length;
    //row counter starts from 0 so -1 from current rows
    var local_rows = current_local_rows - 1;
    var import_row = current_import_rows - 1;
    var sale_row = current_sale_rows - 1;
    $("#table_bom > thead").find("#action_title").remove();
    for (var lx = 0; lx <= local_rows; lx++) {
        if (lx > 2) {
            $('#table_bom tr#row_id_' + lx).remove();
        }
        $('#table_bom').find('#td_action_' + lx).remove();
    }
    $("#table_import_bom tr:first").find("#action1_title").remove();
    for (y = 1; y <= import_row; y++) {
        if (y > 2) {
            $('#table_import_bom tr#row_id1_' + y).remove();
        }
        $('#table_import_bom tr').find('#td_action1_' + y).remove();
    }

    $("#tab_logic tr").find("#action_sale_title").remove();
    for (var saleRow = 0; saleRow <= sale_row; saleRow++) {
        if (saleRow > 0) {
            $('#tab_logic tbody tr#addr' + saleRow).remove();
        }
        $('#tab_logic tbody tr#addr' + saleRow).find('td input').each(function () {
            $(this).val("");
        })
        $('#tab_logic tbody tr#addr' + saleRow).find('#td_action_sale' + saleRow).remove();
        $('#tab_logic tbody tr#addr' + saleRow).find('#total_manual_sales' + saleRow).html('');
    }

    $('#product_method').show();
    // $('#imgfile').attr("src", "assets/images/default-avatar.png");

    btnReset = ""
    // <?php for ($i = 0; $i < 10; $i++) { ?>
    /*$('#type_<?php echo $i; ?>').val("");
    $('#description_<?php echo $i; ?>').val("");
    $('#qty_<?php echo $i; ?>').val("");
    $('#price_<?php echo $i; ?>').val("");
    $('#td_totmts_<?php echo $i; ?>').html("0");
    $('#td_total_<?php echo $i; ?>').html("0");
    $('#td_vat_<?php echo $i; ?>').html("0");
    $('#td_totcost_<?php echo $i; ?>').html("0");
    $('#td_avecost_<?php echo $i; ?>').html("0");*/
    // <?php } ?>

    for (i = 0; i <= counter; i++) {
        $('#type_' + i).val("");
        $('#description_' + i).val("");
        $('#qty_' + i).val("");
        $('#price_' + i).val("");
        $('#td_totmts_' + i).html("0");
        $('#td_total_' + i).html("0");
        $('#td_vat_' + i).html("0");
        $('#td_totcost_' + i).html("0");
        $('#td_avecost_' + i).html("0");
    }

    for (j = 0; j <= counter; j++) {
        $('#description1_' + i).val("");
        $('#percentage_cost_' + i).val("");
        $('#total_cost_' + i).val("");
    }

    for (k = 0; k <= 0; k++) {
        $('input[name="region' + k + '"]').val("");
        $('input[name="jul' + k + '"]').val("");
        $('input[name="aug' + k + '"]').val("");
        $('input[name="aug' + k + '"]').val("");
        $('input[name="sep' + k + '"]').val("");
        $('input[name="oct' + k + '"]').val("");
        $('input[name="nov' + k + '"]').val("");
        $('input[name="dec' + k + '"]').val("");
        $('input[name="jan' + k + '"]').val("");
        $('input[name="feb' + k + '"]').val("");
        $('input[name="mar' + k + '"]').val("");
        $('input[name="apr' + k + '"]').val("");
        $('input[name="may' + k + '"]').val("");
        $('input[name="jun' + k + '"]').val("");
    }

    // remove action
    // $("#table_bom th#action_title").remove();
    // for (i = 0; i < counter; i++) {
    //     $('#table_bom td#td_action_' + i).remove();
    //     $('#table_import_bom td#td_action1_' + i).remove();
    // }
    // $('#table_bom tbody').find('td input').each(function () {
    //     $(this).val("");
    //     $(this).html("0");
    // })
    // $('#table_bom tbody').find('td input[type="number"]').each(function () {
    //     $(this).val("0");

    // })

    //Imported table clear added by raza
    $('#table_import_bom tbody').find('td input').each(function () {
        $(this).val("");
        $(this).html("0");
    })
    $('#table_import_bom tbody').find('td input[type="number"]').each(function () {
        $(this).val("0");

    })
    $('.SumTotal').html("0");
    $('.SumVat').html("0");
    $('.SumTotCost').html("0");
    $('.SumAveCost').html("0");

    for (clearCount = 1; clearCount <= 12; clearCount++) {
        $('[name="oq_1"]').val("0");
        $('[name="sp_' + clearCount + '"]').val("0");
        $('[name="p_' + clearCount + '"]').val("0");
        $('#oq_' + clearCount).html("0");
        $('#cq_' + clearCount).html("0");
        $('#soq_' + clearCount).html("0");
        $('#ssp_' + clearCount).html("0");
        $('#scq_' + clearCount).html("0");
        $('#scp_' + clearCount).html("0");
        $('#spp_' + clearCount).html("0");
        $('#pp_' + clearCount).html("0");
        $('#pg_' + clearCount).html("0");

    }

    $('#sp_13').html("0");
    $('#p_13').html("0");
    $('#oq_13').html("0");
    $('#cq_13').html("0");
    $('#soq_13').html("0");
    $('#ssp_13').html("0");
    $('#scq_13').html("0");
    $('#scp_13').html("0");
    $('#spp_13').html("0");
    $('#pp_13').html("0");
    $('#pg_13').html("0");

    $("#flnFile").fileinput('refresh', {
        overwriteInitial: true,
        maxFileSize: 500,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        browseIcon: '<i class="fa fa-folder-open"></i>',
        removeIcon: '<i class="fa fa-remove"></i>',
        removeTitle: 'Cancel or reset changes',
        elErrorContainer: '#kv-avatar-errors-1',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + site_url + 'assets/img/avatars/avatar.png" alt="Product Picture" width="80px" height="80px">',
        layoutTemplates: {
            main2: '{preview}  ' + btnReset + ' {browse} '
        },
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
    $('#lprod_step1').trigger('click');
}


function restoreDefault(id, flag) {
    if (flag == 0) {
        $('#modalConfirmYesNo').css('z-index', '9999');
        $('#modalConfirmYesNo').modal('show');
        $("#lblTitleConfirmYesNo").html("User Confirmation");
        $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this image ??");
        $("#btnYesConfirmYesNo").off('click').click(function () {
            $.ajax({
                type: 'POST',
                url: 'products/restoreDefault/' + id,
                success: function () {
                    drawCollectionView();
                    $('#modalConfirmYesNo').modal('hide');
                    edit_product(id, flag);
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    showResultFailed(jqXHR.responseText);
                    hideWaitingFail();
                }
            })
        });

        $("#btnNoConfirmYesNo").off('click').click(function () {
            $('#modalConfirmYesNo').modal('hide');
            edit_product(id, flag);
        });
    } else if (flag == 1) {
        $('#modalConfirmYesNo').css('z-index', '9999');
        $('#modalConfirmYesNo').modal('show');
        $("#lblTitleConfirmYesNo").html("User Confirmation");
        $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this image ??");
        $("#btnYesConfirmYesNo").off('click').click(function () {
            $.ajax({
                type: 'POST',
                url: 'ImportedProducts/restoreDefault/' + id,
                success: function () {
                    drawCollectionView();
                    $('#modalConfirmYesNo').modal('hide');
                    edit_product(id, flag);
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    showResultFailed(jqXHR.responseText);
                    hideWaitingFail();
                }
            })
        });

        $("#btnNoConfirmYesNo").off('click').click(function () {
            $('#modalConfirmYesNo').modal('hide');
            edit_product(id, flag);
        });

    } else {

    }
}

/*/
/ register jQuery extension
 jQuery.extend(jQuery.expr[':'], {
 focusable: function (el, index, selector) {
 return $(el).is('a, button, :input, [tabindex]');
 }
 });

 $(document).on('keydown', ':focusable', function (e) {
 if (e.which == 13) {
 e.preventDefault();
 // Get all focusable elements on the page
 var $canfocus = $(':focusable');
 var index = $canfocus.index(this) + 1;
 if (index >= $canfocus.length) index = 0;
 $canfocus.eq(index).focus();
 }
 });*/

function nextStep() { }


function saveTable() {

    $('#btnSaveTable').text('saving...'); // change button text
    $('#btnSaveTable').attr('disabled', true); // set button disable

    var url;

    if ($('[name="status"]').val() == "update") {
        url = site_url + 'Products/ajax-update/' + counter;
    } else {
        url = site_url + 'Products/ajax-add/' + counter;
    }

    if ($('#flnFile').val() == "" && $('#imgfile').attr('src') == site_url + "assets/img/avatars/avatar.png") {

        $('#modalConfirmYesNo').modal('show');

        $("#lblTitleConfirmYesNo").html("User Confirmation");
        $("#lblMsgConfirmYesNo").html("<div class='col-sm-3'>" + "<img id='imgfile' class='rounded-circle' src='" + site_url + "assets/images/default-avatar.png' alt='Product Picture' width='80px' height='80px'>" + "</div>" + "<div class='col-sm-9'>" + "If you want to add image <strong>Click on folder icon <i class='fa fa-folder-o'></i>, then select an image <i class='fa fa-file-image-o'></i>.</strong><br/>Do you want to add image now ??" + "</div>");

        $("#btnNoConfirmYesNo").off('click').click(function () {
            // ajax adding data to database
            //
            $.ajax({
                url: url,
                type: "POST",
                data: new FormData($('#table_form')[0]),
                contentType: false,
                async: false,
                cache: false,
                processData: false,
                success: function (data) {

                    var obj = jQuery.parseJSON(data);

                    $('#stock_modal').modal('hide');
                    if (obj['status']) { // if success close modal and reload ajax table
                        if (save_method == 'add') {
                            var msg = "Product added successfully, <br/> Do you want to add another ???"
                        } else {
                            var msg = "Product edited successfully !!! <br/> Do you want to add Product ???"
                        }

                        $('#modalConfirmYesNo').modal('show');

                        $("#lblTitleConfirmYesNo").html("");
                        $("#lblMsgConfirmYesNo").html("<div class='checkmark'>" + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" + "</svg>" + "</div>" + "<p class='alert-box'>" + msg + "</p>");

                        $("#btnYesConfirmYesNo").off('click').click(function () {

                            clearForm();
                            selectPanel(0);
                            drawCollectionView();

                            $('#modalConfirmYesNo').modal('hide');
                            $("#product_form").show();

                        });

                        $("#btnNoConfirmYesNo").off('click').click(function () {
                            clearForm();
                            drawCollectionView();
                            // $('#btnCloseForm').click();
                            $('#modalConfirmYesNo').modal('hide');
                            $("#product_form").hide();

                        });

                    }

                    $('.nav a[href="#add_menu0"]').tab('show');

                    $('#btnSaveTable').text('save'); // change button text
                    $('#btnSaveTable').attr('disabled', false); // set button enable

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Error adding / update data');
                    $('#btnSaveTable').text('save'); // change button text
                    $('#btnSaveTable').attr('disabled', false); // set button enable
                }
            });

        });

        $("#btnYesConfirmYesNo").off('click').click(function () {
            $('.nav a[href="#add_menu0"]').tab('show');

            $('#flnFile').trigger('click');

            $('#btnSaveTable').text('save'); // change button text
            $('#btnSaveTable').attr('disabled', false); // set button enable
            $('#modalConfirmYesNo').modal('hide');
            $("#product_form").show();
        });
    } else {

        $.ajax({
            url: url,
            type: "POST",
            data: new FormData($('#table_form')[0]),
            contentType: false,
            async: false,
            cache: false,
            processData: false,
            success: function (data) {

                $('#stock_modal').modal('hide');

                var obj = jQuery.parseJSON(data);

                if (obj['status']) { // if success close modal and reload ajax table

                    if (save_method == 'add') {
                        var msg = "Product added successfully, <br/> Do you want to add another ???"
                    } else {
                        var msg = "Product edited successfully !!! <br/> Do you want to add Product ???"
                    }

                    $('#modalConfirmYesNo').modal('show');

                    $("#lblTitleConfirmYesNo").html("");
                    $("#lblMsgConfirmYesNo").html("<div class='checkmark'>" + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" + "</svg>" + "</div>" + "<p class='alert-box'>" + msg + "</p>");

                    $("#btnYesConfirmYesNo").off('click').click(function () { // add_localproduct();
                        clearForm();
                        drawCollectionView();

                        $('#modalConfirmYesNo').modal('hide');
                        $("#product_form").show();

                    });

                    $("#btnNoConfirmYesNo").off('click').click(function () {
                        clearForm();
                        $('#stock_modal').modal('hide');
                        drawCollectionView();
                        $('#modalConfirmYesNo').modal('hide');
                        $("#product_form").hide();
                    });
                }

                $('.nav a[href="#add_menu0"]').tab('show');
                $('#btnSaveTable').text('save'); // change button text
                $('#btnSaveTable').attr('disabled', false); // set button enable
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error adding / update data');
                $('#btnSaveTable').text('save'); // change button text
                $('#btnSaveTable').attr('disabled', false); // set button enable
            }
        });

    }
}
// Get product Data
function getProductData(id, method) {
    if (method == 1) {
        url = site_url + 'ImportedProducts/ajax-editimported/' + id;
    } else if (method == 0) {
        url = site_url + 'Products/ajax-edit/' + id;
    } else {
        // do nothing
    }
    $.ajax({
        url: url,
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            $('[name="status"]').val("update");
            $('[name="methode"]').val(method);
            $('#product_description').focus();
            $('[name="id"]').val(id);
            $('#id_item').val(id);
            $('[name="product_description"]').val(data[0].Description);
            // $('[name="Quantity"]').val(data[0].Qty);
            $('[name="unit_cost"]').val(data[1].cur + number_format(data[0].UnitCost, 0, '.', ','));
            $('[name="markup_on_cost"]').val(data[0].MarkUpOnCost + '%');
            // $('[name="weeklytable_qty"]').val(data[0].weekly_qty);
            $('[name="monthlytable_qty"]').val(number_format(data[0].monthly_qty, 0, '.', ','));
            // $('[name="yearlytable_qty"]').val(data[0].yearly_qty);
            // $('[name="flnFile"]').val(data.ThumbNail);
            $('[name="oq_1"]').val(number_format(data[0].oq_1), 0, '.', ',');
            $('[name="sp_1"]').val(number_format(data[0].sp_1), 0, '.', ',');
            $('[name="sp_2"]').val(number_format(data[0].sp_2), 0, '.', ',');
            $('[name="sp_3"]').val(number_format(data[0].sp_3), 0, '.', ',');
            $('[name="sp_4"]').val(number_format(data[0].sp_4), 0, '.', ',');
            $('[name="sp_5"]').val(number_format(data[0].sp_5), 0, '.', ',');
            $('[name="sp_6"]').val(number_format(data[0].sp_6), 0, '.', ',');
            $('[name="sp_7"]').val(number_format(data[0].sp_7), 0, '.', ',');
            $('[name="sp_8"]').val(number_format(data[0].sp_8), 0, '.', ',');
            $('[name="sp_9"]').val(number_format(data[0].sp_9), 0, '.', ',');
            $('[name="sp_10"]').val(number_format(data[0].sp_10), 0, '.', ',');
            $('[name="sp_11"]').val(number_format(data[0].sp_11), 0, '.', ',');
            $('[name="sp_12"]').val(number_format(data[0].sp_12), 0, '.', ',');

            $('[name="p_1"]').val(number_format(data[0].p_1), 0, '.', ',');
            $('[name="p_2"]').val(number_format(data[0].p_2), 0, '.', ',');
            $('[name="p_3"]').val(number_format(data[0].p_3), 0, '.', ',');
            $('[name="p_4"]').val(number_format(data[0].p_4), 0, '.', ',');
            $('[name="p_5"]').val(number_format(data[0].p_5), 0, '.', ',');
            $('[name="p_6"]').val(number_format(data[0].p_6), 0, '.', ',');
            $('[name="p_7"]').val(number_format(data[0].p_7), 0, '.', ',');
            $('[name="p_8"]').val(number_format(data[0].p_8), 0, '.', ',');
            $('[name="p_9"]').val(number_format(data[0].p_9), 0, '.', ',');
            $('[name="p_10"]').val(number_format(data[0].p_10), 0, '.', ',');
            $('[name="p_11"]').val(number_format(data[0].p_11), 0, '.', ',');
            $('[name="p_12"]').val(number_format(data[0].p_12), 0, '.', ',');


            // Get Sales
            cur = data[1].cur;

            if (data[0].ThumbNail != "assets/img/avatars/avatar.png") {
                var btnReset = '<button type="button" class="btn btn-outline-danger fileinput-remove fileinput-remove-button" title="Cancel or reset changes" ' + 'onclick="restoreDefault(' + data[0].id + ',' + 0 + ')">' + '<i class="fa fa-remove"></i>' + '</button>';
            } else {
                var btnReset = '{remove}';
            }
            $("#flnFile").fileinput('refresh', {
                overwriteInitial: true,
                maxFileSize: 500,
                showClose: false,
                showCaption: false,
                browseLabel: '',
                removeLabel: '',
                browseIcon: '<i class="fa fa-folder-open"></i>',
                removeIcon: '<i class="fa fa-remove"></i>',
                removeTitle: 'Cancel or reset changes',
                elErrorContainer: '#kv-avatar-errors-1',
                msgErrorClass: 'alert alert-block alert-danger',
                defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + site_url + data[0].ThumbNail + '" alt="Product Picture" width="80px" height="80px">',
                layoutTemplates: {
                    main2: '{preview}  ' + btnReset + ' {browse} '
                },
                allowedFileExtensions: ["jpg", "png", "gif"]
            });


            $('#stock_modal').modal('show'); // show bootstrap modal when complete loaded

            $('#stock_modal').on('shown.bs.modal', function () {
                $('.nav a[href="#add_menu0"]').tab('show');
            })
            $('.modal-title').text('Edit Product'); // Set title to Bootstrap modal title


            TableCalculation();


            if (Object.keys(data[2]).length > 0) {
                var table_boom_length = Object.keys(data[2]).length - 1;
                $("#table_bom tr:first").append("<th id='action_title'>Action</th>");

                $('#table_bom tr:not(:first)').each(function (e) {
                    if (e <= table_boom_length) {
                        $(this).append("<td id='td_action_" + e + "'></td>");
                    }
                });
                $("#table_bom > tfoot tr").find("#footaction").remove();
                $("#table_bom > tfoot tr").append("<th id='footaction'></th>");
            } else {
                $("#table_bom > tfoot tr").find("#footaction").remove();
            }

            for (m = 0; m < Object.keys(data[2]).length; m++) {
                if (m > 2) {
                    //empty appended row if any added by raza 
                    $('#table_bom tr#row_id_' + m).remove();
                    //append rows
                    var editnewRow = '<tr id="row_id_' + m + '">' + '<input name="id_' + m + '" id="id_' + m + '" type="hidden">' + '<td id="td_type_' + m + '">' + '<div class="form-group is-empty no-margin"><input name="type_' + m + '" class="form-control" id="type_' + m + '" placeholder="Enter Item Type" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_description_' + m + '">' + '<div class="form-group is-empty no-margin"><input name="description_' + m + '" class="form-control" id="description_' + m + '" placeholder="Enter Item Description" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_qty_' + m + '">' + '<div class="form-group no-margin"><input name="qty_' + m + '" class="form-control used numberFormat" id="qty_' + m + '" onchange="getTotalMts(' + m + ')" value="0" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_price_' + m + '">' + '<div class="form-group no-margin"><input name="price_' + m + '" class="form-control used currencyFormat" id="price_' + m + '" onchange="getTotal(' + m + ')" value="0" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_totmts_' + m + '">0</td>' + '<td id="td_total_' + m + '">0</td>' + '<td id="td_vat_' + m + '">0</td>' + '<td id="td_totcost_' + m + '">0</td>' + '<td id="td_avecost_' + m + '">0</td><td id="td_action_' + m + '"></td></tr>';
                    $('table.table_bom').append(editnewRow);
                }
                $('#id_' + m).val(data[2][m].id)
                $('#type_' + m).val(data[2][m].type);
                $('#description_' + m).val(data[2][m].description);
                number_format($('#qty_' + m).val(data[2][m].qty), 2, '.', ',');
                number_format($('#price_' + m).val(data[2][m].price), 2, '.', ',');
                $('#td_action_' + m).html("<a href='#' class='btn btn-warning' onclick='delete_bom(" + data[2][m].id + "," + m + ")'>Delete</a>");

                var total_mts = 0;
                total_mts = parseFloat($('#sp_13').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) * data[2][m].qty

                $('#td_totmts_' + m).html(number_format(total_mts, 2, '.', ','))

                var total = 0;
                var sum_total = 0;
                var vat = 0;
                var sum_vat = 0;
                var tot_cost = 0;
                var sum_totcost = 0;
                var ave_cost = 0;
                var sum_totave = 0;

                total = (parseFloat($('#sp_13').html().replace(/\,|\$|\€|\₹|\£|\%/g, '')) * data[2][m].qty) * data[2][m].price;

                if (total == 0) {
                    $('#td_total_' + m).html(cur + total)
                } else {
                    $('#td_total_' + m).html(cur + number_format(total, 2, '.', ','))
                }

                for (j = 0; j <= m; j++) {
                    sum_total += parseFloat($('#td_total_' + j).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                }
                if (sum_total == 0) {
                    $('.SumTotal').html(cur + sum_total)
                } else {
                    $('.SumTotal').html(cur + number_format(sum_total, 2, '.', ','))
                } vat = total * 0.1;

                if (vat == 0) {
                    $('#td_vat_' + m).html(cur + vat)
                } else {
                    $('#td_vat_' + m).html(cur + number_format(vat, 2, '.', ','))
                }


                for (k = 0; k <= m; k++) {
                    sum_vat += parseFloat($('#td_vat_' + k).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                }
                if (sum_vat == 0) {
                    $('.SumVat').html(cur + sum_vat)
                } else {
                    $('.SumVat').html(cur + number_format(sum_vat, 2, '.', ','))
                } tot_cost = total + vat

                if (tot_cost == 0) {
                    $('#td_totcost_' + m).html(cur + tot_cost)
                } else {
                    $('#td_totcost_' + m).html(cur + number_format(tot_cost, 2, '.', ','))
                }


                for (l = 0; l <= m; l++) {
                    sum_totcost += parseFloat($('#td_totcost_' + l).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                }

                if (sum_totcost == 0) {
                    $('.SumTotCost').html(cur + sum_totcost)
                } else {
                    $('.SumTotCost').html(cur + number_format(sum_totcost, 2, '.', ','))
                }
                ave_cost = parseFloat(tot_cost) / parseFloat($('#sp_13').html().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                if (ave_cost == 0) {
                    $('#td_avecost_' + m).html(cur + ave_cost);
                } else {
                    $('#td_avecost_' + m).html(cur + number_format(ave_cost, 2, '.', ','));
                }

                for (n = 0; n <= m; n++) {
                    sum_totave += parseFloat($('#td_avecost_' + n).html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));
                }
                if (sum_totave == 0) {
                    $('.SumAveCost').html(cur + sum_totave)
                } else {
                    $('.SumAveCost').html(cur + number_format(sum_totave, 2, '.', ','))
                }


            }

            if (sum_totave == 0 || sum_totave === undefined) {
                sum_totave = 0;
                $('#bom_cost').val(data[1].cur + sum_totave);
            } else {
                $('#bom_cost').val(data[1].cur + number_format(sum_totave, 2, '.', ','));
            } products_cost = parseFloat(data[0].UnitCost) + parseFloat($('.SumAveCost').html().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, ''));

            if (products_cost == 0) {
                $('#products_cost').val(data[1].cur + products_cost);
            } else {
                $('#products_cost').val(data[1].cur + number_format(parseFloat(products_cost), 2, '.', ','));
            } rrp_cost = data[0].rrp_cost

            if (rrp_cost == 0 || rrp_cost == '') {
                $('#rrp_cost').val(cur + 0)

            } else {

                $('#rrp_cost').val(data[1].cur + number_format(rrp_cost, 2, '.', ','))

            }
            products_cost = parseFloat(products_cost);
            MarkUpOnCost = parseFloat(rrp_cost);

            tableCalculationPrice();

            //$('#product_method').hide();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}
// Save each Product Tab data
$('#add_local_product_form').on('submit', (function (e) {
    e.preventDefault();
    var currentActive = $(".wprofile2 .active").attr("href");
    var currentIndex = currentActive.substr(currentActive.length - 1);
    if ($("#indus_type").val() != "Cosmetics") {
        if ($('[name="status"]').val() == "update") {
            if ($('[name="methode"]').val() == 1) {
                var current_rows = $("#table_import_bom > tbody").children().length;
                //row counter starts from 0 so -1 from current rows
                counter = current_rows - 1;
                url = site_url + 'ImportedProducts/ajax-updateimported/' + counter;
            } else if ($('[name="methode"]').val() == 0) {
                var current_rows = $("#table_bom > tbody").children().length;
                var current_rows_sales = $("#tab_logic > tbody").children().length;
                //row counter starts from 0 so -1 from current rows
                counter = current_rows - 1;
                url = site_url + 'Products/ajax-update/' + counter + '/' + current_rows_sales;
            }
        } else {
            if ($("input[name='revenue']:checked").val() == 'import') {
                url = site_url + 'ImportedProducts/ajax-addimported/' + counter;
            } else if ($("input[name='revenue']:checked").val() == 'local') {
                url = site_url + 'Products/ajax-add/' + counter;
            } else {
                url = site_url + 'Products/ajax-add/' + counter;
            }
        }
    } else {
        if ($('[name="status"]').val() == "update") {
            url = site_url + 'Products/ajax-update';
        } else {
            url = site_url + 'Products/ajax-add';
        }

    }

    saveProductData(url, currentIndex, $('[name="methode"]').val());
}));


function saveProductData(url, index, method) {
    $.ajax({
        url: url,
        type: "POST",
        data: new FormData($('#add_local_product_form')[0]),
        contentType: false,
        async: false,
        cache: false,
        processData: false,
        success: function (data) {
            var obj = jQuery.parseJSON(data);
            console.log("obj", obj)
            if (obj['status']) { // if success close modal and reload ajax table
                if (index > 3) {
                    $('#myModal2').modal('hide');
                    $('#stock_modal').modal('hide');
                    if (save_method == 'add') {
                        var msg = "Product added successfully, <br/> Do you want to add another ???"
                    } else {
                        var msg = "Product edited successfully !!! <br/> Do you want to add Product ???"
                    }
                    $('#modalConfirmYesNo').css('z-index', '9999');
                    $('#modalConfirmYesNo').modal('show');

                    $("#lblTitleConfirmYesNo").html("");
                    $("#lblMsgConfirmYesNo").html("<div class='checkmark'>" + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" + "</svg>" + "</div>" + "<p class='alert-box'>" + msg + "</p>");
                    $("#btnYesConfirmYesNo").off('click').click(function () {

                        clearForm();
                        selectPanel(0);
                        drawCollectionView();

                        $('#modalConfirmYesNo').modal('hide');
                        $("#myModal2").modal('show');
                        $('#product_step1').trigger('click');

                    });

                    $("#btnNoConfirmYesNo").off('click').click(function () {
                        clearForm();
                        drawCollectionView();
                        // $('#btnCloseForm').click();
                        $("#modalConfirmYesNo").modal('hide');


                    });
                } else {
                    //selectPanel(index + 1);
                    var newindex = parseInt(index) + 1;
                    $("a[href='#locaprodsteps1-" + newindex + "']").trigger('click')
                    getProductData(obj['id'], method);
                    drawCollectionView();
                }

            }

            // $('.nav a[href="#add_menu0"]').tab('show');

            $('#save_product').val('save'); // change button text
            $('#save_product').attr('disabled', false); // set button enable

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error adding / update data');
            $('#save_product').val('save'); // change button text
            $('#save_product').attr('disabled', false); // set button enable
        }
    });
}

function saveProduct() {
    $('#save_product').val('saving...');
    // change button text
    // $('#save_product').attr('disabled', true); //set button disable

    var url;
    // wow
    if ($("#indus_type").val() != "Cosmetics") {
        if ($('[name="status"]').val() == "update") {
            if ($('[name="methode"]').val() == 1) {
                var current_rows = $("#table_import_bom > tbody").children().length;
                //row counter starts from 0 so -1 from current rows
                counter = current_rows - 1;
                url = site_url + 'ImportedProducts/ajax-updateimported/' + counter;
            } else if ($('[name="methode"]').val() == 0) {
                var current_rows = $("#table_bom > tbody").children().length;
                //row counter starts from 0 so -1 from current rows
                counter = current_rows - 1;
                url = site_url + 'Products/ajax-update/' + counter;
            }
        } else {
            if ($("input[name='revenue']:checked").val() == 'import') {
                url = site_url + 'ImportedProducts/ajax-addimported/' + counter;
            } else if ($("input[name='revenue']:checked").val() == 'local') {
                url = site_url + 'Products/ajax-add/' + counter;
            }
        }
    } else {

        if ($('[name="status"]').val() == "update") {
            url = site_url + 'Products/ajax-update';
        } else {
            url = site_url + 'Products/ajax-add';
        }

    }

    if ($('#flnFile').val() == "" && $('#imgfile').attr('src') == site_url + "assets/img/avatars/avatar.png") {
        $('#save_product').val('SAVE');
        $('#modalConfirmYesNo').css("z-index", "9999");
        $('#modalConfirmYesNo').modal('show');

        $("#lblTitleConfirmYesNo").html("User Confirmation");
        $("#lblMsgConfirmYesNo").html("<div class='col-sm-3'>" + "<img id='imgfile' class='rounded-circle' src='" + site_url + "assets/images/default-avatar.png' alt='Product Picture' width='80px' height='80px'>" + "</div>" + "<div class='col-sm-9'>" + "If you want to add image <strong>Click on folder icon <i class='fa fa-folder-o'></i>, then select an image <i class='fa fa-file-image-o'></i>.</strong><br/>Do you want to add image now ??" + "</div>");

        $("#btnNoConfirmYesNo").off('click').click(function () { // ajax adding data to database
            console.log("formData", $('#add_local_product_form')[0])
            $.ajax({
                url: url,
                type: "POST",
                data: new FormData($('#add_local_product_form')[0]),
                contentType: false,
                async: false,
                cache: false,
                processData: false,
                success: function (data) {

                    var obj = jQuery.parseJSON(data);
                    $('#myModal2').modal('hide');
                    $('#stock_modal').modal('hide');
                    if (obj['status']) { // if success close modal and reload ajax table
                        if (save_method == 'add') {
                            var msg = "Product added successfully, <br/> Do you want to add another ???"
                        } else {
                            var msg = "Product edited successfully !!! <br/> Do you want to add Product ???"
                        }
                        $('#modalConfirmYesNo').css('z-index', '9999');
                        $('#modalConfirmYesNo').modal('show');

                        $("#lblTitleConfirmYesNo").html("");
                        $("#lblMsgConfirmYesNo").html("<div class='checkmark'>" + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" + "</svg>" + "</div>" + "<p class='alert-box'>" + msg + "</p>");

                        $("#btnYesConfirmYesNo").off('click').click(function () {

                            clearForm();
                            selectPanel(0);
                            drawCollectionView();

                            $('#modalConfirmYesNo').modal('hide');
                            $("#myModal2").modal('show');
                            $('#product_step1').trigger('click');

                        });

                        $("#btnNoConfirmYesNo").off('click').click(function () {
                            clearForm();
                            drawCollectionView();
                            // $('#btnCloseForm').click();
                            $("#modalConfirmYesNo").modal('hide');


                        });

                    }

                    // $('.nav a[href="#add_menu0"]').tab('show');

                    $('#save_product').val('save'); // change button text
                    $('#save_product').attr('disabled', false); // set button enable

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Error adding / update data');
                    $('#save_product').val('save'); // change button text
                    $('#save_product').attr('disabled', false); // set button enable
                }
            });

        });

        $("#btnYesConfirmYesNo").off('click').click(function () {
            $('.nav a[href="#add_menu0"]').tab('show');

            $('#flnFile').trigger('click');

            $('#btnSaveTable').text('save'); // change button text
            $('#btnSaveTable').attr('disabled', false); // set button enable
            $('#modalConfirmYesNo').modal('hide');
        });
    } else {

        $.ajax({
            url: url,
            type: "POST",
            data: new FormData($('#add_local_product_form')[0]),
            contentType: false,
            async: false,
            cache: false,
            processData: false,
            success: function (data) {
                $('#myModal2').modal('hide');
                $('#stock_modal').modal('hide');

                var obj = jQuery.parseJSON(data);

                if (obj['status']) { // if success close modal and reload ajax table

                    if (save_method == 'add') {
                        var msg = "Product added successfully, <br/> Do you want to add another ?"
                    } else {
                        var msg = "Product edited successfully !!! <br/> Do you want to add Product ?"
                    }
                    $('#modalConfirmYesNo').css("z-index", "9999");
                    $('#modalConfirmYesNo').modal('show');

                    $("#lblTitleConfirmYesNo").html("");
                    $("#lblMsgConfirmYesNo").html("<div class='checkmark'>" + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" + "</svg>" + "</div>" + "<p class='alert-box'>" + msg + "</p>");

                    $("#btnYesConfirmYesNo").off('click').click(function () { // add_localproduct();
                        clearForm();
                        drawCollectionView();

                        $('#myModal2').modal('show');
                        $("#product_step1").trigger('click');
                        $('#modalConfirmYesNo').modal('hide');

                    });

                    $("#btnNoConfirmYesNo").off('click').click(function () {
                        clearForm();
                        $('#stock_modal').modal('hide');
                        drawCollectionView();
                        $("#myModal2").modal('hide');
                        $('#modalConfirmYesNo').modal('hide');
                    });
                }

                $('.nav a[href="#add_menu0"]').tab('show');
                $('#btnSaveTable').text('save'); // change button text
                $('#btnSaveTable').attr('disabled', false); // set button enable
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error adding / update data');
                $('#btnSaveTable').text('save'); // change button text
                $('#btnSaveTable').attr('disabled', false); // set button enable
            }
        });

    }
}
// Delete localproduct
function delete_localproduct(id) {
    $.ajax({
        url: site_url + 'Products/ajax-delete/' + id,
        type: "POST",
        dataType: "JSON",
        success: function (data) { // if success reload ajax table
            $('#table_form').modal('hide');
            drawCollectionView();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error deleting data');
        }
    });
}
// Delete Import Product
function delete_importproduct(id) {
    $.ajax({
        url: site_url + 'ImportedProducts/ajax-deleteimported/' + id,
        type: "POST",
        dataType: "JSON",
        success: function (data) { // if success reload ajax table
            $('#table_form').modal('hide');
            drawCollectionView();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error deleting data');
        }
    });
}
// Delete Cosmetics Product
function delete_cosmeticproduct(id) {
    $.ajax({
        url: site_url + 'Products/ajax-delete_cosmetics_products/' + id,
        type: "POST",
        dataType: "JSON",
        success: function (data) { // if success reload ajax table
            $('#table_form').modal('hide');
            drawCollectionView();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error deleting data');
        }
    });
}
// add the animation to the popover
$('a[rel=popover]').popover().click(function (e) {
    e.preventDefault();
    var open = $(this).attr('data-easein');
    if (open == 'shake') {
        $(this).next().velocity('callout.' + open);
    } else if (open == 'pulse') {
        $(this).next().velocity('callout.' + open);
    } else if (open == 'tada') {
        $(this).next().velocity('callout.' + open);
    } else if (open == 'flash') {
        $(this).next().velocity('callout.' + open);
    } else if (open == 'bounce') {
        $(this).next().velocity('callout.' + open);
    } else if (open == 'swing') {
        $(this).next().velocity('callout.' + open);
    } else {
        $(this).next().velocity('transition.' + open);
    }
});

$(document).on('click', '#btnSkipBOM', function (e) {
    $('#Step4').trigger('click');
});


$(".wizard").each(function () {
    var index = 0;
    var wizard = $(this);

    $(wizard).prepend('<div class="wizardProgress"></div>');
    $(wizard).prepend('<div class="header"></div>');

    $(wizard).find(".wizardPanel").each(function () {

        $(wizard).find(".wizardProgress").append("<div>" + $(this).data("title") + "</div>");
    });

    $(wizard).find(".wizardProgress div").click(function () {
        selectPanel($(this).index());
    });

    $(wizard).append('<div class="footer"><button type="button" id="btnFormPrev" class="btn btn-default">Prev</button><button id="btnFormNext" type="button" class="btn btn-primary">Next</button></div>');

    $(wizard).find("#btnFormPrev").click(function () {
        selectPanel($(".wizardProgress .selected").index() - 1);
    });
    $(wizard).find("#btnSkipBOM").click(function () {
        selectPanel(3);

        $('#markup_on_cost').focus();
    });
    $(wizard).find("#btnFormNext").click(function () {

        if ($(".wizardProgress .selected").index() == 0) {

            if ($('#product_description').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert product description first ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('#product_description').focus()

                    $('#modalConfirmYes').modal('hide');

                    // $('.btn-next').trigger("click");

                });

            } else {

                selectPanel($(".wizardProgress .selected").index() + 1);

                $('#monthlytable_qty').focus();

                return false;

            }

        }
        if ($(".wizardProgress .selected").index() == 1) {

            if ($('#monthlytable_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '') == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert monthly quantity ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('#monthlytable_qty').focus()

                    $('#modalConfirmYes').modal('hide');

                });

            } else {

                selectPanel($(".wizardProgress .selected").index() + 1);


                $('#bom_cost').focus();

                return false;

            }

        }
        if ($(".wizardProgress .selected").index() == 2) {

            selectPanel($(".wizardProgress .selected").index() + 1);

            $('#markup_on_cost').focus();

        }

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


function selectPanel(index) {
    var wizard = $('.wizard');
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


$(".wizard_1").each(function () {
    var index = 0;
    var wizard_1 = $(this);

    $(wizard_1).prepend('<div class="wizard_1Progress"></div>');
    $(wizard_1).prepend('<div class="header"></div>');

    $(wizard_1).find(".wizard_1Panel").each(function () {

        $(wizard_1).find(".wizard_1Progress").append("<div>" + $(this).data("title") + "</div>");
    });

    $(wizard_1).find(".wizard_1Progress div").click(function () {
        if ($(this).index() == 2) {
            loadSummary();

            selectPanel($(this).index());
        } else {

            selectPanel($(this).index());
        }
    });

    $(wizard_1).append('<div class="footer"><button id="btnPrev" class="btn btn-default">Prev</button><button id="btnNext" class="btn btn-primary">Next</button></div>');

    $(wizard_1).find("#btnPrev").click(function () {
        selectPanel($(".wizard_1Progress .selected").index() - 1);
    });
    $(wizard_1).find("#btnNext").click(function () {


        if ($(".wizard_1Progress .selected").index() == 1) {

            loadSummary();

            selectPanel($(".wizard_1Progress .selected").index() + 1);
        } else {
            selectPanel($(".wizard_1Progress .selected").index() + 1);
        }

    });

    selectPanel(0);

    function loadSummary() {
        $.ajax({
            url: site_url + 'Products/ajax-calculating_summary',
            type: "GET",
            dataType: "JSON",
            success: function (row) {
                for (i = 1; i <= 15; i++) {

                    j = i - 1;
                    if (i < 13) {
                        $('#sales_month_' + i).html(row['table_header'][j]);
                        $('#stock_month_' + i).html(row['table_header'][j]);
                        $('#gross_month_' + i).html(row['table_header'][j]);
                    }

                    $('#summary_oq_' + i).html(number_format(row['total_oq_' + i], 0, '.', ','));
                    $('#summary_sp_' + i).html(number_format(row['total_sp_' + i], 0, '.', ','));
                    $('#summary_p_' + i).html(number_format(row['total_p_' + i], 0, '.', ','));
                    $('#summary_cq_' + i).html(number_format(row['total_cq_' + i], 0, '.', ','));

                    $('#summary_soq_' + i).html(row['cur'] + number_format(row['total_soq_' + i], 0, '.', ','));
                    $('#summary_ssp_' + i).html(row['cur'] + number_format(row['total_ssp_' + i], 0, '.', ','));
                    $('#summary_scp_' + i).html(row['cur'] + number_format(row['total_scp_' + i], 0, '.', ','));
                    $('#summary_scq_' + i).html(row['cur'] + number_format(row['total_scq_' + i], 0, '.', ','));

                    $('#summary_spp_' + i).html(row['cur'] + number_format(row['total_spp_' + i], 0, '.', ','));
                    $('#summary_pp_' + i).html(row['cur'] + number_format(row['total_pp_' + i], 0, '.', ','));
                    $('#summary_pg_' + i).html(row['cur'] + number_format(row['total_pg_' + i], 0, '.', ','));
                }

                $('#average_whosale_price').html(row['cur'] + number_format(row['average_whosale_price'], 2, '.', ','));
                $('#average_unit_cost').html(row['cur'] + number_format(row['average_unit_cost'], 2, '.', ','));
                $('#average_gross_cost').html(row['cur'] + number_format(row['average_gross_cost'], 2, '.', ','));
                $('#percentage_on_cost').html(number_format(row['percentage_on_cost'], 2, '.', ',') + '%');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error fetching data');
            }
        })

    }

    function selectPanel(index) {


        if (index == 0) {
            $(wizard_1).find("#btnPrev").fadeOut();
        } else {
            $(wizard_1).find("#btnPrev").fadeIn();
        }

        if (index == $(".wizard_1Progress div").length - 1) {
            $(wizard_1).find("#btnNext").fadeOut();
        } else {
            $(wizard_1).find("#btnNext").fadeIn();
        }

        $(".wizard_1Progress .selected").removeClass("selected");
        var selectedTab = $(".wizard_1Progress div").get(index);
        $(selectedTab).addClass("selected");

        $(".wizard_1Panel").slideUp();
        var selectedPanel = $(wizard_1).find(".wizard_1Panel").get(index);
        $(selectedPanel).slideDown();
    }


});
$(document).ready(function () { });

// Import and local product radio button
$('input[type=radio][name=revenue]').change(function () {
    if (this.value == 'local') {
        $("#collapseExample_ser_2").hide();
        $("#localInput").show();
        $("#importInput").hide();
        $("#Step4").html("Bill of Materials");
    } else if (this.value == 'import') {
        $("#collapseExample_ser_2").show();
        $("#localInput").hide();
        $("#importInput").show();
        //Ex rate By default set to 0 added by raza 8 march 2020
        $('#getCurrentChangeRate').prop('selectedIndex', 0);
        $("#Step4").html("Import Costs");


    }
});


// counting import cost    Added By Raza 27 feb 2020
function countCost(i) {
    // Add Symbol And Currency On Change

    $('input[type="text"]').focus(function () {
        var focusvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if ($(this).hasClass('currencySign')) {
            $(this).val(focusvalue);
        } else if ($(this).hasClass('percentSign')) {
            $(this).val(focusvalue);
        } else if ($(this).hasClass('numberSign')) {
            $(this).val(focusvalue);
        } else {

        }
    });
    $('input[type="text"]').focusout(function () {
        var focusoutvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if ($(this).hasClass('currencySign')) {
            $(this).val(cur + '' + number_format(focusoutvalue, 0, '.', ','));
        } else if ($(this).hasClass('percentSign')) {
            $(this).val(focusoutvalue + '%');
        } else if ($(this).hasClass('numberSign')) {
            $(this).val(number_format(focusoutvalue, 0, '.', ','));
        } else {

        }

    });

    var total_mts = 0;
    var total_cost = 0;
    var total_all = 0;
    var landed_cost = 0;

    if (i > counter) {
        counter++;
    }
    if ($('#percentage_cost_' + i).val().replace(/\$|\€|\£/g, '') == "") {
        $('#percentage_cost_' + i).val(0);
    }

    total_mts = (($('#landed_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) * parseFloat($('#percentage_cost_' + i).val().replace(/\$|\€|\£/g, '')).toFixed(2)) / 100;
    if (total_mts == 0) {
        $('#total_cost_' + i).val(total_mts);
    } else {
        $('#total_cost_' + i).val(cur + '' + number_format(total_mts, 2, '.', ','));
    }

    //total_cost = parseFloat($('#total_cost_' + j).val()).toFixed(2) * 1;

    for (j = 0; j <= counter; j++) {

        total_cost += parseFloat($('#total_cost_' + j).val().replace(/\$|\€|\£/g, '')).toFixed(2) * 1;
    }

    landed_cost = parseFloat($('#landed_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')).toFixed(2) * 1;
    total_all = total_cost;
    $('#bom_cost').val(number_format(total_all, 2, '.', ','));
    products_cost = total_all + landed_cost;

    $('#products_cost').val(number_format(parseFloat(products_cost), 2, '.', ','));

    if (total_all == 0) {
        $('.SumVat').html(0);
    } else {
        $('.SumVat').html(cur + '' + number_format(total_all, 2, '.', ','));
    }
}
// function countCost(i, j) {
// var total_mts = 0;
// var total_all = 0;
// var port_service_fee_cal = 0;
// var transport_fues_fee_cal = 0;
// var insurance_fee_cal = 0;
// var misc_fee_cal = 0;
// var other_fee_1_cal = 0;
// var other_fee_2_cal = 0;
// var other_fee_3_cal = 0;
// var landed_cost = 0;

// if ($(i).val() == "") {

// $(i).val(0);

// }

// total_mts = (($('#landed_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')) * parseFloat($(i).val()).toFixed(2))/100;

// if (total_mts == 0) {
// $(j).val(total_mts);
// } else {
// $(j).val(number_format(total_mts, 2, '.', ','))
// }

// port_service_fee_cal = parseFloat($('#port_service_fee_cal').val()).toFixed(2) * 1;
// transport_fues_fee_cal = parseFloat($('#transport_fues_fee_cal').val()).toFixed(2) * 1;
// insurance_fee_cal = parseFloat($('#insurance_fee_cal').val()).toFixed(2) * 1;
// misc_fee_cal = parseFloat($('#misc_fee_cal').val()).toFixed(2) * 1;
// other_fee_1_cal = parseFloat($('#other_fee_1_cal').val()).toFixed(2) * 1;
// other_fee_2_cal = parseFloat($('#other_fee_2_cal').val()).toFixed(2) * 1;
// other_fee_3_cal = parseFloat($('#other_fee_3_cal').val()).toFixed(2) * 1;
// landed_cost = parseFloat($('#landed_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '').replace(/\$|\€|\£/g, '')).toFixed(2) * 1;

// total_all = port_service_fee_cal + transport_fues_fee_cal + insurance_fee_cal + misc_fee_cal + other_fee_1_cal + other_fee_2_cal + other_fee_3_cal;

// $('#bom_cost').val(number_format(total_all, 2, '.', ','));
// products_cost = total_all + landed_cost;

// $('#products_cost').val(products_cost);

// if (total_all == 0) {
// $('.SumVat').html(0)
// } else {
// $('.SumVat').html(number_format(total_all, 2, '.', ','))
// }

// }

// if landed cost change recalculate each cost
$('#importedexchange_range').change(function () { // alert("change");
    var c1;
    for (c1 = 0; c1 <= counter; c1++) {
        countCost(c1);
    }

    // countCost('#port_service_fee', '#port_service_fee_cal');
    // countCost('#transport_fues_fee', '#transport_fues_fee_cal');
    // countCost('#insurance_fee', '#insurance_fee_cal');
    // countCost('#misc_fee', '#misc_fee_cal');
    // countCost('#other_fee_1', '#other_fee_1_cal');
    // countCost('#other_fee_2', '#other_fee_2_cal');
    // countCost('#other_fee_3', '#other_fee_3_cal');
})
$('#myModal2').on('hidden.bs.modal', function () {
    $("a[href='#locaprodsteps1-1']").trigger('click');
})

$('#exchangeRateList').on('hidden.bs.modal', function () {
    $("#exchangeRateList").modal('hide');
    $("#myModal2").modal('show');
})

setTimeout(function () {
    $('#modal-default').modal('show');
}, 2000)

setTimeout(function () {
    $('#modal-default').modal('hide');
}, 40000);


