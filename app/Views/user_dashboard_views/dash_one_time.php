


			<div class="container my-3">
			  <div class="card">
			    <div class="card-header">
			      <!-- START TABS DIV -->
			      <div class="tabbable-responsive">
			        <div class="tabbable">
			          <ul class="nav nav-tabs" id="myTab_3" role="tablist">
			            <li class="nav-item">
			              <a class="nav-link active" id="first_3-tab" data-toggle="tab" href="#first_3" role="tab" aria-controls="first_3" aria-selected="true">One-Time Costs</a>
			            </li>
			            <li class="nav-item">
			              <a class="nav-link" id="second_3-tab" data-toggle="tab" href="#second_3" role="tab" aria-controls="second_3" aria-selected="false">PP&E</a>
			            </li>
			            <li class="nav-item">
			              <a class="nav-link" id="third_3-tab" data-toggle="tab" href="#third_3" role="tab" aria-controls="third_3" aria-selected="false">Buildings</a>
			            </li>
			          </ul>
			        </div>
			      </div>
			    </div>
			    
			    
			    
			    
			    
			    
			    
			    
			    
			    
			    <div class="card-body">
			      <div class="tab-content">
			        <div class="tab-pane fade show active" id="first_3" role="tabpanel" aria-labelledby="first_3-tab">

						<div class="card text-left">
						    <div class="card-header">
								<div class="row g-0">
								    <div class="col-md-9">
									    <h5 class="display-5">One-Time Costs</h5>
							    		<p>What are your initial startup costs <?php echo $user->f_name . ' ' . $user->l_name ?>?</p>
									    <!-- <img src="<?= asset_url() ?>img/meet_jake/dashboard/d_3.png" width="60%" height="60%" class="img-fluid" alt="jake">-->
									    </div><!-- /.card -->
									    <div class="col-md-3">
											<div class="float-end ">
												<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#otcModal"><span class="fa fa-info-circle" aria-hidden="true"></span></button>
											    <button class="btn btn-outline-success" type="button" onclick="add_onetimecost('onetimecost')" id="btnOpenForm_onetime" );"><i class="fa fa-plus" aria-hidden="true"></i></button>
											    <a href="<?php echo site_url(); ?>Startup#startupstep4" class="btn btn-outline-primary" onclick="setRadioOptions('onetimecost')"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
											</div><!-- /.float  -->
									    </div><!-- /.col-->
									</div><!-- /.col-->
							    </div>
							    <div class="card-body">
									<div class="row">
									    <div class="col-sm-6">
											<div class="card " style="height: 400px; width: 100%;">
										    <div class="card-header ">
											<h4 class="my-0 font-weight-normal">Costs Summary</h4>
										    </div>
										    <div class="card-body">
											<!--<p class="card-text">Who has contributed funds to start the business?</p>
											<p class="card-text">We show a pie chart linked to the Directors and amount contributed.</p>-->
											<div class="chart-responsive" id="onetimecost_chartbox">
											    <canvas id="oneTimeCost_canvas" height="200" width="200"> </canvas>
											</div>
									    </div>
									</div>
							    </div>
							    <div class="col-sm-6">
									<div class="card " style="height: auto; width: 100%;">
									    <div class="card-header ">
										<h4 class="my-0 font-weight-normal">Total Startup Cost</h4>
								         </div>
										    <div class="card-body">
											<!--<p class="card-text">How much will you spend on startup cost?</p>-->
											<!--<p class="font-italic mb-4">How much cash has been raised to start the business?</p>-->
											<h1 class="card-title text-center text-primary fs-lg-1 m-2" id="onetimecost_dashboard_total"><?php echo $cur . ' ' . number_format($oneTimecost_total_dashboard, 0, '.', ','); ?></h1>

									    </div>
									</div>
							    </div>
							</div>

							
					    </div>
					</div>





		        </div>
		        <div class="tab-pane fade" id="second_3" role="tabpanel" aria-labelledby="second_3-tab">
				  <?php echo view('user_dashboard_views/dash_plant_equipment'); ?>
		        </div>
		        <div class="tab-pane fade" id="third_3" role="tabpanel" aria-labelledby="third_3-tab">
		         <?php echo view('user_dashboard_views/dash_land_building'); ?>
		        </div>
		      </div>
		      <!-- END TABS DIV -->
		    </div>

		  </div>
		</div>
		<!--==================================== help modal starts  ========================-->
		<!-- One-Time-Costs Modal -->
		<div class="modal fade" id="otcModal" tabindex="-1" aria-labelledby="otcModalLabel" aria-hidden="true">
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
							<?php echo view('help_center/dashboard/dashboard_info/dashboard-one-time-costs'); ?>
					    </div>
					    <div class="modal-footer">
						<p class="float-start"> Did you find this helpful?</p>
						<div class="float-end">
						    <button type="button" class="btn btn-outline-success btn-sm mt-1">I certainly did!</button>
						    <button type="button" class="btn btn-outline-success btn-sm mt-1">I need more info!</button>
						    <button type="button" class="btn btn-outline-success btn-sm mt-1 " data-bs-dismiss="modal"> <i class="fa fa-arrow-left" aria-hidden="true" aria-hidden="true"></i> Back to my plan</button>
						    <!--<a href="<?php echo site_url(); ?>User_dashboard" class="btn  btn-outline-primary"><span class="fa fa-home"></span>fgsfgsdf</a>-->
						</div>
				    </div>
				</div>
		    </div>
		</div>