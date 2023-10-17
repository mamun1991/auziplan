<!DOCTYPE html>
<html lang="en-US" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">


  <!-- ===============================================-->
  <!--    Document Title-->
  <!-- ===============================================-->
  <title>AuziPlan | Welcome &amp; Planning is the key your success!</title>


  <!-- ===============================================-->
  <!--    Favicons-->
  <!-- ===============================================-->
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo site_url(); ?>template-assets/img/favicons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?php echo site_url(); ?>template-assets/img/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo site_url(); ?>template-assets/img/favicons/favicon-16x16.png">
  <link rel="shortcut icon" type="image/x-icon" href="<?php echo site_url(); ?>template-assets/img/favicons/favicon.ico">
  <link rel="manifest" href="<?php echo site_url(); ?>template-assets/img/favicons/manifest.json">
  <meta name="msapplication-TileImage" content="<?php echo site_url(); ?>template-assets/img/favicons/mstile-150x150.png">
  <meta name="theme-color" content="#ffffff">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="<?php echo site_url(); ?>template-assets/js/config.js"></script>
  <script src="<?php echo site_url(); ?>template-vendors/overlayscrollbars/OverlayScrollbars.min.js"></script>

  <!-- ===============================================-->
  <!--    Stylesheets-->
  <!-- ===============================================-->
  <link href="<?php echo site_url(); ?>template-vendors/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700%7cPoppins:300,400,500,600,700,800,900&amp;display=swap" rel="stylesheet">
  <link href="<?php echo site_url(); ?>template-vendors/overlayscrollbars/OverlayScrollbars.min.css" rel="stylesheet">
  <link href="<?php echo site_url(); ?>template-assets/css/theme-rtl.min.css" rel="stylesheet" id="style-rtl">
  <link href="<?php echo site_url(); ?>template-assets/css/theme.min.css" rel="stylesheet" id="style-default">
  <link href="<?php echo site_url(); ?>template-assets/css/user-rtl.min.css" rel="stylesheet" id="user-style-rtl">
  <link href="<?php echo site_url(); ?>template-assets/css/user.min.css" rel="stylesheet" id="user-style-default">

  <link href="<?php echo site_url(); ?>custom-assets/css/theme_custom.css" rel="stylesheet" id="user-style-default">

  <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" id="app-style" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="<?php echo site_url(); ?>custom-assets/sweetalerts/sweetalert2.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css" />
  
  <script>
    var isRTL = JSON.parse(localStorage.getItem('isRTL'));
    if (isRTL) {
      var linkDefault = document.getElementById('style-default');
      var userLinkDefault = document.getElementById('user-style-default');
      linkDefault.setAttribute('disabled', true);
      userLinkDefault.setAttribute('disabled', true);
      document.querySelector('html').setAttribute('dir', 'rtl');
    } else {
      var linkRTL = document.getElementById('style-rtl');
      var userLinkRTL = document.getElementById('user-style-rtl');
      linkRTL.setAttribute('disabled', true);
      userLinkRTL.setAttribute('disabled', true);
    }
    window.baseURL = '<?php echo site_url(); ?>'
  </script>
  <script src="http://code.jquery.com/ui/1.11.0/jquery-ui.js"></script>
</head>