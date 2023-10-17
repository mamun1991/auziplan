

//if ($.cookie('modal-planing') != 'loaded') {
  //$.cookie('modal-planing', 'loaded');
  // code to show modal
  //setTimeout(function () {
    //$('#modal-planing').modal('show');
  //}, 2000);
//}





//---------actions on save button ------------------------
$('#save_planningsetup').on('click', function () {
  var form = $('#planning_setup_form').serialize();
  $.ajax({
    url: siteUrl + "planning_setup/ajax-save_planning",
    type: "POST",
    data: form,
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
          + "<h2 class='card-title  text-center text-primary mt-5'>Your Business Plan has been saved successfully.</h2>");

        $("#btnYesConfirmYesNo").hide();
        $("#btnNoConfirmYesNo").html('Close');
        $("#btnNoConfirmYesNo").off('click').click(function () {
          $('#modalConfirmYesNo').modal('hide');
          //$("#btnYesConfirmYesNo").show();
          //$("#btnNoConfirmYesNo").html('No');
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }

  });

});
//---------ends on clear button ------------------------



//---------actions on clear button ------------------------


$('#clear_planningsetup').on('click', function () {
  $('#modalConfirmYesNo').zIndex(10100);
  $("#lblMsgConfirmYesNo").html("Are you sure your want to start again?");
  $('#modalConfirmYesNo').modal('show');
  $("#btnYesConfirmYesNo").show();
  $("#btnNoConfirmYesNo").off('click').click(function () {
    $('#modalConfirmYesNo').modal('hide');
  });

});

$('#btnYesConfirmYesNo').on('click', function () {
  $('#modalConfirmYesNo').modal('hide');
  var form = $('#planning_setup_form').serialize();
  setTimeout(function () {
    $.ajax({
      url: siteUrl + "planning_setup/ajax-clear_planning",
      type: "POST",
      dataType: 'json',
      encode: true,
      success: function (data) {
        //console.log(data);return false;
        if (data.status) {

          $('#modalConfirmYesNo').zIndex(10200);
          $('#modalConfirmYesNo').modal('show');

          $("#lblTitleConfirmYesNo").html("");
          $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
            + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
            + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
            + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
            + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
            + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
            + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
            + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
            + "</svg>"
            + "</div>"
            + "<p class='alert-box'>Your plan has deleted successfully!</p>");

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
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }

    });
  }, 500);


});
//---------ends actions on clear button ------------------------



//---------actions on clicking tabs ------------------------
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var target = $(e.target).attr("href") // activated tab
  if ((target == '#planningstep0')) {
    $("#save_planningsetup").show();
    $("#preview_btn").show();
    $("#clear_planningsetup").show();
  } else if ((target == '#planningstep1')) {
    $("#save_planningsetup").show();
    //if($('[name="is_mission_area"]').val()==""){
    $("#preview_btn").show();
    $("#clear_planningsetup").show();
    //}
  }

});
//---------actions on clicking tabs ------------------------


//---------actions on clicking help center ------------------------

$(document).ready(function () {
  $(".btn-pref .btn").click(function () {
    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).removeClass("btn-default").addClass("btn-primary");
  });

});

this.$slideOut = $('#slideOut');
// Slideout show
this.$slideOut.find('.slideOutTab').on('click', function () {
  $("#slideOut").toggleClass('showSlideOut');
});

$('.btn-flat', this.$slideOut).on('click', function () {
  //if($('.noShowModalHelperAnymore', this.$slideOut) )

  $('#slideOut').remove();
});

$('.btnNext').click(function () {
  $('.nav-tabs > .active').next('li').find('a').trigger('click');
});

$('.btnPrevious').click(function () {
  $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});

function nextSlide(ward = 'forwards') {
  $activeSlide = $("a.slide.active");

  if (ward === 'forwards') {
    $nextSlide = $activeSlide.next();
  } else {
    $nextSlide = $activeSlide.prev();
  }

  if ($nextSlide[0].nodeName === 'SPAN') {
    if (ward === 'forwards') {
      $nextSlide = $("a.slide").first();
    } else {
      $nextSlide = $("a.slide").last();
    }
  };
  $nextBullet = setSlide($nextSlide);

  $nextBullet.click();
}

function setSlide($slide) {
  $activeSlide = $("a.slide.active");
  $nextSlide = $slide;

  $activeBullet = $('i', $activeSlide);
  $nextBullet = $('i', $nextSlide);

  $activeBullet.css('color', '#DDD');
  $nextBullet.css('color', '');;
  $activeSlide.toggleClass('active');
  $nextSlide.toggleClass('active');

  return $nextBullet;
}



