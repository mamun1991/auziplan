

        <style>
            #product_income_chart
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


        <div id="product_collapse">
            <div class="row">  
                <div class="col-lg-5 col-md-12 col-sm-12">          
                    <div class="card p-3 handlecurrencyformat">

                    <div class="form-floating mb-3">
                        <input type="text" name="description" class="form-control validate" id="description" placeholder="qty" value="">
                        <label for="description">Describe this product</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" name="opening_qty" class="form-control numberSign validate" id="opening_stock_qty" onkeyup="calculations()" placeholder="Opening Stock Qty"  value="">
                        <label for="opening_stock_qty">Do you have any opening stock?</label>
                    </div><!-- /.form-floating -->   

                    <div class="form-floating mb-3">
                        <input type="text" name="monthly_qty" class="form-control numberSign validate" id="monthly_qty" onkeyup="calculations()" placeholder="Monthly Qty" value="">
                        <label for="monthly_qty">Monthly sales projections</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" name="unit_cost" class="form-control currencySign validate" id="average_cost_price" onkeyup="calculations()" placeholder="Unit Cost" value="">
                        <label for="unit_cost">Average cost of this product</label>
                    </div><!-- /.form floating-->
                                                        
                    <div class="form-floating mb-3">
                        <input type="text" name="markUp_on_cost" class="form-control percentSign validate" id="percent_markup_on_cost" onkeyup="calculations()" placeholder="MarkUp on Coste" value="">
                        <label for="markUp_on_cost">Percentage markup on cost</label>
                    </div>
                    
                    <div class="form-floating mb-3">
                        <input type="text" name="num_stock_months" class="form-control numberSign validate" id="month_stock_allowance" onkeyup="calculations()" placeholder="Number of Stock Months" value="">
                        <label for="num_stock_months">stock Allowance</label>
                    </div>
                </div><!-- card-->
            </div><!-- /.col-->


            <div class="col-lg-7 col-md-12 col-sm-12">    
        
                <!-- ===============================================-->
                <!--  Bar Chart Starts-->
                <!-- ===============================================-->     
                <div class="card p-3 handlecurrencyformat">
                    <h4 class="my-0 font-weight-normal">Yearly Summary</h4>
                        <div class="container">
                        <canvas id="product_income_chart"></canvas>  
                        </div>  
                        <!-- Provision For Online Revenue Increase Starts -->
                        <div class="form-group text-left p-2" style="width:100%;">
                            <h6>Revenue Growth<span class="fs--2 ms-1 text-primary"></span></h6>
                            <h5 class="card-text text-left text-primary">
                                <span class="rg_percent" id="revenue_growth_text_product_revenue">0%</span>
                                <span style="float:right; font-size:12px;"></span>
                            </h5>
                            <input class="form-range RangeSelectorRG" name="rg_percent" id="revenue_growth_input_product_revenue" type="range" min="0" max="100" value="0">
                        </div>
         
                    <div class="form-floating mb-3" style="display: none;">
                        <input type="text" readonly name="selling_price" class="form-control currencySign validate" id="selling_price" onChange="calculateselling_price()" placeholder="Selling Price" value="">
                        <label for="selling_price">This is your average selling price</label>
                    </div>

                    <div class="form-floating mb-3" style="display: none;">
                        <input type="text" name="monthly_revenue" readonly  class="form-control validate" id="monthly_revenue" placeholder="Monthly revenue" value="">
                        <label for="monthly_revenue">This is your average monthly Revenue</label>
                    </div><!-- /.form -floating-->

                    <div class="form-floating mb-3" style="display: none;" >
                        <input type="text" name="year_1" readonly  class="form-control validate" id="year_1" placeholder="Year 1 " value="">
                        <label for="year_1">This is your average year 1 revenue </label>
                    </div><!-- /.form -floating-->

                    <div class="form-floating mb-3" style="display: none;">
                        <input type="text" name="year_1_cost" readonly  class="form-control validate" id="year_1_cost" placeholder="Year 1 Cost revenue " value="">
                        <label for="year_1_cost">This is your average year 1 product cost </label>
                    </div><!-- /.form -floating-->

                    <div class="form-floating mb-3" style="display: none;">
                        <input type="text" name="year_1_gross_profit" readonly  class="form-control validate" id="year_1_gross_profit" placeholder="Year 1 Gross Profit " value="">
                        <label for="year_1_gross_profit">This is your average year 1 gross profit </label>
                    </div><!-- /.form -floating-->

                    <div class="form-floating mb-3" style="display: none;">
                        <input type="text" name="local_product_stock_allowance" readonly  class="form-control validate" id="total_stock_allowance" placeholder="Year 1 Gross Profit" value="">
                        <label for="local_product_stock_allowance">This is your total stock allowance</label>
                    </div><!-- /.form -floating-->
                </div><!-- card-->
            </div><!-- /.col-->
        </div><!-- /.row-->
    </div><!-- ./container -->
    <div class="row p-3">
        <div class="border-dashed-bottom my-3"></div>
            <div class="border p-card rounded">
                <input type='hidden' id='productrevenueid' value='0'>
                <button class="btn btn-outline-danger" type="button" id="btncancelproductrevenue" ><i class="far fa-window-close"></i> Cancel</button>                   
                <button class="btn btn-outline-primary toggle-btn" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseProducts" aria-expanded="false" aria-controls="collapseProducts">   <span class="arrow"></span>Yearly Summary</button>
                <input name="save_local_products_step_2" type="button" id="btnsaveproduct" value="Save and Continue" class="btn btn-outline-success float-end">
            </div>
        
            <!-- ===============================================-->
            <!--  Results Summary Table-->
            <!-- ===============================================-->      

            <div class="collapse" id="collapseProducts">
                <div class="box-body pt-3">
                    <div class="box-body table_one">
                        <div class="row" id="one_time_cost_row_add">
                            <div class="col-lg-12 col-md-12 col-sm-12" id="one_time_cost_plant_equipment" style='margin-top: 16px;'>
                                <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
                                    <div class="table-responsive scrollbar">
                                        <div class="fixTableHead"> 
                                            <table id="product_revenueDT" class="table table-striped fs--1 mb-0" style="width:100%">
                                                <thead class="bg-200 text-900">
                                                    <tr>     
                                                        <th>ID</td>        
                                                        <th>Product Type</th>
                                                        <th>Product Description</th>  
                                                        <th>Opening Stock</th>  
                                                        <th>Monthly Sales Qty</th>  
                                                        <th>Unit Cost</th>       
                                                        <th>Markup on Cost</th>      
                                                        <th>Selling Price</th>   
                                                        <th>Months Allowance</th>   
                                                        <th>Stock Allowance</th>   
                                                        <th>Monthly Revenue</th>  
                                                        <th>Year 1</th>
                                                        <th>Year 2</th>
                                                        <th>Year 3</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead><!-- /.table header -->  
                                                    <tbody>
                                                </tbody><!-- /.table body -->  
                                                        <tfoot>
                                                            <tr>
                                                                <th></td>
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
                                                            </tr><!-- /.table row -->  
                                                    </tfoot><!-- /.table footer -->  
                                                </table><!-- /.table -->  
                                            </div><!-- /.table fixed head -->  
                                        </div><!-- /.table sroll -->  
                                    </div><!-- /.table example 2 -->  
                                </div><!-- /.col-12 -->  
                            </div>
                        </div>      
                        <div class="mb-3" style="display:none">
                            <label class="form-label" for="bootstrap-wizard-wizard-email">Email*</label>
                            <input class="form-control" type="email" name="email" placeholder="Email address" pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$" required="required" id="bootstrap-wizard-wizard-email" data-wizard-validate-email="true" />
                        <div class="invalid-feedback">You must add email</div>
                        </div>   
                    </div>
                </div>
            </form>
        </div><!-- ./container -->

                
        <script>     
            // setup 
            const data = {
                labels: ['Year 1', 'Year 2', 'Year 3'],
                datasets: [{
                    label: 'Yearly Online Revenue Summary',
                    data: [100000, 200000, 300000],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
            }]
        };

        // config 
            const config = {
            type: 'bar',
            data,
            options: {
                scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        };

        // render init block
        const myChart = new Chart(
        document.getElementById('product_income_chart'),
        config
        );
    </script>

