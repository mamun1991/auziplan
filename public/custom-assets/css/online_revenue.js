
        function online_revenue(){
            var url = base_url+"/user/get_user_currency";
            var param = "";
            var cur;

            $.post(url, param,function(result) {

                cur = result; 
                var max_view = $('#max_view').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var percent_purch = $('#percent_purch').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var no_days = $('#no_days').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var no_purchase = $('#no_purchase').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var no_reorder = $('#no_reorder').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
                var product_price = $('#product_price').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');          
                var projected_cost = $('#projected_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');                
                var sales_increase = $('#sales_increase').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');  
                var avg_purchase = $('#avg_purchase').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var avg_cost = $('#avg_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   
                var customer_cost = $('#customer_cost').val().replace(/\,|\$|\€|\₹|\£|\%/g, '');   


                var total_online_revenue_per_month;
                var total_online_revenue_per_year_1;
                var total_online_revenue_per_year_2;
                var total_online_revenue_per_year_3;


                // 1, avg_purchase = no_purchase * product_price
                avg_purchase = parseInt(no_purchase) * parseInt(product_price);
                if(avg_purchase > 0){
                    $('#avg_purchase').val(cur+""+parseFloat(avg_purchase).toLocaleString());
                }
                

                // 2, avg_cost = product_price * projected_cost
                avg_cost = parseInt(no_purchase) * parseInt(projected_cost);
                if(avg_cost > 0){
                    $('#avg_cost').val(cur+""+parseFloat(avg_cost).toLocaleString());
                }


                // 3, customer_cost = no_purchase + no_reorder * avg_cost
                customer_cost =  (parseInt(no_purchase) + parseInt(no_reorder)) *  parseInt(avg_cost);
                if(customer_cost > 0){     
                    $('#customer_cost').val(cur+""+parseFloat(customer_cost).toLocaleString());

                }

                    
            })
        }


            $('.handlecurrencyformat').find('input[type="text"]').focus(function() {
            var focusvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
            if ($(this).hasClass('currencySign')) {
                $(this).val(focusvalue);
            } else if ($(this).hasClass('numberSign')) {
                $(this).val(focusvalue);
            }else if ($(this).hasClass('percentSign')) {
                $(this).val(focusvalue);
            }
            });


            $('.handlecurrencyformat').find('input[type="text"]').focusout(function() {
            var focusoutvalue = $(this).val().replace(/\,|\$|\€|\₹|\£|\%/g, '');
            if ($(this).hasClass('currencySign')) {
                if(focusoutvalue != ""){
                    $(this).val("$" + '' + parseInt(focusoutvalue).toLocaleString());
                }
            } else if ($(this).hasClass('numberSign')) {
                //console.log('here'+focusoutvalue.toLocaleString());
                $(this).val(parseInt(focusoutvalue).toLocaleString());
            }else if ($(this).hasClass('percentSign')) {
                $(this).val(focusoutvalue + '%');
            }
            });