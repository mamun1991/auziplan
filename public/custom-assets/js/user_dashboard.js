//if ($.cookie('modal_user_dashboard') != 'loaded')
//{
// $.cookie('modal_user_dashboard', 'loaded');
// code to show modal
// setTimeout(function(){
//  $('#modal_user_dashboard').modal('show');
// }, 2000)
//}

var myBarChart = null;
var table_people_summary;
$(document).ready(function () {
    drawingGraphs();
    reload_expense();

    for (k = 0; k <= 1; k++) {

        $("#table-key_ratios_" + k).tableHeadFixer({ 'left': 1 });

        $("#table-key_ratios_" + k).css({
            "min-width": "920px"
        });
    }

    //cur = '<?php echo $cur ?>';

    table_people_summary = $('#tablepeoplesummary').DataTable({
        "Processing": true, //Feature control the processing indicator.
        "ServerSide": true, //Feature control DataTables' server-side processing mode.
        "bFilter": false,
        "bPaginate": false,
        "bSort": false,
        "bInfo": false,
        "bAutoWidth": false,
        //"order": [], //Initial no order.

        // Load data for the table's content from an Ajax source
        "ajax": {
            "url": site_url + "People/peoplesummary_dashboard",
            "type": "GET"
        },
        "drawCallback": function (d) {
            if (d.json !== undefined) {
                setTimeout(function () {
                    CalcSerVal(d.json.Service_income, d.json.currency);
                }, 300);
                $('.people_RangeSelectorInput').val(parseInt(d.json.Service_income));

                $('.ServiceIncomePerson').text(parseInt(d.json.Service_income));
            }
        }
    });

    datalocalproduct();

    dataimpproduct();

    dataservice();

    datarevenue();




    $('#ex12').on("input change", function () {

        var y1 = 0;
        var y2 = 0;
        var y3 = 0;
        var currency;

        $.ajax({
            url: site_url + "People/peoplesummary_dashboard",
            type: "GET",
            dataType: "JSON",
            success: function (row) {

                $('.ServiceIncomePerson').text(parseInt($('#ex12').val()));
                $('.people_RangeSelectorInput').val(parseInt($('#ex12').val()));

                //CalcSerVal(row['Service_income'], row['currency']);
                CalcSerVal(parseInt($('#ex12').val()), row['currency']);
            }

        })


    });

    $('#ex13').on("input change", function () {
        var y1 = 0;
        var y2 = 0;
        var y3 = 0;
        var currency;

        $.ajax({
            url: site_url + "Products/localproductsummary",
            type: "GET",
            dataType: "JSON",
            success: function (row) {

                y1 = parseInt(row['sumTotal'].replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

                y2 = parseInt((y1 * ($('#ex13').val() / 100)) + y1);

                y3 = parseInt((y2 * ($('#ex13').val() / 100)) + y2);

                currency = row['currency'];

                $('.ServiceIncomeProduct').text(parseInt($('#ex13').val()));
                $('.RangeSelectorProduct').val(parseInt($('#ex13').val()));

                drawBarGraphs('product_canvas', '#product_canvas', y1, y2, y3, currency);
            }

        })

    });

    $('#ex14').on("input change", function () {

        var y1 = 0;
        var y2 = 0;
        var y3 = 0;
        var currency;


        $.ajax({
            url: site_url + "ImportedProducts/importedproductsummary",
            type: "GET",
            dataType: "JSON",
            success: function (row) {

                y1 = parseInt(row['sumTotal'].replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

                y2 = parseInt((y1 * ($('#ex14').val() / 100)) + y1);

                y3 = parseInt((y2 * ($('#ex14').val() / 100)) + y2);

                currency = row['currency'];

                $('.ServiceIncomeImpProduct').text(parseInt($('#ex14').val()));
                $('.RangeSelectorImpProduct').val(parseInt($('#ex14').val()));

                drawBarGraphs('import_canvas', '#import_canvas', y1, y2, y3, currency);
            }

        })

    });

    $('#ex15').on("input change", function () {

        var y1 = 0;
        var y2 = 0;
        var y3 = 0;
        var currency;


        $.ajax({
            url: site_url + "Service_setup/ajax-summary",
            type: "GET",
            dataType: "JSON",
            success: function (row) {

                y1 = parseInt(row['sumTotal'].replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));

                y2 = parseInt((y1 * ($('#ex15').val() / 100)) + y1);

                y3 = parseInt((y2 * ($('#ex15').val() / 100)) + y2);

                currency = row['currency'];

                $('.ServiceIncomeService').text(parseInt($('#ex15').val()));
                $('.RangeSelectorServices').val(parseInt($('#ex15').val()));

                drawBarGraphs('service_canvas', '#service_canvas', y1, y2, y3, currency);
            }

        })

    });

    $('#ex16').on("input change", function () {

        var y1 = 0;
        var y2 = 0;
        var y3 = 0;
        var currency;

        $.ajax({
            url: site_url + "revenue/ajax-summary",
            type: "GET",
            dataType: "JSON",
            success: function (row) {

                y1 = parseInt(row['annual_revenue_yearly1']);

                y2 = parseInt((y1 * ($('#ex16').val() / 100)) + y1);

                y3 = parseInt((y2 * ($('#ex16').val() / 100)) + y2);

                currency = row['currency'];

                $('.ServiceIncomeRevenue').text(parseInt($('#ex16').val()));
                $('.RangeSelectorRevenue').val(parseInt($('#ex16').val()));

                drawBarGraphs('revenue_canvas', '#revenue_canvas', y1, y2, y3, cur);
            }

        })

    });

})

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("href") // activated tab
    if ((target == '#menu0')) {
        drawingGraphs();
    }
})

function datalocalproduct() {

    $.ajax({
        url: site_url + "Products/localproductsummary",
        type: "GET",
        dataType: "JSON",
        success: function (row) {
            if (parseInt(row['sumTotal']) > 0) {
                $('#products_dashboard_total').html(row['currency'] + row['sumTotal']);
            }
            $('.ServiceIncomeProduct').text(parseInt(row['Service_income']));
            $('.RangeSelectorProduct').val(parseInt(row['Service_income']));

        }
    })

}

function dataimpproduct() {

    $.ajax({
        url: site_url + "ImportedProducts/importedproductsummary",
        type: "GET",
        dataType: "JSON",
        success: function (row) {
            if (parseInt(row['sumTotal']) > 0) {
                $('#products_dashboard_total').html(row['currency'] + row['sumTotal']);
            }
            $('.ServiceIncomeImpProduct').text(parseInt(row['Service_income']));
            $('.RangeSelectorImpProduct').val(parseInt(row['Service_income']));
        }
    })

}

function dataservice() {

    $.ajax({
        url: site_url + "Service_setup/ajax-summary",
        type: "GET",
        dataType: "JSON",
        success: function (row) {

            if (row['Service_income'] == null) {
                $('.ServiceIncomeService').text('0');
                $('.RangeSelectorServices').val('0');
            } else {
                $('#servicerevenue_dashboard_total').html(row['currency'] + row['sumTotal'])
                $('.ServiceIncomeService').text(parseInt(row['Service_income']));
                $('.RangeSelectorServices').val(parseInt(row['Service_income']));
            }
        }
    })

}

function datarevenue() {

    $.ajax({
        url: site_url + "revenue/ajax-summary",
        type: "GET",
        dataType: "JSON",
        success: function (row) {
            if (row['Service_income'] == null) {
                $('.ServiceIncomeRevenue').text('0');
                $('.RangeSelectorRevenue').val('0');
            } else {
                $('#onlinerevenue_dashboard_total').html(row['cur'] + number_format(row['annual_revenue_yearly1'], 0, '.', ','))
                $('.ServiceIncomeRevenue').text(parseInt(row['Service_income']));
                $('.RangeSelectorRevenue').val(parseInt(row['Service_income']));
            }
        }
    })

}


function drawingGraphs() {

    $.ajax({
        url: site_url + "User_dashboard/ajax-report_graph",
        type: "GET",
        dataType: "json",
        success: function (row) {
            drawBarGraphs('product_canvas', '#product_canvas', row['cogproductyear1'], row['cogproductyear2'], row['cogproductyear3'], row['currency']);
            drawBarGraphs('import_canvas', '#import_canvas', row['cogimportyear1'], row['cogimportyear2'], row['cogimportyear3'], row['currency']);
            drawBarGraphs('service_canvas', '#service_canvas', row['serviceyear'], row['serviceyear2'], row['serviceyear3'], row['currency']);
            drawBarGraphs('revenue_canvas', '#revenue_canvas', row['annual_revenue_yearly1'], row['annual_revenue_yearly2'], row['annual_revenue_yearly3'], row['currency']);

            var graph_1 = new Array;
            var graph_2 = new Array;
            var graph_3 = new Array;

            for (i = 1; i <= 12; i++) {
                graph_1.push(row['graph_data_1_' + i]);
                graph_2.push(row['graph_data_2_' + i]);
                graph_3.push(row['graph_data_3_' + i]);
            }
            if (row['table_header'] != undefined) {
                drawLineGraphs(graph_1, graph_2, graph_3, row['currency'], row['table_header']);
            }

            drawPieGraphs('expenses_canvas', '#expenses_canvas', row['total_monthly_marketing'], row['total_monthly_public'], row['total_monthly_administrator'], row['total_monthly_other'], row['currency']);

            // Creating OneTimeCost Graph
            var oneTimeCostTotal = 0;
            var Security_Deposit = 0;
            var Interlectual_Property = 0;

            if (row['oneTimecost_data_dashboard'].length >= 0) {
                for (a = 0; a < row['oneTimecost_data_dashboard'].length; a++) {
                    if (row['oneTimecost_data_dashboard'][a]['one_time_cost'] == 'One_Time_Costs') {
                        oneTimeCostTotal += parseFloat(row['oneTimecost_data_dashboard'][a]['amount_paid'])
                    } else if (row['oneTimecost_data_dashboard'][a]['one_time_cost'] == 'Security_Deposit') {
                        Security_Deposit += parseFloat(row['oneTimecost_data_dashboard'][a]['amount_paid'])
                    } else if (row['oneTimecost_data_dashboard'][a]['one_time_cost'] == 'Interlectual_Property') {
                        Interlectual_Property += parseFloat(row['oneTimecost_data_dashboard'][a]['amount_paid'])
                    } else {
                        oneTimeCostTotal = 0;
                        Security_Deposit = 0;
                        Interlectual_Property = 0;
                    }

                }

            }

            drawPieGraphsOneTimeCost('oneTimeCost_canvas', '#oneTimeCost_canvas', oneTimeCostTotal, Security_Deposit, Interlectual_Property, row['currency']);


            var label = [];
            var total_payroll = [];

            var label1 = [];
            var data = [];

            var label2 = [];
            var data1 = [];

            if (row['people_count'] > 0) {
                for (i = 0; i <= (row['people_detail'].length - 1); i++) {
                    if (i % 2 == 0) {

                        label.push(row['people_detail'][i]);

                    } else {

                        total_payroll.push(row['people_detail'][i]);

                    }
                }
            }


            if (row['dir_data'].length >= 0) {
                for (x = 0; x < row['dir_data'].length; x++) {
                    label1.push(row['dir_data'][x]['name']);
                    data.push(row['dir_data'][x]['amount']);
                }

            }


            if (row['inv_data'].length >= 0) {
                for (y = 0; y < row['inv_data'].length; y++) {
                    label2.push(row['inv_data'][y]['investor']);
                    data1.push(row['inv_data'][y]['amount']);
                }

            }

            var chartdata = {
                labels: label,
                datasets: [
                    {
                        label: 'Payroll Analysis',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                        data: total_payroll
                    }
                ]
            };



            var chartdata1 = {
                labels: label1,
                datasets: [
                    {
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                        data: data
                    }
                ]
            };

            var chartdata2 = {
                labels: label2,
                datasets: [
                    {
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                        data: data1
                    }
                ]
            };


            horizontalBarGraphs(chartdata, row['currency']);
            horizontalBarGraphsDirector(chartdata1, row['currency']);
            horizontalBarGraphsInvestor(chartdata2, row['currency']);

        }
        // ,
        // error: function (jqXHR, textStatus, errorThrown)
        // {
        //     alert('Error fetching data');
        // }
    });

    // Get Plant And Equipment Data
    $.ajax({
        url: site_url + "Onetimecost/ajax-list_plant_equipment_graph",
        type: "GET",
        dataType: "json",
        success: function (row) {
            drawPieGraphsPlandAndEquipment('plandAndEquipment_canvas', '#plandAndEquipment_canvas', row['totalAcquisitionCost'], row['totalSalvageValue'], row['totalMonthlyAmount'], row['currency']);
        }
    });

    // Get land And Building Data
    $.ajax({
        url: site_url + "Onetimecost/ajax-list_land_buildings_graph",
        type: "GET",
        dataType: "json",
        success: function (row) {
            drawPieGraphsLandAndBuilding('landAndBuilding_canvas', '#landAndBuilding_canvas', row['purchasePriceTotal'], row['landValueTotal'], row['monthlyTotal'], row['currency']);
        }
    });

}

function drawBarGraphs(elementId, canvas, ty1, ty2, ty3, cur) {

    var myChart;

    $(canvas).html('');

    var ctx = document.getElementById(elementId);
    if (myChart != undefined) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Year 1", "Year 2", "Year 3"],
            datasets: [{
                data: [ty1, ty2, ty3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                mode: 'label',
                label: 'mylabel',
                callbacks: {
                    label: function (tooltipItem, data) {
                        return cur + ' ' + number_format(tooltipItem.yLabel, 0, '.', ',');
                    },
                },
            },
        }
    });

}

function drawLineGraphs(graph_data_1, graph_data_2, graph_data_3, cur, label) {

    var myChart;

    $('#breakeven_canvas').html('');

    var ctx = document.getElementById('breakeven_canvas');
    if (myChart != undefined) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: "Total Income",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 0.2)",
                data: graph_data_1,
                //fill: false
            }, {
                label: "Total Expenses",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 0.2)",
                data: graph_data_2,
                //fill: false
            }, {
                label: "Total Gross Profit",
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                borderColor: "rgba(255, 206, 86, 0.2)",
                data: graph_data_3,
                //fill: false
            }]
        },
        responsive: false,
        maintainAspectRatio: false,
        options: {
            legend: {
                display: true
            },
            scales: {
                scaleBeginAtZero: false,
                scaleOverride: true,
                scaleSteps: 20,
                scaleStepWidth: 2,
                scaleStartValue: -20,
            },
            tooltips: {
                mode: 'label',
                label: 'mylabel',
                callbacks: {
                    label: function (tooltipItem, data) {
                        return cur + ' ' + number_format(tooltipItem.yLabel, 2, '.', ',');
                    },
                },
            },
        }
    })
}

function drawPieGraphs(canvas, elementId, marketing, public, admin, other, cur) {

    var myChart;

    $(elementId).html('');

    var ctx = document.getElementById(canvas);
    if (myChart != undefined) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Marketing', 'Public Relations', 'Administration', 'Others'],
            datasets: [{
                data: [marketing, public, admin, other],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ]
            }]
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var value = data.datasets[0].data[tooltipItem.index];
                        var label = data.labels[tooltipItem.index];
                        return label + ' ' + cur + number_format(value, 0, '.', ',');
                    },
                },
            },
        }
    })
}

// Pie Graph For One Time Cost
function drawPieGraphsOneTimeCost(canvas, elementId, oneTimeCostTotal, securityDepositTotal, interleactualPropertyTotal, cur) {


    $("#" + canvas).remove();
    $("#onetimecost_chartbox").after("<canvas id='" + canvas + "'></canvas>");
    let oneTimeCost = document.getElementById(canvas);


    oneTimeCostChart = new Chart(oneTimeCost, {
        type: 'pie',
        data: {
            labels: ['One Time Costs', 'Security Deposit', 'Interlectual Property'],
            datasets: [{
                data: [oneTimeCostTotal, securityDepositTotal, interleactualPropertyTotal],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ]
            }]
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var value = data.datasets[0].data[tooltipItem.index];
                        var label = data.labels[tooltipItem.index];
                        return label + ' ' + cur + number_format(value, 0, '.', ',');
                    },
                },
            },
        }
    })
}

// Pie Graph For Plant And Equipment
function drawPieGraphsPlandAndEquipment(canvas, elementId, acquisitionCost, salvageValue, monthly, cur) {

    $("#" + canvas).remove();
    $("#plantEquipment_chartbox").after("<canvas id='" + canvas + "'></canvas>");
    let plantEquipment = document.getElementById(canvas);

    plantEquipmentChart = new Chart(plantEquipment, {
        type: 'pie',
        data: {
            labels: ['Acquisition Cost', 'Salvage Value', 'Monthly'],
            datasets: [{
                data: [acquisitionCost, salvageValue, monthly],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ]
            }]
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var value = data.datasets[0].data[tooltipItem.index];
                        var label = data.labels[tooltipItem.index];
                        return label + ' ' + cur + number_format(value, 0, '.', ',');
                    },
                },
            },
        }
    })
}

// Pie Graph For Land And Building
function drawPieGraphsLandAndBuilding(canvas, elementId, pruchasePrice, landValue, monthly, cur) {

    $("#" + canvas).remove();
    $("#landBuilding_chartbox").after("<canvas id='" + canvas + "'></canvas>");
    let landBuilding = document.getElementById(canvas);

    landBuildingChart = new Chart(landBuilding, {
        type: 'pie',
        data: {
            labels: ['Purchase Price', 'Land Value', 'Monthly'],
            datasets: [{
                data: [pruchasePrice, landValue, monthly],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ]
            }]
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var value = data.datasets[0].data[tooltipItem.index];
                        var label = data.labels[tooltipItem.index];
                        return label + ' ' + cur + number_format(value, 0, '.', ',');
                    },
                },
            },
        }
    })
}



// Horizontal bar chart for people


function horizontalBarGraphs(chartdata, cur) {
    $("#people_canvas").remove();
    $("#people_chart_box").after("<canvas id='people_canvas'></canvas>");
    let people = document.getElementById('people_canvas');

    peopleHorizontalBarChart = new Chart(people, {
        type: 'horizontalBar',
        data: chartdata,
        options: {
            legend: {
                display: true
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        userCallback: function (value, index, values) {
                            if (value > 1) {
                                return cur + ' ' + value;
                            } else {
                                return cur + ' ' + value.toFixed(1);
                            }
                        }
                    }
                }]
            },
            tooltips: {
                mode: 'label',
                label: 'mylabel',
                callbacks: {
                    label: function (tooltipItem, data) {

                        return cur + ' ' + number_format(tooltipItem.xLabel, 0, '.', ',');
                    },
                },
            },
        }
    })

}

// Horizontal bar chart for owners directors
function horizontalBarGraphsDirector(chartdata, cur) {
    $("#director_canvas").remove();
    $("#director_chartbox").after("<canvas id='director_canvas'></canvas>");
    let director = document.getElementById('director_canvas');

    directorChart = new Chart(director, {
        type: 'horizontalBar',
        data: chartdata,
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        userCallback: function (value, index, values) {
                            if (value > 1) {
                                return cur + ' ' + value;
                            } else {
                                return cur + ' ' + value.toFixed(1);
                            }

                        }

                    }
                }]
            },
            tooltips: {
                mode: 'label',
                label: 'mylabel',
                callbacks: {
                    label: function (tooltipItem, data) {
                        return cur + ' ' + number_format(tooltipItem.xLabel, 0, '.', ',');
                    },
                },
            },
        }
    })

}

// Horizontal bar chart for investors
function horizontalBarGraphsInvestor(chartdata, cur) {
    $("#investor_canvas").remove();
    $("#investor_chartbox").after("<canvas id='investor_canvas'></canvas>");
    let investor = document.getElementById('investor_canvas');

    investorChart = new Chart(investor, {
        type: 'horizontalBar',
        data: chartdata,
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        userCallback: function (value, index, values) {
                            if (value > 1) {
                                return cur + ' ' + value;
                            } else {
                                return cur + ' ' + value.toFixed(1);
                            }
                        }
                    }
                }]
            },
            tooltips: {
                mode: 'label',
                label: 'mylabel',
                callbacks: {
                    label: function (tooltipItem, data) {
                        return cur + ' ' + number_format(tooltipItem.xLabel, 0, '.', ',');
                    },
                },
            },
        }
    })

}

function number_format(number, decimals, decPoint, thousandsSep) {
    decimals = decimals || 0;
    number = parseFloat(number);

    if (!decPoint || !thousandsSep) {
        decPoint = '.';
        thousandsSep = ',';
    }

    var roundedNumber = Math.round(Math.abs(number) * ('1e' + decimals)) + '';
    // add zeros to decimalString if number of decimals indicates it
    roundedNumber = (1 > number && -1 < number && roundedNumber.length <= decimals)
        ? Array(decimals - roundedNumber.length + 1).join("0") + roundedNumber
        : roundedNumber;
    var numbersString = decimals ? roundedNumber.slice(0, decimals * -1) : roundedNumber.slice(0);
    var checknull = parseInt(numbersString) || 0;

    // check if the value is less than one to prepend a 0
    numbersString = (checknull == 0) ? "0" : numbersString;
    var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : '';

    var formattedNumber = "";
    while (numbersString.length > 3) {
        formattedNumber = thousandsSep + numbersString.slice(-3) + formattedNumber
        numbersString = numbersString.slice(0, -3);
    }

    return (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');
}



$(document).ready(function () {
    $('.progress .progress-bar').css("width",
        function () {
            return $(this).attr("aria-valuenow") + "%";
        }
    )
});

$('.next-step, .prev-step').on('click', function (e) {
    var $activeTab = $('.tab-pane.active');
    $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
    if ($(e.target).hasClass('next-step')) {

        var nextTab = $activeTab.next('.tab-pane').attr('id');
        $('[href="#' + nextTab + '"]').removeClass('btn-default');
        $('[href="#' + nextTab + '"]').tab('show');
        $("body").scrollTop(0);
    } else {

        var prevTab = $activeTab.prev('.tab-pane').attr('id');
        $('[href="#' + prevTab + '"]').removeClass('btn-default');
        $('[href="#' + prevTab + '"]').tab('show');
        $("body").scrollTop(0);
    }
});







$(document).ready(function () {

    $('.next').click(function () {

        var nextId = $(this).parents('.tab-pane').next().attr("id");
        $('[href=#' + nextId + ']').tab('show');
        return false;

    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        //update progress
        var step = $(e.target).data('step');
        var percent = (parseInt(step) / 1) * 100;

        //$('.progress-bar').css({width: percent + '%'}); //comment these 2 lines just to remove undefine error on clicking next tabs
        //$('.progress-bar').text("Step " + step + " of 1");

        //e.relatedTarget // previous tab

    })

    $('.first').click(function () {

        $('#myWizard a:first').tab('show')

    })

});

$(".wizard").each(function () {
    var index = 0;
    var wizard = $(this);

    $(wizard).prepend('<div class="wizardProgress"></div>');
    $(wizard).prepend('<div class="header"></div>');

    $(wizard).find(".wizardPanel").each(function () {

        $(wizard).find(".wizardProgress").append("<div>" + $(this).data("title") + "</div>");
    });

    $(wizard).find(".wizardProgress div").click(function () {
        selectPanel($(this).index());
    });

    $(wizard).append('<div class="footer"><button id="btnPrev" class="btn btn-default">Prev</button><button id="btnNext" class="btn btn-primary">Next</button></div>');

    $(wizard).find("#btnPrev").click(function () {
        selectPanel($(".wizardProgress .selected").index() - 1);
    });
    $(wizard).find("#btnNext").click(function () {
        selectPanel($(".wizardProgress .selected").index() + 1);
    });

    selectPanel(0);

    function selectPanel(index) {


        if (index == 0) {
            $(wizard).find("#btnPrev").fadeOut();
        } else {
            $(wizard).find("#btnPrev").fadeIn();
        }

        if (index == $(".wizardProgress div").length - 1) {
            $(wizard).find("#btnNext").fadeOut();
        } else {
            $(wizard).find("#btnNext").fadeIn();
        }

        $(".wizardProgress .selected").removeClass("selected");
        var selectedTab = $(".wizardProgress div").get(index);
        $(selectedTab).addClass("selected");

        $(".wizardPanel").slideUp();
        var selectedPanel = $(wizard).find(".wizardPanel").get(index);
        $(selectedPanel).slideDown();
    }


});








function reload_expense() {

    url = site_url + "expenses/ajax-expense_summary";
    $.ajax({

        url: url,
        type: "POST",
        success: function (data) {
            var summary_data = JSON.parse(data);

            var cur = summary_data['currency'][0];
            var summary = summary_data.expense_summary;
            var html = "";
            var total_y1 = 0;
            var total_y2 = 0;
            var total_y3 = 0;
            var total_w = 0;
            var total_m = 0;
            var total_q = 0;
            for (var i = 0; i < summary.length; i++) {
                var purpose = summary[i]['purpose'];
                var cost_increase = get_cost_increase_perc(summary_data.cost_increase_percentage, summary[i]);
                html += "<tr id=" + summary[i]['purpose'] + " onclick='update_expenses(\"" + purpose + "\")'>"
                    + "<td>"
                    + "Total " + summary[i]['purpose']
                    + "</td>"


                var year1 = parseInt(summary[i]['yearly_cost']);
                var year2 = parseInt(year1) * cost_increase + parseInt(year1);
                var year3 = parseInt(year2) * cost_increase + parseInt(year2);
                year1;
                year2;
                year3;

                total_y1 = total_y1 + year1;
                total_y2 = total_y2 + year2;
                total_y3 = total_y3 + year3;


                html += " <td id='" + summary[i]['purpose'] + "_year1' data-val='" + year1 + "'>" + cur + number_format(year1, 0, '.', ',') + " </td>";
                html += " <td id='" + summary[i]['purpose'] + "_year2' data-val='" + year2 + "'>" + cur + number_format(year2, 0, '.', ',') + " </td>";
                html += " <td id='" + summary[i]['purpose'] + "_year3' data-val='" + year3 + "'>" + cur + number_format(year3, 0, '.', ',') + " </td>";
                html += "</tr>";
            }

            var total = summary_data.total;

            html += '<tr onclick="update_expenses(\'loadchart\')" style="background-color: #d3d3d3;">'
                + '<td><b>Total:</b></td>'
                + '<td id="total_y1" data-val="' + total_y1 + '">'
                + '<b>' + cur + number_format(total_y1, 0, '.', ',') + '</b>'
                + '</td>'
                + '<td id="total_y2" data-val="' + total_y2 + '">'
                + '<b>' + cur + number_format(total_y2, 0, '.', ',') + '</b>'
                + '</td>'
                + '<td id="total_y3" data-val="' + total_y3 + '">'
                + '<b>' + cur + number_format(total_y3, 0, '.', ',') + '</b>'
                + '</td>'
                + '</tr>';
            $("#table2 tbody").empty();
            $("#table2 tbody").append(html);


            update_expenses('loadchart');
        },
        error: function (jqXHR, textStatus, errorThrown) {

            throw (errorThrown);
        }
    });
} /* reload graph */

function update_expenses(account) {
    if (myBarChart != null) {
        $("#chart-container").empty();
        $("#chart-container").append('<canvas id="expenses_bar_canvas"></canvas>');
    }
    var ctx = $("#expenses_bar_canvas");
    if (account == "loadchart") {
        var year1 = $("#total_y1").attr('data-val').replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '');
        var year2 = $("#total_y2").attr('data-val').replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '');
        var year3 = $("#total_y3").attr('data-val').replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '');
    }
    else {
        var year1 = $("#" + account + "_year1").attr('data-val').replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '');
        var year2 = $("#" + account + "_year2").attr('data-val').replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '');
        var year3 = $("#" + account + "_year3").attr('data-val').replace(/\$|\€|\₹|\£/g, '').replace(/,/g, '');
    }
    var data = {
        labels: ["Year One", "Year Two", "Year Three"],
        datasets: [{
            label: "Expense Summary",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1,
            data: [
                year1,
                year2,
                year3
            ],
        }]
    };
    myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            },
            tooltips: {
                mode: 'label',
                label: 'mylabel',
                callbacks: {
                    label: function (tooltipItem, data) {
                        return cur + ' ' + number_format(tooltipItem.yLabel, 0, '.', ',');
                    },
                },
            },
        }
    });
}


function get_cost_increase_perc(perc_array, obj) {
    var cost = 1;

    if (perc_array.length > 0 && perc_array[0] !== null) {

        if (obj['purpose'] == 'Marketing')
            cost = perc_array[0]['marketing'];

        if (obj['purpose'] == 'Administration')
            cost = perc_array[0]['ac'];

        if (obj['purpose'] == 'Public_Relations')
            cost = perc_array[0]['pr'];

        if (obj['purpose'] == 'Other')
            cost = perc_array[0]['other'];
    }

    return cost / 100;
}




// Issue Shared Range Selector

$('#IssuedShared').on("input change", function () {
    var is = parseInt($("#IssuedShared").val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    var pps = parseInt($("#PricePerShare").val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    var totalCapitalization = is * pps;
    $("#TotalCapitalization").val(cur + ' ' + number_format(totalCapitalization, 0, '.', ','));
});

// Price Per Share Range Selector
$('#PricePerShare').on("input change", function () {
    var is = parseInt($("#IssuedShared").val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    var pps = parseInt($("#PricePerShare").val().replace(/\,|\$|\€|\₹|\£|\%/g, ''));
    var totalCapitalization = is * pps;
    $("#TotalCapitalization").val(cur + ' ' + number_format(totalCapitalization, 0, '.', ','));

});

//  Business Assumptions Range Slider Start

// Provision Company Tax Range Selector
$('#company_tax').on("input change", function () {
    var pct = parseInt($("#company_tax").val());
    $("#pct_percent").text(pct);
    $("#company_tax").val(pct);

});
// Franchise Royalty Fee Share Range Selector
$('#franchise_royalty').on("input change", function () {
    var frf = parseInt($("#franchise_royalty").val());
    $("#frf_percent").text(frf);
    $("#franchise_royalty").val(frf);

});

// Company Vat Range Selector
$('#company_vat_collected').on("input change", function () {
    var cvc = parseInt($("#company_vat_collected").val());
    $("#cvc_percent").text(cvc);
    $("#company_vat_collected").val(cvc);

});
// Price Per Share Range Selector
$('#porivision_baddebt').on("input change", function () {
    var pbd = parseInt($("#porivision_baddebt").val());
    $("#pbd_percent").text(pbd);
    $("#porivision_baddebt").val(pbd);

});

// Price Per Share Range Selector
$('#depreciation_on_equipment').on("input change", function () {
    var doe = parseInt($("#depreciation_on_equipment").val());
    $("#doe_percent").text(doe);
    $("#depreciation_on_equipment").val(doe);

});

// Price Per Share Range Selector
$('#servicecost_service').on("input change", function () {
    var scs = parseInt($("#servicecost_service").val());
    $("#scs_percent").text(scs);
    $("#servicecost_service").val(scs);

});


//  Business Assumptions Range Slider End

$('#ex8').on("input change", function () {
    var sv = parseInt($("#ex8").val());
    $("#m_perc").text(sv);
    $("#ex8").val(sv);
    if ($("#Marketing").length > 0) {

        var account = "Marketing";
        var years = [];
        years['year1'] = parseInt($("#Marketing_year1").attr('data-val'));
        years['year2'] = parseInt(years['year1'] * (sv / 100)) + years['year1'];
        years['year3'] = parseInt(years['year2'] * (sv / 100)) + years['year2'];

        $("#Marketing_year2").attr('data-val', years['year2']);
        $("#Marketing_year3").attr('data-val', years['year3']);
        $("#Marketing_year2").text(cur + number_format(years['year2'], 0, '.', ','));
        $("#Marketing_year3").text(cur + number_format(years['year3'], 0, '.', ','));
        calculate_total();
        update_expenses(account);

    }

});
$('#ex9').on("input change", function () {
    var sv = parseInt($("#ex9").val());
    $("#p_perc").text(sv);
    $("#ex9").val(sv);
    if ($("#Public_Relations").length > 0) {
        var account = "Public_Relations";
        var years = [];
        years['year1'] = parseInt($("#Public_Relations_year1").attr('data-val'));
        years['year2'] = parseInt(years['year1'] * (sv / 100)) + years['year1'];
        years['year3'] = parseInt(years['year2'] * (sv / 100)) + years['year2'];

        $("#Public_Relations_year2").attr('data-val', years['year2']);
        $("#Public_Relations_year3").attr('data-val', years['year3']);
        $("#Public_Relations_year2").text(cur + number_format(years['year2'], 0, '.', ','));
        $("#Public_Relations_year3").text(cur + number_format(years['year3'], 0, '.', ','));
        calculate_total();
        update_expenses(account);
    }
});
$('#ex10').on("input change", function () {
    var sv = parseInt($("#ex10").val());
    $("#a_perc").text(sv);
    $("#ex10").val(sv);
    if ($("#Administration").length > 0) {
        var account = "Administration";
        var years = [];
        years['year1'] = parseInt($("#Administration_year1").attr('data-val'));
        years['year2'] = parseInt(years['year1'] * (sv / 100)) + years['year1'];
        years['year3'] = parseInt(years['year2'] * (sv / 100)) + years['year2'];

        $("#Administration_year2").attr('data-val', years['year2']);
        $("#Administration_year3").attr('data-val', years['year3']);
        $("#Administration_year2").text(cur + number_format(years['year2'], 0, '.', ','));
        $("#Administration_year3").text(cur + number_format(years['year3'], 0, '.', ','));
        calculate_total();
        update_expenses(account);
    }
});
$('#ex11').on("input change", function () {
    var sv = parseInt($("#ex11").val());
    $("#o_perc").text(sv);
    $("#ex11").val(sv);
    if ($("#Other").length > 0) {
        var account = "Other";
        var years = [];
        years['year1'] = parseInt($("#Other_year1").attr('data-val'));
        years['year2'] = parseInt(years['year1'] * (sv / 100)) + years['year1'];
        years['year3'] = parseInt(years['year2'] * (sv / 100)) + years['year2'];

        $("#Other_year2").attr('data-val', years['year2']);
        $("#Other_year3").attr('data-val', years['year3']);
        $("#Other_year2").text(cur + number_format(years['year2'], 0, '.', ','));
        $("#Other_year3").text(cur + number_format(years['year3'], 0, '.', ','));
        calculate_total();
        update_expenses(account);
    }
});

$('#save_expenses').click(function () {
    var m_perc = $("#ex8").val();
    var p_perc = $("#ex9").val();
    var a_perc = $("#ex10").val();
    var o_perc = $("#ex11").val();

    $.ajax({
        type: 'GET',
        url: site_url + "Expenses/updateExpensesIncrease?m=" + m_perc + "&p=" + p_perc + "&a=" + a_perc + "&o=" + o_perc,

        success:
            function (data) {

                $('#modalConfirmYesNo').modal('show');

                $("#lblTitleConfirmYesNo").html("");
                $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                    + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                    + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                    + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                    + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                    + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                    + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                    + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                    + "</svg>"
                    + "</div>"
                    + "<p class='alert-box'>Your changes have been saved successfully</p>");

                $("#btnNoConfirmYesNo").hide();

                $("#btnYesConfirmYesNo").html('Close');

                $("#btnYesConfirmYesNo").off('click').click(function () {

                    $('#modalConfirmYesNo').modal('hide');

                    $("#btnNoConfirmYesNo").show();

                    $("#btnYesConfirmYesNo").html('Yes');
                });

                //$("#btnNoConfirmYesNo").off('click').click(function () {

                //    $('#modalConfirmYesNo').modal('hide');
                //});
                calculate_total();
            }
    });

});

function calculate_total() {

    var total_y1 = 0;
    var total_y2 = 0;
    var total_y3 = 0;

    total_y1 = parseFloat(($("#Marketing_year1").length > 0) ? $("#Marketing_year1").attr('data-val') : 0.00) + parseFloat(($("#Public_Relations_year1").length > 0) ? $("#Public_Relations_year1").attr('data-val') : 0.00) + parseFloat(($("#Administration_year1").length > 0) ? $("#Administration_year1").attr('data-val') : 0.00) + parseFloat(($("#Other_year1").length > 0) ? $("#Other_year1").attr('data-val') : 0.00);
    total_y2 = parseFloat(($("#Marketing_year2").length > 0) ? $("#Marketing_year2").attr('data-val') : 0.00) + parseFloat(($("#Public_Relations_year2").length > 0) ? $("#Public_Relations_year2").attr('data-val') : 0.00) + parseFloat(($("#Administration_year2").length > 0) ? $("#Administration_year2").attr('data-val') : 0.00) + parseFloat(($("#Other_year2").length > 0) ? $("#Other_year2").attr('data-val') : 0.00);
    total_y3 = parseFloat(($("#Marketing_year3").length > 0) ? $("#Marketing_year3").attr('data-val') : 0.00) + parseFloat(($("#Public_Relations_year3").length > 0) ? $("#Public_Relations_year3").attr('data-val') : 0.00) + parseFloat(($("#Administration_year3").length > 0) ? $("#Administration_year3").attr('data-val') : 0.00) + parseFloat(($("#Other_year3").length > 0) ? $("#Other_year3").attr('data-val') : 0.00);

    $("#total_y1").attr('data-val', total_y1);
    $("#total_y2").attr('data-val', total_y2);
    $("#total_y3").attr('data-val', total_y3);

    $("#total_y1").text(cur + number_format(total_y1, 0, '.', ','));
    $("#total_y2").text(cur + number_format(total_y2, 0, '.', ','));
    $("#total_y3").text(cur + number_format(total_y3, 0, '.', ','));
}

function CalcSerVal(ser, cur) {

    $('#ChartDisplay').html('');
    var tb = $('#tablepeoplesummary');
    ser = parseInt(ser);
    var ty1 = 0, ty2 = 0, ty3 = 0;
    tb.find('tbody tr').each(function () {
        var y1 = parseInt($(this).find('td:eq(1)').text().replace(/,/g, '').replace(/\$|\€|\₹|\£/g, ''));
        var y2 = parseInt((y1 * (ser / 100)) + y1);
        var y3 = parseInt((y2 * (ser / 100)) + y2);


        ty1 += y1;
        ty2 += y2;
        ty3 += y3;
        if (isNaN(y2)) {
            $(this).find('td:eq(2)').text(cur + number_format(y1, 0, '.', ','));
            $(this).find('td:eq(3)').text(cur + number_format(y1, 0, '.', ','));
        } else {
            $(this).find('td:eq(2)').text(cur + number_format(y2, 0, '.', ','));
            $(this).find('td:eq(3)').text(cur + number_format(y3, 0, '.', ','));
        }

    });

    //Hide table body 
    tb.find('tbody').hide();

    if (isNaN(ty1)) {
        $('.SumYTotal1').text(cur + number_format(0, 0, '.', ','));
    } else {
        $('#people_dashboard_total').text(cur + number_format(ty1, 0, '.', ','));
        $('.SumYTotal1').text(cur + number_format(ty1, 0, '.', ','));
    }
    if (isNaN(ty2)) {
        $('.SumYTotal2').text(cur + number_format(0, 0, '.', ','));
    } else {
        $('.SumYTotal2').text(cur + number_format(ty2, 0, '.', ','));
    }
    if (isNaN(ty3)) {
        $('.SumYTotal3').text(cur + number_format(0, 0, '.', ','));
    } else {
        $('.SumYTotal3').text(cur + number_format(ty3, 0, '.', ','));
    }

    //ChartDisplay

    var ctx = document.getElementById("ChartDisplay");


    var peopleChart;

    if (peopleChart != undefined) {
        peopleChart.destroy();
    }
    peopleChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Year 1", "Year 2", "Year 3"],
            datasets: [{
                data: [ty1, ty2, ty3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                mode: 'label',
                label: 'mylabel',
                callbacks: {
                    label: function (tooltipItem, data) {


                        return cur + ' ' + number_format(tooltipItem.yLabel, 0, '.', ',');
                    },
                },
            },
        }
    });
}


// Save people

$('#save_people').click(function () {
    vi = $('.people_RangeSelectorInput').val();
    var datapass = 'si=' + vi;

    $.ajax({
        type: 'POST',
        data: datapass,
        url: site_url + "people/saving_range",
        datatype: 'json',
        success:
            function (data) {
                //console.log(data);
                var datas = jQuery.parseJSON(data);
                //alert(datas);
                if (datas.status == 'yes') {

                    $('#modalConfirmYesNo').modal('show');
                    $("#lblTitleConfirmYesNo").html("");
                    $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                        + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                        + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                        + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                        + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                        + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                        + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                        + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                        + "</svg>"
                        + "</div>"
                        + "<p class='alert-box'>Your changes have been saved successfully</p>");

                    $("#btnNoConfirmYesNo").hide();

                    $("#btnYesConfirmYesNo").html('Close');

                    $("#btnYesConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');

                        $("#btnNoConfirmYesNo").show();

                        $("#btnYesConfirmYesNo").html('Yes');
                    });
                }
                if (datas.status == 'no') {
                    $('#modalConfirmYesNo').modal('show');

                    $("#lblTitleConfirmYesNo").html("User Information");
                    $("#lblMsgConfirmYesNo").html("Error while saving the change");

                    $("#btnNoConfirmYesNo").hide();

                    $("#btnYesConfirmYesNo").html('Close');

                    $("#btnYesConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');

                        $("#btnNoConfirmYesNo").show();

                        $("#btnYesConfirmYesNo").html('Yes');
                    });

                }
            }
    });
});



// Horizontal bar chart for product


$('#saveproduct').click(function () {

    vi = $('.RangeSelectorProduct').val();
    var datapass = 'si=' + vi;

    $.ajax({
        type: 'POST',
        data: datapass,
        url: site_url + "Products/update_sales_income_increase",
        datatype: 'json',
        success:
            function (data) {
                var datas = jQuery.parseJSON(data);
                if (datas.status == 'yes') {
                    $('#modalConfirmYesNo').modal('show');
                    $("#lblTitleConfirmYesNo").html("");
                    $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                        + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                        + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                        + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                        + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                        + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                        + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                        + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                        + "</svg>"
                        + "</div>"
                        + "<p class='alert-box'>Your changes have been saved successfully</p>");

                    $("#btnNoConfirmYesNo").hide();

                    $("#btnYesConfirmYesNo").html('Close');

                    $("#btnYesConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');

                        $("#btnNoConfirmYesNo").show();

                        $("#btnYesConfirmYesNo").html('Yes');
                    });
                }
                if (datas.status == 'no') {
                    $('#modalConfirmYesNo').modal('show');
                    $("#lblTitleConfirmYesNo").html("User Information");
                    $("#lblMsgConfirmYesNo").html("Error while saving the change");
                    $("#btnNoConfirmYesNo").hide();

                    $("#btnYesConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');

                        $("#btnNoConfirmYesNo").show();

                        $("#btnYesConfirmYesNo").html('Yes');
                    });

                }
            }
    });
});


// Horizontal bar chart for revenue
$('#saverevenue').click(function () {

    vi = $('.RangeSelectorRevenue').val();
    var datapass = 'si=' + vi;

    $.ajax({
        type: 'POST',
        data: datapass,
        url: site_url + "Revenue/update_revenue_income_increase",
        datatype: 'json',
        success:
            function (data) {
                var datas = jQuery.parseJSON(data);
                if (datas.status == 'yes') {
                    $('#modalConfirmYesNo').modal('show');
                    $("#lblTitleConfirmYesNo").html("");
                    $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                        + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                        + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                        + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                        + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                        + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                        + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                        + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                        + "</svg>"
                        + "</div>"
                        + "<p class='alert-box'>Your changes have been saved successfully</p>");

                    $("#btnNoConfirmYesNo").hide();

                    $("#btnYesConfirmYesNo").html('Close');

                    $("#btnYesConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');

                        $("#btnNoConfirmYesNo").show();

                        $("#btnYesConfirmYesNo").html('Yes');
                    });
                }
                if (datas.status == 'no') {
                    $('#modalConfirmYesNo').modal('show');
                    $("#lblTitleConfirmYesNo").html("User Information");
                    $("#lblMsgConfirmYesNo").html("Error while saving the change");
                    $("#btnNoConfirmYesNo").hide();

                    $("#btnYesConfirmYesNo").off('click').click(function () {

                        $('#modalConfirmYesNo').modal('hide');

                        $("#btnNoConfirmYesNo").show();

                        $("#btnYesConfirmYesNo").html('Yes');
                    });

                }
            }
    });
});

// Horizontal bar chart for import product
$('#saveimpproduct').click(function () {

    vi = $('.RangeSelectorImpProduct').val();
    var datapass = 'si=' + vi;

    $.ajax({
        type: 'POST',
        data: datapass,
        url: site_url + "ImportedProducts/update_sales_income_increase",
        datatype: 'json',
        success: function (data) {
            var datas = jQuery.parseJSON(data);

            if (datas.status == 'yes') {
                $('#modalConfirmYesNo').modal('show');
                $("#lblTitleConfirmYesNo").html("");
                $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                    + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                    + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                    + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                    + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                    + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                    + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                    + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                    + "</svg>"
                    + "</div>"
                    + "<p class='alert-box'>Your changes have been saved successfully</p>");

                $("#btnNoConfirmYesNo").hide();

                $("#btnYesConfirmYesNo").html('Close');

                $("#btnYesConfirmYesNo").off('click').click(function () {

                    $('#modalConfirmYesNo').modal('hide');

                    $("#btnNoConfirmYesNo").show();

                    $("#btnYesConfirmYesNo").html('Yes');
                });
            }
            if (datas.status == 'no') {
                $('#modalConfirmYesNo').modal('show');
                $("#lblTitleConfirmYesNo").html("User Information");
                $("#lblMsgConfirmYesNo").html("Error while saving the change");
                $("#btnNoConfirmYesNo").hide();

                $("#btnYesConfirmYesNo").off('click').click(function () {

                    $('#modalConfirmYesNo').modal('hide');

                    $("#btnNoConfirmYesNo").show();

                    $("#btnYesConfirmYesNo").html('Yes');
                });
            }
        }
    });
});


// Horizontal bar chart for services
$('#saveservice').click(function () {
    vi = $('.RangeSelectorServices').val();
    var datapass = 'si=' + vi;
    $.ajax({
        type: 'POST',
        data: datapass,
        url: site_url + "Upsincome/upincome",
        datatype: 'json',
        success: function (data) {
            var datas = jQuery.parseJSON(data);

            if (datas.status == 'yes') {
                $('#modalConfirmYesNo').modal('show');
                $("#lblTitleConfirmYesNo").html("");
                $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                    + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                    + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                    + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                    + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                    + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                    + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                    + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                    + "</svg>"
                    + "</div>"
                    + "<p class='alert-box'>Your changes have been saved successfully</p>");

                $("#btnNoConfirmYesNo").hide();

                $("#btnYesConfirmYesNo").html('Close');

                $("#btnYesConfirmYesNo").off('click').click(function () {

                    $('#modalConfirmYesNo').modal('hide');

                    $("#btnNoConfirmYesNo").show();

                    $("#btnYesConfirmYesNo").html('Yes');
                });
            }
            if (datas.status == 'no') {
                $('#modalConfirmYesNo').modal('show');
                $("#lblTitleConfirmYesNo").html("User Information");
                $("#lblMsgConfirmYesNo").html("Error while saving the change");
                $("#btnNoConfirmYesNo").hide();

                $("#btnYesConfirmYesNo").off('click').click(function () {

                    $('#modalConfirmYesNo').modal('hide');

                    $("#btnNoConfirmYesNo").show();

                    $("#btnYesConfirmYesNo").html('Yes');
                });
            }
        }
    })
});



// Save Finance From Dashboard

function saveFinance() {
    var loan_amt_slider = document.getElementById("loanAmount").value;
    var int_rate_slider = document.getElementById("loanIntrest").value;
    var loan_period_slider = document.getElementById("loanYear").value;

    $.ajax({
        url: "startup/ajax-checkreq",
        type: "POST",
        data: { "amount": loan_amt_slider, "apr": loan_period_slider, "years": int_rate_slider, "pay_periodicity": 12 },
        dataType: 'json',
        encode: true,
        success: function (data) {

            $('#modalConfirmYesNo').modal('show');

            $("#lblTitleConfirmYesNo").html("");
            $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                + "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                + "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                + "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                + "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                + "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                + "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                + "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                + "</svg>"
                + "</div>"
                + "<p class='alert-box'>Business loan added successfully</p>");
            $("#btnNoConfirmYesNo").hide();
            $("#btnYesConfirmYesNo").html('Close');
            $("#btnYesConfirmYesNo").off('click').click(function () {
                $('#modalConfirmYesNo').modal('hide');
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    })
}


// Finance
var P, R, N, pieChart, lineChart;
var loan_amt_slider = document.getElementById("loanAmount");
var int_rate_slider = document.getElementById("loanIntrest");
var loan_period_slider = document.getElementById("loanYear");

// update loan amount
loan_amt_slider.addEventListener("input", (self) => {
    document.querySelector("#loanAmountText").innerText =
        cur + parseInt(self.target.value).toLocaleString("en-US");
    P = parseFloat(self.target.value);
    displayDetails();
});

// update Rate of Interest
int_rate_slider.addEventListener("input", (self) => {
    document.querySelector("#loanIntrestText").innerText =
        self.target.value + "%";
    R = parseFloat(self.target.value);
    displayDetails();
});

// update loan period
loan_period_slider.addEventListener("input", (self) => {
    document.querySelector("#loanYearText").innerText =
        self.target.value + " years";
    N = parseFloat(self.target.value);
    displayDetails();
});

// calculate total Interest payable
function calculateLoanDetails(p, r, emi) {
    /*
      p: principal
      r: rate of interest
      emi: monthly emi
    */
    let totalInterest = 0;
    let yearlyInterest = [];
    let yearPrincipal = [];
    let years = [];
    let year = 1;
    let [counter, principal, interes] = [0, 0, 0];
    while (p > 0) {
        let interest = parseFloat(p) * parseFloat(r);
        p = parseFloat(p) - (parseFloat(emi) - interest);
        totalInterest += interest;
        principal += parseFloat(emi) - interest;
        interes += interest;
        if (++counter == 12) {
            years.push(year++);
            yearlyInterest.push(parseInt(interes));
            yearPrincipal.push(parseInt(principal));
            counter = 0;
        }
    }
    lineChart.data.datasets[0].data = yearPrincipal;
    lineChart.data.datasets[1].data = yearlyInterest;
    lineChart.data.labels = years;
    return totalInterest;
}

// calculate details
function displayDetails() {
    let r = parseFloat(R) / 1200;
    let n = parseFloat(N) * 12;

    let num = parseFloat(P) * r * Math.pow(1 + r, n);
    let denom = Math.pow(1 + r, n) - 1;
    let emi = parseFloat(num) / parseFloat(denom);

    let payabaleInterest = calculateLoanDetails(P, r, emi);

    document.querySelector("#principalAmount").innerText =
        cur + parseFloat(P).toLocaleString("en-US");

    document.querySelector("#interestAmount").innerText =
        cur + parseFloat(payabaleInterest).toLocaleString("en-US");

    document.querySelector("#totalPayable").innerText =
        cur + parseFloat(parseFloat(P) + parseFloat(payabaleInterest)).toLocaleString("en-US");

    document.querySelector("#monthlyLoanPayment").innerText =
        cur + parseFloat(emi).toLocaleString("en-US");

    pieChart.data.datasets[0].data[0] = P;
    pieChart.data.datasets[0].data[1] = payabaleInterest;
    pieChart.update();
    lineChart.update();
}

// Initialize everything
function initialize() {
    document.querySelector("#loanAmountText").innerText =
        cur + parseInt(loan_amt_slider.value).toLocaleString("en-US");
    P = parseFloat(document.getElementById("loanAmount").value);

    document.querySelector("#loanIntrestText").innerText =
        int_rate_slider.value + "%";
    R = parseFloat(document.getElementById("loanIntrest").value);

    document.querySelector("#loanYearText").innerText =
        loan_period_slider.value + " years";
    N = parseFloat(document.getElementById("loanYear").value);

    $("#lineChartLoanCalculator").html('');


    if (lineChart != undefined) {
        lineChart.destroy();
    }

    lineChart = new Chart(document.getElementById("lineChartLoanCalculator"), {
        data: {
            datasets: [
                {
                    type: "line",
                    label: "Yearly Principal paid",
                    borderColor: "rgba(255, 99, 132, 0.2)",
                    data: []
                },
                {
                    type: "line",
                    label: "Yearly Interest paid",
                    borderColor: "rgba(54, 162, 235, 0.2)",
                    data: []
                }
            ],
            labels: []
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: "Yearly Payment Breakdown"
                }
            },
            scales: {
                x: {
                    title: {
                        color: "grey",
                        display: true,
                        text: "Years Passed"
                    }
                },
                y: {
                    title: {
                        color: "grey",
                        display: true,
                        text: "Money in " + cur
                    }
                }
            }
        }
    });

    $("#pieChartLoanCalculator").html('');

    if (pieChart != undefined) {
        pieChart.destroy();
    }

    pieChart = new Chart(document.getElementById("pieChartLoanCalculator"), {
        type: "pie",
        data: {
            labels: ["Principal", "Interest"],
            datasets: [
                {
                    label: "Home Loan Details",
                    data: [0, 0],
                    backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
                    hoverOffset: 4
                }
            ]
        },
        options: {
            aspectRatio: 1.5,
            plugins: {
                title: {
                    display: true,
                    text: "Payment Breakup"
                }
            }
        }
    });
    displayDetails();
}
initialize();



