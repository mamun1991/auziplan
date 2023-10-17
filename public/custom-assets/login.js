var baseURL  = window.location.origin;
var controller = get_controller();


$(document).ready(function () {

    remove_validate();

    $('.msgemail').hide();
    //ajax('redirect','update')
    $(".resetpwd").click(function () {
        if (validate('frm' + controller)) {

            var url = baseURL + controller + "/resetpwd";
            var param = {
                username: $('#username').val(),
            }

            $.post(url, param, function (result) {
                if (result !== "success") {
                    error_message(result);
                }

                if (result === "invaliduser") {
                    error_message("Invalid Username");
                }

                if (result === "invalidemail") {
                    error_message("Email could not be sent");
                }

                if (result === "success") {
                    alert('Email Sent Successfully');
                    //window.location.replace(baseURL);
                }

            }, 'html');

        } else {
            show_error_message("Please fill all fields");
        }
    });

    $(".login").click(function () {
        process_login();
    });


    function process_login() {

        if (validate('frm' + controller)) {

            var param = {

                email: $('#email').val(),
                password: $('#password').val(),
            }

            $.post(baseURL + '/login', param, function (result) {
                result = JSON.parse(result)
                if (result.redirect) {
                    window.location = result.redirect
                }
                if (result.user === "invalid") {
                    error_message("Invalid Username or Password");
                }

                if (result.user === "notactive") {
                    error_message("Account not active");
                }

                if (result.user === "admin") {
                    window.location.replace(baseURL + 'dashboard');
                    //alert('Login Successfully');
                }

                if (result.user === "user") {
                    window.location.replace(baseURL + 'user/companysetup');
                    //alert('Login Successfully');
                }

                if (result === "plans") {
                    window.location.replace(baseURL + 'plans');
                    //alert('Login Successfully');
                }

            }, 'html');
            // END AUTH

        } else {
            error_message("Please fill required fields");
        }

    }


    $(".forgotpwd").click(function () {

        process_forgotpwd();

    });


    function process_forgotpwd() {

        if (validate('frm' + controller)) {

            // START AUTH
            var url = baseURL + "/" + controller + "/doForgotPwd";

            var param = {

                email: $('#email').val(),
            }

            $.post(url, param, function (result) {

                console.log(result);

                if (result === "invalid") {

                    error_message("Email not registered");

                }


                if (result === "mailsent") {

                    //alert('mail sent');

                    $('#useremail').html($('#email').val());
                    $('.msgemail').show();
                    $('.fgtpwdform').hide();
                    //$('#msg').delay(8000).fadeOut();
                    //$('#msg').html("Congratulations ! you have successfully created an account with us, please check your mail for instructions on how to activate your account, please be patient as it may take a few minutes to reach you.");

                }

            }, 'html');
            // END AUTH

        } else {
            error_message("Please fill required fields");
        }

    }



    $(".newpassword").click(function () {

        process_newpwd();

    });




    function process_newpwd() {

        if (validate('frm' + controller)) {

            // START AUTH
            var url = baseURL + "/" + controller + "/doNewpwd";

            //    console.log(controller);

            //    return;

            var param = {

                password: $('#newpwd').val(),
                cpassword: $('#cnewpwd').val(),
                verifycode: $('#verify_code').val(),
            }

            $.post(url, param, function (result) {

                console.log(result);

                if (result === "mismatch") {

                    error_message("Confirm Password not matched");

                }


                if (result === "changed") {

                    reset_form('frm' + controller);

                    (async () => {

                        const { value: accept } = await Swal.fire({
                            title: '',
                            icon: 'success',
                            html:
                                'Password updated successfully.',
                            confirmButtonText:
                                '<i class="fa fa-thumbs-up"></i> Continue to Login ',
                        })

                        // const { value: accept } = Swal.fire({
                        //     title: '<strong>HTML <u>example</u></strong>',
                        //     icon: 'info',
                        //     html:
                        //       'You can use <b>bold text</b>, ' +
                        //       '<a href="//sweetalert2.github.io">links</a> ' +
                        //       'and other HTML tags',
                        //     showCloseButton: true,
                        //     showCancelButton: true,
                        //     focusConfirm: false,
                        //     confirmButtonText:
                        //       '<i class="fa fa-thumbs-up"></i> Great!',
                        //     confirmButtonAriaLabel: 'Thumbs up, great!',
                        //     cancelButtonText:
                        //       '<i class="fa fa-thumbs-down"></i>',
                        //     cancelButtonAriaLabel: 'Thumbs down'
                        //   })

                        if (accept) {
                            window.location.replace(baseURL + '/login');
                        }

                    })()

                }


            }, 'html');
            // END AUTH

        } else {
            error_message("Please fill required fields");
        }

    }


    if (parameter === 'verified') {

        Swal.fire({
            icon: 'success',
            title: 'Account Activated',
            text: 'Your account is now active, please login to continue the payment process thank you',
        })

    }






});