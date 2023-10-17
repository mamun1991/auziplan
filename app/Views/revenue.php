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
        <div class="row mb-3">
            <div class="column">
            <h3> Stage 5 - Revenue Streams</small></h3>
        </div>
    </div>
    </header>
    <nav style="--falcon-breadcrumb-divider: '/';" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>main-dashboard">Dashboard</a></li>
            <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>user/companysetup">Company Setup</a></li>
            <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>planning/planning-setup">Business Narrative</a></li>
            <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>opening-cost">Opening Cost</a></li>
            <li class="breadcrumb-item"><a href="<?php echo site_url(); ?>operating-cost">Opening Cost</a></li>
            <li class="breadcrumb-item active" aria-current="page">Revenue Streams</li>
        </ol>
        <?php echo view('needhelp_view'); ?>
    </nav>

    <div class="row pt-3">
        <div class="col-12">
            <div class="card pt-3 mb-3">       		
                <div class="card-body position-relative">
                    <div class="row">
                        <div class="col-lg-12">
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
   

            <div class="col-lg-12 col-xl-12 col-xxl-12 h-100">
                <div class="card theme-wizard mb-5">
                    <div class="card-header bg-light pt-3 pb-2">  
                        <ul class="nav justify-content-between nav-wizard">
                            <li class="nav-item">
                            <a class="nav-link active fw-semi-bold" href="#bootstrap-wizard-tab1" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-chart-bar "></span></span></span><span class="d-none d-md-block mt-1 fs--1">Revenue Streams</span></a></li>
                            <!--<li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab2" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-user"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Personal</span></a></li>
                            <li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab3" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-dollar-sign"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Billing</span></a></li>-->
                            <li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab2" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-thumbs-up"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Done</span></a></li>
                        </ul>
                    </div>
                    <div class="card-body py-4">       
                        <div class="tab-content">
                            <div class="tab-pane active" role="tabpanel" aria-labelledby="bootstrap-wizard-tab1" id="bootstrap-wizard-tab1">

                                <form novalidate="novalidate"> 
                                    <div class="card mb-3 mb-lg-0">
                                        <div class="card-header">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <a class="mb-0 d-block d-flex align-items-center" href="#experience-form1" data-bs-toggle="collapse" aria-expanded="false" aria-controls="experience-form1"><span class="circle"><span class="fas fa-plus fa-3x text-primary"></span></span><span class="ms-3"></span></a>                            
                                                </div><!-- /.col-->
                                                <div class="col-lg-4">
                                                    <h5  class="mb-0 d-block d-flex align-items-left">
                                                        Revenue Streams
                                                    </h5>
                                                </div><!-- /.col-->

                                                <div class="col-lg-4">
                                                    <a class="btn btn-falcon-outline-info float-end text-primary pt-2" data-html="true" data-bs-placement="auto" data-popover-content="#com" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
                                                </div><!-- /.col-->
                                            </div><!-- /.row-->
                                        </div><!-- /.header-->  

                                        <div class="collapse" id="experience-form1">
                                            <div class="p-2">	
                                                <div class="hidden d-none" id="com">
                                                    <div class="popover-heading" style="background-color: rgba(25, 255, 255, 1.0) ;color:rgba(0, 0, 0, 1.0);font-size:16px;font-weight:thin;" >
                                                        <span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
                                                            Help Center
                                                        </div>        
                                                        <div class="popover-body">					
                                                            <div class="card mb-3">
                                                                <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>custom-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->
                                                                    <div class="card-body position-relative">
                                                                        <div class="row">
                                                                            <div class="col-lg-12">

                                                                            <h5 class="mt-1 ps-3 mb-3">Revenue Streams</h5>

                                                                                <p class="mt-1 ps-3 mb-3">
                                                                                    A revenue stream is a source of revenue of a company or organization. In business, a revenue stream is generally made up of either recurring revenue, 
                                                                                    transaction-based revenue, project revenue, or service revenue. In government
                                                                                </p>   
                                                                            

                                                                                <p class="mt-1 ps-3 mb-3">
                                                                                    <b>Take away:</b> You would need to decide what kind of Revenue Stream best fits your company, and customers.
                                                                                        Revenue Streams can be generated in many different ways and you can use a mix of these different ways for your company:
                                                                                </p> 

                                    
                                                                                <hr style="border-top: 3px solid #0064B2; background: transparent;"> 

                                                                                <h5 class="mt-1 ps-3 mb-3">How do I add a revenue stream?</h5>

                                                                                <ol class="pt-1">     
                                                                                    <li>Click the plus button</li>                                                  
                                                                                    <li>Select a industry that best fits your company</li>
                                                                                    <li>Answer the questions in the text boxes</li>
                                                                                    <li>View your results</li>
                                                                                    <li><a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</a></li>												
                                                                                </ol>    
                                                                            </div><!-- /.col-->
                                                                        </div><!-- /.row-->
                                                                    </div><!-- /.card body-->
                                                                </div><!-- /.bg-holder-->																				
                                                            </div><!-- /.card-->
                                                        </div><!-- /.popover-->
                                        
                                                        <form class="row">
                                                                                            
                                                            <div class="container">

                                                                <div class="form-floating mb-3">
                                                                    <select name="purpose" class="form-select" id="revenue_type" aria-label="purpose">
                                                                    <option value="" selected>Select the type of revenue to generate</option>
                                                                        <option value="1">Products Revenue</option>
                                                                        <option value="2">Hourly Rate Revenue</option>
                                                                        <option value="3">Online Store</option>

                                                                        
                                                                        <!--
                                                                        <option value="4">Retail Store</option>
                                                                        <option value="5">Hair Salon</option>
                                                                        <option value="6">Bed and Breakfast</option>
                                                                        <option value="7">coffee Shop</option>
                                                                        <option value="8">Sandwich Shop</option>
                                                                        <option value="9">Website Shop</option>                             
                                                                        <option value="9">Monthly Products and Costs</option>
                                                                        <option value="19">Services Rendered</option>                                                  
                                                                         -->  
                                                                        <?php /*

                                                                        <option value="5">Administration</option>
                                                                        <!--------------------------------------------------------------------
                                                                        [1. Online Revenue is turned on for Basic subscription]
                                                                        ---------------------------------------------------------------------->
                                                                        <option value="6">Accounting</option>
                                                                        <option value="7">Automotive electrical services</option>
                                                                        <option value="8">Architectural services</option>
                                                                        <option value="9">Alarm installation services – fire and security</option>
                                                                        <option value="10">Air conditioning, refrigeration and heating services</option>
                                                                        <option value="11">Building Construction</option>

                                                                        <option value="12">Bottle shops and liquor retailing</option>
                                                                        <option value="13">Bricklaying services</option>

                                                                        <option value="14">Book retailing</option>
                                                                        <option value="15">Bricklaying services</option>
                                                                        <option value="16">Beauty services</option>

                                                                        <option value="17">Barber and men’s hairdressing</option>
                                                                        <option value="18">Bakeries and hot bread shops</option>
                                                                        <option value="19">Beauty services</option>

                                                                        <option value="20">Cabinet makers</option>
                                                                        <option value="21">Cake shops and patisseries</option>
                                                                        <option value="22">Carpet laying services</option>
                                                                        <option value="23">Carpentry service</option>
                                                                        <option value="24">Carpet laying services</option>
                                                                        <option value="25">Cabinet makers</option>

                                                                        <option value="26">Cement rendering</option>
                                                                        <option value="27">Chicken shops</option>
                                                                        <option value="28">Child care services</option>
                                                                        <option value="29">Chiropractic and osteopathic services</option>
                                                                        <option value="30">Cleaning services – building and other industrial</option>
                                                                        <option value="31">Cleaning services – carpet, rug and furniture upholstery</option>
                                                                        <option value="32">Clothing</option>
                                                                        <option value="33">Coffee shops</option>
                                                                        <option value="34">Computer retailing</option>
                                                                        <option value="35">Concreting services</option>
                                                                        <option value="36">Confectionery retailing</option>
                                                                        <option value="37">Courier services</option>
                                                                        <option value="38">Cosmetics</option>
                                                                        <option value="39">Craft shops</option>

                                                                        <option value="40">Delivery services</option>
                                                                        <option value="41">Dental specialists</option>
                                                                        <option value="42">Dental surgeons – general</option>
                                                                        <option value="43">Discount and variety stores</option>
                                                                        <option value="44">Domestic appliance repair and maintenance</option>
                                                                        <option value="45">Driving schools and instructors</option>
                                                                        <option value="46">Delicatessen</option>

                                                                        <option value="47">Electrical and electronic product retailing</option>
                                                                        <option value="48">Electrical services</option>
                                                                        <option value="49">Entertainment media retailing</option>

                                                                        <option value="50">Fence constructional</option>
                                                                        <option value="51">Fish and chips shops</option>
                                                                        <option value="52">Fish and seafood retailing – fresh</option>
                                                                        <option value="53">Floor covering retailing</option>
                                                                        <option value="54">Florists</option>
                                                                        <option value="55">Footwear retailing</option>
                                                                        <option value="56">Fruit and vegetable retailing</option>
                                                                        <option value="57">Fuel retailing</option>
                                                                        <option value="58">Furniture removalists</option>
                                                                        <option value="59">Furniture retailing</option>

                                                                        <option value="60">Graphic Artist</option>
                                                                        <option value="61">Garden supplies retailing</option>
                                                                        <option value="62">Gift stores</option>
                                                                        <option value="63">Glazing services</option>
                                                                        <option value="64">Grocery retailing and convenience stores</option>


                                                                        <option value="65">Hairdressers</option>
                                                                        <option value="66">Hardware and building supplies retailing</option>
                                                                        <option value="67">Health and fitness centres</option>
                                                                        <option value="68">Health food retailing</option>
                                                                        <option value="69">Homewares retailing</option>

                                                                        <option value="70">Ice cream retailing</option>
                                                                        <option value="71">It</option>

                                                                        <option value="72">Kebab shops</option>

                                                                        <option value="73">Landscape construction</option>
                                                                        <option value="74">Laundry and dry-cleaning services</option>
                                                                        <option value="75">Lawn mower retailing</option>
                                                                        <option value="76">Lawn mowing and garden services</option>

                                                                        <option value="77">Machinery and equipment repairs and maintenance</option>
                                                                        <option value="78">Manchester and other textile goods retailing</option>
                                                                        <option value="79">Meat and poultry retailing – fresh</option>
                                                                        <option value="80">Motor vehicle parts and batteries retailing</option>
                                                                        <option value="81">GMotor vehicle retail – new and used</option>
                                                                        <option value="82">Musical instruments retail</option>

                                                                        <option value="83">Newsagents</option>

                                                                        <option value="84">Painting services</option>
                                                                        <option value="85">Panel beating and smash repairs</option>
                                                                        <option value="86">Pest control services</option>
                                                                        <option value="87">Pets and pet supply retailing</option>
                                                                        <option value="88">Pharmacy</option>
                                                                        <option value="89">Physiotherapy services</option>
                                                                        <option value="90">Picture framing retailing</option>
                                                                        <option value="91">Pizza shops – takeaway</option>
                                                                        <option value="92">Plastering and ceiling services</option>
                                                                        <option value="93">Plumbing services</option>
                                                                        <option value="94">Printing</option>
                                                                        <option value="95">Printing support services</option>
                                                                        <option value="96">Pubs, taverns and bars</option>

                                                                        <option value="97">Restaurants</option>
                                                                        <option value="97">Road freight transport services</option>
                                                                        <option value="99">Roofing services, including roof tiling, guttering and metal roofing</option>


                                                                        <option value="100">Sports, camping and fishing retailing</option>
                                                                        <option value="101">Sports and physical recreation instruction</option>
                                                                        <option value="102">Stationery goods retailing</option>

                                                                        <option value="103">Takeaway food services</option>
                                                                        <option value="104">Taxi drivers and operators</option>
                                                                        <option value="105">Tiling services – floor and wall</option>
                                                                        <option value="106">Timber floor sanding</option>
                                                                        <option value="107">Tobacco retailing</option>
                                                                        <option value="108">Towing services</option>
                                                                        <option value="109">Toy and game retailing</option>
                                                                        <option value="110">Tutoring and coaching</option>
                                                                        <option value="111">Tyre retailing</option>

                                                                        <option value="112">Veterinary services</option>
                                                                        <option value="113">Video and other electronic media rental and hiring</option>

                                                                        <option value="114">Watch and jewelry retailing</option>
                                                                        */ ?>
                                                                        </select><!-- /.select-->
                                                                    </div><!-- /.form floating-->


                                                                    </div><!-- /.container-->	


                                                                                                            
                                                                    <!-- ===============================================-->
                                                                <!--  Retail Store Revenue  Content Details-->
                                                                <!-- ===============================================-->      

                                                                <div class="container 1 box" id="retail_store">
                                                                    <?php echo view('revenue_streams/revenue_forms/products_revenue_form.php'); ?>
                                                                </div><!-- ./container -->
                            



                                                                <!-- ===============================================-->
                                                                <!--  Hourly Rate Revenue  Content Details-->
                                                                <!-- ===============================================-->
                                                                        
                                                                <div class="container 2 box" id="hourly_rate_revenue">
                                                                    <?php echo view(
                                                                        'revenue_streams/revenue_forms/hourly_rate_revenue_form', [
                                                                        'cur' => $currency,
                                                                        'loan_amount' => 0
                                                                    ]); ?>      
                                                                </div><!-- ./container -->


                                                                <!-- ===============================================-->
                                                                <!--  Online Revenue   Content Details-->
                                                                <!-- ===============================================-->      

                                                                <div class="container 3 box" id="online_revenue">   
                                                                    <?php echo view('revenue_streams/revenue_forms/online_form.php'); ?>      
                                                                </div><!-- ./container -->





                                                                <!-- ===============================================-->
                                                                <!--  Retail Store Revenue  Content Details-->
                                                                <!-- ===============================================-->      

                                                                <div class="container 4 box" id="retail_store">
                                                                    <?php echo view('revenue_streams/revenue_forms/retail_store_form.php'); ?>
                                                                </div><!-- ./container -->


                                                     



                                                        


                                                                <!-- ===============================================-->
                                                                <!--  hair Salon Revenue  Content Details-->
                                                                <!-- ===============================================-->
                                                                        
                                                                <div class="container 5 box" id="hair_salon">
                                                                    <?php echo view('revenue_streams/revenue_forms/hair_salon_revenue_form'); ?>      
                                                                </div><!-- ./container -->

                                                                <!-- ===============================================-->
                                                                <!--  Bed and Breakfast Revenue  Content Details-->
                                                                <!-- ===============================================-->
                                                                        
                                                                <div class="container 6 box" id="bed_breakfast_revenue">
                                                                    <?php echo view('revenue_streams/revenue_forms/bed_breakfast_revenue_form',
                                                                    [
                                                                        'row' => (object)['max_view' => '']
                                                                    ]
                                                                ); ?>      
                                                                </div><!-- ./container -->


                                                                <!-- ===============================================-->
                                                                <!--  Coffee Shop Revenue  Content Details-->
                                                                <!-- ===============================================-->
                                                                        
                                                                <div class="container 7 box" id="coffee_shop_revenue">
                                                                    <?php echo view('revenue_streams/revenue_forms/coffee_shop_revenue_form.php'); ?>      
                                                                </div><!-- ./container -->


                                                                <!-- ===============================================-->
                                                                <!--  Sandwich Shop Revenue  Content Details-->
                                                                <!-- ===============================================-->
                                                                        
                                                                <div class="container 8 box" id="sandwich_shop_revenue">
                                                                    <?php echo view('revenue_streams/revenue_forms/sandwich_shop_revenue_form.php'); ?>      
                                                                </div><!-- ./container -->


                                                                <!-- ===============================================-->
                                                                <!--  Sandwich Shop Revenue  Content Details-->
                                                                <!-- ===============================================-->
                                                                        
                                                                <div class="container 9 box" id="website_revenue">
                                                                    <?php echo view('revenue_streams/revenue_forms/website_form', [
                                                                        'row' => (object)[
                                                                            'percent_purch' => '',
                                                                            'max_view' => '',
                                                                            'no_days' => '',
                                                                            'no_purchase' => '',
                                                                            'no_reorder' => '',
                                                                            'product_price' => '',
                                                                            'projected_cost' => '',
                                                                            'sales_income' => ''
                                                                        ]
                                                                    ]); ?>      
                                                                </div><!-- ./container -->





                                                                <?php /*
 
                                                                    <!-- ===============================================-->
                                                                    <!--  Service Revenue  Content Details-->
                                                                    <!-- ===============================================-->
                                                                            
                                                                    <div class="container 9 box" id="service_revenue">
                                                                        <?php echo view('revenue_streams/revenue_forms/service_form.php'); ?>      
                                                                    </div><!-- ./container -->

                                                                    <!-- ===============================================-->
                                                                    <!--  Monthly Products Revenue  Content Details-->
                                                                    <!-- ===============================================-->
                                                                            
                                                                    <div class="container 10 box" id="monthly_products_revenue">
                                                                        <?php echo view('revenue_streams/revenue_forms/monthly_products_revenue_form.php'); ?>      
                                                                    </div><!-- ./container -->

                                                                */ ?>
                                                            </form>
                                                            <div class="border-dashed-bottom my-4"></div>
                                                        </div>

                                            
                                                    </div><!-- /.row -->

                                                    <div class="mb-3" style="display:none">
                                                    <label class="form-label" for="bootstrap-wizard-wizard-email">Email*</label>
                                                    <input class="form-control" type="email" name="email" placeholder="Email address" pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$" required="required" id="bootstrap-wizard-wizard-email" data-wizard-validate-email="true" />
                                                    <div class="invalid-feedback">You must add email</div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>

                                        <!-- <div class="tab-pane px-sm-3 px-md-5" role="tabpanel" aria-labelledby="bootstrap-wizard-tab2" id="bootstrap-wizard-tab2">
                                        <form>


                                        </form>
                                        </div>
                                        <div class="tab-pane px-sm-3 px-md-5" role="tabpanel" aria-labelledby="bootstrap-wizard-tab3" id="bootstrap-wizard-tab3">
                                        <form class="form-validation">

                                        </form>
                                        </div>-->


                                            <div class="tab-pane text-center px-sm-3 px-md-2" role="tabpanel" aria-labelledby="bootstrap-wizard-tab4" id="bootstrap-wizard-tab2">


                                            <div class="wizard-lottie-wrapper">
                                    <div class="lottie wizard-lottie mx-auto my-3"  style="height: 400px;" data-options='{"path":"<?php echo site_url(); ?>template-assets/img/animated-icons/celebration.json"}'></div>
                                </div><!-- /wizard wrapper-->
                                                <h4 class="mb-1">Great Stage 5 is done!</h4>
                                                <p>Now head over to the stage 6 and analysis your results</p>
                                                <a class="btn btn-primary px-5 my-3" href="<?php echo site_url(); ?>revenue">Let's check</a>
                                                <a class="btn btn-falcon-success px-5 my-3" href="<?php echo site_url(); ?>analysis"><i class="fas fa-arrow-right"></i> Stage 6 </a>                   
                                            </div>

                                        </div>
                                    </div>
                                    <div class="card-footer bg-light">
                                    <div class="px-sm-3 px-md-5">
                                        <ul class="pager wizard list-inline mb-0">
                                        <li class="previous">
                                            <button class="btn btn-link ps-0" type="button"><span class="fas fa-chevron-left me-2" data-fa-transform="shrink-3"></span>Prev</button>
                                        </li>
                                        <li class="next">
                                            <button class="btn btn-primary px-5 px-sm-6" type="submit">Next<span class="fas fa-chevron-right ms-2" data-fa-transform="shrink-3"> </span></button>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!-- ===============================================-->
                        <!--   Onload Modal Content Details-->
                        <!-- ===============================================-->

                        <!-- Vertically centered scrollable modal -->
                        <div>
                            <div class="modal fade" id="revenueModal" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="revenueModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-fullscreen" role="document">
                                    <div class="modal-content border-0">
                                        <div class="modal-header bg-card-gradient light">
                                            <h5 class="modal-title text-white" id="exampleModalLabel"></h5>
                                            <button class="btn-close btn-close-white text-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row min-vh-100 bg-100">
                                                <div class="col-6 d-none d-lg-block position-relative">
                                                    <div class="bg-holder" style="background-image:url(<?php echo site_url(); ?>template-assets/img/illustrations/4.svg);"></div><!--/.bg-holder-->
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
                                                                        <h4 class="text-primary pt-3">Revenue Streams</h4>			
                                                                            <p class="text-1000 pt-3">
                                                                                In order to grow your business and make profits you need to generate revenue, this can either be by selling a range of products like clothing or shoes, or by providing a competitive service such as carpentry, plumbing, or an accounting service.
                                                                                
                                                                            </p>
                                                                            <div class=" ml-1">
                                                                                <h4 class="text-primary pt-3">Key Revenue Streams</h4>	
                                                                                <ul class="text-1000 pt-3">
                                                                                    <li>revenue by selling products</li>
                                                                                    <li>revenue by providing a service</li>
                                                                                    <li>revenue byt online trading</li>
                                                                                </ul>
                                                                            </div>
                                                                            <p class="text-1000 pt-3">
                                                                                What ever you revenue stream is, you need to evaluate the costs, and projected revenue and let AuziPlan take care of the reports for these revenue
                                                                                streams so you have a clear understanding of what your cost will be, and how much profit you need to make to cover your on going expenses
                                                                            </p>
                                                                            
                                                                            <figcaption class="blockquote-footer pt-3">    
                                                                            <h5 class="fs-0 fw-normal pt-2">"plan today to succeed tomorrow!"</h5>
                                                                            Nuri Bydel Hassim<cite title="Source Title">CEO</cite>
                                                                        </figcaption><!-- ./figure caption -->           
                                                                        <h5 class=" text-1000 fs-0 fw-normal pt-5">Let's  evaluate your revenue projections.</h5>         			
                                                                    <div class="pt-3">
                                                                    <!--<p class="lead pt-3">Create your business plan.</p>-->
                                                                    <a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>revenue"> <i class="fas fa-arrow-right"></i> Revenue Streams</a>
                                                                                            
                                                                    </div>

                                                                </div><!--/.row-->									
                                                                        
                                                            </div><!--/.card body-->  				
                                                        </div><!--/.col-9-->  				
                                                    </div><!--/.row-->				                                   
                                            
                                                </div><!--/.col-10-->  	
                                            </div>
                                        </div>
                                    </div><!--/.modal-content-->  	
                                </div><!--/.modal-dialog-->  	
                            </div><!--/.modal--> 
                        </div><!--/.div-->	
                    </div><!--/.row-->	
                </div><!--/.container-->	



        <!-- ===============================================-->
        <!--   Script to load revenue forms-->
        <!-- ===============================================-->  

        <!-- Script -->
        <script>		
            $(document).ready(function() {
                if (document.cookie.indexOf("FooBar=true") == -1) {
                    document.cookie = "FooBar=true; max-age=86400"; // 86400: seconds in a day
                    $('#revenueModal').modal('show');
                }
            });
        </script>

        <script>
            // jQuery functions to hide and show the div
            $(document).ready(function () {
                $("select").change(function () {
                    $(this).find("option:selected")
                        .each(function () {
                        var optionValue = $(this).attr("value");
                        if (optionValue) {
                            $(".box").not("." + optionValue).hide();
                            $("." + optionValue).show();
                        } else {
                            $(".box").hide();
                        }
                    });
                }).change();
            });
        </script>


        <!-- Script -->
        <script>		


        $('#btninfo_s5').on("click", function () {
            $('.tab-active-caret li a.active').removeClass('active');
            $("#crm-s5-tab").addClass("active");
        });

        </script>


                                                            




