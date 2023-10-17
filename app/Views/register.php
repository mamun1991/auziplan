<!DOCTYPE html>
<html lang="en-US" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">


  <!-- ===============================================-->
  <!--    Document Title-->
  <!-- ===============================================-->
  <title>Falcon | Dashboard &amp; Web App Template</title>


  <!-- ===============================================-->
  <!--    Favicons-->
  <!-- ===============================================-->
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo site_url(); ?>template-assets/img/favicons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?php echo site_url(); ?>template-assets/img/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo site_url(); ?>template-assets/img/favicons/favicon-16x16.png">
  <link rel="shortcut icon" type="image/x-icon" href="<?php echo site_url(); ?>template-assets/img/favicons/favicon.ico">
  <link rel="manifest" href="<?php echo site_url(); ?>template-assets/img/favicons/manifest.json">
  <meta name="msapplication-TileImage" content="<?php echo site_url(); ?>template-assets/img/favicons/mstile-150x150.png">
  <meta name="theme-color" content="#ffffff">
  <script src="<?php echo site_url(); ?>template-assets/js/config.js"></script>
  <script src="<?php echo site_url(); ?>template-vendors/overlayscrollbars/OverlayScrollbars.min.js"></script>


  <!-- ===============================================-->
  <!--    Stylesheets-->
  <!-- ===============================================-->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700%7cPoppins:300,400,500,600,700,800,900&amp;display=swap" rel="stylesheet">
  <link href="<?php echo site_url(); ?>template-vendors/overlayscrollbars/OverlayScrollbars.min.css" rel="stylesheet">
  <link href="<?php echo site_url(); ?>template-assets/css/theme-rtl.min.css" rel="stylesheet" id="style-rtl">
  <link href="<?php echo site_url(); ?>template-assets/css/theme.min.css" rel="stylesheet" id="style-default">
  <link href="<?php echo site_url(); ?>template-assets/css/user-rtl.min.css" rel="stylesheet" id="user-style-rtl">
  <link href="<?php echo site_url(); ?>template-assets/css/user.min.css" rel="stylesheet" id="user-style-default">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" id="app-style" rel="stylesheet" type="text/css" />
  <script>
    var isRTL = JSON.parse(localStorage.getItem('isRTL'));
    if (isRTL) {
      var linkDefault = document.getElementById('style-default');
      var userLinkDefault = document.getElementById('user-style-default');
      linkDefault.setAttribute('disabled', true);
      userLinkDefault.setAttribute('disabled', true);
      document.querySelector('html').setAttribute('dir', 'rtl');
    } else {
      var linkRTL = document.getElementById('style-rtl');
      var userLinkRTL = document.getElementById('user-style-rtl');
      linkRTL.setAttribute('disabled', true);
      userLinkRTL.setAttribute('disabled', true);
    }
    window.baseURL = '<?php site_url(); ?>'
  </script>
  <style>
    /*===========================================================================
[9. Form Control Hover - Starts]   
==============================================================================*/


    .form-floating :hover {
      -moz-box-shadow: 0 0 10px #ccc;
      -webkit-box-shadow: 0 0 10px #ccc;
      box-shadow: 0 0 10px #ccc;
      border: 2px solid #4695ff;
    }
  </style>


</head>


<body>

  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <main class="main" id="top">
    <div class="container-fluid">
      <script>
        var isFluid = JSON.parse(localStorage.getItem('isFluid'));
        if (isFluid) {
          var container = document.querySelector('[data-layout]');
          container.classList.remove('container');
          container.classList.add('container-fluid');
        }
      </script>
      <div class="row min-vh-100 bg-100">
        <div class="col-6 d-none d-lg-block position-relative">
          <div class="bg-holder" style="background-image:url(<?php echo site_url(); ?>template-assets/img/illustrations/5.svg);">
          </div>
          <!--/.bg-holder-->

        </div>
        <div class="col-sm-10 col-md-6 px-sm-0 align-self-center mx-auto py-5">
          <div class="row justify-content-center g-0">
            <div class="col-lg-9 col-xl-8 col-xxl-6">
              <div class="card">
                <!-- <div class="card-header bg-circle-shape bg-shape text-center p-2"> -->
                <div class="card-header text-center p-5">
                  <!-- ===============================================-->
                  <!--      Current Side Bar Log  Content ( We will add an image fro the logo once its ready-->
                  <!-- ===============================================-->
                  <h5 class="" style="background-color: rgba(13, 110, 253, 0.00);color:rgba(0,0,0,1.0);padding-top: 0%; font-size:0px;font-weight:thin;text-align:center">
                    <span><img src="<?php echo site_url(); ?>custom-assets/img/favicons/apple-icon-60x60.png" alt="Logo" style="margin-right: 3px; margin-top: -5%; width:80px; height: 80px;  float: center;" /></span>
                    <span style="color:rgba(0, 0, 0, 1.0);font-size:40px;font-weight:100; margin-right: 0px; margin-top: 40px;float: center;">Auzi</span>
                    <span style="color:rgba(13, 110, 252, 1.0);font-size:40px; margin-top: 40px;float: center;">Plan</span>
                  </h5>
                </div>

                <div class="card-body p-4 msgemail">
                  <div class="text-center"><img class="d-block mx-auto mb-4" src="<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/16.png" alt="Email" width="100">
                    <h3 class="mb-2">Please check your email!</h3>
                    <p>An email has been sent to <strong><span id='useremail'></span></strong>. Please click on the included link to activate your account.
                    </p>
                  </div>
                </div>

                <div class="card-body p-4 regform">
                  <div class="row flex-between-center">
                    <div class="col-auto">
                      <h3>Register</h3>
                    </div>
                    <div class="col-auto fs--1 text-600"><span class="mb-0 fw-semi-bold">Already User?</span> <span><a href="<?php echo site_url() . 'login' ?>">Login</a></span></div>
                  </div>
                  <!-- Form Control DIV -->
                  <div id="frm<?php echo $controller; ?>">
                    <div class="mb-3">
                      <div class="row gx-2">


                        <div class="form-floating mb-1 col-sm-6">
                          <input type="text" autocomplete="off" name="f_name" class="form-control validate" id="f_name" placeholder="What is the name of this Investor?">
                          <label for="split-password" class="text-muted">What is your first name?</label>
                        </div><!-- /.float form -->

                        <div class="form-floating mb-1  col-sm-6">
                          <input type="text" autocomplete="off" name="l_name" class="form-control validate" id="l_name" placeholder="What is your last?">
                          <label for="split-confirm-password" class="text-muted">What is your last name?</label>
                        </div><!-- /.float form -->

                        <!--<div class="mb-3 col-sm-6">
                          <label class="form-label" for="split-password">First Name</label>
                          <input class="form-control validate" type="text" autocomplete="off" id="f_name" />
                        </div>

                        <div class="mb-3 col-sm-6">
                          <label class="form-label" for="split-confirm-password">Last Name</label>
                          <input class="form-control validate" type="text" autocomplete="off" id="l_name" />
                        </div>  -->

                      </div>
                    </div>

                    <div class="form-floating mb-3">
                      <input type="email" autocomplete="on" name="email" class="form-control validate" id="email" placeholder="What is your email address?">
                      <label for="split-email" class="text-muted">What is your email address?</label>
                    </div><!-- /.float form -->

                    <!-- <div class="mb-3">
                              <label class="form-label" for="split-email">Email address</label>
                              <input class="form-control validate" type="email" autocomplete="on" id="email" />
                            </div>-->
                    <div class="row gx-2">

                      <div class="mb-3 col-sm-6">

                        <div class="form-floating mb-3">
                          <input type="text" autocomplete="off" name="email" class="form-control validate" id="phone" placeholder="What is phone number?">
                          <label for="split-email" class="text-muted">What is your phone number?</label>
                        </div><!-- /.float form -->

                        <!--<div class="mb-3">
                              <label class="form-label" for="split-email">Phone</label>
                              <input class="form-control validate" type="text" autocomplete="off" id="phone" />
                            </div>-->

                      </div><!-- /.col -->

                      <div class="mb-3 col-sm-6">

                        <div class="form-floating mb-3">
                          <input type="text" autocomplete="off" name="email" class="form-control validate" id="username" placeholder="What is your email address?">
                          <label for="split-email" class="text-muted">What is your user name?</label>
                        </div><!-- /.float form -->

                        <!--<div class="mb-3">
                                <label class="form-label" for="split-email">Username</label>
                                <input class="form-control validate" type="text" autocomplete="off" id="username" />
                              </div>-->



                      </div><!-- /.col -->



                      <div class="row gx-2">

                        <div class="mb-3 col-sm-6">
                          <div class="form-floating mb-3">
                            <input type="password" name="password" autocomplete="on" class="form-control validate" id="password" placeholder="What is your password?">
                            <label for="split-password" class="text-muted">What is your password?</label>
                          </div><!-- /.float form -->

                          <!--<label class="form-label" for="split-password">Password</label>
                              <input class="form-control validate" type="password" autocomplete="on" id="password" />-->

                        </div><!-- /.col -->

                        <div class="mb-3 col-sm-6">

                          <div class="form-floating mb-3">
                            <input type="password" autocomplete="on" name="cpassword" class="form-control validate" id="cpassword" placeholder="Confirm your password?">
                            <label for="split-confirm-password" class="text-muted">Confirm your password?</label>
                          </div><!-- /.float form -->


                          <!--<label class="form-label" for="split-confirm-password">Confirm Password</label>
                              <input class="form-control validate" type="password" autocomplete="on" id="cpassword" />-->

                        </div><!-- /.col -->

                      </div><!-- /.row -->


                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="cover-register-checkbox" />
                        <label class="form-label" for="cover-register-checkbox">I accept the <a href="!" data-bs-toggle="modal" data-bs-target="#staticBackdrop">terms and privacy policy</a></label>
                      </div>
                      <div class="mb-3">
                        <button class="btn btn-primary d-block w-100 mt-3 register" type="button" name="submit">Register</button>
                      </div>
                      <!-- Form Control DIV END -->
                    </div>
                    <div class="row g-2 mt-2">
                      <div class="col-sm-12">
                        <p id='msg' style='color: green;'></p>
                      </div>
                    </div>
                    <div class="position-relative mt-4">
                      <hr class="bg-300" />
                      <div class="divider-content-center">or register with</div>
                    </div>
                    <div class="row g-2 mt-2">
                      <div class="col-sm-6"><a class="btn btn-outline-google-plus btn-sm d-block w-100" href="#"><span class="fab fa-google-plus-g me-2" data-fa-transform="grow-8"></span> google</a></div>
                      <div class="col-sm-6"><a class="btn btn-outline-facebook btn-sm d-block w-100" href="#"><span class="fab fa-facebook-square me-2" data-fa-transform="grow-8"></span> facebook</a></div>
                    </div>
                    <div class="col-auto float-end pt-3"><a class="fs--1" href="<?php echo site_url() . 'logout' ?>">Back to AuziPlan</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </main>
  <!-- ===============================================-->
  <!--    End of Main Content-->
  <!-- ===============================================-->



  <!-- ===============================================-->
  <!--    Terms Modal Content-->
  <!-- ===============================================-->

  <div class="modal fade" id="staticBackdrop" data-bs-keyboard="false" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl mt-6 modal-dialog-scrollable" role="document">
      <div class="modal-content border-0">
        <div class="position-absolute top-0 end-0 mt-3 me-3 z-index-1">
          <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-0" style=" max-height: 80vh; overflow-y: auto;">

          <div class="card mb-3">
            <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/corner-4.png);">
            </div>
            <!--/.bg-holder-->

            <div class="card-body position-relative">
              <div class="row">
                <div class="col-lg-9">
                  <h3>Privacy policy</h3>
                  <!--Section description-->
                  <p class="mb-0">
                    Our Terms and Privacy policy are provided to make you aware of the following:</p>
                  <p class="mb-0">Last Updated: February 7, 2021</p>
                  <h5 class="pt-2">OVERVIEW</h5>
                  <p class="mb-0">
                    A privacy policy is a statement or legal document that discloses some or all of the ways Auziplan gathers, uses, discloses,
                    and manages a customer or client's data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-0">
            <div class="col-lg-9 pe-lg-2">
              <div class="card mb-3">
                <div class="card-header bg-light">
                  <h5 class="mb-0" id="account">Account</h5>
                </div>
                <div class="card-body">
                  <h6 class="text-primary">Eligibility </h6>
                  <p class="fs-0 mb-0 fw-semi-bold">In order to use the Service, you must:</p>
                  <ol type="1">
                    <li>be a business or a consumer able to enter into valid contracts;</li>
                    <li>complete the signup process;</li>
                    <li>agree to the Terms; and</li>
                    <li>provide true, complete, and up to date contact information.</li>
                  </ol>
                  <hr class="my-4" />
                  <h6 class="text-primary">Accepting these Terms</h6>
                  <p class="mb-0 ps-3">

                    These Terms apply from when you sign up for the Service. Clicking the ‘Get started’ or ‘Sign up with Google’ button on the Sign up page means that you’ve officially “signed”
                    the Terms and a binding contract will come into existence on the basis of the Terms (“Agreement”).
                    If you sign up for the Service on behalf of a company or other entity, you represent and warrant that you have the authority to accept these Terms on their behalf.

                  </p>
                  <hr class="my-4" />
                  <h6 class="text-primary">Closing your account</h6>
                  <p class="mb-0 ps-3">

                    You or we may terminate this Agreement at any time and for any reason by giving notice in writing (including email) to the other party.
                    You need to clear the unpaid invoices (if any exists) before terminating this Agreement. Once terminated, we may permanently delete your account and all the data associated with it,
                    including your Content from our Website.

                  </p>
                  <hr class="my-4" />
                  <h6 class="text-primary">Changes</h6>
                  <p class="mb-0 ps-3">

                    We may change any of the Terms by posting revised Terms of Use on our Website and sending an email to the last email address you gave us or a message
                    to your account area of the Service (“Dashboard”). Unless you terminate your account within seven (7) days of that email,
                    the new Terms will be effective immediately and apply to any continued or new use of the Service. We may change the Website, the Service, or any features of the Service at any time.

                  </p>
                  <hr class="my-4" />
                  <h6 class="text-primary">Account and password</h6>
                  <p class="mb-0 ps-3">

                    You’re responsible for keeping your account name and password confidential. You’re also responsible for any use of your account,
                    whether or not you authorized the use. You must immediately notify us of any unauthorized use of your accounts. We’re not responsible for any losses due to stolen or hacked passwords.
                    We don’t have access to your current password, and for security reasons, we may only reset your password.

                  </p>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header bg-light">
                  <h5 class="mb-0" id="subscriptions">Subscriptions and payment </h5>
                </div>
                <div class="card-body">
                  <h6 class="text-primary">Free service</h6>
                  <p class="mb-0 ps-3">

                    We may make certain Services available to you free of charge, up to certain limits as described on the Website (“Free Services”).
                    Usage of the Services in excess of those limits requires a payment. We may terminate your access to the Free Services at any time without prior notice and will have no liability in
                    respect of such termination. Without limiting the scope of clause 15, Free Services are provided without any warranty.

                  </p>
                  <hr class="my-4" />
                  <h6 class="text-primary">Paid service</h6>
                  <ol type="1">
                    <li>If you use our Services and cross the limits of the Free Services we provide, the ‘Paid service’ section applies for you</li>
                    <li>The “Invoice Payment” are the fees payable for your invoice, as specified to you when you use our Service beyond the free usage limit. You shall pay for the Invoice Payment to us for the term of your paid usage.</li>
                    <li>You won’t be charged for using our services until your usage crosses the free usage limit. At the end of each month (considering you have used beyond our free usage limit), we will generate an invoice containing your usage information, and the due amount for that month.</li>
                    <li>Invoice Fees are payable in the currency specified when you sign up for the Service and are exclusive of value added tax (or other applicable sales tax), which shall be added at the appropriate rate.</li>
                  </ol>
                  <hr class="my-4" />
                  <h6 class="text-primary">Credit cards</h6>
                  <p class="mb-0 ps-3">As long as you’re a paid user or have an outstanding balance with us, you will provide us with valid credit card information and authorize us to deduct the monthly invoice charges against that credit card (considering you have used beyond our free usage limit). We do not save card information that you provided, rather we use Stripe. You must replace the information for any credit card that expires with information for a different valid credit card. You can add multiple credit cards in our service, but only the card that you mark as Primary will be used to charge you for using paid services. </p>
                  <hr class="my-4" />
                  <h6 class="text-primary">Refunds</h6>
                  <p class="mb-0 ps-3">You won’t be entitled to a refund from us. As a postpaid service, it’s invalid. But if your invoice has inappropriate information due to any software bug or any other reason, we will refund the extra amount we charged within 14 working days after the discovery. You need to let us know about the extra amount charged from you.</p>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header bg-light">
                  <h5 class="mb-0" id="termination">Termination</h5>
                </div>
                <div class="card-body">
                  <p class="mb-0 ps-3">Either you or we may terminate this Agreement upon written notice to the other party of a material breach, or if the other party becomes the subject of a petition in insolvency proceedings, bankruptcy, receivership, liquidation or assignment for the benefit of its creditors.</p>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header bg-light">
                  <h5 class="mb-0" id="rules">Rules and abuse</h5>
                </div>
                <div class="card-body">
                  <h6 class="text-primary">General rules</h6>
                  <p class="fs-0 mb-0 fw-semi-bold">You promise to follow these rules:</p>
                  <ol type="1">
                    <li>You won’t send Spam! By "spam", we mean the definition provided by Spamhaus;</li>
                    <li>You won’t use purchased, rented, or third-party lists of email addresses;</li>
                    <li>You won’t violate our <a href="#!">Acceptable use policy</a>, which is part of this Agreement;</li>
                    <li>If you violate any of these rules, then we may suspend or terminate your account;</li>
                    <li>You will comply with all applicable data protection legislation, including the EU General Data Protection Regulation; and</li>
                    <li>ou may only use our bandwidth for your use of the Service.</li>
                  </ol>
                  <hr class="my-4" />
                  <p class="fs-0 mb-0 fw-semi-bold">You shall:</p>
                  <ol type="1">
                    <li>provide us with all necessary cooperation in relation to the Service and all necessary access to such information as may be required by us in order to provide you with the Service;</li>
                    <li>comply with all applicable laws and regulations with respect to your Content and activities under these Terms;</li>
                    <li>obtain and shall maintain all necessary licenses, consents, and permissions necessary for us, our contractors and agents to perform our obligations under these Terms, including without limitation the Service;</li>
                    <li>ensure that your Amazon Web Services (“AWS”) account complies with the requirements specified by us on our website from time to time; and</li>
                    <li>be solely responsible for maintaining your AWS account necessary for the provision of the Service.</li>
                  </ol>
                  <hr class="my-4" />
                  <h6 class="text-primary">Reporting abuse</h6>
                  <p class="mb-0 ps-3">
                    If you think anyone is violating any of these Terms, please <a href="mailto:info@themewagon.com">notify us</a> immediately. If you received spam you think came from a falcon user, we want to <a href="mailto:info@themewagon.com">hear about it</a>. If you think anyone has posted material that violates any copyrights, then you may<a href="mailto:info@themewagon.com"> notify us</a>.</p>
                  <hr class="my-4" />
                  <h6 class="text-primary">SES and third-party providers</h6>
                  <ol type="1">
                    <li>As a condition of using the Service, you shall enable us to access your AWS account. Subject to the terms of these Terms, you acknowledge and agree that access to AWS, the AWS Simple Email Service (SES) and the AWS Simple Notification Service (SNS) is not provided to you under these Terms, and is subject to a separate agreement between you and Amazon Web Services.</li>
                    <li>falcon facilitates integration with a number of third party services which you can use in relation to your account or your Contents (“Third Party Service”), although we make no warranty as to any ongoing support for any third party service. We make no representation or commitment and shall have no liability or obligation whatsoever in relation to the content or use of, or correspondence with, any Third Party Service. Any contract entered into and any transaction completed by means of your use of the Service with any Third Party Service is between you and the relevant third party, and not us. We recommend that you refer to the third party’s website terms and conditions and privacy policy prior to using the relevant Third Party Service.</li>
                    <li>You acknowledge that the AWS or an operator of a Third Party Service may render ineffective or impair the sending, receipt of viewing of any Content (for example, by breaking links in the Content or removing images from the Content). For the avoidance of doubt, you acknowledge that we shall have no liability to you in respect of any such action. </li>
                    <li>If at any time you cease to have a current SES account in good standing, you will be unable to use the Service. Your obligation to pay for any unpaid invoice fees will remain unaffected.</li>
                  </ol>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header bg-light">
                  <h5 class="mb-0" id="liability">Liability</h5>
                </div>
                <div class="card-body">
                  <h6 class="text-primary">Indemnity</h6>
                  <p class="mb-0 ps-3">You shall defend, indemnify and hold us harmless against claims, actions, proceedings, losses, damages, expenses and costs (including without limitation court costs and reasonable legal fees) arising out of or in connection with your use of the Service (or us taking any action in relation to the Service at your direction), including any claim or action from a recipient of any Content sent by means of the Service.</p>
                  <hr class="my-4" />
                  <h6 class="text-primary">Our responsibility for loss or damage if you are a business</h6>
                  <p class="fs-0 mb-0 fw-semi-bold">Our responsibility for loss or damage if you are a business</p>
                  <ol type="1">
                    <li>arising under or in connection with these Terms;</li>
                    <li>in respect of any use made by you of the Service; and</li>
                    <li>in respect of any representation, statement or tortious act or omission (including negligence) arising under or in connection with these Terms.</li>
                  </ol>
                  <hr class="my-4" />
                  <p class="fs-0 mb-0 fw-semi-bold">Except as expressly and specifically provided in these Terms:</p>
                  <ol type="1">
                    <li>you assume sole responsibility for results obtained from your use of the Service, and for conclusions drawn from such use. We shall have no liability for any damage caused by errors or omissions in any information, instructions or scripts provided to us by you in connection with the Service, or any actions taken by us at your direction;</li>
                    <li>all warranties, representations, conditions and all other terms of any kind whatsoever implied by statute or common law are, to the fullest extent permitted by applicable law, excluded from these Terms; and</li>
                    <li>the Service is provided to you on an “as is” basis.</li>
                  </ol>
                  <hr class="my-4" />
                  <p class="fs-0 mb-0 fw-semi-bold">Nothing in these Terms excludes our liability:</p>
                  <ol type="1">
                    <li>for death or personal injury caused by our negligence; or</li>
                    <li>for fraud or fraudulent misrepresentation.</li>
                  </ol>
                  <hr class="my-4" />
                  <p class="fs-0 mb-0 fw-semi-bold">Subject to section 15.3 above: We shall not be liable whether in tort (including for negligence or breach of statutory duty), contract, misrepresentation, restitution or otherwise for any:</p>
                  <ol type="1">
                    <li>loss of profits,</li>
                    <li>loss of business,</li>
                    <li>depletion of goodwill and/or similar losses,</li>
                    <li>loss or corruption of data or information,</li>
                    <li>pure economic loss, or</li>
                    <li>special, indirect or consequential loss, costs, damages, charges or expenses however arising under these Terms;</li>
                  </ol>
                  <hr class="my-4" />
                  <p class="fs-0 mb-0 fw-semi-bold">Our responsibility for loss or damage if you are a consumer</p>
                  <ol type="1">
                    <li>We are responsible to you for foreseeable loss and damage caused by us. If we fail to comply with these terms, we are responsible for loss or damage you suffer that is a foreseeable result of our breaking this contract or our failing to use reasonable care and skill, but we are not responsible for any loss or damage that is not foreseeable. Loss or damage is foreseeable if either it is obvious that it will happen or if, at the time the contract was made, both we and you knew it might happen, for example, if you discussed it with us during the sales process.</li>
                    <li>We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors; for fraud or fraudulent misrepresentation; for breach of your legal consumer rights in relation to the Service.</li>
                    <li>We are not liable for business losses. If you are a consumer we only supply our services to you for domestic and private use. If you use our service for any commercial, business or resale purpose our liability to you will be limited as set out in Clause 15.</li>
                  </ol>
                  <hr class="my-4" />
                  <p class="fs-0 mb-0 fw-semi-bold">Force majeur</p>
                  <p class="mb-0 ps-3">We won’t be held liable for any delays or failure in performance of any part of the Service, from any cause beyond our control. This includes, but is not limited to, changes to law or regulations, embargoes, fires, earthquakes, floods, strikes, power blackouts, unusually severe weather conditions, and acts of hackers or third-party internet service providers.</p>
                  <hr class="my-4" />
                  <p class="fs-0 mb-0 fw-semi-bold">Data processing term</p>
                  <p class="mb-0 ps-3">
                    To the extent that you are a business and we process personal data on your behalf in providing the Services, the <a href="#!">Data processing terms</a> shall apply and are incorporated into these Terms.</p>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header bg-light">
                  <h5 class="mb-0" id="rights">Rights</h5>
                </div>
                <div class="card-body">
                  <h6 class="text-primary">Proprietary rights owned by us</h6>
                  <p class="mb-0 ps-3">Subject to the limited rights expressly granted in these Terms, we reserve all our rights in and to the Services, including all of our related intellectual property rights (including patents, trademarks, trade secrets, and copyrights). No rights are granted to you under these Terms other than as expressly set forth in these Terms. You will respect our proprietary rights. “falcon” and the “falcon” logo are trademarks belonging to ThemeWagon, Inc. You are not authorized by us to use our trademarks or brand assets without prior permission.</p>
                  <hr class="my-4" />
                  <h6 class="text-primary">Proprietary rights owned by you</h6>
                  <p class="mb-0 ps-3">ou represent and warrant that you either own or have permission to use all of your Content. You retain ownership of your Content. By using the Service you grant us and our agents and subcontractors a license to use your Content in order for us to provide, and ensure proper operation of the Service. You acknowledge and agree that we will have the right to use your Content in an anonymized way (which does not identify you or the recipient) for the purposes of increasing our spam identification techniques.</p>
                  <hr class="my-4" />
                  <h6 class="text-primary">Privacy Policy</h6>
                  <p class="mb-0 ps-3">We may use and disclose your information according to our Privacy Policy. Our Privacy Policy is treated as part of these Terms</p>
                  <hr class="my-4" />
                  <h6 class="text-primary">Waiver</h6>
                  <p class="mb-0 ps-3">Even if we delay in enforcing these terms, we can still enforce them later. If we do not insist immediately that you do anything you are required to do under these terms, or if we delay in taking steps against you in respect of your breaking them, that will not mean that you do not have to do those things and it will not prevent us from taking steps against you at a later date.</p>
                  <hr class="my-4" />
                  <h6 class="text-primary">Survival</h6>
                  <p class="mb-0 ps-3">Any of these terms that expressly or by implication is intended to continue or come into force on or after termination of this Agreement shall continue in full force and effect. Without limitation, clauses 14 Indemnity, 15 Our responsibility for loss or damage Suffered by you if you are a business, 16 Our responsibility for loss or damage suffered by you if you are a consumer, 18 Data processing terms, 28 Third party rights,29 If you are a business – governing law and jurisdiction, and 30 Which laws apply to this contract and where you may bring legal proceedings if you are a consumer shall continue in full force and effect notwithstanding the termination of this Agreement.</p>
                  <hr class="my-4" />
                  <h6 class="text-primary">Severance</h6>
                  <ol type="1">
                    <li>If any provision (or part of a provision) of these Terms is found by any court or administrative body of competent jurisdiction to be invalid, unenforceable or illegal, the other provisions shall remain in force.</li>
                    <li>If any invalid, unenforceable or illegal provision would be valid, enforceable or legal if some part of it were deleted, the provision shall apply with whatever modification is necessary to give effect to the commercial intention of the parties.</li>
                  </ol>
                  <hr class="my-4" />
                  <h6 class="text-primary">Entire agreement</h6>
                  <ol type="1">
                    <li>These Terms and any documents referred to in them constitute the whole agreement between the parties and supersede any previous arrangement, understanding or agreement between them relating to the subject matter they cover</li>
                    <li>Each of the parties acknowledges and agrees that in entering into these Terms it does not rely on any undertaking, promise, assurance, statement, representation, warranty or understanding (whether in writing or not) of any person (whether party to these Terms or not) relating to the subject matter of these Terms, other than as expressly set out in these Terms.</li>
                  </ol>
                  <h6 class="text-primary">Assignment</h6>
                  <ol type="1">
                    <li>You shall not, without our prior written consent of us, assign, transfer, charge, sub-contract or deal in any other manner with all or any of our rights or obligations under these Terms.</li>
                    <li>We may at any time assign, transfer, charge, sub-contract or deal in any other manner with all or any of our rights or obligations under these Terms.</li>
                  </ol>
                  <hr class="my-4" />
                  <h6 class="text-primary">No partnership or agency</h6>
                  <p class="mb-0 ps-3">Nothing in these Terms is intended to or shall operate to create a partnership between the parties, or authorize either party to act as agent for the other, and neither party shall have the authority to act in the name or on behalf of or otherwise to bind the other in any way (including, but not limited to, the making of any representation or warranty, the assumption of any obligation or liability and the exercise of any right or power).</p>
                  <hr class="my-4" />
                  <h6 class="text-primary">Third party rights</h6>
                  <p class="mb-0 ps-3">These Terms do not confer any rights on any person or party other than you and us.</p>
                  <hr class="my-4" />
                  <h6 class="text-primary">If you are a business – Governing Law and Jurisdiction</h6>
                  <ol type="1">
                    <li>These Terms and any disputes or claims arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) are governed by, and construed in accordance with, the laws of the USA.</li>
                    <li>The parties irrevocably agree that the courts of the USA have exclusive jurisdiction to settle any dispute or claim that arises out of or in connection with these Terms or its subject matter or formation (including non-contractual disputes or claims).</li>
                  </ol>
                  <hr class="my-4" />
                  <h6 class="text-primary">Which laws apply to this contract and where you may bring legal proceedings if you are a consumer?</h6>
                  <p class="mb-0 ps-3">These Terms are governed by USA law and you can bring legal proceedings in respect of the products in the USA courts. As a consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident. Nothing in these terms and conditions, including this clause 30, affects your rights as a consumer to rely on such mandatory provisions of local law.</p>
                  <p class="pt-2">Thank you for taking the time to read these Terms.</p>
                  <p>Last update: 04 Nov 2020</p>
                </div>
              </div>
              <div class="card mb-3 mb-lg-0">
                <div class="card-header bg-light">
                  <h5 class="mb-0" id="discalimer"> Discalimer</h5>
                </div>
                <div class="card-body">
                  <h6 class="mb-3 text-primary"> Please read carefully: </h6>

                  <p>
                    THE INFORMATION CONTAINED IN THIS SOFTWARE APPLICATION IS FOR GENERAL INFORMATION PURPOSES ONLY AND SHOULD ONLY BE USED AS A BASIC GUIDE TO CREATE A
                    BUSINESS PLAN, WHILE WE AT AUZIPLAN PTY LTD WILL ENDEAVOR TO KEEP THE INFORMATION UP TO DATE AND CORRECT , WE MAKE NO REPRESENTATION OR WARRANTIES OF ANY KIND , EXPRESSED, IMPLIED,
                    ABOUT THE COMPLETENESS ACCURACY, RELIABILITY OF THIS SOFTWARE APPLICATION.
                  </p>
                  <p class="pt-2">
                    ANY RELIANCE YOU PLACE ON SUCH INFORMATION IS THERFORE STRICTLY AT YOUR OWN RISK.WE THERFORE ADVISE THAT YOU CONSULT WITH YOUR ACCOUNTANT OR FINANCIAL ADVISOR
                    IN REGARD TO THIS SOFTWARE APPLICATION.
                  </p>
                  <p class="pt-2">
                    IN NO EVENT WILL BE BE LIABLE FOR ANY LOSS OR DAMAGE INCLUDING WITHOUT LIMITATION, INDIRECT OR CONSEQUENTIAL LOSS OR DAMAGE, OR ANY LOSS OR DAMAGE WHATSOEVER ARISING FROM LOSS OF DATA OR
                    PROFITS OUT OF, OR IN CONNECTION WITH THE USE FOR THIS APPLICATION.EVERY EFFORT IS MADE TO KEEP THIS SOFTWARE UP TO DATE AND RUNNING SMOOTHLY, HOWEVER,
                    SQUARE PLANS PTY TAKES NO RESPONSIBILITY FOR AND WILL NOT BE LIABLE FOR ANY TECHNICAL ISSUES BEYOND OUR CONTROL.
                  </p>
                  <p class="pt-2">
                    YOUR USE OF THE SITE AND ALL CONTENT FORMING PART OF OR RELATED TO THE SITE, INCLUDING ANY CONTENT YOU UPLOAD OR SUBMIT AND ANY THIRD PARTY SOFTWARE AND CONTENT,
                    ARE AT YOUR SOLE RESPONSIBILITY AND RISK. THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE EXPRESSLY DISCLAIM ALL REPRESENTATIONS,
                    WARRANTIES, OR CONDITIONS OF ANY KIND WITH RESPECT TO THE SITE, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OR
                    CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, COMPLETENESS, PERFORMANCE, SYSTEM INTEGRATION, QUIET ENJOYMENT, TITLE, AND NON-INFRINGEMENT.
                  </p>
                  <p class="pt-2">
                    WE DISCLAIM ANY WARRANTY THAT THE SITE OR ANY CONTENT, INCLUDING WITHOUT LIMITATION ANY THIRD PARTY SOFTWARE AND CONTENT, WILL MEET YOUR REQUIREMENTS OR BE UNINTERRUPTED,
                    TIMELY, SECURE, OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SITE OR THE SERVERS THAT MAKES THE SITE AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.

                  </p>
                  <p class="pt-2">
                    YOU AGREE THAT FROM TIME TO TIME WE MAY REMOVE THE SITE FOR INDEFINITE PERIODS OF TIME WITHOUT NOTICE TO YOU. YOUR ACCESS AND USE OF THE SITE MAY BE INTERRUPTED FROM TIME TO
                    TIME FOR ANY OF SEVERAL REASONS, INCLUDING, WITHOUT LIMITATION, THE MALFUNCTION OF EQUIPMENT, THE FAILURE OF THIRD-PARTY SERVICE PROVIDERS, PERIODIC UPDATING, MAINTENANCE
                    OR REPAIR OF THE SITE OR OTHER ACTIONS THAT WE, IN OUR SOLE DISCRETION, MAY ELECT TO TAKE, AS WELL AS THE MALICIOUS ACTIONS OF HACKERS AND OTHER THIRD PARTIES.

                  </p>
                  <p class="pt-2">
                    WE MAKE NO GUARANTEE REGARDING: (A) THE AMOUNT, TIMING AND DELIVERY OF ANY CLICKS OR IMPRESSIONS WITH RESPECT TO ANY CONTENT (INCLUDING THIRD PARTY CONTENT) OR ADVERTISING ON THE SITE, (B)
                    THE RESPONSE TO OR DEGREE OF INTEREST IN YOUR BUSINESS PLAN; OR (C) THE COMPATIBILITY OF YOUR SOFTWARE, HARDWARE OR CONTENT WITH THE SITE.
                  </p>




                </div>
              </div>
            </div>
            <div class="col-lg-3 ps-lg-2">
              <div class="sticky-sidebar">
                <div class="card sticky-top">
                  <div class="card-header border-bottom">
                    <h6 class="mb-0 fs-0">On this page</h6>
                  </div>
                  <div class="card-body">
                    <div class="terms-sidebar nav flex-column fs--1" id="terms-sidebar">
                      <div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#account">Account</a></div>
                      <div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#subscriptions">Subscriptions</a></div>
                      <div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#termination">Termination</a></div>
                      <div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#rules">Rules and abuse</a></div>
                      <div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#liability">Liability</a></div>
                      <div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#rights">Rights</a></div>
                      <div class="nav-item"><a class="nav-link px-0 py-1 ps-3" href="#discalimer">Discalimer</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>










          </div>




          <!-- ===============================================-->
          <!--    End of Main Content-->
          <!-- ===============================================-->
        </div>
      </div>
    </div>
  </div>





  <div class="offcanvas offcanvas-end settings-panel border-0" id="settings-offcanvas" tabindex="-1" aria-labelledby="settings-offcanvas">
    <div class="offcanvas-header settings-panel-header bg-shape">
      <div class="z-index-1 py-1 light">
        <h5 class="text-white"> <span class="fas fa-palette me-2 fs-0"></span>Settings</h5>
        <p class="mb-0 fs--1 text-white opacity-75"> Set your own customized style</p>
      </div>
      <button class="btn-close btn-close-white z-index-1 mt-0" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body scrollbar-overlay px-card" id="themeController">
      <h5 class="fs-0">Color Scheme</h5>
      <p class="fs--1">Choose the perfect color mode for your app.</p>
      <div class="btn-group d-block w-100 btn-group-navbar-style">
        <div class="row gx-2">
          <div class="col-6">
            <input class="btn-check" id="themeSwitcherLight" name="theme-color" type="radio" value="light" data-theme-control="theme" />
            <label class="btn d-inline-block btn-navbar-style fs--1" for="themeSwitcherLight"> <span class="hover-overlay mb-2 rounded d-block"><img class="img-fluid img-prototype mb-0" src="<?php echo site_url(); ?>template-assets/img/generic/falcon-mode-default.jpg" alt="" /></span><span class="label-text">Light</span></label>
          </div>
          <div class="col-6">
            <input class="btn-check" id="themeSwitcherDark" name="theme-color" type="radio" value="dark" data-theme-control="theme" />
            <label class="btn d-inline-block btn-navbar-style fs--1" for="themeSwitcherDark"> <span class="hover-overlay mb-2 rounded d-block"><img class="img-fluid img-prototype mb-0" src="<?php echo site_url(); ?>template-assets/img/generic/falcon-mode-dark.jpg" alt="" /></span><span class="label-text"> Dark</span></label>
          </div>
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-start"><img class="me-2" src="<?php echo site_url(); ?>template-assets/img/icons/left-arrow-from-left.svg" width="20" alt="" />
          <div class="flex-1">
            <h5 class="fs-0">RTL Mode</h5>
            <p class="fs--1 mb-0">Switch your language direction </p><a class="fs--1" href="../../../documentation/customization/configuration.html">RTL Documentation</a>
          </div>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input ms-0" id="mode-rtl" type="checkbox" data-theme-control="isRTL" />
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-start"><img class="me-2" src="<?php echo site_url(); ?>template-assets/img/icons/arrows-h.svg" width="20" alt="" />
          <div class="flex-1">
            <h5 class="fs-0">Fluid Layout</h5>
            <p class="fs--1 mb-0">Toggle container layout system </p><a class="fs--1" href="../../../documentation/customization/configuration.html">Fluid Documentation</a>
          </div>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input ms-0" id="mode-fluid" type="checkbox" data-theme-control="isFluid" />
        </div>
      </div>
      <hr />
      <div class="d-flex align-items-start"><img class="me-2" src="<?php echo site_url(); ?>template-assets/img/icons/paragraph.svg" width="20" alt="" />
        <div class="flex-1">
          <h5 class="fs-0 d-flex align-items-center">Navigation Position </h5>
          <p class="fs--1 mb-2">Select a suitable navigation system for your web application </p>
          <div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" id="option-navbar-vertical" type="radio" name="navbar" value="vertical" data-page-url="../../../modules/components/navs-and-tabs/vertical-navbar.html" data-theme-control="navbarPosition" />
              <label class="form-check-label" for="option-navbar-vertical">Vertical</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" id="option-navbar-top" type="radio" name="navbar" value="top" data-page-url="../../../modules/components/navs-and-tabs/top-navbar.html" data-theme-control="navbarPosition" />
              <label class="form-check-label" for="option-navbar-top">Top</label>
            </div>
            <div class="form-check form-check-inline me-0">
              <input class="form-check-input" id="option-navbar-combo" type="radio" name="navbar" value="combo" data-page-url="../../../modules/components/navs-and-tabs/combo-navbar.html" data-theme-control="navbarPosition" />
              <label class="form-check-label" for="option-navbar-combo">Combo</label>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h5 class="fs-0 d-flex align-items-center">Vertical Navbar Style</h5>
      <p class="fs--1 mb-0">Switch between styles for your vertical navbar </p>
      <p> <a class="fs--1" href="../../../modules/components/navs-and-tabs/vertical-navbar.html#navbar-styles">See Documentation</a></p>
      <div class="btn-group d-block w-100 btn-group-navbar-style">
        <div class="row gx-2">
          <div class="col-6">
            <input class="btn-check" id="navbar-style-transparent" type="radio" name="navbarStyle" value="transparent" data-theme-control="navbarStyle" />
            <label class="btn d-block w-100 btn-navbar-style fs--1" for="navbar-style-transparent"> <img class="img-fluid img-prototype" src="<?php echo site_url(); ?>template-assets/img/generic/default.png" alt="" /><span class="label-text"> Transparent</span></label>
          </div>
          <div class="col-6">
            <input class="btn-check" id="navbar-style-inverted" type="radio" name="navbarStyle" value="inverted" data-theme-control="navbarStyle" />
            <label class="btn d-block w-100 btn-navbar-style fs--1" for="navbar-style-inverted"> <img class="img-fluid img-prototype" src="<?php echo site_url(); ?>template-assets/img/generic/inverted.png" alt="" /><span class="label-text"> Inverted</span></label>
          </div>
          <div class="col-6">
            <input class="btn-check" id="navbar-style-card" type="radio" name="navbarStyle" value="card" data-theme-control="navbarStyle" />
            <label class="btn d-block w-100 btn-navbar-style fs--1" for="navbar-style-card"> <img class="img-fluid img-prototype" src="<?php echo site_url(); ?>template-assets/img/generic/card.png" alt="" /><span class="label-text"> Card</span></label>
          </div>
          <div class="col-6">
            <input class="btn-check" id="navbar-style-vibrant" type="radio" name="navbarStyle" value="vibrant" data-theme-control="navbarStyle" />
            <label class="btn d-block w-100 btn-navbar-style fs--1" for="navbar-style-vibrant"> <img class="img-fluid img-prototype" src="<?php echo site_url(); ?>template-assets/img/generic/vibrant.png" alt="" /><span class="label-text"> Vibrant</span></label>
          </div>
        </div>
      </div>
      <div class="text-center mt-5"><img class="mb-4" src="<?php echo site_url(); ?>template-assets/img/icons/spot-illustrations/47.png" alt="" width="120" />
        <h5>Like What You See?</h5>
        <p class="fs--1">Get AuziPlan now and create your Business Plan.</p><a class="mb-3 btn btn-primary" href="<?php echo site_url() ?>register" target="_blank">Purchase</a>
      </div>
    </div>
  </div>

  <!--<a class="card setting-toggle" href="#settings-offcanvas" data-bs-toggle="offcanvas">
      <div class="card-body d-flex align-items-center py-md-2 px-2 py-1">
        <div class="bg-soft-primary position-relative rounded-start" style="height:34px;width:28px">
          <div class="settings-popover"><span class="ripple"><span class="fa-spin position-absolute all-0 d-flex flex-center"><span class="icon-spin position-absolute all-0 d-flex flex-center">
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.7369 12.3941L19.1989 12.1065C18.4459 11.7041 18.0843 10.8487 18.0843 9.99495C18.0843 9.14118 18.4459 8.28582 19.1989 7.88336L19.7369 7.59581C19.9474 7.47484 20.0316 7.23291 19.9474 7.03131C19.4842 5.57973 18.6843 4.28943 17.6738 3.20075C17.5053 3.03946 17.2527 2.99914 17.0422 3.12011L16.393 3.46714C15.6883 3.84379 14.8377 3.74529 14.1476 3.3427C14.0988 3.31422 14.0496 3.28621 14.0002 3.25868C13.2568 2.84453 12.7055 2.10629 12.7055 1.25525V0.70081C12.7055 0.499202 12.5371 0.297594 12.2845 0.257272C10.7266 -0.105622 9.16879 -0.0653007 7.69516 0.257272C7.44254 0.297594 7.31623 0.499202 7.31623 0.70081V1.23474C7.31623 2.09575 6.74999 2.8362 5.99824 3.25599C5.95774 3.27861 5.91747 3.30159 5.87744 3.32493C5.15643 3.74527 4.26453 3.85902 3.53534 3.45302L2.93743 3.12011C2.72691 2.99914 2.47429 3.03946 2.30587 3.20075C1.29538 4.28943 0.495411 5.57973 0.0322686 7.03131C-0.051939 7.23291 0.0322686 7.47484 0.242788 7.59581L0.784376 7.8853C1.54166 8.29007 1.92694 9.13627 1.92694 9.99495C1.92694 10.8536 1.54166 11.6998 0.784375 12.1046L0.242788 12.3941C0.0322686 12.515 -0.051939 12.757 0.0322686 12.9586C0.495411 14.4102 1.29538 15.7005 2.30587 16.7891C2.47429 16.9504 2.72691 16.9907 2.93743 16.8698L3.58669 16.5227C4.29133 16.1461 5.14131 16.2457 5.8331 16.6455C5.88713 16.6767 5.94159 16.7074 5.99648 16.7375C6.75162 17.1511 7.31623 17.8941 7.31623 18.7552V19.2891C7.31623 19.4425 7.41373 19.5959 7.55309 19.696C7.64066 19.7589 7.74815 19.7843 7.85406 19.8046C9.35884 20.0925 10.8609 20.0456 12.2845 19.7729C12.5371 19.6923 12.7055 19.4907 12.7055 19.2891V18.7346C12.7055 17.8836 13.2568 17.1454 14.0002 16.7312C14.0496 16.7037 14.0988 16.6757 14.1476 16.6472C14.8377 16.2446 15.6883 16.1461 16.393 16.5227L17.0422 16.8698C17.2527 16.9907 17.5053 16.9504 17.6738 16.7891C18.7264 15.7005 19.4842 14.4102 19.9895 12.9586C20.0316 12.757 19.9474 12.515 19.7369 12.3941ZM10.0109 13.2005C8.1162 13.2005 6.64257 11.7893 6.64257 9.97478C6.64257 8.20063 8.1162 6.74905 10.0109 6.74905C11.8634 6.74905 13.3792 8.20063 13.3792 9.97478C13.3792 11.7893 11.8634 13.2005 10.0109 13.2005Z" fill="#2A7BE4"></path>
            </svg></span></span></span></div>
        </div><small class="text-uppercase text-primary fw-bold bg-soft-primary py-2 pe-2 ps-1 rounded-end">customize</small>
      </div>
    </a>-->


  <!-- ===============================================-->
  <!--    JavaScripts-->
  <!-- ===============================================-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="<?php echo site_url(); ?>template-vendors/popper/popper.min.js"></script>
  <script src="<?php echo site_url(); ?>template-vendors/bootstrap/bootstrap.min.js"></script>
  <script src="<?php echo site_url(); ?>template-vendors/anchorjs/anchor.min.js"></script>
  <script src="<?php echo site_url(); ?>template-vendors/is/is.min.js"></script>
  <script src="<?php echo site_url(); ?>template-vendors/fontawesome/all.min.js"></script>
  <script src="<?php echo site_url(); ?>template-vendors/lodash/lodash.min.js"></script>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
  <script src="<?php echo site_url(); ?>template-vendors/list.js/list.min.js"></script>
  <script src="<?php echo site_url(); ?>template-assets/js/theme.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
  <script src="<?php echo site_url(); ?>custom-assets/definations.js?version=<?php echo rand(11111, 55555); ?>"></script>
  <script src="<?php echo site_url(); ?>custom-assets/global.js?version=<?php echo rand(11111, 55555); ?>"></script>
  <script src="<?php echo site_url(); ?>custom-assets/register.js?version=<?php echo rand(11111, 55555); ?>"></script>

</body>

</html>