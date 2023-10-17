
<div class="card text-left">
    <div class="card-header ">
		<div class="row g-0">
		    <div class="col-md-9">
				  <h5 class="display-12">Business Narrative</h5>
	            </div><!-- /.card -->
			    <div class="col-md-3">
				    <div class="float-end">
		    		<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#narModal"><i class="fa fa-info-circle" aria-hidden="true" ></i></button>
					<a href="<?php echo site_url(); ?>Planning_setup" target="" class="btn btn-outline-primary"><i class="fa fa-pencil" aria-hidden="true"></i></a>
				</div>
		    </div><!-- /.col-->
		</div><!-- /.col-->
    </div>
    <!--<h4 class="font-italic mb-4">Business Narrative</h4>-->
    <div class="card-body">
     <div>
		<div class="row p-0">
		    <div class="col-md-12">
		    	<h4 class="card-title">What is a Business Narrative? </h4>
					<h6>A Business Narrative <b>(Pitch)</b> tells the story of your business ideas and concepts. It outlines who you are, and how you intend to grow a successful business.
					    It should be expressed in a captivating way in order to entice your investors or financial organizations to support you in your new business venture.
					</h6>
					<h4 class="pt-2"> Key component's of a Business Narrative</h4>
					<ul>
					    <li>Executive Summary</li>
					    <li>Mission Statement</li>
					    <li>Vision Statement </li>
					    <li>Goals and Objectives</li>
					    <li>Products and Services</li>
					    <li>S.W.O.T. Analysis</li>
					    <li>Financial Projections</li>
					</ul>
				    </div><!-- /.col-->
				</div><!-- /.row-->
		    </div><!-- /.header-->
	    </div>
	</div>
	<!--==================================== help modal starts  ========================-->
	<!-- Narrative Modal -->
	<div class="modal fade" id="narModal" tabindex="-1" aria-labelledby="narModalLabel" aria-hidden="true">
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
					<?php echo view('help_center/dashboard/dashboard_info/dashboard-narrative'); ?>
				    </div>
					    <div class="modal-footer">
						<p class="float-start"> Did you find this helpful?</p>
						<div class="float-end">
						    <button type="button" class="btn btn-outline-success btn-sm mt-1">I certainly did!</button>
						    <button type="button" class="btn btn-outline-success btn-sm mt-1">I need more info!</button>
						    <button type="button" class="btn btn-outline-success btn-sm mt-1 " data-bs-dismiss="modal"><i class="fa fa-arrow-left" aria-hidden="true" ></i> Back to my plan</button>
						    <!--<a href="<?php echo site_url(); ?>User_dashboard" class="btn  btn-outline-primary"><span class="fa fa-home"></span>fgsfgsdf</a>-->
						</div>
				    </div>
				</div>
		    </div>
		</div>



