
  <!-- ============================================-->
  <!-- <section> begin ============================-->
  <section class="py-0 overflow-hidden light" id="banner"></section>

    <!-- ===============================================-->
    <!--    Main Content-->
    <!-- ===============================================-->
    <main class="main" id="top">


			<?php echo view('needhelp_view'); ?>
      <div class="col-sm-10 col-md-6 px-sm-0 align-self-center mx-auto py-5">
        <div class="mt-5 mb-3">

            <div class="card-body position-relative">
     
                  <div class="row align-items-center">
                     <h1 class="text-primary">Plans <?php echo $user->f_name . ' ' . $user->l_name ?> </h1>			

                     <div class="card mb-3">
                      <div class="card-body">
                        <div class="row justify-content-center">
                          <div class="col-12 text-center mb-4">
                            <div class="fs-1">Falcon Pricing</div>
                            <h3 class="fs-2 fs-md-3">Free plan with all the basic features. <br class="d-none d-md-block" />Pro plan for advanced users.</h3>
                            <div class="d-flex justify-content-center">
                              <label class="form-check-label me-2" for="customSwitch1">Monthly</label>
                              <div class="form-check form-switch">
                                <input class="form-check-input" id="customSwitch1" type="checkbox" checked="checked" />
                                <label class="form-check-label align-top" for="customSwitch1">Yearly</label>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-lg-9 col-xl-10 col-xxl-8">
                            <div class="row">
                              <div class="col-md">
                                <div class="border rounded-3 overflow-hidden mb-3 mb-md-0">
                                  <div class="d-flex flex-between-center p-4">
                                    <div>
                                      <h3 class="fw-light fs-5 mb-0 text-primary">Basic</h3>
                                      <h2 class="fw-light mt-0 text-primary"><sup class="fs-1">&dollar;</sup><span class="fs-3">0</span><span class="fs--2 mt-1">/ m</span></h2>
                                    </div>
                                    <div class="pe-3"><img src="<?php echo site_url(); ?>template-assets/img/icons/free.svg" width="70" alt="" /></div>
                                  </div>
                                  <div class="p-4 bg-light">
                                    <ul class="list-unstyled">
                                      <li class="border-bottom py-2"> <span class="fas fa-check text-primary" data-fa-transform="shrink-2"> </span> Unlimited Broadcasts</li>
                                      <li class="border-bottom py-2"> <span class="fas fa-check text-primary" data-fa-transform="shrink-2"></span> Unlimited Sequences</li>
                                      <li class="py-2 border-bottom"><span class="fas fa-check text-primary" data-fa-transform="shrink-2"></span> Advanced marketing </li>
                                      <li class="py-2 border-bottom"><span class="fas fa-check text-primary" data-fa-transform="shrink-2"></span> Api &amp; Developer Tools</li>
                                      <li class="py-2 border-bottom text-300"><span class="fas fa-check" data-fa-transform="shrink-2"></span> Integrations</li>
                                      <li class="py-2 border-bottom text-300"><span class="fas fa-check" data-fa-transform="shrink-2"></span> Payments </li>
                                      <li class="py-2 border-bottom text-300"><span class="fas fa-check" data-fa-transform="shrink-2"></span> Payments</li>
                                      <li class="py-2 text-300"><span class="fas fa-check" data-fa-transform="shrink-2"></span> Unlimted Tags</li>
                                    </ul>
                                      <a href="<?php echo site_url().'register' ?>" class="btn btn-outline-primary d-block w-100">
                                          Purchase Plan
                                      </a>
                                    <!-- <button class="btn btn-outline-primary d-block w-100" type="button">Start free trial </button> -->
                                  </div>
                                </div>
                              </div>
                              <div class="col-md">
                                <div class="border rounded-3 overflow-hidden">
                                  <div class="d-flex flex-between-center p-4">
                                    <div>
                                      <h3 class="fw-light text-primary fs-5 mb-0">Pro</h3>
                                      <h2 class="fw-light text-primary mt-0"><sup class="fs-1">&dollar;</sup><span class="fs-3">99</span><span class="fs--2 mt-1">/ m</span></h2>
                                    </div>
                                    <div class="pe-3"><img src="<?php echo site_url(); ?>template-assets/img/icons/pro.svg" width="70" alt="" /></div>
                                  </div>
                                  <div class="p-4 bg-light">
                                    <ul class="list-unstyled">
                                      <li class="border-bottom py-2"> <span class="fas fa-check text-primary" data-fa-transform="shrink-2"> </span> Unlimited Broadcasts</li>
                                      <li class="border-bottom py-2"> <span class="fas fa-check text-primary" data-fa-transform="shrink-2"></span> Unlimited Sequences</li>
                                      <li class="py-2 border-bottom"><span class="fas fa-check text-primary" data-fa-transform="shrink-2"></span> Advanced marketing </li>
                                      <li class="py-2 border-bottom"><span class="fas fa-check text-primary" data-fa-transform="shrink-2"></span> Api &amp; Developer Tools</li>
                                      <li class="py-2 border-bottom"><span class="fas fa-check text-primary" data-fa-transform="shrink-2"> </span> Integrations</li>
                                      <li class="py-2 border-bottom"><span class="fas fa-check text-primary" data-fa-transform="shrink-2"> </span> Payments</li>
                                      <li class="py-2 border-bottom"><span class="fas fa-check text-primary" data-fa-transform="shrink-2"> </span> Unlimted Tags</li>
                                      <li class="py-2"><span class="fas fa-check text-primary" data-fa-transform="shrink-2"> </span> Custom Fields</li>
                                    </ul>
                                      <a href="<?php echo site_url().'register' ?>" class="btn btn-outline-primary d-block w-100">
                                          Purchase Plan
                                      </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 text-center">
                            <h5 class="mt-5">Looking for personal or small team task management?</h5>
                            <p class="fs-1">Try the <a href="#">basic version</a> of Falcon</p>
                          </div>
                        </div>
                      </div>
                    </div>
                          
                </div><!--/.row-->		
    
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>

<!-- ===============================================-->
<!--    End of Main Content-->
<!-- ===============================================-->


