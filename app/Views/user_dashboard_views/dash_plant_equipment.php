
		<div class="card text-left">
		    <div class="card-header ">
				<div class="row g-0">
				    <div class="col-md-9">
		    	        <h5 class="display-5">Office Equipment</h5>
	    	        	<p>How much will you spend on office equipment <?php echo $user->f_name . ' ' . $user->l_name ?>?</p>
					     <!--   <img src="<?= asset_url() ?>img/meet_jake/dashboard/d_4.png" width="60%" height="60%" class="img-fluid" alt="jake">-->
				    </div><!-- /.card -->
					    <div class="col-md-3">
							<div class="float-end">
							    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#pleqModal"><i class="fa fa-info-circle" aria-hidden="true"></i></button>
							    <button class="btn btn-outline-success" type="button" onclick="add_onetimecost('plant_equipment')" id="btnOpenForm_onetime"> <i class="fa fa-plus"  aria-hidden="true"></i></button>
							    <a href="<?php echo site_url(); ?>Startup#startupstep4" class="btn btn-outline-primary" onclick="setRadioOptions('plant_equipment')"><i class="fa fa-arrow-right"  aria-hidden="true"></i></a>
							</div><!-- /.float  -->
		             </div><!-- /.col-->
				</div><!-- /.row-->
		    </div>
		    <div class="card-body">
				<div class="row">
				       <div class="col-md-6 col-sm-12">
						<div class="card " style="height: 400px; width: 100%;" >
						    <div class="card-header ">
								<h4 class="my-0 font-weight-normal">Contributions</h4>
						    </div>
						    <div class="card-body">
								<!--<p class="card-text">Who has contributed funds to start the business?</p>
								<p class="card-text">We show a pie chart linked to the Directors and amount contributed.</p>-->
							<div class="chart-responsive" id="plantEquipment_chartbox">
							    <canvas id="plandAndEquipment_canvas" height="150" width="150"></canvas>
							</div>
					    </div>
					</div>
			    </div>
			     <div class="col-md-6 col-sm-12">
					<div class="card " style="height: auto; width: 100%;">
					    <div class="card-header ">
						<h4 class="my-0 font-weight-normal"> Acquisition Cost Summary</h4>
					    </div>
					    <div class="card-body">
						<!--<p class="card-text">How much cash has been raised to start?</p>-->
						<!--<p class="font-italic mb-4">How much cash has been raised to start the business?</p>-->
						<h1 class="card-title text-center text-primary fs-lg-1 m-2" id="plantequipment_dashboard_total"><?php echo $cur . ' ' . number_format($pe_total_dashboard, 0, '.', ','); ?></h1>
				    </div>
				</div>
		    </div>
		</div>
    </div>
</div>
<!--==================================== help modal starts  ========================-->
<!-- Plant and Equipment Modal -->
<div class="modal fade" id="pleqModal" tabindex="-1" aria-labelledby="pleqModalLabel" aria-hidden="true">
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
				<?php echo view('help_center/dashboard/dashboard_info/dashboard-plant-equipment'); ?>
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