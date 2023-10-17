
	<!-- ===============================================-->
	<!--   Wizard Tab 1  Content Details-->
	<!-- ===============================================-->
	
	<div class="tab-pane " role="tabpanel" aria-labelledby="bootstrap-wizard-tab2" id="bootstrap-wizard-tab2">
		<div class="card mb-3">
			<div class="card-header">
					<div class="row">
						<div class="col-lg-4">
								<a class="mb-0 d-block d-flex align-items-center bm-1" id="new_owner_collapse" style='cursor: pointer;'>
								<span class="circle"><span class="fas fa-plus fa-3x"></span></span><span class="ms-3"></span></a>		
									<a class="mb-0 d-block d-flex align-items-center pt-2" data-bs-toggle="collapse" data-bs-target="#collapseOwners" aria-expanded="false" aria-controls="collapseOwners"style='cursor: pointer;'>
								<span class="circle"><span class="fas fa-arrow-down fa-3x text-success"></span></span><span class="ms-3"></span></a>		
							</div><!-- /.col-->
								<div class="col-lg-4">
									<h5  class="mb-0 d-block d-flex align-items-left">
										Owners Capital Investment
									</h5>
							</div><!-- /.col-->
						<div class="col-lg-4">
							<a class="btn btn-falcon-outline-info float-end text-primary pt-2" data-html="true" data-bs-placement="auto" data-popover-content="#own" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
					</div><!-- /.col-->	
				</div><!-- /.row-->
			</div><!-- /.header-->

			<div class="collapse" id="experience-form1">
				<div class="p-2">
					<div class="hidden d-none" id="own">
						<div class="popover-heading"><span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png' /></span>
							Help Center
						</div>
						<div class="popover-body">
							<div class="card mb-3">
								<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div>
								<!--/.bg-holder-->
								<div class="card-body position-relative">
									<div class="row">
										<div class="col-lg-12">
											<h5>Who are Company Owner?</h5>
											<p class="mt-1 ps-3 mb-3">
												A Owner of a company is a person who is usually responsible for managing the companies business activities. In many cases they appoint themselves as Directors, #collapseOwnersand sit on the board of directors.
											</p>
											<p class="mt-1 ps-3 mb-3">
												In the vast majority of cases when considering how to fund a business, the owners and management team can only contribute a small percentage of the funds required to start the business
												and outside help is usually required. This could be in the form of bank finance or investors.
											</p>
											<p class="mt-1 ps-3 mb-3">
												There are different types and sources of finance available, but generally they fall into one of two categories, <b>Equity Finance</b> or <b>Debt Finance</b>.
											</p>
											<p class="mt-1 ps-3 mb-3">
												<b>Equity Finance</b> includes capital injected by the owners of the company or outside investors, such as angel investors, venture capital investors, or the stock markets.Any retained profits of the business are also classified as equity.
											</p>

											<p class="mt-1 ps-3 mb-3">
												<b>Debt Finance</b> on the other hand includes loans from family members and friends, bank loans and overdrafts, government loans, mortgages, and leasing.Each comes with their owen costs and obligations.
											</p>
											<hr style="border-top: 3px solid #0064B2; background: transparent;">
											<h5>How do I add a Company Owner?</h5>
											<ol class="pt-1">
												<li>Click Add new Company Owner</li>
												<li>Upload and image profile (Optional).</li>
												<li>Enter a brief description about this Owner.</li>
												<li>Add the name of the Owner.</li>
												<li>Select a Role.</li>
												<li>Enter the the number of shares this Director will own.</li>
												<li>Enter the type of shares.</li>
												<li>Enter the price per share.</li>
												<li>AuziPlan will do the calculation for you.</li>
												<li><a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-save fa-1x" aria-hidden="true"></i> Save and Continue</a></li>
											</ol><!-- /.ol -->
										</div>
									</div><!-- /.co 12-->
								</div><!-- /.row-->
							</div><!-- /.card body-->
						</div><!-- /.bg holder-->
					</div><!-- /.card-->
				</div><!-- /.popover body-->

				<input type="hidden" value="" name="id">
				<div id='frmcompanyowner' class="row p-3">
					<div class="col-lg-6 col-md-6 col-sm-12">
						<div class="card p-3">
							<!-- New wizard style Tab 1-1  body begins -->
							<!-- <form method="post" id="directorDetails" class="form-horizontal" enctype="multipart/form-data" novalidate> -->
							<input type="hidden" value="" name="id" />
							<form class="form">
								<div class="row pt-7" style='text-align: center;'>
									<div class="col-lg-12">
										<input type='hidden' id="uploadownerpic_val">
										<img style='width: 100px;' src='<?php echo site_url() . "template-assets/img/team/avatar.png" ?>' id="uploadownerpic_pre">
									</div><!-- /.col -->
									<!-- <input type='file' id='uploadfile'> -->
									<a class="fileContainer">
										<img class="me-2" src="<?php echo site_url(); ?>template-assets/img/icons/cloud-upload.svg" width="25" alt="">Upload Image
										<input type="file" id='uploadownerpic' />
									</a>
								</div><!-- /.row -->
								<div class="form-floating pb-2 pt-2">
									<textarea class="form-control" name="eduAndExp" id="eduAndExp" placeholder="Leave a comment here" id="floatingTextarea2" style="height: auto"></textarea>
									<label for="floatingTextarea2" class="text-muted">About this owner</label>
								</div><!-- /.float form -->
							</form><!-- /.form -->
						</div><!-- /.card -->
					</div>


					<div class="col-lg-6 col-md-6 col-sm-12">
						<div class="card">
							<div class="card-header">
								<h4 class="my-0 font-weight-normal">Contribution Details</h4>
							</div><!-- /.card header -->

							<div class="card-body">
								<div class="accordion" id="accordionExampleDir">
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingOne">
											<button class="accordion-button collapseOneDir" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneDir" aria-expanded="true" aria-controls="collapseOneDir">
												Who is this owner?
											</button>
										</h2>
										<div id="collapseOneDir" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExampleDir">
											<div class="accordion-body">
												<div class="form-floating mb-1">
													<input type="text" name="director_name" class="form-control validate" id="director_name" placeholder="Directors Name" value="<?php echo isset($director_name) ? $director_name: ''; ?>">
													<label for="director_name" class="text-muted">Full Name </label>
												</div><!-- /.float form -->
												<div class="form-floating mb-1">
													<select name="directerRole" class="form-select" id="directerRole" aria-label="Director">
														<option value="" selected>Please select a role</option>
														<option value="Director">Director</option>
														<option value="CEO">CEO</option>
														<option value="Financial Planner">Financial Planner</option>
														<option value="Managing Director">Managing Director</option>
														<option value="President">President</option>
														<option value="Secretary">Secretary</option>
														<option value="Treasurer">Treasurer</option>
														<option value="Vice President">Vice President</option>
													</select><!-- /.select -->
													<label for="directorRole" class="text-muted">Role</label>
												</div><!-- /.float form -->

												<div class="form-floating mb-1">
													<input type="text" name="director_amount_paid" class="form-control currencySign" id="amount" placeholder="Price Per Share" value="<?php echo isset($director_amount_paid) ? $director_amount_paid : ''; ?>">
													<label for="director_amount_paid" class="text-muted">Amount Contributed </label>
												</div><!-- /.float form -->

											</div>
										</div>
									</div><!-- /.accordion -->
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingTwo">
											<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoDir" aria-expanded="false" aria-controls="collapseTwoDir">
												Will this person contribute cash based on shares to fund the business?
											</button>
										</h2>
										<div id="collapseTwoDir" class="accordion-collapse collapse handlecurrencyformat" aria-labelledby="headingTwo" data-bs-parent="#accordionExampleDir">
											<div class="accordion-body">
												<div class="form-floating mb-1">
													<input type="text" name="share_qty" class="form-control numberSign calc_amount_contributed" id="share_qty" placeholder="Share Qty" value="<?php echo isset($share_qty) ? $share_qty : '' ; ?>">
													<label for="share_qty" class="text-muted">Number of Shares </label>
												</div>
												<div class="form-floating mb-1">
													<select name="share_class_sc" class="form-select" id="share_class_sc" aria-label="Shares">
														<option value="" selected class="text-muted">Please Select</option>
														<option value="Ordinary Shares">Ordinary Shares</option>
														<option value="Preference Shares">Preference Shares</option>
														<option value="Redeemable Shares">Redeemable Shares</option>
														<option value="Founder Shares">Founder Shares</option>
														<option value="Deferred Shares">Deferred Shares</option>
													</select>
													<label for="share_class_sc" class="text-muted">Class of shares</label>
												</div><!-- /.float form -->
												<div class="form-floating mb-1">
													<input type="text" name="price_per_share" class="form-control currencySign calc_amount_contributed" id="price_per_share" placeholder="Price Per Share" value="$1.00<?php echo isset($price_per_share) ? $price_per_share : ''; ?>">
													<label for="price_per_share" class="text-muted">Price Per Share</label>
												</div><!-- /.float form -->

												<div class="form-floating mb-1">
													<input type="text" name="netProfit" class="form-control percentSign" id="netProfit" placeholder="Percentage of Gross Sales (%):" oninput="this.value = this.value.replace(/[^0-9]/,'')">
													<label for="netProfit">Percentage of Net Income (%):</label>
												</div>
												<div class="form-floating mb-1">
													<select name="payment_frequency" class="form-select" id="directorPaymentFrequency" aria-label="typeDirector">
														<option value="Monthly">Monthly</option>
														<option value="Quarterly">Quarterly</option>
														<option value="End Of Contract">End Of Financial Year</option>
													</select>
													<label for="payment_frequency" class="text-muted">Payment Frequency</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<input type="hidden" id="reload_table" value="0">
							<input type="hidden" name="director_id" id="director_id" value="0">
						</div><!-- /.col -->
					</div> <!-- end validate form FROM js file -->


							<div class="container">
									<div class="border-dashed-bottom my-3"></div>
										<div class="border p-card rounded p-3">
											<button class="btn btn-outline-danger" type="button" id="btncancelowner" ><i class="far fa-window-close"></i> Cancel</button>
											
										<!--	<button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> <i class="far fa-arrow-alt-circle-down" aria-hidden="true"></i> All members</button>-->

											<button class="btn btn-outline-success float-end" type="button" id='savecompanyowner'><i class="far fa-save"></i> Save and Continue</button>
										</div><!-- /.col -->
									</div><!-- /.border -->
								</div><!-- /.row -->																
							</div> <!-- card mb-1 -->
						
						<div class="collapse" id="collapseOwners">
							<div class="border p-card rounded">
								<?php
									echo view('director_view_dt');
									//include './director_view.php'; 
									?>		
									<a class="mb-0 d-block d-flex align-items-center pt-2" data-bs-toggle="collapse" data-bs-target="#collapseOwners" aria-expanded="false" aria-controls="collapseOwners"style='cursor: pointer;'>
								<span class="circle"><span class="fas fa-arrow-up fa-3x text-success" ></span></span><span class="ms-3"></span></a>											
						</div>
					</div>		
				</div> <!-- row ends -->
							
		</div>

