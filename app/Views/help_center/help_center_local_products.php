
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
#accordion_pr .panel{
    border:0px none;
    box-shadow:none;
}
#accordion_pr .panel-heading{
    padding:0;
    background: #fff;
}
#accordion_pr .panel-title a{
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
#accordion_pr .panel-title a.collapsed{
    color:#808080;
    border-bottom:1px solid #d3d3d3;
    margin: 0;
}
#accordion_pr.panel-title a i{
    color:#0064B2;
    position: absolute;
    top: 14px;
    left:25px;
}
#accordion_pr .panel-title a:before,
#accordion_pr .panel-title a.collapsed:before{
    content:"";
    position: absolute;
    bottom:-15px;
    left:36px;
    border:7px solid transparent;
    border-top:7px solid #0064B2;
}
#accordion_pr .panel-title a.collapsed:before{
    content:"";
    border: 0px none;
}
#accordion_pr .panel-title a.collapsed:hover{
    color: #0064B2;
}
#accordion_pr .panel-title a:after,
#accordion_pr .panel-title a.collapsed:after{
    content: "\f106";
    font-family: FontAwesome;
    color: #0064B2;
    font-size: 20px;
    line-height: 20px;
    position: absolute;
    top: 14px;
    right:25px;
}
#accordion_pr .panel-title a.collapsed:after{
    content: "\f107";
    color:#808080;
}
#accordion_pr .panel-body{
    border-top:0 none;
    color:#808080;
}

 </style>

 
 
 <div class="u-containProse">
    <h1>How many products do you plan to sell each month?</h1>
      <h1>For example:</h1>            
        <p>Jake and his partner Bob have setup an online shop selling a veriaty of products,they also plan to wholesale their products to the local
            market so they now need to evaluate their potential monthly customer sales and gross profit based on the following criteria.                
        </p>  
        
        <div class="col-md-offset-0 col-md-12 ">
          <div class="col-md-6 col-md-offset-0">
            <h1> Question</h1>
          <ol>  
            <li> Monthly Unit Sales?</li> 
            <li> What is the average unit cost?</li> 
            <li> What is my % markup on unit cost? </li> 
            <li> What is my wholesale ?</li> 
            <li> What is my gross profit?</li> 
            <li> What is my percentage G/P?</li> 

          </ol>
          </div>
          <div class="col-md-6 col-md-offset-0">
              <h1> Assumption</h1>
          <ol class='unstyled'>  
              <li> 1,000 units</li> 
              <li> $10.00</li> 
              <li> 100% <b>&nbsp;&nbsp;(100% of cost Price)</b></li> 
              <li> $20.00 <b>&nbsp;&nbsp;(100% on cost Price)</b></li> 
              <li> $10.00 <b>&nbsp;&nbsp;(Selling Price - Cost of goods)</b></li> 
              <li> 50% <b>&nbsp;&nbsp;(Gross Profit / Selling Price)</b></li> 
          </ol>

          </div>
        
          <hr style="border-top: 3px solid #0064B2; background: transparent;">    
      </div>

         <section class="content animated " >
  
<div class="container-fluid">
  <div class="row">

          <div class="col-md-offset-0 col-md-12 center-contents">
        <!-- Accordion Panel -starts -->
  
                  <div class="panel-group" id="accordion_pr" role="tablist" aria-multiselectable="true">
                     
                      <div class="panel panel-default">
                          <div class="panel-heading" role="tab" id="heading_pr_one">
                              <h4 class="panel-title">
                                  <a role="button" data-toggle="collapse" data-parent="#accordion_pr" href="#collapse_pr_one" aria-expanded="true" aria-controls="collapse_pr_one">
                                      How do I add and evaluate local products?
                                  </a>
                              </h4>
                          </div>
                          <div id="collapse_pr_one" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading_pr_one">
                              <div class="panel-body">
           
                                <div class="row">
                                   <div class="col-md-4 col-md-offset-0">                            
                                     <h1>Add A Product</h1>
                                   
                                     <ol>
                                        <li>Add the Amount you intend to borrow</li>
                                        <li>Enter the term in Years (Maximum 3 Years)</li>
                                        <li>Enter the current Interest Rate>
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
                          <div class="panel-heading" role="tab" id="heading_pr_two">
                              <h4 class="panel-title">
                                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_pr" href="#collapse_pr_two" aria-expanded="false" aria-controls="collapse_pr_two">
                                      What are my Operating Expenses? 
                                  </a>
                              </h4>
                          </div>
                          <div id="collapse_pr_two" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_pr_two">
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
                          <div class="panel-heading" role="tab" id="heading_pr_three">
                              <h4 class="panel-title">
                                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_pr" href="#collapse_pr_three" aria-expanded="false" aria-controls="collapse_pr_three">
                                      What are my Payroll Liabilities? 
                                  </a>
                              </h4>
                          </div>
                          <div id="collapse_pr_three" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading--three">
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
                          <div class="panel-heading" role="tab" id="heading_pr_four">
                              <h4 class="panel-title">
                                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_pr" href="#collapse_pr_four" aria-expanded="false" aria-controls="collapse_pr_four">
                                      What are my Key Ratios? 
                                  </a>
                              </h4>
                          </div>
                          <div id="collapse_pr_four" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_pr_four">
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
                          <div class="panel-heading" role="tab" id="heading_pr_five">
                              <h4 class="panel-title">
                                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_pr" href="#collapse_pr_five" aria-expanded="false" aria-controls="collapse_pr_five">
                                      What is my Break Even Point? 
                                  </a>
                              </h4>
                          </div>
                          <div id="collapse_pr_five" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_pr_five">
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
 
    
    
<script type="text/javascript">

</script>
            
<script src="<?= base_url(); ?>assets/js/help_accordion.js"></script>

 