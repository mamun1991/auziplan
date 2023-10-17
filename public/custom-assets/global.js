var base_url = window.baseURL;
var controller = get_controller();


var url = window.location.href;
var split = (url.split('/'));
var parameter = split[6];


var parameter_val = 0;

if (parameter > 0) {
    parameter_val = parameter;
}


$(".allownumeric").on('input', function (e) {

    $(this).val($(this).val().replace(/[^0-9]/g, ''));

    var val = $(this).val();
    var first_charac = val.charAt(0);

    if (first_charac === "1") {

        $(this).attr('maxlength', '11');

    }

    if (first_charac === "4" || first_charac === "9") {

        $(this).attr('maxlength', '12');
    }

});






$(document).on('input', '#profilephoto', function () {

    formdata = new FormData();
    if ($(this).prop('files').length > 0) {
        file = $(this).prop('files')[0];
        formdata.append("music", file);
    }

    jQuery.ajax({
        url: base_url + "uploadfile/upload",
        type: "POST",
        data: formdata,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            $('#uploadprofilephoto_name').val(result);
            var img_src = baseURL + "assets/upload/" + result;
            $('#displayprofileimage').attr('src', img_src);
            // if all is well
            // play the audio file
        }
    });
});


$(document).on('input', '#student_image', function () {

    formdata = new FormData();
    if ($(this).prop('files').length > 0) {
        file = $(this).prop('files')[0];
        formdata.append("music", file);
    }

    jQuery.ajax({
        url: baseURL + "uploadfile/upload",
        type: "POST",
        data: formdata,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            $('#student_image_name').val(result);
            var img_src = baseURL + "assets/upload/" + result;
            $('#student_image_display').attr('src', img_src);
            // if all is well
            // play the audio file
        }
    });
});


$(document).on('input', '#family_image', function () {

    formdata = new FormData();
    if ($(this).prop('files').length > 0) {
        file = $(this).prop('files')[0];
        formdata.append("music", file);
    }

    jQuery.ajax({
        url: baseURL + "uploadfile/upload",
        type: "POST",
        data: formdata,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
            $('#family_image_name').val(result);
            var img_src = base_url + "assets/upload/" + result;
            $('#family_image_display').attr('src', img_src);
            // if all is well
            // play the audio file
        }
    });
});


//$(document).on('input','.documentupload', function () {   

//$('.documentupload').change(function() {
$('body').delegate('.documentupload', 'change', function () {

    var originalfilename = $(this).prop('files')[0].name;

    var onlyname = originalfilename.split('.').shift();

    var onlyextension = originalfilename.split('.').pop();

    //alert(onlyextension);


    var type = ["jpg", "jpeg", "png"];

    if (!type.includes(onlyextension)) {

        alert('Only JPG, JPEG, PNG files are allowed');
        $('.documentupload').val("");
        return false;

    }



    //alert(onlyextension);

    var random = Math.floor(Math.random() * ("9999999999" - "1111111111" + 1) + "1111111111");

    var newfilename = onlyname + "_" + random + "." + onlyextension;

    //alert(newfilename);

    $(this).siblings('.documentname').val(newfilename);

    formdata = new FormData();
    if ($(this).prop('files').length > 0) {
        file = $(this).prop('files')[0];
        formdata.append("music", file, newfilename);
        //formdata.append("filename", newfilename);
    }

    jQuery.ajax({

        url: baseURL + "uploadfile/documentupload",
        type: "POST",
        data: formdata,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
        }

    });
});

function success_message() {
    return toastr.success('Success', 'Record Saved Successfully');
}


function success_message_toast($msg) {
    return toastr.success('Success', $msg);
}


function error_message($msg) {
    return toastr.error($msg);
}

function remove(base_url, controller, id) {

    swal({
        title: "Are you sure ?",
        text: "You will not be able to recover once deleted!",
        icon: "warning",
        buttons: {
            cancel: {
                text: "Cancel",
                value: null,
                visible: true,
                className: "",
                closeModal: true,
            },
            confirm: {
                text: "Yes, Delete",
                value: true,
                visible: true,
                className: "",
                closeModal: false
            }
        }
    })
        .then((isConfirm) => {

            if (isConfirm) {

                //proceed_delete(base_url+"/"+controller+"/delete", base_url+"/"+controller, rid);
                $.post(base_url + controller + "/delete", { rid: id }, function (result) {
                    //window.location.replace(base_url+"/"+controller);
                    load_data_table(base_url, controller, parameter_val);
                }, 'html');

                swal("Deleted!", "Record deleted successfully.", "success");

            } else {
                swal("Cancelled", "Operation cancelled by user", "error");
            }
        });

}


function remove_tabs_data(base_url, controller, id) {

    swal({
        title: "Are you sure ?",
        text: "You will not be able to recover once deleted!",
        icon: "warning",
        buttons: {
            cancel: {
                text: "Cancel",
                value: null,
                visible: true,
                className: "",
                closeModal: true,
            },
            confirm: {
                text: "Yes, Delete",
                value: true,
                visible: true,
                className: "",
                closeModal: false
            }
        }
    })
        .then((isConfirm) => {

            if (isConfirm) {

                //proceed_delete(base_url+"/"+controller+"/delete", base_url+"/"+controller, rid);
                $.post(baseURL + controller + "/delete", { rid: id }, function (result) {


                    if (controller == "a02regpackage") {


                        var url = baseURL + "a02registration/get_student_package";

                        var param = { eid: $('#eid').val() }

                        $.post(url, param, function (data) {

                            //console.log(data);

                            $("#packagetbody").empty();

                            for (i = 0; i < data.length; i++) {

                                html = "<tr>";

                                html += "<td>" + data[i].coursename + "</td>";
                                html += "<td>" + data[i].daysperweek + "</td>";
                                html += "<td>" + data[i].minsperday + "</td>";
                                html += "<td>" + data[i].discountvalue + "</td>";
                                html += "<td>" + data[i].amountpayable + "</td>";

                                html += "<td><div id='" + data[i].id + "' class='editpackage btn btn-success btn-sm' style='cursor:pointer'><i class='ft-edit-2'></i></div> <div class='packagedelete btn btn-danger btn-sm' id='" + data[i].id + "' style='cursor:pointer'><i class='ft-trash-2'></i></div></td>";

                                html += "</tr>";

                                $("#packagetable tbody").append(html);

                            }

                        }, 'json');



                    }


                    if (controller == "a02registration") {

                        var url = baseURL + controller + "/getstudents";

                        var param = {
                            fid: $('#fid').val(),
                            eid: $('#eid').val()
                        }

                        $.post(url, param, function (data) {

                            console.log(data);

                            $("#studenttbody").empty();

                            for (i = 0; i < data.length; i++) {

                                html = "<tr>";

                                html += "<td>" + data[i].firstname + "</td>";
                                html += "<td>" + data[i].surname + "</td>";
                                html += "<td>" + data[i].email + "</td>";
                                html += "<td>" + data[i].phone + "</td>";
                                html += "<td>" + data[i].dob + "</td>";
                                html += "<td><a href='" + base_url + controller + "/students/" + data[i].id + "'><div class='btn btn-success btn-sm' style='cursor:pointer'><i class='ft-edit-2'></i></div></a> <div class='studentdelete btn btn-danger btn-sm' id='" + data[i].id + "' style='cursor:pointer'><i class='ft-trash-2'></i></div></td>";

                                html += "</tr>";
                                $("#studenttable tbody").append(html);

                            }

                        }, 'json');

                    }


                    if (controller == "a03schedule") {


                        var url = baseURL + "a02registration/get_teacher_data";

                        var param = {
                            eid: $('#eid').val()
                        }

                        $.post(url, param, function (data) {

                            console.log(data);

                            $("#teachertbody").empty();

                            for (i = 0; i < data.length; i++) {

                                html = "<tr>";

                                html += "<td>" + data[i].coursename + "</td>";
                                html += "<td>" + data[i].employeename + "</td>";
                                html += "<td>" + data[i].classdays + "</td>";
                                html += "<td>" + data[i].starttime + "</td>";
                                html += "<td>" + data[i].duration + "</td>";
                                html += "<td><div id='" + data[i].id + "' class='editteacher btn btn-success btn-sm' style='cursor:pointer'><i class='ft-edit-2'></i></div> <div class='teacherdelete btn btn-danger btn-sm' id='" + data[i].id + "' style='cursor:pointer'><i class='ft-trash-2'></i></div></td>";

                                html += "</tr>";
                                $("#teachertable tbody").append(html);

                            }

                        }, 'json');

                    }
                    //window.location.replace(base_url+"/"+controller);


                }, 'html');

                swal("Deleted!", "Record deleted successfully.", "success");

            } else {
                swal("Cancelled", "Operation cancelled by user", "error");
            }
        });

}


function confirm(text1) {

    swal({
        title: "Are you sure ?",
        text: text1,
        icon: "warning",
        buttons: {
            cancel: {
                text: "Cancel",
                value: null,
                visible: true,
                className: "",
                closeModal: true,
            },
            confirm: {
                text: "Yes",
                value: true,
                visible: true,
                className: "",
                closeModal: false
            }
        }
    })
        .then((isConfirm) => {

            if (isConfirm) {

                return true;

            } else {
                swal("Cancelled", "Operation cancelled by user", "error");
            }
        });

}


$('#chkshowhidediv').change(function () {




});


function validate(val) {



    var parameter = '#' + val;



    var filled = "yes";



    $('' + parameter + ' input[type="text"]').each(function () {


        if ($(this).val() === "" && $(this).hasClass("validate")) {
            // alert('typetext');
            // alert($(this).attr('class'));

            filled = "no";

            $(this).css('border', '1px solid red');

            //return false;

        }

        //return true;

    });


    $('' + parameter + ' input[type="date"]').each(function () {


        if ($(this).val() === "" && $(this).hasClass("validate")) {
            // alert('typetext');
            // alert($(this).attr('class'));

            filled = "no";

            $(this).css('border', '1px solid red');

            //return false;

        }

        //return true;

    });


    $('' + parameter + ' input[type="email"]').each(function () {


        if ($(this).val() === "" && $(this).hasClass("validate")) {
            // alert('typetext');
            // alert($(this).attr('class'));

            filled = "no";

            $(this).css('border', '1px solid red');

            //return false;

        }

        //return true;

    });


    $('' + parameter + ' input[type="password"]').each(function () {


        if ($(this).val() === "" && $(this).hasClass("validate")) {
            // alert('typetext');
            // alert($(this).attr('class'));

            filled = "no";

            $(this).css('border', '1px solid red');

            //return false;

        }

        //return true;

    });



    $('' + parameter + ' select').each(function () {




        if ($(this).val() === "" && $(this).hasClass("validate")) {

            // alert('typeselect');
            // alert($(this).attr('class'));

            filled = "no";

            $(this).css('border', '1px solid red');

            //return false;

        }

        //return true;

    });


    // START SEARCHABLE DROPDOWN VALIDATIONS

    $('.select2validate').each(function () {

        //alert($(this).val());



        if ($(this).val() === "") {

            // alert('typeselect2');
            // alert($(this).attr('class'));


            //alert('empty');

            filled = "no";

            $(this).siblings("span").css('border', '1px solid red');
            //return false;

        }

        //return true;

    });


    $('.select2validate').change(function () {

        if ($(this).val() !== "") {

            $(this).siblings("span").css('border', '1px solid green');

        }

        if ($(this).val() === "") {

            $(this).siblings("span").css('border', '1px solid #adb5bd');

        }

    });

    // END SEARCHABLE DROPDOWN VALIDATIONS

    // START SEARCHABLE MULTIPLE DROPDOWN VALIDATIONS

    $('.select2validatemul').each(function () {

        var value = $(this).val();

        if (value.length === 0) {

            filled = "no";

            $(this).siblings("span").css('border', '1px solid red');

        }

    });

    $('.select2validatemul').change(function () {

        var value = $(this).val();

        if (value.length !== 0) {

            $(this).siblings("span").css('border', '1px solid green');

        }

        if (value.length === 0) {

            $(this).siblings("span").css('border', '1px solid #adb5bd');

        }

    });

    // END SEARCHABLE MULTIPLE DROPDOWN VALIDATIONS

    $('' + parameter + ' textarea').each(function () {
        if ($(this).val() === "" && $(this).hasClass("validate")) {

            filled = "no";

            $(this).css('border', '1px solid red');

            //return false;

        }

        //return true;

    });


    if ($('#chkshowhidediv').is(':checked')) {

        //alert('up');

        $('#showhidediv input[type="text"]').each(function () {


            if ($(this).val() === "" && $(this).hasClass("ifvalidate")) {

                // alert('ifusertext');

                // alert($(this).attr('class'));

                filled = "no";

                $(this).css('border', '1px solid red');

                //return false;

            }

            //return true;

        });


        $('#showhidediv select').each(function () {


            if ($(this).val() === "" && $(this).hasClass("ifvalidate")) {

                // alert('ifuserselect');
                // alert($(this).attr('class'));

                filled = "no";

                $(this).css('border', '1px solid red');

                //return false;

            }

            //return true;

        });


    }


    $('' + parameter + ' input[type="range"]').each(function () {

        if ($(this).val() === "0" && $(this).hasClass("validate")) {
            // alert('typetext');
            // alert($(this).attr('class'));

            filled = "no";

            $(this).css('border', '1px solid red');

            //return false;

        }

        //return true;

    });



    if (filled === "yes") {

        return true;

    } else {

        return false;

    }



}



function remove_validate() {

    $('input[type="text"]').keypress(function () {

        $(this).css('border', '1px solid green');

    });


    $('input[type="email"]').click(function () {

        $(this).css('border', '1px solid green');

    });


    $('input[type="password"]').click(function () {

        $(this).css('border', '1px solid green');

    });


    $('select').change(function () {

        $(this).css('border', '1px solid green');

    });



    $('textarea').keypress(function () {

        $(this).css('border', '1px solid green');

    });



    $('input[type="text"]').blur(function () {

        var val = $(this).val();

        if (val === "") {

            $(this).css('border', '1px solid #adb5bd');

        }

    });



    $('textarea').blur(function () {

        var val = $(this).val();

        if (val === "") {

            $(this).css('border', '1px solid #adb5bd');

        }

    });


    $('input[type="range"]').change(function () {

        $(this).css('border', '1px solid white');

    });

}





function reset_form(val) {

    var parameter = '#' + val;

    $('#displayimage').attr('src', "");


    $('' + parameter + ' input[type="file"]').each(function () {

        $(this).val('');

        $(this).css('border', '1px solid #adb5bd');

    });


    $('' + parameter + ' input[type="text"]').each(function () {

        $(this).val('');

        $(this).css('border', '1px solid #adb5bd');

    });


    $('' + parameter + ' input[type="email"]').each(function () {

        $(this).val('');

        $(this).css('border', '1px solid #adb5bd');

    });


    $('' + parameter + ' input[type="password"]').each(function () {

        $(this).val('');

        $(this).css('border', '1px solid #adb5bd');

    });



    $('textarea').each(function () {

        $(this).val('');

        $(this).css('border', '1px solid #adb5bd');

    });



    $('' + parameter + ' select').each(function () {

        $(this).val("");

    });


    $('#showhidediv input[type="text"]').each(function () {

        $(this).val("");

    });


    $('#showhidediv select').each(function () {

        $(this).val("");

    });


    $('' + parameter + ' input[type="range"]').each(function () {

        //$(this).attr({"min" : 0});
        $(this).val(0).change();

    });


}





function show_success_message(text) {

    $("#msg").html(text);

    $("#msg").css('color', 'green');

    $("#msg").show('slow');

    setTimeout(function () { $("#msg").hide('slow'); }, 3000);

}





function show_error_message(text) {

    $("#msg,.msg").html(text);

    $("#msg,.msg").css('color', 'red');

    $("#msg,.msg").show('slow');

    setTimeout(function () { $("#msg,.msg").hide('slow'); }, 3000);

}




$(document).on('click', '.switch-success', function (e) {

    var id = $(this).attr("id");

    //alert(id);

    var status;

    if ($(this).prop("checked") === true) {

        status = 'Y';

    } else {

        status = 'N';

    }

    var param = {
        status: status,
        id: id,
    }

    var url = baseURL + controller + "/changestatus";

    $.post(url, param, function (result) {
        if (result === "success") {
            show_success_message("Status Changed Successfully");
        }

    }, 'html');

});

function check_login() {

    var url = baseURL + "login/check-session";

    param = {}

    $.get(url, param, function (result) {

        if (result === "expired") {

            Swal.fire({
                title: 'You session expired. Login Again ?',
                //text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {

                    window.location.replace(baseURL + "login");

                }

            })
        }

    }, 'html');

}

$('#ayourq_ask').on("click", function () {

    if (validate('frmaskyourq')) {

        $(this).text('please wait.....')

        var url = baseURL + "user/ask-question-email";

        var param = {
            ayourq_name: $('#ayourq_name').val(),
            ayourq_email: $('#ayourq_email').val(),
            ayourq_question: $('#ayourq_question').val(),
        }

        $.post(url, param, function (result) {
            if (result === "emailsent") {

                $('#emailModal').toggle();
                $('.modal-backdrop').toggle();
                reset_form('frmaskyourq');

                Swal.fire({
                    icon: 'Success',
                    title: 'Success',
                    text: 'Your question has been sent to our support team successfully, please be patient so we can find the best soloution, we will get back to you shortly'
                })
            }
        });

    } else {
        error_message("Please fill all fields");
    }

});