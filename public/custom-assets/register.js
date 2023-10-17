// var baseURL  = get_baseURL ();
var controller = get_controller();


$(document).ready(function () {
    remove_validate();
    $(':input[type="button"]').prop('disabled', true);
    $('.msgemail').hide();
    $('#cover-register-checkbox').change(function(){
        if ($(this).is(':checked')) {
            $(':input[type="button"]').prop('disabled', false);
        }else{
            $(':input[type="button"]').prop('disabled', true);
        }    
    });
    $(".register").click(function () {
        process_register();
    });

    function process_register(){
        
        if (validate('frm'+controller)) {

           // START AUTH
           var url = baseURL + "/register";

           var param = {
                    f_name : $('#f_name').val(),
                    l_name : $('#l_name').val(),
                    email : $('#email').val(),
                    phone : $('#phone').val(),
                    username : $('#username').val(),
                    password : $('#password').val(),
                    cpassword : $('#cpassword').val(),
               }

           $.post(url, param,function(result) {
                if (result === "exists") {
                    error_message("User with email already exists");
                }

                if (result === "mismatch") {
                    error_message("Confirm Password not matched");
                }

                if (result === "mailsent") {

                    $('#useremail').html($('#email').val());
                    $('.msgemail').show();
                    $('.regform').hide();
                }


                if (result === "failed") {
                    $('#msg').html("There is some problem in creating your account,please try again later.");
                }

               },'html');
           // END AUTH

       }else{
           error_message("Please fill required fields");
       }
       
   }
});