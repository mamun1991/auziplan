//if ($.cookie('modal-imported_products') != 'loaded') {
//    $.cookie('modal-imported_products', 'loaded');
//    // code to show modal
//    setTimeout(function () {
//        $('#modal-imported_products').modal('show');
//    }, 2000)
//}

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
    })
});

function getRate() {
    var rangeRate = $("#getCurrentChangeRate").val();
    $("#importedexchange_range").val(rangeRate);
    var imported_unit_cost = $("#imported_unit_cost").val();
    if (imported_unit_cost == '') {
        $("#landed_cost").val(0);
    } else {
        var countCost = rangeRate * imported_unit_cost;
        $("#landed_cost").val(number_format(countCost, 2, '.', ','));
    }
    $("#exchangeRateList").modal('hide');
    $("#myModal2").modal('show');
    $("#importedexchange_range").addClass('used');

}
$("#imported_unit_cost").change(function () {
    var rangeRate = $("#importedexchange_range").val();
    var imported_unit_cost = $("#imported_unit_cost").val();
    if (imported_unit_cost == '') {
        $("#landed_cost").val(0);
    } else {
        var countCost = rangeRate * imported_unit_cost;
        $("#landed_cost").val(number_format(countCost, 2, '.', ','));
    }

    TableCalculation();
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

/*===This is for the Monthly Sales  confirmation ======*/
function confirmation() {

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

        $('.manual').addClass('active');
        $('.year').removeClass('active');

        $('#monthlytable_qty').val("0");
        $('[name="imported_unit_cost"]').val("0")
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
Ï
    });
}

function cancel_product() {
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









































function open_gallery(id) {

    var html = '';

    html += '<div id="myCarousel" class="carousel slide" data-ride="carousel">'
        + '<ol class="carousel-indicators"></ol>'
        + '<div class="carousel-inner" role="listbox">'
        + '</div>'
        + '<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">'
        + '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'
        + '<span class="sr-only">Previous</span>'
        + '</a>'
        + '<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">'
        + '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'
        + '<span class="sr-only">Next</span>'
        + '</a>'
        + '<div/>';

    $('#lblGalleryLblMessage').append(html);

    $('#ModalGallery').modal('show');

    $('#ModalGallery').on('hidden.bs.modal', function () {

        $('#myCarousel').remove();
    })

    $.ajax({
        url: site_url + 'ImportedProducts/ajax-get_image/' + id,
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            //$(data.data).each(function (key, val) {

            for (i = 0; i < data.length; i++) {

                $('<li data-target="#myCarousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators');
                $('<div class="item"><img src="' + site_url + data[i]["ThumbNail"] + '" alt="Product id #' + data[i]["id"] + '"><div class="carousel-caption"><h3>Product ID #' + data[i]["id"] + '</h3><p>' + data[i]["Description"] + '</p></div></div>').appendTo('.carousel-inner');

            }
            ;

            $('#myCarousel .carousel-indicators > li').first().addClass('active');
            $('#myCarousel .item').first().addClass('active');

            $('#myCarousel').carousel({
                interval: 3500,
            });

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });

}

function delete_confirmation(id) {
    /*if (confirm("Do you want insert Bill of Materials ??") == true) {

     $('.nav a[href="#add_menu1"]').tab('show');
     }else{

     $('#markup_on_cost').focus();
     }*/
    $('#modalConfirmYesNo').modal('show');

    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this product ??");

    $("#btnYesConfirmYesNo").off('click').click(function () {

        delete_importedproduct(id)

        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {


        $('#modalConfirmYesNo').modal('hide');
    });


}





function confirmationImport() {

    $('#modalConfirmYesNo').modal('show');

    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Do you wish to enter import costs ??");

    $("#btnYesConfirmYesNo").off('click').click(function () {


        $('.nav a[href="#form2"]').tab('show');

        $('#sp_1').focus();

        $('#modalConfirmYesNo').modal('hide');

    });

    $("#btnNoConfirmYesNo").off('click').click(function () {

        $('#imported_markup_on_cost').focus();

        $('#form2').each(function () {
            $(this).find('input').each(function () {
                $(this).val(0);
            });

        });
        $('#form3').each(function () {
            $(this).find('input').each(function () {
                $(this).val(0);
            });

        });

        $('#modalConfirmYesNo').modal('hide');

    });

    importCostCalculation();

}

function importCostCalculation() {

    var landed_cost = 0;
    var unit_cost = 0;
    var ex_rate = 0;
    var import_cost = 0;

    ex_rate = parseFloat($('#importedexchange_range').val());

    unit_cost = parseFloat($('#imported_unit_cost').val());

    import_cost = parseFloat($('#import_cost').val());

    landed_cost = ex_rate * unit_cost;

    total_unit_cost = import_cost + landed_cost;

    $('#landed_cost').val(number_format(landed_cost, 2, '.', ','));

    $('#tot_unit_cost').val(number_format(total_unit_cost, 2, ',', '.'));

}

function calculationImportCost(field) {

    var total = 0;

    total = (parseFloat($('[name="' + field + '"]').val()) / 100) * parseFloat($('#landed_cost').val().replace(/,/g, ''))


    if (total == 0) {
        $('[name="' + field + '_cal"]').val(total);
    } else {
        $('[name="' + field + '_cal"]').val(total.toFixed(2));
    }


    calculationTotalImportCostI();

}

function calculationTotalImportCostI() {

    $('#form2').each(function () {
        var subtotal_1 = 0;
        $(this).find('input[name*="_cal"]').not('input[name*="sub_total_1"]').each(function () {
            subtotal_1 += parseFloat($(this).val());
        });

        if (subtotal_1 == 0) {
            $('#sub_total_1').val(subtotal_1);
        } else {
            $('#sub_total_1').val(subtotal_1.toFixed(2));
        }

    });

    total_unit_cost = parseFloat($('[name="import_cost"]').val().replace(/,/g, '')) + parseFloat($('#landed_cost').val().replace(/,/g, ''))

    $('[name="tot_unit_cost"]').val(number_format(total_unit_cost, 2, '.', ','));


}
function calculationImportCostII(field) {

    var total = 0;

    total = parseFloat($('[name="' + field + '"]').val()) / 100 * parseFloat($('#landed_cost').val())

    if (total == 0) {
        $('[name="' + field + '_cal"]').val(total);
    } else {
        $('[name="' + field + '_cal"]').val(total.toFixed(2));
    }

    calculationTotalImportCostII();

}

function calculationTotalImportCostII() {

    $('#form3').each(function () {
        var subtotal_2 = 0;
        var total = 0;

        $(this).find('input[name*="_cal"]').not('input[name*="sub_total_2"]').each(function () {
            subtotal_2 += parseFloat($(this).val());
        });

        if (subtotal_2 == 0) {

            $('#sub_total_2').val(subtotal_2);

        } else {

            $('#sub_total_2').val(subtotal_2.toFixed(2));
        }

    });


    total = parseFloat($('#sub_total_1').val().replace(/,/g, '')) + parseFloat($('#sub_total_2').val().replace(/,/g, ''))
    if (total === 0) {

        $('[name="ave_total_unit_cost"]').val(total);

        $('[name="import_cost"]').val(total);
    } else {

        $('[name="ave_total_unit_cost"]').val(total.toFixed(2));

        $('[name="import_cost"]').val(total.toFixed(2));

    }
    total_unit_cost = parseFloat($('[name="import_cost"]').val().replace(/,/g, '')) + parseFloat($('#landed_cost').val().replace(/,/g, ''))

    $('[name="tot_unit_cost"]').val(number_format(total_unit_cost, 2, '.', ','));

}

$('#imported_markup_on_cost').on('change', function () {




    rrp_cost = (parseFloat(total_unit_cost) * parseFloat($('#imported_markup_on_cost').val()) / 100) + parseFloat(total_unit_cost);

    $('#rrp_cost').val(number_format(rrp_cost, 2, '.', ','))

    MarkUpOnCost = parseFloat($('#rrp_cost').val());

    TableCalculation();

    $('#modalConfirmYesNo').modal('hide');


})

$('#table_projected_sales').on('change', 'input', function () {
    TableCalculation();
});


$(function () {

    //$('#start_date').daterangepicker({singleDatePicker: true});
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
        if (target === '#importprodstep1-6') {
            $("#imported_markup_on_cost").trigger('focus').addClass('used');
        }
        if ((target == '#importproductstep2')) {

            table1.ajax.reload(null, false);

        }
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if ((target == '#importproductstep3')) {

            $.ajax({
                url: site_url + 'ImportedProducts/ajax-calculating_summary',
                type: "GET",
                dataType: "JSON",
                success: function (row) {
                    for (i = 1; i <= 15; i++) {

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
    })

    $('input:radio[name="option"]').change(function () {

        if ($(this).val() == 'manual') {

            if ($('#yearlytable_qty').val() == "") {

                alert("How many units do you plan to sell each year ?");

            } else {

                $('#weeklytable_qty').prop('readonly', true);
                $('#monthlytable_qty').prop('readonly', true);
                $('#yearlytable_qty').prop('readonly', true);

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
            $('#monthlytable_qty').attr('readonly', false);
            $('#monthlytable_qty').focus();
            $('#weeklytable_qty').prop('readonly', false);
            $('#monthlytable_qty').prop('readonly', false);
            $('#yearlytable_qty').prop('readonly', false);
        }
    });
    $('#monthlytable_qty').change(function () {

        if ($('#monthlytable_qty').val() == "") {

            $('#monthlytable_qty').focus();

        } else {

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

            /*$('#modal_dialog').modal('show')*/
            $('#sales_projection').find('td input').each(function () {
                $(this).val($('#monthlytable_qty').val());
            });
            $('#purchases').find('td input').each(function () {
                $(this).val($('#monthlytable_qty').val());
            });

            $('#imported_unit_cost').focus();

        }

    })

    $("#table_projected_sales").tableHeadFixer({ 'left': 1 });

    $("#table_stock_cost").tableHeadFixer({ 'left': 1 });

    $("#table_monthly_gross").tableHeadFixer({ 'left': 1 });

    $("#table_projected_sales_summary").tableHeadFixer({ 'left': 1 });

    $("#table_stock_cost_summary").tableHeadFixer({ 'left': 1 });

    $("#table_monthly_gross_summary").tableHeadFixer({ 'left': 1 });
});



function manualEntryMonthly() {

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

    $('.manual').addClass('active');
    $('.year').removeClass('active');

    $("sp_1").focus();

}

function automaticEntryMonthly() {

    $('.year').addClass('active');
    $('.manual').removeClass('active');

    $('#sales_projection').find('td input').each(function () {
        if ($(this).prop('readonly', false)) {
            $(this).prop('readonly', true);
        }
    })
    $('#purchases').find('td input').each(function () {
        if ($(this).prop('readonly', false)) {
            $(this).prop('readonly', true);
        }
    })

    if ($('#monthlytable_qty').val() == "") {

        alert("How many units do you plan to sell each month ?");

        $('#monthlytable_qty').focus();

    } else {

        $('#sales_projection').find('td input').each(function () {
            $(this).val($('#monthlytable_qty').val());
        });
        $('#purchases').find('td input').each(function () {
            $(this).val($('#monthlytable_qty').val());
        });

        $('#imported_unit_cost').focus();

        TableCalculation();
    }


}

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

    total_purchases = 0;
    toq = 0;
    tp = 0;
    tsp = 0;
    tproject = 0;

    $('#oq_13').html("0");
    $('#sp_13').html("0");
    $('#p_13').html("0");
    $('#cq_13').html("0");

    //$('#oq_1').val("0");
    $('#cq_1').html(number_format(Math.floor(parseInt($('#oq_1').val().replace(/,/g, '')) + parseInt($('#p_1').val().replace(/,/g, '')) - parseInt($('#sp_1').val().replace(/,/g, ''))), 0, '.', ','));

    $('#oq_2').html($('#cq_1').html());
    $('#cq_2').html(number_format(Math.floor(parseInt($('#oq_2').html().replace(/,/g, '')) + parseInt($('#p_2').val().replace(/,/g, '')) - parseInt($('#sp_2').val().replace(/,/g, ''))), 0, '.', ','));

    $('#oq_3').html($('#cq_2').html());
    $('#cq_3').html(number_format(Math.floor(parseInt($('#oq_3').html().replace(/,/g, '')) + parseInt($('#p_3').val().replace(/,/g, '')) - parseInt($('#sp_3').val().replace(/,/g, ''))), 0, '.', ','));

    $('#oq_4').html($('#cq_3').html());
    $('#cq_4').html(number_format(Math.floor(parseInt($('#oq_4').html().replace(/,/g, '')) + parseInt($('#p_4').val().replace(/,/g, '')) - parseInt($('#sp_4').val().replace(/,/g, ''))), 0, '.', ','));

    $('#oq_5').html($('#cq_4').html());
    $('#cq_5').html(number_format(Math.floor(parseInt($('#oq_5').html().replace(/,/g, '')) + parseInt($('#p_5').val().replace(/,/g, '')) - parseInt($('#sp_5').val().replace(/,/g, ''))), 0, '.', ','));

    $('#oq_6').html($('#cq_5').html());
    $('#cq_6').html(number_format(Math.floor(parseInt($('#oq_6').html().replace(/,/g, '')) + parseInt($('#p_6').val().replace(/,/g, '')) - parseInt($('#sp_6').val().replace(/,/g, ''))), 0, '.', ','));

    $('#oq_7').html($('#cq_6').html());
    $('#cq_7').html(number_format(Math.floor(parseInt($('#oq_7').html().replace(/,/g, '')) + parseInt($('#p_7').val().replace(/,/g, '')) - parseInt($('#sp_7').val().replace(/,/g, ''))), 0, '.', ','));

    $('#oq_8').html($('#cq_7').html());
    $('#cq_8').html(number_format(Math.floor(parseInt($('#oq_8').html().replace(/,/g, '')) + parseInt($('#p_8').val().replace(/,/g, '')) - parseInt($('#sp_8').val().replace(/,/g, ''))), 0, '.', ','));

    $('#oq_9').html($('#cq_8').html());
    $('#cq_9').html(number_format(Math.floor(parseInt($('#oq_9').html().replace(/,/g, '')) + parseInt($('#p_9').val().replace(/,/g, '')) - parseInt($('#sp_9').val().replace(/,/g, ''))), 0, '.', ','));

    $('#oq_10').html($('#cq_9').html());
    $('#cq_10').html(number_format(Math.floor(parseInt($('#oq_10').html().replace(/,/g, '')) + parseInt($('#p_10').val().replace(/,/g, '')) - parseInt($('#sp_10').val().replace(/,/g, ''))), 0, '.', ','));

    $('#oq_11').html($('#cq_10').html());
    $('#cq_11').html(number_format(Math.floor(parseInt($('#oq_11').html().replace(/,/g, '')) + parseInt($('#p_11').val().replace(/,/g, '')) - parseInt($('#sp_11').val().replace(/,/g, ''))), 0, '.', ','));

    $('#oq_12').html($('#cq_11').html());
    $('#cq_12').html(number_format(Math.floor(parseInt($('#oq_12').html().replace(/,/g, '')) + parseInt($('#p_12').val().replace(/,/g, '')) - parseInt($('#sp_12').val().replace(/,/g, ''))), 0, '.', ','));


    $('#purchases').find('td input').each(function () {

        total_purchases = total_purchases + parseInt(Math.floor($(this).val().replace(/,/g, '')))
    })

    toq = $('#oq_1').val().replace(/,/g, '');
    tp = total_purchases;

    $('#sales_projection').find('td input').each(function () {

        tsp += parseInt(Math.floor($(this).val().replace(/,/g, '')))
    })


    tproject = parseInt(toq) + parseInt(tp) - parseInt(tsp);

    $('#oq_13').html(number_format(toq, 0, '.', ','));
    $('#sp_13').html(number_format(tsp, 0, '.', ','));
    $('#p_13').html(number_format(tp, 0, '.', ','));
    $('#cq_13').html(number_format(tproject, 0, '.', ','));

    tableCalculationPrice()
}

function tableCalculationPrice() {

    total_purchasesprice = 0;
    total_sspprice = 0;
    tscp = 0;
    tssp = 0;
    tsoq = 0;
    total = 0;

    $('#soq_13').html("0");
    $('#scp_13').html("0");
    $('#ssp_13').html("0");
    $('#scq_13').html("0");

    for (sce = 1; sce <= 12; sce++) {

        $('#ssp_' + sce).html(cur + number_format($('#sp_' + sce).val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
        $('#scp_' + sce).html(cur + number_format($('#p_' + sce).val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
    }
    $('#soq_1').html(cur + number_format(parseInt($('#oq_1').val().replace(/,/g, '')) * parseFloat($('#imported_unit_cost').val().replace(/,/g, '')), 0, '.', ','));
    $('#scq_1').html(cur + number_format(parseInt($('#soq_1').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseInt($('#scp_1').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#ssp_1').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));

    $('#soq_2').html(cur + number_format(parseInt($('#scq_1').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));
    $('#scq_2').html(cur + number_format(parseInt($('#soq_2').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseInt($('#scp_2').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#ssp_2').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));

    $('#soq_3').html(cur + number_format(parseInt($('#scq_2').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));
    $('#scq_3').html(cur + number_format(parseInt($('#soq_3').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseInt($('#scp_3').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#ssp_3').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));

    $('#soq_4').html(cur + number_format(parseInt($('#scq_3').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));
    $('#scq_4').html(cur + number_format(parseInt($('#soq_4').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseInt($('#scp_4').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#ssp_4').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));

    $('#soq_5').html(cur + number_format(parseInt($('#scq_4').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));
    $('#scq_5').html(cur + number_format(parseInt($('#soq_5').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseInt($('#scp_5').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#ssp_5').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));

    $('#soq_6').html(cur + number_format(parseInt($('#scq_5').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));
    $('#scq_6').html(cur + number_format(parseInt($('#soq_6').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseInt($('#scp_6').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#ssp_6').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));

    $('#soq_7').html(cur + number_format(parseInt($('#scq_6').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));
    $('#scq_7').html(cur + number_format(parseInt($('#soq_7').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseInt($('#scp_7').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#ssp_7').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));

    $('#soq_8').html(cur + number_format(parseInt($('#scq_7').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));
    $('#scq_8').html(cur + number_format(parseInt($('#soq_8').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseInt($('#scp_8').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#ssp_8').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));

    $('#soq_9').html(cur + number_format(parseInt($('#scq_8').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));
    $('#scq_9').html(cur + number_format(parseInt($('#soq_9').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseInt($('#scp_9').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#ssp_9').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));

    $('#soq_10').html(cur + number_format(parseInt($('#scq_9').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));
    $('#scq_10').html(cur + number_format(parseInt($('#soq_10').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseInt($('#scp_10').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#ssp_10').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));

    $('#soq_11').html(cur + number_format(parseInt($('#scq_10').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));
    $('#scq_11').html(cur + number_format(parseInt($('#soq_11').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseInt($('#scp_11').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#ssp_11').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));

    $('#soq_12').html(cur + number_format(parseInt($('#scq_11').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));
    $('#scq_12').html(cur + number_format(parseInt($('#soq_12').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) + parseInt($('#scp_12').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#ssp_12').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')), 0, '.', ','));

    //calcuation is wrong ned to be fix.

    $('#purchasesprice').find('td').each(function () {
        if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))) {
            total_purchasesprice += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))
        }
    })
    $('#sales_projection_price').find('td').each(function () {
        if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))) {
            total_sspprice += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))
        }
    })

    tscp = total_purchasesprice;
    tssp = total_sspprice;
    tsoq = $('#soq_1').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '');

    $('#soq_13').html(cur + number_format(tsoq, 0, '.', ','));
    $('#scp_13').html(cur + number_format(tscp, 0, '.', ','));
    $('#ssp_13').html(cur + number_format(tssp, 0, '.', ','));

    total = parseInt(tscp) + parseInt(tsoq) - parseInt(tssp);

    $('#scq_13').html(cur + number_format(total, 0, '.', ','));


    tableCalculationprofit()
}

function tableCalculationprofit() {

    total_sales_profit = 0;
    total_purchases_profit = 0;
    tspp = 0;
    tpp = 0;
    tpg = 0;

    $('#spp_13').html("0");
    $('#pp_13').html("0");
    $('#pg_13').html("0");

    $('#spp_1').html(cur + number_format($('#sp_1').val().replace(/,/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_1').html(cur + number_format($('#sp_1').val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
    $('#pg_1').html(cur + number_format(parseInt($('#spp_1').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#pp_1').html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))), 0, '.', ',');

    $('#spp_2').html(cur + number_format($('#sp_2').val().replace(/,/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_2').html(cur + number_format($('#sp_2').val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
    $('#pg_2').html(cur + number_format(parseInt($('#spp_2').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#pp_2').html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))), 0, '.', ',');

    $('#spp_3').html(cur + number_format($('#sp_3').val().replace(/,/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_3').html(cur + number_format($('#sp_3').val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
    $('#pg_3').html(cur + number_format(parseInt($('#spp_3').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#pp_3').html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))), 0, '.', ',');

    $('#spp_4').html(cur + number_format($('#sp_4').val().replace(/,/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_4').html(cur + number_format($('#sp_4').val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
    $('#pg_4').html(cur + number_format(parseInt($('#spp_4').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#pp_4').html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))), 0, '.', ',');

    $('#spp_5').html(cur + number_format($('#sp_5').val().replace(/,/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_5').html(cur + number_format($('#sp_5').val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
    $('#pg_5').html(cur + number_format(parseInt($('#spp_5').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#pp_5').html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))), 0, '.', ',');

    $('#spp_6').html(cur + number_format($('#sp_6').val().replace(/,/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_6').html(cur + number_format($('#sp_6').val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
    $('#pg_6').html(cur + number_format(parseInt($('#spp_6').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#pp_6').html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))), 0, '.', ',');

    $('#spp_7').html(cur + number_format($('#sp_7').val().replace(/,/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_7').html(cur + number_format($('#sp_7').val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
    $('#pg_7').html(cur + number_format(parseInt($('#spp_7').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#pp_7').html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))), 0, '.', ',');

    $('#spp_8').html(cur + number_format($('#sp_8').val().replace(/,/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_8').html(cur + number_format($('#sp_8').val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
    $('#pg_8').html(cur + number_format(parseInt($('#spp_8').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#pp_8').html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))), 0, '.', ',');

    $('#spp_9').html(cur + number_format($('#sp_9').val().replace(/,/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_9').html(cur + number_format($('#sp_9').val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
    $('#pg_9').html(cur + number_format(parseInt($('#spp_9').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#pp_9').html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))), 0, '.', ',');

    $('#spp_10').html(cur + number_format($('#sp_10').val().replace(/,/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_10').html(cur + number_format($('#sp_10').val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
    $('#pg_10').html(cur + number_format(parseInt($('#spp_10').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#pp_10').html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))), 0, '.', ',');

    $('#spp_11').html(cur + number_format($('#sp_11').val().replace(/,/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_11').html(cur + number_format($('#sp_11').val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
    $('#pg_11').html(cur + number_format(parseInt($('#spp_11').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#pp_11').html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))), 0, '.', ',');

    $('#spp_12').html(cur + number_format($('#sp_12').val().replace(/,/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_12').html(cur + number_format($('#sp_12').val().replace(/,/g, '') * total_unit_cost), 0, '.', ',');
    $('#pg_12').html(cur + number_format(parseInt($('#spp_12').html().replace(/,/g, '').replace(/\$|\€|\₹/g, '')) - parseInt($('#pp_12').html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))), 0, '.', ',');

    //matematic still not right-- need to fix it
    $('#table_monthly_gross').find('tbody tr:not(#sales_projection_profit, #grossprofit) td').each(function () {

        if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))) {


            total_purchases_profit += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''));
        }


    })
    $('#table_monthly_gross').find('tbody tr:not(#purchasesprofit, #grossprofit) td').each(function () {
        if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))) {
            total_sales_profit += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\₹/g, ''))
        }
    })

    tspp = total_sales_profit;
    tpp = total_purchases_profit;

    tpg = parseInt(total_sales_profit) - parseInt(total_purchases_profit)

    $('#spp_13').html(cur + number_format(tspp, 0, '.', ','));
    $('#pp_13').html(cur + number_format(tpp, 0, '.', ','));
    $('#pg_13').html(cur + number_format(tpg, 0, '.', ','));
}

function add_importedproduct() {
    // var isVisible = document.getElementById("product_form").style.display == "block";
    // if (isVisible)
    //     $("#product_form").hide();
    // else
    //     $("#product_form").show();
    $("#myModal2").modal('show');
    $("label.error").remove();
    save_method = 'add';
    //$('#importform')[0].reset(); // reset form on modals
    clearForm();
    $('.form-group').removeClass('has-error'); // clear error class
    $('.help-block').empty(); // clear error string
    $('#impmodal_form').modal('show'); // show bootstrap modal

    $('#impmodal_form').on('shown.bs.modal', function () {
        $('.nav a[href="#add_menu0"]').tab('show');
    })
    $('.modal-title').text('Add Imported Product'); // Set Title to Bootstrap modal title


    $('#weeklytable_qty').prop('readonly', false)
    $('#monthlytable_qty').prop('readonly', false)
    $('#yearlytable_qty').prop('readonly', false)

    $('.year').addClass('active');
    $('.manual').removeClass('active');

    $('#purchases').find('td input').each(function () {
        $(this).prop('readonly', true);
    })
    $('#sales_projection').find('td input').each(function () {
        $(this).prop('readonly', true);
    });
        
    $("#monthlytable_qty").addClass('used');    
    
    $("#importedflnFile").fileinput('refresh', {
        overwriteInitial: true,
        maxFileSize: 500,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        browseIcon: '<i class="fa fa-folder-open"></i>',
        removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
        removeTitle: 'Cancel or reset changes',
        elErrorContainer: '#kv-avatar-errors-1',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img id="imgfile" class="img-circle" src="' + site_url + 'assets/img/avatars/avatar.png" alt="Product Picture" style="width:180px;height:180px;">',
        layoutTemplates: { main2: '{preview}  {remove} {browse} ' },
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
}

function edit_importedproduct(id) {
    
    $("label.error").remove();
    save_method = 'update';
    //$('#importform')[0].reset(); // reset form on modals
    clearForm();
    $('.form-group').removeClass('has-error'); // clear error class
    $('.help-block').empty(); // clear error string

    $('.year').addClass('active');
    $('.manual').removeClass('active');

    //$('#weeklytable_qty').prop('readonly', false)
    $('#monthlytable_qty').prop('readonly', false)
    //$('#yearlytable_qty').prop('readonly', false)

    $('#purchases').find('td input').each(function () {

        $(this).prop('readonly', true);


    })
    $('#sales_projection').find('td input').each(function () {

        $(this).prop('readonly', true);

    });

    //Ajax Load data from ajax
    $.ajax({
        url: site_url + 'ImportedProducts/ajax-editimported/' + id,
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            $('[name="status"]').val("update");
            //Nuri Added This Code
            //$('[name="importedflnFile"]').val(data.ThumbNail);
            $('[name="id"]').val(data.id);
            $('[name="importedproduct_description"]').val(data.Description);
            //$('[name="ImportQuantity"]').val(data.Qty);
            $('[name="imported_unit_cost"]').val(data.UnitCost);
            $('[name="importedexchange_range"]').val(data.ExchangeRate);

            $('[name="imported_markup_on_cost"]').val(data.MarkUpOnCost);
            $('[name="oq_1"]').val(number_format(data.oq_1, 0, '.', ','));
            $('[name="sp_1"]').val(number_format(data.sp_1, 0, '.', ','));
            $('[name="sp_2"]').val(number_format(data.sp_2, 0, '.', ','));
            $('[name="sp_3"]').val(number_format(data.sp_3, 0, '.', ','));
            $('[name="sp_4"]').val(number_format(data.sp_4, 0, '.', ','));
            $('[name="sp_5"]').val(number_format(data.sp_5, 0, '.', ','));
            $('[name="sp_6"]').val(number_format(data.sp_6, 0, '.', ','));
            $('[name="sp_7"]').val(number_format(data.sp_7, 0, '.', ','));
            $('[name="sp_8"]').val(number_format(data.sp_8, 0, '.', ','));
            $('[name="sp_9"]').val(number_format(data.sp_9, 0, '.', ','));
            $('[name="sp_10"]').val(number_format(data.sp_10, 0, '.', ','));
            $('[name="sp_11"]').val(number_format(data.sp_11, 0, '.', ','));
            $('[name="sp_12"]').val(number_format(data.sp_12, 0, '.', ','));
            $('[name="p_1"]').val(number_format(data.p_1, 0, '.', ','));
            $('[name="p_2"]').val(number_format(data.p_2, 0, '.', ','));
            $('[name="p_3"]').val(number_format(data.p_3, 0, '.', ','));
            $('[name="p_4"]').val(number_format(data.p_4, 0, '.', ','));
            $('[name="p_5"]').val(number_format(data.p_5, 0, '.', ','));
            $('[name="p_6"]').val(number_format(data.p_6, 0, '.', ','));
            $('[name="p_7"]').val(number_format(data.p_7, 0, '.', ','));
            $('[name="p_8"]').val(number_format(data.p_8, 0, '.', ','));
            $('[name="p_9"]').val(number_format(data.p_9, 0, '.', ','));
            $('[name="p_10"]').val(number_format(data.p_10, 0, '.', ','));
            $('[name="p_11"]').val(number_format(data.p_11, 0, '.', ','));
            $('[name="p_12"]').val(number_format(data.p_12, 0, '.', ','));

            $('[name="monthlytable_qty"]').val(data.monthly_qty);

            $('[name="import_duty"]').val(data.import_duty);
            $('[name="comp_fee"]').val(data.comp_fee);
            $('[name="cargo_auto"]').val(data.cargo_auto);
            $('[name="custom_clearance_fee"]').val(data.custom_clearance_fee);
            $('[name="aqis_fee"]').val(data.aqis_fee);
            $('[name="dec_processing_fee"]').val(data.dec_processing_fee);
            $('[name="delivery_order"]').val(data.delivery_order);
            $('[name="lcl_transport_fee"]').val(data.lcl_transport_fee);
            $('[name="port_service_fee"]').val(data.port_service_fee);
            $('[name="transport_fues_fee"]').val(data.transport_fues_fee);
            $('[name="insurance_fee"]').val(data.insurance_fee);
            $('[name="misc_fee"]').val(data.misc_fee);
            $('[name="other_fee_1"]').val(data.other_fee_1);
            $('[name="other_fee_2"]').val(data.other_fee_2);
            $('[name="other_fee_3"]').val(data.other_fee_3);

            // $('#impmodal_form').modal('show'); // show bootstrap modal when complete loaded

            // $('#impmodal_form').on('shown.bs.modal', function () {
            //     $('.nav a[href="#form1"]').tab('show');
            // })

            cur = data.cur;

            if (data.ThumbNail != "assets/images/no_image.png") {
                var btnReset = '<button type="button" class="btn btn-default" title="Restore default" ' +
                    'onclick="restoreDefault(' + data.id + ')">' +
                    '<i class="fa fa-trash"></i>' +
                    '</button>';
            } else {
                var btnReset = "";
            }

            $("#importedflnFile").fileinput('refresh', {
                overwriteInitial: true,
                maxFileSize: 500,
                showClose: false,
                showCaption: false,
                browseLabel: '',
                removeLabel: '',
                browseIcon: '<i class="fa fa-folder-open"></i>',
                removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
                removeTitle: 'Cancel or reset changes',
                elErrorContainer: '#kv-avatar-errors-1',
                msgErrorClass: 'alert alert-block alert-danger',
                defaultPreviewContent: '<img id="imgfile" class="img-circle" src="' + site_url + data.ThumbNail + '" alt="Product Picture" style="width:180px;height:180px;">',
                layoutTemplates: { main2: '{preview}  {remove} {browse} ' + btnReset },
                allowedFileExtensions: ["jpg", "png", "gif"]
            });

            //$('#stock_modal').modal('show'); // show bootstrap modal when complete loaded

            // $('#stock_modal').on('shown.bs.modal', function () {
            //     $('#collapse1').on('hidden.bs.collapse', function () {
            //         collapse('show')
            //     })
            //     $('#collapse2').on('shown.bs.collapse', function () {
            //         collapse('hide')
            //     })
            //     $('#collapse3').on('shown.bs.collapse', function () {
            //         collapse('hide')
            //     })
            // })

            $('.modal-title').text('Edit Imported Product'); // Set title to Bootstrap modal title

            ex_rate = parseFloat($('#importedexchange_range').val());

            unit_cost = parseFloat($('#imported_unit_cost').val());

            import_cost = parseFloat($('#import_cost').val());

            landed_cost = ex_rate * unit_cost;

            $('#landed_cost').val(number_format(landed_cost, 2, '.', ','));

            $('#form2').each(function () {
                var subtotal_1 = 0;

                var total = 0;

                $(this).find('input').not('input[name*="sub_total_1"]').not('input[name*="_cal"]').each(function () {

                    total = (parseFloat($(this).val()) / 100) * $('#landed_cost').val().replace(/,/g, '');

                    if (total == 0) {
                        $('[name="' + $(this).attr('name') + '_cal"]').val(total);
                    } else {
                        $('[name="' + $(this).attr('name') + '_cal"]').val(total.toFixed(2));
                    }

                });

                $(this).find('input[name*="_cal"]').not('input[name*="sub_total_1"]').each(function () {

                    subtotal_1 += parseFloat($(this).val().replace(/,/g, ''));

                })

                if (subtotal_1 == 0) {
                    $('#sub_total_1').val(subtotal_1);
                } else {

                    $('#sub_total_1').val(subtotal_1.toFixed(2));
                }

            });

            $('#form3').each(function () {

                var subtotal_2 = 0;

                var total = 0;

                $(this).find('input').not('input[name*="sub_total_2"]').not('input[name*="_cal"]').each(function () {

                    total = (parseFloat($(this).val()) / 100) * $('#landed_cost').val().replace(/,/g, '');

                    if (total == 0) {
                        $('[name="' + $(this).attr('name') + '_cal"]').val(total);
                    } else {
                        $('[name="' + $(this).attr('name') + '_cal"]').val(total.toFixed(2));
                    }

                });

                $(this).find('input[name*="_cal"]').not('input[name*="sub_total_1"]').each(function () {

                    subtotal_2 += parseFloat($(this).val().replace(/,/g, ''));

                })

                if (subtotal_2 == 0) {
                    $('#sub_total_2').val(subtotal_2);
                } else {

                    $('#sub_total_2').val(subtotal_2.toFixed(2));
                }

            })

            total = parseFloat($('#sub_total_1').val().replace(/,/g, '')) + parseFloat($('#sub_total_2').val().replace(/,/g, ''));

            if (total == 0) {

                $('[name="ave_total_unit_cost"]').val(total);

                $('[name="import_cost"]').val(total);
            } else {

                $('[name="ave_total_unit_cost"]').val(number_format(total, 2, '.', ','));

                $('[name="import_cost"]').val(number_format(total, 2, '.', ','));

            }
            total_unit_cost = parseFloat($('[name="import_cost"]').val().replace(/,/g, '')) + parseFloat($('#landed_cost').val().replace(/,/g, ''))

            $('[name="tot_unit_cost"]').val(number_format(total_unit_cost, 2, '.', ','));

            rrp_cost = total_unit_cost * $('#imported_markup_on_cost').val() / 100 + total_unit_cost;

            $('#rrp_cost').val(number_format(rrp_cost, 2, '.', ','))

            MarkUpOnCost = parseFloat($('#rrp_cost').val());

            TableCalculation();
            $('input').each(function () {
                var $this = $(this);
                if ($this.val())
                    $this.addClass('used');
                else
                    $this.removeClass('used');
            })
            // $("#product_form").show();
            // $('html, body').animate({
            //     scrollTop: $("#importproductstep1").offset().top
            // }, 300);
            $("#myModal2").modal('show');
            $('#import_tab1').click();

        },
        error: function (jqXHR, textStatus, errorThrown) {

            alert(errorThrown);
        }
    });
}

function clearForm() {

    total_unit_cost = 0;
    MarkUpOnCost = 0;
    ExchangeRate = 0;
    subtotal_1 = 0;
    sub_total_2 = 0;
    save_method == 'add';
    $('[name="status"]').val("");
    $('[name="id"]').val("");
    $('[name="importedproduct_description"]').val("");
    //$('[name="importedexchange_range"]').val("");
    $('[name="imported_unit_cost"]').val("");
    $('[name="imported_markup_on_cost"]').val("");
    //$('[name="weeklytable_qty"]').val("");
    $('[name="monthlytable_qty"]').val("0");
    $('[name="imported_unit_cost"]').val("0");
    //$('[name="yearlytable_qty"]').val("");
    $('[name="rrp_cost"]').val("0")
    $('[name="import_cost"]').val("0")
    $('[name="landed_cost"]').val("0")
    $('[name="tot_unit_cost"]').val("0")


    $('#form2').each(function () {
        $(this).find('input').each(function () {
            $(this).val("");
        });
        $(this).find('input[name*="_cal"]').each(function () {
            $(this).val("0");
        });

        $('[name="sub_total_1"]').val("0")
    });

    $('#form3').each(function () {
        $(this).find('input').each(function () {
            $(this).val("");
        });
        $(this).find('input[name*="_cal"]').each(function () {
            $(this).val("0");
        });
        $('[name="sub_total_2"]').val("0")
        $('[name="ave_total_unit_cost"]').val("0")
    });

    $('#importedflnFile').val("");
    $('#imgfile').attr("src", site_url + "assets/images/no_image.png");
    btnReset = ""

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

    $("#importedflnFile").fileinput('refresh', {
        overwriteInitial: true,
        maxFileSize: 500,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        browseIcon: '<i class="fa fa-folder-open"></i>',
        removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
        removeTitle: 'Cancel or reset changes',
        elErrorContainer: '#kv-avatar-errors-1',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img id="imgfile" class="img-circle" src="' + site_url + 'assets/img/no_image.png" alt="Product Picture" style="width:180px;height:180px;">',
        layoutTemplates: { main2: '{preview}  {remove} {browse} ' },
        allowedFileExtensions: ["jpg", "png", "gif"]
    });

    $('#iprod_step1').trigger('click');

}
function restoreDefault(id) {
    $.ajax({
        type: 'POST',
        url: 'ImportedProducts/restoreDefault/' + id,
        success: function () {
            edit_importedproduct(id);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            showResultFailed(jqXHR.responseText);
            hideWaitingFail();
        }
    })
}

// register jQuery extension
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
        if (index >= $canfocus.length)
            index = 0;
        $canfocus.eq(index).focus();
    }
});





function saveimported() {

    $('#btnSaveImport').val('saving...'); //change button text
    $('#btnSaveImport').attr('disabled', true); //set button disable

    var url;

    if ($('[name="status"]').val() == "update") {
        url = site_url + 'ImportedProducts/ajax-updateimported';
    } else {
        url = site_url + 'ImportedProducts/ajax-addimported';
    }

    if ($('#importedflnFile').val() == "" && $('#imgfile').attr('src') == site_url + "assets/img/no_image.png") {
        $('#modalConfirmYesNo').zIndex(9999);
        $('#modalConfirmYesNo').modal('show');

        $("#lblTitleConfirmYesNo").html("User Confirmation");
        $("#lblMsgConfirmYesNo").html("<div class='col-sm-3'>"
            + "<img id='imgfile' class='img-circle' src='" + site_url + "assets/img/no_image.png' alt='Product Picture' style='width:75px;'>"
            + "</div>"
            + "<div class='col-sm-9'>"
            + "If you want to add image <strong>Click on folder icon <i class='fa fa-folder-o'></i>, then select an image <i class='fa fa-file-image-o'></i>.</strong><br/>Do you want to add image now ??"
            + "</div>");

        $("#btnNoConfirmYesNo").off('click').click(function () {
            // ajax adding data to database
            $.ajax({
                url: url,
                type: "POST",
                data: new FormData($('#importform')[0]),
                contentType: false,
                cache: false,
                processData: false,
                success: function (data) {
                    var obj = jQuery.parseJSON(data);

                    //$('#impmodal_form').modal('hide');
                    if (obj['status']) //if success close modal and reload ajax table
                    {

                        if (save_method == 'add') {
                            var msg = "Imported Product added successfully, <br/> Do you want to add another ???"
                        } else {
                            var msg = "Imported Product edited successfully !!! <br/> Do you want to add Product ???"
                        }

                        $('#myModal2').modal('hide');
                        $('#modalConfirmYesNo').modal('show');

                        $("#lblTitleConfirmYesNo").html("");
                        $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                            + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                            + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                            + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                            + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                            + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                            + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                            + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                            + "</svg>"
                            + "</div>"
                            + "<p class='alert-box'>" + msg + "</p>");

                        $("#btnYesConfirmYesNo").off('click').click(function () {

                            clearForm();
                            drawCollectionView();
                            $('#modalConfirmYesNo').modal('hide');
                            $('#import_tab1').trigger('click');
                            $('#myModal2').modal('show');
                        });

                        $("#btnNoConfirmYesNo").off('click').click(function () {
                            clearForm();
                            $('#impmodal_form').modal('hide');
                            drawCollectionView()
                            $('#modalConfirmYesNo').modal('hide');
                        });

                    }

                    $('#btnSaveImport').val('save'); //change button text
                    $('#btnSaveImport').attr('disabled', false); //set button enable
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Error adding / update data');
                    $('#btnSaveImport').val('save'); //change button text
                    $('#btnSaveImport').attr('disabled', false); //set button enable
                }
            });

            //$('#modalConfirmYesNo').modal('hide');
        });

        $("#btnYesConfirmYesNo").off('click').click(function () {

            $('.nav a[href="#form1"]').tab('show');

            $('#importedflnFile').trigger('click');

            $('#btnSaveImport').val('save'); //change button text
            $('#btnSaveImport').attr('disabled', false); //set button enable
            $('#modalConfirmYesNo').modal('hide');
            //$("#product_form").show();
        });
    } else {

        $.ajax({
            url: url,
            type: "POST",
            data: new FormData($('#importform')[0]),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                var obj = jQuery.parseJSON(data);

                if (obj['status']) //if success close modal and reload ajax table
                {
                    if (save_method == 'add') {
                        var msg = "Imported Product added successfully, <br/> Do you want to add another ???"
                    } else {
                        var msg = "Imported Product edited successfully !!! <br/> Do you want to add Product ???"
                    }
                    $('#myModal2').modal('hide');

                    $('#modalConfirmYesNo').modal('show');

                    $("#lblTitleConfirmYesNo").html("");
                    $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                        + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                        + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                        + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                        + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                        + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                        + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                        + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                        + "</svg>"
                        + "</div>"
                        + "<p class='alert-box'>" + msg + "</p>");

                    $("#btnYesConfirmYesNo").off('click').click(function () {
                        clearForm();
                        selectPanel(0);
                        drawCollectionView();
                        $('#modalConfirmYesNo').modal('hide');
                        $('#myModal2').modal('show');
                        $('a[href="importprodstep1-1"').trigger(click);
                    });

                    $("#btnNoConfirmYesNo").off('click').click(function () {
                        clearForm();
                        drawCollectionView();
                        $('#modalConfirmYesNo').modal('hide');
                    });
                }

                $('#btnSaveImport').val('save'); //change button text
                $('#btnSaveImport').attr('disabled', false); //set button enable
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error adding / update data');
                $('#btnSaveImport').val('save'); //change button text
                $('#btnSaveImport').attr('disabled', false); //set button enable
            }
        });

    }
}



function save() {

    $('#btnSave').text('saving...'); //change button text
    $('#btnSave').attr('disabled', true); //set button disable
    var url;

    //alert(save_method);

    if (save_method == 'add') {
        url = site_url + 'Products/ajax-add';
    } else {
        url = site_url + 'Products/ajax-update';
    }
    // ajax adding data to database
    $.ajax({
        url: url,
        type: "POST",
        data: new FormData($('#form')[0]),
        contentType: false,
        async: false,
        cache: false,
        processData: false,
        success: function (data) {
            var obj = jQuery.parseJSON(data);

            if (obj['status']) //if success close modal and reload ajax table
            {
                $('#modal_form').modal('hide');
                drawCollectionView();
            }
            $('#btnSave').text('save'); //change button text
            $('#btnSave').attr('disabled', false); //set button enable
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error adding / update data');
            $('#btnSave').text('save'); //change button text
            $('#btnSave').attr('disabled', false); //set button enable
        }
    });
}


function cancel() {

    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure wanted to cancel this item?");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        clearForm();
        $("#product_form").hide();
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
    });
}

function loaddetail(id) {
    //Ajax Load data from ajax
    $.ajax({
        url: site_url + 'ImportedProducts/ajax-get_imported_product/' + id,
        type: "GET",
        dataType: "JSON",
        success: function (data) {

            var Total = data.monthly_qty * data.UnitCost;

            var TotalLandedCost = Total * data.ExchangeRate;


            //alert(data.Qty);
            $("#imgthumbnail").attr("src", site_url + data.ThumbNail);
            $("#impdesc").html(data.Description);
            $("#impSolQnt").html(data.monthly_qty);
            $("#impUC").html(cur + data.UnitCost);
            //$("#imptotal").html(data.Qty * data.UnitCost);

            $("#imptotal").html(Total.toFixed(2));

            $("#impExchangeRange").html(data.ExchangeRate);

            $TotalLandedCost = data.monthly_qty * data.UnitCost * data.ExchangeRate
            $("#impTotalLandedCost").html(TotalLandedCost.toFixed(2));


            //var ImportDuty=(TotalLandedCost*1)/100;
            // ImportDuty=round(ImportDuty,0);
            $("#impID").html((data.import_duty * TotalLandedCost).toFixed(2));

            //var DeliveryOrder=(TotalLandedCost*1)/100;
            $("#impDo").html((data.delivery_order * $TotalLandedCost).toFixed(2));

            //var impCmF=(TotalLandedCost*1)/100;
            $("#impCmF").html((data.cmr_comp_fee * $TotalLandedCost).toFixed(2));

            //var impLTF=(TotalLandedCost*1)/100;
            $("#impLTF").html((data.lcl_transport_fee * $TotalLandedCost).toFixed(2));

            //var impca=(TotalLandedCost*1)/100;
            $("#impca").html((data.cargo_auto_fee * $TotalLandedCost).toFixed(2));

            //var impps=(TotalLandedCost*1)/100;
            $("#impps").html((data.port_service_fee * $TotalLandedCost).toFixed(2));

            //var impcc=(TotalLandedCost*1)/100;
            $("#impcc").html((data.custom_clearance_fee * $TotalLandedCost).toFixed(2));

            //var imptp=(TotalLandedCost*1)/100;
            $("#imptp").html((data.transport_fues_fee * $TotalLandedCost).toFixed(2));

            //var impAFt=(TotalLandedCost*1)/100;
            $("#impAFt").html((data.aqis_fee * $TotalLandedCost).toFixed(2));

            //var impIf=(TotalLandedCost*1)/100;
            $("#impIf").html((data.insurance_fee * $TotalLandedCost).toFixed(2));

            //var impDp=(TotalLandedCost*1)/100;
            $("#impDp").html((data.dec_processing_fee * $TotalLandedCost).toFixed(2));

            //var impMf=(TotalLandedCost*1)/100;
            $("#impMf").html((data.misc_fee * $TotalLandedCost).toFixed(2));

            //var impo1=(TotalLandedCost*1)/100;
            $("#impo1").html((data.other_fee_1 * $TotalLandedCost).toFixed(2));

            //var impo2=(TotalLandedCost*1)/100;
            $("#impo2").html((data.other_fee_2 * $TotalLandedCost).toFixed(2));

            //var impo3=(TotalLandedCost*1)/100;
            $("#impo3").html((data.other_fee_3 * $TotalLandedCost).toFixed(2));


            //            var impTPc=parseFloat(TotalLandedCost)+parseFloat(ImportDuty)+parseFloat(DeliveryOrder)+parseFloat(impCmF)+parseFloat(impLTF)+parseFloat(impDp)+parseFloat(impMf)+parseFloat(impo1)+parseFloat(impo2)+parseFloat(impo3)+parseFloat(impca)+parseFloat(impps)+parseFloat(imptp)+parseFloat(impIf)+parseFloat(impAFt)+parseFloat(impcc);
            //           impTPc=Math.round(impTPc * 100) / 100;
            $ToalProductCost = ($TotalLandedCost) +
                (data.import_duty * $TotalLandedCost) +
                (data.delivery_order * $TotalLandedCost) +
                (data.cmr_comp_fee * $TotalLandedCost) +
                (data.lcl_transport_fee * $TotalLandedCost) +
                (data.cargo_auto_fee * $TotalLandedCost) +
                (data.port_service_fee * $TotalLandedCost) +
                (data.custom_clearance_fee * $TotalLandedCost) +
                (data.transport_fues_fee * $TotalLandedCost) +
                (data.aqis_fee * $TotalLandedCost) +
                (data.insurance_fee * $TotalLandedCost) +
                (data.dec_processing_fee * $TotalLandedCost) +
                (data.misc_fee * $TotalLandedCost) +
                (data.other_fee_1 * $TotalLandedCost) +
                (data.other_fee_2 * $TotalLandedCost) +
                (data.other_fee_3 * $TotalLandedCost)

            //$("#impTPc").html(data.TotalProductCost);
            $("#impTPc").html($ToalProductCost.toFixed(2));


            //            var impunitcost=parseFloat(impTPc)/parseFloat(data.Qty);
            //              impunitcost=Math.round(impunitcost * 100) / 100;
            var UnitCost = $ToalProductCost / data.Qty;
            $("#impunitcost").html(UnitCost.toFixed(2));

            //            var impMarkup=data.MarkUpOnCost;
            //            impMarkup=Math.round(impMarkup * 100) / 100;
            $("#impMarkup").html((data.MarkUpOnCost * UnitCost).toFixed(2));

            var impWp = (data.MarkUpOnCost * UnitCost) + UnitCost;
            //            impWp=impWp+impunitcost;
            //             impWp=Math.round(impWp * 100) / 100;
            $("#impWp").html(impWp.toFixed(2));
            var impGP = ((data.MarkUpOnCost * ($ToalProductCost / data.monthly_qty)) + ($ToalProductCost / data.monthly_qty)) - ($ToalProductCost / data.monthly_qty);
            //            impGP=Math.round(impGP * 100) / 100;
            $("#impGP").html(impGP.toFixed(2));

            var impTotalRevenue = ((data.MarkUpOnCost * UnitCost) + UnitCost) * data.monthly_qty;
            //            impTotalRevenue=Math.round(impTotalRevenue * 100) / 100;
            $("#impTotalRevenue").html(impTotalRevenue.toFixed(2));

            //            var impTC=impunitcost*data.Qty;
            //            impTC=Math.round(impTC * 100) / 100;
            $("#impTC").html(($ToalProductCost * data.Qty).toFixed(2));

            //            var impTPc=impTR-impTC;
            //            impTPc=Math.round(impTPc * 100) / 100;
            var GrossTotal = (((data.MarkUpOnCost * ($ToalProductCost / data.monthly_qty)) + ($ToalProductCost / data.monthly_qty)) * data.monthly_qty) - ($ToalProductCost * data.monthly_qty);
            $("#impgross").html(GrossTotal.toFixed(2));
            //  alert(data.Description);

            $('#impmodal_form_Detail').modal('show'); // show bootstrap modal when complete loaded

            $('#impmodal_form_Detail').on('shown.bs.modal', function () {
                $('.nav a[href="#tab1"]').tab('show');
            })

            $('.modal-title').text('Imported Product Detail'); // Set title to Bootstrap modal title
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //alert(errorThrown);

        }
    });
}

function delete_importedproduct(id) {

    //if (confirm('Are you sure you want to delete this data?')){

    $.ajax({
        url: site_url + 'ImportedProducts/ajax-deleteimported/' + id,
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            //if success reload ajax table
            $('#impmodal_form').modal('hide');
            drawCollectionView()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
    //}
}



$(document).ready(function () {

    $('.next').click(function () {

        var nextId = $(this).parents('.tab-pane').next().attr("id");
        $('[href=#' + nextId + ']').tab('show');
        return false;

    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        //update progress
        var step = $(e.target).data('step');
        var percent = (parseInt(step) / 3) * 100;

        $('.progress-bar').css({ width: percent + '%' });
        $('.progress-bar').text("Step " + step + " of 3");

        //e.relatedTarget // previous tab

    })

    $('.first').click(function () {

        $('#myWizard a:first').tab('show')

    })

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

    $(wizard).append('<div class="footer"><button id="btnFormPrev" class="btn btn-default" type="button">Prev</button><button id="btnFormNext" class="btn btn-primary" type="button">Next</button></div>');

    $(wizard).find("#btnFormPrev").click(function () {
        selectPanel($(".wizardProgress .selected").index() - 1);
    });
    $(wizard).find("#btnFormNext").click(function () {

        if ($(".wizardProgress .selected").index() == 0) {

            if ($('#importedproduct_description').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert product description first ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('#importedproduct_description').focus()

                    $('#modalConfirmYes').modal('hide');

                    //$('.btn-next').trigger("click");
                    return false;
                });

                return false;

            } else {

                selectPanel($(".wizardProgress .selected").index() + 1);

                $('#monthlytable_qty').focus();

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

                return false;

            }

        }

        if ($(".wizardProgress .selected").index() == 1) {

            if ($('#monthlytable_qty').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert monthly quantity ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('#monthlytable_qty').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });


                return false;
            } else if ($('#imported_unit_cost').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert unit cost ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('#imported_unit_cost').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else {

                selectPanel($(".wizardProgress .selected").index() + 1);


                $('[name="import_duty"]').focus();

                return false;

            }

        }

        if ($(".wizardProgress .selected").index() == 2) {

            if ($('[name="import_duty"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert import duty ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="import_duty"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });


                return false;

            } else if ($('[name="comp_fee"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert comp fee ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="comp_fee"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else if ($('[name="cargo_auto"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert cargo auto ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="cargo_auto"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else if ($('[name="custom_clearance_fee"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert custom clearance fee ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="custom_clearance_fee"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else if ($('[name="aqis_fee"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert aqis fee ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="aqis_fee"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else if ($('[name="dec_processing_fee"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert dec processing fee ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="dec_processing_fee"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else if ($('[name="delivery_order"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert delivery order fee ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="delivery_order"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else if ($('[name="lcl_transport_fee"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert lcl transport fee ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="lcl_transport_fee"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else {

                selectPanel($(".wizardProgress .selected").index() + 1);


                $('[name="port_service_fee"]').focus();

                return false;
            }
        }

        if ($(".wizardProgress .selected").index() == 3) {

            if ($('[name="port_service_fee"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert post service fee ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="port_service_fee"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });


                return false;

            } else if ($('[name="transport_fues_fee"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert transport fues fee ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="transport_fues_fee"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else if ($('[name="insurance_fee"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert insurance auto ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="insurance_fee"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else if ($('[name="misc_fee"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert misc fee ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="misc_fee"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else if ($('[name="other_fee_1"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert other fee 1 ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="other_fee_1"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else if ($('[name="other_fee_2"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert other fee 2 ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="other_fee_2"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else if ($('[name="other_fee_3"]').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert other fee 2 ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('[name="other_fee_3"]').focus()

                    $('#modalConfirmYes').modal('hide');

                    return false;

                });

                return false;
            } else {

                selectPanel($(".wizardProgress .selected").index() + 1);


                $('[name="imported_markup_on_cost"]').focus();

                return false;
            }
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
            url: site_url + 'ImportedProducts/ajax-calculating_summary',
            type: "GET",
            dataType: "JSON",
            success: function (row) {
                for (i = 1; i <= 15; i++) {

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

setTimeout(function () {
    $('#modal-default').modal('show');
}, 2000)


setTimeout(function () {
    $('#modal-default').modal('hide');
}, 40000)