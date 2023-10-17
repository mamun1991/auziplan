<link rel="stylesheet" href="<?php echo site_url(); ?>custom-assets/sweetalerts/sweetalert2.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="<?php echo site_url(); ?>custom-assets/sweetalerts/sweetalert2.all.min.js"></script>
<script src="<?php echo site_url(); ?>custom-assets/sweetalerts/sweetalert2.min.js"></script>

<script type='text/javascript'>

    $(document).ready(function(){

        (async () => {
                const { value: accept } = await Swal.fire({
                title: 'Payment Successful',
                icon: 'success',
                html:
                        'Thank you for your payment. Proceed to Dashboard',
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> View Dashboard ',
                })

                if (accept) {
                    window.location.replace('http://localhost/auziplan/user/companysetup');
                }

            })()
    });

</script>
