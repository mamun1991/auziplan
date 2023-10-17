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

            required: true

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

        other_increase: {

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

        }


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

        other_increase: "Please enter a value in all fields, if you are not sure enter 0 to continue, you can change this at any time",

        franchise_royalty: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",

        porivision_baddebt: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time",

        depreciation_on_equipment: "Please enter a value in all fields, if you are not sure enter  0 to continue, you can change this at any time"

    }

});


// jQuery time

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


// $('#lstCompany').on('change',function(){
//   alert('gdfg');exit;
// });
function get_companydetails() {


    $.ajax({

        type: "POST",

        url: siteUrl + "company_setup/ajax-getcompany_details",

        dataType: "json",

        data: {},

        success: function (response) {

            setMymodalform(response);

            checkempty();

            //$('#myModal').css("z-index", "9999");

            $("#myModal").modal('show');

            // Added by Raza 16 april 2020

            var listtext = $("#myModal li.active a").text();

            var tabtext = $('.moving-tab').text();

            if (tabtext != listtext) {

                $('.moving-tab').text('');

                $('.moving-tab').text(listtext);

            }

        }

    });

}


function company_details_after_save() {


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

function checkempty() {

    $('input').each(function (index) {

        if ($(this).val() != '') {

            $(this).parent('div').removeClass('is-empty');

        }

    });

}


var remove_company_logo = '<button type="button" class="btn btn-outline-danger" title="Remove Company Logo" ' + 'id = "delete_company_logo" >' + '<i class="fa fa-remove"></i>' + '</button>';


function setMymodalform(response) { // populateCountries("country", "state");

    if (response.company_detail['start_date']) {

        var dbDate = response.company_detail['start_date'];

        var date2 = new Date(dbDate);

        $("#start_date").daterangepicker({ dateFormat: 'mm/dd/yyyy', singleDatePicker: true }).datepicker('setDate', date2);

    }


    if (response.company_detail['company_logo'] != "" && response.company_detail['company_logo'] != null) {

        compath = siteUrl + 'assets/uploads/company_logo/' + response.company_detail['company_logo'];

    } else {

        compath = siteUrl + 'assets/uploads/company_logo/avatar.png';

    }


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

        defaultPreviewContent: '<img id="imgcompany" class="rounded-circle" src="' + compath + '" alt="Company Logo"  name = "company_logo"  width="80px" height="80px"">',

        layoutTemplates: {
            main2: '{preview}' + remove_company_logo + ' {browse}'
        },

        allowedFileExtensions: ["jpg", "png", "gif"]

    });

    // Added By raza 21 july 2020

    var cur_unicode;

    var currency;

    if (response.company_detail['currency'] == "AUD" || response.company_detail['currency'] == "USD") {

        cur_unicode = '\u0024';

    } else if (response.company_detail['currency'] == "INR") {

        cur_unicode = '\u20B9';

    } else if (response.company_detail['currency'] == "EUR") {

        cur_unicode = '\u20ac';

    } else if (response.company_detail['currency'] == "UK") {

        cur_unicode = '\u00a3';

    } else {

        cur_unicode = '\u0024';

    } currency = cur_unicode;

    $("#company_profile_form").find('input[name="company_id"]').val(response.company_detail['id']);

    $("#company_settings_form").find('input[name="company_id"]').val(response.company_detail['id']);

    $("#company_contact_form").find('input[name="company_id"]').val(response.company_detail['id']);

    $("#company_structure_form").find('input[name="company_id"]').val(response.company_detail['id']);

    $("#company_terms_form").find('input[name="company_id"]').val(response.company_detail['id']);

    $("#company_assumptions_form").find('input[name="company_id"]').val(response.company_detail['id']);

    $("#company_balance_form").find('input[name="company_id"]').val(response.company_detail['id']);

    $("#company_name").val(response.company_detail['company_name']);

    $("#abn_no").val(response.company_detail['abn_no']);

    $("#register_no").val(response.company_detail['register_no']);


    $("#country").val(response.company_detail['country']).trigger('change');

    $("#cmpy_structure").val(response.company_detail['cmpy_structure']).trigger('change');

    $("#industry").val(response.company_detail['industry']).trigger('change');

    $("#currency").val(response.company_detail['currency']).trigger('change');

    $("#share_structure").val(response.company_detail['share_structure']).trigger('change');

    $("#financial_year").val(response.company_detail['financial_year']);

    $("#IssuedShared").val(number_format(response.company_detail['issued_shared'], 0, '.', ','));


    $("#PricePerShare").val(currency + (number_format(response.company_detail['price_per_share'], 0, '.', ',')));

    $("#TotalCapitalization").val(currency + (number_format(response.company_detail['issued_shared'] * response.company_detail['price_per_share'], 0, '.', ',')));


    $("#street_number").val(response.company_detail['street_no']);

    $("#route").val(response.company_detail['street_name']);

    $("#locality").val(response.company_detail['suburb']);

    $("#administrative_area_level_1").val(response.company_detail['state']).trigger('change');

    $("#postal_code").val(response.company_detail['zipcode']);
    var tel = response.company_detail['telephone'].split(" ");


    $('#telephone').val(tel[1]);

    $("#company_telephone option").each(function () {

        // console.log($(this).val());

        // console.log("hello");

        if ($(this).val() == tel[0]) { // console.log("select"+tel[0]);

            $(this).attr("selected", "selected");

        }

    })

    /*$("#telephone").val(response.company_detail['telephone']);*/


    $("#company_email").val(response.company_detail['company_email']);

    $("#website").val(response.company_detail['website']);

    if (response.general_assumptions != undefined) {

        $("#rsvbl_in_days").val(response.general_assumptions['rsvbl_in_days']).trigger('change');

        $("#pybl_in_days").val(response.general_assumptions['pybl_in_days']).trigger('change');

        $("#vat_paid_in_days").val(response.general_assumptions['vat_paid_in_days']).trigger('change');

        $("#cmpnytx_paid_in_days").val(response.general_assumptions['cmpnytx_paid_in_days']).trigger('change');

        $("#marketing_increase").val(response.general_assumptions['marketing_increase']);

        $("#public_reactions").val(response.general_assumptions['public_reactions']);

        $("#administration_cost").val(response.general_assumptions['administration_cost']);

        $("#other_increase").val(response.general_assumptions['other_increase']);

    }

    if (response.general_assumptions != undefined) {
        $("#pct_percent").text(response.general_assumptions['company_tax']);

        $("#company_tax").val(response.general_assumptions['company_tax']);

        $("#company_vat").val(response.general_assumptions['company_vat']);

        $("#cvc_percent").text(response.general_assumptions['company_vat_collected']);

        $("#company_vat_collected").val(response.general_assumptions['company_vat_collected']); // change by kuldip ladola

        $("#opening_credit_balance").val(currency + number_format(response.general_assumptions['opening_credit_balance'], 0, '.', ','));

        $("#opening_debit_balance").val(currency + number_format(response.general_assumptions['opening_debit_balance'], 0, '.', ','));

        $("#opening_bank_balance").val(currency + number_format(response.general_assumptions['opening_bank_balance'], 0, '.', ','));

        if (response.general_assumptions['servicecost_service'] == null) {
            $("#scs_percent").text(0);

            $("#servicecost_service").val(0);
        } else {
            $("#scs_percent").text(response.general_assumptions['servicecost_service']);

            $("#servicecost_service").val(response.general_assumptions['servicecost_service']);
        }



        $("#frf_percent").text(response.general_assumptions['franchise_royalty']);

        $("#franchise_royalty").val(response.general_assumptions['franchise_royalty']);

        $("#pbd_percent").text(response.general_assumptions['porivision_baddebt']);

        $("#porivision_baddebt").val(response.general_assumptions['porivision_baddebt']);

        $("#doe_percent").text(response.general_assumptions['depreciation_on_equipment']);

        $("#depreciation_on_equipment").val(response.general_assumptions['depreciation_on_equipment']);

    }

    if (response.directors.length > 0) {

        var i,
            j,
            path;

        for (i = 0; i < 4; i++) {

            if (response.directors[i]['image']) {

                path = siteUrl + 'assets/uploads/director_logo/' + response.directors[i]['image'];

            } else {

                path = siteUrl + 'assets/uploads/director_logo/avatar.png';

            } j = i + 1;

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

                defaultPreviewContent: '<img id="imgfile_' + i + '" class="rounded-circle" src="' + path + '" alt="Director Logo" width="80px" height="80px"">',

                layoutTemplates: {
                    main2: '{preview}  {remove} {browse} '
                },

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

                defaultPreviewContent: '<img id="imgfile_0" class="rounded-circle" src="' + siteUrl + '"assets/img/avatars/avatar.png" alt="Director Logo" width="80px" height="80px"">',

                layoutTemplates: {
                    main2: '{preview}  {remove} {browse} '
                },

                allowedFileExtensions: ["jpg", "png", "gif"]

            });

        }

    }


    // -------------------adding welome photo by Rizwan ----------------------------------

    var remove_user_logo = '<button type="button" class="btn btn-outline-danger" title="Remove User Logo" ' + 'id = "delete_user_logo" >' + '<i class="fa fa-remove"></i>' + '</button>';

    var user_logo_path = $("#user_logo_val").val();

    $("#user_logo_welcm").fileinput({

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

        defaultPreviewContent: '<img id="imguser" class="rounded-circle" src="' + user_logo_path + '" alt="Company Logo"  name = "company_logo"  width="80px" height="80px"">',

        layoutTemplates: {
            main2: '{preview}' + remove_user_logo + ' {browse}'
        },

        allowedFileExtensions: ["jpg", "png", "gif"]

    });

    // -------------------Ends adding welome photo by Rizwan ----------------------------------


}


// -------------------delete_user_logo welome photo by Rizwan ----------------------------------

$(document).on('click', '#delete_user_logo', function () {

    $('#modalConfirmYesNo').css("z-index", "9999");

    $('#modalConfirmYesNo').modal('show');


    $("#lblTitleConfirmYesNo").html("User Confirmation");

    $("#lblMsgConfirmYesNo").html("<div class='col-sm-12'>" + "<br/>Are you sure ? You want to remove your profile logo" + "</div>");

    $("#btnYesConfirmYesNo").off('click').click(function () {

        $.ajax({

            type: "POST",

            url: siteUrl + "company_setup/restoreDefault_user_logo/" + prev_photo,

            dataType: "json",

            cache: false,

            contentType: false,

            processData: false,

            success: function (response) { // $("#imgcompany").attr('src','');
                $('#modalConfirmYesNo').modal('hide');
                $('#myModal').css("z-index", "9999");
                $('#myModal').modal('show');
                $("a[href='#user']").trigger('click');

                $("#imguser").attr('src', './assets/uploads/users/avatar.png');

                $("#delete_user_logo").hide();

                // $("#delete_company_logo").hide();


            }

        });

    });

    $("#btnNoConfirmYesNo").on('click', function () {

        $('#modalConfirmYesNo').modal('hide');
        $('#myModal').css("z-index", "9999");
        $('#myModal').modal('show');
        $("a[href='#user']").trigger('click');

    });

    // if (confirm('Are you sure ? You want to remove your profile logo. ')) {

    //     var prev_photo = $("#prev_photo").val();

    //     $.ajax({

    //         type       : "POST",

    //         url        : siteUrl + "company_setup/restoreDefault_user_logo/" + prev_photo,

    //         dataType   : "json",

    //         cache      : false,

    //         contentType: false,

    //         processData: false,

    //         success    : function(response) {

    //             $("#imguser").attr('src', './assets/uploads/users/avatar.png');

    //             // $("#user_logo_welcm").val('');

    //             $("#delete_user_logo").hide();


    //         }

    //     });

    // }

})

// -------------------ends delete_user_logo welome photo by Rizwan ----------------------------------


$(document).on('click', '#delete_company_logo', function () {

    var companyID = $("#company_id").val();

    if (companyID == '') {

        alert("Could not delete image");

        return false;

    }

    $('#modalConfirmYesNo').css("z-index", "9999");

    $('#modalConfirmYesNo').modal('show');


    $("#lblTitleConfirmYesNo").html("User Confirmation");

    $("#lblMsgConfirmYesNo").html("<div class='col-sm-12'>" + "<br/>Are you sure ? You want to remove your company logo" + "</div>");

    $("#btnYesConfirmYesNo").off('click').click(function () {

        $.ajax({

            type: "POST",

            url: siteUrl + "company_setup/restoreDefault/" + companyID,

            dataType: "json",

            cache: false,

            contentType: false,

            processData: false,

            success: function (response) { // $("#imgcompany").attr('src','');
                $('#modalConfirmYesNo').modal('hide');
                $('#myModal').css("z-index", "9999");
                $('#myModal').modal('show');
                $("a[href='#profile']").trigger('click');

                $("#imgcompany").attr('src', './assets/uploads/users/avatar.png');

                $("#company_logo").val('');

                // $("#delete_company_logo").hide();


            }

        });

    });

    $("#btnNoConfirmYesNo").on('click', function () {

        $('#modalConfirmYesNo').modal('hide');
        $('#myModal').css("z-index", "9999");
        $('#myModal').modal('show');
        $("a[href='#profile']").trigger('click');

    });

    // if (confirm('Are you sure ? You want to remove your company logo. ')) {

    //     var companyID = $("#company_id").val();

    //     if (companyID == '') {

    //         alert("Could not delete image");

    //         return false;

    //     }

    //     $.ajax({

    //         type       : "POST",

    //         url        : siteUrl + "company_setup/restoreDefault/" + companyID,

    //         dataType   : "json",

    //         cache      : false,

    //         contentType: false,

    //         processData: false,

    //         success    : function(response) { // $("#imgcompany").attr('src','');

    //             $("#imgcompany").attr('src', './assets/uploads/users/avatar.png');

    //             $("#company_logo").val('');

    //             // $("#delete_company_logo").hide();


    //         }

    //     });

    // }

})


// $(document).on('click', '#save_comsetting', function (e) {

//     $("#company_setting_form").submit();

// });


// Save Company Tab Data

$('#company_settings_form').submit(function (e) {

    e.preventDefault();
    var companySettingsData = new FormData(this);

    var iscompanyLogo = '';

    iscompanyLogo = $("#imgcompany").attr("src");

    if (typeof (iscompanyLogo) != 'undefined') {

        var n = iscompanyLogo.indexOf("no-photo");

        if (n < 0) {

            var n = false;

        } else {

            var n = true;

        }

    } else {

        var n = false;

    }


    if (n == true) { // $('#company_logo').val() == '' ||


        $('#save_product').val('SAVE');

        $('#modalConfirmYesNo').css("z-index", "9999");

        $('#modalConfirmYesNo').modal('show');


        $("#lblTitleConfirmYesNo").html("User Confirmation");

        $("#lblMsgConfirmYesNo").html("<div class='col-sm-3'>" + "<img id='company_logo' class='rounded-circle' src='" + site_url + "assets/img/avatars/avatar.png' alt='Product Picture' style='width:75px;'>" + "</div>" + "<div class='col-sm-9'>" + "If you want to add company logo <br><strong>Click on Yes,<br/>Then select an image <i class='fa fa-file-image-o'></i>.</strong><br/>Do you want to add image now ??" + "</div>");


        //    $("#btnYesConfirmYesNo").on('click').click(function () {

        //        $('#modalConfirmYesNo').modal('hide');

        //    });

        $("#btnYesConfirmYesNo").off('click').click(function () {

            // $('.nav a[href="#add_menu0"]').tab('show');


            // $('#company_logo').trigger('click');


            $('#btnSaveTable').text('save');
            // change button text

            // $('#btnSaveTable').attr('disabled', false); //set button enable


            // $("#wizard-navigation animated rubberBand").tabs({active:2});

            $('#comSetuP1').click();

            $('#modalConfirmYesNo').modal('hide');


            // companySetupConfirmed(formData);

            // setTimeout(function(){ location.reload(); });

            // $("#myModal").modal('show');

        });

        //    $("#btnYesConfirmYesNo").on('click').click(function () {

        //

        //        });


        $("#btnNoConfirmYesNo").on('click', function () {

            // alert("Good news, your  changes are being saved");

            // console.log(formData);

            //        $("#btnNoConfirmYesNo").on('click').click(function () {

            companySetupConfirmed(companySettingsData);

            // $('#modal_user_dashboard').modal('show');

            // //setTimeout(function(){ location.reload(); });

        });


    } else {

        companySetupConfirmed(companySettingsData);


    } e.preventDefault();


});

function companySetupConfirmed(companySettingsData) {

    $.ajax({

        type: "POST",

        url: siteUrl + "company_setup/ajax-setupCompany",

        dataType: "json",

        data: companySettingsData,

        cache: false,

        contentType: false,

        processData: false,

        success: function (data) {
            if (data.status == true) {
                company_details_after_save();
                $('#next_step').click();
            }
        },
        error: function (data) {
            console.log("error");
            console.log(data);
        }

    });


}

// Save Company Profile Tab Data
$('#company_profile_form').on('submit', (function (e) {
    e.preventDefault();
    var companyProfileData = new FormData(this);

    $.ajax({
        type: 'POST',
        url: siteUrl + "company_setup/ajax-setupCompany",
        dataType: "json",
        data: companyProfileData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.status == true) {
                company_details_after_save();
                $('#next_step').click();
            }
        },
        error: function (data) {
            console.log("error");
            console.log(data);
        }
    });
}));


// Save Company Contact Tab Data
$('#company_contact_form').on('submit', (function (e) {
    e.preventDefault();
    var companyContactData = new FormData(this);

    $.ajax({
        type: 'POST',
        url: siteUrl + "company_setup/ajax-setupCompany",
        data: companyContactData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.status == true) {
                company_details_after_save();
                $('#next_step').click();
            }
        },
        error: function (data) {
            console.log("error");
            console.log(data);
        }
    });
}));


// Save Company Structure Tab Data
$('#company_structure_form').on('submit', (function (e) {
    e.preventDefault();
    var companyStructureData = new FormData(this);

    $.ajax({
        type: 'POST',
        url: siteUrl + "company_setup/ajax-setupCompany",
        data: companyStructureData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.status == true) {
                company_details_after_save();
                $('#next_step').click();
            }
        },
        error: function (data) {
            console.log("error");
            console.log(data);
        }
    });
}));

// Save Company Terms Tab Data
$('#company_terms_form').on('submit', (function (e) {
    e.preventDefault();
    var companyTermsData = new FormData(this);

    $.ajax({
        type: 'POST',
        url: siteUrl + "company_setup/ajax-setupCompany",
        data: companyTermsData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.status == true) {
                company_details_after_save();
                $('#next_step').click();
            }
        },
        error: function (data) {
            console.log("error");
            console.log(data);
        }
    });
}));


// Save Company Assumptions Tab Data
$('#company_assumptions_form').on('submit', (function (e) {
    e.preventDefault();
    var companyAssumptionsData = new FormData(this);

    $.ajax({
        type: 'POST',
        url: siteUrl + "company_setup/ajax-setupCompany",
        data: companyAssumptionsData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.status == true) {
                company_details_after_save();
                $('#next_step').click();
            }
        },
        error: function (data) {
            console.log("error");
            console.log(data);
        }
    });
}));


// Save Company Balance Tab Data
$('#company_balance_form').on('submit', (function (e) {
    e.preventDefault();
    var companyBalanceData = new FormData(this);

    $.ajax({
        type: 'POST',
        url: siteUrl + "company_setup/ajax-setupCompany",
        data: companyBalanceData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.status == true) {
                company_details_after_save();
                $('#myModal').modal('hide');

                $('#modalConfirmYes').modal('show');

                $("#lblMsgConfirmYes").html("<div class='checkmark'>" + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" + "</svg>" + "</div>" + "<p class='alert-box'>Your changes have been saved successfully</p>");


                setTimeout(function () {
                    location.reload();
                }, 3000); // location.reload();
            }
        },
        error: function (data) {
            console.log("error");
            console.log(data);
        }
    });
}));




// function companySetupConfirmed(formData) {

//     $.ajax({

//         type: "POST",

//         url: siteUrl + "company_setup/ajax-setupCompany",

//         dataType: "json",

//         data: formData,

//         cache: false,

//         contentType: false,

//         processData: false,

//         success: function (response) {

//             $('#myModal').modal('hide');

//             $('#modalConfirmYes').modal('show');

//             $("#lblMsgConfirmYes").html("<div class='checkmark'>" + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>" + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4" + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5" + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>" + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>" + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>" + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>" + "</svg>" + "</div>" + "<p class='alert-box'>Your changes have been saved successfully</p>");


//             setTimeout(function () {
//                 location.reload();
//             }, 3000); // location.reload();

//         }

//     });


// }


if ($("#planningstep1").length)

    initiate_step_wizard(".planningstep1-panel", ".planningstep1-content");



if ($("#planningstep2").length)

    initiate_step_wizard(".planningstep2-panel", ".planningstep2-content");



if ($("#planningstep3").length)

    initiate_step_wizard(".planningstep3-panel", ".planningstep3-content");



if ($("#planningstep4").length)

    initiate_step_wizard(".planningstep4-panel", ".planningstep4-content");



if ($("#planningstep5").length)

    initiate_step_wizard(".planningstep5-panel", ".planningstep5-content");



if ($(".setup-panel1").length)

    initiate_step_wizard(".setup-panel1", ".setup-content1");



if ($(".locaprod1-content").length)

    initiate_step_wizard(".locaprod1-panel", ".locaprod1-content");



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

            $target1.find('input:eq(0)').focus();

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


function set_company_modal_first_load() {

    var compath = siteUrl + 'assets/uploads/company_logo/avatar.png';

    var remove_company_logo = '<button type="button" class="btn btn-danger" title="Remove Company Logo" ' + 'id = "delete_company_logo" >' + '<i class="fa fa-remove"></i>' + '</button>';

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

        defaultPreviewContent: '<img id="imgcompany" class="rounded-circle" src="' + compath + '" alt="Company Logo"  name = "company_logo"  width="80px" height="80px"">',

        layoutTemplates: {
            main2: '{preview}' + remove_company_logo + ' {browse}'
        },

        allowedFileExtensions: ["jpg", "png", "gif"]

    });

    // -------------------adding welome photo  ----------------------------------

    var remove_user_logo = '<button type="button" class="btn btn-danger" title="Remove User Logo" ' + 'id = "delete_user_logo" >' + '<i class="fa fa-remove"></i>' + '</button>';

    var user_logo_path = $("#user_logo_val").val();

    $("#user_logo_welcm").fileinput({

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

        defaultPreviewContent: '<img id="imguser" class="rounded-circle" src="' + user_logo_path + '" alt="Company Logo"  name = "company_logo"  width="80px" height="80px">',

        layoutTemplates: {
            main2: '{preview}' + remove_user_logo + ' {browse}'
        },

        allowedFileExtensions: ["jpg", "png", "gif"]

    });

    // -------------------Ends adding welome photo ----------------------------------


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
