                <!-- ===============================================-->
                <!--   Wizard Tab 2  Content Details-->
                <!-- ===============================================-->              
                <div class="tab-pane" role="tabpanel" aria-labelledby="bootstrap-wizard-tab2" id="bootstrap-wizard-tab2">
                    <form>        
                        <div class="card mb-3">            
                            <div class="card-header">
                                <div class="row">
                                    <div class="col-lg-4">
                                    <a class="mb-0 d-block d-flex align-items-center" id="plant_equipment_toogle" style='cursor: pointer;'>
                                        <span class="circle"><span class="fas fa-plus fa-3x text-primary"></span></span><span class="ms-3"></span></a>
                                        <a class="mb-0 d-block d-flex align-items-center pt-2" data-bs-toggle="collapse" data-bs-target="#collapsePlant" aria-expanded="false" aria-controls="collapsePlant"style='cursor: pointer;'>
                                        <span class="circle"><span class="fas fa-arrow-down fa-3x text-success"></span></span><span class="ms-3"></span></a>	
                                    </div><!-- /.col-->
                                    <div class="col-lg-4">
                                        <h5  class="mb-0 d-block d-flex align-items-left">
                                            Plant and Equipment
                                        </h5>
                                    </div><!-- /.col-->
                                    <div class="col-lg-4">
                                     <a class="btn btn-falcon-outline-info float-end text-primary pt-2" data-html="true" data-bs-placement="auto" data-popover-content="#pla" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
                                    </div><!-- /.col-->
                                </div><!-- /.row-->
                            </div><!-- /.header-->
                            <div class="collapse handlecurrencyformat" id="plant_equipment_collapse">
                            <div class="p-2">	
                                <div class="hidden d-none" id="pla">	
                                    <div class="popover-heading"><span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
                                        Help Center
                                    </div>
                                        <div class="popover-body">
                                            
                                        <div class="card mb-3">
                                            <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-1.png);"></div> <!--/.bg-holder-->
                                                <div class="card-body position-relative">
                                                    <div class="row">
                                                        <div class="col-lg-12">									
                                                        <h5>Plant and Equipment</h5>
                                                            <p class="mt-1 ps-3 mb-3">
                                                                Plant and Equipment commonly known to as PP&E refers to the equipment that a company may need to purchase to operate the business, some typical items are:      
                                                            </p>
                                                            <ul>
                                                                <li>computers</li>
                                                                <li>Office furniture</li>
                                                                <li>property and land</li>
                                                            </ul>
                                                                                
                                                            <hr style="border-top: 3px solid #0064B2; background: transparent;"> 
                                                            <h5>How do I add a One-Time-Costs?</h5>
                                                            <ol class="mt-1">          
                                                                <li>Click Add New Cost</li>
                                                                <li>Select a category from the dropdown list</li>                                            
                                                                <li>Enter a description</li>
                                                                <li>Enter the cost</li>
                                                                <li>Click Save and Continue</li>        
                                                                <li><a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</a></li>
                                                            </ol>  
                                                            <!--<img src="<?php echo site_url(); ?>custom-assets/images/help_screen_shots/setup/su_2.png" width="100%" height="100%"alt="Startup-1" class="img-responsive">  		
                                                            <a class="btn btn-link ps-0 btn-sm" href="../../documentation/getting-started.html" target="_blank">Get Started<span class="fas fa-chevron-right ms-1 fs--2"></span></a>-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>		
                                    </div>
                        
                                    <div id="plant_equipment">
                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="row p-3">
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <div class="card p-3">        
                                                        <div class="form-floating mb-3">
                                                            <input type="text" name="asset_description" class="form-control validate" id="asset_description" placeholder="Asset Description" value="">
                                                            <label for="asset_description">Asset Description</label>
                                                        </div><!-- ./from floating -->
                                                        <div class="form-floating mb-3">
                                                            <input type="text" name="aquistion_cost" class="form-control currencySign validate" id="aquistion_cost" placeholder="Asset Description" value="">
                                                            <label for="aquistion_cost">Acquisition Cost</label>
                                                        </div>
                                                        <!-- <div class="form-group">
                                                        <div class="col-md-12">
                                                            <div class="group">
                                                                <input type="text" name="gst" id="gst">
                                                                <span class="highlight"></span>
                                                                <span class="bar"></span>
                                                                <label class="group-label">GST</label>
                                                            </div>
                                                        </div>
                                                    </div> -->
                                                <div class="form-floating mb-3">
                                            <input type="text" name="useful_life" class="form-control validate" id="useful_life" placeholder="Useful Life(Years)" value="">
                                            <label for="aquistion_cost">Useful Life(Years)</label>
                                        </div><!-- ./from floating -->
                                    </div><!-- ./card -->
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="card p-3">        
                                        <div class="form-floating mb-3">
                                            <input type="text" name="qty" class="form-control validate" id="plantequip_qty" placeholder="Quantity" value="">
                                            <label for="aquistion_qty">Quantity</label>
                                        </div><!-- ./from floating -->
                                                <!-- <div class="form-group">
                                                <div class="col-md-12">
                                                    <div class="group">
                                                        <input type="text" name="total" id="aquistion_total" readonly>
                                                        <span class="highlight"></span>
                                                        <span class="bar"></span>
                                                        <label class="group-label">Total</label>
                                                    </div>
                                                </div>
                                            </div> -->
                                        <div class="form-floating mb-3">
                                            <select name="depreciation_method" class="form-select validate" id="depreciation_method" aria-label="oneTimeCost">
                                                <option value="" selected>Select</option>
                                                <option value="SL">SL(Straight Line)</option>
                                            </select><!-- ./select -->
                                                <label for="depreciation_method">Depreciation_Method</label>
                                        </div><!-- ./from floating -->
                                        <div class="form-floating mb-3">
                                            <input type="text" name="salvage_value" class="form-control currencySign validate" id="salvage_value" placeholder="Quantity" value="">
                                            <label for="salvage_value">Salvage Value</label>
                                        </div><!-- ./from floating -->
                                    </div><!-- ./card -->
                                </div><!-- ./col -->
                            </div><!-- ./row -->
                            <div class="row p-3">
                                <div class="border-dashed-bottom my-3"></div>
                                    <div class="col-12 col-sm-12 offset-0 pt-3">
                                    <input type='hidden' id='plantequipment_id' value=''>
                                        <button class="btn btn-falcon-danger" type="button" id="btncanceplantequipment" ><i class="far fa-window-close"></i> Cancel</button>
                                        <button class="btn btn-falcon-success float-end" id="btnsaveplantequipment" type="button">Save and Continue</button>
                                    </div><!-- /.col -->
                                </div><!-- /.border -->
                            </div><!-- /.row -->																
                        </div> <!-- card mb-1 -->
                    </div><!-- ./col -->
                    <div class="collapse" id="collapsePlant">
                        <div class="border p-card rounded">
                            <div class="box-body pt-3">
                                <div class="box-body table_one">
                                    <div class="row" id="one_time_cost_row_add">            
                                            <div class="col-lg-12 col-md-12 col-sm-12" id="one_time_cost_plant_equipment" style='margin-top: 16px;'>
                                                <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
                                                    <div class="table-responsive scrollbar">
                                                        <div class="fixTableHead">
                                                        <table id="planequipmentDT" class="table table-striped fs--1 mb-0"  style="width:100%">
                                                                <thead class="bg-200 text-900">
                                                                    <tr>
                                                                    <th>Asset Description</th>
                                                                    <th>Qty</th>
                                                                    <th>Acquisition Cost</th>
                                                                    <th>Total</th>
                                                                    <th>GST</th>
                                                                    <th>Depreciation Method </th>        
                                                                    <th>Useful Life(Year)</th>
                                                                    <th>Salvage Value</th>
                                                                    <th>Monthly </th>
                                                                    <th>Year 1 </th>
                                                                    <th>Year 2 </th>
                                                                    <th>Year 3 </th>
                                                                    <th >Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                </tbody>
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
                                                                    </tr>
                                                                </tfoot>
                                                            </table> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a class="mb-0 d-block d-flex align-items-center pt-5" data-bs-toggle="collapse" data-bs-target="#collapsePlant"aria-controls="collapsePlant"style='cursor: pointer;'>
                                        <span class="circle"><span class="fas fa-arrow-up fa-3x text-success" ></span></span><span class="ms-3"></span></a>		     
                                    </div>      
                                </div>        
                                <div class="mb-3" style="display:none">
                                    <label class="form-label" for="bootstrap-wizard-wizard-email">Email*</label>
                                    <input class="form-control" type="email" name="email" placeholder="Email address" pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$" required="required" id="bootstrap-wizard-wizard-email" data-wizard-validate-email="true" />
                                    <div class="invalid-feedback">You must add email</div>
                                </div>
                            </div>
                        </div>
                    </div>                 
                </form>
            </div>
