        <div class="row pt-3">

          <div class="col-12">

            <div class="row mb-3">
              <div class="col">
                <div class="card bg-100">
                  <div class="row gx-0 flex-between-center">
                    <div class="col-sm-auto d-flex align-items-center"><img class="ms-n2" src="<?php echo site_url(); ?>template-assets/img/illustrations/crm-bar-chart.png" alt="" width="90" />

                      <div>

                        <h6 class="text-primary fs--1 mb-0 mt-3">Welcome to </h6>
                			  <h5 class="pt-3" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:center">
                          <!--<span><img src='<?php echo site_url(); ?>custom-assets/images/logo_transparent.png' style='width: 60px; height: 60px; pb-4'/></span>-->
                          <span style="color:rgba(0, 0, 0, 0.60);font-size:30px;font-weight:100; margin-right: 0px; margin-top: 20px;float: center;">Auzi</span>
                          <span style="color:rgba(13, 110, 252, 1.0);font-size:30px; margin-top: 20px;float: center;">Plan</span><span class="text-info fw-medium">CRM</span>
                        </h5>

                      </div><img class="ms-n4 d-md-none d-lg-block" src="<?php echo site_url(); ?>template-assets/img/illustrations/crm-line-chart.png" alt="" width="150" />
                    </div>


                    <div class="col-md-auto p-3">

                      <form class="row align-items-center g-3">
                        <div class="col-auto">
                          <h6 class="text-700 mb-0">Showing Data For: </h6>
                        </div>
                        <div class="col-md-auto position-relative">
                          <input class="form-control form-control-sm datetimepicker ps-4" id="CRMDateRange" type="text" data-options="{&quot;mode&quot;:&quot;range&quot;,&quot;dateFormat&quot;:&quot;M d&quot;,&quot;disableMobile&quot;:true , &quot;defaultDate&quot;: [&quot;Sep 12&quot;, &quot;Sep 19&quot;] }" /><span class="fas fa-calendar-alt text-primary position-absolute top-50 translate-middle-y ms-2"> </span>
                        </div>
                      </form><!-- /.date form -->

                    </div><!-- /.col -->


                  </div>
                </div>
              </div>
            </div>


            <div class="card bg-100 mb-3">
              <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);"></div>
              <!--/.bg-holder-->
              <div class="card-body position-relative">
                <div class="row">
                  <div class="col-lg-12">
                    <h3>Plan Progress</h3>

                    <p class="mt-2">
                      <?php if (isset($progress) && isset($is_localproduct)) { ?>
                        Your business plan has been completed by <?php echo $progress ?>%<?php echo $is_localproduct; ?> all stages must be completed for your financial reports to be accurate.
                      <?php } ?>
                    </p>


                    <div class="row mt-2">

                      <!-- ===============================================-->
                      <!--    Left Side Column Progress Bar-->
                      <!-- ===============================================-->

                      <div class="col-sm-12 col-md-8">
                        <div class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0); height: 100px;">

                          <div class="row">
                            <!--<p class="card-text pt-5">Your business plan has been completed by:</p>-->
                            <!--<p class="card-text">We show a pie chart linked to the Directors and amount contributed.</p>-->
                            <h2 class="text-primary text  text-center">
                              <?php if (isset($progress) && isset($is_localproduct)) { ?><?php echo  $progress ?>%<?php echo $is_localproduct; ?><?php } ?>
                            </h2>
                            <div class="pt-4">
                              <div class="progress" style="background-color: rgba(13, 110, 253, 1.0);color:rgba(0, 0, 0, 0.0); width: 100%; height:10px">
                                <div id="progressBar" class="progress-bar_1 bg-info progress-bar-animated" role="progressbar" aria-valuenow="<?php if (isset($progress)) { ?><?= $progress ?><?php } ?>" aria-valuemin="0" aria-valuemax="100"></div>
                              </div><!-- /.progress bar -->
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- ===============================================-->
                      <!--    Right Side Column Stages-->
                      <!-- ===============================================-->

                      <div class="col-sm-12 col-md-4">
                        <!--<h6 class="mb-0">Stages</h6>-->
                        <div class="row">



                          <div class="container mt-0 pt-2">
                            <div class="row text-left">
                              <label class="text-700 mb-0"><?php {
                                                              echo '<span style="color:rgba(13, 110, 253, 1.0);text-align:left;font-weight:bold;line-height: 200%; margin-left:0%;">&nbsp;&nbsp;&nbsp;&nbsp;&#10003;Company Setup</span>';
                                                              echo "";
                                                            }
                                                            ?>
                              </label><!-- /.label -->
                              <br>
                              <!-- brainstorming starts progress 20% -->
                              <label class="text-700 mb-0"><?php
                                                            $check = "checked";
                                                            if (isset($plan) && $plan == $check) {
                                                              echo '<span style="color:rgba(13, 110, 253, 1.0); font-weight:bold; margin-left:0%; line-height: 400%;">&nbsp;&nbsp;&nbsp;&nbsp;&#10003; BusinessNarrative</span>';
                                                              echo "";
                                                            } else {
                                                              echo '<span style="color:grey; text-align:left;margin-left:0%;line-height: 200%;">Stage 2 &nbsp;&nbsp;&nbsp;&nbsp;&#9744; Business Narrative</span>';
                                                            }
                                                            ?>
                              </label>
                              <br>
                              <!-- startup starts progress 20% -->
                              <label class="text-700 mb-0"><?php
                                                            $check = "checked";
                                                            if (isset($expe) && $expe == $check) {
                                                              echo '<span style="color:rgba(13, 110, 253, 1.0); ;margin-left:0%;font-weight:bold;line-height: 400%;"> &nbsp;&nbsp;&nbsp;&nbsp;&#10003; Opening Costs</span>';
                                                              echo "";
                                                            } else {
                                                              echo '<span style="color:grey; text-align:left;margin-left:0%;line-height: 200%;">Stage 3 &nbsp;&nbsp;&nbsp;&nbsp;&#9744; Opening Costs</span>';
                                                            }
                                                            ?>
                              </label><!-- /.label -->
                              <!-- /.label -->
                              <br>
                              <!-- revenue streams starts progress 20% -->
                              <label class="text-700 mb-0"><?php
                                                            $check = "checked";
                                                            if (isset($rem) && $rem == $check) {
                                                              echo '<span style="color:rgba(13, 110, 253, 1.0); margin-left:0%; font-weight:bold; line-height: 200%;">&nbsp;&nbsp;&nbsp;&nbsp;&#10003; Operating Expenses</span>';
                                                              echo "";
                                                            } else {
                                                              echo '<span style="color:grey; text-align:left;;margin-left:0%; line-height: 200%;">Stage 4 &nbsp;&nbsp;&nbsp;&nbsp;&#9744; Opening Expenses</span>';
                                                            }
                                                            ?>
                              </label><!-- /.label -->
                              <br>
                              <!-- people starts progress 20% -->
                              <label class="text-700 mb-0"><?php
                                                            $check = "checked";
                                                            if (isset($pro) && $pro == $check) {
                                                              echo '<span style="color:rgba(13, 110, 253, 1.0); margin-left:0%;font-weight:bold;  line-height: 200%;">&nbsp;&nbsp;&nbsp;&nbsp;&#10003; Revenue Streams</span>';
                                                              echo "";
                                                            } else {
                                                              echo '<span style="color:grey;text-align:left; margin-left:0%;line-height: 200%;">Stage 5 &nbsp;&nbsp;&nbsp;&nbsp;&#9744; Revenue Streams</span>';
                                                            }
                                                            ?>
                              </label> <!-- /.label -->
                            </div><!-- /.row -->


                          </div><!-- /.container -->
                        </div><!-- /.card body -->
                      </div><!-- /.card -->
                    </div><!-- /.col -->
                  </div><!-- /.row -->

                </div>
              </div>
            </div>





            <!-- ===============================================-->
            <!--    Business Funding Stages-->
            <!-- ===============================================-->
            <div class="card mb-3">

              <div class="card-body position-relative">
                <div class="row">
                  <div class="col-lg-12">
                    <h3>Business Funding</h3>

                    <p class="mt-2">
                      Let's talk about finance, how much capital have you raised to start your business?, and will it be sufficient to support the business in the early stages of growth? It is essential that business owner's allow for those
                      unexpected liabilities that tend to popup from time to time.
                    </p>

                    <div class="row mb-3 g-3">
                      <div class="col-lg-12 col-xxl-12">

                        <div class="card">
                          <div class="card-header d-flex flex-between-center ps-0 py-0 border-bottom">
                            <ul class="nav nav-tabs border-0 flex-nowrap tab-active-caret" id="crm-finance-chart-tab" role="tablist" data-tab-has-echarts="data-tab-has-echarts">
                              <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0 active" id="crm-finance-tab" data-bs-toggle="tab" href="#crm-finance" role="tab" aria-controls="crm-finance" aria-selected="true">Bank Finance</a></li>
                              <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-owners-tab" data-bs-toggle="tab" href="#crm-owners" role="tab" aria-controls="crm-owners" aria-selected="false">Owners Contribution</a></li>
                              <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-investors-tab" data-bs-toggle="tab" href="#crm-investors" role="tab" aria-controls="crm-investors" aria-selected="false">Investors Contributions</a></li>

                            </ul>
                            <a class="btn btn-outline-info float-end" data-html="true" data-bs-placement="auto" data-popover-content="#fun" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true"></i></a>
                            <!--<div class="dropdown font-sans-serif btn-reveal-trigger">
              <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-session-by-country" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
              <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-session-by-country"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
              </div>
            </div>-->

                          </div>

                          <div>
                            <!-- Popover #1 -->
                            <!-- Content for Popover #1 -->
                            <div class="hidden d-none" id="fun">
                              <div class="popover-heading">
                                Help Center
                              </div><!-- /.popover heading-->
                              <div class="popover-body">
                                <!--<h5 class="card-title">Special title treatment</h5>-->
                                <p>
                                  Who are the owners? how cash has been contributed start the business?
                                </p>
                                <ul>
                                  <li>Add a owner</li>
                                  <li>Enter cash raised</li>
                                  <li>Issue shares</li>
                                  <li>Add type of share</li>
                                  <li>Add profit percentage</li>
                                  <li>Select payment frequency</li>
                                </ul><!-- /.ul-->

                              </div><!-- /.popover body  -->
                            </div><!-- /.hidden -->
                          </div><!-- /.p-2 -->

                          <div class="card-body">
                            <div class="row g-1">
                              <div class="col-xxl-3">
                                <div class="row g-0 my-2">
                                  <div class="col-md-6 col-xxl-12">
                                    <div class="border-xxl-bottom border-xxl-200 mt-2 mb-2">
                                      <!--<p class="fs--2 text-500 fw-semi-bold mb-0"><span class="fas fa-circle text-primary me-2"></span>Closed Amount</p>
                                        <p class="fs--2 text-500 fw-semi-bold"><span class="fas fa-circle text-warning me-2"></span>Revenue Goal</p>
                                        -->
                                    </div>
                                    <!-- <div class="form-check form-check-inline me-2">
                                      <input class="form-check-input" id="crmInbound" type="radio" name="bound" value="inbound" Checked="Checked" />
                                      <label class="form-check-label" for="crmInbound">Inbound</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                      <input class="form-check-input" id="outbound" type="radio" name="bound" value="outbound" />
                                      <label class="form-check-label" for="outbound">Outbound</label>
                                    </div>
                                  -->
                                  </div>
                                  <div class="col-md-6 col-xxl-12 py-2 mt-5">
                                    <div class="row mx-0">
                                      <div class="col-12 border-top py-3">
                                        <h5 class="fw-normal text-600" id="director_dashboard_total">
                                          <?php
                                          $user_id = $session->get('user')->id;
                                          $builder = $db->table('director');
                                          $builder->where('user_id', $user_id);
                                          $query = $builder->get();
                                          $dir = $query->getResult();
                                          $dir_total = 0;
                                          foreach ($dir as $d) {
                                            $dir_total = $dir_total + $d->amount;
                                          }
                                          echo $cur . ' ' . number_format($dir_total, 2, '.', ',');
                                          ?>
                                        </h5>
                                        <h6 class="text-500 mb-0">Owners</h6>
                                      </div>
                                      <div class="col-12 border-top py-3">
                                        <h5 class="fw-normal text-600" id="investor_dashboard_total">
                                          <?php
                                          $user_id = $session->get('user')->id;
                                          $builder = $db->table('investor');
                                          $builder->where('user_id', $user_id);
                                          $query = $builder->get();
                                          $inv = $query->getResult();
                                          $inv_total = 0;
                                          foreach ($inv as $i) {
                                            $inv_total = $inv_total + $i->amount;
                                          }
                                          echo $cur . ' ' . number_format($inv_total, 2, '.', ',');
                                          ?>
                                        </h5>
                                        <h6 class="text-500 mb-0">Investors</h6>
                                      </div>
                                      <div class="col-12 border-top py-3">
                                        <h5 class="fw-normal text-600" id="finance_dashboard_total">
                                          <?php
                                          //Bailey here we need to fetch the issued shares value
                                          $user_id = $session->get('user')->id;
                                          $query = $db->query('select *from issues_table WHERE user_id="' . $user_id . '"');
                                          $row = $query->getRow();
                                          if ($query->getNumRows() >= 1) {
                                            $issued_shares = (int) $row->issues_shared_1;
                                            $price = (int) $row->price_share2_1;
                                            $capitalisation = $issued_shares * $price;
                                          } else {
                                            $capitalisation = 0;
                                          }
                                          echo $cur . ' ' . number_format($capitalisation, 2, '.', ',');
                                          ?>
                                        </h5>
                                        <h6 class="text-500 mb-0">Finance</h6>
                                      </div>
                                      <h6 class="text-700 mb-0 mt-3">Total Funding </h6>
                                      <h3 class="pt-2">
                                        <?php if (isset($data['everydata'])) { ?>
                                          <?php echo $cur . ' ' . number_format(((int) $data['everydata'][0]['loan_amount'] + (int) $capitalisation + (int) $dir_total + (int) $inv_total), 2, '.', ','); ?>
                                        <?php } ?>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xxl-9">
                                <div class="tab-content">
                                  <!-- Find the JS file for the following chart at: src/js/charts/echarts/crm-revenue.js-->
                                  <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js-->
                                  <!-- ===============================================-->
                                  <!--    Tab Pane Content-->
                                  <!-- ===============================================-->
                                  <div class="tab-pane active" id="crm-finance" role="tabpanel" aria-labelledby="crm-finance-tab">
                                    <div class="row align-items-center">
                                      <div class="col-md-12 col-xxl-6 mb-xxl-6">
                                        <div class="card h-700">
                                          <div class="card-header d-flex flex-between-center py-2">
                                            <h6 class="mb-0">Bank Finance</h6>
                                          </div><!-- /.card header -->
                                          <div class="card-body d-flex flex-column justify-content-between">
                                            <div class="row align-items-center">
                                              <div class="col-md-5 col-xxl-12 mb-xxl-1">
                                                <div class="position-relative">
                                                  <!-- Find the JS file for the following chart at: src/js/charts/echarts/most-leads.js-->
                                                  <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js-->
                                                  <div class="echart-most-leads my-2" data-echart-responsive="true"></div>
                                                  <div class="position-absolute top-50 start-50 translate-middle text-center">
                                                    <p class="fs--1 mb-0 text-400 font-sans-serif fw-medium">Total</p>
                                                    <p class="fs-3 mb-0 font-sans-serif fw-medium mt-n2">15.6k</p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="col-xxl-12 col-md-7">
                                                <hr class="mx-ncard ot-3mb-0 d-md-none d-xxl-block" />
                                                <div class="d-flex flex-between-center border-bottom py-3 pt-md-0 pt-xxl-3">
                                                  <div class="d-flex"><i class="fas fa-money-check-alt fa-1x text-success  me-2" aria-hidden="true"></i>
                                                    <h6 class="text-700 mb-0"> Principle Amount </h6>
                                                  </div><!-- /.d flex -->
                                                  <p class="fs--1 text-500 mb-0 fw-semi-bold"></p>
                                                  <h6 class="text-700 mb-0" id="loanAmountText">
                                                  <?php if (isset($loan_amount)) { ?>
                                                    <?php echo $cur . ' ' . number_format($loan_amount, 0, '.', ','); ?>
                                                    <?php } ?>
                                                  </h6>
                                                </div><!-- /.d flex -->
                                                <div class="form-group text-center">
                                                  <input name="loanAmount" id="loanAmount" type="range" min="0" max="10000000" step="50000" value="<?= (isset($loan_amount)) ? $loan_amount : '' ?>" class="RangeSelectorDOE" />
                                                </div><!-- /.form group -->
                                                <div class="d-flex flex-between-center border-bottom py-3">
                                                  <div class="d-flex"><i class="fas fa-calendar-alt  fa-1x text-primary  me-2" aria-hidden="true"></i>
                                                    <h6 class="text-700 mb-0">Loan Term </h6>
                                                  </div><!-- /.d flex -->
                                                  <h6 class="text-700 mb-0" id="loanYearText"><?= (isset($loan_length)) ? $loan_length : '0' ?></h6>
                                                </div><!-- /.d flex -->

                                                <div class="form-group text-center">
                                                  <input name="loanYear" id="loanYear" type="range" min="1" max="30" step="1" value="<?= (isset($loan_length)) ? $loan_length : '' ?>" class="RangeSelectorDOE" />
                                                </div><!-- /.form group -->
                                                <div class="d-flex flex-between-center border-bottom py-3">
                                                  <div class="d-flex"><i class="fas fa-percent fa-1x text-danger  me-2" aria-hidden="true"></i>
                                                    <h6 class="text-700 mb-0">Interest Rate </h6>
                                                  </div><!-- /.d flex -->
                                                  <h6 class="text-700 mb-0" id="loanIntrestText"><?= (isset($annual_interest)) ? $annual_interest : '0' ?>%</h6>
                                                </div><!-- /.d flex -->


                                                <div class="form-group text-center">
                                                  <input name="loanIntrest" id="loanIntrest" type="range" min="1" max="50" step="0.5" value="<?= (isset($annual_interest)) ? $annual_interest : '0' ?>" class="RangeSelectorDOE" />
                                                </div><!-- /.form group -->


                                                <div class="d-flex flex-between-center border-bottom py-3 border-bottom-0 pb-0 mb-5">
                                                  <div class="d-flex"><i class="fas fa-calculator fa-1x text-warning  me-2" aria-hidden="true"></i>
                                                    <h6 class="text-700 mb-0">Re Payment </h6>
                                                  </div><!-- /.d flex -->
                                                  <h6 class="text-700 mb-0">53%</h6>
                                                </div><!-- /.d flex -->


                                              </div><!-- /.col-6 -->
                                            </div><!-- /.row -->
                                          </div><!-- /.card body -->
                                        </div><!-- /.card -->

                                      </div>


                                      <div class="col-md-12 col-xxl-6 mb-xxl-6">
                                        <div class="card h-700">
                                          <div class="card-header d-flex flex-between-center py-2">
                                            <h6 class="mb-0">Principle and Interest</h6>
                                          </div><!-- /.card header -->
                                          <div class="card-body" style="height:100%">
                                            <!-- Find the JS file for the following chart at: src/js/charts/echarts/closed-vs-goal.js-->
                                            <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js-->
                                            <div class="echart-closed-vs-goal" data-echart-responsive="true"></div>
                                          </div><!-- /.card body -->
                                        </div><!-- /.card  -->
                                      </div><!-- /.col-6 -->


                                    </div><!-- /.row -->

                                    <div class="float-end p-2">
                                      <button type="button" onclick="saveFinance();" class="btn btn-outline-success"><i class="fa fa-save fa-1x" aria-hidden="true"></i> Save and Continue</button>
                                    </div><!-- /.float -->

                                  </div><!-- /.tab pane -->



                                  <!-- ===============================================-->
                                  <!--    Tab Pane Content-->
                                  <!-- ===============================================-->
                                  <div class="tab-pane" id="crm-owners" role="tabpanel" aria-labelledby="crm-owners-tab">

                                    <div class="card h-700">
                                      <div class="card-header d-flex flex-between-center py-2">
                                        <h6 class="mb-0">Owners Contributions</h6>
                                      </div><!-- /.card header -->

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
                                  </div><!-- /.tab pane -->


                                  <!-- ===============================================-->
                                  <!--    Tab Pane Content-->
                                  <!-- ===============================================-->
                                  <div class="tab-pane" id="crm-investors" role="tabpanel" aria-labelledby="crm-investors-tab">

                                    <div class="card h-700">
                                      <div class="card-header d-flex flex-between-center py-2">
                                        <h6 class="mb-0">Investors Contributions</h6>
                                      </div><!-- /.card header -->

                                      <div class="card-body" style="height:439px">
                                        <div style="overflow-y: scroll;">

                                          <!-- chart-responsive begins-->
                                          <div class="chart-responsive" id="investor_chartbox">
                                            <!-- <p class=" p-2">Who's eating the pie?</p> -->
                                            <canvas id="investor_canvas" height="40" width="266"> </canvas>
                                          </div> <!-- ./chart-responsive ends-->
                                        </div><!-- /.card scroll-->
                                      </div><!-- /.card body-->

                                    </div><!-- /.card -->
                                  </div><!-- /.tab pane -->

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <!-- ===============================================-->
            <!--    Startup Costs Stages-->
            <!-- ===============================================-->
            <div class="card mb-3">

              <div class="card-body position-relative">
                <div class="row">
                  <div class="col-lg-12">
                    <h3>Startup Costs</h3>

                    <p class="mt-2">
                      Let's evaluate your startup costs, these are the initial costs to get your company up and running.
                    </p>

                    <div class="row mb-3 g-3">
                      <div class="col-lg-12 col-xxl-12">

                        <div class="card">
                          <div class="card-header d-flex flex-between-center ps-0 py-0 border-bottom">
                            <ul class="nav nav-tabs border-0 flex-nowrap tab-active-caret" id="crm-ont-chart-tab" role="tablist" data-tab-has-echarts="data-tab-has-echarts">
                              <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0 active" id="crm-ont-tab" data-bs-toggle="tab" href="#crm-ont" role="tab" aria-controls="crm-ont" aria-selected="true">One- Time Costs</a></li>
                              <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-oe-tab" data-bs-toggle="tab" href="#crm-pe" role="tab" aria-controls="crm-pe" aria-selected="false">Plant and Equipment</a></li>
                              <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-lb-tab" data-bs-toggle="tab" href="#crm-lb" role="tab" aria-controls="crm-lb" aria-selected="false">Land and Building</a></li>

                            </ul>
                            <a class="btn btn-outline-info float-end" data-html="true" data-bs-placement="auto" data-popover-content="#ont" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true"></i></a>

                            <!--<div class="dropdown font-sans-serif btn-reveal-trigger">
              <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-session-by-country" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
              <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-session-by-country"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
              </div>
            </div>-->

                          </div>

                          <div>
                            <!-- Popover #1 -->
                            <!-- Content for Popover #1 -->
                            <div class="hidden d-none" id="ont">
                              <div class="popover-heading">
                                Help Center
                              </div><!-- /.popover heading-->
                              <div class="popover-body">
                                <!--<h5 class="card-title">Special title treatment</h5>-->
                                <p>
                                  Who are the owners? how cash has been contributed start the business?
                                </p>
                                <ul>
                                  <li>Add a owner</li>
                                  <li>Enter cash raised</li>
                                  <li>Issue shares</li>
                                  <li>Add type of share</li>
                                  <li>Add profit percentage</li>
                                  <li>Select payment frequency</li>
                                </ul><!-- /.ul-->

                              </div><!-- /.popover body  -->
                            </div><!-- /.hidden -->
                          </div><!-- /.p-2 -->



                          <div class="card-body">
                            <div class="row g-1">
                              <div class="col-xxl-3">
                                <div class="row g-0 my-2">
                                  <div class="col-md-6 col-xxl-12">
                                    <div class="border-xxl-bottom border-xxl-200 mt-2 mb-2">
                                    </div>
                                  </div>
                                  <div class="col-md-6 col-xxl-12 py-2 mt-0">
                                    <div class="row mx-0">
                                      <div class="col-12 border-top py-3">
                                        <h5 class="fw-normal text-600" id="landbuilding_dashboard_total">

                                          <?php
                                          $user_id = $session->get('user')->id;
                                          $builder = $db->table('one_time_cost');
                                          $builder->where('user_id', $user_id);
                                          $builder->where('one_time_cost', 'Land_Buildings');
                                          $query = $builder->get();
                                          $Land = $query->getResult();
                                          $la_total = 0;
                                          foreach ($Land as $la) {
                                            $la_total = $la_total + $la->amount_paid;
                                          }
                                          if ($la_total) {
                                            echo $cur . ' ' . number_format($la_total, 2, '.', ',');
                                          }
                                          ?>
                                        </h5>
                                        <h6 class="text-500 mb-0">Land and Building</h6>
                                      </div>
                                      <div class="col-12 border-top py-3">
                                        <h5 class="fw-normal text-600" id="plantequipment_dashboard_total">
                                          <?php
                                          $user_id = $session->get('user')->id;
                                          $builder = $db->table('one_time_cost');
                                          $builder->where('user_id', $user_id);
                                          $builder->where('one_time_cost', 'Plant_Equipment');
                                          $query = $builder->get();
                                          $Land = $query->getResult();
                                          $pe_total = 0;
                                          foreach ($Land as $la) {
                                            $pe_total = $pe_total + $la->total_cost;
                                          }
                                          if ($pe_total) {
                                            echo $cur . ' ' . number_format($pe_total, 2, '.', ',');
                                          }
                                          ?>

                                        </h5>
                                        <h6 class="text-500 mb-0">Plant and Equipment</h6>
                                      </div>


                                      <div class="col-12 border-top py-3">
                                        <h5 class="fw-normal text-600" id="security_deposits_dashboard_total">

                                          <?php
                                          $user_id = $session->get('user')->id;
                                          $builder = $db->table('one_time_cost');
                                          $builder->where('user_id', $user_id);
                                          $builder->where('one_time_cost', 'Security_Deposit');
                                          $query = $builder->get();
                                          $Land = $query->getResult();
                                          $sd_total = 0;
                                          foreach ($Land as $sd) {
                                            $sd_total = $sd_total + $sd->total_cost;
                                          }
                                          if ($sd_total) {
                                            echo $cur . ' ' . number_format($sd_total, 2, '.', ',');
                                          }
                                          ?>

                                        </h5>
                                        <h6 class="text-500 mb-0">Security Deposits</h6>
                                      </div>


                                      <div class="col-12 border-top py-3">
                                        <h5 class="fw-normal text-600" id="Intellectual_Property_dashboard_total">

                                          <?php
                                          $user_id = $session->get('user')->id;
                                          $builder = $db->table('one_time_cost');
                                          $builder->where('user_id', $user_id);
                                          $builder->where('one_time_cost', 'Interlectual_Property');
                                          $query = $builder->get();
                                          $Land = $query->getResult();
                                          $ip_total = 0;
                                          foreach ($Land as $ip) {
                                            $ip_total = $ip_total + $ip->total_cost;
                                          }
                                          if ($sd_total) {
                                            echo $cur . ' ' . number_format($ip_total, 2, '.', ',');
                                          }
                                          ?>

                                        </h5>
                                        <h6 class="text-500 mb-0">Intellectual Property</h6>
                                      </div>
                                      <div class="col-12 border-top py-3">
                                        <h5 class="fw-normal text-600" id="onetimecost_dashboard_total">
                                          <?php
                                          $user_id = $session->get('user')->id;
                                          $builder = $db->table('one_time_cost');
                                          $builder->where('user_id', $user_id);
                                          $builder->where('one_time_cost', 'ONE_TIME_COSTS');
                                          $query = $builder->get();
                                          $Land = $query->getResult();
                                          $ot_total = 0;
                                          foreach ($Land as $ot) {
                                            $ot_total = $ot_total + $ot->total_cost;
                                          }
                                          if ($ot_total) {
                                            echo $cur . ' ' . number_format($ot_total, 2, '.', ',');
                                          }
                                          ?>
                                        </h5>
                                        <h6 class="text-500 mb-0">One-Time Costs</h6>
                                      </div>

                                      <h6 class="text-700 mb-0 mt-3">Total Startup Costs </h6>


                                      <h3> <?php echo $cur . ' ' . number_format($la_total + $pe_total + $sd_total + $ip_total + $ot_total, 2, '.', ','); ?></h3>

                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-xxl-9">
                                <div class="tab-content">
                                  <!-- Find the JS file for the following chart at: src/js/charts/echarts/crm-revenue.js-->
                                  <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js-->

                                  <!-- ===============================================-->
                                  <!--    Tab Pane Content-->
                                  <!-- ===============================================-->
                                  <div class="tab-pane active" id="crm-ont" role="tabpanel" aria-labelledby="crm-ont-tab">

                                    <div class="card h-700">
                                      <div class="card-header d-flex flex-between-center py-2">
                                        <h6 class="mb-0">One-Time Costs</h6>
                                      </div><!-- /.card header -->

                                      <div class="card-body" style="height:439px">

                                        <!--<p class="card-text">Who has contributed funds to start the business?</p>
                            <p class="card-text">We show a pie chart linked to the Directors and amount contributed.</p>-->
                                        <div class="chart-responsive" id="onetimecost_chartbox">
                                          <canvas id="oneTimeCost_canvas" height="200" width="200"> </canvas>
                                        </div>

                                      </div><!-- /.card body -->
                                    </div><!-- /.card -->

                                  </div><!-- /.tab pane -->



                                  <!-- ===============================================-->
                                  <!--    Tab Pane Content-->
                                  <!-- ===============================================-->
                                  <div class="tab-pane" id="crm-pe" role="tabpanel" aria-labelledby="crm-pe-tab">

                                    <div class="card h-700">
                                      <div class="card-header d-flex flex-between-center py-2">
                                        <h6 class="mb-0">Plant and Equipment</h6>
                                      </div><!-- /.card header -->

                                      <div class="card-body" style="height:439px">

                                        <!--<p class="card-text">Who has contributed funds to start the business?</p>
                              <p class="card-text">We show a pie chart linked to the Directors and amount contributed.</p>-->
                                        <div class="chart-responsive" id="plantEquipment_chartbox">
                                          <canvas id="plandAndEquipment_canvas" height="150" width="150"></canvas>
                                        </div>

                                      </div><!-- /.card body -->
                                    </div><!-- /.card -->


                                  </div><!-- /.tab pane -->


                                  <!-- ===============================================-->
                                  <!--    Tab Pane Content-->
                                  <!-- ===============================================-->
                                  <div class="tab-pane" id="crm-lb" role="tabpanel" aria-labelledby="crm-lb-tab">

                                    <div class="card h-700">
                                      <div class="card-header d-flex flex-between-center py-2">
                                        <h6 class="mb-0">Land and Building</h6>
                                      </div><!-- /.card header -->

                                      <div class="card-body" style="height:439px">
                                        <!--<p class="card-text">Who has contributed funds to start the business?</p>
                                  <p class="card-text">We show a pie chart linked to the Directors and amount contributed.</p>-->
                                        <div class="chart-responsive" id="landBuilding_chartbox">
                                          <canvas id="landAndBuilding_canvas" height="200" width="200"> </canvas>
                                        </div>
                                      </div><!-- /.card body -->
                                    </div><!-- /.card -->
                                  </div><!-- /.tab pane -->
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-xxl-12 pb-3">
              <div class="card h-100">
                <div class="card-header d-flex flex-between-center border-bottom border-200 py-2">
                  <h6 class="mb-0">Deal Forecast</h6>
                  <div class="dropdown font-sans-serif btn-reveal-trigger">
                    <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="crm-deal-forecast-bar" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                    <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="crm-deal-forecast-bar"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                      <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                    </div>
                  </div>
                </div>
                <div class="card-body d-flex align-items-center">
                  <div class="w-100">
                    <h3 class="text-700 mb-6">$90,439</h3>
                    <div class="progress overflow-visible rounded-3 font-sans-serif fw-medium fs--1 mt-xxl-auto" style="height: 20px;">
                      <div class="progress-bar overflow-visible bg-progress-gradient border-end border-white border-2 rounded-end rounded-pill text-start" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><span class="text-700 mt-n6">$47.8k</span></div>
                      <div class="progress-bar overflow-visible bg-soft-primary border-end border-white border-2 text-start" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"><span class="text-700 mt-n6">$20.2k</span></div>
                      <div class="progress-bar overflow-visible bg-soft-info border-end border-white border-2 text-start" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"><span class="text-700 mt-n6">$18k</span></div>
                      <div class="progress-bar overflow-visible bg-info rounded-start rounded-pill text-start" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="15" aria-valuemax="100"><span class="text-700 mt-n6">$16k</span></div>
                    </div>
                    <div class="row fs--1 fw-semi-bold text-500 mt-3 g-0 mt-3 mt-xxl-4">
                      <div class="col-auto d-flex align-items-center pe-3"><span class="dot bg-primary"></span><span>Closed won</span><span class="d-none d-md-inline-block d-lg-none d-xxl-inline-block">(100%)</span></div>
                      <div class="col-auto d-flex align-items-center pe-3"><span class="dot bg-soft-primary"></span><span>Contact sent</span><span class="d-none d-md-inline-block d-lg-none d-xxl-inline-block">(5%)</span></div>
                      <div class="col-auto d-flex align-items-center pe-3"><span class="dot bg-soft-info"></span><span>Pending</span><span class="d-none d-md-inline-block d-lg-none d-xxl-inline-block">(5%)</span></div>
                      <div class="col-auto d-flex align-items-center"><span class="dot bg-info"></span><span>Qualified</span><span class="d-none d-md-inline-block d-lg-none d-xxl-inline-block">(20%)</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="row mb-3 g-3">
              <div class="col-lg-12 col-xxl-12">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-4 border-lg-end border-bottom border-lg-0 pb-3 pb-lg-0">
                        <div class="d-flex flex-between-center mb-3">
                          <div class="d-flex align-items-center">
                            <div class="icon-item icon-item-sm bg-soft-primary shadow-none me-2 bg-soft-primary"><span class="fs--2 fas fa-phone text-primary"></span></div>
                            <h6 class="mb-0">New Contact</h6>
                          </div>
                          <div class="dropdown font-sans-serif btn-reveal-trigger">
                            <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-new-contact" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                            <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-new-contact"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex">
                          <div class="d-flex">
                            <p class="font-sans-serif lh-1 mb-1 fs-4 pe-2">15%</p>
                            <div class="d-flex flex-column"> <span class="me-1 text-success fas fa-caret-up text-primary"></span>
                              <p class="fs--2 mb-0 text-nowrap">2500 vs 2683 </p>
                            </div>
                          </div>
                          <div class="echart-crm-statistics w-100 ms-2" data-echart-responsive="true" data-echarts='{"series":[{"type":"line","data":[220,230,150,175,200,170,70,160],"color":"#2c7be5","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"#2c7be53A"},{"offset":1,"color":"#2c7be50A"}]}}}],"grid":{"bottom":"-10px"}}'></div>
                        </div>
                      </div>
                      <div class="col-lg-4 border-lg-end border-bottom border-lg-0 py-3 py-lg-0">
                        <div class="d-flex flex-between-center mb-3">
                          <div class="d-flex align-items-center">
                            <div class="icon-item icon-item-sm bg-soft-primary shadow-none me-2 bg-soft-info"><span class="fs--2 fas fa-user text-info"></span></div>
                            <h6 class="mb-0">New Users</h6>
                          </div>
                          <div class="dropdown font-sans-serif btn-reveal-trigger">
                            <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-new-users" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                            <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-new-users"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex">
                          <div class="d-flex">
                            <p class="font-sans-serif lh-1 mb-1 fs-4 pe-2">13%</p>
                            <div class="d-flex flex-column"> <span class="me-1 text-success fas fa-caret-up text-success"></span>
                              <p class="fs--2 mb-0 text-nowrap">1635 vs 863 </p>
                            </div>
                          </div>
                          <div class="echart-crm-statistics w-100 ms-2" data-echart-responsive="true" data-echarts='{"series":[{"type":"line","data":[90,160,150,120,230,155,220,240],"color":"#27bcfd","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"#27bcfd3A"},{"offset":1,"color":"#27bcfd0A"}]}}}],"grid":{"bottom":"-10px"}}'></div>
                        </div>
                      </div>
                      <div class="col-lg-4 pt-3 pt-lg-0">
                        <div class="d-flex flex-between-center mb-3">
                          <div class="d-flex align-items-center">
                            <div class="icon-item icon-item-sm bg-soft-primary shadow-none me-2 bg-soft-success"><span class="fs--2 fas fa-bolt text-success"></span></div>
                            <h6 class="mb-0">New Leads</h6>
                          </div>
                          <div class="dropdown font-sans-serif btn-reveal-trigger">
                            <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-new-leads" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                            <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-new-leads"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex">
                          <div class="d-flex">
                            <p class="font-sans-serif lh-1 mb-1 fs-4 pe-2">16%</p>
                            <div class="d-flex flex-column"> <span class="me-1 text-success fas fa-caret-down text-danger"></span>
                              <p class="fs--2 mb-0 text-nowrap">1423 vs 256 </p>
                            </div>
                          </div>
                          <div class="echart-crm-statistics w-100 ms-2" data-echart-responsive="true" data-echarts='{"series":[{"type":"line","data":[200,150,175,130,150,115,130,100],"color":"#00d27a","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"#00d27a3A"},{"offset":1,"color":"#00d27a0A"}]}}}],"grid":{"bottom":"-10px"}}'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>










                <div class="card">
                  <div class="card-header d-flex flex-between-center ps-0 py-0 border-bottom">
                    <ul class="nav nav-tabs border-0 flex-nowrap tab-active-caret" id="crm-revenue-chart-tab" role="tablist" data-tab-has-echarts="data-tab-has-echarts">
                      <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0 active" id="crm-revenue-tab" data-bs-toggle="tab" href="#crm-revenue" role="tab" aria-controls="crm-revenue" aria-selected="true">Revenue</a></li>
                      <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-users-tab" data-bs-toggle="tab" href="#crm-users" role="tab" aria-controls="crm-users" aria-selected="false">Users</a></li>
                      <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-deals-tab" data-bs-toggle="tab" href="#crm-deals" role="tab" aria-controls="crm-deals" aria-selected="false">Deals</a></li>
                      <li class="nav-item" role="presentation"><a class="nav-link py-3 mb-0" id="crm-profit-tab" data-bs-toggle="tab" href="#crm-profit" role="tab" aria-controls="crm-profit" aria-selected="false">Profit</a></li>
                    </ul>
                    <div class="dropdown font-sans-serif btn-reveal-trigger">
                      <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-session-by-country" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                      <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-session-by-country"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                        <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row g-1">
                      <div class="col-xxl-3">
                        <div class="row g-0 my-2">
                          <div class="col-md-12 col-xxl-12">
                            <div class="border-xxl-bottom border-xxl-200 mb-2">
                              <h2 class="text-primary">$37,950</h2>
                              <p class="fs--2 text-500 fw-semi-bold mb-0"><span class="fas fa-circle text-primary me-2"></span>Closed Amount</p>
                              <p class="fs--2 text-500 fw-semi-bold"><span class="fas fa-circle text-warning me-2"></span>Revenue Goal</p>
                            </div>
                            <div class="form-check form-check-inline me-2">
                              <input class="form-check-input" id="crmInbound" type="radio" name="bound" value="inbound" Checked="Checked" />
                              <label class="form-check-label" for="crmInbound">Inbound</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" id="outbound" type="radio" name="bound" value="outbound" />
                              <label class="form-check-label" for="outbound">Outbound</label>
                            </div>
                          </div>
                          <div class="col-md-12 col-xxl-12 py-2">
                            <div class="row mx-0">
                              <div class="col-12 border-end border-bottom py-3">
                                <h5 class="fw-normal text-600">$4.2k</h5>
                                <h6 class="text-500 mb-0">Email</h6>
                              </div>
                              <div class="col-12 border-bottom py-3">
                                <h5 class="fw-normal text-600">$5.6k</h5>
                                <h6 class="text-500 mb-0">Social</h6>
                              </div>
                              <div class="col-12 border-end py-3">
                                <h5 class="fw-normal text-600">$6.7k</h5>
                                <h6 class="text-500 mb-0">Call</h6>
                              </div>
                              <div class="col-12 py-3">
                                <h5 class="fw-normal text-600">$2.3k</h5>
                                <h6 class="text-500 mb-0">Other</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-9">
                        <div class="tab-content">
                          <!-- Find the JS file for the following chart at: src/js/charts/echarts/crm-revenue.js-->
                          <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js-->
                          <div class="tab-pane active" id="crm-revenue" role="tabpanel" aria-labelledby="crm-revenue-tab">
                            <div class="echart-crm-revenue" data-echart-responsive="true" data-echart-tab="data-echart-tab" style="height:320px;"></div>
                          </div>
                          <div class="tab-pane" id="crm-users" role="tabpanel" aria-labelledby="crm-users-tab">
                            <div class="echart-crm-users" data-echart-responsive="true" data-echart-tab="data-echart-tab" style="height:320px;"></div>
                          </div>
                          <div class="tab-pane" id="crm-deals" role="tabpanel" aria-labelledby="crm-deals-tab">
                            <div class="echart-crm-deals" data-echart-responsive="true" data-echart-tab="data-echart-tab" style="height:320px;"></div>
                          </div>
                          <div class="tab-pane" id="crm-profit" role="tabpanel" aria-labelledby="crm-profit-tab">
                            <div class="echart-crm-profit" data-echart-responsive="true" data-echart-tab="data-echart-tab" style="height:320px;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>







              <div class="col-xxl-12">
                <div class="card h-100">
                  <div class="card-header d-flex flex-between-center border-bottom py-2">
                    <h6 class="mb-0">Deal Storage Funnel</h6><a class="btn btn-link btn-sm px-0 shadow-none" href="#!">View Details<span class="fas fa-chevron-right ms-1 fs--2"></span></a>
                  </div>
                  <div class="card-body">
                    <div class="row rtl-row-reverse g-1">
                      <div class="col">
                        <div class="d-flex flex-between-center rtl-row-reverse">
                          <h6 class="fs--2 text-500">Deal Stage</h6>
                          <h6 class="fs--2 text-500">Count of Deals</h6>
                        </div>
                      </div>
                      <div class="col-auto">
                        <h6 class="fs--2 text-500">Conversion </h6>
                      </div>
                    </div>
                    <!-- Find the JS file for the following chart at: src/js/charts/echarts/deal-storage-funnel.js-->
                    <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js-->
                    <div class="echart-deal-storage-funnel" data-echart-responsive="true" data-options='{"data":[7,10,13,19,19],"dataAxis1":["Processing","Contact won","Contact Sent","Qualified to Buy","Created"],"dataAxis2":["50%","70%","76%","68%","99%"]}'></div>
                  </div>
                </div>
              </div>

              <div class="col-xxl-12">
                <div class="card overflow-hidden">
                  <div class="card-header">
                    <h6 class="mb-0">Deal Forecast by Owner</h6>
                  </div>
                  <div class="card-body p-0">
                    <div class="table-responsive scrollbar">
                      <table class="table mb-0 fs--1 border-200 table-borderless">
                        <thead class="bg-light">
                          <tr class="text-800 bg-200">
                            <th class="text-nowrap">Owner</th>
                            <th class="text-center text-nowrap">Qualified to buy</th>
                            <th class="text-center text-nowrap">Appointment </th>
                            <th class="text-end text-nowrap">Contact sent</th>
                            <th class="pe-card text-end text-nowrap">Closed won</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-bottom border-200">
                            <td class="align-middle font-sans-serif fw-medium text-nowrap"><a href="../app/e-commerce/customer-details.html">John oliver</a></td>
                            <td class="align-middle text-center">1000</td>
                            <td class="align-middle text-center">$2600</td>
                            <td class="align-middle text-center">$3523</td>
                            <td class="align-middle text-end">$1311</td>
                          </tr>
                          <tr class="border-bottom border-200">
                            <td class="align-middle font-sans-serif fw-medium text-nowrap"><a href="../app/e-commerce/customer-details.html">Sean Paul</a></td>
                            <td class="align-middle text-center">1500</td>
                            <td class="align-middle text-center">$1600</td>
                            <td class="align-middle text-center">$3523</td>
                            <td class="align-middle text-end">$2311</td>
                          </tr>
                          <tr class="border-bottom border-200">
                            <td class="align-middle font-sans-serif fw-medium text-nowrap"><a href="../app/e-commerce/customer-details.html">Brad Shaw</a></td>
                            <td class="align-middle text-center">1400</td>
                            <td class="align-middle text-center">$2200</td>
                            <td class="align-middle text-center">$3523</td>
                            <td class="align-middle text-end">$3311</td>
                          </tr>
                          <tr>
                            <td class="align-middle font-sans-serif fw-medium text-nowrap"><a href="../app/e-commerce/customer-details.html">Max Payne</a></td>
                            <td class="align-middle text-center">6600</td>
                            <td class="align-middle text-center">$2220</td>
                            <td class="align-middle text-center">$3523</td>
                            <td class="align-middle text-end">$1511</td>
                          </tr>
                        </tbody>
                        <tfoot class="bg-light">
                          <tr class="text-700 fw-bold">
                            <td>Total</td>
                            <td class="text-center">$6359</td>
                            <td class="text-center"> $8151</td>
                            <td class="text-center"> $9174</td>
                            <td class="pe-card text-end"> $12587</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>






            <div class="row mb-3 g-3">
              <div class="col-lg-7">
                <div class="card" id="CrmLocationBySessionTable" data-list='{"valueNames":["country","sessions","users"],"page":3,"pagination":true}'>
                  <div class="card-header d-flex flex-between-center bg-light py-2">
                    <h6 class="mb-0">Location By Session</h6>
                    <div class="d-flex">
                      <div class="btn-reveal-trigger">
                        <button class="btn btn-link btn-reveal btn-sm location-by-session-map-reset" type="button"><span class="fas fa-sync-alt fs--1"></span></button>
                      </div>
                      <div class="dropdown font-sans-serif btn-reveal-trigger">
                        <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="crm-location-by-session" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                        <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="crm-location-by-session"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                          <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body pb-0 position-relative">
                    <!-- Find the JS file for the following chart at: src/js/charts/echarts/location-by-session-crm.js-->
                    <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js-->
                    <div class="echart-location-by-session-map" data-echart-responsive="true" style="height:302px;"></div>
                    <div class="position-absolute top-0 border mt-3 border-200 rounded-3 bg-light">
                      <button class="btn btn-link btn-sm bg-100 rounded-bottom-0 px-2 location-by-session-map-zoom text-700" type="button"><span class="fas fa-plus fs--1"></span></button>
                      <hr class="bg-200 m-0" />
                      <button class="btn btn-link btn-sm bg-100 rounded-top-0 px-2 location-by-session-map-zoomOut text-700" type="button"><span class="fas fa-minus fs--1"></span></button>
                    </div>
                    <div class="table-responsive scrollbar mx-ncard mt-3">
                      <table class="table fs--1 mb-0">
                        <thead class="bg-200 text-800">
                          <tr>
                            <th class="sort" data-sort="country">Country</th>
                            <th class="sort" data-sort="sessions">Sessions</th>
                            <th class="sort" data-sort="users">Users</th>
                            <th class="sort text-end" style="width: 9.625rem;">Percentage</th>
                          </tr>
                        </thead>
                        <tbody class="list" id="table-crm-location-session">
                          <tr>
                            <td class="align-middle py-3"><a href="#!">
                                <div class="d-flex align-items-center"><img src="<?php echo site_url(); ?>template-assets/img/crm/india.png" alt="" />
                                  <p class="mb-0 ps-3 country text-700">India</p>
                                </div>
                              </a></td>
                            <td class="align-middle fw-semi-bold sessions">268,663</td>
                            <td class="users align-middle">325,633</td>
                            <td class="align-middle pe-card">
                              <div class="d-flex align-items-center justify-content-end">
                                <p class="mb-0 me-2">89%</p>
                                <div class="progress rounded-3 bg-200" style="height: 0.3125rem;width:3.8rem">
                                  <div class="progress-bar bg-primary rounded-pill" role="progressbar" style="width: 89%;" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="align-middle py-3"><a href="#!">
                                <div class="d-flex align-items-center"><img src="<?php echo site_url(); ?>template-assets/img/crm/uae.png" alt="" />
                                  <p class="mb-0 ps-3 country text-700">UAE</p>
                                </div>
                              </a></td>
                            <td class="align-middle fw-semi-bold sessions">250,663</td>
                            <td class="users align-middle">525,633</td>
                            <td class="align-middle pe-card">
                              <div class="d-flex align-items-center justify-content-end">
                                <p class="mb-0 me-2">62%</p>
                                <div class="progress rounded-3 bg-200" style="height: 0.3125rem;width:3.8rem">
                                  <div class="progress-bar bg-primary rounded-pill" role="progressbar" style="width: 62%;" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="align-middle py-3"><a href="#!">
                                <div class="d-flex align-items-center"><img src="<?php echo site_url(); ?>template-assets/img/crm/nepal.png" alt="" />
                                  <p class="mb-0 ps-3 country text-700">Nepal</p>
                                </div>
                              </a></td>
                            <td class="align-middle fw-semi-bold sessions">268,663</td>
                            <td class="users align-middle">325,633</td>
                            <td class="align-middle pe-card">
                              <div class="d-flex align-items-center justify-content-end">
                                <p class="mb-0 me-2">50%</p>
                                <div class="progress rounded-3 bg-200" style="height: 0.3125rem;width:3.8rem">
                                  <div class="progress-bar bg-primary rounded-pill" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="card-footer text-end p-0">
                    <div class="pagination d-none"></div>
                    <p class="mb-0 fs--1 px-card"><span class="d-none d-sm-inline-block me-2" data-list-info="data-list-info"> </span><span class="d-none d-sm-inline-block me-2">&mdash; </span><a class="btn btn-link btn-sm py-2 px-0" href="#!">View all<span class="fas fa-angle-right ms-1"></span></a></p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="row g-3">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header">
                        <h6 class="mb-0">Average Call Duration<span class="ms-1 text-400" data-bs-toggle="tooltip" data-bs-placement="top" title="Average call duration based of last 50 calls"><span class="far fa-question-circle" data-fa-transform="shrink-1"></span></span></h6>
                      </div>
                      <div class="card-body">
                        <div class="row g-3">
                          <div class="col">
                            <h4 class="text-primary fw-normal">10m:8s</h4>
                            <p class="fs--2 fw-semi-bold text-500 mb-0">Based on 50 calls</p>
                          </div>
                          <div class="col-auto pe-0 text-end">
                            <div class="echart-call-duration" data-echart-responsive="true" data-echarts='{"series":[{"type":"line","data":[8,15,12,14,18,12,12,25,13,12,10,13,35],"color":"#f5803e","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"#f5803e3A"},{"offset":1,"color":"#f5803e0A"}]}}}],"grid":{"bottom":"-10px","right":"0px"}}'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>







                  <div class="col-lg-12">
                    <div class="card h-100">
                      <div class="card-header d-flex flex-between-center border-bottom border-200 py-2">
                        <h6 class="mb-0">Lead Conversion</h6>
                        <div class="dropdown font-sans-serif btn-reveal-trigger">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="crm-lead-conversion" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="crm-lead-conversion"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                          </div>
                        </div>
                      </div>
                      <div class="card-body pt-0">
                        <div class="d-flex bg-100 py-2 mb-3 justify-content-center mx-ncard fs--1 border-bottom border-200">
                          <p class="text-600 mb-0 border-end border-200 px-card d-flex align-items-center">Current Rete: <span class="fs-sm-1 font-sans-serif ms-2 text-700"> 4.5%</span><span class="fas fa-caret-up ms-2 ms-xxl-3 fs--1 text-success"></span></p>
                          <p class="text-600 mb-0 px-card">Target Rete:<span class="fs-sm-1 font-sans-serif ms-2 text-700"> 6%</span></p>
                        </div>
                        <!-- Find the JS file for the following chart at: src/js/charts/echarts/lead-conversion.js-->
                        <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js
              <div class="echart-lead-conversion" data-echart-responsive="true"></div>

-->




                      </div>
                      <div class="card-footer bg-light p-0"><a class="btn btn-sm btn-link d-block py-2" href="#!">View Details<span class="fas fa-chevron-right ms-1 fs--2"></span></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div class="row g-3 mb-3">
              <div class="col-lg-5">
                <div class="card h-100">
                  <div class="card-header border-bottom">
                    <h6 class="mb-0">To Do List</h6>
                  </div>
                  <div class="card-body p-0 overflow-hidden">
                    <div class="row gx-3 align-items-center my-3 px-card">
                      <div class="col-auto">
                        <h6 class="text-primary mb-0">25%</h6>
                      </div>
                      <div class="col">
                        <div class="progress rounded-pill" style="height: 0.5625rem;">
                          <div class="progress-bar bg-progress-gradient rounded-pill" role="progressbar" style="width: 75%" aria-valuenow="43.72" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between hover-actions-trigger btn-reveal-trigger px-card hover-bg-100">
                      <div class="form-check mb-0 d-flex align-items-center">
                        <input class="form-check-input rounded-3 form-check-line-through p-2 mt-0 form-check-input-undefined" type="checkbox" id="crm-checkbox-todo-0" />
                        <label class="form-check-label mb-0 p-3" for="crm-checkbox-todo-0">Design a ad</label>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="hover-actions">
                          <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="fas fa-clock"></span></button>
                          <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="fas fa-user-plus"> </span></button>
                        </div>
                        <div class="dropdown font-sans-serif btn-reveal-trigger">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal-sm transition-none" type="button" id="crm-to-do-list-0" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="crm-to-do-list-0"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between hover-actions-trigger btn-reveal-trigger px-card hover-bg-100">
                      <div class="form-check mb-0 d-flex align-items-center">
                        <input class="form-check-input rounded-3 form-check-line-through p-2 mt-0 form-check-input-undefined" type="checkbox" id="crm-checkbox-todo-1" />
                        <label class="form-check-label mb-0 p-3" for="crm-checkbox-todo-1">Analyze Data</label>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="hover-actions">
                          <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="fas fa-clock"></span></button>
                          <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="fas fa-user-plus"> </span></button>
                        </div>
                        <div class="dropdown font-sans-serif btn-reveal-trigger">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal-sm transition-none" type="button" id="crm-to-do-list-1" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="crm-to-do-list-1"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between hover-actions-trigger btn-reveal-trigger px-card hover-bg-100">
                      <div class="form-check mb-0 d-flex align-items-center">
                        <input class="form-check-input rounded-3 form-check-line-through p-2 mt-0 form-check-input-undefined" type="checkbox" id="crm-checkbox-todo-2" />
                        <label class="form-check-label mb-0 p-3" for="crm-checkbox-todo-2">Youtube campaign</label>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="hover-actions">
                          <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="fas fa-clock"></span></button>
                          <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="fas fa-user-plus"> </span></button>
                        </div>
                        <div class="dropdown font-sans-serif btn-reveal-trigger">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal-sm transition-none" type="button" id="crm-to-do-list-2" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="crm-to-do-list-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between hover-actions-trigger btn-reveal-trigger px-card hover-bg-100">
                      <div class="form-check mb-0 d-flex align-items-center">
                        <input class="form-check-input rounded-3 form-check-line-through p-2 mt-0 form-check-input-undefined" type="checkbox" id="crm-checkbox-todo-3" />
                        <label class="form-check-label mb-0 p-3" for="crm-checkbox-todo-3">Assaign employee</label>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="hover-actions">
                          <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="fas fa-clock"></span></button>
                          <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="fas fa-user-plus"> </span></button>
                        </div>
                        <div class="dropdown font-sans-serif btn-reveal-trigger">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal-sm transition-none" type="button" id="crm-to-do-list-3" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="crm-to-do-list-3"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between hover-actions-trigger btn-reveal-trigger px-card hover-bg-100">
                      <div class="form-check mb-0 d-flex align-items-center">
                        <input class="form-check-input rounded-3 form-check-line-through p-2 mt-0 form-check-input-undefined" type="checkbox" id="crm-checkbox-todo-4" />
                        <label class="form-check-label mb-0 p-3" for="crm-checkbox-todo-4">Video Conference</label>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="hover-actions">
                          <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="fas fa-clock"></span></button>
                          <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="fas fa-user-plus"> </span></button>
                        </div>
                        <div class="dropdown font-sans-serif btn-reveal-trigger">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal-sm transition-none" type="button" id="crm-to-do-list-4" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="crm-to-do-list-4"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer bg-light p-0"><a class="btn btn-sm btn-link d-block py-2" href="#!"><span class="fas fa-plus me-1 fs--2"></span>Add New Task</a></div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="card" id="TableCrmRecentLeads" data-list='{"valueNames":["name","email","status"],"page":8,"pagination":true}'>
                  <div class="card-header d-flex flex-between-center py-2">
                    <h6 class="mb-0">Recent Leads</h6>
                    <div class="dropdown font-sans-serif btn-reveal-trigger">
                      <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="recent-leads-header-dropdownundefined" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                      <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="recent-leads-header-dropdownundefined"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                        <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body px-0 py-0">
                    <div class="table-responsive scrollbar">
                      <table class="table fs--1 mb-0">
                        <thead class="bg-200 text-800">
                          <tr>
                            <th class="py-3 white-space-nowrap" style="max-width: 30px;">
                              <div class="form-check mb-0 d-flex align-items-center">
                                <input class="form-check-input" id="checkbox-bulk-leads-select" type="checkbox" data-bulk-select='{"body":"table-recent-leads-body","actions":"table-recent-leads-actions","replacedElement":"table-recent-leads-replace-element"}' />
                              </div>
                            </th>
                            <th class="sort align-middle" data-sort="name">Name</th>
                            <th class="sort align-middle" data-sort="email">Email and Phone</th>
                            <th class="sort align-middle" data-sort="status">Status</th>
                            <th class="sort align-middle text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody class="list" id="table-recent-leads-body">
                          <tr class="hover-actions-trigger btn-reveal-trigger hover-bg-100">
                            <td class="align-middle" style="max-width: 30px;">
                              <div class="form-check mb-0">
                                <input class="form-check-input" type="checkbox" id="recent-leads-0" data-bulk-select-row="data-bulk-select-row" />
                              </div>
                            </td>
                            <td class="align-middle white-space-nowrap"><a href="../pages/user/profile.html">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-xl">
                                    <img class="rounded-circle" src="<?php echo site_url(); ?>template-assets/img/team/1-thumb.png" alt="" />

                                  </div>
                                  <h6 class="mb-0 ps-2 text-800 name">Kerry Ingram</h6>
                                </div>
                              </a></td>
                            <td class="align-middle white-space-nowrap text-primary email"><a href="mailto:john@gmail.com">john@gmail.com</a></td>
                            <td class="align-middle white-space-nowrap"><small class="badge fw-semi-bold rounded-pill status badge-soft-primary"> New Lead</small></td>
                            <td class="align-middle white-space-nowrap text-end position-relative">
                              <div class="hover-actions bg-100">
                                <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="far fa-edit"></span></button>
                                <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="far fa-comment"></span></button>
                              </div>
                              <div class="dropdown font-sans-serif btn-reveal-trigger">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal-sm transition-none" type="button" id="crm-recent-leads-0" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                                <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="crm-recent-leads-0"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                  <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="hover-actions-trigger btn-reveal-trigger hover-bg-100">
                            <td class="align-middle" style="max-width: 30px;">
                              <div class="form-check mb-0">
                                <input class="form-check-input" type="checkbox" id="recent-leads-1" data-bulk-select-row="data-bulk-select-row" />
                              </div>
                            </td>
                            <td class="align-middle white-space-nowrap"><a href="../pages/user/profile.html">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-xl">
                                    <img class="rounded-circle" src="<?php echo site_url(); ?>template-assets/img/team/2-thumb.png" alt="" />

                                  </div>
                                  <h6 class="mb-0 ps-2 text-800 name">Bradie Knowall</h6>
                                </div>
                              </a></td>
                            <td class="align-middle white-space-nowrap text-primary email"><a href="mailto:bradie@mail.ru">bradie@mail.ru</a></td>
                            <td class="align-middle white-space-nowrap"><small class="badge fw-semi-bold rounded-pill status badge-soft-primary"> New Lead</small></td>
                            <td class="align-middle white-space-nowrap text-end position-relative">
                              <div class="hover-actions bg-100">
                                <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="far fa-edit"></span></button>
                                <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="far fa-comment"></span></button>
                              </div>
                              <div class="dropdown font-sans-serif btn-reveal-trigger">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal-sm transition-none" type="button" id="crm-recent-leads-1" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                                <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="crm-recent-leads-1"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                  <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="hover-actions-trigger btn-reveal-trigger hover-bg-100">
                            <td class="align-middle" style="max-width: 30px;">
                              <div class="form-check mb-0">
                                <input class="form-check-input" type="checkbox" id="recent-leads-2" data-bulk-select-row="data-bulk-select-row" />
                              </div>
                            </td>
                            <td class="align-middle white-space-nowrap"><a href="../pages/user/profile.html">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-xl">
                                    <img class="rounded-circle" src="<?php echo site_url(); ?>template-assets/img/team/3-thumb.png" alt="" />

                                  </div>
                                  <h6 class="mb-0 ps-2 text-800 name">Jenny Horas</h6>
                                </div>
                              </a></td>
                            <td class="align-middle white-space-nowrap text-primary email"><a href="mailto:jenny@mail.ru">jenny@mail.ru</a></td>
                            <td class="align-middle white-space-nowrap"><small class="badge fw-semi-bold rounded-pill status badge-soft-warning"> Cold Lead</small></td>
                            <td class="align-middle white-space-nowrap text-end position-relative">
                              <div class="hover-actions bg-100">
                                <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="far fa-edit"></span></button>
                                <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="far fa-comment"></span></button>
                              </div>
                              <div class="dropdown font-sans-serif btn-reveal-trigger">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal-sm transition-none" type="button" id="crm-recent-leads-2" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                                <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="crm-recent-leads-2"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                  <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="hover-actions-trigger btn-reveal-trigger hover-bg-100">
                            <td class="align-middle" style="max-width: 30px;">
                              <div class="form-check mb-0">
                                <input class="form-check-input" type="checkbox" id="recent-leads-3" data-bulk-select-row="data-bulk-select-row" />
                              </div>
                            </td>
                            <td class="align-middle white-space-nowrap"><a href="../pages/user/profile.html">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-xl">
                                    <img class="rounded-circle" src="<?php echo site_url(); ?>template-assets/img/team/4-thumb.png" alt="" />

                                  </div>
                                  <h6 class="mb-0 ps-2 text-800 name">Chris Pratt</h6>
                                </div>
                              </a></td>
                            <td class="align-middle white-space-nowrap text-primary email"><a href="mailto:pratt@mail.ru">pratt@mail.ru</a></td>
                            <td class="align-middle white-space-nowrap"><small class="badge fw-semi-bold rounded-pill status badge-soft-warning"> New Lead</small></td>
                            <td class="align-middle white-space-nowrap text-end position-relative">
                              <div class="hover-actions bg-100">
                                <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="far fa-edit"></span></button>
                                <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="far fa-comment"></span></button>
                              </div>
                              <div class="dropdown font-sans-serif btn-reveal-trigger">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal-sm transition-none" type="button" id="crm-recent-leads-3" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                                <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="crm-recent-leads-3"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                  <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="hover-actions-trigger btn-reveal-trigger hover-bg-100">
                            <td class="align-middle" style="max-width: 30px;">
                              <div class="form-check mb-0">
                                <input class="form-check-input" type="checkbox" id="recent-leads-4" data-bulk-select-row="data-bulk-select-row" />
                              </div>
                            </td>
                            <td class="align-middle white-space-nowrap"><a href="../pages/user/profile.html">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-xl">
                                    <img class="rounded-circle" src="<?php echo site_url(); ?>template-assets/img/team/5-thumb.png" alt="" />

                                  </div>
                                  <h6 class="mb-0 ps-2 text-800 name">Andy Murray</h6>
                                </div>
                              </a></td>
                            <td class="align-middle white-space-nowrap text-primary email"><a href="mailto:andy@gmail.com">andy@gmail.com</a></td>
                            <td class="align-middle white-space-nowrap"><small class="badge fw-semi-bold rounded-pill status badge-soft-success"> Won Lead</small></td>
                            <td class="align-middle white-space-nowrap text-end position-relative">
                              <div class="hover-actions bg-100">
                                <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="far fa-edit"></span></button>
                                <button class="btn icon-item rounded-3 me-2 fs--2 icon-item-sm"><span class="far fa-comment"></span></button>
                              </div>
                              <div class="dropdown font-sans-serif btn-reveal-trigger">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal-sm transition-none" type="button" id="crm-recent-leads-4" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--2"></span></button>
                                <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="crm-recent-leads-4"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                  <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="card-footer bg-light p-0">
                    <div class="pagination d-none"></div><a class="btn btn-sm btn-link d-block py-2" href="#!">Show full list<span class="fas fa-chevron-right ms-1 fs--2"></span></a>
                  </div>
                </div>



              </div>
            </div>

          </div>
        </div>