 <style>
   .navbar {
     background-color: rgba(13, 110, 253, 1.0);
   }

   .navbar-link a:hover {
     background-color: rgba(13, 110, 253, 1.0);
   }
 </style>

 <body>
   <!-- ============================================-->
   <!-- <section> begin ============================-->
   <section class="py-0 overflow-hidden light" id="banner"></section>

   <!-- ===============================================-->
   <!--    Main Content-->
   <!-- ===============================================-->
   <main class="main" id="top">


     <nav class="navbar navbar-standard navbar-expand-lg fixed-top navbar-light" data-navbar-darken-on-scroll="data-navbar-darken-on-scroll">

       <div class="bg-holder overlay" style="background-image: linear-gradient(rgba(10, 23, 40, 1.90), rgba(10, 23, 40, 0.90)), url()"></div>

       <div class="container">
         <!-- ===============================================-->
         <!--      Current Side Bar Log  Content ( We will add an image fro the logo once its ready-->
         <!-- ===============================================-->
         <h5 class=" mt-3" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:center">
           <span><img src="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-60x60.png" alt="Logo" style="margin-right: 3px; margin-top: -10%; width:80px; height: 80px;  float: center;" /></span>
           <span style="color:rgba(255, 255, 255, 1.0);font-size:40px;font-weight:100; margin-right: 0px; margin-top: 40px;float: center;">Auzi</span>
           <span style="color:rgba(13, 110, 252, 1.0);font-size:40px; margin-top: 40px;float: center;">Plan</span>
         </h5>
         <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

         <div class="collapse navbar-collapse scrollbar" id="navbarStandard">
           <ul class="navbar-nav ms-auto">
             <?php
              if (!$session->has('user')) { ?>
               <li class="nav-item dropdown" style="display: none;">
                 <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="apps">App</a>
                 <div class="dropdown-menu dropdown-menu-card border-0 mt-0" aria-labelledby="apps">
                   <div class="card navbar-card-app shadow-none dark__bg-1000 mt-5">
                     <div class="card-body scrollbar max-h-dropdown">

                       <img class="img-dropdown" src="<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/5.png" width="60%" alt="" />
                       <div class="row">
                         <div class="col-6 col-md-5">
                           <div class="nav flex-column">

                             <h3>Main Menu</h3>

                             <a class="dropdown-item" href="<?php echo site_url(); ?>about" role="button" aria-expanded="false" style="display: none;" >
                               <div class="d-flex align-items-center"><span class="nav-link-text ps-3">About</span>
                               </div>
                             </a>

                             <a class="dropdown-item" href="<?php echo site_url(); ?>gettingstarted" role="button" aria-expanded="false" style="display: none;">
                               <div class="d-flex align-items-center"><span class="nav-link-text ps-3"> Getting Started</span>
                               </div>
                             </a>

                             <a class="dropdown-item" href="<?php echo site_url(); ?>pricing" role="button" aria-expanded="false" style="display: none;">
                               <div class="d-flex align-items-center"><span class="nav-link-text ps-3">Pricing</span>
                               </div>
                             </a>

                             <a class="dropdown-item" href="<?php echo site_url(); ?>features" role="button" aria-expanded="false" style="display: none;">
                               <div class="d-flex align-items-center"><span class="nav-link-text ps-3">Features</span>
                               </div>
                             </a>
                             <a class="dropdown-item" href="<?php echo site_url(); ?>privacy" role="button" aria-expanded="false" style="display: none;">
                               <div class="d-flex align-items-center"><span class="nav-link-text ps-3">Legal Documents</span>
                               </div>
                             </a>

                             <a class="dropdown-item" href="<?php echo site_url(); ?>faq" role="button" aria-expanded="false" style="display: none;">
                               <div class="d-flex align-items-center"><span class="nav-link-text ps-3">FAQ</span>
                               </div>
                             </a>


                           </div>
                         </div>

                       </div>
                     </div>
                   </div>
                 </div>
               </li>

               <li class="nav-item" style="display: none;"><a class="nav-link" href="<?php echo site_url() . 'logout' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed" style="display: none;"></span> Home</a></li>

               <li class="nav-item"><a class="nav-link" href="<?php echo site_url() . 'login' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed"></span> Login</a></li>

               <li class="nav-item"><a class="nav-link" href="<?php echo site_url() . 'register' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed"></span> Register</a></li>

             <?php } else { ?>
               <li class="nav-item"><a class="nav-link" href="<?php echo site_url() . 'logout' ?>"><span class="d-none d-lg-inline-block" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feed"></span></span> Logout</a></li>
             <?php } ?>


           </ul>
         </div>
       </div>
     </nav>