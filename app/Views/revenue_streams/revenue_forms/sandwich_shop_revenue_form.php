    
    
            
       
            <!-- ===============================================-->
            <!--  Input Text Boxes-->
            <!-- ===============================================-->      
   
            <div class="row">  
                    <div class="col-lg-6 col-md-12 col-sm-12">          
                        <div class="card p-3 handlecurrencyformat">
                                            
                                 
                            <div class="form-floating mb-3">
                                <input type="text" name="passing_customers"  class="form-control numberSign" id="passing_customers" class="currency_formate" placeholder="passing_customers" value="5.000">
                                <label for="passing_customers">How man customers pass by you shop</label>
                            </div><!-- /.form -floating -->

                            <div class="form-floating mb-3">
                                <input type="text" name="weeks_between_visits"  class="form-control numberSign" id="percentage_entries" placeholder="Percentage Entries" value="1%">
                                <label for="percentage_entries">What percentage enter your shop?</label>
                            </div><!-- /.form -floating-->

                            <div class="form-floating mb-3">
                                <input type="text" name="no_of_items"  class="form-control numberSign" id="no_of_items" placeholder="No of Items" value="2">
                                <label for="no_of_items">How many items will they buy?</label>
                            </div><!-- /.form -floating-->

                            <div class="form-floating mb-3">
                                <input type="text" name="spend_per_cut"  class="form-control currencySign" id="average_price" placeholder="Average Price" value="$34.57">
                                <label for="average_price">What is your average price?</label>
                            </div><!-- /.form -floating-->


                            <div class="form-floating mb-3">
                                <input type="text" name="spend_per_cut"  class="form-control currencySign" id="average_price" placeholder="Average Price" value="$34.57">
                                <label for="hot_drinks">What is your average price?</label>
                            </div><!-- /.form -floating-->



                        </div><!-- card-->

                    </div><!-- /.col-->

                    <div class="col-lg-6 col-md-12 col-sm-12">    
                        <div class="card p-3">
        
                            
                        <!--1, total_clients_per_stylist = client_base_per_stylist / weeks_between_visits-->
                        <div class="form-floating mb-3">
                            <input type="text" name="total_clients_per_stylist"  class="form-control numberSign" readonly id="total_clients_per_stylist" placeholder="Total Clients Per Stylist" value="14">
                            <label for="total_clients_per_stylist">Total clients per stylist</label>
                        </div><!-- /.form -floating-->

                        <!--2, clients_per_week = no_of_stylists * client_base_per_stylist-->
                        <div class="form-floating mb-3">
                            <input type="text" name="clients_per_week"  class="form-control numberSign" readonly id="clients_per_week" placeholder="Clients Per Week " value="43">
                            <label for="clients_per_week">Total weekly Clients</label>
                        </div><!-- /.form -floating-->

                        <!--3, revenue_per_week = clients_per_week * spend_per_cut-->
                        <div class="form-floating mb-3">
                            <input type="text" readonly name="revenue_per_week"readonly  class="form-control currencySign " id="revenue_per_week" placeholder="Revenue Per Week" value="$1,482">
                            <label for="revenue_per_week">Total revenue per week</label>
                        </div><!-- /.form -floating-->

                        <!--4, salon_revenue_per_year = revenue_per_week * weeks_open-->
                        <div class="form-floating mb-3">
                            <input type="text" readonly name="salon_revenue_per_year"readonly  class="form-control currencySign" id="salon_revenue_per_year" placeholder="Salon Revenue Per Year" value="$77,042">
                            <label for="salon_revenue_per_year">Total revenue on services</label>
                        </div><!-- /.form -floating-->

                        <!--5, retail_revenue_per_week = clients_per_week * average_spend_per_customer-->
                        <div class="form-floating mb-3">
                            <input type="text" readonly name="retail_revenue_per_week"readonly  class="form-control currencySign" id="retail_revenue_per_week" placeholder="Retail Revenue Per Week" value="$129.00">
                            <label for="retail_revenue_per_week">Weekly products revenue</label>
                        </div><!-- /.form -floating-->            


                        </div><!-- card-->

                  
                        </div><!-- /.col-->
                        <div class="border-dashed-bottom my-3"></div>
                <div class="border p-card rounded">
                        <input type='hidden' id='productrevenueid' value='0'>
                        <button class="btn btn-outline-danger" type="button" id="btncancelproductrevenue" ><i class="far fa-window-close"></i> Cancel</button>
                        <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> <i class="far fa-arrow-alt-circle-down" aria-hidden="true"></i> Yearly Summary</button>
                        <input name="save_local_products_step_2" type="button" id="btnsaveproduct" value="Save and Continue" class="btn btn-outline-success float-end">
                    </div>
                </div><!-- /.row-->
            

            <!-- ===============================================-->
            <!--  Results Summary Table-->
            <!-- ===============================================-->      

            <div class="collapse" id="collapseExample">

                <div class="container mt-3">
             
                    <!--table section unit qty starts -->
                    <div class="row pt-2">
                        <h4 class="my-0 font-weight-normal">Unit Sales</h4>
                        <div class="table-responsive">
                                <div class="fixTableHead">
                            <table class="table table-striped fs--1 mb-0" id="table_unit_sales">
                                <tbody>
                                    <tr>
                                        <th width="50%">&nbsp;</th>
                                        <th>Monthly</th>
                                        <th>Year 1</th>
                                        <th>Year 2</th>
                                        <th>Year 3</th>
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
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
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
    <!-- New wizard style footer 1 begins -->
</div>    

    <div class="border p-card rounded">
        <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> <i class="far fa-arrow-alt-circle-up" aria-hidden="true"></i> Close</button>
    </div>
</div>
                                
        <!-- ===============================================-->
        <!--  Calculations-->
        <!-- ===============================================-->      


        <script src="<?php echo base_url('custom-assets/revenue.js') ?>"></script>
        <!--
            
        Calculations Reference:

        1, total_clients_per_stylist = client_base_per_stylist / weeks_between_visits

        2, clients_per_week = no_of_stylists * client_base_per_stylist

        3, revenue_per_week = clients_per_week * spend_per_cut

        4, salon_revenue_per_year = revenue_per_week * weeks_open

        5, retail_revenue_per_week = clients_per_week * average_spend_per_customer

        6, retail_revenue_per_year = retail_revenue_per_week * weeks_open

        7, total_retail_revenue_per_year = salon_revenue_per_year + total_retail_revenue_per_year

        8, total_salon_revenue_per_month = total_retail_revenue_per_year / 12

        9,total_salon_revenue_per_year_1 = total_salon_revenue_per_month * 12

        -->

        