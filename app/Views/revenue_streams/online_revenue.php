

                            <!-- ===============================================-->
                            <!--   Wizard Online Revenue  Tab 3 Content Details-->
                            <!-- ===============================================-->      
                            
                            <div class="tab-pane " role="tabpanel" aria-labelledby="bootstrap-wizard-tab3" id="bootstrap-wizard-tab3">
                                
                            <form novalidate="novalidate">  
                                <div class="card mb-1 mb-lg-0">
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-lg-6">
                                            <a class="mb-0 d-block d-flex align-items-center" href="#onl-form"  onclick="add_online()" id="btnOnl" data-bs-toggle="collapse" aria-expanded="false" aria-controls="onl-form">
                                            <span class="circle-dashed"><span class="fas fa-plus"></span></span><span class="ms-3"></span></a>
                                            </div><!-- /.col-->
                                            <div class="col-lg-6">
                                            <a class="btn btn-falcon-outline-info float-end text-primary" data-html="true" data-bs-placement="auto" data-popover-content="#onl" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
                                        </div><!-- /.col-->
                                    </div><!-- /.row-->
                            
                                </div><!-- /.header-->


                                <!-- ===============================================-->
                                <!--   Popover -->
                                <!-- ===============================================-->    

                                <div class="p-2">              
                                
                            
                                <div class="hidden d-none" id="onl">    
                                    <div class="popover-heading"><span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
                                        Help Center
                                    </div>
                                        <div class="popover-body">
                                            
                                            <div class="card mb-3">
                                                <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>custom-assets/img/icons/spot-illustrations/corner-4.png);"></div> <!--/.bg-holder-->
                                                    <div class="card-body position-relative">
                                                        <div class="row">
                                                            <div class="col-lg-12">                   
                                                                <h5>What are your online unit sales projection?</h5>   
                                                                <p class="mt-1 ps-3 mb-3">	

                                                                     Making online sales is a fantastic way to make money. This will let you earn cash from the comfort of your home, while drastically reducing overheads. 
                                                                     There are many things you can sell online. Some typical online businesses are as follow:
                                                                </p>
                                                                <ul class="pt-1" >
                                                                 
                                                                    <li>amazon</li>
                                                                    <li>clothing</li>
                                                                    <li>software</li>

                                                                </ul>
                                                                <hr style="border-top: 3px solid #0064B2; background: transparent;"> 
                                                                <h5>How do I evaluate online sales?</h5>
                                                                <ol class="pt-1">    
                                                                    <li>Click the + button</li>                                      
                                                                    <li>How may people will view your web site daily?</li>
                                                                    <li>What percentage will make a purchases?</li>
                                                                    <li>How many item's do you think they will buy?</li>     
                                                                    <li>How many purchases each year?</li>
                                                                    <li>What is the average selling price?</li>
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
                                  
                                            
                                                <div class="collapse" id="onl-form">
                                                    <div id="onl">
                                                        <div class="container" >
                                                            <div class="row">
                                                            <p class="mt-2">                            
                                                                The page header is a nice little feature to add appropriate spacing around the headings on a page. 
                                                                This is particularly helpful on a web page where you may have several post titles and need a way to add distinction to each of them.            
                                                            </p>  
                                                        <div class="container">
                                                            <div class="card text-left" style="width:100%">
                                                            <div class="card-header">
                                                                
                                                            </div>
                                                            <div>
                                                                <div class="row p-2">
                                                            
                                                                </div><!-- /.collapse -->
                                                                <div class="row p-4">
                                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                                    <div class="form-floating mb-3">
                                                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="<?= ($row->max_view) ? $row->max_view : '' ?>">
                                                                    <label for="max_view">How may people will view your web site daily?</label>
                                                                    </div><!-- /.form -floating -->

                                                                    <div class="form-floating mb-3">
                                                                    <input type="text" name="percent_purch"  class="form-control" id="percent_purch" placeholder="Customers" value="<?= ($row->percent_purch) ? $row->percent_purch : '' ?>">
                                                                    <label for="percent_purch">What percentage will make a purchases?</label>
                                                                    </div><!-- /.form -floating-->

                                                                    <div class="form-floating mb-3" style="display: none">
                                                                    <input type="text" name="no_days"  class="form-control" id="no_days" placeholder="No Days" value="<?= ($row->no_days) ? $row->no_days : '' ?>">
                                                                    <label for="no_days">How many days is your online store open for trading</label>
                                                                    </div><!-- /.form -floating-->

                                                                    <div class="form-floating mb-3">
                                                                    <input type="text" name="no_purchase"  class="form-control" id="no_purchase" placeholder="Purchase Qty" value="<?= ($row->no_purchase) ? $row->no_purchase : '' ?>">
                                                                    <label for="no_purchase">How many item's do you think they will buy?</label>
                                                                    </div><!-- /.form -floating-->

                                                                    <div class="form-floating mb-3">
                                                                    <input type="text" name="no_reorder"  class="form-control" id="no_reorder" placeholder="No of Reorders" value="<?= ($row->no_reorder) ? $row->no_reorder : '' ?>">
                                                                    <label for="no_reorder">How many purchases each year?</label>
                                                                    </div><!-- /.form -floating -->

                                                                    <div class="form-floating mb-3">
                                                                    <input type="text" name="product_price"  class="form-control" id="product_price" placeholder="Product Price" value="<?= ($row->product_price) ? $row->product_price : '' ?>">
                                                                    <label for="product_price">What is the average selling price?</label>
                                                                    </div><!-- /.form -floating-->

                                                                </div><!-- /.col -->

                                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                                    <div class="form-floating mb-3">
                                                                    <input type="text" name="projected_cost"  class="form-control" id="projected_cost" placeholder="Projected cost" value="<?= ($row->projected_cost) ? $row->projected_cost : '' ?>">
                                                                    <label for="projected_cost">What is the average cost as a percentage of sales?</label>
                                                                    </div><!-- /.form -floating-->

                                                                    <div class="form-floating mb-3">
                                                                    <input type="text" name="sales_increase"  class="form-control" id="sales_increase" placeholder="Sales Increase " value="<?= ($row->sales_income) ? $row->sales_income : '' ?>">
                                                                    <label for="sales_increase">Sales increase each year by?</label>
                                                                    </div><!-- /.form -floating-->

                                                                    <div class="form-floating mb-3">
                                                                    <input type="text" readonly name="avg_purchase"readonly  class="form-control" id="avg_purchase" placeholder="Average Purchase" value="">
                                                                    <label for="avg_purchase"> Your average purchase are:</label>
                                                                    </div><!-- /.form -floating-->

                                                                    <div class="form-floating mb-3">
                                                                    <input type="text" readonly name="avg_cost"readonly  class="form-control" id="avg_cost" placeholder="Average Cost" value="">
                                                                    <label for="avg_cost">Your average cost is:</label>
                                                                    </div><!-- /.form -floating-->

                                                                    <div class="form-floating mb-3">
                                                                    <input type="text" name="customer_cost"readonly  class="form-control" id="customer_cost" placeholder="Customer Cost" value="">
                                                                    <label for="customer_cost">Your customer Purchases are:</label>
                                                                    </div><!-- /.form -floating-->

                                                                </div><!-- /.col -->

                                                                </div><!-- /.row -->
                                                            </div><!-- /.row -->
                                                            </div><!-- /.card -->
                                                        </div><!-- /.container -->
                                                                                                                
                                                    </div><!-- ./row -->
                                                </div><!-- ./container -->                                                
                                            </div><!-- ./pant and equipment -->     
                                                                        
                                            <div class="row p-3">
                                                <div class="border-dashed-bottom my-3"></div>
                                                        <div class="col-12 col-sm-12 offset-0 pt-3">               
                                                            <button class="btn btn-falcon-danger" onclick="cancel_product()" type="button" id="btnCancel_product" ><i class="far fa-window-close"></i> Cancel</button>
                                                            <button type="button" id="btnSavingSales" class="btn  btnSavingSales btn-falcon-success float-end" value="<?php echo $i + 1; ?>"><i class="fa fa-save"></i> Save and Continue</button>
                                                        </div>
                                                    </div>
                                                </div>   
                                            </div>
                                        </form>
                                    


                                <div class="container mt-3">
                                    <form role="form" method="post" id="temp" enctype="multipart/form-data">
                                        <!--table section unit qty starts -->
                                        <div class="row pt-2">
                                            <h4 class="my-0 font-weight-normal">Unit Sales</h4>
                                            <div class="table-responsive">
                                                    <div class="fixTableHead">
                                                <table class="table table-striped fs--1 mb-0" id="table_unit_sales">
                                                    <tbody>
                                                        <tr>
                                                            <th width="50%">&nbsp;</th>
                                                            <th>Yearly</th>
                                                            <th>Quarterly</th>
                                                            <th>Monthly</th>
                                                            <th>Weekly</th>
                                                        </tr><!-- /.table row -->
                                                        <tr>
                                                            <td>Total potential customers</td>
                                                            <td id="potential_cust_yearly">0</td>
                                                            <td id="potential_cust_quaterly">0</td>
                                                            <td id="potential_cust_monthly">0</td>
                                                            <td id="potential_cust_weekly">0</td>
                                                        </tr><!-- /.table row -->
                                                        <tr>
                                                            <td>Actual number of customers (per year)</td>
                                                            <td id="actual_cust_yearly">0</td>
                                                            <td id="actual_cust_quaterly">0</td>
                                                            <td id="actual_cust_monthly">0</td>
                                                            <td id="actual_cust_weekly">0</td>
                                                        </tr><!-- /.table row -->
                                                        <tr>
                                                            <td>Total products sold each year</td>
                                                            <td id="product_sold_yearly">0</td>
                                                            <td id="product_sold_quaterly">0</td>
                                                            <td id="product_sold_monthly">0</td>
                                                            <td id="product_sold_weekly">0</td>
                                                        </tr><!-- /.table row -->
                                                        <tr style="display:none">
                                                            <td>Average customer purchases based on monthly product replacements</td>
                                                            <td id="avgcust_purch_yearly">0</td>
                                                            <td id="avgcust_purch_quaterly">0</td>
                                                            <td id="avgcust_purch_monthly">0</td>
                                                            <td id="avgcust_purch_weekly">0</td>
                                                        </tr><!-- /.table row -->
                                                    </tbody><!-- /.table body -->
                                                </table><!-- /.table -->
                                            </div><!-- /.div table -->
                                        </div><!-- /.div table -->
                                    </div><!-- /.row -->

                                    <!--table section unit qty ends -->
                                    <!--table section sales qty starts -->
                                    <div class="row mb-3 mt-3">
                                        <h4 class="my-0 font-weight-normal">Sales Summary</h4>
                                        <div class="table-responsive">  
                                            <div class="fixTableHead">
                                            <table class="table table-striped fs--1 mb-0" id="table_summary">
                                            <tbody>
                                                <tr>
                                                    <th width="50%">&nbsp;</th>
                                                    <th><strong>Yearly</strong></th>
                                                    <th><strong>Quarterly</strong></th>
                                                    <th><strong>Monthly</strong></th>
                                                    <th><strong>Weekly</strong></th>
                                                </tr><!-- /.table row -->
                                                <tr>
                                                    <td>Total potential annual revenue</td>
                                                    <td id="annual_revenue_yearly">0</td>
                                                    <td id="annual_revenue_quaterly">0</td>
                                                    <td id="annual_revenue_monthly">0</td>
                                                    <td id="annual_revenue_weekly">0</td>
                                                </tr><!-- /.table row -->
                                                <tr>
                                                    <td>Total potential annual cost</td>
                                                    <td id="annual_cost_yearly">0</td>
                                                    <td id="annual_cost_quaterly">0</td>
                                                    <td id="annual_cost_monthly">0</td>
                                                    <td id="annual_cost_weekly">0</td>
                                                </tr><!-- /.table row -->
                                                <tr>
                                                    <td>Total potential annual gross profit</td>
                                                    <td id="annual_gopro_yearly">0</td>
                                                    <td id="annual_gopro_quaterly">0</td>
                                                    <td id="annual_gopro_monthly">0</td>
                                                    <td id="annual_gopro_weekly">0</td>
                                                </tr><!-- /.table row -->
                                                <tr class="mt-2 text-primary" style="background: #eaf2ff">
                                                    <td>Projected Cost as % of Gross Sales</td>
                                                    <td id="project_cost_percent_yearly">0</td>
                                                    <td id="project_cost_percent_quaterly">0</td>
                                                    <td id="project_cost_percent_monthly">0</td>
                                                    <td id="project_cost_percent_weekly">0</td>
                                                </tr><!-- /.table row -->
                                                <tr class="mt-2 text-success">
                                                    <td>Projected Gross Profit as % of Gross Sales</td>
                                                    <td id="project_gopro_percent_yearly">0</td>
                                                    <td id="project_gopro_percent_quaterly">0</td>
                                                    <td id="project_gopro_percent_monthly">0</td>
                                                    <td id="project_gopro_percent_weekly">0</td>
                                                </tr><!-- /.table row -->
                                            </tbody><!-- /.table body -->
                                        </table><!-- /.table -->
                                    </div><!-- /.div table -->
                                </div><!-- /.div table -->
                            </div><!-- /.row -->       
                        </form><!-- /.form -->
                        <!-- New wizard style footer 1 begins -->
                    </div>    
                </div>
            
                <!-- ===============================================-->
                <!--   Wizard Done  Tab 4 Content Details-->
                <!-- ===============================================-->      

                <div class="tab-pane text-center " role="tabpanel" aria-labelledby="bootstrap-wizard-tab4" id="bootstrap-wizard-tab4">
                    <div class="wizard-lottie-wrapper">
                        <div class="lottie wizard-lottie mx-auto my-3" data-options='{"path":"<?php echo site_url(); ?>template-assets/img/animated-icons/celebration.json"}'></div>
                    </div><!-- /.wizard wrapper -->    
                        <h4 class="mb-1">Great Stage 5 is done!</h4>
                        <p>Now head over to the stage 6 and analysis your results</p>
                        <a class="btn btn-primary px-5 my-3" href="<?php echo site_url(); ?>revenue">Let's check</a>
                        <a class="btn btn-falcon-success px-5 my-3" href="<?php echo site_url(); ?>analysis"><i class="fas fa-arrow-right"></i> Stage 6 </a>                   
                    </div>
                </div>
            </div>


            <div class="card-footer">
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
                    </div><!-- /.row -->    
                </div><!-- /.footer -->    
            </div>
        </div>
        
        




