    <!-- ===============================================-->
    <!--   Wizard Expenses  Tab 2 Content Details-->
    <!-- ===============================================-->      
    
    <div class="tab-pane " role="tabpanel" aria-labelledby="bootstrap-wizard-tab2" id="bootstrap-wizard-tab2"> 
        <form>
            <!--<p class="mt-2">                            
                A successful  company will require reliable , honest and highly motivated people, who are you movers and shacker?.            
            </p> -->
            <div class="card mb-1 mb-lg-0">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-4">
                            <a class="mb-0 d-block d-flex align-items-center" id="operating_payroll_toggle" style='cursor: pointer'>
                            <span class="circle"><span class="fas fa-plus fa-3x text-primary"></span></span><span class="ms-3"></span></a>
                            <a class="mb-0 d-block d-flex align-items-center pt-2" data-bs-toggle="collapse" data-bs-target="#collapsePeople" aria-expanded="false" aria-controls="collapsePeople"style='cursor: pointer;'>
                            <span class="circle"><span class="fas fa-arrow-down fa-3x text-success"></span></span><span class="ms-3"></span></a>
                        </div><!-- /.col-->
                        <div class="col-lg-4">
                        <h5  class="mb-0 d-block d-flex align-items-left">
                            People Expenses
                        </h5>
                        </div><!-- /.col-->
                        <div class="col-lg-4">
                            <a class="btn btn-falcon-outline-info float-end text-primary pt-2" data-html="true" data-bs-placement="auto" data-popover-content="#peo" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
                        </div><!-- /.col-->
                    </div><!-- /.row-->
                </div><!-- /.header-->
                <div class="collapse" id="operating_payroll_collapse">
                <div class="p-2">	
                    <div class="hidden d-none" id="peo">	
                        <div class="popover-heading"><span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
                            Help Center
                        </div>
                            <div class="popover-body">
                                
                            <div class="card mb-3">
                                <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>custom-assets/img/icons/spot-illustrations/corner-4.png);"></div> <!--/.bg-holder-->
                                    <div class="card-body position-relative">
                                        <div class="row">
                                            <div class="col-lg-12">		

                                                <h5>What is your payroll expenses budget?</h5>   
                                                
                                                <p class="mt-1 ps-3 mb-3">	
                                                    It's more then likely that your company will need to employ people to run the day to day tasks to keep your business, Some typical employees are:
                                                </p>
                                    
                                                <ul class="pt-1">
                                                    <li>production manager</li>
                                                    <li>sales manager</li>
                                                    <li>store manager</li>
                                                    <li>receptionist</li>          
                                                </ul><!-- /.ul -->
                                                <hr style="border-top: 3px solid #0064B2; background: transparent;"> 
                                                <h5>How do I add people?</h5>
                                                <ol class="pt-1">      
                                                    <li>Click Add People</li>                                    
                                                    <li>Select a role full or part time</li>
                                                    <li>Enter the number of people you will employ</li>
                                                    <li>Enter the weekly hours they will work</li>     
                                                    <li>Enter the hourly pay rate</li>
                                                    <li>AuziPlan will do the calculation for you.</li>
                                                    <li><a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="far fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</a></li>
                                                </ol><!-- /.ol -->

                                            </div>
                                        </div><!-- /.co 12-->
                                    </div><!-- /.row-->
                                </div><!-- /.card body-->
                            </div><!-- /.bg holder-->
                        </div><!-- /.card-->	
                    </div><!-- /.popover body-->

                    <!-- ===============================================-->
                    <!--   Card for Test Input Boxes  -->
                    <!-- ===============================================-->      

                    <div>
                        
                            
                                <div id="per">
                                    <div class="col-lg-12 col-md-12 col-sm-12">        
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-12 col-sm-12">        
                                                    <div class="card p-3">                                            
                                                        <div class="form-floating mb-3">
                                                            <select name="purpose" class="form-select validate" id="role" aria-label="purpose">
                                                                <option value="">Select a role</option>
                                                                <option value="Full-Time">Full Time</option>
                                                                <option value="Part-Time">Part Time</option>     
                                                            </select><!-- /.select-->
                                                        </div><!-- /.form floating-->

                                                        <div class="form-floating mb-3">
                                                            <input type="text" name="num_people" class="form-control validate" id="num_people" onkeypress="calculategrossSalary()" class="currencySign" placeholder="Number Of People" value="">
                                                            <label for="num_people">How many people will you employ?</label>
                                                        </div><!-- /.form floating-->

                                                        <div class="form-floating mb-3">
                                                            <input type="text" name="hour-worked" class="form-control validate currencySign" id="hour_worked" onkeypress="calculategrossSalary()" placeholder="Hour-worked" value="">
                                                            <label for="hour-worked">How many hours will they work each week? (38-40)</label>
                                                        </div><!-- /.form floating-->
                        
                                                        <div class="form-floating mb-3">
                                                            <input type="text" name="rate-rate" class="form-control validate currencySign" id="rates" onkeypress="calculategrossSalary()" placeholder="rate" value="">
                                                            <label for="rate">How much will you pay per hour?</label>
                                                        </div>

                                                        <!--  Total Yearly = (hours worked x rate x 52/12) x number of people -->
                                                        <div class="form-floating mb-3">
                                                            <input type="text" readonly name="gross_income" class="form-control validate" id="gross_salary" placeholder="Gross Income" value="">
                                                            <label for="gross_income">This is your projected monthly gross salary total </label>
                                                        </div><!-- /.form floating-->

                                                        <div class="form-floating mb-3">
                                                            <input type="text" name="num_payroll_months" class="form-control" id="num_payroll_months" onkeypress="calculategrossSalary()" class="currencySign" placeholder="Number Of Payroll Months" value="">
                                                            <label for="num_payroll_months">How many months will you allow (6 is a good start)?</label>
                                                        </div><!-- /.form floating-->

                                                    </div><!-- card-->
                                                </div><!-- /.col-->
                                                <div class="col-lg-6 col-md-12 col-sm-12">        
                                                    <div class="card p-3">

                                                        <div class="form-floating mb-3">
                                                            <input type="text" name="superannuation" readonly  class="form-control validate" id="superannuation_people" placeholder="Superannuation " value="">
                                                            <label for="superannuation"> This is your average yearly Superannuation cost</label>
                                                        </div><!-- /.form -floating-->

                                                        <div class="form-floating mb-3">
                                                            <input type="text" readonly name="work_cover"readonly  class="form-control validate" id="work_cover_people" placeholder="Work Cover" value="">
                                                            <label for="work_cover">This is your average yearly WorkCover cost:</label>
                                                        </div><!-- /.form -floating-->
            
                                                        <div class="form-floating mb-3">
                                                            <input type="text" readonly name="commission"readonly  class="form-control validate" id="commission_people" placeholder="Commission" value="">
                                                            <label for="commission">This is your average yearly commission cost:</label>
                                                        </div><!-- /.form -floating-->

                                                        <div class="form-floating mb-3">
                                                            <input type="text" readonly name="other"readonly  class="form-control validate" id="payroll_people" placeholder="other" value="">
                                                            <label for="other">This is your average other payroll cost:</label>
                                                        </div><!-- /.form -floating-->

                                                        <!--  Total Yearly = (hours worked x rate x 52)x number of people -->
                                                        <div class="form-floating mb-3"> 
                                                            <input type="text" readonly name="yearly_salary_people" class="form-control validate currencySign" id="yearly_salary_people"  placeholder="Yearly Gross Income" value="">
                                                            <label for="yearly_salary_people">This is your total salary payroll liabilities</label>
                                                        </div><!-- /.form -floating-->

                                                        <div class="form-floating mb-3">
                                                            <input type="text" readonly name="payroll_allowance" class="form-control validate currencySign" id="startup_payroll_allowance" placeholder="Startup Payroll Allowance" value="">
                                                            <label for="startup_payroll_allowance">Startup Allowance</label>
                                                        </div><!-- /.form -floating-->

                                                    </div><!-- card-->
                                                </div><!-- /.col-->
                                            </div><!-- /.row-->
                                        </div><!-- ./container -->
                                    </div><!-- ./col -->                                           
                                </div><!-- ./people -->  
                                <div class="row p-3">    
                                <div class="border-dashed-bottom my-3"></div>
                                    <div class="col-12 col-sm-12 offset-0 pt-3">
                                        <input type="hidden" id="operatingcostpeople_id" value='0'>
                                        <button class="btn btn-falcon-danger" type="button" id="btncancelpeople" ><i class="far fa-window-close"></i> Cancel</button>
                                        <button type="button" id="btnSave_people" value="Save" class="btn btn-falcon-success float-end" name='finish' onclick=""><i class="far fa-save"></i> Save and Continue</button>
                                    </div><!-- /.col 12--> 
                                </div>                         
                            </div>
                        </div>    
                    


                    <!-- ===============================================-->
                    <!--   Result Table  -->
                    <!-- ===============================================-->      
                    <div class="collapse" id="collapsePeople">
                        <div class="border p-card rounded">
                            <div class="box-body pt-3">
                                <div class="box-body table_one">
                                    <div class="row" id="monthly_expense_row_add">

                                        <div class="col-lg-12 col-md-12 col-sm-12" id="expense_table" style='margin-top: 16px;'>
                                            <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
                                                <div class="table-responsive scrollbar">
                                                    <div class="fixTableHead">
                                                        <table id="operating_cost_peopleDT" class="table table-striped fs--1 mb-0" style="width:100%">
                                                            <thead class="bg-200 text-900">
                                                                <tr>                            
                                                                    <th>Role</th>
                                                                    <th>Number of People</th>  
                                                                    <th>Superannuation</th>  
                                                                    <th>WorkCover</th>       
                                                                    <th>Commission</th>      
                                                                    <th>Other</th>   
                                                                    <th>Payroll Allowance</th>
                                                                    <th>Monthly</th>  
                                                                    <th>Year 1</th>
                                                                    <th>Year 2</th>
                                                                    <th>Year 3</th>
                                                                    <th>Action</th>
                                                                </tr><!-- /.table row-->
                                                            </thead><!-- /.table header-->
                                                            <tbody>
                                                            </tbody><!-- /.table body-->
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
                                                                    </tr><!-- /.table row-->
                                                                </tfoot><!-- /.table footer-->

                                                            </table><!-- /.table-->         
                                                        </div><!-- /.table head--> 
                                                    </div><!-- /.table responsive scroll--> 
                                                </div><!-- /.table example 2--> 
                                            </div><!-- /.col 12--> 
                                        </div><!-- /.row-->     
                                    </div><!-- /.box--> 
                                </div><!-- /.box--> 
                                <a class="mb-0 d-block d-flex align-items-center pt-5" data-bs-toggle="collapse" data-bs-target="#collapsePeople" aria-expanded="false" aria-controls="collapsePeople"style='cursor: pointer;'>
                                <span class="circle"><span class="fas fa-arrow-up fa-3x text-success"></span></span><span class="ms-3"></span></a>
                            </div><!-- /.box--> 
                        </div><!-- /.box--> 
                        </div>      
                    </form>


                    </div><!-- /.tab pane--> 


                    <!-- ===============================================-->
                    <!--   Wizard Expenses  Tab 3 Content Details-->
                    <!-- ===============================================-->      
                    
                    <div class="tab-pane text-center " role="tabpanel" aria-labelledby="bootstrap-wizard-tab4" id="bootstrap-wizard-tab3">

                    <div class="wizard-lottie-wrapper">
                                    <div class="lottie wizard-lottie mx-auto my-3"  style="height: 400px;" data-options='{"path":"<?php echo site_url(); ?>template-assets/img/animated-icons/celebration.json"}'></div>
                                </div><!-- /wizard wrapper-->

                            <h4 class="mb-1">Great Stage 4 is done!</h4>
                            <p>Now head over to Stage 5 to generate your revenue streams</p>
                            <a class="btn btn-primary px-5 my-3" href="<?php echo site_url(); ?>operating-cost">Let's check</a>
                        
                        </div>
                    </div><!-- /.tab pane--> 
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
                            </ul><!-- /.ul--> 

                        </div>
                    </div><!-- /.tab pane--> 
                

        