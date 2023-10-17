	<!-- ===============================================-->
	<!--    Company Setup Content-->
	<!-- ===============================================-->

	<div class="container">
		<header>
			<div class="row mb-3">
				<div class="column">
					<h3>Stage 1 - Company Setup</h3>
				</div>
			</div>
		</header>
		<nav style="--falcon-breadcrumb-divider: '/';" aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><a href="<?php echo site_url(); ?>main-dashboard">Dashboard</a></li>
				<li class="breadcrumb-item active" aria-current="page">Company Setup</li>
			</ol>
		</nav>


		<div class="row pt-3">
			<div class="col-12">
				<div class="card pt-3 mb-3">
					<div class="card-body position-relative">
						<div class="row">
							<div class="col-lg-12">

								<!--<p class="mt-2 text-primary">           
										The page header is a nice little feature to add appropriate spacing around the headings on a page. 
										This is particularly helpful on a web page where you may have several post titles and need a way to add distinction to each of them.             
									</p>  -->

								<!--Button trigger left and right navigation -->
								<a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>planning/planning-setup"><i class="fas fa-arrow-right"></i> Stage 2 </a>

								<button class="btn btn-falcon-info float-end me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#needhelp_view"> <i class="fas fa-info"></i></button>

								<!--Button trigger modal -->
								<button class="btn btn-falcon-info float-end  me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#WelcomeModal"> <i class="fas fa-comment-dots"></i></button>

								<button class="btn btn-falcon-info float-end  me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#modal_analysis"> <i class="fas fa-file-pdf"></i></button>
								<!-- Button trigger modal-->
								<!--<button type="button" class="action submit btn btn-falcon-primary float-end me-1 mb-1 " data-bs-toggle="modal" data-bs-target="#demoVideo"><i class="fa fa-video-camera"></i></button>
									-->

							</div>
							<!--/.col-->
						</div>
						<!--/.row-->
					</div>
					<!--/.card body-->
				</div>
				<!--/.card-->

				<div class="col-lg-12 col-xl-12 col-xxl-12 h-100">
					<div class="card theme-wizard mb-5">
						<div class="card-header bg-light pt-3 pb-2">
							<ul class="nav justify-content-between nav-wizard">
								<li class="nav-item"><a class="nav-link active fw-semi-bold" href="#bootstrap-wizard-tab1" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-shield-alt"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Company</span></a></li>
								<li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab2" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-user"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Ownership</span></a></li>
								<li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab3" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-users"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Investors</span></a></li>
								<li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab4" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-dollar-sign"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Finance</span></a></li>
								<li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab5" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-file-alt"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Assumptions</span></a></li>
								<li class="nav-item"><a class="nav-link fw-semi-bold" href="#bootstrap-wizard-tab6" data-bs-toggle="tab" data-wizard-step="data-wizard-step"><span class="nav-item-circle-parent"><span class="nav-item-circle"><span class="fas fa-thumbs-up"></span></span></span><span class="d-none d-md-block mt-1 fs--1">Done</span></a></li>
							</ul><!-- /.ul  -->
						</div><!-- /.card  -->
						<div class="card-body py-4">

							<?php echo view('company_setup/company'); ?>
							<?php echo view('company_setup/ownership'); ?>
							<?php echo view('company_setup/investors'); ?>
							<?php echo view('company_setup/finance'); ?>
							<?php echo view('company_setup/assumptions'); ?>

						</div><!-- /.card body  -->
					</div><!-- /.col-12  -->

					<?php echo view('needhelp_view'); ?>

					<!-- ===============================================-->
					<!--   Help Modal Content Details-->
					<!-- ===============================================-->

					<div class="modal fade" id="companySetup" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="companySetupLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-scrollable modal-xl">
							<div class="modal-content border-0">
								<div class="position-absolute top-0 end-0 mt-3 me-3 z-index-1"><button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button></div>
								<div class="card mb-3">
									<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);"></div>
									<!--/.bg-holder-->
									<div class="modal-header">
										<!--<a href="http://www.squareplans.com/" class="navbar-brand" style="color:rgba(41, 0, 0, 1.0);font-size:30px;font-weight:300; margin-top: 25px;float: left;"><b>Square</b>Plans</a>-->
										<h3 class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:center">
											<span><img src="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-60x60.png" alt="Logo" style="margin-right: 3px; margin-top: -10%; width:60px; height: 60px;  float: center;" /></span>
											<span style="color:rgba(0, 0, 0, 1.0);font-size:40px;font-weight:100; margin-right: 0px; margin-top: 40px;float: center;">Help</span>
											<span style="color:rgba(13, 110, 252, 1.0);font-size:40px; margin-top: 40px;float: center;">Center</span>
										</h3>
									</div><!-- /.modal header -->
								</div>
								<div class="modal-header modal-header--sticky"> </div>

								<div class="modal-body p-0">
									<div class="container pt-3">
										<div class="row">
											<div class="scroll">

												<!-- ===============================================-->
												<!--   Help Modal Introduction Content Details-->
												<!-- ===============================================-->
												<div class="card mb-3" id="co-0">
													<div class="card-header bg-light">
														<h5 class="mb-0"> Introduction</h5>
													</div><!-- /.modal header -->
													<div class="card-body position-relative">
														<div class="row">
															<div class="col-lg-12">
																<p class="mb-0">
																	The company setup must be completed so Auziplan can perform the calculations required for your financial reports.
																</p>
															</div><!-- /.co-12 -->
														</div><!-- /.row -->
													</div><!-- /.card body -->
												</div><!-- /.card  -->

												<!-- ===============================================-->
												<!--   Help Modal Company Setup Content Details-->
												<!-- ===============================================-->
												<div class="row g-0">
													<div class="col-lg-9 pe-lg-2">
														<div class="card mb-3" id="co-1">
															<div class="card-header bg-light">
																<h5 class="mb-0"> Company Setup </h5>
															</div><!-- /.card header -->
															<div class="card-body">
																<p class="mb-0 p-0">
																	You don't need a science degree here, simply completed the business form
																</p>
																<?php echo view('help_center/setup/setup-1.php'); ?>
															</div><!-- /.card body -->
														</div><!-- /.card -->

														<!-- ===============================================-->
														<!--   Help Modal Owners Content Details-->
														<!-- ===============================================-->

														<div class="card mb-3" id="co-2">
															<div class="card-header bg-light">
																<h5 class="mb-0">Who are the owners of the company?</h5>
															</div>
															<div class="card-body">
																<?php echo view('help_center/setup/setup-2.php'); ?>
															</div><!-- /.card body -->
														</div><!-- /.card -->

														<!-- ===============================================-->
														<!--   Help Modal Investors Content Details-->
														<!-- ===============================================-->

														<div class="card mb-3" id="co-3">
															<div class="card-header bg-light">
																<h5 class="mb-0"> Will you need Investors</h5>
															</div>
															<div class="card-body">
																<?php echo view('help_center/setup/setup-3.php'); ?>
															</div><!-- /.card body -->
														</div><!-- /.card -->

														<!-- ===============================================-->
														<!--   Help Modal Business Finance Content Details-->
														<!-- ===============================================-->

														<div class="card mb-3" id="co-4">
															<div class="card-header bg-light">
																<h5 class="mb-0">How will you need Finance?</h5>
															</div>
															<div class="card-body">
																<?php echo view('help_center/setup/setup-2.php'); ?>
															</div><!-- /.card body -->
														</div><!-- /.card -->

														<!-- =====================================================-->
														<!--   Help Modal Business Assumptions Content Details-->
														<!-- =====================================================-->
														<div class="card mb-3" id="co-5">
															<div class="card-header bg-light">
																<h5 class="mb-0">Business Trading Assumptions?</h5>
															</div>
															<div class="card-body">
																<?php echo view('help_center/setup/setup-2.php'); ?>
															</div><!-- /.card body -->
														</div><!-- /.card -->
													</div><!-- /.col-9 -->

													<div class="col-lg-3 ps-lg-2">
														<div class="sticky-sidebar">
															<div class="card sticky-top">
																<div class="card-header border-bottom">
																	<h6 class="mb-0 fs-0">On this page</h6>
																</div><!-- /.card header-->
																<div class="card-body">
																	<div class="terms-sidebar nav flex-column fs--1" id="terms-sidebar">
																		<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#co-0">Introduction</a></div>
																		<div class="nav-item"><a class="nav-link px-0 py-1 ps-3 " href="#co-1">Company Setup</a></div>
																		<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#co-2">Owners</a></div>
																		<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#co-3">Investors</a></div>
																		<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#co-4">Finance</a></div>
																		<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#co-5">Assumptions</a></div>
																	</div><!-- /.side bar -->
																</div><!-- /.card body-->
															</div><!-- /.sticky side bar -->
														</div><!-- /.col-2 -->
													</div><!-- /.row -->
												</div>
											</div><!-- /row-->
										</div><!-- /scroll-->
									</div><!-- /row-->
									<div class="modal-footer modal-footer--sticky" style="background-color: rgba(255, 255, 255, 1.0);">
										<p class="float-start"> Did you find this helpful?</p>
										<div class="float-end">
											<button type="button" class="btn btn-falcon-success btn-sm mt-1">I certainly did</button>
											<a class="btn btn-falcon-primary btn-sm mt-1" href="#" data-bs-toggle="modal" data-bs-target="#emailModal"> Ask us anything</a>
											<button type="button" class="btn btn-falcon-success btn-sm mt-1 " data-bs-dismiss="modal"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Back to my plan</button>

										</div><!-- /float-->
									</div><!-- /footer-->

								</div><!-- /card-->
							</div><!-- /position absolute-->
						</div><!-- /modal content-->
					</div><!-- /modal dialog-->
				</div><!-- /modal-->

				<!-- ===============================================-->
				<!--   FAQ Content Details-->
				<!-- ===============================================-->

				<div class="modal fade" id="emailModal" tabindex="-1" role="dialog" aria-labelledby="emailModalLabel" aria-hidden="true" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);">
					<div class="modal-dialog" role="document">
						<div class="modal-content border-0">
							<div class="modal-header bg-card-gradient light">
								<h5 class="modal-title text-white" id="exampleModalLabel">Ask your question</h5>
								<button class="btn-close btn-close-white text-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
								<form>
									<div class="mb-3">
										<label for="name">Name</label>
										<input class="form-control" id="name" type="text" />
									</div>
									<div class="mb-3">
										<label for="emailModal">Email</label>
										<input class="form-control" id="emailModal" type="email" />
									</div>
									<div class="mb-3">
										<label for="question">Question</label>
										<textarea class="form-control" id="question" rows="4"></textarea>
									</div>
								</form>
								<button class="btn btn-primary btn-sm px-4" type="submit"><span class="fas fa-paper-plane me-2" aria-hidden="true"> </span>Send</button>
							</div><!-- /.modal body  -->
						</div><!-- /.modal content  -->
					</div><!-- /.modal dialogue  -->
				</div><!-- /.modal  -->
			</div>
			<!-- Modal End -->

			<!-- ===============================================-->
			<!--   Help  Content Details-->
			<!-- ===============================================-->

			<div class="modal animated fade" tabindex="-1" role="dialog" data-toggle="modal-onload" id="modal_analysis" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);">
				<div class="modal-dialog modal-dialog-scrollable modal-xl">
					<div class="modal-content border-0">
						<!-- <div class="position-absolute top-0 end-0 mt-3 me-3 z-index-1"><button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button></div>-->
						<div class="card mb-3">
							<!--<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);"></div>-->
							<!--/.bg-holder-->
							<div class="modal-header">
								<!--<a href="http://www.squareplans.com/" class="navbar-brand" style="color:rgba(41, 0, 0, 1.0);font-size:30px;font-weight:300; margin-top: 25px;float: left;"><b>Square</b>Plans</a>-->
								<h3 class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:center">
									<span><img src="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-60x60.png" alt="Logo" style="margin-right: 3px; margin-top: -10%; width:60px; height: 60px;  float: center;" /></span>
									<span style="color:rgba(0, 0, 0, 1.0);font-size:40px;font-weight:100; margin-right: 0px; margin-top: 40px;float: center;">Help</span>
									<span style="color:rgba(13, 110, 252, 1.0);font-size:40px; margin-top: 40px;float: center;">Center</span>
								</h3>
							</div><!-- /.modal header -->
						</div>
						<div class="modal-header modal-header--sticky"> </div>

						<div class="modal-body p-0">
							<div class="container pt-3">
								<div class="row">
									<div class="scroll">

										<div class="card mb-3">
											<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div>
											<div class="card-header bg-light">
												<h5 class="mb-0" id="1"> Plan Guidelines</h5>
											</div>
											<!--/.bg-holder-->
											<div class="card-body position-relative">
												<div class="row">
													<div class="col-lg-12">
														<p class="mb-0">The forecasts have been prepared using Australian accounting standards and are to be used as a guide.
															If you are not sure please consult with you accountant, or financial advisor.</p>
													</div><!-- /.col 12  -->
												</div><!-- /.row  -->
											</div><!-- /.card  -->
										</div><!-- /.bg-header  -->

										<div class="row g-0">
											<div class="col-lg-9 pe-lg-2">

												<!-- ===============================================-->
												<!--   Revenue Streams -->
												<!-- ===============================================-->

												<div class="card mb-3">
													<div class="card-header bg-light">
														<h5 class="mb-0" id="2"> Revenue Streams </h5>
													</div>
													<div class="card-body">
														<hr class="my-4" />
														<ul>
															<li>Revenue generated by selling Products</li>
															<li>Revenue generated by providing a service and charging by the hour or fixed rate costs.</li>
															<li>Revenue generated by selling products online </li>
															<li>Unit sales can be increased over previous year :Year 2: 50% ,Year 3: 50%</li>
															<li>Unit sales prices are in line with market research on pricing in Year 1 and can be increased in Year 2 and year 3.</li>
														</ul>
														<hr class="my-4" />
													</div>
												</div><!-- /.card  -->

												<!-- ===============================================-->
												<!--   Profit and Loss -->
												<!-- ===============================================-->

												<div class="card mb-3">
													<div class="card-header bg-light">
														<h5 class="mb-0" id="3"> Profit and Loss Forecast</h5>
													</div>
													<div class="card-body">

														<hr class="my-4" />

														<ul>
															<li>Expenses are exclusive of GST/VAT</li>
															<li>Employment expenses increase by 10% in Year 2 and by 20% in Year 3.</li>
															<li>Business development expenses increase by 10% in Year 2 and by 10 % in Year 3.</li>
															<li>Overhead expenses increase by 20% in year 2 and by 10 % in year 3.</li>
															<li>Tax expense is based on the Australian Company Tax rate of 39% .</li>
															<li>Franchise/Royalty is based on 20% of gross sales .</li>
														</ul>
														<hr class="my-4" />
													</div>
												</div>

												<!-- ===============================================-->
												<!--   General Business Assumption -->
												<!-- ===============================================-->

												<div class="card mb-3">
													<div class="card-header bg-light">
														<h5 class="mb-0" id="4"> General Business Assumption</h5>
													</div>
													<div class="card-body">

														<hr class="my-4" />
														<h5>Business Development</h5>
														<ul>
															<li>Travel and accommodation that is non recoverable from clients and enable intrastate and interstate expansion.</li>
															<li>Advertising and publicity is in accordance with the marketing budget. major portion of expense is incurred in months 1 to 4 (refer marketing plan).</li>
															<li>Entertainment reflects expenditure required to improve existing and new customer relationships and retention.</li>
															<li>Marketing and promotion expense is in line with marketing budget. covers new branding, positioning promotional materials for product launches (refer marketing plan).</li>
														</ul>
														<hr class="my-4" />
													</div>
												</div>

												<!-- ===============================================-->
												<!--   Operating Expenses -->
												<!-- ===============================================-->

												<div class="card mb-3">
													<div class="card-header bg-light">
														<h5 class="mb-0" id="5"> Operating Expenses</h5>
													</div>
													<div class="card-body">

														<hr class="my-4" />

														<ul>
															<li>Accounting and tax covers initial investment set up, tax structuring and audit and accounting fees.</li>
															<li>Bank charges are based on historical records and increased to reflect increased levels of transactions.</li>
															<li>Books and subscription covers industry publications and is based on expenses to date adjusted for increased activity.</li>
															<li>Computer consumables relates to printer cartridges and small purchases ( mouse. cables, etc) .</li>
															<li>Depreciation is estimated based on the straight line method (SL).</li>
															<li>Equipment leases covers phone systems, computers, office furniture etc. new equipment is purchased with cash so financing is kept at low levels.</li>
															<li>Insurance covers directors liability, public liability ,office premises and key man insurance.</li>
															<li>Internet and communication covers web site hosting isp access and data charges.</li>
															<li>Legal costs relate to investment structuring and protection of ip. a large portion of the cost is incurred in months 1 to 3.</li>
															<li>Motor Vehicle costs relate Registrations, Petrol, Services and repairs</li>
															<li>Postage and couriers is based on historical records and increased to reflect increased activity.</li>
															<li>Printing and stationary is based on historical records and increased to reflect increased activity.</li>
															<li>Rent and occupation covers outgoings, maintenance and small office costs. lease is renewable in year 4.</li>
															<li>Software and licenses covers new software expense and upgrades to existing licenses.</li>
															<li>Telephone and fax covers office phones and staff phone costs, mobiles and fax. based on historical records and increased to reflect higher levels of activity.</li>
														</ul>
														<hr class="my-4" />
													</div>
												</div>

												<!-- ===============================================-->
												<!--  Cash Flow Assumptions -->
												<!-- ===============================================-->

												<div class="card mb-3">
													<div class="card-header bg-light">
														<h5 class="mb-0" id="5"> Cash Flow Assumptions</h5>
													</div>
													<div class="card-body">

														<hr class="my-4" />
														<ul>
															<li> GST/VAT is calculated on 10% of sales.(Set your countries rates)</li>
															<li>Debtors are received in line with working assumptions and can be set at any time:</li>
															<ul>
																<li>0 Days (Cash on Delivery)
																<li>30 days (It takes 30 days for your customers to pay you)
																<li>60 Days (It takes 60 days for your customers to pay you)
																<li>90 Days (It takes 60 days for your customers to pay you)
															</ul>

															<li>All previous years accounts receivable are received in month one.</li>
															<br>
															<li>Opening creditors are paid in equal instalments for the first 2 months. purchases are paid in the month following receipt of goods</li>

															<li>Creditors are paid in line with working assumptions and can be set at any time:</li>
															<ul>
																<li>0 Days (Cash on Delivery)
																<li>30 days (It takes 30 days for you to pay your suppliers)
																<li>60 Days (It takes 60 days for you to pay your suppliers)
																<li>90 Days (It takes 90 days for you to pay your suppliers)
															</ul>

															<br>

															<li>Business development costs are paid in the month incurred.</li>
															<li>Overheads are paid monthly in the month incurred.</li>
															<li>Employment costs are paid monthly in the month incurred.</li>
															<li>Operating expenses in the profit and loss cash flow are net of gst/vat, accordingly, the gst/vat component is shown separately .</li>
															<li>GST/VAT can be paid on a monthly or quarterly cash basis</li>
															<li>Company tax (payg) can be paid on a monthly or quarterly bases. all year one tax is paid in year one.</li>
															<li>Capital purchase represent assets purchased during the year</li>
															<li>Investors contribute capital in 4 instalments based on investment offer.</li>
															<li>Dividends paid as per the shares and valuation schedule and in accordance with the dividend policy.</li>

														</ul>
														<hr class="my-4" />
													</div>
												</div>

												<!-- ===============================================-->
												<!--   General Business Assumption -->
												<!-- ===============================================-->

												<div class="card mb-3">
													<div class="card-header bg-light">
														<h5 class="mb-0" id="6"> Balance Sheet Assumptions</h5>
													</div>
													<div class="card-body">

														<hr class="my-4" />

														<ul>
															<li>Intangible assets are amortized as required by Australian accounting standards.</li>
															<li>Intangible assets have not been amortized as required by Australian accounting standards.</li>
															<li>Balances represent costs incurred to date.</li>
															<li>Directors and other family loans are interest free and long term loans.</li>
															<li>Founders capital represents share capital contributed to set up the business.</li>
															<li>New shares represent new investors capital.</li>
														</ul>
														<hr class="my-4" />
													</div>
												</div>

											</div>

											<div class="col-lg-3 ps-lg-2">
												<div class="sticky-sidebar">
													<div class="card sticky-top">
														<div class="card-header border-bottom">
															<h6 class="mb-0 fs-0">On this page</h6>
														</div><!-- /card-header-->
														<div class="card-body">
															<div class="terms-sidebar nav flex-column fs--1" id="terms-sidebar">
																<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#1"> Introduction</a></div>
																<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#2"> Revenue Streams</a></div>
																<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#3"> Profit and Loss</a></div>
																<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#4"> Operating Expenses</a></div>
																<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#5"> Cash Flow Assumptions</a></div>
																<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#6"> Balance Sheet Assumptions</a></div>
															</div><!-- /terms side bar-->
														</div><!-- /card-body-->
													</div>
												</div>
											</div>
										</div>
									</div><!-- /row-->
								</div><!-- /scroll-->
							</div><!-- /row-->
							<div class="modal-footer modal-footer--sticky">
								<p class="float-start"> Did you find this helpful?</p>
								<div class="float-end">
									<button type="button" class="btn btn-falcon-success btn-sm mt-1"> I certainly did</button>
									<a class="btn btn-falcon-primary btn-sm mt-1" href="#" data-bs-toggle="modal" data-bs-target="#emailModal"> Ask us anything</a>
									<button type="button" class="btn btn-falcon-success btn-sm mt-1 " data-bs-dismiss="modal"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Back to my plan</button>
								</div><!-- /float-->
							</div><!-- /footer-->
						</div><!-- /card-->
					</div><!-- /position absolute-->
				</div><!-- /modal content-->
			</div><!-- /modal dialog-->


			<!-- ===============================================-->
			<!--   Onload Modal Content Details-->
			<!-- ===============================================-->

			<!-- Vertically centered scrollable modal -->
			<div>
				<div class="modal fade" id="WelcomeModal" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="WelcomeModalLabel" aria-hidden="true">
					<div class="modal-dialog modal-fullscreen" role="document">
						<div class="modal-content border-0">
							<div class="modal-header bg-card-gradient light">
								<h5 class="modal-title text-white" id="exampleModalLabel"></h5>
								<button class="btn-close btn-close-white text-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
								<div class="row min-vh-100 bg-100">
									<div class="col-6 d-none d-lg-block position-relative">
										<div class="bg-holder" style="background-image:url(<?php echo site_url(); ?>template-assets/img/illustrations/3.svg);"></div><!--/.bg-holder-->
									</div>
											<div class="col-sm-10 col-md-6 px-sm-0 align-self-center mx-auto py-5">
												<div class="row justify-content-center g-0">
													<div class="col-lg-9 col-xl-8 col-xxl-6">

															<div class="card-body p-4">
																<div class="row flex-between-center">
																<!-- ===============================================-->
																<!--      Current Side Bar Log  Content ( We will add an image fro the logo once its ready-->
																<!-- ===============================================-->
																<h5 class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:left">
																	<span><img src="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-60x60.png" alt="Logo" style="margin-right: 0px; margin-top: -5%; width:80px; height: 80px;  float: left;" /></span>
																	<span style="color:rgba(0, 0, 0, 1.0);font-size:40px;font-weight:100; margin-right: 0px; margin-top: 40px;float: center;">Auzi</span>
																	<span style="color:rgba(13, 110, 252, 1.0);font-size:40px; margin-top: 40px;float: center;">Plan</span>
																</h5>	
																<h1 class="text-primary">Welcome! <?php echo $user->f_name . ' '  ?> </h1>
																		<p class="text-1000 pt-2">
																			Founded in 2020 by Nuri Bydel Hassim, AuziPlan aims to provide startups and entrepreneur's with an application to write a custom streamlined business plan in a matter of hours
																			without having to figure out complicated spreadsheet formulas, and for you to consider the following:
																		<!--<i class="fa fa-y-combinator" aria-hidden="true"></i><i class="fa fa-y-combinator" aria-hidden="true"></i>	<ul class="pt-1">
																				<li>what type of company are you setting up?</li>
																				<li>who are the owners of the company?</li>
																				<li>will you need investors?</li>
																				<li>how will the company be financed ?</li>
																				<li>what is the mission , vision, goals and objectives?</li>
																				<li>how much cash is required to start?</li>
																				<li>what are the operational expenses?</li>
																				<li>who are the key personnel?</li>
																				<li>how will the company generate revenue?</li>
																				<li>what are the products and service costs?</li>
																				<li>how much profit will the company make each year?</li>
																				<li>what is the ROI (Return on Investment)?</li>
																				<li>is it worth the time, effort, and financial cost?</li>
																			</ul>-->
																		</p>
																		<h5 class=" text-1000 fs-0 fw-normal pt-1" style="width:auto">
																			Let's start by setting up your company and general business assumptions.
																		</h5>
																		<div class="pt-3">
																			<!--<p class="lead pt-3">Create your business plan.</p>-->
																			<a class="btn btn-falcon-success float-end me-1 mb-1" href="<?php echo site_url(); ?>user/companysetup"> <i class="fas fa-arrow-right"></i>
																			Company Setup
																		</a>
																		</div>
																		<figcaption class="blockquote-footer pt-5">
																			<h5 class="fs-0 fw-normal pt-2">"planning is the key to your success!"</h5>
																			Nuri Bydel Hassim <cite title="Source Title">CEO</cite>
																
																		</div>
																	</div>
																</div>
															</div>
														</div>
												
												<!--/.card body-->
											</div>
										</div>
									</div>
								</div>
							</div>


						<!-- Script -->
						<script>
							$(document).ready(function() {
								if (document.cookie.indexOf("FooBar=true") == -1) {
									document.cookie = "FooBar=true; max-age=86400"; // 86400: seconds in a day
									$('#WelcomeModal').modal('show');
								}
							});
						</script>

