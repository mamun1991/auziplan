
    <div class="card-body">
      <div class="tab-content">
	        <div class="tab-pane fade show active" id="first_5" role="tabpanel" aria-labelledby="first_5-tab">
				<div class="card text-left">
				    <div class="card-header ">
						<div class="row g-0">
						    <div class="col-md-9">
							<h5 class="display-5" >Products Revenue</h5>
							<p>What is your projected product revenue <?php echo $user->f_name . ' ' . $user->l_name ?> ?</p>
							<!-- <img src="<?= asset_url() ?>img/meet_jake/dashboard/d_4.png" width="60%" height="60%" class="img-fluid" alt="jake">-->
						    </div><!-- /.card -->
							    <div class="col-md-3">
									<div class="float-end">
								    	<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#onliModal"><i class="fa fa-info-circle" aria-hidden="true"></i></button>
									    <button class="btn  btn-outline-success" type="button" onclick="modify_online_revenue_form()"><i class="fa fa-plus" aria-hidden="true"></i></button>
									    <a href="<?php echo site_url(); ?>revenue" class="btn  btn-outline-primary"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
									</div>
						        </div><!-- /.col-->
							</div><!-- /.row-->
					    </div>
















					    <div class="card-body">
					      <div class="tab-content">
						        <div class="tab-pane fade show active" id="first_5" role="tabpanel" aria-labelledby="first_5-tab">
									<div class="card text-left">
									    <div class="card-header ">
											<div class="row g-0">
											    <div class="col-md-9">
												<h5 class="display-5" >Products Revenue</h5>
												<p>What is your projected product revenue <?php echo $user->f_name . ' ' . $user->l_name ?> ?</p>
												<!-- <img src="<?= asset_url() ?>img/meet_jake/dashboard/d_4.png" width="60%" height="60%" class="img-fluid" alt="jake">-->
											    </div><!-- /.card -->
											    <div class="col-md-3">
													<div class="float-end">
												    	<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#prodModal"><i class="fa fa-info-circle" aria-hidden="true" ></i></button>

													    <button class="btn btn-outline-success" type="button" data-toggle="collapse" aria-expanded="false" aria-controls="product_form" onclick="add_localproduct()" id="btnOpenForm_products"><i class="fa fa-plus"  aria-hidden="true"></i></button>
													    <a href="<?php echo site_url(); ?>Products" class="btn  btn-outline-primary"><i class="fa fa-arrow-right"  aria-hidden="true"></i></a>
													</div><!-- /.float  -->
											    </div><!-- /.col-->
											</div><!-- /.row-->
									    </div>
									    <div class="card-body">
											<div class="row">
											    <div class="col-sm-6">
													<div class="card" style="height: 400px; width: 100%;" >
													    <div class="card-header ">
														<h4 class="my-0 font-weight-normal">Year 1-3 Summary</h4>
													    </div>
													    <div class="card-body">
														<!--<p class="card-text">Who has contributed funds to start the business?</p>
														<p class="card-text">We show a pie chart linked to the Directors and amount contributed.</p>-->
														<!-- ./chart-responsive -->
														<div class="chart-responsive">
														     <canvas id="revenue_canvas" height="129" width="266"></canvas>
														</div><!-- ./chart-responsive -->
													    </div>
													</div>
											    </div>

										    <div class="col-sm-6">
												<div class="card " style="height: 400px; width: 100%;" >
												    <div class="card-header ">
														<h4 class="my-0 font-weight-normal">Year-1 Online Sales  Growth</h4>
													    </div>
													    <div class="card-body">
															<div class="p-1 bg-light border">
															    <!-- ./chart-responsive -->
																	<h1 class="card-title text-center text-primary fs-lg-1 mt-2" id="onlinerevenue_dashboard_total"><?php echo $cur . ' ' . number_format($annual_revenue_yearly1, 0, '.', ','); ?></h1>
															</div> <!-- /.card border -->
																<!-- range slider begins -->
																<div class="col-sm-12 RangeSelectorRevenue">

																    <h3 class="range-value text-center text-primary fs-lg-1 pt-5"><span class="ServiceIncomeRevenue">0</span>%</h3>
																    <input style="background-color: rgba(255, 255, 255, 1.0);color:rgba(0, 0, 0, 1.0); width: 100%;" id="ex16" type="range" min="0" value="0" max="100" class="RangeSelectorRevenue" data-show-value="true" />
																</div> <!-- ./range-slider -->
									                        <p class=" mb-2 mt-2">Your product sales revenue will increases over Year 1 by a % margin</p>
															<div class="float-end p-2">
									                             <button type="button" id="saverevenue" class="btn btn-outline-success"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</button>
															</div>
													    </div>
													</div>
											    </div>
											</div>
									    </div>
									</div>
						        </div>






































					<!--==================================== help modal starts  ========================-->

					<!-- Online Revenue Modal -->
					<div class="modal fade" id="onliModal" tabindex="-1" aria-labelledby="onliModalLabel" aria-hidden="true">
					    <div class="modal-dialog modal-dialog-scrollable modal-xl">
							<div class="modal-content">
							    <div class="modal-header">
									<!--<a href="http://www.squareplans.com/" class="navbar-brand" style="color:rgba(41, 0, 0, 1.0);font-size:30px;font-weight:300; margin-top: 25px;float: left;"><b>Square</b>Plans</a>-->
								<h3 class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:center">
								    <span><img src="<?= asset_url() ?>img/favicons/logo_transparent.png" style="margin-right: 3px; margin-top: -10%; width:60px; height: 60px;  float: center;"/></span>
								    <span style="color:rgba(0, 0, 0, 1.0);font-size:40px;font-weight:100; margin-right: 0px; margin-top: 40px;float: center;">Help</span>
								    <span style="color:rgba(13, 110, 252, 1.0);font-size:40px; margin-top: 40px;float: center;">Center</span>
								</h3>
							    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
								    <div class="modal-body">
									<?php echo view('help_center/dashboard/dashboard_info/dashboard-online'); ?>
								    </div>
								    <div class="modal-footer">
									<p class="float-start"> Did you find this helpful?</p>
									<div class="float-end">
									    <button type="button" class="btn btn-outline-success btn-sm mt-1">I certainly did!</button>
									    <button type="button" class="btn btn-outline-success btn-sm mt-1">I need more info!</button>
									    <button type="button" class="btn btn-outline-success btn-sm mt-1 " data-bs-dismiss="modal"> <i class="fa fa-arrow-left"  aria-hidden="true"></i> Back to my plan</button>
									    <!--<a href="<?php echo site_url(); ?>User_dashboard" class="btn  btn-outline-primary"><span class="fa fa-home"></span>fgsfgsdf</a>-->
									</div>
							    </div>
							</div>
					    </div>
					</div>
