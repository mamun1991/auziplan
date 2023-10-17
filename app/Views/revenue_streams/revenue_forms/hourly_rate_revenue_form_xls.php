        
    <!-- ===============================================-->
    <!--  Input Text Boxes-->
    <!-- ===============================================-->      

    <div class="table-responsive">
        <div class="fixTableHead">
            <table class="table table-striped fs--1 mb-0  handlecurrencyformat" id="table_unit_sales">
                <colgroup><col width=330><col width=330><col width=174><col width=174><col width=174><col width=174></colgroup>
                <tbody>
                    <tr>
                        <td width=330><b>Assumptions</b></td>
                        <td width=330><b></b></td>
                        <td width=174><br></td>
                        <td width=174></td>
                        <td width=174></td>
                        <td width=174></td>
                    </tr>

                    <!--<tr>
                        <td><b>Yearly</b></td>
                        <td><b>Growth</b></td>
                        <td><br></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>0.00%</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Net Income</td>
                        <td>Sick Days</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    -->

                    <tr>
                        <td>
                        <input type="text" name="net_income_required"  class="form-control currencySign validate" onkeyup="hourly_rate_revenue()" id="net_income_required" placeholder="Net Income Required" value="">
                    </td>
                        <td>
                        <input type="text" name="sickness_days"  class="form-control validate" id="sickness_days" onkeyup="hourly_rate_revenue()" placeholder="Sickness Days" value="">
                    </td>
                        <td></td>
                        <td><br></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <!--<tr>
                        <td>Working Days</td>
                        <td>Hours per Day </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>-->


                    <tr>
                        <td>
                        <input type="text" name="days_per_week"  class="form-control validate" id="days_per_week" onkeyup="hourly_rate_revenue()" placeholder="Days Per Week " value="">
                    </td>
                        <td>
                        <input type="text" name="hours_per_day"  class="form-control validate"  id="hours_per_day" onkeyup="hourly_rate_revenue()" placeholder="Hours Per Day" value="">
                    </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <!--<tr>
                        <td>Vacation Days </td>
                        <td>None Billable Hours </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>-->
                    <tr>
                        <td>
                        <input type="text" name="vacation_days"  class="form-control validate" id="vacation_days" onkeyup="hourly_rate_revenue()" placeholder="Vacation Days" value="">
                        </td>
                        <td>
                        <input type="text" name="none_billable_hours_per_day"  class="form-control validate"  onkeyup="hourly_rate_revenue()" id="none_billable_hours_per_day" placeholder="None Billable Hours Per Day" value="">
                    </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <!--<tr>
                        <td><b>Summary</b></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                    <tr>
                        <td><b><br></b></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>-->
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Monthly</td>
                        <td>Vear 1</td>
                        <td>Year 2</td>
                        <td>Year 3</td>
                    </tr>
                    <tr>
                        <td>Operating Expenses </td>
                        <td><br></td>
                        <td>$4,000.00</td>
                        <td>
                            <input type="text" name="operating_costs"  class="form-control validate" readonly id="operating_costs" placeholder="" value="">
                        </td>
                        <td>$52,800.00</td>
                        <td>$58,080.00</td>
                    </tr>
                    <tr>
                        <td>Payroll Expense </td>
                        <td><br></td>
                        <td>$4,611.00</td>
                        <td>$55,332.00</td>
                        <td>$60,865.00</td>
                        <td>$66,952.00</td>
                    </tr>
                    <tr>
                        <td>Total Revenue Required</td>
                        <td></td>
                        <td>$25,277.67</td>
                        <td>
                        <input type="text" name="total_revenue_required"  class="form-control" readonly id="total_revenue_required" placeholder="" value="">
                        </td>
                        <td>$313,665.00</td>
                        <td>$438,697.00</td>
                    </tr>
                    <tr>
                        <td>Hourly Rate Required </td>
                        <td><br></td>
                        <td>$208.91</td>
                        <td>
                        <input type="text" name="hourly_rate"  class="form-control" readonly id="hourly_rate" placeholder="" value="" style="background-color: rgba(240, 240, 240, 1.0) ;color:rgba(0, 0, 0, 1.0);">
                        </td>
                        <td>$216.02</td>
                        <td>$302.13</td>
                    </tr>
                    <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                    <tr>
                        <td>Working Days </td>
                        <td><br></td>
                        <td>22</td>
                        <td>
                        <input type="text" name="no_reorder"  class="form-control" readonly id="working_days_per_year" placeholder="" value=""></td>
                    </td>
                        <td>260</td>
                        <td>260</td>
                    </tr>
                    <tr>
                        <td>Total WoRking Days  </td>
                        <td><br></td>
                        <td >18</td>
                        <td>
                        <input type="text" name="working_days_per_year"  class="form-control" readonly id="total_days_per_year" placeholder="" value=""></td>
                    
                    </td>
                        <td>220</td>
                        <td>220</td>
                    </tr>
                    <tr>
                        <td ></td>  </td>
                        <td><br></td>
                        <td>6.6</td>
                        <td>
                        <input type="text" name="billable_hours_per_day"  class="form-control" readonly id="billable_hour_per_day" placeholder="" value="">
                    </td>
                        <td>6.6</td>
                        <td>6.6</td>
                    </tr>
                    <tr>
                        <td>How Many Billable Hours </td>
                        <td><br></td>
                        <td>121</td>
                        <td>
                        <input type="text" name="billable_hours_per_year"  class="form-control" readonly id="billable_hour_per_year" placeholder="" value="">
                    </td>
                        <td>1452</td>
                        <td>1452</td>
                    </tr>
                    <tr>
                        <td><br></td>
                        <td><br></td>
                        <td></td>
                        <td></td>
                        <td></td> 
                        <td></td>
                    </tr>
                    </tbody><!-- /.table body -->
                </table><!-- /.table -->
            </div><!-- /.div table -->
        </div><!-- /.div table -->



        <!-- ************************************************************************** -->


        <div class="border-dashed-bottom my-3"></div>
            <div class="border p-card rounded">
                <input type='hidden' id='hourlyrateid' value='0'>
                <button class="btn btn-falcon-danger" type="button" id="btncancelproductrevenue" ><i class="far fa-window-close"></i> Cancel</button>
                <input name="save_local_products_step_2" type="button" id="btnsavehourlyrate" value="Save and Continue" class="btn btn-outline-success float-end">
            </div>











