
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
#accordion_i .panel{
    border:0px none;
    box-shadow:none;
}
#accordion_i .panel-heading{
    padding:0;
    background: #fff;
}
#accordion_i .panel-title a{
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
#accordion_i .panel-title a.collapsed{
    color:#808080;
    border-bottom:1px solid #d3d3d3;
    margin: 0;
}
#accordion_i .panel-title a i{
    color:#0064B2;
    position: absolute;
    top: 14px;
    left:25px;
}
#accordion_i .panel-title a:before,
#accordion_i .panel-title a.collapsed:before{
    content:"";
    position: absolute;
    bottom:-15px;
    left:36px;
    border:7px solid transparent;
    border-top:7px solid #0064B2;
}
#accordion_i .panel-title a.collapsed:before{
    content:"";
    border: 0px none;
}
#accordion_i .panel-title a.collapsed:hover{
    color: #0064B2;
}
#accordion_i .panel-title a:after,
#accordion_i .panel-title a.collapsed:after{
    content: "\f106";
    font-family: FontAwesome;
    color: #0064B2;
    font-size: 20px;
    line-height: 20px;
    position: absolute;
    top: 14px;
    right:25px;
}
#accordion_i .panel-title a.collapsed:after{
    content: "\f107";
    color:#808080;
}
#accordion_i .panel-body{
    border-top:0 none;
    color:#808080;
}

 </style>

 
 
 <div class="u-containProse">
    <p>There are 6 Steps to review and complete based on your company requirements.
  <hr style="border-top: 3px solid #0064B2; background: transparent;">    
 <section class="content animated fadeIn" >
  
<div class="container-fluid">
  <div class="row">

          <div class="col-md-offset-0 col-md-12 center-contents">
        <!-- Accordion Panel -starts -->
  
                  <div class="panel-group" id="accordion_i" role="tablist" aria-multiselectable="true">
                     
                      <div class="panel panel-default">
                          <div class="panel-heading" role="tab" id="heading_i_one">
                              <h4 class="panel-title">
                                  <a role="button" data-toggle="collapse" data-parent="#accordion_i" href="#collapse_i_one" aria-expanded="true" aria-controls="collapse_i_one">
                                      Who are my Directors?
                                  </a>
                              </h4>
                          </div>
                          <div id="collapse_i_one" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading_i_one">
                              <div class="panel-body">  
                                  
                                <div class="row">
                                   <div class="col-md-4 col-md-offset-0">                            
                                 <h1>How do I add a Director?</h1>
                                    <p>
                                        A <b>Director</b> of a company is a person who is responsible for managing the company’s business activities. In many cases Directors
                                        are the movers and shaker's of the company and often contribute funds to kick start the business. A company
                                        must have at least one director.Larger companies and corporations may have many directors,often referred
                                        to as the 'board of directors'.
                                    </p> 
                                    <h1>For example:</h1>  
                                    <p>Jake is planning to register a company,he has partner called Bob,both are directors of the company,
                                        Jake holds 60% shares in the business as the founder and his partner Bob holds 40%</p>
                                    <hr style="border-top: 3px solid #0064B2; background: transparent;">    

                                    <h1 class="media-heading" >How do I add a Director?</h1>
                                    <ol>
                                        <li>Add the name of the Director</li>
                                        <li>Enter education</li>
                                        <li>Enter the experience</li>
                                        <li>Add the total Capital contribution</li>
                                        <li>Click  <button type="button" id="" value="SAVE" class="btn btn-success btn-sm" onclick=""><i class="fa fa-save"></i> Save</button>.</li>
                                    </ol>        
                                </div>        
                                      <div class="col-md-8 col-md-offset-">  
                                   <center><img src="<?= asset_url(); ?>new_theme/images/front_feature_1.png" width="100%" height="100%"alt="" class="img-responsive"></center>                                 
                                  </div>                                   
                                </div>  
                                    <hr style="border-top: 3px solid #0064B2; background: transparent;">    
                                  
                              </div>
                          </div>
                      </div>
                      <div class="panel panel-default">
                          <div class="panel-heading" role="tab" id="heading_i_two">
                              <h4 class="panel-title">
                                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_i" href="#collapse_i_two" aria-expanded="false" aria-controls="collapse_i_two">
                                      Will I need an Investors? 
                                  </a>
                              </h4>
                          </div>
                          <div id="collapse_i_two" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_i_two">
                              <div class="panel-body">
                                   
                                <div class="row">
                                  <div class="col-md-4">                                 
                                  <h1>How will I add a Investor?</h1>   
                                    <p>
                                        Typically, Investors could be people perhaps family members, or a company who will put money into your ideas for a high return
                                        on their money, they want to be rewarded for the risk they are taking.
                                    </p>  
                                    <h1>For example:</h1>  
                                    <p>Jake and his partner Bob are planning a new business they belive that they need an investor to support them 
                                        financially as they are seeking further funds.Bobs bother Frank is eager to jump on board with a $100,000 investment
                                        for 20% of the net profit.
                                    </p>
                                    <hr style="border-top: 3px solid #0064B2; background: transparent;">    
                                    <h1 class="media-heading" >How do I add a Investor?</h1>
                                    <ol>
                                        <li>Add the name of the Investor</li>
                                        <li>Add the amount the the Investor will contribute</li>
                                        <li>Click  <button type="button" id="" value="SAVE" class="btn btn-success btn-sm" onclick=""><i class="fa fa-save"></i> Save</button>.</li>
                                    </ol>
            
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
                          <div class="panel-heading" role="tab" id="heading_i_three">
                              <h4 class="panel-title">
                                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_i" href="#collapse_i_three" aria-expanded="false" aria-controls="collapse_i_three">
                                      Will I be needing a Bank Loan to start my business? 
                                  </a>
                              </h4>
                          </div>
                          <div id="collapse_i_three" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_i_three">
                              <div class="panel-body">
                                  
                                <div class="row">
                                  <div class="col-md-4">                                 
                                <h1>How do I add a Bank Loan?</h1>     
                                    <p> In many cases starting a new business may require further finance such as a bank loan.Use the built in loan calculator to determine
                                        the cost of securing a Business Loan.</p> 

                                    <h1>For example:</h1>  
                                    <p>Jake and has partner Bob,dot have enough funds to pay for a new button machines so they have 
                                        decided to approach the bank for a small loan,the loan calculator will give them some idea of the cost of borrowing
                                        money from their bank before hand.
                                    </p>
                                    <hr style="border-top: 3px solid #0064B2; background: transparent;">    
                                    <h1 class="media-heading" >How do I add a Loan?</h1>
                                    <ol>
                                        <li>Add the Amount you intend to borrow</li>
                                        <li>Enter the term in Years (Maximum 3 Years)</li>
                                        <li>Enter the current Interest Rate>
                                        <li>Add the total Capital contribution</li>
                                        <li>Click  <button type="button" id="" value="SAVE" class="btn btn-success btn-sm" onclick=""><i class="fa fa-save"></i> Save</button>.</li>
                                    </ol>                                            
                                  
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
                          <div class="panel-heading" role="tab" id="heading_i_four">
                              <h4 class="panel-title">
                                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_i" href="#collapse_i_four" aria-expanded="false" aria-controls="collapse_i_four">
                                      What are my Operating Expenses? 
                                  </a>
                              </h4>
                          </div>
                          <div id="collapse_i_four" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_e_four">
                              <div class="panel-body">
                                    
                                <div class="row">
                                  <div class="col-md-4">                                 
                                <p >The <strong>Expense Budget</strong> is a term commonly used by company owners and accountants that refers to the general operating expenses that
                                        a company will pay usually on a monthly bases in order to keep the business operating.</p>
                                    <h1>For example:</h1>  
                                    <p>Jake is planing to open a clothing retail store in a busy shopping mall, his monthly rent to lease his shop will be $,1,000 p/m.
                                        Jake will allow 6 months rent whilst the business is growing,so the total funds sets aside is 6x$1,000=$6,000, 
                                        Jake will make sure that $6,000 in his bank account to cover his rent for a 6 month period.</p>
                                        <hr style="border-top: 3px solid #0064B2; background: transparent;">    
                                    <h1 class="media-heading" >How do I add Expenses?</h1>
                                    <ol>
                                        <li> From the drop list select a category</li>
                                        <li> Enter a description</li>
                                        <li> Enter the amount by:weekly.monthly, quarterly or yearly</li>
                                        <li> Enter how many months you will allow for this expense (6 months is a good start)</li>
                                        <li> Click<button type="button" id="" value="Save" class="btn btn-success btn-sm"  name='finish'onclick=""><i class="fa fa-save"></i> Save</button>&nbsp;
                                            and repeat the above steps to add all your projected weekly expenses</a></li>
                                    </ol> 
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
                          <div class="panel-heading" role="tab" id="heading_i_five">
                              <h4 class="panel-title">
                                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_i" href="#collapse_i_five" aria-expanded="false" aria-controls="collapse_i_five">
                                      What are my One-Time startup costs? 
                                  </a>
                              </h4>
                          </div>
                          <div id="collapse_i_five" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_i_five">
                              <div class="panel-body">
                                     
                                <div class="row">
                                  <div class="col-md-4">                                 
                                  <strong>One-Time Costs</strong> are the initial costs in starting up a new business that are not recurring on a monthly basis.These items could be 
                                  computers,office equipment, or property plant and equipment.
                                  </p>        
                                  <h1>For example:</h1>  
                                  <p>Jake and his partner Bob are starting their new business,they understand that they will need to purchase
                                      some office equipment such as a new computer, printer and office furniture.They will also need to pay a security bond
                                      to install telephone lines, and the real estate wants a security bond of 4 months rent in advance.</p>
                                  <hr style="border-top: 3px solid #0064B2; background: transparent;">    
                                  <h1 class="media-heading" >How do I add One-Time Costs?</h1>
                                  <ol>    
                                      <li>Select an item from the drop list</li>
                                      <li>Describe the item</li>
                                      <li>Enter the cost amount</li>
                                      <li>Click  <button type="button" id="" value="SAVE" class="btn btn-success btn-sm" onclick=""><i class="fa fa-save"></i> Save</button>.</li>
                                  </ol>
                                </div>        
                                  <div class="col-md-8">  
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