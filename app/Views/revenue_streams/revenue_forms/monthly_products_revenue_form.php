

        <div class="card">
            <h4 class="p-3">Monthly Products and Costs Shop</h4>
                <div class="row">
                    <div class="container">
                                
                        <div class="card pt-1">
                            <ul class="nav nav-tabs pt-5" id="myTab" role="tablist">
                                <li class="nav-item"><a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#tab-home" role="tab" aria-controls="tab-home" aria-selected="true">Monthly Sales Projections</a></li>
                                <li class="nav-item"><a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#tab-profile" role="tab" aria-controls="tab-profile" aria-selected="false">Unit Cost Assumptions</a></li>
                                <li class="nav-item"><a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#tab-contact" role="tab" aria-controls="tab-contact" aria-selected="false">Summary</a></li>
                            </ul><!-- /. ul -->

                            <div class="tab-content border-x border-bottom p-3" id="myTabContent">

                                <div class="tab-pane fade show active" id="tab-home" role="tabpanel" aria-labelledby="home-tab">

                                <!-- ===============================================-->
                                <!--   Unit Sales Table  Content Details-->
                                <!-- ===============================================-->      
                                <div class="container">

                                <input type="hidden" value="" name="id" />
                                <input type="hidden" value="" name="status" />
                                <input type="hidden" value="" name="method" />

                                <div class="accordion" id="accordionMonthlySales">

                                    <div class="row">
                                        <div class="container">

                                            <div class="row">

                                                <div class="col-12">
                                                </div><!-- /. col-12 -->

                                                <div class="col-12">
                                                    <div class="btn-group" data-toggle="buttons">
                                                        <label class="btn btn-outline-primary year">
                                                            <input type="radio" name="optionMonthlySales" value="year" id="optionYear" checked onchange="monthlySalesType($(this).val())"> Global Sales
                                                        </label>
                                                        <label class="btn btn-outline-primary manual">
                                                            <input type="radio" name="optionMonthlySales" value="manual" id="optionMonth" onchange="monthlySalesType($(this).val())"> Sales by Region</label>
                                                    </div><!-- /. group button-->
                                                </div><!-- /. col-12 -->
                                            
                                            </div><!-- /. row -->

                                        </div><!-- /. container -->

                                    </div><!-- /. row -->

                                    <div class="row p-0">

                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div class="form-floating mb-3">
                                            <select name="purpose" class="form-select" id="purpose" aria-label="purpose">
                                                <option selected>Product Type</option>
                                                <option value="Full-Time">Local Product</option>
                                            <!-- <option value="Part-Time">Pro Version for other product </option> -->
                                            </select><!-- /.select-->
                                        </div><!-- /.form floating-->
                                    </div><!-- /. col -->

                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div class="form-floating mb-1">
                                            <input type="text" name="product_description" class="form-control" id="product_description" placeholder="Product Description" value="Product 1" autofocus>
                                            <label  for="product_description">Add Product Description </label>
                                        </div><!-- /.form-floating -->     
                                    </div><!-- /. col -->


                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div class="form-floating mb-3">     
                                            <input type="text" name="opening_qty" class="form-control numberSign" id="opening_qty" placeholder="Opening Qty" value="1,000" autofocus>
                                            <label for="opening_qty">Opening stock for this product</label>
                                        </div><!-- /.form-floating -->   
                                    </div><!-- /. col -->


                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div class="form-floating mb-3">     
                                            <input type="text" name="monthlytable_qty" class="form-control numberSign" id="monthlytable_qty" placeholder="Monthly Qty" value="1,000" autofocus>
                                            <label for="monthlytable_qty">Projected monthly sales </label>
                                        </div><!-- /.form-floating -->  

                                    </div><!-- /. col -->


                                    </div><!-- /. row -->


                                    <div class="accordion-item" id="manualEntry">
                                        <h2 class="accordion-header" id="headingZero">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseZero" aria-expanded="false" aria-controls="collapseZero">
                                                Projected Monthly Sales by Region
                                            </button>
                                        </h2>
                                    <div id="collapseZero" class="accordion-collapse collapse" aria-labelledby="headingZero" data-bs-parent="#accordionMonthlySales">

                                    <div class="container">

                                        <div class="row p-3">

                                            <div class="col-md-6">
                                                <div class="row float-start">
                                                    <a id="add_row_manually_sale" class="btn btn-outline-primary ">Add Region</a>
                                                </div><!-- /. row float start -->
                                            </div><!-- /. col -->

                                            <div class="col-md-6">
                                                <div class="row float-end">
                                                    <a id='delete_row_manually_sale' class=" btn btn-outline-primary">Delete Region</a>
                                                </div><!-- /. row float enf -->
                                            </div><!-- /. col -->
                                        </div><!-- /. row -->

                                    <div class="row clearfix"></div>

                                    <div class="col-md-12 column" style="max-height: 350px; overflow: scroll;">

                                        <div class="table-responsive scrollbar">
                                            <div class="fixTableHead">
                                    
                                            <table class="table  table-striped fs--1 mb-0" id="tab_logic">
                                                <colgroup>
                                                    <col width="13%">
                                                    <col width="6%">
                                                    <col width="6%">
                                                    <col width="6%">
                                                    <col width="6%">
                                                    <col width="6%">
                                                    <col width="6%">
                                                    <col width="6%">
                                                    <col width="6%">
                                                    <col width="6%">
                                                    <col width="6%">
                                                    <col width="6%">
                                                    <col width="6%">
                                                    <col width="6%">
                                                </colgroup><!-- /. table group -->

                                            <thead class="bg-200 text-900">
                                                    <tr>
                                                        <th>Region</th>
                                                        <th>Jul</th>
                                                        <th>Aug</th>
                                                        <th>Sep</th>
                                                        <th>Oct</th>
                                                        <th>Nov</th>
                                                        <th>Dec</th>
                                                        <th>Jan</th>
                                                        <th>Feb</th>
                                                        <th>Mar</th>
                                                        <th>Apr</th>
                                                        <th>May</th>
                                                        <th>Jun</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead><!-- /. table head -->
                                                <tbody>
                                                    <tr id='addr0'>
                                                        <input type="hidden" name="sale_id_0" value="">
                                                        <td><input type="text" name="region0" type="text" value="" placeholder="Region" class="form-control" /></td>
                                                        <td><input type="text" name="jul0" class="form-control numberSign" type="text" value="" placeholder='0' class="form-control" onchange="updateSalesProjections(this)" /></td>
                                                        <td><input type="text" name="aug0" class="form-control numberSign" type="text" value="" placeholder='0' class="form-control" onchange="updateSalesProjections(this)" /></td>
                                                        <td><input type="text" name="sep0" class="form-control numberSign" type="text" value="" placeholder='0' class="form-control" onchange="updateSalesProjections(this)" /></td>
                                                        <td><input type="text" name="oct0" class="form-control numberSign" type="text" value="" placeholder='0' class="form-control" onchange="updateSalesProjections(this)" /></td>
                                                        <td><input type="text" name="nov0" class="form-control numberSign" type="text" value="" placeholder='0' class="form-control" onchange="updateSalesProjections(this)" /></td>
                                                        <td><input type="text" name="dec0" class="form-control numberSign" type="text" value="" placeholder='0' class="form-control" onchange="updateSalesProjections(this)" /></td>
                                                        <td><input type="text" name="jan0" class="form-control numberSign" type="text" value="" placeholder='0' class="form-control" onchange="updateSalesProjections(this)" /></td>
                                                        <td><input type="text" name="feb0" class="form-control numberSign" type="text" value="" placeholder='0' class="form-control" onchange="updateSalesProjections(this)" /></td>
                                                        <td><input type="text" name="mar0" class="form-control numberSign" type="text" value="" placeholder='0' class="form-control" onchange="updateSalesProjections(this)" /></td>
                                                        <td><input type="text" name="apr0" class="form-control numberSign" type="text" value="" placeholder='0' class="form-control" onchange="updateSalesProjections(this)" /></td>
                                                        <td><input type="text" name="may0" class="form-control numberSign" type="text" value="" placeholder='0' class="form-control" onchange="updateSalesProjections(this)" /></td>
                                                        <td><input type="text" name="jun0" class="form-control numberSign" type="text" value="" placeholder='0' class="form-control" onchange="updateSalesProjections(this)" /></td>
                                                        <td id="total_manual_sales0"></td>
                                                        <input type="hidden" name="total_sale_0" value="">
                                                    </tr>
                                                </tbody><!-- /. table body -->
                                            </table><!-- /. table -->
                                        </div><!-- /. col -->
                                    </div><!-- /. div -->

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item" id="yearlyView">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Projected Monthly Sales 
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionMonthlySales">

                            <div class="accordion-body">

                                <div class="table-responsive">
                                    <div class="fixTableHead">

                                        <!--<div class="scrolling outer">
                                        <div class="inner">-->
                                    
                                    <table id="table_projected_sales" class="table  table-striped fs--1 mb-0" >
                                    
                                    <thead class="bg-200 text-900">
                                            <tr>
                                                <th>Account</th>
                                                <th>Jul</th>
                                                <th>Aug</th>
                                                <th>Sep</th>
                                                <th>Oct</th>
                                                <th>Nov</th>
                                                <th>Dec</th>
                                                <th>Jan</th>
                                                <th>Feb</th>
                                                <th>Mar</th>
                                                <th>Apr</th>
                                                <th>May</th>
                                                <th>Jun</th>
                                                <th>Total</th>
                                            </tr><!-- /. table row -->
                                        </thead><!-- /. table header -->
                                        <tbody>
                                            <tr>
                                                <td id="title">Opening Qty</td>
                                                <td id="oq_1">1,000</td>  
                                                <td id="oq_2">1,000</td>
                                                <td id="oq_3">1.000</td>
                                                <td id="oq_4">1,000</td>
                                                <td id="oq_5">1,000</td>
                                                <td id="oq_6">1,000</td>
                                                <td id="oq_7">1,000</td>
                                                <td id="oq_8">1,000</td>
                                                <td id="oq_9">1,000</td>
                                                <td id="oq_10">1,000</td>
                                                <td id="oq_11">1,000</td>
                                                <td id="oq_12">1,000</td>
                                                <td id="oq_13">1,000</td>
                                            </tr><!-- /. table row -->
                                            <tr id="sales_projection">
                                                <td id="title">Sales Projection</td>
                                                <td>
                                                    <input id="sp_1" name="sp_1" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="sp_2" name="sp_2" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="sp_3" name="sp_3" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="sp_4" name="sp_4" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="sp_5" name="sp_5" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="sp_6" name="sp_6" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="sp_7" name="sp_7" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="sp_8" name="sp_8" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="sp_9" name="sp_9" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="sp_10" name="sp_10" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="sp_11" name="sp_11" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="sp_12" name="sp_12" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td id="sp_13">120,000</td>
                                            </tr><!-- /. table row -->
                                            <tr id="purchases">
                                                <td id="title">Purchases</td>
                                                <td>
                                                    <input id="p_1" name="p_1" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="p_2" name="p_2" class="form-control " type="text"  value="1,000">
                                                </td>
                                                <td>
                                                    <input id="p_3" name="p_3" class="form-control " type="text"  value="1,000">
                                                </td>
                                                <td>
                                                    <input id="p_4" name="p_4" class="form-control " type="text"  value="1,000">
                                                </td>
                                                <td>
                                                    <input id="p_5" name="p_5" class="form-control " type="text"  value="1,000">
                                                </td>
                                                <td>
                                                    <input id="p_6" name="p_6" class="form-control " type="text"  value="1,000">
                                                <td>
                                                    <input id="p_7" name="p_7" class="form-control " type="text"  value="1,000">
                                                </td>
                                                <td>
                                                    <input id="p_8" name="p_8" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="p_9" name="p_9" class="form-control " type="text"  value="1,000">
                                                </td>
                                                <td>
                                                    <input id="p_10" name="p_10" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="p_11" name="p_11" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td>
                                                    <input id="p_12" name="p_12" class="form-control " type="text" value="1,000">
                                                </td>
                                                <td id="p_13">120,000</td>            
                                            </tr><!-- /. table row -->
                                            <tr>
                                                <td>Closing Qty</td>
                                                <td id="cq_1">1,000</td>
                                                <td id="cq_2">1,000</td>
                                                <td id="cq_3">1,000</td>
                                                <td id="cq_4">1,000</td>
                                                <td id="cq_5">1,000</td>
                                                <td id="cq_6">1,000</td>
                                                <td id="cq_7">1,000</td>
                                                <td id="cq_8">1,000</td>
                                                <td id="cq_9">1,000</td>
                                                <td id="cq_10">1,000</td>
                                                <td id="cq_11">1,000</td>
                                                <td id="cq_12">1,000</td>
                                                <td id="cq_13">1,000</td>
                                            </tr><!-- /. table row -->
                                        </tbody><!-- /. table body-->
                                    </table><!-- /. table-->
                                </div><!-- /. table responsive-->
                            </div><!-- /. accordion body -->
                        </div><!-- /. collapse -->
                    </div><!-- /. collapse -->



                    <div class="accordion-item" style="display:none">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Stock Analysis
                            </button>
                        </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default.

                                    <div class="table-responsive">    
                                        <div class="fixTableHead">
                                        <table id="table_stock_cost" class="table  table-striped fs--1 mb-0" >
                                            <colgroup>
                                                <col width="13%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                            </colgroup><!-- /. table col -->
                                            <thead class="bg-200 text-900">
                                                <tr>
                                                    <th>Account</th>
                                                    <th>Jul</th>
                                                    <th>Aug</th>
                                                    <th>Sep</th>
                                                    <th>Oct</th>
                                                    <th>Nov</th>
                                                    <th>Dec</th>
                                                    <th>Jan</th>
                                                    <th>Feb</th>
                                                    <th>Mar</th>
                                                    <th>Apr</th>
                                                    <th>May</th>
                                                    <th>Jun</th>
                                                    <th>Total</th>
                                                </tr><!-- /. table roe -->
                                            </thead><!-- /. table header -->
                                            <tbody>
                                                <tr>
                                                    <td>Opening Qty</td>
                                                    <td id="soq_1">0</td>
                                                    <td id="soq_2">0</td>
                                                    <td id="soq_3">0</td>
                                                    <td id="soq_4">0</td>
                                                    <td id="soq_5">0</td>
                                                    <td id="soq_6">0</td>
                                                    <td id="soq_7">0</td>
                                                    <td id="soq_8">0</td>
                                                    <td id="soq_9">0</td>
                                                    <td id="soq_10">0</td>
                                                    <td id="soq_11">0</td>
                                                    <td id="soq_12">0</td>
                                                    <td id="soq_13">0</td>
                                                </tr><!-- /. table row -->
                                                <tr id="sales_projection_price">
                                                    <td>Sales Projection</td>
                                                    <td id="ssp_1">0</td>
                                                    <td id="ssp_2">0</td>
                                                    <td id="ssp_3">0</td>
                                                    <td id="ssp_4">0</td>
                                                    <td id="ssp_5">0</td>
                                                    <td id="ssp_6">0</td>
                                                    <td id="ssp_7">0</td>
                                                    <td id="ssp_8">0</td>
                                                    <td id="ssp_9">0</td>
                                                    <td id="ssp_10">0</td>
                                                    <td id="ssp_11">0</td>
                                                    <td id="ssp_12">0</td>
                                                    <td id="ssp_13">0</td>
                                                </tr><!-- /. table row -->
                                                <tr id="purchasesprice">
                                                    <td>Purchases</td>
                                                    <td id="scp_1">0</td>
                                                    <td id="scp_2">0</td>
                                                    <td id="scp_3">0</td>
                                                    <td id="scp_4">0</td>
                                                    <td id="scp_5">0</td>
                                                    <td id="scp_6">0</td>
                                                    <td id="scp_7">0</td>
                                                    <td id="scp_8">0</td>
                                                    <td id="scp_9">0</td>
                                                    <td id="scp_10">0</td>
                                                    <td id="scp_11">0</td>
                                                    <td id="scp_12">0</td>
                                                    <td id="scp_13">0</td>
                                                </tr><!-- /. table row -->
                                                <tr>
                                                    <td>Closing Qty</td>
                                                    <td id="scq_1">0</td>
                                                    <td id="scq_2">0</td>
                                                    <td id="scq_3">0</td>
                                                    <td id="scq_4">0</td>
                                                    <td id="scq_5">0</td>
                                                    <td id="scq_6">0</td>
                                                    <td id="scq_7">0</td>
                                                    <td id="scq_8">0</td>
                                                    <td id="scq_9">0</td>
                                                    <td id="scq_10">0</td>
                                                    <td id="scq_11">0</td>
                                                    <td id="scq_12">0</td>
                                                    <td id="scq_13">0</td>
                                                </tr><!-- /. table row -->
                                            </tbody><!-- /. table body-->
                                        </table><!-- /. table-->
                                    </div><!-- /. table responsive-->
                                </div><!-- /. table responsive-->
                            </div><!-- /. accordion body -->
                        </div><!-- /. collapse -->
                    </div><!-- /. accordion item -->


                    <div class="accordion-item" style="display:none">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Projected Monthly Gross Profit
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default.

                                    <div class="table-responsive">
                                        <div class="fixTableHead">
                                        <table id="table_monthly_gross" class="table  table-striped fs--1 mb-0">
                                            <colgroup>
                                                <col width="13%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                                <col width="6%">
                                            </colgroup><!-- /. table col -->
                                            <thead class="bg-200 text-900">
                                                <tr>
                                                    <th>Account</th>
                                                    <th>Jul</th>
                                                    <th>Aug</th>
                                                    <th>Sep</th>
                                                    <th>Oct</th>
                                                    <th>Nov</th>
                                                    <th>Dec</th>
                                                    <th>Jan</th>
                                                    <th>Feb</th>
                                                    <th>Mar</th>
                                                    <th>Apr</th>
                                                    <th>May</th>
                                                    <th>Jun</th>
                                                    <th>Total</th>
                                                </tr><!-- /. table row -->
                                            </thead>
                                            <tbody>
                                                <tr id="sales_projection_profit">
                                                    <td>Sales Projection</td>
                                                    <td id="spp_1">0</td>
                                                    <td id="spp_2">0</td>
                                                    <td id="spp_3">0</td>
                                                    <td id="spp_4">0</td>
                                                    <td id="spp_5">0</td>
                                                    <td id="spp_6">0</td>
                                                    <td id="spp_7">0</td>
                                                    <td id="spp_8">0</td>
                                                    <td id="spp_9">0</td>
                                                    <td id="spp_10">0</td>
                                                    <td id="spp_11">0</td>
                                                    <td id="spp_12">0</td>
                                                    <td id="spp_13">0</td>
                                                </tr><!-- /. table row -->
                                                <tr id="purchasesprofit">
                                                    <td>Purchases</td>
                                                    <td id="pp_1">0</td>
                                                    <td id="pp_2">0</td>
                                                    <td id="pp_3">0</td>
                                                    <td id="pp_4">0</td>
                                                    <td id="pp_5">0</td>
                                                    <td id="pp_6">0</td>
                                                    <td id="pp_7">0</td>
                                                    <td id="pp_8">0</td>
                                                    <td id="pp_9">0</td>
                                                    <td id="pp_10">0</td>
                                                    <td id="pp_11">0</td>
                                                    <td id="pp_12">0</td>
                                                    <td id="pp_13">0</td>
                                                </tr><!-- /. table row -->
                                                <tr id="grossprofit">
                                                    <td>Gross/Profit</td>
                                                    <td id="pg_1">0</td>
                                                    <td id="pg_2">0</td>
                                                    <td id="pg_3">0</td>
                                                    <td id="pg_4">0</td>
                                                    <td id="pg_5">0</td>
                                                    <td id="pg_6">0</td>
                                                    <td id="pg_7">0</td>
                                                    <td id="pg_8">0</td>
                                                    <td id="pg_9">0</td>
                                                    <td id="pg_10">0</td>
                                                    <td id="pg_11">0</td>
                                                    <td id="pg_12">0</td>
                                                    <td id="pg_13">0</td>
                                                </tr><!-- /. table row -->

                                            </tbody><!-- /. table body-->
                                        </table><!-- /. table-->
                                    </div><!-- /. table responsive-->
                                </div><!-- /. table responsive-->
                            </div><!-- /. accordion body -->
                        </div><!-- /. collapse -->
                    </div><!-- /. accordion item -->
                </div><!-- /. accordion item -->
            </div><!-- /. accordion  -->
        </div><!-- /. container -->
    </div>





    <!-- ===============================================-->
        <!--  Tab 2  BOM  Table  Content Details-->
    <!-- ===============================================-->      

        <div class="tab-pane fade" id="tab-profile" role="tabpanel" aria-labelledby="profile-tab">
                            
            <div class="container">
                <div class="p-0">

                        <div class="row">
                            <!-- New wizard style Tab 1-1  box begins -->
                            <input type="hidden" value="" name="id" />
                            <input type="hidden" value="" name="status" />
                            <!-- New wizard style Tab 1-1 row begins -->

                            <!-- New wizard style Tab 1-1 help ends -->
                            <div class="col-md-12" id="localInput">

                                <div class="row">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                            </div>
                                            <div class="col-12">
                                                <div class="btn-group" data-toggle="buttons">
                                                    <label class="btn btn-outline-primary year">
                                                        <input type="radio" name="optionUnitCost" value="withUnitCost" autofocus id="optionAuto" checked onchange="unitType($(this).val())"> Auto Entry
                                                    </label>
                                                    <label class="btn btn-outline-primary manual">
                                                        <input type="radio" name="optionUnitCost" value="withBoom" id="optionManual" onchange="unitType($(this).val())"> Manual Entry</label>
                                                </div><!-- /. group button-->
                                            </div><!-- /.col -->
                                        
                                        </div><!-- /.row -->
                                    </div><!-- /.container -->

                                </div><!-- /.row -->


                                

                                <div class="row">

                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-floating mb-3">
                                            <input type="text" name="unit_cost" class="form-control currencySign" id="unit_cost" placeholder="Unit Cost" value="0" autofocus>
                                            <label for="unit_cost">What is the cost of this product?</label>
                                        </div><!-- /.form-floating -->

                                    </div><!-- /.col -->

                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-floating mb-3">
                                            <input type="text" name="rrp_cost" class="form-control currencySign" id="rrp_cost" placeholder="RRP Price" value="0" autofocus>
                                            <label for="rrp_cost">How much do you want to sell this product for? </label>
                                        </div><!-- /.form-floating -->

                                    </div><!-- /.col -->

                                </div><!-- /.row -->
                                <!--<hr style="border-top: 3px solid #0d6efd; background: transparent;">-->


                                <!-- New wizard style Tab 1-4 tablebegins -->
                                <div class="table-responsive ">
                                    <div class="fixTableHead">
                                    <div class="pull-left mb-2">
                                    <a href="#" type="button" class="btn  btn-falcon-success" id="add_row"><span class="fa fa-plus"></span>&nbsp;Add Another BOW Cost</a>
                                    <!--<button id="btnSkipBOM" type="button" class="btn btn-sm btn-flat">Skip BOM</button>-->
                                    </div>

                                    <!-- New wizard style Tab 1-4 BOM begins -->
                                    <table id="table_bom" class="table  table-striped fs--1 mb-0">
                                    <thead class="bg-200 text-900">
                                        <tr>
                                        <th>Item</th>
                                        <th>Description</th>
                                        <th class="col-sm-1">Yield/Quantity</th>
                                        <th class="col-sm-1">Price/Mts</th>
                                        <th>Total Mts/Quantity</th>
                                        <th>Total Cost</th>
                                        <th>GST/Vat</th>
                                        <th>Total Cost</th>
                                        <th>Average Cost</th>
                                        </tr>
                                    </thead><!-- /.table head-->
                                    <tbody>


                                <?php for ($counter = 0; $counter <= 2; $counter++) { ?>
                                    <tr id="row_<?php echo 'id_' . $counter; ?>">

                                <div class="form-group is-empty no-margin">
                                    <input name="<?php echo 'id_' . $counter; ?>" id="<?php echo 'id_' . $counter; ?>" type="hidden">
                                    <td id="<?php echo 'td_type_' . $counter; ?>">
                                        <div class="form-group is-empty no-margin">
                                            <input type="text" name="<?php echo 'type_' . $counter; ?>" class="form-control no-margin" id="<?php echo 'type_' . $counter; ?>" placeholder="Enter Item Type">
                                        </div>
                                    </td>

                                    <td id="<?php echo 'td_description_' . $counter; ?>">
                                        <div class="form-group is-empty no-margin">
                                            <input type="text" name="<?php echo 'description_' . $counter; ?>" class="form-control no-margin" id="<?php echo 'description_' . $counter; ?>" placeholder="Enter Item Description">
                                        </div>
                                    </td>
                                    <td id="<?php echo 'td_qty_' . $counter; ?>">
                                        <div class="form-group is-empty no-margin">
                                            <input name="<?php echo 'qty_' . $counter; ?>" class="form-control no-margin numberFormat" id="<?php echo 'qty_' . $counter; ?>" onChange="getTotalMts(<?php echo $counter; ?>)" type="text" value="0">
                                        </div>
                                    </td>
                                    <td id="<?php echo 'td_price_' . $counter; ?>">
                                        <div class="form-group is-empty no-margin">
                                            <input name="<?php echo 'price_' . $counter; ?>" class="form-control no-margin currencyFormat" id="<?php echo 'price_' . $counter; ?>" type="text" onChange="getTotal(<?php echo $counter; ?>)" value="0">
                                        </div>
                                    </td>
                                    <td 
                                        id="<?php echo 'td_totmts_' . $counter; ?>">0
                                    </td>
                                    <td 
                                        id="<?php echo 'td_total_' . $counter; ?>">0
                                    </td>
                                    <td 
                                        id="<?php echo 'td_vat_' . $counter; ?>">0
                                    </td>
                                    <td 
                                        id="<?php echo 'td_totcost_' . $counter; ?>">0
                                    </td>
                                    <td 
                                        id="<?php echo 'td_avecost_' . $counter; ?>">0
                                    </td>
                                </tr><!-- /. table row -->
                                <?php }
                                ?>
                                </tbody><!-- /.table body-->
                                <tfoot>
                                <tr>
                                    <th colspan="5" style="text-align: right;">Total Cost</th>
                                    <th class="SumTotal">0</th>
                                    <th class="SumVat">0</th>
                                    <th class="SumTotCost">0</th>
                                    <th class="SumAveCost">0</th>
                                </tr><!-- /.table row-->
                                </tfoot><!-- /.table footer-->
                            </table><!-- /.table -->
                        </div><!-- /.table responsive -->
                    </div><!-- /.table responsive -->
                </div><!-- /.div -->
            </div><!-- /. row -->
        </div><!-- /. border -->
    </div><!-- /. container -->
</div>
                    <div class="tab-pane fade" id="tab-contact" role="tabpanel" aria-labelledby="contact-tab">            

                        <div class="container">
                                <div class="p-0">
                                    <div class="row">

                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                            <div class="form-floating mb-3">
                                                <input type="text" name="markup_on_cost" readonly="readonly" class="form-control percentSign" id="markup_on_cost" placeholder="Markup On Cost " autofocus="autofocus" value="0" autofocus>
                                                <label for="markup_on_cost">Percentage Markup on Cost </label>
                                            </div><!-- /.form-floating -->

                                            <div class="form-floating mb-3">
                                                <input type="text" name="bom_cost" readonly="readonly" class="form-control currencySign" id="bom_cost" placeholder="BOM Cost" value="0" autofocus>
                                                <label for="bom_cost">B.O.M. (Bill Of Materials)</label>
                                            </div><!-- /.form-floating -->
                                
                                            </div><!-- /.col -->

                                        <div class="col-lg-6 col-md-6 col-sm-12">

                                            <div class="form-floating mb-3">
                                                <input type="text" name="products_cost" readonly="readonly"class="form-control currencySign" id="products_cost" placeholder="Products Cost" value="0" autofocus>
                                                <label for="products_cost">Products Cost + B.O.M.costs. </label>
                                            </div><!-- /.form-floating -->

                                            <div class="form-floating mb-3">
                                                <input type="text" name="moc" readonly="readonly" class="form-control currencySign" id="moc" placeholder="Margin on Cost " value="0" autofocus>
                                                <label for="moc">Margin on Cost </label>
                                            </div><!-- /.form-floating -->

                                        </div><!-- /.col -->

                                    </div><!-- /.row -->
                                
                                </div>
                            </div>
                        </div>



                        <div class="border-dashed-bottom my-3"></div>
                            <div class="col-12 col-sm-12 offset-0 pt-3">
                                <!--<button class="btn btn-falcon-danger" type="button" id="btncancelowner" ><i class="far fa-window-close"></i> Cancel</button>-->
                                <input name="save_local_products_step_2" type="submit" value="Next" class="btn btn-outline-success float-end">
                            </div>
                        </div>

                            <!--<div class="row">
                                <div class="col">
                                <h5>Popover in a modal</h5>
                                <p>This <a class="btn btn-secondary popover-test" href="#!" role="button" title="Popover title" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
                                <h5>Tooltips in a modal</h5>
                                <p><a class="tooltip-test" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip">This link</a> and <a class="tooltip-test" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip">that link</a> have tooltips on hover.</p>
                                </div>

                            </div>
                            -->
                    </div>
                </div>


    </div><!-- /.row -->

</div><!-- /.card-->    





         <!-- ===============================================-->
        <!--   Script to load revenue forms-->
        <!-- ===============================================-->  

        <script>
            // jQuery functions to hide and show the div
            $(document).ready(function () {
                $("select").change(function () {
                    $(this).find("option:selected")
                        .each(function () {
                        var optionValue = $(this).attr("value");
                        if (optionValue) {
                            $(".box").not("." + optionValue).hide();
                            $("." + optionValue).show();
                        } else {
                            $(".box").hide();
                        }
                    });
                }).change();
            });
        </script>


        <!-- Script -->
        <!-- <script>     
        // Add Symbol And Currency On Change

        $('input[type="text"]').focus(function () {
                var focusvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                if ($(this).hasClass('currencyFormat')) {
                    $(this).val(focusvalue);
                } else if ($(this).hasClass('percentFormat')) {
                    $(this).val(focusvalue);
                } else if ($(this).hasClass('numberFormat')) {
                    $(this).val(focusvalue);
                } else {

                }
            });

            $('input[type="text"]').focusout(function () {
                var focusoutvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                if ($(this).hasClass('currencySign')) {
                    $(this).val(cur + '' + number_format(parseFloat(focusoutvalue), 2, '.', ','));
                } else if ($(this).hasClass('percentFormat')) {
                    $(this).val(parseFloat(focusoutvalue) + '%');
                } else if ($(this).hasClass('numberFormat')) {
                    $(this).val(number_format(parseFloat(focusoutvalue), 2, '.', ','));
                } else {

                }

            });

        </script> -->


    <!-- ===============================================-->
    <!--   Script to load sales unit forms-->
    <!-- ===============================================-->  


    <script type="text/javascript">
    $(document).ready(function() {

        var i = 1;

        $("#add_row_manually_sale").click(function() {
            var numTr = $("#tab_logic tbody tr").length;
            $('#tab_logic').append("<tr id='addr" + (numTr) + "'><input type='hidden' name='sale_id_" + numTr + "' value=''>\n\
                <td><input name='region" + numTr + "' type='text' placeholder='Region' class='form-control'/> </td>\n\
                <td><input  name='jul" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='aug" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='sep" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='oct" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='nov" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='dec" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='jan" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='feb" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='mar" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='apr" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='may" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td><input  name='jun" + numTr + "' type='text' placeholder='0'  class='form-control numberSign' onchange='updateSalesProjections(this)'></td>\n\
                <td id='total_manual_sales" + numTr + "'></td><input type='hidden' name='total_sale_" + numTr + "' value=''></tr>");


        });

        $("#delete_row_manually_sale").click(function() {
            var notr = $("#tab_logic tbody tr").length
            if (notr > 1) {
                $("#addr" + (notr - 1)).remove();
            }
            updateSalesProjections();
        });


        $("#show_data").click(function() {
            var htmlString = "";
            $("#tab_logic tbody tr").each(function(index, el) {
                if (index < $("#tab_logic tbody tr").length) {
                    var region = $("[name='region" + index + "']").val();
                    var jul = $("[name='jul" + index + "']").val();
                    var aug = $("[name='aug" + index + "']").val();
                    var sep = $("[name='sep" + index + "']").val();
                    var oct = $("[name='oct" + index + "']").val();
                    var nov = $("[name='nov" + index + "']").val();
                    var dec = $("[name='dec" + index + "']").val();
                    var jan = $("[name='jan" + index + "']").val();
                    var feb = $("[name='feb" + index + "']").val();
                    var mar = $("[name='mar" + index + "']").val();
                    var apr = $("[name='apr" + index + "']").val();
                    var may = $("[name='may" + index + "']").val();
                    var jun = $("[name='jun" + index + "']").val();


                    console.log("Row " + index + " : [Region=" + region + "] - \n\
                        [Jul=" + jul + "] - \n\
                        [Aug=" + aug + "] - \n\
                        [Sep=" + sep + "] - \n\
                        [Oct=" + oct + "] - \n\
                        [Nov=" + nov + "] - \n\
                        [Dec=" + dec + "] - \n\
                        [Feb=" + feb + "] - \n\
                        [Mar=" + mar + "] - \n\
                        [Apr=" + apr + "] - \n\
                        [May=" + may + "] - \n\
                        [Jun=" + jun + "] ");
                    htmlString += showDataHtml(index, region, jul, aug, sep, oct, nov, dec, jan, feb, mar, apr, may, jun);
                }
                $("#data-row").html(htmlString);
            });
        });
    });

    function showDataHtml(index, region, jul, aug, sep, oct, nov, dec, jan, feb, mar, apr, may, jun) {
        index++;
        return "<div class='col-md-12'>Row " + index + " : \n\
            Region = " + region + " - \n\
            Jul = " + jul + " - \n\
            Aug = " + aug + " - \n\
            Sep = " + sep + " - \n\
            Oct = " + oct + " - \n\
            Nov = " + nov + " - \n\
            Dec = " + dec + " - \n\
            Jan = " + jan + " - \n\
            Feb = " + feb + " - \n\
            mar = " + mar + " - \n\
            Apr = " + apr + " - \n\
            May = " + may + " - \n\
            Jun = " + jun + " - \n\
            </div>"
            }

    function monthlySalesType(val) {
        if (val == "manual") {
            $("#collapseZero").addClass('show');
            $("#monthlytable_qty").val(0);
            $("#monthlytable_qty").attr("readonly", true);
            $('#table_projected_sales tbody').find('#purchases td input').each(function() {
                if ($(this).prop('readonly', true)) {
                    $(this).prop('readonly', false);
                }
            })
            $('#add_row_manually_sale').removeClass('disabled');
            $('#delete_row_manually_sale').removeClass('disabled');
        } else {
            $("#collapseZero").removeClass('show');
            $("#monthlytable_qty").attr("readonly", false);
            $('#tab_logic tbody').find('td input').each(function() {
                $(this).val('');
            });
            $('#table_projected_sales tbody').find('#purchases td input').each(function() {
                if ($(this).prop('readonly', false)) {
                    $(this).prop('readonly', true);
                }
            })
            $('#add_row_manually_sale').addClass('disabled');
            $('#delete_row_manually_sale').addClass('disabled');

            TableCalculation();
        }
        //    Clear Opening And closing Fields value
        $('#table_projected_sales tbody').find('td input').each(function() {
            $(this).val(0)
        })
        $("#tab_logic > thead").find("#action_sale_title").remove();
        //    Remove Extra Row On Change Of Sale Status
        var noTr = $("#tab_logic tbody tr").length - 1;
        for (var i = 0; i <= noTr; ++i) {
            if (i > 0) {
                $("#addr" + (i)).remove();
            }
            $("#td_action_sale" + (i)).remove();

        }
        updateSalesProjections();
    }

    //    Update Sales
    function updateSalesProjections(event) {
        var index = $("#tab_logic tbody tr").length;
        if (index) {
            index = index - 1;
            // add loop
            var loop;
            var jul = 0;
            var aug = 0;
            var sep = 0;
            var oct = 0;
            var nov = 0;
            var dec = 0;
            var jan = 0;
            var feb = 0;
            var mar = 0;
            var apr = 0;
            var may = 0;
            var jun = 0;
            var total = 0;
            for (loop = 0; loop <= index; ++loop) {
                //    Empty total on each time
                total = 0;

                //    Total

                if (parseInt($('input[name=jul' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    jul += parseInt(jul) + parseInt($('input[name=jul' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=jul' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    jul += 0
                    total += 0
                }
                if (parseInt($('input[name=aug' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    aug += parseInt(aug) + parseInt($('input[name=aug' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=aug' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    aug += 0
                    total += 0
                }
                if (parseInt($('input[name=sep' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    sep += parseInt(sep) + parseInt($('input[name=sep' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=sep' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    sep += 0
                    total += 0
                }
                if (parseInt($('input[name=oct' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    oct += parseInt(oct) + parseInt($('input[name=oct' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=oct' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    oct += 0
                    total += 0
                }
                if (parseInt($('input[name=nov' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    nov += parseInt(nov) + parseInt($('input[name=nov' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=nov' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    nov += 0
                    total += 0
                }
                if (parseInt($('input[name=dec' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    dec += parseInt(dec) + parseInt($('input[name=dec' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=dec' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    dec += 0
                    total += 0
                }
                if (parseInt($('input[name=jan' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    jan += parseInt(jan) + parseInt($('input[name=jan' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=jan' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    jan += 0
                    total += 0
                }
                if (parseInt($('input[name=feb' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    feb += parseInt(feb) + parseInt($('input[name=feb' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=feb' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    feb += 0
                    total += 0
                }
                if (parseInt($('input[name=mar' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    mar += parseInt(mar) + parseInt($('input[name=mar' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=mar' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    mar += 0
                    total += 0
                }
                if (parseInt($('input[name=apr' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    apr += parseInt(apr) + parseInt($('input[name=apr' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=apr' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    apr += 0
                    total += 0
                }
                if (parseInt($('input[name=may' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    may += parseInt(may) + parseInt($('input[name=may' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=may' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    may += 0
                    total += 0
                }
                if (parseInt($('input[name=jun' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, '')) >= 0) {
                    jun = parseInt(jun) + parseInt($('input[name=jun' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
                    total += parseInt($('input[name=jun' + loop + ']').val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
                } else {
                    jun += 0
                    total += 0
                }

                $('#total_manual_sales' + loop + '').html(number_format(total, 0, '.', ','));
                $('input[name=total_sale_' + loop + ']').val(number_format(total, 0, '.', ','));

            }
            if (jul >= 0) {
                $("#sp_1").val(number_format(jul, 0, '.', ','))
                $("#p_1").val(number_format(jul, 0, '.', ','))
            }
            if (aug >= 0) {
                $("#sp_2").val(number_format(aug, 0, '.', ','))
                $("#p_2").val(number_format(aug, 0, '.', ','))
            }
            if (sep >= 0) {
                $("#sp_3").val(number_format(sep, 0, '.', ','))
                $("#p_3").val(number_format(sep, 0, '.', ','))
            }
            if (oct >= 0) {
                $("#sp_4").val(number_format(oct, 0, '.', ','))
                $("#p_4").val(number_format(oct, 0, '.', ','))
            }
            if (nov >= 0) {
                $("#sp_5").val(number_format(nov, 0, '.', ','))
                $("#p_5").val(number_format(nov, 0, '.', ','))
            }
            if (dec >= 0) {
                $("#sp_6").val(number_format(dec, 0, '.', ','))
                $("#p_6").val(number_format(dec, 0, '.', ','))
            }
            if (jan >= 0) {
                $("#sp_7").val(number_format(jan, 0, '.', ','))
                $("#p_7").val(number_format(jan, 0, '.', ','))
            }
            if (feb >= 0) {
                $("#sp_8").val(number_format(feb, 0, '.', ','))
                $("#p_8").val(number_format(feb, 0, '.', ','))
            }
            if (mar >= 0) {
                $("#sp_9").val(number_format(mar, 0, '.', ','))
                $("#p_9").val(number_format(mar, 0, '.', ','))
            }
            if (apr >= 0) {
                $("#sp_10").val(number_format(apr, 0, '.', ','))
                $("#p_10").val(number_format(apr, 0, '.', ','))
            }
            if (may >= 0) {
                $("#sp_11").val(number_format(may, 0, '.', ','))
                $("#p_11").val(number_format(may, 0, '.', ','))
            }
            if (jun >= 0) {
                $("#sp_12").val(number_format(jun, 0, '.', ','))
                $("#p_12").val(number_format(jun, 0, '.', ','))
            }


        }
        updateTotalSales();
    }
    //    Update Total Sales
    function updateTotalSales() {
        var totalSales = 0;
        var totalPurchase = 0;
        $('#sales_projection').find('td input').each(function() {
            totalSales += Math.floor($(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
        })
        $('#purchases').find('td input').each(function() {
            totalPurchase += Math.floor($(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, ''))
        })
        $("#sp_13").html(number_format(totalSales, 0, '.', ','))
        $("#p_13").html(number_format(totalSales, 0, '.', ','))
        TableCalculation();
    }


    </script>





    <script>
        function unitType(val) {
        if (val == "withBoom") {
            $('#table_bom').show();
            $("#unit_cost").val(0);
            $("#products_cost").val(0);
            $("#rrp_cost").val(0);
            $("#unit_cost").attr("readonly", true);
            $('#table_bom tbody').find('td input').each(function () {
            if ($(this).prop('readonly', true)) {
                $(this).prop('readonly', false);
            }
            })
            $('#add_row').removeClass('disabled');
            if (Object.keys($('[name="id"]').val()).length > 0) {
            get_boom_table($('[name="id"]').val());
            }

        } else {
            $("#unit_cost").attr("readonly", false);
            $('#table_bom > tbody').find('td input').each(function () {
            if ($(this).prop('readonly', false)) {
                $(this).prop('readonly', true);
            }
            })
            $('#add_row').addClass('disabled');
            $('#table_bom').hide();

            var noRow = $("#table_bom > tbody").children().length - 1;
            $("#table_bom > thead").find("#action_title").remove();
            for (var lp = 0; lp <= noRow; lp++) {
            if (lp > 2) {
                $('#table_bom tr#row_id_' + lp).remove();
            }
            $('#table_bom').find('#td_action_' + lp).remove();
            $('#type_' + lp).val("");
            $('#description_' + lp).val("");
            $('#qty_' + lp).val("");
            $('#price_' + lp).val("");
            $('#td_totmts_' + lp).html("0");
            $('#td_total_' + lp).html("0");
            $('#td_vat_' + lp).html("0");
            $('#td_totcost_' + lp).html("0");
            $('#td_avecost_' + lp).html("0");
            if (lp <= 2) {
                getTotalMts(lp)
                getTotal(lp)
            }
            }
            // Clear Foot Data
            $('#table_bom > tfoot').find('.SumTotal').html("0")
            $('#table_bom > tfoot').find('.SumVat').html("0")
            $('#table_bom > tfoot').find('.SumTotCost').html("0")
            $('#table_bom > tfoot').find('.SumAveCost').html("0")
            $('#table_bom > tfoot').find('#footaction').remove()
        }
    }




    </script>




<!-- ===============================================-->
<!--   Show more drop view start -->
<!-- ===============================================-->      
<!--<a href="javascript:void(0);" class="show-more p-3" title="Show More">Show More</a>

<div class="show-more-content p-3">               
    <p class="nomargin">Risks:</p>
    <ul class="status-meeting">
        <li> Keeping auth as a risk for now until we get it through InfoSec approval. Really great progress made up to this point though</li>
        <li> Requirements becoming a bottleneck--need to see where we can free up time for folks involved here to continue feeding these requirements to Webonise</li>
        <li> Legal: could be some potential delays here if sweeping changes are needed to Ts and Cs both in the Partner Center and the app, particularly if they are not global but rather are regional.</li>
    </ul>             
    </div>
-->
 <!-- Script 
 <script>     

    $('.show-more').click(function() {
            $(this).prev().slideToggle();
            if (($(this).text()) == "Show More") {
                $(this).text("Show Less");
            } else {
                $(this).text("Show More");
            }
        });

</script>       
    -->

<!-- ===============================================-->
<!--   Show more drop view  end-->
<!-- ===============================================-->   


