//
// if ($.cookie('modal_people') != 'loaded')
// {
// $.cookie('modal_people', 'loaded');
// // code to show modal
// setTimeout(function(){
// $('#modal_people').modal('show');
// }, 2000)
// }
function checkempty() {
    $('#personform :input').each(function (index) {
        if ($(this).attr('type') === "text" || $(this).attr('type') === "number") {
            if ($(this).val() !== '' && $(this).parent('div').hasClass('is-empty')) {
                $(this).parent('div').removeClass('is-empty');
            } else {
                $(this).parent('div').addClass('is-empty');
            }
        }

    });
}
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


// $(document).ready(function() {
//     $('input').iCheck({
//         checkboxClass: 'icheckbox_square', radioClass  : 'iradio_square', increaseArea: '30%' // optional
//     });
// })

var rates = 0;
var hour = 0;
var total = 0;


$(function () {
    $('input[name="optradio"]').on('ifClicked', function (event) {
        if (this.value === "single") {

            $('#person_quantity').val('1');
            $('#person_quantity').prop('readonly', true);

            $('#person_fname').focus();

        } else if (this.value === "multiple") {

            $('#person_quantity').prop('readonly', false);
            $('#person_quantity').focus();

        }
    });

    // $('#start_date').daterangepicker({singleDatePicker: true});
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
    // redraw the datatables
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if ((target == '#menu3')) {
            table1.ajax.reload(null, false);
        }
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if ((target === '#form1')) {
            tableCalculationII();
        }
    });
    $('#people-2').on('show', function () {
        tableCalculationII();
    });

    $("#table_renumeration").tableHeadFixer({ 'left': 1 });

    $("#table_deductions").tableHeadFixer({ 'left': 1 });

    $("#table_annuation_workcover").tableHeadFixer({ 'left': 1 });

    $("#table_summary_renumeration").tableHeadFixer({ 'left': 1 });

    $("#table_summary_deductions").tableHeadFixer({ 'left': 1 });

    $("#table_summary_annuation_workcover").tableHeadFixer({ 'left': 1 });


    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if ((target === '#form2')) {
            if (parseFloat($('[name="person_tot_gross_salary"]').val().replace(/,/g, '')) == 0) {

                $('#form2').each(function () {
                    $(this).find('input[name*="_money"]').each(function () {
                        $(this).val("0");
                    });
                });

                $('[name="person_deductions"]').val('0.0');

            } else {

                calculationBracket();

                $('#form2').each(function () {
                    $(this).find('input').not(':input[name*="_money"]').not(':input[name="person_tax"]').not(':input[name="person_deductions"]').each(function () {
                        CalculationDeduction($(this).attr("name"));
                    });
                });

            }
        }
    })


    $('#people-4').on('show', function () {

        if (parseFloat($('[name="person_tot_gross_salary"]').val().replace(/,/g, '')) == 0) {

            $('#people-4').each(function () {
                $(this).find('input[name*="_money"]').each(function () {
                    $(this).val("0");
                });
            });

            $('[name="person_deductions"]').val('0.0');

        } else {

            calculationBracket();

            $('#people-4').each(function () {
                $(this).find('input').not(':input[name*="_money"]').not(':input[name="person_tax"]').not(':input[name="person_deductions"]').each(function () {
                    CalculationDeduction($(this).attr("name"));
                });
            });

        }

    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if ((target === '#form3')) {
            if (parseFloat($('[name="person_tot_gross_salary"]').val().replace(/,/g, '')) == 0) {

                $('#form3').each(function () {
                    $(this).find('input[name*="_money"]').each(function () {
                        $(this).val("0");
                    });
                });

            } else {

                calculationBracket();
                $('#form3').each(function () {
                    $(this).find('input', 'input[name*!="_money"]').each(function () {
                        CalculationAnuation($(this).attr("name"));
                    });
                });

            }
        }
    })

    $('#people-5').on('show', function () {

        if (parseFloat($('[name="person_tot_gross_salary"]').val().replace(/,/g, '')) == 0) {

            $('#people-5').each(function () {
                $(this).find('input[name*="_money"]').each(function () {
                    $(this).val("0");
                });
            });

        } else {

            calculationBracket();
            $('#people-5').each(function () {
                $(this).find('input', 'input[name*!="_money"]').each(function () {
                    CalculationAnuation($(this).attr("name"));
                });
            });

        }

    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if ((target == '#peoplestep')) {
            clearForm();
            $("#people_form").hide();
        }
    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if ((target == '#menu3')) {
            $.ajax({
                url: site_url + "people/ajax-calculating_summary",
                type: "GET",
                dataType: "JSON",
                success: function (data) {
                    var tot_summary_gross = 0;
                    var tot_subsidies_recieved = 0;
                    var tot_commission_recieved = 0;
                    var tot_other_recieved = 0;
                    var tot_summary_pension = 0;
                    var tot_summary_pension = 0;
                    var tot_summary_medicare = 0;
                    var tot_summary_retirement = 0;
                    var tot_summary_income = 0;
                    var tot_summary_union = 0;
                    var tot_summary_sick = 0;
                    var tot_summary_fringe = 0;
                    var tot_summary_other = 0;

                    var tot_summary_super = 0;
                    var tot_summary_work = 0;

                    for (i = 1; i <= 13; i++) {
                        k = i - 1;

                        tot_summary_renumeration = 0;
                        tot_summary_deduction = 0;
                        summary_net_salary = 0;

                        if (i == "1") {

                            $('#row_summary_gross_salary_' + i).html(cur + number_format(data.gross_salary, 0, '.', ','));
                            $('#row_summary_subsidi_' + i).html(cur + number_format(data.subsidies_recieved, 0, '.', ','));
                            $('#row_summary_commision_' + i).html(cur + number_format(data.commission_recieved, 0, '.', ','));
                            $('#row_summary_other_' + i).html(cur + number_format(data.other_recieved, 0, '.', ','));

                            $('#summary_pension_' + i).html(cur + number_format(data.pension, 0, '.', ','));
                            $('#summary_medicare_' + i).html(cur + number_format(data.medicare, 0, '.', ','));
                            $('#summary_retirement_' + i).html(cur + number_format(data.retirement, 0, '.', ','));
                            $('#summary_income_' + i).html(cur + number_format(data.income, 0, '.', ','));
                            $('#summary_union_' + i).html(cur + number_format(data.union, 0, '.', ','));
                            $('#summary_sick_' + i).html(cur + number_format(data.sick, 0, '.', ','));
                            $('#summary_fringe_' + i).html(cur + number_format(data.fringe, 0, '.', ','));
                            $('#summary_other_' + i).html(cur + number_format(data.other, 2, '.', ','));

                            $('#summary_super_' + i).html(cur + number_format(data.super, 0, '.', ','));
                            $('#summary_work_' + i).html(cur + number_format(data.work, 0, '.', ','));

                            tot_summary_gross += data.gross_salary;
                            tot_subsidies_recieved += data.subsidies_recieved;
                            tot_commission_recieved += data.commission_recieved;
                            tot_other_recieved += data.other_recieved;

                            tot_summary_pension += data.pension;
                            tot_summary_medicare += data.medicare;
                            tot_summary_retirement += data.retirement;
                            tot_summary_income += data.income;
                            tot_summary_union += data.union;
                            tot_summary_sick += data.sick;
                            tot_summary_fringe += data.fringe;
                            tot_summary_other += data.other;

                            tot_summary_super += data.super;
                            tot_summary_work += data.work;

                        } else if (i == "13") {

                            $('#row_summary_gross_salary_' + i).html(cur + number_format(tot_summary_gross, 0, '.', ','));
                            $('#row_summary_subsidi_' + i).html(cur + number_format(tot_subsidies_recieved, 0, '.', ','));
                            $('#row_summary_commision_' + i).html(cur + number_format(tot_commission_recieved, 0, '.', ','));
                            $('#row_summary_other_' + i).html(cur + number_format(tot_other_recieved, 0, '.', ','));

                            $('#summary_pension_' + i).html(cur + number_format(tot_summary_pension, 0, '.', ','));
                            $('#summary_medicare_' + i).html(cur + number_format(tot_summary_medicare, 0, '.', ','));
                            $('#summary_retirement_' + i).html(cur + number_format(tot_summary_retirement, 0, '.', ','));
                            $('#summary_income_' + i).html(cur + number_format(tot_summary_income, 0, '.', ','));
                            $('#summary_union_' + i).html(cur + number_format(tot_summary_union, 0, '.', ','));
                            $('#summary_sick_' + i).html(cur + number_format(tot_summary_sick, 0, '.', ','));
                            $('#summary_fringe_' + i).html(cur + number_format(tot_summary_fringe, 0, '.', ','));
                            $('#summary_other_' + i).html(cur + number_format(tot_summary_other, 2, '.', ','));

                            $('#summary_super_' + i).html(cur + number_format(tot_summary_super, 0, '.', ','));
                            $('#summary_work_' + i).html(cur + number_format(tot_summary_work, 0, '.', ','));

                            $('#total_superannuation_year1').html(cur + number_format(tot_summary_super, 0, '.', ','));
                            $('#total_workcover_year1').html(cur + number_format(tot_summary_work, 0, '.', ','));


                        } else {

                            $row_summary_gross_before = parseFloat($('#row_summary_gross_salary_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                            $row_summary_subsidi_before = parseFloat($('#row_summary_subsidi_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                            $row_summary_commision_before = parseFloat($('#row_summary_commision_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                            $row_summary_other_before = parseFloat($('#row_summary_other_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

                            $summary_pension_before = parseFloat($('#summary_pension_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                            $summary_medicare_before = parseFloat($('#summary_medicare_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                            $summary_retirement_before = parseFloat($('#summary_retirement_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                            $summary_income_before = parseFloat($('#summary_income_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                            $summary_union_before = parseFloat($('#summary_union_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                            $summary_sick_before = parseFloat($('#summary_sick_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                            $summary_fringe_before = parseFloat($('#summary_fringe_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                            $summary_other_before = parseFloat($('#summary_other_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

                            $summary_super_before = parseFloat($('#summary_super_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                            $summary_work_before = parseFloat($('#summary_work_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));


                            $('#row_summary_gross_salary_' + i).html(cur + number_format($row_summary_gross_before, 0, '.', ','))
                            $('#row_summary_subsidi_' + i).html(cur + number_format($row_summary_subsidi_before, 0, '.', ','));
                            $('#row_summary_commision_' + i).html(cur + number_format($row_summary_commision_before, 0, '.', ','));
                            $('#row_summary_other_' + i).html(cur + number_format($row_summary_other_before, 0, '.', ','));

                            $('#summary_pension_' + i).html(cur + number_format($summary_pension_before, 0, '.', ','));
                            $('#summary_medicare_' + i).html(cur + number_format($summary_medicare_before, 0, '.', ','));
                            $('#summary_retirement_' + i).html(cur + number_format($summary_retirement_before, 0, '.', ','));
                            $('#summary_income_' + i).html(cur + number_format($summary_income_before, 0, '.', ','));
                            $('#summary_union_' + i).html(cur + number_format($summary_union_before, 0, '.', ','));
                            $('#summary_sick_' + i).html(cur + number_format($summary_sick_before, 0, '.', ','));
                            $('#summary_fringe_' + i).html(cur + number_format($summary_fringe_before, 0, '.', ','));
                            $('#summary_other_' + i).html(cur + number_format($summary_other_before, 2, '.', ','));

                            $('#summary_super_' + i).html(cur + number_format($summary_super_before, 0, '.', ','));
                            $('#summary_work_' + i).html(cur + number_format($summary_work_before, 0, '.', ','));


                            tot_summary_gross += $row_summary_gross_before;
                            tot_subsidies_recieved += $row_summary_subsidi_before;
                            tot_commission_recieved += $row_summary_commision_before;
                            tot_other_recieved += $row_summary_other_before;

                            tot_summary_pension += $summary_pension_before;
                            tot_summary_medicare += $summary_medicare_before;
                            tot_summary_retirement += $summary_retirement_before;
                            tot_summary_income += $summary_income_before;
                            tot_summary_union += $summary_union_before;
                            tot_summary_sick += $summary_sick_before;
                            tot_summary_fringe += $summary_fringe_before;
                            tot_summary_other += $summary_other_before;

                            tot_summary_super += $summary_super_before;
                            tot_summary_work += $summary_work_before;

                        }

                        tot_summary_renumeration = parseFloat($('#row_summary_gross_salary_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#row_summary_subsidi_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#row_summary_commision_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#row_summary_other_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

                        tot_summary_deduction = parseFloat($('#summary_pension_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_medicare_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_retirement_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_income_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_union_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_sick_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_fringe_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) - parseFloat($('#summary_other_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))

                        $('#row_summary_tot_renumeration_' + i).html(cur + number_format(tot_summary_renumeration, 0, '.', ','));

                        summary_net_salary = parseFloat($('#row_summary_tot_renumeration_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) - tot_summary_deduction;

                        summary_total = parseFloat($('#summary_super_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_work_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

                        summary_total_payroll_liability = parseFloat($('#row_summary_tot_renumeration_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + summary_total;

                        $('#total_summary_deductions_' + i).html(cur + number_format(tot_summary_deduction, 0, '.', ','));

                        $('#summary_net_salary_' + i).html(cur + number_format(summary_net_salary, 0, '.', ','));

                        $('#summary_total_annuation_work_' + i).html(cur + number_format(summary_total, 0, '.', ','));

                        $('#summary_total_payroll_liability_' + i).html(cur + number_format(summary_total_payroll_liability, 0, '.', ','));

                        $('#total_renumeration_year1').html(cur + number_format(tot_summary_renumeration, 0, '.', ','));
                        $('#total_deductions_year1').html(cur + number_format(tot_summary_deduction, 0, '.', ','));
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Error fetching data');
                }
            })
        }
    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if ((target == '#form5')) {
            // for (i=0;i<=4;i++){
            // clearForm();
            calculationBracket()
            // }
        }
    })

    $('#people-3').on('show', function () {
        calculationBracket();
    })

    for (i = 0; i <= 4; i++) {
        $('#tax_bracket_val_' + i).mask("#,##0", { reverse: true });
        $('#tax_rate_' + i).mask("##0.00 %", { reverse: true });
    }

    $('input[name="person_rates"]').on('change', function () {
        calculationBracket();
    })

    // $('[name="person_other"]').on('blur', function() {
    //     $('#modalConfirmYesNo').modal('show');
    //     $("#lblTitleConfirmYesNo").html("User Confirmation");
    //     $("#lblMsgConfirmYesNo").html("Do you want to edit tax brackets value ??");
    //     $("#btnYesConfirmYesNo").off('click').click(function() {
    //         $('#people_step3').click();
    //         // selectPanel(2)
    //         $('#modalConfirmYesNo').modal('hide');
    //     })

    //     $("#btnNoConfirmYesNo").off('click').click(function() { /*$('#btnSavePerson').focus();*/
    //         $('#people_step4').click();
    //         $('#modalConfirmYesNo').modal('hide');
    //     });
    // })
});


function calculationBracket() {
    $.ajax({
        url: site_url + "people/ajax-saving_bracket",
        type: "POST",
        data: new FormData($('#personform')[0]),
        contentType: false,
        cache: false,
        processData: false,
        dataType: 'json',
        encode: true,
        success: function (data) {
            var annual_gross = (parseFloat($('[name="person_tot_gross_salary"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) / parseFloat($('[name="person_quantity"]').val())) * 52;
            $('#annual_gross').html(data.cur + ' ' + number_format(annual_gross, 0, '.', ','));
            var monthly_gross = annual_gross / 12;
            $('#monthly_gross').html(data.cur + ' ' + number_format(monthly_gross, 0, '.', ','));
            var weekly_gross = annual_gross / 52;
            $('#weekly_gross').html(data.cur + ' ' + number_format(weekly_gross, 0, '.', ','));


            if (data.country == "Australia") {
                $number = 4;

                for (i = 0; i <= $number; i++) {

                    if (i == 0) {

                        $('#account_' + i).html("From 0 to " + number_format($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','))

                        if ($('#tax_rate_' + i).val() <= 0) {
                            var eqval_0 = 0;
                        } else {
                            var eqval_0 = (($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100);
                        }
                        $('#eq_value_' + i).html(data.cur + ' ' + number_format(eqval_0, 0, '.', ','));

                        var eff_val = (eqval_0 / $('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100;
                        $('#effective_rate_' + i).html(number_format(eff_val, 1, '.', ',') + ' %');

                        if (parseFloat(annual_gross) < parseFloat($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))) {

                            var income_tax_year = parseFloat(annual_gross) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100;

                            income_tax_year = income_tax_year * parseFloat($('[name="person_quantity"]').val());
                        }

                        $('#annual_income').html(data.cur + ' ' + number_format(income_tax_year, 0, '.', ','));

                        var annual_net = (annual_gross * parseFloat($('[name="person_quantity"]').val())) - income_tax_year;

                        $('#annual_net').html(data.cur + ' ' + number_format(annual_net, 0, '.', ','));

                        var annual_percent = (income_tax_year / (annual_gross * parseFloat($('[name="person_quantity"]').val()))) * 100;

                        $('#annual_percent').html(number_format(annual_percent, 2, '.', ',') + ' %');

                    } else if (i == 1) {
                        j = i - 1;

                        $('#account_' + i).html("From " + number_format($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ',') + " to " + number_format($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','));

                        var eqval_1 = (($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') - $('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100);

                        $('#eq_value_' + i).html(data.cur + ' ' + number_format(eqval_1, 0, '.', ','));
                        var eff_val = (eqval_1 / $('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100;
                        $('#effective_rate_' + i).html(number_format(eff_val, 1, '.', ',') + ' %');

                        if (parseFloat(annual_gross) > parseFloat($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) && parseFloat(annual_gross) < parseFloat($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))) {

                            var income_tax_year = (parseFloat(annual_gross) - parseFloat($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100;

                            income_tax_year = income_tax_year * parseFloat($('[name="person_quantity"]').val());
                        }

                        $('#annual_income').html(data.cur + ' ' + number_format(income_tax_year, 0, '.', ','));

                        var annual_net = (annual_gross * parseFloat($('[name="person_quantity"]').val())) - income_tax_year;

                        $('#annual_net').html(data.cur + ' ' + number_format(annual_net, 0, '.', ','));

                        var annual_percent = (income_tax_year / (annual_gross * parseFloat($('[name="person_quantity"]').val()))) * 100;

                        $('#annual_percent').html(number_format(annual_percent, 2, '.', ',') + ' %');
                    } else if (i == 2) {
                        j = i - 1;

                        $('#account_' + i).html("From " + number_format($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ',') + " to " + number_format($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','));

                        var eqval_2 = (($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') - $('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100) + parseFloat($('#eq_value_' + j).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))
                        $('#eq_value_' + i).html(data.cur + ' ' + number_format(eqval_2, 0, '.', ','));
                        var eff_val = (eqval_2 / $('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100;
                        $('#effective_rate_' + i).html(number_format(eff_val, 1, '.', ',') + ' %');

                        if (parseFloat(annual_gross) > parseFloat($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) && parseFloat(annual_gross) < parseFloat($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))) {

                            var income_tax_year = (parseFloat(annual_gross) - parseFloat($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100 + eqval_1;

                            income_tax_year = income_tax_year * parseFloat($('[name="person_quantity"]').val());
                        }

                        $('#annual_income').html(data.cur + ' ' + number_format(income_tax_year, 0, '.', ','));

                        var annual_net = (annual_gross * parseFloat($('[name="person_quantity"]').val())) - income_tax_year;

                        $('#annual_net').html(data.cur + ' ' + number_format(annual_net, 0, '.', ','));
                        var annual_percent = (income_tax_year / (annual_gross * parseFloat($('[name="person_quantity"]').val()))) * 100;

                        $('#annual_percent').html(number_format(annual_percent, 2, '.', ',') + ' %');

                    } else if (i == 3) {
                        j = i - 1;
                        $('#account_' + i).html("From " + number_format($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ',') + " to " + number_format($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','));
                        var eqval_3 = (($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') - $('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100) + parseFloat($('#eq_value_' + j).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))
                        $('#eq_value_' + i).html(data.cur + ' ' + number_format(eqval_3, 0, '.', ','));
                        var eff_val = (eqval_3 / $('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100;
                        $('#effective_rate_' + i).html(number_format(eff_val, 1, '.', ',') + ' %');

                        if (parseFloat(annual_gross) > parseFloat($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) && parseFloat(annual_gross) < parseFloat($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))) {

                            var income_tax_year = (parseFloat(annual_gross) - parseFloat($('#tax_bracket_val_' + j).val().replace(/,/g, ''))) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100 + eqval_2;
                            income_tax_year = income_tax_year * parseFloat($('[name="person_quantity"]').val());
                        }

                        $('#annual_income').html(data.cur + ' ' + number_format(income_tax_year, 0, '.', ','));

                        var annual_net = (annual_gross * parseFloat($('[name="person_quantity"]').val())) - income_tax_year;

                        $('#annual_net').html(data.cur + ' ' + number_format(annual_net, 0, '.', ','));
                        var annual_percent = (income_tax_year / (annual_gross * parseFloat($('[name="person_quantity"]').val()))) * 100;

                        $('#annual_percent').html(number_format(annual_percent, 2, '.', ',') + ' %');
                    } else {
                        j = i - 1;

                        $('#account_' + i).html("From " + number_format($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ',') + " to Above");
                        var eqval_4 = (($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') - $('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100) + parseFloat($('#eq_value_' + j).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))
                        $('#eq_value_' + i).html(data.cur + ' ' + number_format(eqval_4, 0, '.', ','));
                        var eff_val = (eqval_4 / $('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100;
                        $('#effective_rate_' + i).html(number_format(eff_val, 1, '.', ',') + ' %');

                        if (parseFloat(annual_gross) > parseFloat(annual_gross) < parseFloat($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))) {

                            var income_tax_year = (parseFloat(annual_gross) - parseFloat($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100 + eqval_3;


                            income_tax_year = income_tax_year * parseFloat($('[name="person_quantity"]').val());
                        }

                        $('#annual_income').html(data.cur + ' ' + number_format(income_tax_year, 0, '.', ','));

                        var annual_net = (annual_gross * parseFloat($('[name="person_quantity"]').val())) - income_tax_year;

                        $('#annual_net').html(data.cur + ' ' + number_format(annual_net, 0, '.', ','));
                        var annual_percent = (income_tax_year / (annual_gross * parseFloat($('[name="person_quantity"]').val()))) * 100;

                        $('#annual_percent').html(number_format(annual_percent, 2, '.', ',') + ' %');
                    }

                }
            } else {

                $number = 3;

                for (i = 0; i <= $number; i++) {

                    if (i == 0) {

                        $('#account_' + i).html("From 0 to " + number_format($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','))

                        if ($('#tax_rate_' + i).val() <= 0) {
                            var eqval_0 = 0;
                        } else {
                            var eqval_0 = (($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100);
                        }
                        $('#eq_value_' + i).html(data.cur + ' ' + number_format(eqval_0, 0, '.', ','));

                        var eff_val = (eqval_0 / $('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100;
                        $('#effective_rate_' + i).html(number_format(eff_val, 1, '.', ',') + ' %');

                        if (parseFloat(annual_gross) < parseFloat($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))) {

                            var income_tax_year = parseFloat(annual_gross) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100;

                            income_tax_year = income_tax_year * parseFloat($('[name="person_quantity"]').val());
                        }

                        $('#annual_income').html(data.cur + ' ' + number_format(income_tax_year, 0, '.', ','));

                        var annual_net = (annual_gross * parseFloat($('[name="person_quantity"]').val())) - income_tax_year;

                        $('#annual_net').html(data.cur + ' ' + number_format(annual_net, 0, '.', ','));

                        var annual_percent = (income_tax_year / (annual_gross * parseFloat($('[name="person_quantity"]').val()))) * 100;

                        $('#annual_percent').html(number_format(annual_percent, 2, '.', ',') + ' %');

                    } else if (i == 1) {
                        j = i - 1;

                        $('#account_' + i).html("From " + number_format($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ',') + " to " + number_format($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','));

                        var eqval_1 = (($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') - $('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100);

                        $('#eq_value_' + i).html(data.cur + ' ' + number_format(eqval_1, 0, '.', ','));
                        var eff_val = (eqval_1 / $('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100;
                        $('#effective_rate_' + i).html(number_format(eff_val, 1, '.', ',') + ' %');

                        if (parseFloat(annual_gross) > parseFloat($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) && parseFloat(annual_gross) < parseFloat($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))) {

                            var income_tax_year = parseFloat(annual_gross) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100;

                            income_tax_year = income_tax_year * parseFloat($('[name="person_quantity"]').val());
                        }

                        $('#annual_income').html(data.cur + ' ' + number_format(income_tax_year, 0, '.', ','));

                        var annual_net = (annual_gross * parseFloat($('[name="person_quantity"]').val())) - income_tax_year;

                        $('#annual_net').html(data.cur + ' ' + number_format(annual_net, 0, '.', ','));

                        var annual_percent = (income_tax_year / (annual_gross * parseFloat($('[name="person_quantity"]').val()))) * 100;

                        $('#annual_percent').html(number_format(annual_percent, 2, '.', ',') + ' %');
                    } else if (i == 2) {
                        j = i - 1;

                        $('#account_' + i).html("From " + number_format($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ',') + " to " + number_format($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','));

                        var eqval_2 = (($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') - $('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100) + parseFloat($('#eq_value_' + j).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))
                        $('#eq_value_' + i).html(data.cur + ' ' + number_format(eqval_2, 0, '.', ','));
                        var eff_val = (eqval_2 / $('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100;
                        $('#effective_rate_' + i).html(number_format(eff_val, 1, '.', ',') + ' %');

                        if (parseFloat(annual_gross) > parseFloat($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) && parseFloat(annual_gross) < parseFloat($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))) {

                            var income_tax_year = parseFloat(annual_gross) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100;

                            income_tax_year = income_tax_year * parseFloat($('[name="person_quantity"]').val());
                        }

                        $('#annual_income').html(data.cur + ' ' + number_format(income_tax_year, 0, '.', ','));

                        var annual_net = (annual_gross * parseFloat($('[name="person_quantity"]').val())) - income_tax_year;

                        $('#annual_net').html(data.cur + ' ' + number_format(annual_net, 0, '.', ','));
                        var annual_percent = (income_tax_year / (annual_gross * parseFloat($('[name="person_quantity"]').val()))) * 100;

                        $('#annual_percent').html(number_format(annual_percent, 2, '.', ',') + ' %');

                    } else {
                        j = i - 1;
                        $('#account_' + i).html("From " + number_format($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ',') + " to Above");
                        var eqval_3 = (($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') - $('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100) + parseFloat($('#eq_value_' + j).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))
                        $('#eq_value_' + i).html(data.cur + ' ' + number_format(eqval_3, 0, '.', ','));
                        var eff_val = (eqval_3 / $('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100;
                        $('#effective_rate_' + i).html(number_format(eff_val, 1, '.', ',') + ' %');

                        if (parseFloat(annual_gross) > parseFloat($('#tax_bracket_val_' + j).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) && parseFloat(annual_gross) < parseFloat($('#tax_bracket_val_' + i).val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))) {

                            var income_tax_year = parseFloat(annual_gross) * $('#tax_rate_' + i).val().replace(/\%/g, '') / 100;
                            income_tax_year = income_tax_year * parseFloat($('[name="person_quantity"]').val());
                        }

                        $('#annual_income').html(data.cur + ' ' + number_format(income_tax_year, 0, '.', ','));

                        var annual_net = (annual_gross * parseFloat($('[name="person_quantity"]').val())) - income_tax_year;

                        $('#annual_net').html(data.cur + ' ' + number_format(annual_net, 0, '.', ','));
                        var annual_percent = (income_tax_year / (annual_gross * parseFloat($('[name="person_quantity"]').val()))) * 100;

                        $('#annual_percent').html(number_format(annual_percent, 2, '.', ',') + ' %');
                    }

                }
            }


            if (parseFloat($('[name="person_tot_gross_salary"]').val().replace(/,/g, '')) == 0) {
                var monthly_percent = 0;
                var weekly_percent = 0;
                $('#annual_gross').html(data.cur + ' ' + number_format(0, 0, '.', ','));
                $('#annual_income').html(data.cur + ' ' + number_format(0, 0, '.', ','));
                $('#annual_net').html(data.cur + ' ' + number_format(0, 0, '.', ','));
                $('#annual_percent').html(number_format(0, 2, '.', ',') + ' %');
                $('#monthly_income').html(data.cur + ' ' + number_format(0, 0, '.', ','));
                $('#monthly_net').html(data.cur + ' ' + number_format(0, 0, '.', ','));
                $('#monthly_percent').html(number_format(0, 2, '.', ',') + ' %');
                $('#weekly_income').html(data.cur + ' ' + number_format(0, 0, '.', ','));
                $('#weekly_net').html(data.cur + ' ' + number_format(0, 0, '.', ','));
                $('#weekly_percent').html(number_format(0, 2, '.', ',') + ' %');
            } else {
                var monthly_income = income_tax_year / 12;
                var monthly_net = annual_net / 12;
                var monthly_percent = (monthly_income / monthly_gross) * 100;
                $('#monthly_income').html(data.cur + ' ' + number_format(monthly_income, 0, '.', ','));
                $('#monthly_net').html(data.cur + ' ' + number_format(monthly_net, 0, '.', ','));
                $('#monthly_percent').html(number_format(monthly_percent, 2, '.', ',') + ' %');
                var weekly_income = income_tax_year / 52;
                var weekly_net = annual_net / 52;
                var weekly_percent = (weekly_income / weekly_gross) * 100;
                $('#weekly_income').html(data.cur + ' ' + number_format(weekly_income, 0, '.', ','));
                $('#weekly_net').html(data.cur + ' ' + number_format(weekly_net, 0, '.', ','));
                $('#weekly_percent').html(number_format(weekly_percent, 2, '.', ',') + ' %');

                $('[name="person_tax"]').val(number_format(weekly_percent, 2, '.', ','));
                $('[name="person_tax_money"]').val(number_format(weekly_income, 2, '.', ','));

                var income = parseFloat($('#annual_gross').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                var lito,
                    percent_lito;

                if (income >= 37000) {
                    lito = 445 - ((income - 37000) * (1.5 / 100));

                    percent_lito = lito / income;

                    lito = lito / 52;

                    lito = lito * parseFloat($('[name="person_quantity"]').val());

                    if (lito < 0) {
                        $('[name="person_deductions"]').val(number_format(0, 4, '.', ','));
                        $('[name="person_deductions_money"]').val(number_format(0, 2, '.', ','));
                    } else {

                        $('[name="person_deductions"]').val(number_format(percent_lito, 4, '.', ','));
                        $('[name="person_deductions_money"]').val(number_format("-" + lito, 2, '.', ','));

                    }
                } else if (income < 37000) {
                    lito = 445;
                    percent_lito = lito / income;
                    lito = lito / 52;
                    lito = lito * parseFloat($('[name="person_quantity"]').val());
                    $('[name="person_deductions"]').val(number_format(percent_lito, 4, '.', ','));
                    $('[name="person_deductions_money"]').val(number_format("-" + lito, 2, '.', ','));
                } else {

                    $('[name="person_deductions"]').val(number_format(0, 4, '.', ','));
                    $('[name="person_deductions_money"]').val(number_format(0, 2, '.', ','));
                }
            } tableCalculationII();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error fetching data');
        }
    })
}


function CalculationSalary() {

    if ($('[name="person_hour_work"]').val() == "") {

        hour = 0;
    } else {

        hour = $('[name="person_hour_work"]').val();
    }

    if ($('[name="person_rates"]').val() == "") {

        rates = 0;

    } else {
        rates = $('[name="person_rates"]').val();
    }

    if ($('[name="person_quantity"]').val() == "") {

        quantity = 1;

    } else {
        quantity = $('[name="person_quantity"]').val();
    } total = hour * rates * quantity;

    $('[name="person_gross_salary"]').val(number_format(total, 0, '.', ','));

    CalculationSubsidi()

}


function CalculationSubsidi() {

    var gross = $('[name="person_gross_salary"]').val().replace(/,/g, '');
    var subsidi = ($('[name="person_subsidi"]').val() / 100);

    var subsidi_money = gross * subsidi;

    $('[name="person_subsidi_money"]').val(number_format(subsidi_money, 0, '.', ','));

    var tot_gross = 0;

    tot_gross = parseFloat(gross) + parseFloat(subsidi_money) + parseFloat($('[name="person_commission_money"]').val().replace(/,/g, '')) + parseFloat($('[name="person_other_money"]').val().replace(/,/g, ''));

    $('[name="person_tot_gross_salary"]').val(number_format(tot_gross, 0, '.', ','));

    CalculationCommision();

    CalculationLiability();

}

function CalculationCommision() {

    var gross = $('[name="person_gross_salary"]').val().replace(/,/g, '');
    var commision = ($('[name="person_commission"]').val() / 100);

    var commision_money = gross * commision;

    $('[name="person_commission_money"]').val(number_format(commision_money, 0, '.', ','));

    var tot_gross = 0;

    tot_gross = parseFloat(gross) + parseFloat($('[name="person_subsidi_money"]').val().replace(/,/g, '')) + parseFloat(commision_money) + parseFloat($('[name="person_other_money"]').val().replace(/,/g, ''));

    $('[name="person_tot_gross_salary"]').val(number_format(tot_gross, 0, '.', ','));
    CalculationOther();
    CalculationLiability();
}

function CalculationOther() {
    var gross = $('[name="person_gross_salary"]').val().replace(/,/g, '');
    var other = ($('[name="person_other"]').val() / 100);

    var other_money = gross * other;
    $('[name="person_other_money"]').val(number_format(other_money, 0, '.', ','));
    var tot_gross = 0;
    tot_gross = parseFloat(gross) + parseFloat($('[name="person_subsidi_money"]').val().replace(/,/g, '')) + parseFloat($('[name="person_commission_money"]').val().replace(/,/g, '')) + parseFloat(other_money);

    $('[name="person_tot_gross_salary"]').val(number_format(tot_gross, 0, '.', ','));
    tableCalculation();
    CalculationLiability();
}

function CalculationLiability() {
    $('#people-4 input[type=number]').each(function () {
        total = (parseFloat($(this).val()) / 100) * parseFloat($('[name="person_tot_gross_salary"]').val().replace(/,/g, ''))
        var fields = $(this).prop('name');
        $('[name="' + fields + '_money"]').val(number_format(total, 2, '.', ','));
    })
    calculationTotalDeductionI();

    $('#people-5 input[type=number]').each(function () {
        total = (parseFloat($(this).val()) / 100) * parseFloat($('[name="person_tot_gross_salary"]').val().replace(/,/g, ''))
        var fields = $(this).prop('name');
        $('[name="' + fields + '_money"]').val(number_format(total, 2, '.', ','));
    })
    calculationTotalAnuationI();
}

function CalculationDeduction(field) {
    var total = 0;
    total = (parseFloat($('[name="' + field + '"]').val()) / 100) * parseFloat($('[name="person_tot_gross_salary"]').val().replace(/,/g, ''))
    $('[name="' + field + '_money"]').val(number_format(total, 2, '.', ','));
    calculationTotalDeductionI();
}

function calculationTotalDeductionI() {
    $('#people-4').each(function () {
        var subtotal_1 = 0;
        var net_salary = 0;

        $(this).find('input[name*="_money"]').not('input[name*="sub_total_1"]').not('input[name*="net_salary"]').not('input[name*="person_deductions_money"]').each(function () {

            subtotal_1 += parseFloat($(this).val().replace(/,/g, ''));

            net_salary = parseFloat($('[name="person_tot_gross_salary"]').val().replace(/,/g, '')) - subtotal_1;
        });
        subtotal_1 = subtotal_1 - parseFloat($('[name="person_deductions_money"]').val().replace(/,/g, ''));

        $('#sub_total_1').val(number_format(subtotal_1, 2, '.', ','));

        $('#net_salary_form2').val(number_format(net_salary, 2, '.', ','));
    });
}

function CalculationAnuation(field) {
    var total = 0;
    total = (parseFloat($('[name="' + field + '"]').val()) / 100) * parseFloat($('[name="person_tot_gross_salary"]').val().replace(/,/g, ''))
    $('[name="' + field + '_money"]').val(number_format(total, 2, '.', ','));
    calculationTotalAnuationI();
}

function calculationTotalAnuationI() {
    $('#people-5').each(function () {
        var subtotal_2 = 0;
        var total_payroll = 0;
        $(this).find('input[name*="_money"]').not('input[name*="sub_total_2"]').not('input[name*="total_payroll_form3"]').each(function () {
            subtotal_2 += parseFloat($(this).val().replace(/,/g, ''));
            total_payroll = parseFloat($('[name="person_tot_gross_salary"]').val().replace(/,/g, '')) + subtotal_2;
        });

        $('#sub_total_2').val(number_format(subtotal_2, 2, '.', ','));
        $('#total_payroll_form3').val(number_format(total_payroll, 2, '.', ','))
    });
}

function tableCalculation() {
    var gross_salary = 0;
    var tot_gross = 0;
    var subsidi = 0;
    var tot_subsidi = 0;
    var commision = 0;
    var tot_commision = 0;
    var other = 0;
    var tot_other = 0;

    for (i = 1; i <= 13; i++) {

        k = i - 1;

        gross_salary = parseFloat($('[name="person_gross_salary"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 52 / 12;

        subsidi = parseFloat($('[name="person_subsidi_money"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 52 / 12;

        commision = parseFloat($('[name="person_commission_money"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 52 / 12;

        other = parseFloat($('[name="person_other_money"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 52 / 12;

        tot_renumeration = 0;

        if (i == "1") {

            $('#row_gross_salary_' + i).html(cur + number_format(gross_salary, 0, '.', ','));
            $('#row_subsidi_' + i).html(cur + number_format(subsidi, 0, '.', ','));
            $('#row_commision_' + i).html(cur + number_format(commision, 0, '.', ','));
            $('#row_other_' + i).html(cur + number_format(other, 0, '.', ','));

            tot_gross += gross_salary;
            tot_subsidi += subsidi;
            tot_commision += commision;
            tot_other += other;

        } else if (i == "13") {

            $('#row_gross_salary_' + i).html(cur + number_format(tot_gross, 0, '.', ','));
            $('#row_subsidi_' + i).html(cur + number_format(tot_subsidi, 0, '.', ','));
            $('#row_commision_' + i).html(cur + number_format(tot_commision, 0, '.', ','));
            $('#row_other_' + i).html(cur + number_format(tot_other, 0, '.', ','));

        } else {

            $row_gross_before = parseFloat($('#row_gross_salary_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

            $row_subsidi_before = parseFloat($('#row_subsidi_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

            $row_commision_before = parseFloat($('#row_commision_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))

            $row_other_before = parseFloat($('#row_other_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

            $('#row_gross_salary_' + i).html(cur + number_format($row_gross_before, 0, '.', ','));
            $('#row_subsidi_' + i).html(cur + number_format($row_subsidi_before, 0, '.', ','));
            $('#row_commision_' + i).html(cur + number_format($row_commision_before, 0, '.', ','));
            $('#row_other_' + i).html(cur + number_format($row_other_before, 0, '.', ','));

            tot_gross += $row_gross_before;
            tot_subsidi += $row_subsidi_before;
            tot_commision += $row_commision_before;
            tot_other += $row_other_before;

        }

        tot_renumeration = parseFloat($('#row_gross_salary_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#row_subsidi_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#row_commision_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#row_other_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

        $('#row_tot_renumeration_' + i).html(cur + number_format(tot_renumeration, 0, '.', ','));
    }
}

function tableCalculationII() {

    var pension = 0,
        total_pension = 0;
    var medicare = 0,
        total_medicare = 0;
    var retirement = 0,
        total_retirement = 0;
    var income = 0,
        total_income = 0;
    var union = 0,
        total_union = 0;
    var sick = 0,
        total_sick = 0;
    var fringe = 0,
        total_fringe = 0;
    var other = 0,
        total_other = 0;

    var annuation = 0,
        total_annuation = 0;
    var workorder = 0,
        total_workorder = 0;

    for (i = 1; i <= 13; i++) {
        k = i - 1;

        pension = parseFloat($('[name="person_pension_money"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 52 / 12;
        medicare = parseFloat($('[name="person_medicare_money"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 52 / 12;
        retirement = parseFloat($('[name="person_retire_money"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 52 / 12;
        income = parseFloat($('[name="person_tax_money"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 52 / 12;
        union = parseFloat($('[name="person_union_money"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 52 / 12;

        sick = parseFloat($('[name="person_sick_money"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 52 / 12;

        fringe = parseFloat($('[name="person_fringe_money"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 52 / 12;

        other = parseFloat($('[name="person_deductions_money"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '').replace(/-/g, '')) * 52 / 12;

        annuation = parseFloat($('[name="person_superannuation_money"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 52 / 12;

        workorder = parseFloat($('[name="person_workcover_money"]').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 52 / 12;

        tot_deduction = 0;
        net_salary = 0;
        total = 0;
        total_payroll_liability = 0;

        if (i == "1") {

            $('#pension_' + i).html(cur + number_format(pension, 0, '.', ','));
            $('#medicare_' + i).html(cur + number_format(medicare, 0, '.', ','));
            $('#retirement_' + i).html(cur + number_format(retirement, 0, '.', ','));
            $('#income_' + i).html(cur + number_format(income, 0, '.', ','));
            $('#union_' + i).html(cur + number_format(union, 0, '.', ','));
            $('#sick_' + i).html(cur + number_format(sick, 0, '.', ','));
            $('#fringe_' + i).html(cur + number_format(fringe, 0, '.', ','));
            $('#other_' + i).html(cur + number_format(other, 2, '.', ','));

            $('#super_' + i).html(cur + number_format(annuation, 0, '.', ','));
            $('#work_' + i).html(cur + number_format(workorder, 0, '.', ','));

            total_pension += pension;
            total_medicare += medicare;
            total_retirement += retirement;
            total_income += income;
            total_union += union;
            total_sick += sick;
            total_fringe += fringe;
            total_other += other;

            total_annuation += annuation;
            total_workorder += workorder;

        } else if (i == "13") {
            $('#pension_' + i).html(cur + number_format(total_pension, 0, '.', ','));
            $('#medicare_' + i).html(cur + number_format(total_medicare, 0, '.', ','));
            $('#retirement_' + i).html(cur + number_format(total_retirement, 0, '.', ','));
            $('#income_' + i).html(cur + number_format(total_income, 0, '.', ','));
            $('#union_' + i).html(cur + number_format(total_union, 0, '.', ','));
            $('#sick_' + i).html(cur + number_format(total_sick, 0, '.', ','));
            $('#fringe_' + i).html(cur + number_format(total_fringe, 0, '.', ','));
            $('#other_' + i).html(cur + number_format(total_other, 2, '.', ','));

            $('#super_' + i).html(cur + number_format(total_annuation, 0, '.', ','));
            $('#work_' + i).html(cur + number_format(total_workorder, 0, '.', ','));

        } else {

            $pension_before = parseFloat($('#pension_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
            $medicare_before = parseFloat($('#medicare_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
            $retirement_before = parseFloat($('#retirement_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
            $income_before = parseFloat($('#income_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
            $union_before = parseFloat($('#union_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
            $sick_before = parseFloat($('#sick_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
            $fringe_before = parseFloat($('#fringe_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
            $other_before = parseFloat($('#other_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

            $super_before = parseFloat($('#super_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
            $work_before = parseFloat($('#work_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

            $('#pension_' + i).html(cur + number_format($pension_before, 0, '.', ',').replace(/\$|\€|\₹|\£/g, ''));
            $('#medicare_' + i).html(cur + number_format($medicare_before, 0, '.', ',').replace(/\$|\€|\₹|\£/g, ''));
            $('#retirement_' + i).html(cur + number_format($retirement_before, 0, '.', ',').replace(/\$|\€|\₹|\£/g, ''));
            $('#income_' + i).html(cur + number_format($income_before, 0, '.', ',').replace(/\$|\€|\₹|\£/g, ''));
            $('#union_' + i).html(cur + number_format($union_before, 0, '.', ',').replace(/\$|\€|\₹|\£/g, ''));
            $('#sick_' + i).html(cur + number_format($sick_before, 0, '.', ',').replace(/\$|\€|\₹|\£/g, ''));
            $('#fringe_' + i).html(cur + number_format($fringe_before, 0, '.', ',').replace(/\$|\€|\₹|\£/g, ''));
            $('#other_' + i).html(cur + number_format($other_before, 2, '.', ',').replace(/\$|\€|\₹|\£/g, ''));

            $('#super_' + i).html(cur + number_format($super_before, 0, '.', ',').replace(/\$|\€|\₹|\£/g, ''));
            $('#work_' + i).html(cur + number_format($work_before, 0, '.', ',').replace(/\$|\€|\₹|\£/g, ''));

            total_pension += $pension_before;
            total_medicare += $medicare_before;
            total_retirement += $retirement_before;
            total_income += $income_before;
            total_union += $union_before;
            total_sick += $sick_before;
            total_fringe += $fringe_before;
            total_other += $other_before;

            total_annuation += $super_before;
            total_workorder += $work_before;

        }

        tot_deduction = parseFloat($('#pension_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#medicare_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#retirement_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#income_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#union_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#sick_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#fringe_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#other_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))

        net_salary = parseFloat($('#row_tot_renumeration_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) - tot_deduction;

        total = parseFloat($('#super_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#work_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

        total_payroll_liability = parseFloat($('#row_tot_renumeration_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + total;

        $('#total_deductions_' + i).html(cur + number_format(tot_deduction, 0, '.', ','));

        $('#net_salary_' + i).html(cur + number_format(net_salary, 0, '.', ','));

        $('#total_annuation_work_' + i).html(cur + number_format(total, 0, '.', ','));

        $('#total_payroll_liability_' + i).html(cur + number_format(total_payroll_liability, 0, '.', ','));

    }
}


function add_person() {
    // var isVisible = document.getElementById("people_form").style.display == "block";
    // if (isVisible)
    //       $("#people_form").hide();
    // else
    //       $("#people_form").show();

    // $("label.error").remove();
    $('#personform :input').each(function (index) {
        if ($(this).attr('type') == "text" || $(this).attr('type') == "number") {
            if ($(this).val() != '' && $(this).parent('div').hasClass('is-empty')) {
                $(this).parent('div').removeClass('is-empty');
            } else {
                $(this).parent('div').addClass('is-empty');
            }
        }

    });
    $('#people_modal').modal('show');
    $("#results").html('');
    $("a[href='#people-1']").trigger('click');
    // var listtext = $("a[href='#people-1']").text();
    // var tabtext = $('.moving-tab').text();
    // if (tabtext != listtext){
    //     $('.moving-tab').text('');
    //     $('.moving-tab').text(listtext);
    // }
    save_method = 'add';
    // $('#personform')[0].reset(); // reset form on modals
    clearForm();

    $('#personflnFile').prop('disabled', false);
    $("#personflnFile").fileinput('refresh', {
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
        defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + site_url + 'assets/img/avatars/avatar.png" alt="Person Picture" width="80px" height="80px">',
        layoutTemplates: {
            main2: '{preview}  {remove} {browse} '
        },
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
}

function cancel() {
    $('#modalConfirmYesNo').zIndex(9999);
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure wanted to cancel this person?");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        clearForm();
        $("#people_modal").modal('hide');
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
    });

}

function saveperson() {
    $('#btnSavePerson').text('saving...'); // change button text
    $('#btnSavePerson').attr('disabled', true); // set button disable
    var url;

    if ($('[name="status"]').val() == "update") {
        url = site_url + "people/ajax-updateperson";
    } else {
        url = site_url + "people/ajax-addperson";
    }

    if ($('#personflnFile').val() == "" && $('#imgfile').attr('src') == site_url + "assets/img/avatars/avatar.png" && $('[name="person_quantity"]').val() == 1) {
        $('#modalConfirmYesNo').css("z-index", "9999");
        $('#modalConfirmYesNo').modal('show');


        $("#lblTitleConfirmYesNo").html("User Confirmation");
        $("#lblMsgConfirmYesNo").html("<div class='col-sm-3'>" + "<img id='imgfile' class='rounded-circle' src='" + site_url + "assets/img/avatars/avatar.png' alt='Peraon Picture' width='80px' height='80px'>" + "</div>" + "<div class='col-sm-9'>" + "If you want to add image <strong>Click on folder icon <i class='fa fa-folder-o'></i>, then select an image <i class='fa fa-file-image-o'></i>.</strong><br/>Do you want to add image now ??" + "</div>");

        $("#btnNoConfirmYesNo").off('click').click(function () { // ajax adding data to database
            $.ajax({
                url: url,
                type: "POST",
                data: new FormData($('#personform')[0]),
                contentType: false,
                cache: false,
                processData: false,
                success: function (data) { // $('#personmodal_form').modal('hide');

                    var obj = jQuery.parseJSON(data);
                    $('#people_modal').modal('hide');
                    $('#personmodal_form').modal('hide');
                    if (obj['status']) { // if success close modal and reload ajax table

                        if (save_method == 'add') {
                            var msg = "People added successfully, <br/> Do you want to add more people ???"
                        } else {
                            var msg = "People edited successfully !!! <br/> Do you want to add more people ???"
                        }
                        $('#modalConfirmYesNo').css("z-index", "9999");
                        $('#modalConfirmYesNo').modal('show');

                        $("#lblTitleConfirmYesNo").html("");
                        $("#lblMsgConfirmYesNo").html("<div class='checkmark'>" + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" + "</svg>" + "</div>" + "<p class='alert-box'>" + msg + "</p>");

                        $("#btnYesConfirmYesNo").off('click').click(function () {

                            // var isVisible = document.getElementById("people_form").style.display == "block";
                            // if (!isVisible) {
                            //     $("#people_form").show();
                            // }
                            $('#people_step1').trigger('click');
                            $('#personform')[0].reset();

                            $('#people_modal').modal('show');
                            $("label.error").remove();
                            save_method = 'add';
                            // $('#personform')[0].reset(); // reset form on modals
                            clearForm();
                            $('.form-group').removeClass('has-error'); // clear error class
                            $('.help-block').empty();
                            // clear error string
                            /*$('#personmodal_form').modal('show'); // show bootstrap modal
                          $('#personmodal_form').on('shown.bs.modal', function() {
                              $('.nav a[href="#form1"]').tab('show');
                          })
                          $('.modal-title').text('Add People'); // Set Title to Bootstrap modal title
                          $('[name="person_quantity"]').val("1");*/
                            drawCollectionView();

                            $("#personflnFile").fileinput('refresh', {
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
                                defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + site_url + 'assets/img/avatars/avatar.png" alt="Person Picture" width="80px" height="80px">',
                                layoutTemplates: {
                                    main2: '{preview}  {remove} {browse} '
                                },
                                allowedFileExtensions: ["jpg", "png", "gif"]
                            });

                            selectPanel(0);

                            $('#modalConfirmYesNo').modal('hide');
                        });

                        $("#btnYesConfirmYesNo").off('click').click(function () {
                            // add people function if click on yes
                            if ($("#personDashboard").val() == 1) {
                                add_person();
                                $('#modalConfirmYesNo').modal('hide');
                            } else {
                                drawCollectionView();
                                table1.ajax.reload(null, false);

                                add_person();
                                $('#modalConfirmYesNo').modal('hide');
                            }


                        });

                        $("#btnNoConfirmYesNo").off('click').click(function () {
                            if ($("#personDashboard").val() == 1) {
                                $("#people_modal").modal('hide');
                                $('#modalConfirmYesNo').modal('hide');
                            } else {
                                $("#people_modal").modal('hide');
                                drawCollectionView()
                                table1.ajax.reload(null, false);

                                $('#modalConfirmYesNo').modal('hide');
                            }
                            /*$('#personmodal_form').modal('hide');*/
                            // $('#btnCloseForm').click();
                            $("#people_modal").modal('hide');
                            drawCollectionView()
                            table1.ajax.reload(null, false);

                            $('#modalConfirmYesNo').modal('hide');
                        });

                    }

                    $('.nav a[href="#form1"]').tab('show');
                    $('#btnSavePerson').text('save'); // change button text
                    $('#btnSavePerson').attr('disabled', false); // set button enable
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Error adding / update data');
                    $('#btnSavePerson').text('save'); // change button text
                    $('#btnSavePerson').attr('disabled', false); // set button enable

                }
            });
        });
        $("#btnYesConfirmYesNo").off('click').click(function () {

            $('.nav a[href="#form1"]').tab('show');

            $('#personflnFile').trigger('click');

            $('#btnSavePerson').text('save'); // change button text
            $('#btnSavePerson').attr('disabled', false); // set button enable
            $('#modalConfirmYesNo').modal('hide');
        });
    } else {

        $.ajax({
            url: url,
            type: "POST",
            data: new FormData($('#personform')[0]),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                var obj = jQuery.parseJSON(data);
                $('#people_modal').modal('hide');
                $('#personmodal_form').modal('hide');

                if (obj['status']) { // if success close modal and reload ajax table

                    if (save_method == 'add') {
                        var msg = "People added successfully, <br/> Do you want to add more people ???"
                    } else {
                        var msg = "People edited successfully !!! <br/> Do you want to add more people ???"
                    }

                    $('#modalConfirmYesNo').modal('show');

                    $("#lblTitleConfirmYesNo").html("");
                    $("#lblMsgConfirmYesNo").html("<div class='checkmark'>" + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" + "</svg>" + "</div>" + "<p class='alert-box'>" + msg + "</p>");

                    $("#btnYesConfirmYesNo").off('click').click(function () {

                        $("label.error").remove();
                        save_method = 'add';
                        // $('#personform')[0].reset(); // reset form on modals
                        var isVisible = document.getElementById("people_form").style.display == "block";
                        if (!isVisible) {
                            $("#people_form").show();
                        }
                        clearForm();
                        $('.form-group').removeClass('has-error'); // clear error class
                        $('.help-block').empty(); // clear error string
                        $('#personmodal_form').modal('show'); // show bootstrap modal
                        $('#personmodal_form').on('shown.bs.modal', function () {
                            $('.nav a[href="#form1"]').tab('show');
                        })
                        $('.modal-title').text('Add People');
                        // Set Title to Bootstrap modal title
                        // $('[name="person_quantity"]').val("1");
                        drawCollectionView();

                        $("#personflnFile").fileinput('refresh', {
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
                            defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + site_url + 'assets/img/avatars/avatar.png" alt="Person Picture" width="80px" height="80px">',
                            layoutTemplates: {
                                main2: '{preview}  {remove} {browse} '
                            },
                            allowedFileExtensions: ["jpg", "png", "gif"]
                        });

                        selectPanel(0);

                        $('#modalConfirmYesNo').modal('hide');
                    });

                    $("#btnYesConfirmYesNo").off('click').click(function () { // add people function if click on yes
                        if ($("#personDashboard").val() == 1) {
                            clearForm();
                            table1.ajax.reload(null, false);
                            add_person();
                            $('#modalConfirmYesNo').modal('hide');
                        } else {
                            clearForm();
                            drawCollectionView();
                            table1.ajax.reload(null, false);
                            add_person();
                            $('#modalConfirmYesNo').modal('hide');
                        }


                    });

                    $("#btnNoConfirmYesNo").off('click').click(function () { // $('#personmodal_form').modal('hide');
                        if ($("#personDashboard").val() == 1) {
                            $("#people_form").hide();
                            table1.ajax.reload(null, false);
                            $('#modalConfirmYesNo').modal('hide');
                        } else {
                            $("#people_form").hide();
                            drawCollectionView()
                            table1.ajax.reload(null, false);
                            $('#modalConfirmYesNo').modal('hide');
                        }
                    });

                }

                $('.nav a[href="#form1"]').tab('show');

                $('#btnSavePerson').text('save'); // change button text
                $('#btnSavePerson').attr('disabled', false); // set button enable
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error adding / update data');
                $('#btnSavePerson').text('save'); // change button text
                $('#btnSavePerson').attr('disabled', false); // set button enable

            }
        });

    }
}

function delete_confirmation(id) { /*if (confirm("Do you want insert Bill of Materials ??") == true) {

        $('.nav a[href="#add_menu1"]').tab('show');
    }else{

        $('#markup_on_cost').focus();
    }*/
    $('#modalConfirmYesNo').modal('show');

    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure you want to fire this person ??");

    $("#btnYesConfirmYesNo").off('click').click(function () {

        delete_people(id)

        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {


        $('#modalConfirmYesNo').modal('hide');
    });


}

function delete_people(id) {

    // if (confirm('Are you sure delete this data?')){
    // ajax delete data to database
    $.ajax({
        url: site_url + "people/ajax-delete/" + id,
        type: "POST",
        dataType: "JSON",
        success: function (data) { // if success reload ajax table
            $('#modal_form').modal('hide');
            drawCollectionView();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);

        }
    });

    // }
}

function clearForm() {

    var $inputs = $('#personform :input');

    $inputs.each(function () {

        if ($(this).attr('type') == "text" || $(this).attr('type') == "number") {

            $(this).val("");

        }
    })

    $.ajax({
        url: site_url + "people/ajax-load_bracket",
        type: "POST",
        dataType: 'json',
        encode: true,
        success: function (data) {

            if (data.number_record <= 0) {

                if (data.country == "Australia") {

                    $counter = 4;

                    for (i = 0; i <= $counter; i++) {
                        if (i == 0) {
                            $('[name="tax_bracket_val_' + i + '"]').val(number_format(18200, 0, '.', ','));
                            $('[name="tax_rate_' + i + '"]').val(number_format(0, 1, '.', ',') + ' %');
                        } else if (i == 1) {
                            $('[name="tax_bracket_val_' + i + '"]').val(number_format(37000, 0, '.', ','));
                            $('[name="tax_rate_' + i + '"]').val(number_format(19, 1, '.', ',') + ' %');
                        } else if (i == 2) {
                            $('[name="tax_bracket_val_' + i + '"]').val(number_format(80000, 0, '.', ','));
                            $('[name="tax_rate_' + i + '"]').val(number_format(32.5, 1, '.', ',') + ' %');
                        } else if (i == 3) {
                            $('[name="tax_bracket_val_' + i + '"]').val(number_format(180000, 0, '.', ','));
                            $('[name="tax_rate_' + i + '"]').val(number_format(37, 1, '.', ',') + ' %');
                        } else {
                            $('[name="tax_bracket_val_' + i + '"]').val(number_format(180001, 0, '.', ','));
                            $('[name="tax_rate_' + i + '"]').val(number_format(45, 1, '.', ',') + ' %');
                        }
                    }

                } else {

                    $counter = 3;

                    for (i = 0; i <= $counter; i++) {
                        if (i == 0) {
                            $('[name="tax_bracket_val_' + i + '"]').val(number_format(14000, 0, '.', ','));
                            $('[name="tax_rate_' + i + '"]').val(number_format(10.5, 1, '.', ',') + ' %');
                        } else if (i == 1) {
                            $('[name="tax_bracket_val_' + i + '"]').val(number_format(48000, 0, '.', ','));
                            $('[name="tax_rate_' + i + '"]').val(number_format(17.5, 1, '.', ',') + ' %');
                        } else if (i == 2) {
                            $('[name="tax_bracket_val_' + i + '"]').val(number_format(70000, 0, '.', ','));
                            $('[name="tax_rate_' + i + '"]').val(number_format(30.5, 1, '.', ',') + ' %');
                        } else if (i == 3) {
                            $('[name="tax_bracket_val_' + i + '"]').val(number_format(70001, 0, '.', ','));
                            $('[name="tax_rate_' + i + '"]').val(number_format(33, 1, '.', ',') + ' %');
                        }
                    }


                }

            } else {

                if (data.country == "Australia") {

                    $counter = 4;

                    if (data.value_1 == 0 && data.value_2 == 0 && data.value_3 == 0 && data.value_4 == 0 && data.value_5 == 0) {

                        for (i = 0; i <= $counter; i++) {
                            if (i == 0) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(18200, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(0, 1, '.', ',') + ' %');
                            } else if (i == 1) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(37000, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(19, 1, '.', ',') + ' %');
                            } else if (i == 2) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(80000, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(32.5, 1, '.', ',') + ' %');
                            } else if (i == 3) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(180000, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(37, 1, '.', ',') + ' %');
                            } else {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(180001, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(45, 1, '.', ',') + ' %');
                            }
                        }

                    } else {

                        for (i = 0; i <= $counter; i++) {
                            if (i == 0) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(data.value_1, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(data.rate_1, 1, '.', ',') + ' %');
                            } else if (i == 1) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(data.value_2, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(data.rate_2, 1, '.', ',') + ' %');
                            } else if (i == 2) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(data.value_3, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(data.rate_3, 1, '.', ',') + ' %');
                            } else if (i == 3) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(data.value_4, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(data.rate_4, 1, '.', ',') + ' %');
                            } else {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(data.value_5, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(data.rate_5, 1, '.', ',') + ' %');
                            }
                        }
                    }
                } else {
                    $counter = 3;

                    if (data.value_1 == 0 && data.value_2 == 0 && data.value_3 == 0 && data.value_4 == 0) {

                        for (i = 0; i <= $counter; i++) {
                            if (i == 0) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(14000, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(10.5, 1, '.', ',') + ' %');
                            } else if (i == 1) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(48000, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(17.5, 1, '.', ',') + ' %');
                            } else if (i == 2) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(70000, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(30.5, 1, '.', ',') + ' %');
                            } else if (i == 3) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(70001, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(33, 1, '.', ',') + ' %');
                            }
                        }

                    } else {

                        for (i = 0; i <= $counter; i++) {
                            if (i == 0) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(data.value_1, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(data.rate_1, 1, '.', ',') + ' %');
                            } else if (i == 1) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(data.value_2, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(data.rate_2, 1, '.', ',') + ' %');
                            } else if (i == 2) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(data.value_3, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(data.rate_3, 1, '.', ',') + ' %');
                            } else if (i == 3) {
                                $('[name="tax_bracket_val_' + i + '"]').val(number_format(data.value_4, 0, '.', ','));
                                $('[name="tax_rate_' + i + '"]').val(number_format(data.rate_4, 1, '.', ',') + ' %');
                            }
                        }
                    }


                }
            }


        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });

    $('[name="person_gross_salary"]').val("0");
    $('[name="person_tot_gross_salary"]').val("0");

    $('[name="person_subsidi"]').val("0");
    $('[name="person_commission"]').val("0");
    $('[name="person_other"]').val("0");

    $('[name="person_subsidi_money"]').val("0");
    $('[name="person_commission_money"]').val("0");
    $('[name="person_other_money"]').val("0");

    $('#personflnFile').val('');
    $('#imgfile').attr("src", site_url + "assets/img/avatars/avatar.png");
    //$('#btnSavePerson').html('<i class="fa fa-check-circle-o"></i> Finish');
    btnReset = ""

    for (clearCount = 1; clearCount <= 13; clearCount++) {
        $('#row_gross_salary_' + clearCount).html("0");
        $('#row_subsidi_' + clearCount).html("0");
        $('#row_commision_' + clearCount).html("0");
        $('#row_other_' + clearCount).html("0");
        $('#row_tot_renumeration_' + clearCount).html("0");
        $('#pension_' + clearCount).html("0");
        $('#medicare_' + clearCount).html("0");
        $('#retirement_' + clearCount).html("0");
        $('#income_' + clearCount).html("0");
        $('#union_' + clearCount).html("0");
        $('#sick_' + clearCount).html("0");
        $('#fringe_' + clearCount).html("0");
        $('#other_' + clearCount).html("0");
        $('#total_deductions_' + clearCount).html("0");
        $('#net_salary_' + clearCount).html("0");
        $('#super_' + clearCount).html("0");
        $('#work_' + clearCount).html("0");
        $('#total_annuation_work_' + clearCount).html("0");
        $('#total_payroll_liability_' + clearCount).html("0");
    }

    $('#people-4').each(function () {
        $('[name="person_pension"]').val("1.0");
        $('[name="person_medicare"]').val("2.0");
        $('[name="person_retire"]').val("1.0");
        // $('[name="person_tax"]').val("12.0");
        $('[name="person_tax"]').val("0.0");
        $('[name="person_union"]').val("0.5");
        $('[name="person_sick"]').val("1.0");
        $('[name="person_fringe"]').val("1.0");
        // $('[name="person_deductions"]').val("1.0");

        $(this).find('[name*="_money"]').each(function () {
            $(this).val("0");
        });

        $('[name="sub_total_1"]').val("0");
        $('[name="net_salary_form2"]').val("0");

    });

    $('#people-5').each(function () {
        // $('[name="person_superannuation"]').val("0");
        // $('[name="person_workcover"]').val("0");

        $(this).find('[name*="_money"]').each(function () {
            $(this).val("0");
        });

        $('[name="sub_total_2"]').val("0");
        $('[name="total_payroll_form3"]').val("0");

    });


    $('[name="personid"]').val("");
    $('[name="status"]').val("");
    /*$('[name="person_fname"]').val("");
  $('[name="person_lname"]').val("");
  $('[name="person_hour_work"]').val("0");
  $('[name="person_rates"]').val("0");
  $('[name="person_subsidi"]').val("0");
  $('[name="person_commission"]').val("0");
  $('[name="person_other"]').val("0");*/

}

function edit_people(id) {
    $("label.error").remove();
    save_method = 'update';
    // $('#personform')[0].reset(); // reset form on modals
    clearForm();
    $('.form-group').removeClass('has-error'); // clear error class
    $('.help-block').empty();
    // clear error string

    // Ajax Load data from ajax
    $.ajax({
        url: site_url + "people/ajax-edit/" + id,
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            // if (parseFloat(data.quantity) <= 1){

            // $('#f_name').html('First Name');
            // $('#l_name').html('Last Name');
            // $('[name="person_fname"]').prop('placeholder', 'First Name');
            // $('[name="person_lname"]').prop('placeholder', 'Last Name');

            // $('#fName').html('First Name');
            // $('#lName').html('Last Name');

            // $('[name="person_quantity"]').val("1");
            // $('[name="person_quantity"]').prop('readonly', true);

            // }else{

            // $('#f_name').html('Group First Name');
            // $('#l_name').html('Group Last Name');
            // $('[name="person_fname"]').prop('placeholder', 'Group First Name');
            // $('[name="person_lname"]').prop('placeholder', 'Group Last Name');

            // $('#fName').html('Group First Name');
            // $('#lName').html('Group Last Name');

            // $('[name="person_quantity"]').val("");
            // $('[name="person_quantity"]').prop('readonly', false);

            // }
            // selectPanel(0);
            // var isVisible = document.getElementById("people_form").style.display == "block";
            // if (!isVisible) {
            //     $("#people_form").show();
            // }
            $('#people_modal').modal('show');
            $('[name="status"]').val("update");
            $('[name="personid"]').val(data.id);
            $('[name="person_fname"]').val(data.f_name);
            $('[name="person_lname"]').val(data.l_name);
            // $('[name="person_hour_work"]').val(data.hour_worked);
            // $('[name="person_rates"]').val(data.rates);
            $('[name="person_gross_income"]').val(cur + data.gross_income);
            // added by raza
            // $('[name="person_other"]').val(data.other); //added by raza
            // $('[name="person_superannuation"]').val(data.superannuation); //added by raza
            // $('[name="person_workcover"]').val(data.work_cover); //added by raza
            // $('[name="person_quantity"]').val(data.quantity);
            // $('[name="person_gross_salary"]').val(number_format(data.hour_worked * data.rates * data.quantity, 0, '.', ','));

            // $('[name="person_subsidi"]').val(data.subsidies);
            // $('[name="person_subsidi_money"]').val(number_format($('[name="person_gross_salary"]').val().replace(/,/g, '') * (data.subsidies / 100), 0, '.', ','));

            // $('[name="person_commission"]').val(data.commission);
            // $('[name="person_commission_money"]').val(number_format($('[name="person_gross_salary"]').val().replace(/,/g, '') * (data.commission / 100), 0, '.', ','));

            $('[name="person_other"]').val(cur + data.other);
            // $('[name="person_other_money"]').val(number_format($('[name="person_gross_salary"]').val().replace(/,/g, '') * (data.other / 100), 0, '.', ','));

            // $('[name="person_tot_gross_salary"]').val(number_format(parseFloat($('[name="person_subsidi_money"]').val()) + parseFloat($('[name="person_commission_money"]').val()) + parseFloat($('[name="person_other_money"]').val()) + parseFloat($('[name="person_gross_salary"]').val().replace(/,/g, '')), 0, '.', ','));


            // tableCalculation();
            // calculationBracket();

            // $('[name="person_pension"]').val(data.pension);
            // $('[name="person_pension_money"]').val(number_format($('[name="person_tot_gross_salary"]').val().replace(/,/g, '') * (data.pension / 100), 2, '.', ','));

            // $('[name="person_medicare"]').val(data.medicare_levi);
            // $('[name="person_medicare_money"]').val(number_format($('[name="person_tot_gross_salary"]').val().replace(/,/g, '') * (data.medicare_levi / 100), 2, '.', ','));

            // $('[name="person_retire"]').val(data.retirement_annuity);
            // $('[name="person_retire_money"]').val(number_format($('[name="person_tot_gross_salary"]').val().replace(/,/g, '') * (data.retirement_annuity / 100), 2, '.', ','));

            // $('[name="person_tax"]').val(data.income_tax);
            // $('[name="person_tax_money"]').val(number_format($('[name="person_tot_gross_salary"]').val().replace(/,/g, '') * (data.income_tax / 100),2,'.',','));

            // $('[name="person_union"]').val(data.union_fee);
            // $('[name="person_union_money"]').val(number_format($('[name="person_tot_gross_salary"]').val().replace(/,/g, '') * (data.union_fee / 100), 2, '.', ','));

            // $('[name="person_sick"]').val(data.sick_leave);
            // $('[name="person_sick_money"]').val(number_format($('[name="person_tot_gross_salary"]').val().replace(/,/g, '') * (data.sick_leave / 100), 2, '.', ','));

            // $('[name="person_fringe"]').val(data.fringe_benefit);
            // $('[name="person_fringe_money"]').val(number_format($('[name="person_tot_gross_salary"]').val().replace(/,/g, '') * (data.fringe_benefit / 100), 2, '.', ','));

            // $('[name="person_deductions"]').val(data.other_deduction);
            // $('[name="person_deductions_money"]').val(number_format($('[name="person_tot_gross_salary"]').val().replace(/,/g, '') * (data.other_deduction / 100),2,'.',','));
            // checkempty();
            // calculationTotalDeductionI();

            $('[name="person_superannuation"]').val(data.superannuation + '%');
            // $('[name="person_superannuation_money"]').val(number_format($('[name="person_tot_gross_salary"]').val().replace(/,/g, '') * (data.superannuation / 100), 2, '.', ','));

            $('[name="person_workcover"]').val(data.work_cover + '%');
            // $('[name="person_workcover_money"]').val(number_format($('[name="person_tot_gross_salary"]').val().replace(/,/g, '') * (data.work_cover / 100), 2, '.', ','));
            checkempty();
            // calculationTotalAnuationI();

            // tableCalculationII();
            CALC.calculate();
            $('#people_modal').modal('show'); // show bootstrap modal when complete loaded
            $('#people_step1').trigger('click');
            $('input').each(function () {
                var $this = $(this);
                if ($this.val())
                    $this.addClass('used');
                else
                    $this.removeClass('used');



            });

            if (data.thumbnail != "assets/img/avatars/avatar.png") {
                var btnReset = '<button type="button" class="btn btn-flat fileinput-remove fileinput-remove-button" title="Cancel or reset changes" ' + 'onclick="restoreDefault(' + data.id + ')">' + '<i class="fa fa-remove"></i>' + '</button>';
            } else {
                var btnReset = '{remove}';
            }

            $("#personflnFile").fileinput('refresh', {
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
                defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + site_url + data.thumbnail + '" alt="Person Picture" width="80px" height="80px">',
                layoutTemplates: {
                    main2: '{preview}  ' + btnReset + ' {browse} '
                },
                allowedFileExtensions: ["jpg", "png", "gif"]
            });


            $('.modal-title').text('Edit People'); // Set title to Bootstrap modal title

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}

function restoreDefault(id) {
    $('#people_modal').modal('hide');

    $('#modalConfirmYesNo').modal('show');

    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this image ??");

    $("#btnYesConfirmYesNo").off('click').click(function () {
        $.ajax({
            type: 'POST',
            url: 'people/restoreDefault/' + id,
            success: function () {
                $('#modalConfirmYesNo').modal('hide');
                drawCollectionView();
                table1.ajax.reload(null, false);
                edit_people(id);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                showResultFailed(jqXHR.responseText);
                hideWaitingFail();
            }
        })


    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
        edit_people(id);
    });
}


/*$(function() {
       function reposition() {
       var modal = $(this),
       dialog = modal.find('.modal-dialog');
       modal.css('display', 'block');

       // Dividing by two centers the modal exactly, but dividing by three
       // or four works better for larger screens.
       dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
       }
       // Reposition when a modal is shown
       $('.modal').on('show.bs.modal', reposition);
       // Reposition when the window is resized
       $(window).on('resize', function() {
                    $('.modal:visible').each(reposition);
                    });
       });

*/


$(document).ready(function () {

    $('.next').click(function () {

        var nextId = $(this).parents('.tab-pane').next().attr("id");
        $('[href=#' + nextId + ']').tab('show');
        return false;

    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) { // update progress
        var step = $(e.target).data('step');
        var percent = (parseInt(step) / 3) * 100;

        $('.progress-bar').css({
            width: percent + '%'
        });
        $('.progress-bar').text("Step " + step + " of 3");

        // e.relatedTarget // previous tab

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

    $(wizard).append('<div class="footer"><button id="btnFormPrev" class="btn btn" type="button">Prev</button><button id="btnFormNext" class="btn btn" type="button">Next</button></div>');

    $(wizard).find("#btnFormPrev").click(function () {
        selectPanel($(".wizardProgress .selected").index() - 1);
    });
    $(wizard).find("#btnFormNext").click(function () {

        if ($(".wizardProgress .selected").index() == 0) {

            if ($('#person_quantity').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert person quantity ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('#person_quantity').focus()

                    $('#modalConfirmYes').modal('hide');

                    // $('.btn-next').trigger("click");

                });
                return false;
            } else if ($('#person_fname').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert person first name ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('#person_fname').focus()

                    $('#modalConfirmYes').modal('hide');

                    // $('.btn-next').trigger("click");

                });
                return false;
            } else if ($('#person_lname').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert person last name ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('#person_lname').focus()

                    $('#modalConfirmYes').modal('hide');

                    // $('.btn-next').trigger("click");

                });
                return false;
            } else {

                selectPanel($(".wizardProgress .selected").index() + 1);

                return false;
            }

        }

        if ($(".wizardProgress .selected").index() == 1) {

            if ($('#person_hour_work').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert person hour work ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('#person_hour_work').focus()

                    $('#modalConfirmYes').modal('hide');

                    // $('.btn-next').trigger("click");

                });
                return false;
            } else if ($('#person_rates').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert person rate ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('#person_rates').focus()

                    $('#modalConfirmYes').modal('hide');

                    // $('.btn-next').trigger("click");

                });
                return false;
            } else if ($('#person_subsidi').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert person subsidies ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('#person_subsidi').focus()

                    $('#modalConfirmYes').modal('hide');

                    // $('.btn-next').trigger("click");

                });
                return false;
            } else if ($('#person_commission').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert person commision ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('#person_commission').focus()

                    $('#modalConfirmYes').modal('hide');

                    // $('.btn-next').trigger("click");

                });
                return false;
            } else if ($('#person_other').val() == "") {

                $('#modalConfirmYes').modal('show');

                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert person other ??");

                $("#btnYesConfirmYes").off('click').click(function () {

                    $('#person_other').focus()

                    $('#modalConfirmYes').modal('hide');

                    // $('.btn-next').trigger("click");

                });
                return false;
            } else {

                selectPanel($(".wizardProgress .selected").index() + 1);
                return false;
            }

        }
        if ($(".wizardProgress .selected").index() == 2) {
            selectPanel($(".wizardProgress .selected").index() + 1);
            return false;
        }
        if ($(".wizardProgress .selected").index() == 3) {

            selectPanel($(".wizardProgress .selected").index() + 1);
            return false;
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

    $(wizard_1).append('<div class="footer"><button id="btnPrev" class="btn btn">Prev</button><button id="btnNext" class="btn btn">Next</button></div>');

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
            url: site_url + "people/ajax-calculating_summary",
            type: "GET",
            dataType: "JSON",
            success: function (data) {

                var tot_summary_gross = 0;
                var tot_subsidies_recieved = 0;
                var tot_commission_recieved = 0;
                var tot_other_recieved = 0;
                var tot_summary_pension = 0;
                var tot_summary_pension = 0;
                var tot_summary_medicare = 0;
                var tot_summary_retirement = 0;
                var tot_summary_income = 0;
                var tot_summary_union = 0;
                var tot_summary_sick = 0;
                var tot_summary_fringe = 0;
                var tot_summary_other = 0;

                var tot_summary_super = 0;
                var tot_summary_work = 0;

                for (i = 1; i <= 13; i++) {
                    k = i - 1;

                    tot_summary_renumeration = 0;
                    tot_summary_deduction = 0;
                    summary_net_salary = 0;

                    if (i == "1") {

                        $('#row_summary_gross_salary_' + i).html(cur + number_format(data.gross_salary, 0, '.', ','));
                        $('#row_summary_subsidi_' + i).html(cur + number_format(data.subsidies_recieved, 0, '.', ','));
                        $('#row_summary_commision_' + i).html(cur + number_format(data.commission_recieved, 0, '.', ','));
                        $('#row_summary_other_' + i).html(cur + number_format(data.other_recieved, 0, '.', ','));

                        $('#summary_pension_' + i).html(cur + number_format(data.pension, 0, '.', ','));
                        $('#summary_medicare_' + i).html(cur + number_format(data.medicare, 0, '.', ','));
                        $('#summary_retirement_' + i).html(cur + number_format(data.retirement, 0, '.', ','));
                        $('#summary_income_' + i).html(cur + number_format(data.income, 0, '.', ','));
                        $('#summary_union_' + i).html(cur + number_format(data.union, 0, '.', ','));
                        $('#summary_sick_' + i).html(cur + number_format(data.sick, 0, '.', ','));
                        $('#summary_fringe_' + i).html(cur + number_format(data.fringe, 0, '.', ','));
                        $('#summary_other_' + i).html(cur + number_format(data.other, 2, '.', ','));

                        $('#summary_super_' + i).html(cur + number_format(data.super, 0, '.', ','));
                        $('#summary_work_' + i).html(cur + number_format(data.work, 0, '.', ','));

                        tot_summary_gross += data.gross_salary;
                        tot_subsidies_recieved += data.subsidies_recieved;
                        tot_commission_recieved += data.commission_recieved;
                        tot_other_recieved += data.other_recieved;

                        tot_summary_pension += data.pension;
                        tot_summary_medicare += data.medicare;
                        tot_summary_retirement += data.retirement;
                        tot_summary_income += data.income;
                        tot_summary_union += data.union;
                        tot_summary_sick += data.sick;
                        tot_summary_fringe += data.fringe;
                        tot_summary_other += data.other;

                        tot_summary_super += data.super;
                        tot_summary_work += data.work;

                    } else if (i == "13") {

                        $('#row_summary_gross_salary_' + i).html(cur + number_format(tot_summary_gross, 0, '.', ','));
                        $('#row_summary_subsidi_' + i).html(cur + number_format(tot_subsidies_recieved, 0, '.', ','));
                        $('#row_summary_commision_' + i).html(cur + number_format(tot_commission_recieved, 0, '.', ','));
                        $('#row_summary_other_' + i).html(cur + number_format(tot_other_recieved, 0, '.', ','));

                        $('#summary_pension_' + i).html(cur + number_format(tot_summary_pension, 0, '.', ','));
                        $('#summary_medicare_' + i).html(cur + number_format(tot_summary_medicare, 0, '.', ','));
                        $('#summary_retirement_' + i).html(cur + number_format(tot_summary_retirement, 0, '.', ','));
                        $('#summary_income_' + i).html(cur + number_format(tot_summary_income, 0, '.', ','));
                        $('#summary_union_' + i).html(cur + number_format(tot_summary_union, 0, '.', ','));
                        $('#summary_sick_' + i).html(cur + number_format(tot_summary_sick, 0, '.', ','));
                        $('#summary_fringe_' + i).html(cur + number_format(tot_summary_fringe, 0, '.', ','));
                        $('#summary_other_' + i).html(cur + number_format(tot_summary_other, 2, '.', ','));

                        $('#summary_super_' + i).html(cur + number_format(tot_summary_super, 0, '.', ','));
                        $('#summary_work_' + i).html(cur + number_format(tot_summary_work, 0, '.', ','));

                        $('#total_superannuation_year1').html(cur + number_format(tot_summary_super, 0, '.', ','));
                        $('#total_workcover_year1').html(cur + number_format(tot_summary_work, 0, '.', ','));


                    } else {

                        $row_summary_gross_before = parseFloat($('#row_summary_gross_salary_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                        $row_summary_subsidi_before = parseFloat($('#row_summary_subsidi_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                        $row_summary_commision_before = parseFloat($('#row_summary_commision_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                        $row_summary_other_before = parseFloat($('#row_summary_other_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

                        $summary_pension_before = parseFloat($('#summary_pension_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                        $summary_medicare_before = parseFloat($('#summary_medicare_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                        $summary_retirement_before = parseFloat($('#summary_retirement_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                        $summary_income_before = parseFloat($('#summary_income_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                        $summary_union_before = parseFloat($('#summary_union_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                        $summary_sick_before = parseFloat($('#summary_sick_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                        $summary_fringe_before = parseFloat($('#summary_fringe_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                        $summary_other_before = parseFloat($('#summary_other_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

                        $summary_super_before = parseFloat($('#summary_super_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
                        $summary_work_before = parseFloat($('#summary_work_' + k).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));


                        $('#row_summary_gross_salary_' + i).html(cur + number_format($row_summary_gross_before, 0, '.', ','))
                        $('#row_summary_subsidi_' + i).html(cur + number_format($row_summary_subsidi_before, 0, '.', ','));
                        $('#row_summary_commision_' + i).html(cur + number_format($row_summary_commision_before, 0, '.', ','));
                        $('#row_summary_other_' + i).html(cur + number_format($row_summary_other_before, 0, '.', ','));

                        $('#summary_pension_' + i).html(cur + number_format($summary_pension_before, 0, '.', ','));
                        $('#summary_medicare_' + i).html(cur + number_format($summary_medicare_before, 0, '.', ','));
                        $('#summary_retirement_' + i).html(cur + number_format($summary_retirement_before, 0, '.', ','));
                        $('#summary_income_' + i).html(cur + number_format($summary_income_before, 0, '.', ','));
                        $('#summary_union_' + i).html(cur + number_format($summary_union_before, 0, '.', ','));
                        $('#summary_sick_' + i).html(cur + number_format($summary_sick_before, 0, '.', ','));
                        $('#summary_fringe_' + i).html(cur + number_format($summary_fringe_before, 0, '.', ','));
                        $('#summary_other_' + i).html(cur + number_format($summary_other_before, 2, '.', ','));

                        $('#summary_super_' + i).html(cur + number_format($summary_super_before, 0, '.', ','));
                        $('#summary_work_' + i).html(cur + number_format($summary_work_before, 0, '.', ','));


                        tot_summary_gross += $row_summary_gross_before;
                        tot_subsidies_recieved += $row_summary_subsidi_before;
                        tot_commission_recieved += $row_summary_commision_before;
                        tot_other_recieved += $row_summary_other_before;

                        tot_summary_pension += $summary_pension_before;
                        tot_summary_medicare += $summary_medicare_before;
                        tot_summary_retirement += $summary_retirement_before;
                        tot_summary_income += $summary_income_before;
                        tot_summary_union += $summary_union_before;
                        tot_summary_sick += $summary_sick_before;
                        tot_summary_fringe += $summary_fringe_before;
                        tot_summary_other += $summary_other_before;

                        tot_summary_super += $summary_super_before;
                        tot_summary_work += $summary_work_before;

                    }

                    tot_summary_renumeration = parseFloat($('#row_summary_gross_salary_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#row_summary_subsidi_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#row_summary_commision_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#row_summary_other_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

                    tot_summary_deduction = parseFloat($('#summary_pension_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_medicare_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_retirement_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_income_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_union_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_sick_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_fringe_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) - parseFloat($('#summary_other_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))

                    $('#row_summary_tot_renumeration_' + i).html(cur + number_format(tot_summary_renumeration, 0, '.', ','));

                    summary_net_salary = parseFloat($('#row_summary_tot_renumeration_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) - tot_summary_deduction;

                    summary_total = parseFloat($('#summary_super_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#summary_work_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

                    summary_total_payroll_liability = parseFloat($('#row_summary_tot_renumeration_' + i).html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + summary_total;

                    $('#total_summary_deductions_' + i).html(cur + number_format(tot_summary_deduction, 0, '.', ','));

                    $('#summary_net_salary_' + i).html(cur + number_format(summary_net_salary, 0, '.', ','));

                    $('#summary_total_annuation_work_' + i).html(cur + number_format(summary_total, 0, '.', ','));

                    $('#summary_total_payroll_liability_' + i).html(cur + number_format(summary_total_payroll_liability, 0, '.', ','));

                    $('#total_renumeration_year1').html(cur + number_format(tot_summary_renumeration, 0, '.', ','));
                    $('#total_deductions_year1').html(cur + number_format(tot_summary_deduction, 0, '.', ','));


                }

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

$('#people_modal').on('hidden.bs.modal', function () {
    $("a[href='#people-1']").trigger('click');
});

this.$slideOut = $('#slideOut');
// Slideout show
this.$slideOut.find('.slideOutTab').on('click', function () {
    $("#slideOut").toggleClass('showSlideOut');
})



this.$slideOut = $('#slideOut');
// Slideout show
this.$slideOut.find('.slideOutTab').on('click', function () {
    $("#slideOut").toggleClass('showSlideOut');
});

