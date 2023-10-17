

</main>
<!-- ===============================================-->
<!--    End of Main Content-->
<!-- ===============================================-->

<!-- ============================================-->
<!-- <section> begin ============================-->
<section class="bg-dark pt-8 pb-10 light" style="display: none;">
  <div class="container">

    <div class="position-absolute btn-back-to-top bg-dark">
      <a class="text-600" href="#banner" data-bs-offset-top="0" data-scroll-to="#banner">
        <span class="fas fa-chevron-up" data-fa-transform="rotate-45"></span></a>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <h5 class="text-uppercase text-white opacity-85 mb-3">Our Mission</h5>
        <p class="text-600">
          Founded in 2020 AuziPlan aims to provide startups and entrepreneur's with an application to write a custom streamlined business plan in a matter of hours,
          without having to spend endless hours working on complicated spreadsheets.
        <p class="text-600">
          It gives you all the tools you need to create your
          financial reports that can be printed and shared with potential investors, and finacial institutions.
        </p>
        <div class="icon-group mt-4"><a class="icon-item bg-white text-facebook" href="#!"><span class="fab fa-facebook-f"></span></a>
          <a class="icon-item bg-white text-twitter" href="#!"><span class="fab fa-twitter"></span></a>
          <a class="icon-item bg-white text-google-plus" href="#!"><span class="fab fa-google-plus-g"></span></a>
          <a class="icon-item bg-white text-linkedin" href="#!"><span class="fab fa-linkedin-in"></span></a>
          <a class="icon-item bg-white" href="#!"><span class="fab fa-medium-m"></span></a>
        </div>
      </div>

      <div class="col ps-lg-6 ps-xl-8">
        <div class="row mt-5 mt-lg-0">
          <div class="col-6 col-md-3">
            <h5 class="text-uppercase text-white opacity-85 mb-3">Company</h5>
            <ul class="list-unstyled">
              <li class="mb-1"><a class="link-600" href="<?php echo site_url(); ?>about">About</a></li>
              <li class="mb-1"><a class="link-600" href="#!">Contact</a></li>
              <li class="mb-1"><a class="link-600" href="#!">Blog</a></li>
              <li class="mb-1"><a class="link-600" href="<?php echo site_url(); ?>privacy">Legal</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-3">
            <h5 class="text-uppercase text-white opacity-85 mb-3">Product</h5>
            <ul class="list-unstyled">
              <li class="mb-1"><a class="link-600" href="<?php echo site_url(); ?>features">Features</a></li>
              <li class="mb-1"><a class="link-600" href="<?php echo site_url(); ?>pricing">Pricing</a></li>
              <li class="mb-1"><a class="link-600" href="<?php echo site_url(); ?>faq">FAQ</a></li>
            </ul>
          </div>
          <div class="col mt-5 mt-md-0">
            <h5 class="text-uppercase text-white opacity-85 mb-3">From the Blog</h5>
            <ul class="list-unstyled">
              <li>
                <h5 class="fs-0 mb-0"><a class="link-600" href="#!"> Interactive graphs and charts</a></h5>
                <p class="text-600 opacity-50">Jan 15 &bull; 8min read </p>
              </li>
              <li>
                <h5 class="fs-0 mb-0"><a class="link-600" href="#!"> Lifetime free updates</a></h5>
                <p class="text-600 opacity-50">Jan 5 &bull; 3min read &starf;</p>
              </li>
              <li>
                <h5 class="fs-0 mb-0"><a class="link-600" href="#!"> Merry Christmas From us</a></h5>
                <p class="text-600 opacity-50">Dec 25 &bull; 2min read</p>
              </li>
              <li>
                <h5 class="fs-0 mb-0"><a class="link-600" href="#!"> The New AuziPlan Theme</a></h5>
                <p class="text-600 opacity-50">Dec 23 &bull; 10min read </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end of .container-->
</section>

<footer class="footer py-0 bg-dark light">
  <hr class="my-0 text-600 opacity-25" />
  <div class="container py-3">
    <div class="row justify-content-between fs--1">
      <div class="col-12 col-sm-auto text-center">
        <p class="mb-0 text-600">Thank you for using AuziPlan to create your business plan<a href="https://auziplan.com"></a>

        </p>
      </div>
      <div class="col-12 col-sm-auto text-center">
        <p class="mb-0 text-600"><a href="https://auziplan.com"><img src='<?php echo site_url(); ?>custom-assets/images/logo_transparent.png' style="margin-right: 3px; margin-top: 0%; width:20px; height: 20px;"/></span>  AuziPlan v1.0.0</a>
                    &copy; 2005-<?php echo date('Y'); ?>
        </p>

      </div>
    </div>
  </div>
</footer>
<!-- ===============================================-->
<!--    End of Main Content-->
<!-- ===============================================-->
<div class=" offcanvas offcanvas-end settings-panel border-0" id="settings-offcanvas" tabindex="-1" aria-labelledby="settings-offcanvas">
            <div class="offcanvas-header settings-panel-header bg-shape">
              <div class="z-index-1 py-1 light">
                <h5 class="text-white"> <span class="fas fa-bars me-2 fs-0"></span>Main Menu</h5>
                <!--<p class="mb-0 fs--1 text-white opacity-75"> Set your own customized style</p>-->
              </div>
              <button class="btn-close btn-close-white z-index-1 mt-0" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body scrollbar-overlay px-card" id="themeController">
              <!--<h5 class="fs-0">Menu</h5>-->
              <!--<p class="fs--1">Choose the perfect color mode for your app.</p>-->

              <ul class="navbar-nav ms-auto">
                <?php
                if (!$session->has('user')) { ?>

                  <li class="nav-item">
                    <a class="nav-link" href="<?php echo site_url() . 'logout' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed"></span> Home</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="<?php echo site_url() . 'about' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed"></span> About</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="<?php echo site_url() . 'gettingstarted' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed"></span> Getting Started</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="<?php echo site_url() . 'pricing' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed"></span> Pricing</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="<?php echo site_url() . 'features' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed"></span> features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="<?php echo site_url() . 'privacy' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed"></span> Privacy</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="<?php echo site_url() . 'faq' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed"></span> FAQ</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="<?php echo site_url() . 'login' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed"></span> Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="<?php echo site_url() . 'register' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed"></span> Register</a>
                  </li>
                <?php } else { ?>
                  <li class="nav-item"><a class="nav-link" href="<?php echo site_url() . 'logout' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed"></span></span> Logout</a></li>
                <?php } ?>
              </ul>
              <div class="text-center mt-5"><img class="mb-4" src="<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/47.png" alt="" width="120" />
                <h5>Like What You See?</h5>
                <p class="fs--1">Get AuziPlan now and create your Business Plan.</p><a class="mb-3 btn btn-primary" href="<?php echo site_url() ?>register" target="_blank">Purchase</a>
              </div>
            </div>
      </div>
      <a class="card setting-toggle" href="#settings-offcanvas" data-bs-toggle="offcanvas">
        <div class="card-body d-flex align-items-center py-md-2 px-2 py-1">
          <div class="bg-soft-primary position-relative rounded-start" style="height:30px;width:28px">
            <div class="settings-popover"><span class="ripple"><span class="fa-spin position-absolute all-0 d-flex flex-center"><span class="icon-spin position-absolute all-0 d-flex flex-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.7369 12.3941L19.1989 12.1065C18.4459 11.7041 18.0843 10.8487 18.0843 9.99495C18.0843 9.14118 18.4459 8.28582 19.1989 7.88336L19.7369 7.59581C19.9474 7.47484 20.0316 7.23291 19.9474 7.03131C19.4842 5.57973 18.6843 4.28943 17.6738 3.20075C17.5053 3.03946 17.2527 2.99914 17.0422 3.12011L16.393 3.46714C15.6883 3.84379 14.8377 3.74529 14.1476 3.3427C14.0988 3.31422 14.0496 3.28621 14.0002 3.25868C13.2568 2.84453 12.7055 2.10629 12.7055 1.25525V0.70081C12.7055 0.499202 12.5371 0.297594 12.2845 0.257272C10.7266 -0.105622 9.16879 -0.0653007 7.69516 0.257272C7.44254 0.297594 7.31623 0.499202 7.31623 0.70081V1.23474C7.31623 2.09575 6.74999 2.8362 5.99824 3.25599C5.95774 3.27861 5.91747 3.30159 5.87744 3.32493C5.15643 3.74527 4.26453 3.85902 3.53534 3.45302L2.93743 3.12011C2.72691 2.99914 2.47429 3.03946 2.30587 3.20075C1.29538 4.28943 0.495411 5.57973 0.0322686 7.03131C-0.051939 7.23291 0.0322686 7.47484 0.242788 7.59581L0.784376 7.8853C1.54166 8.29007 1.92694 9.13627 1.92694 9.99495C1.92694 10.8536 1.54166 11.6998 0.784375 12.1046L0.242788 12.3941C0.0322686 12.515 -0.051939 12.757 0.0322686 12.9586C0.495411 14.4102 1.29538 15.7005 2.30587 16.7891C2.47429 16.9504 2.72691 16.9907 2.93743 16.8698L3.58669 16.5227C4.29133 16.1461 5.14131 16.2457 5.8331 16.6455C5.88713 16.6767 5.94159 16.7074 5.99648 16.7375C6.75162 17.1511 7.31623 17.8941 7.31623 18.7552V19.2891C7.31623 19.4425 7.41373 19.5959 7.55309 19.696C7.64066 19.7589 7.74815 19.7843 7.85406 19.8046C9.35884 20.0925 10.8609 20.0456 12.2845 19.7729C12.5371 19.6923 12.7055 19.4907 12.7055 19.2891V18.7346C12.7055 17.8836 13.2568 17.1454 14.0002 16.7312C14.0496 16.7037 14.0988 16.6757 14.1476 16.6472C14.8377 16.2446 15.6883 16.1461 16.393 16.5227L17.0422 16.8698C17.2527 16.9907 17.5053 16.9504 17.6738 16.7891C18.7264 15.7005 19.4842 14.4102 19.9895 12.9586C20.0316 12.757 19.9474 12.515 19.7369 12.3941ZM10.0109 13.2005C8.1162 13.2005 6.64257 11.7893 6.64257 9.97478C6.64257 8.20063 8.1162 6.74905 10.0109 6.74905C11.8634 6.74905 13.3792 8.20063 13.3792 9.97478C13.3792 11.7893 11.8634 13.2005 10.0109 13.2005Z" fill="#2A7BE4"></path>
                    </svg></span></span></span></div>
          </div>
          <small class="text-uppercase text-primary fw-bold bg-soft-primary py-2 pe-2 ps-1 rounded-end">Main Menu</small>
        </div>
      </a>

      <!-- ===============================================-->
      <!--    JavaScripts-->
      <!-- ===============================================-->
      <script src="<?php echo site_url(); ?>template-vendors/popper/popper.min.js"></script>
      <script src="<?php echo site_url(); ?>template-vendors/bootstrap/bootstrap.min.js"></script>
      <script src="<?php echo site_url(); ?>template-vendors/anchorjs/anchor.min.js"></script>
      <script src="<?php echo site_url(); ?>template-vendors/is/is.min.js"></script>
      <script src="<?php echo site_url(); ?>template-vendors/swiper/swiper-bundle.min.js"> </script>
      <script src="<?php echo site_url(); ?>template-vendors/typed.js/typed.js"></script>
      <script src="<?php echo site_url(); ?>template-vendors/fontawesome/all.min.js"></script>
      <script src="<?php echo site_url(); ?>template-vendors/lodash/lodash.min.js"></script>
      <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
      <script src="<?php echo site_url(); ?>template-vendors/list.js/list.min.js"></script>
      <script src="<?php echo site_url(); ?>template-assets/js/theme.js"></script>
      <script src="<?php echo site_url(); ?>custom-assets/sweetalerts/sweetalert2.all.min.js"></script>
      <script src="<?php echo site_url(); ?>custom-assets/sweetalerts/sweetalert2.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
      <script src="https://fc.net.pk/demo/wmp/custom/js/definations.js?version=4214"></script>
      <script src="https://fc.net.pk/demo/wmp/custom/js/global.js?version=1963"></script>
      <?php if (isset($controller)) { ?>
        <script src="https://fc.net.pk/demo/wmp/custom/js/<?php echo $controller; ?>.js?version=1248"></script>
        <?php } ?>
      </body>

      </html>