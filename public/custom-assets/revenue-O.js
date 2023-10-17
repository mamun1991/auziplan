

        // $('input[type="text"]').focus(function () {
        //     var focusvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        //     if ($(this).hasClass('currencyFormat')) {
        //         $(this).val(focusvalue);
        //     } else if ($(this).hasClass('percentFormat')) {
        //         $(this).val(focusvalue);
        //     } else if ($(this).hasClass('numberFormat')) {
        //         $(this).val(focusvalue);
        //     } else {

        //     }
        // });

        // $('input[type="text"]').focusout(function () {
        //     var focusoutvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        //     if ($(this).hasClass('currencySign')) {
        //         $(this).val(cur + '' + number_format(parseFloat(focusoutvalue), 2, '.', ','));
        //     } else if ($(this).hasClass('percentFormat')) {
        //         $(this).val(parseFloat(focusoutvalue) + '%');
        //     } else if ($(this).hasClass('numberFormat')) {
        //         $(this).val(number_format(parseFloat(focusoutvalue), 2, '.', ','));
        //     } else {

        //     }

        // });

        function calculations(){
            console.log('jhjh');
        }


    $(document).ready(function() {

        
        var i = 1;

        $("#add_row_manually_sale").click(function() {
            var numTr = $("#tab_logic tbody tr").length;
            $('#tab_logic').append("<tr id='addr" + (numTr) + "'><input type='hidden' name='sale_id_" + numTr + "' value=''>\n\
                <td><input name='region" + numTr + "' type='text' placeholder='Region' class='form-control'/> </td>\n\
                <td><input  name='jul" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='aug" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='sep" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='oct" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='nov" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='dec" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='jan" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='feb" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='mar" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='apr" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='may" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='jun" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td id='total_manual_sales" + numTr + "'></td><input type='hidden' name='total_sale_" + numTr + "' value=''></tr>");


        });

        $("#delete_row_manually_sale").click(function() {
            var notr = $("#tab_logic tbody tr").length
            if (notr > 1) {
                $("#addr" + (notr - 1)).remove();
            }
            updateSalesProjections();
        });


        $("#show_data").click(function() {
            var htmlString = "";
            $("#tab_logic tbody tr").each(function(index, el) {
                if (index < $("#tab_logic tbody tr").length) {
                    var region = $("[name='region" + index + "']").val();
                    var jul = $("[name='jul" + index + "']").val();
                    var aug = $("[name='aug" + index + "']").val();
                    var sep = $("[name='sep" + index + "']").val();
                    var oct = $("[name='oct" + index + "']").val();
                    var nov = $("[name='nov" + index + "']").val();
                    var dec = $("[name='dec" + index + "']").val();
                    var jan = $("[name='jan" + index + "']").val();
                    var feb = $("[name='feb" + index + "']").val();
                    var mar = $("[name='mar" + index + "']").val();
                    var apr = $("[name='apr" + index + "']").val();
                    var may = $("[name='may" + index + "']").val();
                    var jun = $("[name='jun" + index + "']").val();


                    console.log("Row " + index + " : [Region=" + region + "] - \n\
                        [Jul=" + jul + "] - \n\
                        [Aug=" + aug + "] - \n\
                        [Sep=" + sep + "] - \n\
                        [Oct=" + oct + "] - \n\
                        [Nov=" + nov + "] - \n\
                        [Dec=" + dec + "] - \n\
                        [Feb=" + feb + "] - \n\
                        [Mar=" + mar + "] - \n\
                        [Apr=" + apr + "] - \n\
                        [May=" + may + "] - \n\
                        [Jun=" + jun + "] ");
                    htmlString += showDataHtml(index, region, jul, aug, sep, oct, nov, dec, jan, feb, mar, apr, may, jun);
                }
                $("#data-row").html(htmlString);
            });
        });
    });

    function showDataHtml(index, region, jul, aug, sep, oct, nov, dec, jan, feb, mar, apr, may, jun) {
        index++;
        return "<div class='col-md-12'>Row " + index + " : \n\
            Region = " + region + " - \n\
            Jul = " + jul + " - \n\
            Aug = " + aug + " - \n\
            Sep = " + sep + " - \n\
            Oct = " + oct + " - \n\
            Nov = " + nov + " - \n\
            Dec = " + dec + " - \n\
            Jan = " + jan + " - \n\
            Feb = " + feb + " - \n\
            mar = " + mar + " - \n\
            Apr = " + apr + " - \n\
            May = " + may + " - \n\
            Jun = " + jun + " - \n\
            </div>"
            }

    function monthlySalesType(val) {
        if (val == "manual") {
            $("#collapseZero").addClass('show');
            $("#monthlytable_qty").val(0);
            $("#monthlytable_qty").attr("readonly", true);
            $('#table_projected_sales tbody').find('#purchases td input').each(function() {
                if ($(this).prop('readonly', true)) {
                    $(this).prop('readonly', false);
                }
            })
            $('#add_row_manually_sale').removeClass('disabled');
            $('#delete_row_manually_sale').removeClass('disabled');
        } else {
            $("#collapseZero").removeClass('show');
            $("#monthlytable_qty").attr("readonly", false);
            $('#tab_logic tbody').find('td input').each(function() {
                $(this).val('');
            });
            $('#table_projected_sales tbody').find('#purchases td input').each(function() {
                if ($(this).prop('readonly', false)) {
                    $(this).prop('readonly', true);
                }
            })
            $('#add_row_manually_sale').addClass('disabled');
            $('#delete_row_manually_sale').addClass('disabled');

            TableCalculation();
        }
        //    Clear Opening And closing Fields value
        $('#table_projected_sales tbody').find('td input').each(function() {
            $(this).val(0)
        })
        $("#tab_logic > thead").find("#action_sale_title").remove();
        //    Remove Extra Row On Change Of Sale Status
        var noTr = $("#tab_logic tbody tr").length - 1;
        for (var i = 0; i <= noTr; ++i) {
            if (i > 0) {
                $("#addr" + (i)).remove();
            }
            $("#td_action_sale" + (i)).remove();

        }
        updateSalesProjections();
    }


    //    Update Sales
    function updateSalesProjections(event) {
        var index = $("#tab_logic tbody tr").length;
        if (index) {
            index = index - 1;
            // add loop
            var loop;
            var jul = 0;
            var aug = 0;
            var sep = 0;
            var oct = 0;
            var nov = 0;
            var dec = 0;
            var jan = 0;
            var feb = 0;
            var mar = 0;
            var apr = 0;
            var may = 0;
            var jun = 0;
            var total = 0;
            for (loop = 0; loop <= index; ++loop) {
                //    Empty total on each time
                total = 0;

                //    Total

                if (parseInt($('input[name=jul' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    jul += parseInt(jul) + parseInt($('input[name=jul' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=jul' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    jul += 0
                    total += 0
                }
                if (parseInt($('input[name=aug' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    aug += parseInt(aug) + parseInt($('input[name=aug' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=aug' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    aug += 0
                    total += 0
                }
                if (parseInt($('input[name=sep' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    sep += parseInt(sep) + parseInt($('input[name=sep' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=sep' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    sep += 0
                    total += 0
                }
                if (parseInt($('input[name=oct' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    oct += parseInt(oct) + parseInt($('input[name=oct' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=oct' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    oct += 0
                    total += 0
                }
                if (parseInt($('input[name=nov' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    nov += parseInt(nov) + parseInt($('input[name=nov' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=nov' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    nov += 0
                    total += 0
                }
                if (parseInt($('input[name=dec' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    dec += parseInt(dec) + parseInt($('input[name=dec' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=dec' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    dec += 0
                    total += 0
                }
                if (parseInt($('input[name=jan' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    jan += parseInt(jan) + parseInt($('input[name=jan' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=jan' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    jan += 0
                    total += 0
                }
                if (parseInt($('input[name=feb' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    feb += parseInt(feb) + parseInt($('input[name=feb' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=feb' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    feb += 0
                    total += 0
                }
                if (parseInt($('input[name=mar' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    mar += parseInt(mar) + parseInt($('input[name=mar' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=mar' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    mar += 0
                    total += 0
                }
                if (parseInt($('input[name=apr' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    apr += parseInt(apr) + parseInt($('input[name=apr' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=apr' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    apr += 0
                    total += 0
                }
                if (parseInt($('input[name=may' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    may += parseInt(may) + parseInt($('input[name=may' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=may' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    may += 0
                    total += 0
                }
                if (parseInt($('input[name=jun' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    jun = parseInt(jun) + parseInt($('input[name=jun' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=jun' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    jun += 0
                    total += 0
                }

                $('#total_manual_sales' + loop + '').html(number_format(total, 0, '.', ','));
                $('input[name=total_sale_' + loop + ']').val(number_format(total, 0, '.', ','));

            }
            if (jul >= 0) {
                $("#sp_1").val(number_format(jul, 0, '.', ','))
                $("#p_1").val(number_format(jul, 0, '.', ','))
            }
            if (aug >= 0) {
                $("#sp_2").val(number_format(aug, 0, '.', ','))
                $("#p_2").val(number_format(aug, 0, '.', ','))
            }
            if (sep >= 0) {
                $("#sp_3").val(number_format(sep, 0, '.', ','))
                $("#p_3").val(number_format(sep, 0, '.', ','))
            }
            if (oct >= 0) {
                $("#sp_4").val(number_format(oct, 0, '.', ','))
                $("#p_4").val(number_format(oct, 0, '.', ','))
            }
            if (nov >= 0) {
                $("#sp_5").val(number_format(nov, 0, '.', ','))
                $("#p_5").val(number_format(nov, 0, '.', ','))
            }
            if (dec >= 0) {
                $("#sp_6").val(number_format(dec, 0, '.', ','))
                $("#p_6").val(number_format(dec, 0, '.', ','))
            }
            if (jan >= 0) {
                $("#sp_7").val(number_format(jan, 0, '.', ','))
                $("#p_7").val(number_format(jan, 0, '.', ','))
            }
            if (feb >= 0) {
                $("#sp_8").val(number_format(feb, 0, '.', ','))
                $("#p_8").val(number_format(feb, 0, '.', ','))
            }
            if (mar >= 0) {
                $("#sp_9").val(number_format(mar, 0, '.', ','))
                $("#p_9").val(number_format(mar, 0, '.', ','))
            }
            if (apr >= 0) {
                $("#sp_10").val(number_format(apr, 0, '.', ','))
                $("#p_10").val(number_format(apr, 0, '.', ','))
            }
            if (may >= 0) {
                $("#sp_11").val(number_format(may, 0, '.', ','))
                $("#p_11").val(number_format(may, 0, '.', ','))
            }
            if (jun >= 0) {
                $("#sp_12").val(number_format(jun, 0, '.', ','))
                $("#p_12").val(number_format(jun, 0, '.', ','))
            }


        }
        updateTotalSales();
    }


    //    Update Total Sales
    function updateTotalSales() {
        var totalSales = 0;
        var totalPurchase = 0;
        $('#sales_projection').find('td input').each(function() {
            totalSales += Math.floor($(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
        })
        $('#purchases').find('td input').each(function() {
            totalPurchase += Math.floor($(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
        })
        $("#sp_13").html(number_format(totalSales, 0, '.', ','))
        $("#p_13").html(number_format(totalSales, 0, '.', ','))
        TableCalculation();
    }


        function unitType(val) {
        if (val == "withBoom") {
            $('#table_bom').show();
            $("#unit_cost").val(0);
            $("#products_cost").val(0);
            $("#rrp_cost").val(0);
            $("#unit_cost").attr("readonly", true);
            $('#table_bom tbody').find('td input').each(function () {
            if ($(this).prop('readonly', true)) {
                $(this).prop('readonly', false);
            }
            })
            $('#add_row').removeClass('disabled');
            if (Object.keys($('[name="id"]').val()).length > 0) {
            get_boom_table($('[name="id"]').val());
            }

        } else {
            $("#unit_cost").attr("readonly", false);
            $('#table_bom > tbody').find('td input').each(function () {
            if ($(this).prop('readonly', false)) {
                $(this).prop('readonly', true);
            }
            })
            $('#add_row').addClass('disabled');
            $('#table_bom').hide();

            var noRow = $("#table_bom > tbody").children().length - 1;
            $("#table_bom > thead").find("#action_title").remove();
            for (var lp = 0; lp <= noRow; lp++) {
            if (lp > 2) {
                $('#table_bom tr#row_id_' + lp).remove();
            }
            $('#table_bom').find('#td_action_' + lp).remove();
            $('#type_' + lp).val("");
            $('#description_' + lp).val("");
            $('#qty_' + lp).val("");
            $('#price_' + lp).val("");
            $('#td_totmts_' + lp).html("0");
            $('#td_total_' + lp).html("0");
            $('#td_vat_' + lp).html("0");
            $('#td_totcost_' + lp).html("0");
            $('#td_avecost_' + lp).html("0");
            if (lp <= 2) {
                getTotalMts(lp)
                getTotal(lp)
            }
            }
            // Clear Foot Data
            $('#table_bom > tfoot').find('.SumTotal').html("0")
            $('#table_bom > tfoot').find('.SumVat').html("0")
            $('#table_bom > tfoot').find('.SumTotCost').html("0")
            $('#table_bom > tfoot').find('.SumAveCost').html("0")
            $('#table_bom > tfoot').find('#footaction').remove()
        }
    }


    // $('input[type="text"]').focus(function () {
    //         var focusvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    //         if ($(this).hasClass('currencyFormat')) {
    //             $(this).val(focusvalue);
    //         } else if ($(this).hasClass('percentFormat')) {
    //             $(this).val(focusvalue);
    //         } else if ($(this).hasClass('numberFormat')) {
    //             $(this).val(focusvalue);
    //         } else {

    //         }
    //     });

    //     $('input[type="text"]').focusout(function () {
    //         var focusoutvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    //         if ($(this).hasClass('currencySign')) {
    //             $(this).val(cur + '' + number_format(parseFloat(focusoutvalue), 2, '.', ','));
    //         } else if ($(this).hasClass('percentFormat')) {
    //             $(this).val(parseFloat(focusoutvalue) + '%');
    //         } else if ($(this).hasClass('numberFormat')) {
    //             $(this).val(number_format(parseFloat(focusoutvalue), 2, '.', ','));
    //         } else {

    //         }

    //     });

        $('.show-more').click(function() {
            $(this).prev().slideToggle();
            if (($(this).text()) == "Show More") {
                $(this).text("Show Less");
            } else {
                $(this).text("Show More");
            }
        });

    
        


    $(document).ready(function() {

        

        var i = 1;

        $("#add_row_manually_sale").click(function() {
            var numTr = $("#tab_logic tbody tr").length;
            $('#tab_logic').append("<tr id='addr" + (numTr) + "'><input type='hidden' name='sale_id_" + numTr + "' value=''>\n\
                <td><input name='region" + numTr + "' type='text' placeholder='Region' class='form-control'/> </td>\n\
                <td><input  name='jul" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='aug" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='sep" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='oct" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='nov" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='dec" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='jan" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='feb" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='mar" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='apr" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='may" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='jun" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td id='total_manual_sales" + numTr + "'></td><input type='hidden' name='total_sale_" + numTr + "' value=''></tr>");


        });

        $("#delete_row_manually_sale").click(function() {
            var notr = $("#tab_logic tbody tr").length
            if (notr > 1) {
                $("#addr" + (notr - 1)).remove();
            }
            updateSalesProjections();
        });


        $("#show_data").click(function() {
            var htmlString = "";
            $("#tab_logic tbody tr").each(function(index, el) {
                if (index < $("#tab_logic tbody tr").length) {
                    var region = $("[name='region" + index + "']").val();
                    var jul = $("[name='jul" + index + "']").val();
                    var aug = $("[name='aug" + index + "']").val();
                    var sep = $("[name='sep" + index + "']").val();
                    var oct = $("[name='oct" + index + "']").val();
                    var nov = $("[name='nov" + index + "']").val();
                    var dec = $("[name='dec" + index + "']").val();
                    var jan = $("[name='jan" + index + "']").val();
                    var feb = $("[name='feb" + index + "']").val();
                    var mar = $("[name='mar" + index + "']").val();
                    var apr = $("[name='apr" + index + "']").val();
                    var may = $("[name='may" + index + "']").val();
                    var jun = $("[name='jun" + index + "']").val();


                    console.log("Row " + index + " : [Region=" + region + "] - \n\
                        [Jul=" + jul + "] - \n\
                        [Aug=" + aug + "] - \n\
                        [Sep=" + sep + "] - \n\
                        [Oct=" + oct + "] - \n\
                        [Nov=" + nov + "] - \n\
                        [Dec=" + dec + "] - \n\
                        [Feb=" + feb + "] - \n\
                        [Mar=" + mar + "] - \n\
                        [Apr=" + apr + "] - \n\
                        [May=" + may + "] - \n\
                        [Jun=" + jun + "] ");
                    htmlString += showDataHtml(index, region, jul, aug, sep, oct, nov, dec, jan, feb, mar, apr, may, jun);
                }
                $("#data-row").html(htmlString);
            });
        });
    });

    function showDataHtml(index, region, jul, aug, sep, oct, nov, dec, jan, feb, mar, apr, may, jun) {
        index++;
        return "<div class='col-md-12'>Row " + index + " : \n\
            Region = " + region + " - \n\
            Jul = " + jul + " - \n\
            Aug = " + aug + " - \n\
            Sep = " + sep + " - \n\
            Oct = " + oct + " - \n\
            Nov = " + nov + " - \n\
            Dec = " + dec + " - \n\
            Jan = " + jan + " - \n\
            Feb = " + feb + " - \n\
            mar = " + mar + " - \n\
            Apr = " + apr + " - \n\
            May = " + may + " - \n\
            Jun = " + jun + " - \n\
            </div>"
            }

    function monthlySalesType(val) {
        if (val == "manual") {
            $("#collapseZero").addClass('show');
            $("#monthlytable_qty").val(0);
            $("#monthlytable_qty").attr("readonly", true);
            $('#table_projected_sales tbody').find('#purchases td input').each(function() {
                if ($(this).prop('readonly', true)) {
                    $(this).prop('readonly', false);
                }
            })
            $('#add_row_manually_sale').removeClass('disabled');
            $('#delete_row_manually_sale').removeClass('disabled');
        } else {
            $("#collapseZero").removeClass('show');
            $("#monthlytable_qty").attr("readonly", false);
            $('#tab_logic tbody').find('td input').each(function() {
                $(this).val('');
            });
            $('#table_projected_sales tbody').find('#purchases td input').each(function() {
                if ($(this).prop('readonly', false)) {
                    $(this).prop('readonly', true);
                }
            })
            $('#add_row_manually_sale').addClass('disabled');
            $('#delete_row_manually_sale').addClass('disabled');

            TableCalculation();
        }
        //    Clear Opening And closing Fields value
        $('#table_projected_sales tbody').find('td input').each(function() {
            $(this).val(0)
        })
        $("#tab_logic > thead").find("#action_sale_title").remove();
        //    Remove Extra Row On Change Of Sale Status
        var noTr = $("#tab_logic tbody tr").length - 1;
        for (var i = 0; i <= noTr; ++i) {
            if (i > 0) {
                $("#addr" + (i)).remove();
            }
            $("#td_action_sale" + (i)).remove();

        }
        updateSalesProjections();
    }

    //    Update Sales
    function updateSalesProjections(event) {
        var index = $("#tab_logic tbody tr").length;
        if (index) {
            index = index - 1;
            // add loop
            var loop;
            var jul = 0;
            var aug = 0;
            var sep = 0;
            var oct = 0;
            var nov = 0;
            var dec = 0;
            var jan = 0;
            var feb = 0;
            var mar = 0;
            var apr = 0;
            var may = 0;
            var jun = 0;
            var total = 0;
            for (loop = 0; loop <= index; ++loop) {
                //    Empty total on each time
                total = 0;

                //    Total

                if (parseInt($('input[name=jul' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    jul += parseInt(jul) + parseInt($('input[name=jul' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=jul' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    jul += 0
                    total += 0
                }
                if (parseInt($('input[name=aug' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    aug += parseInt(aug) + parseInt($('input[name=aug' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=aug' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    aug += 0
                    total += 0
                }
                if (parseInt($('input[name=sep' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    sep += parseInt(sep) + parseInt($('input[name=sep' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=sep' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    sep += 0
                    total += 0
                }
                if (parseInt($('input[name=oct' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    oct += parseInt(oct) + parseInt($('input[name=oct' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=oct' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    oct += 0
                    total += 0
                }
                if (parseInt($('input[name=nov' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    nov += parseInt(nov) + parseInt($('input[name=nov' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=nov' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    nov += 0
                    total += 0
                }
                if (parseInt($('input[name=dec' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    dec += parseInt(dec) + parseInt($('input[name=dec' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=dec' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    dec += 0
                    total += 0
                }
                if (parseInt($('input[name=jan' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    jan += parseInt(jan) + parseInt($('input[name=jan' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=jan' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    jan += 0
                    total += 0
                }
                if (parseInt($('input[name=feb' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    feb += parseInt(feb) + parseInt($('input[name=feb' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=feb' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    feb += 0
                    total += 0
                }
                if (parseInt($('input[name=mar' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    mar += parseInt(mar) + parseInt($('input[name=mar' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=mar' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    mar += 0
                    total += 0
                }
                if (parseInt($('input[name=apr' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    apr += parseInt(apr) + parseInt($('input[name=apr' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=apr' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    apr += 0
                    total += 0
                }
                if (parseInt($('input[name=may' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    may += parseInt(may) + parseInt($('input[name=may' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=may' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    may += 0
                    total += 0
                }
                if (parseInt($('input[name=jun' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    jun = parseInt(jun) + parseInt($('input[name=jun' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=jun' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    jun += 0
                    total += 0
                }

                $('#total_manual_sales' + loop + '').html(number_format(total, 0, '.', ','));
                $('input[name=total_sale_' + loop + ']').val(number_format(total, 0, '.', ','));

            }
            if (jul >= 0) {
                $("#sp_1").val(number_format(jul, 0, '.', ','))
                $("#p_1").val(number_format(jul, 0, '.', ','))
            }
            if (aug >= 0) {
                $("#sp_2").val(number_format(aug, 0, '.', ','))
                $("#p_2").val(number_format(aug, 0, '.', ','))
            }
            if (sep >= 0) {
                $("#sp_3").val(number_format(sep, 0, '.', ','))
                $("#p_3").val(number_format(sep, 0, '.', ','))
            }
            if (oct >= 0) {
                $("#sp_4").val(number_format(oct, 0, '.', ','))
                $("#p_4").val(number_format(oct, 0, '.', ','))
            }
            if (nov >= 0) {
                $("#sp_5").val(number_format(nov, 0, '.', ','))
                $("#p_5").val(number_format(nov, 0, '.', ','))
            }
            if (dec >= 0) {
                $("#sp_6").val(number_format(dec, 0, '.', ','))
                $("#p_6").val(number_format(dec, 0, '.', ','))
            }
            if (jan >= 0) {
                $("#sp_7").val(number_format(jan, 0, '.', ','))
                $("#p_7").val(number_format(jan, 0, '.', ','))
            }
            if (feb >= 0) {
                $("#sp_8").val(number_format(feb, 0, '.', ','))
                $("#p_8").val(number_format(feb, 0, '.', ','))
            }
            if (mar >= 0) {
                $("#sp_9").val(number_format(mar, 0, '.', ','))
                $("#p_9").val(number_format(mar, 0, '.', ','))
            }
            if (apr >= 0) {
                $("#sp_10").val(number_format(apr, 0, '.', ','))
                $("#p_10").val(number_format(apr, 0, '.', ','))
            }
            if (may >= 0) {
                $("#sp_11").val(number_format(may, 0, '.', ','))
                $("#p_11").val(number_format(may, 0, '.', ','))
            }
            if (jun >= 0) {
                $("#sp_12").val(number_format(jun, 0, '.', ','))
                $("#p_12").val(number_format(jun, 0, '.', ','))
            }


        }
        updateTotalSales();
    }



    //    Update Total Sales
    function updateTotalSales() {
        var totalSales = 0;
        var totalPurchase = 0;
        $('#sales_projection').find('td input').each(function() {
            totalSales += Math.floor($(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
        })
        $('#purchases').find('td input').each(function() {
            totalPurchase += Math.floor($(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
        })
        $("#sp_13").html(number_format(totalSales, 0, '.', ','))
        $("#p_13").html(number_format(totalSales, 0, '.', ','))
        TableCalculation();
    }
  
    function unitType(val) {
    if (val == "withBoom") {
        $('#table_bom').show();
        $("#unit_cost").val(0);
        $("#products_cost").val(0);
        $("#rrp_cost").val(0);
        $("#unit_cost").attr("readonly", true);
        $('#table_bom tbody').find('td input').each(function () {
        if ($(this).prop('readonly', true)) {
            $(this).prop('readonly', false);
        }
        })
        $('#add_row').removeClass('disabled');
        if (Object.keys($('[name="id"]').val()).length > 0) {
        get_boom_table($('[name="id"]').val());
        }

    } else {
        $("#unit_cost").attr("readonly", false);
        $('#table_bom > tbody').find('td input').each(function () {
        if ($(this).prop('readonly', false)) {
            $(this).prop('readonly', true);
        }
        })
        $('#add_row').addClass('disabled');
        $('#table_bom').hide();

        var noRow = $("#table_bom > tbody").children().length - 1;
        $("#table_bom > thead").find("#action_title").remove();
        for (var lp = 0; lp <= noRow; lp++) {
        if (lp > 2) {
            $('#table_bom tr#row_id_' + lp).remove();
        }
        $('#table_bom').find('#td_action_' + lp).remove();
        $('#type_' + lp).val("");
        $('#description_' + lp).val("");
        $('#qty_' + lp).val("");
        $('#price_' + lp).val("");
        $('#td_totmts_' + lp).html("0");
        $('#td_total_' + lp).html("0");
        $('#td_vat_' + lp).html("0");
        $('#td_totcost_' + lp).html("0");
        $('#td_avecost_' + lp).html("0");
        if (lp <= 2) {
            getTotalMts(lp)
            getTotal(lp)
        }
        }
        // Clear Foot Data
        $('#table_bom > tfoot').find('.SumTotal').html("0")
        $('#table_bom > tfoot').find('.SumVat').html("0")
        $('#table_bom > tfoot').find('.SumTotCost').html("0")
        $('#table_bom > tfoot').find('.SumAveCost').html("0")
        $('#table_bom > tfoot').find('#footaction').remove()
    }
    }



