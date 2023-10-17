
<div class="card text-left">
    <div class="card-header ">
		<div class="row g-0">
		    <div class="col-md-6">
		        <h5 class="display-5">Company Investors</h5>

		         <!--<img src="<?= asset_url() ?>img/meet_jake/dashboard/d_9.jpg" width="60%" height="60%" class="img-fluid" alt="jake">-->
			    </div><!-- /.card -->
				    <div class="col-md-6">
						<div class="float-end">
						<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#invModal"><i class="fa fa-info-circle" aria-hidden="true" ></i></button>
					    <button class="btn btn-outline-success" type="button" onclick="add_investor()" id="btnOpenForm_investor"><i class="fa fa-plus" aria-hidden="true"></i></button>
					    <a href="<?php echo site_url(); ?>Startup#startupstep2" class="btn btn-outline-primary "><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
					</div>
			    </div><!-- /.col-->
			</div><!-- /.row-->
	    </div>
	    <div class="card-body">
			<div class="row">
			    <div class="col-sm-6">
					<div class="card ">
					    <div class="card-header ">
							<h4 class="my-0 font-weight-normal">Investor's Contributions</h4>
					    </div>
					    <div class="card-body">
							<div style="overflow-y: scroll;">
								<!-- chart-responsive begins-->
								<div class="chart-responsive" id="investor_chartbox">
									<!-- <p class=" p-2">Who's eating the pie?</p> -->
								    <canvas id="investor_canvas" height="40" width="266"> </canvas>
								</div> <!-- ./chart-responsive ends-->
						    </div><!-- /.card body-->
						</div>
					</div><!-- /.card -->
			    </div><!-- /.col-->
				 <div class="col-sm-6">
					<div class="card">
					    <div class="card-header ">
							<h4 class="my-0 font-weight-normal">Total Invetment</h4>
					    </div>
						    <div class="card-body">
								<!--<p class="card-text">How much cash has been raised to start?</p>-->
								<!--<p class="font-italic mb-4">How much cash has been raised to start the business?</p>-->
								<h1 class="card-title text-center text-primary fs-lg-1 m-3" id="investor_dashboard_total"><?php echo $cur . ' ' . number_format($inv_total, 0, '.', ','); ?></h1>
							    </div><!-- /.card body-->
							</div><!-- /.card -->
					    </div><!-- /.col-->
					</div><!-- /.row-->
			    </div><!-- /.card body-->
			</div><!-- /.card-->


			<!--==================================== help modal starts  ========================-->
			<!-- Investors Modal -->
			<div class="modal fade" id="invModal" tabindex="-1" aria-labelledby="invModalLabel" aria-hidden="true">
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
						<?php echo view('help_center/dashboard/dashboard_info/dashboard-investors'); ?>
					    </div>
					    <div class="modal-footer">
						<p class="float-start"> Did you find this helpful?</p>
						<div class="float-end">
						    <button type="button" class="btn btn-outline-success btn-sm mt-1">I certainly did!</button>
						    <button type="button" class="btn btn-outline-success btn-sm mt-1">I need more info!</button>
						    <button type="button" class="btn btn-outline-success btn-sm mt-1 " data-bs-dismiss="modal"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back to my plan</button>
						    <!--<a href="<?php echo site_url(); ?>User_dashboard" class="btn  btn-outline-primary"><span class="fa fa-home"></span>fgsfgsdf</a>-->
						</div><!-- /.float end-->
				    </div><!-- /.modal footer-->
				</div><!-- /.modal content-->
		    </div><!-- /.modal dialog-->
		</div><!-- /.modal-->