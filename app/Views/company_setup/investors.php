<!-- ===============================================-->
<!--   Wizard Tab 1  Content Details-->
<!-- ===============================================-->      

<div class="tab-pane " role="tabpanel" aria-labelledby="bootstrap-wizard-tab3" id="bootstrap-wizard-tab3">
	<div class="card mb-3">


			<div class="card-header">
							<div class="row">

						<div class="col-lg-4">
								<a class="mb-0 d-block d-flex align-items-center bm-1" id="new_investor_collapse" style='cursor: pointer;'>
								<span class="circle"><span class="fas fa-plus fa-3x"></span></span><span class="ms-3"></span></a>		
									<a class="mb-0 d-block d-flex align-items-center pt-2" data-bs-toggle="collapse" data-bs-target="#collapseInvestors" aria-expanded="false" aria-controls="collapseInvestors"style='cursor: pointer;'>
								<span class="circle"><span class="fas fa-arrow-down fa-3x text-success"></span></span><span class="ms-3"></span></a>		
							</div><!-- /.col-->

							<div class="col-lg-4">
							<h5  class="mb-0 d-block d-flex align-items-left">
								Investors Capital Investment
							</h5>
						</div><!-- /.col-->
						<div class="col-lg-4">
							<a class="btn btn-falcon-outline-info float-end text-primary pt-2" data-html="true" data-bs-placement="auto" data-popover-content="#inv" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
					</div><!-- /.col-->	
				</div><!-- /.row-->
			</div><!-- /.header-->


		<div class="collapse" id="investor-form">				
			<div class="p-2">	
				<div class="hidden d-none" id="inv">					
				<div class="popover-heading"><span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
					Help Center
				</div>
					<div class="popover-body">									
						<div class="card mb-3">
							<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div> <!--/.bg-holder-->
								<div class="card-body position-relative">
									<div class="row">
										<div class="col-lg-12">
											<h5>Who are Investor?</h5>   

												<p class="mt-1 ps-3 mb-3">
													Typically, Investors could be people perhaps family members, or a company who will put money into your ideas for a high return on their investment, investors will want to be rewarded for the risk they are taking, because if the business fails they expect to lose the their cash investment.
												</p>  
												<hr style="border-top: 3px solid #0064B2; background: transparent;"> 

												<h5>How do I add a Company Investor?</h5>
												<ol class="pt-1">     			
													<li>Click Add new Company Investor</li>    
													<li>Upload and image profile (Optional).</li>
													<li>Enter a brief description about this Investor.</li>
													<li>Add the name of the Investor.</li>
													<li>Enter the type of Investor.</li>  
													<li>Enter the amount invested.</li>
													<li>Enter the percentage share.</li>
													<li>Enter the payment frequency.</li>
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


			
				<input type="hidden" value="" name="id">
					<div  id='frmcompanyinvestor' class="row p-3">											
						<div class="col-sm-12 col-md-6">
							<div class="card p-3">									
								<form class="form">							
									<div class="row pt-7" style='text-align: center;'>
										<div class="col-lg-12">
											<input type='hidden' id="uploadinvestorpic_val">
											<img style='width: 100px;' src='<?php echo site_url()."template-assets/img/team/avatar.png" ?>' id="uploadinvestorpic_pre">
										</div>		
										<!-- <input type='file' id='uploadfile'> -->
										<a class="fileContainer">
											<img class="me-2" src="<?php echo site_url(); ?>template-assets/img/icons/cloud-upload.svg" width="25" alt="">Upload Image
											<input type="file" id='uploadinvestorpic' />
										</a>									
									</div>
									<div class="form-floating pb-2 pt-2">
										<textarea class="form-control" name="eduAndExp" id="eduAndExp" placeholder="Leave a comment here" id="floatingTextarea2" style="height: auto"></textarea>
										<label for="floatingTextarea2" class="text-muted">About this investor</label>
									</div><!-- /.float form -->		
								</form><!-- /.form -->
							</div><!-- /.card -->
						</div><!-- /.col -->

						<div class="col-sm-12 col-md-6">
							<div class="card">
								<div class="card-header">
									<h4 class="my-0 font-weight-normal">Investor Contributions</h4>
								</div><!-- /.card header -->
													
								<div class="card-body p-2">
									<div class="p-2 handlecurrencyformat">

										<div class="form-floating mb-1">
											<input type="text" name="investor_name" class="form-control validate" id="investor_name" placeholder="What is the name of this Investor?">
											<label for="investor_name" class="text-muted">What is the name of this Investor?</label>
										</div><!-- /.float form -->

										<div class="form-floating mb-1">
											<select name="investor_type" class="form-select" id="investor_type" aria-label="typeInvestor">
												<option value="Angel Investor">Angel Investor</option>
												<option value="Company">Company</option>
												<option value="Family">Family </option>
												<option value="Best Friend">Best Friend</option>
											</select>
											<label for="investor_type" class="text-muted">Type of Investor</label>
										</div><!-- /.float form -->

										<div class="form-floating mb-1">
											<input type="text" name="investor_amount_paid" class="form-control currencySign validate" id="investor_amount" placeholder="How much funds will be contributed?">
											<label for="investor_amount_paid">Investment amount</label>
										</div><!-- /.float form -->

										<div class="form-floating mb-1">
											<input type="text" name="netProfit" class="form-control percentSign validate" id="investor_netProfit" placeholder="Percentage of Gross Sales (%):" oninput="this.value = this.value.replace(/[^0-9]/,'')">
											<label for="netProfit" class="text-muted">Agreed Percentage (%):</label>
										</div><!-- /.float form -->

										<div class="form-floating mb-1">
											<select name="payment_frequency" class="form-select" id="investor_payment_frequency" aria-label="typeInvestor">
												<option value="Monthly">Monthly</option>
												<option value="Quarterly">Quarterly</option>
												<option value="Yearly">Yearly</option>
												<option value="End Of Contract">End Of Contract</option>
											</select>
											<label for="payment_frequency" class="text-muted">Payment Frequency</label>
										</div><!-- /.float form -->
														
										</div>
											<input type="hidden" id="reload_table_invest" value="0">
											<input type="hidden" name="investor_id" id="investor_id" value="0">	
										</div>					
									</div><!-- /.col -->
								</div> <!-- end validate form FROM js file -->	
										
								
			
								<div class="container">
									<div class="border-dashed-bottom my-3"></div>
										<div class="border p-card rounded p-3">
											<button class="btn btn-outline-danger" type="button" id="btncancelinvestor" ><i class="far fa-window-close"></i> Cancel</button>
											
										<!--	<button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> <i class="far fa-arrow-alt-circle-down" aria-hidden="true"></i> All members</button>-->
										<button class="btn btn-outline-success float-end" type="button" id='savecompanyinvestor'><i class="far fa-save"></i> Save and Continue</button>
										</div><!-- /.col -->
									</div><!-- /.border -->
								</div><!-- /.row -->																
							</div> <!-- card mb-1 -->
						
							<div class="collapse" id="collapseInvestors">
								<div class="border p-card rounded">
								<?php 
									echo view('investor_view_dt');
									//$this->load->view('investor_view');
									//include 'investor_view.php'; ?>
												<a class="mb-0 d-block d-flex align-items-center pt-2" data-bs-toggle="collapse" data-bs-target="#collapseInvestors" aria-expanded="false" aria-controls="collapseInvestors"style='cursor: pointer'><span class="circle"><span class="fas fa-arrow-up fa-3x text-success"></span></span><span class="ms-3"><span>
													
												</a>								
									</div>
								</div>		
							</div> <!-- row ends -->
						</div>
				
				
			


















