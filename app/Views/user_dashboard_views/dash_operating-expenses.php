	<div class="container my-3">
			  <div class="card">
			    <div class="card-header">

					      <!-- START TABS DIV -->
					      <div class="tabbable-responsive">
						        <div class="tabbable">
							          <ul class="nav nav-tabs" id="myTab_4" role="tablist">
							            <li class="nav-item">
							              <a class="nav-link active" id="first_4-tab" data-toggle="tab" href="#first_4" role="tab" aria-controls="first_4" aria-selected="true">Operating Expenses</a>
							            </li>
							            <li class="nav-item">
							              <a class="nav-link" id="second_4-tab" data-toggle="tab" href="#second_4" role="tab" aria-controls="second_4" aria-selected="false">Key Personell</a>
							            </li>

							          </ul>
							        </div>
						        </div>
					        </div>
					        <div class="card-body">

					      <div class="tab-content">
					        <div class="tab-pane fade show active" id="first_4" role="tabpanel" aria-labelledby="first_4-tab">

					          <div class="card">
						    <div class="card-header ">
								<div class="row g-0">
								    <div class="col-md-9">
					                <h5 class="display-5">Operating Expenses</h5>

								    <!--<img src="<?= asset_url() ?>img/meet_jake/dashboard/d_4.png" width="60%" height="60%" class="img-fluid" alt="jake">-->
							    </div><!-- /.card -->
								    <div class="col-md-3">
										<div class="float-end">
						    				<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#opexModal"><i class="fa fa-info-circle" aria-hidden="true" ></i></button>
										    <button class="btn btn-outline-success" type="button" onclick="add_expenses()" toogle="" id="btnOpenForm_expense"><i class="fa fa-plus" aria-hidden="true"></i></button>
										    <!--<button type="button" id="save_expenses" class="btn btn-outline-primary"><span class="fa fa-save fa-1x"></span></i></button>-->
										    <a href="<?php echo site_url(); ?>Startup#startupstep5" target="" class=" btn btn-outline-primary" target=" _blank"> <i class="fa fa-arrow-right"  aria-hidden="true"></i></a>
										</div>
								    </div><!-- /.col-->
								</div><!-- /.row-->
						    </div>
						    <div class="card-body">
							<!--<h5 class="card-title">Special title treatment</h5>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
							<!--==================================== expenses charts starts  ========================-->
							<div class="row mt-2">
							    <div class="col-sm-6">
									<div>
									    <div>
											<h4 class="my-0 font-weight-normal">Total Projected Expenses  Year 1 - 3</h4>
										    </div>
										    <div class="card-body">
											<!-- ./chart-responsive -->
											<div class="chart-responsive " id="chart-container">
											    <!--<p class=" p-2">Total Expenses - Year 1 - 3</p>-->
											    <canvas id="expenses_bar_canvas"> </canvas>
											</div> <!-- ./chart-responsive ends-->
									    </div>
									</div>
							    </div>
							    <div class="col-sm-6">
									<div>
									    <div>
											<h4 class="my-0 font-weight-normal">Operating Expense Categories</h4>
										    </div>
										    <div class="card-body">
											<!-- chart-responsive begins-->
											<div class="chart-responsive">
											    <!--<p class=" p-2">Who's eating the pie?</p>-->
											    <canvas id="expenses_canvas" height="0" width="0"> </canvas>
											</div> <!-- ./chart-responsive ends-->
									    </div>
									</div>
							    </div>
							</div>

							<!--==================================== range sliders starts  ========================-->

								<div class="card mt-2">
								    <div class="card-header">
									<h4 class="my-0 font-weight-normal">Year 1-3 Percentage Increase</h4>

							    </div>

							    <div class="pt-0">
									<div class="row p-3">

									    <div class="col-lg-3">
										<h5>Administration</h5>
										<div class="card-body">
										    <h3 class="range-value text-center text-primary"><span class="ServiceIncomePers" id="a_perc"><?php echo $cost_increase_percentage[0]['ac'] ?></span>%<span class="float-end"></span></h3>
										    <input style="background-color: rgba(255, 255, 255, 1.0);color:rgba(0, 0, 0, 1.0); width: 100%;" id="ex10" type="range" min="0" max="100" value="<?php echo $cost_increase_percentage[0]['ac'] ?>" class="RangeSelectorExpenses" data-show-value="true" />
										    <!-- ./range-slider -->
										</div><!-- ./ card body -->
									    </div><!-- ./ col-3 -->
									    <div class="col-lg-3">
										<h5>Marketing</h5>
										<div class="card-body">
										    <h3 class="range-value text-center text-primary"><span class="ServiceIncomePers" id="m_perc"><?php echo $cost_increase_percentage[0]['marketing'] ?></span>%<span class="float-end"></span></h3>
										    <input style="background-color: rgba(255, 255, 255, 1.0);color:rgba(0, 0, 0, 1.0); width: 100%;" id="ex8" type="range" min="0" max="100" value="<?php echo $cost_increase_percentage[0]['marketing'] ?>" class="RangeSelectorExpenses" data-show-value="true" />
										    <!-- ./range-slider -->
										</div><!-- ./ card body -->
									    </div><!-- ./ col-3 -->
									    <div class="col-lg-3">
										<h5>Other</h5>
										<div class="card-body">
										    <h3 class="range-value text-center text-primary"><span class="ServiceIncomePers" id="o_perc"><?php echo $cost_increase_percentage[0]['other'] ?></span>%<span class="float-end"></span></h3>
										    <input style="background-color: rgba(255, 255, 255, 1.0);color:rgba(0, 0, 0, 1.0); width: 100%;" id="ex11" type="range" min="0" max="100" value="<?php echo $cost_increase_percentage[0]['other'] ?>" class="RangeSelectorExpenses" data-show-value="true" />
										    <!-- ./range-slider -->
										</div><!-- ./ card body -->
								    </div><!-- ./ col-3 -->
									    <div class="col-lg-3">
										<h5>Public Relations</h5>
										<div class="card-body">
										    <h3 class="range-value text-center text-primary"><span class="ServiceIncomePers" id="p_perc"><?php echo $cost_increase_percentage[0]['pr'] ?></span>%<span class="float-end"></span></h3>
										    <input style="background-color: rgba(255, 255, 255, 1.0);color:rgba(0, 0, 0, 1.0); width: 100%;" id="ex9" type="range" min="0" max="100" value="<?php echo $cost_increase_percentage[0]['pr'] ?>" class="RangeSelectorExpenses" data-show-value="true" />
										    <!-- ./range-slider -->
										</div><!-- ./ card body -->
								    </div><!-- ./ col-3 -->

								</div><!-- ./ row -->
								<p class="p-2">Operating expenses usualy increase over previous years by a small % , use the slider to increase expenses and save your changes</p>

								<div class="float-end p-3">
										<button type="button" id="save_expenses" class="btn btn-outline-success float-end "><i class="fa fa-save fa-1x" aria-hidden="true"></i> Save and Continue</button>
								</div>
						    </div><!-- ./ card header-->
						</div><!-- ./ card -->





					<div class="card mt-2">
					    <div class="card-header">
							<h4 class="my-0 font-weight-normal">Year 1-3 Summary</h4>
					    </div>
					    <div class="card-body">
						<!-- <h5 class="card-title">Special title treatment</h5>
						    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
						<a href="#" class="btn btn-outline-primary">Go somewhere</a>-->

							<div class="mt-2 bg-light border">
							    <div class="col-lg-12 col-md-12 col-sm-12 ">

								<div class="table-responsive">

								    <table id="table2" class="table table-responsive p-5">
									<thead>
									    <tr>
										<th>Account
										</th>
										<th>Year 1
										</th>
										<th>Year 2
										</th>
										<th>Year 3
										</th>
									    </tr><!-- /.table row-->
									</thead><!-- /.table head-->
									<tbody>
									    <?php
									    $total_year1 = 0;
									    $total_year2 = 0;
									    $total_year3 = 0;
									    if (!empty($list)) {
										foreach ($expense_summary as $summary) {
										    ?>
										    <tr id="<?php echo $summary['purpose']; ?>" onclick="update_expenses('<?php echo $summary['purpose']; ?>')">
											<td>
											    <?php echo 'Total ' . $summary['purpose']; ?>
											</td>
											<td>
											    <?php echo $currency . number_format($summary['weekly_cost'], 0, '.', ','); ?>
											</td>
											<td>
											    <?php echo $currency . number_format($summary['monthly_cost'], 0, '.', ','); ?>
											</td>
											<td>
											    <?php echo $currency . number_format($summary['quarterly_cost'], 0, '.', ','); ?>
											</td>
											<?php
											if ($summary['purpose'] == 'Marketing')
											    $cost_increase = number_format((float) $cost_increase_percentage[0]['marketing'] / 100, 0, '.', ',');
											elseif ($summary['purpose'] == 'Public_Relations')
											    $cost_increase = number_format((float) $cost_increase_percentage[0]['pr'] / 100, 0, '.', ',');
											elseif ($summary['purpose'] == 'Other')
											    $cost_increase = number_format((float) $cost_increase_percentage[0]['other'] / 100, 0, '.', ',');
											elseif ($summary['purpose'] == 'Administration')
											    $cost_increase = number_format((float) $cost_increase_percentage[0]['ac'] / 100, 0, '.', ',');
											else
											    $cost_increase = 1;
											$year1 = $summary['yearly_cost'];
											$year2 = intval($year1) * $cost_increase + intval($year1);
											$year3 = intval($year2) * $cost_increase + intval($year2);
											$total_year1 = $total_year1 + $year1;
											$total_year2 = $total_year2 + $year2;
											$total_year3 = $total_year3 + $year3;
											if (is_nan($total_w)) {
											    $total_w = 0;
											} else {
											    $total_w += $summary['weekly_cost'];
											}
											if (is_nan($total_m)) {
											    $total_m = 0;
											} else {
											    $total_m += $summary['monthly_cost'];
											}
											if (is_nan($total_q)) {
											    $total_q = 0;
											} else {
											    $total_q += $summary['quarterly_cost'];
											}
											?>
											<td id="<?php echo $summary['purpose']; ?>_year1" data-val="<?php echo $year1; ?>">
											    <?php echo $currency . number_format($year1, 0, '.', ','); ?>
											</td>
											<td id="<?php echo $summary['purpose']; ?>_year2" data-val="<?php echo $year2; ?>">
											    <?php echo $currency . number_format($year2, 0, '.', ','); ?>
											</td>
											<td id="<?php echo $summary['purpose']; ?>_year3" data-val="<?php echo $year3; ?>">
											    <?php echo $currency . number_format($year3, 0, '.', ','); ?>
											</td>
										    </tr>
										    <?php
										}
									    }
									    ?>
									    <tr style="background-color: #d3d3d3;" onclick="update_expenses('loadchart')">
										<td>
										    <b>Total:
										    </b>
										</td>
										<td id="total_y1" data-val="<?php echo $total_year1; ?>">
										    <b>
											<?php echo $currency . number_format($total_year1, 0, '.', ','); ?>
										    </b>
										</td>
										<td id="total_y2" data-val="<?php echo $total_year2; ?>">
										    <b>
											<?php echo $currency . number_format($total_year2, 0, '.', ','); ?>
										    </b>
										</td>
										<td id="total_y3" data-val="<?php echo $total_year3; ?>">
										    <b>
											<?php echo $currency . number_format($total_year3, 0, '.', ','); ?>
										    </b>
										</td>
									    </tr>
									</tbody><!-- table body -->
								    </table><!-- /.table -->

								</div><!-- /.table responsive-->

							    </div><!-- /. col  -->
							</div><!-- /. row  -->

						    </div><!-- card body -->
						</div><!-- card -->

					    </div><!-- card body -->
					</div><!-- card header -->
		        </div>
		        <div class="tab-pane fade" id="second_4" role="tabpanel" aria-labelledby="second-tab_4">
		            <?php echo view('user_dashboard_views/dash_people'); ?>
		      </div>
		      <!-- END TABS DIV -->

			    </div>
		  </div>
	</div>

	<!--==================================== help modal starts  ========================-->
	<!-- Land and Building Modal -->
	<div class="modal fade" id="opexModal" tabindex="-1" aria-labelledby="opexModalLabel" aria-hidden="true">
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
					<?php echo view('help_center/dashboard/dashboard_info/dashboard-operating-expenses'); ?>
			    </div>
				    <div class="modal-footer">
					<p class="float-start"> Did you find this helpful?</p>
					<div class="float-end">
					    <button type="button" class="btn btn-outline-success btn-sm mt-1">I certainly did!</button>
					    <button type="button" class="btn btn-outline-success btn-sm mt-1">I need more info!</button>
					    <button type="button" class="btn btn-outline-success btn-sm mt-1 " data-bs-dismiss="modal"><i class="fa fa-arrow-left"  aria-hidden="true"></i> Back to my plan</button>
					    <!--<a href="<?php echo site_url(); ?>User_dashboard" class="btn  btn-outline-primary"><span class="fa fa-home"></span>fgsfgsdf</a>-->
					</div>
			    </div>
			</div>
	    </div>
	</div>

