<div class="tab-content">
<!-- ===============================================-->
    <!--   Wizard Expenses  Tab 1 Content Details-->
<!-- ===============================================-->      

<div class="tab-pane active " role="tabpanel" aria-labelledby="bootstrap-wizard-tab1" id="bootstrap-wizard-tab1">
    <form novalidate="novalidate">
        
        <div class="card mb-1 mb-lg-0">
            <div class="card-header">
                <div class="row">
                    <div class="col-lg-4">
                    <a class="mb-0 d-block d-flex align-items-center" id="operating_budget_toogle" style='cursor: pointer;'>
                        <span class="circle"><span class="fas fa-plus fa-3x text-primary"></span></span><span class="ms-3"></span></a>
                        <a class="mb-0 d-block d-flex align-items-center pt-2" data-bs-toggle="collapse" data-bs-target="#collapseExpenses" aria-expanded="false" aria-controls="collapseExpenses"style='cursor: pointer;'>
                        <span class="circle"><span class="fas fa-arrow-down fa-3x text-success"></span></span><span class="ms-3"></span></a>
                    </div><!-- /.col-->
                    <div class="col-lg-4">
                        <h5  class="mb-0 d-block d-flex align-items-left">
                            Operating Expenses
                        </h5>
                    </div><!-- /.col-->
                    <div class="col-lg-4">
                        <a class="btn btn-falcon-outline-info float-end text-primary pt-2" data-html="true" data-bs-placement="auto" data-popover-content="#own" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
                    </div><!-- /.col-->
                </div><!-- /.row-->
            </div><!-- /.header-->
            <div class="collapse handlecurrencyformat" id="operating_budget_collapse">
            <!-- ===============================================-->
            <!--   Popover -->
            <!-- ===============================================-->      

                <div class="p-2">	
                    <div class="hidden d-none" id="own">	
                        <div class="popover-heading"><span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
                            Help Center
                        </div><!-- /.header-->
                            <div class="popover-body">
                                
                                <div class="card mb-3">
                                    <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>custom-assets/img/icons/spot-illustrations/corner-4.png);"></div> <!--/.bg-holder-->
                                        <div class="card-body position-relative">
                                            <div class="row">
                                                <div class="col-lg-12">		

                                                    <h5>What is your operating expense budget?</h5>

                                                    <p class="mt-1 ps-3 mb-3">	
                                                        The Expense Budget is a term commonly used by company owners and accountants that refers to the general operating expenses 
                                                        of the company that are usually paid on a monthly bases in order to keep the business operating. Some typical expenses items are:						
                                                    </p>  			
                                                    
                                                    <ul class="pt-1">
                                                        <li>accounting expenditures</li>
                                                        <li>books/magazines</li>
                                                        <li>bank fees</li>
                                                        <li>business insurance</li>
                                                        <li>gas/electricity</li>
                                                        <li>legal fees. </li>
                                                        <li>mv-maintenance</li>                     
                                                    </ul><!-- /.ul -->
                                                    <hr style="border-top: 3px solid #0064B2; background: transparent;"> 
                                                    <h5>How do I add a expenses?</h5>
                                                    <ol class="pt-1">
                                                        <li>Click Add new expense</li>                                                        
                                                        <li>From the first drop list select a expense purpose.</li>                   
                                                        <li>From the second drop list select a description category.</li>
                                                        <li>Enter a custom description if your expense is not in the category list.</li>
                                                        <li>Enter how many months you will allow for this expense (6-12 months is a good start).</li>
                                                        <li>Enter the payment monthly payment amount</li> 
                                                        <li>AuziPlan will do the calculation for you.</li>
                                                        <li><a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</a></li>
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
                            

                      
                                <div class="container">

                                    <div class="row">
                                        <div class="col-lg-6 col-md-12 col-sm-12">       
                                            <div class="card p-3">            
                                                <div class="form-floating mb-3">
                                                    <select name="purpose" class="form-select validate" id="purpose" aria-label="purpose">
                                                        <option value=''>Select a category</option>
                                                        <option value="Administration">Administration</option>
                                                        <option value="Marketing">Marketing</option>
                                                        <option value="Other">Other</option>
                                                        <option value="Public_Relations">Public Relations</option>
                                                    </select><!-- /.select-->
                                                </div><!-- /.form floating-->
                                                                    
                                                <div class="form-floating mb-3">
                                                    <select name="selectDescription" class="form-select validate" id="selectDescription" aria-label="Select Description">
                                                        <option value=''>Select the type  of expense</option>

                                                        <optgroup label="Administration" id="Administration">
                                                            <option value="Accounting expenditures">Accounting expenditures</option>
                                                            <option value="Books/Magazines">Books/Magazines </option>
                                                            <option value="Bank Fees">Bank Fees</option>
                                                            <option value="Business Insurance">Business Insurance </option>
                                                            <option value="Contract Labour">Contract Labour</option>
                                                            <option value="Conference-Seminars"> Conference and Seminars</option>
                                                            <option value="Dues-Subscriptions">Dues and Subscriptions</option>
                                                            <option value="Gas/Electricity">GAS/Electricity</option>
                                                            <option value="Legal-Professional Fees">Legal and Professional Fees </option>
                                                            <option value="Licenses/Fees/Permits">Licenses/Fees/Permits</option>
                                                            <option value="MV-Maintenance">MV-Maintenance </option>
                                                            <option value="MV-Insurance">MV-Insurance </option>
                                                            <option value="MV-Registration">MV-Registration </option>
                                                            <option value="Miscellaneous">Miscellaneous</option>
                                                            <option value="Office Supplies">Office Supplies</option>
                                                            <option value="Property taxes">Property Taxes</option>
                                                            <option value="Rent costs for non-production facilities">Rent costs for non-production facilities</option>
                                                            <option value="Repair costs for non-production facilities">Repair costs for non-production facilities</option>
                                                            <option value="Software License">Software License</option>
                                                            <option value="Telephone and Communications">Telephone and Communications</option>
                                                            <option value="Travel">Travel</option>
                                                            <option value="Utility ">Utility</option>

                                                        </optgroup><!-- /.group-->

                                                        <optgroup label="Marketing" id="Marketing">
                                                            <option value="Advertising costs">Advertising costs</option>
                                                            <option value="Direct mailing costs">Direct mailing costs</option>
                                                            <option value="Social costs">Social costs </option>
                                                            <option value="Sales material costs (such as brochures)">Sales material costs (such as brochures)</option>
                                                            <option value="Travel cost">Travel costs</option>
                                                        </optgroup><!-- /.group-->

                                                        <optgroup label="Other" id="Other">
                                                            <option value="Other_1">Other_1</option>
                                                            <option value="Other_2">Other_2<option>
                                                        </optgroup><!-- /.group-->

                                                        <optgroup label="Public Relations" id="Public_Relations">
                                                            <option value="Company naming and branding">Company naming and branding</option>
                                                            <option value="Social media managing">Social media managing </option>
                                                            <option value="Internet reputation management">Internet reputation management </option>
                                                            <option value="Social media management">Social media managing </option>
                                                        </optgroup><!-- /.group-->

                                                    </select><!-- /.select-->
                                                </div><!-- /.form floating-->


                                                <div class="form-floating mb-3">
                                                    <input type="text" name="custom_description" class="form-control validate" id="custome_description" placeholder="Custom Description" value="">
                                                    <label for="customedescription">Custom Description</label>
                                                </div><!-- /.form floating-->

                                                <div class="form-floating mb-3">
                                                    <input type="text" name="num_month" class="form-control validate" id="num_month" class="currencySign" onkeyup="calculateFromNumMonths()" placeholder="Price Per Share" value="">
                                                    <label for="num_month">How many months will you allow (6 is a good start)?</label>
                                                </div><!-- /.form floating-->

                                                </div><!-- /.card-->
                                            </div><!-- /.col-->

                                            <div class="col-lg-6 col-md-12 col-sm-12">       
                                                <div class="card p-3">            
                                                    <div class="form-floating mb-3">
                                                        <input type="text" name="monthly_cost" class="form-control currencySign" id="monthly_cost" onkeyup="calculateCostFromMonthly()" value="">
                                                        <label for="monthly_cost">Monthly Cost</label>
                                                    </div><!-- /.form floating-->
                            
                                                    <div class="form-floating mb-3">
                                                        <input type="text" readonly name="yearly_cost" class="form-control currencySign" id="yearly_cost" placeholder="Yearly Cost" value="">
                                                        <label for="yearly_cost">Yearly Cost</label>
                                                    </div><!-- /.form floating-->

                                                    <div class="form-floating mb-3">
                                                        <input type="text" type="text" readonly name="startupAllowance" class="form-control currencySign" id="startupAllowance" placeholder="Startup Allowance " value="">
                                                        <label for="startupAllowance">Startup Allowance</label>
                                                    </div><!-- /.form floating-->

                                                </div><!-- /.card-->
                                            </div><!-- /.col-->
                                        </div><!-- /.row-->
                                    </div><!-- ./container -->
                                    <div class="row p-3">
                                    <div class="border-dashed-bottom my-3"></div>
                                        <div class="col-12 col-sm-12 offset-0 pt-3">
                                            <input type='hidden' id="operatingcostexpense_id" value='0'>
                                            <button class="btn btn-falcon-danger" type="button" id="cancelsaveexpense" ><i class="far fa-window-close"></i> Cancel</button>
                                            <button type="button" id="btnsaveexpense" value="Save" class="btn btn-falcon-success float-end" name='finish' onclick=""><i class="far fa-save"></i> Save and Continue</button>
                                        </div><!-- /.col 12-->
                                    </div>
                                </div>              
                            </div>
                        

                            <div class="mb-3" style="display:none">
                                <label class="form-label" for="bootstrap-wizard-wizard-email">Email*</label>
                                <input class="form-control" type="email" name="email" placeholder="Email address" pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$" required="required" id="bootstrap-wizard-wizard-email" data-wizard-validate-email="true" />
                                <div class="invalid-feedback">You must add email</div>
                            </div>

                            <!-- ===============================================-->
                            <!--   Result table -->
                            <!-- ===============================================-->      
                            <div class="collapse" id="collapseExpenses">
                                <div class="border p-card rounded">
                                <div class="box-body pt-3">
                                    <div class="box-body table_one">
                                        <div class="row" id="monthly_expense_row_add">
                            
                                            <div class="col-lg-12 col-md-12 col-sm-12" id="expense_table" style='margin-top: 16px;'>
                                                <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
                                                    <div class="table-responsive scrollbar">
                                                        <div class="fixTableHead">
                                                        <table id="monthly_expenseDT" class="table table-striped fs--1 mb-0" style="width:100%">
                                                            <thead class="bg-200 text-900">
                                                                <tr>                                  
                                                                    <th>Purpose</th>           
                                                                    <th>Description</th>               
                                                                    <th>Startup Allowance</th>   
                                                                    <th>Monthly</th>
                                                                    <th>Yearly 1</th>  
                                                                    <th>Yearly 2</th>     
                                                                    <th>Yearly 3</th>                                           
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
                                                        </tr><!-- /.table row-->
                                                    </tfoot><!-- /.table footer-->
                                                </table><!-- /.table-->         
                                            </div><!-- /.table head--> 
                                        </div><!-- /.table responsive scroll--> 
                                    </div><!-- /.table example 2--> 
                                </div><!-- /.col 12--> 
                            </div><!-- /.row-->     
                        </div><!-- /.box--> 
                    </div><!-- /.box body--> 
             
                <a class="mb-0 d-block d-flex align-items-center pt-5" data-bs-toggle="collapse" data-bs-target="#collapseExpenses" aria-expanded="false" aria-controls="collapseExpenses"style='cursor: pointer;'>
                <span class="circle"><span class="fas fa-arrow-up fa-3x text-success"></span></span><span class="ms-3"></span></a>	
                </div><!-- /.box--> 
            </div><!-- /.box body--> 
        </form><!-- /.form--> 
    </div>   
</div><!-- /.tab pane--> 
<input type="hidden" id="getcur" value="<?php echo $currency; ?>">
