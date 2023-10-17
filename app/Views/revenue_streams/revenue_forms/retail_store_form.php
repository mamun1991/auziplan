    
       
            <!-- ===============================================-->
            <!--  Input Text Boxes-->
            <!-- ===============================================-->      
            <form class="retail-store" id="retail_store_revenue">
                <div class="row">  
                    <div class="col-lg-6 col-md-12 col-sm-12">          
                        <div class="card p-3 handlecurrencyformat">
                            
                            <div class="form-floating mb-3">
                                <input type="text" name="no_days_open" class="form-control numberSign" id="no_days_open" placeholder="No Days Open" value="354">
                                <label for="no_days_open">How many days is your store open per year? (Average 354)</label>
                            </div><!-- /.form -floating -->    
                            
                            <div class="form-floating mb-3">
                                <input type="text" name="footfall" class="form-control numberSign" id="footfall" placeholder="Footfall" value="">
                                <label for="footfall">How may people will pass by your store?</label>
                            </div><!-- /.form -floating -->

                            <div class="form-floating mb-3">
                                <input type="text" name="percent_purch"  class="form-control percentSign" id="store_entries_percentage" placeholder="Store Entries Percent" value="">
                                <label for="store_entries_percentage">What percentage will come in to your store?</label>
                            </div><!-- /.form -floating-->


                            <div class="form-floating mb-3">
                                <input type="text" name="customer_purchases_percentage"  class="form-control percentSign " id="customer_purchases_percentage" placeholder="Customer Purchases Percentage" value="">
                                <label for="customer_purchases_percentage">What percentage will buy?</label>
                            </div><!-- /.form -floating-->

                            <div class="form-floating mb-3">
                                <input type="text" name="average_sale_value"  class="form-control currencySign" id="average_sale_value" placeholder="Average Sale Value" value="">
                                <label for="average_sale_value">Average Sale Value</label>
                            </div><!-- /.form -floating -->

                            <div class="form-floating mb-3">
                                <input type="text" name="average_cost_value"  class="form-control currencySign" id="average_cost_value" placeholder="Average Cost Value" value="">
                                <label for="average_cost_value">Average Cost Value</label>
                            </div><!-- /.form -floating -->





                            
          
                        </div><!-- card-->

                    </div><!-- /.col-->

                    <div class="col-lg-6 col-md-12 col-sm-12">    

                        <div class="card p-3 handlecurrencyformat">
        
       
                        <div class="card h-700">
                                  <div class="card-header d-flex flex-between-center py-2">
                                    <h6 class="mb-0">Bank Finance</h6>  
                                  </div><!-- /.card header -->
                       



                              <div class="card-body d-flex flex-column justify-content-between">
                                <div class="row align-items-center">
                                  <div class="col-md-5 col-xxl-12 mb-xxl-1">


                                    <div class="position-relative">
                                      <!-- Find the JS file for the following chart at: src/js/charts/echarts/most-leads.js-->
                                      <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js-->
                                      <div class="echart-most-leads my-2" data-echart-responsive="true"></div>
                                        <div class="position-absolute top-50 start-50 translate-middle text-center">
                                          <p class="fs--1 mb-0 text-400 font-sans-serif fw-medium">Total</p>
                                          <p class="fs-3 mb-0 font-sans-serif fw-medium mt-n2">15.6k</p>
                                        </div>
                                      </div>
                                    </div>



                                  <div class="col-xxl-12 col-md-7">
                                    <hr class="mx-ncard ot-3mb-0 d-md-none d-xxl-block" />
                                      <div class="d-flex flex-between-center border-bottom py-3 pt-md-0 pt-xxl-3">
                                        <div class="d-flex"><i class="fas fa-money-check-alt fa-1x text-success  me-2"aria-hidden="true" ></i>
                                          <h6 class="text-700 mb-0"> Principle Amount </h6>



                                        </div><!-- /.d flex -->
                                            <p class="fs--1 text-500 mb-0 fw-semi-bold"></p>
                                            <h6 class="text-700 mb-0" id="loanAmountText">   
                                              
                                            <?php echo $cur . ' ' . number_format($loan_amount, 0, '.', ','); ?>       
                                          
                                          
                                          </h6>




                                          

                                            
                                      </div><!-- /.d flex -->

                                      
                                      <div class="form-group text-center">                
                                        <input name="loanAmount" id="loanAmount" type="range" min="0" max="10000000" step="50000" value="<?= (isset($loan_amount)) ? $loan_amount : '' ?>" class="RangeSelectorDOE" />
                                      </div><!-- /.form group -->



                                    <div class="d-flex flex-between-center border-bottom py-3">
                                      <div class="d-flex"><i class="fas fa-calendar-alt  fa-1x text-primary  me-2"aria-hidden="true" ></i>
                                        <h6 class="text-700 mb-0">Loan Term </h6>
                                      </div><!-- /.d flex -->       
                                      <h6 class="text-700 mb-0" id="loanYearText"><?= (isset($loan_length)) ? $loan_length : '0' ?></h6>
                                    </div><!-- /.d flex -->


                                    <div class="form-group text-center">                                
                                        <input name="loanYear" id="loanYear" type="range" min="1" max="30" step="1" value="<?= (isset($loan_length)) ? $loan_length : '' ?>" class="RangeSelectorDOE" />
                                    </div><!-- /.form group -->


                                    <div class="d-flex flex-between-center border-bottom py-3">
                                        <div class="d-flex"><i class="fas fa-percent fa-1x text-danger  me-2"aria-hidden="true" ></i>
                                          <h6 class="text-700 mb-0">Interest Rate </h6>
                                        </div><!-- /.d flex -->              
                                        <h6 class="text-700 mb-0"id="loanIntrestText"><?= (isset($annual_interest)) ? $annual_interest : '0' ?>%</h6>
                                    </div><!-- /.d flex -->


                                    <div class="form-group text-center">              
                                      <input name="loanIntrest" id="loanIntrest" type="range" min="1" max="50" step="0.5" value="<?= (isset($annual_interest)) ? $annual_interest : '0' ?>" class="RangeSelectorDOE" />
                                    </div><!-- /.form group -->


                                    <div class="d-flex flex-between-center border-bottom py-3 border-bottom-0 pb-0 mb-5">
                                      <div class="d-flex"><i class="fas fa-calculator fa-1x text-warning  me-2"aria-hidden="true" ></i>
                                        <h6 class="text-700 mb-0">Re Payment </h6>
                                      </div><!-- /.d flex -->    
                                      <h6 class="text-700 mb-0">53%</h6>
                                    </div><!-- /.d flex -->


                                  </div><!-- /.col-6 -->
                                </div><!-- /.row -->
                              </div><!-- /.card body -->    
                            </div><!-- /.card -->

























                            <!--calculation total_daily_customers= footfall x store_entries_percentage -->
                            <div class="form-floating mb-3" style="display:none">
                                <input type="text" name="total_daily_customers"  class="form-control numberSign" readonly id="total_daily_customers" onkeyup="retail_store_revenue()" placeholder="" value="">
                                <label for="total_daily_customers">Total customers per day</label>
                            </div><!-- /.form -floating-->

                            <!--calculation sales_per_day = total_daily_customers x customer_purchases_percentage -->
                            <div class="form-floating mb-3"style="display:none" >
                                <input type="text" name="sales_per_day"  class="form-control numberSign" readonly id="sales_per_day" onkeyup="retail_store_revenue()" placeholder="" value="">
                                <label for="sales_per_day">Total sale per day</label>
                            </div><!-- /.form -floating-->


                            <!--calculation revenue_per_day = sales_per+day x average_sale_value -->
                            <div class="form-floating mb-3" style="display:none">
                                <input type="text" name="revenue_per_day"  class="form-control currencySign" readonly id="revenue_per_day" onkeyup="retail_store_revenue()" placeholder="" value="">
                                <label for="revenue_per_day">Total revenue per day</label>
                            </div><!-- /.form -floating-->


                            <!--calculation average_cost = sales_per_day x average_sale_value -->
                            <div class="form-floating mb-3"style="display:none">
                                <input type="text" name="average_cost"  class="form-control currencySign " readonly id="average_cost"onkeyup="retail_store_revenue()" placeholder="" value="">
                                <label for="average_cost">Average Cost Per Day</label>
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
            </form><!-- /.form-->

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
                                        <th width="20%">&nbsp;</th>
                                        <th width="10%"></th></th>
                                        <th width="10%"><b>Monthly</b></th>
                                        <th width="10%"><b>Year 1</b></th>
                                        <th width="10%"><b>Year 2</b></th>
                                        <th width="10%"><b>Year 3</b></th>

                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Total potential customers</td>
                                            <td></td>
                                            <td>
                                            <input type="text" name="total_monthly_customers"  class="form-control numberSign" readonly id="total_monthly_customers" onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>
                                            <td>
                                            <input type="text" name="total_yearly_customers"  class="form-control numberSign" readonly id="total_yearly_customers" onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr style="display:none">
                                            <td>Actual number of customers (per year)</td>
                                            <td></td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Total products sold each year</td>
                                            <td></td>
                                            <td>
                                                <input type="text" name="sales_per_month"  class="form-control numberSign" readonly id="sales_per_month" onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>
                                            <td>
                                                <input type="text" name="sales_per_year"  class="form-control numberSign" readonly id="sales_per_year" onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                       
                     
                                        <tr>
                                            <td>Total Revenue</td>
                                            <td></td>
                                            <td>
                                                <input type="text" name="monthly_retail_revenue"  class="form-control currencySign" readonly id="monthly_retail_revenue" onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>
                                            <td>
                                                <input type="text" name="Year_1"  class="form-control currencySign" readonly id="Year_1"  onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Total potential annual cost</td>
                                            <td></td>
                                            <td>
                                                <input type="text" name="monthly_cost"  class="form-control currencySign" readonly id="monthly_cost"  onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>
                                            <td>
                                                <input type="text" name="Year_1_cost"  class="form-control currencySign" readonly id="Year_1_cost"  onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Total potential annual gross profit</td>
                                            <td></td>

                                            <td> 
                                             <input type="text" name="monthly_gross_profit"  class="form-control currencySign" readonly id="monthly_gross_profit"  onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>


                                        
                                            <td>
                                                <input type="text" name="Year_1_gross_profit"  class="form-control currencySign" readonly id="Year_1_gross_profit"  onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>

                                            <td>0</td>
                                            <td>0</td>

                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Projected Cost as % of Gross Sales</td>
                                            <td></td>
                                            <td>
                                            <input type="text" name="monthly_cost_per"  class="form-control percentSign" readonly id="monthly_cost_per"  onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>
                                            <td>
                                                <input type="text" name="Year_1_cost_per"  class="form-control percentSign" readonly id="Year_1_cost_per"  onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Projected Gross Profit as % of Gross Sales</td>
                                            <td></td>
                                            <td>
                                                <input type="text" name="monthly_profit_per"  class="form-control percentSign" readonly id="monthly_profit_per"  onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>
                                            <td>
                                                <input type="text" name="Year_1_profit_per"  class="form-control percentSign" readonly id="Year_1_profit_per"  onkeyup="retail_store_revenue()" placeholder="" value="">
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                    </tbody><!-- /.table body -->
                                </table><!-- /.table -->
                            </div><!-- /.div table -->
                        </div><!-- /.div table -->
                    </div><!-- /.row -->       
                <!-- New wizard style footer 1 begins -->
            </div>    

        <div class="border p-card rounded mt-3">
            <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> <i class="far fa-arrow-alt-circle-up" aria-hidden="true"></i> Close</button>
        </div>
</div>
                                     
<!-- ===============================================-->
<!--  Calculations-->
<!-- ===============================================-->      


     
<!--//////////////////////////////////////////////////////////////////////////////////////
/// Retail Store  revenue projections start/////////////////
  

// 1, total_daily_customers = footfall * store_entries_percentage    

// 2, sales_per_day = total_daily_customers * customer_purchases_percentage

// 3, revenue_per_day = sales_per_day + average_sale_value 

// 4, average_cost = sales_per_day * average_cost_value 

// 5, monthly_revenue = revenue_per_day * no_days

// 6, Year_1 = monthly_revenue * 12


-->

    <script type="text/javascript"> 

        function retail_store_revenue(){
            var url = "<?php echo site_Url(); ?>user/currency";
            var param = "";
            var cur;

            $.get(url, param,function(result) {

                cur = result; 
                // input side


                var no_days_open = $('#no_days_open').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var footfall = $('#footfall').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

                var store_entries_percentage = $('#store_entries_percentage').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var customer_purchases_percentage = $('#customer_purchases_percentage').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

                var average_sale_value = $('#average_sale_value').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var average_cost_value = $('#average_cost_value').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var average_cost = $('#average_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
            
                var total_daily_customers = $('#total_daily_customers').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                var sales_per_day = $('#sales_per_day').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');          
                var revenue_per_day = $('#revenue_per_day').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  



                //monthly
              
                var total_monthly_customers = $('#total_monthly_customers').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                var sales_per_month = $('#sales_per_month').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var monthly_retail_revenue = $('#monthly_retail_revenue').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var monthly_cost = $('#monthly_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var monthly_gross_profit = $('#monthly_gross_profit').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var monthly_cost_per = $('#monthly_cost_per').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var monthly_profit_per = $('#monthly_cost_per').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   


                //year1 

                var total_yearly_customers = $('#total_yearly_customers').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                var sales_per_year = $('#sales_per_year').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');       
                var average_cost = $('#average_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var Year_1 = $('#Year_1').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var Year_1_cost = $('#Year_1_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var Year_1_gross_profit = $('#Year_1_gross_profit').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var Year_1_cost_per = $('#Year_1_cost_per').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var Year_1_profit_per = $('#Year_1_profit_per').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   

               
         
      
                total_daily_customers = parseInt(footfall) * parseInt(store_entries_percentage) / 100;
                if(total_daily_customers > 0){
                    $('#total_daily_customers').val(parseInt(total_daily_customers).toLocaleString());
                }

              
                sales_per_day = parseInt(total_daily_customers) * parseInt(customer_purchases_percentage) / 100;
                if(sales_per_day > 0){
                    $('#sales_per_day').val(parseInt(sales_per_day).toLocaleString());
                }

                // 3, revenue_per_day = sales_per_day + average_sale_value 
                revenue_per_day =  (parseInt(sales_per_day) * parseInt(average_sale_value));
                if(revenue_per_day > 0){     
                    $('#revenue_per_day').val(cur+""+parseFloat(revenue_per_day).toLocaleString());

                }


                average_cost =  (parseInt(sales_per_day) * parseInt(average_cost_value));
                if(average_cost > 0){     
                    $('#average_cost').val(cur+""+parseFloat(average_cost).toLocaleString());

                }


                //monthly

            
                total_monthly_customers = parseInt(total_yearly_customers) / 12;
                if(total_monthly_customers > 0){
                    $('#total_monthly_customers').val(parseInt(total_monthly_customers).toLocaleString());
                }
  
                sales_per_month = parseInt(sales_per_year) / 12;
                if(sales_per_month > 0){
                    $('#sales_per_month').val(parseInt(sales_per_month).toLocaleString());
                }
             
                monthly_retail_revenue =  (parseInt(revenue_per_day) * parseInt(no_days_open)) / 12;
                if(monthly_retail_revenue > 0){     
                    $('#monthly_retail_revenue').val(cur+""+parseFloat(monthly_retail_revenue).toLocaleString());

                }
                   
                monthly_cost =  (parseInt(Year_1_cost)) / 12;
                if(monthly_cost > 0){     
                    $('#monthly_cost').val(cur+""+parseFloat(monthly_cost).toLocaleString());

                }
            
                monthly_gross_profit =  (parseInt(Year_1_gross_profit)) / 12;
                if(monthly_gross_profit > 0){     
                    $('#monthly_gross_profit').val(cur+""+parseFloat(monthly_gross_profit).toLocaleString());

                }

                monthly_cost_per =  (parseInt(monthly_cost) / parseInt(monthly_retail_revenue) );
                if(monthly_cost_per > 0){     
                    $('#monthly_cost_per').val(parseFloat(monthly_cost_per).toLocaleString());

                }

            
                monthly_profit_per =  (parseInt(monthly_gross_profit) / parseInt(monthly_retail_revenue) );
                if(monthly_profit_per > 0){     
                    $('#monthly_profit_per').val(parseFloat(monthly_profit_per).toLocaleString());

                }

                //Year 1
           
                total_yearly_customers = parseInt(footfall) * parseInt(no_days_open);
                if(total_yearly_customers > 0){
                    $('#total_yearly_customers').val(parseInt(total_yearly_customers).toLocaleString());
                }

                Year_1 =  (parseInt(revenue_per_day) * parseInt(no_days_open));
                if(Year_1 > 0){     
                    $('#Year_1').val(cur+""+parseFloat(Year_1).toLocaleString());

                }
            
                Year_1_cost =  (parseInt(sales_per_day) * parseInt(no_days_open) * parseInt(average_cost_value));
                if(Year_1_cost > 0){     
                    $('#Year_1_cost').val(cur+""+parseFloat(Year_1_cost).toLocaleString());

                }
            
                Year_1_gross_profit =  (parseInt(Year_1) - parseInt(Year_1_cost) );
                if(Year_1_gross_profit > 0){     
                    $('#Year_1_gross_profit').val(cur+""+parseFloat(Year_1_gross_profit).toLocaleString());

                }

                Year_1_cost_per =  (parseInt(Year_1_cost) / parseInt(Year_1) );
                if(Year_1_cost_per > 0){     
                    $('#Year_1_cost_per').val(parseFloat(Year_1_cost_per).toLocaleString());

                }
           
                Year_1_profit_per =  (parseInt(Year_1_gross_profit) / parseInt(Year_1) );
                if(Year_1_profit_per > 0){     
                    $('#Year_1_profit_per').val(parseFloat(Year_1_profit_per).toLocaleString());

                }

                sales_per_year = parseInt(sales_per_day) * parseInt(no_days_open);
                    if(sales_per_year > 0){
                $('#sales_per_year').val(parseInt(sales_per_year).toLocaleString());
                }


   
               
                 
            })
        }


            $('.handlecurrencyformat').find('input[type="text"]').focus(function() {
            var focusvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
            if ($(this).hasClass('currencySign')) {
                $(this).val(focusvalue);
            } else if ($(this).hasClass('numberSign')) {
                $(this).val(focusvalue);
            }else if ($(this).hasClass('percentSign')) {
                $(this).val(focusvalue);
            }
            });


            $('.handlecurrencyformat').find('input[type="text"]').focusout(function() {
            var focusoutvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
            if ($(this).hasClass('currencySign')) {
                if(focusoutvalue != ""){
                    $(this).val("$" + '' + parseInt(focusoutvalue).toLocaleString());
                }
            } else if ($(this).hasClass('numberSign')) {
                //console.log('here'+focusoutvalue.toLocaleString());
                $(this).val(parseInt(focusoutvalue).toLocaleString());
            }else if ($(this).hasClass('percentSign')) {
                $(this).val(focusoutvalue + '%');
            }
            });

        </script>
            
        
          