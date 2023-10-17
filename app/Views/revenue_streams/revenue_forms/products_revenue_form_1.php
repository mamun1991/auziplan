    
        

        <div>
            <div class="row">  
                <div class="col-lg-6 col-md-12 col-sm-12">          
                    <div class="card p-3 handlecurrencyformat">
                
                    <div class="form-floating mb-3">
                        <input type="text" name="description" class="form-control" id="description" placeholder="qty" value="">
                        <label for="description">Describe this product</label>
                    </div>

                    <div class="form-floating mb-3">     
                        <input type="text" name="opening_qty" class="form-control numberSign" id="opening_stock_qty" onkeyup="calculations()" placeholder="Opening Stock Qty"  value="">
                        <label for="opening_stock_qty">Do you have any opening stock?</label>
                    </div><!-- /.form-floating -->   


                    <div class="form-floating mb-3">
                        <input type="text" name="monthly_qty" class="form-control numberSign" id="monthly_qty" onkeyup="calculations()" placeholder="Monthly Qty" value="">
                        <label for="monthly_qty">Monthly sales projections</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" name="num_people" class="form-control currencySign" id="average_cost_price" onkeyup="calculations()" placeholder="Unit Cost" value="">
                        <label for="unit_cost">Average cost of this product</label>
                    </div><!-- /.form floating-->
                                                        
                    <div class="form-floating mb-3">
                        <input type="text" name="markUp_on_cost" class="form-control percentSign" id="percent_markup_on_cost" onkeyup="calculations()" placeholder="MarkUp on Coste" value="">
                        <label for="markUp_on_cost">Percentage markup on cost</label>
                    </div>


                    <div class="form-floating mb-3">
                        <input type="text" name="num_stock_months" class="form-control numberSign" id="month_stock_allowance" onkeyup="calculations()" placeholder="Number of Stock Months" value="">
                        <label for="num_stock_months">stock Allowance</label>
                    </div>


                </div><!-- card-->

            </div><!-- /.col-->

            <div class="col-lg-6 col-md-12 col-sm-12">    
                <div class="card p-3">

                <div class="form-floating mb-3">
                    <input type="text" readonly name="selling_price" class="form-control currencySign" id="selling_price" onChange="calculateselling_price()" placeholder="Selling Price" value="">
                    <label for="selling_price">This is your average selling price</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" name="monthly_revenue" readonly  class="form-control" id="monthly_revenue" placeholder="Monthly revenue" value="">
                    <label for="monthly_revenue">This is your average monthly Revenue</label>
                </div><!-- /.form -floating-->

                <div class="form-floating mb-3">
                    <input type="text" name="year_1" readonly  class="form-control" id="year_1" placeholder="Year 1 " value="">
                    <label for="year_1">This is your average year 1 revenue </label>
                </div><!-- /.form -floating-->

                <div class="form-floating mb-3">
                    <input type="text" name="year_1_cost" readonly  class="form-control" id="year_1_cost" placeholder="Year 1 Cost revenue " value="">
                    <label for="year_1_cost">This is your average year 1 product cost </label>
                </div><!-- /.form -floating-->

                <div class="form-floating mb-3">
                    <input type="text" name="year_1_gross_profit" readonly  class="form-control" id="year_1_gross_profit" placeholder="Year 1 Gross Profit " value="">
                    <label for="year_1_gross_profit">This is your average year 1 gross profit </label>
                </div><!-- /.form -floating-->


                <div class="form-floating mb-3">
                    <input type="text" name="local_product_stock_allowance" readonly  class="form-control" id="total_stock_allowance" placeholder="Year 1 Gross Profit" value="">
                    <label for="local_product_stock_allowance">This is your total stock allowance</label>
                </div><!-- /.form -floating-->

            </div><!-- card-->

        </div><!-- /.col-->
            <div class="border-dashed-bottom my-3"></div>
                <div class="col-12 col-sm-12 offset-0 pt-3">
                    <input type='hidden' id='productrevenueid' value='0'>
                    <button class="btn btn-falcon-danger" type="button" id="btncancelproductrevenue" ><i class="far fa-window-close"></i> Cancel</button>
                    <button class="btn btn-falcon-default" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> <i class="far fa-calendar-alt" aria-hidden="true"></i> Yearly Summary</button>
                    <input name="save_local_products_step_2" type="button" id="btnsaveproduct" value="Save and Continue" class="btn btn-outline-success float-end">
                </div>
        
            </div><!-- /.row-->
        </div><!-- ./container -->

        <div class="row">
        
            <div class="collapse" id="collapseExample">
            

                <!-- ===============================================-->
                <!--  Result Tables-->
                <!-- ===============================================-->      

            <div class="box-body pt-3">
              
                        <div class="box-body border table_one">
                            <div class="row p-3" id="one_time_cost_row_add">

                                    <div class="col-lg-12 col-md-12 col-sm-12" id="one_time_cost_plant_equipment" style='margin-top: 16px;'>
                                        <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
                                            <div class="table-responsive scrollbar">
                                                <div class="fixTableHead">
                
                                                    <table id="product_revenueDT" class="table table-striped fs--1 mb-0 " style="width:100%">
                                                        <thead class="bg-200 text-900">
                                                            <tr>             
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
                        </div>
                    </div>
                </form>
            </div>

