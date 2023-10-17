var base_url = get_base_url();
var controller = get_controller();


check_login();

remove_validate();

$(".btnsaveNarrative").click(function () {

    check_login();

    var url = baseURL + "planning/ajax-save-planning";

    //console.log("content"+tinymce.activeEditor.getContent());
    var param = {
        t_mission : tinymce.activeEditor.getContent(),
    }

    $.post(url, param,function(result) {
        if(result === 'success'){
            Swal.fire({
                icon: 'Success',
                title: 'Success',
                text: 'Your Business Narrative has been saved successfully !',
              }).then((result) => {
                if (result.isConfirmed) {      
                    $('#narrative-toogle').toggle();
                }
        
              })
            //success_message("Record Saved Successfully");
        }

   },'html');

    //alert(mission_area);
});


$("#clearNarrative").click(function () {

    Swal.fire({
        title: 'Are you sure you want to clear all and start again?',
        //text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
            var url = baseURL +"planning/ajax-clear-planning";
            var param = "";     
            $.post(url, param,function(result) {
                tinymce.activeEditor.setContent("");
                console.log(result);        
           },'html');
        }

      })
});   


$(".narrative-toogle-click").click(function () {
    $('#narrative-toogle').toggle();
});

$('#btncancelNarrative').on("click", function () {
   
    Swal.fire({
        title: 'Are you sure you want to cancel ?',
        //text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {

            $('#narrative-toogle').toggle();
        }

      })
});


$('#btninfo_s2').on("click", function () {
    $('.tab-active-caret li a.active').removeClass('active');
    $("#crm-s2-tab").addClass("active");
});