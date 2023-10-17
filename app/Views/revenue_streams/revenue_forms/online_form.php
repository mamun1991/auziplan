        
            <style>
                #bar-chart-grouped
                {
                    background-color: rgba(255, 255, 255, 0.0);
                    height:450px;
                    width:auto;
                }
                canvas {
                    -moz-user-select: none;
                    -webkit-user-select: none;
                    -ms-user-select: none;
                    width: 100%;
                }

                .container {
                    position: relative;
                    width: 100%;
                    margin: 0 auto;
                }
            </style>
           
            <!-- ===============================================-->
            <!--  Input Text Boxes-->
            <!-- ===============================================-->      
            <form class="online-revenue" id="online_revenue">
                <div class="row">  
                    <div class="col-lg-5 col-md-12 col-sm-12">          
                        <div class="card p-3 handlecurrencyformat">                 
                            <div class="form-floating mb-3">
                                <input type="text" name="max_view"  class="form-control numberSign" id="max_view" placeholder="Visitors" value="">
                                <label for="max_view">How may people will view your web site daily?</label>
                            </div><!-- /.form -floating -->
                            <div class="form-floating mb-3">
                                <input type="text" name="no_days"  class="form-control numberSign " id="no_days" placeholder="No Days" value="365   ">
                                <label for="no_days">How many days open for trading</label>
                            </div><!-- /.form -floating-->
                            <div class="form-floating mb-3">
                                <input type="text" name="percent_purch"  class="form-control percentSign" id="percent_purch" placeholder="Customers" value="">
                                <label for="percent_purch">What percentage will make a purchases?</label>
                            </div><!-- /.form -floating-->
                            <div class="form-floating mb-3">
                                <input type="text" name="no_purchase"  class="form-control numberSign" id="no_purchase" placeholder="Purchase Qty" value="">
                                <label for="no_purchase">How many item's do you think they will buy?</label>
                            </div><!-- /.form -floating-->
                            <div class="form-floating mb-3">
                                <input type="text" name="no_reorder"  class="form-control numberSign " id="no_reorder" placeholder="No of Reorders" value="">
                                <label for="no_reorder">How many purchases each year?</label>
                            </div><!-- /.form -floating -->
                            <div class="form-floating mb-3">
                                <input type="text" name="product_price"  class="form-control currencySign" id="product_price" placeholder="Product Price" value="">
                                <label for="product_price">Average selling price?</label>
                            </div><!-- /.form -floating-->
                            <div class="form-floating mb-3">
                                <input type="text" name="projected_cost"  class="form-control percentSign" id="projected_cost" placeholder="Cost percentage " value="">
                                <label for="projected_cost">Average cost as a percentage of sales?</label>
                            </div><!-- /.form -floating-->
                            <div class="form-floating mb-3">
                                <input type="text" name="sales_increase"  class="form-control percentSign" id="sales_increase"placeholder="Yearly  Sales Growth" value="">
                                <label for="sales_increase">Sales increase each year by?</label>
                            </div><!-- /.form -floating-->
                        </div><!-- card-->
                    </div><!-- /.col-->

                    <!-- ===============================================-->
                    <!--  Bar Chart Starts-->
                    <!-- ===============================================-->     

                    <div class="col-lg-7 col-md-12 col-sm-12">   
                        <div class="card p-3 handlecurrencyformat">
                        <h4 class="my-0 font-weight-normal">Yearly Summary</h4>             
                            <div class="container">
                                <canvas id="bar-chart-grouped" width="800" height="450"></canvas>
                            </div>
                            <!-- Provision For Online Revenue Increase Starts -->
                            <div class="form-group text-left p-2" style="width:100%;">
                                <h6>Revenue Growth<span class="fs--2 ms-1 text-primary"></span></h6>
                                <h5 class="card-text text-left text-primary">
                                    <span class="rg_percent" id="">0%</span>
                                    <span style="float:right; font-size:12px;"></span>
                                </h5>
                                <input class="form-range "  name="rg_percent" id="" type="range" min="0" max="100" value="0" class="RangeSelectorRG"  />
                            </div>
                            <div class="card-body d-flex flex-column justify-content-between">   
                            <!--<canvas id="bar-chart-grouped" width="800" height="450"></canvas>-->                  
                            <!--<div class="card-header position-relative">
                                <div class="bg-holder d-none d-md-block bg-card z-index-1" style="background-image:url(<?php echo base_url(); ?>template-assets/img/illustrations/ecommerce-bg.png);background-size:230px;background-position:right bottom;z-index:-1;">
                                </div>
                                <div class="position-relative z-index-2 mb-5">
                                    <div>           
                                        <p>Here’s what happening with your online store</p>
                                    </div>
                                    <div class="d-flex py-3">
                                    <div class="pe-3">
                                        <p class="text-600 fs--1 fw-medium">Daily Visits</p>
                                        <h4 class="text-800 mb-0">14,209</h4>
                                    </div>
                                    <div class="ps-3">
                                        <p class="text-600 fs--1">Year 1 Sales </p>
                                        <h4 class="text-800 mb-0">$21,349.29 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>-->
                        <ul class="mb-0 list-unstyled">
                            <li class="alert mb-0 rounded-0 py-3 px-card alert-warning border-x-0 border-top-0">
                            <div class="row flex-between-center">
                                <div class="col">
                                    <div class="d-flex">
                                        <div class="fas fa-circle mt-1 me-1 fs--2 text-primary"></div>
                                            <p class="fs--1 ps-2 mb-0 float-start me-3 mb-1"><strong>Purchase Cost</strong></p>
                                            <input type="text" readonly name="avg_purchase" readonly  class="form-control currencySign" id="avg_purchase" onkeyup="online_revenue()" placeholder="" value="">
                                        </div>
                                    </div>                            
                                </div>
                                </li>
                                <li class="alert mb-0 rounded-0 py-3 px-card greetings-item border-top border-x-0 border-top-0">
                                <div class="row flex-between-center">
                                    <div class="col">
                                        <div class="d-flex">
                                            <div class="fas fa-circle me-2 mt-1 fs--2 text-primary"></div>
                                                <p class="fs--1 ps-2 mb-0 float-start me-3 mb-1" ><strong>Products Cost</strong></p>
                                                <input type="text" readonly name="avg_cost" readonly  class="form-control currencySign" id="avg_cost"  onkeyup="online_revenue()" placeholder="" value="">
                                        </div>
                                    </div>                  
                                </li>
                                <li class="alert mb-0 rounded-0 py-3 px-card greetings-item border-top  border-0">
                                <div class="row flex-between-center">
                                    <div class="col">
                                        <div class="d-flex">
                                            <div class="fas fa-circle me-1  mt-1 fs--2 text-primary"></div>
                                                <p class="fs--1 ps-2 mb-0 float-start me-3 mb-1"><strong>Purchases cost</strong></p>
                                                <input type="text" name="customer_cost" readonly  class="form-control currencySign" id="customer_cost" onkeyup="online_revenue()" placeholder="" value="">
                                            </div>
                                        </div>             
                                    </div>
                                </li>
                            </ul>                 
                        </div><!-- /.row -->               
                    </div><!-- card-->
                </div><!-- /.col-->

                <!-- ===============================================-->
                <!--  Save Cancel Expand Drop view Starts-->
                <!-- ===============================================-->     
                <div class="border-dashed-bottom my-3"></div>
                    <div class="border p-card rounded">
                        <input type='hidden' id='productrevenueid' value='0'>
                        <button class="btn btn-outline-danger" type="button" id="btncancelproductrevenue" ><i class="far fa-window-close"></i> Cancel</button>
                        <button class="btn btn-outline-primary toggle-btn" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOnline" aria-expanded="false" aria-controls="collapseOnline">   <span class="arrow"></span>Yearly Summary</button>
                        <input name="save_local_products_step_2" type="button" id="btnsaveproduct" value="Save and Continue" class="btn btn-outline-success float-end">
                    </div>    
                </div><!-- /.row-->
            </form>

            <!-- ===============================================-->
            <!--  Results Summary Table-->
            <!-- ===============================================-->      

            <div class="collapse" id="collapseOnline">
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
                                            <td>Yearly Visitors</td>
                                            <td></td>
                                            <td><input type="text" readonly name="total_monthly_online_customers" readonly  class="form-control currencySign" id="total_monthly_online_customers" onkeyup="online_revenue()" placeholder="" value=""></td>
                                            <td><input type="text" readonly name="total_yearly_online_customers" readonly  class="form-control currencySign" id="total_yearly_online_customers" onkeyup="online_revenue()" placeholder="" value=""></td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Actual number of customers</td>
                                            <td></td>
                                            <td><input type="text" name="total_monthly_actual_customers"  class="form-control numberSign" readonly id="total_monthly_actual_customers" onkeyup="online_revenue()" placeholder="" value=""></td>
                                            <td><input type="text" readonly name="total_yearly_actual_customers" readonly  class="form-control currencySign" id="total_yearly_actual_customers" onkeyup="online_revenue()" placeholder="" value=""></td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Total products sold</td>
                                            <td></td>
                                            <td><input type="text" name="total_monthly_products_sold"  class="form-control numberSign" readonly id="total_monthly_products_sold" onkeyup="online_revenue()" placeholder="" value=""></td>                
                                            <td><input type="text" readonly name="total_yearly_products_sold" readonly  class="form-control currencySign" id="total_yearly_products_sold" onkeyup="online_revenue()" placeholder="" value=""></td>           
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Total potential annual revenue</td>
                                            <td></td>
                                            <td><input type="text" name="year_1_monthly_revenue"  class="form-control currencySign" readonly id="year_1_monthly_revenue" onkeyup="online_revenue()" placeholder="" value=""></td>
                                            <td><input type="text" readonly name="year_1_revenue" readonly  class="form-control currencySign" id="year_1_revenue" onkeyup="online_revenue()" placeholder="" value=""></td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Total potential annual cost</td>
                                            <td></td>
                                            <td> <input type="text" name="year_1_monthly_cost"  class="form-control currencySign" readonly id="year_1_monthly_cost" onkeyup="online_revenue()" placeholder="" value=""></td>                                       
                                            <td><input type="text" readonly name="year_1_product_cost" readonly  class="form-control currencySign" id="year_1_product_cost" onkeyup="online_revenue()" placeholder="" value=""></td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                    <tr>
                                        <td>Total potential annual gross profit</td>
                                            <td></td>
                                            <td><input type="text" name="year_1_monthly_gross_profit"  class="form-control currencySign" readonly id="year_1_monthly_gross_profit" onkeyup="online_revenue()" placeholder="" value=""></td>           
                                            <td><input type="text" readonly name="year_1_product_gross_profit" readonly  class="form-control currencySign" id="year_1_product_gross_profit" onkeyup="online_revenue()" placeholder="" value=""></td>
                                            <td>0</td>
                                            <td>0</td>
                                    </tr><!-- /.table row -->
                                    <tr>
                                        <td>Projected Cost as % of Gross Sales</td>
                                            <td></td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                    </tr><!-- /.table row -->
                                    <tr>
                                        <td>Projected Gross Profit as % of Gross Sales</td>
                                            <td></td>
                                            <td>0</td>
                                            <td>0</td>
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
            <div class="border p-card rounded">
                <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> <i class="far fa-arrow-alt-circle-up" aria-hidden="true"></i> Close</button>
            </div>
        </div>
                                    
        <!-- ===============================================-->
        <!--  Calculations-->
        <!-- ===============================================-->      

        <!--//////////////////////////////////////////////////////////////////////////////////////
        /// Online revenue projections start/////////////////
        
        // 1, avg_purchase = no_purchase * product_price

        // 2, avg_cost = product_price * projected_cost

        // 3, customer_cost = no_purchase + no_reorder * avg_cost

        -->

        <script type="text/javascript"> 
            function online_revenue(){
                var url = base_url+"/user/get_user_currency";
                var param = "";
                var cur;
                $.post(url, param,function(result) {

                    cur = result; 
                    var max_view = $('#max_view').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                    var percent_purch = $('#percent_purch').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                    var no_days = $('#no_days').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                    var no_purchase = $('#no_purchase').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                    var no_reorder = $('#no_reorder').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                    var product_price = $('#product_price').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');          
                    var projected_cost = $('#projected_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');                
                    var sales_increase = $('#sales_increase').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                    var avg_purchase = $('#avg_purchase').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                    var avg_cost = $('#avg_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                    var customer_cost = $('#customer_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   

                    //monthly
                    var total_monthly_online_customers = $('#total_monthly_online_customers').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                    var total_monthly_actual_customers = $('#total_monthly_actual_customers').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                    var total_monthly_products_sold = $('#total_monthly_products_sold').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                    var total_monthly_products_sold = $('#total_monthly_products_sold').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                    var year_1_monthly_revenue = $('#year_1_monthly_revenue').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                    var year_1_monthly_cost = $('#year_1_monthly_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                    var year_1_monthly_gross_profit = $('#year_1_monthly_gross_profit').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  

                    //year 1
                    var total_yearly_online_customers = $('#total_yearly_online_customers').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                    var total_yearly_actual_customers = $('#total_yearly_actual_customers').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                    var total_yearly_products_sold = $('#total_yearly_products_sold').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                    var year_1_revenue = $('#year_1_revenue').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                    var year_1_product_cost = $('#year_1_product_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                    var year_1_product_gross_profit = $('#year_1_product_gross_profit').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  

                    //monthly
                    total_monthly_online_customers = parseInt(total_yearly_online_customers) / 12;
                    if(total_monthly_online_customers > 0){
                        $('#total_monthly_online_customers').val(parseInt(total_monthly_online_customers).toLocaleString());
                    }
                    total_monthly_actual_customers = parseInt(total_yearly_actual_customers) / 12;
                    if(total_monthly_actual_customers > 0){
                        $('#total_monthly_actual_customers').val(parseInt(total_monthly_actual_customers).toLocaleString());
                    }
                    total_monthly_products_sold = parseInt(total_yearly_products_sold) / 12;
                    if(total_monthly_products_sold > 0){
                        $('#total_monthly_products_sold').val(parseInt(total_monthly_products_sold).toLocaleString());
                    }
                    year_1_monthly_revenue = parseInt(year_1_revenue) / 12;
                    if(year_1_monthly_revenue > 0){
                        $('#year_1_monthly_revenue').val(cur+""+parseFloat(year_1_monthly_revenue).toLocaleString());
                    }
                    year_1_monthly_cost = parseInt(year_1_product_cost) / 12;
                    if(year_1_monthly_cost > 0){
                        $('#year_1_monthly_cost').val(cur+""+parseFloat(year_1_monthly_cost).toLocaleString());
                    }        
                    year_1_monthly_gross_profit = parseInt(year_1_product_gross_profit) / 12;
                    if(year_1_monthly_cost > 0){
                        $('#year_1_monthly_gross_profit').val(cur+""+parseFloat(year_1_monthly_gross_profit).toLocaleString());
                    }

                    //Year 1
                    total_yearly_online_customers = (parseInt(max_view) * parseInt(no_days));
                    if(total_yearly_online_customers > 0){
                        $('#total_yearly_online_customers').val(parseInt(total_yearly_online_customers).toLocaleString());
                    }
                    total_yearly_actual_customers = (parseInt(total_yearly_online_customers) * (parseInt(percent_purch))/100);
                    if(total_yearly_actual_customers > 0){
                        $('#total_yearly_actual_customers').val(parseInt(total_yearly_actual_customers).toLocaleString());
                    }         
                    total_yearly_products_sold = parseInt(total_yearly_actual_customers) * (parseInt(no_purchase) + parseInt(no_reorder));
                    if(total_yearly_products_sold > 0){
                        $('#total_yearly_products_sold').val(parseInt(total_yearly_products_sold).toLocaleString());
                    }
                    year_1_revenue = parseInt(total_yearly_products_sold) * (parseInt(product_price));
                    if(year_1_revenue > 0){
                        $('#year_1_revenue').val(cur+""+parseFloat(year_1_revenue).toLocaleString());
                    }         
                    year_1_product_cost = parseInt(total_yearly_products_sold) * (parseInt(avg_cost));
                    if(year_1_product_cost > 0){
                        $('#year_1_product_cost').val(cur+""+parseFloat(year_1_product_cost).toLocaleString());
                    }            
                    year_1_product_gross_profit = parseInt(year_1_revenue) - (parseInt(year_1_product_cost));
                    if(year_1_product_gross_profit > 0){
                        $('#year_1_product_gross_profit').val(cur+""+parseFloat(year_1_product_gross_profit).toLocaleString());
                    }

                    // 1, avg_purchase = no_purchase * product_price
                    avg_purchase = parseInt(no_purchase) * parseInt(product_price);
                    if(avg_purchase > 0){
                        $('#avg_purchase').val(cur+""+parseFloat(avg_purchase).toLocaleString());
                    }
                    
                    // 2, avg_cost = product_price * projected_cost
                    avg_cost = parseInt(no_purchase) * parseInt(projected_cost);
                    if(avg_cost > 0){
                        $('#avg_cost').val(cur+""+parseFloat(avg_cost).toLocaleString());
                    }
                    
                    // 3, customer_cost = no_purchase + no_reorder * avg_cost
                    customer_cost =  (parseInt(no_purchase) + parseInt(no_reorder)) *  parseInt(avg_cost);
                    if(customer_cost > 0){     
                        $('#customer_cost').val(cur+""+parseFloat(customer_cost).toLocaleString());

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
    
        <script>
            
            new Chart(document.getElementById("bar-chart-grouped"), {
                type: 'bar',
                data: {
                labels: ["Year 1", "Year 2", "Year 3"],
                datasets: [
                    {
                    label: "Revenue",
                    backgroundColor:'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',

                    borderWidth: 1,
                    data: [221,783,2478]
                    }, {
                    label: "Visitors",
                    backgroundColor:'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,

                    data: [547,675,734]
                    }
                ],
        
                },
                options: {
                title: {
                    display: true,
                    text:'Population growth (millions)'
                }
                }
            });
        </script>

    
    
    
    
    
            

            
            
            
            
            
            
            
            
            
            
            
            
            
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        