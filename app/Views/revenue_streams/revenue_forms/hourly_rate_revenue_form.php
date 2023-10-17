 <!-- Styles -->
 <style>
         
    
</style>


    <!-- ===============================================-->
    <!--  Input Text Boxes-->
    <!-- ===============================================-->      
    <div id="hourly_rate_c">
        <div class="row">  
            <div class="col-lg-5 col-md-12 col-sm-12">       
            <a class="btn btn-falcon-outline-info float-end text-primary" data-html="true" data-bs-placement="auto" data-popover-content="#hourly" data-toggle="popover" data-trigger="focus"   href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
           
            <!-- ===============================================-->
            <!--  Info Popup-->
            <!-- ===============================================-->   
            <div class="p-2">   
                <div class="hidden d-none" id="hourly">
                    <div class="popover-heading" style="background-color: rgba(25, 255, 255, 1.0) ;color:rgba(0, 0, 0, 1.0);font-size:16px;font-weight:thin;" >
                        <span><img src='<?php echo base_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
                            Help Center
                        </div>        
                        <div class="popover-body">                  
                            <div class="card mb-3">
                                <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>custom-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->
                                    <div class="card-body position-relative">
                                        <div class="row">
                                            <div class="col-lg-12">

                                            <h5 class="mt-1 ps-3 mb-3">Hourly Rate Revenue Calculator</h5>

                                                <p class="mt-1 ps-3 mb-3">
                                                    This hourly rate calculator is useful for a start-up service based business to evaluate the hourly rate to charge clients for it's services rendered in order to achieve a profitable level of net income. In addition, it will also provide the number of billable hours the business needs to cover its operating expenses and reach a break even position after excluding holiday and sick days in a normal year.              
                                                </p>   
                                            
                                                <p class="mt-1 ps-3 mb-3">
                                                    <b>Take away:</b>               
                                                    The calculator is particularly useful for service based businesses such as freelancers and consultants.
                                                    You would need to decide what kind of Revenue Stream best fits your company, and customers.
                                                    Revenue Streams can be generated in many different ways and you can use a mix of these different ways for your company:
                                                </p> 

                                                <hr style="border-top: 3px solid #0064B2; background: transparent;"> 

                                                <h5 class="mt-1 ps-3 mb-3">How do I evaluate the hour rate required?</h5>

                                                <ol class="pt-1">  

                                                    <li><b>Enter the required net income</b></li>         

                                                    <li>
                                                        <b>Enter the available days a week</b> This is the number of days in the working week. For example if the business only operates Monday - Friday, then the available working days would be five. The hourly rate calculator works out the available days in a year.
                                                    </li>

                                                    <li>
                                                        <b>Enter the vacation and sickness days</b> The number of available days lost through vacations and sickness is entered and the calculator calculates the number of working days in the year.
                                                    </li>

                                                    <li>
                                                        <b>Enter the hours and non billable hours in a day</b> Enter the number of hours available each day, if a normal day is 7.6 hours then enter 7.6. The non billable hours is the number of hours lost each day carrying out administrative and other tasks which cannot be charged to a client. The hourly rate calculator works out the billable hours per day and year.
                                                    </li>

                                                    <li>
                                                        <b>Hourly rate </b>The hourly rate is calculated based on the revenue required and the number of billable hours a year.
                                                    </li>

                                                    <li>
                                                        <b>Summary and Break even</b> The hourly rate calculator provides a summary of the revenue, operating costs, and net income based on the hourly rate and the billable hours. It also calculates the billable hours required to cover the operating costs of the business, and the percentage of billable hours needed to reach the break even position.
                                                    </li>

                                                    <li><a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</a></li>                            
                                                </ol>    
                                            </div><!-- /.col-->
                                        </div><!-- /.row-->
                                    </div><!-- /.card body-->
                                </div><!-- /.bg-holder-->                                                                               
                            </div><!-- /.card-->
                        </div><!-- /.popover-->
                    </div><!-- /.card-->

                    <!-- ===============================================-->
                    <!--  Input Text Boxes-->
                    <!-- ===============================================-->    

                    <div class="card p-3 handlecurrencyformat">
                            
                    <div class="form-floating mb-3">
                        <input type="text" name="net_income_required"  class="form-control currencySign validate" onkeyup="hourly_rate_revenue()" id="net_income_required" placeholder="Net Income Required" value="">
                        <label for="net_income_required">What is your expected net income?</label>
                    </div><!-- /.form -floating-->

                    <div class="form-floating mb-3">
                        <input type="text" name="days_per_week"  class="form-control validate" id="days_per_week" onkeyup="hourly_rate_revenue()" placeholder="Days Per Week " value="">
                        <label for="days_per_week">How many working days per week?</label>
                    </div><!-- /.form -floating-->

                    <div class="form-floating mb-3">
                        <input type="text" name="vacation_days"  class="form-control validate" id="vacation_days" onkeyup="hourly_rate_revenue()" placeholder="Vacation Days" value="">
                        <label for="vacation_days">How many vacation days per year?</label>
                    </div><!-- /.form -floating -->

                    <div class="form-floating mb-3">
                        <input type="text" name="sickness_days"  class="form-control validate" id="sickness_days" onkeyup="hourly_rate_revenue()" placeholder="Sickness Days" value="">
                        <label for="sickness_days">How many sickness days per year?</label>
                    </div><!-- /.form -floating -->

                    <div class="form-floating mb-3">
                        <input type="text" name="hours_per_day"  class="form-control validate"  id="hours_per_day" onkeyup="hourly_rate_revenue()" placeholder="Hours Per Day" value="">
                        <label for="hours_per_day">How many hours per day</label>
                    </div><!-- /.form -floating -->

                    <div class="form-floating mb-3">
                        <input type="text" name="none_billable_hours_per_day"  class="form-control validate"  onkeyup="hourly_rate_revenue()" id="none_billable_hours_per_day" placeholder="None Billable Hours Per Day" value="">
                        <label for="none_billable_hours_per_day">How many none billable hour per day?</label>
                    </div><!-- /.form -floating -->  
                </div><!-- card-->

            </div><!-- /.col-->

            <!-- ===============================================-->
            <!--  Bar Chart Starts-->
            <!-- ===============================================-->     
    
            <div class="col-lg-7 col-md-12 col-sm-12">    
                <div class="card p-3 handlecurrencyformat  mb-0 rounded-0 py-3">
                    <h4 class="my-0 font-weight-normal text-center">Yearly Revenue Required</h4>
                        <div class="container">

                            <div id="chartDiv">
                                <canvas id="canvas"></canvas>
                            </div>
                            
                                <div class="row pt-3 text-center" > 
                                    <h4 class="my-0 font-weight-normal pt-3 mb-3">Hour Rate Required</h4>
                                    <div class="col-lg-3 col-md-12 col-sm-12" style="display: none;">       
                                        <label id="hourly_rate"></label>
                                    </div><!-- /.col-->
                                    <div class="col-lg-4 col-md-12 col-sm-12">   
                                        <h6>Year 1</h6>
                                        <h6 class="pt-1" id="hourly_rate_year_1"></h6>   
                                    </div><!-- /.col-->
                                    <div class="col-lg-4 col-md-12 col-sm-12">  
                                        <h6>Year 2</h6>
                                        <h6 class="pt-1" id="hourly_rate_year_2"></h6>
                                    </div><!-- /.col-->
                                    <div class="col-lg-4 col-md-12 col-sm-12">          
                                        <h6>Year 3</h6>
                                        <h6 class="pt-1" id="hourly_rate_year_3"></h6>
                                    </div><!-- /.col-->
                                </div><!-- /.row-->
                
                                <!-- Provision For Online Revenue Increase Starts -->
                                <div class="form-group text-left p-2" style="width:100%;">

                                <div  class="alert mb-0 rounded-0 py-3 px-card alert-warning border-x-0 border-top-0">
                                    <h6>Yearly Revenue Required Growth<span class="fs--2 ms-1 text-primary"></span></h6>
                                <div class="alert mb-0 rounded-0 py-3 px-card alert-warning border-x-0 border-top-0">
                                    <div class="row flex-between-center">
                                        <div class="col">
                                            <div class="d-flex">
                                                <div class="fas fa-circle mt-1 me-1 fs--2 text-primary"></div>
                                                    <h5 class="rg_percent" id="revenue_growth_text_hourly_rate"><strong>%</strong></h5>
                                                    <input class="form-range "  name="rg_percent" id="revenue_growth_input_hourly_rate" type="range" min="0" max="100" value="0" class="RangeSelectorRG"  />
                                                    <input class="form-range " id="revenue_growth_input_hourly_rate_val" type="hidden" value="0"  />
                                                </div><!-- icon-->
                                            </div><!-- d flex-->                          
                                        </div><!-- col-->
                                    </div><!-- row-->
                                </div><!-- alert-->
                            </div>
                        </div>  
                    </div><!-- card-->
                </div><!-- /.col-->
            </div><!-- /.row-->
        </div><!-- ./container -->

        <!-- ===============================================-->
        <!--  Save Cancel Expand Drop view Starts-->
        <!-- ===============================================-->     
       
        <div class="row p-3">
            <div class="border-dashed-bottom my-3"></div>
                <div class="border p-card rounded">
                    <input type='hidden' id='hourlyrateid' value='0'>
                    <button class="btn btn-outline-danger" type="button" id="btncancelproductrevenue" ><i class="far fa-window-close"></i> Cancel</button>
                    <button class="btn btn-outline-primary toggle-btn" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseHourlyRate" aria-expanded="false" aria-controls="collapseHourlyRate"><span class="arrow"></span>Yearly Summary</button>
                    <input name="save_local_products_step_2" type="button" id="btnsavehourlyrate" value="Save and Continue" class="btn btn-outline-success float-end ">
                </div>
                <!-- ===============================================-->
                <!--  Result table Start-->
                <!-- ===============================================-->      
                <div class="container mt-3">
                    <div class="collapse" id="collapseHourlyRate">
                        <!--table section unit qty starts -->
                        <div class="row pt-2">
                            <h4 class="my-0 font-weight-normal">Assumptions</h4>
                            <div class="table-responsive">
                                <div class="fixTableHead">
                                    <table class="table  fs--1 mb-0  handlecurrencyformat" id="table_unit_sales">
                                        <tbody>
                                            <tr>
                                                <th width="20%">&nbsp;</th>
                                                <th width="10%"><b></b></th></th>
                                                <th width="10%"><b>Monthly</b></th>
                                                <th width="10%"><b>Year 1</b></th>
                                                <th width="10%"><b>Year 2</b></th>
                                                <th width="10%"><b>Year 3</b></th>
                                            </tr><!-- /.table row -->
                                            <tr>
                                                <td>Operating Expenses</td>
                                                <td></td>
                                                <td id="operatingExpenseMonthly"></td>
                                                <td id="operatingExpenseMonthlyYear1"></td>                 
                                                <td id="operatingExpenseMonthlyYear2"></td>               
                                                <td id="operatingExpenseMonthlyYear3"></td>         
                                            </tr><!-- /.table row -->
                                            <tr>
                                                <td>Payroll Expenses</td>
                                                <td></td>
                                                <td id="payrollExpenseMonthly"></td>
                                                <td id="payrollExpenseyear1"></td>
                                                <td id="payrollExpenseyear2"></td>
                                                <td id="payrollExpenseyear3"></td>
                                            </tr><!-- /.table row -->
                                            <tr>
                                                <td>Total Revenue Required</td>
                                                <td></td>
                                                <td id="TrevenueRequriedMonthly"></td>
                                                <td id="TrevenueRequriedyear1"></td>
                                                <td id="TrevenueRequriedyear2"></td>
                                                <td id="TrevenueRequriedyear3"></td>
                                            </tr><!-- /.table row -->                                  
                                            <tr style="background-color:rgba(103, 183, 220, 1.0); color:rgba(255, 255, 255, 1.0);">
                                                <td>Total</td>
                                                <td></td>
                                                <td id="monthlytotal"></td>
                                                <td id="year1total"></td>                 
                                                <td id="year2total"></td>
                                                <td id="year3total"></td>
                                            </tr><!-- /.table row -->                                 
                                            <tr style="background-color:rgba(103, 148, 220, 1.0); color:rgba(255, 255, 255, 1.0); display:none">
                                                <td>Hourly Rate Required?</td>
                                                <td></td>                                                          
                                                <td id="hourly_rate"></td>
                                                <td id="hourly_rate_year_1"></td>                 
                                                <td id="hourly_rate_year_2"></td>
                                                <td id="hourly_rate_year_3"></td>
                                            </tr><!-- /.table row -->
                                            <!-- Working Days = Weeks open  x working Days
                                            52 weeks  x 5 Working Days  = 260-->
                                            <tr>
                                                <td>How many working days?</td>
                                                <td></td>                                                                  
                                                <td id="many_days"></td>
                                                <td id="many_days_per_year_1"></td>          
                                                <td id="many_days_per_year_2"></td>
                                                <td id="many_days_per_year_3"></td>
                                            </tr><!-- /.table row -->                       
                                            <!--
                                            Total Working Days = Working Days - ( Vacation Days + Sick Days
                                            260 - ( 30 + 10) = 220  -->
                                            <tr>
                                                <td>Total working days?</td>
                                                <td></td>                                
                                                <td id="many_vacations"></td>
                                                <td id="many_vacations_year_1"></td>    
                                                <td id="many_vacations_year_2"></td>
                                                <td id="many_vacations_year_3"></td>
                                            </tr><!-- /.table row -->
                                            <!--Billable Hours = Hours Per Day – None Billable Hours 
                                            Hours Per Day 7.6 –  None Billable Hours 1.0 =  6.6 -->
                                            <tr>
                                                <td>How many billable hours per day?</td>
                                                <td></td>            
                                                <td id="billable_hours_per_day"></td>
                                                <td id="billable_hours_per_day_y1"></td>                  
                                                <td id="billable_hours_per_day_y2"></td>
                                                <td id="billable_hours_per_day_y3"></td>
                                            </tr><!-- /.table row -->
                                            <!--Billable Hours Per Year  = Total Working Days *  Billable Hours
                                            220 * 6.6 + 1.452 -->
                                            <tr>
                                                <td>How many billable hours per year?</td>
                                                <td></td>  
                                                <td id="billable_hours_per_year"></td>
                                                <td id="billable_hours_per_year_y1"></td>                
                                                <td id="billable_hours_per_year_y2"></td>
                                                <td id="billable_hours_per_year_y3"></td>
                                            </tr><!-- /.table row -->
                                        </tbody><!-- /.table body -->
                                    </table><!-- /.table -->
                                </div><!-- /.div table -->
                            </div><!-- /.div table -->
                        </div><!-- /.row -->     
                    </div><!-- /. container -->     
                </div><!-- /.div table -->           
            </div><!-- ./container -->
            
            <!-- ===============================================-->
            <!--  Script Calculations-->
            <!-- ===============================================-->      
           
            <script>
        
            </script>
