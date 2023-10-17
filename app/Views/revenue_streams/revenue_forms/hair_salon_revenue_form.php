    <!-- ===============================================-->
    <!--  Input Text Boxes-->
    <!-- ===============================================-->      
    <div>
        <div class="row">  
            <div class="col-lg-6 col-md-12 col-sm-12">          
                <div class="card p-3 handlecurrencyformat">


                    <div class="form-floating mb-3">
                        <input type="text" name="client_base_per_stylist"  class="form-control numberSign" id="client_base_per_stylist" placeholder="" value="">
                        <label for="client_base_per_stylist">How man client base per stylist?</label>
                    </div><!-- /.form -floating -->


                    <div class="form-floating mb-3">
                        <input type="text" name="weeks_between_visits"  class="form-control numberSign" id="weeks_between_visits" placeholder="" value="">
                        <label for="weeks_between_visits">How many weeks between visits?</label>
                    </div><!-- /.form -floating-->

                            
                    <div class="form-floating mb-3">
                        <input type="text" name="no_days"  class="form-control numberSign" id="no_of_stylists" placeholder="" value="">
                        <label for="no_of_stylists">How many stylist will your employ?</label>
                    </div><!-- /.form -floating-->



                    <div class="form-floating mb-3">
                        <input type="text" name="spend_per_cut"  class="form-control currencySign" id="spend_per_cut" placeholder="" value="">
                        <label for="spend_per_cut">What is your average hair cut price?</label>
                    </div><!-- /.form -floating-->


                    <div class="form-floating mb-3">
                        <input type="text" name="weeks_open"  class="form-control numberSign " id="no_reorder" placeholder="" value="">
                        <label for="weeks_open">How many weeks are you open each year year?</label>
                    </div><!-- /.form -floating -->


                    <div class="form-floating mb-3">
                        <input type="text" name="average_spend_per_customer"  class="form-control currencySign" id="average_spend_per_customer" placeholder="" value="">
                        <label for="average_spend_per_customer">How much will your clients spend on products?</label>
                    </div><!-- /.form -floating-->

                </div><!-- card-->

            </div><!-- /.col-->

            <div class="col-lg-6 col-md-12 col-sm-12">    
                <div class="card p-3 handlecurrencyformat">

            
                    <!--1, total_clients_per_stylist = client_base_per_stylist / weeks_between_visits-->
                    <div class="form-floating mb-3">
                        <input type="text" name="total_clients_per_stylist"  class="form-control numberSign" readonly id="total_clients_per_stylist"   onkeyup="salon_revenue()" placeholder="" value="">
                        <label for="total_clients_per_stylist">Total clients per stylist</label>
                    </div><!-- /.form -floating-->

                    <!--2, clients_per_week = no_of_stylists * client_base_per_stylist-->
                    <div class="form-floating mb-3">
                        <input type="text" name="clients_per_week"  class="form-control numberSign" readonly id="clients_per_week" onkeyup="salon_revenue()" placeholder="" value="">
                        <label for="clients_per_week">Total weekly Clients</label>
                    </div><!-- /.form -floating-->

                    <!--3, revenue_per_week = clients_per_week * spend_per_cut-->
                    <div class="form-floating mb-3">
                        <input type="text"  name="revenue_per_week"  class="form-control currencySign" readonly id="revenue_per_week"  onkeyup="salon_revenue()"placeholder="" value="">
                        <label for="revenue_per_week">Total revenue per week</label>
                    </div><!-- /.form -floating-->

                    <!--4, salon_revenue_per_year = revenue_per_week * weeks_open-->
                    <div class="form-floating mb-3">
                        <input type="text" name="salon_revenue_per_year" class="form-control currencySign" readonly id="salon_revenue_per_year" onkeyup="salon_revenue()" placeholder="" value="">
                        <label for="salon_revenue_per_year">Total revenue on services</label>
                    </div><!-- /.form -floating-->

                    <!--5, retail_revenue_per_week = clients_per_week * average_spend_per_customer-->
                    <div class="form-floating mb-3">
                        <input type="text" name="retail_revenue_per_week"  class="form-control currencySign" readonly id="retail_revenue_per_week"  onkeyup="salon_revenue()" placeholder="" value="">
                        <label for="retail_revenue_per_week">Weekly products revenue</label>
                    </div><!-- /.form -floating-->

                    <!--6, retail_revenue_per_year = retail_revenue_per_week * weeks_open-->
                    <div class="form-floating mb-3">
                        <input type="text"  name="total_retail_revenue_per_year" class="form-control currencySign" readonly id="total_retail_revenue_per_year"  onkeyup="salon_revenue()" placeholder="" value="">
                        <label for="total_retail_revenue_per_year">Total retail revenue</label>
                    </div><!-- /.form -floating-->

                    <!--7, total_retail_revenue_per_year = salon_revenue_per_year + total_retail_revenue_per_year-->
                    <div class="form-floating mb-3">
                        <input type="text" name="total_salon_revenue_per_year" class="form-control currencySign" readonly id="total_salon_revenue_per_year"  onkeyup="salon_revenue()" placeholder="" value="">
                        <label for="total_salon_revenue_per_year">Total revenue per year</label>
                    </div><!-- /.form -floating-->
                
                </div><!-- card-->

            </div><!-- /.col-->
        </div><!-- /.row-->
    </div><!-- ./container -->


    <div class="row p-3">
        <div class="border-dashed-bottom my-3"></div>
            <div class="col-12 col-sm-12 offset-0 pt-3">
                <input type='hidden' id='productrevenueid' value='0'>
                <button class="btn btn-falcon-danger" type="button" id="btncancelproductrevenue" ><i class="far fa-window-close"></i> Cancel</button>
                <input name="save_local_products_step_2" type="button" id="btnsaveproduct" value="Save and Continue" class="btn btn-outline-success float-end">
            </div>

            <!-- ===============================================-->
            <!--  Result Tables-->
            <!-- ===============================================-->      

            <div class="box-body pt-3">
                    <div class="box-body table_one">
                        <div class="row" id="one_time_cost_row_add">

                                <div class="col-lg-12 col-md-12 col-sm-12" id="one_time_cost_plant_equipment" style='margin-top: 16px;'>
                                    <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
                                        <div class="table-responsive scrollbar">
                                            <div class="fixTableHead">

                                            <table id="landbuildingDT" class="table table-striped fs--1 mb-0"  style="width:100%">
                                                <thead class="bg-200 text-900">
                                                    <tr>
                                                        <th>Clients per Stylist</th>
                                                        <th>Weeks between Visits</th>
                                                        <th>No of Stylist</th>
                                                        <th>clients per stylist</th>
                                                        <th>weekly Clients</th>
                                                        <th>Weekly Revenue</th>
                                                        <th>Salon Revenue</th>
                                                        <th>Weekly Products</th>
                                                        <th>Retail Revenue</th>
                                                        <th>Monthly Revenue</th>
                                                        <th>Year 1</th>
                                                        <th>Year 2</th>
                                                        <th>Year 3</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>100</th>
                                                        <th>7</th>
                                                        <th>3</th>
                                                        <th>14</th>
                                                        <th>43</th>
                                                        <th>$1,482</th>
                                                        <th>$77,042</th>
                                                        <th>$129.00</th>
                                                        <th>$6,686</th>
                                                        <th>$6,977</th>
                                                        <th>$83,728</th>
                                                        <th>$83,728 </th>
                                                        <th>$83,728</th>
                                                        <th></th>
                                                    </tr>
                                                </tfoot>
                                            </table>    

                                            </div><!-- /.table fixed head -->  
                                        </div><!-- /.table sroll -->  
                                    </div><!-- /.table example 2 -->  
                                </div><!-- /.col-12 -->  
                            </div>
                        </div>      

                    <div class="mb-3" style="display:none">
                        <label class="form-label" for="bootstrap-wizard-wizard-email">Email*</label>
                        <input class="form-control" type="email" name="email" placeholder="Email address" pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$" required="required" id="bootstrap-wizard-wizard-email" data-wizard-validate-email="true" />
                    <div class="invalid-feedback">You must add email</div>
                </div>   
            </div>
        </div>


        <!-- ===============================================-->
        <!--  Calculations-->
        <!-- ===============================================-->      


        <!--
            
        Calculations Reference:

        1, total_clients_per_stylist = client_base_per_stylist / weeks_between_visits

        2, clients_per_week = no_of_stylists * client_base_per_stylist

        3, revenue_per_week = clients_per_week * spend_per_cut

        4, salon_revenue_per_year = revenue_per_week * weeks_open

        5, retail_revenue_per_week = clients_per_week * average_spend_per_customer

        6, retail_revenue_per_year = retail_revenue_per_week * weeks_open

        7, total_retail_revenue_per_year = salon_revenue_per_year + total_retail_revenue_per_year

        8, total_salon_revenue_per_month = total_retail_revenue_per_year / 12

        9,total_salon_revenue_per_year_1 = total_salon_revenue_per_month * 12

        -->

        <script type="text/javascript"> 

            function salon_revenue(){
            var url = "<?php echo site_Url(); ?>user/currency";
            var param = "";
            var cur;

            $.get(url, param,function(result) {

                cur = result; 


                ///left side input boxes

                var client_base_per_stylist = $('#client_base_per_stylist').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

                var weeks_between_visits = $('#weeks_between_visits').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

                var no_of_stylists = $('#no_of_stylists').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

                var spend_per_cut = $('#spend_per_cut').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

                var weeks_open = $('#weeks_open').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

                var average_spend_per_customer = $('#average_spend_per_customer').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   


                // results side
                var total_clients_per_stylist = $('#total_clients_per_stylist').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

                var clients_per_week = $('#clients_per_week').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

                var revenue_per_week = $('#revenue_per_week').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

                var salon_revenue_per_year = $('#salon_revenue_per_year').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

                var retail_revenue_per_year = $('#retail_revenue_per_year').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

                var total_retail_revenue_per_year = $('#total_retail_revenue_per_year').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');

                var total_salon_revenue_per_year = $('#total_salon_revenue_per_year').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
            
                var total_salon_revenue_per_month
                var total_salon_revenue_per_year_1;
                var total_salon_revenue_per_year_2;
                var total_salon_revenue_per_year_3;

            
                //1 total_clients_per_stylist = client_base_per_stylist / weeks_between_visits
                total_clients_per_stylist  = parseInt(client_base_per_stylist) / parseInt(weeks_between_visits);
                if(total_clients_per_stylist > 0){
                    $('#total_clients_per_stylist').val(cur+""+parseFloat(total_clients_per_stylist).toLocaleString());
                }

                //2  clients_per_week = no_of_stylists * client_base_per_stylist     
                clients_per_week  = parseInt(no_of_stylists) * parseInt(client_base_per_stylist);
                if(clients_per_week > 0){
                    $('#clients_per_week').val(cur+""+parseFloat(clients_per_week).toLocaleString());
                }

                //3 revenue_per_week = clients_per_week / spend_per_cut      
                revenue_per_week  = parseInt(clients_per_week) * parseInt(spend_per_cut);
                if(revenue_per_week > 0){
                    $('#revenue_per_week').val(cur+""+parseFloat(revenue_per_week).toLocaleString());
                }

                //4 salon_revenue_per_year = revenue_per_week * weeks_open
                salon_revenue_per_year  = parseInt(revenue_per_week) * parseInt(weeks_open);
                if(salon_revenue_per_year > 0){
                    $('#salon_revenue_per_year').val(cur+""+parseFloat(salon_revenue_per_year).toLocaleString());
                }

                //5 retail_revenue_per_week = clients_per_week / average_spend_per_customer
                retail_revenue_per_week  = parseInt(clients_per_week) * parseInt(average_spend_per_customer);
                if(retail_revenue_per_week > 0){
                    $('#retail_revenue_per_week').val(cur+""+parseFloat(retail_revenue_per_week).toLocaleString());
                }

                //6 retail_revenue_per_year = retail_revenue_per_week  weeks_open         
                retail_revenue_per_year  = parseInt(retail_revenue_per_week) * parseInt(weeks_open);
                if(retail_revenue_per_year > 0){
                    $('#retail_revenue_per_year').val(cur+""+parseFloat(retail_revenue_per_year).toLocaleString());
                }

                //7 retail_revenue_per_year = retail_revenue_per_week  weeks_open     
                total_retail_revenue_per_year  = parseInt(salon_revenue_per_year) + parseInt(total_retail_revenue_per_year);
                if(total_retail_revenue_per_year > 0){
                    $('#total_retail_revenue_per_year').val(cur+""+parseFloat(total_retail_revenue_per_year).toLocaleString());
                }


                //8 total_salon_revenue_per_month = total_retail_revenue_per_year / 12
                total_salon_revenue_per_month  = parseInt(total_retail_revenue_per_year) / 12 ;
                if(total_salon_revenue_per_month > 0){
                    $('#total_salon_revenue_per_month').val(cur+""+parseFloat(total_salon_revenue_per_month).toLocaleString());
                }


                //9 total_salon_revenue_per_year_1 = total_salon_revenue_per_month *  w12    
                total_salon_revenue_per_year_1  = parseInt(total_salon_revenue_per_month) * 12 ;
                if(total_salon_revenue_per_year_1 > 0){
                    $('#total_salon_revenue_per_year_1').val(cur+""+parseFloat(total_salon_revenue_per_year_1).toLocaleString());
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









     
        































