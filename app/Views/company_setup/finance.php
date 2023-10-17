<!-- ===============================================-->
<!--   Wizard Tab 1  Content Details-->
<!-- ===============================================-->      
<div class="tab-pane " role="tabpanel" aria-labelledby="bootstrap-wizard-tab4" id="bootstrap-wizard-tab4">
	<div class="card mb-3">
		<div class="card-header">
			<div class="row">
				<div class="col-lg-4">
					<a class="mb-0 d-block d-flex align-items-center bm-1" id="new_finance_collapse" style='cursor: pointer;'>
					<span class="circle"><span class="fas fa-plus fa-3x"></span></span><span class="ms-3"></span></a>					
				</div><!-- /.col-->
				<div class="col-lg-4">
					<h5  class="mb-0 d-block d-flex align-items-left">
						Business Finance
					</h5>
					</div><!-- /.col-->					
				<div class="col-lg-4">
					<a class="btn btn-falcon-outline-info float-end text-primary pt-2" data-html="true" data-bs-placement="auto" data-popover-content="#fin" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
				</div><!-- /.col-->
			</div><!-- /.row-->
		</div><!-- /.header-->
		
		<div class="collapse" id="finance-form-toogle">	

			<div class="p-2">	
				<div class="hidden d-none" id="fin">	
					<div class="popover-heading"><span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
						Help Center
					</div>
						<div class="popover-body">							
							<div class="card mb-3">
								<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div> <!--/.bg-holder-->
									<div class="card-body position-relative">
										<div class="row">
											<div class="col-lg-12">										
												<h5>Business Finance</h5>	
													<p class="mt-1 ps-3 mb-3">
														In many cases starting a new business may require further finance such as a bank loan.Use the built in loan calculator to determine the cost of securing a business loan, and how it will effect your cash flow due to the monthly repayments and interest charged.
													</p> 									
													<hr style="border-top: 3px solid #0064B2; background: transparent;"> 
													<h5>How do I add a Business Loan?</h5>
													<ol class="pt-1">     
														<li>Add the Amount you intend to borrow</li>
														<li>Enter the term in Years (Maximum 3 Years)</li>
														<li>Enter the current Interest Rate</li>													
														<li>AuziPlan will do the calculation for you.</li>
														<li><a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</a></li>										
													</ol><!-- /.ol --> 								
												</div>
											</div><!-- /.co 12-->
										</div><!-- /.row-->
									</div><!-- /.card body-->
								</div><!-- /.bg holder-->
							</div><!-- /.card-->	
						</div><!-- /.popover body-->


				
						<form class="form-validation">
							<div class="card mb-1">											
								<div class="card-body bg-light" id="frmfinance">
									<div class="row g-2">
						
										<div class="col-lg-12 col-md-12 col-sm-12">		
											<div class="col-lg-12 col-md-12 col-sm-12" id="bankloan_placeholder">
												<div class="accordion pt-3" id="accordionExample">
													<div class="accordion-item">
														<h2 class="accordion-header" id="heading1">
														<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">How much will you need to borrow?</button>
														</h2>
														<div class="accordion-collapse collapse show" id="collapse1" aria-labelledby="heading1" data-bs-parent="#accordionExample">
															<div class="accordion-body">
														
									
														<!-- ===============================================-->
														<!--    sliders Content-->
														<!-- ===============================================-->

														<div class="card-header">

															<div class="row">
																<div class="col-lg-4">
																	<h5>Loan Amount<span class="fs--2 ms-1 text-primary"></span></h5>
																		<div class="card-body">
																			<div class="form-group text-left">
																				<h3 class="clearAmountText">
																					<span class="currencydynamic"></span><span id="loanAmountText">0</span>
																				</h3>
																			<input  class="form-range" name="loanAmount" id="loanAmount" type="range" min="0" max="10000000" step="50000" value="<?= (isset($loan_amount)) ? $loan_amount : '50,000.00' ?>" />
																		</div><!-- /.form-->
																	</div><!-- /.card body-->														
																</div><!-- /.col-->
																<div class="col-lg-4">
																	<h5>Term in Years<span class="fs--2 ms-1 text-primary"></span></span></h5>
																		<div class="card-body">
																		<!--<p class="card-text">How long is the term?</p>-->
																		<!--<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
																		<!-- Provision For Franchise/Royalty Fee Percentage Starts -->
																		<div class="form-group text-left">
																			<h3  class="clearAmountText">
																			<span id="loanYearText">0</span>
																				<!-- (isset($loan_length)) ? $loan_length : '0' -->
																			</h3>
																			<input class="form-range" name="loanYear" id="loanYear" type="range" min="0" max="30" step="1" value="<?= (isset($loan_length)) ? $loan_length : '35' ?>" />
																		</div><!-- /.form-->
																	</div><!-- /.card body-->
																</div><!-- /.col-->

																<div class="col-lg-4">
																	<h5>Interest Rate<span class="fs--2 ms-1 text-primary"></span></h5>
																	<div class="card-body">
																		<!--<p class="card-text">What is the interest rate?</p>-->
																		<!--<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
																		<!-- Provision For Franchise/Royalty Fee Percentage Starts -->
																		<div class="form-group text-left">
																			<h3 id="loanIntrestText" class="clearAmountText"><?= (isset($annual_interest)) ? $annual_interest : '0' ?>%</h3>
																			<input  class="form-range" name="loanIntrest" id="loanIntrest" type="range" min="0" max="50" step="0.5" value="<?= (isset($annual_interest)) ? $annual_interest : '3' ?>" class="RangeSelectorDOE" />
																		</div><!-- /.form-->
																	</div><!-- /.card body-->
																</div><!-- /.col-->
															</div><!-- /row-->			
														</div><!-- /card header-->

														</div>											
													</div>
												</div>


												<div class="accordion-item">
													<h2 class="accordion-header" id="heading2">
														<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">Loan Results</button>
													</h2>
													<div class="accordion-collapse collapse" id="collapse2" aria-labelledby="heading2" data-bs-parent="#accordionExample">
														<div class="accordion-body">
														
															<table cellpadding="5" class="table table-striped">
																<tr>
																	<th colspan="4">Loan Summary</th>
																</tr>
																<tr>
																	<td>Loan amount:</td>
																	<td>
																	<b>
																	
																	<span class="currencydynamic"></span><span id="loan_amount_acc3"></span>
																	<?php //echo number_format($loan_amount, 0, '.', ','); ?>
																	</b>
																	</td>
																</tr>
																<tr>
																	<td>Loan length:</td>
																	<td>
																	<b>
																	<span id="loan_length_acc3"></span> years</b>
																	</td>
																</tr>
																<tr>
																	<td>Annual interest:</td>
																	<td>
																	<b>
																	<span id="annual_interest_acc3"></span> %</b>
																	</td>
																</tr>
																<tr>
																	<td>Total paid:</td>
																	<td>
																	<b>
																	
																	<span class="currencydynamic"></span><span id="total_paid_acc3"></span>
																	</b>
																	</td>
																</tr>
																<tr>
																	<td>Total interest:</td>
																	<td>
																	<b>
																	<span class="currencydynamic"></span><span id="total_interest_acc3"></span>
																	</b>
																	</td>
																</tr>
																<tr>
																	<td>Total periods:</td>
																	<td>
																	<b>
																	<span id="total_periods_acc3"></span></b>
																	</td>
																</tr>
																</table> <!-- /.table -->

																<!-- BEGIN amortization_table -->

																<table id="fullsummary" class="table bordered" cellpadding="5">
																<thead class="table-light">
																	<tr> 
																	<th>Period</th>
																	<th>Beginning Balance</th>
																	<th>Interest Paid</th>
																	<th>Principal Paid</th>
																	<th>Remaining Balance</th>
																	</tr>
																</thead>
																<tbody id="tbodyid">
																</tbody>

																<tfoot class="table-light" style="display:none">
																	<tr>
																	<th>&nbsp;</th>
																	<th>Totals:</th>
																	<th>
																	<span class="currencydynamic"></span>
																	<span id="totalfooter"></span>
																	</th>
																	<th>Total Principal</th>
																	<th>
																	<span class="currencydynamic"></span>
																	<span id="totalprincipalfooter"></span>
																	</th> <!-- /.table- header -->
																	</tr> <!-- /.table-row -->
																</tfoot> <!-- /.footer -->

															</table> <!-- /.table -->
															
															</div>
														</div>
													</div>
												</div>
											</div>
							
											<div class="row">
												<div class="border-dashed-bottom my-3"></div>
													<div class="col-12 col-sm-12 offset-0 pt-3">
														<button class="btn btn-falcon-danger float-start" type="button" id="btncancelfinance" ><i class="far fa-window-close"></i> Cancel</button>
															<input type='hidden' id='financeid' value=''>
														<button type="button" class="btn btn-outline-success saveFinance float-end"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</button>
													</div><!-- /col-->		
												</div><!-- /row-->		
											
											</div><!-- /row-->
										</div><!-- /.row-->
									</div><!-- /card body-->									
								</div> <!-- card mb-1 -->
							</form><!-- form -->
							<div class="border-dashed-bottom my-4"></div>
						</div>


						<!-- ===============================================-->
						<!--    sliders results Content-->
						<!-- ===============================================-->

						<div class="col-lg-12 col-md-12 col-sm-12 pt-3">
						

							<div class="card-header"style="display:none">
								<div class="row">
									<div class="col-lg-3">
										<h5>Principal</h5>
										<span class="currencydynamic"></span><span id="principalAmount"></span>
									</div><!-- /.col-->
									<div class="col-lg-3">
										<h5>Interest</h5>
										<span class="currencydynamic"></span><span id="interestAmount"></span>
									</div><!-- /.col-->
									<div class="col-lg-3">
										<h5>Total Payable</h5>
										<span class="currencydynamic"></span><span id="totalPayable"></span>
									</div>
									<div class="col-lg-3">
										<h5>Re-Payments</h5>
										<span class="currencydynamic"></span><span id="monthlyLoanPayment"></span>
									</div><!-- /.col-->
								</div><!-- /.row-->
							</div><!-- /.card header-->


						</div><!-- /col-->	
					</div>
		


				<div class="row text-center">

					<div class="col-lg-3 col-md-3 col-sm-6">
						<div class="card border h-100 border-default">
							<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->
							<div class="card-header">
								<h6 class="my-0 font-weight-normal">Loan Amount</h6>
							</div>
							<div class="card-body">
								<h5>
									<span class="currencydynamic"></span><span id="loanamount_acc2"></span>
									<?php //echo number_format($everydata[0]['loan_amount'], 0, '.', ','); ?>
								</h5>
							</div>
						</div>
					</div>
						
					<div class="col-lg-3 col-md-3 col-sm-6">
						<div class="card border h-100 border-default">
							<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->
							<div class="card-header">
								<h6 class="my-0 font-weight-normal">Interest</h6>
							</div>
							<div class="card-body">
								<h5>			
								<span class="currencydynamic"></span><span id="Interest_acc2"></span>
								<?php //echo number_format($everydata[0]['total_interest'], 0, '.', ','); ?></h5>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-md-3 col-sm-6">
						<div class="card border h-100 border-default">
							<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->
							<div class="card-header">
								<h6 class="my-0 font-weight-normal">Loan Term</h6>
							</div>
							<div class="card-body">
								<h5>
									<span id="loanterm_acc2"></span>
									<?php //echo number_format($everydata[0]['loan_length'], 0, '.', ','); ?> Years
								</h5>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6">
						<div class="card border h-100 border-default">
							<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->
							<div class="card-header">
								<h6 class="my-0 font-weight-normal">Interest Rate</h6>
							</div>
							<div class="card-body">
								<h5>
									<span id="interestrate_acc2"></span>
									<?php //echo number_format($everydata[0]['annual_interest'], 2, '.', ','); ?> %</h5>
							</div>
						</div>
					</div>
					</div><!-- /.card-->






			</div><!-- tab-4 -->


			