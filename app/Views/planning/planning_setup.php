<!-- ===============================================-->
<!--    Planning Setup Content-->
<!-- ===============================================-->		

<div class="container">
    <header>
        <div class="row mb-3">
            <div class="column">
                <h3>Stage 2 - Business Narrative</h3>
         </div>
    </div>
    </header>
    <nav style="--falcon-breadcrumb-divider: '/ ';" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>main-dashboard/min-dashboard">Dashboard</a></li>
            <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>user/companysetup">Company Setup</a></li>
            <li class="breadcrumb-item active" aria-current="page">Business Narrative</li>
        </ol>
    </nav>

	<div class="row pt-3">
		<div class="col-12">
			<div class="card pt-3 mb-3">       		
					<div class="card-body position-relative">
						<div class="row">
							<div class="col-lg-12">
                  
                                <!--<p class="mt-2 text-primary">                            
                                    So you have a great idea for a new business venture right, let's write down your business ideas, goals, and objectives.  
                                </p>-->                  
                                <!--Button trigger left and right navigation -->     
                                <a class="btn btn-falcon-success  float-end  me-1 mb-1" href="<?php echo site_url(); ?>opening-cost"><i class="fas fa-arrow-right"></i> Stage 3</a>
                                <a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>user/companysetup"> <i class="fas fa-arrow-left"></i> Stage 1</a>              
                                <!-- Button trigger modal -->     
                                <button class="btn btn-falcon-info float-end  me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#needhelp_view" id="btninfo_s2"> <i class="fas fa-info"></i></button>    
                                <button class="btn btn-falcon-info float-end  me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#WelcomePlanningModal"> <i class="fas fa-comment-dots"></i></button>  	
                            </div><!--/.col-->	
						</div><!--/.row-->	
					</div><!--/.card body-->	
				</div><!--/.card-->	

            <!-- ===============================================-->
                <!--   Wizard Revenue  Content Details-->
            <!-- ===============================================-->      
		
            <div class="col-lg-12 col-xl-12 col-xxl-12 h-100">
                <div class="card theme-wizard mb-5">
                    <div class="card-header bg-light pt-3 pb-2">
                        <ul class="nav justify-content-between nav-wizard">
                            <li class="nav-item"><a class="nav-link active fw-semi-bold" href="#bootstrap-wizard-tab1" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-edit"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Narrative</span></a></li>
                            <li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab2" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-thumbs-up"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Done</span></a></li>                
                        </ul>
                    </div>
                        <div class="card-body py-4">
                            <div class="tab-content">

                                <!-- ================================================-->
                                <!--   Wizard Products Revenue  Tab 1 Content Details-->
                                <!-- ================================================-->   

                                    <div class="tab-pane active " role="tabpanel" aria-labelledby="bootstrap-wizard-tab1" id="bootstrap-wizard-tab1">
                                        <form novalidate="novalidate">                                          
                                            <div class="card mb-0 mb-lg-0">
                                                                        
                                                <div class="card-header">
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                        <a class="mb-0 d-block d-flex align-items-center narrative-toogle-click" style="cursor: pointer;">
                                                        <span class="circle"><span class="fas fa-arrow-down fa-3x text-success"></span></span><span class="ms-3"></span></a><span></a>
                                                        </div><!-- /.col-->
                                                        <div class="col-lg-6">
                                                            <a class="btn btn-falcon-outline-info float-end text-primary pt-2" data-html="true" data-bs-placement="auto" data-popover-content="#nar" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
                                                        </div><!-- /.col-->
                                                    </div><!-- /.row-->
                                                </div><!-- /.header-->
                                            <div class="collapse" id="narrative-toogle">
                                                <div class="p-2">	
                                                    <div class="hidden d-none" id="nar">
                                                        <div class="popover-heading" style="background-color: rgba(25, 255, 255, 1.0) ;color:rgba(0, 0, 0, 1.0);font-size:16px;font-weight:thin;" >
                                                            <span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
                                                                Help Center
                                                            </div>
                                                            <div class="popover-body">					
                                                                <div class="card mb-3">
                                                                    <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>custom-assets/img/icons/spot-illustrations/corner-4.png);"></div> <!--/.bg-holder-->
                                                                        <div class="card-body position-relative">
                                                                            <div class="row">
                                                                                <div class="col-lg-12">
                                                                                    <h5>What is a Business Narrative?</h5>

                                                                                        <p class="mt-1 ps-3 mb-3">	
                                                                                            So you have an idea about a business venture that you think could work to serve your community and prove financially successful. 
                                                                                            You’ve seen a clear gap in some products or as service that you can provide, and now you want to move forward and get a plan out to investors. 
                                                                                            The best way to begin with that is to write down your business narrative.                                                
                                                                                        </p>

                                                                                        <p class="mt-1 ps-3 mb-3">	   
                                                                                            Writing a business narrative is the first step in formulating those random thoughts into a story that you can discuss with  prospective investors and employees. 
                                                                                            It’s also a great way to get past the anxiety of looking at detailed rows and columns of numbers that really won’t make sense until you formulate the genesis of your business.               
                                                                                        </p>    

                                                                                        <hr style="border-top: 3px solid #0064B2; background: transparent;"> 

                                                                                        <h5>Key points to include in your Business Narrative</h5>

                                                                                            <ol class="pt-3">     
                                                                                                <li><b>Executive Summary</b></li>
                                                                                                <li><b>Mission Statement</b></li>
                                                                                                <li><b>Vision Statement</b></li>
                                                                                                <li><b>Business Description</b></li>
                                                                                                <li><b>Company Ownership</b></li>
                                                                                                <li><b>Long Term Goals and Objectives</b></li>
                                                                                                <li><b>Property Plan and Equipment (PP&E)</b></li>
                                                                                                <li><b>Products and Services</b></li>
                                                                                                <li><b>Market Target</b></li>
                                                                                                <li><b>Potential Customers</b></li>
                                                                                                <li><b>S.W.O.T.</b></li>
                                                                                                <li><b>Location, Location, Location</b></li>
                                                                                               
                                                                                            </ol>
                                                                                            <p class="mt-1 ps-3 mb-3">	   
                                                                                                       
                                                                                            
                                                                                                  When your satisfied with you narrative click 
                                                                                                </p>     
                                                                                                <a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</a> 
                                                                                            <!--<img src="<?php echo site_url(); ?>custom-assets/images/help_screen_shots/setup/su_1.png" width="100%" height="100%"alt="Startup-1" class="img-responsive">  -->

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>																					
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                       
                                                                <!-- <a class="mb-3 d-block d-flex align-items-center" href="#narrative-toogle" data-bs-toggle="collapse" aria-expanded="false" aria-controls="#narrative-toogle"> -->
                                                        
                                                                    
                                                            <div class="container">                                                                    
                                                                <div class="row">

                                                                    <!--==================================== Form Starts  ========================-->
                                                                    <!-- <form id="planning_setup_form" name="planning_setup_form" action="">     -->
                                                                    <div id='frmnarrative'>

                                                                    <!--==================================== Text Areas Starts  ========================-->                                                                      
                                                                    <div class="container p-2">
                                                                        <textarea name='mission' id="mission_area"><?php echo $t_mission; ?></textarea><!-- Text area ends -->
                                                                    </div><!-- /.container-ends -->
                                                                    <!-- Text area limit -->
                                                                        <h6 class=" p-2" id="mission-limit"></h6>
                                                                    </div><!-- /.tab pane-ends -->      

                                                                        <!--<div class="min-vh-50">
                                                                        <textarea class="tinymce d-none" name="content"></textarea>
                                                                        </div>-->
                                                                    </div>    
                                                                    <!-- </form> -->
                                                                    <!-- /.form-ends -->
                                                                            
                                                                </div><!-- ./container -->

                                                                    <div class="row p-3">
                                                                            <div class="border-dashed-bottom my-3"></div>
                                                                            <div class="col-12 col-sm-12 offset-0 pt-3">
                                                                                <button class="btn btn-falcon-danger" type="button" id="btncancelNarrative" ><i class="far fa-window-close"></i> Cancel</button>

                                                                                <!-- Button trigger modal -->    
                                                                                <button class="btn btn-falcon-success float-end btnsaveNarrative  me-1 mb-1" type="button">Save</button>
                                                                                <!-- Button trigger clear plan  -->
                                                                                <button type="button" class="btn btn-falcon-danger float-end me-1 mb-1 "  id="clearNarrative"><i class="fa fa-eraser" aria-hidden="true"></i> Clear All</button>
                                                                                <!-- Button trigger modal -->     
                                                                                <button class="btn btn-falcon-info float-end  me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#samplePlanModal"> <i class="fas fa-file-pdf"></i> Sample Plan</button>    
                                                                            </div>
                                                                        </div>

                                                                    </div>                                                       
                                                                </div>
                                                            </div>
                            
                                                            <div class="mb-3" style="display:none">
                                                                <label class="form-label" for="bootstrap-wizard-wizard-email">Email*</label>
                                                                <input class="form-control" type="email" name="email" placeholder="Email address" pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$" required="required" id="bootstrap-wizard-wizard-email" data-wizard-validate-email="true" />
                                                                <div class="invalid-feedback">You must add email</div>
                                                            </div>
                                        
                                                        </form>
                                                
                                                    <!-- ===============================================-->
                                                    <!--   Wizard Products Revenue  Tab 2 Content Details-->
                                                    <!-- ===============================================-->      

                                                    <div class="tab-pane text-center " role="tabpanel" aria-labelledby="bootstrap-wizard-tab2" id="bootstrap-wizard-tab2">
                                                        <div class="wizard-lottie-wrapper">
                                                            <div class="lottie wizard-lottie mx-auto my-3"  style="height: 400px;" data-options='{"path":"<?php echo site_url(); ?>template-assets/img/animated-icons/celebration.json"}'></div>
                                                        </div><!-- /wizard wrapper-->
                                                            <h4 class="mb-1">Great Stage 2 is done!</h4>
                                                            <p>Now head over to Stage 3 to add you opening startup expenses</p>
                                                            <a class="btn btn-primary px-5 my-3" href="<?php echo site_url(); ?>planning/planning-setup">Let's check</a>
                                                            <a class="btn btn-falcon-success px-5 my-3" href="<?php echo site_url(); ?>opening-cost"><i class="fas fa-arrow-right"></i> Stage 3 </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div class="card-footer bg-light">
                                                        <div class="">    
                                                            <div class="border-dashed-bottom my-3"></div>
                                                                <ul class="pager wizard list-inline mb-0">
                                                                    <li class="previous">
                                                                        <button class="btn btn-link ps-0" type="button"><span class="fas fa-chevron-left me-2" data-fa-transform="shrink-3"></span>Prev</button>
                                                                    </li>
                                                                    <li class="next">
                                                                        <button class="btn btn-primary px-5 px-sm-6" type="submit">Next<span class="fas fa-chevron-right ms-2" data-fa-transform="shrink-3"> </span></button>
                                                                    </li>
                                                                </ul><!-- /.ul -->    
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                <?php echo view('needhelp_view'); ?>
                                            </div>   

                                            <!-- ===============================================-->
                                            <!--   Sample Plan Modal Details-->
                                            <!-- ===============================================-->                        

                                            <div class="modal fade" id="samplePlanModal" tabindex="-1" role="dialog" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                                                    <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->                                                                                                                           
                                                        <div class="modal-content border-0">
                                                                <div class="position-absolute top-0 end-0 mt-3 me-3 z-index-1">														
                                                                    <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>         
                                                                <div class="card mb-3">
                                                                    <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);">
                                                                </div> <!--/.bg-holder-->                                                                                                          
                                                                    <div class="modal-header">
                                                                        <!--<a href="http://www.squareplans.com/" class="navbar-brand" style="color:rgba(41, 0, 0, 1.0);font-size:30px;font-weight:300; margin-top: 25px;float: left;"><b>Square</b>Plans</a>-->
                                                                        <h3 class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:center">
                                                                            <span><img src="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-60x60.png" alt="Logo" style="margin-right: 3px; margin-top: -10%; width:60px; height: 60px;  float: center;"/></span>
                                                                            <span style="color:rgba(0, 0, 0, 1.0);font-size:40px;font-weight:100; margin-right: 0px; margin-top: 40px;float: center;">Help</span>
                                                                            <span style="color:rgba(13, 110, 252, 1.0);font-size:40px; margin-top: 40px;float: center;">Center</span>
                                                                        </h3>                                                                
                                                                </div><!-- /.modal header -->  
                                                            </div><!-- /.card --> 
                                                        <div class="modal-body pt-0">
                                                            <embed src="<?php echo site_url(); ?>custom-assets/pdf/My_Plan.pdf"frameborder="0" width="100%" height="1100px">
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button class="btn btn-falcon-primary " type="button" data-bs-dismiss="modal">Close</button>                          
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <!-- ===============================================-->
                                            <!--   Onload Modal Content Details-->
                                            <!-- ===============================================-->

                                            <!-- Vertically centered scrollable modal -->
                                            <div>
                                                <div class="modal fade" id="WelcomePlanningModal" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="WelcomePlanningModalLable" aria-hidden="true">
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
                                                                                    <h4 class="text-primary pt-3">Business Narrative</h4>							
                                                                                            
                                                                                    <p class="text-1000 pt-3">
                                                                                        Your Business Narrative is commonly known as the "Pitch" it is an important part of your business plan that conveys the story of who you are, your business ideas, and the products or services that you plan to promote. 
                                                                                    </p>
                                                                                    <p class="text-1000 pt-0">
                                                                                        It should be expressed in a captivating way in order to entice your investors or financial organizations to support and finance you in your new business venture.
                                                                                    </p>
                                                                                    <div class=" ml-1 pt-1">
                                                                                        <h4 class="text-primary pt-3">Key Essentials</h4>	
                                                                                        <ul class="text-1000 pt-3">
                                                                                            <li>executive summary</li>
                                                                                            <li>vision and mission statements</li>
                                                                                            <li>goals and objectives</li>
                                                                                            <li>S.W.O.T. Analysis (Strengths, Weaknesses, Opportunities, and Threats.) </li>
                                                                                        </ul>
                                                                                    </div>       
                                                                                    <figcaption class="blockquote-footer pt-3">    
                                                                                    <h5 class="fs-0 fw-normal pt-2">"plan today to succeed tomorrow!"</h5>
                                                                                        Nuri Bydel Hassim <cite title="Source Title">CEO</cite>
                                                                                    </figcaption><!-- ./figure caption -->           
                                                                                    <h5 class=" text-1000 fs-0 fw-normal pt-5">Let's start writing your Business Narrative .</h5>         			
                                                                                <div class="pt-3">
                                                                                <!--<p class="lead pt-3">Create your business plan.</p>-->
                                                                                <a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>planning/planning-setup"> <i class="fas fa-arrow-right"></i> Business Narrative</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>                                       
                                                        <!--/.card body-->
                                                    </div>
                                                </div>
                                            </div>
                                                               
                                            <!-- ===============================================-->
                                            <!--   Scripts-->
                                            <!-- ===============================================-->     

                                            <!-- Script to load modal once only -->
                                            <script>		
                                                $(document).ready(function() {
                                                if (document.cookie.indexOf("FooBar=true") == -1) {
                                                    document.cookie = "FooBar=true; max-age=86400"; // 86400: seconds in a day
                                                    $('#WelcomePlanningModal').modal('show');
                                                }
                                                });
                                            </script>

                                            