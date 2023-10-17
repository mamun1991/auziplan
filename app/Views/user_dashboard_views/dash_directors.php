
		   			 <div class="card-header">


						<div class="row g-0">
							<div class="col-md-6 col-sm-12">
								<h5>Company Directors</h5>
							</div><!-- /.card -->
							<div class="col-md-6 col-sm-12">
								<div class="float-end">
									<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#dirModal"><i class="fa fa-info-circle"  aria-hidden="true"></i></button>
									<button class="btn btn-outline-success add-director pl-1" type="button" onclick="new_director()" toogle="" id="btnOpenForm_director"><i class="fa fa-plus" aria-hidden="true"></i></button>
									<a href="<?php echo site_url(); ?>Startup" class="btn btn btn-outline-primary"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
								</div><!-- /.float-->
							</div><!-- /.col-->
						</div><!-- /.row-->

					</div><!-- /.header-->


					<div class="card-body">
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<div class="card">

									<div class="card-header">
										<h4 class="my-0 font-weight-normal">Owners Contributions</h4>
									</div>

									<div class="card-body">
										<div style="overflow-y: scroll;">
											<!-- chart-responsive begins-->
											<div class="chart-responsive" id="director_chartbox">
												<!-- <p class=" p-2">Who's eating the pie?</p> -->
												<canvas id="director_canvas" height="380" width="761"> </canvas>
											</div> <!-- ./chart-responsive ends-->
										</div><!-- /.card scroll-->
									</div><!-- /.card body-->

								</div><!-- /.card -->
							</div><!-- /.col-->


							<div class="col-md-6 col-sm-12">
								<div class="card">

									<div class="card-header">
										<h4 class="my-0 font-weight-normal">Total Contributions</h4>
									</div>

									<div class="card-body">
										<!--<p class="card-text">How much cash has been raised to start?</p>-->
										<!--<p class="font-italic mb-4">How much cash has been raised to start the business?</p>-->
										<h1 class="card-title text-center text-primary fs-lg-1 m-3" id="director_dashboard_total"><?php echo $cur . ' ' . number_format($dir_total, 0, '.', ','); ?></h1>
									</div><!-- /.card body-->

								</div><!-- /.card -->
							</div><!-- /.col-->



						</div><!-- /.row-->
					</div><!-- /.card body-->
		


			<!--==================================== help modal starts  ========================-->
			<!-- Directors Modal -->
			<div class="modal fade" id="dirModal" tabindex="-1" aria-labelledby="dirModalLabel" aria-hidden="true">
			    <div class="modal-dialog modal-dialog-scrollable modal-xl animated">
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
								<?php echo view('help_center/dashboard/dashboard_info/dashboard-directors'); ?>
					    </div>
					    <div class="modal-footer">
						<p class="float-start"> Did you find this helpful?</p>
							<div class="float-end">
							    <button type="button" class="btn btn-outline-success btn-sm mt-1">I certainly did!</button>
							    <button type="button" class="btn btn-outline-success btn-sm mt-1">I need more info!</button>
							    <button type="button" class="btn btn-outline-success btn-sm mt-1 " data-bs-dismiss="modal"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back to my plan</button>
							    <!--<a href="<?php echo site_url(); ?>User_dashboard" class="btn  btn btn-outline-primary"><span class="fa fa-home"></span>fgsfgsdf</a>-->
							</div><!-- /.float end-->
					    </div><!-- /.modal footer-->
					</div><!-- /.modal content-->
			    </div><!-- /.modal dialog-->
			</div><!-- /.modal-->