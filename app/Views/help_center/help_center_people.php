
<style type="text/css">
    
html,
body {
  overflow-x: hidden;
}

.u-containProse {
  max-width: 80em;
  margin-left: auto;
  margin-right: auto;
}

a:hover, a:focus{
    outline: none;
    text-decoration: none;
    
    
}
#accordion_peo .panel{
    border:0px none;
    box-shadow:none;
}
#accordion_peo .panel-heading{
    padding:0;
    background: #fff;
}
#accordion_peo .panel-title a{
    display: block;
    position: relative;
    background:transparent;
    color:#0064B2;
    font-size:14px;
    font-weight: bolder;
    text-transform:uppercase;
    margin-bottom:15px;
    padding:15px 50px;
    border-bottom:1px solid #0064B2;
    border-radius: 0 15px 0 15px;
    transition:all 0.10s linear 0s;
}
#accordion_peo .panel-title a.collapsed{
    color:#808080;
    border-bottom:1px solid #d3d3d3;
    margin: 0;
}
#accordion_peo.panel-title a i{
    color:#0064B2;
    position: absolute;
    top: 14px;
    left:25px;
}
#accordion_peo .panel-title a:before,
#accordion_peo .panel-title a.collapsed:before{
    content:"";
    position: absolute;
    bottom:-15px;
    left:36px;
    border:7px solid transparent;
    border-top:7px solid #0064B2;
}
#accordion_peo .panel-title a.collapsed:before{
    content:"";
    border: 0px none;
}
#accordion_peo .panel-title a.collapsed:hover{
    color: #0064B2;
}
#accordion_peo .panel-title a:after,
#accordion_peo .panel-title a.collapsed:after{
    content: "\f106";
    font-family: FontAwesome;
    color: #0064B2;
    font-size: 20px;
    line-height: 20px;
    position: absolute;
    top: 14px;
    right:25px;
}
#accordion_peo .panel-title a.collapsed:after{
    content: "\f107";
    color:#808080;
}
#accordion_peo .panel-body{
    border-top:0 none;
    color:#808080;
}

 </style>

 <div class="u-containProse">
   <section class="content animated " >
      <div class="container-fluid">
        <p><b>People:</b>It is more then likely that your company will need to employ people,Jake and his partner Bob plan to have a team of 3 sales reps, 1,factory manager, 
             and office receptionists, and 10 factory workers,that will produce the products they intend to manufacture in seel in Australia.
        </p>
          <div class="row">
            <div class="col-md-offset-0 col-md-12 center-contents">
            <!-- Accordion Panel -starts -->
              <div class="panel-group" id="accordion_peo" role="tablist" aria-multiselectable="true">              
              <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="heading_peo_one">
                      <h4 class="panel-title">
                          <a role="button" data-toggle="collapse" data-parent="#accordion_peo" href="#collapse_peo_one" aria-expanded="true" aria-controls="collapse_peo_one">
                              How do I add People?
                          </a>
                      </h4>
                  </div>
                  <div id="collapse_peo_one" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading_peo_one">
                      <div class="panel-body">  

                      <div class="row">
                        <div class="col-md-6 col-md-offset-0">                            
                         <h1>Add</h1>
                          <h1>Step 1</h1>

                            <ol>
                              <li>Click on <button  class="btn btn-success  btn-sm" onclick="add_person()"><i class="fa fa-plus"></i> Add Person</button></li>
                                <li>Select single or multiple people.</li>
                                 <li>If the multiple people option is selected then the default image will apply for all people.</li>
                                 <li>If the multiple people option is selected then first and last names are not applicable.</li>                                                                              
                                 <li>If the single person  option is selected then your can add a image or use the default image.</li>
                                 <li>If the single person  option is selected then add first and last names for that person.</li>                     
                                 <li>If you get stuck click <button class="btn btn-info btn-sm" type="button"><span class="fa fa-user"></span>&nbsp;Ask Jake</button></li>
                                <!--<li>Click  <button type="button" id="" class="btn btn-next btn-sm"name='next' value="Next"><i class="fa fa-toggle-right"></i> Next</button></li>-->
                            </ol>                                  
                        </div>        
                              <div class="col-md-6 col-md-offset-">  
                           <center><img src="<?= asset_url(); ?>new_theme/images/front_feature_1.png" width="100%" height="100%"alt="" class="img-responsive"></center>                                 
                          </div>                                   
                        </div>  
                            <hr style="border-top: 3px solid #0064B2; background: transparent;">    
                          </div>
                        </div>
                      </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading_peo_two">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordioneo_peo" href="#collapse_peo_two" aria-expanded="false" aria-controls="collapse_peo_two">
                                        What are my Operating Expenses? 
                                    </a>
                                </h4>
                            </div>
                            <div id="collapse_peo_two" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_peo_two">
                                <div class="panel-body">

                                  <div class="row">
                                    <div class="col-md-6">                                 
                                    <p>Dashboard is an interactive snap shot of the progress of your business plan,once you start making entries 
                                    in the different modules,values will appear in the relevant dashboard features.<br><br>Use the sliders to review yearly growth scenarios,your financial reports
                                    are updated automatically ready for printing or sharing once you click on "Save" on each slider.</p>
                                    </p>       
                                  </div>        
                                    <div class="col-md-6">  
                                     <center><img src="<?= asset_url(); ?>new_theme/images/front_feature_1.png" width="100%" height="100%"alt="" class="img-responsive"></center>                                 
                                    </div>                                   
                                  </div>  
                                    <hr style="border-top: 3px solid #0064B2; background: transparent;">    
                                </div>                            
                            </div>
                        </div>
                          <div class="panel panel-default">
                              <div class="panel-heading" role="tab" id="heading_peo_three">
                                  <h4 class="panel-title">
                                      <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_peo" href="#collapse_peo_three" aria-expanded="false" aria-controls="collapse_peo_three">
                                          What are my Payroll Liabilities? 
                                      </a>
                                  </h4>
                              </div>
                              <div id="collapse_peo_three" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-peo-three">
                                  <div class="panel-body">

                                    <div class="row">
                                      <div class="col-md-6">                                 
                                      <p>Dashboard is an interactive snap shot of the progress of your business plan,once you start making entries 
                                      in the different modules,values will appear in the relevant dashboard features.<br><br>Use the sliders to review yearly growth scenarios,your financial reports
                                      are updated automatically ready for printing or sharing once you click on "Save" on each slider.</p>
                                      </p>       
                                    </div>        
                                      <div class="col-md-8">  
                                       <center><img src="<?= asset_url(); ?>new_theme/images/front_feature_1.png" width="100%" height="100%"alt="" class="img-responsive"></center>                                 
                                      </div>                                   
                                    </div>  
                                        <hr style="border-top: 3px solid #0064B2; background: transparent;">    
                                  </div>
                              </div>
                          </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="heading_peo_four">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_peo" href="#collapse_peo_four" aria-expanded="false" aria-controls="collapse_peo_four">
                                            What are my Key Ratios? 
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse_peo_four" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_peo_four">
                                    <div class="panel-body">

                                      <div class="row">
                                        <div class="col-md-6">                                 
                                        <p>Dashboard is an interactive snap shot of the progress of your business plan,once you start making entries 
                                        in the different modules,values will appear in the relevant dashboard features.<br><br>Use the sliders to review yearly growth scenarios,your financial reports
                                        are updated automatically ready for printing or sharing once you click on "Save" on each slider.</p>
                                        </p>       
                                      </div>        
                                        <div class="col-md-8">  
                                         <center><img src="<?= asset_url(); ?>new_theme/images/front_feature_1.png" width="100%" height="100%"alt="" class="img-responsive"></center>                                 
                                        </div>                                   
                                      </div>  
                                          <hr style="border-top: 3px solid #0064B2; background: transparent;">    

                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="heading_peo_five">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_peo" href="#collapse_peo_five" aria-expanded="false" aria-controls="collapse_peo_five">
                                                    What is my Break Even Point? 
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapse_peo_five" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_peo_five">
                                            <div class="panel-body">

                                              <div class="row">
                                                <div class="col-md-6">                                 
                                                <p>Dashboard is an interactive snap shot of the progress of your business plan,once you start making entries 
                                                in the different modules,values will appear in the relevant dashboard features.<br><br>Use the sliders to review yearly growth scenarios,your financial reports
                                                are updated automatically ready for printing or sharing once you click on "Save" on each slider.</p>
                                                </p>       
                                              </div>        
                                                <div class="col-md-6">  
                                                 <center><img src="<?= asset_url(); ?>new_theme/images/front_feature_1.png" width="100%" height="100%"alt="" class="img-responsive"></center>                                 
                                                </div>                                   
                                              </div>  
                                                  <hr style="border-top: 3px solid #0064B2; background: transparent;">    

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><!--- END COL -->		
                        </div><!--- END ROW -->			
                    </div>
                  </div>
                </div>   
              <script type="text/javascript">
            </script>
            <script src="<?= base_url(); ?>assets/js/help_accordion.js"></script>

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 