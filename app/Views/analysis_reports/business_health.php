<!-- ===============================================-->
<!--   Wizard Tab 1  Content Details-->
<!-- ===============================================-->

<div class="tab-content">

  <div class="tab-pane active " role="tabpanel" aria-labelledby="bootstrap-wizard-tab1" id="bootstrap-wizard-tab1">
    <form novalidate="novalidate">
      <!--<p class="mt-2 text-primary">                         
                Make a list of al your office equipment that your will need to operate your company                                      
            </p>  -->

      <div class="card mb-1 mb-lg-0">
        <div class="card-header">
          <div class="row">
            <div class="col-lg-6">

              <h5 class="mb-0">Financial Diagnostics</h5>
            </div><!-- /.col-->
            <div class="col-lg-6">

              <a class="btn btn-falcon-outline-info float-end text-primary pt-3" data-html="true" data-bs-placement="auto" data-popover-content="#bh" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true"></i></a>
            </div><!-- /.col-->
          </div><!-- /.row-->
        </div><!-- /.header-->

        <div class="p-2">
          <div class="hidden d-none" id="bh">
            <div class="popover-heading"><span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png' /></span>
              Help Center
            </div>
            <div class="popover-body">

              <div class="card mb-3">
                <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);"></div>
                <!--/.bg-holder-->
                <div class="card-body position-relative">
                  <div class="row">
                    <div class="col-lg-12">
                      <h4 class="my-0 font-weight-normal">Financial Diagnostics</h4>
                      <p class="mt-2 fs--5">
                        This sheet performs a few tests on your numbers to see if they seem within certain reasonable ranges.
                        Remember, no computer can tell whether your projections are truly well-constructed, only a human can do that.
                        But these tests can at least look for values that are critically out of range.
                      </p>

                      <h5>How healthy is my business plan?</h5>
                      <ol>
                        <li>Click Add new Company Owner</li>
                        <li>Upload and image profile (Optional).</li>
                        <li>Enter a brief description about this Owner.</li>
                        <li>Add the name of the Owner.</li>
                        <li>Select a Role.</li>
                        <li>Enter the the number of shares this Director will own.</li>
                        <li>Enter the type of shares.</li>
                        <li>Enter the price per share.</li>
                        <li>AuziPlan will do the calculation for you.</li>
                        <li><a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-save fa-1x" aria-hidden="true"></i> Save and Continue</a></li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="card-body bg-light" style="width;500px;">
          <!--accordion table section sales qty starts -->

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading1"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">How much cash do you have to start you business?</button></h2>
              <div class="accordion-collapse collapse show" id="collapse1" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                <div class="accordion-body">

                  <table id="" class="table fs--1 mb-0 table-responsive" cellspacing="0" width="50%">
                    <thead class="bg-200 text-900">
                      <tr>
                        <th colspan='2'></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr class="table-danger">
                        <td width='100%'>Directors Capital Investment / Issued Shares</td>
                        <td>
                          <?php
                          $dir_total = 0;

                          foreach ($dir as $d) {
                            $dir_total = $dir_total + $d->amount;
                          }
                          echo $cur . ' ' . number_format($dir_total, 2, '.', ',');
                          ?>
                        </td>
                      </tr>
                      <tr class="table-success">
                        <td width='100%'>Investor Capital Investment</td>
                        <td>

                          <?php
                          $inv_total = 0;

                          foreach ($inv as $i) {
                            $inv_total = $inv_total + $i->amount;
                          }
                          echo $cur . ' ' . number_format($inv_total, 2, '.', ',');
                          ?>

                        </td>
                      </tr>

                      <tr class="table-warning">
                        <td width='100%'>Loan Amount</td>
                        <td>

                          <?php
                          $bl_total = 0;

                          foreach ($bankloan as $i) {
                            $bl_total = $bl_total + $i->loan_amount;
                          }
                          echo $cur . ' ' . number_format($bl_total, 2, '.', ',');
                          ?>
                        </td>
                      </tr>

                      <tr class="table-primary">
                        <th width='100%' style="text-align:left"><b>Total cash raised to start the business</b></th>
                        <th>
                          <?php if (isset($data) && isset($data['everydata'][0]['loan_amount'])) { ?>
                            <?php echo $cur . ' ' . number_format(((int) $data['everydata'][0]['loan_amount'] + (int) $capitalisation + (int) $dir_total  + (int) $bl_total + (int) $inv_total), 2, '.', ','); ?>
                          <?php } ?>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">What are your startup expenses?</button></h2>
              <div class="accordion-collapse collapse" id="collapse2" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <table id="" class="table fs--1 mb-0 table-responsive" cellspacing="0" width="50%">

                    <thead class="bg-200 text-900">
                      <tr>
                        <th colspan='2'></th>
                      </tr>
                    </thead>
                    <tr>
                      <td width='100%'>Land & Buildings</td>
                      <td>

                        <?php
                        $la_total = 0;
                        foreach ($land as $la) {
                          $la_total = $la_total + $la->amount_paid;
                        }
                        if ($la_total) {
                          echo $cur . ' ' . number_format($la_total, 2, '.', ',');
                        }
                        ?>
                      </td>
                    </tr>
                    <tr>
                      <td width='100%'>Plant & Equipment</td>
                      <td>
                        <?php
                        $pe_total = 0;
                        $user_id = $session->get('user')->id;
                        $builder = $db->table('one_time_cost');
                        $builder->where('user_id', $user_id);
                        $builder->where('one_time_cost', 'Plant_Equipment');
                        $query = $builder->get();
                        $Land = $query->getResult();
                        foreach ($Land as $la) {
                          $pe_total = $pe_total + $la->total_cost;
                        }
                        if ($pe_total) {
                          echo $cur . ' ' . number_format($pe_total, 2, '.', ',');
                        }
                        ?>
                      </td>
                    </tr>
                    <tr>
                      <td width='100%'>Security Deposits</td>
                      <td>
                        <?php
                        $sd_total = 0;
                        $user_id = $session->get('user')->id;
                        $builder = $db->table('one_time_cost');
                        $builder->where('user_id', $user_id);
                        $builder->where('one_time_cost', 'Security_Deposit');
                        $query = $builder->get();
                        $Land = $query->getResult();
                        foreach ($Land as $sd) {
                          $sd_total = $sd_total + $sd->total_cost;
                        }
                        if ($sd_total) {
                          echo $cur . ' ' . number_format($sd_total, 2, '.', ',');
                        }
                        ?>
                      </td>
                    </tr>
                    <tr>
                      <td width='100%'>Intellectual Property</td>
                      <td><?php
                          $ip_total = 0;
                          $user_id = $session->get('user')->id;
                          $builder = $db->table('one_time_cost');
                          $builder->where('user_id', $user_id);
                          $builder->where('one_time_cost', 'Interlectual_Property');
                          $query = $builder->get();
                          $Land = $query->getResult();
                          foreach ($Land as $ip) {
                            $ip_total = $ip_total + $ip->total_cost;
                          }
                          if ($sd_total) {
                            echo $cur . ' ' . number_format($ip_total, 2, '.', ',');
                          }
                          ?>
                      </td>
                    </tr>
                    <tr>
                      <td width='100%'>One -Time Costs</td>
                      <td>
                        <?php
                        $ot_total = 0;
                        $user_id = $session->get('user')->id;
                        $builder = $db->table('one_time_cost');
                        $builder->where('user_id', $user_id);
                        $builder->where('one_time_cost', 'ONE_TIME_COSTS');
                        $query = $builder->get();
                        $Land = $query->getResult();

                        foreach ($Land as $ot) {
                          $ot_total = $ot_total + $ot->total_cost;
                        }
                        if ($ot_total) {
                          echo $cur . ' ' . number_format($ot_total, 2, '.', ',');
                        }
                        ?>
                      </td>
                    </tr>
                    <tr class="table-primary">
                      <th width='100%' style="text-align:left">Total cash spent on start up expenses before the start of trading</th>
                      <th><?php echo $cur . ' ' . number_format($la_total + $pe_total + $sd_total + $ip_total + $ot_total, 2, '.', ','); ?></th>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading3"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">What are your monthly operating expenses?</button></h2>
              <div class="accordion-collapse collapse" id="collapse3" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <table id="" class="table fs--1 mb-0 table-responsive" cellspacing="0" width="50%">
                    <thead class="bg-200 text-900">
                      <tr>
                        <th colspan='2'> <b>What are your monthly operating expenses?</b></th>
                      </tr>
                    </thead>
                    <?php
                    $user_id = $session->get('user')->id;
                    $builder = $db->table('expenses');
                    $builder->groupBy('purpose');
                    $builder->where('user_id', $user_id);
                    $query = $builder->get();
                    $dir = $query->getResult();
                    $total_month = 0;
                    ?>
                    <?php foreach ($expenses as $e) { ?>
                      <tr>
                        <?php
                        $user_id = $session->get('user')->id;
                        $query = $db->query("SELECT sum(monthly_cost) as monthly_total_cost, sum(num_month) as num_month FROM expenses WHERE user_id=$user_id AND purpose='$e->purpose' GROUP BY purpose");

                        $result = $query->getRow();
                        ?>
                        <td width='100%'><?php echo $e->purpose; ?></td>
                        <?php $tot_month = ($result->num_month == 0) ? $result->monthly_total_cost : ($result->monthly_total_cost) * $result->num_month; ?>
                        <td><?php echo $cur . ' ' . number_format($tot_month, 2, '.', ','); ?></td>
                        <?php $total_month += $tot_month; ?>
                      <?php } ?>


                      <tr class="table-primary">
                        <th width='100%' style="text-align:left">Total projected recurring costs allowance</th>
                        <th>
                          <?php echo $cur . ' ' . number_format($total_month, 2, '.', ','); ?>
                        </th>
                      </tr>
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading4"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">How much cash will you need to start this business?</button></h2>
              <div class="accordion-collapse collapse" id="collapse4" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <table id="" class="table fs--1 mb-0 table-responsive" cellspacing="0" width="50%">
                    <thead class="bg-200 text-900">
                      <tr>
                        <th colspan='2'><b></b></th>
                      </tr>
                    </thead>

                    <tr class="table-success">
                      <th width='100%' style="text-align:left">Total cash required to start the business</th>
                      <th><?php
                          $total_capital_required = $la_total + $pe_total + $ip_total + $sd_total + $ot_total + $total_month;

                          echo $cur . ' ' . number_format($total_capital_required, 2, '.', ',');
                          ?></th>
                    </tr>

                    <tr class="table-primary">
                      <th width='100%' style="text-align:left">Total cash available in the bank account at start of trading</th>
                      <th id='table_surplus'>
                      <?php if (isset($data)) { ?>
                        <?php
                            echo $cur . ' ' . number_format(((int) $data['everydata'][0]['loan_amount'] + (int) $capitalisation + (int) $dir_total + (int) $inv_total) -
                              ($la_total + $pe_total + $ip_total + $sd_total + $ot_total), 2, '.', ',');
                            ?>
                          <?php } ?>
                      </th>
                    </tr>
                    <tr class="table-danger">
                      <th width='100%' style="text-align:left">Total cash surplus or deficit after expenditure</th>
                      <th id='table_surplus'>
                        <?php if (isset($data)) { ?>  
                        <?php echo $cur . ' ' . number_format(((int) $data['everydata'][0]['loan_amount'] + (int) $capitalisation + (int) $dir_total + (int) $inv_total) - $total_capital_required, 2, '.', ','); ?>
                        <?php } ?>
                      </th>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>






































    </form>
  </div>