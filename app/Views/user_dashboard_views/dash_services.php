
		<div class="card text-left">
		    <div class="card-header ">
				<div class="row g-0">
				    <div class="col-md-9">
			    	    <h5 class="display-5">Service Revenue</h5>
				    	<p>What is your projected service revenue <?php echo $user->f_name . ' ' . $user->l_name ?> ?</p>
					 <!-- <img src="<?= asset_url() ?>img/meet_jake/dashboard/d_4.png" width="60%" height="60%" class="img-fluid" alt="jake">-->
				    </div><!-- /.card -->
					    <div class="col-md-3">
							<div class="float-end ">
					    		<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#serModal"><i class="fa fa-info-circle"  aria-hidden="true"></i></button>
							    <button class="btn btn-outline-success" type="button" data-toggle="modal" aria-expanded="false" aria-controls="importform" onclick="add_service()" id="btnOpenForm_service"><i class="fa fa-plus"  aria-hidden="true"></i></button>
							    <a href="<?php echo site_url(); ?>Service_setup" class="btn  btn-outline-primary"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
							</div><!-- /.float  -->
					    </div><!-- /.col-->
					</div><!-- /.col-->
			    </div>
			    <div class="card-body">
					<div class="row">
					    <div class="col-sm-6">
							<div class="card " style="height: 400px; width: 100%;" >
							    <div class="card-header ">
								<h4 class="my-0 font-weight-normal">Year 1-3 Summary</h4>
						    </div>
						    <div class="card-body">
							    <!--<p class="card-text">Who has contributed funds to start the business?</p>
								<p class="card-text">We show a pie chart linked to the Directors and amount contributed.</p>-->

									<!-- ./chart-responsive -->
							<div class="chart-responsive">
							    <canvas id="service_canvas" height="129" width="266"></canvas>
							</div><!-- ./chart-responsive -->
					    </div>
					</div>
			    </div>
			    <div class="col-sm-6">
					<div class="card " style="height: 400px; width: 100%;" >
					    <div class="card-header ">
						<h4 class="my-0 font-weight-normal">Year-1 Service Revenue Growth</h4>
				        </div>
						    <div class="card-body">
							<div class="p-1 bg-light border">
							    <!-- ./chart-responsive -->
							    <h1 class="card-title text-center text-primary fs-lg-1 mt-2" id="servicerevenue_dashboard_total"><?php echo $cur . ' ' . number_format($serviceyear, 0, '.', ','); ?></h1>
							</div> <!-- /.card border -->
							<!-- ./range-slider -->
							<div class="col-md-12 col-sm-12 col-lg-12 RangeSelectorServices">

							    <h3 class="range-value text-center text-primary fs-lg-1 pt-5"> <span class="ServiceIncomeService">0 </span>% </h3>
							    <input style="background-color: rgba(255, 255, 255, 1.0);color:rgba(0, 0, 0, 1.0); width: 100%;" id="ex15" type="range" min="0" value="0" max="100" class="RangeSelectorServices" />
							</div><!-- ./range-slider -->
								<p class=" mb-2 mt-2">Your service revenue will increases over Year 1 by a % margin</p>
								<div class="float-end p-2">
                                    <button type="button" id="saveservice" class="btn btn-outline-success"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</button>
							</div>
					    </div>
					</div>
			    </div>
			</div>
	    </div>
	</div>


		<!--==================================== help modal starts  ========================-->
		<!-- Service Revenue Modal -->
		<div class="modal fade" id="serModal" tabindex="-1" aria-labelledby="serModalLabel" aria-hidden="true">
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
					<?php echo view('help_center/dashboard/dashboard_info/dashboard-service'); ?>
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