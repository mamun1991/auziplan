//if ($.cookie('modal_service_revenue') != 'loaded')
//{
  // $.cookie('modal_service_revenue', 'loaded');
   //// code to show modal
   //setTimeout(function(){
   //$('#modal_service_revenue').modal('show');
//}, 2000)
//}




$('input').blur(function() {
	var $this = $(this);
	if ($this.val())
	  $this.addClass('used');
	else
	  $this.removeClass('used');
});

$(document).ready(function(){
	$('input').each(function(){
        var $this=$(this);
        if($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
	});
});

$(document).ready(function() {
	$("#Purpose").change(function() {
	  if($("#Purpose").val() == "Option1")
	  {
		document.getElementById("label1").innerHTML = "Service";
		document.getElementById("label2").innerHTML = "Description";
		document.getElementById("label3").innerHTML = "Hours Worked";
		document.getElementById("label4").innerHTML = "Rate Per Hour";
		document.getElementById("label5").innerHTML = "Call Out Fee";
	  }
	  else if($("#Purpose").val() == "Option2")
	  {
		document.getElementById("label1").innerHTML = "Service";
		document.getElementById("label2").innerHTML = "Job Decription";
		document.getElementById("label3").innerHTML = "No of Jobs";
		document.getElementById("label4").innerHTML = "Fixed Rate";
		document.getElementById("label5").innerHTML = "Additional Costs";
	  }
	  else if($("#Purpose").val() == "Option 3")
	  {
		document.getElementById("label1").innerHTML = "Product";
		document.getElementById("label2").innerHTML = "Description";
		document.getElementById("label3").innerHTML = "Downloads";
		document.getElementById("label4").innerHTML = "Peoduct Cost";
		document.getElementById("label5").innerHTML = "Additional Cost";
	  }
	  else if($("#Purpose").val() == "Option 4")
	  {
		document.getElementById("label1").innerHTML = "Type Of Serivice";
		document.getElementById("label2").innerHTML = "Description";
		document.getElementById("label3").innerHTML = "Hours Worked";
		document.getElementById("label4").innerHTML = "Rate Per Hour";
		document.getElementById("label5").innerHTML = "Additonal Costs";
	  }

	else if($("#Purpose").val() == "Option 5")
	{
		document.getElementById("label1").innerHTML = "Type Of Serivce";
		document.getElementById("label2").innerHTML = "Description";
		document.getElementById("label3").innerHTML = "Hours Worked";
		document.getElementById("label4").innerHTML = "Rate Per Hour";
		document.getElementById("label5").innerHTML = "Additonal Costs";
	}


	else if($("#Purpose").val() == "Option 6")
	{
		document.getElementById("label1").innerHTML = "Type Of Cut";
		document.getElementById("label2").innerHTML = "Description";
		document.getElementById("label3").innerHTML = "How Many Cuts";
		document.getElementById("label4").innerHTML = "Price Per Cut";
		document.getElementById("label5").innerHTML = "Additional Cost";
	}

	else if($("#Purpose").val() == "Option 7")
	{
		document.getElementById("label1").innerHTML = "Option 7";
		document.getElementById("label2").innerHTML = "Option 7";
		document.getElementById("label3").innerHTML = "Option 7";
		document.getElementById("label4").innerHTML = "Option 7";
		document.getElementById("label5").innerHTML = "Option 7";
	}

	else if($("#Purpose").val() == "Option 8")
	{
		document.getElementById("label1").innerHTML = " 8";
		document.getElementById("label2").innerHTML = " 8";
		document.getElementById("label3").innerHTML = " 8";
		document.getElementById("label4").innerHTML = " 8";
		document.getElementById("label5").innerHTML = " 8";
	}


	else
	  {
		document.getElementById("label1").innerHTML = "8";
		document.getElementById("label2").innerHTML = "8";
		document.getElementById("label3").innerHTML = "8";
		document.getElementById("label4").innerHTML = "8";
		document.getElementById("label5").innerHTML = "8";
	  }
	});
});










$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var target = $(e.target).attr("href") // activated tab
  if ((target == '#menu1')) {
    reload_tableimported1();
  }
})

function delete_confirmation_service(id) {
    $('#modalConfirmYesNo').css('z-index', '9999');
    $('#modalConfirmYesNo').modal('show');

    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this service ??");

    $("#btnYesConfirmYesNo").off('click').click(function () {

        delete_service(id)
        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
    });
}

$(function(){
  $('.btn-circle').on('click',function(){
     $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
     $(this).addClass('btn-info').removeClass('btn-default').blur();
   });
  $('.next-step, .prev-step').on('click', function (e){
   var $activeTab = $('.tab-pane.active');
   $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
   if ( $(e.target).hasClass('next-step') )
   {
        var nextTab = $activeTab.next('.tab-pane').attr('id');
        $('[href="#'+ nextTab +'"]').removeClass('btn-default');
        $('[href="#'+ nextTab +'"]').tab('show');
        $("body").scrollTop(0);
    }else{
        var prevTab = $activeTab.prev('.tab-pane').attr('id');
        $('[href="#'+ prevTab +'"]').removeClass('btn-default');
        $('[href="#'+ prevTab +'"]').tab('show');
        $("body").scrollTop(0);
    }
  });
  //redraw the datatables
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("href") // activated tab
    if ((target == '#menu1')) {
        table1.ajax.reload(null, false);
    }
  });
});


$(document).ready(function(){

  $('.next').click(function(){
  
    var nextId = $(this).parents('.tab-pane').next().attr("id");
    $('[href=#'+nextId+']').tab('show');
    return false;
    
  })
  
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    
    //update progress
    var step = $(e.target).data('step');
    var percent = (parseInt(step) / 3) * 100;
    
    $('.progress-bar').css({width: percent + '%'});
    $('.progress-bar').text("Step " + step + " of 3");
    
    //e.relatedTarget // previous tab
    
  })
  
  $('.first').click(function(){
  
    $('#myWizard a:first').tab('show')
  
  })

});


$(".wizard").each(function() {
  var index = 0;
  var wizard = $(this);

  $(wizard).prepend('<div class="wizardProgress"></div>');
  $(wizard).prepend('<div class="header"></div>');

  $(wizard).find(".wizardPanel").each(function() {

    $(wizard).find(".wizardProgress").append("<div>" + $(this).data("title") + "</div>");
  });

  $(wizard).find(".wizardProgress div").click(function() {
    selectPanel($(this).index());
  });

  $(wizard).append('<div class="footer"><button id="btnPrev" class="btn btn-default">Prev</button><button id="btnNext" class="btn btn-primary">Next</button></div>');

  $(wizard).find("#btnPrev").click(function() {
    selectPanel($(".wizardProgress .selected").index() - 1);
  });
  $(wizard).find("#btnNext").click(function() {
    selectPanel($(".wizardProgress .selected").index() + 1);
  });

  selectPanel(0);

  function selectPanel(index) {
      if (index == 0) {
        $(wizard).find("#btnPrev").fadeOut();
      } else {
        $(wizard).find("#btnPrev").fadeIn();
      }

      if (index == $(".wizardProgress div").length - 1) {
        $(wizard).find("#btnNext").fadeOut();
      } else {
        $(wizard).find("#btnNext").fadeIn();
      }

      $(".wizardProgress .selected").removeClass("selected");
      var selectedTab = $(".wizardProgress div").get(index);
      $(selectedTab).addClass("selected");

      $(".wizardPanel").slideUp();
      var selectedPanel = $(wizard).find(".wizardPanel").get(index);
      $(selectedPanel).slideDown();
    }
});


$(document).ready(function() {
	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} );
  })(jQuery);
  

  // Adding Signs Modal In Services

  $('#importform').find('input[type="text"]').focus(function() {
    var focusvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    if ($(this).hasClass('currencySign')) {
      $(this).val(focusvalue);
    }else if ($(this).hasClass('numberSign')) {
      $(this).val(focusvalue);
    }
  });
  $('#importform').find('input[type="text"]').focusout(function() {
    var focusoutvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
    if ($(this).hasClass('currencySign')) {
      $(this).val(cur + '' + number_format(focusoutvalue, 0, '.', ','));
    }else if ($(this).hasClass('numberSign')) {
      $(this).val(number_format(focusoutvalue, 0, '.', ','));
    }

  });
});

/*
*Lingaraj :)
*/




function add_service() {
  // var isVisible = document.getElementById("serviceForm").style.display == "block";
  // if (!isVisible)
  //   $("#serviceForm").show();
  $('#myModal2').modal('show');
  save_method = 'add';
  $("label.error").remove();
  $('#importform')[0].reset(); // reset form on modal
  $('.form-group').removeClass('has-error'); // clear error class
  $('.help-block').empty(); // clear error string
}

function add_importedproduct()
{
  var isVisible = document.getElementById("serviceForm").style.display == "block";
  if (!isVisible)
  $("#serviceForm").show();

  save_method = 'add';
  $("label.error").remove();
  $('#importform')[0].reset(); // reset form on modal
  $('.form-group').removeClass('has-error'); // clear error class
  $('.help-block').empty(); // clear error string
  

}function cancel_service() {
    $("#collapseExample_ser_1").collapse("hide"); 
    $("#collapseExample_ser_2").collapse("hide"); 
    
    $('#modalConfirmYesNo').css('z-index', '9999');
    $('#modalConfirmYesNo').modal('show');
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure want to cancel this service?");
    $("#btnYesConfirmYesNo").off('click').click(function () {
        
    //clearForm();
    //$("#servicestep1-1" ).tabs( { active: 1 } );//import_tab1  servicestep1-1
    var nextId = "servicestep1-1";
    //$('[href=#' + nextId + ']').tab('show');

    $("#myModal2").modal('hide');
    $('#modalConfirmYesNo').css('z-index', 'unset');
    $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
    $('#modalConfirmYesNo').css('z-index', 'unset');
    $('#modalConfirmYesNo').modal('hide');
    });
}







this.$slideOut = $('#slideOut');
// Slideout show
this.$slideOut.find('.slideOutTab').on('click', function() {
  $("#slideOut").toggleClass('showSlideOut');
});







