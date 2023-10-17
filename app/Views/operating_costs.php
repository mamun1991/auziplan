
    <!-- ===============================================-->
    <!--    Opening Costs Content-->
    <!-- ===============================================-->		
	<div class="container">
        <header>
            <div class="row mb-3">
                <div class="column">
                    <h3>Stage 4 - Operating Costs</h3>
                </div><!--/.col -->  	
            </div><!--/.row-->  	
        </header><!--/.header-->  	
        
        <nav style="--falcon-breadcrumb-divider: '/';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>main-dashboard">Dashboard</a></li>
                <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>user/companysetup">Company Setup</a></li>
                <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>planning/planning-setup">Business Narrative</a></li>
                <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>opening-cost">Opening Cost</a></li>
                <li class="breadcrumb-item active" aria-current="page">Operating Expenses</li>
            </ol>
        </nav><!--/.nav-->  	

        <div class="row pt-3">
            <div class="col-12">
                <div class="card pt-3 mb-3">       		
					<div class="card-body position-relative">
						<div class="row">
							<div class="col-lg-12">
                    
                                <!-- Button trigger left and right navigation -->    
                                <a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>revenue"><i class="fas fa-arrow-right"></i> Stage 5 </a>
                                <a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>opening-cost"> <i class="fas fa-arrow-left"></i> Stage 3</a>  
                                <!-- Button trigger sample modal -->     
                                <button class="btn btn-falcon-info float-end me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#needhelp_view" id="btninfo_s4" ><i class="fas fa-info"></i></button> 
                                <button class="btn btn-falcon-info float-end  me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#operatingCostsModal"> <i class="fas fa-comment-dots"></i></button>                                         
                            </div><!--/.col-->	
						</div><!--/.row-->	
					</div><!--/.card body-->	
				</div><!--/.card-->	
                <!-- ===============================================-->
                <!--   Wizard Expenses  Content Details-->
                <!-- ===============================================-->     
				<div class="col-lg-12 col-xl-12 col-xxl-12 h-100">
                    <div class="card theme-wizard mb-5">
                        <div class="card-header bg-light pt-3 pb-2">
                            <ul class="nav justify-content-between nav-wizard">
                                <li class="nav-item"><a class="nav-link active fw-semi-bold" href="#bootstrap-wizard-tab1" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-calculator"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Operating Expenses</span></a></li>
                                <li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab2" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-users"></span></span></span><span class="d-none d-md-block mt-1 fs--1">People</span></a></li>
                                <li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab3" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-thumbs-up"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Done</span></a></li>
                            </ul><!--/.ul-->  		
                        </div><!--/.card header-->  		

                        <div class="card-body py-4">  
                            <?php echo view('operating_expenses_setup/monthly_expense_budget.php'); ?>                     
                            <?php echo view('operating_expenses_setup/monthly_payroll_budget.php'); ?>      
                        </div><!--/.card body-->  		

                        <!-- ===============================================-->
                        <!--   Help modal Content Details-->
                        <!-- ===============================================-->      
                        <?php echo view('needhelp_view'); ?>
                    </div>   
                        <!-- ===============================================-->
                        <!--   Onload Modal Content Details-->
                        <!-- ===============================================-->

                        <!-- Vertically centered scrollable modal -->
                        <div>
                            <div class="modal fade" id="operatingCostsModal" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="operatingCostsModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-fullscreen" role="document">
                                    <div class="modal-content border-0">
                                        <div class="modal-header bg-card-gradient light">
                                            <h5 class="modal-title text-white" id="exampleModalLabel"></h5>
                                            <button class="btn-close btn-close-white text-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row min-vh-100 bg-100">
                                                <div class="col-6 d-none d-lg-block position-relative">
                                                    <div class="bg-holder" style="background-image:url(<?php echo site_url(); ?>template-assets/img/illustrations/3.svg);"></div><!--/.bg-holder-->
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
                                                    
                                                                        <h4 class="text-primary pt-3">Operating Costs</h4>							
                                                                            
                                                                        <p class="text-1000 pt-3">
                                                                            Operating expenses are expenses a business incurs in order to keep it running, such as staff wages and office supplies. Operating expenses do not include cost of goods sold (materials, direct labor, manufacturing overhead) or capital expenditures (larger expenses such as buildings or machines).
                                                                            </p>
                                                                            <div class=" ml-1 pt-3">
                                                                            <h4 class="text-primary pt-1">Key Expenses</h4>	
                                                                                <ul class="text-1000">
                                                                                    <li>rent</li>
                                                                                    <li>telephone</li>
                                                                                    <li>electricity, gas</li>
                                                                                    <li>insurances</li>
                                                                                    <li>motor vehicle expenses</li>
                                                                                    <li>payroll expenses</li>
                                                                                </ul><!--/.ul-->
                                                                            </div>
                                                                            <p class="text-1000 pt-3">
                                                                                In Stage 4 you will make a list of your projected monthly operating and payroll expenses, and let AuziPlan take care of the calculations and reports for these expenses
                                                                                so you have a clear understanding of what you will need to pay each month to keep your business trading.
                                                                            </p>
                                                                                                    
                                                                            <figcaption class="blockquote-footer pt-3">    
                                                                                <h5 class="fs-0 fw-normal pt-2">"plan today to succeed tomorrow!"</h5>
                                                                                Nuri Bydel <cite title="Source Title">CEO</cite>
                                                                            </figcaption><!-- ./figure caption -->           
                                                                        <h5 class=" text-1000  fs-0 fw-normal pt-5">Let's evaluate your operating expenses.</h5>      

                                                                        <div class="pt-3">
                                                                            <!--<p class="lead pt-3">Create your business plan.</p>-->
                                                                            <a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>operating-cost"> <i class="fas fa-arrow-right"></i> Operating Costs</a>                                   
                                                                        </div>

                                                                    </div><!--/.row-->									
                                                                            
                                                                </div><!--/.card body-->  				
                                                            </div><!--/.col-9-->  				
                                                        </div><!--/.row-->				                                   
                                             
                                                    </div><!--/.col-10-->  	
                                                </div>
                                            </div><!--/.modal-body-->  	
                                        </div><!--/.modal-content-->  	
                                    </div><!--/.modal-dialog-->  	
                                </div><!--/.modal--> 
                            </div><!--/.div-->	
                        </div><!--/.row-->	
                    </div><!--/.container-->	


                    <!-- Script to load modal once only -->
                    <script>		
                        $(document).ready(function() {
                        if (document.cookie.indexOf("FooBar=true") == -1) {
                            document.cookie = "FooBar=true; max-age=86400"; // 86400: seconds in a day
                            $('#operatingCostsModal').modal('show');
                        }
                        });
                    </script>
