  <style type="text/css">
	/* Hide The Table Rows When Scroll */
	.form-group {
		position: inherit;
	}

    .visible {
	visibility: visible;
    }
    .invisible {
	visibility: hidden;
    }

    .element {
	@include invisible(visible);
    }
    .element {
	@include invisible(hidden);
    }

    #table_import_bom thead,
    tfoot {
        position: sticky;
        top: 0;
        bottom: 0;
        z-index: 10;
        background-color: rgba(234, 242, 255, 1.0);

    }
    #table_bom thead,
    tfoot {
        position: sticky;
        top: 0;
        bottom: 0;
        z-index: 10;
        background-color: rgba(234, 242, 255, 1.0);
    }
</style>


    <!-- ===============================================-->
    <!--    Opening Costs Content-->
    <!-- ===============================================-->		
	<div class="container">
        <header>
            <div class="row">
                <div class="column">
                    <h2>Stage 5 - Revenue Streams</h2>
                </div>
            </div>
        </header>
        <nav style="--falcon-breadcrumb-divider: '»';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>main-dashboard">Home</a></li>
                <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>user/companysetup">Company Setup</a></li>
                <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>planning/planning-setup">Business Narrative</a></li>
                <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>opening-cost">Opening Cost</a></li>
                <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>operating-cost">Opening Cost</a></li>
                <li class="breadcrumb-item active" aria-current="page">Revenue Streams</li>
            </ol>
        </nav>

  <div class="row pt-3">
        <div class="col-12">
            <div class="card pt-3 mb-3">

                <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->
                    <div class="card-header position-relative">
                        <div class="row">
                        <div class="col-lg-6">
           
                                <!--<p class="mt-2 text-primary">
                                    How do your intend to generate revenue? depending on the type of your business, you can use one or all of the three options to projects 
                                    you sales projections fr the next three years.            
                                </p> -->           
                       
                            </div><!--/.col-->	
                            <div class="col-lg-6">
                           
                               
                 
                                <!-- Button trigger left and right navigation -->   
                                <a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>analysis"> <i class="fas fa-arrow-right"></i>Stage 6</a> 
                                <a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>operating-cost"> <i class="fas fa-arrow-left"></i> Stage 4</a>  

                                <!-- Button trigger sample modal -->     
                                <button class="btn btn-falcon-info float-end me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#needhelp_view" id="btninfo_s5" ><i class="fas fa-info"></i></button>  
                                <button class="btn btn-falcon-info float-end  me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#revenueModal"> <i class="fas fa-comment-dots"></i></button>                
                            </div><!--/.col-->	
                        </div><!--/.row-->	



                    </div><!--/.card body-->	
                </div><!--/.card-->	   

                    <!-- ===============================================-->
                        <!--   Wizard Revenue  Content Details-->
                    <!-- ===============================================-->      

                    <div class="card theme-wizard mb-5">
                        <div class="card-header bg-light pt-3 pb-2">
                            <ul class="nav justify-content-between nav-wizard">
                                <li class="nav-item"><a class="nav-link active fw-semi-bold" href="#bootstrap-wizard-tab1" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-chart-bar"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Revenue Streams</span></a></li>

                                <li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab2" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-thumbs-up"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Done</span></a></li>
                            </ul><!--/.ul-->	
                        </div><!--/.card header-->	
                        <div class="card-body py-4">                       
                            <?php echo view('revenue_streams/products_revenue.php'); ?>                      
                        </div><!--/.card body-->	  
                     <?php echo view('needhelp_view'); ?>
                </div>   


                <!-- Vertically centered scrollable modal -->
                <div class="modal fade" id="revenueModal" data-bs-backdrop="static"tabindex="-1" role="dialog" aria-labelledby="revenueModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen" role="document">
                        <div class="modal-content border-0">						
                            <!--<div class="modal-header bg-card-gradient light">
                                <h5 class="modal-title text-white" id="exampleModalLabel">Welcome</h5>
                                <button class="btn-close btn-close-white text-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>-->							
                            <div class="modal-body">						
                                <div class="card-body overflow-hidden p-lg-6">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                        <img class="img-fluid" src="<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/4.svg" alt="" />
                                        </div><!--/.col 6-->								
                                        <div class="col-lg-3 ps-lg-4 my-5 text-center text-lg-start">
                                            <h1 class="text-primary">Stage 5: Revenue Streams<?php echo $user->f_name . ' ' . $user->l_name ?> </h1>							
                                            <p class="text-1000 pt-3">
                                                In order to grow your business and make profits you need to generate revenue, this can either be by selling a range 
                                                of products like clothing or shoes, or by providing a competitive service such as carpentry, plumbing, or an accounting service.
                                                
                                            </p>
                                            <p class="text-1000">
                                                What ever you revenue stream is, you need to evaluate the costs, and projected revenue and let AuziPlan take care of the reports for these revenue
                                                streams so you have a clear understanding of what your cost will be, and how much profit you need to make to cover your on going expenses
                                            </p>
                                                                                         
                                            <h5>Product Sales and Costs Assumptions</h5>   
                                            <ol class= "text-1000 ml-3 pt-3">
                                                <li>
                                                    Use the Product Sales and Costs Assumptions feature to project sales by monthly seasonal unit sales , or by countries, regions, or states 
                                                    and evaluate product cost in detail by way of a bill of materials list of cost related to this product
                                                </li>
                                                <li>
                                                    If you already know the cost of the product, then simply answer the questions in the text boxes below and continue, don't forget to save your product                                                                                            
                                                </li>                                                               
                                            </ol>

                                            <figcaption class="blockquote-footer pt-3">    
                                            <h5 class="fs-0 fw-normal pt-2">"plan today to succeed tomorrow!"</h5>
                                            Nuri Bydel Hassim<cite title="Source Title">CEO</cite>
                                        </figcaption><!-- ./figure caption -->           
                                        <h5 class=" text-1000 fs-0 fw-normal pt-5">Let's  evaluate your revenue projections.</h5>         			
                                    <div class="pt-3">
                                    <!--<p class="lead pt-3">Create your business plan.</p>-->
                                    <a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>revenue"> <i class="fas fa-arrow-right"></i> Revenue Streams</a>
                                
                                    </div><!--/.row-->	
                                </div><!--/.card body-->		                        
                            </div><!--/.card body-->  			
                        </div><!--/.modal dialogue-->  			
                    </div><!--/.modal -->  		                                                
                </div><!--/.card-->	
            </div><!--/.col-12-->	
        </div><!--/.row-->	
        

    </div><!--/.row-->	



    </div><!--/.row-->	


    <!-- ===============================================-->
    <!--   Scripts -->
    <!-- ===============================================-->    

    <!-- <script src="<?= site_url(); ?>custom-assets/revenue.js"></script> -->


    <!-- Script -->
    <script>		
        $(document).ready(function() {
            if (document.cookie.indexOf("FooBar=true") == -1) {
                document.cookie = "FooBar=true; max-age=86400"; // 86400: seconds in a day
                $('#revenueModal').modal('show');
            }
        });
    </script>



    <!-- Script -->
    <script>		


    $('#btninfo_s5').on("click", function () {
        $('.tab-active-caret li a.active').removeClass('active');
        $("#crm-s5-tab").addClass("active");
    });

    </script>


                                                               




