
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
#accordion_ex .panel{
    border:0px none;
    box-shadow:none;
}
#accordion_ex .panel-heading{
    padding:0;
    background: #fff;
}
#accordion_ex .panel-title a{
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
#accordion_ex .panel-title a.collapsed{
    color:#808080;
    border-bottom:1px solid #d3d3d3;
    margin: 0;
}
#accordion_exx.panel-title a i{
    color:#0064B2;
    position: absolute;
    top: 14px;
    left:25px;
}
#accordion_ex .panel-title a:before,
#accordion_ex .panel-title a.collapsed:before{
    content:"";
    position: absolute;
    bottom:-15px;
    left:36px;
    border:7px solid transparent;
    border-top:7px solid #0064B2;
}
#accordion_ex .panel-title a.collapsed:before{
    content:"";
    border: 0px none;
}
#accordion_ex .panel-title a.collapsed:hover{
    color: #0064B2;
}
#accordion_ex .panel-title a:after,
#accordion_ex .panel-title a.collapsed:after{
    content: "\f106";
    font-family: FontAwesome;
    color: #0064B2;
    font-size: 20px;
    line-height: 20px;
    position: absolute;
    top: 14px;
    right:25px;
}
#accordion_ex .panel-title a.collapsed:after{
    content: "\f107";
    color:#808080;
}
#accordion_ex .panel-body{
    border-top:0 none;
    color:#808080;
}

 </style>

 
 
 <div class="u-containProse">
  
     <p><b>People:</b>It is more then likely that your company will need to employ people,Jake and his partner Bob plan to have a team of 3 sales reps, 1,factory manager, 
         and office receptionists, and 10 factory workers,that will produce the products they intend to manufacture in seel in Australia.
    </p>

 <section class="content animated " >
  
<div class="container-fluid">
  <div class="row">

          <div class="col-md-offset-0 col-md-12 center-contents">
        <!-- Accordion Panel -starts -->
  
                  <div class="panel-group" id="accordion_ex" role="tablist" aria-multiselectable="true">
                     
                      <div class="panel panel-default">
                          <div class="panel-heading" role="tab" id="heading_ex_one">
                              <h4 class="panel-title">
                                  <a role="button" data-toggle="collapse" data-parent="#accordion_ex" href="#collapse_ex_one" aria-expanded="true" aria-controls="collapse_ex_one">
                                      How do I add People?
                                  </a>
                              </h4>
                          </div>
                          <div id="collapse_ex_one" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading_ex_one">
                              <div class="panel-body"> 
                                  
                               <div class="row">
                                  <div class="col-md-6">                                                             
                                    <h1>For example:</h1>  
                                    <p>Jake is planing to open a clothing retail store in a busy shopping mall, his monthly rent to lease his shop will be $,1,000 p/m.
                                        Jake will allow 6 months rent whilst the business is growing,so the total funds sets aside is 6x$1,000=$6,000, 
                                        Jake will make sure that $6,000 in his bank account to cover his rent for a 6 month period.</p>
                                        <hr style="border-top: 3px solid #0064B2; background: transparent;">    
                                    <h1 class="media-heading" >How do I add Expenses?</h1>
                                    <ol>
                                        <li> From the drop list select a category</li>
                                        <li> Enter a description</li>
                                        <li> Enter the amount by:weekly,monthly,quarterly or yearly</li>
                                        <li> Enter how many months you will allow for this expense (6 months is a good start)</li>
                                        <li> Click<button type="button" id="" value="Save" class="btn btn-success btn-sm"  name='finish'onclick=""><i class="fa fa-save"></i> Save</button>&nbsp;
                                            and repeat the above steps to add all your projected weekly expenses</a></li>
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
                          <div class="panel-heading" role="tab" id="heading_ex_two">
                              <h4 class="panel-title">
                                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_ex" href="#collapse_ex_two" aria-expanded="false" aria-controls="collapse_ex_two">
                                    What is Interaction?
                                  </a>
                              </h4>
                          </div>
                          <div id="collapse_ex_two" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_ex_two">
                              <div class="panel-body">
                                   
                                <div class="row">
                                  <div class="col-md-6">                                 
                                  <h1>How do I use the Interaction feature?</h1>   
                                    <p>
                                        In general business most expenses will increase each year by a percentage margin,
                                        the interaction feature allows you to set a percentage increase for your expenses.
                                        
                                    </p>  
                                    <h1>For example:</h1>  
                                    <p>As much as we don't like it, Office or Factory rent will generally increase each year based on CPI (Consumer Price Index).
                                    </p>
                                    <hr style="border-top: 3px solid #0064B2; background: transparent;">    
                                    <h1 class="media-heading" >How do I set a percentage increase?</h1>
                                    <ol>
                                        <li>Select one of the slider categories and move the slider to your right to see the results in the tables below.</li>                                
                                        <li>Click  <button type="button" id="" value="SAVE" class="btn btn-success btn-sm" onclick=""><i class="fa fa-save"></i> Save</button>.</li>
                                    </ol>
            
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
                          <div class="panel-heading" role="tab" id="heading_ex_three">
                              <h4 class="panel-title">
                                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_ex" href="#collapse_ex_three" aria-expanded="false" aria-controls="collapse_ex_three">
                                      What is the Summary used? 
                                  </a>
                              </h4>
                          </div>
                          <div id="collapse_ex_three" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_ex_three">
                              <div class="panel-body">
                                  
                                <div class="row">
                                  <div class="col-md-6">                                 
                                <h1>How do I use the summary?</h1>     
                                  <p>
                                      The Summary view is a monthly and Yearly view of your current expenses.<br>
                                      Once your are satisfied with the results you can move on to evaluating your Payroll Expenses  
                                  </p> 
                                    <hr style="border-top: 3px solid #0064B2; background: transparent;">                                                                                                       
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
 
 <script src="<?= base_url(); ?>assets/js/help_accordion.js"></script>

 
    
    
<script type="text/javascript">

</script>