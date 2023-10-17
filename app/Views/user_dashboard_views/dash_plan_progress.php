


<div class="container my-0">
  <div class="card">
    <div class="card-header">
	      <!-- START TABS DIV -->
	      <div class="tabbable-responsive">
	        <div class="tabbable">
	          <ul class="nav nav-tabs" id="myTab_1" role="tablist">
	            <li class="nav-item">
	              <a class="nav-link active" id="first_1-tab" data-toggle="tab" href="#first_1" role="tab" aria-controls="first_1" aria-selected="true">Plan Progress</a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" id="second_1-tab" data-toggle="tab" href="#second_1" role="tab" aria-controls="second_1" aria-selected="false">Business Narrative</a>
	            </li>

	          </ul>
	        </div>
	      </div>
	    </div>
	    <div class="card-body">
	      <div class="tab-content">
	        <div class="tab-pane fade show active" id="first_1" role="tabpanel" aria-labelledby="first_1-tab">
					<div class="card text-left">
					    <div class="card-header ">
							<div class="row g-0">
							      <div class="col-sm-12 col-md-9">
								  <h5 class="display-5">Plan Progress</h5>
						            <!-- <img src="<?= asset_url() ?>img/meet_jake/dashboard/d_1.jpg" width="60%" height="60%" class="img-fluid" alt="jake">-->
							    </div><!-- /.card -->
					          <div class="col-sm-12 col-md-3">
						            <div class="float-end">
						            	<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#progModal"><i class="fa fa-info-circle" aria-hidden="true"></i></button>
										<button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary"><i class="fa fa-arrow-down" aria-hidden="true"></i></button>
									</div>
					            </div><!-- /.col-->
							</div><!-- /.col-->
					    </div>

					    <div class="card-body">
						<!--==================================== net profit projection collapse starts  ========================-->
						<div class="collapse" id="collapseExample">
						    <div class=" mt-2">
								<h4> What is your projected net profit percent <?php echo $user->f_name; ?>?</h4>
								<div class="container">
								    <!-- Popover #1 -->
								    <a class="btn btn-outline-info" data-html="true" data-bs-placement="auto" data-popover-content="#np" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true"></i></a>
								    <!-- Content for Popover #1 -->
								    <div class="hidden d-none" id="np">
										<div class="popover-heading">
										    Help Center
										</div>
										<div class="popover-body">
										    <div class="">
											<!--<h5 class="card-title">Special title treatment</h5>-->
											<h5 class="">Net Profit Projection</h5>
											<div class="">
											    <h5 class="card-title">What is a business narrative?</h5>
											    <!--<img src="<?= asset_url() ?>img/meet_jake/dashboard/d_1.jpg" width="40%" height="40%" class="img-fluid" alt="jake">-->
											    <p class="card-text">
												So you have a great idea for a new business and you wan to know if you cam make some money right.
											    </p>
											    <p class="card-text">
												In this stage , you will write your business narrative.
											    </p>
											</div><!-- /.card body  -->
									    </div><!-- /.card body  -->
									</div><!-- /.popover body  -->
							    </div><!-- /.hidden -->



							    <!--==================================== net profit projection table starts  ========================-->
							    <div class="row ">
									<div class="col-md-8 col-md-offset-2">
									    <div class="table-responsive">
											<table class="table table-hover table-striped table-condensed table-bordered table-responsive" style="table-layout: fixed; width: 100%;">
											    <thead>
												<tr>
												    <th>Account</th>
												    <th>Projection</th>
												    <th>My Plan</th>
												    <th>Variance</th>
												</tr>
											    </thead><!-- /.table head-->
											    <tbody>
												<tr>
												    <td>Gross Sales </td>
												    <td>100%</td>
												    <td>100%</td>
												    <td>100%</td>
												</tr>
												<tr>
												    <td>Cost of goods </td>
												    <td><input type="text" name="costOfGoods" type="text" value="" placeholder="30%" class="form-control" /></td>
												    <td>30%</td>
												    <td>0%</td>
												</tr>
												<tr>
												    <td>Gross Profit </td>
												    <td>70%</td>
												    <td>70%</td>
												    <td>0%</td>
												</tr>
												<tr>
												    <td>Payroll Expenses </td>
												    <td><input type="text" name="payroll" type="text" value="" placeholder="40%" class="form-control" /></td>
												    <td>40%</td>
												    <td>0%</td>
												</tr>
												<tr>
												    <td>Total Expenses </td>
												    <td><input type="text" name="total_exp" type="text" value="" placeholder="40%" class="form-control" /></td>
												    <td>40%</td>
												    <td>0%</td>
												</tr>
												<tr>
												    <td>EBITDA</td>
												    <td><input type="text" name="ebitda" type="text" value="" placeholder="40%" class="form-control" /></td>
												    <td>40%</td>
												    <td>0%</td>
												</tr>
												<tr>
												    <td>EBIT </td>
												    <td><input type="text" name="ebit" type="text" value="" placeholder="40%" class="form-control" /></td>
												    <td>40%</td>
												    <td>0%</td>
												</tr>
												<tr>
												    <td>Net Profit before Tax Percentage</td>
												    <td><input type="text" name="net_prpfot_before_tax" type="text" value="" placeholder="10%" class="form-control" /></td>
												    <td>10%</td>
												    <td>0%</td>
												</tr>
												<tr>
												    <td>Tax Expense </td>
												    <td><input type="text" name="tax-expense" type="text" value="" placeholder="20%" class="form-control" /></td>
												    <td>20%</td>
												    <td>0%</td>
												</tr>
												<tr>
												    <td>Net Profit after Tax Percentage </td>
												    <td><input type="text" name="netProfit" type="text" value="" placeholder="20%" class="form-control" /></td>
												    <td>20%</td>
												    <td>0%</td>
												</tr>
												<tr class="mt-5" style="background-color: rgba(13, 243, 225, 1.0);">
												    <td id="total_manual_margin"> Total</td>
												    <td>100%</td>
												    <td>100%</td>
												    <td>100%</td>
												</tr>

												<tr class="mt-5" style="background-color: rgba(24, 242, 242, 0.20);">
												    <td id="total_manual_margin"> Variance</td>
												    <td>100%</td>
												    <td>100%</td>
												    <td>100%</td>
												</tr>

											    </tbody><!-- /.table body-->
											</table><!-- /.table -->
											<button class="btn btn-outline-success mt-3 float-end" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fa fa-close fa-1x"  aria-hidden="true"></i> Okay I got it</button>
										    </div><!-- /.div table -->
										</div><!-- /.col-8-->
								    </div><!-- /.row-->
								</div><!-- /.container-->
						    </div><!-- /.card body-->
						</div><!-- /.collapse-->
						<div class="row mt-2">

					    <div style="min-height: auto;">
							<div class="collapse collapse-horizontal" id="collapseSummary">
							    <div class="" style="width: 100%;">
									<div class="container mt-2">
								        <div class="box-body">
											<h4 class="my-0 font-weight-normal mt-2"><strong>Revenue</strong><small></small></h4>
											<div>
											    <table id="" class="table  table-responsive" cellspacing="0" width="100%">
												<thead>
												    <tr>
													<th colspan='2'></th>
												    </tr>
												</thead>
												<tbody>
												    <tr>
														<td width='80%'>Products Revenue</td>
													<td>
													    <?php echo $cur . ' ' . number_format($cogproductyear1, 2, '.', ','); ?>
													</td>
												    </tr>
												    <tr>
													<td width='80%'>Service Revenue</td>
													<td>
													    <?php echo $cur . ' ' . number_format($serviceyear, 2, '.', ','); ?>
													</td>
												    </tr>
												    <tr>
													<td width='80%'>Online Shop Revenue</td>
													<td>
													    <?php echo $cur . ' ' . number_format($annual_revenue_yearly1, 2, '.', ','); ?>
													</td>
												    </tr>
												    <!--<tr>
													<td width='80%'>Loan Amount</td>
													<td>
													</td>
												    </tr>-->
												    <tr style="background-color: rgba(13, 110, 253, 0.10);">
													<th width='80%'>Total cash revenue</th>
													<th>
													    <?php echo $cur . ' ' . number_format(((int) $data['everydata'][2][''] + (int) $cogproductyear1 + (int) $serviceyear + (int) $annual_revenue_yearly1), 2, '.', ','); ?>
													</th>
												    </tr>
												</tbody>
										    </table>
										    <div id="summary_div">
									    </div>
										    <div><button class="btn btn-outline-success mt-3 mb-2 float-end" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary"><i class="fa fa-close fa-1x"  aria-hidden="true"></i> Okay I got it</button>
											<!-- /.box-body -->
									    </div>
									</div><!-- / -->
							    </div><!-- /.startup-costs-summary -->
							</div><!-- /.container -->
					    </div>
					</div>
			    </div>
			</div><!-- /.row -->
			<!--==================================== plan progress starts  ========================-->
			<div class="row mt-2">

			    <div class="col-sm-12 col-md-6">
					<div class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0); height: 250px;">
					    <div class="">
						<!--<h4 class="my-0 font-weight-normal">Plan Progress</h4>-->
					    </div>
					    <div class="">
						<!--<p class="card-text pt-5">Your business plan has been completed by:</p>-->
						<!--<p class="card-text">We show a pie chart linked to the Directors and amount contributed.</p>-->
						<h1 class="text-center"  style="color:rgba(13, 110, 253, 0.0); color:rgba(13, 110, 253, 1.0); font-size:80px;font-weight:600px; text-align:center"> <?= $progress ?>%<?php echo $is_localproduct; ?></h1>
							<div class="pt-4">
							    <div class="progress" style="background-color: rgba(13, 110, 253, 1.0);color:rgba(0, 0, 0, 0.0); width: 100%; height:70px">
									<div id="progressBar" class="progress-bar_1 bg-info progress-bar-animated" role="progressbar" aria-valuenow="<?= $progress ?>" aria-valuemin="0" aria-valuemax="100"></div>
							    </div>
							</div>
			            </div>
					</div>
	            </div>
			     <div class="col-sm-12 col-md-6">
					<div class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0); height: 250px;">
					    <div class="">
						<!--<h4 class="my-0 font-weight-normal">Completed Stages</h4>-->
				    </div>
					    <div class="">

						<div class="container mt-0 pt-2">
						    <div class="row text-left">
							<labal><?php {
								echo '<span style="color:rgba(13, 110, 253, 1.0);text-align:left;font-weight:bold;line-height: 200%; margin-left:0%;">&nbsp;&nbsp;&nbsp;&nbsp;&#10003;Setup</span>';
								echo "";
							    }
							    ?>
							</labal><!-- /.label -->
							<br>
							<!-- brainstorming starts progress 20% -->
							<labal><?php
							    $check = "checked";
							    if ($plan == $check) {
								echo '<span style="color:rgba(13, 110, 253, 1.0); font-weight:bold; margin-left:0%; line-height: 400%;">&nbsp;&nbsp;&nbsp;&nbsp;&#10003; Narrative</span>';
								echo "";
							    } else {
									echo '<span style="color:grey; text-align:left;margin-left:0%;line-height: 200%;">Stage 2 &nbsp;&nbsp;&nbsp;&nbsp;&#9744; Narrative</span>';
							    }
							    ?>
							</labal>
							<br>
								<!-- startup starts progress 20% -->
								<labal><?php
								    $check = "checked";
								    if ($expe == $check) {
									echo '<span style="color:rgba(13, 110, 253, 1.0); ;margin-left:0%;font-weight:bold;line-height: 400%;"> &nbsp;&nbsp;&nbsp;&nbsp;&#10003; Startup</span>';
									echo "";
								    } else {
									echo '<span style="color:grey; text-align:left;margin-left:0%;line-height: 200%;">Stage  2 &nbsp;&nbsp;&nbsp;&nbsp;&#9744; Startup</span>';
								    }
								    ?>
								</labal><!-- /.label -->
								<!-- /.label -->
								<br>
								<!-- revenue streams starts progress 20% -->
								<labal><?php
								    $check = "checked";
								    if ($rem == $check) {
									echo '<span style="color:rgba(13, 110, 253, 1.0); margin-left:0%; font-weight:bold; line-height: 200%;">&nbsp;&nbsp;&nbsp;&nbsp;&#10003; Revenue</span>';
									echo "";
								    } else {
									echo '<span style="color:grey; text-align:left;;margin-left:0%; line-height: 200%;">Stage 3 &nbsp;&nbsp;&nbsp;&nbsp;&#9744; Revenue</span>';
								    }
								    ?>
								</labal><!-- /.label -->
								<br>
										<!-- people starts progress 20% -->
								<labal><?php
								    $check = "checked";
								    if ($pro == $check) {
									echo '<span style="color:rgba(13, 110, 253, 1.0); margin-left:0%;font-weight:bold;  line-height: 200%;">&nbsp;&nbsp;&nbsp;&nbsp;&#10003; People</span>';
									echo "";
								    } else {
									echo '<span style="color:grey;text-align:left; margin-left:0%;line-height: 200%;">Stage 4 &nbsp;&nbsp;&nbsp;&nbsp;&#9744; People</span>';
								    }
								    ?>
								</labal> <!-- /.label -->
							    </div><!-- /.row -->
							</div><!-- /.container -->
				        </div><!-- /.card body -->
					</div><!-- /.card -->
			    </div><!-- /.col -->
			</div><!-- /.row -->
	    </div><!-- /.card body -->
	</div><!-- /.card -->
</div>
    <div class="tab-pane fade" id="second_1" role="tabpanel" aria-labelledby="second_1-tab">

         <?php echo view('user_dashboard_views/dash_business_narrative'); ?>
        </div>
      </div>
      <!-- END TABS DIV -->

    </div>

  </div>
</div>












































<!--==================================== help modal starts  ========================-->
<!-- Prog Modal -->
<div class="modal fade" id="progModal" tabindex="-1" aria-labelledby="progModalLabel" aria-hidden="true">
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
					<?php echo view('help_center/dashboard/dashboard_info/dashboard-progress'); ?>
		    </div>
			    <div class="modal-footer">
				<p class="float-start"> Did you find this helpful?</p>
				<div class="float-end">
				    <button type="button" class="btn btn-outline-success btn-sm mt-1">I certainly did!</button>
				    <button type="button" class="btn btn-outline-success btn-sm mt-1">I need more info!</button>
				    <button type="button" class="btn btn-outline-success btn-sm mt-1 " data-bs-dismiss="modal"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back to my plan</button>
				    <!--<a href="<?php echo site_url(); ?>User_dashboard" class="btn  btn-outline-primary"><span class="fa fa-home"></span>fgsfgsdf</a>-->
				</div><!-- /.modal float-->
		    </div><!-- /.modal footer-->
		</div><!-- /.modal content-->
    </div><!-- /.modal dialog-->
</div><!-- /.modal -->
