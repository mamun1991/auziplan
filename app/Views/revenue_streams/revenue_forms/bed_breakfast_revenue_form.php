    <!-- Content Wrapper. Contains page content -->
    <style type="text/css">

    </style>
      <div class="card mb-3">    
        <div class="row">
            <div class="container p-3 handlecurrencyformat"> 
                  <div class="row"> 
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card-body">
                          <div class="form-floating mb-3">
                            <input class="form-control" id="rooms" name="rooms">
                              <label for="max_view">How many rooms are available?</label>
                          </div><!-- /.form -floating -->
                        </div><!-- /.card body-->
                      </div><!-- /.col -->
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="card-body"> 
                                <div class="form-floating mb-3">
                                <span class="form-control" readonly id="days_open" name="days_open"></span>
                                    <label for="projected_cost">Days Open</label>
                                </div><!-- /.form -floating-->
                            </div><!-- /.card body-->
                        </div><!-- /.col -->
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="card-body">
                                <div class="form-floating mb-3">
                                    <span class="form-control" readonly id="room_night" name="room_night"></span>
                                    <label for="projected_cost">Room Nights</label>
                                </div><!-- /.form -floating-->
                            </div><!-- /.card body-->
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                    <div class="row"> 
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="card-body">           
                                <h5 class="p-1">Days Open</h5>
                                <div class="form-floating mb-3">
                                <input class="form-control" id="highseasondaysopen" name="highseasondaysopen">
                                    <label for="highseasondaysopen">How many days open in high season?</label>
                                </div><!-- /.form -floating -->
                                <div class="form-floating mb-3">
                                    <input class="form-control" id="midseasondaysopen" name="midseasondaysopen">
                                    <label for="midseasondaysopen">How many days open in high mid season?</label>
                                </div><!-- /.form -floating -->
                                <div class="form-floating mb-3">
                                    <input class="form-control" id="lowseasondaysopen" name="lowseasondaysopen">
                                    <label for="lowseasondaysopen">How many days open in low season?</label>
                                </div><!-- /.form -floating -->
                            </div><!-- /.card body-->
                        </div><!-- /.col -->
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="card-body"> 
                                <h5 class="p-1">Occupancy</h5>
                                <div class="form-floating mb-3">
                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="35%<?= ($row->max_view) ? $row->max_view : '' ?>">
                                    <label for="max_view">Occupancy growth high season?</label>
                                </div><!-- /.form -floating -->
                                <div class="form-floating mb-3">
                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="20%<?= ($row->max_view) ? $row->max_view : '' ?>">
                                    <label for="max_view">Occupancy growth mid season?</label>
                                </div><!-- /.form -floating -->
                                <div class="form-floating mb-3">
                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="10%<?= ($row->max_view) ? $row->max_view : '' ?>">
                                    <label for="max_view">Occupancy growth low season?</label>
                                </div><!-- /.form -floating -->
                              </div><!-- /.card body-->
                          </div><!-- /.col -->
                          <div class="col-lg-4 col-md-4 col-sm-12">
                              <div class="card-body">
                                <h5 class="p-1">Room Rate</h5>
                                  <div class="form-floating mb-3">
                                      <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="$90.00<?= ($row->max_view) ? $row->max_view : '' ?>">
                                      <label for="max_view">Room high season?</label>
                                  </div><!-- /.form -floating -->
                                  <div class="form-floating mb-3">
                                      <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="$70.00<?= ($row->max_view) ? $row->max_view : '' ?>">
                                      <label for="max_view">Room mid season?</label>
                                  </div><!-- /.form -floating -->
                                  <div class="form-floating mb-3">
                                      <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="$50.00<?= ($row->max_view) ? $row->max_view : '' ?>">
                                      <label for="max_view">Room low season?</label>
                                  </div><!-- /.form -floating -->
                              </div><!-- /.card body-->
                            </div><!-- /.col -->
                          </div><!-- /.row -->
                      </div><!-- /.card body-->
                    </div><!-- /.col -->  
                  </div><!-- /.row -->


                  <div class="card">    
                    <div class="row p-3">
                        <div class="container handlecurrencyformat"> 
                            <div id="tableExample2" data-list='{"page":1,"pagination":true}'>
                                <div class="table-responsive scrollbar">
                                    <div class="header-fixed">
                                      <table id="bedandbreakfastDT" class="table table-striped table-hover fs--1 mb-0"  style="width:100%">
                                        <tbody>
                                        <thead class="row1">
                                            <th class="column0 style18 s"><b>Occupancy</b></th>
                                            <th class="column1 style19 s"><b></b></th>
                                            <th class="column2 style19 s"><b>Year 1</b></th>
                                            <th class="column3 style19 s"><b>Year 2</b></th>
                                            <th class="column4 style19 s"><b>Year 3</b></th>
                                            <th class="column5 style19 s"><b>Year 4</b></th>
                                            <th class="column6 style20 s"><b>Year 5</b></th>
                                            <th class="column7">&nbsp;</th>
                                            <th class="column8">&nbsp;</th>
                                            <th class="column9">&nbsp;</th>
                                            <th class="column10">&nbsp;</th>
                                        </thead>
                                          <tr class="row1" style="display:none">
                                            <td class="column0 style4 s">Occupancy Percentage</td>
                                            <td class="column1 style5 null"></td>
                                            <td class="column2 style6 s">High Season</td>
                                            <td class="column3 style7 s">Mid Season</td>
                                            <td class="column4 style7 s">Low Season</td>
                                            <td class="column5 style5 null"></td>
                                            <td class="column6 style8 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8 style0 null"></td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row2" style="display:none" >
                                            <td class="column0 style9 null"> Days Open per Year</td>
                                            <td class="column1 style10 null"></td>
                                            <td class="column2 style11 n"><input class="form-control" id="highseasondaysopen" name="highseasondaysopen"></td>
                                            <td class="column3 style12 f"><input class="form-control" id="midseasondaysopen" name="midseasondaysopen"></td>
                                            <td class="column4 style13 f"><input class="form-control" id="lowseasondaysopen" name="lowseasondaysopen"></td>
                                            <td class="column5 style3 null"></td>
                                            <td class="column6 style14 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row1" style="display:none" >
                                            <td class="column0 style4 s">Available Rooms</td>
                                            <td class="column1 style5 null"></td>
                                            <td class="column2 style6 s">Rooms</td>
                                            <td class="column3 style7 s">Days open</td>
                                            <td class="column4 style7 s">Room Nights</td>
                                            <td class="column5 style5 null"></td>
                                            <td class="column6 style8 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8 style0 null"></td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row2" style="display:none" >
                                            <td class="column0 style9 null"></td>
                                            <td class="column1 style10 null"></td>
                                            <td class="column2 style11 n"><!--<input class="form-control" id="rooms" name="rooms">--></td>
                                            <td class="column3 style12 f"><!--<span id="days_open" name="days_open">0</span>--></td>
                                            <td class="column4 style13 f"><!--<span id="room_night" name="room_night"></span>--></td>
                                            <td class="column5 style3 null"></td>
                                            <td class="column6 style14 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                        <!-- <tr class="row2">
                                            <td class="column0 style9 null">Room Rate Uplift</td>
                                            <td class="column1 style10 null"><input class="form-control" id="highseasondaysopen" name="highseasondaysopen"></td>
                                            <td class="column2 style11 n"><input class="form-control" id="highseasondaysopen" name="highseasondaysopen"></td>
                                            <td class="column3 style12 f"><input class="form-control" id="midseasondaysopen" name="midseasondaysopen"></td>
                                            <td class="column4 style13 f"><input class="form-control" id="lowseasondaysopen" name="lowseasondaysopen"></td>
                                            <td class="column5 style3 null"></td>
                                            <td class="column6 style14 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row3">
                                            <td class="column0 style15 null"></td>
                                            <td class="column1 style16 null"></td>
                                            <td class="column2 style16 null"></td>
                                            <td class="column3 style16 null"></td>
                                            <td class="column4 style16 null"></td>
                                            <td class="column5 style16 null"></td>
                                            <td class="column6 style17 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>                                              
                                          <tr class="row4">
                                            <td class="column0 style18 s"><b>Occupancy</b></td>
                                            <td class="column1 style19 s"><b></b></td>
                                            <td class="column2 style19 s"><b>Year 1</b></td>
                                            <td class="column3 style19 s"><b>Year 2</b></td>
                                            <td class="column4 style19 s"><b>Year 3</b></td>
                                            <td class="column5 style19 s"><b>Year 4</b></td>
                                            <td class="column6 style20 s"><b>Year 5</b></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>

                                        -->
                                        <thead class="row1">
                                            <th class="column0 style18 s"><b>Occupancy</b></th>
                                            <th class="column1 style19 s"><b></b></th>
                                            <th class="column2 style19 s"><b>Year 1</b></th>
                                            <th class="column3 style19 s"><b>Year 2</b></th>
                                            <th class="column4 style19 s"><b>Year 3</b></th>
                                            <th class="column5 style19 s"><b>Year 4</b></th>
                                            <th class="column6 style20 s"><b>Year 5</b></th>
                                            <th class="column7">&nbsp;</th>
                                            <th class="column8">&nbsp;</th>
                                            <th class="column9">&nbsp;</th>
                                            <th class="column10">&nbsp;</th>
                                        </thead>
                                          <tr class="row5">
                                            <td class="column0 style21 s">High season</td>
                                            <td class="column1 style11 n"></td>
                                            <td class="column2 style22 f"><input class="form-control" id="highseasony1" name="highseasony1" value="0"></td>
                                            <td class="column3 style22 f"><span id="highseasony2" name="highseasony2"></span></td>
                                            <td class="column4 style22 f"><span id="highseasony3" name="highseasony3"></span></td>
                                            <td class="column5 style22 f"><span id="highseasony4" name="highseasony4"></span></td>
                                            <td class="column5 style22 f"><span id="highseasony5" name="highseasony5"></span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row6">
                                            <td class="column0 style21 s">Mid Season</td>
                                            <td class="column1 style11 n"></td>
                                            <td class="column2 style22 f"><input class="form-control" id="midseasony1" name="midseasony1" value="0"></td>
                                            <td class="column3 style22 f"><span id="midseasony2" name="midseasony2"></span></td>
                                            <td class="column4 style22 f"><span id="midseasony3" name="midseasony3"></span></td>
                                            <td class="column5 style22 f"><span id="midseasony4" name="midseasony4"></span></td>
                                            <td class="column5 style22 f"><span id="midseasony5" name="midseasony5"></span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row7">
                                            <td class="column0 style21 s">Low Season</td>
                                            <td class="column1 style11 n"></td>
                                            <td class="column2 style22 f"><input class="form-control" id="lowseasony1" name="lowseasony1" value="0"></td>
                                            <td class="column3 style22 f"><span id="lowseasony2" name="lowseasony2"></span></td>
                                            <td class="column4 style22 f"><span id="lowseasony3" name="lowseasony3"></span></td>
                                            <td class="column5 style22 f"><span id="lowseasony4" name="lowseasony4"></span></td>
                                            <td class="column5 style22 f"><span id="lowseasony5" name="lowseasony"></span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row8">
                                            <td class="column0 style9 null"></td>
                                            <td class="column1 style3 null"></td>
                                            <td class="column2 style3 null"></td>
                                            <td class="column3 style3 null"></td>
                                            <td class="column4 style3 null"></td>
                                            <td class="column5 style3 null"></td>
                                            <td class="column6 style14 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>                                      
                                        <thead class="row1">
                                            <th class="column0 style18 s"><b>Occupancy</b></th>
                                            <th class="column1 style19 s"><b></b></th>
                                            <th class="column2 style19 s"><b>Year 1</b></th>
                                            <th class="column3 style19 s"><b>Year 2</b></th>
                                            <th class="column4 style19 s"><b>Year 3</b></th>
                                            <th class="column5 style19 s"><b>Year 4</b></th>
                                            <th class="column6 style20 s"><b>Year 5</b></th>
                                            <th class="column7">&nbsp;</th>
                                            <th class="column8">&nbsp;</th>
                                            <th class="column9">&nbsp;</th>
                                            <th class="column10">&nbsp;</th>
                                        </thead>
                                          <tr class="row10">
                                            <td class="column0 style18 s"><b>Room Rate</b></td>
                                            <td class="column1 style27 null"></td>
                                            <td class="column2 style28 null"></td>
                                            <td class="column3 style28 null"></td>
                                            <td class="column4 style28 null"></td>
                                            <td class="column5 style28 null"></td>
                                            <td class="column6 style29 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row11">
                                            <td class="column0 style21 s">High season</td>
                                            <td class="column1 style27 null"></td>
                                            <td class="column2 style30 n"><input class="form-control" id="rate_highseason_y1" name="rate_highseason_y1"></td>
                                            <td class="column3 style30 n"><input class="form-control" id="rate_highseason_y2" name="rate_highseason_y2"></td>
                                            <td class="column4 style30 n"><input class="form-control" id="rate_highseason_y3" name="rate_highseason_y3"></td>
                                            <td class="column5 style30 n"><input class="form-control" id="rate_highseason_y4" name="rate_highseason_y4"></td>
                                            <td class="column6 style31 n"><input class="form-control" id="rate_highseason_y5" name="rate_highseason_y5"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row12">
                                            <td class="column0 style21 s">Mid season</td>
                                            <td class="column1 style27 null"></td>
                                            <td class="column2 style30 n"><input class="form-control" id="rate_midseason_y1" name="rate_midseason_y1"></td>
                                            <td class="column3 style30 n"><input class="form-control" id="rate_midseason_y2" name="rate_midseason_y2"></td>
                                            <td class="column4 style30 n"><input class="form-control" id="rate_midseason_y3" name="rate_midseason_y3"></td>
                                            <td class="column5 style30 n"><input class="form-control" id="rate_midseason_y4" name="rate_midseason_y4"></td>
                                            <td class="column6 style31 n"><input class="form-control" id="rate_midseason_y5" name="rate_midseason_y5"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row13">
                                            <td class="column0 style21 s">Low Season</td>
                                            <td class="column1 style27 null"></td>
                                            <td class="column2 style30 n"><input class="form-control" id="rate_lowseason_y1" name="rate_lowseason_y1"></td>
                                            <td class="column3 style30 n"><input class="form-control" id="rate_lowseason_y2" name="rate_lowseason_y2"></td>
                                            <td class="column4 style30 n"><input class="form-control" id="rate_lowseason_y3" name="rate_lowseason_y3"></td>
                                            <td class="column5 style30 n"><input class="form-control" id="rate_lowseason_y4" name="rate_lowseason_y4"></td>
                                            <td class="column6 style31 n"><input class="form-control" id="rate_lowseason_y5" name="rate_lowseason_y5"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row14">
                                            <td class="column0 style24 null"></td>
                                            <td class="column1 style32 null"></td>
                                            <td class="column2 style25 null"></td>
                                            <td class="column3 style25 null"></td>
                                            <td class="column4 style25 null"></td>
                                            <td class="column5 style25 null"></td>
                                            <td class="column6 style26 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row15">
                                            <td class="column0 style18 s"><b>Other Revenue</b></td>
                                            <td class="column1 style33 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style34 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row16">
                                            <td class="column0 style35 s"><b>Food</b></td>
                                            <td class="column1 style22 n"><input class="form-control" id="food_percentage" name="food_percentage"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style34 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row17">
                                            <td class="column0 style35 s"><b>Drink</b></td>
                                            <td class="column1 style22 n"><input class="form-control" id="drink_percentage" name="drink_percentage"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style34 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row18">
                                            <td class="column0 style35 s"><b>Other 1<b></td>
                                            <td class="column1 style36 null"></td>
                                            <td class="column2 style37 n"><input class="form-control" id="other1_y1" name="other1_y1"></td>
                                            <td class="column3 style37 n"><input class="form-control" id="other1_y2" name="other1_y2"></td>
                                            <td class="column4 style37 n"><input class="form-control" id="other1_y3" name="other1_y3"></td>
                                            <td class="column5 style37 n"><input class="form-control" id="other1_y4" name="other1_y4"></td>
                                            <td class="column6 style38 n"><input class="form-control" id="other1_y5" name="other1_y5"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row19">
                                            <td class="column0 style35 s"><b>Other 2</b></td>
                                            <td class="column1 style36 null"></td>
                                            <td class="column2 style37 n"><input class="form-control" id="other1_y1" name="other1_y1"></td>
                                            <td class="column3 style37 n"><input class="form-control" id="other2_y2" name="other2_y2"></td>
                                            <td class="column4 style37 n"><input class="form-control" id="other2_y3" name="other2_y3"></td>
                                            <td class="column5 style37 n"><input class="form-control" id="other2_y4" name="other2_y4"></td>
                                            <td class="column6 style38 n"><input class="form-control" id="other2_y5" name="other2_y5"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                        <!--
                                          <tr class="row20">
                                            <td class="column0 style39 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style34 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row21">
                                            <td class="column0 style39 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style34 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row22">
                                            <td class="column0 style40 null"></td>
                                            <td class="column1 style41 null"></td>
                                            <td class="column2 style41 null"></td>
                                            <td class="column3 style41 null"></td>
                                            <td class="column4 style41 null"></td>
                                            <td class="column5 style41 null"></td>
                                            <td class="column6 style42 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row23">
                                            <td class="column0 style0 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style0 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row24">
                                            <td class="column0 style0 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style0 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                        -->   
                                          <tr class="row25">
                                            <td class="column0 style43 s"><b>Summary</td></b>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style0 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                        <!-- <tr class="row26">
                                            <td class="column0 style0 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style0 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                        -->
                                          <tr class="row27">
                                            <td class="column0 style44 s"><b>Room Nights</b></td>
                                            <td class="column1 style45 null"></td>
                                            <td class="column2 style46 null"></td>
                                            <td class="column3 style46 null"></td>
                                            <td class="column4 style46 null"></td>
                                            <td class="column5 style46 null"></td>
                                            <td class="column6 style47 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>                
                                          <tr class="row30">
                                            <td class="column0 style21 s">Mid Season</td>
                                            <td class="column1 style13 f"><span id="result_highseason_roomnight" name="result_highseason_roomnight" style="display:none">0</span></td>
                                            <td class="column2 style48 f"><span id="result_highseason_roomnighty1" name="result_highseason_roomnighty1">0</span></td>
                                            <td class="column3 style48 f"><span id="result_highseason_roomnighty2" name="result_highseason_roomnighty2">0</span></td>
                                            <td class="column4 style48 f"><span id="result_highseason_roomnighty3" name="result_highseason_roomnighty3">0</span></td>
                                            <td class="column5 style48 f"><span id="result_highseason_roomnighty4" name="result_highseason_roomnighty4">0</span></td>
                                            <td class="column6 style49 f"><span id="result_highseason_roomnighty5" name="result_highseason_roomnighty5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row30">
                                            <td class="column0 style21 s">Mid Season</td>
                                            <td class="column1 style13 f"><span id="result_midseason_roomnight" name="result_midseason_roomnight" style="display:none">0</span></td>
                                            <td class="column2 style48 f"><span id="result_midseason_roomnighty1" name="result_midseason_roomnighty1">0</span></td>
                                            <td class="column3 style48 f"><span id="result_midseason_roomnighty2" name="result_midseason_roomnighty2">0</span></td>
                                            <td class="column4 style48 f"><span id="result_midseason_roomnighty3" name="result_midseason_roomnighty3">0</span></td>
                                            <td class="column5 style48 f"><span id="result_midseason_roomnighty4" name="result_midseason_roomnighty4">0</span></td>
                                            <td class="column6 style49 f"><span id="result_midseason_roomnighty5" name="result_midseason_roomnighty5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row30">
                                            <td class="column0 style21 s">Low Season</td>
                                            <td class="column1 style13 f"><span id="result_lowseason_roomnight" name="result_lowseason_roomnight" style="display:none">0</span></td>
                                            <td class="column2 style48 f"><span id="result_lowseason_roomnighty1" name="result_lowseason_roomnighty1">0</span></td>
                                            <td class="column3 style48 f"><span id="result_lowseason_roomnighty2" name="result_lowseason_roomnighty2">0</span></td>
                                            <td class="column4 style48 f"><span id="result_lowseason_roomnighty3" name="result_lowseason_roomnighty3">0</span></td>
                                            <td class="column5 style48 f"><span id="result_lowseason_roomnighty4" name="result_lowseason_roomnighty4">0</span></td>
                                            <td class="column6 style49 f"><span id="result_lowseason_roomnighty5" name="result_lowseason_roomnighty5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row31">
                                            <td class="column0 style24 s"><b>Total room nights</b></td>
                                            <td class="column1 style25 f"><span id="total_daysopen_roomnight" name="total_daysopen_roomnight" style="display:none">0</span></td>
                                            <td class="column2 style25 f"><span id="total_daysopen_roomnight_y1" name="total_daysopen_roomnight_y1">0</span></td>
                                            <td class="column3 style25 f"><span id="total_daysopen_roomnight_y2" name="total_daysopen_roomnight_y2">0</span></td>
                                            <td class="column4 style25 f"><span id="total_daysopen_roomnight_y3" name="total_daysopen_roomnight_y3">0</span></td>
                                            <td class="column5 style25 f"><span id="total_daysopen_roomnight_y4" name="total_daysopen_roomnight_y4">0</span></td>
                                            <td class="column6 style26 f"><span id="total_daysopen_roomnight_y5" name="total_daysopen_roomnight_y5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <!--                                      
                                          <tr class="row32">
                                            <td class="column0 style39 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style34 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row33">
                                            <td class="column0 style39 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style34 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row34">
                                            <td class="column0 style39 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style34 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row35">
                                            <td class="column0 style39 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style34 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>-->
                                          <tr class="row36">
                                            <td class="column0 style39 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style34 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>

                                          <tr class="row37">
                                            <td class="column0 style18 s"><b>Revenue</b></td>
                                            <td class="column1 style27 null"></td>
                                            <td class="column2 style28 null"></td>
                                            <td class="column3 style28 null"></td>
                                            <td class="column4 style28 null"></td>
                                            <td class="column5 style28 null"></td>
                                            <td class="column6 style29 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row38">
                                            <td class="column0 style21 s">High season</td>
                                            <td class="column1 style13 null"></td>
                                            <td class="column2 style48 f"><span id="revenue_highseason_y1" name="revenue_highseason_y1">0</span></td>
                                            <td class="column3 style48 f"><span id="revenue_highseason_y2" name="revenue_highseason_y2">0</span></td>
                                            <td class="column4 style48 f"><span id="revenue_highseason_y3" name="revenue_highseason_y3">0</span></td>
                                            <td class="column5 style48 f"><span id="revenue_highseason_y4" name="revenue_highseason_y4">0</span></td>
                                            <td class="column6 style49 f"><span id="revenue_highseason_y5" name="revenue_highseason_y5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row39">
                                            <td class="column0 style21 s">Mid season</td>
                                            <td class="column1 style13 null"></td>
                                            <td class="column2 style48 f"><span id="revenue_midseason_y1" name="revenue_midseason_y1">0</span></td>
                                            <td class="column3 style48 f"><span id="revenue_midseason_y2" name="revenue_midseason_y2">0</span></td>
                                            <td class="column4 style48 f"><span id="revenue_midseason_y3" name="revenue_midseason_y3">0</span></td>
                                            <td class="column5 style48 f"><span id="revenue_midseason_y4" name="revenue_midseason_y4">0</span></td>
                                            <td class="column6 style49 f"><span id="revenue_midseason_y5" name="revenue_midseason_y5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row40">
                                            <td class="column0 style21 s">Low Season</td>
                                            <td class="column1 style13 null"></td>
                                            <td class="column2 style48 f"><span id="revenue_lowseason_y1" name="revenue_lowseason_y1">0</span></td>
                                            <td class="column3 style48 f"><span id="revenue_lowseason_y2" name="revenue_lowseason_y2">0</span></td>
                                            <td class="column4 style48 f"><span id="revenue_lowseason_y3" name="revenue_lowseason_y3">0</span></td>
                                            <td class="column5 style48 f"><span id="revenue_lowseason_y4" name="revenue_lowseason_y4">0</span></td>
                                            <td class="column6 style49 f"><span id="revenue_lowseason_y5" name="revenue_lowseason_y5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row41">
                                            <td class="column0 style24 s"><b>Room Revenue Total</b></td>
                                            <td class="column1 style25 null"></td>
                                            <td class="column2 style25 f"><span id="total_room_revenue_y1" name="total_room_revenue_y1">0</span></td>
                                            <td class="column3 style25 f"><span id="total_room_revenue_y2" name="total_room_revenue_y2">0</span></td>
                                            <td class="column4 style25 f"><span id="total_room_revenue_y3" name="total_room_revenue_y3">0</span></td>
                                            <td class="column5 style25 f"><span id="total_room_revenue_y4" name="total_room_revenue_y4">0</span></td>
                                            <td class="column6 style26 f"><span id="total_room_revenue_y5" name="total_room_revenue_y5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row42">
                                            <td class="column0 style24 null"></td>
                                            <td class="column1 style25 null"></td>
                                            <td class="column2 style25 null"></td>
                                            <td class="column3 style25 null"></td>
                                            <td class="column4 style25 null"></td>
                                            <td class="column5 style25 null"></td>
                                            <td class="column6 style26 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                        <tr class="row43">
                                            <td class="column0 style39 null"><b>Food and Drink</b> </td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style50 null"></td>
                                            <td class="column3 style50 null"></td>
                                            <td class="column4 style50 null"></td>
                                            <td class="column5 style50 null"></td>
                                            <td class="column6 style51 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row44">
                                            <td class="column0 style39 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style48 f"><span id="food_revenue_y1" name="food_revenue_y1">0</span></td>
                                            <td class="column3 style48 f"><span id="food_revenue_y2" name="food_revenue_y2">0</span></td>
                                            <td class="column4 style48 f"><span id="food_revenue_y3" name="food_revenue_y3">0</span></td>
                                            <td class="column5 style48 f"><span id="food_revenue_y4" name="food_revenue_y4">0</span></td>
                                            <td class="column6 style49 f"><span id="food_revenue_y5" name="food_revenue_y5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row45">
                                            <td class="column0 style39 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style13 f"><span id="drink_revenue_y1" name="drink_revenue_y1">0</span></td>
                                            <td class="column3 style13 f"><span id="drink_revenue_y2" name="drink_revenue_y2">0</span></td>
                                            <td class="column4 style13 f"><span id="drink_revenue_y3" name="drink_revenue_y3">0</span></td>
                                            <td class="column5 style13 f"><span id="drink_revenue_y4" name="drink_revenue_y4">0</span></td>
                                            <td class="column6 style52 f"><span id="drink_revenue_y5" name="drink_revenue_y5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <!--<tr class="row46">
                                            <td class="column0 style39 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style34 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>-->
                                          <tr class="row47">
                                            <td class="column0 style39 null"></td>
                                            <td class="column1 style0 null"></td>
                                            <td class="column2 style0 null"></td>
                                            <td class="column3 style0 null"></td>
                                            <td class="column4 style0 null"></td>
                                            <td class="column5 style0 null"></td>
                                            <td class="column6 style34 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row48">
                                            <td class="column0 style24 s"><b>Other Revenue Total</b></td>
                                            <td class="column1 style53 null"></td>
                                            <td class="column2 style54 f"><span id="total_other_revenue_y1" name="total_other_revenue_y1">0</span></td>
                                            <td class="column3 style54 f"><span id="total_other_revenue_y2" name="total_other_revenue_y2">0</span></td>
                                            <td class="column4 style54 f"><span id="total_other_revenue_y3" name="total_other_revenue_y3">0</span></td>
                                            <td class="column5 style54 f"><span id="total_other_revenue_y4" name="total_other_revenue_y4">0</span></td>
                                            <td class="column6 style55 f"><span id="total_other_revenue_y5" name="total_other_revenue_y5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row49">
                                            <td class="column0 style21 null"></td>
                                            <td class="column1 style36 null"></td>
                                            <td class="column2 style50 null"></td>
                                            <td class="column3 style50 null"></td>
                                            <td class="column4 style50 null"></td>
                                            <td class="column5 style50 null"></td>
                                            <td class="column6 style51 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row50">
                                            <td class="column0 style56 s"><b>Total Revenue</b></td>
                                            <td class="column1 style57 null"></td>
                                            <td class="column2 style58 f"><span id="total_revenue_y1" name="total_revenue_y1">0</span></td>
                                            <td class="column3 style58 f"><span id="total_revenue_y2" name="total_revenue_y2">0</span></td>
                                            <td class="column4 style58 f"><span id="total_revenue_y3" name="total_revenue_y3">0</span></td>
                                            <td class="column5 style58 f"><span id="total_revenue_y4" name="total_revenue_y4">0</span></td>
                                            <td class="column6 style59 f"><span id="total_revenue_y5" name="total_revenue_y5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row51">
                                            <td class="column0 style9 null"></td>
                                            <td class="column1 style60 null"></td>
                                            <td class="column2 style60 null"></td>
                                            <td class="column3 style60 null"></td>
                                            <td class="column4 style60 null"></td>
                                            <td class="column5 style3 null"></td>
                                            <td class="column6 style14 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <!--<tr class="row52">
                                            <td class="column0 style9 null"></td>
                                            <td class="column1 style60 null"></td>
                                            <td class="column2 style60 null"></td>
                                            <td class="column3 style60 null"></td>
                                            <td class="column4 style60 null"></td>
                                            <td class="column5 style3 null"></td>
                                            <td class="column6 style14 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>-->
                                          <tr class="row53">
                                            <td class="column0 style18 s"><b>Summary Information</b></td>
                                            <td class="column1 style3 null"></td>
                                            <td class="column2 style3 null"></td>
                                            <td class="column3 style3 null"></td>
                                            <td class="column4 style3 null"></td>
                                            <td class="column5 style3 null"></td>
                                            <td class="column6 style14 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row54">
                                            <td class="column0 style9 s">Average daily income</td>
                                            <td class="column1 style3 null"></td>
                                            <td class="column2 style50 f"><span id="avg_daily_income_y1" name="avg_daily_income_y1">0</span></td>
                                            <td class="column3 style50 f"><span id="avg_daily_income_y2" name="avg_daily_income_y2">0</span></td>
                                            <td class="column4 style50 f"><span id="avg_daily_income_y3" name="avg_daily_income_y3">0</span></td>
                                            <td class="column5 style50 f"><span id="avg_daily_income_y4" name="avg_daily_income_y4">0</span></td>
                                            <td class="column6 style51 f"><span id="avg_daily_income_y5" name="avg_daily_income_y5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row55">
                                            <td class="column0 style61 s">Average occupancy for the year</td>
                                            <td class="column1 style3 null"></td>
                                            <td class="column2 style62 f"><span id="avg_occuoancy_y1" name="avg_occuoancy_y1">0</span></td>
                                            <td class="column3 style62 f"><span id="avg_occuoancy_y2" name="avg_occuoancy_y2">0</span></td>
                                            <td class="column4 style62 f"><span id="avg_occuoancy_y3" name="avg_occuoancy_y3">0</span></td>
                                            <td class="column5 style62 f"><span id="avg_occuoancy_y4" name="avg_occuoancy_y4">0</span></td>
                                            <td class="column6 style63 f"><span id="avg_occuoancy_y5" name="avg_occuoancy_y5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                          <tr class="row56">
                                            <td class="column0 style9 s">Average occupied room rate</td>
                                            <td class="column1 style3 null"></td>
                                            <td class="column2 style64 f"><span id="avg_occupied_roomrate_y1" name="avg_occupied_roomrate_y1">0</span></td>
                                            <td class="column3 style64 f"><span id="avg_occupied_roomrate_y2" name="avg_occupied_roomrate_y2">0</span></td>
                                            <td class="column4 style64 f"><span id="avg_occupied_roomrate_y3" name="avg_occupied_roomrate_y3">0</span></td>
                                            <td class="column5 style64 f"><span id="avg_occupied_roomrate_y4" name="avg_occupied_roomrate_y4">0</span></td>
                                            <td class="column6 style65 f"><span id="avg_occupied_roomrate_y5" name="avg_occupied_roomrate_y5">0</span></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>

                                          <tr class="row57">
                                            <td class="column0 style66 null"></td>
                                            <td class="column1 style67 null"></td>
                                            <td class="column2 style67 null"></td>
                                            <td class="column3 style67 null"></td>
                                            <td class="column4 style67 null"></td>
                                            <td class="column5 style67 null"></td>
                                            <td class="column6 style68 null"></td>
                                            <td class="column7">&nbsp;</td>
                                            <td class="column8">&nbsp;</td>
                                            <td class="column9">&nbsp;</td>
                                            <td class="column10">&nbsp;</td>
                                          </tr>
                                        </tbody><!-- /.table body -->
                                      </table><!-- /.table -->
                                    </div><!-- /.row -->
                                  </div><!-- /.card-->    
                                </div><!-- /.row -->
                              </div><!-- /.card-->    
                          </div><!-- /.row -->
                        <div class="border-dashed-bottom my-3"></div>
                          <div class="col-12 col-sm-12 offset-0 p-3">
                              <input type='hidden' id='productrevenueid' value='0'>
                              <button class="btn btn-falcon-danger" type="button" id="btncancelproductrevenue" ><i class="far fa-window-close"></i> Cancel</button>
                              <input name="save_local_products_step_2" type="button" id="btnsaveproduct" value="Save and Continue" class="btn btn-outline-success float-end">
                          </div>
                      </div><!-- /.card-->    
                      <script src="<?php echo base_url('custom-assets/bednbreakfast.js') ?>"></script>






