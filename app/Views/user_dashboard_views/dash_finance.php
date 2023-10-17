
			  <div class="card" style="height: auto;">
				    <div class="card-header">
							<div class="row g-0">
							    <div class="col-md-9">
							        <h5 class="display-5">Loan Calculator</h5>
								    <p>Will you need to borrow money <?php echo $user->f_name . ' ' . $user->l_name ?>?</p>
								   <!--  <img src="<?= asset_url() ?>img/meet_jake/dashboard/d_4.png" width="60%" height="60%" class="img-fluid" alt="jake">-->
								    </div><!-- /.card -->
									    <div class="col-md-3">
											<div class="float-end">
										    	<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#finModal"><i class="fa fa-info-circle" aria-hidden="true"></i></button>

										    <!--<button class="btn btn-outline-success" type="button" onclick="bank_loan()" id="btnOpenForm_bank"><span class="fa fa-plus fa-3x"></span></button>
										    <a href="<?php echo site_url(); ?>Startup#startupstep3" class="btn btn-outline-primary"><span class="fa fa-arrow-right fa-3x"></span></a>-->
										</div><!-- /.float  -->
								    </div><!-- /.col-->
								</div><!-- /.col-->
						    </div>

						    <div class="row text-center  p-3">
								<div class="col-lg-12 col-md-12 col-sm-12">
								    <div class="card mb-0">
										<div class="card-header">
										    <div class="row">
												<div class="col-lg-4">
												    <h5>Principal Amount</h5>
												    <div class="card-body">
													<!--<p class="card-text">How much will you borrow?</p>-->
													<!--<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
													<!-- Provision For Franchise/Royalty Fee Percentage Starts -->
													<div class="form-group text-left">
													    <h3 class="card-title pricing-card-title" id="loanAmountText">
														<?php echo $cur . ' ' . number_format($loan_amount, 0, '.', ','); ?>
													    </h3>
													<input name="loanAmount" id="loanAmount" type="range" min="0" max="10000000" step="50000" value="<?= (isset($loan_amount)) ? $loan_amount : '' ?>" class="RangeSelectorDOE" />
												</div>
										    </div>
										</div>
									<div class="col-lg-4">
									    <h5>Loan Term</h5>
										    <div class="card-body">
											<!--<p class="card-text">How long is the term?</p>-->
											<!--<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
											<!-- Provision For Franchise/Royalty Fee Percentage Starts -->
											<div class="form-group text-left">
											    <h3 class="card-text text-left" id="loanYearText"><?= (isset($loan_length)) ? $loan_length : '0' ?></h3>
											    <input name="loanYear" id="loanYear" type="range" min="1" max="30" step="1" value="<?= (isset($loan_length)) ? $loan_length : '' ?>" class="RangeSelectorDOE" />
											</div>
									    </div>
									</div>
									<div class="col-lg-4">
							            <h5>Interest Rate</h5>

									    <div class="card-body">
										<!--<p class="card-text">What is the interest rate?</p>-->
										<!--<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
										<!-- Provision For Franchise/Royalty Fee Percentage Starts -->
										<div class="form-group text-left">
										    <h3 class="card-text text-left" id="loanIntrestText"><?= (isset($annual_interest)) ? $annual_interest : '0' ?>%</h3>
										    <input name="loanIntrest" id="loanIntrest" type="range" min="1" max="50" step="0.5" value="<?= (isset($annual_interest)) ? $annual_interest : '0' ?>" class="RangeSelectorDOE" />
										</div>
								    </div>
								</div>
						    </div>


							<div class="float-end p-2">
                                <button type="button" onclick="saveFinance();" class="btn btn-outline-success"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</button>


							</div>

						</div>
				    </div>
				</div>
		    </div><!-- comment -->

		    <div class="row text-center p-3" >
				<div class="col-md-6">
				    <div class="card " style="height: 500px;">
						<div class="card-header ">
						    <h4 class="my-0 font-weight-normal">Payment Breakup</h4>
						</div>
						<div class="card-body">
						    <!--<h5 class="card-title">Special title treatment</h5>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
						    <canvas id="pieChartLoanCalculator" height="300px" width="300px"></canvas>
						</div>
				    </div>
				</div>
				<div class="col-md-6">
				    <div class="card " style="height: 500px;">
						<div class="card-header ">
						    <h4 class="my-0 font-weight-normal">Loan Details</h4>
						</div>
						<div class="card-body">

					    <canvas id="lineChartLoanCalculator" height="200px" width="200px"></canvas>
					    <!-- <div>
					    <div class="loan-details">
						<div class='chart-details'>
						    <p style="color: #9088D2">Principal</p>
						    <p id="cp" style="color: #130F31; font-size: 17px;"></p>
						</div>
						<div class='chart-details'>
						    <p style="color: #9088D2">Interest</p>
						    <p id="ci" style="color: #130F31; font-size: 17px;"></p>
						</div>
						<div class='chart-details'>
						    <p style="color: #9088D2">Total Payable</p>
						    <p id="ct" style="color: #130F31; font-size: 17px;"></p>
						</div>
					    </div>
					    <canvas id="lineChart" height="200px" width="200px"></canvas>
					</div> -->
					</div>
			    </div>
			</div>
	    </div>

	    <div class="row text-center mb-0 p-3">
			<div class="col-lg-12 col-md-12 col-sm-16">
			    <div class="card shadow-sm">
					<div class="card-header ">
					    <div class="row">
						<div class="col-lg-3">
						    <h5>Principal</h5>
						    <p id="principalAmount"></p>
						</div>
						<div class="col-lg-3">
						    <h5>Interest</h5>
						    <p id="interestAmount"></p>
						</div>
						<div class="col-lg-3">
						    <h5>Total Payable</h5>
						    <p id="totalPayable"></p>
						</div>
						<div class="col-lg-3">
						    <h5>Monthly Loan Payment</h5>
						    <p id="monthlyLoanPayment"></p>
						</div>
				    </div>
				</div>
		    </div>
		</div>
    </div><!-- comment -->

    <?php /*


      <div class="row  p-2 mt-2">
      <div class="col-6">
      <div class="card ">
      <h5 class="card-header ">Loan Details

      </h5>
      <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <!--<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-outline-primary">Go somewhere</a>-->


      <div class="view">
      <div class="details">
      <div>
      <div class="detail">
      <p style="color: #9088D2">Amount</p>
      <p id="loan-amt-text" style="color: #6258A8"></p>
      </div>
      <input type="range" id="loan-amount" min="0" max="10000000" step="50000">
      </div>
      <div>
      <div class="detail">
      <p style="color: #9088D2">Length</p>
      <p id="loan-period-text" style="color: #6258A8"></p>
      </div>
      <input type="range" id="loan-period" min="1" max="30" step="1">
      </div>
      <div>
      <div class="detail">
      <p style="color: #9088D2">% Interest</p>
      <p id="interest-rate-text" style="color: #6258A8"></p>
      </div>
      <input type="range" id="interest-rate" min="1" max="15" step="0.5">
      </div>
      </div>
      <div class="footer">
      <p id="price-container"><span id="price">0</span>/mo</p>
      </div>
      </div>

      </div><!-- card body -->
      </div><!-- card header -->
      </div><!-- col -->

      <div class="col-6">
      <div class="card ">
      <h5 class="card-header ">Featured</h5>
      <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <!--<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-outline-primary">Go somewhere</a>-->

      <div class="breakup">
      <canvas id="pieChart"></canvas>
      </div>


      </div><!-- card body -->
      </div><!-- card header -->
      </div><!-- col -->



      <div class="col-12 mt-2">
      <div class="card ">
      <h5 class="card-header ">Featured</h5>
      <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <!--<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-outline-primary">Go somewhere</a>-->

      <div>
      <div class="loan-details">
      <div class='chart-details'>
      <p style="color: #9088D2">Principal</p>
      <p id="cp" style="color: #130F31; font-size: 17px;"></p>
      </div>
      <div class='chart-details'>
      <p style="color: #9088D2">Interest</p>
      <p id="ci" style="color: #130F31; font-size: 17px;"></p>
      </div>
      <div class='chart-details'>
      <p style="color: #9088D2">Total Payable</p>
      <p id="ct" style="color: #130F31; font-size: 17px;"></p>
      </div>
      </div>
      <canvas id="lineChart" height="200px" width="200px"></canvas>
      </div>

      </div>
      </div><!-- card -->
      </div><!-- col -->
      </div><!-- row -->

     */ ?>

    <div class="card-body text-left ">

	<?php /*
	  <!--<h4 class="pt-2">For example:</h4>
	  <p class="">
	  Serina and has partner Elana, don't have enough funds to pay for a new button machines so they have
	  decided to approach the bank for a small loan, the loan calculator will give them some idea of the cost of borrowing
	  money, and the interest rate charged.
	  </p>-->
	  <!--<h4>How much will you borrow to start the business?</h4>
	  <h1 class="card-title text-center text-primary fs-lg-1 m-2"><?php echo $cur . ' ' . number_format($loan_amount, 0, '.', ','); ?></h1>-->
	  <!--<h5 class="card-title">Special title treatment</h5>
	  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
	 */ ?>
    </div>

</div>


	<!--==================================== help modal starts  ========================-->
	<!-- Investors Modal -->
	<div class="modal fade" id="finModal" tabindex="-1" aria-labelledby="finModalLabel" aria-hidden="true">
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
				<?php echo view('help_center/dashboard/dashboard_info/dashboard-finance'); ?>
			    </div>
			    <div class="modal-footer">
				<p class="float-start"> Did you find this helpful?</p>
				<div class="float-end">
				    <button type="button" class="btn btn-outline-success btn-sm mt-1">I certainly did!</button>
				    <button type="button" class="btn btn-outline-success btn-sm mt-1">I need more info!</button>
				    <button type="button" class="btn btn-outline-success btn-sm mt-1 " data-bs-dismiss="modal"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Back to my plan</button>
				    <!--<a href="<?php echo site_url(); ?>User_dashboard" class="btn  btn-outline-primary"><span class="fa fa-home"></span>fgsfgsdf</a>-->
				</div>
		    </div>
		</div>
    </div>
</div>
