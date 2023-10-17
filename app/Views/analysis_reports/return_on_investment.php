                <!-- ===============================================-->
                <!--   Wizard Tab 3  Content Details-->
                <!-- ===============================================-->      

                <div class="tab-pane " role="tabpanel" aria-labelledby="bootstrap-wizard-tab5" id="bootstrap-wizard-tab5">
                    <form class="form-validation">
                    
                    <div class="card mb-1 mb-lg-0">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-lg-6">                    
                                <h5 class="mb-0">Financial Diagnostics</h5>
                                </div><!-- /.col-->
                                <div class="col-lg-6">
                                    <a class="btn btn-falcon-outline-info float-end text-primary pt-3" data-html="true" data-bs-placement="auto" data-popover-content="#roi" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
                                </div><!-- /.col-->
                            </div><!-- /.row-->
                        </div><!-- /.header-->

                        <div class="p-2">	
                            <div class="hidden d-none" id="roi">	
                                <div class="popover-heading"><span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
                                    Help Center
                                </div>
                                    <div class="popover-body">
                                    
                                    <div class="card mb-3">
                                        <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div> <!--/.bg-holder-->
                                            <div class="card-body position-relative">
                                                <div class="row">
                                                    <div class="col-lg-12">			

                                                    
                                                    <h5>Return on owner’s equity.</h5>

                                                    <p>Return on owner’s equity = Net Income / owner’s equity.</p>
                                                    <p>
                                                        For example, if you’ve invested $200,000 and the business is generating a net income of $100,000 a year, 
                                                        your return on owner’s equity is 50 per cent.
                                                    </p>

                                                    <p>
                                                        There are actually several different key ratios used by analysts to examine a companies financial condition. 
                                                        These include the capital to assets ratio, the loan loss reserves to total loans ratio, 
                                                        the liquidity ratio and many others. These ratios provide direct measures of different specific aspects of a comanies assets, 
                                                        liabilities and cash flow.
                                                    </p>



                                                    <!--<img src="<?php echo site_url(); ?>custom-assets/images/help_screen_shots/setup/su_2.png" width="100%" height="100%"alt="Startup-1" class="img-responsive">  		
                                                    <a class="btn btn-link ps-0 btn-sm" href="../../documentation/getting-started.html" target="_blank">Get Started<span class="fas fa-chevron-right ms-1 fs--2"></span></a>-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>		
                            </div>


                            <div class="card-body bg-light">
                                <!--table section sales qty starts -->       
                             
                                <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
                                        <div class="table-responsive scrollbar">
                                            <div class="fixTableHead">
                                            <table id="" class="table table-striped fs--1 mb-0">

                                                <colgroup>
                                                    <col style="width: 30%;">
                                                    <col style="width: 10%;">
                                                    <col style="width: 10%;"> 
                                                    <col style="width: 10%;">   
                                                    <col style="width: 10%;">
                                                    <col style="width: 10%;">
                                                    <col style="width: 10%;"> 
                                                    <col style="width: 10%;">   
                                                </colgroup>

                                                <thead class="bg-200 text-900">
                                                    <tr>                         
                                                        <th></th>
                                                        <th></th>
                                                        <th>Year 0</th> 
                                                        <th>Year 1</th> 
                                                        <th>Year 2</th> 
                                                        <th>Year 3</th> 
                                                        <th>Year 4</th> 
                                                        <th>Year 5</th> 
                                                    </tr>
                                                </thead>
                                                <tbody>



                                                        <tr>
                                                            <th>Purchase Price</th>
                                                            <th>$200,000</th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>

                                                        <tr>
                                                            <th>Debt Finance</th>
                                                            <th>50%</th>
                                                            <th>100,000</th>
                                                            <th>$68,641,000</th>
                                                            <th>$35.347,000</th>
                                                            <th>$0,000</th>
                                                            <th>$0,000</th>
                                                            <th>$0,000</th>
                                                        </tr>
                                                        </tr>

                                                        <tr>
                                                            <th>Equity Finance</th>
                                                            <th>50%</th>
                                                            <th>100,000</th>
                                                            <th>100,000</th>
                                                            <th>100,000</th>
                                                            <th>100,000</th>
                                                            <th>100,000</th>
                                                            <th>100,000</th>

                                                        </tr>

                                                        <tr>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>

                                                        <tr>
                                                            <th>Debt/Equity Ratio (Max)</th>
                                                            <th>4.0</th>
                                                            <th>1.0</th>
                                                            <th>0.7</th>
                                                            <th>0.4</th>
                                                            <th>0.0</th>
                                                            <th>0.0</th>
                                                            <th>0.0</th>

                                                        </tr>

                                                        <tr>
                                                            <th>Debt Service Ratio (Min)</th>
                                                            <th>1.35</th>
                                                            <th>-</th>
                                                            <th>2.2</th>
                                                            <th>2.4</th>
                                                            <th>2.8</th>
                                                            <th>0.0</th>
                                                            <th>0.0</th>
                                                        </tr>                         

                                                        <thead class="bg-200 text-900">

                                                            <tr>                         
                                                                <th></th>
                                                                <th></th>   
                                                                <th>Year 1</th> 
                                                                <th>Year 2</th> 
                                                                <th>Year 3</th> 
                                                                <th>Year 4</th> 
                                                                <th>Year 5</th> 
                                                                <th>Average</th> 
                                                            </tr>
                                                        </thead>

                                                        <tr>
                                                            <th><b>ROI - Return on Investment</b></th>
                                                            <th></th>
                                                            <th>31.3%</th>
                                                            <th>36.0%</th>
                                                            <th>41,3%</th>
                                                            <th>46.4%</th>
                                                            <th>52.9%</th>
                                                            <th>41.6%</th>
                                                         
                                                            
                                                        </tr>

                                                        <tr>
                                                            <th><b>ROI - Return on Equity</b></th>
                                                            <th></th>
                                                            <th>62.7%</th>
                                                            <th>72.1%</th>
                                                            <th>82.3%</th>
                                                            <th>92.7%</th>
                                                            <th>105.8%</th>
                                                            <th>83.1%</th>
                                                         
                                                            
                                                        </tr>


                                                        <tr>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>






                                                        <tr style="background-color: rgba(24, 242, 242, 0.30);">
                                                            <th><b>Payback (EBITDA)</b></th>
                                                        
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            
                                                        </tr>


                                                        <tr>
                                                            <th>Payback Target</th>
                                                            <th>3-4 Years</th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                      

                                                         
                                                        </tr>

                                                        <tr>
                                                            <th>Average Annual EBITDA*</th>
                                                            <th>$103,506</th>  <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                          
                                                         
                                                        </tr>

                                                        <tr>
                                                            <th>Initial Investment</th>
                                                            <th>$200,000</th>  <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                          
                                                        </tr>

                                                        <tr>
                                                            <th>Payback Years</th>
                                                            <th>1.9</th>  <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                      
                                                        </tr>



                                                        <tr>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>







                                                        <thead class="bg-200 text-900">

                                                  

                                                            <tr>                         
                                                                <th>* Average Annual Cashflow (excludes Loan Principal Repayments) </th>
                                                          
                                                                <th>Year 1</th> 
                                                                <th>Year 2</th> 
                                                                <th>Year 3</th> 
                                                                <th>Year 4</th> 
                                                                <th>Year 5</th> 
                                                                <th>Average</th>
                                                                <th>Total</th> 
                                                            </tr>
                                                            </thead>
                                                  
                                                            <tr>
                                                                <th>Net Operating Cash Inflow/(Outflow)</th>
                                                                <th>$31.325</th>
                                                                <th>$38,794</th>
                                                                <th>$46.965</th>
                                                                <th>$92.706</th>
                                                                <th>$105.82</th>
                                                                <th>$62,123</th>
                                                                <th>$315.614</th>


                                                            </tr>

                                                            <tr>
                                                                <th>Loan Principal Repayments</th>
                                                                <th>$31.359</th>
                                                                <th>$33.294</th>
                                                                <th>$36,348</th>
                                                                <th>$92.706</th>
                                                                <th>$0.00</th>
                                                                <th>$20,000</th>
                                                                <th>$100,000</th>


                                                            </tr>


                                                            <tr>
                                                                <th>Operating Cash Inflow/(Outflow) before Principal Repyts</th>
                                                                <th>$62,684</th>
                                                                <th>$72,087</th>
                                                                <th>$82,312</th>
                                                                <th>$92,706</th>
                                                                <th>$105,825</th>
                                                                <th>$83.123</th>
                                                                <th>$425,614</th>

                                                            </tr>







                                                            <tr>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>







                                                        <thead class="bg-200 text-900">

                                                  

                                                            <tr>                         
                                                                <th>* Average Annual EBITDA </th>
                                                          
                                                                <th>Year 1</th> 
                                                                <th>Year 2</th> 
                                                                <th>Year 3</th> 
                                                                <th>Year 4</th> 
                                                                <th>Year 5</th> 
                                                                <th>Average</th>
                                                                <th>Total</th> 
                                                            </tr>
                                                            </thead>
                                                  
                                                            <tr>
                                                                <th>EBITDA</th>
                                                                <th>$31.325</th>
                                                                <th>$38,794</th>
                                                                <th>$46.965</th>
                                                                <th>$92.706</th>
                                                                <th>$105.82</th>
                                                                <th>$62,123</th>
                                                                <th>$315.614</th>


                                                            </tr>

                                                                
                                                            <tr>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                            </tr>

                                                        <tr>
                                                                <th>EBITDA</th>
                                                                <th>$31.325</th>
                                                                <th>$38,794</th>
                                                                <th>$46.965</th>
                                                                <th>$92.706</th>
                                                                <th>$105.82</th>
                                                                <th>$62,123</th>
                                                                <th>$315.614</th>


                                                            </tr>


                                                            <tr>
                                                                <th>% of Sales</th>
                                                                <th>$31.325</th>
                                                                <th>$38,794</th>
                                                                <th>$46.965</th>
                                                                <th>$92.706</th>
                                                                <th>$105.82</th>
                                                                <th>$62,123</th>
                                                                <th>$315.614</th>


                                                            </tr>

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
                                                    </tr>
                                                </tfoot>
                                            </table>                      
                                        </div>
                            





                                </div> <!-- ./land and building -->                                    
                            
                                <div class="col-12 col-sm-12 offset-0 pt-3">
                                    <button class="btn btn-falcon-danger" type="button" id="btncancelowner" ><i class="far fa-window-close"></i> Cancel</button>
                                    <button class="btn btn-falcon-success float-end" type="button">Save and Continue</button>
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
            </div>
         
            <!-- ===============================================-->
            <!--   Wizard Tab 4  Content Details-->
            <!-- ===============================================-->       

            <div class="tab-pane text-center " role="tabpanel" aria-labelledby="bootstrap-wizard-tab6" id="bootstrap-wizard-tab6">
            <div class="wizard-lottie-wrapper">
                                    <div class="lottie wizard-lottie mx-auto my-3"  style="height: 400px;" data-options='{"path":"<?php echo site_url(); ?>template-assets/img/animated-icons/celebration.json"}'></div>
                                </div><!-- /wizard wrapper-->
                    <h4 class="mb-1">Great Stage 6 is done!</h4>
                    <p>Now head over to the dashboard to view your resultds
                        
                    </p>
                    <a class="btn btn-primary px-5 my-3" href="<?php echo site_url(); ?>analysis">Let's check</a>
                </div>
            </div>
        </div>
            <div class="card-footer bg-light">
                <div class="">
                    <ul class="pager wizard list-inline mb-0">
                        <li class="previous">
                            <button class="btn btn-success px-5 px-sm-6" type="button"><span class="fas fa-chevron-left me-2" data-fa-transform="shrink-3"></span>Prev</button>
                        </li>
                        <li class="next">
                            <button class="btn btn-primary px-5 px-sm-6" type="submit">Next<span class="fas fa-chevron-right ms-2" data-fa-transform="shrink-3"> </span></button>
                        </li>
                    </ul>
                </div>
            </div>






