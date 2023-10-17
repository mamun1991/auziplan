
    <!-- ===============================================-->
    <!--    Opening Costs Content-->
    <!-- ===============================================-->		


	<div class="container">
        <header>
            <div class="row mb-3">
                <div class="column">
                <h3> Stage 3 - Opening Costs</h3>
            </div>
        </div>
        </header>
        <nav style="--falcon-breadcrumb-divider: '/';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>main-dashboard">Dashboard</a></li>
                <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>user/companysetup">Company Setup</a></li>
                <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>planning/planning-setup">Business Narrative</a></li>
                <li class="breadcrumb-item active" aria-current="page">Opening Cost</li>
            </ol>
        </nav>
    
        <div class="row pt-3">
            <div class="col-12">
                <div class="card pt-3 mb-3">       		
					<div class="card-body position-relative">
						<div class="row">
							<div class="col-lg-12">

                                <!--<p class="mt-2 text-primary">                            
                                    When starting any new business there wil be startup costs, In this stage you will create a list of your one-time start up costs, office equipment, and any warehouse or office building purchases.
                                </p>  -->              
                                <!--Button trigger left and right navigation -->     
                                <a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>operating-cost"><i class="fas fa-arrow-right"></i> Stage 4 </a>
                                <a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>planning/planning-setup"> <i class="fas fa-arrow-left"></i>Stage 2</a>
                                <!--Button trigger sample modal -->     
                                <button class="btn btn-falcon-info float-end me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#needhelp_view" id="btninfo_s3"> <i class="fas fa-info"></i></button>    
                                <button class="btn btn-falcon-info float-end  me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#openingCostsModal"> <i class="fas fa-comment-dots"></i></button>    
							</div><!--/.col-->	
						</div><!--/.row-->	
					</div><!--/.card body-->	
				</div><!--/.card-->

				<div class="col-lg-12 col-xl-12 col-xxl-12 h-100">
                    <div class="card theme-wizard mb-5">
                        <div class="card-header bg-light pt-3 pb-2">           
                            <ul class="nav justify-content-between nav-wizard">        
                                <li class="nav-item"><a class="nav-link active fw-semi-bold" href="#bootstrap-wizard-tab1" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-money-bill-alt"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Prepaid Expenses</span></a></li>
                                <li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab2" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-laptop"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Plant and Equipment</span></a></li>
                                <li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab3" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-car"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Motor Vehicle</span></a></li>
                                <li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab4" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-building"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Land and Building</span></a></li>
                                <li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab5" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-thumbs-up"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Done</span></a></li>
                            </ul>
                        </div> 
                        <div class="card-body py-4">                     
                            <?php echo view('opening_costs_setup/onetime_costs.php'); ?>
                            <?php echo view('opening_costs_setup/plant_equipment.php'); ?>
                            <?php echo view('opening_costs_setup/motor_vehicle.php'); ?>  
                            <?php echo view('opening_costs_setup/land_building.php'); ?>  
                        </div>   

                        <?php echo view('needhelp_view'); ?>
                    </div>   






                            <!-- ===============================================-->
                            <!--   Onload Modal Content Details-->
                            <!-- ===============================================-->

                            <!-- Vertically centered scrollable modal -->
                            <div>
                                <div class="modal fade" id="openingCostsModal" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="openingCostsModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-fullscreen" role="document">
                                        <div class="modal-content border-0">
                                            <div class="modal-header bg-card-gradient light">
                                                <h5 class="modal-title text-white" id="exampleModalLabel"></h5>
                                                <button class="btn-close btn-close-white text-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row min-vh-100 bg-100">
                                                    <div class="col-6 d-none d-lg-block position-relative">
                                                        <div class="bg-holder" style="background-image:url(<?php echo site_url(); ?>template-assets/img/illustrations/2.svg);"></div><!--/.bg-holder-->
                                                    </div>
                                                        <div class="col-sm-10 col-md-6 px-sm-0 align-self-center mx-auto py-5">
                                                            <div class="row justify-content-center g-0">
                                                                <div class="col-lg-9 col-xl-8 col-xxl-6">

                                                                <div class="card-body p-4">
                                                                    <div class="row flex-between-center">
                                                                    <!-- ===============================================-->
                                                                    <!--      Current Side Bar Log  Content ( We will add an image fro the logo once its ready-->
                                                                    <!-- ===============================================-->
                                                                    <h5 class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:left">
                                                                        <span><img src="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-60x60.png" alt="Logo" style="margin-right: 0px; margin-top: -5%; width:80px; height: 80px;  float: left;" /></span>
                                                                        <span style="color:rgba(0, 0, 0, 1.0);font-size:40px;font-weight:100; margin-right: 0px; margin-top: 40px;float: center;">Auzi</span>
                                                                        <span style="color:rgba(13, 110, 252, 1.0);font-size:40px; margin-top: 40px;float: center;">Plan</span>
                                                                    </h5>	
                                                                    <!--<h1 class="text-primary">Welcome! <?php echo $user->f_name . ' ' . $user->l_name ?> </h1>-->
                                                                    <h4 class="text-primary pt-3">Opening Costs</h4>							
                                                                            
                                                                    <p class="text-1000 pt-3">
                                                                        When starting a new business venture there are always going to be opening costs commonly known as "Startup Costs" that are incurred during the process of creating a new business. All businesses are different, so they require different types of startup costs. Online businesses have different needs than mechanics; coffee shops have different requirements than fashion retailers or shoe stores.
                                                                    </p>
                                                                    <div class=" ml-1 pt-3">
                                                                        <h4 class="text-primary pt-1">Key Startup Expenses</h4>	
                                                                        <ul class="text-1000">
                                                                            <li>business registration , accounting and legal fees</li>
                                                                            <li>rent security deposits, business stationary</li>
                                                                            <li>intellectual property, patents and licenses </li>
                                                                        </ul>
                                                                    </div>
                                                                    <p class="text-1000 pt-3">
                                                                       In Stage 3 you will make a list of your projected opening costs and let AuziPlan take care of the reports for these costs so you have a clear understanding of what your up for before you spend money starting your business.
                                                                    </p> 
                                                                    <figcaption class="blockquote-footer pt-3">    
                                                                        <h5 class="fs-0 fw-normal pt-2">"plan today to succeed tomorrow!"</h5>
                                                                        Nuri Bydel <cite title="Source Title">CEO</cite>
                                                                    </figcaption><!-- ./figure caption --> 
                                                                    <h5 class="text-1000 fs-0 fw-normal pt-5">Let's make and list your opening costs.</h5>         			
                                                                <div class="pt-3"><!--/.col 6-->
                                                                <!--<p class="lead pt-3">Create your business plan.</p>-->
                                                                <a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>opening-cost"> <i class="fas fa-arrow-right"></i> Opening Costs</a>
                                                            </div><!--/.row-->	
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                       
                                        <!--/.card body-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


            </div><!--/.col-12-->	
        </div><!--/.row-->	
    </div><!--/.container-->	
        
        <!-- Script to load modal once only -->
        <script>		
            $(document).ready(function() {
            if (document.cookie.indexOf("FooBar=true") == -1) {
                document.cookie = "FooBar=true; max-age=86400"; // 86400: seconds in a day
                $('#openingCostsModal').modal('show');
            }
            });
        </script>
