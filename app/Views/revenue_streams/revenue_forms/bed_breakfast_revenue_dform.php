<div class="card">    
	<h4 class="p-3">Bed and Breakfast</h4>
        <div class="row">
            <div class="container p-3 handlecurrencyformat"> 

                <div class="row"> 
            
                    <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="card-body">
                                <div class="form-floating mb-3">
                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="8<?= ($row->max_view) ? $row->max_view : '' ?>">
                                    <label for="max_view">How many rooms are available?</label>
                                </div><!-- /.form -floating -->
                                <div class="form-floating mb-3">
                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="110<?= ($row->max_view) ? $row->max_view : '' ?>">
                                    <label for="max_view">How many days open in high season?</label>
                                </div><!-- /.form -floating -->

                                <div class="form-floating mb-3">
                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="35%<?= ($row->max_view) ? $row->max_view : '' ?>">
                                    <label for="max_view">Occupancy growth high season?</label>
                                </div><!-- /.form -floating -->

                                <div class="form-floating mb-3">
                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="$90.00<?= ($row->max_view) ? $row->max_view : '' ?>">
                                    <label for="max_view">Room high season?</label>
                                </div><!-- /.form -floating -->

                            </div><!-- /.card body-->
                        </div><!-- /.col -->

                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="card-body"> 
                                <div class="form-floating mb-3">
                                    <input type="text" name="projected_cost"  class="form-control" readonly  id="projected_cost" placeholder="Projected cost" value="290<?= ($row->projected_cost) ? $row->projected_cost : '' ?>">
                                    <label for="projected_cost">Days Open</label>
                                </div><!-- /.form -floating-->
                                <div class="form-floating mb-3">
                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="100<?= ($row->max_view) ? $row->max_view : '' ?>">
                                    <label for="max_view">How many days open in mid season?</label>
                                </div><!-- /.form -floating -->
                                <div class="form-floating mb-3">
                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="20%<?= ($row->max_view) ? $row->max_view : '' ?>">
                                    <label for="max_view">Occupancy growth mid season?</label>
                                </div><!-- /.form -floating -->
                                <div class="form-floating mb-3">
                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="$70.00<?= ($row->max_view) ? $row->max_view : '' ?>">
                                    <label for="max_view">Room mid season?</label>
                                </div><!-- /.form -floating -->


                            </div><!-- /.card body-->
                        </div><!-- /.col -->

                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="card-body">
                                <div class="form-floating mb-3">
                                    <input type="text" name="projected_cost"  class="form-control" readonly id="projected_cost" placeholder="Projected cost" value="2,320<?= ($row->projected_cost) ? $row->projected_cost : '' ?>">
                                    <label for="projected_cost">Room Nights</label>
                                </div><!-- /.form -floating-->

                                <div class="form-floating mb-3">
                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="80<?= ($row->max_view) ? $row->max_view : '' ?>">
                                    <label for="max_view">How many days open in low season?</label>
                                </div><!-- /.form -floating -->

                                <div class="form-floating mb-3">
                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="10%<?= ($row->max_view) ? $row->max_view : '' ?>">
                                    <label for="max_view">Occupancy growth low season?</label>
                                </div><!-- /.form -floating -->

                                <div class="form-floating mb-3">
                                    <input type="text" name="max_view"  class="form-control" id="max_view" class="currency_formate" placeholder="Visitors" value="$50.00<?= ($row->max_view) ? $row->max_view : '' ?>">
                                    <label for="max_view">Room low season?</label>
                                </div><!-- /.form -floating -->

                            </div><!-- /.card body-->
                        </div><!-- /.col -->
           
                    </div><!-- /.row -->


                <div class="container p-3" style="display:none">        
                 
                    <table id="table_occupancy" class="table  table-striped fs--1 mb-0 ">

                        <thead>
                            <tr class="m-2">
                                <th class="w-20">Occupancy</th>
                                <th class="w-20">Days Open</th>
                                <th class="w-20">Year 1</th>
                                <th class="w-20">Year 2</th>
                                <th class="w-20">Year 3</th>
                            </tr>

                        </thead>

                        <tbody>
                    
                        <tr class="m-0">

                            <th scope="row" class="w-20">High Season</th>

                                <td class="w-20">800              
                    
                                </td>
                                <td class="w-20">640  
                                    
                                </td>
                                <td class="w-20">880   
           
                                </td>
                                <td class="w-20">2,00
     
                                </td>
                            </tr>

                            <tr class="m-0">

                            <th scope="row" class="w-20">Mid Season</th>

                            <td class="w-20">640              
                
                                </td>
                                <td class="w-20">64 

                                </td>
                                <td class="w-20">88    
     
                                </td>
                                <td class="w-20">432
       
                                </td>
                            </tr>

                            <tr class="m-0">

                            <th scope="row" class="w-20">Low Season</th>

                            <td class="w-20">880             
                                               
                                </td>
                                <td class="w-20">128   
          
                                </td>
                                <td class="w-20">106
  
                                </td>
                                <td class="w-20">594
       
                                </td>
                            </tr>

                            <tr class="m-0">

                            <th scope="row" class="w-20"><b>Total Room Nights</b></th>

                            <td class="w-20">2,320            
            
                                </td>
                                <td class="w-20"> 192   
                                     
                                </td>
                                <td class="w-20">123   
                                            
                                </td>
                                <td class="w-20">775
                            
                                </td>
                            </tr>

                    </tbody>
                </table>


            </div><!-- /.container -->
   
								


				<div class="container p-3 handlecurrencyformat">        
									

					<table frame=void cellspacing=0 cols=5 rules=none  class="table  table-striped fs--1 mb-0 " >
						<colgroup>
						<col width=307>
						<col width=127>
						<col width=127>
						<col width=127>
						<col width=127>
					</colgroup>
						<tbody>
							<tr>
								<td width=307 height=29  sdnum="3081;3081;general"><b>Bed and Breakfast Revenue Projection</b></td>
								<td width=127  sdnum="3081;3081;general"></td>
								<td width=127  sdnum="3081;3081;general"></td>
								<td width=127  sdnum="3081;3081;general"></td>
								<td width=127  sdnum="3081;3081;general"></td>
							</tr>

							
							<tr  style="display:none">
								<td height=29  sdnum="3081;3081;general"><b><br></b></td>
								<td  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;3081;@"><b>Rooms</b></td>
								<td  sdnum="3081;3081;general"><b>Days Open</b></td>
								<td  sdnum="3081;3081;general"><b>Room Nights</b></td>
							</tr>


							<tr  style="display:none">
								<td height=20  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;3081;general"></td>
								<td sdval="8" sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"> </td>
								<td  sdval="0" sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td  sdval="0" sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
							</tr>



							<?php /*
							
								


							<tr>
								<td height=20 valign=bottom sdnum="3081;3081;general"></td>
								<td valign=bottom sdnum="3081;3081;general"></td>
								<td valign=bottom sdnum="3081;3081;general"></td>
								<td valign=bottom sdnum="3081;3081;general"></td>
								<td valign=bottom sdnum="3081;3081;general"></td>
							</tr>



							<tr>
								<td height=26  sdnum="3081;3081;general"><b>occupancy</b></td>
								<td><b> days open </b></td>
								<td><b> year 1 </b></td>
								<td><b> year 2 </b></td>
								<td><b> year 3 </b></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">high season</td>
								<td sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td sdnum="3081;3081;0%"></td>
								<td sdnum="3081;3081;0%"></td>
								<td sdnum="3081;3081;0%"></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">mid season</td>
								<td sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td sdnum="3081;3081;0%"></td>
								<td sdnum="3081;3081;0%"></td>
								<td sdnum="3081;3081;0%"></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">low season</td>
								<td sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td sdnum="3081;3081;0%"></td>
								<td sdnum="3081;3081;0%"></td>
								<td sdnum="3081;3081;0%"></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;3081;general"></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;0;0.0%"></td>
								<td  sdnum="3081;0;0.0%"></td>
								<td  sdnum="3081;0;0.0%"></td>
							</tr>


						*/ ?>


							<tr>
								<td height=26  sdnum="3081;3081;general"><b>Occupancy</b></td>
								<td><b> Days Open </b></td>
								<td><b> Year 1 </b></td>
								<td><b> Year 2 </b></td>
								<td><b> Year 3 </b></td>
							</tr>

							<tr>
								<td height=26  sdnum="3081;3081;general"><b>Room Nights</b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td  sdnum="3081;3081;0%"></td>
								<td  sdnum="3081;3081;0%"></td>
								<td  sdnum="3081;3081;0%"></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">High Season</td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">Mid Season</td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">Low Season</td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general"><b>Total Room Nights</b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
							</tr>
							<tr>
								<td height=26  sdnum="3081;3081;general"><b>Room Rate</b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td  sdnum="3081;3081;0%"></td>
								<td  sdnum="3081;3081;0%"></td>
								<td  sdnum="3081;3081;0%"></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">High season</td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">Mid Season</td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">Low Season</td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
							</tr>
							<tr>
								<td height=26  sdnum="3081;3081;general"><b>Revenue</b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td  sdnum="3081;3081;0%"></td>
								<td  sdnum="3081;3081;0%"></td>
								<td  sdnum="3081;3081;0%"></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">High Season</td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">Mid Season</td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">Low Season</td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general"><b>Room Revenue Total</b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b><br></b></td>
							</tr>
							<tr>
								<td height=26  sdnum="3081;3081;general"><b>Other</b></td>
								<td  sdnum="3081;3081;general"><b></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
							</tr>
							<tr>
								<td style="border-top: 1px solid #7f7f7f; border-bottom: 1px solid #7f7f7f; border-left: 1px solid #7f7f7f; border-right: 1px solid #7f7f7f" height=20  bgcolor="#ffcc99" sdnum="3081;3081;general">Food</td>
								<td sdnum="3081;3081;0%"></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
							</tr>
							<tr>
								<td style="border-top: 1px solid #7f7f7f; border-bottom: 1px solid #7f7f7f; border-left: 1px solid #7f7f7f; border-right: 1px solid #7f7f7f" height=20  bgcolor="#ffcc99" sdnum="3081;3081;general">Drink</td>
								<td sdnum="3081;3081;0%"></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><br></td>
							</tr>
							<tr>
								<td style="border-top: 1px solid #7f7f7f; border-bottom: 1px solid #7f7f7f; border-left: 1px solid #7f7f7f; border-right: 1px solid #7f7f7f" height=20  bgcolor="#ffcc99" sdnum="3081;3081;general">Other 1</td>
								<td  sdnum="3081;3081;0%"></td>
								<td sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
							</tr>
							<tr>
								<td style="border-top: 1px solid #7f7f7f; border-bottom: 1px solid #7f7f7f; border-left: 1px solid #7f7f7f; border-right: 1px solid #7f7f7f" height=20  bgcolor="#ffcc99" sdnum="3081;3081;general">Other 2</td>
								<td  sdnum="3081;3081;0%"></td>
								<td sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general"><b>Other Revenue Total</b></td>
								<td  sdnum="3081;3081;0%"><b></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b></b></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"><b></b></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general"><br></td>
								<td  sdnum="3081;3081;0%"></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general"><b>Total Revenue</b></td>
								<td><b></b></td>
								<td><b></b></td>
								<td><b></b></td>
								<td><b></b></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;3081;#,##0"><i><br></i></td>
								<td  sdnum="3081;3081;#,##0"><i><br></i></td>
								<td  sdnum="3081;3081;#,##0"><i><br></i></td>
								<td  sdnum="3081;3081;#,##0"><i><br></i></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;3081;#,##0"><i><br></i></td>
								<td  sdnum="3081;3081;#,##0"><i><br></i></td>
								<td  sdnum="3081;3081;#,##0"><i><br></i></td>
								<td  sdnum="3081;3081;#,##0"><i><br></i></td>
							</tr>

							<tr>
								<td height=26  sdnum="3081;3081;general"><b>Summary</b></td>
								<td  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;3081;general"></td>
							</tr>


							<tr>
								<td height=20  sdnum="3081;3081;general">Average Daily Income</td>
								<td  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
								<td  sdnum="3081;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-"></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">Average Occupancy Yearly</td>
								<td  sdnum="3081;3081;general"></td>
								<td  sdnum="3081;3081;0%"></td>
								<td  sdnum="3081;3081;0%"></td>
								<td  sdnum="3081;3081;0%"></td>
							</tr>
							<tr>
								<td height=20  sdnum="3081;3081;general">Average Occupied Room Rate</td>
								<td  sdnum="3081;3081;general"></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>


						</tbody>
					</table>

            </div><!-- /.container -->
   


        </div><!-- /.row -->
    </div><!-- /.container -->
</div><!-- /.card-->    