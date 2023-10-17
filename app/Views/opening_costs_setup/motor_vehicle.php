
        <!-- ===============================================-->
        <!--   Wizard Tab 3  Content Details-->
        <!-- ===============================================-->      

        <div class="tab-pane " role="tabpanel" aria-labelledby="bootstrap-wizard-tab3" id="bootstrap-wizard-tab3">
            <form class="form-validation">                       
                <div class="card mb-3">              
                    <div class="card-header">
                        <div class="row">
                            <div class="col-lg-4">
                            <a class="mb-o d-block d-flex align-items-center" id="motor_vehicle_toogle" style='cursor: pointer;'>
                                <span class="circle"><span class="fas fa-plus fa-3x text-primary"></span></span><span class="ms-3"></span></a>
                                <a class="mb-0 d-block d-flex align-items-center pt-2" data-bs-toggle="collapse" data-bs-target="#collapseMotorVehicle" aria-expanded="false" aria-controls="collapseMotorVehicle"style='cursor: pointer;'>
                                <span class="circle"><span class="fas fa-arrow-down fa-3x text-success"></span></span><span class="ms-3"></span></a>	
                            </div><!-- /.col-->
                            <div class="col-lg-4">
                                <h5  class="mb-0 d-block d-flex align-items-left">
                                    Motor Vehicle Lease
                                </h5>
                            </div><!-- /.col-->
                            <div class="col-lg-4">
                                <a class="btn btn-falcon-outline-info float-end text-primary pt-2"  data-html="true" data-bs-placement="auto" data-popover-content="#mv" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
                            </div><!-- /.col-->
                        </div><!-- /.row-->
                    </div><!-- /.header-->
                    <div class="collapse" id="motor_vehicle_collapse">
                    <div class="p-2">	
                        <div class="hidden d-none" id="mv">	
                            <div class="popover-heading"><span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
                                Help Center
                            </div>
                                <div class="popover-body">
                                    
                                <div class="card mb-3">
                                    <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div> <!--/.bg-holder-->
                                        <div class="card-body position-relative">
                                            <div class="row">
                                                <div class="col-lg-12">	

                                                    <h5>Will you need company cars?</h5>   

                                                    <p class="mt-1 ps-3 mb-3">     
                                                        A company car is a vehicle which companies or organisations lease or own and which employees use for their personal and business travel.      
                                                        Company cars are usually offered to those who need to drive as a requirement of their job or to other employees as an additional work perk, some typical company cars are: 
                                                    </p>  			
                                                    
                                                    <ul>
                                                        <li>delivery vans</li>
                                                        <li>directors car</li>
                                                        <li>fleet cars</li>
                                                    </ul>

                                                    <hr style="border-top: 3px solid #0064B2; background: transparent;"> 

                                                    <h5>How do I add a Company Owner?</h5>
                                                    <ol class="mt-1">   
                                                        <li>Click Add new Motor Vehicle</li>                                                        
                                                        <li>Select today's date</li>
                                                        <li>Enter teh model or make of the car</li>
                                                        <li>Enter the purchase price.</li>
                                                        <li>Enter a down payment if any or enter 0</li>
                                                        <li>Enter a trade value if any or enter 0</li>
                                                        <li>Enter the interest charged</li>  
                                                        <li>Enter the term of the loan</li>
                                                        <li>AuziPlan will do the calculation for you.</li>
                                                        <li><a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</a></li>
                                                    
                                                    </ol><!-- /.ol --> 
                                                    <!--<img src="<?php echo site_url(); ?>custom-assets/images/help_screen_shots/setup/su_2.png" width="100%" height="100%"alt="Startup-1" class="img-responsive">  		
                                                    <a class="btn btn-link ps-0 btn-sm" href="../../documentation/getting-started.html" target="_blank">Get Started<span class="fas fa-chevron-right ms-1 fs--2"></span></a>-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>		
                            </div>
                  
                              
                        

                                    <div id="motor_vehicle" class="handlecurrencyformat">
                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <form class="form-horizontal well w3-center" >
                                            <div class="row p-3">
                                                    <div class="col-lg-4 col-md-4 col-sm-12">
                                                        <div class="card p-3">        
                                                            <div class="form-floating mb-3">
                                                                <input type="text" name="acquisition_date" class="form-control validate dtpickdate" id="acquisition_date" placeholder="Purchase Date" value="<?= date('Y-m-d') ?>">
                                                                <label for="acquisition_date">Purchase Date</label>
                                                            </div>

                                                            <div class="form-floating mb-3">
                                                                <input type="text" name="mv_description" class="form-control validate" id="mv_description" placeholder="MV Description" value=""></input>
                                                                <label for="mv_description">M-V Description</label>
                                                            </div><!-- ./from floating -->

                                                            <div class="form-floating mb-3">
                                                                <input type="text"  class="form-control validate currencySign" onkeyup="calculatePayment(this.form)"  value="" id="cprice" class="ratecalcfield"></input>
                                                                <label for="car-price">Purchase Price</label>
                                                            </div>

                                                            <div class="form-floating mb-3"> 
                                                                <input type="text" class="form-control validate currencySign" onkeyup="calculatePayment(this.form)" value="" id="cdp" class="ratecalcfield"></input>
                                                                <label for="down-payment">Down Payment</label>
                                                            </div>

                                                        </div><!-- ./card -->
                                                    </div><!-- ./col -->


                                                    <div class="col-lg-4 col-md-4 col-sm-12">
                                                                
                                                    <div class="card p-3">        
                                                        <div class="form-floating mb-3"> 
                                                            <input type="text" class="form-control validate currencySign" onkeyup="calculatePayment(this.form)" value="" id="ctv" class="ratecalcfield"></input>
                                                            <label for="trade-in">Trade-In Value</label>          
                                                        </div>

                                                        <div class="form-floating mb-3">         
                                                            <input type="text" readonly  class="form-control validate currencySign" placeholder="Automatically Calculated" id="cfinance" class="ratecalcfield"></input>
                                                            <label for="amount-financed">Amount Financed</label>
                                                        </div>

                                                        <div class="form-floating mb-3">  
                                                            <input type="text" class="form-control validate percentSign" onkeyup="calculatePayment(this.form)"  value="" id="cir" class="ratecalcfield"></input>
                                                            <label for="interest-rate">Interest Rate</label>         
                                                        </div>

                                                        <div class="form-floating mb-3">
                                                            <input type="text" class="form-control validate" onkeyup="calculatePayment(this.form)"  value="" id="cterm" class="ratecalcfield"></input>
                                                            <label for="months">Months</label>
                                                        </div>
                                                    </div><!-- ./card -->
                                                </div><!-- ./col -->


                                                <div class="col-lg-4 col-md-4 col-sm-12">
                                                    <div class="card p-3">                                
                                                        <div class="form-floating mb-3"> 
                                                            <input type="text" readonly class="form-control validate" placeholder="Your Number Of Payments Are" id="cpayments" class="ratecalcfield"></input>
                                                            <label for="total-payments">Total Payments</label>
                                                        </div>

                                                        <div class="form-floating mb-3"> 
                                                            <input type="text" readonly  class="form-control validate currencySign" placeholder="Monthly Payments" size="7" id="cpmt" class="ratecalcfield"></input>      
                                                            <label for="monthly-payment">Monthly Payment</label>                            
                                                        </div>

                                                        <div class="form-floating mb-3"> 
                                                            <input type="text" readonly class="form-control validate currencySign" placeholder="Monthly Interest" size="7" id="cint" class="ratecalcfield" value="77"></input>      
                                                            <label for="monthly-interest">Monthly Interest</label>                            
                                                        </div>

                                                        <div class="form-floating mb-5"> 
                                                    </div><!-- ./card -->
                                                </div><!-- ./col -->
                                            </div><!-- ./row -->
                                      
                            
                                        <div class="border-dashed-bottom my-3"></div>
                                            <div class="col-12 col-sm-12 offset-0 pt-3">
                                                <input type='hidden' id='motor_id' value='0'>
                                                <button class="btn btn-falcon-danger" type="button" id="btncancelmotor" ><i class="far fa-window-close"></i> Cancel</button>
                                                <button class="btn btn-falcon-success float-end px-4  me-1 mb-1" id="btnmotor" type="button"><i class="far fa-save"></i> Save and Continue</button>
                                                <!--<input type="button" class="btn btn-falcon-success float-end px-4  me-1 mb-1" onclick="cmdCalc_Click(this.form)" value="Calculate" name="cmdCalc"></input>-->
                                            </div><!-- /.col -->
                                        </div><!-- /.row -->
                                    </div><!-- /.border -->
                                </div><!-- /.row -->																
                         </div>            
                              
                    




            <div class="collapse" id="collapseMotorVehicle">
                <div class="border p-card rounded">
                 <div class="box-body pt-3">
                    <div class="box-body table_one">
                        <div class="row" id="one_time_cost_row_add">
            
                                <div class="col-lg-12 col-md-12 col-sm-12" id="one_time_cost_land_buildings" style='margin-top: 16px;'>
                                    <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
                                        <div class="table-responsive scrollbar">
                                            <div class="fixTableHead">
                                            <table id="motorvehicleDT" class="table table-striped fs--1 mb-0" style="width:100%">
                                                <thead class="bg-200 text-900">
                                                    <tr>
                                                    <th>Purchase Date</th>
                                                    <th>MV-Description</th>
                                                    <th>Purchase Price</th>
                                                    <th>Down Payment</th>
                                                    <th>Trade-In Value</th>
                                                    <th>Amount Financed</th>
                                                    <th>Interest Rate</th>
                                                    <th>Months</th>
                                                    <th>Total Payments</th>
                                                    <th>Monthly Payment</th>
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
                                                    <th></th>

                                                </tr>
                                            </tfoot>
                                        </table>                      
                                    </div>
                                </div>                    
                            </div>
                        </div>
                    </div>
                    <a class="mb-0 d-block d-flex align-items-center pt-5" data-bs-toggle="collapse" data-bs-target="#collapseMotorVehicle"aria-controls="collapseMotorVehicle"style='cursor: pointer;'>
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
        </div><!-- ./col -->
                                                        
    </form>
</div>



