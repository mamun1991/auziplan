/*Form Validation Script*/
$("#setting_form").validate({
    invalidHandler: function (event, validator) {
        var errors = validator.numberOfInvalids();
        if (errors)
            $('.nav a[href="#' + jQuery(validator.errorList[0].element).closest(".tab-pane").attr('id') + '"]').tab('show');
    },
    ignore: "",
    rules: {
        company_name: "required",
        abn_no: "required",
        start_date: "required",
        street_no: "required",
        street_name: "required",
        suburb: "required",
        state: "required",
        zipcode: "required",
        country: "required",
        fax: {
            required: true
        },
        company_email: {
            required: true,
            email: true
        },
        website: {
            url: true
        },
        company_tax: {
            required: true,
        },
        company_vat_collected: {
            required: true
        },
        opening_debit_balance: {
            required: true
        },
        opening_credit_balance: {
            required: true
        },
        marketing_increase: {
            required: true
        },
        public_reactions: {
            required: true
        },
        administration_cost: {
            required: true
        },
        opening_bank_balance: {
            required: true
        },
        other_increse: {
            required: true
        },
        franchise_royalty: {
            required: true
        },
        porivision_baddebt: {
            required: true
        },
        depreciation_on_equipment: {
            required: true
        },

    },
    messages: {
        company_tax: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",
        company_vat: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",
        opening_debit_balance: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",
        opening_credit_balance: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",
        marketing_increase: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",
        public_reactions: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",
        administration_cost: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",
        opening_bank_balance: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",
        other_increse: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",
        franchise_royalty: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",
        porivision_baddebt: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",
        depreciation_on_equipment: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",
    }
});

//jQuery time
/*var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	
    section_id = $(this).attr('id');
    if(section_id=='comapny_detail_section'){
      $("label.error").remove();
      //abn_valid = $("#abn_no").valid();
      cn_valid = $("#company_name").valid();
      sn_valid = $("#street_name").val();
      sno_valid = $("#street_no").valid();
      stdate_valid = $("#start_date").valid();
      sub_valid = $("#suburb").valid();
      state_valid = $("#state").valid();
      zp_valid = $("#zipcode").valid();
      cntr_valid = $("#country").valid();
      tph_valid = $("#telephone").valid();
      fx_valid = $("#fax").valid();
      cmp_valid = $("#company_email").valid();
      //wb_valid = $("#website").valid();

      if(cn_valid && sn_valid && sno_valid && stdate_valid && sub_valid && state_valid && zp_valid && cntr_valid && tph_valid && fx_valid && cmp_valid){
    	
      }else{
        return false;
      }
    }
	
    if(animating) return false;
    animating = true;
	
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
	
    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
    //show the next fieldset
    next_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50)+"%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'relative'
      });
            next_fs.css({'left': left, 'opacity': opacity});
        }, 
        duration: 800, 
        complete: function(){
            current_fs.hide();
            animating = false;
        }, 
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});


$(".previous").click(function(){
    if(animating) return false;
    animating = true;
	
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
	
    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
    //show the previous fieldset
    previous_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1-now) * 50)+"%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({'left': left});
            previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
        }, 
        duration: 800, 
        complete: function(){
            current_fs.hide();
            animating = false;
        }, 
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});*/

/*$(".submit").click(function(){
    return false;
})*/


function fetch_companygetails() {
    $.ajax({
        type: "POST",
        url: siteUrl + "company_setup/ajax-getcompany_details",
        dataType: "json",
        data: {},
        success: function (response) {
            setMymodalform(response);
            checkempty();
        }
    });
}

function get_companydetails() {
    $.ajax({
        type: "POST",
        url: siteUrl + "company_setup/ajax-getcompany_details",
        dataType: "json",
        data: {},
        success: function (response) {
            console.log("response",response)
            setMymodalform(response);
            checkempty();

            $("#myModal").modal('show');
        }
    });
}
function checkempty() {
    $('input').each(function (index) {
        if ($(this).val() != '') {
            $(this).parent('div').removeClass('is-empty');
        }
    });
}


function checkemptycosmetics() {

    $('input').each(function (index) {
        if ($(this).val() != '') {
            $(this).addClass('valid used');
        } else {
            $(this).removeClass('valid used');
        }
    });
}
function setMymodalform(response) {
    populateCountries("country", "state");
    if (response.company_detail != null) {
        if (response.company_detail['start_date']) {
            var dbDate = response.company_detail['start_date'];
            var date2 = new Date(dbDate);
            $("#start_date").daterangepicker({
                dateFormat: 'mm/dd/yyyy',
                singleDatePicker: true
            }).datepicker('setDate', date2)
        }
        if (response.company_detail['company_logo'] != '') {
            compath = siteUrl + 'assets/uploads/company_logo/' + response.company_detail['company_logo'];
            $("#company_logo").fileinput({
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
                elErrorContainer: '#kv-avatar-errors-1',
                msgErrorClass: 'alert alert-block alert-danger',
                defaultPreviewContent: '<img id="imgcompany" class="rounded-circle" src="' + compath + '" alt="Company Logo" width="80px" height="80px">',
                layoutTemplates: { main2: '{preview}  {remove} {browse}' },
                allowedFileExtensions: ["jpg", "png", "gif"]
            });
        }
        $("#company_id").val(response.company_detail['id']);
        $("#company_name").val(response.company_detail['company_name']);
        $("#abn_no").val(response.company_detail['abn_no']);
        $("#register_no").val(response.company_detail['register_no']);

        $("#country").val(response.company_detail['country']).trigger('change');
        $("#cmpy_structure").val(response.company_detail['cmpy_structure']).trigger('change');
        $("#industry").val(response.company_detail['industry']).trigger('change');
        $("#currency").val(response.company_detail['currency']).trigger('change');
        $("#financial_year").val(response.company_detail['financial_year']);

        $("#street_no").val(response.company_detail['street_no']);
        $("#street_name").val(response.company_detail['street_name']);
        $("#suburb").val(response.company_detail['suburb']);
        $("#state").val(response.company_detail['state']).trigger('change');
        $("#zipcode").val(response.company_detail['zipcode']);
        $("#telephone").val(response.company_detail['telephone']);
        $("#fax").val(response.company_detail['fax']);
        $("#company_email").val(response.company_detail['company_email']);
        $("#website").val(response.company_detail['website']);
    }
    if (response.general_assumptions != null) {
        $("#rsvbl_in_days").val(response.general_assumptions['rsvbl_in_days']).trigger('change');
        $("#pybl_in_days").val(response.general_assumptions['pybl_in_days']).trigger('change');
        $("#vat_paid_in_days").val(response.general_assumptions['vat_paid_in_days']).trigger('change');
        $("#cmpnytx_paid_in_days").val(response.general_assumptions['cmpnytx_paid_in_days']).trigger('change');
        $("#marketing_increase").val(response.general_assumptions['marketing_increase']);
        $("#public_reactions").val(response.general_assumptions['public_reactions']);
        $("#administration_cost").val(response.general_assumptions['administration_cost']);
        $("#other_increse").val(response.general_assumptions['other_increse']);

        $("#company_tax").val(response.general_assumptions['company_tax']);
        $("#company_vat_collected").val(response.general_assumptions['company_vat_collected']);
        $("#company_vat").val(response.general_assumptions['company_vat']);
        $("#opening_credit_balance").val(response.general_assumptions['opening_credit_balance']);
        $("#opening_debit_balance").val(response.general_assumptions['opening_debit_balance']);
        $("#opening_bank_balance").val(response.general_assumptions['opening_bank_balance']);
        $("#franchise_royalty").val(response.general_assumptions['franchise_royalty']);
        $("#porivision_baddebt").val(response.general_assumptions['porivision_baddebt']);
        $("#depreciation_on_equipment").val(response.general_assumptions['depreciation_on_equipment']);
        $("#servicesales_cost").val(response.general_assumptions['servicesales_cost']);
        $("#servicecost_service").val(response.general_assumptions['servicecost_service']);
    }
    if (response.directors.length > 0) {
        var i, j, path;
        for (i = 0; i < 4; i++) {
            if (response.directors[i]['image']) {
                path = siteUrl + 'assets/uploads/director_logo/' + response.directors[i]['image'];
            } else {
                path = siteUrl + 'assets/img/cbpLogoSmall_3x.png';
            }
            j = i + 1;
            $("#director_name_" + i).val(response.directors[i]['name']);
            $("#director_id_" + i).val(response.directors[i]['id']);
            $("#director_education_" + i).val(response.directors[i]['education']);
            $("#director_experience_" + i).val(response.directors[i]['experience']);

            $("#director_logo_" + i).fileinput({
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
                elErrorContainer: '#kv-avatar-errors-' + j,
                msgErrorClass: 'alert alert-block alert-danger',
                defaultPreviewContent: '<img id="imgfile_' + i + '" class="rounded-circle" src="' + path + '" alt="Director Logo" width="80px" height="80px">',
                layoutTemplates: { main2: '{preview}  {remove} {browse} ' },
                allowedFileExtensions: ["jpg", "png", "gif"]
            });
        }
    } else {
        for (i = 0; i < 4; i++) {
            $("#director_logo_" + i).fileinput({
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
                elErrorContainer: '#kv-avatar-errors-1',
                msgErrorClass: 'alert alert-block alert-danger',
                defaultPreviewContent: '<img id="imgfile_' + i + '" class="rounded-circle" src="' + siteUrl + 'assets/img/cbpLogoSmall_3x.png" alt="Director Logo" width="80px" height="80px">',
                layoutTemplates: { main2: '{preview}  {remove} {browse} ' },
                allowedFileExtensions: ["jpg", "png", "gif"]
            });
        }
    }
}


// For Accessory
function calculatePurchaseQty(counter) {
    var val1 = $("#purchase_qty_" + counter + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var val2 = $("#purchase_qty_price_" + counter + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var costper = get_cost_per(val1, val2);
    if (val1 != '' && val2 != '') {
        $("#item_cost_" + counter + "").val(cur + number_format(costper, 2, '.', ','));
        total_ingredients_accessory('acc');
    } else {
        $("#item_cost_" + counter + "").val('0.00');
        total_ingredients_accessory('acc');
    }
    checkemptycosmetics();
}

function calculatePurchaseQtyPrice(counter) {
    var val1 = $("#purchase_qty_" + counter + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var val2 = $("#purchase_qty_price_" + counter + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var costper = get_cost_per(val1, val2);
    if (val1 != '' && val2 != '') {
        $("#item_cost_" + counter + "").val(cur + number_format(costper, 2, '.', ','));
        total_ingredients_accessory('acc');
    } else {
        $("#item_cost_" + counter + "").val('0.00');
        total_ingredients_accessory('acc');
    }
    checkemptycosmetics();
}

// End For Accessory

function calculatePurchaseVolume(counter) {
    var val1 = $("#purchase_volume_" + counter + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var val2 = $("#purchase_price_" + counter + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var costper = get_cost_per(val1, val2);
    if (val1 != '' && val2 != '') {
        $("#cost_per_" + counter + "").val(cur + number_format(costper, 2, '.', ','));
        total_ingredients_accessory('ing');
    } else {
        $("#cost_per_" + counter + "").val('0.00');
        total_ingredients_accessory('ing');
    }
    var amount_used = $("#amount_used_" + counter + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var volume_cost = get_volume_cost(amount_used, costper);
    if (amount_used != '' && amount_used > 0 && costper != '' && costper > 0) {
        $("#volume_cost_" + counter + "").val(cur + number_format(volume_cost, 2, '.', ','));
        total_ingredients_accessory('ing');
    } else {
        $("#volume_cost_" + counter + "").val('0.00');
        total_ingredients_accessory('ing');
    }
    checkemptycosmetics();
}

function calculatePurchasePrice(counter) {
    var val1 = $("#purchase_volume_" + counter + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var val2 = $("#purchase_price_" + counter + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var costper = get_cost_per(val1, val2);
    if (val1 != '' && val2 != '') {
        $("#cost_per_" + counter + "").val(cur + number_format(costper, 2, '.', ','));
        total_ingredients_accessory('ing');
    } else {
        $("#cost_per_" + counter + "").val('0.00');
        total_ingredients_accessory('ing');
    }
    var amount_used = $("#amount_used_" + counter + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var volume_cost = get_volume_cost(amount_used, costper);
    if (amount_used != '' && amount_used > 0 && costper != '' && costper > 0) {
        $("#volume_cost_" + counter + "").val(cur + number_format(volume_cost, 2, '.', ','));
        total_ingredients_accessory('ing');
    } else {
        $("#volume_cost_" + counter + "").val('0.00');
        total_ingredients_accessory('ing');
    }
    checkemptycosmetics();
}

$("#production_volume").keyup(function () {
    var val1 = $("#production_volume").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var current_rows = $("#table_cosmetics_ingredients > tbody").children().length;
    //row counter starts from 0 so -1 from current rows
    counter = current_rows - 1;
    for (var i = 0; i <= counter; i++) {
        var val2 = $("#formula_percentage_" + i + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        var costper = get_cost_per1(val1, val2);
        if (val1 != '' && val2 != '') {
            $("#amount_used_" + i + "").val(number_format(costper, 2, '.', ','));
            total_ingredients_accessory('ing');
        } else {
            $("#amount_used_" + i + "").val('0.00');
            total_ingredients_accessory('ing');
        }
        checkemptycosmetics();
    }
});

function calculateFormulaPercent(counter) {
    var val1 = $("#production_volume").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var val2 = $("#formula_percentage_" + counter + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    var costper = get_cost_per1(val1, val2);
    if (val1 != '' && val2 != '') {
        $("#amount_used_" + counter + "").val(number_format(costper, 2, '.', ','));
        total_ingredients_accessory('ing');
    } else {
        $("#amount_used_" + counter + "").val('0.00');
        total_ingredients_accessory('ing');
    }
    checkemptycosmetics();
}
function get_cost_per(val1, val2) {
    return (val2 / val1).toFixed(2);
}
function get_cost_per1(val1, val2) {
    if (val2 != '') {
        return ((val2 * val1) / 100).toFixed(1);
    }
}
function get_volume_cost(val1, val2) {
    return (val2 * val1).toFixed(2);
}
function delete_cosmetic(id, type, rowId) {
    $('#myModal2').fadeOut();
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this product ??");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        delete_cosmetic_product(id, type, rowId);
        $('#modalConfirmYesNo').modal('hide');
        $('#myModal2').fadeIn();
    });
    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
        $('#myModal2').fadeIn();
    });
}
function delete_cosmetic_product(id, type, rowId) {
    $.ajax({
        type: "POST",
        url: siteUrl + "products/ajax-delete_cosmetic",
        dataType: "json",
        data: { get_id: id },
        success: function (response) {
            // $('#modalConfirmYes').modal('show');
            // $("#lblMsgConfirmYes").html("<div class='checkmark'>"
            //     + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
            //     + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
            //     + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
            //     + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
            //     + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
            //     + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
            //     + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
            //     + "</svg>"
            //     + "</div>"
            //     + "<p class='alert-box'>Your product have been deleted successfully</p>");
            if (type == 'ingredient') {
                if (rowId <= 2) {
                    $('#row_id_' + rowId).find('td input').each(function () {
                        $(this).val("");
                    })
                    $('#id_' + rowId + '').val('');
                    $("#category_" + rowId + "").val('1').trigger('change');

                    if (rowId == 0) {
                        $("#table_cosmetics_ingredients tr").find("#td_action_0").remove();
                        $("#table_cosmetics_ingredients tr:first").find("#action_title").remove();
                        $(".FormulaTotal").text('');
                        $(".AmountTotal").text('');
                        $(".PurchaseVolumePriceTotal").text('');
                        $(".CostPerTotal").text('');
                        $(".CostProductTotal").text('');
                    }
                }
                load_category_items(type, '');
                updatesummarytable();
            } else if ('accessory') {
                if (rowId <= 2) {
                    $('#row_accessory_id_' + rowId).find('td input').each(function () {
                        $(this).val("");
                    })
                    $('#accessory_id_' + rowId + '').val('');
                    $("#accessory_category_" + rowId + "").val('5').trigger('change');

                    if (rowId == 0) {
                        $("#table_cosmetics_accessory tr").find("#td_action_0").remove();
                        $("#table_cosmetics_accessory tr:first").find("#action_title").remove();
                        $(".PurchaseQtyPriceTotal").text('');
                        $(".ItemCostTotal").text('');
                    }
                }
                load_category_items(type, '');
                updatesummarytable();
            } else {
                // Do Nothing
            }
            resetcategoryform(type);
        }
    });
}
function edit_cosmetic_product(id) {
    //alert('todo');
    $("#myModal2").modal('show');
    $("label.error").remove();
    save_method = 'update';
    clearForm();
    $('.form-group').removeClass('has-error');
    $('#purchases').find('td input').each(function () {
        $(this).prop('readonly', true);
    })
    $('#sales_projection').find('td input').each(function () {
        $(this).prop('readonly', true);
    });
    // Clicked Default Checked Box
    $("#ing_access input:radio:first").trigger('click');
    $('#accessory_list').hide();
    $('#ingredients_list').show();
    clearMonthlySale();
    $.ajax({
        type: "POST",
        url: siteUrl + "products/ajax-get_cosmeticproduct",
        dataType: "json",
        data: { get_id: id },
        success: function (response) {
            //$("#product_form").show();
            $("#product_id").val(response.product.id);
            $("#get_status").val('update');
            $("#product_code").val(response.product.product_code);
            $("#product_type").val(response.product.product_type).trigger('change');
            $("#product_description").val(response.product.Description);
            $("#product_methods").val(response.product.product_method);
            $("#indus_type").val("Cosmetics");
            $("#monthlytable_qty").val(number_format(response.product.monthly_qty, 0, '.', ','));
            $("#oq_1").val(number_format(response.product.oq_1, 0, '.', ','));

            $("#sp_1").val(number_format(response.product.sp_1), 0, '.', ',');
            $("#sp_2").val(number_format(response.product.sp_2), 0, '.', ',');
            $("#sp_3").val(number_format(response.product.sp_3), 0, '.', ',');
            $("#sp_4").val(number_format(response.product.sp_4), 0, '.', ',');
            $("#sp_5").val(number_format(response.product.sp_5), 0, '.', ',');
            $("#sp_6").val(number_format(response.product.sp_6), 0, '.', ',');
            $("#sp_7").val(number_format(response.product.sp_7), 0, '.', ',');
            $("#sp_8").val(number_format(response.product.sp_8), 0, '.', ',');
            $("#sp_9").val(number_format(response.product.sp_9), 0, '.', ',');
            $("#sp_10").val(number_format(response.product.sp_10), 0, '.', ',');
            $("#sp_11").val(number_format(response.product.sp_11), 0, '.', ',');
            $("#sp_12").val(number_format(response.product.sp_12), 0, '.', ',');

            $("#p_1").val(number_format(response.product.p_1), 0, '.', ',');
            $("#p_2").val(number_format(response.product.p_2), 0, '.', ',');
            $("#p_3").val(number_format(response.product.p_3), 0, '.', ',');
            $("#p_4").val(number_format(response.product.p_4), 0, '.', ',');
            $("#p_5").val(number_format(response.product.p_5), 0, '.', ',');
            $("#p_6").val(number_format(response.product.p_6), 0, '.', ',');
            $("#p_7").val(number_format(response.product.p_7), 0, '.', ',');
            $("#p_8").val(number_format(response.product.p_8), 0, '.', ',');
            $("#p_9").val(number_format(response.product.p_9), 0, '.', ',');
            $("#p_10").val(number_format(response.product.p_10), 0, '.', ',');
            $("#p_11").val(number_format(response.product.p_11), 0, '.', ',');
            $("#p_12").val(number_format(response.product.p_12), 0, '.', ',');

            $("#markup_on_cost").val(response.product.MarkUpOnCost + '%');
            // Cosmetics Testing
            $("#cosmetics_description").val(response.product.cosmetics_description);
            $("#cosmetics_description_1").val(response.product.cosmetics_description_1);
            $("#cosmetics_description_2").val(response.product.cosmetics_description_2);
            $("#cosmetics_description_3").val(response.product.cosmetics_description_3);
            // Monthly Sale
            $("#local_distribution").val(number_format(response.product.local_distribution), 0, '.', ',');
            $(".monthly_sale_local").text(number_format(response.product.local_distribution), 0, '.', ',');
            $("#wholesale").val(number_format(response.product.wholesale), 0, '.', ',');
            $(".monthly_sale_whole").text(number_format(response.product.wholesale), 0, '.', ',');
            $("#online_sales").val(number_format(response.product.online_sales), 0, '.', ',');
            $(".monthly_sale_online").text(number_format(response.product.online_sales), 0, '.', ',');
            $("#export").val(number_format(response.product.export), 0, '.', ',');
            $(".monthly_sale_export").text(number_format(response.product.export), 0, '.', ',');
            $("#markup_local_distribution").val(response.product.markup_local_distribution + '%');
            $("#markup_wholesale").val(response.product.markup_wholesale + '%');
            $("#markup_online_sales").val(response.product.markup_online_sales + '%');
            $("#markup_export").val(response.product.markup_export + '%');
            if (!(response.product.local_distribution) == 0) {
                calculateCOGS('local_distribution', response.product.local_distribution, response.product.UnitCost);
            }
            if (!(response.product.wholesale) == 0) {
                calculateCOGS('wholesale', response.product.wholesale, response.product.UnitCost);
            }
            if (!(response.product.online_sales) == 0) {
                calculateCOGS('online_sale', response.product.online_sales, response.product.UnitCost);
            }
            if (!(response.product.export) == 0) {
                calculateCOGS('export', response.product.export, response.product.UnitCost);
            }
            if (!(response.product.markup_local_distribution) == 0) {
                projected_Price_structure('markup_local_distribution', response.product.markup_local_distribution, response.product.UnitCost);
            }
            if (!(response.product.markup_wholesale) == 0) {
                projected_Price_structure('markup_wholesale', response.product.markup_wholesale, response.product.UnitCost);
            }
            if (!(response.product.markup_online_sales) == 0) {
                projected_Price_structure('markup_online_sales', response.product.markup_online_sales, response.product.UnitCost);
            }
            if (!(response.product.markup_export) == 0) {
                projected_Price_structure('markup_export', response.product.markup_export, response.product.UnitCost);
            }
            total_monthly_sale_projection();
            TableCalculation();
            if (response.product.ThumbNail != "assets/images/default-avatar.png") {
                var btnReset = '<button type="button" class="btn btn-flat fileinput-remove fileinput-remove-button" title="Restore default" ' +
                    'onclick="restoreDefault(' + response.product.id + ',' + 0 + ')">' +
                    '<i class="fa fa-remove"></i>' +
                    '</button>';
            } else {
                var btnReset = "{remove}";
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
                defaultPreviewContent: '<img id="imgfile" class="rounded-circle" src="' + siteUrl + response.product.ThumbNail + '" alt="Product Picture" width="80px" height="80px">',
                layoutTemplates: { main2: '{preview}  ' + btnReset + ' {browse} ' },
                allowedFileExtensions: ["jpg", "png", "gif"]
            });
            //$('#type_edit').val(1);
            // Load For Ingredient
            load_category_items('ingredient', '');
            // Load For Accessory
            load_category_items('accessory', '');
            updatesummarytable();
            $('input').each(function () {
                var $this = $(this);
                if ($this.val())
                    $this.addClass('used');
                else
                    $this.removeClass('used');
            });
            $('#ingredient-category').focus();
            $("#markup_on_cost").addClass('used');
            $("#rrp_cost").addClass('used');
            setTimeout(function () {
                products_cost = parseFloat($("#unit_cost").val());
                rrp_cost = MarkUpOnCost = parseFloat($("#rrp_cost").val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                tableCalculationPrice();
            }, 2000);

        }
    });
}
function edit_cosmetic(id, type) {
    $('#type_edit').val(0);
    $.ajax({
        type: "POST",
        url: siteUrl + "products/ajax-get_singleproduct",
        dataType: "json",
        data: { get_id: id },
        success: function (response) {
            if (type == 'ingredient') {
                $('#locaprodstep1-2 input[type="text"]').addClass('used');
                $('#locaprodstep1-2 input[type="number"]').addClass('used');
                //$("#ingredient-category").val(response.product_sub_category).trigger('change');
                $("#base_purchase_volume").val(number_format(response.purchase_volume, 2, '.', ','));
                $("#base_purchase_price").val(cur + number_format(response.purchase_price, 2, '.', ','));
                $("#production_volume").val(number_format(response.production_volume, 0, '.', ','));
                $("#base_cost_per").val(number_format(response.cost_per, 2, '.', ','));
                $("#production_volume_cost").val(cur + number_format(response.purchase_volume_cos1, 2, '.', ','));
                $("#base_ingredients").val(response.product_var_name);
                $("#inc_ingredients").val(response.product_inci_name);
                $("#formula_pecentage").val(response.purchase_volume_percent + '%');
                $("#amount_used").val(number_format(response.amount_used, 2, '.', ','));
                $("#supplier_ingredients").val(response.supplier_name);
                $("#is_update").val('Update');
            } else if (type == 'accessory') {
                $('#locaprodstep1-3 input[type="text"]').addClass('used');
                $('#locaprodstep1-3 input[type="number"]').addClass('used');
                //$("#ingredient-category").val(response.product_sub_category).trigger('change');
                $("#accessory_name").val(response.product_var_name);
                $("#inc_accessory").val(response.product_inci_name);
                $("#supplier_accessory").val(response.supplier_name);
                $("#purchase_qty").val(number_format(response.purchase_volume, 2, '.', ','));
                $("#purchase_qty_price").val(cur + number_format(response.purchase_price, 2, '.', ','));
                $("#item_cost").val(number_format(response.cost_per, 2, '.', ','));
                $("#is_update_accessory").val('Update');
            } else {
                // Do Nothing
            }
            checkemptycosmetics();
        }
    });
}
function chknewproduct(type) {

    if ($("#product_id").val() == "") {
        $.ajax({
            type: "POST",
            url: siteUrl + "products/ajax-create_new_item",
            dataType: "json",
            success: function (response) {
                $("#product_id").val(response);
                $("#get_status").val("update");
                saveCategoryItem(type);
            }
        });
    } else {
        saveCategoryItem(type);

    }
}
function saveCategoryItem(type) {
    var current_rows = $("#table_cosmetics_ingredients > tbody").children().length;
    //row counter starts from 0 so -1 from current rows
    counter = current_rows - 1;

    var current_rows_accessory = $("#table_cosmetics_accessory > tbody").children().length;
    //row counter starts from 0 so -1 from current rows
    counter_accessory = current_rows_accessory - 1;
    // var valid = true;
    // if (type == 'ingredient') {
    //     if ($("#base_ingredients").val() == "") {
    //         $("#base_ingredients").parent('div').parent('div').addClass('has-error');
    //         valid = false;
    //     }

    //     if ($("#purchase_volume").val() == "") {
    //         $("#purchase_volume").parent('div').parent('div').addClass('has-error');
    //         valid = false;
    //     }
    //     if ($("#purchase_price").val() == "") {
    //         $("#purchase_price").parent('div').parent('div').addClass('has-error');
    //         valid = false;
    //     }
    //     if ($("#cost_per").val() == "") {
    //         $("#cost_per").parent('div').parent('div').addClass('has-error');
    //         valid = false;
    //     }
    //     if ($("#production_volume").val() == "") {
    //         $("#production_volume").parent('div').parent('div').addClass('has-error');
    //         valid = false;
    //     }
    //     if ($("#volume_cost").val() == "") {
    //         $("#volume_cost").parent('div').parent('div').addClass('has-error');
    //         valid = false;
    //     }
    //     if ($("#formula_pecentage").val().replace(/\,|\$|\€|\₹|\£|\%/g, '') == "") {
    //         $("#formula_pecentage").parent('div').parent('div').addClass('has-error');
    //         valid = false;
    //     }
    // } else if (type == 'accessory') {
    //     if ($("#purchase_qty").val() == "") {
    //         $("#purchase_qty").parent('div').parent('div').addClass('has-error');
    //         valid = false;
    //     }
    //     if ($("#purchase_qty_price").val() == "") {
    //         $("#purchase_qty_price").parent('div').parent('div').addClass('has-error');
    //         valid = false;
    //     }
    // } else {
    //     // Do Nothing
    // }

    // if (valid == false) {
    //     return false;
    // } else {
    if (type == 'ingredient') {
        var totalProgress = '';
        //var checkProgress = parseFloat($('#cosmetics-progress-bar').find('.progress-bar').attr('aria-valuenow'));
        var formula_percentage = 0;
        var total_percent = 0;
        var i;
        for (i = 0; i <= counter; i++) {
            formula_percentage = parseFloat($('#formula_percentage_' + i + '').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
            if (isNaN(formula_percentage)) {
                formula_percentage = 0;
            } else {
                total_percent += formula_percentage;
            }
        }

        totalProgress = total_percent;
        if (totalProgress <= '100') {
            var ajaxpath = siteUrl + "products/ajax-save_category_item/ingredient/" + counter;
            var formData = {};
            var j;
            for (j = 0; j <= counter; j++) {
                formData['id_' + j] = $("#id_" + j + "").val();
                formData['ingredients_phase_' + j] = $("#ingredients_phase_" + j + "").val();
                formData['category_' + j] = $("#category_" + j + "").val();
                formData['base_ingredients_' + j] = $("#base_ingredients_" + j + "").val();
                formData['inc_ingredients_' + j] = $("#inc_ingredients_" + j + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                formData['supplier_name_' + j] = $("#supplier_name_" + j + "").val();
                formData['formula_percentage_' + j] = $("#formula_percentage_" + j + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                formData['amount_used_' + j] = $("#amount_used_" + j + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                formData['purchase_volume_' + j] = $("#purchase_volume_" + j + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                formData['purchase_price_' + j] = $("#purchase_price_" + j + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                formData['cost_per_' + j] = $("#cost_per_" + j + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                formData['volume_cost_' + j] = $("#volume_cost_" + j + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
            }
            formData['production_volume'] = $("#production_volume").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
            formData['product_id'] = $("#product_id").val();
            $.ajax({
                type: "POST",
                url: ajaxpath,
                dataType: "json",
                data: formData,
                success: function (response) {
                    $('#myModal2').fadeOut();
                    $('#modalConfirmYes').modal('show');
                    $("#lblMsgConfirmYes").html("<div class='checkmark'>"
                        + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                        + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                        + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                        + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                        + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                        + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                        + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                        + "</svg>"
                        + "</div>"
                        + "<p class='alert-box'>Your changes have been saved successfully</p>");
                    load_category_items('ingredient', '');
                    resetcategoryform('ingredient');
                    updatesummarytable();
                    checkemptycosmetics();
                    $("#btnYesConfirmYes").off('click').click(function () {
                        $('#modalConfirmYes').modal('hide');
                        $('#myModal2').fadeIn();
                    });
                }
            });
        } else {
            $('#myModal2').fadeOut();
            $('#modalConfirmYes').modal('show');
            $("#lblMsgConfirmYes").html("<div class='checkmark'>"
                + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                + "</svg>"
                + "</div>"
                + "<p class='alert-box'>You Have Reached Limit Maximum Limit is 100%</p>");


            $("#btnYesConfirmYes").off('click').click(function () {
                $('#modalConfirmYes').modal('hide');
                $('#myModal2').fadeIn();
            });
        }
    } else if (type == 'accessory') {

        var ajaxpath = siteUrl + "products/ajax-save_category_item/accessory/" + counter_accessory;
        var accessoryFormData = {};
        var k;
        for (k = 0; k <= counter_accessory; k++) {
            accessoryFormData['accessory_id_' + k] = $("#accessory_id_" + k + "").val();
            accessoryFormData['accessory_category_' + k] = $("#accessory_category_" + k + "").val();
            accessoryFormData['accessory_name_' + k] = $("#accessory_name_" + k + "").val();
            accessoryFormData['supplier_name_accessory_' + k] = $("#supplier_name_accessory_" + k + "").val();
            accessoryFormData['purchase_qty_' + k] = $("#purchase_qty_" + k + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
            accessoryFormData['purchase_qty_price_' + k] = $("#purchase_qty_price_" + k + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
            accessoryFormData['item_cost_' + k] = $("#item_cost_" + k + "").val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
        }
        accessoryFormData['product_id'] = $("#product_id").val();
        $.ajax({
            type: "POST",
            url: ajaxpath,
            dataType: "json",
            data: accessoryFormData,
            success: function (response) {
                $('#myModal2').fadeOut();
                $('#modalConfirmYes').modal('show');
                $("#lblMsgConfirmYes").html("<div class='checkmark'>"
                    + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                    + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                    + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                    + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                    + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                    + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                    + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                    + "</svg>"
                    + "</div>"
                    + "<p class='alert-box'>Your changes have been saved successfully</p>");
                load_category_items('accessory', '');
                resetcategoryform('accessory');
                updatesummarytable();
                checkemptycosmetics();
                $("#btnYesConfirmYes").off('click').click(function () {
                    $('#modalConfirmYes').modal('hide');
                    $('#myModal2').fadeIn();
                });
            }
        });
    } else {
        // Do Nothing
    }
}
// }
function updatesummarytable() {
    if ($("#product_id").val() != "") {
        var bi_unit = 0, aing_unit = 0, p_unit = 0, dh_unit = 0, pac_unit = 0, bnd_unit = 0, total_unit = 0;
        $.ajax({
            type: "GET",
            url: siteUrl + "products/ajax-get_all_category",
            dataType: "json",
            data: { product_id: $("#product_id").val() },
            success: function (response) {
                for (var i = 0; i < response.length; i++) {
                    if (response[i].product_sub_category == 1) {
                        bi_unit = parseFloat(bi_unit) + parseFloat(response[i].cost_per);
                    } else if (response[i].product_sub_category == 2) {
                        aing_unit = parseFloat(aing_unit) + parseFloat(response[i].cost_per);
                    } else if (response[i].product_sub_category == 3) {
                        p_unit = parseFloat(p_unit) + parseFloat(response[i].cost_per);
                    } else if (response[i].product_sub_category == 4) {
                        dh_unit = parseFloat(dh_unit) + parseFloat(response[i].cost_per);
                    } else if (response[i].product_sub_category == 5) {
                        pac_unit = parseFloat(pac_unit) + parseFloat(response[i].cost_per);
                    } else if (response[i].product_sub_category == 6) {
                        bnd_unit = parseFloat(bnd_unit) + parseFloat(response[i].cost_per);
                    }
                    total_unit = parseFloat(total_unit) + parseFloat(response[i].cost_per);
                }
                if (total_unit == 0) {
                    $('#total_unit').html(cur + total_unit);
                } else {
                    $('#total_unit').html(cur + number_format(total_unit, 2, '.', ','));
                    $('#unit_cost').val(number_format(total_unit, 2, '.', ','));
                    var total_sale_price_table = $('.total_sale_price').text().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                    if (total_sale_price_table > 0) {
                        $('#rrp_cost').val(cur + number_format(total_sale_price_table, 2, '.', ','));
                    } else {
                        $('#rrp_cost').val(cur + number_format(total_unit, 2, '.', ','));
                    }

                }
                if (bi_unit == 0) {
                    $('#bi_unit').html(cur + bi_unit);
                } else {
                    $('#bi_unit').html(cur + number_format(bi_unit, 2, '.', ','));
                }
                if (p_unit == 0) {
                    $('#p_unit').html(cur + p_unit);
                } else {
                    $('#p_unit').html(cur + number_format(p_unit, 2, '.', ','));
                }
                if (dh_unit == 0) {
                    $('#dh_unit').html(cur + dh_unit);
                } else {
                    $('#dh_unit').html(cur + number_format(dh_unit, 2, '.', ','));
                }
                if (pac_unit == 0) {
                    $('#pac_unit').html(cur + pac_unit);
                } else {
                    $('#pac_unit').html(cur + number_format(pac_unit, 2, '.', ','));
                }
                if (bnd_unit == 0) {
                    $('#bnd_unit').html(cur + bnd_unit);
                } else {
                    $('#bnd_unit').html(cur + number_format(bnd_unit, 2, '.', ','));
                }
                if (aing_unit == 0) {
                    $('#aing_unit').html(cur + aing_unit);
                } else {
                    $('#aing_unit').html(cur + number_format(aing_unit, 2, '.', ','));
                }
                update_summary_table();
                update_rrp();

            }
        });
    }
    setTimeout(function () {
        products_cost = parseFloat($("#unit_cost").val());
        rrp_cost = MarkUpOnCost = parseFloat($("#rrp_cost").val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
        tableCalculationPrice();
    }, 1000);
}
function load_category_items(type, counter) {
    if ($("#product_id").val() != "") {
        if (type == 'ingredient') {
            $.ajax({
                type: "GET",
                url: siteUrl + "products/ajax-get_category_item_list/ingredient",
                dataType: "json",
                data: { product_id: $("#product_id").val() },
                success: function (response) {
                    if (response['total_record'] > 0 && counter == '') {
                        // Remove Appended Rows
                        var current_cosmetics_rows = '';
                        current_cosmetics_rows = $("#table_cosmetics_ingredients > tbody").children().length;
                        var cosmetics_rows = current_cosmetics_rows - 1;
                        $("#table_cosmetics_ingredients tr:first").find("#action_title").remove();
                        for (var z = 0; z <= cosmetics_rows; z++) {
                            if (z > 2) {
                                $('#table_cosmetics_ingredients tr#row_id_' + z).remove();
                            }
                            $('#table_cosmetics_ingredients tr').find('#td_action_' + z).remove();
                        }
                        $("#table_cosmetics_ingredients tr:first").append("<th id='action_title'>Action</th>");

                        var i;
                        var total_record = response['total_record'] - 1;
                        var amountUsedTotal = 0;
                        var purchaseVolumePriceTotal = 0;
                        var costPerTotal = 0;
                        var volumeCostTotal = 0;
                        $('#table_cosmetics_ingredients tr:not(:first)').each(function (e) {
                            if (e <= total_record) {
                                $(this).append("<td id='td_action_" + e + "'></td>");
                            }
                        });
                        for (i = 0; i <= total_record; i++) {

                            // Calculate Total
                            amountUsedTotal += parseFloat(response.record[i].amount_used);
                            purchaseVolumePriceTotal += parseFloat(response.record[i].purchase_price);
                            costPerTotal += parseFloat(response.record[i].cost_per);
                            volumeCostTotal += parseFloat(response.record[i].volume_cost);
                            if (i > 2) {
                                //empty appended row if any
                                $('#table_cosmetics_ingredients tr#row_id_' + i).remove();
                                //append rows
                                var newRow = '<tr id="row_id_' + i + '"><input name="id_' + i + '" id="id_' + i + '" type="hidden" value=""><td id="td_ingredients_phase_' + i + '"><div class="form-group is-empty no-margin"><input name="ingredients_phase_' + i + '" class="form-control no-margin" id="ingredients_phase_' + i + '" type="text"></div></td><td id="td_category_' + i + '"><div class="form-group is-empty no-margin"><select class="ingredient-category form-control no-margin" id="category_' + i + '" name="category_' + i + '" style="width:100%;"><option value="1" selected>Base Ingredients</option><option value="2">Added Ingredients</option><option value="3">Powders</option><option value="4">Dried Herbs</option></select></div></td><td id="td_base_ingredients_' + i + '"><div class="form-group is-empty no-margin"><input name="base_ingredients_' + i + '" class="form-control no-margin" id="base_ingredients_' + i + '" type="text"></div></td><td id="td_inc_ingredients_' + i + '"><div class="form-group is-empty no-margin"><input name="inc_ingredients_' + i + '" class="form-control no-margin" id="inc_ingredients_' + i + '" type="text"></div></td><td id="td_supplier_name_' + i + '"><div class="form-group is-empty no-margin"><input name="supplier_name_' + i + '" class="form-control no-margin" id="supplier_name_' + i + '" type="text"></div></td><td id="td_formula_percentage_' + i + '"><div class="form-group is-empty no-margin"><input name="formula_percentage_' + i + '" class="form-control no-margin" id="formula_percentage_' + i + '" type="text" onkeyup="calculateFormulaPercent(' + i + ')"></div></td><td id="td_amount_used_' + i + '"><div class="form-group is-empty no-margin"><input name="amount_used_' + i + '" class="form-control no-margin" id="amount_used_' + i + '" type="text" readonly></div></td><td id="td_purchase_volume_' + i + '"><div class="form-group is-empty no-margin"><input name="purchase_volume_' + i + '" class="form-control no-margin" id="purchase_volume_' + i + '" type="text" onkeyup="calculatePurchaseVolume(' + i + ')"></div></td><td id="td_purchase_price_' + i + '"><div class="form-group is-empty no-margin"><input name="purchase_price_' + i + '" class="form-control no-margin" id="purchase_price_' + i + '" type="text" onkeyup="calculatePurchasePrice(' + i + ')"></div></td><td id="td_cost_per_' + i + '"><div class="form-group is-empty no-margin"><input name="cost_per_' + i + '" class="form-control no-margin" id="cost_per_' + i + '" type="text" readonly></div></td><td id="td_volume_cost_' + i + '"><div class="form-group is-empty no-margin"><input name="volume_cost_' + i + '" class="form-control no-margin" id="volume_cost_' + i + '" type="text" readonly></div></td><td id="td_action_' + i + '"></td></tr>';
                                $('table.table_cosmetics_ingredients').append(newRow);

                            }
                            $("#id_" + i + "").val(response.record[i].id);
                            $("#ingredients_phase_" + i + "").val(response.record[i].phase);
                            $("#category_" + i + "").val(response.record[i].product_sub_category).trigger('change');
                            $("#base_ingredients_" + i + "").val(response.record[i].product_var_name);
                            $("#inc_ingredients_" + i + "").val(response.record[i].product_inc_name);
                            $("#supplier_name_" + i + "").val(response.record[i].supplier_name);
                            $("#formula_percentage_" + i + "").val(response.record[i].purchase_volume_percent + '%');
                            $("#amount_used_" + i + "").val(number_format(response.record[i].amount_used, 2, '.', ','));
                            $("#purchase_volume_" + i + "").val(number_format(response.record[i].purchase_volume, 0, '.', ','));
                            $("#purchase_price_" + i + "").val(cur + number_format(response.record[i].purchase_price, 2, '.', ','));
                            $("#cost_per_" + i + "").val(cur + number_format(response.record[i].cost_per, 2, '.', ','));
                            $("#volume_cost_" + i + "").val(cur + number_format(response.record[i].volume_cost, 2, '.', ','));
                            $('#td_action_' + i).html('<a href="#" class="btn btn-sm tbl-action btn-flat" onclick="delete_cosmetic(\'' + response.record[i].id + '\',\'' + type + '\',\'' + i + '\')"><i class="fa fa-trash"></i></a>');
                        }
                        $("#production_volume").val(number_format(response.record[0].production_volume, 0, '.', ','));
                        $('#cosmetics-progress-bar').find('.progress-bar').text(response.progress + '%');
                        $('#cosmetics-progress-bar').find('.progress-bar').attr('aria-valuenow', response.progress).width(response.progress + '%');
                        // Total
                        $('.FormulaTotal').text(response.progress + '%');
                        $('.AmountTotal').text(amountUsedTotal);
                        $('.PurchaseVolumePriceTotal').text(cur + number_format(purchaseVolumePriceTotal, 2, '.', ','));
                        $('.CostPerTotal').text(cur + number_format(costPerTotal, 2, '.', ','));
                        $('.CostProductTotal').text(cur + number_format(volumeCostTotal, 2, '.', ','));
                        checkemptycosmetics();
                    } else if (response['total_record'] > 0 && counter !== '') {
                        console.log(response.last_record)
                        $("#ingredients_phase_" + counter + "").val(response.last_record.phase);
                        $("#category_" + counter + "").val(response.last_record.product_sub_category).trigger('change');
                        $("#base_ingredients_" + counter + "").val(response.last_record.product_var_name);
                        $("#inc_ingredients_" + counter + "").val(response.last_record.product_inc_name);
                        $("#supplier_name_" + counter + "").val(response.last_record.supplier_name);
                        $("#formula_percentage_" + counter + "").val(response.last_record.purchase_volume_percent + '%');
                        $("#amount_used_" + counter + "").val(number_format(response.last_record.amount_used, 2, '.', ','));
                        $("#purchase_volume_" + counter + "").val(number_format(response.last_record.purchase_volume, 0, '.', ','));
                        $("#purchase_price_" + counter + "").val(cur + number_format(response.last_record.purchase_price, 2, '.', ','));
                        $("#cost_per_" + counter + "").val(cur + number_format(response.last_record.cost_per, 2, '.', ','));
                        $("#volume_cost_" + counter + "").val(cur + number_format(response.last_record.volume_cost, 2, '.', ','));
                    } else {
                        // Do Nothing
                    }

                }
            });
        } else if (type == 'accessory') {
            $.ajax({
                type: "GET",
                url: siteUrl + "products/ajax-get_category_item_list/accessory",
                dataType: "json",
                data: { product_id: $("#product_id").val() },
                success: function (response) {
                    if (response['total_record'] > 0 && counter == '') {
                        // Remove Appended Rows
                        var current_accessory_rows = '';
                        current_accessory_rows = $("#table_cosmetics_accessory > tbody").children().length;
                        var accessory_rows = current_accessory_rows - 1;
                        $("#table_cosmetics_accessory tr:first").find("#action_title").remove();
                        for (var x = 0; x <= accessory_rows; x++) {
                            if (x > 2) {
                                $('#table_cosmetics_accessory tr#row_accessory_id_' + x).remove();
                            }
                            $('#table_cosmetics_accessory tr').find('#td_action_accessory_' + x).remove();
                        }
                        $("#table_cosmetics_accessory tr:first").append("<th id='action_title'>Action</th>");

                        var i;
                        var total_record_accessory = response['total_record'] - 1;
                        var purchaseQtyPriceTotal = 0;
                        var itemCostTotal = 0;
                        $('#table_cosmetics_accessory tr:not(:first)').each(function (e) {
                            if (e <= total_record_accessory) {
                                $(this).append("<td id='td_action_accessory_" + e + "'></td>");
                            }
                        });
                        for (i = 0; i <= total_record_accessory; i++) {

                            // Calculate Total
                            purchaseQtyPriceTotal += parseFloat(response.record[i].purchase_price);
                            itemCostTotal += parseFloat(response.record[i].cost_per);
                            if (i > 2) {
                                //empty appended row if any
                                $('#table_cosmetics_accessory tr#row_accessory_id_' + i).remove();
                                //append rows
                                var newRowAccessory = '<tr id="row_accessory_id_' + i + '"><input name="accessory_id_' + i + '" id="accessory_id_' + i + '" type="hidden" value=""><td id="td_accessory_category_' + i + '"><div class="form-group is-empty no-margin"><select class="ingredient-category form-control no-margin" id="accessory_category_' + i + '" name="accessory_category_' + i + '" style="width:100%;"><option value="5" selected>Packaging/Containers</option><option value="6">Branding</option></select></div></td><td id="td_accessory_name_' + i + '"><div class="form-group is-empty no-margin"><input name="accessory_name_' + i + '" class="form-control no-margin" id="accessory_name_' + i + '" type="text"></div></td><td id="td_supplier_name_accessory_' + i + '"><div class="form-group is-empty no-margin"><input name="supplier_name_accessory_' + i + '" class="form-control no-margin" id="supplier_name_accessory_' + i + '" type="text"></div></td><td id="td_purchase_qty_' + i + '"><div class="form-group is-empty no-margin"><input name="purchase_qty_' + i + '" class="form-control no-margin" id="purchase_qty_' + i + '" type="text" onkeyup="calculatePurchaseQty(' + i + ')"></div></td><td id="td_purchase_qty_price_' + i + '"><div class="form-group is-empty no-margin"><input name="purchase_qty_price_' + i + '" class="form-control no-margin" id="purchase_qty_price_' + i + '" type="text" onkeyup="calculatePurchaseQtyPrice(' + i + ')"></div></td><td id="td_item_cost_' + i + '"><div class="form-group is-empty no-margin"><input name="item_cost_' + i + '" class="form-control no-margin" id="item_cost_' + i + '" type="text" readonly></div></td><td id="td_action_accessory_' + i + '"></td></tr>';
                                $('table.table_cosmetics_accessory').append(newRowAccessory);

                            }
                            $("#accessory_id_" + i + "").val(response.record[i].id);
                            $("#accessory_category_" + i + "").val(response.record[i].product_sub_category).trigger('change');
                            $("#accessory_name_" + i + "").val(response.record[i].product_var_name);
                            $("#supplier_name_accessory_" + i + "").val(response.record[i].supplier_name);
                            $("#purchase_qty_" + i + "").val(number_format(response.record[i].purchase_volume, 0, '.', ','));
                            $("#purchase_qty_price_" + i + "").val(cur + number_format(response.record[i].purchase_price, 2, '.', ','));
                            $("#item_cost_" + i + "").val(cur + number_format(response.record[i].cost_per, 2, '.', ','));
                            $('#td_action_accessory_' + i).html('<a href="#" class="btn btn-sm tbl-action btn-flat" onclick="delete_cosmetic(\'' + response.record[i].id + '\',\'' + type + '\',\'' + i + '\')"><i class="fa fa-trash"></i></a>');
                        }
                        $('.PurchaseQtyPriceTotal').text(cur + number_format(purchaseQtyPriceTotal, 2, '.', ','));
                        $('.ItemCostTotal').text(cur + number_format(itemCostTotal, 2, '.', ','));
                        checkemptycosmetics();
                    } else if (response['total_record'] > 0 && counter !== '') {
                        $("#accessory_category_" + counter + "").val(response.last_record.product_sub_category).trigger('change');
                        $("#accessory_name_" + counter + "").val(response.last_record.product_var_name);
                        $("#supplier_name_accessory_" + counter + "").val(response.last_record.supplier_name);
                        $("#purchase_qty_" + counter + "").val(number_format(response.last_record.purchase_volume, 0, '.', ','));
                        $("#purchase_qty_price_" + counter + "").val(cur + number_format(response.last_record.purchase_price, 2, '.', ','));
                        $("#item_cost_" + counter + "").val(cur + number_format(response.last_record.cost_per, 2, '.', ','));
                    } else {
                        // Do Nothing
                    }

                }
            });
        } else {
            // Do Nothing
        }
    }
}
function resetcategoryform(type) {
    if (type == 'ingredient') {
        $("#is_update").val('Add');
        $("#base_purchase_volume").val('');
        $("#base_purchase_price").val('');
        //$("#production_volume").val('');
        $("#base_cost_per").val('');
        $("#production_volume_cost").val('');
        $("#base_ingredients").val('');
        $("#inc_ingredients").val('');
        $("#formula_pecentage").val('');
        $("#amount_used").val('');
        $("#supplier_ingredients").val('');
        $('#cosmetics-progress-bar').find('.progress-bar').text();
        $('#cosmetics-progress-bar').find('.progress-bar').attr('aria-valuenow', '0').width('0%');
        $('#locaprodstep1-2 .form-group').removeClass('has-error');
    } else if (type == 'accessory') {
        $("#is_update_accessory").val('Add');
        $("#accessory_name").val('');
        $("#inc_accessory").val('');
        //$("#production_volume").val('');
        $("#supplier_accessory").val('');
        $("#purchase_qty").val('');
        $("#purchase_qty_price").val('');
        $("#item_cost").val('');
        $('#locaprodstep1-3 .form-group').removeClass('has-error');
    } else {
        // Do Nothing
    }
}
// Add New Row
$('a#add_row_cosmetics').click(function (event) {
    event.preventDefault();
    //Get Current Number Of rows added by raza 7 march 2020
    var current_rows = $("#table_cosmetics_ingredients > tbody").children().length;
    //row counter starts from 0 so -1 from current rows added by raza 7 march 2020
    counter = current_rows - 1;
    counter++;
    var i = counter;
    var newRowAdd = '<tr id="row_id_' + i + '"><input name="id_' + i + '" id="id_' + i + '" type="hidden"><td id="td_ingredients_phase_' + i + '"><div class="form-group is-empty no-margin"><input name="ingredients_phase_' + i + '" class="form-control no-margin" id="ingredients_phase_' + i + '" type="text"></div></td><td id="td_category_'
        + i + '"><div class="form-group is-empty no-margin"><select class="ingredient-category form-control no-margin" id="category_' + i + '" name="category_' + i + '" style="width:100%;"><option value="1" selected>Base Ingredients</option><option value="2">Added Ingredients</option><option value="3">Powders</option><option value="4">Dried Herbs</option></select></div></td><td id="td_base_ingredients_' + i + '"><div class="form-group is-empty no-margin"><input name="base_ingredients_' + i + '" class="form-control no-margin" id="base_ingredients_' + i + '" type="text"></div></td><td id="td_inc_ingredients_' + i + '"><div class="form-group is-empty no-margin"><input name="inc_ingredients_' + i + '" class="form-control no-margin" id="inc_ingredients_' + i + '" type="text"></div></td><td id="td_supplier_name_' + i + '"><div class="form-group is-empty no-margin"><input name="supplier_name_' + i + '" class="form-control no-margin" id="supplier_name_' + i + '" type="text"></div></td><td id="td_formula_percentage_' + i + '"><div class="form-group is-empty no-margin"><input name="formula_percentage_' + i + '" class="form-control no-margin" id="formula_percentage_' + i + '" type="text" onkeyup="calculateFormulaPercent(' + i + ')"></div></td><td id="td_amount_used_' + i + '"><div class="form-group is-empty no-margin"><input name="amount_used_' + i + '" class="form-control no-margin" id="amount_used_' + i + '" type="text" readonly></div></td><td id="td_purchase_volume_' + i + '"><div class="form-group is-empty no-margin"><input name="purchase_volume_' + i + '" class="form-control no-margin" id="purchase_volume_' + i + '" type="text" onkeyup="calculatePurchaseVolume(' + i + ')"></div></td><td id="td_purchase_price_' + i + '"><div class="form-group is-empty no-margin"><input name="purchase_price_' + i + '" class="form-control no-margin" id="purchase_price_' + i + '" type="text" onkeyup="calculatePurchasePrice(' + i + ')"></div></td><td id="td_cost_per_' + i + '"><div class="form-group is-empty no-margin"><input name="cost_per_' + i + '" class="form-control no-margin" id="cost_per_' + i + '" type="text" readonly></div></td><td id="td_volume_cost_' + i + '"><div class="form-group is-empty no-margin"><input name="volume_cost_' + i + '" class="form-control no-margin" id="volume_cost_' + i + '" type="text" readonly></div></td></tr>';
    load_category_items('ingredient', counter);
    $('table.table_cosmetics_ingredients').append(newRowAdd);
});
// Add New Row Accessory
$('a#add_row_accessory').click(function (event) {
    event.preventDefault();
    //Get Current Number Of rows added by raza 7 march 2020
    var current_rows = $("#table_cosmetics_accessory > tbody").children().length;
    //row counter starts from 0 so -1 from current rows added by raza 7 march 2020
    counter = current_rows - 1;
    counter++;
    var i = counter;
    var newRowAddAccessory = '<tr id="row_accessory_id_' + i + '"><input name="accessory_id_' + i + '" id="accessory_id_' + i + '" type="hidden" value=""><td id="td_accessory_category_' + i + '"><div class="form-group is-empty no-margin"><select class="ingredient-category form-control no-margin" id="accessory_category_' + i + '" name="accessory_category_' + i + '" style="width:100%;"><option value="5" selected>Packaging/Containers</option><option value="6">Branding</option></select></div></td><td id="td_accessory_name_' + i + '"><div class="form-group is-empty no-margin"><input name="accessory_name_' + i + '" class="form-control no-margin" id="accessory_name_' + i + '" type="text"></div></td><td id="td_supplier_name_accessory_' + i + '"><div class="form-group is-empty no-margin"><input name="supplier_name_accessory_' + i + '" class="form-control no-margin" id="supplier_name_accessory_' + i + '" type="text"></div></td><td id="td_purchase_qty_' + i + '"><div class="form-group is-empty no-margin"><input name="purchase_qty_' + i + '" class="form-control no-margin" id="purchase_qty_' + i + '" type="text" onkeyup="calculatePurchaseQty(' + i + ')"></div></td><td id="td_purchase_qty_price_' + i + '"><div class="form-group is-empty no-margin"><input name="purchase_qty_price_' + i + '" class="form-control no-margin" id="purchase_qty_price_' + i + '" type="text" onkeyup="calculatePurchaseQtyPrice(' + i + ')"></div></td><td id="td_item_cost_' + i + '"><div class="form-group is-empty no-margin"><input name="item_cost_' + i + '" class="form-control no-margin" id="item_cost_' + i + '" type="text" readonly></div></td></tr>';
    load_category_items('accessory', counter);
    $('table.table_cosmetics_accessory').append(newRowAddAccessory);
});
$("#add_base_ingredient").click(function () {
    $(".add_ingredient_form").slideToggle("slow", function () {
        // Animation complete.
    });
});

$(document).on('click', '#save_comsetting', function (e) {
    $("#company_setting_form").submit();
});

// Total Monthly Sale Projection
function total_ingredients_accessory(type) {
    if (type == 'ing') {
        var total_formula = 0;
        var total_amount = 0;
        var total_purchase_volume_price = 0;
        var total_cost_per = 0;
        var total_cost_product = 0;
        var counterTblRow = 0;
        var current_rows_table = $("#table_cosmetics_ingredients > tbody").children().length;
        //row counter starts from 0 so -1 from current rows added by raza 7 march 2020
        counterTblRow = current_rows_table - 1;
        $('#table_cosmetics_ingredients tr').each(function () {
            var id_name;
            $('td input', this).each(function (index, val) {
                id_name = val.id;
                for (var i = 0; i <= counterTblRow; i++) {
                    if (id_name == 'formula_percentage_' + i + '') {
                        if (!($(val).val() == '')) {
                            total_formula += parseInt($(val).val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                        } else {
                            total_formula = total_formula;
                        }
                    }

                    if (id_name == 'amount_used_' + i + '') {
                        if (!($(val).val() == '')) {
                            total_amount += parseFloat($(val).val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                        } else {
                            total_amount = total_amount;
                        }
                    }

                    if (id_name == 'purchase_price_' + i + '') {
                        if (!($(val).val() == '')) {
                            total_purchase_volume_price += parseInt($(val).val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                        } else {
                            total_purchase_volume_price = total_purchase_volume_price;
                        }
                    }

                    if (id_name == 'cost_per_' + i + '') {
                        if (!($(val).val() == '')) {
                            total_cost_per += parseFloat($(val).val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                        } else {
                            total_cost_per = total_cost_per;
                        }
                    }

                    if (id_name == 'volume_cost_' + i + '') {
                        if (!($(val).val() == '')) {
                            total_cost_product += parseFloat($(val).val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                        } else {
                            total_cost_product = total_cost_product;
                        }
                    }
                }
            });
        });
        $('.FormulaTotal').text(total_formula + '%');
        $('.AmountTotal').text(total_amount);
        $('.PurchaseVolumePriceTotal').text(cur + number_format(total_purchase_volume_price, 2, '.', ','));
        $('.CostPerTotal').text(cur + number_format(total_cost_per, 2, '.', ','));
        $('.CostProductTotal').text(cur + number_format(total_cost_product, 2, '.', ','));
    } else if (type == 'acc') {
        var total_purchase_qty_price = 0;
        var total_item_cost = 0;

        var current_rows_table = $("#table_cosmetics_accessory > tbody").children().length;
        //row counter starts from 0 so -1 from current rows added by raza 7 march 2020
        counterTblRow = current_rows_table - 1;

        $('#table_cosmetics_accessory tr').each(function () {
            var id_name;
            $('td input', this).each(function (index, val) {
                id_name = val.id;
                for (var i = 0; i <= counterTblRow; i++) {
                    if (id_name == 'purchase_qty_price_' + i + '') {
                        if (!($(val).val() == '')) {
                            total_purchase_qty_price += parseFloat($(val).val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                        } else {
                            total_purchase_qty_price = total_purchase_qty_price;
                        }
                    }

                    if (id_name == 'item_cost_' + i + '') {
                        if (!($(val).val() == '')) {
                            total_item_cost += parseFloat($(val).val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                        } else {
                            total_item_cost = total_item_cost;
                        }
                    }
                }
            });
        });

        $('.PurchaseQtyPriceTotal').text(cur + number_format(total_purchase_qty_price, 2, '.', ','));
        $('.ItemCostTotal').text(cur + number_format(total_item_cost, 2, '.', ','));
    } else {
        // Do Nothing
    }
}

// $(document).on('change', '#ingredient-category', function (e) {
//     var val = this.value;
//     switch (val) {
//         case "1":
//             $("#cp1").text('Base Ingredient Volume');
//             $("#cp2").text('Base ingredients purchase cost assumptions');
//             $("#cp3").text('Base ingredients');
//             $("#cp4").text('Base ingredients');
//             //$("#cp6").text('Ingredients cost per product');
//             $("#cp10").text('Purchase Volume');
//             $("#cp11").text('Purchase Volume Price');
//             $("#cp12").text('Cost Per mL');
//             $("#cp13").text('Ingredient cost per product');
//             $("#added_ingredients_extra").addClass('hide');
//             break;
//         case "2":
//             $("#cp1").text('Added ingredients Volume');
//             $("#cp2").text('Added ingredients purchase cost assumptions');
//             $("#cp3").text('Added ingredients');
//             $("#cp4").text('Added ingredients');
//             // $("#cp6").text('Added ingredients cost per product');
//             $("#cp10").text('Purchase Volume');
//             $("#cp11").text('Purchase Volume Price');
//             $("#cp12").text('Cost Per mL');
//             $("#cp13").text('Added ingredients cost per product');
//             $("#added_ingredients_extra").removeClass('hide');
//             break;
//         case "3":
//             $("#cp1").text('Powder Volume');
//             $("#cp2").text('Powders purchase cost assumptions');
//             $("#cp3").text('Powders');
//             $("#cp4").text('Powders');
//             //$("#cp6").text('Powders cost per product');
//             $("#cp10").text('Purchase Volume');
//             $("#cp11").text('Purchase Volume Price');
//             $("#cp12").text('Cost Per mL');
//             $("#cp13").text('Powder cost per product');
//             $("#added_ingredients_extra").addClass('hide');
//             break;
//         case "4":
//             $("#cp1").text('Dried Herbs Volume');
//             $("#cp2").text('Dried Herbs purchase cost assumptions');
//             $("#cp3").text('Dried Herbs');
//             $("#cp4").text('Dried Herbs');
//             //$("#cp6").text('Dried Herbs cost per product');
//             $("#cp10").text('Purchase Volume');
//             $("#cp11").text('Purchase Volume Price');
//             $("#cp12").text('Cost Per mL');
//             $("#cp13").text('Dried Herbs cost per product');
//             $("#added_ingredients_extra").addClass('hide');
//             break;
//         default:
//             break;
//     }
//     resetcategoryform('Ingredient');
//     load_category_items(val);
// });

// // Accessory 
// $(document).on('change', '#accessory_category', function (e) {
//     var val = this.value;
//     switch (val) {
//         case "5":
//             $("#ac2").text('Packaging/container purchase cost assumptions');
//             $("#ac3").text('Packaging/containe');
//             $("#ac4").text('INC Packaging/containe');
//             $("#ac10").text('Purchase Qty');
//             $("#ac11").text('Purchase Qty Price');
//             $("#ac12").text('Item Cost');
//             $("#ac13").text('Packaging/container cost per product');
//             break;
//         case "6":
//             $("#ac2").text('Branding purchase cost assumptions');
//             $("#ac3").text('Branding');
//             $("#ac4").text('INC Branding');
//             $("#ac10").text('Purchase Qty');
//             $("#ac11").text('Purchase Qty Price');
//             $("#ac12").text('Item Cost');
//             $("#ac13").text('Branding cost per product');
//             break;
//         default:
//             break;
//     }
//     resetcategoryform('accessory');
//     load_category_items(val);
// });
$(document).on('change', '#drops', function (e) {
    $("#cost_per_drop").val($("#base_purchase_price").val() / $("#drops").val());
});
$(document).on('keyup', '#markup_on_cost', function (e) {
    update_rrp();
});
$(document).on('keyup', '#monthlytable_qty', function (e) {
    update_summary_table();
});
$(document).on('change', '#rrp_cost', function (e) {
    products_cost = parseFloat($("#unit_cost").val());
    rrp_cost = MarkUpOnCost = parseFloat($("#rrp_cost").val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    TableCalculation();
});
function TableCalculation_cosmetic() {

    TableCalculation();

    setTimeout(function () {
        products_cost = parseFloat($("#unit_cost").val());
        rrp_cost = MarkUpOnCost = parseFloat($("#rrp_cost").val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
        tableCalculationPrice();
    }, 500);
}
function update_rrp() {

    var rrp_cost1 = parseFloat($('#total_unit').html().replace(/[^\d\.]/g, '')) + (parseFloat($('#total_unit').html().replace(/[^\d\.]/g, '')) * (parseFloat($('#markup_on_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) / 100));
    var total_sale_price_table = $('.total_sale_price').text().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    if (total_sale_price_table > 0) {
        $('#rrp_cost').val(cur + number_format(total_sale_price_table, 2, '.', ','));
    } else {
        $('#rrp_cost').val(cur + number_format(rrp_cost1, 2, '.', ','));
    }

    var gross_profit = rrp_cost1 - (parseFloat($('#total_unit').html().replace(/[^\d\.]/g, '')));
    $('#gross_profit').val(cur + number_format(gross_profit, 2, '.', ','));
    var monthly_revenue = $('#monthlytable_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '') * rrp_cost1;
    $('#monthly_revenue').val(cur + number_format(monthly_revenue, 2, '.', ','));
    var monthly_gross_profit = monthly_revenue - (parseFloat($('#total_prod').html().replace(/[^\d\.]/g, '')));
    $('#monthly_gross_profit').val(cur + number_format(monthly_gross_profit, 2, '.', ','));
    setTimeout(function () {
        products_cost = parseFloat($("#unit_cost").val());
        rrp_cost = MarkUpOnCost = parseFloat($("#rrp_cost").val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
        tableCalculationPrice();
    }, 500);

}
function update_summary_table() {

    var bi_prod = parseFloat($('#bi_unit').html().replace(/[^\d\.]/g, '')) * parseFloat($('#monthlytable_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')).toFixed(2);
    var p_prod = parseFloat($('#p_unit').html().replace(/[^\d\.]/g, '')) * parseFloat($('#monthlytable_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')).toFixed(2);
    var dh_prod = parseFloat($('#dh_unit').html().replace(/[^\d\.]/g, '')) * parseFloat($('#monthlytable_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')).toFixed(2);
    var pac_prod = parseFloat($('#pac_unit').html().replace(/[^\d\.]/g, '')) * parseFloat($('#monthlytable_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')).toFixed(2);
    var bnd_prod = parseFloat($('#bnd_unit').html().replace(/[^\d\.]/g, '')) * parseFloat($('#monthlytable_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')).toFixed(2);
    var aing_prod = parseFloat($('#aing_unit').html().replace(/[^\d\.]/g, '')) * parseFloat($('#monthlytable_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')).toFixed(2);
    var total_prod = bi_prod + p_prod + dh_prod + pac_prod + bnd_prod + aing_prod;
    if (total_prod == 0) {
        $('#total_prod').html(cur + total_prod);
    } else {
        $('#total_prod').html(cur + number_format(total_prod, 2, '.', ','));
    }
    if (bi_prod == 0) {
        $('#bi_prod').html(cur + bi_prod);
    } else {
        $('#bi_prod').html(cur + number_format(bi_prod, 2, '.', ','));
    }
    if (p_prod == 0) {
        $('#p_prod').html(cur + p_prod);
    } else {
        $('#p_prod').html(cur + number_format(p_prod, 2, '.', ','));
    }
    if (dh_prod == 0) {
        $('#dh_prod').html(cur + dh_prod);
    } else {
        $('#dh_prod').html(cur + number_format(dh_prod, 2, '.', ','));
    }
    if (pac_prod == 0) {
        $('#pac_prod').html(cur + pac_prod);
    } else {
        $('#pac_prod').html(cur + number_format(pac_prod, 2, '.', ','));
    }
    if (bnd_prod == 0) {
        $('#bnd_prod').html(cur + bnd_prod);
    } else {
        $('#bnd_prod').html(cur + number_format(bnd_prod, 2, '.', ','));
    }
    if (aing_prod == 0) {
        $('#aing_prod').html(cur + aing_prod);
    } else {
        $('#aing_prod').html(cur + number_format(aing_prod, 2, '.', ','));
    }
    update_rrp();

    drawPieGraphsCosmetics('cosmetics_canvas', '#cosmetics_canvas', bi_prod, aing_prod, p_prod, dh_prod, pac_prod, bnd_prod, cur);
}
// if ($("#ingredient-category").length) {
//     $("#ingredient-category").select2();
//     $(".js-example-data-ajax").select2({
//         ajax: {
//             url: siteUrl + "products/ajax-get_category_items",
//             dataType: 'json',
//             delay: 250,
//             data: function (params) {
//                 return {
//                     q: params.term, // search term
//                     category: $('#ingredient-category').select2().val(),
//                     page: params.page
//                 };
//             },
//             processResults: function (data, params) {
//                 // parse the results into the format expected by Select2
//                 // since we are using custom formatting functions we do not need to
//                 // alter the remote JSON data, except to indicate that infinite
//                 // scrolling can be used
//                 params.page = params.page || 1;

//                 return {
//                     results: data.items,
//                     pagination: {
//                         more: (params.page * 30) < data.total_count
//                     }
//                 };
//             },
//             cache: true
//         },
//         placeholder: 'Search for ...',
//         escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
//         minimumInputLength: 1,
//         templateResult: formatRepo,
//         templateSelection: formatRepoSelection
//     });

//     function formatRepo(repo) {
//         //console.log(repo)
//         if (repo.loading) {
//             return repo.text;
//         }

//         var markup = "<div class='select2-result-repository clearfix'>" +

//             "<div class='select2-result-repository__meta'>" +
//             "<div class='select2-result-repository__title'>Name -" + repo.name + "</div>";



//         markup += "<div class='select2-result-repository__statistics'>" +
//             "<div class='select2-result-repository__forks'> INC - " + repo.inc + "</div>" +
//             "<div class='select2-result-repository__watchers'>Supplier - " + repo.supplier + "</div>" +
//             "</div>" +
//             "</div></div>";

//         return markup;
//     }

//     function formatRepoSelection(repo) {
//         get_pro_det(repo.id, 'ingredient');
//         return repo.name || repo.text;
//     }
//     load_category_items($("#ingredient-category").val());
// }

// // Accessory
// if ($("#accessory_category").length) {
//     $("#accessory_category").select2();
//     $(".js-accessory-data-ajax").select2({
//         ajax: {
//             url: siteUrl + "products/ajax-get_category_items",
//             dataType: 'json',
//             delay: 250,
//             data: function (params) {
//                 return {
//                     q: params.term, // search term
//                     category: $('#accessory_category').select2().val(),
//                     page: params.page
//                 };
//             },
//             processResults: function (data, params) {
//                 // parse the results into the format expected by Select2
//                 // since we are using custom formatting functions we do not need to
//                 // alter the remote JSON data, except to indicate that infinite
//                 // scrolling can be used
//                 params.page = params.page || 1;

//                 return {
//                     results: data.items,
//                     pagination: {
//                         more: (params.page * 30) < data.total_count
//                     }
//                 };
//             },
//             cache: true
//         },
//         placeholder: 'Search for ...',
//         escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
//         minimumInputLength: 1,
//         templateResult: formatRepo,
//         templateSelection: formatRepoSelection
//     });

//     function formatRepo(repo) {
//         //console.log(repo)
//         if (repo.loading) {
//             return repo.text;
//         }

//         var markup = "<div class='select2-result-repository clearfix'>" +

//             "<div class='select2-result-repository__meta'>" +
//             "<div class='select2-result-repository__title'>Accessory -" + repo.name + "</div>";



//         markup += "<div class='select2-result-repository__statistics'>" +
//             "<div class='select2-result-repository__forks'>INC - " + repo.inc + "</div>" +
//             "<div class='select2-result-repository__watchers'>Supplier - " + repo.supplier + "</div>" +
//             "</div>" +
//             "</div></div>";

//         return markup;
//     }

//     function formatRepoSelection(repo) {
//         get_pro_det(repo.id, 'accessory');
//         return repo.name || repo.text;
//     }
//     load_category_items($("#accessory_category").val());
// }

// function get_pro_det(id, type) {
//     $('#type_edit').val(0);
//     $.ajax({
//         type: "POST",
//         url: siteUrl + "products/ajax-get_singleproduct",
//         dataType: "json",
//         data: { get_id: id },
//         success: function (response) {
//             if (response !== null) {
//                 if (type == 'ingredient') {
//                     //$("#ingredient-category").val(response.product_sub_category).trigger('change');
//                     $("#base_purchase_volume").val(number_format(response.purchase_volume, 2, '.', ','));
//                     $("#base_purchase_price").val(cur + number_format(response.purchase_price, 2, '.', ','));
//                     $("#production_volume").val(number_format(response.purchase_volume1, 2, '.', ','));
//                     $("#base_cost_per").val(number_format(response.cost_per, 2, '.', ','));
//                     $("#production_volume_cost").val(cur + number_format(response.purchase_volume_cos1, 2, '.', ','));
//                     $("#base_ingredients").val(response.product_var_name);
//                     $("#inc_ingredients").val(response.product_inci_name);
//                     $("#formula_pecentage").val(response.purchase_volume_percent + '%');
//                     $("#amount_used").val(number_format(response.amount_used, 2, '.', ','));
//                     $("#supplier_ingredients").val(response.supplier_name);
//                 } else if (type == 'accessory') {
//                     // $("#accessory_category").val(response.product_sub_category).trigger('change');
//                     $("#accessory_name").val(response.product_var_name);
//                     $("#inc_accessory").val(response.product_inci_name);
//                     $("#supplier_accessory").val(response.supplier_name);
//                     $("#purchase_qty").val(number_format(response.purchase_volume, 2, '.', ','));
//                     $("#purchase_qty_price").val(cur + number_format(response.purchase_price, 2, '.', ','));
//                     $("#item_cost").val(number_format(response.cost_per, 2, '.', ','));

//                 } else {
//                     // Do Nothing
//                 }
//                 checkemptycosmetics();
//             }
//         }
//     });

// }
$('#company_setting_form').submit(function (e) {
    var formData = new FormData($(this)[0]);
    $.ajax({
        type: "POST",
        url: siteUrl + "company_setup/ajax-setupCompany",
        dataType: "json",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            $('#myModal').modal('hide');
            $('#modalConfirmYes').modal('show');
            $("#lblMsgConfirmYes").html("<div class='checkmark'>"
                + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                + "</svg>"
                + "</div>"
                + "<p class='alert-box'>Your changes have been saved successfully</p>");

            setTimeout(function () { location.reload(); }, 3000);//location.reload();
        }
    });
    e.preventDefault();

});
if ($("#planningstep1").length)
    initiate_step_wizard(".planningstep1-panel", ".planningstep1-content");
if ($("#planningstep2").length)
    initiate_step_wizard(".planningstep2-panel", ".planningstep2-content");
if ($("#planningstep3").length)
    initiate_step_wizard(".planningstep3-panel", ".planningstep3-content");
if ($("#planningstep4").length)
    initiate_step_wizard(".planningstep4-panel", ".planningstep4-content");

if ($("#contractstep").length)
    initiate_step_wizard(".contract-panel", ".contract-content");

if ($("#peoplestep").length)
    initiate_step_wizard(".people-panel", ".people-content");


if ($("#planningstep5").length)
    initiate_step_wizard(".planningstep5-panel", ".planningstep5-content");
if ($(".setup-panel1").length)
    initiate_step_wizard(".setup-panel1", ".setup-content1");
// if ($("#localproductstep1").length)
//     initiate_step_wizard(".locaprod1-panel", ".locaprod1-content");
if ($("#importproductstep1").length)
    initiate_step_wizard(".importprod1-panel", ".importprod1-content");
if ($("#locaprodstep1-1").length)
    initiate_step_wizard(".prodprofile1-panel", ".prodprofile1-content");

function initiate_step_wizard(element1, element2) {
    var navListItems1 = $(element1 + ' div a'),
        allWells1 = $(element2),
        allNextBtn1 = $('.nextBtn');
    allWells1.hide();
    navListItems1.click(function (e) {
        var dcnt1 = parseInt($(this).text()) - 2;
        e.preventDefault();
        var $target1 = $($(this).attr('href')),
            $item1 = $(this);

        if (!$item1.attr('disabled')) {
            navListItems1.removeClass('btn-primary').addClass('btn-default');
            $item1.addClass('btn-primary');
            allWells1.hide();
            $target1.show();
            //$target1.find('input:eq(0)').focus();
        }
    });
    allNextBtn1.click(function () {
        var curStep1 = $(this).closest(element2),
            curStepBtn1 = curStep1.attr("id"),
            nextStepWizard = $(element1 + ' div a[href="#' + curStepBtn1 + '"]').parent().next().children("a"),
            curInputs = curStep1.find("input[type='text'],input[type='url']"),
            isValid = true;
        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });
    $(element1 + ' div a.btn-primary').trigger('click');
}

/*var navListItems1 = $('div.setup-panel1 div a'),
        allWells1 = $('.setup-content1'),
        allNextBtn1 = $('.nextBtn');
allWells1.hide();
navListItems1.click(function (e) {
    var dcnt1 = parseInt($(this).text()) - 2;
    e.preventDefault();
    var $target1 = $($(this).attr('href')),
            $item1 = $(this);
    
    if (!$item1.attr('disabled')) {
        navListItems1.removeClass('btn-primary').addClass('btn-default');
        $item1.addClass('btn-primary');
        allWells1.hide();
        $target1.show();
        $target1.find('input:eq(0)').focus();
    }
});
allNextBtn1.click(function () {
    var curStep1 = $(this).closest(".setup-content1"),
            curStepBtn1 = curStep1.attr("id"),
            nextStepWizard = $('div.setup-panel1 div a[href="#' + curStepBtn1 + '"]').parent().next().children("a"),
            curInputs = curStep1.find("input[type='text'],input[type='url']"),
            isValid = true;
    $(".form-group").removeClass("has-error");
    for (var i = 0; i < curInputs.length; i++) {
        if (!curInputs[i].validity.valid) {
            isValid = false;
            $(curInputs[i]).closest(".form-group").addClass("has-error");
        }
    }
 
    if (isValid)
        nextStepWizard.removeAttr('disabled').trigger('click');
});
$('div.setup-panel1 div a.btn-primary').trigger('click');*/

// Pie chart
var myChartCosmetics;

function drawPieGraphsCosmetics(canvas, elementId, base_ingredients, added_ingredient, powder, dried_hurbs, packaging_container, branding, cur) {
    $(elementId).html('');
    var ctx = document.getElementById(canvas);

    if (myChartCosmetics != undefined) {
        myChartCosmetics.destroy();
    }
    if (base_ingredients !== '' || added_ingredient !== '' || powder !== '' || dried_hurbs !== '' || packaging_container !== '' || branding !== '') {
        myChartCosmetics = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Base Ingredients', 'Added Ingredients', 'Powders', 'Dried Hurbs', 'Packaging/Containers', 'Branding'],
                datasets: [{
                    data: [base_ingredients, added_ingredient, powder, dried_hurbs, packaging_container, branding],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(123, 239, 178, 0.2)',
                        'rgba(241, 169, 160, 0.2)',
                    ],
                    hoverBackgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(123, 239, 178, 0.2)',
                        'rgba(241, 169, 160, 0.2)',
                    ]
                }]
            },
            options: {
                labels: {
                    padding: 20,
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var value = data.datasets[0].data[tooltipItem.index];
                            var label = data.labels[tooltipItem.index];
                            return label + ' ' + cur + number_format(value, 0, '.', ',');
                        },
                    },
                },
            }
        })
    }
}

function smmaryTableShow(val, type) {
    if (val == 1 && type == 'ingredient') {
        $('#productitemslist').removeClass('hide');
    } else if (val == 1 && type == 'accessory') {
        $('#accessoryitemslist').removeClass('hide');
    } else {
        $('#productitemslist').addClass('hide');
        $('#accessoryitemslist').addClass('hide');
    }

}
(function ($) {
    $.each(['show', 'hide'], function (i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function () {
            this.trigger(ev);
            return el.apply(this, arguments);
        };
    });
})(jQuery);

// Monthly Sale Projection Start

// Projected Sale Strategy Start

// Local Distribution
$(document).on('change', '#local_distribution', function (e) {
    $('.monthly_sale_local').text(number_format($(this).val(), 0, '.', ','));
    calculate_price('local_distribution', $(this).val(), $('.sale_price_local').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    calculateCOGS('local_distribution', $(this).val(), '');
    total_monthly_sale_projection();
});
// Whole Sale
$(document).on('change', '#wholesale', function (e) {
    $('.monthly_sale_whole').text(number_format($(this).val(), 0, '.', ','));
    calculate_price('wholesale', $(this).val(), $('.sale_price_whole').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    calculateCOGS('wholesale', $(this).val(), '');
    total_monthly_sale_projection();
});
// Online Sales
$(document).on('change', '#online_sales', function (e) {
    $('.monthly_sale_online').text(number_format($(this).val(), 0, '.', ','));
    calculate_price('online_sale', $(this).val(), $('.sale_price_online').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    calculateCOGS('online_sale', $(this).val(), '');
    total_monthly_sale_projection();
});
// Export
$(document).on('change', '#export', function (e) {
    $('.monthly_sale_export').text(number_format($(this).val(), 0, '.', ','));
    calculate_price('export', $(this).val(), $('.sale_price_export').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    calculateCOGS('export', $(this).val(), '');
    total_monthly_sale_projection();
});
// Projected Sale Strategy End

// Projected Price Structure Start
$(document).on('change', '#markup_local_distribution', function (e) {
    projected_Price_structure('markup_local_distribution', $(this).val(), '');
    total_monthly_sale_projection();
});
$(document).on('change', '#markup_wholesale', function (e) {
    projected_Price_structure('markup_wholesale', $(this).val(), '');
    total_monthly_sale_projection();
});
$(document).on('change', '#markup_online_sales', function (e) {
    projected_Price_structure('markup_online_sales', $(this).val(), '');
    total_monthly_sale_projection();
});
$(document).on('change', '#markup_export', function (e) {
    projected_Price_structure('markup_export', $(this).val(), '');
    total_monthly_sale_projection();
});
// Projected Price Structure End
function projected_Price_structure(id, val, unitcost) {
    var sale_local_distribution = 0;
    var sale_wholesale = 0;
    var sale_online_sales = 0;
    var sale_export = 0;
    var total_unit = 0;
    if (!(unitcost == '')) {
        total_unit = unitcost;
    } else {
        total_unit = $('#total_unit').text().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    }
    if (id == 'markup_local_distribution') {
        if (!(total_unit && val == '') && val > 0) {
            sale_local_distribution = (((parseFloat(total_unit) * val) / 100) + parseFloat(total_unit));
            $('#sale_local_distribution').val(cur + number_format(sale_local_distribution, 2, '.', ','));
            $('.sale_price_local').text(cur + number_format(sale_local_distribution, 2, '.', ','));
            calculate_price('local_distribution', $('.monthly_sale_local').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), sale_local_distribution);
        } else {
            $('#sale_local_distribution').val('0');
            $('.sale_price_local').text(cur + number_format(sale_local_distribution, 2, '.', ','));
            calculate_price('local_distribution', $('.monthly_sale_local').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), sale_local_distribution);
        }
    } else if (id == 'markup_wholesale') {
        if (!(total_unit && val == '') && val > 0) {
            sale_wholesale = (((parseFloat(total_unit) * val) / 100) + parseFloat(total_unit));
            $('#sale_wholesale').val(cur + number_format(sale_wholesale, 2, '.', ','));
            $('.sale_price_whole').text(cur + number_format(sale_wholesale, 2, '.', ','));
            calculate_price('wholesale', $('.monthly_sale_whole').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), sale_wholesale);
        } else {
            $('#sale_wholesale').val('0');
            $('.sale_price_whole').text(cur + number_format(sale_wholesale, 2, '.', ','));
            calculate_price('wholesale', $('.monthly_sale_whole').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), sale_wholesale);
        }
    } else if (id == 'markup_online_sales') {
        if (!(total_unit && val == '') && val > 0) {
            sale_online_sales = (((parseFloat(total_unit) * val) / 100) + parseFloat(total_unit));
            $('#sale_online_sales').val(cur + number_format(sale_online_sales, 2, '.', ','));
            $('.sale_price_online').text(cur + number_format(sale_online_sales, 2, '.', ','));
            calculate_price('online_sale', $('.monthly_sale_online').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), sale_online_sales);
        } else {
            $('#sale_online_sales').val('0');
            $('.sale_price_online').text(cur + number_format(sale_online_sales, 2, '.', ','));
            calculate_price('online_sale', $('.monthly_sale_online').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), sale_online_sales);
        }
    } else if (id == 'markup_export') {
        if (!(total_unit && val == '') && val > 0) {
            sale_export = (((parseFloat(total_unit) * val) / 100) + parseFloat(total_unit));
            $('#sale_export').val(cur + number_format(sale_export, 2, '.', ','));
            $('.sale_price_export').text(cur + number_format(sale_export, 2, '.', ','));
            calculate_price('export', $('.monthly_sale_export').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), sale_export);
        } else {
            $('#sale_export').val('0');
            $('.sale_price_export').text(cur + number_format(sale_export, 2, '.', ','));
            calculate_price('export', $('.monthly_sale_export').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), sale_export);
        }
    } else {
        // Do Nothing
    }
}
// Price Including Tax
function calculate_price(id, monthlyPrice, salePrice) {
    var price_local = 0;
    var price_whole = 0;
    var price_online = 0;
    var price_export = 0;

    if (monthlyPrice == '') {
        monthlyPrice = 0;
    }
    if (salePrice == '') {
        salePrice = 0;
    }

    if (id == 'local_distribution' && monthlyPrice !== '' && salePrice !== '') {
        price_local = monthlyPrice * salePrice;
        $('.price_local').text(cur + number_format(price_local, 2, '.', ','));
        calculate_grossProfit(id, price_local, $('.cogs_local').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
        calculate_margin(id, $('.gross_local').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), price_local);
    } else if (id == 'wholesale' && monthlyPrice !== '' && salePrice !== '') {
        price_whole = monthlyPrice * salePrice;
        $('.price_whole').text(cur + number_format(price_whole, 2, '.', ','));
        calculate_grossProfit(id, price_whole, $('.cogs_whole').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
        calculate_margin(id, $('.gross_whole').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), price_whole);
    } else if (id == 'online_sale' && monthlyPrice !== '' && salePrice !== '') {
        price_online = monthlyPrice * salePrice;
        $('.price_online').text(cur + number_format(price_online, 2, '.', ','));
        calculate_grossProfit(id, price_online, $('.cogs_online').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
        calculate_margin(id, $('.gross_online').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), price_online);
    } else if (id == 'export' && monthlyPrice !== '' && salePrice !== '') {
        price_export = monthlyPrice * salePrice;
        $('.price_export').text(cur + number_format(price_export, 2, '.', ','));
        calculate_grossProfit(id, price_export, $('.cogs_export').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
        calculate_margin(id, $('.gross_export').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), price_export);
    } else {
        // Do Nothing
    }
}
// COGS
function calculateCOGS(id, sale_strategy, unitcost) {
    var cogs_local = 0;
    var cogs_whole = 0;
    var cogs_online = 0;
    var cogs_export = 0;
    var total_unit = 0;
    if (unitcost !== '') {
        total_unit = unitcost;
    } else {
        total_unit = $('#total_unit').text().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    }
    if (sale_strategy == '') {
        sale_strategy = 0;
    }
    if (id == 'local_distribution' && sale_strategy !== '') {
        cogs_local = sale_strategy * total_unit;
        $('.cogs_local').text(cur + number_format(cogs_local, 2, '.', ','));
        calculate_grossProfit(id, $('.price_local').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), cogs_local);
    } else if (id == 'wholesale' && sale_strategy !== '') {
        cogs_whole = sale_strategy * total_unit;
        $('.cogs_whole').text(cur + number_format(cogs_whole, 2, '.', ','));
        calculate_grossProfit(id, $('.price_whole').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), cogs_whole);
    } else if (id == 'online_sale' && sale_strategy !== '') {
        cogs_online = sale_strategy * total_unit;
        $('.cogs_online').text(cur + number_format(cogs_online, 2, '.', ','));
        calculate_grossProfit(id, $('.price_online').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), cogs_online);
    } else if (id == 'export' && sale_strategy !== '') {
        cogs_export = sale_strategy * total_unit;
        $('.cogs_export').text(cur + number_format(cogs_export, 2, '.', ','));
        calculate_grossProfit(id, $('.price_export').text().replace(/\,|\$|\€|\₹|\£|\%/g, ''), cogs_export);
    } else {
        // Do Nothing
    }
}
// Gross Profit
function calculate_grossProfit(id, price, cogs) {
    var gross_local = 0;
    var gross_whole = 0;
    var gross_online = 0;
    var gross_export = 0;
    if (price == '') {
        price = 0;
    }
    if (cogs == '') {
        cogs = 0;
    }
    if (id == 'local_distribution' && price !== '' && cogs !== '') {
        gross_local = price - cogs;
        $('.gross_local').text(cur + number_format(gross_local, 2, '.', ','));
        calculate_margin(id, gross_local, price);
    } else if (id == 'wholesale' && price !== '' && cogs !== '') {
        gross_whole = price - cogs;
        $('.gross_whole').text(cur + number_format(gross_whole, 2, '.', ','));
        calculate_margin(id, gross_whole, price);
    } else if (id == 'online_sale' && price !== '' && cogs !== '') {
        gross_online = price - cogs;
        $('.gross_online').text(cur + number_format(gross_online, 2, '.', ','));
        calculate_margin(id, gross_online, price);
    } else if (id == 'export' && price !== '' && cogs !== '') {
        gross_export = price - cogs;
        $('.gross_export').text(cur + number_format(gross_export, 2, '.', ','));
        calculate_margin(id, gross_export, price);
    } else {
        // Do Nothing
    }
}
// Margin
function calculate_margin(id, gross, price) {
    var margin_local = 0;
    var margin_whole = 0;
    var margin_online = 0;
    var margin_export = 0;
    if (gross == 0) {
        gross = 0;
    }
    if (price == '') {
        price = 0;
    }
    if (id == 'local_distribution' && gross !== '' && price !== '') {
        if (gross > 0 && price > 0) {
            margin_local = (gross / price) * 100;
        } else {
            margin_local = margin_local;
        }
        $('.margin_local').text(number_format(margin_local, 2, '.', ',') + '%');
    } else if (id == 'wholesale' && gross !== '' && price !== '') {
        if (gross > 0 && price > 0) {
            margin_whole = (gross / price) * 100;
        } else {
            margin_whole = margin_whole;
        }
        $('.margin_whole').text(number_format(margin_whole, 2, '.', ',') + '%');
    } else if (id == 'online_sale' && gross !== '' && price !== '') {
        if (gross > 0 && price > 0) {
            margin_online = (gross / price) * 100;
        } else {
            margin_online = margin_online;
        }
        $('.margin_online').text(number_format(margin_online, 2, '.', ',') + '%');
    } else if (id == 'export' && gross !== '' && price !== '') {
        if (gross > 0 && price > 0) {
            margin_export = (gross / price) * 100;
        } else {
            margin_export = margin_export;
        }
        $('.margin_export').text(number_format(margin_export, 2, '.', ',') + '%');
    } else {
        // Do Nothing
    }
}
// Total Monthly Sale Projection
function total_monthly_sale_projection() {
    //var result = [];
    var total_monthly_sale = 0;
    var total_sale_price = 0;
    var total_price = 0;
    var total_cogs = 0;
    var total_gross_profit = 0;
    var total_margin = 0;
    var total_markup = 0;
    var cost_price = $('#total_unit').text().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    $('#distribution tr').each(function () {
        var class_name;
        $('td', this).each(function (index, val) {
            class_name = val.className;
            if (class_name == 'monthly_sale_local' || class_name == 'monthly_sale_whole' || class_name == 'monthly_sale_online' || class_name == 'monthly_sale_export') {
                if (!($(val).text() == '')) {
                    total_monthly_sale += parseInt($(val).text().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                } else {
                    total_monthly_sale = total_monthly_sale;
                }
            }

            if (class_name == 'price_local' || class_name == 'price_whole' || class_name == 'price_online' || class_name == 'price_export') {
                if (!($(val).text() == '')) {
                    total_price += parseInt($(val).text().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                } else {
                    total_price = total_price;
                }
            }

            if (class_name == 'cogs_local' || class_name == 'cogs_whole' || class_name == 'cogs_online' || class_name == 'cogs_export') {
                if (!($(val).text() == '')) {
                    total_cogs += parseInt($(val).text().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                } else {
                    total_cogs = total_cogs;
                }
            }

            if (class_name == 'gross_local' || class_name == 'gross_whole' || class_name == 'gross_online' || class_name == 'gross_export') {
                if (!($(val).text() == '')) {
                    total_gross_profit += parseInt($(val).text().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                } else {
                    total_gross_profit = total_gross_profit;
                }
            }
        });
    });
    if (total_price > 0 && total_monthly_sale > 0) {
        total_sale_price = total_price / total_monthly_sale;
    } else {
        total_sale_price = total_sale_price;
    }

    if (total_sale_price > 0 && cost_price > 0) {
        total_markup = ((total_sale_price - cost_price) / cost_price) * 100;
        console.log(total_markup)
        $('#markup_on_cost').val(parseInt(total_markup) + '%');
        update_rrp();
    } else {
        total_markup = total_markup;
        update_rrp();
    }

    if (total_gross_profit > 0 && total_price > 0) {
        total_margin = (total_gross_profit / total_price) * 100;
    } else {
        total_margin = total_margin;
    }
    $('.total_monthly_sale').text(number_format(total_monthly_sale, 0, '.', ','));
    if (total_monthly_sale) {
        $('#monthlytable_qty').val(number_format(total_monthly_sale, 0, '.', ','));
        $('#sales_projection').find('td input').each(function () {
            $(this).val($('#monthlytable_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
        });
        $('#purchases').find('td input').each(function () {
            $(this).val($('#monthlytable_qty').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
        });
        update_summary_table();
    }
    if (total_sale_price > 0) {
        $('#rrp_cost').val(cur + number_format(total_sale_price, 2, '.', ','));
    } else {
        update_summary_table();
    }
    $('.total_sale_price').text(cur + number_format(total_sale_price, 2, '.', ','));
    $('.total_price').text(cur + number_format(total_price, 2, '.', ','));
    $('.total_cogs').text(cur + number_format(total_cogs, 2, '.', ','));
    $('.total_gross_profit').text(cur + number_format(total_gross_profit, 2, '.', ','));
    $('.total_margin').text(number_format(total_margin, 2, '.', ',') + '%');
}

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
$('input[type=radio][name=ing_list_type]').on('change', function (e) {
    if ($(this).val() === 'Accessory') {

        $('#ingredients_list').hide();
        $('#input_fields').show();
        $('#accessory_list').show();
    } else {
        $('#accessory_list').hide();
        $('#input_fields').show();
        $('#ingredients_list').show();
    }
});
// Monthly Sale Projection End