				<div class=" card text-left">

				    <div class="card-header">

						<div class="row g-0">

						    <div class="col-md-9">
								<h5 class="display-5">Key Personnel</h5>
								<p>Who are your key personnle <?php echo $user->f_name . ' ' . $user->l_name ?> ?</p>
								<!--<img src="<?= asset_url() ?>img/meet_jake/dashboard/d_4.png" width="60%" height="60%" class="img-fluid" alt="jake">-->
						    </div><!-- /.card -->

						    <div class="col-md-3">
								<div class="float-end">
							    	<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#peoModal"><i class="fa fa-info-circle" aria-hidden="true" ></i></button>
								    <button class="btn   btn-outline-success" onclick="add_person()"><i class="fa fa-plus"></i></button>
								    <a href="<?php echo site_url(); ?>People" class="btn  btn-outline-primary"><span class="fa fa-arrow-right" aria-hidden="true"></span></a>
								</div><!-- /.float  -->
						    </div><!-- /.col-->

						</div><!-- /.row-->

					</div><!-- /.card-header-->


						<div class="row p-4">
						     <div class="col-sm-6">
								<div class="card">
								    <div class="card-header">
										<h4 class="my-0 font-weight-normal">Year 1-3 Summary</h4>
									</div>
								    <div class="card-body">
									<!--<h5 class="card-title">Special title treatment</h5>-->
									<!-- ./chart-responsive -->
									<div class="chart-responsive">
									    <!--<p class=" p-2">Total Expenses - Year 1 - 3</p>-->
									    <canvas id="ChartDisplay" height="129" width="266"></canvas>
									</div><!-- ./chart-responsive -->
										<p class="card-text text-center pt-5">Total Payroll Liabilities Year 1-3</p>
			                                <table id="tablepeoplesummary" class="table table-bordered">
												<thead>
												    <tr>
													<th>
													</th>
													<th>Year 1
													</th>
													<th>Year 2
													</th>
													<th>Year 3
													</th>
												    </tr>
												</thead>
												<tbody>
											</tbody>
												<tfoot>
												    <tr style="background-color: #d3d3d3;">
													<th style="text-align: right;">Total
													</th>
													<th class="SumYTotal1">0
													</th>
													<th class="SumYTotal2">0
													</th>
													<th class="SumYTotal3">0
													</th>
												    </tr>
												</tfoot><!-- /.footer -->
										    </table><!-- /.table -->
									    </div>
									</div>
							    </div><!-- /. col  -->


							       <div class="col-sm-6">

									<div class="card">
									    <div class="card-header">
											<h4 class="my-0 font-weight-normal">Year-1 Payroll Liabilites</h4>
								        </div>
									    <div class="card-body">
											<div class="p-1 bg-light border">
												<!--<h5 class="card-title">Special title treatment</h5>-->
												<h1  class="card-title text-center text-primary fs-lg-1 mt-2"  id="people_dashboard_total">  <?php echo $cur . ' ' . number_format($grandplyear1, 0, '.', ','); ?></h1>
											</div>
											<!-- ./range-slider -->
											    <div class="col-sm-12 people_RangeSelectorInput">
												<h3 class="range-value  text-center text-primary fs-lg-1"> <span class="ServiceIncomePerson">0</span>%</h3>
												<input style="background-color: rgba(255, 255, 255, 1.0);color:rgba(0, 0, 0, 1.0); width: 100%;" id="ex12" type="range" min="0" max="100" value="0" class="people_RangeSelectorInput" data-show-value="true" />
												<!--Button Starts -->
									        </div>
									        <!-- ./range-slider -->
                                                <p class="mb-2 mt-2">Your payroll liabilities will increases over Year 1 by a % margin</p>
											<div class="float-end p-2">
	                                                    <button type="button" id="save_people" class="btn btn-outline-success"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</button>
											</div>
											<br><br><br>
											<div class="row">
												<div style="overflow-y: scroll; height:300px; pt-5">
													<div class="p-2 bg-light border">
													    <div class="chart-responsive" id="people_chart_box">
														<canvas id="people_canvas" height="10%" width="100%"> </canvas>
												    </div>
												</div>
											</div><!-- /. row  -->
									    </div>
									</div>
							    </div><!-- /. col  -->

							</div><!-- /. row  -->
						</div><!-- /. row  -->
				    </div>
				</div>
			<!--==================================== help modal starts  ========================-->
			<!-- People Modal -->
			<div class="modal fade" id="peoModal" tabindex="-1" aria-labelledby="peoModalLabel" aria-hidden="true">
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
						<?php echo view('help_center/dashboard/dashboard_info/dashboard-people'); ?>
				    </div>
					    <div class="modal-footer">
						<p class="float-start"> Did you find this helpful?</p>
						<div class="float-end">
						    <button type="button" class="btn btn-outline-success btn-sm mt-1">I certainly did!</button>
						    <button type="button" class="btn btn-outline-success btn-sm mt-1">I need more info!</button>
						    <button type="button" class="btn btn-outline-success btn-sm mt-1 " data-bs-dismiss="modal"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back to my plan</button>
						    <!--<a href="<?php echo site_url(); ?>User_dashboard" class="btn  btn-outline-primary"><span class="fa fa-home"></span>fgsfgsdf</a>-->
						</div>
				    </div>
				</div>
		    </div>
		</div>