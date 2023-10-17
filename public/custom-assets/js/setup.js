

if ($.cookie('modal-welcome') != 'loaded') {
    $.cookie('modal-welcome', 'loaded');
    // code to show modal
    setTimeout(function () {
        $('#modal-welcome').modal('show');
    }, 200)
}


/*Floating field script*/

function checkempty() {
    $('input').each(function (index) {
        if ($(this).val() != '') {
            $(this).parent('div').removeClass('is-empty');
        }
    });
}
$(function () {



    $('input').each(function () {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    })

    var hash = document.location.hash;
    if (hash) {
        $('a[href="' + hash + '"]').tab('show');
        // $('a[href=' + hash + ']').trigger('click');
        //$('.nav-tabs a[href="+hash+"]').tab('show');
    }
    // Change hash for page-reload
    //$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
    //    window.location.hash = e.target.hash;
    //});

    reload_summary();

    $('.next').click(function () {

        var nextId = $(this).parents('.tab-pane').next().attr("id");
        $('[href=#' + nextId + ']').tab('show');
        return false;

    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        //update progress
        var step = $(e.target).data('step');
        var percent = (parseInt(step) / 6) * 100;

        $('.progress-bar').css({ width: percent + '%' });
        //$('.progress-bar').text("Step " + step + " of 6");

        //e.relatedTarget // previous tab

    })

    $('.first').click(function () {

        $('#myWizard a:first').tab('show')

    })

});

$('input').blur(function () {
    var $this = $(this);
    if ($this.val())
        $this.addClass('used');
    else
        $this.removeClass('used');
});

// Form Validations Start


// Form Validation Director
var surplus_value;
$("#directorDetails").validate({
    rules: {
        director_name: {
            required: true
        },
        director_education: {
            required: true
        },
        // eduAndExp: {
        //     required: true
        // },
        directerRole: {
            required: true
        },
    },
});

// Form Validation Investor
$('#form_investor').validate({
    rules: {
        investor_amount_paid: {
            required: true,
            // number: true
        },
        investor_name: {
            required: true
        },
    }
});
// Form Validation OneTimeCost
$('#form_onetime').validate({
    rules: {
        one_time_cost_description: {
            required: true
        },
        amount_paid: {
            required: true,
            // number: true
        },
        land_value: {
            required: true
        },
        property_description: {
            required: true
        },
        estimated_useful_life: {
            required: true
        },
        purchase_price: {
            required: true
        },
        asset_description: {
            required: true
        },
        qty: {
            required: true
        },
        aquistion_cost: {
            required: true
        },
        useful_life: {
            required: true
        },
        salvage_value: {
            required: true
        },
    }
})
// Form Validation Expense
$("#form_expenses").validate({
    rules: {
        purpose: {
            required: true
        },
        selectDescription: {
            required: true
        },
        cost_item_description: {
            required: true
        },
        num_month: {
            required: true,
            // number: true
        },
        weekly_cost: {
            required: true,
            // number: true,
        }
    }
});

// Form Validation For Product

$(function () {
    $('#table_form').validate({
        invalidHandler: function (event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                $('#modalConfirmYes').modal('show');
                $("#lblTitleConfirmYes").html("Error");
                $("#lblMsgConfirmYes").html("Please insert below required fields ??");
                for (var i = 0; i < validator.errorList.length; i++) {
                    var j = i + 1;
                    $("#lblMsgConfirmYes").append("<br> " + j + ". " + validator.errorList[i].message);
                }
                $("#btnYesConfirmYes").off('click').click(function () {
                    $('#product_description').focus()
                    $('#modalConfirmYes').modal('hide');
                });
            }
        },
        ignore: "",
        rules: {
            product_description: {
                required: true
            },
            unit_cost: {
                required: true
            },
            markup_on_cost: {
                required: true,
                min: 1,
            },
            monthlytable_qty: {
                required: true
            },
            sp_1: {
                required: true

            },
            sp_2: {
                required: true
            },
            sp_3: {
                required: true
            },
            sp_4: {
                required: true
            },

            sp_5: {
                required: true
            },
            sp_6: {
                required: true
            },
            sp_7: {
                required: true
            },

            sp_8: {
                required: true
            },
            sp_9: {
                required: true
            },
            sp_10: {
                required: true
            },
            sp_11: {
                required: true
            },
            sp_12: {
                required: true
            },
            p_1: {
                required: true
            },
            p_2: {
                required: true
            },
            p_3: {
                required: true
            },
            p_4: {
                required: true
            },
            p_5: {
                required: true
            },
            p_6: {
                required: true
            },
            p_7: {
                required: true
            },
            p_8: {
                required: true
            },
            p_9: {
                required: true
            },
            p_10: {
                required: true
            },
            p_11: {
                required: true
            },
            p_12: {
                required: true
            }
        },
        messages: {
            product_description: {
                required: "Product description required"
            },
            unit_cost: {
                required: "Unit Cost required"
            },
            markup_on_cost: {
                required: "Markup on cost required",
                min: "Markup on cost should be minimum 1",
            },
            monthlytable_qty: {
                required: "Monthly Quantity required"
            },
        },
        errorPlacement: function (error, element) {
            //$(".error-container").html("Your form contains "
            //        + this.numberOfInvalids()
            //        + " errors, see details below.");
            //this.defaultShowErrors();  // <- REMOVE THIS LINE
        }
    })
});


// Form Validation Online Revenue

// jQuery.validator.addMethod("greaterThanZero", function (value, element) {
//     return this.optional(element) || (parseFloat(value.replace(/\$|\€|\₹|\£\%/g, '')) > 0);
// }, "* Value must be greater than zero");


$("#revenue_form").validate({
    rules: {
        max_view: {
            required: true,
            //greaterThanZero: true
        },
        percent_purch: {
            required: true,
            //greaterThanZero: true
        },
        no_purchase: {
            required: true,
            //greaterThanZero: true
        },
        no_reorder: {
            required: true,
            //greaterThanZero: true
        },
        product_price: {
            required: true,
            //greaterThanZero: true
        },
        projected_cost: {
            required: true,
            //greaterThanZero: true
        }
    }
});
// Form Validation For Person

$(function () {
    $("#personform").validate({
        rules: {
            person_fname: {
                required: true
            },
            person_lname: {
                required: true,
            },
            person_work_hour: {
                required: true,
                number: true,
                min: 1
            },
            person_rate: {
                required: true,
                number: true,
                min: 1
            },
            person_quantity: {
                required: true,
                number: true,
                min: 1
            },
            person_subsidi: {
                required: false,
                number: false,
                min: 0
            },
            person_commission: {
                required: false,
                number: false,
                min: 0
            },
            person_other: {
                required: false,
                number: false,
                min: 0
            },
            person_pension: {
                number: true
            },
            person_medicare: {
                number: true
            },
            person_retire: {
                number: true
            },
            person_tax: {
                number: true
            },
            person_union: {
                number: true
            },
            person_sick: {
                number: true
            },
            person_fringe: {
                number: true
            },
            person_deductions: {
                number: true
            },
            // person_superannuation: {
            //     number: true
            // },
            // person_workcover: {
            //     number: true
            // }

        }
    });
});

// Form Validations End

// Save Start
// Director
$(".btnSave_director").click(function (e) {
    e.preventDefault();
    var getid = $(this).val();
    var method = $('#director_save').val();
    if ($("#directorDetails").valid()) {
        $('#director_modal').modal('hide');
        let method = $('#director_save').val();
        let result = validateName("director_modal", "director_name", "name", "director");
        if (result === true && method == "save") {
            $("#collapseOneDir").collapse("show");
            $("#director_modal").on('shown.bs.modal', function () {
                $("#director_name").focus();
            });
        } else {
            $("#btnNoConfirmYesNo").show();
            $("#btnYesConfirmYesNo").text("Yes")
            save_director();
        }


    } else {
        return false;
    }

    //}
});
// Investor
$("#btnSave_investor").click(function (e) {
    e.preventDefault();
    if ($("#form_investor").valid()) {
        $("#investor_modal").modal("hide");
        let result = validateName("investor_modal", "investor_name", "investor", "investor");
        let method = $('#investor_save').val();
        if (result === true && method == "save") {
            $("#investor_modal").on('shown.bs.modal', function () {
                $('#investor_name').focus();
            });
        } else {
            $("#btnNoConfirmYesNo").show();
            $("#btnYesConfirmYesNo").text("Yes")
            save_investor();
        }
    }
});
// One Time Cost
$("#btnSave_one").click(function (e) {
    e.preventDefault();
    if ($("#form_onetime").valid()) {
        save_onetimecost();
    }
});
// Expense
$("#btnSave_expenses").click(function (e) {
    e.preventDefault();
    if ($("#form_expenses").valid()) {
        save_expenses();
    }
});

// Save And Continue Products
if ($("#ProductsDashboard").val() == 1) {

    $('#products_cost').on('change', function () {
        products_cost = parseFloat($('#products_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
        rrp_cost = $('#rrp_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        if (rrp_cost == 0 || rrp_cost == '') {
            $('#rrp_cost').val(cur + 0)
        } else {
            $('#rrp_cost').val(number_format(parseFloat(rrp_cost), 2, '.', ','))
        } MarkUpOnCost = parseFloat($('#rrp_cost').val().replace(/,/g, ''));

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
                        var editnewRow = '<tr id="row_id_' + m + '">' + '<input name="id_' + m + '" id="id_' + m + '" type="hidden">' + '<td id="td_type_' + m + '">' + '<div class="form-group is-empty no-margin"><input name="type_' + m + '" class="form-control" id="type_' + m + '" placeholder="Enter Item Type" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_description_' + m + '">' + '<div class="form-group is-empty no-margin"><input name="description_' + m + '" class="form-control" id="description_' + m + '" placeholder="Enter Item Description" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_qty_' + m + '">' + '<div class="form-group no-margin"><input name="qty_' + m + '" class="form-control used numberSign" id="qty_' + m + '" onchange="getTotalMts(' + m + ')" value="0" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_price_' + m + '">' + '<div class="form-group no-margin"><input name="price_' + m + '" class="form-control used currencySign" id="price_' + m + '" onchange="getTotal(' + m + ')" value="0" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_totmts_' + m + '">0</td>' + '<td id="td_total_' + m + '">0</td>' + '<td id="td_vat_' + m + '">0</td>' + '<td id="td_totcost_' + m + '">0</td>' + '<td id="td_avecost_' + m + '">0</td><td id="td_action_' + m + '"></td></tr>';
                        $('table.table_bom').append(editnewRow);
                    }
                    $('#id_' + m).val(data[2][m].id)
                    $('#type_' + m).val(data[2][m].type);
                    $('#description_' + m).val(data[2][m].description);
                    number_format($('#qty_' + m).val(data[2][m].qty), 2, '.', ',');
                    number_format($('#price_' + m).val(data[2][m].price), 2, '.', ',');
                    $('#td_action_' + m).html("<a href='#' class='btn btn-warning' onclick='delete_bom(" + data[2][m].id + "," + m + ")'>Delete</a>");

                    var total_mts = 0;
                    total_mts = parseFloat($('#sp_13').html().replace(/,/g, '')) * data[2][m].qty

                    $('#td_totmts_' + m).html(number_format(total_mts, 2, '.', ','))

                    var total = 0;
                    var sum_total = 0;
                    var vat = 0;
                    var sum_vat = 0;
                    var tot_cost = 0;
                    var sum_totcost = 0;
                    var ave_cost = 0;
                    var sum_totave = 0;

                    total = (parseFloat($('#sp_13').html().replace(/,/g, '')) * data[2][m].qty) * data[2][m].price;

                    if (total == 0) {
                        $('#td_total_' + m).html(cur + total)
                    } else {
                        $('#td_total_' + m).html(cur + number_format(total, 2, '.', ','))
                    }

                    for (j = 0; j <= m; j++) {
                        sum_total += parseFloat($('#td_total_' + j).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''));
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
                        sum_vat += parseFloat($('#td_vat_' + k).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''));
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
                        sum_totcost += parseFloat($('#td_totcost_' + l).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''));
                    }

                    if (sum_totcost == 0) {
                        $('.SumTotCost').html(cur + sum_totcost)
                    } else {
                        $('.SumTotCost').html(cur + number_format(sum_totcost, 2, '.', ','))
                    }
                    ave_cost = parseFloat(tot_cost) / parseFloat($('#sp_13').html().replace(/,/g, ''))
                    if (ave_cost == 0) {
                        $('#td_avecost_' + m).html(cur + ave_cost);
                    } else {
                        $('#td_avecost_' + m).html(cur + number_format(ave_cost, 2, '.', ','));
                    }

                    for (n = 0; n <= m; n++) {
                        sum_totave += parseFloat($('#td_avecost_' + n).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''));
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
                } products_cost = parseFloat(data[0].UnitCost) + parseFloat($('.SumAveCost').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''));

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
        var currentActive = $("#wizardlocalProduct .active").attr("href");
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
        if ($("#add_local_product_form").valid()) {
            saveProductData(url, currentIndex, $('[name="methode"]').val());
        }

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
                            //drawCollectionView();

                            $('#modalConfirmYesNo').modal('hide');
                            $("#myModal2").modal('show');
                            $('#product_step1').trigger('click');

                        });

                        $("#btnNoConfirmYesNo").off('click').click(function () {
                            clearForm();
                            //drawCollectionView();
                            // $('#btnCloseForm').click();
                            $("#modalConfirmYesNo").modal('hide');


                        });
                    } else {
                        //selectPanel(index + 1);
                        var newindex = parseInt(index) + 1;
                        $("a[href='#locaprodsteps1-" + newindex + "']").trigger('click')
                        getProductData(obj['id'], method);
                        //drawCollectionView();
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
            $('#ssp_' + sce).html(cur + number_format($('#sp_' + sce).val().replace(/,/g, '') * products_cost), 0, '.', ',');
            $('#scp_' + sce).html(cur + number_format($('#p_' + sce).val().replace(/,/g, '') * products_cost), 0, '.', ',');
        }
        $('#soq_1').html(cur + number_format(parseInt($('#oq_1').val().replace(/,/g, '')) * parseInt($('#unit_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')), 0, '.', ','));
        $('#scq_1').html(cur + number_format(parseInt($('#soq_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

        $('#soq_2').html(cur + number_format(parseInt($('#scq_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
        $('#scq_2').html(cur + number_format(parseInt($('#soq_2').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_2').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_2').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

        $('#soq_3').html(cur + number_format(parseInt($('#scq_2').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
        $('#scq_3').html(cur + number_format(parseInt($('#soq_3').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_3').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_3').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

        $('#soq_4').html(cur + number_format(parseInt($('#scq_3').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
        $('#scq_4').html(cur + number_format(parseInt($('#soq_4').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_4').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_4').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

        $('#soq_5').html(cur + number_format(parseInt($('#scq_4').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
        $('#scq_5').html(cur + number_format(parseInt($('#soq_5').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_5').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_5').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

        $('#soq_6').html(cur + number_format(parseInt($('#scq_5').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
        $('#scq_6').html(cur + number_format(parseInt($('#soq_6').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_6').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_6').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

        $('#soq_7').html(cur + number_format(parseInt($('#scq_6').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
        $('#scq_7').html(cur + number_format(parseInt($('#soq_7').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_7').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_7').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

        $('#soq_8').html(cur + number_format(parseInt($('#scq_7').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
        $('#scq_8').html(cur + number_format(parseInt($('#soq_8').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_8').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_8').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

        $('#soq_9').html(cur + number_format(parseInt($('#scq_8').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
        $('#scq_9').html(cur + number_format(parseInt($('#soq_9').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_9').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_9').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

        $('#soq_10').html(cur + number_format(parseInt($('#scq_9').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
        $('#scq_10').html(cur + number_format(parseInt($('#soq_10').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_10').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_10').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

        $('#soq_11').html(cur + number_format(parseInt($('#scq_10').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
        $('#scq_11').html(cur + number_format(parseInt($('#soq_11').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_11').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_11').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

        $('#soq_12').html(cur + number_format(parseInt($('#scq_11').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
        $('#scq_12').html(cur + number_format(parseInt($('#soq_12').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_12').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_12').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

        // calcuation is wrong ned to be fix.

        $('#purchasesprice').find('td').each(function () {
            if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))) {
                total_purchasesprice += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))
            }
        })
        $('#sales_projection_price').find('td').each(function () {
            if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))) {
                total_sspprice += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))
            }
        })

        tscp = total_purchasesprice;
        tssp = total_sspprice;
        tsoq = $('#soq_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, '');
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

        $('#spp_1').html(cur + number_format($('#sp_1').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
        $('#pp_1').html(cur + number_format($('#sp_1').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
        $('#pg_1').html(cur + number_format(parseInt($('#spp_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

        $('#spp_2').html(cur + number_format($('#sp_2').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
        $('#pp_2').html(cur + number_format($('#sp_2').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
        $('#pg_2').html(cur + number_format(parseInt($('#spp_2').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_2').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

        $('#spp_3').html(cur + number_format($('#sp_3').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
        $('#pp_3').html(cur + number_format($('#sp_3').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
        $('#pg_3').html(cur + number_format(parseInt($('#spp_3').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_3').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

        $('#spp_4').html(cur + number_format($('#sp_4').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
        $('#pp_4').html(cur + number_format($('#sp_4').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
        $('#pg_4').html(cur + number_format(parseInt($('#spp_4').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_4').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

        $('#spp_5').html(cur + number_format($('#sp_5').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
        $('#pp_5').html(cur + number_format($('#sp_5').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
        $('#pg_5').html(cur + number_format(parseInt($('#spp_5').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_5').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

        $('#spp_6').html(cur + number_format($('#sp_6').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
        $('#pp_6').html(cur + number_format($('#sp_6').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
        $('#pg_6').html(cur + number_format(parseInt($('#spp_6').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_6').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

        $('#spp_7').html(cur + number_format($('#sp_7').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
        $('#pp_7').html(cur + number_format($('#sp_7').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
        $('#pg_7').html(cur + number_format(parseInt($('#spp_7').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_7').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

        $('#spp_8').html(cur + number_format($('#sp_8').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
        $('#pp_8').html(cur + number_format($('#sp_8').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
        $('#pg_8').html(cur + number_format(parseInt($('#spp_8').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_8').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

        $('#spp_9').html(cur + number_format($('#sp_9').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
        $('#pp_9').html(cur + number_format($('#sp_9').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
        $('#pg_9').html(cur + number_format(parseInt($('#spp_9').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_9').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

        $('#spp_10').html(cur + number_format($('#sp_10').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
        $('#pp_10').html(cur + number_format($('#sp_10').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
        $('#pg_10').html(cur + number_format(parseInt($('#spp_10').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_10').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

        $('#spp_11').html(cur + number_format($('#sp_11').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
        $('#pp_11').html(cur + number_format($('#sp_11').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
        $('#pg_11').html(cur + number_format(parseInt($('#spp_11').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_11').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

        $('#spp_12').html(cur + number_format($('#sp_12').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
        $('#pp_12').html(cur + number_format($('#sp_12').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
        $('#pg_12').html(cur + number_format(parseInt($('#spp_12').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_12').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

        // matematic still not right-- need to fix it
        $('#table_monthly_gross').find('tbody tr:not(#sales_projection_profit, #grossprofit) td').each(function () {
            if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))) {
                total_purchases_profit += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''));
            }


        })
        $('#table_monthly_gross').find('tbody tr:not(#purchasesprofit, #grossprofit) td').each(function () {
            if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))) {
                total_sales_profit += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))
            }
        })

        tspp = total_sales_profit;
        tpp = total_purchases_profit;

        tpg = parseInt(total_sales_profit) - parseInt(total_purchases_profit)

        $('#spp_13').html(cur + number_format(tspp, 0, '.', ','));
        $('#pp_13').html(cur + number_format(tpp, 0, '.', ','));
        $('#pg_13').html(cur + number_format(tpg, 0, '.', ','));
    }

}

$("#save_product").click(function (e) {
    e.preventDefault();
    if ($("#indus_type").val() !== "Cosmetics") {
        if ($("#add_local_product_form").valid()) {
            saveProduct();
        }
    } else {
        if ($("#product_code").val() === "" || $("#product_description").val() === "" || $("#unit_cost").val() === "" || $("#markup_on_cost").val() === "" || $("#monthlytable_qty").val() === "") {
            $('#modalConfirmYes').css("z-index", "9999");
            $('#modalConfirmYes').modal('show');
            $("#lblTitleConfirmYes").html("User Confirmation");
            $("#lblMsgConfirmYes").html("Please insert all required fields ??");
            $("#btnYesConfirmYes").off('click').click(function () {
                $('#product_description').focus();
                $('#modalConfirmYes').modal('hide');
            });
        } else {
            $('[name="status"]').val("update");
            if ($("#add_local_product_form").valid()) {
                saveProduct();
            }
        }

    }
});

// Save Service Revenue
$("#btnSaveImport").click(function (e) {
    e.preventDefault();
    if ($("#importform").valid()) {
        saveimported();
    }
});

// Save Online Revenue
$("#btnSavingSales").click(function (e) {
    e.preventDefault();
    if ($("#revenue_form").valid()) {
        $('#online_revenue').modal('hide');
        save_revenue();
    } else {
        return false;
    }

});

// Save People
$("#btnSavePerson").click(function (e) {
    e.preventDefault();
    if ($("#personform").valid()) {
        $('#people_modal').modal('hide');
        let result = validateName("people_modal", "", "", "people");
        if (result === true) {
            $("#people_modal").on('shown.bs.modal', function () {
                $('#person_fname').focus();
                $('#person_lname').focus();
            });
        } else {
            $("#btnNoConfirmYesNo").show();
            $("#btnYesConfirmYesNo").text("Yes")
            saveperson();
        }

    }
});

// // Save End

// Add Start

// Add Director
var save_method_director; //for save method string
var table_director;
function new_director() {
    $('#director_modal').modal('show');
    // added by raza 16 april 2020
    var listtext = $("a[href='#directorstep-0']").text();
    var tabtext = $('.moving-tab').text();
    if (tabtext != listtext) {
        $('.moving-tab').text('');
        $('.moving-tab').text(listtext);
    }
    save_method_director = 'save';
    $('#director_save').val(save_method_director);
    //var directorid = $('#id' + id).val('');
    $('#director_name').val('');
    $('#directerRole').val("").trigger("change");
    $('#share_qty').val('');
    $('#price_per_share').val('');
    $('#directorNetProfit').val('');
    $('#director_amount_paid').val('');
    $('#share_class_sc').val("").trigger("change");
    $('#eduAndExp').val('');
    $('#directerRole').val('');
    $('#director_logo').val('');
    // $('#director_id').val('');
    //$("#director_logo").unset();
    //alert("called");
    // $('#director_logo').fileinput('reset');
    path = siteUrl + 'assets/img/avatars/avatar.png';
    $("#director_logo").fileinput('refresh', {
        overwriteInitial: true,
        maxFileSize: 500,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        previewClass: 'company_setup',
        browseIcon: '<i class="fa fa-folder-open"></i>',
        removeIcon: '<i class="fa fa-remove"></i>',
        removeTitle: 'Cancel or reset changes',
        elErrorContainer: '#kv-avatar-errors',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + path + '" alt="Director Logo" width="80" height="80"">',
        layoutTemplates: {
            main2: '{preview}  {remove} {browse} '
        },
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
    $.ajax({
        url: "<?php echo site_url('Director/load_currency/') ?>/",
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            //console.log("hello");
            $('#cu-d').html(data.currency);
        }
    });
}

// Add Investor
var save_method_investor; //for save method string
var table_investor;
function add_investor() {
    save_method_investor = 'save';
    $("#investor_save").val(save_method_investor);
    $("label.error").remove();
    $('#form_investor')[0].reset(); // reset form on modals
    $('.form-group').removeClass('has-error'); // clear error class
    $('.help-block').empty(); // clear error string
    $('#investor_modal').modal('show');
    $('.modal-title').text('Add A Investor'); // Set Title to Bootstrap modal title
    //Added by raza 16 april 2020
    var listtext = $("#import_tab1").text();
    var tabtext = $('.moving-tab').text();
    if (tabtext != listtext) {
        $('.moving-tab').text('');
        $('.moving-tab').text(listtext);
    }

    $('#investor_logo').val('');
    // $('#director_id').val('');
    //$("#director_logo").unset();
    //alert("called");
    // $('#director_logo').fileinput('reset');
    path = siteUrl + 'assets/img/avatars/avatar.png';

    $("#investor_logo").fileinput('refresh', {
        overwriteInitial: true,
        maxFileSize: 500,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        previewClass: 'company_setup',
        browseIcon: '<i class="fa fa-folder-open"></i>',
        removeIcon: '<i class="fa fa-remove"></i>',
        removeTitle: 'Cancel or reset changes',
        elErrorContainer: '#kv-avatar-errors',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + path + '" alt="Director Logo" width="80" height="80"">',
        layoutTemplates: {
            main2: '{preview}  {remove} {browse} '
        },
        allowedFileExtensions: ["jpg", "png", "gif"]
    });

    $.ajax({
        url: "<?php echo site_url('Investor/load_currency/') ?>/",
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            $('#cu-i').html(data.currency);
        }
    });
}

// Add Finance

function bank_loan() {
    $('#finance_modal').modal('show');
    //Added By raza 15 april 2020
    var listtext = $("#finance1").text();
    var tabtext = $('.moving-tab').text();
    if (tabtext != listtext) {
        $('.moving-tab').text('');
        $('.moving-tab').text(listtext);
    }
    $("#amount-error").remove();
    $("#years-error").remove();
    $("#apr-error").remove();
    // End
    $.ajax({
        url: "startup/ajax-get_loan_data",
        dataType: 'json',
        encode: true,
        success: function (data) {
            $('#formID')[0].reset(); // reset form on modals
            $('.form-group').removeClass('has-error'); // clear error class
            $('.help-block').empty(); // clear error string
            $('#ModalFormBankLoan').modal('show'); // show bootstrap modal
            if (data) {
                $('#amountText').text(cur + ' ' + number_format(data['loan_amount'], 0, '.', ','));
                $('#aprText').text(data['loan_length'] + 'Years');
                $('#yearsText').text(data['annual_interest'] + '%');
                $('#amountLoan').val(data['loan_amount']);
                $('#apr').val(data['loan_length']);
                $('#years').val(data['annual_interest']);
            } else {
                $('#amountText').text(0);
                $('#aprText').text(0 + 'Years');
                $('#yearsText').text(0 + '%');
                $('#amountLoan').val("");
                $('#apr').val("");
                $('#years').val("");
            }
            $('.modal-title').text('Add / Edit Bank Loan');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    })
}
var save_method_one;
//   Add One time Cost
function add_onetimecost(type) {
    $('#form_onetime')[0].reset(); // reset form on modals
    $('#onetimecost_modal').modal('show');
    $('#onetimecoststep1').trigger('click');
    $("#one_time_cost_type").children('option').show();
    if (type == 'onetimecost') {
        $("#one_time_cost_type").children('option[value="Land_Buildings"]').hide();
        $("#one_time_cost_type").children('option[value="Plant_Equipment"]').hide();
        $("#one_time_cost_type").val("One_Time_Costs").trigger("change");
    } else if (type == 'plant_equipment') {
        $("#one_time_cost_type").children('option[value="Land_Buildings"]').hide();
        $("#one_time_cost_type").children('option[value="Security_Deposit"]').hide();
        $("#one_time_cost_type").children('option[value="One_Time_Costs"]').hide();
        $("#one_time_cost_type").children('option[value="Interlectual_Property"]').hide();
        $("#one_time_cost_type").val("Plant_Equipment").trigger("change");
    } else if (type == 'land_buildings') {
        $("#one_time_cost_type").children('option[value="Plant_Equipment"]').hide();
        $("#one_time_cost_type").children('option[value="Security_Deposit"]').hide();
        $("#one_time_cost_type").children('option[value="One_Time_Costs"]').hide();
        $("#one_time_cost_type").children('option[value="Interlectual_Property"]').hide();
        $("#one_time_cost_type").val("Land_Buildings").trigger('change');
    } else {
        $("#one_time_cost_type").children('option').show();
    }
    //Added By raza 15 april 2020
    var listtext = $("#onetimecoststep1").text();
    var tabtext = $('.moving-tab').text();
    if (tabtext != listtext) {
        $('.moving-tab').text('');
        $('.moving-tab').text(listtext);
    }
    save_method_one = 'add';
    $("label.error").remove();
    $('.form-group').removeClass('has-error'); // clear error class
    $('.help-block-one').empty(); // clear error string
    $('#modal_form_one').modal('show'); // show bootstrap modal
    $('.modal-title').text('Add One Time Cost'); // Set Title to Bootstrap modal title
}
var save_method_expense;
// Add Expense
function add_expenses() {
    $('#form_expenses')[0].reset();
    save_method_expense = 'add';
    $('#expensestep-1').trigger('click');
    $('#expense_modal').modal('show');
    $("label.error").remove();
    var listtext = $("#expense1").text();
    var tabtext = $('.moving-tab').text();
    if (tabtext != listtext) {
        $('.moving-tab').text('');
        $('.moving-tab').text(listtext);
    }
}

var save_method_product;
function add_localproduct() {
    // var isVisible = document.getElementById("product_form").style.display == "block";
    // if (isVisible){
    // $("#product_form").hide();
    // }
    // else{
    // $("#product_form").show();
    // }

    $("#myModal2").modal('show');
    var listtext = $("#locaprodsteps1").text();
    var tabtext = $('.moving-tab').text();
    if (tabtext != listtext) {
        $('.moving-tab').text('');
        $('.moving-tab').text(listtext);
    }
    $("a[href='#locaprodsteps1-1']").trigger('click');
    $("label.error").remove();
    save_method_product = 'add';
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
    $('#purchases').find('td input').each(function () {

        $(this).prop('readonly', true);

    })
    $('#sales_projection').find('td input').each(function () {

        $(this).prop('readonly', true);

    });
    if ($("#indus_type").val() == "Cosmetics") {
        //drawPieGraphsCosmetics('cosmetics_canvas', '#cosmetics_canvas', '', '', '', '', '', '', cur);
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

// Add Services
var save_method_service_revenue; //for save method string
function add_service() {
    // var isVisible = document.getElementById("serviceForm").style.display == "block";
    // if (!isVisible)
    //   $("#serviceForm").show();
    $('#service_setup').modal('show');
    var listtext = $("#servicestep2").text();
    var tabtext = $('.moving-tab').text();
    if (tabtext != listtext) {
        $('.moving-tab').text('');
        $('.moving-tab').text('Add Service Revenue');
    }
    save_method_service_revenue = 'add';
    $("label.error").remove();
    $('#importform')[0].reset(); // reset form on modal
    $('.form-group').removeClass('has-error'); // clear error class
    $('.help-block').empty(); // clear error string
}

// Add Online Revenue
function modify_online_revenue_form() {
    $('#online_revenue').modal('show');
    var listtext = $("#import_tab1").text();
    var tabtext = $('.moving-tab').text();
    if (tabtext != listtext) {
        $('.moving-tab').text('');
        $('.moving-tab').text('Add Online Revenue');
    }
    $('#revenue_form').find('input[type=text]').each(function () {
        if ($(this).val() >= 0) {
            $(this).addClass('used');
            $(this).removeClass('error');
            $('label[class=error]').remove();
        } else {
            $(this).removeClass('used');
        }


    });
    var d = new Date();
    $('#no_days').val(days_of_a_year(d.getFullYear()));
}

//cancel revenue modal
function cancel_product() {
    $('#modalConfirmYesNo').css('z-index', '9999');
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure wanted to cancel this product?");
    $("#btnYesConfirmYesNo").off('click').click(function () { // clearForm();
        $('#revenue_form')[0].reset();

        $("#online_revenue").modal('hide');
        $('#modalConfirmYesNo').css('z-index', 'unset');
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').css('z-index', 'unset');

        $('#modalConfirmYesNo').modal('hide');
    });
}

function days_of_a_year(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

// Add End

//Balance Sheet Audint check warning message if out of balance
$(function () {

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var target = $(e.target).attr("href");

        if ((target == '#startupstep6')) {//  #menu5
            reload_summary();

            if (surplus_value < 0) {
                $('#modalConfirmYesNo').modal('show');

                $("#lblTitleConfirmYesNo").html("");
                $("#lblMsgConfirmYesNo").html("<div class='alert ' role='alert'><p class='text-center' style='color:rgba(255, 0, 0, 1.0);font-size:16px;font-weight:bold;'><b>Warning Insufficiant Funds !!</b></p></div>"
                    + "<div class='alert ' role='alert'>"
                    + "<p class='text-left'>The summary total indicates that you don't have sufficient funds to meet your monthly expense budget.You need to do one of the following:</p>"
                    + "<hr>"
                    + "<ul>"
                    + "<li>Go back to the Directors screen and <b>INCREASE</b> the funds injected into the business by any one of the directors.</li>"
                    + "<br>"
                    + "<li>Go back to the Investprs screen and <b>INCREASE</b> the funds injected into the business by your investors.</li>"
                    + "<br>"

                    + "<li>If you planning to borrow money from a bank, then go back to the loan and <b>INCREASE</b> the amount you plan to borrow.</li>"
                    + "<br>"
                    + "<li>Review your One-Time costs, and monthly Recurring Costs by <b>REDUCING</b> the amount you have allocated, right now you have spent more money then what you have available.</li>"
                    + "</ul>"
                    + "</div>"
                    + "</p>");
                $("#btnNoConfirmYesNo").hide();
                $("#btnYesConfirmYesNo").removeClass('btn');
                $("#btnYesConfirmYesNo").addClass('btn');
                $("#btnYesConfirmYesNo").html('Continue');
                $("#btnYesConfirmYesNo").off('click').click(function () {
                    $('#modalConfirmYesNo').modal('hide');
                    $("#btnYesConfirmYesNo").removeClass('btn');
                    $("#btnYesConfirmYesNo").addClass('btn');
                    $("#btnYesConfirmYesNo").html('<span class="fa fa-check btn-sm"></span>Yes');
                    $("#btnNoConfirmYesNo").show();
                });
            }
        }
    })
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        if ((target == '#menu1')) {

            if ($('#directorForm').attr('aria-expanded') == "true") {
                cancel_director();
            }
        }
    })
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        if ((target == '#menu2')) {

            if ($('#investorForm').attr('aria-expanded') == "true") {
                cancel_investor();
            }

        }
    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        if ((target == '#menu3')) {

            if ($('#expenseForm').attr('aria-expanded') == "true") {
                cancel_expenses();
            }

        }
    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        if ((target == '#menu4')) {

            if ($('#onetimeForm').attr('aria-expanded') == "true") {

                cancel_one();
            }

        }
    })

    $("[data-mask]").inputmask();
    $('.next-step, .prev-step').on('click', function (e) {
        var $activeTab = $('.tab-pane.active');
        $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn');
        if ($(e.target).hasClass('next-step')) {

            var nextTab = $activeTab.next('.tab-pane').attr('id');
            $('[href="#' + nextTab + '"]').removeClass('btn');
            $('[href="#' + nextTab + '"]').tab('show');
            $("body").scrollTop(0);
        } else {

            var prevTab = $activeTab.prev('.tab-pane').attr('id');
            $('[href="#' + prevTab + '"]').removeClass('btn');
            $('[href="#' + prevTab + '"]').tab('show');
            $("body").scrollTop(0);
        }
    });
    // Company Finance Validation And Save
    $('#btn').on('click', function () {

        var form = $('#formID').serialize();

        $("#formID").validate({
            rules: {
                amount: {
                    required: true,
                    // number: true
                },
                apr: {
                    required: true,
                    number: true
                },
                years: {
                    required: true,
                    // number: true
                }
            }
        });

        if ($("#formID").valid()) {

            $.ajax({
                url: "startup/ajax-checkreq",
                type: "POST",
                data: form,
                dataType: 'json',
                encode: true,
                success: function (data) {

                    $('#finance_modal').modal('hide');//ModalFormBankLoan

                    /*$('#modalConfirmYesNo').modal('show');

                     $("#lblTitleConfirmYesNo").html("User Confirmation");
                     $("#lblMsgConfirmYesNo").html("Bank Loan already being save ");

                     $("#btnNoConfirmYesNo").hide();

                     $("#btnYesConfirmYesNo").off('click').click(function () {

                     $('#amount').val("");
                     $('#apr').val("");
                     $('#years').val("");

                     $('#modalConfirmYesNo').modal('hide');
                     });*/

                    var html = "";

                    html += "<div class='accordion my-5' id='accordion'>"
                        + "<div class='accordion-item'>"
                        + "<h2 class='accordion-header' id='loanDetail'>"
                        + "<button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseLoan' aria-expanded='true' aria-controls='collapseLoan'>Loan Detail</button></h2>"
                        + "<div id='collapseLoan' class='accordion-collapse collapse show' aria-labelledby='headingLoan' data-bs-parent='#accordionLoan'>"
                        + "<div class='accordion-body'>"
                        + "<div class='row text-center'>"
                        + "<div class='col-lg-3 col-md-3 col-sm-6'>"
                        + "<div class='card mb-4 shadow-sm'>"
                        + "<div class='card-header'>"
                        + "<h4 class='my-0 font-weight-normal'>Loan Amount</h4>"
                        + "</div>"
                        + "<div class='card-body'>"
                        + "<h3 class='card-title pricing-card-title'>" + data['currency'] + ' ' + number_format(data['loan_amount'], 0, '.', ',') + "</h3>"
                        + "</div></div></div>"
                        + "<div class='col-lg-3 col-md-3 col-sm-6'>"
                        + "<div class='card mb-4 shadow-sm'>"
                        + "<div class='card-header'>"
                        + "<h4 class='my-0 font-weight-normal'>Interest</h4>"
                        + "</div>"
                        + "<div class='card-body'>"
                        + "<h3 class='card-title pricing-card-title'>" + data['currency'] + ' ' + number_format(data['total_interest'], 0, '.', ',') + "</h3>"
                        + "</div></div></div>"
                        + "<div class='col-lg-3 col-md-3 col-sm-6'>"
                        + "<div class='card mb-4 shadow-sm'>"
                        + "<div class='card-header'>"
                        + "<h4 class='my-0 font-weight-normal'>Loan Term</h4>"
                        + "</div>"
                        + "<div class='card-body'>"
                        + "<h3 class='card-title pricing-card-title'>" + number_format(data['loan_length'], 0, '.', ',') + " Years</h3>"
                        + "</div></div></div>"
                        + "<div class='col-lg-3 col-md-3 col-sm-6'>"
                        + "<div class='card mb-4 shadow-sm'>"
                        + "<div class='card-header'>"
                        + "<h4 class='my-0 font-weight-normal'>Interest Rate</h4>"
                        + "</div>"
                        + "<div class='card-body'>"
                        + "<h3 class='card-title pricing-card-title'>" + number_format(data['annual_interest'], 2, '.', ',') + " %</h3>"
                        + "</div></div></div></div></div></div></div>"


                        // Old layout
                        + "<div class='accordion-item p-0'>"
                        + "<h2 class='accordion-header' id='loanSchedule'>"
                        + "<button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseSchedule' aria-expanded='true' aria-controls='collapseSchedule'>Loan Schedul</button></h2>"
                        + "<div id='collapseSchedule' class='accordion-collapse collapse show' aria-labelledby='collapseSchedule' data-bs-parent='#accordionSchedule'>"
                        + "<div class='accordion-body'>"
                        + "<table cellpadding='5' class='table table-striped'>"
                        + "<tr>"
                        + "<th colspan='4'>Loan Summary</th>"
                        + "</tr>"
                        + "<tr>"
                        + "<td>Loan amount:</td>"
                        + "<td><b>" + data['currency'] + ' ' + number_format(data['loan_amount'], 0, '.', ',') + "</b></td>"
                        + "</tr>"
                        + "<tr>"
                        + "<td>Loan length:</td>"
                        + "<td><b>" + number_format(data['loan_length'], 0, '.', ',') + "&nbsp;years</b></td>"
                        + "</tr>"
                        + "<tr>"
                        + "<td>Annual interest:</td>"
                        + "<td><b>" + number_format(data['annual_interest'], 2, '.', ',') + " %</b></td>"
                        + "</tr>"
                        + "<tr>"
                        + "<td>Total paid:</td>"
                        + "<td><b>" + data['currency'] + ' ' + number_format(data['total_paid'], 0, '.', ',') + "</b></td>"
                        + "</tr>"
                        + "<tr>"
                        + "<td>Total interest:</td>"
                        + "<td><b>" + data['currency'] + ' ' + number_format(data['total_interest'], 0, '.', ',') + "</b></td>"
                        + "</tr>"
                        + "<tr>"
                        + "<td>Total periods:</td>"
                        + "<td><b>" + number_format(data['total_periods'], 0, '.', ',') + "</b></td>"
                        + "</tr>"
                        + "</table>"
                        + "<table id='fullsummary' class='table bordered' cellpadding='5'>"
                        + "<thead class='table-light'>"
                        + "<tr>"
                        + "<th>Period</th>"
                        + "<th>Beginning Balance</th>"
                        + "<th>Interest Paid</th>"
                        + "<th>Principal Paid</th>"
                        + "<th>Remaining Balance</th>"
                        + "</tr>"
                        + "</thead>"
                        + "<tbody>" + data['amortization_table_rows'] + "</tbody>"
                        + "<tfoot class='table-light'>"
                        + "<tr>"
                        + "<th>&nbsp;</th>"
                        + "<th>Totals:</th>"
                        + "<th>" + data['currency'] + ' ' + number_format(data['total_interest'], 2, '.', ',') + "</th>"
                        + "<th>Total Principal</th>"
                        + "<th>" + data['currency'] + ' ' + number_format(data['total_principal'], 2, '.', ',') + "</th>"
                        + "</tr>"
                        + "</tfoot>"
                        + "</table>"
                        + "</div>"
                        + "</div>"
                        + "</div>"
                        + "</div>";

                    $('#bankloan_placeholder').html(html);
                    initialize();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }
            })
        }
    })

})

function reload_summary() {
    var url;
    url = siteUrl + 'startup/ajax-summary';
    // ajax adding data to database
    $.ajax({
        url: url,
        type: "POST",
        data: 'Summary',
        success: function (data) {
            $('#summary_div').html(data);

            //surplus_value = $('#table_surplus').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '');
        }
    })
}

function number_format(number, decimals, decPoint, thousandsSep) {
    decimals = decimals || 0;
    number = parseFloat(number);

    if (!decPoint || !thousandsSep) {
        decPoint = '.';
        thousandsSep = ',';
    }

    var roundedNumber = Math.round(Math.abs(number) * ('1e' + decimals)) + '';
    // add zeros to decimalString if number of decimals indicates it
    roundedNumber = (1 > number && -1 < number && roundedNumber.length <= decimals)
        ? Array(decimals - roundedNumber.length + 1).join("0") + roundedNumber
        : roundedNumber;
    var numbersString = decimals ? roundedNumber.slice(0, decimals * -1) : roundedNumber.slice(0);
    var checknull = parseInt(numbersString) || 0;

    // check if the value is less than one to prepend a 0
    numbersString = (checknull == 0) ? "0" : numbersString;
    var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : '';

    var formattedNumber = "";
    while (numbersString.length > 3) {
        formattedNumber = thousandsSep + numbersString.slice(-3) + formattedNumber
        numbersString = numbersString.slice(0, -3);
    }

    return (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');
}



/*
 $('[data-toggle="tooltip"]').tooltip({
 'placement': 'top'
 });*/

/*
 $('#userNameField').tooltip({
 'show': true,
 'placement': 'bottom',
 'title': "Please remember to..."
 });

 $('#userNameField').tooltip('show');
 */


// $('[data-toggle="popover"]').popover({
//     trigger: 'hover',
//     'placement': 'top',
//     //content: function(){return '<img src="'+$(this).data('img') + '" />';}
// });



// $('[data-toggle="tab"]').tooltip({
//     trigger: 'hover',
//     placement: 'bottom',
//     animate: true,
//     delay: 500,
//     container: 'body'
// });
// Save Functions Start


// Save Director
function save_director(id) {
    var method = $('#director_save').val();
    $('#btnSave_director_' + id).text('saving...'); //change button text
    $('#btnSave_director_' + id).attr('disabled', true); //set button disable

    var isnew = $('#amtid' + id).val();
    var url;

    if (method == "save") {
        url = siteUrl + 'director/ajax-add';
        //$("#directorDetails").attr("action",url);
        //$("#directorDetails").submit();
        //return false;
    } else {
        url = siteUrl + 'director/ajax-update';

    }
    var fData = new FormData($('#directorDetails')[0]);
    // var directorid = $('#id' + id).val();
    // var name = $('#director_name').val();
    // var amt = $('#director_amount_paid').val();
    // var eduAndExp = $('#eduAndExp').val();
    // var directerRole = $('#directerRole').val();
    // var image = $('#director_logo').val();
    // var director_id = $('#director_id').val();
    // image = image.substring(image.lastIndexOf('\\') + 1)
    // ajax adding data to database

    $.ajax({
        url: url,
        type: "POST",
        data: fData,
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
            var obj = jQuery.parseJSON(data);
            if (obj['status']) //if success close modal and reload ajax table
            {
                if (method == 'save') {
                    var msg = "Director added successfully, <br/> Do you want to add another ???"
                } else {
                    var msg = "Director edited successfully !!! <br/> Do you want to add Director ???"
                }

                $('#modalConfirmYesNo').modal('show');

                $("#lblTitleConfirmYesNo").html("");
                $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                    + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                    + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                    + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                    + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                    + "<circle class='path' fill='none' stroke='#3C8DBC' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                    + "<polyline class='path' fill='none' stroke='#7DB0D5' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                    + "<circle class='spin' fill='none' stroke='#3C8DBC' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                    + "</svg>"
                    + "</div>"
                    + "<p class='alert-box'>" + msg + "</p>");
                $("#btnYesConfirmYesNo").off('click').click(function () {
                    if ($("#directorDashboard").val() == 1) {
                        $('#modalConfirmYesNo').modal('hide');
                        new_director()
                        $('#director_modal').modal('show');
                        drawingGraphs()
                    } else {
                        $('#modalConfirmYesNo').modal('hide');
                        reload_table();
                        new_director()
                    }
                });

                $("#btnNoConfirmYesNo").off('click').click(function () {
                    if ($("#directorDashboard").val() == 1) {
                        $("#director-add").hide();
                        $('#btnCloseForm_director').click();
                        $('#modalConfirmYesNo').modal('hide');
                    } else {
                        $("#director-add").hide();
                        $('#btnCloseForm_director').click();
                        reload_table();
                        ajax_issued_shares();
                        $('#modalConfirmYesNo').modal('hide');
                    }

                    if ($("#directorDashboard").val() == 1) {

                        // Get Director Data
                        $.ajax({
                            url: siteUrl + "Director/ajax-get_details",
                            type: "GET",
                            dataType: "JSON",
                            success: function (data) {
                                $('#director_dashboard_total').text(data.currency + number_format(data.total, 0, '.', ','));
                                drawingGraphs()
                            },
                            error: function (xhr, ajaxOptions, thrownError) {
                                alert('Error adding / update data');

                            }
                        })
                    }

                });
            }

            $('#btnSave_director_' + id).text('save'); //change button text
            $('#btnSave_director_' + id).attr('disabled', false); //set button enable


        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error adding / update data');
            $('#btnSave_director_' + id).text('save'); //change button text
            $('#btnSave_director_' + id).attr('disabled', false); //set button enable

        }
    });
}

function save_investor() {
    $('#btnSave_investor').text('saving...'); //change button text
    $('#btnSave_investor').attr('disabled', true); //set button disable
    var url;
    if (save_method_investor == 'save') {
        url = siteUrl + 'Investor/ajax-add';
    } else {
        url = siteUrl + 'Investor/ajax-update';
    }


    var formData = new FormData($('#form_investor')[0]);

    // ajax adding data to database
    $.ajax({
        url: url,
        type: "POST",
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
            var obj = jQuery.parseJSON(data);
            if (obj['status']) //if success close modal and reload ajax table
            {
                if (save_method_investor == 'add') {
                    var msg = "Investor added successfully, <br/> Do you want to add another ???"
                } else {
                    var msg = "Investor edited successfully !!! <br/> Do you want to add Investor ???"
                }
                $('#modalConfirmYesNo').modal('show');
                $("#lblTitleConfirmYesNo").html("");
                $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                    + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                    + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                    + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                    + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                    + "<circle class='path' fill='none' stroke='#3C8DBC' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                    + "<polyline class='path' fill='none' stroke='#7DB0D5' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                    + "<circle class='spin' fill='none' stroke='#3C8DBC' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                    + "</svg>"
                    + "</div>"
                    + "<p class='alert-box'>" + msg + "</p>");

                $("#btnYesConfirmYesNo").off('click').click(function () {
                    if ($("#investorDashboard").val() == 1) {
                        add_investor();
                        $('#investor_modal').modal('show');
                        $('#modalConfirmYesNo').modal('hide');
                    } else {
                        add_investor();

                        reload_table_investor();
                        $('#investor_modal').modal('show');

                        $('#modalConfirmYesNo').modal('hide');
                    }

                });

                $("#btnNoConfirmYesNo").off('click').click(function () {
                    if ($("#investorDashboard").val() == 1) {
                        $('#modalConfirmYesNo').modal('hide');
                    } else {
                        //cancel_investor();
                        reload_table_investor();
                        $('#modalConfirmYesNo').modal('hide');
                    }

                });

                // Get Investor Data
                if ($("#investorDashboard").val() == 1) {
                    $.ajax({
                        url: siteUrl + "Investor/ajax-get_details",
                        type: "GET",
                        dataType: "JSON",
                        success: function (data) {
                            $('#investor_dashboard_total').text(data.currency + number_format(data.total, 0, '.', ','));
                            drawingGraphs()
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert('Error adding / update data');

                        }
                    })
                }
            }

            $('#btnSave_investor').text('save'); //change button text
            $('#btnSave_investor').attr('disabled', false); //set button enable

        },
        error: function (jqXHR, textStatus, errorThrown) {

            alert('Error adding / update data');
            $('#btnSave_investor').text('save'); //change button text
            $('#btnSave_investor').attr('disabled', false); //set button enable

        }
    });

}

// Save One Time Cost
function save_onetimecost() {
    $('#btnSave_one').text('saving...'); //change button text
    $('#btnSave_one').attr('disabled', true); //set button disable
    var url;

    if (save_method_one == 'add') {
        url = site_url + "onetimecost/ajax-add";
    } else {
        url = site_url + "onetimecost/ajax-update";
    }

    // ajax adding data to database
    $.ajax({
        url: url,
        type: "POST",
        data: $('#form_onetime').serialize(),
        dataType: "JSON",
        success: function (data) {
            if (data.status) //if success close modal and reload ajax table
            {

                if (save_method_one == 'add') {
                    var msg = "One time cost added successfully, <br/> Do you want to add another one time cost???"
                } else {
                    var msg = "One time cost edited successfully !!! <br/> Do you want to add another one time cost ???"
                }
                $('#onetimecost_modal').modal('hide');
                $('#modalConfirmYesNo').modal('show');

                $("#lblTitleConfirmYesNo").html("");
                $("#lblMsgConfirmYesNo").html("<div class='checkmark'>" +
                    "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" +
                    "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" +
                    "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" +
                    "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" +
                    "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" +
                    "<polyline class='path' fill='none' stroke='#7DB0D5' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" +
                    "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" +
                    "</svg>" +
                    "</div>" +
                    "<p class='alert-box'>" + msg + "</p>");

                $("#btnYesConfirmYesNo").off('click').click(function () {
                    if ($("#oneTimeCostDashboard").val() == 1) {
                        add_onetimecost(type);
                        $('#modalConfirmYesNo').modal('hide');
                    } else {
                        add_onetimecost(type);
                        reload_table2();

                        $('#modalConfirmYesNo').modal('hide');
                    }

                    // Get onetimecost Data
                    $.ajax({
                        url: siteUrl + "Onetimecost/ajax-get_details",
                        type: "GET",
                        dataType: "JSON",
                        success: function (data) {
                            $('#onetimecost_dashboard_total').text(data.currency + number_format(data.total, 0, '.', ','));
                            drawingGraphs()
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert('Error adding / update data');

                        }
                    })

                    // Get Plant & Equipment
                    $.ajax({
                        url: siteUrl + "Onetimecost/ajax-get_detail_plant",
                        type: "GET",
                        dataType: "JSON",
                        success: function (data) {
                            $('#plantequipment_dashboard_total').text(data.currency + number_format(data.total, 0, '.', ','));
                            $('.plantEquipmentTd').text(data.currency + number_format(data.total, 0, '.', ','));
                            drawingGraphs()
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert('Error adding / update data');

                        }
                    })

                    // Get Land & building Data
                    $.ajax({
                        url: siteUrl + "Onetimecost/ajax-get_detail_land",
                        type: "GET",
                        dataType: "JSON",
                        success: function (data) {
                            $('#landbuilding_dashboard_total').text(data.currency + number_format(data.total, 0, '.', ','));
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert('Error adding / update data');

                        }
                    })

                });

                $("#btnNoConfirmYesNo").off('click').click(function () {
                    //$('#modal_form_one').modal('hide');
                    //cancel_one();
                    if ($("#oneTimeCostDashboard").val() == 1) {
                        $('#modalConfirmYesNo').modal('hide');
                        $('#onetimecost_modal').modal('hide')
                    } else {
                        reload_table2();
                        $('#modalConfirmYesNo').modal('hide');
                        $('#onetimecost_modal').modal('hide');
                    }

                });


                // Get onetimecost Data
                $.ajax({
                    url: siteUrl + "Onetimecost/ajax-get_details",
                    type: "GET",
                    dataType: "JSON",
                    success: function (data) {
                        $('.securityDepositTd').text(data.currency + number_format(data.ip_total, 0, '.', ','));
                        $('.intellectualPropertyTd').text(data.currency + number_format(data.sd_total, 0, '.', ','));
                        $('.oneTimeCostTd').text(data.currency + number_format(data.onc_total, 0, '.', ','));
                        $('.totalCashSpend').text(data.currency + number_format(data.total, 0, '.', ','));
                        $('#onetimecost_dashboard_total').text(data.currency + number_format(data.total, 0, '.', ','));
                        drawingGraphs()
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert('Error adding / update data');

                    }
                })

                // Get Plant & Equipment
                $.ajax({
                    url: siteUrl + "Onetimecost/ajax-get_detail_plant",
                    type: "GET",
                    dataType: "JSON",
                    success: function (data) {
                        $('#plantequipment_dashboard_total').text(data.currency + number_format(data.total, 0, '.', ','));
                        $('#plantequipment_table_total').text(data.currency + number_format(data.total, 0, '.', ','));
                        $('.plantEquipmentTd').text(data.currency + number_format(data.total, 0, '.', ','));
                        drawingGraphs()
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert('Error adding / update data');

                    }
                })

                // Get Land & building Data
                $.ajax({
                    url: siteUrl + "Onetimecost/ajax-get_detail_land",
                    type: "GET",
                    dataType: "JSON",
                    success: function (data) {
                        $('#landbuilding_dashboard_total').text(data.currency + number_format(data.total, 0, '.', ','));
                        $('.landBuildingTd').text(data.currency + number_format(data.total, 0, '.', ','));
                        $('#landbuilding_table_total').text(data.currency + number_format(data.total, 0, '.', ','));
                        drawingGraphs()
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert('Error adding / update data');

                    }
                })
            }

            $('#btnSave_one').text('save'); //change button text
            $('#btnSave_one').attr('disabled', false); //set button enable


        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error adding / update data');
            $('#btnSave_one').text('save'); //change button text
            $('#btnSave_one').attr('disabled', false); //set button enable

        }
    });
}
// Save Expense
function save_expenses() {

    $('#btnSave').text('saving...'); //change button text
    $('#btnSave').attr('disabled', true); //set button disable
    var url;

    if (save_method_expense == 'add') {

        url = siteUrl + "expenses/ajax-add";
    } else {

        url = siteUrl + "expenses/ajax-update";
    }



    $.ajax({
        url: url,
        type: "POST",
        data: $('#form_expenses').serialize(),
        dataType: "JSON",
        success: function (data) {

            if (data.status) //if success close modal and reload ajax table
            {
                if (save_method_expense == 'add') {
                    var msg = "Expense added successfully, <br/> Do you want to add another expenses?"
                } else {
                    var msg = "Expense edited successfully !!! <br/> Do you want to add expense?"
                }
                $('#expense_modal').modal('hide');
                $('#expense1').trigger('click');
                $('#modalConfirmYesNo').modal('show');

                $("#lblTitleConfirmYesNo").html("");
                $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                    + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                    + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                    + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                    + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                    + "<circle class='path' fill='none' stroke='#3C8DBC' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                    + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                    + "<circle class='spin' fill='none' stroke='#3C8DBC' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                    + "</svg>"
                    + "</div>"
                    + "<p class='alert-box'>" + msg + "</p>");

                $("#btnYesConfirmYesNo").off('click').click(function () {
                    if ($("#expenseDashboard").val() == 1) {
                        add_expenses();
                        reload_expense();
                        drawingGraphs();
                        $('#form_expenses')[0].reset();
                        $('#expense_modal').modal('show');

                        $('#modalConfirmYesNo').modal('hide');
                    } else {
                        add_expenses();
                        $('#form_expenses')[0].reset();
                        $('#expense_modal').modal('show');

                        $('#modalConfirmYesNo').modal('hide');
                    }

                });

                $("#btnNoConfirmYesNo").off('click').click(function () {
                    if ($("#expenseDashboard").val() == 1) {
                        reload_expense();
                        drawingGraphs();
                        $('#modalConfirmYesNo').modal('hide');
                    } else {
                        $('#modalConfirmYesNo').modal('hide');
                    }
                    //$('#modal_form').modal('hide');
                    //cancel_expenses();

                });

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
} /* end function save() */
// Save Product
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
        $("#lblMsgConfirmYesNo").html("<div class='col-sm-3'>" + "<img id='imgfile' class='rounded-circle' src='" + site_url + "assets/images/default-avatar.png' alt='Product Picture' width='80px' height='80px'>" + "</div>" + "<div class='col-sm-9'>" + "If you want to add image <strong>Click on folder icon <i class='fa fa-folder-o'></i>, then select an image <i class='fa fa-file-image-o'></i>.</strong><br/>Do you want to add image now ?" + "</div>");

        $("#btnNoConfirmYesNo").off('click').click(function () { // ajax adding data to database
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
                        clearForm();
                        if (save_method_product == 'add') {
                            var msg = "Product added successfully, <br/> Do you want to add another ???"
                        } else {
                            var msg = "Product edited successfully !!! <br/> Do you want to add Product ???"
                        }
                        $('#modalConfirmYesNo').css('z-index', '9999');
                        $('#modalConfirmYesNo').modal('show');

                        $("#lblTitleConfirmYesNo").html("");
                        $("#lblMsgConfirmYesNo").html("<div class='checkmark'>" + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" + "</svg>" + "</div>" + "<p class='alert-box'>" + msg + "</p>");

                        $("#btnYesConfirmYesNo").off('click').click(function () {
                            if ($("#ProductsDashboard").val() == 1) {
                                $('#modalConfirmYesNo').modal('hide');
                                datalocalproduct();
                                dataimpproduct();
                                drawingGraphs();
                                $("#myModal2").modal('show');
                                $('#product_step1').trigger('click');
                            } else {
                                selectPanel(0);
                                drawCollectionView();

                                $('#modalConfirmYesNo').modal('hide');
                                $("#myModal2").modal('show');
                                $('#product_step1').trigger('click');
                            }


                        });

                        $("#btnNoConfirmYesNo").off('click').click(function () {
                            if ($("#ProductsDashboard").val() == 1) {
                                $("#modalConfirmYesNo").modal('hide');
                                datalocalproduct();
                                dataimpproduct();
                                drawingGraphs();
                            } else {
                                drawCollectionView();
                                // $('#btnCloseForm').click();
                                $("#modalConfirmYesNo").modal('hide');
                            }



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

                    if (save_method_product == 'add') {
                        var msg = "Product added successfully, <br/> Do you want to add another product?"
                    } else {
                        var msg = "Product edited successfully !!! <br/> Do you want to add another product ?"
                    }
                    $('#modalConfirmYesNo').css("z-index", "9999");
                    $('#modalConfirmYesNo').modal('show');

                    $("#lblTitleConfirmYesNo").html("");
                    $("#lblMsgConfirmYesNo").html("<div class='checkmark'>" + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" + "</svg>" + "</div>" + "<p class='alert-box'>" + msg + "</p>");

                    $("#btnYesConfirmYesNo").off('click').click(function () { // add_localproduct();
                        clearForm();
                        if ($("#ProductsDashboard").val() == 1) {
                            $('#myModal2').modal('show');
                            datalocalproduct();
                            dataimpproduct();
                            drawingGraphs();
                            $("#product_step1").trigger('click');
                            $('#modalConfirmYesNo').modal('hide');
                        } else {
                            drawCollectionView();

                            $('#myModal2').modal('show');
                            $("#product_step1").trigger('click');
                            $('#modalConfirmYesNo').modal('hide');

                        }

                    });

                    $("#btnNoConfirmYesNo").off('click').click(function () {
                        clearForm();
                        if ($("#ProductsDashboard").val() == 1) {
                            $('#stock_modal').modal('hide');
                            $("#myModal2").modal('hide');
                            datalocalproduct();
                            dataimpproduct();
                            drawingGraphs();
                            $('#modalConfirmYesNo').modal('hide');
                        } else {
                            $('#stock_modal').modal('hide');
                            drawCollectionView();
                            $("#myModal2").modal('hide');
                            $('#modalConfirmYesNo').modal('hide');
                        }

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

// Save Service Revenue

function saveimported() {
    $('#btnSave').text('saving...'); //change button text
    $('#btnSave').attr('disabled', true); //set button disable
    var url;

    if (save_method_service_revenue == 'add') {
        url = site_url + "Service_setup/ajax-addimported";
    } else {
        url = site_url + "Service_setup/ajax-updateimported";
    }

    //loading_show();
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

            if (obj['status']) //if success close modal and reload ajax table
            {
                if (save_method_service_revenue == 'add') {
                    var msg = "Services added successfully, <br/> Do you want to add another service?"
                } else {
                    var msg = "Services edited successfully !!! <br/> Do you want to add another service?"
                }
                $('#service_setup').modal('hide');
                $('#modalConfirmYesNo').modal('show');

                $("#lblTitleConfirmYesNo").html("");
                $("#lblMsgConfirmYesNo").html("<div class='checkmark'>" +
                    "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" +
                    "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" +
                    "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" +
                    "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" +
                    "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" +
                    "<polyline class='path' fill='none' stroke='#7DB0D5' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" +
                    "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" +
                    "</svg>" +
                    "</div>" +
                    "<p class='alert-box'>" + msg + "</p>");

                $("#btnYesConfirmYesNo").off('click').click(function () {
                    if ($("#serviceRevenueDashboard").val() == 1) {
                        $('#service_setup').modal('show');
                        $('#modalConfirmYesNo').modal('hide');
                    } else {
                        clearFormServiceRevenue();
                        //$('#import_tab1').trigger('click');
                        $('#service_setup').modal('show');
                        //$('#import_tab1').trigger('click');
                        $('#modalConfirmYesNo').modal('hide');
                    }
                });

                $("#btnNoConfirmYesNo").off('click').click(function () {
                    if ($("#serviceRevenueDashboard").val() == 1) {
                        $('#service_setup').modal('hide');
                        $('#modalConfirmYesNo').modal('hide');
                        dataservice();
                        drawingGraphs();
                        clearFormServiceRevenue();
                    } else {
                        $('#service_setup').modal('hide');
                        //$('#impmodal_form').modal('hide');
                        reload_tableimported();
                        $('#modalConfirmYesNo').modal('hide');
                    }

                });


            }

            $('#btnSave').text('save'); //change button text
            $('#btnSave').attr('disabled', false); //set button enable

            $('#impmodal_form').modal('hide');


        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error adding / update data');
            $('#btnSave').text('save'); //change button text
            $('#btnSave').attr('disabled', false); //set button enable

        }
    });
}

// Save Online Revenue

function save_revenue() {
    var form = $('#revenue_form').serialize();
    $.ajax({
        url: site_url + "revenue/AjaxSavingSales",
        type: "POST",
        data: form,
        dataType: 'json',
        encode: true,
        success: function (data) { // console.log(data);return false;
            if (data.status) {
                $('#modalConfirmYesNo').css('z-index', '9999');
                $('#modalConfirmYesNo').modal('show');
                $("#lblTitleConfirmYesNo").html("");
                $("#lblMsgConfirmYesNo").html("<div class='checkmark'>" + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" + "</svg>" + "</div>" + "<p class='alert-box'>Your Sales has been saved successfully !!!</p>");

                $("#btnYesConfirmYesNo").hide();
                $("#btnNoConfirmYesNo").html('Close');

                $("#btnNoConfirmYesNo").off('click').click(function () {

                    if ($("#onlineRevenueDashboard").val() == 1) {
                        $('#modalConfirmYesNo').modal('hide');
                        datarevenue();
                        drawingGraphs();
                    } else {
                        $('#modalConfirmYesNo').modal('hide');
                        // $("#btnYesConfirmYesNo").show();
                        // $("#btnNoConfirmYesNo").html('No');

                        location.reload();
                    }


                });
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Error adding / update data');
            console.log(xhr.status);
            console.log(xhr.responseText);
            console.log(thrownError);
        }
    });
}


// Save Person

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
                    $('#personmodal_form').modal('hide');
                    if (obj['status']) { // if success close modal and reload ajax table

                        if (save_method == 'add') {
                            var msg = "Person added successfully, <br/> Do you want to add another person?"
                        } else {
                            var msg = "Person edited successfully !!! <br/> Do you want to add another person?"
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
                            clearFormPerson();
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
                                table_people_summary.ajax.reload(null, false);
                                add_person();
                                $('#modalConfirmYesNo').modal('hide');
                            } else {
                                drawCollectionView();
                                table_people_summary.ajax.reload(null, false);

                                add_person();
                                $('#modalConfirmYesNo').modal('hide');
                            }


                        });

                        $("#btnNoConfirmYesNo").off('click').click(function () {
                            if ($("#personDashboard").val() == 1) {
                                $("#people_modal").modal('hide');
                                table_people_summary.ajax.reload(null, false);
                                $('#modalConfirmYesNo').modal('hide');
                            } else {
                                $("#people_modal").modal('hide');
                                drawCollectionView()
                                table_people_summary.ajax.reload(null, false);

                                $('#modalConfirmYesNo').modal('hide');
                            }
                        });
                        if ($("#personDashboard").val() == 1) {
                            drawingGraphs()
                        }

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
                        var msg = "Person added successfully, <br/> Do you want to add another person?"
                    } else {
                        var msg = "Person edited successfully !!! <br/> Do you want to add another person?"
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
                        clearFormPerson();
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
                            clearFormPerson();
                            table_people_summary.ajax.reload(null, false);
                            add_person();
                            $('#modalConfirmYesNo').modal('hide');
                        } else {
                            clearFormPerson();
                            drawCollectionView();
                            table_people_summary.ajax.reload(null, false);
                            add_person();
                            $('#modalConfirmYesNo').modal('hide');
                        }


                    });

                    $("#btnNoConfirmYesNo").off('click').click(function () { // $('#personmodal_form').modal('hide');
                        if ($("#personDashboard").val() == 1) {
                            $("#people_form").hide();
                            table_people_summary.ajax.reload(null, false);
                            $('#modalConfirmYesNo').modal('hide');
                        } else {
                            $("#people_form").hide();
                            drawCollectionView()
                            table_people_summary.ajax.reload(null, false);
                            $('#modalConfirmYesNo').modal('hide');
                        }
                    });

                    drawingGraphs()

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

// Save Functions End



// Cancel Functions Start


// Cancel Director
function cancel_director() {
    $("#collapseExample_directors").collapse("hide");
    $('#modalConfirmYesNo').zIndex(9999);
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure wanted to cancel this item?");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        $('[name="investor_name"]').val("");
        $('[name="investor_amount_paid"]').val("");

        $("#director_modal").modal('hide');
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
    });
}

// Cancel Investor
function cancel_investor() {
    $("#collapseExample_investor").collapse("hide");
    $('#modalConfirmYesNo').zIndex(9999);
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure wanted to cancel this item?");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        $('[name="investor_name"]').val("");
        $('[name="investor_amount_paid"]').val("");
        $('[name="netProfit"]').val("");
        $('[name="vat_paid_in_days"]').val("");
        $("#investor_modal").modal('hide');
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
    });

}

// Clear Bank Loan
$(document).on('click', '#clear_bank_loan', function (e) {
    $.ajax({
        type: "POST",
        url: siteUrl + "startup/ajax-delete_loan_data",
        dataType: "json",
        success: function (data) {

            if (data.status == true) {
                $('#bankloan_placeholder').html('');

            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error adding / update data');
            $('#btnSave').text('save'); //change button text
            $('#btnSave').attr('disabled', false); //set button enable

        }
    });
});


function cancel_expense() {
    $("#collapseExample_expense_budget").collapse("hide");
    $('#modalConfirmYesNo').zIndex(9999);
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure wanted to cancel this item?");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        $('#form_expenses')[0].reset();
        $("#expense_modal").modal('hide');
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
    });
}

function cancel_onetimecost() {
    $("#collapseExample_one_time").collapse("hide");
    $('#modalConfirmYesNo').zIndex(9999);
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure wanted to cancel this item?");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        $('#form_onetime')[0].reset();
        $("#onetimecost_modal").modal('hide');
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
    });
}

function cancel_bank() {

    $('[name="amount"]').val("")

    $('[name="apr"]').val("")

    $('[name="years"]').val("")

    btnCloseForm_bank.click();
}

function cancel_finance() {
    $("#collapseExample_laon").collapse("hide");
    $('#modalConfirmYesNo').zIndex(9999);
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure wanted to cancel this loan?");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        $('#formID')[0].reset();

        $("#amount-error").hide();
        $("#years-error").hide();
        $("#apr-error").hide();

        $("#finance_modal").modal('hide');
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
    });
}

// Cancel Service Revenue
function cancel_service() {
    $("#collapseExample_ser_1").collapse("hide");
    $("#collapseExample_ser_2").collapse("hide");

    $('#modalConfirmYesNo').css('z-index', '9999');
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure want to cancel this service?");
    $("#btnYesConfirmYesNo").off('click').click(function () {

        clearFormServiceRevenue();
        //$("#servicestep1-1" ).tabs( { active: 1 } );//import_tab1  servicestep1-1
        var nextId = "servicestep1-1";
        //$('[href=#' + nextId + ']').tab('show');

        $("#service_setup").modal('hide');
        $('#modalConfirmYesNo').css('z-index', 'unset');
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').css('z-index', 'unset');
        $('#modalConfirmYesNo').modal('hide');
    });
}

// Cancel Online Revenue

function cancel() {
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure wanted to cancel this entry?");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        //clearForm();
        $("#revenue_form").hide();
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
    });
}

// Start Clear Form

// Clear Local Product Monthly Sale
function clearMonthlySale() {
    $('#local_distribution').val('');
    $('#wholesale').val('');
    $('#online_sales').val('');
    $('#export').val('');

    $('#markup_local_distribution').val('');
    $('#markup_wholesale').val('');
    $('#markup_online_sales').val('');
    $('#markup_export').val('');

    $('#sale_local_distribution').val('');
    $('#sale_wholesale').val('');
    $('#sale_online_sales').val('');
    $('#sale_export').val('');

    $('#distribution tr').find('td').each(function () {
        $(this).text('');
    });
}

// Clear Product Form
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
    //save_method == 'add';
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

// Service Revenue

function clearFormServiceRevenue() {
    $('[name="importedid"]').val('');
    $('[name="impser_serid"]').val('');
    $('[name="impser_contractors"]').val('');
    $('[name="impser_desc"]').val('');
    $('[name="impser_hrswork"]').val('');
    $('[name="impser_rateperhr"]').val('');

    $('[name="impser_callourfee"]').val('');
}


// Clear Person
function clearFormPerson() {

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
    $('#btnSavePerson').html('<i class="fa fa-check-circle-o"></i> Finish');
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

// End Clear Form
// Cancel Functions End

function add_shares() {
    $('#share_modal').modal('show');
    $('#sharestep1').trigger('click');
    $.ajax({
        url: siteUrl + "Report/IssuedShares/ajax-issued_shares",
        type: "GET",
        dataType: "JSON",
        success: function (issue) {
            $('#issues_shared_1').val(issue['issues_shared_1']);
            $('#share_issue_5').val(issue['share_issue_5']);
            $('#share_issue_9').val(issue['share_issue_9']);

            $('#share_issue_11').val(issue['share_issue_11']);

            $('#share_issue_13').val(issue['share_issue_13']);
            $('#price_share_3').val(issue['price_share_3']);
            $('#price_share_4').val(issue['price_share_4']);
            $('#price_share_5').val(issue['price_share_5']);

            $('#price_share_6').val(issue['price_share_6']);
            $('#price_share_7').val(issue['price_share_7']);

            $('#director_0_1').val(issue['director_0_1']);
            $('#director_1_1').val(issue['director_1_1']);

            $('#director_2_1').val(issue['director_2_1']);
            $('#director_3_1').val(issue['director_3_1']);
            $('#required_shares_1').val(issue['required_shares_1']);

        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Error adding / update data');

        }

    });
}

function edit_expense(e_id) {

    var id = e_id;
    save_method_expense = 'update';
    $("label.error").remove();
    //$('#form')[0].reset(); // reset form on modals
    $('.form-group').removeClass('has-error'); // clear error class
    $('.help-block').empty(); // clear error string
    $('#expense_modal').modal('show');
    //Ajax Load data from ajax
    $.ajax({
        url: siteUrl + "expenses/ajax-edit/" + id,
        type: "GET",
        dataType: "JSON",
        success: function (data) {

            //---------for purpose selection ----------
            var purposeval = data.purpose;
            $('#selectDescription optgroup').hide();
            $('#selectDescription').val('');
            $('#selectDescription optgroup[label="' + purposeval + '"]').css({ 'display': 'block' });
            //---------for purpose selection ----------

            $('[name="id"]').val(data.id);
            $('[name="description"]').val(data.description);
            $('[name="weekly_cost"]').val(number_format(data.weekly_cost, 0, '.', ','));
            $('[name="monthly_cost"]').val(number_format(data.monthly_cost, 0, '.', ','));
            $('[name="quarterly_cost"]').val(number_format(data.quarterly_cost, 0, '.', ','));
            $('[name="yearly_cost"]').val(number_format(data.yearly_cost, 0, '.', ','));
            $('[name="purpose"]').val(data.purpose);
            $('[name="selectDescription"]').val(data.selectDescription);
            $('[name="num_month"]').val(data.num_month);

            checkempty();

            $('input').each(function () {
                var $this = $(this);
                if ($this.val())
                    $this.addClass('used');
                else
                    $this.removeClass('used');
            })


            var purpose = data.purpose;
            $.ajax({
                type: "GET",
                dataType: "json",
                encode: true,
                url: site_url + "Startup/loadSelectDescription/" + purpose,
                success: function (data) {
                    $('#selectDescription').empty();
                    var op = '<option value="">Select</option>';
                    $('#selectDescription').append(op);
                    $.each(data.row, function (key, value) {
                        var op = '<option value="' + value.description + '">' + value.description + '</option>';
                        $('#selectDescription').append(op);

                    });

                }
            });

            calculateMonth();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            throw (errorThrown);
        }
    });
} /* end function edit() */


$('body').on('change', '#selectDescription', function () {

    var contactID = $(this).val();
    if (contactID == '') {
        $("#description").val('');
    }
    /* $.ajax({
     type: "GET",
     dataType: "json",
     encode:true,
     url: site_url+"Startup/AjaxLoadSelectBox/" +contactID,
     success: function (data) {
        $('#description').val(contactID);
        checkempty();
        $('input').each(function () {
    var $this = $(this);
    if ($this.val())
        $this.addClass('used');
    else
        $this.removeClass('used');
})
    }
});*/
});

//on change function starts whether marketing,other,public relations

$('body').on('change', '#purpose', function () {
    var purpose = $(this).val();
    if (purpose == '') {
        $('#selectDescription').val('');
    }

    /*$.ajax({
     type: "GET",
     dataType: "json",
     encode:true,
     url: site_url+"Startup/loadSelectDescription/"+purpose,
      success: function (data) {
         $('#selectDescription').empty();
          var op = '<option value="">Select</option>';
            $('#selectDescription').append(op);
         $.each(data.row, function(key,value) {
            var op = '<option value="'+value.description+'">'+value.description+'</option>';
            $('#selectDescription').append(op);


        });
       }
    });*/
});
//on change function ends whether marketing,other,public relations
function reload_table1() {
    table.ajax.reload(function (json) {
        reload_summary();
    });

}

// Online Revinue functions

$('#max_view').on('change', function () {
    calculationRevenue(cur);
    // $(this).mask('########0', {reverse: true})
    $(this).val(number_format($(this).val(), 0, '.', ','));
});

$('#no_days').on('change', function () {
    calculationRevenue(cur);
    $(this).mask('########0', { reverse: true })
});

$('#percent_purch').on('change', function () {
    calculationRevenue(cur);
    // $(this).mask('##0', {reverse: true})
    $(this).val(number_format($(this).val(), 2, '.', ',') + '%');
});

$('#no_purchase').on('change', function () {
    calculationRevenue(cur);
    //$(this).mask('########0', {reverse: true})
    $(this).val(number_format($(this).val(), 0, '.', ','));
});

$('#no_reorder').on('change', function () {
    calculationRevenue(cur);
    // $(this).mask('########0', {reverse: true})
    $(this).val(number_format($(this).val(), 0, '.', ','));
});
$('#product_price').on('change', function () {
    calculationRevenue(cur);
    // $(this).mask('########0', {reverse: true})

    $(this).val(cur + '' + number_format($(this).val(), 2, '.', ','));

});

$('#projected_cost').on('change', function () {
    calculationRevenue(cur);
    // $(this).mask('########0', {reverse: true})

    $(this).val(number_format($(this).val(), 2, '.', ',') + '%');
});

$('#sales_increase').on('change', function () { // $(this).mask('#00', {reverse: true})
    $(this).val(number_format($(this).val(), 2, '.', ',') + '%');
});



function calculationRevenue(cur) { /*change table unit sales*/
    $('#potential_cust_yearly').html(parseFloat($('#max_view').val()) * parseFloat($('#no_days').val()));
    $('#potential_cust_quaterly').html((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val()) / 4));
    $('#potential_cust_monthly').html((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val()) / 12));
    $('#potential_cust_weekly').html((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val()) / 52));
    $('#actual_cust_yearly').html((((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val())) * $('#percent_purch').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) / 100));
    $('#actual_cust_quaterly').html((((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val())) * $('#percent_purch').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) / 100) / 4);
    $('#actual_cust_monthly').html((((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val())) * $('#percent_purch').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) / 100) / 12);
    $('#actual_cust_weekly').html((((parseFloat($('#max_view').val()) * parseFloat($('#no_days').val())) * $('#percent_purch').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '').replace(/%/g, '')) / 100) / 52);

    $('#avg_purchase').val(parseFloat($('#no_purchase').val()) * parseFloat($('#product_price').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')));

    $('#avg_cost').val((parseFloat($('#product_price').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, '')) * parseFloat($('#projected_cost').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))) / 100);

    $('#customer_cost').val((parseFloat($('#no_purchase').val()) * parseFloat($('#avg_cost').val().replace(/,/g, '').replace(/\$|\€|\₹|\£\%/g, ''))) * parseFloat($('#no_reorder').val()));

    /*number format for each readonly fields on the form*/
    $('#revenue_form').find('input[type=text][readonly]').each(function () {
        $(this).val(cur + '' + number_format($(this).val(), 0, '.', ','));
        $(this).prop('readonly', true);
    })
}

// Local Product Functions

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
    var newRow = '<tr id="row_id_' + counter + '">' + '<input name="id_' + counter + '" id="id_' + counter + '" type="hidden">' + '<td id="td_type_' + counter + '">' + '<div class="form-group is-empty no-margin"><input name="type_' + counter + '" class="form-control" id="type_' + counter + '" placeholder="Enter Item Type" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_description_' + counter + '">' + '<div class="form-group is-empty no-margin"><input name="description_' + counter + '" class="form-control" id="description_' + counter + '" placeholder="Enter Item Description" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_qty_' + counter + '">' + '<div class="form-group no-margin"><input name="qty_' + counter + '" class="form-control used numberSign" id="qty_' + counter + '" onchange="getTotalMts(' + counter + ')" value="0" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_price_' + counter + '">' + '<div class="form-group no-margin"><input name="price_' + counter + '" class="form-control used currencySign" id="price_' + counter + '" onchange="getTotal(' + counter + ')" value="0" type="text"></input><span class="material-input"></span></div></td>' + '<td id="td_totmts_' + counter + '">0</td>' + '<td id="td_total_' + counter + '">0</td>' + '<td id="td_vat_' + counter + '">0</td>' + '<td id="td_totcost_' + counter + '">0</td>' + '<td id="td_avecost_' + counter + '">0</td></tr>';
    var newRow1 = "<tr id='row_id_" + counter + "'>" + "<input name='id_" + counter + "' id='id_" + counter + "' type='hidden'>" + "<td id='td_type_" + counter + "'>" + "<input type='text' name='type_" + counter + "' class='form-control' placeholder='Enter Item Type' id='type_" + counter + "'>" + "</td>" + "<td id='td_description_" + counter + "'>" + "<input type='text' name='description_" + counter + "' class='form-control' placeholder='Enter Item Description' id='description_" + counter + "'>" + "</td>" + "<td id='td_qty_" + counter + "'>" + "<input type='text' name='qty_" + counter + "' class='form-control numberSign' id='qty_" + counter + "' onChange='getTotalMts(" + counter + ")' value='0'>" + "</td>" + "<td id='td_price_" + counter + "'>" + "<input type='text' name='price_" + counter + "' class='form-control currencySign' id='price_" + counter + "' onChange='getTotal(" + counter + ")' value='0'>" + "</td>" + "<td id='td_totmts_" + counter + "'>0" + "</td>" + "<td id='td_total_" + counter + "'>0" + "</td>" + "<td id='td_vat_" + counter + "'>0" + "</td>" + "<td id='td_totcost_" + counter + "'>0" + "</td>" + "<td id='td_avecost_" + counter + "'>0" + "</td>" + "</tr>";
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

function getTotalMts(i) {

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

    if ($('#qty_' + i).val().replace(/\$|\€|\£/g, '') == "") {

        $('#qty_' + i).val(0);

    }

    total_mts = parseInt($('#sp_13').html().replace(/,/g, '')) * parseFloat($('#qty_' + i).val().replace(/\$|\€|\£/g, '')).toFixed(2);

    if (total_mts == 0) {
        $('#td_totmts_' + i).html(total_mts);
    } else {
        $('#td_totmts_' + i).html(number_format(total_mts, 2, '.', ','))
    }
}

// Validate Name
function validateName(modal, id, tableFieldName, table) {
    var data;
    var firstName = "";
    var lastName = "";
    var returnStatus = "";
    if (table == 'people') {
        firstName = $("#person_fname").val();
        lastName = $("#person_lname").val();
        if (firstName.length > 0 && lastName.length > 0) {
            data = {
                value1: firstName, value2: lastName, fieldName1: 'f_name', fieldName2: 'l_name', table: table
            }
        }

    } else {
        let value = $("#" + id).val();
        data = { value: value, fieldName: tableFieldName, table: table }
    }
    if (data) {
        $.ajax({
            url: site_url + "startup/validateName",
            data: data,
            type: "POST",
            async: false,
            dataType: "JSON",
            success: function (data) {
                returnStatus = data.status;
                if (data.status === true) {
                    $("#btnNoConfirmYesNo").hide();
                    $("#btnYesConfirmYesNo").text("Ok");
                    $('#modalConfirmYesNo').modal('show');

                    $("#lblTitleConfirmYesNo").html("Error");
                    $("#lblMsgConfirmYesNo").html(data.text);

                    $("#btnYesConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');
                        $('#' + modal).modal('show');
                    });

                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(errorThrown);

            }
        });
    }
    return returnStatus;

}

function getTotal(i) {

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


    var total = 0;
    var sum_total = 0;
    var vat = 0;
    var sum_vat = 0;
    var tot_cost = 0;
    var sum_totcost = 0;
    var ave_cost = 0;
    var sum_totave = 0;
    products_cost = 0;

    if ($('#price_' + i).val().replace(/\$|\€|\£/g, '') == "") {
        $('#price_' + i).val(0);
    }

    total = (parseInt($('#sp_13').html().replace(/,/g, '')) * parseFloat($('#qty_' + i).val().replace(/\$|\€|\£/g, '')).toFixed(2)) * parseFloat($('#price_' + i).val()).toFixed(2)

    if (total == 0) {
        $('#td_total_' + i).html(cur + total);
    } else {
        $('#td_total_' + i).html(cur + number_format(total, 2, '.', ','));
    }

    for (j = 0; j <= counter; j++) {

        sum_total += parseFloat($('#td_total_' + j).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''));
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
        sum_vat += parseFloat($('#td_vat_' + k).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''));
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
        sum_totcost += parseFloat($('#td_totcost_' + l).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''));
    }

    if (sum_totcost == 0) {
        $('.SumTotCost').html(cur + sum_totcost)
    } else {
        $('.SumTotCost').html(cur + number_format(sum_totcost, 2, '.', ','))
    } ave_cost = tot_cost / parseInt($('#sp_13').html().replace(/,/g, ''))

    if (ave_cost == 0) {
        $('#td_avecost_' + i).html(cur + ave_cost);
    } else {
        $('#td_avecost_' + i).html(cur + number_format(ave_cost, 2, '.', ','));
    }

    for (m = 0; m <= counter; m++) {
        sum_totave += parseFloat($('#td_avecost_' + m).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''));
    }

    if (sum_totave == 0) {
        $('.SumAveCost').html(cur + sum_totave)
        $('#bom_cost').val(cur + sum_totave);
    } else {
        $('.SumAveCost').html(cur + number_format(sum_totave, 2, '.', ','))
        $('#bom_cost').val(cur + number_format(sum_totave, 2, '.', ','));
    } products_cost = parseFloat($('#unit_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) + parseFloat($('.SumAveCost').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''));

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
        } MarkUpOnCost = parseFloat($('#rrp_cost').val().replace(/,/g, ''));

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
            } MarkUpOnCost = parseFloat($('#rrp_cost').val().replace(/,/g, ''));

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
        $('#ssp_' + sce).html(cur + number_format($('#sp_' + sce).val().replace(/,/g, '') * products_cost), 0, '.', ',');
        $('#scp_' + sce).html(cur + number_format($('#p_' + sce).val().replace(/,/g, '') * products_cost), 0, '.', ',');
    }
    $('#soq_1').html(cur + number_format(parseInt($('#oq_1').val().replace(/,/g, '')) * parseInt($('#unit_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')), 0, '.', ','));
    $('#scq_1').html(cur + number_format(parseInt($('#soq_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_2').html(cur + number_format(parseInt($('#scq_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_2').html(cur + number_format(parseInt($('#soq_2').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_2').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_2').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_3').html(cur + number_format(parseInt($('#scq_2').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_3').html(cur + number_format(parseInt($('#soq_3').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_3').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_3').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_4').html(cur + number_format(parseInt($('#scq_3').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_4').html(cur + number_format(parseInt($('#soq_4').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_4').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_4').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_5').html(cur + number_format(parseInt($('#scq_4').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_5').html(cur + number_format(parseInt($('#soq_5').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_5').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_5').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_6').html(cur + number_format(parseInt($('#scq_5').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_6').html(cur + number_format(parseInt($('#soq_6').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_6').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_6').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_7').html(cur + number_format(parseInt($('#scq_6').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_7').html(cur + number_format(parseInt($('#soq_7').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_7').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_7').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_8').html(cur + number_format(parseInt($('#scq_7').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_8').html(cur + number_format(parseInt($('#soq_8').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_8').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_8').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_9').html(cur + number_format(parseInt($('#scq_8').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_9').html(cur + number_format(parseInt($('#soq_9').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_9').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_9').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_10').html(cur + number_format(parseInt($('#scq_9').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_10').html(cur + number_format(parseInt($('#soq_10').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_10').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_10').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_11').html(cur + number_format(parseInt($('#scq_10').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_11').html(cur + number_format(parseInt($('#soq_11').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_11').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_11').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    $('#soq_12').html(cur + number_format(parseInt($('#scq_11').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));
    $('#scq_12').html(cur + number_format(parseInt($('#soq_12').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) + parseInt($('#scp_12').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#ssp_12').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')), 0, '.', ','));

    // calcuation is wrong ned to be fix.

    $('#purchasesprice').find('td').each(function () {
        if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))) {
            total_purchasesprice += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))
        }
    })
    $('#sales_projection_price').find('td').each(function () {
        if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))) {
            total_sspprice += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))
        }
    })

    tscp = total_purchasesprice;
    tssp = total_sspprice;
    tsoq = $('#soq_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, '');
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

    $('#spp_1').html(cur + number_format($('#sp_1').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_1').html(cur + number_format($('#sp_1').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_1').html(cur + number_format(parseInt($('#spp_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_1').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_2').html(cur + number_format($('#sp_2').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_2').html(cur + number_format($('#sp_2').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_2').html(cur + number_format(parseInt($('#spp_2').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_2').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_3').html(cur + number_format($('#sp_3').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_3').html(cur + number_format($('#sp_3').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_3').html(cur + number_format(parseInt($('#spp_3').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_3').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_4').html(cur + number_format($('#sp_4').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_4').html(cur + number_format($('#sp_4').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_4').html(cur + number_format(parseInt($('#spp_4').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_4').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_5').html(cur + number_format($('#sp_5').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_5').html(cur + number_format($('#sp_5').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_5').html(cur + number_format(parseInt($('#spp_5').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_5').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_6').html(cur + number_format($('#sp_6').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_6').html(cur + number_format($('#sp_6').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_6').html(cur + number_format(parseInt($('#spp_6').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_6').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_7').html(cur + number_format($('#sp_7').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_7').html(cur + number_format($('#sp_7').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_7').html(cur + number_format(parseInt($('#spp_7').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_7').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_8').html(cur + number_format($('#sp_8').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_8').html(cur + number_format($('#sp_8').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_8').html(cur + number_format(parseInt($('#spp_8').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_8').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_9').html(cur + number_format($('#sp_9').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_9').html(cur + number_format($('#sp_9').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_9').html(cur + number_format(parseInt($('#spp_9').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_9').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_10').html(cur + number_format($('#sp_10').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_10').html(cur + number_format($('#sp_10').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_10').html(cur + number_format(parseInt($('#spp_10').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_10').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_11').html(cur + number_format($('#sp_11').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_11').html(cur + number_format($('#sp_11').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_11').html(cur + number_format(parseInt($('#spp_11').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_11').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    $('#spp_12').html(cur + number_format($('#sp_12').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * MarkUpOnCost), 0, '.', ',');
    $('#pp_12').html(cur + number_format($('#sp_12').val().replace(/,/g, '').replace(/\$|\€|\£/g, '') * products_cost), 0, '.', ',');
    $('#pg_12').html(cur + number_format(parseInt($('#spp_12').html().replace(/,/g, '').replace(/\$|\€|\£/g, '')) - parseInt($('#pp_12').html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))), 0, '.', ',');

    // matematic still not right-- need to fix it
    $('#table_monthly_gross').find('tbody tr:not(#sales_projection_profit, #grossprofit) td').each(function () {
        if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))) {
            total_purchases_profit += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''));
        }


    })
    $('#table_monthly_gross').find('tbody tr:not(#purchasesprofit, #grossprofit) td').each(function () {
        if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))) {
            total_sales_profit += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\£/g, ''))
        }
    })

    tspp = total_sales_profit;
    tpp = total_purchases_profit;

    tpg = parseInt(total_sales_profit) - parseInt(total_purchases_profit)

    $('#spp_13').html(cur + number_format(tspp, 0, '.', ','));
    $('#pp_13').html(cur + number_format(tpp, 0, '.', ','));
    $('#pg_13').html(cur + number_format(tpg, 0, '.', ','));
}

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

    total_mts = (($('#landed_cost').val().replace(/,/g, '').replace(/\$|\€|\£/g, '')) * parseFloat($('#percentage_cost_' + i).val().replace(/\$|\€|\£/g, '')).toFixed(2)) / 100;
    if (total_mts == 0) {
        $('#total_cost_' + i).val(total_mts);
    } else {
        $('#total_cost_' + i).val(cur + '' + number_format(total_mts, 2, '.', ','));
    }
    //console.log(total_mts)

    //total_cost = parseFloat($('#total_cost_' + j).val()).toFixed(2) * 1;

    for (j = 0; j <= counter; j++) {

        total_cost += parseFloat($('#total_cost_' + j).val().replace(/\$|\€|\£/g, '')).toFixed(2) * 1;
        //console.log(total_cost);
    }

    landed_cost = parseFloat($('#landed_cost').val().replace(/,/g, '').replace(/\$|\€|\£/g, '')).toFixed(2) * 1;
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

// Local Product Functions End


// Start of issed shares


// $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//     var target = $(e.target).attr("href") // activated tab
//     if ((target == '#startupstep2')) {

//         var html = '';
//         $.ajax({
//             url: siteUrl + "Report/IssuedShares/ajax-issued_shares",
//             type: "GET",
//             dataType: "JSON",
//             success: function (issue) {

//                 html += "<form method='post' action='' id='issued_form1'>"
//                     + "<div class='panel-group' id='issued_shares_accordion'>"
//                     + "<div class='panel panel-primary' style='display:none'>"
//                     + "<div class='panel-heading'>"
//                     + "<h4 class='panel-title'>"
//                     + "<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#issued_table' class='accordion-toggle'>Funding Valuation</a>"
//                     + "</h4>"
//                     + "</div>"
//                     + "<div class='panel-body'>"
//                     + "<div id='issued_table' class='panel-collapse collapse in'>"
//                     + "<div class='table-responsive'>"
//                     + "<table id='table-issues_0' class='table table-striped table-condensed'>"
//                     + "<thead>"
//                     + "<tr class='warning'>"
//                     + "<th width='15%'>Funding Valuations</th>"
//                     + "<th width='7%'>Pre Funding</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "<th width='7%'>Founders Issue</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "<th width='7%'>StartUp Round</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "<th width='7%'>Second Round</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "<th width='7%'>Third Round</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "<th width='7%'>Float / IPO</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "<th width='14%'>Trade Sale after Start up</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "</tr>"
//                     + "</thead>"
//                     + "<tr class='success'>"
//                     + "<td colspan='15'>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Share Issue</td>"
//                     + "<td colspan='2'>&nbsp;</td>"
//                     + "<td id='share_issue_3'>" + issue['currency'] + ' ' + number_format(issue['share_issue_3'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td>"
//                     + "<div class='form-group'>"
//                     + "<input type='number' class='form-control inputfont' id='share_issue_5' name='share_issue_5' value='" + issue['share_issue_5'] + "' onchange='calculationIssuedShare()'>"
//                     + "</div>"
//                     + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td>"
//                     + "<div class='form-group'>"
//                     + "<input type='number' class='form-control inputfont' id='share_issue_7' name='share_issue_7' value='" + issue['share_issue_7'] + "' onchange='calculationIssuedShare()'>"
//                     + "</div>"
//                     + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td>"
//                     + "<div class='form-group'>"
//                     + "<input type='number' class='form-control inputfont' id='share_issue_9' name='share_issue_9' value='" + issue['share_issue_9'] + "' onchange='calculationIssuedShare()'>"
//                     + "</div>"
//                     + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td>"
//                     + "<div class='form-group'>"
//                     + "<input type='number' class='form-control inputfont' id='share_issue_11' name='share_issue_11' value='" + issue['share_issue_11'] + "' onchange='calculationIssuedShare()'>"
//                     + "</div>"
//                     + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td>"
//                     + "<div class='form-group'>"
//                     + "<input type='number' class='form-control inputfont' id='share_issue_13' name='share_issue_13' value='" + issue['share_issue_13'] + "' onchange='calculationIssuedShare()'>"
//                     + "</div>"
//                     + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Price / Share</td>"
//                     + "<td colspan='2'>&nbsp;</td>"
//                     + "<td id='price_share_2'>" + issue['currency'] + ' ' + number_format(issue['price_share_2'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td>"
//                     + "<div class='form-group'>"
//                     + "<input type='number' class='form-control inputfont' id='price_share_3' name='price_share_3' value='" + issue['price_share_3'] + "' onchange='calculationIssuedShare()'>"
//                     + "</div>"
//                     + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td>"
//                     + "<div class='form-group'>"
//                     + "<input type='number' class='form-control inputfont' id='price_share_4' name='price_share_4' value='" + issue['price_share_4'] + "' onchange='calculationIssuedShare()'>"
//                     + "</div>"
//                     + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td>"
//                     + "<div class='form-group'>"
//                     + "<input type='number' class='form-control inputfont' id='price_share_5' name='price_share_5' value='" + issue['price_share_5'] + "' onchange='calculationIssuedShare()'>"
//                     + "</div>"
//                     + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td>"
//                     + "<div class='form-group'>"
//                     + "<input type='number' class='form-control inputfont' id='price_share_6' name='price_share_6' value='" + issue['price_share_6'] + "' onchange='calculationIssuedShare()'>"
//                     + "</div>"
//                     + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td>"
//                     + "<div class='form-group'>"
//                     + "<input type='number' class='form-control inputfont' id='price_share_7' name='price_share_7' value='" + issue['price_share_7'] + "' onchange='calculationIssuedShare()'>"
//                     + "</div>"
//                     + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr class='info'>"
//                     + "<td width='15%'>Capital Raised</td>"
//                     + "<td colspan='2'>&nbsp;</td>"
//                     + "<td id='capital_raised_3'>" + issue['currency'] + ' ' + number_format(issue['capital_raised_3'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='capital_raised_5'>" + issue['currency'] + ' ' + number_format(issue['capital_raised_5'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='capital_raised_7'>" + issue['currency'] + ' ' + number_format(issue['capital_raised_7'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='capital_raised_9'>" + issue['currency'] + ' ' + number_format(issue['capital_raised_9'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='capital_raised_11'>" + issue['currency'] + ' ' + number_format(issue['capital_raised_11'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='capital_raised_13'>" + issue['currency'] + ' ' + number_format(issue['capital_raised_13'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Issues Shares2</td>"
//                     + "<td>"
//                     + "<div class='form-group'>"
//                     + "<input type='number' class='form-control inputfont' id='issues_shared_12' name='issues_shared_12' value='" + issue['issues_shared_1'] + "' onchange='calculationIssuedShare()'>"
//                     + "</div>"
//                     + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='issues_shared_2'>" + issue['currency'] + ' ' + number_format(issue['issues_shared_2'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='issues_shared_3'>" + issue['currency'] + ' ' + number_format(issue['issues_shared_3'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='issues_shared_4'>" + issue['currency'] + ' ' + number_format(issue['issues_shared_4'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='issues_shared_5'>" + issue['currency'] + ' ' + number_format(issue['issues_shared_5'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='issues_shared_6'>" + issue['currency'] + ' ' + number_format(issue['issues_shared_6'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='issues_shared_7'>" + issue['currency'] + ' ' + number_format(issue['issues_shared_7'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Price / Share</td>"
//                     + "<td>"
//                     + "<div class='form-group'>"
//                     + "<input type='number' class='form-control inputfont' id='price_share2_1' name='price_share2_1' value='" + issue['price_share2_1'] + "' onchange='calculationIssuedShare()'>"
//                     + "</div>"
//                     + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='price_share2_2'>" + issue['currency'] + ' ' + number_format(issue['price_share2_2'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='price_share2_3'>" + issue['currency'] + ' ' + number_format(issue['price_share2_3'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='price_share2_4'>" + issue['currency'] + ' ' + number_format(issue['price_share2_4'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='price_share2_5'>" + issue['currency'] + ' ' + number_format(issue['price_share2_5'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='price_share2_6'>" + issue['currency'] + ' ' + number_format(issue['price_share2_6'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='price_share2_7'>" + issue['currency'] + ' ' + number_format(issue['price_share2_7'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr class='info'>"
//                     + "<td width='15%'>Capitalisation</td>"

//                     + "<td id='capitalisation_1'>" + issue['currency'] + ' ' + number_format(issue['capitalisation_1'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='capitalisation_2'>" + issue['currency'] + ' ' + number_format(issue['capitalisation_2'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='capitalisation_3'>" + issue['currency'] + ' ' + number_format(issue['capitalisation_3'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='capitalisation_4'>" + issue['currency'] + ' ' + number_format(issue['capitalisation_4'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='capitalisation_5'>" + issue['currency'] + ' ' + number_format(issue['capitalisation_5'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='capitalisation_6'>" + issue['currency'] + ' ' + number_format(issue['capitalisation_6'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='capitalisation_7'>" + issue['currency'] + ' ' + number_format(issue['capitalisation_7'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "</tr>"
//                     + "</table>"
//                     + "</div>"
//                     + "</div>"
//                     + "</div>"
//                     + "</div>"
//                     + "<div class='panel panel-primary'>"
//                     + "<div class='panel-heading'>"
//                     + "<h4 class='panel-title'>"
//                     + "<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#issued_table_1' class='accordion-toggle  collapsed'>Issued Shares</a>"
//                     + "</h4>"
//                     + "</div>"
//                     + "<div class='panel-body'>"
//                     + "<div id='issued_table_1' class='panel-collapse collapse'>"
//                     + "<div class='table-responsive'>"

//                     + "<table id='table-issues_1' class='table table-striped table-condensed'>"
//                     + "<thead>"
//                     + "<tr class='warning'>"
//                     + "<th width='15%'>Funding Valuations</th>"
//                     + "<th width='7%'>Pre Funding</th>"
//                     + "<th width='4%'>%</th>"
//                     + "<th width='7%'>Founders Issue</th>"
//                     + "<th width='4%'>%</th>"
//                     + "<th width='7%'>StartUp Round</th>"
//                     + "<th width='4%'>%</th>"
//                     + "<th width='7%'>Second Round</th>"
//                     + "<th width='4%'>%</th>"
//                     + "<th width='7%'>Third Round</th>"
//                     + "<th width='4%'>%</th>"
//                     + "<th width='7%'>Float / IPO</th>"
//                     + "<th width='4%'>%</th>"
//                     + "<th width='15%'>Trade Sale after Start up</th>"
//                     + "<th width='4%'>%</th>"
//                     + "</tr>"
//                     + "</thead>"
//                     + "<tr class='success'>"
//                     + "<td colspan='15'>&nbsp;</td>"
//                     + "</tr>"
//                 for (i = 0; i < issue['num_director']; i++) {
//                     html += "<tr>"
//                         + "<td width='15%'>" + issue['director_' + i] + "</td>"
//                         + "<td width='10%'>"
//                         + "<div class='form-group'>"
//                         + "<input type='number' class='form-control inputfont' id='director_" + i + "_1' name='director_" + i + "_1' value='" + issue['director_' + i + '_1'] + "' onchange='calculationIssuedShare()'>"
//                         + "</div>"
//                         + "</td>"
//                         + "<td width='5%' id='percent_director_" + i + "_2'>" + number_format(issue['director_' + i + '_2'], 0, '.', ',') + "%</td>"
//                         + "<td width='7%' id='director_" + i + "_3'>" + issue['currency'] + ' ' + number_format(issue['director_' + i + '_3'], 0, '.', ',') + "</td>"
//                         + "<td width='5%' id='percent_director_" + i + "_4'>" + number_format(issue['director_' + i + '_4'], 0, '.', ',') + "%</td>"
//                         + "<td width='7%' id='director_" + i + "_5'>" + issue['currency'] + ' ' + number_format(issue['director_' + i + '_5'], 0, '.', ',') + "</td>"
//                         + "<td width='5%' id='percent_director_" + i + "_6'>" + number_format(issue['director_' + i + '_6'], 0, '.', ',') + "%</td>"
//                         + "<td width='7%' id='director_" + i + "_7'>" + issue['currency'] + ' ' + number_format(issue['director_' + i + '_7'], 0, '.', ',') + "</td>"
//                         + "<td width='5%' id='percent_director_" + i + "_8'>" + number_format(issue['director_' + i + '_8'], 0, '.', ',') + "%</td>"
//                         + "<td width='7%' id='director_" + i + "_9'>" + issue['currency'] + ' ' + number_format(issue['director_' + i + '_9'], 0, '.', ',') + "</td>"
//                         + "<td width='5%' id='percent_director_" + i + "_10'>" + number_format(issue['director_' + i + '_10'], 0, '.', ',') + "%</td>"
//                         + "<td width='7%' id='director_" + i + "_11'>" + issue['currency'] + ' ' + number_format(issue['director_' + i + '_11'], 0, '.', ',') + "</td>"
//                         + "<td width='5%' id='percent_director_" + i + "_12'>" + number_format(issue['director_' + i + '_12'], 0, '.', ',') + "%</td>"
//                         + "<td width='15%' id='director_" + i + "_13'>" + issue['currency'] + ' ' + number_format(issue['director_' + i + '_13'], 0, '.', ',') + "</td>"
//                         + "<td width='5%' id='percent_director_" + i + "_14'>" + number_format(issue['director_' + i + '_14'], 0, '.', ',') + "%</td>"
//                         + "</tr>"
//                 }
//                 html += "<tr>"
//                     + "<td width='15%'>First Round Investor</td>"
//                     + "<td colspan='4'>&nbsp;</td>"
//                     + "<td id='f_round_investor_5'>" + issue['currency'] + ' ' + number_format(issue['f_round_investor_5'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='f_round_investor_6'>" + number_format(issue['f_round_investor_6'], 0, '.', ',') + "%</td>"
//                     + "<td id='f_round_investor_7'>" + issue['currency'] + ' ' + number_format(issue['f_round_investor_7'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='f_round_investor_8'>" + number_format(issue['f_round_investor_8'], 0, '.', ',') + "%</td>"
//                     + "<td id='f_round_investor_9'>" + issue['currency'] + ' ' + number_format(issue['f_round_investor_9'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='f_round_investor_10'>" + number_format(issue['f_round_investor_10'], 0, '.', ',') + "%</td>"
//                     + "<td id='f_round_investor_11'>" + issue['currency'] + ' ' + number_format(issue['f_round_investor_11'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='f_round_investor_12'>" + number_format(issue['f_round_investor_12'], 0, '.', ',') + "%</td>"
//                     + "<td id='f_round_investor_13'>" + issue['currency'] + ' ' + number_format(issue['f_round_investor_13'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='f_round_investor_14'>" + number_format(issue['f_round_investor_14'], 0, '.', ',') + "%</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Second Round Investor</td>"
//                     + "<td colspan='6'>&nbsp;</td>"
//                     + "<td id='s_round_investor_7'>" + issue['currency'] + ' ' + number_format(issue['s_round_investor_7'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='s_round_investor_8'>" + number_format(issue['s_round_investor_8'], 0, '.', ',') + "%</td>"
//                     + "<td id='s_round_investor_9'>" + issue['currency'] + ' ' + number_format(issue['s_round_investor_9'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='s_round_investor_10'>" + number_format(issue['s_round_investor_10'], 0, '.', ',') + "%</td>"
//                     + "<td id='s_round_investor_11'>" + issue['currency'] + ' ' + number_format(issue['s_round_investor_11'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='s_round_investor_12'>" + number_format(issue['s_round_investor_12'], 0, '.', ',') + "%</td>"
//                     + "<td id='s_round_investor_13'>" + issue['currency'] + ' ' + number_format(issue['s_round_investor_13'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='s_round_investor_14'>" + number_format(issue['s_round_investor_14'], 0, '.', ',') + "%</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Third Round Investor</td>"
//                     + "<td colspan='8'>&nbsp;</td>"
//                     + "<td id='t_round_investor_9'>" + issue['currency'] + ' ' + number_format(issue['t_round_investor_9'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='t_round_investor_10'>" + number_format(issue['t_round_investor_10'], 0, '.', ',') + "%</td>"
//                     + "<td id='t_round_investor_11'>" + issue['currency'] + ' ' + number_format(issue['t_round_investor_11'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='t_round_investor_12'>" + number_format(issue['t_round_investor_12'], 0, '.', ',') + "%</td>"
//                     + "<td colspan='2'>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Public Float</td>"
//                     + "<td colspan='10'>&nbsp;</td>"
//                     + "<td id='public_float_11'>" + issue['currency'] + ' ' + number_format(issue['public_float_11'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='public_float_12'>" + number_format(issue['public_float_12'], 0, '.', ',') + "%</td>"
//                     + "<td colspan='2'>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr class='info'>"
//                     + "<td width='15%'>Total</td>"
//                     + "<td id='issue_total_1'>" + issue['currency'] + ' ' + number_format(issue['issue_total_1'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='issue_total_2'>" + number_format(issue['issue_total_2'], 0, '.', ',') + "%</td>"
//                     + "<td id='issue_total_3'>" + issue['currency'] + ' ' + number_format(issue['issue_total_3'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='issue_total_4'>" + number_format(issue['issue_total_4'], 0, '.', ',') + "%</td>"
//                     + "<td id='issue_total_5'>" + issue['currency'] + ' ' + number_format(issue['issue_total_5'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='issue_total_6'>" + number_format(issue['issue_total_6'], 0, '.', ',') + "%</td>"
//                     + "<td id='issue_total_7'>" + issue['currency'] + ' ' + number_format(issue['issue_total_7'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='issue_total_8'>" + number_format(issue['issue_total_8'], 0, '.', ',') + "%</td>"
//                     + "<td id='issue_total_9'>" + issue['currency'] + ' ' + number_format(issue['issue_total_9'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='issue_total_10'>" + number_format(issue['issue_total_10'], 0, '.', ',') + "%</td>"
//                     + "<td id='issue_total_11'>" + issue['currency'] + ' ' + number_format(issue['issue_total_11'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='issue_total_12'>" + number_format(issue['issue_total_12'], 0, '.', ',') + "%</td>"
//                     + "<td id='issue_total_13'>" + issue['currency'] + ' ' + number_format(issue['issue_total_13'], 0, '.', ',') + "</td>"
//                     + "<td width='5%' id='issue_total_14'>" + number_format(issue['issue_total_14'], 0, '.', ',') + "%</td>"
//                     + "</tr>"

//                     + "</table>"
//                     + "</div>"
//                     + "</div>"
//                     + "</div>"
//                     + "</div>"
//                     + "<div class='panel panel-primary'>"
//                     + "<div class='panel-heading'>"
//                     + "<h4 class='panel-title'>"
//                     + "<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#issued_table_2' class='accordion-toggle  collapsed'>Valuation of Issued Shares</a>"
//                     + "</h4>"
//                     + "</div>"
//                     + "<div class='panel-body'>"
//                     + "<div id='issued_table_2' class='panel-collapse collapse'>"
//                     + "<div class='table-responsive'>"

//                     + "<table id='table-issues_2' class='table table-striped table-condensed'>"
//                     + "<thead>"
//                     + "<tr class='warning'>"
//                     + "<th width='15%'>Funding Valuations</th>"
//                     + "<th width='7%'>Pre Funding</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "<th width='7%'>Founders Issue</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "<th width='7%'>StartUp Round</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "<th width='7%'>Second Round</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "<th width='7%'>Third Round</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "<th width='7%'>Float / IPO</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "<th width='15%'>Trade Sale after Start up</th>"
//                     + "<th width='4%'>&nbsp;</th>"
//                     + "</tr>"
//                     + "</thead>"
//                     + "<tr class='success'>"
//                     + "<td colspan='15'>&nbsp;</td>"
//                     + "</tr>"
//                 for (j = 0; j < issue['num_director']; j++) {
//                     html += "<tr>"
//                         + "<td width='15%'>" + issue['director_' + j] + "</td>"
//                         + "<td width='7%' id='valuation_director_" + j + "_1'>" + issue['currency'] + ' ' + number_format(issue['director_' + j + '_1'], 0, '.', ',') + "</td>"
//                         + "<td>&nbsp;</td>"
//                         + "<td id='valuation_director_" + j + "_2'>" + issue['currency'] + ' ' + number_format(issue['director_' + j + '_2'], 0, '.', ',') + "</td>"
//                         + "<td>&nbsp;</td>"
//                         + "<td id='valuation_director_" + j + "_3'>" + issue['currency'] + ' ' + number_format(issue['director_' + j + '_3'], 0, '.', ',') + "</td>"
//                         + "<td>&nbsp;</td>"
//                         + "<td id='valuation_director_" + j + "_4'>" + issue['currency'] + ' ' + number_format(issue['director_' + j + '_4'], 0, '.', ',') + "</td>"
//                         + "<td>&nbsp;</td>"
//                         + "<td id='valuation_director_" + j + "_5'>" + issue['currency'] + ' ' + number_format(issue['director_' + j + '_5'], 0, '.', ',') + "</td>"
//                         + "<td>&nbsp;</td>"
//                         + "<td id='valuation_director_" + j + "_6'>" + issue['currency'] + ' ' + number_format(issue['director_' + j + '_6'], 0, '.', ',') + "</td>"
//                         + "<td>&nbsp;</td>"
//                         + "<td id='valuation_director_" + j + "_7'>" + issue['currency'] + ' ' + number_format(issue['director_' + j + '_7'], 0, '.', ',') + "</td>"
//                         + "<td>&nbsp;</td>"
//                         + "</tr>"
//                 }
//                 html += "<tr>"
//                     + "<td width='15%'>First Round Investor</td>"
//                     + "<td width='7%' colspan='4'>&nbsp;</td>"
//                     + "<td id='valuation_f_round_investor_5'>" + issue['currency'] + ' ' + number_format(issue['valuation_f_round_investor_5'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_f_round_investor_7'>" + issue['currency'] + ' ' + number_format(issue['valuation_f_round_investor_7'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_f_round_investor_9'>" + issue['currency'] + ' ' + number_format(issue['valuation_f_round_investor_9'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_f_round_investor_11'>" + issue['currency'] + ' ' + number_format(issue['valuation_f_round_investor_11'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_f_round_investor_13'>" + issue['currency'] + ' ' + number_format(issue['valuation_f_round_investor_13'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Second Round Investor</td>"
//                     + "<td width='7%' colspan='6'>&nbsp;</td>"
//                     + "<td id='valuation_s_round_investor_7'>" + issue['currency'] + ' ' + number_format(issue['valuation_s_round_investor_7'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_s_round_investor_9'>" + issue['currency'] + ' ' + number_format(issue['valuation_s_round_investor_9'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_s_round_investor_11'>" + issue['currency'] + ' ' + number_format(issue['valuation_s_round_investor_11'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_s_round_investor_13'>" + issue['currency'] + ' ' + number_format(issue['valuation_s_round_investor_13'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Third Round Investor</td>"
//                     + "<td width='7%' colspan='8'>&nbsp;</td>"
//                     + "<td id='valuation_t_round_investor_9'>" + issue['currency'] + ' ' + number_format(issue['valuation_t_round_investor_9'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_t_round_investor_11'>" + issue['currency'] + ' ' + number_format(issue['valuation_t_round_investor_11'], 0, '.', ',') + "</td>"
//                     + "<td colspan='3'>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Public Float</td>"
//                     + "<td width='7%' colspan='10'>&nbsp;</td>"
//                     + "<td id='valuation_public_float_11'>" + issue['currency'] + ' ' + number_format(issue['valuation_public_float_11'], 0, '.', ',') + "</td>"
//                     + "<td colspan='3'>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr class='info'>"
//                     + "<td width='15%'>Total</td>"
//                     + "<td width='7%' id='total_valuation_1'>" + issue['currency'] + ' ' + number_format(issue['valuation_total_1'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_total_3'>" + issue['currency'] + ' ' + number_format(issue['valuation_total_3'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_total_5'>" + issue['currency'] + ' ' + number_format(issue['valuation_total_5'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_total_7'>" + issue['currency'] + ' ' + number_format(issue['valuation_total_7'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_total_9'>" + issue['currency'] + ' ' + number_format(issue['valuation_total_9'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_total_11'>" + issue['currency'] + ' ' + number_format(issue['valuation_total_11'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_total_13'>" + issue['currency'] + ' ' + number_format(issue['valuation_total_13'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Pre Funding Valuation</td>"
//                     + "<td width='7%' colspan='4'>&nbsp;</td>"
//                     + "<td id='valuation_funding_5'>" + issue['currency'] + ' ' + number_format(issue['valuation_funding_5'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_funding_7'>" + issue['currency'] + ' ' + number_format(issue['valuation_funding_7'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_funding_9'>" + issue['currency'] + ' ' + number_format(issue['valuation_funding_9'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_funding_11'>" + issue['currency'] + ' ' + number_format(issue['valuation_funding_11'], 0, '.', ',') + "</td>"
//                     + "<td colspan='3'>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Fund Raised</td>"
//                     + "<td width='7%' colspan='4'>&nbsp;</td>"
//                     + "<td id='valuation_raise_5'>" + issue['currency'] + ' ' + number_format(issue['valuation_raise_5'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_raise_7'>" + issue['currency'] + ' ' + number_format(issue['valuation_raise_7'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_raise_9'>" + issue['currency'] + ' ' + number_format(issue['valuation_raise_9'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_raise_11'>" + issue['currency'] + ' ' + number_format(issue['valuation_raise_11'], 0, '.', ',') + "</td>"
//                     + "<td colspan='3'>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Post Funding Valuation</td>"
//                     + "<td width='7%' colspan='4'>&nbsp;</td>"
//                     + "<td id='valuation_post_5'>" + issue['currency'] + ' ' + number_format(issue['valuation_post_5'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_post_7'>" + issue['currency'] + ' ' + number_format(issue['valuation_post_7'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_post_9'>" + issue['currency'] + ' ' + number_format(issue['valuation_post_9'], 0, '.', ',') + "</td>"
//                     + "<td>&nbsp;</td>"
//                     + "<td id='valuation_post_11'>" + issue['currency'] + ' ' + number_format(issue['valuation_raise_11'], 0, '.', ',') + "</td>"
//                     + "<td colspan='3'>&nbsp;</td>"

//                     + "</tr>"

//                     + "</table>"
//                     + "</div>"
//                     + "</div>"
//                     + "</div>"
//                     + "</div>"
//                     + "<div class='panel panel-primary'>"
//                     + "<div class='panel-heading'>"
//                     + "<h4 class='panel-title'>"
//                     + "<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#issued_table_3' class='accordion-toggle collapsed'>Share Split</a>"
//                     + "</h4>"
//                     + "</div>"
//                     + "<div class='panel-body'>"
//                     + "<div id='issued_table_3' class='panel-collapse collapse'>"
//                     + "<div class='table-responsive'>"
//                     + "<table id='table-issues_3' class='table table-striped table-condensed'>"
//                     + "<thead>"
//                     + "<tr class='warning'>"
//                     + "<th width='15%'>Share Split</th>"
//                     + "<th width='15%'>Share</th>"
//                     + "<th width='4%'>%</th>"
//                     + "<th width='74%' colspan='11'>&nbsp;</th>"
//                     + "</tr>"
//                     + "</thead>"
//                     + "<tr class='success'>"
//                     + "<td colspan='3'><strong>Pre Split Shareholding</strong></td>"
//                     + "</tr>"
//                 for (k = 0; k < issue['num_director']; k++) {
//                     html += "<tr>"
//                         + "<td width='15%'>" + issue['director_' + k] + "</td>"
//                         + "<td width='15%' id='pre_director_" + k + "_1'>" + issue['currency'] + ' ' + number_format(issue['director_' + k + '_1'], 0, '.', ',') + "</td>"
//                         + "<td width='4%' id='percent_pre_director_" + k + "_2'>" + number_format(issue['director_' + k + '_2'], 0, '.', ',') + "%</td>"
//                         + "</tr>"
//                 }
//                 html += "<tr class='info'>"
//                     + "<td width='15%'>Total Shares</td>"
//                     + "<td width='15%' id='share_total_1'>" + issue['currency'] + ' ' + number_format(issue['share_total_1'], 0, '.', ',') + "</td>"
//                     + "<td width='4%' id='share_total_2'>" + number_format(issue['share_total_2'], 0, '.', ',') + " %</td>"
//                     + "</tr>"
//                     + "<tr class='success'>"
//                     + "<td colspan='3'>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Required Shares</td>"
//                     + "<td width='15%'>"
//                     + "<div class='form-group'>"
//                     + "<input type='number' class='form-control inputfont' id='required_shares_1' name='required_shares_1' value='" + issue['required_shares_1'] + "' onchange='calculationIssuedShare()''>"
//                     + "</div>"
//                     + "</td>"
//                     + "<td width='15%'>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>New Shares</td>"
//                     + "<td width='15%' id='new_shares_1'>" + issue['currency'] + ' ' + number_format(issue['new_shares_1'], 0, '.', ',') + "</td>"
//                     + "<td width='4%'>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr>"
//                     + "<td width='15%'>Shares Split (one for:</td>"
//                     + "<td width='15%' id='split_shares_1'>" + number_format(issue['split_shares_1'], 0, '.', ',') + "</td>"
//                     + "<td width='4%'>&nbsp;</td>"
//                     + "</tr>"
//                     + "<tr class='success'>"
//                     + "<td colspan='3'><strong>Post Split Shareholding</strong></td>"
//                     + "</tr>"
//                 for (k = 0; k < issue['num_director']; k++) {
//                     html += "<tr>"
//                         + "<td width='15%'>" + issue['director_' + k] + "</td>"
//                         + "<td width='15%' id='post_director_" + k + "_1'>" + issue['currency'] + ' ' + number_format(issue['director_' + k + '_1'], 0, '.', ',') + "</td>"
//                         + "<td width='4%' id='percent_post_director_" + k + "_2'>" + number_format(issue['director_' + k + '_2'], 0, '.', ',') + "%</td>"
//                         + "</tr>"
//                 }
//                 html += "<tr class='info'>"
//                     + "<td width='15%'>Issued Share After Split</td>"
//                     + "<td width='15%' id='share_after_1'>" + issue['currency'] + ' ' + number_format(issue['share_after_1'], 0, '.', ',') + "</td>"
//                     + "<td width='4%' id='share_after_2'>" + number_format(issue['share_after_2'], 0, '.', ',') + "%</td>"
//                     + "</tr>"
//                     + "</table>"
//                     + "</div>"
//                     + "</div>"
//                     + "</div>"
//                     + "</div>"
//                     + "</div>"
//                     + "</div>"
//                     + "</form>";

//                 $('.table_issued').html(html)

//                 for (k = 0; k <= 4; k++) {

//                     $("#table-issues_" + k).tableHeadFixer({ 'left': 1 });

//                     $("#table-issues_" + k).css({
//                         "min-width": "1020px",
//                         "font-size": "12px"
//                     });
//                     $('.form-group').css({
//                         "margin-bottom": "1px"
//                     })

//                 }

//                 calculationProcess(issue['currency'], issue['num_director']);

//             },
//             error: function (xhr, ajaxOptions, thrownError) {

//                 alert('Error adding / update data');

//                 console.log(xhr.status);
//                 console.log(xhr.responseText);
//                 console.log(thrownError);

//             }

//         });

//     } else if ((target == '#startupstep7')) {
//         //reload summary every time
//         reload_summary();
//     }
// });

// Expense Functions

function calculateCostFromYearly() {
    var yearly = parseFloat($("#yearly_cost").val().replace(/\,|\$|\€|\₹|\£/g, ''));
    if (!isNaN(yearly)) {
        $("#quarterly_cost").val(cur + number_format(yearly / 4, 0, '.', ','));
        $("#weekly_cost").val(cur + number_format(yearly / 52), 0, '.', ',');
        $("#monthly_cost").val(cur + number_format(yearly / 12, 0, '.', ','));
    }
}

function calculateCostFromQuaterly() {
    var quarterly = parseFloat($("#quarterly_cost").val().replace(/\,|\$|\€|\₹|\£/g, ''));
    if (!isNaN(quarterly)) {

        $("#yearly_cost").val(cur + number_format(quarterly * 4, 0, '.', ','));
        $("#weekly_cost").val(cur + number_format(quarterly * 4 / 52, 0, '.', ','));
        $("#monthly_cost").val(cur + number_format(quarterly * 4 / 12, 0, '.', ','));
    }
}

function calculateCostFromWeekly() {
    var weekly = parseFloat($("#weekly_cost").val().replace(/\,|\$|\€|\₹|\£/g, ''));
    if (!isNaN(weekly) && weekly > 0) {
        $("#yearly_cost").val(cur + number_format(weekly * 52, 0, '.', ','));
        $("#quarterly_cost").val(cur + number_format(weekly * 52 / 4, 0, '.', ','));
        $("#monthly_cost").val(cur + number_format(weekly * 52 / 12, 0, '.', ','));

    }


}

function calculateCostFromMonthly() {
    var monthly_cost = parseFloat($("#monthly_cost").val().replace(/\,|\$|\€|\₹|\£/g, ''));
    if (!isNaN(monthly_cost)) {

        $("#yearly_cost").val(cur + number_format(monthly_cost * 12, 0, '.', ','));
        $("#weekly_cost").val(cur + number_format(monthly_cost * 12 / 52, 0, '.', ','));
        $("#quarterly_cost").val(cur + number_format(monthly_cost * 12 / 4, 0, '.', ','));
    }
}

function calculateMonth() {
    var num_month = parseFloat($("#num_month").val().replace(/\,|\$|\€|\₹|\£/g, ''));
    var monthly_cost = $("#weekly_cost").val() * 52 / 12;

    var result = num_month * monthly_cost;

    $('#no_months').val(cur + number_format(result, 0, '.', ','));
}

$('#cmpy_structure').on('change', function () {

    if ($('#cmpy_structure').val() != "Limited Partnership") {

        $('#company_tax').val('0')

        //$('#company_tax').prop('readonly', true);

    } else {

        if ($('#company_tax').prop('readonly')) {

            $('#company_tax').prop('readonly', false);

        }

    }
});

$('#btnClearIssuedShared').on('click', function (e) {

    $.ajax({
        url: siteUrl + "Report/IssuedShares/deleteIssuedShared",
        type: "POST",
        dataType: 'json',
        encode: true,
        cache: false,
        contentType: false,
        processData: false,
        success: function (issues) {

            location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    })

})

function calculationIssuedShare() {

    var $form = new FormData($("#issued_form")[0]);

    $.ajax({
        url: siteUrl + "Report/IssuedShares/save_issued",
        type: "POST",
        data: $form,
        dataType: 'json',
        encode: true,
        cache: false,
        contentType: false,
        processData: false,
        success: function (issues) {
            calculationProcess(issues['currency'], issues['director_num']);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    })
}

function calculationProcess(cur, director_num) {

    var issues_shared_1 = $('#issues_shared_1').val();
    var price_share2_1 = $('#price_share2_1').val();
    var total_issues_1 = 0;
    var total_percent_1 = 0;
    var total_valuation_1 = 0;
    var total_valuation_2 = 0;
    var total_pre_shares_1 = 0;
    var total_post = 0;
    var total_post_percent = 0;
    var total_director_5 = 0;
    var total_director_7 = 0;
    var total_director_9 = 0;
    var total_director_11 = 0;
    var total_director_13 = 0;
    var total_percent_director_6 = 0;
    var total_percent_director_8 = 0;
    var total_percent_director_10 = 0;
    var total_percent_director_12 = 0;
    var total_percent_director_14 = 0;
    var total_valuation_3 = 0;
    var total_valuation_4 = 0;
    var total_valuation_5 = 0;
    var total_valuation_6 = 0;
    var total_valuation_7 = 0;

    $('#price_share_2').html(cur + ' ' + price_share2_1);

    $('#price_share2_2').html(cur + ' ' + price_share2_1);

    $('#capitalisation_1').html(cur + ' ' + number_format(parseFloat(issues_shared_1) * parseFloat(price_share2_1)), 0, '.', ',');
    /*$('#required_shares_1').val(issues_shared_1);*/


    $('#capital_raised_5').html(cur + ' ' + number_format(parseFloat($('#share_issue_5').val()) * parseFloat($('#price_share_3').val()), 0, '.', ','));

    $('#capital_raised_7').html(cur + ' ' + number_format(parseFloat($('#share_issue_7').val()) * parseFloat($('#price_share_4').val()), 0, '.', ','));

    $('#capital_raised_9').html(cur + ' ' + number_format(parseFloat($('#share_issue_9').val()) * parseFloat($('#price_share_5').val()), 0, '.', ','));

    $('#capital_raised_11').html(cur + ' ' + number_format(parseFloat($('#share_issue_11').val()) * parseFloat($('#price_share_6').val()), 0, '.', ','));

    $('#capital_raised_13').html(cur + ' ' + number_format(parseFloat($('#share_issue_13').val()) * parseFloat($('#price_share_7').val()), 0, '.', ','));

    for (i = 0; i < director_num; i++) {
        total_issues_1 += parseFloat($('#director_' + i + '_1').val());

    }

    for (j = 0; j < director_num; j++) {
        $('#percent_director_' + j + '_2').html(number_format(parseFloat($('#director_' + j + '_1').val() / total_issues_1) * 100, 0, '.', ',') + ' %');

        total_percent_1 += parseFloat($('#percent_director_' + j + '_2').html());

        $('#valuation_director_' + j + '_1').html(cur + ' ' + number_format(parseFloat($('#director_' + j + '_1').val()) * parseFloat(price_share2_1), 0, '.', ','));

        total_valuation_1 += parseFloat($('#valuation_director_' + j + '_1').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, ''));

        $('#pre_director_' + j + '_1').html(cur + ' ' + number_format($('#director_' + j + '_1').val(), 0, '.', ','));

        $('#percent_pre_director_' + j + '_2').html(number_format(parseFloat($('#pre_director_' + j + '_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') / total_issues_1) * 100, 0, '.', ',') + ' %');
    }

    $('#issue_total_1').html(cur + ' ' + number_format(total_issues_1, 0, '.', ','));
    $('#issue_total_2').html(number_format(total_percent_1, 0, '.', ',') + ' %');
    $('#total_valuation_1').html(cur + ' ' + number_format(total_valuation_1, 0, '.', ','));
    $('#share_total_1').html(cur + ' ' + number_format(total_issues_1, 0, '.', ','));
    $('#share_total_2').html(number_format(total_percent_1, 0, '.', ',') + ' %');
    $('#new_shares_1').html(cur + ' ' + number_format(parseFloat($('#required_shares_1').val()) - parseFloat($('#share_total_1').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '')), 0, '.', ','));
    $('#split_shares_1').html(number_format(parseFloat($('#required_shares_1').val()) / parseFloat($('#share_total_1').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '')), 0, '.', ','));

    for (m = 0; m < director_num; m++) {
        $('#post_director_' + m + '_1').html(cur + ' ' + number_format(parseFloat($('#pre_director_' + m + '_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#split_shares_1').html().replace(/,/g, '')), 0, '.', ','));

        total_post += parseFloat($('#post_director_' + m + '_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

        $('#director_' + m + '_3').html(cur + ' ' + number_format($('#post_director_' + m + '_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','));

        $('#director_' + m + '_5').html(cur + ' ' + number_format($('#director_' + m + '_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','));
        total_director_5 += parseFloat($('#director_' + m + '_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

        $('#director_' + m + '_7').html(cur + ' ' + number_format($('#director_' + m + '_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','));
        total_director_7 += parseFloat($('#director_' + m + '_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

        $('#director_' + m + '_9').html(cur + ' ' + number_format($('#director_' + m + '_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','));
        total_director_9 += parseFloat($('#director_' + m + '_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

        $('#director_' + m + '_11').html(cur + ' ' + number_format($('#director_' + m + '_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','));
        total_director_11 += parseFloat($('#director_' + m + '_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

        $('#director_' + m + '_13').html(cur + ' ' + number_format($('#director_' + m + '_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','));
        total_director_13 += parseFloat($('#director_' + m + '_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

    }

    for (n = 0; n < director_num; n++) {

        $('#percent_post_director_' + n + '_2').html(number_format(parseFloat($('#post_director_' + n + '_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') / total_post) * 100, 0, '.', ',') + ' %');

        $('#valuation_director_' + n + '_2').html(cur + ' ' + number_format(parseFloat($('#director_' + n + '_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_2').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '')), 0, '.', ','));

        $('#valuation_director_' + n + '_3').html(cur + ' ' + number_format(parseFloat($('#director_' + n + '_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_3').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '')), 0, '.', ','));
        $('#valuation_director_' + n + '_4').html(cur + ' ' + number_format(parseFloat($('#director_' + n + '_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_3').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '')), 0, '.', ','));
        $('#valuation_director_' + n + '_5').html(cur + ' ' + number_format(parseFloat($('#director_' + n + '_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_4').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '')), 0, '.', ','));
        $('#valuation_director_' + n + '_6').html(cur + ' ' + number_format(parseFloat($('#director_' + n + '_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_5').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '')), 0, '.', ','));
        $('#valuation_director_' + n + '_7').html(cur + ' ' + number_format(parseFloat($('#director_' + n + '_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_6').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '')), 0, '.', ','));

        total_valuation_2 += parseFloat($('#valuation_director_' + n + '_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
        total_valuation_3 += parseFloat($('#valuation_director_' + n + '_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
        total_valuation_4 += parseFloat($('#valuation_director_' + n + '_4').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
        total_valuation_5 += parseFloat($('#valuation_director_' + n + '_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
        total_valuation_6 += parseFloat($('#valuation_director_' + n + '_6').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
        total_valuation_7 += parseFloat($('#valuation_director_' + n + '_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

        total_post_percent += parseFloat($('#percent_post_director_' + n + '_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

        $('#percent_director_' + n + '_4').html(number_format(parseFloat($('#director_' + n + '_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') / total_post) * 100, 0, '.', ',') + ' %');
    }

    $('#share_after_1').html(cur + ' ' + number_format(total_post, 0, '.', ','));
    $('#share_after_2').html(number_format(total_post_percent, 0, '.', ',') + ' %');

    $('#share_issue_3').html(cur + ' ' + number_format($('#share_after_1').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','));

    $('#capital_raised_3').html(cur + ' ' + number_format(parseFloat($('#share_issue_3').html().replace(/,/g, '')) * parseFloat($('#price_share_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#issues_shared_2').html(cur + ' ' + number_format($('#share_issue_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''), 0, '.', ','));
    $('#issues_shared_3').html(cur + ' ' + number_format(parseFloat($('#issues_shared_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#share_issue_5').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#issues_shared_4').html(cur + ' ' + number_format(parseFloat($('#issues_shared_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#share_issue_7').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#issues_shared_5').html(cur + ' ' + number_format(parseFloat($('#issues_shared_4').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#share_issue_9').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#issues_shared_6').html(cur + ' ' + number_format(parseFloat($('#issues_shared_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#share_issue_11').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#issues_shared_7').html(cur + ' ' + number_format(parseFloat($('#issues_shared_6').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#share_issue_13').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));


    $('#f_round_investor_5').html(cur + ' ' + number_format($('#share_issue_5').val(), 0, '.', ','));

    $('#f_round_investor_7').html(cur + ' ' + number_format($('#share_issue_5').val(), 0, '.', ','));
    $('#s_round_investor_7').html(cur + ' ' + number_format($('#share_issue_7').val(), 0, '.', ','));

    $('#f_round_investor_9').html(cur + ' ' + number_format($('#share_issue_5').val(), 0, '.', ','));
    $('#s_round_investor_9').html(cur + ' ' + number_format($('#share_issue_7').val(), 0, '.', ','));
    $('#t_round_investor_9').html(cur + ' ' + number_format($('#share_issue_9').val(), 0, '.', ','));

    $('#f_round_investor_11').html(cur + ' ' + number_format($('#share_issue_5').val(), 0, '.', ','));
    $('#s_round_investor_11').html(cur + ' ' + number_format($('#share_issue_7').val(), 0, '.', ','));
    $('#t_round_investor_11').html(cur + ' ' + number_format($('#share_issue_9').val(), 0, '.', ','));

    $('#f_round_investor_13').html(cur + ' ' + number_format($('#share_issue_5').val(), 0, '.', ','));
    $('#s_round_investor_13').html(cur + ' ' + number_format($('#share_issue_7').val(), 0, '.', ','));

    $('#public_float_11').html(cur + ' ' + number_format($('#share_issue_11').val(), 0, '.', ','));

    for (n = 0; n < director_num; n++) {

        $('#percent_director_' + n + '_6').html(number_format(parseFloat($('#director_' + n + '_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') / (total_director_5 + parseFloat($('#share_issue_5').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''))) * 100, 0, '.', ',')) + ' %');
        total_percent_director_6 += parseFloat($('#percent_director_' + n + '_6').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

        $('#percent_director_' + n + '_8').html(number_format(parseFloat($('#director_' + n + '_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') / (total_director_7 + parseFloat($('#share_issue_5').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#share_issue_7').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')))) * 100, 0, '.', ',') + ' %');
        total_percent_director_8 += parseFloat($('#percent_director_' + n + '_8').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

        $('#percent_director_' + n + '_10').html(number_format(parseFloat($('#director_' + n + '_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') / (total_director_9 + parseFloat($('#share_issue_5').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#share_issue_7').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#share_issue_9').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')))) * 100, 0, '.', ',') + ' %');
        total_percent_director_10 += parseFloat($('#percent_director_' + n + '_10').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

        $('#percent_director_' + n + '_12').html(number_format(parseFloat($('#director_' + n + '_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') / (total_director_11 + parseFloat($('#share_issue_5').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#share_issue_7').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#share_issue_9').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#share_issue_11').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')))) * 100, 0, '.', ',') + ' %');
        total_percent_director_12 += parseFloat($('#percent_director_' + n + '_12').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

        $('#percent_director_' + n + '_14').html(number_format(parseFloat($('#director_' + n + '_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '') / (total_director_13 + parseFloat($('#share_issue_5').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#share_issue_7').val().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')))) * 100, 0, '.', ',') + ' %');
        total_percent_director_14 += parseFloat($('#percent_director_' + n + '_14').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
    }

    $('#issue_total_3').html(cur + ' ' + number_format(total_post, 0, '.', ','));
    $('#issue_total_4').html(cur + ' ' + number_format(total_post_percent, 0, '.', ',') + ' %');

    $('#issue_total_5').html(cur + ' ' + number_format(total_director_5 + parseFloat($('#f_round_investor_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#f_round_investor_6').html(cur + ' ' + number_format(parseFloat($('#f_round_investor_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) / parseFloat($('#issue_total_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100, 0, '.', ',') + ' %');
    $('#issue_total_6').html(number_format(total_percent_director_6 + parseFloat($('#f_round_investor_6').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ',') + ' %');

    $('#issue_total_7').html(cur + ' ' + number_format(total_director_7 + parseFloat($('#f_round_investor_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#s_round_investor_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#f_round_investor_8').html(cur + ' ' + number_format(parseFloat($('#f_round_investor_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) / parseFloat($('#issue_total_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100, 0, '.', ',') + ' %');
    $('#s_round_investor_8').html(cur + ' ' + number_format(parseFloat($('#s_round_investor_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) / parseFloat($('#issue_total_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100, 0, '.', ',') + ' %');
    $('#issue_total_8').html(number_format(total_percent_director_8 + parseFloat($('#f_round_investor_8').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#s_round_investor_8').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ',') + ' %');


    $('#issue_total_9').html(cur + ' ' + number_format(total_director_9 + parseFloat($('#f_round_investor_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#s_round_investor_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#t_round_investor_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#f_round_investor_10').html(cur + ' ' + number_format(parseFloat($('#f_round_investor_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) / parseFloat($('#issue_total_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100, 0, '.', ',') + ' %');
    $('#s_round_investor_10').html(cur + ' ' + number_format(parseFloat($('#s_round_investor_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) / parseFloat($('#issue_total_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100, 0, '.', ',') + ' %');
    $('#t_round_investor_10').html(cur + ' ' + number_format(parseFloat($('#t_round_investor_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) / parseFloat($('#issue_total_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100, 0, '.', ',') + ' %');

    $('#issue_total_10').html(number_format(total_percent_director_10 + parseFloat($('#f_round_investor_10').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#s_round_investor_10').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#t_round_investor_10').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ',') + ' %');

    $('#issue_total_11').html(cur + ' ' + number_format(total_director_11 + parseFloat($('#f_round_investor_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#s_round_investor_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#t_round_investor_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#public_float_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#f_round_investor_12').html(cur + ' ' + number_format(parseFloat($('#f_round_investor_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) / parseFloat($('#issue_total_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100, 0, '.', ',') + ' %');
    $('#s_round_investor_12').html(cur + ' ' + number_format(parseFloat($('#s_round_investor_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) / parseFloat($('#issue_total_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100, 0, '.', ',') + ' %');
    $('#t_round_investor_12').html(cur + ' ' + number_format(parseFloat($('#t_round_investor_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) / parseFloat($('#issue_total_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100, 0, '.', ',') + ' %');
    $('#public_float_12').html(cur + ' ' + number_format(parseFloat($('#public_float_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) / parseFloat($('#issue_total_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100, 0, '.', ',') + ' %');

    $('#issue_total_12').html(number_format(total_percent_director_12 + parseFloat($('#f_round_investor_12').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#s_round_investor_12').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#t_round_investor_12').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#public_float_12').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ',') + ' %');

    $('#issue_total_13').html(cur + ' ' + number_format(total_director_13 + parseFloat($('#f_round_investor_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#s_round_investor_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#f_round_investor_14').html(cur + ' ' + number_format(parseFloat($('#f_round_investor_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) / parseFloat($('#issue_total_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100, 0, '.', ',') + ' %');
    $('#s_round_investor_14').html(cur + ' ' + number_format(parseFloat($('#s_round_investor_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) / parseFloat($('#issue_total_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * 100, 0, '.', ',') + ' %');

    $('#issue_total_14').html(number_format(total_percent_director_14 + parseFloat($('#f_round_investor_14').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#s_round_investor_14').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ',') + ' %');

    $('#valuation_total_3').html(cur + ' ' + number_format(total_valuation_2, 0, '.', ','))
    $('#valuation_total_5').html(cur + ' ' + number_format(total_valuation_3, 0, '.', ','))
    $('#valuation_total_7').html(cur + ' ' + number_format(total_valuation_4, 0, '.', ','))
    $('#valuation_total_9').html(cur + ' ' + number_format(total_valuation_5, 0, '.', ','))
    $('#valuation_total_11').html(cur + ' ' + number_format(total_valuation_6, 0, '.', ','))
    $('#valuation_total_13').html(cur + ' ' + number_format(total_valuation_7, 0, '.', ','))

    $('#price_share2_3').html(cur + ' ' + $('#price_share_3').val());
    $('#price_share2_4').html(cur + ' ' + $('#price_share_4').val());
    $('#price_share2_5').html(cur + ' ' + $('#price_share_5').val());
    $('#price_share2_6').html(cur + ' ' + $('#price_share_6').val());
    $('#price_share2_7').html(cur + ' ' + $('#price_share_7').val());

    $('#capitalisation_3').html(cur + ' ' + number_format(parseFloat($('#issues_shared_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_f_round_investor_5').html(cur + ' ' + number_format(parseFloat($('#f_round_investor_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#valuation_f_round_investor_7').html(cur + ' ' + number_format(parseFloat($('#f_round_investor_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_4').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#valuation_f_round_investor_9').html(cur + ' ' + number_format(parseFloat($('#f_round_investor_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#valuation_f_round_investor_11').html(cur + ' ' + number_format(parseFloat($('#f_round_investor_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_6').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#valuation_f_round_investor_13').html(cur + ' ' + number_format(parseFloat($('#f_round_investor_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));


    $('#valuation_s_round_investor_7').html(cur + ' ' + number_format(parseFloat($('#s_round_investor_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_4').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#valuation_s_round_investor_9').html(cur + ' ' + number_format(parseFloat($('#s_round_investor_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#valuation_s_round_investor_11').html(cur + ' ' + number_format(parseFloat($('#s_round_investor_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_6').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#valuation_s_round_investor_13').html(cur + ' ' + number_format(parseFloat($('#s_round_investor_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));


    $('#valuation_t_round_investor_9').html(cur + ' ' + number_format(parseFloat($('#t_round_investor_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#valuation_t_round_investor_11').html(cur + ' ' + number_format(parseFloat($('#t_round_investor_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_6').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_public_float_11').html(cur + ' ' + number_format(parseFloat($('#public_float_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_6').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));


    for (n = 0; n < director_num; n++) {


        $('#valuation_director_' + n + '_3').html(cur + ' ' + number_format(parseFloat($('#director_' + n + '_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_3').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '')), 0, '.', ','));
        $('#valuation_director_' + n + '_4').html(cur + ' ' + number_format(parseFloat($('#director_' + n + '_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_4').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '')), 0, '.', ','));
        $('#valuation_director_' + n + '_5').html(cur + ' ' + number_format(parseFloat($('#director_' + n + '_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_5').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '')), 0, '.', ','));
        $('#valuation_director_' + n + '_6').html(cur + ' ' + number_format(parseFloat($('#director_' + n + '_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_6').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '')), 0, '.', ','));
        $('#valuation_director_' + n + '_7').html(cur + ' ' + number_format(parseFloat($('#director_' + n + '_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_7').html().replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '')), 0, '.', ','));

        total_valuation_3 += parseFloat($('#valuation_director_' + n + '_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
        total_valuation_4 += parseFloat($('#valuation_director_' + n + '_4').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
        total_valuation_5 += parseFloat($('#valuation_director_' + n + '_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
        total_valuation_6 += parseFloat($('#valuation_director_' + n + '_6').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
        total_valuation_7 += parseFloat($('#valuation_director_' + n + '_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

    }

    $('#capitalisation_2').html(cur + ' ' + number_format(parseFloat($('#issues_shared_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_2').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#capitalisation_3').html(cur + ' ' + number_format(parseFloat($('#issues_shared_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_3').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#capitalisation_4').html(cur + ' ' + number_format(parseFloat($('#issues_shared_4').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_4').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#capitalisation_5').html(cur + ' ' + number_format(parseFloat($('#issues_shared_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#capitalisation_6').html(cur + ' ' + number_format(parseFloat($('#issues_shared_6').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_6').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));
    $('#capitalisation_7').html(cur + ' ' + number_format(parseFloat($('#issues_shared_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) * parseFloat($('#price_share2_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_total_3').html(cur + ' ' + number_format(total_valuation_2, 0, '.', ','))
    $('#valuation_total_5').html(cur + ' ' + number_format(total_valuation_3 + parseFloat($('#valuation_f_round_investor_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','))

    $('#valuation_total_7').html(cur + ' ' + number_format(total_valuation_4 + parseFloat($('#valuation_f_round_investor_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#valuation_s_round_investor_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','))


    $('#valuation_total_9').html(cur + ' ' + number_format(total_valuation_5 + parseFloat($('#valuation_f_round_investor_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#valuation_s_round_investor_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#valuation_t_round_investor_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','))

    $('#valuation_total_11').html(cur + ' ' + number_format(total_valuation_6 + parseFloat($('#valuation_f_round_investor_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#valuation_s_round_investor_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#valuation_t_round_investor_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#valuation_public_float_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','))


    $('#valuation_total_13').html(cur + ' ' + number_format(total_valuation_7 + parseFloat($('#valuation_f_round_investor_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#valuation_s_round_investor_13').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_funding_5').html(cur + ' ' + number_format(parseFloat($('#valuation_total_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) - parseFloat($('#capital_raised_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_raise_5').html(cur + ' ' + number_format(parseFloat($('#capital_raised_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_post_5').html(cur + ' ' + number_format(parseFloat($('#valuation_funding_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#valuation_raise_5').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_funding_7').html(cur + ' ' + number_format(parseFloat($('#valuation_total_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) - parseFloat($('#capital_raised_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_raise_7').html(cur + ' ' + number_format(parseFloat($('#capital_raised_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_post_7').html(cur + ' ' + number_format(parseFloat($('#valuation_funding_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#valuation_raise_7').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_funding_9').html(cur + ' ' + number_format(parseFloat($('#valuation_total_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) - parseFloat($('#capital_raised_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_raise_9').html(cur + ' ' + number_format(parseFloat($('#capital_raised_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_post_9').html(cur + ' ' + number_format(parseFloat($('#valuation_funding_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#valuation_raise_9').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_funding_11').html(cur + ' ' + number_format(parseFloat($('#valuation_total_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) - parseFloat($('#capital_raised_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_raise_11').html(cur + ' ' + number_format(parseFloat($('#capital_raised_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

    $('#valuation_post_11').html(cur + ' ' + number_format(parseFloat($('#valuation_funding_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')) + parseFloat($('#valuation_raise_11').html().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, '')), 0, '.', ','));

}

//after closing summmary modal error, fixed other tabs cancel modal
$('#modalConfirmYesNo').on('hidden.bs.modal', function () {
    $("#btnYesConfirmYesNo").removeClass('btn');
    $("#btnYesConfirmYesNo").addClass('btn');
    $("#btnYesConfirmYesNo").html('<span class="fa fa-check"></span>Yes');
    $("#btnNoConfirmYesNo").show();
});





