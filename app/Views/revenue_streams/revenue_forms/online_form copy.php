   
           
       
            <!-- ===============================================-->
            <!--  Input Text Boxes-->
            <!-- ===============================================-->      

            <form class="online-revenue" id="online_revenue"></form>
            <table frame=void cellspacing=0 cols=6 rules=none border=0>
                <colgroup><col width=297><col width=297><col width=101><col width=101><col width=101><col width=101></colgroup>
                <tbody>
                    <tr>
                        <td width=297 height=24 align=left><b><font size=3>potential revenue ( online shop sales ) </font></b></td>
                        <td width=297 align=left><br></td>
                        <td width=101 align=left><br></td>
                        <td width=101 align=left><br></td>
                        <td width=101 align=left><br></td>
                        <td width=101 align=left><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left><b><font size=3>assumptions</font></b></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left bgcolor="#ccffff" sdval="40" sdnum="3081;">
                        <div class="form-floating mb-3">
                            <input type="text" name="max_view"  class="form-control numberSign" id="max_view" placeholder="Visitors" value="">
                            <label for="max_view">Daily Visitors?</label>
                        </div><!-- /.form -floating -->
                        </td>
                        <td align=left bgcolor="#ccffff" sdval="200" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">
                            <div class="form-floating mb-3">
                                <input type="text" name="product_price"  class="form-control currencySign" id="product_price" placeholder="Product Price" value="">
                                <label for="product_price">What is the average selling price?</label>
                            </div><!-- /.form -floating-->

                        </td>
                        <td style="border-top: 1px solid #000000; border-left: 1px solid #000000" align=left><br></td>
                        <td style="border-top: 1px solid #000000" align=left><br></td>
                        <td style="border-top: 1px solid #000000" align=left><br></td>
                        <td style="border-top: 1px solid #000000; border-right: 1px solid #000000" align=left><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left bgcolor="#ccffff" sdval="365" sdnum="3081;">
                        <div class="form-floating mb-3">
                            <input type="text" name="no_days"  class="form-control numberSign " id="no_days" placeholder="No Days" value="">
                            <label for="no_days">Days Open</label>
                        </div><!-- /.form -floating-->
                    </td>
                        <td align=left bgcolor="#ccffff" sdval="0.5" sdnum="3081;0;0.00%">

                        <div class="form-floating mb-3">
                        <input type="text" name="projected_cost"  class="form-control percentSign" id="projected_cost" placeholder="Projected cost" value="">
                        <label for="projected_cost">Percentage Cost?</label>
                    </div><!-- /.form -floating-->

                        </td>
                        <td style="border-left: 1px solid #000000" align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td style="border-right: 1px solid #000000" align=left><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left bgcolor="#ccffff" sdval="0.01" sdnum="3081;0;0.00%">
                            <div class="form-floating mb-3">
                            <input type="text" name="percent_purch"  class="form-control percentSign" id="percent_purch" placeholder="Customers" value="">
                            <label for="percent_purch">What percentage will buy?</label>
                        </div><!-- /.form -floating-->
                        </td>
                        <td align=left bgcolor="#ccffff" sdval="0.1" sdnum="3081;0;0.00%">
                        <div class="form-floating mb-3">
                            <input type="text" name="sales_increase"  class="form-control percentSign" id="sales_increase"placeholder="Sales Increase" value="">
                            <label for="sales_increase">Sales increase each year by?</label>
                        </div><!-- /.form -floating-->
                        </td>
                        <td style="border-left: 1px solid #000000" align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td style="border-right: 1px solid #000000" align=left><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left bgcolor="#ccffff" sdval="1" sdnum="3081;">

                        <div class="form-floating mb-3">
                            <input type="text" name="no_purchase"  class="form-control numberSign" id="no_purchase" placeholder="Purchase Qty" value="">
                            <label for="no_purchase">How many items buy?</label>
                        </div><!-- /.form -floating-->
                        </td>
                        <td align=left bgcolor="#eeeeee" sdval="200" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">
                            
                
                        <div class="form-floating mb-3">
                                            <input type="text" readonly name="avg_purchase" readonly  class="form-control currencySign" id="avg_purchase" onkeyup="online_revenue()" placeholder="" value="">
                                            <label for="avg_purchase"> Your average purchase are:</label>
                                        </div><!-- /.form -floating-->

                        </td>
                        <td style="border-left: 1px solid #000000" align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td style="border-right: 1px solid #000000" align=left><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left bgcolor="#ccffff" sdval="2" sdnum="3081;">

                        <div class="form-floating mb-3">
                                            <input type="text" name="no_reorder"  class="form-control numberSign " id="no_reorder" placeholder="No of Reorders" value="">
                                            <label for="no_reorder">How many purchases each year?</label>
                                        </div><!-- /.form -floating -->

                        </td>
                        <td align=left bgcolor="#eeeeee" sdval="100" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">
                        <div class="form-floating mb-3">
                                            <input type="text" readonly name="avg_cost" readonly  class="form-control currencySign" id="avg_cost"  onkeyup="online_revenue()" placeholder="" value="">
                                            <label for="avg_cost">Your average cost is:</label>
                                        </div><!-- /.form -floating-->
                        
                        </td>
                        <td style="border-left: 1px solid #000000" align=left><font size=4><br></font></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td style="border-right: 1px solid #000000" align=left><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left><br></td>
                        <td align=left bgcolor="#eeeeee" sdval="200" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">
                        <div class="form-floating mb-3">
                                            <input type="text" name="customer_cost" readonly  class="form-control currencySign" id="customer_cost" onkeyup="online_revenue()" placeholder="" value="">
                                            <label for="customer_cost">Your customer Purchases are:</label>
                                        </div><!-- /.form -floating-->
                        </td>
                        <td style="border-left: 1px solid #000000" align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td style="border-right: 1px solid #000000" align=left><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left><br></td>
                        <td align=left><br></td>
                        <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000" align=left><br></td>
                        <td style="border-bottom: 1px solid #000000" align=left><br></td>
                        <td style="border-bottom: 1px solid #000000" align=left><br></td>
                        <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" align=left><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left><b><font size=3>unit sales</font></b></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                        <td align=left><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left><br></td>
                        <td align=left><br></td>
                        <td align=right bgcolor="#eeeeee">monthly</td>
                        <td align=right bgcolor="#eeeeee">yearly</td>
                        <td align=right bgcolor="#eeeeee">yearly</td>
                        <td align=right bgcolor="#eeeeee">yearly</td>
                    </tr>
                    <tr>
                        <td height=24 align=left>total potential customers:</td>
                        <td align=left><br></td>
                        <td align=right sdval="1216.66666666667" sdnum="3081;0;#,##0;-#,##0">1,217</td>
                        <td align=right sdval="14600" sdnum="3081;0;#,##0;-#,##0">14,600</td>
                        <td align=right sdval="14600" sdnum="3081;0;#,##0;-#,##0">14,600</td>
                        <td align=right sdval="14600" sdnum="3081;0;#,##0;-#,##0">14,600</td>
                    </tr>
                    <tr>
                        <td height=24 align=left>actual number of customers making a purchase:</td>
                        <td align=left><br></td>
                        <td align=right sdval="12.1666666666667" sdnum="3081;0;#,##0;-#,##0">12</td>
                        <td align=right sdval="146" sdnum="3081;0;#,##0;-#,##0">146</td>
                        <td align=right sdval="146" sdnum="3081;0;#,##0;-#,##0">146</td>
                        <td align=right sdval="146" sdnum="3081;0;#,##0;-#,##0">146</td>
                    </tr>
                    <tr>
                        <td height=24 align=left>total products sold :</td>
                        <td align=left><br></td>
                        <td align=right bgcolor="#eeeeee" sdval="24.3333333333333" sdnum="3081;0;#,##0;-#,##0">24</td>
                        <td align=right bgcolor="#eeeeee" sdval="292" sdnum="3081;0;#,##0;-#,##0">292</td>
                        <td align=right bgcolor="#eeeeee" sdval="292" sdnum="3081;0;#,##0;-#,##0">292</td>
                        <td align=right bgcolor="#eeeeee" sdval="292" sdnum="3081;0;#,##0;-#,##0">292</td>
                    </tr>
                    <tr>
                        <td height=24 align=left><br></td>
                        <td align=left><br></td>
                        <td align=right><br></td>
                        <td align=right><br></td>
                        <td align=right><br></td>
                        <td align=right><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left><font size=3>revenue summary</font></td>
                        <td align=left><br></td>
                        <td align=right><br></td>
                        <td align=right><br></td>
                        <td align=right><br></td>
                        <td align=right><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left><br></td>
                        <td align=left><br></td>
                        <td align=right><br></td>
                        <td align=right><br></td>
                        <td align=right><br></td>
                        <td align=right><br></td>
                    </tr>
                    <tr>
                        <td height=24 align=left>total potential revenue :</td>
                        <td align=left><br></td>
                        <td align=right sdval="4866.66666666667" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">$4,866.67</td>
                        <td align=right sdval="58400" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">$58,400.00</td>
                        <td align=right sdval="58400" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">$58,400.00</td>
                        <td align=right sdval="58400" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">$58,400.00</td>
                    </tr>
                    <tr>
                        <td height=24 align=left>total potential  cost :</td>
                        <td align=left><br></td>
                        <td align=right sdval="2433.33333333333" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">$2,433.33</td>
                        <td align=right sdval="29200" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">$29,200.00</td>
                        <td align=right sdval="29200" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">$29,200.00</td>
                        <td align=right sdval="29200" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">$29,200.00</td>
                    </tr>
                    <tr>
                        <td height=24 align=left>total potential annual gross profit:</td>
                        <td align=left><br></td>
                        <td align=right sdval="2433.33333333333" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">$2,433.33</td>
                        <td align=right sdval="29200" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">$29,200.00</td>
                        <td align=right sdval="29200" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">$29,200.00</td>
                        <td align=right sdval="29200" sdnum="3081;0;[$$-c09]#,##0.00;[red]-[$$-c09]#,##0.00">$29,200.00</td>
                    </tr>
                    <tr>
                        <td height=24 align=left>projected cost as % of gross sales:</td>
                        <td align=left><br></td>
                        <td align=right bgcolor="#cfe7f5" sdval="0.5" sdnum="3081;0;0.00%">50.00%</td>
                        <td align=right bgcolor="#cfe7f5" sdval="0.5" sdnum="3081;0;0.00%">50.00%</td>
                        <td align=right bgcolor="#cfe7f5" sdval="0.5" sdnum="3081;0;0.00%">50.00%</td>
                        <td align=right bgcolor="#cfe7f5" sdval="0.5" sdnum="3081;0;0.00%">50.00%</td>
                    </tr>
                    <tr>
                        <td height=24 align=left>projected gross profit as  % of gross sales:</td>
                        <td align=left><br></td>
                        <td align=right bgcolor="#cfe7f5" sdval="0.5" sdnum="3081;0;0.00%">50.00%</td>
                        <td align=right bgcolor="#cfe7f5" sdval="0.5" sdnum="3081;0;0.00%">50.00%</td>
                        <td align=right bgcolor="#cfe7f5" sdval="0.5" sdnum="3081;0;0.00%">50.00%</td>
                        <td align=right bgcolor="#cfe7f5" sdval="0.5" sdnum="3081;0;0.00%">50.00%</td>
                    </tr>
                </tbody>
            </table>
            <!-- ************************************************************************** -->

            <div class="border-dashed-bottom my-3"></div>
                    <div class="border p-card rounded">
                        <input type='hidden' id='productrevenueid' value='0'>
                        <button class="btn btn-outline-danger" type="button" id="btncancelproductrevenue" ><i class="far fa-window-close"></i> Cancel</button>
                        <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> <i class="far fa-arrow-alt-circle-down" aria-hidden="true"></i> Yearly Summary</button>
                        <input name="save_local_products_step_2" type="button" id="btnsaveproduct" value="Save and Continue" class="btn btn-outline-success float-end">
                    </div>    
    </form>






            <!-- ===============================================-->
            <!--  Results Summary Table-->
            <!-- ===============================================-->      

            <div class="collapse" id="collapseExample">
                <div class="container mt-3">
                    <!--table section unit qty starts -->
                    <div class="row pt-2">
                        <h4 class="my-0 font-weight-normal">Unit Sales</h4>

                            <div class="table-responsive">
                                    <div class="fixTableHead">
                                <table class="table table-striped fs--1 mb-0" id="table_unit_sales">
                                    <tbody>
                                        <tr>
                                        <th width="20%">&nbsp;</th>
                                        <th width="10%"></th></th>
                                        <th width="10%"><b>Monthly</b></th>
                                        <th width="10%"><b>Year 1</b></th>
                                        <th width="10%"><b>Year 2</b></th>
                                        <th width="10%"><b>Year 3</b></th>
                                        </tr><!-- /.table row -->
                                        
                                        <tr>
                                            <td>Actual number of customers</td>
                                            <td></td>
                                            <td>
                                            <input type="text" name="total_monthly_online_customers"  class="form-control numberSign" readonly id="total_monthly_online_customers" onkeyup="online_revenue()" placeholder="" value="">
                                            </td>
                                            <td>
                                            <input type="text" name="total_yearly_online_customers"  class="form-control numberSign" readonly id="total_yearly_online_customers" onkeyup="online_revenue()" placeholder="" value="">
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Total products sold</td>
                                            <td></td>
                                            <td>
                                                <input type="text" name="total_monthly_products_sold"  class="form-control numberSign" readonly id="total_monthly_products_sold" onkeyup="online_revenue()" placeholder="" value="">
                                            </td>
                                            <td>
                                                <input type="text" name="total_yearly_products_sold"  class="form-control numberSign" readonly id="total_yearly_products_sold" onkeyup="online_revenue()" placeholder="" value="">
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                       
                     
                                        <tr>
                                            <td>Total potential annual revenue</td>
                                            <td></td>
                                            <td>
                                            <input type="text" name="year_1_monthly_revenue"  class="form-control currencySign" readonly id="year_1_monthly_revenue" onkeyup="online_revenue()" placeholder="" value="">
                                            </td>
                                            <td>
                                            <input type="text" name="year_1_revenue"  class="form-control currencySign" readonly id="year_1_revenue" onkeyup="online_revenue()" placeholder="" value="">
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Total potential annual cost</td>
                                            <td></td>
                                            <td>
                                            <input type="text" name="year_1_monthly_cost"  class="form-control currencySign" readonly id="year_1_monthly_cost" onkeyup="online_revenue()" placeholder="" value="">
                                            </td>
                                            <td>
                                            <input type="text" name="year_1_product_cost"  class="form-control currencySign" readonly id="year_1_product_cost" onkeyup="online_revenue()" placeholder="" value="">
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Total potential annual gross profit</td>
                                            <td></td>
                                            <td>  
                                                <input type="text" name="year_1_monthly_gross_profit"  class="form-control currencySign" readonly id="year_1_monthly_gross_profit" onkeyup="online_revenue()" placeholder="" value="">
                                            </td>
                                            <td>
                                                <input type="text" name="year_1_product_gross_profit"  class="form-control currencySign" readonly id="year_1_product_gross_profit" onkeyup="online_revenue()" placeholder="" value="">
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Projected Cost as % of Gross Sales</td>
                                            <td></td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                        <tr>
                                            <td>Projected Gross Profit as % of Gross Sales</td>
                                            <td></td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr><!-- /.table row -->
                                    </tbody><!-- /.table body -->
                                </table><!-- /.table -->
                            </div><!-- /.div table -->
                        </div><!-- /.div table -->
                    </div><!-- /.row -->       
                <!-- New wizard style footer 1 begins -->
            </div>    

    <div class="border p-card rounded">
        <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> <i class="far fa-arrow-alt-circle-up" aria-hidden="true"></i> Close</button>
    </div>
</div>
                                
<!-- ===============================================-->
<!--  Calculations-->
<!-- ===============================================-->      


     
<!--//////////////////////////////////////////////////////////////////////////////////////
/// Online revenue projections start/////////////////
  
// 1, avg_purchase = no_purchase * product_price

// 2, avg_cost = product_price * projected_cost

// 3, customer_cost = no_purchase + no_reorder * avg_cost

-->

    <script type="text/javascript"> 

        function online_revenue(){
            var url = "<?php echo site_Url(); ?>user/currency";
            var param = "";
            var cur;

            $.get(url, param,function(result) {

                cur = result; 
                var max_view = $('#max_view').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var percent_purch = $('#percent_purch').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var no_days = $('#no_days').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var no_purchase = $('#no_purchase').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var no_reorder = $('#no_reorder').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var product_price = $('#product_price').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');          
                var projected_cost = $('#projected_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');                
                var sales_increase = $('#sales_increase').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                var avg_purchase = $('#avg_purchase').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var avg_cost = $('#avg_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var customer_cost = $('#customer_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   



                //yearly
                var total_yearly_online_customers = $('#total_yearly_online_customers').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                var total_yearly_products_sold = $('#total_yearly_products_sold').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                var year_1_revenue = $('#year_1_revenue').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                var year_1_product_cost = $('#year_1_product_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                var year_1_product_gross_profit = $('#year_1_product_gross_profit').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  

                //monthly
                var total_monthly_online_customers = $('#total_monthly_online_customers').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                var total_monthly_products_sold = $('#total_monthly_products_sold').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                var year_1_monthly_revenue = $('#year_1_monthly_revenue').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                var year_1_monthly_cost = $('#year_1_monthly_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                var year_1_monthly_gross_profit = $('#year_1_monthly_gross_profit').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  


   

                //Year 1
                    
                total_yearly_online_customers = parseInt(max_view) * parseInt(percent_purch) /100;
                if(total_yearly_online_customers > 0){
                    $('#total_yearly_online_customers').val(parseInt(total_yearly_online_customers).toLocaleString());
                }
                total_yearly_products_sold = parseInt(total_yearly_online_customers) * (parseInt(no_purchase) + parseInt(no_reorder));
                if(total_yearly_products_sold > 0){
                    $('#total_yearly_products_sold').val(parseInt(total_yearly_products_sold).toLocaleString());
                }
                year_1_revenue = parseInt(total_yearly_products_sold) * (parseInt(product_price));
                if(year_1_revenue > 0){
                    $('#year_1_revenue').val(cur+""+parseFloat(year_1_revenue).toLocaleString());
                }
             
                year_1_product_cost = parseInt(total_yearly_products_sold) * (parseInt(avg_cost));
                if(year_1_product_cost > 0){
                    $('#year_1_product_cost').val(cur+""+parseFloat(year_1_product_cost).toLocaleString());
                }
             
                year_1_product_gross_profit = parseInt(year_1_revenue) - (parseInt(year_1_product_cost));
                if(year_1_product_gross_profit > 0){
                    $('#year_1_product_gross_profit').val(cur+""+parseFloat(year_1_product_gross_profit).toLocaleString());
                }
             


                //monthly
                            
                total_monthly_online_customers = parseInt(total_yearly_online_customers) / 12;
                if(total_monthly_online_customers > 0){
                    $('#total_monthly_online_customers').val(parseInt(total_monthly_online_customers).toLocaleString());
                }
                total_monthly_products_sold = parseInt(total_yearly_online_customers) * (parseInt(no_purchase) + parseInt(no_reorder)) / 12;
                if(total_monthly_products_sold > 0){
                    $('#total_monthly_products_sold').val(parseInt(total_monthly_products_sold).toLocaleString());
                }
                year_1_monthly_revenue = parseInt(year_1_revenue) / 12;
                if(year_1_monthly_revenue > 0){
                    $('#year_1_monthly_revenue').val(cur+""+parseFloat(year_1_monthly_revenue).toLocaleString());
                }

                year_1_monthly_cost = parseInt(year_1_product_cost) / 12;
                if(year_1_monthly_cost > 0){
                    $('#year_1_monthly_cost').val(cur+""+parseFloat(year_1_monthly_cost).toLocaleString());
                }
             
                year_1_monthly_gross_profit = parseInt(year_1_product_gross_profit) / 12;
                if(year_1_monthly_cost > 0){
                    $('#year_1_monthly_gross_profit').val(cur+""+parseFloat(year_1_monthly_gross_profit).toLocaleString());
                }



                // 1, avg_purchase = no_purchase * product_price
                avg_purchase = parseInt(no_purchase) * parseInt(product_price);
                if(avg_purchase > 0){
                    $('#avg_purchase').val(cur+""+parseFloat(avg_purchase).toLocaleString());
                }
                

                // 2, avg_cost = product_price * projected_cost
                avg_cost = parseInt(no_purchase) * parseInt(projected_cost);
                if(avg_cost > 0){
                    $('#avg_cost').val(cur+""+parseFloat(avg_cost).toLocaleString());
                }


                // 3, customer_cost = no_purchase + no_reorder * avg_cost
                customer_cost =  (parseInt(no_purchase) + parseInt(no_reorder)) *  parseInt(avg_cost);
                if(customer_cost > 0){     
                    $('#customer_cost').val(cur+""+parseFloat(customer_cost).toLocaleString());

                }

                    
            })
        }


            $('.handlecurrencyformat').find('input[type="text"]').focus(function() {
            var focusvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
            if ($(this).hasClass('currencySign')) {
                $(this).val(focusvalue);
            } else if ($(this).hasClass('numberSign')) {
                $(this).val(focusvalue);
            }else if ($(this).hasClass('percentSign')) {
                $(this).val(focusvalue);
            }
            });


            $('.handlecurrencyformat').find('input[type="text"]').focusout(function() {
            var focusoutvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
            if ($(this).hasClass('currencySign')) {
                if(focusoutvalue != ""){
                    $(this).val("$" + '' + parseInt(focusoutvalue).toLocaleString());
                }
            } else if ($(this).hasClass('numberSign')) {
                //console.log('here'+focusoutvalue.toLocaleString());
                $(this).val(parseInt(focusoutvalue).toLocaleString());
            }else if ($(this).hasClass('percentSign')) {
                $(this).val(focusoutvalue + '%');
            }
            });
        </script>


 
    
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   