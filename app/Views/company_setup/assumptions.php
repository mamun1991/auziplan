<style type="text/css"></style>

</style>


			
			<div class="tab-pane " role="tabpanel" aria-labelledby="bootstrap-wizard-tab5" id="bootstrap-wizard-tab5">			

				<div class="card mb-3">
					<div class="card-header">
						<div class="row">
							<div class="col-lg-4">
							<a class="mb-0 d-block d-flex align-items-center" id="new-assumption-form" style='cursor: pointer;'> 		
							<span class="circle"><span class="fas fa-arrow-down fa-3x"></span></span><span class="ms-3"></span></a>		
							</div><!-- /.col-->
							<div class="col-lg-4">
							<h5  class="mb-0 d-block d-flex align-items-left">
								Business Assumptions
							</h5>
						</div><!-- /.col-->
							<div class="col-lg-4">
								<a class="btn btn-falcon-outline-info float-end text-primary pt-2"  data-html="true" data-bs-placement="auto" data-popover-content="#ba" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
							</div><!-- /.col-->
						</div><!-- /.row-->
					</div><!-- /.header-->
					<div class="collapse" id="assumption-form-toogle">

					<div class="p-2">	
						<div class="hidden d-none" id="ba">
							<div class="popover-heading"><span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
								Help Center
							</div>
							<div class="popover-body">	
									
								<div class="card mb-3">
									<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div> <!--/.bg-holder-->
										<div class="card-body position-relative">
											<div class="row">
												<div class="col-lg-12">
													<h5>Business Trading Assumptions</h5>
												
														<p class="mt-1 ps-3 mb-3">	
															Business Assumptions is a term used to describe, amongst other things, the general trading terms of the business.The values set in this screen will be used in the calculations of your financial documents which are an integral requirement of your business plan.</p>
														<hr style="border-top: 3px solid #0064B2; background: transparent;"> 
														<h5>How do I add a Business Assumptions?</h5>
														<ol class="mt-1">   		
															<li>Click Add Business Assumption</li>    						
															<li>AuziPlan will do the calculation for you.</li>
														<li>
															<a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</a>
															<!--<a class="btn btn-link ps-0 btn-sm" href="../../documentation/getting-started.html" target="_blank">Get Started<span class="fas fa-chevron-right ms-1 fs--2"></span></a>-->	
														</li>			
													</ol><!-- /.ol -->		
												</div>
											</div><!-- /.co 12-->
										</div><!-- /.row-->
									</div><!-- /.card body-->
								</div><!-- /.bg holder-->
							</div><!-- /.card-->	
						</div><!-- /.popover body-->
	
					
						
							<form class="row p-3">											
								<!-- ===============================================-->
								<!--   Left Content Details-->
								<!-- ===============================================-->

							<div class="row g-0 pt-0">		
								<div class="col-lg-12 pe-lg-1">	
									<!--<div class="card-header">
										<div class="p-1">
											<p class="text-primary">
												Your Business Assumptions play a vital role in how Auziplan will generate your financial reports, and how you plan to trade. 
												In many cases it can make the difference between making profits, losing hard earned cash, or sadly placing yourself in debt.
												We suggest you speak with your accountant or financial advisor about these fundamental business assumptions. 
											</p>
										</div>
									</div>-->
								<div class="card-body p-5" id="frmassumptions">
									<div class="row g-5 mb-0 pt-3 handlecurrencyformat">	
										<div class="row g-1 mt-0">
										
												<div class="row g-1 mt-0">


													<div class="col-lg-6">
														<div class="card p-3">

															<div class="card-header">
																<h5 class="mb-0">Opening Balances</h5>		
															</div><!-- card header-->
															<div class="form-floating  mb-1">
																<input type="text" name="opening_credit_balance" class="form-control validate currencySign loadcurrencySign loadInputCurrency" id="opening_credit_balance" placeholder="Opening Creditors Balance" value="<?= (isset($opening_credit_balance)) ? $opening_credit_balance : '0' ?>" required>
																<label for="opening_credit_balance">Opening Creditors </label>
															</div><!-- floating-->
															<div class="form-floating  mb-1">
																<input type="text" name="opening_debit_balance" class="form-control validate currencySign loadcurrencySign loadInputCurrency" id="opening_debit_balance" placeholder="Opening Debtors Balance" value="<?= (isset($opening_credit_balance)) ? $opening_credit_balance : '0' ?>" required>
																<label for="opening_debit_balance">Opening Debtors </label>
															</div><!-- floating-->
															<div class="form-floating  mb-1">
																<input type="text" name="opening_bank_balance" class="form-control validate currencySign loadcurrencySign loadInputCurrency" id="opening_bank_balance" placeholder="Opening Bank Balance" value="<?= (isset($opening_credit_balance)) ? $opening_credit_balance : '0' ?>" required>
																<label for="opening_bank_balance">Opening Bank</label>
															</div><!-- floating-->
															<div class="form-floating  mb-1">
																<input type="text" name="opening_stock_balance" class="form-control validate currencySign loadcurrencySign loadInputCurrency" id="opening_stock_balance" placeholder="Opening Stock Balance" value="<?= (isset($opening_stock_balance)) ? $opening_stock_balance : '0' ?>" required>
																<label for="opening_stock_balance">Opening Stock at Cost</label>
															</div><!-- floating-->

														</div><!-- card-->
													</div><!-- col-->



												<div class="col-lg-6">

												<div class="card p-3">
													<div class="card-header">
														<h5 class="mb-0">Trading Terms</h5>		
													</div><!-- card header-->
														<!-- Aged Receivable Starts -->
														<div class="form-floating  mb-1">
															<select name="rsvbl_in_days" class="form-select validate" id="rsvbl_in_days" aria-label="Receivable In Days">
															<option value="" selected></option>
															<option value="0" <?php (isset($rsvbl_in_days) && $rsvbl_in_days == "0") ? print "selected" : print "" ?>>0</option>
															<option value="30" <?php (isset($rsvbl_in_days) && $rsvbl_in_days == "30") ? print "selected" : print "" ?>>30</option>
															<option value="60" <?php (isset($rsvbl_in_days) && $rsvbl_in_days == "60") ? print "selected" : print "" ?>>60</option>
															<option value="90" <?php (isset($rsvbl_in_days) && $rsvbl_in_days == "90") ? print "selected" : print "" ?>>90</option>
															</select>
															<label for="rsvbl_in_days">Receivable In Days</label>
														</div><!-- floating form-->
														<!-- Provision VAT/GSTStarts -->
														<div class="form-floating  mb-1">
														<select name="pybl_in_days" class="form-select validate" id="pybl_in_days" aria-label="Payables In Days">
															<option value="" selected></option>
															<option value="0" <?php (isset($pybl_in_days) && $pybl_in_days == "0") ? print "selected" : print "" ?>>0</option>
															<option value="30" <?php (isset($pybl_in_days) && $pybl_in_days == "30") ? print "selected" : print "" ?>>30</option>
															<option value="60" <?php (isset($pybl_in_days) && $pybl_in_days == "60") ? print "selected" : print "" ?>>60</option>
															<option value="90" <?php (isset($pybl_in_days) && $pybl_in_days == "90") ? print "selected" : print "" ?>>90</option>
															</select>
															<label for="pybl_in_days">Payables In Days</label>
														</div><!-- floating form-->					
														<!-- Company Tax Starts --> 
														<div class="form-floating  mb-1">
															<select name="cmpnytx_paid_in_days" class="form-select validate" id="cmpnytx_paid_in_days" aria-label="Company Tax in Days">
															<option value="" selected></option>
															<option value="0" <?php (isset($cmpnytx_paid_in_days) && $cmpnytx_paid_in_days == "0") ? print "selected" : print "" ?>>0</option>
															<option value="30" <?php (isset($cmpnytx_paid_in_days) && $cmpnytx_paid_in_days == "30") ? print "selected" : print "" ?>>30</option>
															<option value="60" <?php (isset($cmpnytx_paid_in_days) && $cmpnytx_paid_in_days == "60") ? print "selected" : print "" ?>>60</option>
															<option value="90" <?php (isset($cmpnytx_paid_in_days) && $cmpnytx_paid_in_days == "90") ? print "selected" : print "" ?>>90</option>
															</select>
															<label for="cmpnytx_paid_in_days">Company Tax in Days</label>
														</div><!-- floating form-->
														<!-- Provision VAT/GSTStarts -->
														<div class="form-floating  mb-1">
															<select name="vat_paid_in_days" class="form-select validate" id="vat_paid_in_days" aria-label="GST/VAT/PAYG Tax">
															<option value="" selected></option>
															<option value="30">Monthly</option>
															<option value="90">Quarterly</option>
															</select>
															<label for="vat_paid_in_days">GST/VAT/PAYG Tax</label>
														</div><!-- floating form-->
								
												</div><!-- card-->

											</div><!-- col-->
										</div><!-- ROW-->
														
								</div><!-- row -->		



								<div class="col-lg-3 col-md-12 col-sm-12">
									<div class="card p-1">
										<div class="card-header">
											<h5 class="mb-0">Trading Assumptions</h5>								
										</div>
									
										<!-- Provision For Bab Debt Starts -->
										<div class="form-group text-left p-2">
											<h6>Bad Debt<span class="fs--2 ms-1 text-primary"></span></h6>
											<h5 class="card-text text-left text-primary"><span class="ProvisionBadDept" id="pbd_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
											<input class="form-range validate"  name="porivision_baddebt" id="porivision_baddebt" type="range" min="0" max="100" value="3"class="RangeSelectorPBD"/>
										</div>
																				
										<!-- Provision For Depreciation Starts -->					
										<div class="form-group text-left p-2">
											<h6>Depreciation<span class="fs--2 ms-1 text-primary"></span></h6>
											<h5 class="card-text text-left text-primary"><span class="depreciation_on_equipment" id="doe_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
											<input class="form-range validate" name="depreciation_on_equipment" id="depreciation_on_equipment" type="range" min="0" max="100" value="30" class="RangeSelectorDOE"  />
										</div>
																						
										<!-- Provision For Franchise/Royalty Fee Percentage Starts -->
										<div class="form-group text-left p-2">
											<h6>Franchise/Royalty Fee<span class="fs--2 ms-1 text-primary"></span></h6>
											<h5 class="card-text text-left text-primary"><span class="FranchiseRoyaltyFee" id="frf_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
											<input class="form-range" name="franchise_royalty" id="franchise_royalty" type="range" min="0" max="100" value="25" class="RangeSelectorFRF"  />
										</div>

										<!-- Provision For Company Tax Starts -->
										<div class="form-group text-left p-2" style="width:100%;">
											<h6>Company Tax<span class="fs--2 ms-1 text-primary"></span></h6>
											<h5 class="card-text text-left text-primary "><span class="ProvisionCompanyTax" id="pct_percent"></span>%<span style="float:right; font-size:12px; width:100%;"></span></h5>
											<input class="form-range validate"  name="company_tax" id="company_tax" type="range" min="0" max="100" value="39" class="RangeSelectorPCT"/>
										</div>
								
										<!-- Provision For VAT/GST  Starts -->
										<div class="form-group text-left p-2">
											<h6>GST/VAT<span class="fs--2 ms-1 text-primary"></span></h6>											
											<h5 class="card-text text-left text-primary "><span class="CompanyVatCollected" id="cvc_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
											<input class="form-range validate"  name="company_vat_collected" id="company_vat_collected" type="range" min="0" max="100" value="10" class="RangeSelectorCVC"/>
										</div>
															
									
							
									</div><!-- col-->		
								</div><!-- col-->

								<div class="col-lg-3 col-md-12 col-sm-12">
									<div class="card p-1">


										<div class="card-header">
											<h5 class="mb-0">Payroll Assumptions</h5>				
										</div>
									
										<!-- Provision For Superannuation Starts -->
										<div class="form-group text-left p-2" style="width:100%;">
											<h6>Superannuation<span class="fs--2 ms-1 text-primary"></span></h6>											
											<h5 class="card-text text-left text-primary "><span class="superannuation" id="sup_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
											<input class="form-range validate"  name="company_vat_collected" id="superannuation" type="range" min="0" max="100" value="10" class="RangeSelectorSUP"/>
										</div>
													
										<!-- Provision For WorkCover Starts -->
										<div class="form-group text-left p-2" style="width:100%;">
											<h6>WorkCover<span class="fs--2 ms-1 text-primary"></span></h6>
											<h5 class="card-text text-left text-primary"><span class="work_cover" id="wc_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
											<input class="form-range validate"  name="work_cover" id="work_cover" type="range" min="0" max="100" value="4" class="RangeSelectorWC"  />
										</div>
													
										<!-- Provision For Commission Starts -->
										<div class="form-group text-left p-2" style="width:100%;">
											<h6>Commission<span class="fs--2 ms-1 text-primary"></span></h6>
											<h5 class="card-text text-left text-primary"><span class="commission" id="com_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
											<input class="form-range"  name="commission" id="commission" type="range" min="0" max="100" value="10" class="RangeSelectorCOM"  />
										</div>

										<!-- Provision For Other Starts -->
										<div class="form-group text-left p-2" style="width:100%;">
											<h6>Other<span class="fs--2 ms-1 text-primary"></span></h6>
											<h5 class="card-text text-left text-primary"><span class="other" id="ot_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
											<input class="form-range"  name="other" id="other" type="range" min="0" max="100" value="3" class="RangeSelectorOT"  />
										</div>
													
										<!-- Provision For Payroll Increase Starts -->
										<div class="form-group text-left p-2" style="width:100%;">
											<h6>Payroll Increase<span class="fs--2 ms-1 text-primary"></span></h6>
											<h5 class="card-text text-left text-primary"><span class="pay_increase" id="pay_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
											<input class="form-range"  name="pay_increase" id="pay_increase" type="range" min="0" max="100" value="3" class="RangeSelectorPAY"  />
										</div>

									</div><!-- col-->
					
								</div><!-- col-->

								<div class="col-lg-3 col-md-12 col-sm-12">
									<div class="card p-1">
										<div class="card-header">
												<h5 class="mb-0">Operating Assumptions </h5>	
											</div>
										
												<!-- Provision For Administration -->
												<div class="form-group text-left p-2" style="width:100%;">
													<h6>Administration<span class="fs--2 ms-1 text-primary"></span></h6>
													<h5 class="card-text text-left text-primary"><span class="Administration_Increase" id="adm_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
													<input class="form-range validate"  name="administration_increase" id="administration_increase" type="range" min="0" max="100" value="" class="RangeSelectorADM"/>
												</div>
														
												<!-- Provision For Marketing -->
												<div class="form-group text-left p-2" style="width:100%;">
													<h6>Marketing<span class="fs--2 ms-1 text-primary"></span></h6>
													<h5 class="card-text text-left text-primary"><span class="Marketing_Increase" id="mkt_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
													<input class="form-range validate"  name="marketing_increase" id="marketing_increase" type="range" min="0" max="100" value="" class="RangeSelectorMKT"/>
												</div>
																								
												<!-- Provision For Public Relations -->
												<div class="form-group text-left p-2" style="width:100%;">
													<h6>Public Relations<span class="fs--2 ms-1 text-primary"></span></h6>
													<h5 class="card-text text-left text-primary"><span class="Public_Relations_Increase" id="pr_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
													<input class="form-range validate"  name="public_relations_increase" id="public_relations_increase" type="range" min="0" max="100" value="" class="RangeSelectorPR"/>
												</div>
																							
												<!-- Provision For Other -->
												<div class="form-group text-left p-2" style="width:100%;">
													<h6>Other<span class="fs--2 ms-1 text-primary"></span></h6>
													<h5 class="card-text text-left text-primary"><span class="Other_Increase" id="oth_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
													<input class="form-range validate"  name="other_increase" id="other_increase" type="range" min="0" max="100" value="" class="RangeSelectorOTH"/>
												</div>
											</div><!-- col-->
										</div><!-- col-->	
										<div class="col-lg-3 col-md-12 col-sm-12">
											<div class="card p-1">
					
												<div class="card-header">
													<h5 class="mb-0">Sales Assumptions</h5>				
												</div>
											
												<!-- Provision For Sales Revenue Increase Starts -->
												<div class="form-group text-left p-2" style="width:100%;">
													<h6>Product Revenue<span class="fs--2 ms-1 text-primary"></span></h6>											
													<h5 class="card-text text-left text-primary "><span class="superannuation" id="sup_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
													<input class="form-range"  name="company_vat_collected" id="superannuation" type="range" min="0" max="100" value="10" class="RangeSelectorSUP"/>
												</div>
															
												<!-- Provision For Services Revenue Increase Starts -->
												<div class="form-group text-left p-2" style="width:100%;">
													<h6>Service Revenue<span class="fs--2 ms-1 text-primary"></span></h6>
													<h5 class="card-text text-left text-primary"><span class="work_cover" id="wc_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
													<input class="form-range"  name="work_cover" id="work_cover" type="range" min="0" max="100" value="4" class="RangeSelectorWC"  />
												</div>
											
												<!-- Provision For Service Cost Starts -->
												<div class="form-group text-left p-2" style="width:100%;">
													<h6>Service<span class="fs--2 ms-1 text-primary"></span></h6>
													<h5 class="card-text text-left text-primary"><span class="servicecostService" id="scs_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
													<input class="form-range validate"  name="servicecost_service" id="servicecost_service" type="range" min="0" max="100" value="30" class="RangeSelectorSCS"  />
												</div>

												<!-- Provision For Online Revenue Increase Starts -->
												<div class="form-group text-left p-2" style="width:100%;">
													<h6>Online Revenue<span class="fs--2 ms-1 text-primary"></span></h6>
													<h5 class="card-text text-left text-primary"><span class="work_cover" id="wc_percent"></span>%<span style="float:right; font-size:12px;"></span></h5>
													<input class="form-range "  name="work_cover" id="work_cover" type="range" min="0" max="100" value="4" class="RangeSelectorWC"  />
												</div>
											</div><!-- col-->
										</div><!-- col-->	
									</div><!-- row-->

									<div class="row">
										<div class="border-dashed-bottom my-3"></div>
											<div class="col-12 col-sm-12 offset-0 pt-3">
												<button class="btn btn-falcon-danger float-start" type="button" id="btncancelassumptions" ><i class="far fa-window-close"></i> Cancel</button>
													<input type='hidden' id='assumptionid' value='0'>
												<button type="button" class="btn btn-outline-success saveAssumptions float-end"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</button>
											</div><!-- /col-->		
										</div><!-- /row-->				
									</div>							
								</div><!-- card -->
							</div>	
						</div>		
					</form>
				
				</div>
			</div>
	

		<!-- ===============================================-->
		<!--    Tab 6 Company Setup Content-->
		<!-- ===============================================-->

		<div class="tab-pane text-center " role="tabpanel" aria-labelledby="bootstrap-wizard-tab6" id="bootstrap-wizard-tab6">
			<div class="wizard-lottie-wrapper">
				<div class="lottie wizard-lottie mx-auto my-3"  style="height: 400px;" data-options='{"path":"<?php echo site_url(); ?>template-assets/img/animated-icons/celebration.json"}'></div>
			</div><!-- /wizard wrapper-->
			<h4 class="mb-1">Great your company is all setup.</h4>
				<p>Now let's head over to Stage 2 to work on your Business Narrative.</p>            
				<a class="btn btn-primary px-5 my-3" href="<?php echo site_url(); ?>user/companysetup"><i class="fas fa-redo"></i> Start Over</a>
				<a class="btn btn-falcon-success  px-5 my-3" href="<?php echo site_url(); ?>planning/planning-setup"><i class="fas fa-arrow-right"></i> Stage 2 </a>
			</div>
		</div><!-- /tab pane-->
		<div class="card-footer">
			<div class="">
			<div class="border-dashed-bottom my-3"></div>
				<ul class="pager wizard list-inline mb-0">
					<li class="previous">
						<button class="btn btn-link ps-0" type="button"><span class="fas fa-chevron-left me-2" data-fa-transform="shrink-3"></span>Prev</button>
					</li>
					<li class="next">
						<button class="btn btn-primary px-5 px-sm-6" type="submit">Next<span class="fas fa-chevron-right ms-2" data-fa-transform="shrink-3"> </span></button>
					</li>
				</ul>
			</div>
		</div>
	</div>