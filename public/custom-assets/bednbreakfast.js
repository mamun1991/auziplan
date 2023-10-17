
// $('#accession_no').on('keyup', function () {
//     var accession = $(this).val();
//     if (accession != '') {
//         $.ajax({
//             url: "<?= base_url('library/FindDuplicateAccessionNumber') ?>",
//             type: 'POST',
//             dataType: 'JSON',
//             data: {
//                 accession: accession,
//             },
//             success: function (data) {
//                 if (data.status == 1) {
//                     $('.accessionerror').html('<span style="color:red;">This accession no. is already registerd. </span>');
//                     $("#submitbutton").attr("disabled", true);
//                 } else {
//                     $('.accessionerror').html('');
//                     $("#submitbutton").attr("disabled", false);
//                 }
//             }
//         });
//     } else {
//         $('.accessionerror').html('');
//         $("#submitbutton").attr("disabled", false);
//     }

// });

$('#highseasony1, #midseasony1, #lowseasony1').on('keyup', function () {
    YearWiseoccupancy();
    DaysOpenSum();
    OtherRevenue();
});

function YearWiseoccupancy(){
    let highseasony1 = ($('#highseasony1').val()!='')?$('#highseasony1').val():0;
    let midseasony1 = ($('#midseasony1').val()!='')?$('#midseasony1').val():0;
    let lowseasony1 =($('#lowseasony1').val()!='')?$('#lowseasony1').val():0;

    //$("#highseasony4").html(Math.round(((Number(highseasony5)/100)+0.1)*100));
    //$("#highseasony3").html(Math.round(((Number(highseasony5)/100)+0.2)*100));
    //$("#highseasony2").html(Math.round(((Number(highseasony5)/100)+0.3)*100));
    //$("#highseasony1").html(Math.round(((Number(highseasony5)/100)+0.4)*100));


    //$("#midseasony4").html(Math.round(((Number(midseasony5)/100)+0.1)*100));
    //$("#midseasony3").html(Math.round(((Number(midseasony5)/100)+0.2)*100));
    //$("#midseasony2").html(Math.round(((Number(midseasony5)/100)+0.3)*100));
    //$("#midseasony1").html(Math.round(((Number(midseasony5)/100)+0.4)*100));





    $("#highseasony2").html(Math.round(((Number(highseasony1)/100)+0.50)*100));
    $("#highseasony3").html(Math.round(((Number(highseasony1)/100)+0.50)*100));
    $("#highseasony4").html(Math.round(((Number(highseasony1)/100)+0.50)*100));
    $("#highseasony5").html(Math.round(((Number(highseasony1)/100)+0.50)*100));



    $("#midseasony2").html(Math.round(((Number(midseasony1)/100)+0.50)*100));
    $("#midseasony3").html(Math.round(((Number(midseasony1)/100)+0.50)*100));
    $("#midseasony4").html(Math.round(((Number(midseasony1)/100)+0.50)*100));
    $("#midseasony5").html(Math.round(((Number(midseasony1)/100)+0.50)*100));



    $("#lowseasony2").html(Math.round(((Number(lowseasony1)/100)+0.50)*100));
    $("#lowseasony3").html(Math.round(((Number(lowseasony1)/100)+0.50)*100));
    $("#lowseasony4").html(Math.round(((Number(lowseasony1)/100)+0.50)*100));
    $("#lowseasony5").html(Math.round(((Number(lowseasony1)/100)+0.50)*100));




    DaysOpenSum();
}


$('#highseasondaysopen, #midseasondaysopen, #lowseasondaysopen').on('keyup', function () {
    YearWiseoccupancy();
    DaysOpenSum();
    OtherRevenue();
    
});

function DaysOpenSum() {
    let highseasondaysopen = $('#highseasondaysopen').val();
    let midseasondaysopen = $('#midseasondaysopen').val();
    let lowseasondaysopen = $('#lowseasondaysopen').val();
    let rooms = $('#rooms').val();

    let sum = Number(highseasondaysopen)+Number(midseasondaysopen)+Number(lowseasondaysopen);

    $("#days_open").html(sum);

    $("#room_night").html(Number(rooms)*Number(sum));rooms

    $("#result_highseason_roomnight").html(Number(highseasondaysopen)*Number(rooms));
    $("#result_midseason_roomnight").html(Number(midseasondaysopen)*Number(rooms));
    $("#result_lowseason_roomnight").html(Number(lowseasondaysopen)*Number(rooms));

    $("#result_highseason_roomnighty1").html(Math.round((Number($("#result_highseason_roomnight").html()))*Number($("#highseasony1").val())/100));
    $("#result_highseason_roomnighty2").html(Math.round((Number($("#result_highseason_roomnight").html()))*Number($("#highseasony2").html())/100));
    $("#result_highseason_roomnighty3").html(Math.round((Number($("#result_highseason_roomnight").html()))*Number($("#highseasony3").html())/100));
    $("#result_highseason_roomnighty4").html(Math.round((Number($("#result_highseason_roomnight").html()))*Number($("#highseasony4").html())/100));
    $("#result_highseason_roomnighty5").html(Math.round((Number($("#result_highseason_roomnight").html()))*Number($("#highseasony5").html())/100));

    $("#result_midseason_roomnighty1").html(Math.round((Number($("#result_midseason_roomnight").html()))*Number($("#midseasony1").val())/100));
    $("#result_midseason_roomnighty2").html(Math.round((Number($("#result_midseason_roomnight").html()))*Number($("#midseasony2").html())/100));
    $("#result_midseason_roomnighty3").html(Math.round((Number($("#result_midseason_roomnight").html()))*Number($("#midseasony3").html())/100));
    $("#result_midseason_roomnighty4").html(Math.round((Number($("#result_midseason_roomnight").html()))*Number($("#midseasony4").html())/100));
    $("#result_midseason_roomnighty5").html(Math.round((Number($("#result_midseason_roomnight").html()))*Number($("#midseasony5").html())/100));
    
    $("#result_lowseason_roomnighty1").html(Math.round((Number($("#result_lowseason_roomnight").html()))*Number($("#lowseasony1").val())/100));
    $("#result_lowseason_roomnighty2").html(Math.round((Number($("#result_lowseason_roomnight").html()))*Number($("#lowseasony2").html())/100));
    $("#result_lowseason_roomnighty3").html(Math.round((Number($("#result_lowseason_roomnight").html()))*Number($("#lowseasony3").html())/100));
    $("#result_lowseason_roomnighty4").html(Math.round((Number($("#result_lowseason_roomnight").html()))*Number($("#lowseasony4").html())/100));
    $("#result_lowseason_roomnighty5").html(Math.round((Number($("#result_lowseason_roomnight").html()))*Number($("#lowseasony5").html())/100));

    result_midseason_roomnighty5

    $("#total_daysopen_roomnight").html(Number($("#result_highseason_roomnight").html())+Number($("#result_midseason_roomnight").html())+Number($("#result_lowseason_roomnight").html()));
    $("#total_daysopen_roomnight_y1").html(Number($("#result_highseason_roomnighty1").html())+Number($("#result_midseason_roomnighty1").html())+Number($("#result_lowseason_roomnighty1").html()));
    $("#total_daysopen_roomnight_y2").html(Number($("#result_highseason_roomnighty2").html())+Number($("#result_midseason_roomnighty2").html())+Number($("#result_lowseason_roomnighty2").html()));
    $("#total_daysopen_roomnight_y3").html(Number($("#result_highseason_roomnighty3").html())+Number($("#result_midseason_roomnighty3").html())+Number($("#result_lowseason_roomnighty3").html()));
    $("#total_daysopen_roomnight_y4").html(Number($("#result_highseason_roomnighty4").html())+Number($("#result_midseason_roomnighty4").html())+Number($("#result_lowseason_roomnighty4").html()));
    $("#total_daysopen_roomnight_y5").html(Number($("#result_highseason_roomnighty5").html())+Number($("#result_midseason_roomnighty5").html())+Number($("#result_lowseason_roomnighty5").html()));
}



$('#rate_highseason_y1, #rate_highseason_y2, #rate_highseason_y3, #rate_highseason_y4,#rate_highseason_y5, #rate_midseason_y1, #rate_midseason_y2, #rate_midseason_y3,#rate_midseason_y4,#rate_midseason_y5,#rate_lowseason_y1, #rate_lowseason_y2, #rate_lowseason_y3,#rate_lowseason_y4,#rate_lowseason_y5 ').on('keyup', function () {
    RevenueCalculation();
    OtherRevenue();
    
});

function RevenueCalculation(){
    let rate_highseason_y1 = $('#rate_highseason_y1').val();
    let rate_highseason_y2 = $('#rate_highseason_y2').val();
    let rate_highseason_y3 = $('#rate_highseason_y3').val();
    let rate_highseason_y4 = $('#rate_highseason_y4').val();
    let rate_highseason_y5 = $('#rate_highseason_y5').val();

    let rate_midseason_y1 = $('#rate_midseason_y1').val();
    let rate_midseason_y2 = $('#rate_midseason_y2').val();
    let rate_midseason_y3 = $('#rate_midseason_y3').val();
    let rate_midseason_y4 = $('#rate_midseason_y4').val();
    let rate_midseason_y5 = $('#rate_midseason_y5').val();


    let rate_lowseason_y1 = $('#rate_lowseason_y1').val();
    let rate_lowseason_y2 = $('#rate_lowseason_y2').val();
    let rate_lowseason_y3 = $('#rate_lowseason_y3').val();
    let rate_lowseason_y4 = $('#rate_lowseason_y4').val();
    let rate_lowseason_y5 = $('#rate_lowseason_y5').val();


    $("#revenue_highseason_y1").html(Math.round(Number($("#result_highseason_roomnighty1").html())*Number(rate_highseason_y1)));
    $("#revenue_highseason_y2").html(Math.round(Number($("#result_highseason_roomnighty2").html())*Number(rate_highseason_y2)));
    $("#revenue_highseason_y3").html(Math.round(Number($("#result_highseason_roomnighty3").html())*Number(rate_highseason_y3)));
    $("#revenue_highseason_y4").html(Math.round(Number($("#result_highseason_roomnighty4").html())*Number(rate_highseason_y4)));
    $("#revenue_highseason_y5").html(Math.round(Number($("#result_highseason_roomnighty5").html())*Number(rate_highseason_y5)));

    $("#revenue_midseason_y1").html(Math.round(Number($("#result_midseason_roomnighty1").html())*Number(rate_midseason_y1)));
    $("#revenue_midseason_y2").html(Math.round(Number($("#result_midseason_roomnighty2").html())*Number(rate_midseason_y2)));
    $("#revenue_midseason_y3").html(Math.round(Number($("#result_midseason_roomnighty3").html())*Number(rate_midseason_y3)));
    $("#revenue_midseason_y4").html(Math.round(Number($("#result_midseason_roomnighty4").html())*Number(rate_midseason_y4)));
    $("#revenue_midseason_y5").html(Math.round(Number($("#result_midseason_roomnighty5").html())*Number(rate_midseason_y5)));

    $("#revenue_lowseason_y1").html(Math.round(Number($("#result_lowseason_roomnighty1").html())*Number(rate_lowseason_y1)));
    $("#revenue_lowseason_y2").html(Math.round(Number($("#result_lowseason_roomnighty2").html())*Number(rate_lowseason_y2)));
    $("#revenue_lowseason_y3").html(Math.round(Number($("#result_lowseason_roomnighty3").html())*Number(rate_lowseason_y3)));
    $("#revenue_lowseason_y4").html(Math.round(Number($("#result_lowseason_roomnighty4").html())*Number(rate_lowseason_y4)));
    $("#revenue_lowseason_y5").html(Math.round(Number($("#result_lowseason_roomnighty5").html())*Number(rate_lowseason_y5)));


    $("#total_room_revenue_y1").html(Number($("#revenue_highseason_y1").html())+Number($("#revenue_midseason_y1").html())+Number($("#revenue_lowseason_y1").html()));
    $("#total_room_revenue_y2").html(Number($("#revenue_highseason_y2").html())+Number($("#revenue_midseason_y2").html())+Number($("#revenue_lowseason_y2").html()));
    $("#total_room_revenue_y3").html(Number($("#revenue_highseason_y3").html())+Number($("#revenue_midseason_y3").html())+Number($("#revenue_lowseason_y3").html()));
    $("#total_room_revenue_y4").html(Number($("#revenue_highseason_y4").html())+Number($("#revenue_midseason_y4").html())+Number($("#revenue_lowseason_y4").html()));
    $("#total_room_revenue_y5").html(Number($("#revenue_highseason_y5").html())+Number($("#revenue_midseason_y5").html())+Number($("#revenue_lowseason_y5").html()));
    OtherRevenue();
}



$('#food_percentage, #drink_percentage').on('keyup', function () {
    OtherRevenue();
    
    
});

function OtherRevenue(){
    let food_percentage = $('#food_percentage').val();
    let drink_percentage = $('#drink_percentage').val();

    $("#food_revenue_y1").html(Math.round(Number($("#total_room_revenue_y1").html())*(Number(food_percentage)/100)));
    $("#food_revenue_y2").html(Math.round(Number($("#total_room_revenue_y2").html())*(Number(food_percentage)/100)));
    $("#food_revenue_y3").html(Math.round(Number($("#total_room_revenue_y3").html())*(Number(food_percentage)/100)));
    $("#food_revenue_y4").html(Math.round(Number($("#total_room_revenue_y4").html())*(Number(food_percentage)/100)));
    $("#food_revenue_y5").html(Math.round(Number($("#total_room_revenue_y5").html())*(Number(food_percentage)/100)));


    
    $("#drink_revenue_y1").html(Math.round(Number($("#total_room_revenue_y1").html())*(Number(drink_percentage)/100)));
    $("#drink_revenue_y2").html(Math.round(Number($("#total_room_revenue_y2").html())*(Number(drink_percentage)/100)));
    $("#drink_revenue_y3").html(Math.round(Number($("#total_room_revenue_y3").html())*(Number(drink_percentage)/100)));
    $("#drink_revenue_y4").html(Math.round(Number($("#total_room_revenue_y4").html())*(Number(drink_percentage)/100)));
    $("#drink_revenue_y5").html(Math.round(Number($("#total_room_revenue_y5").html())*(Number(drink_percentage)/100)));

    $("#total_other_revenue_y1").html(Number($("#food_revenue_y1").html())+Number($("#drink_revenue_y1").html()));
    $("#total_other_revenue_y2").html(Number($("#food_revenue_y2").html())+Number($("#drink_revenue_y2").html()));
    $("#total_other_revenue_y3").html(Number($("#food_revenue_y3").html())+Number($("#drink_revenue_y3").html()));
    $("#total_other_revenue_y4").html(Number($("#food_revenue_y4").html())+Number($("#drink_revenue_y4").html()));
    $("#total_other_revenue_y5").html(Number($("#food_revenue_y5").html())+Number($("#drink_revenue_y5").html()));


    $("#total_revenue_y1").html(Number($("#total_other_revenue_y1").html())+Number($("#total_room_revenue_y1").html()));
    $("#total_revenue_y2").html(Number($("#total_other_revenue_y2").html())+Number($("#total_room_revenue_y2").html()));
    $("#total_revenue_y3").html(Number($("#total_other_revenue_y3").html())+Number($("#total_room_revenue_y3").html()));
    $("#total_revenue_y4").html(Number($("#total_other_revenue_y4").html())+Number($("#total_room_revenue_y4").html()));
    $("#total_revenue_y5").html(Number($("#total_other_revenue_y5").html())+Number($("#total_room_revenue_y5").html()));


    $("#avg_daily_income_y1").html(Math.round(Number($("#total_revenue_y1").html())/365));
    $("#avg_daily_income_y2").html(Math.round(Number($("#total_revenue_y2").html())/365));
    $("#avg_daily_income_y3").html(Math.round(Number($("#total_revenue_y3").html())/365));
    $("#avg_daily_income_y4").html(Math.round(Number($("#total_revenue_y4").html())/365));
    $("#avg_daily_income_y5").html(Math.round(Number($("#total_revenue_y5").html())/365));

    $("#avg_occuoancy_y1").html(Math.round(Number($("#total_daysopen_roomnight_y1").html())/(Number($("#rooms").val())*365)*100));
    $("#avg_occuoancy_y2").html(Math.round(Number($("#total_daysopen_roomnight_y2").html())/(Number($("#rooms").val())*365)*100));
    $("#avg_occuoancy_y3").html(Math.round(Number($("#total_daysopen_roomnight_y3").html())/(Number($("#rooms").val())*365)*100));
    $("#avg_occuoancy_y4").html(Math.round(Number($("#total_daysopen_roomnight_y4").html())/(Number($("#rooms").val())*365)*100));
    $("#avg_occuoancy_y5").html(Math.round(Number($("#total_daysopen_roomnight_y5").html())/(Number($("#rooms").val())*365)*100));

    $("#avg_occupied_roomrate_y1").html(Math.round(Number($("#total_daysopen_roomnight_y1").html())/Number($("#total_room_revenue_y1").html())));
    $("#avg_occupied_roomrate_y2").html(Math.round(Number($("#total_daysopen_roomnight_y2").html())/Number($("#total_room_revenue_y2").html())));
    $("#avg_occupied_roomrate_y3").html(Math.round(Number($("#total_daysopen_roomnight_y3").html())/Number($("#total_room_revenue_y3").html())));
    $("#avg_occupied_roomrate_y4").html(Math.round(Number($("#total_daysopen_roomnight_y4").html())/Number($("#total_room_revenue_y4").html())));
    $("#avg_occupied_roomrate_y5").html(Math.round(Number($("#total_daysopen_roomnight_y5").html())/Number($("#total_room_revenue_y5").html())));















}

