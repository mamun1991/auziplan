
 

<style>
.footer{
   	position: absolute;
    left: 0;
    bottom: 0;
    height: 100px;
    width: 100%;
	padding: 32px;
}    
</style>

<!-- ===============================================-->
<!--   Footer  Details-->
<!-- ===============================================-->

<footer class="footer" style="display:none">
	<hr class="my-0 text-600 opacity-25" />
		<div class="container py-3">
			<div class="row justify-content-between fs--1">
			<div class="col-12 col-sm-auto text-center">
				<p class="mb-0 text-600">Thank you for using AuziPlan to create your business plan<a href="https://auziplan.com"></a>
				
				</p>
			</div>
			<div class="col-12 col-sm-auto text-center">
			<p class="mb-0 text-600"><a href="https://auziplan.com"> <img src='<?php echo site_url(); ?>custom-assets/img/favicons/favicon-16x16.png'/></span> AuziPlan v1.0.0</a>
				&copy; 2005-<script type="text/javascript">document.write(new Date().getFullYear());</script> 
				</p>
			</div>
		</div>
	</div>
</footer>
    

<!-- ===============================================-->
<!--   End Footer  Details-->
<!-- ===============================================-->

</div>

<!-- ===============================================-->
<!--   Modal  Details-->
<!-- ===============================================-->

<div class="modal fade" id="authentication-modal" tabindex="-1" role="dialog" aria-labelledby="authentication-modal-label" aria-hidden="true">
	<div class="modal-dialog mt-6" role="document">
		<div class="modal-content border-0">
			<div class="modal-header px-5 position-relative modal-shape-header bg-shape">
				<div class="position-relative z-index-1 light">
					<h4 class="mb-0 text-white" id="authentication-modal-label">Register</h4>
					<p class="fs--1 mb-0 text-white">Please create your free Falcon account</p>
				</div>
				<button class="btn-close btn-close-white position-absolute top-0 end-0 mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body py-4 px-5">
					<form>
						<div class="mb-1">
							<label class="form-label" for="modal-auth-name">Name</label>
							<input class="form-control" type="text" autocomplete="on" id="modal-auth-name" />
						</div>
						<div class="mb-1">
							<label class="form-label" for="modal-auth-email">Email address</label>
							<input class="form-control" type="email" autocomplete="on" id="modal-auth-email" />
						</div>
						<div class="row gx-2">
						<div class="mb-1 col-sm-6">
							<label class="form-label" for="modal-auth-password">Password</label>
							<input class="form-control" type="password" autocomplete="on" id="modal-auth-password" />
						</div>
						<div class="mb-1 col-sm-6">
							<label class="form-label" for="modal-auth-confirm-password">Confirm Password</label>
							<input class="form-control" type="password" autocomplete="on" id="modal-auth-confirm-password" />
						</div>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="checkbox" id="modal-auth-register-checkbox" />
							<label class="form-label" for="modal-auth-register-checkbox">I accept the <a href="#!">terms </a>and <a href="#!">privacy policy</a></label>
						</div>
						<div class="mb-1">
							<button class="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Register</button>
						</div>
					</form>
					<div class="position-relative mt-5">
						<hr class="bg-300" />
						<div class="divider-content-center">or register with</div>
					</div>
					<div class="row g-2 mt-2">
						<div class="col-sm-6"><a class="btn btn-outline-google-plus btn-sm d-block w-100" href="#"><span class="fab fa-google-plus-g me-2" data-fa-transform="grow-8"></span> google</a></div>
						<div class="col-sm-6"><a class="btn btn-outline-facebook btn-sm d-block w-100" href="#"><span class="fab fa-facebook-square me-2" data-fa-transform="grow-8"></span> facebook</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- ===============================================-->
<!--   End Modal  Details-->
<!-- ===============================================-->

</main>
<!-- ===============================================-->
<!--    End of Main Content-->
<!-- ===============================================-->

<?php echo view('other-layouts/rightbar'); ?>

<!-- ===============================================-->
<!--    JavaScripts-->
<!-- ===============================================-->



    <script src="<?php echo site_url(); ?>template-vendors/is/is.min.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/leaflet/leaflet.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/leaflet.markercluster/leaflet.markercluster.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/leaflet.tilelayer.colorfilter/leaflet-tilelayer-colorfilter.min.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/countup/countUp.umd.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/echarts/echarts.min.js"></script>
    <script src="<?php echo site_url(); ?>template-assets/data/world.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/dayjs/dayjs.min.js"></script>
    <script src="<?php echo site_url(); ?>template-assets/js/flatpickr.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/fontawesome/all.min.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/lodash/lodash.min.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
    <script src="<?php echo site_url(); ?>template-vendors/list.js/list.min.js"></script>
		<script src="<?php echo site_url(); ?>template-vendors/anchorjs/anchor.min.js"></script>
    <script src="<?php echo site_url(); ?>template-assets/js/theme.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/lottie/lottie.min.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/validator/validator.min.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/prism/prism.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/fontawesome/all.min.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/lodash/lodash.min.js"></script>
		<script src="<?php echo site_url(); ?>template-vendors/popper/popper.min.js"></script>
		<script src="<?php echo site_url(); ?>template-vendors/bootstrap/bootstrap.min.js"></script>
		
	<!-- <script src="<?php echo site_url(); ?>template-vendors/dropzone/dropzone.min.js"></script> -->


	<script src="<?php echo site_url(); ?>template-assets/js/theme.js"></script>
	<script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>

	<script src="<?php echo site_url(); ?>custom-assets/sweetalerts/sweetalert2.all.min.js"></script>
	<script src="<?php echo site_url(); ?>custom-assets/sweetalerts/sweetalert2.min.js"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
	<script src="<?php echo site_url(); ?>custom-assets/definations.js?version=<?php echo rand(11111,55555); ?>"></script>
	<script src="<?php echo site_url(); ?>custom-assets/global.js?version=<?php echo rand(11111,55555); ?>"></script>
	<!-- <script src="<?php echo site_url(); ?>template-vendors/dropzone/dropzone.min.js"></script> -->
	<?php if (isset($controller)) { ?>
		<script src="<?php echo site_url(); ?>custom-assets/<?php echo $controller; ?>.js?version=<?php echo rand(11111,55555); ?>"></script>
	<?php } ?>
			




    <script src="<?php echo site_url(); ?>template-assets/js/config.js"></script>
    <script src="<?php echo site_url(); ?>template-vendors/overlayscrollbars/OverlayScrollbars.min.js"></script>

	<!--<script src="<?php echo site_url(); ?>template-vendors/tinymce/tinymce.min.js"></script>-->



	<!-- ===============================================-->
	<!--    From Current Project JavaScripts-->
	<!-- ===============================================-->

	<script src="<?php echo site_url(); ?>custom-assets/plugins/carhartl-jquery-cookie-92b7715/jquery.cookie.js"></script>
	<script src="<?php echo site_url(); ?>custom-assets/plugins/tinymce/tinymce.min.js"></script>
	<script src="<?php echo site_url(); ?>custom-assets/js/editor-tinymce.js"></script>
	<script src="<?php echo site_url(); ?>custom-assets/js/planing_setup.js"></script>





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
	</script>
	<!-- <link href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css" rel="stylesheet" > -->

    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
    <!-- <script src="<?php echo site_url(); ?>template-vendors/list.js/list.min.js"></script> -->

	<!-- <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script> -->


	<!-- =============================================================-->
		<!--   Setting For Uploading image Details-->
	<!-- =============================================================-->


	<script type="text/javascript">
		//Dropzone.autoDiscover = false;
			$(document).ready(function(){

			// $("#myDrop").dropzone({

            //     url: "<?php echo site_url().'upoadfile/dropzoneupload' ?>",
            //     success: function (file, response) {
            //         var imgName = response;
            //         file.previewElement.classList.add("dz-success");
            //         console.log("Successfully uploaded :" + imgName);
            //     },
            //     error: function (file, response) {
            //         file.previewElement.classList.add("dz-error");
            //     },
            //     sending: function(file, xhr, formData){
            //         formData.append('id', '5');
            //     }
            // });

            // $("#myDrop").dropzone({
            //     paramName: 'photos',
            //     url: '<?php //echo site_url().'upoadfile/dropzoneupload' ?>',
            //     dictDefaultMessage: "Drag your images",
            //     clickable: true,
            //     enqueueForUpload: true,
            //     maxFilesize: 1,
            //     uploadMultiple: false,
            //     addRemoveLinks: true
            // });

			// start list table

			// var options = {
			// valueNames: [ 'name', 'born' ]
			// };

			// var userList = new List('users', options);

			// var values = [
			// 	{ 
			// 		name: 'Jonny', 
			// 		born:'Stockholm',
			// 	}
			// ];

			// var options = {
			// 	valueNames: [ 'name', 'city' ],
			// 	item: '<li><h3 class="name"></h3><p class="city"></p></li>'
			// };

			// end list table

        });
    </script>


	<!-- =============================================================-->
		<!--   Setting Custom Help Popups Details-->
	<!-- =============================================================-->

	<script type="text/javascript">

	// Popovers
		$(function () {

		    $("[data-toggle=popover]").popover({
			html: true,
			content: function () {
			    var content = $(this).attr("data-popover-content");
			    return $(content).children(".popover-body").html();
			},
			title: function () {
			    var title = $(this).attr("data-popover-content");
			    return $(title).children(".popover-heading").html();
			}
		    });

		});

		$('body').on('click', function (e) {
		    //did not click a popover toggle, or icon in popover toggle, or popover
		    if ($(e.target).data('toggle') !== 'popover' && $(e.target).parents('[data-toggle="popover"]').length === 0
			    && $(e.target).parents('.popover.in').length === 0) {
			(($('[data-toggle="popover"]').popover('hide').data('bs.popover') || {}).inState || {}).click = false;

		    }

		});

   </script>

	<!-- =============================================================-->
		<!--   Setting Custom Background Image For PFD Reports Details-->
	<!-- =============================================================-->


	<script type="text/javascript">

  		// Get Custom Uploaded Image For Pdf
		    $(document).on('change', '#customPdfImage', function (e) {
			if (this.files && this.files[0]) {
			    var reader = new FileReader();
			    reader.onload = function (e) {
				$('#custom_image_pdf').remove();
				$('#pdfImageGallery').append("<div class='col-lg-3 col-md-3 col-sm-3' id='custom_image_pdf'>\n\
					<div class='card card-cutom-style-dashboard_print text-left'><img src=" + e.target.result + " height='350' class='card-img-top' alt='...''>\n\
					<div class='card-body text-center'><h5 class='card-title'>Custom</h5><input type='radio' name='pdfImage' value='' checked>\n\
					</div>\n\
				</div>\n\
			</div>");
			};
			    reader.readAsDataURL(this.files[0]);
			}
		    });
		    // Upload Background Image For Pdf
		    $("#pdfImageForm").submit(function (e) {
			e.preventDefault();
			var formData = new FormData(this);
			$.ajax({
			    url: siteUrl + "Company_setup/uploadPdfImage",
			    type: 'POST',
			    data: formData,
			    dataType: 'JSON',
			    success: function (data) {
				if (data.status === true) {
				    $('#photo_gallery').modal('hide');
				    location.href = siteUrl + '/Dashboard/my_plan_pdf';
				} else {

				}
			    },
			    cache: false,
			    contentType: false,
			    processData: false
			});
		    });
	

 	</script>
	<script>


	$(document).on("click", ".dtpickdate" , function() {

		$(this).datetimepicker({timepicker:false, format:"Y-m-d"}).focus();

	});

	</script>


	<!-- =============================================================-->

	<!--   Details
		<script type="text/javascript">
		</script>
	-->
	<!-- =============================================================-->

</body>

</html>