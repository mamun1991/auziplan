                   
        <style type="text/css">

            .visible {
            visibility: visible;
            }
            .invisible {
            visibility: hidden;
            }

            .element {
            @include invisible(visible);
            }
            .element {
            @include invisible(hidden);
            }

            /* Hide The Table Rows When Scroll */
            .form-group {
                position: inherit;
            }

            #table_import_bom thead,
            tfoot {
                position: sticky;
                top: 0;
                bottom: 0;
                z-index: 10;
                background-color: rgba(234, 242, 255, 1.0);

            }
            #table_bom thead,
            tfoot {
                position: sticky;
                top: 0;
                bottom: 0;
                z-index: 10;
                background-color: rgba(234, 242, 255, 1.0);
            }

            .scrolling table {
                table-layout: inherit;
                *margin-left: -100px;/*ie7*/
                }
                .scrolling td, th {
                    vertical-align: top;
                    padding: 10px;
                    min-width: 100px;
                }
                .scrolling th {
                    position: absolute;
                    *position: relative; /*ie7*/
                        left: 0;
                        width: 120px;
                }
                .outer {
                    position: relative
                }
                .inner {
                    overflow-x: auto;
                    overflow-y: visible;
                    margin-left: 120px;
                }

            </style>
                        
                        
                <div class="tab-content">

                <!-- ===============================================-->
                <!--   Wizard Products Revenue  Tab 1 Content Details-->
                <!-- ===============================================-->      

                    <div class="tab-pane active " role="tabpanel" aria-labelledby="bootstrap-wizard-tab1" id="bootstrap-wizard-tab1">
                        <form novalidate="novalidate">
                        
                            <div class="mb-1 mb-lg-0">
                                <div class="card-header">
                                    <h5 class="mb-0">Products Sales Assumptions </h5>
                                    <!--<button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Launch static backdrop modal</button> -->
                                </div><!-- /. card header -->
                            
                                <div class="card-body bg-light">   
                                    <a class="mb-3 d-block d-flex align-items-center" href="#pro-form" data-bs-toggle="collapse" aria-expanded="false" aria-controls="#pro-form">
                                    <span class="circle-dashed"><span class="fas fa-plus"></span></span><span class="ms-3">Add product</span></a>
                            
                                <div class="collapse" id="pro-form">

                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
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
                                                            <div class="btn-group p-3" data-toggle="buttons">
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

                                                <div class="col-lg-4 col-md-4 col-sm-12">
                                                    <div class="form-floating mb-1">
                                                        <input type="text" name="product_description" class="form-control" id="product_description" placeholder="Product Description" value="Product 1" autofocus>
                                                        <label  for="product_description">Add Product Description </label>
                                                    </div><!-- /.form-floating -->          
                                                </div><!-- /. col -->

                                                <div class="col-lg-4 col-md-4 col-sm-12">
                                                    <div class="form-floating mb-3">     
                                                        <input type="text" name="opening_qty" class="form-control numberSign" id="opening_qty" placeholder="Opening Qty" value="1,000" autofocus>
                                                        <label for="opening_qty">Opening stock for this product</label>
                                                    </div><!-- /.form-floating -->   
                                                </div><!-- /. col -->

                                                <div class="col-lg-4 col-md-4 col-sm-12">
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
                                    
                    <div class="container pt-3">
                        <div class="p-0">
        
                                <div class="row">
                                    <!-- New wizard style Tab 1-1  box begins -->
                                    <input type="hidden" value="" name="id" />
                                    <input type="hidden" value="" name="status" />
                                    <!-- New wizard style Tab 1-1 row begins -->

                                    <!-- New wizard style Tab 1-1 help ends -->
                                    <div class="col-md-12 mt-2" id="localInput">
                                        <div class="row">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col">
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="btn-group p-3" data-toggle="buttons">
                                                            <label class="btn btn-outline-primary year">
                                                                <input type="radio" name="optionUnitCost" value="withUnitCost" id="optionAuto" checked onchange="unitType($(this).val())"> Auto Entry
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

            <div class="border-dashed-bottom my-3"></div>
                <div class="col-12 col-sm-12 offset-0 pt-3">
                    <button class="btn btn-falcon-danger" type="button" id="btncancelowner" ><i class="far fa-window-close"></i> Cancel</button>
                    <input name="save_local_products_step_2" type="submit" value="Save and Continue" class="btn btn-outline-success float-end">
                </div>
            </div>   
        </div>

            <div class="box-body pt-3">
                <div class="box-body table_one">
                    <div class="row">     
                        <div class="col-lg-12 col-md-12 col-sm-12" id="products" style='margin-top: 16px;'>
                            <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
                                <div class="table-responsive scrollbar">
                                    <div class="fixTableHead">

                                        
                                        <table id="monthly_productsDT" class="table table-striped fs--1 mb-0" style="width:100%">
                                            <thead class="bg-200 text-900">
                                                <tr>             
                                                    <th>Product Type</th>
                                                    <th>Product Description</th>  
                                                    <th>Monthly Qty</th>  
                                                    <th>Unit Cost</th>       
                                                    <th>Markup on Cost</th>      
                                                    <th>Selling Price</th>   
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

                <!-- <div class="show-more-content p-3">                     
                <p class="nomargin">Risks:</p>
                    <ul class="status-meeting">
                        <li> Keeping auth as a risk for now until we get it through InfoSec approval. Really great progress made up to this point though</li>
                        <li> Requirements becoming a bottleneck--need to see where we can free up time for folks involved here to continue feeding these requirements to Webonise</li>
                        <li> Legal: could be some potential delays here if sweeping changes are needed to Ts and Cs both in the Partner Center and the app, particularly if they are not global but rather are regional.</li>
                    </ul>                                         
                </div>
                <a href="javascript:void(0);" class="show-more p-3" title="Show More">Show More</a>
                -->

        </div>
    </form>
</div>



