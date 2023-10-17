
<style>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 0px;
}

tr:nth-child(even){background-color: #f2f2f2}
</style>








<div class="container my-3">

  <div class="card">
    <div class="card-header">
      <div class="d-flex">
        <div class="title">
           <h4 class="card-title">Stage 2 - Business Funding</h4>
			<figure>
			  <blockquote class="blockquote">
				<p class="card-text">
		          Starting a company can be a costly, there are business registrations , acccounting and solicitor fees just to name a few, so providing suffcient funds to
		          grow your buisness is a key factor in being a suceess.
		          </p>
			  </blockquote>
			  <figcaption class="blockquote-footer">
			     Nuri Bydel <cite title="Source Title">CEO</cite>
			  </figcaption>
			</figure>
        <h5 class="card-title">Who are the owners? and how will you fund the business?</h5>
        </div>
      </div>
      <!-- START TABS DIV -->
      <div class="tabbable-responsive">
        <div class="tabbable">
          <ul class="nav nav-tabs" id="myTab_6" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="first_6-tab" data-toggle="tab" href="#first_6" role="tab" aria-controls="first_6" aria-selected="true">Owners</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="second_6-tab" data-toggle="tab" href="#second_6" role="tab" aria-controls="second_6" aria-selected="false">Directors</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="third_6-tab" data-toggle="tab" href="#third_6" role="tab" aria-controls="third_6" aria-selected="false">Finance</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <div class="card-body">

      <div class="tab-content">
        <div class="tab-pane fade show active" id="first_6" role="tabpanel" aria-labelledby="first_6-tab">

				<div class="card-body">
							<h2 class="float-start"> BreakEven Point</h2>

								<!-- ./chart-responsive begins -->
                                    <div class="chart-responsive">
                                        <canvas id="breakeven_canvas" height="50%" width="100%"> </canvas>
                                    </div><!-- /.chart-->
								</div><!-- /.card-body  -->

								<div class="card-footer text-muted">
									<div class="float-end">
										<a href="<?php echo site_url(); ?>Reports" target="" class="btn btn-outline-primary"><i class="fa fa-arrow-right fa-3x" aria-hidden="true"></i></a>
									</div><!-- /.float  -->
								</div><!-- /.card-footer  -->

                                </div>
                                <div class="tab-pane fade" id="second_6" role="tabpanel" aria-labelledby="second_6-tab">
                           <div class="card-body">
								<h2 class="float-start"> Key Ratios</h2>
                                    <table id="table-key_ratios_0" class="table table-responsive fs-6">
                                        <thead>
                                            <tr class="table-light">
                                                <th width="2%">Account</th>
                                                <th width="5%">Year 1</th>
                                                <th width="5%">Year 2</th>
                                                <th width="5%">Year 3</th>
                                            </tr><!-- /.table row-->
                                        </thead><!-- /.table head-->
                                            <tr class="table-primary">
                                                <td>
                                                    <strong>Profitability Ratios</strong>
                                                </td>
                                                <td colspan="3">
                                                </td><!-- /.table data-->
                                            </tr><!-- /.table row-->
                                            <tr>
                                                <td width="10%">Gross Profit Percentage
                                            </td><!-- /.table data-->
                                            <?php
                                            for ($i = 1; $i <= 3; $i++) {
                                            $gross_profit = 'key_ratios_gross_profit_' . $i;
                                            ?>
                                                <td id="key_ratios_gross_profit_<?php echo $i; ?>">
                                                <?php echo number_format($$gross_profit, 2, '.', ','); ?> %
                                                </td><!-- /.table data-->
                                            <?php } ?>
                                        </tr><!-- /.table row-->
                                        <tr>
                                        <td width="10%">Employment Costs
                                        </td>
                                        <?php
                                        for ($i = 1; $i <= 3; $i++) {
                                        $employement_cost = 'key_ratios_employement_costs_' . $i;
                                        ?>
                                            <td id="key_ratios_employement_costs_<?php echo $i; ?>">
                                            <?php echo number_format($$employement_cost, 2, '.', ','); ?> %
                                            </td>
                                        <?php } ?>
                                    </tr>
                                    <tr>
                                        <td width="10%">Operating Expenses
                                        </td><!-- /.table data-->
                                        <?php
                                        for ($i = 1; $i <= 3; $i++) {
                                        $operating_expense = 'key_ratios_operating_expenses_' . $i;
                                        ?>
                                            <td id="key_ratios_operating_expenses_<?php echo $i; ?>">
                                            <?php echo number_format($$operating_expense, 2, '.', ','); ?> %
                                            </td><!-- /.table data-->
                                        <?php } ?>
                                    </tr><!-- /.table row-->
                                    <tr>
                                        <td width="10%">Net Profit Percentage
                                        </td><!-- /.table data-->
                                        <?php
                                        for ($i = 1; $i <= 3; $i++) {
                                        $net_profit = 'key_ratios_net_profit_' . $i;
                                        ?>
                                            <td id="key_ratios_net_profit_<?php echo $i; ?>">
                                            <?php echo number_format($$net_profit, 2, '.', ','); ?> %
                                            </td><!-- /.table data-->
                                        <?php } ?>
                                    </tr><!-- /.table row-->
                                    </table><!-- /.table -->
                                    <br>
                                    <table id="table-key_ratios_1" class="table table-striped table-condensed fs-6">
                                    <thead>
                                        <tr class="table-warning">
                                        <th width="2%">Account
                                        </th>
                                        <th width="5%">Year 1
                                        </th>
                                        <th width="5%">Year 2
                                        </th>
                                        <th width="5%">Year 3
                                        </th>
                                        </tr>
                                    </thead><!-- /.table head-->
                                    <tr class="table-success">
                                        <td width="10%">
                                        <strong>Balance Sheet Ratios
                                        </strong>
                                        </td><!-- /.table data-->
                                        <td colspan="3">
                                        </td><!-- /.table data-->
                                    </tr><!-- /.table row-->
                                    <tr>
                                        <td width="10%">Earnings per share
                                        </td><!-- /.table data-->
                                        <?php
                                        for ($i = 1; $i <= 3; $i++) {
                                        $earn_share = 'key_ratios_earn_share_' . $i;
                                        ?>
                                            <td id="key_ratios_earn_share_<?php echo $i; ?>">
                                            <?php echo $cur . ' ' . number_format($$earn_share, 2, '.', ','); ?>
                                            </td><!-- /.table data-->
                                        <?php } ?>
                                    </tr><!-- /.table row-->
                                    <tr>
                                        <td width="10%">Working Capital Ratio
                                        </td><!-- /.table data-->
                                        <?php
                                        for ($i = 1; $i <= 3; $i++) {
                                        $work_cap = 'key_ratios_work_cap_' . $i;
                                        ?>
                                            <td id="key_ratios_work_cap_<?php echo $i; ?>">
                                            <?php echo number_format($$work_cap, 2, '.', ','); ?>
                                            </td><!-- /.table data-->
                                        <?php } ?>
                                    </tr><!-- /.table row-->
                                    <tr>
                                        <td width="10%">Debtors Turnover
                                        </td><!-- /.table data-->
                                        <?php
                                        for ($i = 1; $i <= 3; $i++) {
                                        $debtors_turn = 'key_ratios_debtors_turn_' . $i;
                                        ?>
                                            <td id="key_ratios_debtors_turn_<?php echo $i; ?>">
                                            <?php echo number_format($$debtors_turn, 2, '.', ','); ?>
                                            </td><!-- /.table data-->
                                        <?php } ?>
                                    </tr><!-- /.table row-->
                                        </table> <!-- Key ratio table ends-->
              							</div><!-- /.card-body  -->
              								<div class="card-footer text-muted">
              									<div class="float-end">
              										<a href="<?php echo site_url(); ?>Reports" target="" class="btn btn-outline-primary"><i class="fa fa-arrow-right fa-3x" aria-hidden="true"></i></a>
              									</div><!-- /.float  -->
              								</div><!-- /.card-footer  -->
                                              </div>
                                              <div class="tab-pane fade" id="third_6" role="tabpanel" aria-labelledby="third_6-tab">
                                      <div class="card-body">

              								<div class="box-body my-3">
                                                  <div class='sensitivity'></div>
                                              </div>
              							</div><!-- /.card-body  -->
              								<div class="card-footer text-muted">
              									<div class="float-end">
              										<a href="<?php echo site_url(); ?>Reports" target="" class="btn btn-outline-primary"><i class="fa fa-arrow-right fa-3x" aria-hidden="true"></i></a>
              									</div><!-- /.float  -->
              								</div><!-- /.card-footer  -->

                                </div>




                              </div>
                              <!-- END TABS DIV -->

                            </div>

                          </div>
                        </div>



























































    			<!--==================================== help modal starts  ========================-->
    			<!-- Land and Building Modal -->
    			<div class="modal fade" id="analysisModal" tabindex="-1" aria-labelledby="prodModalLabel" aria-hidden="true">
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
    							<?php echo view('help_center/dashboard/dashboard_info/dashboard-products'); ?>
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