
            <!-- ===============================================-->
            <!--  Results Summary Table-->
            <!-- ===============================================-->      

    

            <div class="container mt-3">

                <!--table section unit qty starts -->
                <div class="row pt-2">
                    <h4 class="my-0 font-weight-normal">Assumptions</h4>
                    <div class="table-responsive">
                            <div class="fixTableHead">
                        <table class="table table-striped fs--1 mb-0  handlecurrencyformat" id="table_unit_sales">
                            <tbody>
                                <tr>
                                    <th width="20%">&nbsp;</th>
                                    <th width="10%"><b>Assumptions</b></th></th>
                                    <th width="10%"><b>Monthly</b></th>
                                    <th width="10%"><b>Year 1</b></th>
                                    <th width="10%"><b>Year 2</b></th>
                                    <th width="10%"><b>Year 3</b></th>
                                </tr><!-- /.table row -->
                                <tr>
                                    <td>Operating Expenses</td>
                                    <td></td>
                                    <td></td>
                                    <td>   
                                        <input type="text" name="operating_costs"  class="form-control" readonly id="operating_costs" placeholder="operating_costs" value="">
                                    </td>
                                    <td>
                                        <input type="text" name="operating_costs"  class="form-control" readonly id="operating_costs" placeholder="" value="$48,000">
                                    </td>
                                    <td>
                                        <input type="text" name="operating_costs"  class="form-control" readonly id="operating_costs" placeholder="" value="$48,000">
                                    </td>
                                </tr><!-- /.table row -->
                                <tr>
                                    <td>Net Income Required</td>
                                    <td> <input type="text" name="net_income_required"  class="form-control currencySign" onkeyup="hourly_rate_revenue()" id="net_income_required" placeholder="" value="">
                                    </td>
                                    <td>0</td>
                                    <td>
                                        0
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr><!-- /.table row -->
                                <tr>
                                    <td>Total Revenue Required</td>
                                    <td></td>
                                    <td>0</td>
                                    <td>
                                        <input type="text" name="no_days"  class="form-control" readonly id="total_revenue_required" placeholder="" value="">
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr><!-- /.table row -->
                               
                                <tr>
                                    <td>How many days?</td>
                                    <td>                                 
                                        <input type="text" name="days_per_week"  class="form-control" id="days_per_week" onkeyup="hourly_rate_revenue()" placeholder="" value=""></input>
                                    </td>
                                    <td>0</td>
                                    <td>
                                         <input type="text" name="no_reorder"  class="form-control" readonly id="working_days_per_year" placeholder="" value=""></input>
                                    </td>
                                    <td>0</td>
                                    <td>0</td>

                                </tr><!-- /.table row -->
                                <tr>
                                    <td>How many vacation days?</td>

                                    <td>
                                        <input type="text" name="vacation_days"  class="form-control" id="vacation_days" onkeyup="hourly_rate_revenue()" placeholder="" value="">
                                    </td>
                                    
                                    <td>0</td>

                                    <td>
                                      <input type="text" name="working_days_per_year"  class="form-control" readonly id="total_days_per_year" placeholder="" value="">         
                                    </td>

                                    <td>0</td>

                                    <td>0</td>
                                    

                                </tr><!-- /.table row -->
                                <tr>
                                    <td>How many sick days?</td>
                                    <td>
                                      <input type="text" name="sickness_days"  class="form-control" id="sickness_days" onkeyup="hourly_rate_revenue()" placeholder="" value="">
                                    </td>
                                    <td>0</td>
                                    <td>
                                      <input type="text" name="billable_hours_per_day"  class="form-control" readonly id="billable_hour_per_day" placeholder="" value="">

                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr><!-- /.table row -->
                                <tr class="mt-2">

                                    <td>How many working hours per day?</td>
                                    <td>
                                        <input type="text" name="hours_per_day"  class="form-control"  id="hours_per_day" onkeyup="hourly_rate_revenue()" placeholder="" value="">
                                    </td>
                                    <td>0</td>
                                    <td>
                                        <input type="text" name="billable_hours_per_year"  class="form-control" readonly id="billable_hour_per_year" placeholder="" value="">
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr><!-- /.table row -->

                                <tr class="mt-2">
                                    <td>How many none billable hours per day?</td>
                                    <td>
                                        <input type="text" name="none_billable_hours_per_day"  class="form-control"  onkeyup="hourly_rate_revenue()" id="none_billable_hours_per_day" placeholder="" value="">
                                    </td>
                                    <td>0</td>
                                    <td>
                                        <input type="text" name="hourly_rate"  class="form-control" readonly id="hourly_rate" placeholder="" value="">
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr><!-- /.table row -->
                            </tbody><!-- /.table body -->
                        </table><!-- /.table -->
                    </div><!-- /.div table -->
                </div><!-- /.div table -->
            </div><!-- /.row -->       
              <div class="border-dashed-bottom my-3"></div>
                    <div class="col-12 col-sm-12 offset-0 pt-3">
                        <input type='hidden' id='productrevenueid' value='0'>
                        <button class="btn btn-falcon-danger" type="button" id="btncancelproductrevenue" ><i class="far fa-window-close"></i> Cancel</button>

                        <input name="save_local_products_step_2" type="button" id="btnsaveproduct" value="Save and Continue" class="btn btn-outline-success float-end">
                    </div>
                </div>    
                    
              <!-- ===============================================-->
              <!--  Calculations-->
              <!-- ===============================================-->      
              <script src="<?php echo base_url('custom-assets/revenue.js') ?>"></script>

