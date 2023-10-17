
//if ($.cookie('modal_contracts') != 'loaded')
//{
  //  $.cookie('modal_contracts', 'loaded');

    // code to show modal
    //setTimeout(function(){
      //  $('#modal_contracts').modal('show');

   // }, 2000)
//}

// Memorandum Of Understanding (mou)

    
     $(function () {
        $('#Date').datepicker({
            format: 'yyyy-mm-dd',
            startDate: 'd',
            autoclose: true,
            todayHighlight: true
        });
    });

    $('#clearMou').on('click', function () {
        var deleteID = $("#mou").val();
        console.log(deleteID);
        if(deleteID ==''){
            alert("Please select atleast one record");
            return false;
        }
        $.ajax({
            url: site_url+"contracts_setup/AjaxDeleteMou/"+deleteID,
            type: "POST",
            dataType: 'json',
            encode: true,
            success: function (data) {
                //console.log(data);return false;
                if (data.status) {

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
                        + "<p class='alert-box'>Your contract has been deleted successfully !!!</p>");

                    $("#btnYesConfirmYesNo").hide();
                    $("#btnNoConfirmYesNo").html('Close');

                    $("#btnNoConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');
                        $("#btnYesConfirmYesNo").show();
                        $("#btnNoConfirmYesNo").html('No');

                        location.reload();
                    });
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {

                alert('Error adding / update data');

                console.log(xhr.status);
                console.log(xhr.responseText);
                console.log(thrownError);

            }

        })
    })


    $('#savingMou').on('click', function (event) {
        
        
        
        event.preventDefault();

        $('#mou_form').find('input[type=number], input[type=text], textarea').each(function (e) {

            if ($(this).val() == "") {

                $('#modalConfirmYes').modal('show');
                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert all required fields");
                $("#btnYesConfirmYes").off('click').click(function () {
                $('#modalConfirmYes').modal('hide');
                });

                e.preventDefault();
                return false;
            }
        });

        
        var form = $('#mou_form').serialize();
        $.ajax({
            url: site_url+"contracts_setup/AjaxSavingMou",
            type: "POST",
            data: form,
            dataType: 'json',
            encode: true,
            success: function (data) {
                
                if (data.status) {

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
                        + "<p class='alert-box'>Your contract has been saved  successfully !!!</p>");

                    $("#btnYesConfirmYesNo").hide();
                    $("#btnNoConfirmYesNo").html('Close');

                    $("#btnNoConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');
                        $("#btnYesConfirmYesNo").show();
                        $("#btnNoConfirmYesNo").html('No');

                        location.reload();
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
    });
//pdf
     $('body').on('click','#printmou',function (e){
        e.preventDefault();
        var mouid = $('#mou').val();
        console.log(mouid);
        var mouurl = $(this).attr("href");
        console.log(mouurl);
        if(mouid ==''){
            alert("Please select atleast one record");
            return false;
        }
        var win = window.open(mouurl+"/"+mouid, '_blank');
        win.focus();
           
        });
 
//pdf
   
     $('body').on('change','#mou',function (){

        var contactID = $(this).val();
        console.log(contactID);
        if(contactID ==''){
           $("#name_mou").val('');
            $("#position_mou").val('');
            $("#address_mou").val('');
            $("#telephone_mou").val('');
            $("#fax_mou").val('');
            $("#email_mou").val('');
            $("#partner_name_mou").val('');
            $("#partner_position_mou").val('');
            $("#partner_address_mou").val('');
            $("#partner_telephone_mou").val('');
            $("#partner_fax_mou").val(''); 
            $("#partner_email_mou").val('');
            $("#Date").val('');
            $("#activity_mou").val('');
            $("#background_mou").val('');
            
            

            var beditor = tinymce.get('background_mou'); 
            beditor.setContent('');
            
            checkempty();
        }
         $.ajax({
         type: "GET",
         dataType: "json",
         encode:true,
         url: site_url+"contracts_setup/AjaxLoadMou/"+contactID,
          success: function (data) {
            //console.log(data);
            $("#name_mou").val(data['row'][0]['name_mou']);
            $("#position_mou").val(data['row'][0]['position_mou']);
            $("#address_mou").val(data['row'][0]['address_mou']);
            
            $("#email_mou").val(data['row'][0]['email_mou']);
            $("#partner_name_mou").val(data['row'][0]['partner_name_mou']);
            $("#partner_position_mou").val(data['row'][0]['partner_position_mou']);
            $("#partner_address_mou").val(data['row'][0]['partner_address_mou']);
             
            $("#partner_email_mou").val(data['row'][0]['partner_email_mou']);
            $("#Date").val(data['row'][0]['Date']);
            $("#activity_mou").val(data['row'][0]['activity_mou']);
            $("#background_mou").val(data['row'][0]['background_mou']);
            var tel = data['row'][0]['telephone_mou'].split(" ");
            console.log(tel);
            $('#telephone_mou').val(tel[1]);
            $("#select_country_mou option").each(function(){
                console.log($(this).val());
                if($(this).val() == tel[0]){
                    console.log("select"+tel[0]);
                    $(this).attr("selected","selected");
                }
            })

            var partner_tel = data['row'][0]['partner_telephone_mou'].split(" ");
            console.log(partner_tel);
            $('#partner_telephone_mou').val(partner_tel[1]);
            $("#select_partner_country option").each(function(){
                console.log($(this).val());
                if($(this).val() == partner_tel[0]){
                    console.log("select"+partner_tel[0]);
                    $(this).attr("selected","selected");
                }
            })

            checkempty();
            var beditor = tinymce.get('background_mou'); 
            beditor.setContent(data['row'][0]['background_mou']);
           
            }
        });
    });

  //mou ends
   

    // None Disclosure Agreement (nda)
    //pdf
     $('body').on('click','#printnda',function (e){
        e.preventDefault();
        var ndaid = $('#nda').val();
        var ndaurl = $(this).attr("href");
        console.log(ndaurl);
        if(ndaid ==''){
            alert("Please select atleast one record");
            return false;
        }
        var win = window.open(ndaurl+"/"+ndaid, '_blank');
        win.focus();
           
        });
    
//pdf

    /*$("#contractstep2").on('load',function(){
    var deditor = tinymce.get('definitions_nda'); 
            deditor.setContent('dfgh');
            console.log("heelo");
     });*/
    $('body').on('change','#nda',function (){
        //var text = document.getElementById("definitions_nda").value;
        /*var deditor = tinymce.get('definitions_nda'); 
            deditor.setContent('');*/
            //var text="<ol><li><strong>Definitions</strong></li><br/><ol><li>Except to the extent expressly provided otherwise, in this Agreement:<br/><br/>"Agreement" means this agreement, and any amendments to this agreement from time to time;<br/><br/>"Business Day" means any weekday other than a bank or public holiday in [Australia];<br/><br/><strong>"Disclosor Confidential Information"</strong> means:<br/><ol style="list-style-type: lower-alpha;"><li>any information disclosed by [or on behalf of ]the Disclosor to the Recipient [during the Term] OR [at any time before the termination of this Agreement] (whether disclosed in writing, orally or otherwise) that at the time of disclosure was marked[ or described] as "confidential" or should have been understood by the Recipient (acting reasonably) to be confidential; and</li><li>[the terms of this Agreement];</li></ol><br/><br/>[additional list items]<br/><br/><strong>"Effective Date"</strong> means [the date of execution of this Agreement];<br/><br/><strong>"Permitted Purpose"</strong>  means [specify purpose or purposes]; and<br/><br/><strong>"Term"</strong>  means the term of this Agreement, commencing in accordance with Clause 3.1 and ending in accordance with Clause 3.2.</li></ol>";
            var defaultText=document.getElementById("definitions_nda").textContent;
            var contactID = $(this).val();
            console.log(contactID);
            if(contactID ==''){
                 $("#name_disclosor").val('');
                $("#address_disclosor").val('');
                $("#company_disclosor").val('');
                $("#country_disclosor").val('');
                $("#registration_disclosor").val('');
                $("#office_add_disclosor").val('');
                $("#name_recepient").val('');
                $("#address_recepient").val('');
                $("#company_recepient").val('');
                $("#country_recepient").val('');
                $("#registration_recepient").val('');
                $("#office_add_recepient").val('');
                $("#date_nda").val('');
                $("#definitions_nda").val('');

            var deditor = tinymce.get('definitions_nda');
            deditor.setContent(defaultText);
            
        }
        
            $.ajax({
             type: "GET",
             dataType: "json",
             encode:true,
             url: site_url+"contracts_setup/AjaxLoadNDA/"+contactID,
              success: function (data) {
                console.log(data);
                $("#name_disclosor").val(data['row'][0]['name_disclosor']);
                $("#address_disclosor").val(data['row'][0]['address_disclosor']);
                $("#company_disclosor").val(data['row'][0]['company_disclosor']);
                $("#country_disclosor").val(data['row'][0]['country_disclosor']);
                $("#registration_disclosor").val(data['row'][0]['registration_disclosor']);
                $("#office_add_disclosor").val(data['row'][0]['office_add_disclosor']);
                $("#name_recepient").val(data['row'][0]['name_recepient']);
                $("#address_recepient").val(data['row'][0]['address_recepient']);
                $("#company_recepient").val(data['row'][0]['company_recepient']);
                $("#country_recepient").val(data['row'][0]['country_recepient']);
                $("#registration_recepient").val(data['row'][0]['registration_recepient']); 
                $("#office_add_recepient").val(data['row'][0]['office_add_recepient']);
                $("#date_nda").val(data['row'][0]['date_nda']);
                $("#definitions_nda").val(data['row'][0]['definitions_nda']);
               
                 checkempty();

                var deditor = tinymce.get('definitions_nda'); 
                deditor.setContent(data['row'][0]['definitions_nda']);
            }
        });
    });

    $('#date_nda').datepicker({
        format: 'yyyy-mm-dd',
        startDate: 'd',
        autoclose: true,
        todayHighlight: true
    });
    
     $('#btnClearNDA').on('click', function () {
        var deleteID = $("#nda").val();
        console.log(deleteID);
        if(deleteID ==''){
            alert("Please select atleast one record");
            return false;
        }
        $.ajax({
            url: site_url+"contracts_setup/AjaxDeleteNda/"+deleteID,
            type: "POST",
            dataType: 'json',
            encode: true,
            success: function (data) {
                if (data.status) {

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
                        + "<p class='alert-box'>Your contract has been deleted  successfully !!!</p>");

                    $("#btnYesConfirmYesNo").hide();
                    $("#btnNoConfirmYesNo").html('Close');

                    $("#btnNoConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');
                        $("#btnYesConfirmYesNo").show();
                        $("#btnNoConfirmYesNo").html('No');

                        location.reload();
                    });
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {

                alert('Error adding / update data');

                console.log(xhr.status);
                console.log(xhr.responseText);
                console.log(thrownError);

            }

        })
    })

    $('#savingNDA').on('click', function (event) {

        event.preventDefault();

        $('#nda_form').find('input[type=number], input[type=text], textarea').each(function (e) {

            if ($(this).val() == "") {

                $('#modalConfirmYes').modal('show');
                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert all required fields");
                $("#btnYesConfirmYes").off('click').click(function () {
                $('#modalConfirmYes').modal('hide');
                });

                e.preventDefault();
                return false;
            }
        });

        var form = $('#nda_form').serialize();

        $.ajax({
            url: site_url+"contracts_setup/AjaxSavingNDA",
            type: "POST",
            data: form,
            dataType: 'json',
            encode: true,
            success: function (data) {
                if (data.status) {

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
                        + "<p class='alert-box'>Your contract has been saved  successfully !!!</p>");

                    $("#btnYesConfirmYesNo").hide();
                    $("#btnNoConfirmYesNo").html('Close');

                    $("#btnNoConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');
                        $("#btnYesConfirmYesNo").show();
                        $("#btnNoConfirmYesNo").html('No');

                        location.reload();
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
    });

   //nda ends 

// Partnership Agreement  (pa)
    //pdf
     $('body').on('click','#printpa',function (e){
        e.preventDefault();
        var paid = $('#pa').val();
        var paurl = $(this).attr("href");
        console.log(paurl);
        if(paid ==''){
            alert("Please select atleast one record");
            return false;
        }
        var win = window.open(paurl+"/"+paid, '_blank');
        win.focus();
           
        });
    
//pdf

    $('body').on('change','#pa',function (){

        var contactID = $(this).val();
        console.log(contactID);
        if(contactID ==''){

            $("#name_pa").val('');
            $("#company_pa").val('');
            $("#country_pa").val('');
            $("#partner_name_pa").val('');
            $("#partner_company_pa").val('');
            $("#partner_country_pa").val('');
            $("#date_pa").val('');
            $("#witness_1_pa").val('');
            $("#witness_2_pa").val('');
            $("#introduction_pa").val('');
            
            
            var ieditor = tinymce.get('introduction_pa'); 
            ieditor.setContent('');
            

        }
         $.ajax({
         type: "GET",
         dataType: "json",
         encode:true,
         url: site_url+"contracts_setup/AjaxLoadPA/"+contactID,
          success: function (data) {
            console.log(data);
            $("#name_pa").val(data['row'][0]['name_pa']);
            $("#company_pa").val(data['row'][0]['company_pa']);
            $("#country_pa").val(data['row'][0]['country_pa']);
            $("#partner_name_pa").val(data['row'][0]['partner_name_pa']);
            $("#partner_company_pa").val(data['row'][0]['partner_company_pa']);
            $("#partner_country_pa").val(data['row'][0]['partner_country_pa']);
            $("#date_pa").val(data['row'][0]['date_pa']);
            $("#witness_1_pa").val(data['row'][0]['witness_1_pa']);
            $("#witness_2_pa").val(data['row'][0]['witness_2_pa']);
            $("#introduction_pa").val(data['row'][0]['introduction_pa']);
           
             checkempty();

            var ieditor = tinymce.get('introduction_pa'); 
            ieditor.setContent(data['row'][0]['introduction_pa']);
            
            }
        });
    });

   

        $('#btnClearPA').on('click', function () {
        var deleteID = $("#pa").val();
        console.log(deleteID);
        if(deleteID ==''){
            alert("Please select atleast one record");
            return false;
        }
        $.ajax({
            url: site_url+"contracts_setup/AjaxDeletePa/"+deleteID,
            type: "POST",
            dataType: 'json',
            encode: true,
            success: function (data) {
                if (data.status) {

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
                        + "<p class='alert-box'>Your contract has been deleted  successfully !!!</p>");

                    $("#btnYesConfirmYesNo").hide();
                    $("#btnNoConfirmYesNo").html('Close');

                    $("#btnNoConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');
                        $("#btnYesConfirmYesNo").show();
                        $("#btnNoConfirmYesNo").html('No');

                        location.reload();
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
    });

    $('#savingPA').on('click', function (event) {

        event.preventDefault();

        $('#pa_form').find('input[type=number], input[type=text], textarea').each(function (e) {

            if ($(this).val() == "") {

                $('#modalConfirmYes').modal('show');
                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert all required fields");
                $("#btnYesConfirmYes").off('click').click(function () {
                    $('#modalConfirmYes').modal('hide');
                });

                e.preventDefault();
                return false;
            }
        });

        var form = $('#pa_form').serialize();

        $.ajax({
            url: site_url+"contracts_setup/AjaxSavingPA",
            type: "POST",
            data: form,
            dataType: 'json',
            encode: true,
            success: function (data) {
                if (data.status) {

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
                        + "<p class='alert-box'>Your contract has been saved  successfully !!!</p>");

                    $("#btnYesConfirmYesNo").hide();
                    $("#btnNoConfirmYesNo").html('Close');

                    $("#btnNoConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');
                        $("#btnYesConfirmYesNo").show();
                        $("#btnNoConfirmYesNo").html('No');

                        location.reload();
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

    });
     $(function () {
        $('#date_pa').datepicker({
            format: 'yyyy-mm-dd',
            startDate: 'd',
            autoclose: true,
            todayHighlight: true
        });
    });
// Partnership Agreement ends (pa)
//sc starts
   //pdf
     $('body').on('click','#printsa',function (e){
        e.preventDefault();
        var scid = $('#sc').val();
        console.log(scid);
        var scurl = $(this).attr("href");
        console.log(scurl);
        if(scid ==''){
            alert("Please select at least one record");
           return false;
        }
        var win = window.open(scurl+"/"+scid, '_blank');
        win.focus();
           
        });
    
//pdf

//on ready
    $(document).ready(function() {
    $.ajax({
         type: "GET",
         dataType: "json",
         encode:true,
         url: site_url+"contracts_setup/AjaxLoadSC/",
          success: function (data) {            
            $('#cu-s').html(data['row'][0]['currency']);
          }
        });
   });

    //on ready ends

    $('body').on('change','#sc',function (){

        var contactID = $(this).val();
        console.log(contactID);
        if(contactID ==''){
            $("#certificate_number_sc").val('');
            $("#no_of_shares_sc").val('');
            $("#share_holders_name_sc").val('');
            $("#address_sc  ").val('');
            $("#number_class_sc").val('');
            $("#nominal_share_value_sc").val('');
            $("#telephone_sc").val('');
            $("#date_sc").val(''); 
            $("#streetNumber").val('');
            $("#streetName").val('');
            $("#subUrb").val('');
            $("#companyState").val('');
            $("#zipCode").val('');
            $("#companyEmail").val('');
            $("#companyWebsite").val('');
            $("#witnessName").val(''); 
            $("#telephone_sc").val(''); 
            $('#cu-s').html(data['row'][0]['currency']);
            
              
        }
         $.ajax({
         type: "GET",
         dataType: "json",
         encode:true,
         url: site_url+"contracts_setup/AjaxLoadSC/"+contactID,
          success: function (data) {            
            $('#cu-s').html(data['row'][0]['currency']);
            $("#certificate_number_sc").val(data['row'][0]['certificate_number_sc']);
            $("#share_class_sc").val(data['row'][0]['share_class_sc']);
            $("#no_of_shares_sc").val(data['row'][0]['no_of_shares_sc']);
            $("#company_name_sc").val(data['row'][0]['company_name_sc']);
            $("#company_number_sc").val(data['row'][0]['company_number_sc']);
            $("#share_holders_name_sc").val(data['row'][0]['share_holders_name_sc']);
            $("#address_sc").val(data['row'][0]['address_sc']);
            $("#number_class_sc").val(data['row'][0]['number_class_sc']);
            $("#nominal_share_value_sc").val(data['row'][0]['nominal_share_value_sc']);
            $("#directors_1_sc").val(data['row'][0]['directors_1_sc']);
            $("#directors_2_sc").val(data['row'][0]['directors_2_sc']); 
            $("#streetNumber").val(data['row'][0]['streetNumber']);
            $("#streetName").val(data['row'][0]['streetName']);
            $("#subUrb").val(data['row'][0]['subUrb']);
            $("#companyState").val(data['row'][0]['companyState']);
            $("#zipCode").val(data['row'][0]['zipCode']);
            $("#country_sc").val(data['row'][0]['country_sc']);
            $("#companyEmail").val(data['row'][0]['companyEmail']);
            $("#companyWebsite").val(data['row'][0]['companyWebsite']); 
            $("#witnessName").val(data['row'][0]['witnessName']); 
            $("#secretary_sc").val(data['row'][0]['secretary_sc']);
            $("#date_sc").val(data['row'][0]['date_sc']);  
            
            var tel_sc = data['row'][0]['telephone_sc'].split(" ");
            console.log(tel_sc);
            $('#telephone_sc').val(tel_sc[1]);
            $("#select_country_sc option").each(function(){
                console.log($(this).val());
                if($(this).val() == tel_sc[0]){
                    console.log("select"+tel_sc[0]);
                    $(this).attr("selected","selected");
                }
            });  

            console.log(data);
            checkempty();
            var beditor = tinymce.get('background_sc'); 
            beditor.setContent(data['row'][0]['background_sc']);
          }
        });
    });
        

    $(function () {
        $('#date_sc').datepicker({
            format: 'yyyy-mm-dd',
            startDate: 'd',
            autoclose: true,
            todayHighlight: true
        });
    });

    $('#btnClearSC').on('click', function () {
        var deleteID = $("#sc").val();
        console.log(deleteID);
        if(deleteID ==''){
            alert("Please select atleast one record");
            return false;
        }
         
            $.ajax({
            url: site_url+"contracts_setup/AjaxDeleteSC/"+deleteID,
            type: "POST",
            dataType: 'json',
            encode: true,
            success: function (data) {
                if (data.status) {

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
                        + "<p class='alert-box'>Your contract has been deleted  successfully !!!</p>");

                    $("#btnYesConfirmYesNo").hide();
                    $("#btnNoConfirmYesNo").html('Close');

                    $("#btnNoConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');
                        $("#btnYesConfirmYesNo").show();
                        $("#btnNoConfirmYesNo").html('No');

                        location.reload();
                    });
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {

                alert('Error adding / update data');

                console.log(xhr.status);
                console.log(xhr.responseText);
                console.log(thrownError);

            }

        })
    })

    $('#savingSC').on('click', function (event) {

        event.preventDefault();

        $('#sc_form').find('input[type=number], input[type=text], textarea').each(function (e) {

            if ($(this).val() == "") {

                $('#modalConfirmYes').modal('show');
                $("#lblTitleConfirmYes").html("User Confirmation");
                $("#lblMsgConfirmYes").html("Please insert all required fields");
                $("#btnYesConfirmYes").off('click').click(function () {
                $('#modalConfirmYes').modal('hide');
                });

                e.preventDefault();
                return false;
            }
        });

        var form = $('#sc_form').serialize();

        $.ajax({
            url: site_url+"contracts_setup/AjaxSavingSC",
            type: "POST",
            data: form,
            dataType: 'json',
            encode: true,
            success: function (data) {
                if (data.status) {

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
                        + "<p class='alert-box'>Your contract has been saved  successfully !!!</p>");

                    $("#btnYesConfirmYesNo").hide();
                    $("#btnNoConfirmYesNo").html('Close');

                    $("#btnNoConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');
                        $("#btnYesConfirmYesNo").show();
                        $("#btnNoConfirmYesNo").html('No');

                        location.reload();
                       
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
    });

//sc ends