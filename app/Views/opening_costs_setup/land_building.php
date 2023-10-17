
        <!-- ===============================================-->
        <!--   Wizard Tab 3  Content Details-->
        <!-- ===============================================-->      

        <div class="tab-pane " role="tabpanel" aria-labelledby="bootstrap-wizard-tab4" id="bootstrap-wizard-tab4">
            <form class="form-validation">
                <div class="card mb-3">                  
                    <div class="card-header">
                        <div class="row">
                            <div class="col-lg-4">
                                <a class="mb-0 d-block d-flex align-items-center" id="land_building_toogle" style='cursor: pointer;'>
                                <span class="circle"><span class="fas fa-plus fa-3x"></span></span><span class="ms-3"></span></a>
                                <a class="mb-0 d-block d-flex align-items-center pt-2" data-bs-toggle="collapse" data-bs-target="#collapseLand" aria-expanded="false"       aria-controls="collapseLand"style='cursor: pointer;'>
                                <span class="circle"><span class="fas fa-arrow-down fa-3x text-success"></span></span><span class="ms-3"></span></a>	
                            </div><!-- /.col-->
                            <div class="col-lg-4">
                                <h5  class="mb-0 d-block d-flex align-items-left">
                                    Land and buildings
                                </h5>
                            </div><!-- /.col-->
                            <div class="col-lg-4">
                                <a class="btn btn-falcon-outline-info float-end text-primary pt-2" data-html="true" data-bs-placement="auto" data-popover-content="#la" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
                            </div><!-- /.col-->
                        </div><!-- /.row-->
                    </div><!-- /.header-->
                    <div class="collapse handlecurrencyformat" id="land_building_collapse">      
                        <div class="p-2">	
                            <div class="hidden d-none" id="la">	
                                <div class="popover-heading"><span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
                                    Help Center
                                </div>
                                    <div class="popover-body">
                                    
                                    <div class="card mb-3">
                                        <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div> <!--/.bg-holder-->
                                            <div class="card-body position-relative">
                                                <div class="row">
                                                    <div class="col-lg-12">									
                                                        <h5>Who are Company Owner?</h5>   
                                                        <p class="mt-1 ps-3 mb-3">
                                                            Land and Building commonly also known as PP&E, some typical items are:                        
                                                        </p>
                                                        <ul>
                                                            <li>office</li>
                                                            <li>land </li>
                                                            <li>warehouse</li>
                                                        </ul>
                                                                            
                                                        <hr style="border-top: 3px solid #0064B2; background: transparent;"> 
                                                        <h5>How do I add a One-Time-Costs?</h5>
                                                        <ol class="mt-1">             
                                                            <li>Click Add Property</li>
                                                            <li>Enter purchase date</li>                                            
                                                            <li>Enter a property description</li>
                                                            <li>Enter purchase price</li>
                                                            <li>Enter land value </li>
                                                            <li>Enter useful live </li>
                                                            <li><a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</a></li>  
                                                        
                                                        </ol>  
                                                        <!--<img src="<?php echo site_url(); ?>custom-assets/images/help_screen_shots/setup/su_2.png" width="100%" height="100%"alt="Startup-1" class="img-responsive">  		
                                                        <a class="btn btn-link ps-0 btn-sm" href="../../documentation/getting-started.html" target="_blank">Get Started<span class="fas fa-chevron-right ms-1 fs--2"></span></a>-->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>		
                                </div>
                            
                            
                                <div id="land_buildings">
                                    <div class="col-lg-12 col-md-12 col-sm-12">

                                        <div class="row p-3">
                                            <div class="col-lg-6 col-md-6 col-sm-12">
                                            <div class="card p-3">        
                                                <div class="form-floating mb-3">
                                                    <input type="text" name="acquisition_date" class="form-control validate dtpickdate" id="acquisition_date" placeholder="Purchase Date" value="<?= date('m/d/Y') ?>">
                                                    <label for="acquisition_date">Purchase Date</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input type="text" name="property_description" class="form-control validate" id="property_description" placeholder="Property Description" value="">
                                                    <label for="property_description">Property Description</label>
                                                </div><!-- ./from floating -->
                                                <div class="form-floating mb-3">
                                                    <input type="text" name="purchase_price" class="form-control currencySign validate" id="purchase_price" placeholder="Purchase Price" value="">
                                                    <label for="purchase_price">Purchase Price</label>
                                                </div><!-- ./from floating -->
                                                </div><!-- ./card -->
                                            </div><!-- ./col -->

                                            <div class="col-lg-6 col-md-6 col-sm-12">
                                                <div class="card p-3">        
                                                    <div class="form-floating mb-3">
                                                        <input type="text" name="land_value" class="form-control currencySign validate" id="land_value" placeholder="Land Value" value="">
                                                        <label for="land_value">Land Value</label>
                                                    </div><!-- ./from floating -->
                                                    <div class="form-floating mb-3">
                                                        <input type="text" name="estimated_useful_life" class="form-control validate" id="estimated_useful_life" placeholder="Useful Life(Years)" value="">
                                                        <label for="estimated_useful_life">Useful Life(Years)</label>
                                                    </div><!-- ./from floating -->

                                                </div><!-- ./card -->
                                            </div><!-- ./col -->
                                        </div><!-- ./row -->
                                    </div><!-- ./col -->
                                </div> <!-- ./land and building -->                                    
                    

                                <div class="row p-3">
                                    <div class="border-dashed-bottom my-3"></div>
                                        <div class="col-12 col-sm-12 offset-0 pt-3">
                                        <input type='hidden' id='landbuilding_id' value='0'>
                                            <button class="btn btn-falcon-danger" type="button" id="btncancellandbuilding" ><i class="far fa-window-close"></i> Cancel</button>
                                            <button class="btn btn-falcon-success float-end" id="btnsavelandbuilding" type="button">Save and Continue</button>
                                        </div><!-- /.col -->
                                    </div><!-- /.border -->
                                </div><!-- /.row -->																
                            

                                <div class="collapse" id="collapseLand">
                                    <div class="border p-card rounded">
                                        <div class="box-body pt-3">
                                            <div class="box-body table_one">
                                                <div class="row" id="one_time_cost_row_add">
                                
                                                        <div class="col-lg-12 col-md-12 col-sm-12" id="one_time_cost_land_buildings" style='margin-top: 16px;'>
                                                            <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
                                                                <div class="table-responsive scrollbar">
                                                                    <div class="fixTableHead">
                                                                    <table id="landbuildingDT" class="table table-striped fs--1 mb-0"  style="width:100%">
                                                                        <thead class="bg-200 text-900">
                                                                            <tr>
                                                                                <th>Property Description</th>
                                                                                <th>Purchase Date</th>
                                                                                <th>Purchase Price</th>
                                                                                <th>Land Value</th>
                                                                                <th>Building (Depreciable basis):</th>
                                                                                <th>GST/VAT</th>
                                                                                <th>Value To Depreciate</th>
                                                                                <th>Useful Life(Year)</th>
                                                                                <th>Monthly</th>
                                                                                <th>Year 1</th>
                                                                                <th>Year 2</th>
                                                                                <th>Year 3</th>
                                                                                <th>Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        </tbody>
                                                                        <tfoot>
                                                                            <tr>
                                                                                <th></th>
                                                                                <th></th>
                                                                                <th></th>
                                                                                <th></th>
                                                                                <th></th>
                                                                                <th></th>
                                                                                <th></th>
                                                                                <th></th>
                                                                                <th></th>
                                                                                <th></th>
                                                                                <th></th>
                                                                                <th></th>
                                                                                <th></th>
                                                                            </tr>
                                                                        </tfoot>
                                                                    </table>    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a class="mb-0 d-block d-flex align-items-center pt-5" data-bs-toggle="collapse" data-bs-target="#collapseLand"aria-controls="collapseLand"style='cursor: pointer;'>
                                                <span class="circle"><span class="fas fa-arrow-up fa-3x text-success" ></span></span><span class="ms-3"></span></a>	
                                            </div>      
                                        </div>
                                        <div class="mb-3" style="display:none">
                                            <label class="form-label" for="bootstrap-wizard-wizard-email">Email*</label>
                                            <input class="form-control" type="email" name="email" placeholder="Email address" pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$" required="required" id="bootstrap-wizard-wizard-email" data-wizard-validate-email="true" />
                                            <div class="invalid-feedback">You must add email</div>
                                        </div>
                                    </div>      
                                </div>
                            </form>
                        </div>
                    </div> <!-- card mb-1 -->

                    <!-- ===============================================-->
                    <!--   Wizard Tab 6  Content Details-->
                    <!-- ===============================================-->       

                    <div class="tab-pane text-center" role="tabpanel" aria-labelledby="bootstrap-wizard-tab5" id="bootstrap-wizard-tab5">
                        <div class="wizard-lottie-wrapper">
                            <div class="lottie wizard-lottie mx-auto my-3"  style="height: 400px;" data-options='{"path":"<?php echo site_url(); ?>template-assets/img/animated-icons/celebration.json"}'></div>
                        </div><!-- /wizard wrapper-->
                                                <h4 class="mb-1 pt-3">Great Stage 3 is done!</h4>
                            <p>Now head over to Stage 4 to create your operating expense budget</p>
                            <a class="btn btn-primary px-5 my-3" href="<?php echo site_url(); ?>opening-cost">Let's check</a>
                            <a class="btn btn-falcon-success px-5 my-3" href="<?php echo site_url(); ?>operating-cost"><i class="fas fa-arrow-right"></i> Stage 4 </a>
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
                            </ul>
                        </div>
                    </div>
                </div>

                


