                    <div class="tab-content">
                      
                      <!-- ===============================================-->
                          <!--   Wizard Tab 1  Content Details-->
                      <!-- ===============================================-->      

                      <div class="tab-pane active " role="tabpanel" aria-labelledby="bootstrap-wizard-tab1" id="bootstrap-wizard-tab1">
                          <form novalidate="novalidate">

                          <div class="card mb-3">

                            <div class="card-header">
                                <div class="row">
                                    <div class="col-lg-4">
                                    <a class="mb-0 d-block d-flex align-items-center" id="one_time-form_toogle" style='cursor: pointer;'>
                                        <span class="circle"><span class="fas fa-plus fa-3x"></span></span><span class="ms-3"></span></a>  
                                            <a class="mb-0 d-block d-flex align-items-center pt-2" data-bs-toggle="collapse" data-bs-target="#collapseOneTimeCosts" aria-expanded="false" aria-controls="collapseOneTimeCosts"style='cursor: pointer;'>
                                        <span class="circle"><span class="fas fa-arrow-down fa-3x text-success"></span></span><span class="ms-3"></span></a>		  
                                        </div><!-- /.col-->          
                                        <div class="col-lg-4">
                                        <h5  class="mb-0 d-block d-flex align-items-left">
                                            Prepaid One Time Opening Costs
                                        </h5>
                                    </div><!-- /.col-->
                                    <div class="col-lg-4">
                                        <a class="btn btn-falcon-outline-info float-end text-primary pt-2"  data-html="true" data-bs-placement="auto" data-popover-content="#one" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
                                    </div><!-- /.col-->
                                </div><!-- /.row-->
                            </div><!-- /.header-->




                            <div class="collapse one_time-form_collapse" id="one_time-form">
                                
                            <div class="p-2">	
                                <div class="hidden d-none" id="one">	
                                    <div class="popover-heading"><span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
                                        Help Center
                                    </div>
                                        <div class="popover-body">
                                            
                                        <div class="card mb-3">
                                            <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div> <!--/.bg-holder-->
                                                <div class="card-body position-relative">
                                                    <div class="row">
                                                        <div class="col-lg-12">		   
                                                            <h5>What are prepaid costs?</h5>

                                                            <p class="mt-1 ps-3 mb-3">                                                              
                                                                Prepaid Costs are the initial costs in starting up a new business that are not normally recurring on a monthly basis, some typical items are:
                                                            </p>
                                                      
                                                            <ul>
                                                                <li>computers</li>
                                                                <li>Office furniture</li>
                                                                <li>property and land</li>
                                                            </ul>                                                                   
                                                           
                                                            <hr style="border-top: 3px solid #0064B2; background: transparent;"> 
                                                
                                                            <h5>How do I add a One-Time-Costs?</h5>
                                                       
                                                            <ol class="mt-1">          
                                                                <li>Click Add New Cost</li>
                                                                <li>Select a category from the dropdown list</li>                                            
                                                                <li>Enter a description</li>
                                                                <li>Enter the cost</li>
                                                                <li>Click Save and Continue</li>        
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

                                  
                                        

                                    <div class="container handlecurrencyformat" >
                                        <div class="form-floating mb-3">
                                            <select name="one_time_cost_cat" class="form-select validate" id="one_time_cost_cat" aria-label="oneTimeCost">
                                            <option value=''>Select Category</option>
                                            <!--<option value="Land_Buildings">Land & Buildings</option>
                                            <option value="Plant_Equipment">Plant & Equipment(Computers,Office Furniture)</option>-->
                                            <option value="Security Deposit"> Security Deposit (Rental Bond,Telephone Security Bond)</option>
                                            <option value="Prepaid Costs"> Prepaid Costs (Business Registration, Office Stationary)</option>
                                            <option value="Intellectual Property"> Intellectual Property (Patents, Special Licenses)</option>
                                            </select><!-- ./select -->
                                        </div><!-- ./form floating-->
                                
                                        
                                        <div id="general">
                                            <div class="row">
                                            <div class="col-6">
                                                <div class="form-floating mb-2">
                                                <input type="text" name="one_time_cost_description" class="form-control validate" id="one_time_cost_description" placeholder="Describe this One-Time Cost?" value="">
                                                <label for="one_time_cost_description">Describe this item</label>
                                                </div><!-- ./from floating -->
                                            </div><!-- ./col -->
                                            
                                            <div class="col-6">
                                                <div class="form-floating mb-2">
                                                <input type="text" name="amount_paid" class="form-control currencySign validate" id="amount_paid" placeholder="Amount" value="<?php echo $currency; ?>">
                                                <label for="amount_paid">What is the cost of this item?</label>
                                                </div><!-- ./from floating -->
                                            </div><!-- ./col -->
                                            </div><!-- ./row -->
                                        </div><!-- ./general -->
                                    </div><!-- ./container -->

                                <div class="row p-3">
                                    <div class="border-dashed-bottom my-3"></div>
                                        <div class="col-12 col-sm-12 offset-0 pt-3">
                                            <input type='hidden' id='openingcost_id' value='0'>
                                            <button class="btn btn-falcon-danger" type="button" id="btncancelonetimecost" ><i class="far fa-window-close"></i> Cancel</button>
                                            <button class="btn btn-falcon-success float-end" type="button" id="btnsaveonetimecost">Save and Continue</button>
                                        </div><!-- /.col -->
                                    </div><!-- /.border -->
                                </div><!-- /.row -->																
                            

                                    <div class="collapse" id="collapseOneTimeCosts">
                                        <div class="border p-card rounded">
                                            <div class="box-body pt-3">
                                                <div class="box-body table_one">
                                                    <div class="row" id="one_time_cost_row_add">                   
                                                        <div class="col-lg-12 col-md-12 col-sm-12" id="one_time_cost" style='margin-top: 16px;'>
                                                            <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
                                                                <div class="table-responsive scrollbar">
                                                                    <div class="fixTableHead">
                                                                    <table id="onetimecostsDT" class="table table-striped fs--1 mb-0" style="width:100%">
                                                                        <thead class="bg-200 text-900">
                                                                            <tr>
                                                                            <th>Prepaid Cost</th>
                                                                            <th>Description</th>
                                                                            <th>Amount Paid</th>
                                                                            <th>Total Cost</th>
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
                                                                        </tr>
                                                                    </tfoot>
                                                                </table>  
                                                            </div>
                                                        </div>
                                                    </div> <!-- card mb-1 --> 
                                                </div>
                                            </div>
                                            <a class="mb-0 d-block d-flex align-items-center pt-5" data-bs-toggle="collapse" data-bs-target="#collapseOneTimeCosts"aria-controls="collapseOneTimeCosts"style='cursor: pointer;'>
                                            <span class="circle"><span class="fas fa-arrow-up fa-3x text-success" ></span></span><span class="ms-3"></span></a>		                                    
                                        </div>      
                                    </div>
                                </div>      
                            </div>
                        </form>        
                    </div>
                </div>