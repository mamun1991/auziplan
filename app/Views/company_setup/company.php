	<!-- ===============================================-->
	<!--   Wizard Tab 1  Content Details-->
	<!-- ===============================================-->      

	<div class="tab-content">
		<div class="tab-pane active " role="tabpanel" aria-labelledby="bootstrap-wizard-tab1" id="bootstrap-wizard-tab1">
			<form novalidate="novalidate">	
				<div class="card mb-3 mb-lg-0">
					<div class="card-header">
						<div class="row">
							<div class="col-lg-6">
								<a class="mb-0 d-block d-flex align-items-center bm-1" id="company_details-form-collapse" style='cursor: pointer;'>
								<span class="circle"><span class="fas fa-plus fa-3x"></span></span><span class="ms-3"></span></a>		
							</div><!-- /.col-->

							<div class="col-lg-6">
								<a class="btn btn-falcon-outline-info float-end text-primary pt-2" data-html="true" data-bs-placement="auto" data-popover-content="#com" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"><i class="fa fa-info-circle" aria-hidden="true" ></i></a>
							</div><!-- /.col-->
						</div><!-- /.row-->
					</div><!-- /.header-->
					<div class="collapse" id="company_details-form-toogle">
					<div class="p-2">	
						<div class="hidden d-none" id="com">
							<div class="popover-heading" style="background-color: rgba(25, 255, 255, 1.0) ;color:rgba(0, 0, 0, 1.0);font-size:16px;font-weight:thin;">
								<span><img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> 
									Help Center
								</div>
								<div class="popover-body">					
									<div class="card mb-3">
										<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>custom-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->
											<div class="card-body position-relative">
												<div class="row">
													<div class="col-lg-12">

													<h5 class="mt-1 ps-3 mb-3">Company Setup</h5>

														<p class="mt-1 ps-3 mb-3">
															Setting up a company is Australia involves making a decision about the type of company you want to set up 
															through to registering the company with ASIC and maintaining a company register.
														</p>

														<p class="mt-1 ps-3 mb-3">

															Although this is the opening stage of your business plan, the business name, tagline, 
															logo all add together to help the investor gain a good first impression and understanding of your business and 
															they should lead on and link into the remaining sections of the business plan.

														</p>
														<h5 class="mt-1 ps-3 mb-3">Your Business Name</h5>
														<p class="mt-1 ps-3 mb-3">
															The business name is the first thing a investor will see, and reinforces and communicates the key components of your business, 
															it gives the investor an impression of your business, the more it does this, the easier it will be for the business plan that 
															follows to explain what the business stands for and what it does.

														</p>
														<h5 class="mt-1 ps-3 mb-3">Your Tagline Name</h5>
														<p class="mt-1 ps-3 mb-3">
															The tagline is a short, easily remembered phrase so that people will remember your business. Think Auziplan, “Planing is the key to your success”, BMW “The ultimate driving machine” or McDonalds “I’m lovin it”.
															Again the tagline encapsulates everything about the business, it communicates to the investor what kind of business you are, what values the business has, 
															what the product is, how the product provides a solution to a customers problem, and what differentiates the business from the competition. 
															This all hints and helps to reinforce whats to come in the rest of the business plan.

														</p>
														<h5 class="mt-1 ps-3 mb-3" >Your Logo</h5>
														<p class="mt-1 ps-3 mb-3">
															Finally the logo is a visual representation of what the business stands for. The logo helps investors develop a first and lasting impression of the business, 
															to understand what makes your product different from the competition, your competitive advantage, and who your target audience is.
														</p>

														<p class="mt-1 ps-3 mb-3">
															First, seek financial or legal advice to determine if setting up a company is the best means to conduct your business.
															Before you set up a company, you should know the name you want to give to the company, how many and who will be the director(s), shareholders and officeholders, 
															how many shares each shareholder will hold etc.
														</p>

														<hr style="border-top: 3px solid #0064B2; background: transparent;"> 

														<h5 class="mt-1 ps-3 mb-3">How do I add a Company?</h5>

														<ol class="pt-1">     
															<li>Click the plus button</li>                                                  
															<li>Upload your company logo that will be printed on the header on your financial reports.</li>
															<li>Enter the date.</li>
															<li>Enter your company name.</li>
															<li>Enter your ABN number if you have one.(Optional).</li>
															<li>Enter your business registration number if you have one.(Optional).</li>
															<li>Enter your business location.</li>
															<li>Enter your currency.</li>  
															<li>Enter your company structure.</li>  
															<li>Select your revenue stream (Products by default).</li>  
															<li><a class="btn btn-falcon-success btn-sm me-1 mb-1 float-start" type="button"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</a></li>												
														</ol>    
													</div><!-- /.col-->
												</div><!-- /.row-->
											</div><!-- /.card body-->
										</div><!-- /.bg-holder-->																				
									</div><!-- /.card-->
								</div><!-- /.popover-->
							</div>
										
								<div class="row" id='frmcompanydetails'>
								<!-- <form action="#" id="form_investor" class="form-horizontal"> -->
									<input type="hidden" value="" name="id" />	
								
										<div class="col-lg-12 col-md-12 col-sm-12">
											<div id='frm<?php echo $controller; ?>'> <!-- START VALIDATION DIV -->
												
												<div class="card mb-3">
												<!-- =========================================================================-->
												<!--   Tab 1 Content Details here we need to allow user to upload company logo-->								
												<!-- =========================================================================-->

												<div class="row g-2">
													<div class="col-lg-6 col-md-6 col-sm-12">

													<div class="card-header">
														<h5 class="mb-0">Company Logo</h5>
													</div>
														<form class="form">												
															<div class="row pt-7" style='text-align: center;'>
																<div class="col-lg-12">
																	<input type='hidden' id="companylogo_val" value="<?php echo $company['company_logo']; ?>">
																	<?php 
																	if($company['company_logo'] != ""){ ?>
																		<img class="square" style='width: 300px;' src='<?php echo site_url()."uploads/".$company['company_logo']; ?>' id="companylogo_pre">
																	<?php }else{ ?>
																		<img class="square" style='width: 300px;' src='<?php echo site_url()."template-assets/img/team/avatar.png" ?>' id="companylogo_pre">
																	<?php } ?>																																	
																</div>	
															
																<!-- <input type='file' id='uploadfile'> -->

																<a class="fileContainer hover">
																	<img class="me-2" src="<?php echo site_url(); ?>template-assets/img/icons/cloud-upload.svg" width="25" alt="">Upload Image
																	<input type="file" id='uploadcompanylogo' />
																</a>	
															</div>
														</form>										
													</div><!-- /.row-->
						
													<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="card-header">
														<h5 class="mb-0">Company</h5>
													</div>
														<div class="card-body">
															<div class="row g-2 pt-3">
																<div class="col-lg-12 col-md-12 col-sm-12">
														
																	<div class="form-floating mb-1">
																		<input type="text" name="start_date" class="form-control validate dtpickdate " id="start_date" placeholder="Start Date" value="<?php echo ($company['start_date'] == "" || $company['start_date'] == "1970-01-01") ? date('m/d/Y') : date('m/d/Y', strtotime($company['start_date'])); ?>">
																		<label for="start_date">Document Date</label>
																	</div><!-- /.float form-->
																	<div class="form-floating mb-1">
																		<input type="text" name="company_name" class="form-control validate" id="company_name" placeholder="Company Name" value="<?php echo $company['company_name']; ?>" >
																		<label for="company_name">Company Name</label>
																	</div><!-- /.float form-->
																</div><!-- /.col-->

																<div class="col-lg-12 col-md-12 col-sm-12">
																	<div class="form-floating mb-1">
																		<input type="text" name="abn_no" class="form-control" id="abn_no" placeholder="ABN No" value="<?php echo  $company['abn_no']; ?>" >
																		<label for="abn_no">ABN No</label>
																	</div><!-- /.float form-->

																	<div class="form-floating mb-1">
																		<input type="text" name="register_no" class="form-control" id="register_no" placeholder="Registration No" value="<?php echo  $company['register_no']; ?>">
																		<label for="register_no">Business Registration No</label>
																	</div><!-- /.float form-->

																	<!--<div class="form-floating mb-1">
																		<input type="text" name="telephone" class="form-control" id="telephone" placeholder="Telephone" data-inputmask='"mask": "(999) 999-9999"'  value="<?php echo  $company['telephone']; ?>">
																		<label for="telephone">Telephone</label>
																	</div> /.float form-->

																</div><!-- /.col -->
															</div><!-- /.row-->
														</div><!-- /card body-->
													</div><!-- /.row-->
												</div><!-- /.row-->

											<!-- ===============================================-->
											<!--   Company Location Details-->
											<!-- ===============================================-->
			
												<div class="card-header">
													<h5 class="mb-0">Company Location</h5>
												</div>
													<div class="card-body">
														<div class="row g-2">
															<div class="form-floating mb-1">
																<input id="autocomplete" placeholder="Enter your address" onFocus="geolocate()" type="text" class="form-control">
																<label for="autocomplete">Enter address here ...</label>
															</div>
																<div class="col-lg-6 col-md-4 col-sm-12">

																	<div class="form-floating mb-1">
																		<input type="text" name="street_no" class="form-control validate" id="street_no" placeholder="Street No" value="<?php echo $company['street_no']; ?>" >
																		<label for="street_number">Street No</label>
																	</div>

																	<div class="form-floating mb-1">
																		<input type="text" name="street_name" class="form-control validate" id="street_name" placeholder="Street Name" value="<?php echo $company['street_name']; ?>">
																		<label for="route">Street Name </label>
																	</div>

																	<div class="form-floating mb-1">
																		<input type="text" name="suburb" class="form-control validate" id="suburb" placeholder="Suburb" value="<?php echo $company['suburb']; ?>">
																		<label for="locality">Suburb</label>
																	</div>		

																	<div class="form-floating mb-1">
																		<input type="text" class="form-control" id="email"  pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$" placeholder="Email" value="<?php echo  $company['company_email']; ?>" >
																		<label for="postal_code">Email </label>
																	</div>
										
																</div>
																<div class="col-lg-6 col-md-6 col-sm-12">
														
																<div class="form-floating mb-1">
																	<input type="text" name="state" class="form-control validate" id="state" placeholder="State/Province" value="<?php echo $company['state']; ?>">
																	<label for="administrative_area_level_1">State/Province</label>
																</div>

																<div class="form-floating mb-1">
																	<input type="text" name="zipcode" class="form-control validate" id="zipcode" placeholder="Postal Code" value="<?php echo  $company['zipcode']; ?>" >
																	<label for="postal_code">Post Code/Zip Code </label>
																</div>
															
																<div class="form-floating mb-1">
																	<input type="text" name="country" class="form-control validate" id="country" placeholder="Country" value="<?php echo $company['country']; ?>">
																	<label for="country">Country</label>
																</div>

																<div class="form-floating mb-1">
																	<input type="text" class="form-control" id="website" placeholder="Website" value="<?php echo $company['website']; ?>">
																	<label for="country">Website</label>

																</div>

																<div class="mb-3" style="display:none">
																	<label class="form-label" for="form-wizard-progress-wizard-email">Email*</label>
																	<input class="form-control" type="email" name="email" placeholder="Email address" pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$" required="required" id="form-wizard-progress-wizard-email" data-wizard-validate-email="true" />
																	<div class="invalid-feedback">You must add email</div>
																</div>
				
															</div>
														</div><!-- /.row-->
													</div><!-- /card body-->
									
												<!-- ===============================================-->
												<!--   Company Structure Details-->
												<!-- ===============================================-->

												<div class="card-header">
													<h5 class="mb-0">Company Structure</h5>
												</div>
												<div class="card-body">

												<div class="row g-2">
													<div class="col-lg-6 col-md-4 col-sm-12">

													<div class="form-floating mb-1">
														<select name="cmpy_structure" class="form-select validate" id="cmpy_structure" aria-label="Company Structure">
															<option value="" selected>Please Select</option>
															<option <?php ($company['cmpy_structure'] == 'Sole Proprietorship') ? print "selected" : print "" ?>>Sole Proprietorship</option>
															<option <?php ($company['cmpy_structure'] == 'General Partnership') ? print "selected" : print "" ?>>General Partnership</option>
															<option <?php ($company['cmpy_structure'] == 'Limited Partnership') ? print "selected" : print ""; ?>>Limited Company</option>
															<option <?php ($company['cmpy_structure'] == 'Trust') ? print "selected" : print ""; ?>>Trust</option>
														</select>
														<label for="cmpy_structure">Company Structure</label>
													</div>

													<div class="form-floating mb-1">
														<select name="industry" class="form-select validate" id="industry" aria-label="Revenue Streams">

															<option value="" selected>Please Select</option>
															<option <?php ($company['industry'] == 'Products') ? print "selected" : print "" ?>>Products</option>

															<!-- ===============================================-->
															<!--   Company Details (This code needs to be checked as we may need to use it ib a later version Nuri 12/11/2021-->
															<!-- ===============================================
															[1. These revenue options will be turned on if user subscribes to the Pro Version
															fro now they are turned off
															<option <?php ($company['industry'] == 'Cosmetics') ? print "selected" : print "" ?>>Cosmetics</option>
															<option <?php ($company['industry'] == 'Services') ? print "selected" : print "" ?>>Service Industry</option>
															<option <?php ($company['industry'] == 'Products') ? print "selected" : print "" ?>>Imported Products</option>
															<option <?php ($company['industry'] == 'Online sales') ? print "selected" : print "" ?>>Online sales</option>
															<option <?php ($company['industry'] == 'Services') ? print "selected" : print "" ?>>Service Industry</option>
															<option <?php ($company['industry'] == 'Accounting') ? print "selected" : print "" ?>>Accounting</option>
															<option <?php ($company['industry'] == 'Automotive electrical services') ? print "selected" : print "" ?>>Automotive electrical services</option>
															<option <?php ($company['industry'] == 'Architectural services') ? print "selected" : print ""; ?>>Architectural services</option>
															<option <?php ($company['industry'] == 'Alarm installation services – fire and security') ? print "selected" : print "" ?>>Alarm installation services – fire and security</option>
															<option <?php ($company['industry'] == 'Air conditioning, refrigeration and heating services') ? print "selected" : print "" ?>>Air conditioning, refrigeration and heating services</option>
															<option <?php ($company['industry'] == 'Building Construction') ? print "selected" : print "" ?>>Building Constrcution</option>
															<option <?php ($company['industry'] == 'Bottle shops and liquor retailing') ? print "selected" : print ""; ?>>Bottle shops and liquor retailing</option>
															<option <?php ($company['industry'] == 'Bricklaying services') ? print "selected" : print "" ?>>Bricklaying services</option>
															<option <?php ($company['industry'] == 'Book retailing') ? print "selected" : print "" ?>>Book retailing</option>
															<option <?php ($company['industry'] == 'Blocklaying services') ? print "selected" : print ""; ?>>Blocklaying services</option>
															<option <?php ($company['industry'] == 'Beauty services') ? print "selected" : print "" ?>>Beauty services</option>
															<option <?php ($company['industry'] == 'Barber and men’s hairdressing') ? print "selected" : print "" ?>>Barber and men’s hairdressing</option>
															<option <?php ($company['industry'] == 'Bakeries and hot bread shops') ? print "selected" : print ""; ?>>Bakeries and hot bread shops</option>
															<option <?php ($company['industry'] == 'Beauty services') ? print "selected" : print "" ?>>Beauty services</option>
															<option <?php ($company['industry'] == 'Cabinet makers') ? print "selected" : print "" ?>>Cabinet makers</option>
															<option <?php ($company['industry'] == 'Cake shops and patisseries') ? print "selected" : print ""; ?>>Cake shops and patisseries</option>
															<option <?php ($company['industry'] == 'Carpet laying services') ? print "selected" : print "" ?>>Carpet laying services</option>
															<option <?php ($company['industry'] == 'Capentry service') ? print "selected" : print "" ?>>Capentry serivice</option>
															<option <?php ($company['industry'] == 'Carpet laying services') ? print "selected" : print "" ?>>Carpet laying services</option>
															<option <?php ($company['industry'] == 'Catering services') ? print "selected" : print "" ?>>Cabinet makers</option>
															<option <?php ($company['industry'] == 'Cement rendering') ? print "selected" : print ""; ?>>Cement rendering</option>
															<option <?php ($company['industry'] == 'Chicken shops') ? print "selected" : print "" ?>>Chicken shops</option>
															<option <?php ($company['industry'] == 'Child care services') ? print "selected" : print "" ?>>Child care services</option>
															<option <?php ($company['industry'] == 'Chiropractic and osteopathic services') ? print "selected" : print "" ?>>Chiropractic and osteopathic services</option>
															<option <?php ($company['industry'] == 'Cleaning services – building and other industrial') ? print "selected" : print "" ?>>Cleaning services – building and other industrial</option>
															<option <?php ($company['industry'] == 'Cleaning services – carpet, rug and furniture upholstery') ? print "selected" : print "" ?>>Cleaning services – carpet, rug and furniture upholstery</option>
															<option <?php ($company['industry'] == 'Clothing') ? print "selected" : print "" ?>>Clothing</option>
															<option <?php ($company['industry'] == 'Coffee shops') ? print "selected" : print ""; ?>>Coffee shops</option>
															<option <?php ($company['industry'] == 'Computer retailing') ? print "selected" : print "" ?>>Computer retailing</option>
															<option <?php ($company['industry'] == 'Concreting services') ? print "selected" : print "" ?>>Concreting services</option>
															<option <?php ($company['industry'] == 'Confectionery retailing') ? print "selected" : print "" ?>>Confectionery retailing</option>
															<option <?php ($company['industry'] == 'Courier services') ? print "selected" : print "" ?>>Courier services</option>
															<option <?php ($company['industry'] == 'Cosmetics') ? print "selected" : print "" ?>>Cosmetics</option>
															<option <?php ($company['industry'] == 'Craft shops') ? print "selected" : print ""; ?>>Craft shops</option>
															<option <?php ($company['industry'] == 'Delivery services') ? print "selected" : print "" ?>>Delivery services</option>
															<option <?php ($company['industry'] == 'Dental specialists') ? print "selected" : print "" ?>>Dental specialists</option>
															<option <?php ($company['industry'] == 'Dental surgeons – general') ? print "selected" : print ""; ?>>Dental surgeons – general</option>
															<option <?php ($company['industry'] == 'Discount and variety stores') ? print "selected" : print "" ?>>Discount and variety stores</option>
															<option <?php ($company['industry'] == 'Domestic appliance repair and maintenance') ? print "selected" : print "" ?>>Domestic appliance repair and maintenance</option>
															<option <?php ($company['industry'] == 'Driving schools and instructors') ? print "selected" : print ""; ?>>Driving schools and instructors</option>
															<option <?php ($company['industry'] == 'Delicatessen') ? print "selected" : print ""; ?>>Delicatessen</option>
															<option <?php ($company['industry'] == 'Electrical and electronic product retailing') ? print "selected" : print "" ?>>Electrical and electronic product retailing</option>
															<option <?php ($company['industry'] == 'Electrical services') ? print "selected" : print "" ?>>Electrical services</option>
															<option <?php ($company['industry'] == 'Entertainment media retailing') ? print "selected" : print "" ?>>Entertainment media retailing</option>
															<option <?php ($company['industry'] == 'Fence construction') ? print "selected" : print ""; ?>>Fence constructionl</option>
															<option <?php ($company['industry'] == 'Fish and chips shops') ? print "selected" : print "" ?>>Fish and chips shops</option>
															<option <?php ($company['industry'] == 'Fish and seafood retailing – fresh') ? print "selected" : print "" ?>>Fish and seafood retailing – fresh</option>
															<option <?php ($company['industry'] == 'Floor covering retailing') ? print "selected" : print "" ?>>Floor covering retailing</option>
															<option <?php ($company['industry'] == 'Florists') ? print "selected" : print ""; ?>>Florists</option>
															<option <?php ($company['industry'] == 'Footwear retailing') ? print "selected" : print ""; ?>>Footwear retailing</option>
															<option <?php ($company['industry'] == 'Fruit and vegetable retailing') ? print "selected" : print "" ?>>Fruit and vegetable retailing</option>
															<option <?php ($company['industry'] == 'Fuel retailing') ? print "selected" : print "" ?>>Fuel retailing</option>
															<option <?php ($company['industry'] == 'Furniture removalists') ? print "selected" : print "" ?>>Furniture removalists</option>
															<option <?php ($company['industry'] == 'Furniture retailing') ? print "selected" : print ""; ?>>Furniture retailing</option>
															<option <?php ($company['industry'] == 'Graphic Artist') ? print "selected" : print "" ?>>Graphic Artist</option>
															<option <?php ($company['industry'] == 'Garden supplies retailing') ? print "selected" : print ""; ?>>Garden supplies retailing</option>
															<option <?php ($company['industry'] == 'Gift stores') ? print "selected" : print "" ?>>Gift stores</option>
															<option <?php ($company['industry'] == 'Glazing services') ? print "selected" : print "" ?>>Glazing services</option>
															<option <?php ($company['industry'] == 'Grocery retailing and convenience stores') ? print "selected" : print "" ?>>Grocery retailing and convenience stores</option>
															<option <?php ($company['industry'] == 'Hairdressers') ? print "selected" : print "" ?>>Hairdressers</option>
															<option <?php ($company['industry'] == 'Hardware and building supplies retailing') ? print "selected" : print ""; ?>>Hardware and building supplies retailing</option>
															<option <?php ($company['industry'] == 'Health and fitness centres') ? print "selected" : print "" ?>>Health and fitness centres</option>
															<option <?php ($company['industry'] == 'Health food retailing') ? print "selected" : print "" ?>>Health food retailing</option>
															<option <?php ($company['industry'] == 'Homewares retailing') ? print "selected" : print "" ?>>Homewares retailing</option>
															<option <?php ($company['industry'] == 'Ice cream retailing') ? print "selected" : print ""; ?>>Ice cream retailing</option>
															<option <?php ($company['industry'] == 'It') ? print "selected" : print "" ?>>It</option>
															<option <?php ($company['industry'] == 'Kebab shops') ? print "selected" : print "" ?>>Kebab shops</option>
															<option <?php ($company['industry'] == 'Landscape construction') ? print "selected" : print ""; ?>>Landscape construction</option>
															<option <?php ($company['industry'] == 'Laundry and dry-cleaning services') ? print "selected" : print "" ?>>Laundry and dry-cleaning services</option>
															<option <?php ($company['industry'] == 'Lawn mower retailing') ? print "selected" : print "" ?>>Lawn mower retailing</option>
															<option <?php ($company['industry'] == 'Lawn mowing and garden services') ? print "selected" : print "" ?>>Lawn mowing and garden services</option>
															<option <?php ($company['industry'] == 'Machinery and equipment repairs and maintenance') ? print "selected" : print "" ?>>Machinery and equipment repairs and maintenance</option>
															<option <?php ($company['industry'] == 'Manchester and other textile goods retailing') ? print "selected" : print ""; ?>>Manchester and other textile goods retailing</option>
															<option <?php ($company['industry'] == 'Meat and poultry retailing – fresh') ? print "selected" : print "" ?>>Meat and poultry retailing – fresh</option>
															<option <?php ($company['industry'] == 'Motor vehicle parts and batteries retailing') ? print "selected" : print "" ?>>Motor vehicle parts and batteries retailing</option>
															<option <?php ($company['industry'] == 'Motor vehicle retail – new and used') ? print "selected" : print "" ?>>GMotor vehicle retail – new and used</option>
															<option <?php ($company['industry'] == 'Musical instruments retail') ? print "selected" : print ""; ?>>Musical instruments retail</option>
															<option <?php ($company['industry'] == 'Newsagents') ? print "selected" : print "" ?>>Newsagents</option>
															<option <?php ($company['industry'] == 'Painting services') ? print "selected" : print ""; ?>>Painting services</option>
															<option <?php ($company['industry'] == 'Panel beating and smash repairs') ? print "selected" : print "" ?>>Panel beating and smash repairs</option>
															<option <?php ($company['industry'] == 'Pest control services') ? print "selected" : print "" ?>>Pest control services</option>
															<option <?php ($company['industry'] == 'Pets and pet supply retailing') ? print "selected" : print "" ?>>Pets and pet supply retailing</option>
															<option <?php ($company['industry'] == 'Pharmacy') ? print "selected" : print ""; ?>>Pharmacy</option>
															<option <?php ($company['industry'] == 'Physiotherapy services') ? print "selected" : print ""; ?>>Physiotherapy services</option>
															<option <?php ($company['industry'] == 'Picture framing retailing') ? print "selected" : print "" ?>>Picture framing retailing</option>
															<option <?php ($company['industry'] == 'Pizza shops – takeaway') ? print "selected" : print "" ?>>Pizza shops – takeaway</option>
															<option <?php ($company['industry'] == 'Plastering and ceiling services') ? print "selected" : print "" ?>>Plastering and ceiling services</option>
															<option <?php ($company['industry'] == 'Plumbing services') ? print "selected" : print ""; ?>>Plumbing services</option>
															<option <?php ($company['industry'] == 'Printing') ? print "selected" : print ""; ?>>Printing</option>
															<option <?php ($company['industry'] == 'Printing support services') ? print "selected" : print "" ?>>Printing support services</option>
															<option <?php ($company['industry'] == 'Pubs, taverns and bars') ? print "selected" : print "" ?>>Pubs, taverns and bars</option>
															<option <?php ($company['industry'] == 'Restaurants') ? print "selected" : print "" ?>>Restaurants</option>
															<option <?php ($company['industry'] == 'Road freight transport services') ? print "selected" : print ""; ?>>Road freight transport services</option>
															<option <?php ($company['industry'] == 'Roofing services, including roof tiling, guttering and metal roofing') ? print "selected" : print ""; ?>>Roofing services, including roof tiling, guttering and metal roofing</option>
															<option <?php ($company['industry'] == 'Sports, camping and fishing retailing') ? print "selected" : print "" ?>>Sports, camping and fishing retailing</option>
															<option <?php ($company['industry'] == 'Sports and physical recreation instruction') ? print "selected" : print ""; ?>>Sports and physical recreation instruction</option>
															<option <?php ($company['industry'] == 'Stationery goods retailing') ? print "selected" : print ""; ?>>Stationery goods retailing</option>
															<option <?php ($company['industry'] == 'Takeaway food services') ? print "selected" : print "" ?>>Takeaway food services</option>
															<option <?php ($company['industry'] == 'Taxi drivers and operators') ? print "selected" : print ""; ?>>Taxi drivers and operators</option>
															<option <?php ($company['industry'] == 'Tiling services – floor and wall') ? print "selected" : print ""; ?>>Tiling services – floor and wall</option>
															<option <?php ($company['industry'] == 'Timber floor sanding') ? print "selected" : print "" ?>>Timber floor sanding</option>
															<option <?php ($company['industry'] == 'Tobacco retailing') ? print "selected" : print ""; ?>>Tobacco retailing</option>
															<option <?php ($company['industry'] == 'Towing services') ? print "selected" : print ""; ?>>Towing services</option>
															<option <?php ($company['industry'] == 'Toy and game retailingd') ? print "selected" : print "" ?>>Toy and game retailing</option>
															<option <?php ($company['industry'] == 'Tutoring and coaching') ? print "selected" : print ""; ?>>Tutoring and coaching</option>
															<option <?php ($company['industry'] == 'Tyre retailing') ? print "selected" : print ""; ?>>Tyre retailing</option>
															<option <?php ($company['industry'] == 'Veterinary services') ? print "selected" : print "" ?>>Veterinary services</option>
															<option <?php ($company['industry'] == 'Video and other electronic media rental and hiring') ? print "selected" : print ""; ?>>Video and other electronic media rental and hiring</option>
															<option <?php ($company['industry'] == 'Watch and jewellery retailing') ? print "selected" : print ""; ?>>Watch and jewellery retailing</option>
															---------------------------------------------------------------------->
															</select>
															<label for="industry">Company Revenue Streams</label>
														</div>
													</div>
														<div class="col-lg-6 col-md-4 col-sm-12">
															<div class="form-floating mb-1">
																<select name="currency" class="form-select validate" id="currency" aria-label="Currency" onchange="adj_financial_year(this.value)">
																		<option value="" selected>Please Select</option>
																		<option value="AUD" <?php ($company['currency'] == 'AUD') ? print "selected" : print "" ?>>AUD</option>
																		<option value="USD" <?php ($company['currency'] == 'USD') ? print "selected" : print "" ?>>USD</option>
																		<option value="INR" <?php ($company['currency'] == 'INR') ? print "selected" : print ""; ?>>INR</option>
																		<option value="EUR" <?php ($company['currency'] == 'EUR') ? print "selected" : print "" ?>>EUR</option>
																		<option value="UK" <?php ($company['currency'] == 'UK') ? print "selected" : print "" ?>>GBP</option>
																</select>
																	<label for="currency">Currency</label>
																</div>

																<div class="form-floating mb-1">
																	<input type="text" name="financial_year" class="form-control validate" id="financial_year" placeholder="Financial Year" value="<?php
																		if (!empty($company['financial_year'])) {
																			print $company['financial_year'];
																		} else {
																			echo 'JUL-JUN';
																		}
																		?>" readonly>
																	<label for="financial_year">Financial Year</label>
																</div>										
															</div>
														</div><!-- /.row-->
													</div><!-- /card body-->						
												</div> <!-- CLOSE VALIDATION DIV -->
															
												<div class="row p-3">
													<div class="border-dashed-bottom my-3"></div>
														<div class="col-12 col-sm-12 offset-0 pt-3">
															<button class="btn btn-falcon-danger" type="button" id="btncancelcompanystup" ><i class="far fa-window-close"></i> Cancel</button>
															<input type='hidden' id='companyuser' value='<?php if(!empty($company['user_id'])){echo $company['user_id'];}else{echo "0";}  ?>'>
															<button class="btn btn-falcon-success me-1 mb-1 savecompanyprofile float-end" type="button"><i class="fa fa-save fa-1x" aria-hidden="true"></i>  Save and Continue</button>	
															
															</div>
													</div>
													<!-- </form> SECOND FORM CLOSED -->
												</div> <!-- end validation div from js file -->	
											</div>
										</div>
									</div>
								</div>
								
							<div class="col d-flex justify-content-center">
								<div class="card overflow-hidden mt-3" style="width: 100%;">					
									<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-5.png);"></div> <!--/.bg-holder-->
										<div class="card-body position-relative">
											
											<!--<h3>Page Title</h3>
											<p class="mt-2">The page header is a nice little feature to add appropriate spacing around the headings on a page. This is particularly helpful on a web page where you may have several post titles and need a way to add distinction to each of them.</p><a class="btn btn-link ps-0 btn-sm" href="../../documentation/getting-started.html" target="_blank">Get Started<span class="fas fa-chevron-right ms-1 fs--2"></span></a>
											-->
						
											<!-- =========================================================================-->
											<!--   Tab 1 Content Details here we need to allow user to upload company logo-->								
											<!-- =========================================================================-->

											<div class="row g-2" style='text-align: center;'>
												<div class="col-lg-12 col-md-12 col-sm-12">
													<form class="form">												
														<div class="row pt-1" style='text-align: center;'>
															<div class="col-lg-12">
																<input type='hidden' id="companylogo_val" value="<?php echo $company['company_logo']; ?>">
																<?php 
																if($company['company_logo'] != ""){ ?>
																	<img class="square" style='width: 100px;' src='<?php echo site_url()."uploads/".$company['company_logo']; ?>' id="companylogo_pre">
																<?php }else{ ?>
																	<img class="square"style='width: 100px;' src='<?php echo site_url()."template-assets/img/team/avatar.png" ?>' id="companylogo_pre">
																<?php } ?>																																	
															</div>										
															<!-- <input type='file' id='uploadfile'> -->
														</div>
													<h1 class="pt-3 mb-3"for="company_name"><?php echo $company['company_name']; ?></h1>
													</form>
												</div><!-- /.row-->
												<?php /*
					
												<div class="col-lg-12 col-md-12 col-sm-12">	
													<ul class="list-unstyled">
														<li >
														<label for="start_date"><?php echo ($company['start_date'] == "" || $company['start_date'] == "1970-01-01") ? date('m/d/Y') : date('m/d/Y', strtotime($company['start_date'])); ?></label>

														</li>
														<li>
														
														</li>
														<!--
														<li>
														<label for="abn_no">ABN No: <?php echo  $company['abn_no']; ?></label>
														</li>
														<li>
														<label for="register_no">Business Registration No:<?php echo  $company['register_no']; ?></label>
														</li>
														-->
														<li>
															<h6 for="email"><?php echo $company['company_email']; ?></h6>
														</li>
													</ul><!-- /.ul-->																																
													<button class="btn btn-falcon-primary me-1 mb-1 editcompany float-center"  id="company_details-form-collapse" type="button"><i class="fas fa-edit fa-1x" aria-hidden="true"></i>  Edit</button>	
												</div><!-- /.col-->
												*/?>
											</div><!-- /.row-->
										</div>								
									</div>
								</div>
							</form>    
						</div>
