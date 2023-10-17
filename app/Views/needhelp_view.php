<div class="modal animate__animated animate__fadeInLeft" id="needhelp_view" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="companySetupLabel" aria-hidden="true" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);">
	<div class="modal-dialog  modal-xl">
		<div class="modal-content border-0">
			<div class="modal-header">
				<!--<a href="http://www.squareplans.com/" class="navbar-brand" style="color:rgba(41, 0, 0, 1.0);font-size:30px;font-weight:300; margin-top: 25px;float: left;"><b>Square</b>Plans</a>-->
				<h3 class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:center">
					<span><img src="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-60x60.png" alt="Logo" style="margin-right: 3px; margin-top: -10%; width:60px; height: 60px;  float: center;" /></span>
					<span style="color:rgba(0, 0, 0, 1.0);font-size:40px;font-weight:100; margin-right: 0px; margin-top: 40px;float: center;">Help</span>
					<span style="color:rgba(13, 110, 252, 1.0);font-size:40px; margin-top: 40px;float: center;">Center</span>
				</h3>
			</div><!-- /.modal header -->

			<div class="modal-body">
				<!-- ===============================================-->
				<!--    Startup Costs Stages-->
				<!-- ===============================================-->
				<div class="mb-0 p-0">
					<div class="card-header d-flex flex-between-center ps-0 py-0 border-bottom p-3">
						<ul class="nav nav-tabs border-0 flex-nowrap tab-active-caret" id="crm-ont-chart-tab" role="tablist" data-tab-has-echarts="data-tab-has-echarts">
							<li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0 active" id="crm-s1-tab" data-bs-toggle="tab" href="#crm-s1" role="tab" aria-controls="crm-s1" aria-selected="true">Stage 1</a></li>
							<li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-s2-tab" data-bs-toggle="tab" href="#crm-s2" role="tab" aria-controls="crm-s2" aria-selected="false"> Stage 2</a></li>
							<li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-s3-tab" data-bs-toggle="tab" href="#crm-s3" role="tab" aria-controls="crm-s3" aria-selected="false"> Stage 3</a></li>
							<li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-s4-tab" data-bs-toggle="tab" href="#crm-s4" role="tab" aria-controls="crm-s4" aria-selected="false"> Stage 4</a></li>
							<li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-s5-tab" data-bs-toggle="tab" href="#crm-s5" role="tab" aria-controls="crm-s5" aria-selected="false"> Stage 5</a></li>
							<li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-s6-tab" data-bs-toggle="tab" href="#crm-s6" role="tab" aria-controls="crm-s6" aria-selected="false"> Stage 6</a></li>
							<li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-s7-tab" data-bs-toggle="tab" href="#crm-s7" role="tab" aria-controls="crm-s7" aria-selected="false"> Printing</a></li>

						</ul>
					</div>
					<div>
						<div>
							<div class="row g-1">
								<div class="col-xxl-12">
									<div class="tab-content">

										<!-- ===============================================-->
										<!--    Tab Pane Content-->
										<!-- ===============================================-->
										<div class="tab-pane active" id="crm-s1" role="tabpanel" aria-labelledby="crm-s1-tab">


											<div class="card h-700">
												<div class="card-header d-flex flex-between-center py-2">
													<h5 class="mb-0">Company Setup</h5>
												</div><!-- /.card header -->

												<div class="card-body" style="height:auto">
													<div class="container pt-3">
														<div class="row">
															<div class="scroll">
																<div class="row g-0">
																	<div class="col-lg-9 pe-lg-2">


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

																						<p class="mt-1 text-default">
																							Let's setup your company details and general business assumptions that will be used to make your business calculations,
																							and generate your financial reports projections.
																						</p>
																						<blockquote>
																							<h6>Key takeaways to start.</h6>
																							<ul>
																								<li>What are the details of the company?</li>
																								<li>Who are the owners of the company?</li>
																								<li>How much capital has been raised by the owners, investors, or bank finance to kick start the business?</li>
																								<li>What are the general business trading assumptions?</li>
																							</ul>
																						</blockquote>
																					</div><!-- /.co-12 -->
																				</div><!-- /.row -->
																			</div><!-- /.card body -->
																		</div><!-- /.card  -->

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
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#co-1">Company Setup</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#co-2">Owners</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#co-3">Investors</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#co-4">Finance</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#co-5">Assumptions</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#co-6">Analysis</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#co-7">Printing</a></div>

																					</div><!-- /.side bar -->
																				</div><!-- /.card body-->
																			</div><!-- /.sticky side bar -->
																		</div><!-- /.col-2 -->
																	</div><!-- /.row -->
																</div>
															</div><!-- /row-->
														</div><!-- /scroll-->
													</div><!-- /row-->
												</div><!-- /.card body -->
											</div><!-- /.card -->
										</div><!-- /.tab pane -->


										<!-- ===============================================-->
										<!--    Tab Pane Content-->
										<!-- ===============================================-->
										<div class="tab-pane" id="crm-s2" role="tabpanel" aria-labelledby="crm-s2-tab">


											<div class="card h-700">
												<div class="card-header d-flex flex-between-center py-2">
													<h5 class="mb-0">Business Narrative</h5>
												</div><!-- /.card header -->

												<div class="card-body" style="height:auto">
													<div class="container pt-3">
														<div class="row">
															<div class="scroll">
																<div class="row g-0">
																	<div class="col-lg-9 pe-lg-2">
																		<!-- ===============================================-->
																		<!--   Help Modal Introduction Content Details-->
																		<!-- ===============================================-->
																		<div class="card mb-3" id="pl-0">
																			<div class="card-header bg-light pt-1">
																				<h5 class="mb-0"> Introduction</h5>
																			</div>

																			<!--/.bg-holder-->
																			<div class="card-body position-relative">
																				<div class="row">
																					<div class="col-lg-12">
																						<p class="mb-3">
																							So you have an idea. Not just any idea, either. You have an idea about a business venture that you think could work to serve your community and prove financially successful.
																							You’ve seen a clear gap in some products or as service that you can provide, and now you want to move forward and get a plan out to investors.
																							The best way to begin with that is to write down your business narrative.
																						</p>
																					</div>
																				</div>
																			</div>
																		</div>

																		<div class="card mb-3 pt-1" id="pl-1">
																			<div class="card-header bg-light pt-1">
																				<h5 class="mb-0"> What is a "Business Narrative"?</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-1'); ?>
																			</div><!-- /card body-->
																		</div>

																		<!-- ===============================================-->
																		<!--   Help Modal Plan 2 Content Details-->
																		<!-- ===============================================-->
																		<div class="card mb-3 pt-1" id="pl-2">
																			<div class="card-header bg-light pt-1">
																				<h5 class="mb-0"> Practical Considerations</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-2'); ?>
																			</div>
																		</div>

																		<!-- ===============================================-->
																		<!--   Help Modal Plan 3 Content Details-->
																		<!-- ===============================================-->

																		<div class="card mb-3 p-1" id="pl-3">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Brainstorming</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-3'); ?>
																			</div>
																		</div>

																		<!-- ===============================================-->
																		<!--   Help Modal Business Finance Content Details-->
																		<!-- ===============================================-->

																		<div class="card mb-3 pt-1" id="pl-4">
																			<div class="card-header bg-light">
																				<h5 class="mb-0">Executive Summary</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-4'); ?>
																			</div>
																		</div>

																		<!-- =====================================================-->
																		<!--   Help Modal Plan 5 Content Details-->
																		<!-- =====================================================-->
																		<div class="card mb-3 pt-1" id="pl-5">
																			<div class="card-header bg-light">
																				<h5 class="mb-0">Mission Statement</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-5'); ?>
																			</div>
																		</div>

																		<!-- =====================================================-->
																		<!--   Help Modal Plan 5 Content Details-->
																		<!-- =====================================================-->
																		<div class="card mb-3 pt-1" id="pl-6">
																			<div class="card-header bg-light">
																				<h5 class="mb-0">Vision Statement</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-6'); ?>
																			</div>
																		</div>


																		<!-- =====================================================-->
																		<!--   Help Modal Plan 5 Content Details-->
																		<!-- =====================================================-->
																		<div class="card mb-3 pt-1" id="pl-7">
																			<div class="card-header bg-light">
																				<h5 class="mb-0">Business Description</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-7'); ?>
																			</div>
																		</div>

																		<!-- =====================================================-->
																		<!--   Help Modal Plan 5 Content Details-->
																		<!-- =====================================================-->
																		<div class="card mb-3 pt-1" id="pl-8">
																			<div class="card-header bg-light">
																				<h5 class="mb-0">Company Ownership</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-8'); ?>
																			</div>
																		</div>

																		<!-- =====================================================-->
																		<!--   Help Modal Plan 5 Content Details-->
																		<!-- =====================================================-->
																		<div class="card mb-3 pt-1" id="pl-9">
																			<div class="card-header bg-light">
																				<h5 class="mb-0">Long-Term Goals and Objective:</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-9'); ?>
																			</div>
																		</div>

																		<!-- =====================================================-->
																		<!--   Help Modal Plan 5 Content Details-->
																		<!-- =====================================================-->
																		<div class="card mb-3 pt-1" id="pl-10">
																			<div class="card-header bg-light">
																				<h5 class="mb-0">Property Plant and Equipment?</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-10'); ?>
																			</div>
																		</div>

																		<!-- =====================================================-->
																		<!--   Help Modal Plan 5 Content Details-->
																		<!-- =====================================================-->
																		<div class="card mb-3 pt-1" id="pl-11">
																			<div class="card-header bg-light">
																				<h5 class="mb-0">Products and Services?</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-11'); ?>
																			</div>
																		</div>

																		<!-- =====================================================-->
																		<!--   Help Modal Plan 5 Content Details-->
																		<!-- =====================================================-->
																		<div class="card mb-3 pt-1" id="pl-12">
																			<div class="card-header bg-light">
																				<h5 class="mb-0">Market Target</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-12'); ?>
																			</div>
																		</div>
																		<!-- =====================================================-->
																		<!--   Help Modal Plan 5 Content Details-->
																		<!-- =====================================================-->
																		<div class="card mb-3 pt-1" id="pl-13">
																			<div class="card-header bg-light">
																				<h5 class="mb-0">Potential Customers </h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-13'); ?>
																			</div>
																		</div>

																		<!-- =====================================================-->
																		<!--   Help Modal Plan 5 Content Details-->
																		<!-- =====================================================-->
																		<div class="card mb-3 pt-1" id="pl-14">
																			<div class="card-header bg-light">
																				<h5 class="mb-0">S.W.O.T.</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-14'); ?>

																			</div>
																		</div>

																		<!-- =====================================================-->
																		<!--   Help Modal Plan 5 Content Details-->
																		<!-- =====================================================-->
																		<div class="card mb-3 pt-1" id="pl-15">
																			<div class="card-header bg-light">
																				<h5 class="mb-0">Location </h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-15'); ?>
																			</div>
																		</div>
																		<!-- =====================================================-->
																		<!--   Help Modal Plan 5 Content Details-->
																		<!-- =====================================================-->
																		<div class="card mb-3 pt-1" id="pl-16">
																			<div class="card-header bg-light">
																				<h5 class="mb-0">Daily Operations </h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/planning/planning-16'); ?>
																			</div>
																		</div>
																	</div>

																	<div class="col-lg-3 ps-lg-2">
																		<div class="sticky-sidebar">
																			<div class="card sticky-top">
																				<div class="card-header border-bottom">
																					<h6 class="mb-0 fs-0">On this page</h6>
																				</div><!-- /card header-->
																				<div class="card-body">
																					<div class="terms-sidebar nav flex-column fs--1" id="terms-sidebar">
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-0"> Introduction</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-1"> Business Narrative</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-2"> Practical Considerations</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-3"> Brainstorming</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-4"> Executive Summary</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-5"> Mission Statement</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-6"> Vision Statement</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-7"> Business Description</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-8"> Company Ownership</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-9"> Goals and Objective:</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-10"> PP&E</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-11"> Products and Services?</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-12"> Market Target</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-13"> Potential Customers</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-14"> S.W.O.T.</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-15"> Location</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#pl-16"> Daily Operations</a></div>

																					</div><!-- /side bar-->
																				</div><!-- /card body-->
																			</div><!-- card-->
																		</div><!-- /sticky side bar-->
																	</div><!-- /col-->
																</div><!-- /row-->
															</div><!-- /row-->
														</div><!-- /scroll-->
													</div><!-- /row-->
												</div><!-- /.card body -->
											</div><!-- /.card -->
										</div><!-- /.tab pane -->

										<!-- ===============================================-->
										<!--    Tab Pane Content-->
										<!-- ===============================================-->
										<div class="tab-pane" id="crm-s3" role="tabpanel" aria-labelledby="crm-s3-tab">

											<div class="card h-700">
												<div class="card-header d-flex flex-between-center py-2">
													<h5 class="mb-0">Opening Costs</h5>
												</div><!-- /.card header -->

												<div class="card-body" style="height:auto">
													<div class="container pt-3">
														<div class="row">
															<div class="scroll">
																<div class="row g-0">
																	<div class="col-lg-9 pe-lg-2">
																		<div class="card mb-3" id="ot-0">
																			<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div>
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Introduction</h5>
																			</div>

																			<!--/.bg-holder-->
																			<div class="card-body position-relative">
																				<div class="row">
																					<div class="col-lg-12">
																						<p class="mb-0 ps-3 mb-3">
																							<strong>One-Time Costs</strong> are the initial costs when starting up a new business that are not normally recurring on a monthly basis. These items could be
																							computers, office equipment, or property plant and equipment.
																						</p>
																					</div>
																				</div>
																			</div>
																		</div>

																		<!-- ===============================================-->
																		<!--   One Time Costs Details-->
																		<!-- ===============================================-->
																		<div class="card mb-3" id="ot-1">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Pre-Paid Costs</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/startup/startup-1'); ?>
																			</div>
																		</div>
																		<!-- ===============================================-->
																		<!--    Plant and Equipment Details-->
																		<!-- ===============================================-->
																		<div class="card mb-3" id="ot-2">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Plant and Equipment</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/startup/startup-2'); ?>
																			</div>
																		</div>
																		<!-- ===============================================-->
																		<!--   Land and Building Details-->
																		<!-- ===============================================-->
																		<div class="card mb-3" id="ot-3">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Land and Building</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/startup/startup-3'); ?>
																			</div>
																		</div>
																	</div>
																	<div class="col-lg-3 ps-lg-2">
																		<div class="sticky-sidebar">
																			<div class="card sticky-top">
																				<div class="card-header border-bottom">
																					<h6 class="mb-0 fs-0">On this page</h6>
																				</div>
																				<div class="card-body">
																					<div class="terms-sidebar nav flex-column fs--1" id="terms-sidebar">
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#ot-0">Introduction</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#ot-1">Pre-Paid Costs</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#ot-2">Plant and Equipment</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#ot-3">Land and Building</a></div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div><!-- /row-->
														</div><!-- /scroll-->
													</div><!-- /row-->

												</div><!-- /.card body -->
											</div><!-- /.card -->
										</div><!-- /.tab pane -->
										<!-- ===============================================-->
										<!--    Tab Pane Content-->
										<!-- ===============================================-->
										<div class="tab-pane" id="crm-s4" role="tabpanel" aria-labelledby="crm-s4-tab">
											<div class="card h-700">
												<div class="card-header d-flex flex-between-center py-2">
													<h5 class="mb-0">Operating Expenses</h5>
												</div><!-- /.card header -->
												<div class="card-body" style="height:auto">
													<div class="container pt-3">
														<div class="row">
															<div class="scroll">
																<div class="row g-0">
																	<div class="col-lg-9 pe-lg-2">
																		<div class="card mb-3" id="op-0">
																			<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div>
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Introduction</h5>
																			</div>
																			<!--/.bg-holder-->
																			<div class="card-body position-relative">
																				<div class="row">
																					<div class="col-lg-12">

																						<p class="mb-0">
																							We have provided this guide to outline the advantages of creating a business plan, and how to go about it.
																							It suggests action points to help you manage your business' financial position more effectively and ensure your plans are realistic.
																						</p>

																						<p class="pt-1">
																							When you're operating a business, it's easy to get caught up in the daily operations and forget about the future growth of your business.
																							Successful companies spend time to create and manage budgets, review business plans, and monitor finance and performance on a regular basis.
																						</p>
																					</div>
																				</div>
																			</div>
																		</div>

																		<!-- ===============================================-->
																		<!--   Plant and Equipment Details-->
																		<!-- ===============================================-->
																		<div class="card mb-3" id="op-1">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Operating Expenses</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/operating_expenses/expenses-1'); ?>
																				<hr class="my-4" />
																			</div>
																		</div>
																		<!-- ===============================================-->
																		<!--   Land and Building Details-->
																		<!-- ===============================================-->

																		<div class="card mb-3" id="op-2">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> People</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/operating_expenses/people-1'); ?>
																				<hr class="my-4" />
																			</div>
																		</div>
																	</div>
																	<div class="col-lg-3 ps-lg-2">
																		<div class="sticky-sidebar">
																			<div class="card sticky-top">
																				<div class="card-header border-bottom">
																					<h6 class="mb-0 fs-0">On this page</h6>
																				</div>
																				<div class="card-body">
																					<div class="terms-sidebar nav flex-column fs--1" id="terms-sidebar">
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#op-0">Introduction</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#op-1">Operating Expenses</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#op-2">People</a></div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>

															</div><!-- /row-->
														</div><!-- /scroll-->
													</div><!-- /row-->
												</div><!-- /.card body -->
											</div><!-- /.card -->
										</div><!-- /.tab pane -->
										<!-- ===============================================-->
										<!--    Tab Pane Content-->
										<!-- ===============================================-->
										<div class="tab-pane" id="crm-s5" role="tabpanel" aria-labelledby="crm-s5-tab">

											<div class="card h-700">
												<div class="card-header d-flex flex-between-center py-2">
													<h5 class="mb-0">Revenue Streams</h5>
												</div><!-- /.card header -->
												<div class="card-body" style="height:auto">
													<div class="container pt-3">
														<div class="row">
															<div class="scroll">

																<div class="row g-0">
																	<div class="col-lg-9 pe-lg-2">
																		<div class="card mb-3" id="rev-0">
																			<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div>
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Introduction</h5>
																			</div>

																			<!--/.bg-holder-->
																			<div class="card-body position-relative">
																				<div class="row">
																					<div class="col-lg-12">

																						<p class="mb-0">
																							We have provided this guide to outline the advantages of creating a business plan, and how to go about it.
																							It suggests action points to help you manage your business' financial position more effectively and ensure your plans are realistic.
																						</p>

																						<p class="pt-1">
																							When you're operating a business, it's easy to get caught up in the daily operations and forget about the future growth of your business.
																							Successful companies spend time to create and manage budgets, review business plans, and monitor finance and performance on a regular basis.
																						</p>
																					</div>
																				</div>
																			</div>
																		</div>
																		<!-- ===============================================-->
																		<!--   Plant and Equipment Details-->
																		<!-- ===============================================-->

																		<div class="card mb-3" id="rev-1">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Product Revenue</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/revenue/local/loc_1'); ?>
																				<hr class="my-4" />
																			</div>
																		</div>

																		<!-- ===============================================-->
																		<!--   Online Revenue Details-->
																		<!-- ===============================================-->

																		<div class="card mb-3" id="rev-2">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Service Revenue</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/revenue/service/serv_1'); ?>
																				<hr class="my-4" />
																			</div>
																		</div>

																		<!-- ===============================================-->
																		<!--   Land and Building Details-->
																		<!-- ===============================================-->

																		<div class="card mb-3" id="rev-3">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Online Revenue</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/revenue/online/onl_1'); ?>
																				<hr class="my-4" />
																			</div>
																		</div>
																	</div>

																	<div class="col-lg-3 ps-lg-2">
																		<div class="sticky-sidebar">
																			<div class="card sticky-top">
																				<div class="card-header border-bottom">
																					<h6 class="mb-0 fs-0">On this page</h6>
																				</div>
																				<div class="card-body">
																					<div class="terms-sidebar nav flex-column fs--1" id="terms-sidebar">
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#rev-0">Introduction</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#rev-1">Products Revenue</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#rev-2">Service Revenue</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#rev-3">Online Revenue</a></div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div><!-- /row-->
														</div><!-- /scroll-->
													</div><!-- /row-->
												</div><!-- /.card body -->
											</div><!-- /.card -->
										</div><!-- /.tab pane -->
										<!-- ===============================================-->
										<!--    Tab Pane Content-->
										<!-- ===============================================-->
										<div class="tab-pane" id="crm-s6" role="tabpanel" aria-labelledby="crm-s6-tab">

											<div class="card h-700">
												<div class="card-header d-flex flex-between-center py-2">
													<h5 class="mb-0">Analysis</h5>
												</div><!-- /.card header -->
												<div class="card-body" style="height:auto">
													<div class="container pt-3">
														<div class="row">
															<div class="scroll">

																<div class="row g-0">
																	<div class="col-lg-9 pe-lg-2">
																		<div class="card mb-3" id="an-0">
																			<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div>
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Introduction</h5>
																			</div>

																			<!--/.bg-holder-->
																			<div class="card-body position-relative">
																				<div class="row">
																					<div class="col-lg-12">

																						<p class="mb-0">
																							We have provided this guide to outline the advantages of creating a business plan, and how to go about it.
																							It suggests action points to help you manage your business' financial position more effectively and ensure your plans are realistic.
																						</p>

																						<p class="pt-1">
																							When you're operating a business, it's easy to get caught up in the daily operations and forget about the future growth of your business.
																							Successful companies spend time to create and manage budgets, review business plans, and monitor finance and performance on a regular basis.
																						</p>
																					</div>
																				</div>
																			</div>
																		</div>
																		<!-- ===============================================-->
																		<!--   Plant and Equipment Details-->
																		<!-- ===============================================-->

																		<div class="card mb-3" id="an-1">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Product Revenue</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/revenue/local/loc_1'); ?>
																				<hr class="my-4" />
																			</div>
																		</div>

																		<!-- ===============================================-->
																		<!--   Online Revenue Details-->
																		<!-- ===============================================-->

																		<div class="card mb-3" id="an-2">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Service Revenue</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/revenue/service/serv_1'); ?>
																				<hr class="my-4" />
																			</div>
																		</div>

																		<!-- ===============================================-->
																		<!--   Land and Building Details-->
																		<!-- ===============================================-->

																		<div class="card mb-3" id="an-3">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Online Revenue</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/revenue/online/onl_1'); ?>
																				<hr class="my-4" />
																			</div>
																		</div>
																	</div>

																	<div class="col-lg-3 ps-lg-2">
																		<div class="sticky-sidebar">
																			<div class="card sticky-top">
																				<div class="card-header border-bottom">
																					<h6 class="mb-0 fs-0">On this page</h6>
																				</div>
																				<div class="card-body">
																					<div class="terms-sidebar nav flex-column fs--1" id="terms-sidebar">
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#an-0">Introduction</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#an-1">1</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#an-2">2</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#an-3">3</a></div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div><!-- /row-->
														</div><!-- /scroll-->
													</div><!-- /row-->
												</div><!-- /.card body -->
											</div><!-- /.card -->
										</div><!-- /.tab pane -->
										<!-- ===============================================-->
										<!--    Tab Pane Content-->
										<!-- ===============================================-->
										<div class="tab-pane" id="crm-s7" role="tabpanel" aria-labelledby="crm-s7-tab">

											<div class="card h-700">
												<div class="card-header d-flex flex-between-center py-2">
													<h5 class="mb-0">Printing</h5>
												</div><!-- /.card header -->
												<div class="card-body" style="height:auto">
													<div class="container pt-3">
														<div class="row">
															<div class="scroll">

																<div class="row g-0">
																	<div class="col-lg-9 pe-lg-2">
																		<div class="card mb-3" id="print-0">
																			<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div>
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Introduction</h5>
																			</div>
																			<!--/.bg-holder-->
																			<div class="card-body position-relative">
																				<div class="row">
																					<div class="col-lg-12">
																						<h5>3 Main Financial Statements</h5>

																						<ol class="pt-1">
																							<li>The Balance Sheet</li>
																							<li>The Income Statement (Profit and Loss) </li>
																							<li>The Cashflow Statement</li>
																						</ol>

																						<h5>Balance Sheet</h5>

																						<p class="mt-1 ps-3 mb-3">
																							The balance sheet shows a financial snapshot of the business at a specific point in time, usually at the beginning and end of an accounting period.
																							It sets out the assets of the business and how they have been funded. It tells you what your business is worth at book value.
																						</p>

																						<h5>Income Statement (Profit and Loss)</h5>

																						<p class="mt-1 ps-3 mb-3">
																							The income statement shows a business’s financial performance over an accounting period. The accounting period can be any length but is usually a month or a year.
																							The income statement is used to tell whether a business has made a profit or a loss for the period, and follows the general format of Revenue – Expenses = Profit.
																							It tells you what profit is left for you, the owner of the business.The income statement may also be referred to as the profit and loss account,
																							the earnings statement, or the income and expenditure statement, they all mean the same thing.
																						</p>

																						<h5>Cashflow Statement</h5>

																						<p class="mt-1 ps-3 mb-3">
																							The Cash Flow Statement shows a business’s cash inflow and cash outflow over an accounting period. The accounting period can be any length but is usually a month or a year.
																							The cash flow statement tells you whether you have the cash to pay your bills. Cash flows in include receipts from the trade of the business,
																							new loans, and new equity. Cash flows out of the business include payments for expenses of the business, fixed assets, loan repayments etc.
																						</p>
																						<hr style="border-top: 3px solid #0064B2; background: transparent;">

																						<h5>How do I print a report?</h5>

																						<ol class="pt-1">
																							<li>Click the plus button</li>
																							<li>Upload your company logo that will be printed on the header on your financial reports.</li>
																							<li>Enter the date.</li>
																							<li>Enter your company name.</li>
																							<li>Enter your ABN number if you have one.(Optional).</li>
																							<li>Enter your business registration number if you have one.(Optional).</li>
																							<li>Enter your business location.</li>
																							<li>Enter your currency.</li>
																							<li>Enter your company structure.</li>
																							<li>Select your revenue stream (Products by default).</li>
																							<li><a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-print fa-1x" aria-hidden="true"></i> Print</a></li>
																						</ol>
																					</div>
																				</div>
																			</div>
																		</div>

																		<!-- ===============================================-->
																		<!--   Plant and Equipment Details-->
																		<!-- ===============================================-->

																		<div class="card mb-3" id="print-1">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Product Revenue</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/revenue/local/loc_1'); ?>
																				<hr class="my-4" />
																			</div>
																		</div>

																		<!-- ===============================================-->
																		<!--   Online Revenue Details-->
																		<!-- ===============================================-->

																		<div class="card mb-3" id="print-2">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Service Revenue</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/revenue/service/serv_1'); ?>
																				<hr class="my-4" />
																			</div>
																		</div>

																		<!-- ===============================================-->
																		<!--   Land and Building Details-->
																		<!-- ===============================================-->

																		<div class="card mb-3" id="print-3">
																			<div class="card-header bg-light">
																				<h5 class="mb-0"> Online Revenue</h5>
																			</div>
																			<div class="card-body">
																				<?php echo view('help_center/revenue/online/onl_1'); ?>
																				<hr class="my-4" />
																			</div>
																		</div>
																	</div>

																	<div class="col-lg-3 ps-lg-2">
																		<div class="sticky-sidebar">
																			<div class="card sticky-top">
																				<div class="card-header border-bottom">
																					<h6 class="mb-0 fs-0">On this page</h6>
																				</div>
																				<div class="card-body">
																					<div class="terms-sidebar nav flex-column fs--1" id="terms-sidebar">
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#print-0">Introduction</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#print-1">Balance Sheet</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#print-2">Income Statement</a></div>
																						<div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#print-3">Cash Flow</a></div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div><!-- /row-->
														</div><!-- /scroll-->
													</div><!-- /row-->
												</div><!-- /.card body -->
											</div><!-- /.card -->
										</div><!-- /.tab pane -->
									</div>
								</div>
							</div><!-- /row-->
						</div><!-- /scroll-->
					</div><!-- /row-->
				</div><!-- /card-->
				<div class="modal-footer modal-footer--sticky">
					<!--<p class="float-start"> Did you find this helpful?</p>-->
					<div class="float-end">
						<!--<button type="button" class="btn btn-falcon-success btn-sm mt-1">I certainly did</button>-->
						<a class="btn btn-falcon-primary btn-sm mt-1" href="#" data-bs-toggle="modal" data-bs-target="#emailModal"> Ask us anything</a>
						<button type="button" class="btn btn-falcon-success btn-sm mt-1 " data-bs-dismiss="modal"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Back to my plan</button>
					</div><!-- /float-->
				</div><!-- /footer-->
			</div><!-- /position absolute-->
		</div><!-- /modal content-->
	</div><!-- /modal dialog-->
</div><!-- /modal-->
<!-- ===============================================-->
<!--   FAQ Content Details-->
<!-- ===============================================-->
<div class="modal fade" id="emailModal" tabindex="-1" role="dialog" aria-labelledby="emailModalLabel" aria-hidden="true" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);">
	<div class="modal-dialog modal-dialog-centered modal-fullscreen" role="document">
		<div class="modal-content border-0">
			<div class="modal-body">
				<div class="card-body overflow-hidden p-lg-6">
					<div class="row align-items-center">
						<div class="col-lg-6">
							<img class="img-fluid" src="<?php echo site_url(); ?>template-assets//img/icons/spot-illustrations/1.svg" alt="" />
						</div>
						<!--/.col 6-->
						<div class="col-lg-3">
							<div id="frmaskyourq" class="pt-3">
								<h4 class="text-primary mb-4">How can we help?</h4>
								<!--<p class="mt-2 text-primary">           
											The page header is a nice little feature to add appropriate spacing around the headings on a page. 
											This is particularly helpful on a web page where you may have several post titles and need a way to add distinction to each of them.             
										</p>  -->
								<div class="position-absolute top-0 end-0 mt-3 me-3 z-index-1">
									<button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>

								<div class="form-floating mb-3">
									<input class="form-control validate" id="ayourq_name" placeholder="Your Name" type="text" />
									<label for="name">Let's get to know you, what's your name?</label>
								</div><!-- /.float form -->

								<div class="form-floating mb-3">
									<input class="form-control validate" id="ayourq_email" placeholder="Email" type="email" />
									<label for="emailModal">And your email address?</label>
								</div><!-- /.float form -->

								<div class="form-floating pb-2 pt-2">
									<textarea class="form-control validate " id="ayourq_question" rows="20" placeholder="About this owner" style="height:150px;"></textarea>
									<label for="floatingTextarea2" class="text-muted">How can we help?</label>
								</div><!-- /.float form -->

								<button class="btn btn-falcon-primary float-end btn-sm px-4" id="ayourq_ask" type="button"><span class="fas fa-paper-plane me-2" aria-hidden="true"> </span>Send</button>
								<!-- Button trigger modal -->
								<button class="btn btn-falcon-success float-end btn-sm px-4  me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#needhelp_view"> <span class="fa fa-arrow-left me-2" aria-hidden="true"> </span>Back to Help Center</button>
							</div><!-- /.ask question -->
						</div>
						<!--/.col 6-->
					</div>
					<!--/.row-->
				</div>
			</div>
		</div>
	</div>
	<!-- Modal End -->