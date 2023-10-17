

(function (i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function () {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o),
		m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-103554950-1', 'auto');
ga('send', 'pageview');

$(function () {
	$('[data-toggle="popover"]').popover();

	$('.col-md-4')
		.on('mouseenter', function() {
			$('[data-toggle="popover"]').popover('show');
		})
		.on('mouseleave', function() {
			$('[data-toggle="popover"]').popover('hide');
		});
	});




$(document).ready(function() {
    LoginModalController.initialize();

});

var page= "<?php 
		if($page == "login"){
			echo 0;
		}elseif($page=="register"){
			echo 1;
		}else{
			echo 0;
		}
		?>";

var LoginModalController = {
    tabsElementName: ".logmod__tabs li",
    tabElementName: ".logmod__tab",
    inputElementsName: ".logmod__form .input",
    hidePasswordName: ".hide-password",
    
    inputElements: null,
    tabsElement: null,
    tabElement: null,
    hidePassword: null,
    
    activeTab: null,
    tabSelection: 0, // 0 - first, 1 - second
    
    findElements: function () {
        var base = this;
        
        base.tabsElement = $(base.tabsElementName);
        base.tabElement = $(base.tabElementName);
        base.inputElements = $(base.inputElementsName);
        base.hidePassword = $(base.hidePasswordName);
        
        return base;
    },
    
    setState: function (state) {
    	var base = this,
            elem = null;
        
        if (!state) {
            state = page;
        }
        
        if (base.tabsElement) {
        	elem = $(base.tabsElement[state]);
            elem.addClass("current");
            $("." + elem.attr("data-tabtar")).addClass("show");
        }
  
        return base;
    },
    
    getActiveTab: function () {
        var base = this;
        
        base.tabsElement.each(function (i, el) {
           if ($(el).hasClass("current")) {
               base.activeTab = $(el);
           }
        });
        
        return base;
    },
   
    addClickEvents: function () {
    	var base = this;
        
        base.hidePassword.on("click", function (e) {
            var $this = $(this),
                $pwInput = $this.prev("input");
            
            if ($pwInput.attr("type") == "password") {
                $pwInput.attr("type", "text");
                $this.text("Hide");
            } else {
                $pwInput.attr("type", "password");
                $this.text("Show");
            }
        });
 
        base.tabsElement.on("click", function (e) {
            var targetTab = $(this).attr("data-tabtar");
            
            e.preventDefault();
            base.activeTab.removeClass("current");
            base.activeTab = $(this);
            base.activeTab.addClass("current");
            
            base.tabElement.each(function (i, el) {
                el = $(el);
                el.removeClass("show");
                if (el.hasClass(targetTab)) {
                    el.addClass("show");
                }
            });
        });
        
        base.inputElements.find("label").on("click", function (e) {
           var $this = $(this),
               $input = $this.next("input");
            
            $input.focus();
        });
        
        return base;
    },
    
    initialize: function () {
        var base = this;
        
        base.findElements().setState().getActiveTab().addClickEvents();
    }
};
$(function() {

  	$("#fp_link").click(function(event) {
			$("#lg_cont").hide();
			$("#lg_cont").removeClass('show')
			$("#fp_cont").show();
			$("#fp_cont").addClass('show')
		});	

		$("#lg_link").click(function(event) {
			$("#fp_cont").hide();
			$("#fp_cont").removeClass('show')
			$("#lg_cont").show();
			$("#lg_cont").addClass('show')
		});	

    var $modal = $('#TermsModal');

    // Show loader & then get content when modal is shown
    $modal.on('show.bs.modal', function(e) {
    var paragraphs = $(e.relatedTarget).data('paragraphs');

      $(this)
        .addClass('modal-scrollfix')
        .find('.modal-body')
        .html('loading...')
        
        .load('<?=asset_url()?>/HTML/Acknowledments.html', function()
        
        
        {
        // Use Bootstrap's built-in function to fix scrolling (to no avail)
        $modal
          .removeClass('modal-scrollfix')
          .modal('handleUpdate');
      });
    });

});

$(function() {

   $(".input input").focus(function() {

      $(this).parent(".input").each(function() {
         $("label", this).css({
            "line-height": "18px",
            "font-size": "18px",
            "font-weight": "100",
            "top": "0px"
         })
         $(".spin", this).css({
            "width": "100%"
         })
      });
   }).blur(function() {
      $(".spin").css({
         "width": "0px"
      })
      if ($(this).val() == "") {
         $(this).parent(".input").each(function() {
            $("label", this).css({
               "line-height": "60px",
               "font-size": "24px",
               "font-weight": "300",
               "top": "10px"
            })
         });

      }
   });

   $(".button").click(function(e) {
      var pX = e.pageX,
         pY = e.pageY,
         oX = parseInt($(this).offset().left),
         oY = parseInt($(this).offset().top);

      $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
      $('.x-' + oX + '.y-' + oY + '').animate({
         "width": "500px",
         "height": "500px",
         "top": "-250px",
         "left": "-250px",

      }, 600);
      $("button", this).addClass('active');
   })

   $(".alt-2").click(function() {
      if (!$(this).hasClass('material-button')) {
         $(".shape").css({
            "width": "100%",
            "height": "100%",
            "transform": "rotate(0deg)"
         })

         setTimeout(function() {
            $(".overbox").css({
               "overflow": "initial"
            })
         }, 600)

         $(this).animate({
            "width": "140px",
            "height": "140px"
         }, 500, function() {
            $(".box").removeClass("back");

            $(this).removeClass('active')
         });

         $(".overbox .title").fadeOut(300);
         $(".overbox .input").fadeOut(300);
         $(".overbox .button").fadeOut(300);

         $(".alt-2").addClass('material-buton');
      }

   })

   $(".material-button").click(function() {

      if ($(this).hasClass('material-button')) {
         setTimeout(function() {
            $(".overbox").css({
               "overflow": "hidden"
            })
            $(".box").addClass("back");
         }, 200)
         $(this).addClass('active').animate({
            "width": "700px",
            "height": "700px"
         });

         setTimeout(function() {
            $(".shape").css({
               "width": "50%",
               "height": "50%",
               "transform": "rotate(45deg)"
            })

            $(".overbox .title").fadeIn(300);
            $(".overbox .input").fadeIn(300);
            $(".overbox .button").fadeIn(300);
         }, 700)

         $(this).removeClass('material-button');

      }

      if ($(".alt-2").hasClass('material-buton')) {
         $(".alt-2").removeClass('material-buton');
         $(".alt-2").addClass('material-button');
      }

   });

});

</script>

<!-- Google Analytics: change UA-XXXXX-X to be your site's ID.-->

<!-- Javascript for Google Analytics-->
<script>

(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
  e=o.createElement(i);r=o.getElementsByTagName(i)[0];
  e.src='//www.google-analytics.com/analytics.js';
  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
  ga('create','UA-XXXXX-X');ga('send','pageview');
  
</script>

<!-- Javascript filesfro login modal-->
<script type="text/javascript">

  $("#myModal").on('hidden.bs.modal', function (e) {
        $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
    });

  <script type="text/javascript">

   // if (navigator.cookieEnabled === true)
    //{
  // Uncomment this line to prevent showing message on every page load
  //if (document.cookie.indexOf("visited") == -1)
	//{
     //jQuery('body').prepend('<div id="cookie" style="font-size:60%;line-height:190%"><div id="wrapper"><h2>Cookies on this website</h2><p>We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we\'ll assume that you are happy to receive all cookies from this website. If you would like to change your preferences you may do so by following the instructions <a href="http://www.aboutcookies.org/Default.aspx?page=1" rel="nofollow">here</a>.</p><div id="close"><a href="#" id="closecookie">&#x2716; Close</a></div><div style="clear:both"></div></div></div>');
	//		jQuery('head').append('<style type="text/css">#cookie {position:absolute;left:0;top:0;width:100%;height:100%;background:rgb(0,0,0);background:rgba(0,0,0,0.9);z-index:9999;}#cookie #wrapper {padding:20px;}#cookie h2 {color:#ffffff;padding-top:0;display:block;text-align:center;font-family:ariel,sans-serif;font-size:1.8em}#cookie p {color:#BEBEBE;display:block;font-family:ariel,sans-serif;font-size:1.4em}#cookie #close{text-align:center;}#closecookie{color:#ffffff;font-family:ariel,sans-serif;font-size:1.6em;text-decoration:none}@media only screen and (min-width: 480px) {#cookie {height:auto;}#cookie #wrapper{max-width:980px;margin-left:auto;margin-right:auto;}#cookie h2{width:18%;margin-top:0;margin-right:2%;float:left;text-align:right;}#cookie p {width:68%;margin:0 1%;float:left;}#cookie #close{width:9%;float:right;}}</style>');
	//		jQuery('#cookie').fadeIn("fast");
	//		jQuery('#closecookie').click(function() {jQuery('#cookie').fadeOut("fast");});
	//		document.cookie="visited=yes; expires=Thu, 31 Dec 2020 23:59:59 UTC; path=/";
	//	}
//	}
        














