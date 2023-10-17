



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
