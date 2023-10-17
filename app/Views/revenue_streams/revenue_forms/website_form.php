            <!-- ===============================================-->
            <!--  Input Text Boxes-->
            <!-- ===============================================-->      
   
                <div class="row">  
                    <div class="col-lg-6 col-md-12 col-sm-12">          
                        <div class="card p-3 handlecurrencyformat">
                                    
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

                        </div><!-- card-->

                    </div><!-- /.col-->

                    <div class="col-lg-6 col-md-12 col-sm-12">    
                        <div class="card p-3">

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

       