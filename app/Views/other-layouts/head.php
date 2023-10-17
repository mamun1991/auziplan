<!DOCTYPE html>
<html lang="en-US" dir="ltr">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- ===============================================-->
    <!--    Document Title-->
    <!-- ===============================================-->
    <title>AuziPlan | Dashboard &amp; Planning is the key to your success!</title>

    <!-- ===============================================-->
    <!--    Favicons-->
    <!-- ===============================================-->

    <link rel="apple-touch-icon" sizes="512x5i2" href="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-512x512.png">
    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo site_url(); ?>custom-assets/img/favicons/android-icon-192x192.png">

    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo site_url(); ?>custom-assets/img/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo site_url(); ?>custom-assets/img/favicons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png">


    <link rel="manifest" href="<?php echo site_url(); ?>custom-assets/img/favicons/manifest.json">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="<?php echo site_url(); ?>custom-assets/img/favicons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">


  
    <!-- ===============================================-->
    <!--    Stylesheets-->
    <!-- ===============================================-->
    <link href="<?php echo site_url(); ?>template-vendors/flatpickr/flatpickr.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700%7cPoppins:300,400,500,600,700,800,900&amp;display=swap" rel="stylesheet">
    <link href="<?php echo site_url(); ?>template-vendors/overlayscrollbars/OverlayScrollbars.min.css" rel="stylesheet">
    <link href="<?php echo site_url(); ?>template-assets/css/theme.css" rel="stylesheet" id="style-default">
    <link href="<?php echo site_url(); ?>template-assets/css/theme-rtl.min.css" rel="stylesheet" id="style-rtl">
    <link href="<?php echo site_url(); ?>template-assets/css/theme.min.css" rel="stylesheet" id="style-default">
    <link href="<?php echo site_url(); ?>template-assets/css/user-rtl.min.css" rel="stylesheet" id="user-style-rtl">
    <link href="<?php echo site_url(); ?>template-assets/css/user.min.css" rel="stylesheet" id="user-style-default">
    <link href="<?php echo site_url(); ?>custom-assets/css/theme_custom.css" rel="stylesheet" id="user-style-default">
    <link href="<?php echo site_url(); ?>template-vendors/dropzone/dropzone.min.css" rel="stylesheet" id="user-style-default">
    <link rel="stylesheet" href="<?php echo site_url(); ?>custom-assets/sweetalerts/sweetalert2.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <link href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="<?php echo site_url(); ?>template-assets/css/jquery.datetimepicker.min.css">


    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css" />



    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="<?php echo site_url(); ?>custom-assets/definations.js"></script>
    <script src="<?php echo site_url(); ?>custom-assets/global.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.4/build/jquery.datetimepicker.full.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>



    <!-- ===============================================-->
    <!--    Chart.js--> 
    <!-- ===============================================-->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>



    <!-- ===============================================-->
    <!--    am Charts--> 
    <!-- ===============================================-->
    <script src="https://www.amcharts.com/lib/4/core.js"></script>
    <script src="https://www.amcharts.com/lib/4/charts.js"></script>

    <!-- Resources -->
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>



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
        </script>
    
        <script src="<?php echo site_url(); ?>template-vendors/list.js/list.min.js"></script>



        <script>
          window.baseURL = '<?php echo site_url(); ?>';
          window.currency_icon = '<?php echo $currency_icon; ?>'
        </script>


        <script src="http://code.jquery.com/ui/1.11.0/jquery-ui.js"></script>
      </head>