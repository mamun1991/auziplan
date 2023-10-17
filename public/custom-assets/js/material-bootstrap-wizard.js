/*!

 =========================================================
 * Material Bootstrap Wizard - v1.0.2
 =========================================================
 
 * Product Page: https://www.creative-tim.com/product/material-bootstrap-wizard
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-bootstrap-wizard/blob/master/LICENSE.md)
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// Material Bootstrap Wizard Functions

var searchVisible = 0;
var transparent = true;
var mobile_device = false;

$(document).ready(function () {

    $.material.init();

    /*  Activate the tooltips      */
    $('[rel="tooltip"]').tooltip();

    // Code for the Validator

    // Compnay Setup form validations
    var company_setting_validate = $('.wizard-card form[name="company_settings_form"]').validate({

        rules: {
            company_name: {
                required: true,
                minlength: 3
            }

        },
        errorPlacement: function (error, element) {
            $(element).parent('div').addClass('has-error');
        }
    });
    var company_contact_validate = $('.wizard-card form[name="company_contact_form"]').validate({
        rules: {
            country: {
                required: true
            },
            street_no: {
                required: true
            },
            street_name: {
                required: true
            },
            suburb: {
                required: true
            },
            state: {
                required: true
            },
            zipcode: {
                required: true
            },
            // autocomplete_contact: {
            //     required: true
            // }
            // fax            : {
            //     required: true
            // },
            // company_email  : {
            //     //required: true
            // },
            // website        : {
            //     //required: true
            // },
            // director_name_0: {
            //     required: true
            // }
        },

        errorPlacement: function (error, element) {
            $(element).parent('div').addClass('has-error');
        }
    });

    var company_structure_validate = $('.wizard-card form[name="company_structure_form"]').validate({

        rules: {
            cmpy_structure: {
                required: true
            },
            currency: {
                required: true
            },
            financial_year: {
                required: true,
            },
            industry: {
                required: true,
            }

        },
        errorPlacement: function (error, element) {
            $(element).parent('div').addClass('has-error');
        }
    });

    var company_terms_validate = $('.wizard-card form[name="company_terms_form"]').validate({

        rules: {
            rsvbl_in_days: {
                required: true
            },
            pybl_in_days: {
                required: true
            },
            vat_paid_in_days: {
                required: true,
            },
            cmpnytx_paid_in_days: {
                required: true,
            }

        },
        errorPlacement: function (error, element) {
            $(element).parent('div').addClass('has-error');
        }
    });

    var company_assumptions_validate = $('.wizard-card form[name="company_assumptions_form"]').validate({

        rules: {
            company_tax: {
                required: true
            },
            porivision_baddebt: {
                required: true
            },
            company_vat_collected: {
                required: true,
            },
            servicecost_service: {
                required: true,
            }

        },
        errorPlacement: function (error, element) {
            $(element).parent('div').addClass('has-error');
        }
    });


    var $validator = $('.wizard-card form').validate({
        rules: {
            company_name: {
                required: true,
                minlength: 3
            },
            country: {
                required: true
            },
            street_no: {
                required: true
            },
            street_name: {
                required: true
            },
            suburb: {
                required: true
            },
            state: {
                required: true
            },
            zipcode: {
                required: true
            },
            telephone: {
                required: true
            },
            fax: {
                required: true
            },
            company_email: {
                //required: true
            },
            website: {
                //required: true
            },
            director_name_0: {
                required: true
            }
        },

        errorPlacement: function (error, element) {
            $(element).parent('div').addClass('has-error');
        }
    });


    // Local Product form validations

    var $validator2 = $("form[name='add_local_product_form']").validate({
        rules: {
            product_description: {
                required: true
            },
            unit_cost: {
                required: true,
                // min: Number.MIN_VALUE,
                // number: true
            },
            markup_on_cost: {
                required: true,
                // min: 1,
            },
            monthlytable_qty: {
                required: true,
                //min     : Number.MIN_VALUE,
                //number  : true
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
        }
    });


    // Local Product Cosmetics form validations


    var $validator3 = $("form[name='add_cosmetics_form']").validate({

        rules: {
            product_code: {
                required: true
            },
            product_description: {
                required: true
            },
            unit_cost: {
                required: true,
                min: Number.MIN_VALUE,
                number: true
            },
            markup_on_cost: {
                required: true,
                // min: 1
            },
            monthlytable_qty: {
                required: true,
                // min: Number.MIN_VALUE,
                // number: true
            }

        }
    });


    // Import Product form validations


    var $validator4 = $("form[name='importform']").validate({

        rules: {
            importedproduct_description: {
                required: true
            },
            imported_unit_cost: {
                required: true,
                number: true
            },
            imported_markup_on_cost: {
                required: true,
                number: true,
                min: 1
            },
            ImportQuantity: {
                required: true,
                number: true
            },
            importedexchange_range: {
                required: true,
                number: true
            },
            import_duty: {
                required: true
            },
            comp_fee: {
                required: true
            },
            cargo_auto: {
                required: true
            },
            custom_clearance_fee: {
                required: true
            },
            aqis_fee: {
                required: true
            },
            dec_processing_fee: {
                required: true
            },
            delivery_order: {
                required: true
            },
            lcl_transport_fee: {
                required: true
            },
            port_service_fee: {
                required: true
            },
            transport_fues_fee: {
                required: true
            },
            insurance_fee: {
                required: true
            },
            misc_fee: {
                required: true
            },
            other_fee_1: {
                required: true
            },
            other_fee_2: {
                required: true
            },
            other_fee_3: {
                required: true
            }

        }
    });


    // Local Services form validations

    var $validator5 = $("form[name='revenue_form']").validate({

        rules: {
            industry: {
                required: true
            },
            rate: {
                required: true

            },
            impser_desc: {
                required: true

            },
            impser_hrswork: {
                required: true,
                // number: true
            },
            impser_rateperhr: {
                required: true,
                // number: true
            },
            impser_callourfee: {
                required: true,
                // number: true
            }

        }
    });

    // Wizard Initialization

    $('#wizardProfile').bootstrapWizard({
        'tabClass': 'nav nav-pills',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',

        onNext: function (tab, navigation, index) {
            var $settings_valid = $('#wizardProfile form[name="company_settings_form"]').valid();
            if (!$settings_valid) {
                company_setting_validate.focusInvalid();
                return false;
            }
            var $contact_valid = $('#wizardProfile form[name="company_contact_form"]').valid();
            if (!$contact_valid) {
                company_contact_validate.focusInvalid();
                return false;
            }
            var $structure_valid = $('#wizardProfile form[name="company_structure_form"]').valid();
            if (!$structure_valid) {
                company_structure_validate.focusInvalid();
                return false;
            }

            var $terms_valid = $('#wizardProfile form[name="company_terms_form"]').valid();
            if (!$terms_valid) {
                company_terms_validate.focusInvalid();
                return false;
            }

            var $assumptions_valid = $('#wizardProfile form[name="company_assumptions_form"]').valid();
            if (!$assumptions_valid) {
                company_assumptions_validate.focusInvalid();
                return false;
            }
        },

        onInit: function (tab, navigation, index) { // check number of tabs and fill the entire row
            var $total = navigation.find('li').length;
            var $wizard = navigation.closest('#wizardProfile');

            $first_li = navigation.find('li:first-child a').html();
            $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
            $('#wizardProfile .wizard-navigation').append($moving_div);

            refreshAnimation($wizard, index);

            $('#wizardProfile .moving-tab').css('transition', 'transform 0s');
        },

        onTabClick: function (tab, navigation, index) {
            var $settings_valid = $('#wizardProfile form[name="company_settings_form"]').valid();
            if (!$settings_valid) {
                company_setting_validate.focusInvalid();
                return false;
            }
            var $contact_valid = $('#wizardProfile form[name="company_contact_form"]').valid();
            if (!$contact_valid) {
                company_contact_validate.focusInvalid();
                return false;
            }
            var $structure_valid = $('#wizardProfile form[name="company_structure_form"]').valid();
            if (!$structure_valid) {
                company_structure_validate.focusInvalid();
                return false;
            }

            var $terms_valid = $('#wizardProfile form[name="company_terms_form"]').valid();
            if (!$terms_valid) {
                company_terms_validate.focusInvalid();
                return false;
            }

            var $assumptions_valid = $('#wizardProfile form[name="company_assumptions_form"]').valid();
            if (!$assumptions_valid) {
                company_assumptions_validate.focusInvalid();
                return false;
            }
        },

        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;

            var $wizard = navigation.closest('#wizardProfile');

            // If it's the last tab then hide the last button and show the finish instead
            if ($current >= $total) {
                $($wizard).find('.btn-next').hide();
                $($wizard).find('.btn-finish').show();
            } else {
                $($wizard).find('.btn-next').show();
                $($wizard).find('.btn-finish').hide();
            }
            button_text = navigation.find('li:nth-child(' + $current + ') a').html();

            setTimeout(function () {
                $('#wizardProfile .moving-tab').text(button_text);
            }, 150);

            var checkbox = $('.footer-checkbox');

            if (!index == 0) {
                $(checkbox).css({ 'opacity': '0', 'visibility': 'hidden', 'position': 'absolute' });
            } else {
                $(checkbox).css({ 'opacity': '1', 'visibility': 'visible' });
            } refreshAnimation($wizard, index);
        }
    });

    // Wizard Initialization
    $('#contractsWizard').bootstrapWizard({
        'tabClass': 'nav nav-pills wprofile',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',

        onNext: function (tab, navigation, index) {
            var $valid = $('#wizardProfile form').valid();
            if (!$valid) {
                $validator.focusInvalid();
                return false;
            }
        },

        onInit: function (tab, navigation, index) { // check number of tabs and fill the entire row
            var $total = navigation.find('li').length;
            var $wizard = navigation.closest('#wizardProfile');

            $first_li = navigation.find('li:first-child a').html();
            $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
            $('#wizardProfile .wizard-navigation').append($moving_div);

            refreshAnimation($wizard, index);

            $('#wizardProfile .moving-tab').css('transition', 'transform 0s');
        },

        onTabClick: function (tab, navigation, index) {
            var $valid = $('#wizardProfile form').valid();

            if (!$valid) {
                return false;
            } else {
                return true;
            }
        },

        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;

            var $wizard = navigation.closest('#wizardProfile');

            // If it's the last tab then hide the last button and show the finish instead
            if ($current >= $total) {
                $($wizard).find('.btn-next').hide();
                $($wizard).find('.btn-finish').show();
            } else {
                $($wizard).find('.btn-next').show();
                $($wizard).find('.btn-finish').hide();
            }

            button_text = navigation.find('li:nth-child(' + $current + ') a').html();

            setTimeout(function () {
                $('#wizardProfile .moving-tab').text(button_text);
            }, 150);

            var checkbox = $('.footer-checkbox');

            if (!index == 0) {
                $(checkbox).css({ 'opacity': '0', 'visibility': 'hidden', 'position': 'absolute' });
            } else {
                $(checkbox).css({ 'opacity': '1', 'visibility': 'visible' });
            } refreshAnimation($wizard, index);
        }
    });

    $('.wizardProfile').bootstrapWizard({
        'tabClass': 'nav nav-pills wprofile',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',

        onNext: function (tab, navigation, index) {
            var $valid = $('.wizardProfile form').valid();
            if (!$valid) {
                return false;
            }

        },

        onInit: function (tab, navigation, index) { // check number of tabs and fill the entire row
            var $total = navigation.find('li').length;
            var $wizard = navigation.closest('.wizardProfile');

            $first_li = navigation.find('li:first-child a').html();
            $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
            $moving_div.css('transition', 'transform 0s');
            navigation.append($moving_div);

            console.log('wizard',$wizard)
            refreshAnimation($wizard, index);


        },

        onTabClick: function (tab, navigation, index) {
            var $valid = $('.wizardProfile form').valid();

            if (!$valid) {
                return false;
            } else {
                return true;
            }
        },

        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;

            var $wizard = navigation.closest('.wizardProfile');

            // If it's the last tab then hide the last button and show the finish instead
            if ($current >= $total) {
                $($wizard).find('.btn-next').hide();
                $($wizard).find('.btn-finish').show();
                $($wizard).find('.btnSave_director').show();
                $($wizard).find('#btnSave_investor').show();
                $($wizard).find('#btnSave_expenses').show();
                $($wizard).find('#btnSavePerson').show();


            } else {
                $($wizard).find('.btn-next').show();
                $($wizard).find('.btn-finish').hide();
                $($wizard).find('.btnSave_director').hide();
                $($wizard).find('#btnSave_investor').hide();
                $($wizard).find('#btnSave_expenses').hide();
                $($wizard).find('#btnSavePerson').hide();


            }


            button_text = navigation.find('li:nth-child(' + $current + ') a').html();

            setTimeout(function () {
                $('.wizardProfile .moving-tab').text(button_text);
            }, 150);

            var checkbox = $('.footer-checkbox');

            if (!index == 0) {
                $(checkbox).css({ 'opacity': '0', 'visibility': 'hidden', 'position': 'absolute' });
            } else {
                $(checkbox).css({ 'opacity': '1', 'visibility': 'visible' });
            } wizardRefreshAnimation($wizard, index);
        }
    });


    $('#wizardProfile2').bootstrapWizard({
        'tabClass': 'nav nav-pills wprofile2',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',

        onNext: function (tab, navigation, index) {
            if ($('#wizardProfile2 form[name="revenue_form"]').length > 0) {
                var $valid = $('#wizardProfile2 form').valid();
                if (!$valid) {
                    $validator5.focusInvalid();
                    return false;
                }
            } else if ($('#wizardProfile2 form[name="importform"]').length > 0) {
                var $valid = $('#wizardProfile2 form').valid();
                if (!$valid) {
                    $validator4.focusInvalid();
                    return false;
                }
            } else {
                var $valid = $('#wizardProfile2 form').valid();
                if (!$valid) {
                    $validator2.focusInvalid();
                    return false;
                }
            }
        },

        onInit: function (tab, navigation, index) { // check number of tabs and fill the entire row
            var $total = navigation.find('li').length;
            var $wizard = navigation.closest('#wizardProfile2');

            $first_li = navigation.find('li:first-child a').html();
            $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
            $('#wizardProfile2 .wizard-navigation').append($moving_div);

            refreshAnimation($wizard, index);

            $('#wizardProfile2 .moving-tab').css('transition', 'transform 0s');
        },

        onTabClick: function (tab, navigation, index) {
            var $valid = $('#wizardProfile2 form').valid();

            if (!$valid) {
                return false;
            } else {
                return true;
            }
        },

        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;

            var $wizard = navigation.closest('#wizardProfile2');

            // If it's the last tab then hide the last button and show the finish instead
            if ($current >= $total) {
                $($wizard).find('.btn-next').hide();
                $($wizard).find('.btn-finish').show();
                $($wizard).find('#btnSaveImport').show();
                $($wizard).find('#btnSave2').show();


            } else {
                $($wizard).find('.btn-next').show();
                $($wizard).find('.btn-finish').hide();
                $($wizard).find('#btnSaveImport').hide();
                $($wizard).find('#btnSave2').hide();
            }

            button_text = navigation.find('li:nth-child(' + $current + ') a').html();

            setTimeout(function () {
                $('#wizardProfile2 .moving-tab').text(button_text);
            }, 150);

            var checkbox = $('.footer-checkbox');

            if (!index == 0) {
                $(checkbox).css({ 'opacity': '0', 'visibility': 'hidden', 'position': 'absolute' });
            } else {
                $(checkbox).css({ 'opacity': '1', 'visibility': 'visible' });
            } refreshAnimation($wizard, index);
        }
    });

    if ($('#wizardDashboard').length)
        initiateWizard('#wizardDashboard');


    if ($('#wizardimportProduct').length)
        initiateWizard('#wizardimportProduct');


    if ($('#wizardlocalProduct').length)
        initiateWizard('#wizardlocalProduct');


    if ($('#wizardPlanning').length)
        initiateWizard('#wizardPlanning');


    if ($('#wizardStartup').length)
        initiateWizard('#wizardStartup');



    // Prepare the preview for profile picture
    $("#wizard-picture").change(function () {
        readURL(this);
    });

    $('[data-toggle="wizard-radio"]').click(function () {
        wizard = $(this).closest('.wizard-card');
        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
        $(this).addClass('active');
        $(wizard).find('[type="radio"]').removeAttr('checked');
        $(this).find('[type="radio"]').attr('checked', 'true');
    });

    $('[data-toggle="wizard-checkbox"]').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('[type="checkbox"]').removeAttr('checked');
        } else {
            $(this).addClass('active');
            $(this).find('[type="checkbox"]').attr('checked', 'true');
        }
    });

    $('.set-full-height').css('height', 'auto');

});


function initiateWizard(elem) { // Wizard Initialization
    $(elem).bootstrapWizard({
        'tabClass': 'nav nav-pills',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',

        onNext: function (tab, navigation, index) {
        },

        onInit: function (tab, navigation, index) { // check number of tabs and fill the entire row
            var $total = navigation.find('li').length;
            var $wizard = navigation.closest(elem);
            $first_li = navigation.find('li:first-child a').html();
            $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
            $(elem + ' .wizard-navigation').append($moving_div);

            refreshAnimation($wizard, index);

            $(elem + ' .moving-tab').css('transition', 'transform 0s');
        },

        onTabClick: function (tab, navigation, index) {
        },

        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;

            var $wizard = navigation.closest(elem);

            // If it's the last tab then hide the last button and show the finish instead
            if ($current >= $total) {
                $($wizard).find('.btn-next').hide();
                $($wizard).find('.btn-finish').show();
            } else {
                $($wizard).find('.btn-next').show();
                $($wizard).find('.btn-finish').hide();
            }

            button_text = navigation.find('li:nth-child(' + $current + ') a').html();

            setTimeout(function () {
                $(elem + ' .moving-tab').text(button_text);
            }, 150);

            var checkbox = $('.footer-checkbox');

            if (!index == 0) {
                $(checkbox).css({ 'opacity': '0', 'visibility': 'hidden', 'position': 'absolute' });
            } else {
                $(checkbox).css({ 'opacity': '1', 'visibility': 'visible' });
            } refreshAnimation($wizard, index);
        }
    });
}

// Function to show image before upload

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(window).resize(function () {
    $('.wizard-card').each(function () {
        $wizard = $(this);

        index = $wizard.bootstrapWizard('currentIndex');
        refreshAnimation($wizard, index);

        $('.moving-tab').css({ 'transition': 'transform 0s' });
    });
});
$(window).on('shown.bs.modal', function () {
    if ($("#wizardProfile").is(":visible")) {
        $wizard = $("#wizardProfile");
        $('#wizardProfile a[href="#welcome"]').tab('show');
        button_text = $('#wizardProfile').find('li a').html();
        $('#wizardProfile' + ' .moving-tab').text(button_text);
        index = $wizard.bootstrapWizard('currentIndex');
        refreshAnimation($wizard, index);

        $wizard.find('.moving-tab').css({ 'transition': 'transform 0s' });
    } else {
        $wizard = $("#wizardProfile2");
        $('#wizardProfile2 a[href="#Step1"]').tab('show');
        index = $wizard.bootstrapWizard('currentIndex');
        refreshAnimation($wizard, index);

        $wizard.find('.moving-tab').css({ 'transition': 'transform 0s' });
    }


})

$(window).on('hide.bs.modal', function () {
    $wizard = $("#wizardDashboard");
    index = $wizard.bootstrapWizard('currentIndex');
    button_text = $('#wizardDashboard').find('li a.active').html();
    $('#wizardDashboard' + ' .moving-tab').text(button_text);
    index = $wizard.bootstrapWizard('currentIndex');
    refreshAnimation($wizard, index);
})

function wizardRefreshAnimation($wizard, index) {
    var $total = $wizard.find('li a').length;
    total_steps = $total;
    $li_width = 100 / $total;
    move_distance = $wizard.width() / total_steps;
    index_temp = index;
    vertical_level = 0;

    mobile_device = $(document).width() < 600 && $total > 3;

    if (mobile_device) {
        move_distance = $wizard.width() / 2;
        index_temp = index % 2;
        $li_width = 50;
    }

    $wizard.find('li').css('width', $li_width + '%');

    step_width = move_distance;
    move_distance = move_distance * index_temp;

    $current = index + 1;

    if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
        move_distance -= 8;
    } else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
        move_distance += 8;
    }

    if (mobile_device) {
        vertical_level = parseInt(index / 2);
        vertical_level = vertical_level * 38;
    }

    $wizard.find('.moving-tab').css('width', $li_width + '%');
    $wizard.find('.moving-tab').css({
        'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
        'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

    });
}

function refreshAnimation($wizard, index) {
    if ($($wizard).attr("id") == "wizardimportProduct") {
        $total = 3;
        total_steps = 3
    } else { // $wizard.width(1200);
        var $total = $wizard.find('.nav li').length;
        total_steps = $total;
    }
    $li_width = 100 / $total;
    move_distance = $wizard.width() / total_steps;
    index_temp = index;
    vertical_level = 0;

    mobile_device = $(document).width() < 600 && $total > 3;

    if (mobile_device) {
        move_distance = $wizard.width() / 2;
        index_temp = index % 2;
        $li_width = 50;
    }

    $wizard.find('.nav li').css('width', $li_width + '%');

    step_width = move_distance;
    move_distance = move_distance * index_temp;

    $current = index + 1;

    if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
        move_distance -= 8;
    } else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
        move_distance += 8;
    }

    if (mobile_device) {
        vertical_level = parseInt(index / 2);
        vertical_level = vertical_level * 38;
    }

    $wizard.find('.moving-tab').css('width', $li_width + '%');
    $wizard.find('.moving-tab').css({
        'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
        'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

    });
}

materialDesign = {

    checkScrollForTransparentNavbar: debounce(function () {
        if ($(document).scrollTop() > 260) {
            if (transparent) {
                transparent = false;
                $('.navbar-color-on-scroll').removeClass('navbar-transparent');
            }
        } else {
            if (!transparent) {
                transparent = true;
                $('.navbar-color-on-scroll').addClass('navbar-transparent');
            }
        }
    }, 17)

}

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);

        }, wait);
        if (immediate && !timeout)
            func.apply(context, args);

    };
};
