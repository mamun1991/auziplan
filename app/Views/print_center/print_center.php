
<!-- ===============================================-->
<!--   Header  Content Details-->
<!-- ===============================================-->

<div class="row pt-3">
    <div class="col-12">
        <div class="card pt-3 mb-3">
                <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->
                  <div class="card-body position-relative">
                      <div class="row">
                        <h3>Print Center</h3>
                              <!--<p class="mt-2">                   
                                  The page header is a nice little feature to add appropriate spacing around the headings on a page. 
                                  This is particularly helpful on a web page where you may have several post titles and need a way to add distinction to each of them.            
                              </p>-->
                              <div class="float-end">         
                                  <div class="d-flex align-items-center justify-content-end my-3 p-2" >
                                    <div id="bulk-select-replace-element">
                                    <button class="btn btn-falcon-info float-end me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#needhelp_view"> <i class="fas fa-info"></i></button>      
                                        <!-- parent pages-->	  	 		
                                        <a class="btn btn-falcon-primary me-1 mb-1 " data-bs-toggle="modal" data-bs-target="#printBackground" href="" role="button" aria-expanded="false">
                                            <div class="d-flex align-items-center"> <span><i class="fa fa-images"></i> 
                                              </span>
                                              </div>
                                          </a>
                                          <!--<button class="btn btn-falcon-success btn-sm ms-2" type="button"><span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span><span class="ms-1">New</span></button>-->
                                                    
                                      </div>
                                      <div class="d-none ms-3" id="bulk-select-actions">
                                          
                                      <div class="d-flex">
                                            
                                          <!--<select class="form-select form-select-sm" aria-label="Bulk actions">
                                              <option selected="selected">Bulk actions</option>
                                              <option value="Delete">Delete</option>
                                              <option value="Archive"></option>
                                          </select>-->
                                          
                                          <!--<button class="btn btn-falcon-success" type="button"> <i class="fa fa-print"></i></button>-->
                                      
                                          <button class="btn btn-falcon-success float-end  me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#samplePlanModal"> <i class="fas fa-print"></i></button>    
                                        
                                          <a class="btn btn-falcon-success float-end  me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#samplePlanModal">Print All: <span class="fa fa-print"></span></a>   

                                        </div>
                                      </div>
                                  </div>
                              </div>                    
                          </div>
                      </div>
                </div>
           

                <!-- ===============================================-->
                <!--   Reports  Content Details-->
                <!-- ===============================================-->


              <div class="card pt-3 mb-3">
                  <div class="card-body p-5">

                  <div class="row">
                    <div class="col-lg-6">
                      <h4> Financial Reports</h4>
                    </div><!-- /.col-->
                    <div class="col-lg-6">
                    <a class="btn btn-falcon-outline-info float-end text-primary" data-html="true" data-bs-placement="auto" data-popover-content="#print" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
                    </div><!-- /.col-->
                  </div><!-- /.row-->

                  <div class="p-2">	
                    <div class="my-popover-class  hidden d-none" id="print">
                      <div class="popover-heading" style="background-color: rgba(25, 255, 255, 1.0) ;color:rgba(0, 0, 0, 1.0);font-size:16px;font-weight:thin;" >
                        <span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
                          Help Center
                        </div>
                        <div class="popover-body">					
                          <div class="card mb-3">
                            <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>custom-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->
                              <div class="card-body position-relative">
                                <div class="row">
                                  <div class="col-lg-12">

                                    <h5>3 Main Financial Statements</h5>                 
                                    <p class="mt-1 ps-3 mb-3">
                                    There are 3 financial statements which you need to understand to operate your business effectively,    
                                </p>                                    
                                    <ol class="pt-1">     
                                      <li>The Balance Sheet</li>                                                  
                                      <li>The Income Statement (Profit and Loss) </li>
                                      <li>The Cashflow Statement</li>                                  
                                    </ol>    
                                    <h5>Balance Sheet</h5>
                                      <p class="mt-1 ps-3 mb-3">
                                          The balance sheet statement shows the assets of a business and how they have been funded by liabilities and equity at a particular point in time, 
                                          usually the beginning and end of the accounting period.
                                      </p>                            
                                    <h5>Income Statement (Profit and Loss)</h5>
                                      <p class="mt-1 ps-3 mb-3">
                                        The income statement shows the profit of the business for the period, which is equal to the movement on the retained earnings account between the opening and closing balance sheets.
                                      </p>          
                                    <h5>Cashflow Statement</h5>
                                      <p class="mt-1 ps-3 mb-3">
                                        The cash flow statement shows the net cash in or out of the business for the period, and the cash flow is equal to the movement on the cash balance between the opening and closing balance sheets.                                         
                                    </p>   
                                    
                                     <p class="mt-1 ps-3 mb-3"> 
                                        The 3 financial statements change in presentation and format depending on the business involved, and the purpose of the 3 financial statements.                                            
                                    </p>   
                                  
                                    <hr style="border-top: 3px solid #0064B2; background: transparent;"> 
                                      <h5>How do I print a report?</h5>
                                    <ol class="pt-1">     
                                      <li>Select a report</li>                                                  
                                      <li>Click print </li>
                                      <li>Enter the date.</li>
                                       
                                      <li><a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-print fa-1x" aria-hidden="true"></i> Print</a></li>												
                                    </ol>    
                                    <!--<img src="<?php echo site_url(); ?>custom-assets/images/help_screen_shots/setup/su_1.png" width="100%" height="100%"alt="Startup-1" class="img-responsive">  -->
                                  </div><!-- /.col-->
                                </div><!-- /.row-->
                              </div><!-- /.card body-->
                            </div><!-- /.bg-holder-->																				
                          </div><!-- /.card-->
                        </div><!-- /.popover-->
                      </div>
                      
                      <div class="table-responsive scrollbar">
                        <table class="table mb-0">
                            <thead class="text-black bg-200">
                            <tr>
                                <th class="align-middle white-space-nowrap">
                                <div class="form-check mb-0"><input class="form-check-input" type="checkbox" data-bulk-select='{"body":"bulk-select-body","actions":"bulk-select-actions","replacedElement":"bulk-select-replace-element"}' /></div>
                                </th>
                                <th class="align-middle">Select Report</th>
                                
                            </tr>
                            </thead>
                            <tbody id="bulk-select-body">
                            <tr>
                                <td class="align-middle white-space-nowrap">
                                    <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="checkbox-1" data-bulk-select-row="data-bulk-select-row" /></div>
                                </td>
                                <td><a href="<?php echo site_url(); ?>/FinancialReport/printBusinessAssumptions" target="">General Business Assumptions</td>
                                
                            </tr>
                            <tr>
                                <td class="align-middle white-space-nowrap">
                                <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="checkbox-2" data-bulk-select-row="data-bulk-select-row" /></div>
                                </td>
                                <th class="align-middle">Emilia Clarke</th>
                                
                            </tr>
                            <tr>
                                <td class="align-middle white-space-nowrap">
                                <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="checkbox-3" data-bulk-select-row="data-bulk-select-row" /></div>
                                </td>
                                <th class="align-middle">Peter Dinklage</th>
                                
                            </tr>
                            <tr>
                                <td class="align-middle white-space-nowrap">
                                <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="checkbox-4" data-bulk-select-row="data-bulk-select-row" /></div>
                                </td>
                                <th class="align-middle">Sean Bean</th>
                                
                            </tr>
                            <tr>
                                <td class="align-middle white-space-nowrap">
                                <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="checkbox-5" data-bulk-select-row="data-bulk-select-row" /></div>
                                </td>
                                <th class="align-middle">Maisie Williams</th>
                                
                            </tr>
                            <tr>
                                <td class="align-middle white-space-nowrap">
                                <div class="form-check mb-0"><input class="form-check-input" type="checkbox" id="checkbox-6" data-bulk-select-row="data-bulk-select-row" /></div>
                                </td>
                                <th class="align-middle">Sophie Turner</th>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
	      <?php echo view('needhelp_view'); ?>


                <!-- ===============================================-->
                <!--  New Theme Modal To Background Theme Color  Content Details-->
                <!-- ===============================================-->


                <div class="modal fade" id="printBackgroundfdsafasd" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl mt-6" role="document">
                        <div class="modal-content border-0">
                            <div class="position-absolute top-0 end-0 mt-3 me-3 z-index-1">
                              <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button></div>
                                <div class="modal-body p-0">
                                    <div class="bg-light rounded-top-lg py-3 ps-4 pe-6">


                                        <h5 class="mb-1" id="staticBackdropLabel">Add a new background</h5>

                                    </div>

                                    <form id="pdfImageForm" enctype="multipart/form-data">
                                      <div class="modal-content">
                                        <div class="modal-header">

                                          <!--<a href="http://www.squareplans.com/" class="navbar-brand" style="color:rgba(41, 0, 0, 1.0);font-size:30px;font-weight:300; margin-top: 25px;float: left;"><b>Square</b>Plans</a>-->
                                          <h3 class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:center">
                                              <span><img src="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-60x60.png" alt="Logo" style="margin-right: 3px; margin-top: -10%; width:60px; height: 60px;  float: center;"/></span>
                                              <span style="color:rgba(0, 0, 0, 1.0);font-size:40px;font-weight:100; margin-right: 0px; margin-top: 40px;float: center;">Print</span>
                                              <span style="color:rgba(13, 110, 252, 1.0);font-size:40px; margin-top: 40px;float: center;">Center</span>
                                          </h3>

                                        </div><!-- /.modal headear -->
                                          <div class="modal-body ">
                                            <div class="text-center">
                                                <div class="card-header">
                                              <h5>Theme Backgrounds</h5>
                                                </div>
                                                <div class="card-body">
                                              <!--<h5 class="card-title">Special title treatment</h5>-->
                                              <p>Select from one of these background's or upload your custom company background theme.</p>
                                              <div class="card-header">
                                                  <div class="row">
                                                    <div class="col-md-6">
                                                        <!--<label for="pdfImage" class="form-label">Upload Image</label>-->
                                                        <input name="pdfImage" class="form-control primary" type="file" id="customPdfImage">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="float-end">
                                                        <button class="btn btn-falcon-success float-end  me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#samplePlanModal"> <i class="fas fa-print"></i></button>    
                                                          <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal"><i class="fa fa-arrow-left"></i></button>
                                                          <!--<a href="<?php echo site_url(); ?>Dashboard/my_plan_pdf" class="btn btn-outline-primary " target="_blank"><i class="fa fa-print">&nbsp;</i></a>-->
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="row p-4" id="pdfImageGallery">

                                                      <div class="col-lg-3 col-md-3 col-sm-3">
                                                        <div class="card text-left">
                                                            <img src="<?php echo site_url() . 'custom-assets/img/backgrounds/pdf_bg.jpg' ?>" height="300" class="card-img-top" alt="...">
                                                          <div class="card-body text-center">
                                                            <h5>Abstract</h5>
                                                            <input type="radio" name="pdfImage" value="pdf_bg.jpg" <?php
                                                            if ($company_detail['pdfImage'] == 'pdf_bg.jpg') {
                                                                echo 'checked';
                                                            }
                                                          ?>>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                                    <div class="card text-left">
                                                        <img src="<?php echo site_url() . 'custom-assets/img/backgrounds/background2.jpg' ?>" height="300" class="card-img-top" alt="...">
                                                        <div class="card-body text-center">
                                                        <h5>Skyscraper</h5>
                                                          <input type="radio" name="pdfImage" value="background2.jpg" <?php
                                                          if ($company_detail['pdfImage'] == 'background2.jpg') {
                                                              echo 'checked';
                                                          }
                                                          ?>>
                                                        </div>
                                                      </div>
                                                    </div>

                                                    <div class="col-lg-3 col-md-3 col-sm-3">
                                                      <div class="card text-left">
                                                          <img src="<?php echo site_url() . 'custom-assets/img/backgrounds/bg_1.jpg' ?>" height="300" class="card-img-top" alt="...">
                                                          <div class="card-body text-center">
                                                          <h4>Misty</h4>
                                                          <input type="radio" name="pdfImage" value="bg_1.jpg" <?php
                                                          if ($company_detail['pdfImage'] == 'bg_1.jpg') {
                                                              echo 'checked';
                                                          }
                                                          ?>>
                                                          </div>
                                                      </div>
                                                    </div>
                                                      <?php if ($company_detail['pdfImage'] !== 'pdf_bg.jpg' && $company_detail['pdfImage'] !== 'background2.jpg' && $company_detail['pdfImage'] !== 'bg_1.jpg') { ?>
                                                          <div class="col-lg-3 col-md-3 col-sm-3" id="custom_image_pdf">
                                                            <div class="card text-left">
                                                                <img src="<?php echo site_url() . 'custom-assets/img/backgrounds/boxed-bg.png' . $company_detail['pdfImage'] ?>" height="300" class="card-img-top" alt="...">
                                                                <div class="card-body text-center">
                                                              <h5>Custom</h5>
                                                              <input type="radio" name="pdfImage" value="<?php echo $company_detail['pdfImage'] ?>" checked>
                                                                </div>
                                                            </div>
                                                          </div>
                                                        <?php } ?>
                                                      </div>
                                                  </div>
                                                  <div class="card-footer text-muted"> 
                                                    plan today, succeed tomorrow!
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="modal-footer ">
                                              <!--<button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Close</button>-->
                                            </div>
                                          </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
           





                        <!-- ===============================================-->
                            <!--   Help Modal Content Details-->
                        <!-- ===============================================-->
                        <div class="modal fade" id="printBackground" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">                    
                            <div class="modal-dialog modal-dialog-scrollable modal-xl">	   
                                <div class="modal-content border-0">
                                    <div class="position-absolute top-0 end-0 mt-3 me-3 z-index-1">
                                      <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>                       
                                        <div class="card mb-3">
                                            <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->                                                                   
                                              <div class="modal-header">
                                                <!--<a href="http://www.squareplans.com/" class="navbar-brand" style="color:rgba(41, 0, 0, 1.0);font-size:30px;font-weight:300; margin-top: 25px;float: left;"><b>Square</b>Plans</a>-->
                                                <h3 class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:center">
                                                    <span><img src="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-60x60.png" alt="Logo" style="margin-right: 3px; margin-top: -10%; width:60px; height: 60px;  float: center;"/></span>
                                                    <span style="color:rgba(0, 0, 0, 1.0);font-size:40px;font-weight:100; margin-right: 0px; margin-top: 40px;float: center;">Print</span>
                                                    <span style="color:rgba(13, 110, 252, 1.0);font-size:40px; margin-top: 40px;float: center;">Center</span>
                                                </h3>
                                              </div><!-- /.modal headear -->
                                            </div>

                                            <div class="modal-header modal-header--sticky"> </div>     
                                                <div class="modal-body p-0">		
                                                    <div class="container">
                                                        <div class="row">                                 
                                                          <div class="scroll">                
                                                            <div class="card-header">
                                                                <div class="row">
                                                                  <div class="col-md-6">
                                                                      <!--<label for="pdfImage" class="form-label">Upload Image</label>-->
                                                                      <input name="pdfImage" class="form-control primary" type="file" id="customPdfImage">
                                                                  </div>
                                                                  <div class="col-md-6">
                                                                      <div class="float-end">
                                                                      <button class="btn btn-falcon-success float-end  me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#samplePlanModal"> <i class="fas fa-print"></i></button>    
                                                                        <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal"><i class="fa fa-arrow-left"></i></button>
                                                                        <!--<a href="<?php echo site_url(); ?>Dashboard/my_plan_pdf" class="btn btn-outline-primary " target="_blank"><i class="fa fa-print">&nbsp;</i></a>-->
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="row p-4" id="pdfImageGallery">

                                                                    <div class="col-lg-3 col-md-3 col-sm-3">
                                                                      <div class="card text-left">
                                                                          <img src="<?php echo site_url() . 'template-assets/img/icons/spot-illustrations/corner-1.png' ?>" height="300" class="card-img-top" alt="...">
                                                                          <div class="card-body text-center">
                                                                            <h5>Abstract</h5>
                                                                            <input type="radio" name="pdfImage" value="pdf_bg.jpg" <?php
                                                                            if ($company_detail['pdfImage'] == 'pdf_bg.jpg') {
                                                                                echo 'checked';
                                                                            }
                                                                        ?>>
                                                                      </div>
                                                                  </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-3 col-sm-3">
                                                                  <div class="card text-left">
                                                                      <img src="<?php echo site_url() . 'template-assets/img/icons/spot-illustrations/corner-2.png' ?>" height="300" class="card-img-top" alt="...">
                                                                      <div class="card-body text-center">
                                                                        <h5>Skyscraper</h5>
                                                                          <input type="radio" name="pdfImage" value="background2.jpg" <?php
                                                                          if ($company_detail['pdfImage'] == 'background2.jpg') {
                                                                              echo 'checked';
                                                                          }
                                                                          ?>>
                                                                      </div>
                                                                    </div>
                                                                  </div>

                                                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                                                    <div class="card text-left">
                                                                        <img src="<?php echo site_url() . 'template-assets/img/icons/spot-illustrations/corner-3.png' ?>" height="300" class="card-img-top" alt="...">
                                                                        <div class="card-body text-center">
                                                                          <h5>Misty</h5>
                                                                          <input type="radio" name="pdfImage" value="bg_1.jpg" <?php
                                                                            if ($company_detail['pdfImage'] == 'bg_1.jpg') {
                                                                                echo 'checked';
                                                                            }
                                                                            ?>>
                                                                        </div>
                                                                    </div>
                                                                  </div>
                                                                    <?php if ($company_detail['pdfImage'] !== 'pdf_bg.jpg' && $company_detail['pdfImage'] !== 'background2.jpg' && $company_detail['pdfImage'] !== 'bg_1.jpg') { ?>
                                                                        <div class="col-lg-3 col-md-3 col-sm-3" id="custom_image_pdf">
                                                                          <div class="card text-left">
                                                                              <img src="<?php echo site_url() . 'template-assets/img/icons/spot-illustrations/corner-4.png' . $company_detail['pdfImage'] ?>" height="300" class="card-img-top" alt="...">
                                                                              <div class="card-body text-center">
                                                                            <h5>Custom</h5>
                                                                            <input type="radio" name="pdfImage" value="<?php echo $company_detail['pdfImage'] ?>" checked>
                                                                              </div>
                                                                          </div>
                                                                        </div>
                                                                      <?php } ?>
                                                                    </div>
                                                                </div>
                                                                
                                                                  </div><!-- /scroll-->
                                                              </div><!-- /row-->			
                                                              
                                                              
                                                              <!--
                                                                


                                                              <div class="row p-5">                                                                         
                                                              </div>
                                                              <div class="card-footer text-muted"> 
                                                                  plan today, succeed tomorrow!
                                                                </div>
                                                              <div class="modal-footer modal-footer--sticky"style="background-color: rgba(255, 255, 255, 1.0);">
                                                                <p class="float-start"> Did you find this helpful?</p>
                                                                  <div class="float-end">
                                                                      <button type="button" class="btn btn-falcon-success btn-sm mt-1">I certainly did</button>
                                                                      <button type="button" class="btn btn-falcon-success btn-sm mt-1">I need more info</button>
                                                                      <button type="button" class="btn btn-falcon-success btn-sm mt-1 " data-bs-dismiss="modal"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Back to my plan</button>
                                                                  
                                                                  </div>
                                                              </div>
                                                              -->



                                                      </div><!-- /bg-holder-->
                                                  </div><!-- /position absolute-->
                                              </div><!-- /modal content-->
                                          </div><!-- /col-->
                                      </div><!-- /row-->




                            <!-- ===============================================-->
                            <!--   Sample Plan Modal Details-->
                            <!-- ===============================================-->                        

                            <div class="modal fade" id="samplePlanModal" tabindex="-1" role="dialog" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                                    <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->                                                                                                                           
                                        <div class="modal-content border-0">
                                                <div class="position-absolute top-0 end-0 mt-3 me-3 z-index-1">														
                                                    <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>         
                                                <div class="card mb-3">
                                                    <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);">
                                                </div> <!--/.bg-holder-->                                                                                                          
                                                    <div class="modal-header">
                                                        <!--<a href="http://www.squareplans.com/" class="navbar-brand" style="color:rgba(41, 0, 0, 1.0);font-size:30px;font-weight:300; margin-top: 25px;float: left;"><b>Square</b>Plans</a>-->
                                                        <h3 class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:center">
                                                            <span><img src="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-60x60.png" alt="Logo" style="margin-right: 3px; margin-top: -10%; width:60px; height: 60px;  float: center;"/></span>
                                                            <span style="color:rgba(0, 0, 0, 1.0);font-size:40px;font-weight:100; margin-right: 0px; margin-top: 40px;float: center;">Help</span>
                                                            <span style="color:rgba(13, 110, 252, 1.0);font-size:40px; margin-top: 40px;float: center;">Center</span>
                                                        </h3>                                                                
                                                </div><!-- /.modal header -->  
                                            </div><!-- /.card --> 
                                        <div class="modal-body pt-0">
                                            <embed src="<?php echo site_url(); ?>custom-assets/pdf/My_Plan.pdf"frameborder="0" width="100%" height="1100px">
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-falcon-primary " type="button" data-bs-dismiss="modal">Close</button>                          
                                        </div>
                                    </div>
                                </div>
                            </div>




                      <!-- Script -->
                      <script>		


                  $('#btninfo_s6').on("click", function () {
                      $('.tab-active-caret li a.active').removeClass('active');
                      $("#crm-s7-tab").addClass("active");
                  });

                  </script>
