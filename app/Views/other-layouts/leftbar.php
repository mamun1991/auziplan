	
<body>
   
<!-- ===============================================-->
<!--    Main Content-->
<!-- ===============================================-->
<main class="main" id="top">


	<!-- Left Offcanvas-->
	<div class="offcanvas offcanvas-start" id="offcanvasLeft" tabindex="-1" aria-labelledby="offcanvasLeftLabel" style="width:700px;" >
		<div class="offcanvas-header">
			<h5 id="offcanvasLeftLabel">Offcanvas left</h5>
			<button class="btn-close text-reset" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
			<div class="container" data-layout="container">
				<div class="card mb-3">
					<div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);">
					</div>
					<!--/.bg-holder-->
					<div class="card-body position-relative">
						<div class="row">
							<div class="col-lg-8">
							<h3>FAQ Accordion</h3>
							<p class="mb-0">Below you'll find answers to the questions we get <br class='d-none.d-sm-block' /> asked the most about to join with Falcon</p>
							</div>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="accordion border-x border-top rounded" id="accordionFaq">
							<div class="card shadow-none border-bottom rounded-bottom-0">
								<div class="card-header p-0" id="faqAccordionHeading1">
									<button class="accordion-button btn btn-link text-decoration-none d-block w-100 py-2 px-3 collapsed border-0 text-start" data-bs-toggle="collapse" data-bs-target="#collapseFaqAccordion1" aria-expanded="false" aria-controls="collapseFaqAccordion1">
										<span class="fas fa-caret-right accordion-icon me-3" data-fa-transform="shrink-2"></span><span class="fw-medium font-sans-serif text-900">How long do payouts take?</span></button>
								</div>
								<div class="collapse bg-light" id="collapseFaqAccordion1" aria-labelledby="faqAccordionHeading1" data-parent="#accordionFaq">
									<div class="card-body">
									<p class="ps-4 mb-0">Once you’re set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.</p>
									</div>
								</div>
							</div>
							<div class="card shadow-none border-bottom rounded-0">
								<div class="card-header p-0" id="faqAccordionHeading2">
									<button class="accordion-button btn btn-link text-decoration-none d-block w-100 py-2 px-3 collapsed border-0 text-start" data-bs-toggle="collapse" data-bs-target="#collapseFaqAccordion2" aria-expanded="false" aria-controls="collapseFaqAccordion2"><span class="fas fa-caret-right accordion-icon me-3" data-fa-transform="shrink-2"></span><span class="fw-medium font-sans-serif text-900">How do refunds work?</span></button>
								</div>
								<div class="collapse bg-light" id="collapseFaqAccordion2" aria-labelledby="faqAccordionHeading2" data-parent="#accordionFaq">
									<div class="card-body">
									<p class="ps-4 mb-0">You can issue either partial or full refunds. There are no fees to refund a charge, but the fees from the original charge are not returned.</p>
									</div>
								</div>
							</div>
							<div class="card shadow-none border-bottom rounded-0">
								<div class="card-header p-0" id="faqAccordionHeading3">
									<button class="accordion-button btn btn-link text-decoration-none d-block w-100 py-2 px-3 collapsed border-0 text-start" data-bs-toggle="collapse" data-bs-target="#collapseFaqAccordion3" aria-expanded="false" aria-controls="collapseFaqAccordion3"><span class="fas fa-caret-right accordion-icon me-3" data-fa-transform="shrink-2"></span><span class="fw-medium font-sans-serif text-900">How much do disputes costs?</span></button>
								</div>
								<div class="collapse bg-light" id="collapseFaqAccordion3" aria-labelledby="faqAccordionHeading3" data-parent="#accordionFaq">
									<div class="card-body">
									<p class="ps-4 mb-0">Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded.</p>
									</div>
								</div>
							</div>
							<div class="card shadow-none border-bottom">
								<div class="card-header p-0" id="faqAccordionHeading4">
									<button class="accordion-button btn btn-link text-decoration-none d-block w-100 py-2 px-3 collapsed border-0 text-start" data-bs-toggle="collapse" data-bs-target="#collapseFaqAccordion4" aria-expanded="false" aria-controls="collapseFaqAccordion4"><span class="fas fa-caret-right accordion-icon me-3" data-fa-transform="shrink-2"></span><span class="fw-medium font-sans-serif text-900">Is there a fee to use Apple Pay or Google Pay?</span></button>
								</div>
								<div class="collapse bg-light" id="collapseFaqAccordion4" aria-labelledby="faqAccordionHeading4" data-parent="#accordionFaq">
									<div class="card-body">
									<p class="ps-4 mb-0">There are no additional fees for using our mobile SDKs or to accept payments using consumer wallets like Apple Pay or Google Pay.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
		
	<div class="container" data-layout="container">

	<script>
		var isFluid = JSON.parse(localStorage.getItem('isFluid'));
		if (isFluid) {
			var container = document.querySelector('[data-layout]');
			container.classList.remove('container');
			container.classList.add('container-fluid');
		}
	</script>
		
	<nav class="navbar navbar-light navbar-vertical navbar-expand-xl">
	<script>
		var navbarStyle = localStorage.getItem("navbarStyle");
		if (navbarStyle && navbarStyle !== 'transparent') {
		document.querySelector('.navbar-vertical').classList.add(`navbar-${navbarStyle}`);
		}
	</script>

	<!-- Top Offcanvas-->

	<!-- ===============================================-->
	<!--      Current Left Side Bar  Content-->
	<!-- ===============================================-->

	<div class="d-flex align-items-center">
		<div class="toggle-icon-wrapper">
			<button class="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Toggle Navigation">
				<span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>
			</div><a class="navbar-brand" href="../../index.html">
			<div class="d-flex align-items-center py-3">

	<!-- ===============================================-->
	<!--      Current Side Bar Log  Content ( We will add an image fro the logo once its ready-->
	<!-- ===============================================-->
		<img class="me-2" src="<?php echo site_url(); ?>custom-assets/images/logo_transparent.png" alt="Logo" width="40" />                 
			  <h5 class="pt-3" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:center">
				<!--<span><img src='<?php echo site_url(); ?>custom-assets/images/logo_transparent.png' style='width: 60px; height: 60px; pb-4'/></span>-->
				<span style="color:rgba(0, 0, 0, 0.60);font-size:30px;font-weight:100; margin-right: 0px; margin-top: 20px;float: center;">Auzi</span>
				<span style="color:rgba(13, 110, 252, 1.0);font-size:30px; margin-top: 20px;float: center;">Plan</span><span class="text-info fw-medium">CRM</span>
			</h5>
		</div>
	</a>
</div>

<!-- ===============================================-->
<!--      Current Side Bar Dashboard Content-->
<!-- ===============================================-->

<div class="collapse navbar-collapse" id="navbarVerticalCollapse">
	<div class="navbar-vertical-content scrollbar">
		<ul class="navbar-nav flex-column mb-1" id="navbarVerticalNav">


		<!-- ===============================================-->
			<!--    Introduction Content-->
		<!-- ===============================================-->

		<!-- label
		<div class="row navbar-vertical-label-wrapper mt-3 mb-2">
			<div class="col-auto navbar-vertical-label">
			</div>
			<div class="col ps-0">
			<hr class="mb-0 navbar-vertical-divider" />
			</div>
		</div>	
	-->
		<!-- parent pages-->
		<!--
		<a class="nav-link" href="<?php echo site_url(); ?>introduction/introduction" role="button" aria-expanded="false">
			<div class="d-flex align-items-center"><span class="nav-link-icon"><span class="far fa-comment-dots fa-1x text-info"  aria-hidden="true"></span></span><span class="nav-link-text ps-3">Introduction</span>
		</div>
		</a>
		-->

		<!-- ===============================================-->
		<!--    Introduction Content-->
		<!-- ===============================================-->

		<!-- label-->


		<div class="row navbar-vertical-label-wrapper mt-3 mb-2">
			<div class="col-auto navbar-vertical-label">Dashboard
		</div>
			<div class="col ps-0">
			<hr class="mb-0 navbar-vertical-divider" />
			</div>
		</div>

		<!-- parent pages-->
		<div class="card-1  text-left">
				<div class="card-body">
				<a class="nav-link" href="<?php echo site_url(); ?>main-dashboard" role="button" aria-expanded="false">
					<div class="d-flex align-items-center">
					<span class="nav-link-icon"><i class="fas fa-tachometer-alt fa-1x text-default" aria-hidden="true" ></i></span><span class="nav-link-text ps-3">Dashboard</span>

					</div>
				</a>
				</div>
		</div>

		<!-- ===============================================-->
			<!--      Current Side Bar APP Content-->
		<!-- ===============================================-->

		<li class="nav-item">

		<!-- ===============================================-->
		<!--      Stage 1 Company Setuo-->
		<!-- ===============================================-->

		<!-- label-->


		<div class="row navbar-vertical-label-wrapper mt-3 mb-2">
			<div class="col-auto navbar-vertical-label">Stage 1
			</div>
			<div class="col ps-0">
			<hr class="mb-0 navbar-vertical-divider" />
			</div>
		</div>

			<!-- parent pages-->
			<div class="card-1  text-left">
				<div class="card-body">
					<a class="nav-link" href="<?php echo site_url(); ?>user/companysetup" role="button" aria-expanded="false">
						<div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-cogs fa-1x text-default" aria-hidden="true"></span></span><span class="nav-link-text ps-3">Setup</span>
						</div>
					</a>
			</div>	
		</div>
		<!-- ===============================================-->
		<!--      Stage 2 Business Narrative-->
		<!-- ===============================================-->
		<!-- label-->

		<div class="row navbar-vertical-label-wrapper mt-3 mb-2">
			<div class="col-auto navbar-vertical-label">Stage 2
			</div>
			<div class="col ps-0">
			<hr class="mb-0 navbar-vertical-divider" />
			</div>
		</div>
		<!-- parent pages-->
		<div class="card-1  text-left">
				<div class="card-body">
				<a class="nav-link" href="<?php echo site_url(); ?>planning/planning-setup" role="button" aria-expanded="false">
					<div class="d-flex align-items-center"><span class="nav-link-icon"><span class="far fa-edit fa-1x text-default" aria-hidden="true"></span></span><span class="nav-link-text ps-3">Narrative</span>
				</div>
				</a>
			</div>	
		</div>
		<!-- ===============================================-->
		<!--      Stage  Opening Costs-->
		<!-- ===============================================-->
		<!-- label-->

		<div class="row navbar-vertical-label-wrapper mt-3 mb-2">
			<div class="col-auto navbar-vertical-label">Stage 3
			</div>
			<div class="col ps-0"> 
			<hr class="mb-0 navbar-vertical-divider" />
			</div>
		</div>
 
		<!-- parent pages-->
		<div class="card-1  text-left">
				<div class="card-body">
					<a class="nav-link" href="<?php echo site_url(); ?>opening-cost" role="button" aria-expanded="false">
						<div class="d-flex align-items-center"><span class="nav-link-icon"><i class="fa fa-calculator fa-1x text-default" aria-hidden="true"></i></span><span class="nav-link-text ps-3">Startup</span>
						</div>
					</a>
				</div>
		</div>
		<!-- ===============================================-->
		<!--      Stage  Opening Costs-->
		<!-- ===============================================-->
		<!-- label-->

		<div class="row navbar-vertical-label-wrapper mt-3 mb-2">
			<div class="col-auto navbar-vertical-label">Stage 4
			</div>
			<div class="col ps-0"> 
			<hr class="mb-0 navbar-vertical-divider" />
			</div>
		</div>

		<!-- parent pages-->	  	 
		<div class="card-1  text-left">
				<div class="card-body">
					<a class="nav-link" href="<?php echo site_url(); ?>operating-cost" role="button" aria-expanded="false">
						<div class="d-flex align-items-center"><span class="nav-link-icon"><i class="fas fa-money-check-alt fa-1x text-default"aria-hidden="true" ></i></span><span class="nav-link-text ps-3">Expenses</span>
						</div>
					</a>
				</div>
			</div>

		<!-- ===============================================-->
		<!--      Revenue Costs-->
		<!-- ===============================================-->
		<!-- label-->

		<div class="row navbar-vertical-label-wrapper mt-3 mb-2">
			<div class="col-auto navbar-vertical-label">Stage 5
			</div>
			<div class="col ps-0"> 
			<hr class="mb-0 navbar-vertical-divider" />
			</div>
		</div>

		<!-- parent pages-->	  
		<div class="card-1  text-left">
				<div class="card-body">
					<a class="nav-link" href="<?php echo site_url(); ?>revenue" role="button" aria-expanded="false">
						<div class="d-flex align-items-center"><span class="nav-link-icon"><i class="fas fa-chart-bar fa-1x text-default" aria-hidden="true"></i></span><span class="nav-link-text ps-3">Revenue</span>
						</div>
					</a>
				</div>
		</div>




		<!-- ===============================================-->
		<!--      Analysis Reports -->
		<!-- ===============================================-->
		<!-- label-->

		<div class="row navbar-vertical-label-wrapper mt-3 mb-2">
			<div class="col-auto navbar-vertical-label">Stage 6
			</div>
			<div class="col ps-0"> 
			<hr class="mb-0 navbar-vertical-divider" />
			</div>
		</div>

		<!-- parent pages-->	 
		<div class="card-1  text-left">
				<div class="card-body">
					<a class="nav-link" href="<?php echo site_url(); ?>analysis" role="button" aria-expanded="false">
						<div class="d-flex align-items-center"><span class="nav-link-icon"><i class="fa fa-chart-line  fa-1x text-default" aria-hidden="true"></i></span><span class="nav-link-text ps-3">Analysis</span>
						</div>
					</a>

				</div>
		</div>

		<div class="col ps-0"> 
			<hr class="mb-0 navbar-vertical-divider" />
		</div>

		<!-- ===============================================-->
		<!--    Documentation Content-->
		<!-- ===============================================-->

		<li class="nav-item" style="display:none">
		<!-- label-->
		<div class="row navbar-vertical-label-wrapper mt-3 mb-2">
			<div class="col-auto navbar-vertical-label">Documentation
			</div>
			<div class="col ps-0">
			<hr class="mb-0 navbar-vertical-divider" />
			</div>
		</div>
			
		<!-- parent pages-->
		<a class="nav-link dropdown-indicator" href="#customization" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="customization">
			<div class="d-flex align-items-center"><span class="nav-link-icon"><i class="fa fa-question-circle"></i></span><span class="nav-link-text ps-1">Support</span>
			</div>
		</a>

		<ul class="nav collapse false" id="customization">

		<li class="nav-item">
		<!-- parent pages-->
		<a class="nav-link" href="<?php echo site_url(); ?>help/help" role="button" aria-expanded="false">
				<div class="d-flex align-items-center"><span class="nav-link-text ps-1">Help Center</span>
			</div>
		</a>					
		</li>
		<!-- more inner pages-->
		<li class="nav-item">
			<a class="nav-link" href="../../documentation/customization/configuration.html" aria-expanded="false">
				<div class="d-flex align-items-center"><span class="nav-link-text ps-1">Contact Us</span>
			</div>
		</a>     
		</li>

		<!-- more inner pages-->
		<li class="nav-item"><a class="nav-link" href="../../documentation/customization/styling.html" aria-expanded="false">
				<div class="d-flex align-items-center"><span class="nav-link-text ps-1">Faq</span>
			</div>
		</a>          
		</li>
		<!-- more inner pages-->
		<li class="nav-item"><a class="nav-link" href="../../documentation/customization/dark-mode.html" aria-expanded="false">
				<div class="d-flex align-items-center"><span class="nav-link-text ps-1">Support</span>
			</div>
		</a>
			
		</li>
		<!-- more inner pages-->
		<li class="nav-item"><a class="nav-link" href="../../documentation/customization/plugin.html" aria-expanded="false">
			<div class="d-flex align-items-center"><span class="nav-link-text ps-1">Terms and Conditions</span>
			</div>
		</a>

		</li>
		
		</ul>
	</li>
</ul>










	<!-- ===============================================-->
	<!--    Print Center Content-->
	<!-- ===============================================-->



				<div class="border-dashed-bottom pt-3 my-3"></div>

					<div class="settings pt-1 mb-1">
						<div class="card alert p-0 shadow-none" role="alert">
							<!--<div class="btn-close-falcon-container">
								<div class="btn-close-falcon" aria-label="Close" data-bs-dismiss="alert"></div>
							</div>-->
							<div class="card-body text-center">						
								<img class="img-fluid" src="<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/1.svg" alt="" />
								<p class="fs--2 mt-2">Are you ready <br/>to print your <a href="#!">Business Plan</a></p>
								<div class="d-grid">	
													
							<!-- parent pages-->	  	 		
							<a class="btn btn-falcon-primary mb-1 text-center" href="<?php echo site_url(); ?>print_center/print_center" role="button" aria-expanded="false">
								<div>Print Center</span>
								</div>
							</a>
						</div>							
					</div>
				</div>
				<div class="border-dashed-bottom pt-3 my-3"></div>
				
					<div class="settings pt-1 mb-1" style="display:none">	
						<div class="card alert p-0 shadow-none" role="alert">
						<!--<div class="btn-close-falcon-container">
								<div class="btn-close-falcon" aria-label="Close" data-bs-dismiss="alert"></div>
							</div>-->
							<div class="card-body text-center">
								
								<img class="img-fluid" src="<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/3.svg" alt="" />
								<p class="fs--2 mt-2">Do you need help to write your <a href="#!">Business Plan</a></p>
								<div class="d-grid">											
								<!-- parent pages-->	  	 		
								<a class="btn btn-falcon-primary mb-1 text-center" href="<?php echo site_url(); ?>faq/faq" role="button" aria-expanded="false">
									<div>FAQ Center</span>
									</div>
								</a>

							</div>					
						</div>
					</div>

				</div>
			</div>
		</div>
</nav>



