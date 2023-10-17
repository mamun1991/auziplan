

//if ($.cookie('modal_expenses') != 'loaded')
//{
  // $.cookie('modal_expenses', 'loaded');
   // code to show modal
   //setTimeout(function(){
    //$('#modal_expenses').modal('show');
//}, 2000)

   
   
//}




$(function(){
	$('input').each(function(){
            var $this=$(this);
            if($this.val())
                $this.addClass('used');
            else
                $this.removeClass('used');
	})
});

<?php
if ($currency=="$" || $currency=="$")
{
    $cur_unicode = '\u0024';
}elseif($currency=="₹"){
    $cur_unicode = '\u20B9';
}elseif($currency=="€"){
    $cur_unicode = '\u20ac';
}elseif($currency=="£"){
    $cur_unicode = '\u00a4';

    
}else{
    $cur_unicode = '\u0024';
}
?>


var save_method;

$(document).ready(function(){

    cur = '<?php echo $cur_unicode; ?>';

})



$(function () {
  table = $('#table').DataTable({
    "processing": true, //Feature control the processing indicator.
    "serverSide": true, //Feature control DataTables' server-side processing mode.
    "order": [], //Initial no order.
    "ajax": {
      "url": "<?php echo site_url('expenses/ajax-list')?>",
      "type": "POST",
    },
    "footerCallback": function ( data, start, end, display ) {
            var api = this.api(), data;

            var res = this.api().ajax.json();

            var numFormat = $.fn.dataTable.render.number(0, '.', '\,').display;

            // Remove the formatting to get integer data for summation
            var intVal = function ( i ) {
                return typeof i === 'string' ?
                    i.replace(/[\$,\€,\₹,\£]/g, '')*1 :
                    typeof i === 'number' ?
                        i : 0;
                };

            // Total over this page
            totalweekly = api
                .column(3, { page: 'current'})
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );

            // Update footer
            $(api.column(3).footer()).html(
                res['currency']+number_format(totalweekly)
            );

            totalmonthly = api
                .column(4, { page: 'current'})
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );

            // Update footer
            $(api.column(4).footer()).html(
                res['currency']+number_format(totalmonthly)
            );

            totalquaterly = api
                .column(5, { page: 'current'})
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );

            // Update footer
            $(api.column(5).footer()).html(
                res['currency']+number_format(totalquaterly)
            );

            totalyearly = api
                .column(6, { page: 'current'})
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );

            // Update footer
            $(api.column(6).footer()).html(
                res['currency']+number_format(totalyearly)
            );

        },
       "aoColumnDefs": [{
            "aTargets": [7],
            "mData": null,
            "mRender": function (data, type, full) {
                return '<a id="edit" style=" margin-right: 8px; " class="btn btn-sm btn-primary" href="javascript:void(0)" title="Edit" onclick="edit_expense('+ full[0] +')"><i class="glyphicon glyphicon-pencil"></i></a>' +
                       '<a id="delete" style="" class="btn btn-sm btn-danger" href="javascript:void(0)" title="Delete" onclick="delete_confirmation_expense('+ full[0] +')"><i class="glyphicon glyphicon-trash"></i></a>';
              }
        }]
  });

  $("#form").validate({
    invalidHandler: function(event, validator) {
        var errors = validator.numberOfInvalids();
        if(errors)
        $('.nav a[href="#' + jQuery(validator.errorList[0].element).closest(".tab-pane").attr('id') + '"]').tab('show')
    },
    ignore: "",
    rules: {
      description: {
          required: true
      },
      weekly_cost: {
          required: true,
          number: true,

      },
      monthly_cost: {
          required: true,
          number: true,

      },
      quarterly_cost: {
          required: true,
          number: true,

      },
      yearly_cost: {
          required: true,
          number: true,

      }
    }
  });



  $('#table tbody').on( 'click', 'tr', function () {
      if ( $(this).hasClass('selected') ) {

        $(this).removeClass('selected');

      }else{

        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');

      }
      $('#edit').attr('data-info', $(this).find('td:first').text());
      $('#delete').attr('data-info', $(this).find('td:first').text());
  });

  $('.next-step, .prev-step').on('click', function (e) {
    var $activeTab = $('.tab-pane.active');
    if ( $(e.target).hasClass('next-step') ){

      var nextTab = $activeTab.next('.tab-pane').attr('id');
      $('[href="#'+ nextTab +'"]').removeClass('btn-default');
      $('[href="#'+ nextTab +'"]').tab('show');
      $("body").scrollTop(0);

    }else{

      var prevTab = $activeTab.prev('.tab-pane').attr('id');
      $('[href="#'+ prevTab +'"]').removeClass('btn-default');
      $('[href="#'+ prevTab +'"]').tab('show');
      $("body").scrollTop(0);
    }
  });

  $('#table2 tbody').on( 'click', 'tr', function () {

    if ($(this).hasClass('selected')) {

        $(this).removeClass('selected');

    }else{
        $('#table2 tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
  });

  //redraw the datatables
  //$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  //  var target = $(e.target).attr("href") // activated tab
  //  if ((target == '#menu2')) {
  //      update_graph('loadchart');
  //  }
  //});
  //
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("href") // activated tab
    if ((target == '#menu3')) {

        $.ajax({
          url: "<?php echo site_url('expenses/ajax-summary') ?>",
          type: "GET",
          dataType: "JSON",
          success: function (data)
          {
            var cur = data.currency;
            var grand_total;

            for(i=0;i<=13;i++){

              grand_total = 0;

              //set table header
              if (i < 12){
                $('#month_'+i).html(data.table_header[i])
              }

              if (i < 13){
                $('#summary_mark_'+i).html(cur+number_format(data.total_monthly_marketing / 12,0,'.',','));

                $('#summary_public_rel_'+i).html(cur+number_format(data.total_monthly_public / 12,0,'.',','));

                $('#summary_wadmin_'+i).html(cur+number_format(data.total_monthly_administrator / 12,0,'.',','));

                $('#summary_oth_'+i).html(cur+number_format(data.total_monthly_other/ 12,0,'.',','));

                  grand_total = (data.total_monthly_marketing + data.total_monthly_public + data.total_monthly_administrator + data.total_monthly_other) / 12;

                  $('#summary_total_expenses_projections_'+i).html(cur+number_format(grand_total,0,'.',','))
              }

              if (i == 13){
                $('#summary_mark_'+i).html(cur+number_format(data.total_monthly_marketing,0,'.',','));

                $('#summary_public_rel_'+i).html(cur+number_format(data.total_monthly_public,0,'.',','));

                $('#summary_wadmin_'+i).html(cur+number_format(data.total_monthly_administrator,0,'.',','));

                $('#summary_oth_'+i).html(cur+number_format(data.total_monthly_other,0,'.',','));

                grand_total = (data.total_monthly_marketing + data.total_monthly_public + data.total_monthly_administrator + data.total_monthly_other);

                $('#summary_total_expenses_projections_'+i).html(cur+number_format(grand_total,0,'.',','))
              }
            }

            $('#total_marketing_year').html(cur+number_format(data.total_monthly_marketing,0,'.',','));

            $('#total_public_year').html(cur+number_format(data.total_monthly_public,0,'.',','));

            $('#total_administrator_year').html(cur+number_format(data.total_monthly_administrator,0,'.',','));

            $('#total_other_year').html(cur+number_format(data.total_monthly_other,0,'.',','));

          },
          error: function (jqXHR, textStatus, errorThrown)
          {
              alert('Error fetching data');
          }
        })
    }
  });

  $("#table_summary_expense_prjections").tableHeadFixer({'left' : 1});

});




function reload_table()
{
    table.ajax.reload(function(json){
      reload_graph();
    });


}

function reload_graph(){

  url = "<?php echo base_url(); ?>expenses/ajax-expense_summary";
  $.ajax({

    url : url,
    type: "POST",
    success: function(data)
    {
      var summary_data = JSON.parse(data);
      var cur = summary_data['currency'][0];
      var summary = summary_data.expense_summary;
      var html="";
      var total_y1=0;
      var total_y2=0;
      var total_y3=0;
      var  total_w = 0;
      var  total_m = 0;
      var  total_q = 0;

      for( var i=0;i<summary.length; i++){
        var purpose = summary[i]['purpose'];
        var cost_increase = get_cost_increase_perc(summary_data.cost_increase_percentage,summary[i]);
          html+="<tr id="+summary[i]['purpose']+" onclick='update_graph(\""+purpose+"\")'>"
            +"<td>"
              +"Total "+summary[i]['purpose']
            +"</td>"
            +"<td>"
              +cur+number_format(summary[i]['weekly_cost'], 0, ',' , '.')
            +"</td>"
            +"<td>"
              +cur+number_format(summary[i]['monthly_cost'], 0, ',' , '.')
            +"</td>"
            +"<td>"
              +cur+number_format(summary[i]['quarterly_cost'], 0, ',' , '.')
            +"</td>";

        var year1 = parseInt(summary[i]['yearly_cost']);
        var year2 = parseInt(year1)*cost_increase + parseInt(year1);
        var year3 = parseInt(year2)*cost_increase + parseInt(year2);
        year1;
        year2;
        year3;

        total_y1 = total_y1+year1;
        total_y2 = total_y2+year2;
        total_y3 = total_y3+year3;


        html+=" <td id='"+summary[i]['purpose']+"_year1' data-val='"+year1+"'>"+cur+number_format(year1,0,'.',',')+" </td>";
        html+=" <td id='"+summary[i]['purpose']+"_year2' data-val='"+year2+"'>"+cur+number_format(year2,0,'.',',')+" </td>";
        html+=" <td id='"+summary[i]['purpose']+"_year3' data-val='"+year3+"'>"+cur+number_format(year3,0,'.',',')+" </td>";
        html+="</tr>";
      }

        var total = summary_data.total;
        if(isNaN(total['weekly_cost']) || total['weekly_cost'] == null){
          total_w = 0;
        }else{
          total_w = total['weekly_cost'];
        }
        if(isNaN(total['monthly_cost']) || total['monthly_cost'] == null){
          total_m = 0
        }else{
          total_m = total['monthly_cost'];
        }
        if (isNaN(total['quarterly_cost']) || total['quarterly_cost'] == null){
          total_q = 0;
        }else{
          total_q = total['quarterly_cost'];
        }


        html+='<tr onclick="update_graph(\'loadchart\')" style="background-color: #d3d3d3;">'
          +'<td><b>Total:</b></td>'
          +'<td id="total_w" data-val="'+total_w+'">'
            +'<b>'+cur+number_format(total_w,0,'.',',')+'</b>'
          +'</td>'
          +'<td id="total_m" data-val="'+total_m+'">'
            +'<b>'+cur+number_format(total_m,0,'.',',')+'</b>'
          +'</td>'
          +'<td id="total_q" data-val="'+total_q+'">'
            +'<b>'+cur+number_format(total_q,0,'.',',')+'</b>'
          +'</td>'
          +'<td id="total_y1" data-val="'+total_y1+'">'
            +'<b>'+cur+number_format(total_y1,0,'.',',')+'</b>'
          +'</td>'
          +'<td id="total_y2" data-val="'+total_y2+'">'
            +'<b>'+cur+number_format(total_y2,0,'.',',')+'</b>'
          +'</td>'
          +'<td id="total_y3" data-val="'+total_y3+'">'
            +'<b>'+cur+number_format(total_y3,0,'.',',')+'</b>'
          +'</td>'
          +'</tr>';

          $("#table2 tbody").empty();
          $("#table2 tbody").append(html);


          update_graph('loadchart');
    },
    error: function (jqXHR, textStatus, errorThrown){

        throw(errorThrown);
    }
  });
} /* reload graph */

function get_cost_increase_perc(perc_array,obj){
  var cost = 1;

  if(perc_array.length > 0 && perc_array[0] !== null) {

      if(obj['purpose']=='Marketing')
        cost = perc_array[0]['marketing'];

      if(obj['purpose']=='Administration')
        cost = perc_array[0]['ac'];

      if(obj['purpose']=='Public-Relations')
        cost = perc_array[0]['pr'];

      if(obj['purpose']=='Other')
        cost = perc_array[0]['other'];
  }

  return cost/100;
}

function add_expenses() {

    // var isVisible = document.getElementById("expenses_form").style.display == "block";
    // if (!isVisible)
    //     $("#expenses_form").show();

  save_method = 'add';
  $("label.error").remove();
  $('#form')[0].reset(); // reset form on modal
  $('.form-group').removeClass('has-error'); // clear error class
  $('.help-block').empty(); // clear error string
  //$('#modal_form').modal('show'); // show bootstrap modal
  //$('.modal-title').text('Add Expense'); // Set Title to Bootstrap modal title
}



function cancel() {
    $("#collapseExpneses").collapse("hide");
    $('#modalConfirmYesNo').modal('show');
    $('#modalConfirmYesNo').zIndex(9999);
    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure wanted to cancel this expense item?");
    $("#btnYesConfirmYesNo").off('click').click(function () {
    $('#myModal2').modal('hide');
    $('#form_expenses')[0].reset();
    $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {
        $('#modalConfirmYesNo').modal('hide');
    });
}

function save(){

  $('#btnSave').text('saving...'); //change button text
  $('#btnSave').attr('disabled',true); //set button disable
  var url;

  if(save_method == 'add') {

    url = "<?php echo base_url(); ?>expenses/ajax-add";
  }else{

    url = "<?php echo base_url(); ?>expenses/ajax-update";
  }

  $.ajax({
      url : url,
      type: "POST",
      data: $('#form').serialize(),
      dataType: "JSON",
      success: function(data)
      {

          if(data.status) //if success close modal and reload ajax table
          {
              if (save_method == 'add'){
                var msg = "Expense added successfully, <br/> Do you want to add another ???"
              }else{
                var msg = "Expense edited successfully !!! <br/> Do you want to add expenses ???"
              }

              $('#modalConfirmYesNo').modal('show');

              $("#lblTitleConfirmYesNo").html("");
              $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                +"<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                +"<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                +"c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                +"c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                +"<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                +"<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                +"<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                +"</svg>"
                +"</div>"
                +"<p class='alert-box'>"+msg+"</p>");

              $("#btnYesConfirmYesNo").off('click').click(function () {

                  add_expenses();
                  reload_table();

                  $('#modalConfirmYesNo').modal('hide');
              });

              $("#btnNoConfirmYesNo").off('click').click(function () {

                  $('#expenses_form').hide();
                  reload_table();
                  $('#modalConfirmYesNo').modal('hide');
              });

          }

          $('#btnSave').text('save'); //change button text
          $('#btnSave').attr('disabled',false); //set button enable

      },
      error: function (jqXHR, textStatus, errorThrown)
      {
          alert('Error adding / update data');
          $('#btnSave').text('save'); //change button text
          $('#btnSave').attr('disabled',false); //set button enable

      }
  });
} /* end function save() */

function edit_expense(e_id){

  var id=e_id;
  save_method = 'update';
  $("label.error").remove();
  $('#form')[0].reset(); // reset form on modals
  $('.form-group').removeClass('has-error'); // clear error class
  $('.help-block').empty(); // clear error string

  //Ajax Load data from ajax
  $.ajax({
    url : "<?php echo base_url(); ?>expenses/ajax-edit/" + id,
    type: "GET",
    dataType: "JSON",
    success: function(data)
    {
        $('[name="id"]').val(data.id);
        $('[name="description"]').val(data.description);
        $('[name="weekly_cost"]').val(number_format(data.weekly_cost,0,'.',','));
        $('[name="monthly_cost"]').val(number_format(data.monthly_cost,0,'.',','));
        $('[name="quarterly_cost"]').val(number_format(data.quarterly_cost,0,'.',','));
        $('[name="yearly_cost"]').val(number_format(data.yearly_cost,0,'.',','));
        $('[name="purpose"]').val(data.purpose);

        // var isVisible = document.getElementById("expenses_form").style.display == "block";
        // if (!isVisible) {
        //     $("#expenses_form").show();
        // }
        $('#myModal2').modal('show');
        $('#expense1').trigger('click');
        //$('#modal_form').modal('show'); // show bootstrap modal when complete loaded
        //$('.modal-title').text('Edit Expense'); // Set title to Bootstrap modal title
    },
      error: function (xhr, ajaxOptions, thrownError) {

          alert('Error loading data');

          console.log(xhr.status);
          console.log(xhr.responseText);
          console.log(thrownError);

      }
  });
} /* end function edit() */

function delete_confirmation_expense(id) {
    /*if (confirm("Do you want insert Bill of Materials ??") == true) {

        $('.nav a[href="#add_menu1"]').tab('show');
    }else{

        $('#markup_on_cost').focus();
    }*/
    $('#modalConfirmYesNo').modal('show');

    $("#lblTitleConfirmYesNo").html("User Confirmation");
    $("#lblMsgConfirmYesNo").html("Are you sure you want to delete this expanses ??");

    $("#btnYesConfirmYesNo").off('click').click(function () {

        delete_expense(id)

        $('#modalConfirmYesNo').modal('hide');
    });

    $("#btnNoConfirmYesNo").off('click').click(function () {


        $('#modalConfirmYesNo').modal('hide');
    });


  }

function delete_expense(e_id){

  //if(confirm('Are you sure delete this data?')){

    var id=e_id;
    // ajax delete data to database
    $.ajax({
        url : "<?php echo base_url(); ?>expenses/ajax-delete/"+id,
        type: "POST",
        dataType: "JSON",
        success: function(data)
        {
            //if success reload ajax table
            //$('#modal_form').modal('hide');
            reload_table();


        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert('Error deleting data');
        }
    });
  //}
} /* end function delete() */

function calculateCostFromYearly(){
  var yearly = parseFloat($("#yearly_cost").val().replace(/,/g,''));
    if(!isNaN(yearly))
    {
      $("#quarterly_cost").val(number_format(yearly/4,0,'.',','));
      $("#weekly_cost").val(number_format(yearly/52),0,'.',',');
      $("#monthly_cost").val(number_format(yearly/12,0,'.',','));
    }
}

function calculateCostFromQuaterly(){
  var quarterly = parseFloat($("#quarterly_cost").val().replace(/,/g,''));
    if(!isNaN(quarterly)){

        $("#yearly_cost").val(number_format(quarterly * 4,0,'.',','));
        $("#weekly_cost").val(number_format(quarterly * 4 / 52,0,'.',','));
        $("#monthly_cost").val(number_format(quarterly * 4 / 12,0,'.',','));
    }
}

function calculateCostFromWeekly(){

  var weekly = parseFloat($("#weekly_cost").val().replace(/,/g,''));
    if(!isNaN(weekly) && weekly > 0){

      $("#yearly_cost").val(number_format(weekly * 52,0,'.',','));
      $("#quarterly_cost").val(number_format(weekly * 52 / 4,0,'.',','));
      $("#monthly_cost").val(number_format(weekly * 52 / 12,0,'.',','));

    }


}
function calculateCostFromMonthly(){
  var monthly_cost = parseFloat($("#monthly_cost").val().replace(/,/g,''));
    if(!isNaN(monthly_cost)){

      $("#yearly_cost").val(number_format(monthly_cost * 12,0,'.',','));
      $("#weekly_cost").val(number_format(monthly_cost * 12 / 52,0,'.',','));
      $("#quarterly_cost").val(number_format(monthly_cost * 12 / 4,0,'.',','));
    }
}


/*$('#saveResults').click(function(){
   $("#success_msg").text("Comment Saved successfully!");
});*/



  //$("#ex8").change(function(){
 $('#ex8').on("input change", function(){
   var sv = parseInt($("#ex8").val());
   $("#m_perc").text(sv);
   $("#ex8").val(sv);
   if($("#Marketing").length>0){

   var account = "Marketing";
   var years= [];
   years['year1'] = parseInt($("#Marketing_year1").attr('data-val'));
   years['year2'] = parseInt( years['year1'] * (sv/100)) + years['year1'];
   years['year3'] = parseInt( years['year2'] * (sv/100)) + years['year2'];

   $("#Marketing_year2").attr('data-val',years['year2']);
   $("#Marketing_year3").attr('data-val',years['year3']);
   $("#Marketing_year2").text(cur+number_format(years['year2'],0,'.',','));
   $("#Marketing_year3").text(cur+number_format(years['year3'],0,'.',','));
   calculate_total();
   update_graph(account);

   }

});
$('#ex9').on("input change", function(){
   var sv = parseInt($("#ex9").val());
   $("#p_perc").text(sv);
   $("#ex9").val(sv);
   if($("#Public-Relations").length>0)
   {
      var account = "Public-Relations";
      var years= [];
      years['year1'] = parseInt($("#Public-Relations_year1").attr('data-val'));
      years['year2'] = parseInt( years['year1'] * (sv/100)) + years['year1'];
      years['year3'] = parseInt( years['year2'] * (sv/100)) + years['year2'];

      $("#Public-Relations_year2").attr('data-val',years['year2']);
      $("#Public-Relations_year3").attr('data-val',years['year3']);
      $("#Public-Relations_year2").text(cur+number_format(years['year2'],0,'.',','));
      $("#Public-Relations_year3").text(cur+number_format(years['year3'],0,'.',','));
      calculate_total();
      update_graph(account);
  }
});
$('#ex10').on("input change", function(){
    var sv = parseInt($("#ex10").val());
    $("#a_perc").text(sv);
    $("#ex10").val(sv);
    if($("#Administration").length>0){
      var account = "Administration";
      var years= [];
      years['year1'] = parseInt($("#Administration_year1").attr('data-val'));
      years['year2'] = parseInt( years['year1'] * (sv/100)) + years['year1'];
      years['year3'] = parseInt( years['year2'] * (sv/100)) + years['year2'];

      $("#Administration_year2").attr('data-val',years['year2']);
      $("#Administration_year3").attr('data-val',years['year3']);
      $("#Administration_year2").text(cur+number_format(years['year2'],0,'.',','));
      $("#Administration_year3").text(cur+number_format(years['year3'],0,'.',','));
      calculate_total();
      update_graph(account);
    }
});
$('#ex11').on("input change", function(){
    var sv = parseInt($("#ex11").val());
    $("#o_perc").text(sv);
    $("#ex11").val(sv);
    if($("#Other").length>0){
      var account = "Other";
      var years= [];
      years['year1'] = parseInt($("#Other_year1").attr('data-val'));
      years['year2'] = parseInt( years['year1'] * (sv/100)) + years['year1'];
      years['year3'] = parseInt( years['year2'] * (sv/100)) + years['year2'];

      $("#Other_year2").attr('data-val',years['year2']);
      $("#Other_year3").attr('data-val',years['year3']);
      $("#Other_year2").text(cur+number_format(years['year2'],0,'.',','));
      $("#Other_year3").text(cur+number_format(years['year3'],0,'.',','));
      calculate_total();
      update_graph(account);
    }
});

$('#save').click(function(){
  var m_perc = $("#ex8").val();
  var p_perc = $("#ex9").val();
  var a_perc = $("#ex10").val();
  var o_perc = $("#ex11").val();

  $.ajax({
    type: 'GET',
    url: "<?php echo site_url('Expenses/updateExpensesIncrease'); ?>?m="+m_perc+"&p="+p_perc+"&a="+a_perc+"&o="+o_perc,

    success:
      function(data){

        $('#modalConfirmYesNo').modal('show');

          $("#lblTitleConfirmYesNo").html("");
          $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
            +"<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
            +"<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
            +"c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
            +"c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
            +"<circle class='path' fill='none' stroke='#3C8DBC' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
            +"<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
            +"<circle class='spin' fill='none' stroke='#3C8DBC' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
            +"</svg>"
            +"</div>"
            +"<p class='alert-box'>Your changes have been saved successfully</p>");

          $("#btnNoConfirmYesNo").hide();

          $("#btnYesConfirmYesNo").html('Okey');

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

function calculate_total(){

  var total_y1 = 0;
  var total_y2 = 0;
  var total_y3 = 0;

  total_y1= parseFloat( ($("#Marketing_year1").length>0) ? $("#Marketing_year1").attr('data-val'):0.00 ) + parseFloat( ($("#Public-Relations_year1").length>0) ? $("#Public-Relations_year1").attr('data-val'):0.00 ) + parseFloat( ($("#Administration_year1").length>0) ? $("#Administration_year1").attr('data-val'):0.00 ) + parseFloat( ($("#Other_year1").length>0) ? $("#Other_year1").attr('data-val'):0.00 );
  total_y2= parseFloat( ($("#Marketing_year2").length>0) ? $("#Marketing_year2").attr('data-val'):0.00 ) + parseFloat( ($("#Public-Relations_year2").length>0) ? $("#Public-Relations_year2").attr('data-val'):0.00 ) + parseFloat( ($("#Administration_year2").length>0) ? $("#Administration_year2").attr('data-val'):0.00 ) + parseFloat( ($("#Other_year2").length>0) ? $("#Other_year2").attr('data-val'):0.00 );
  total_y3= parseFloat( ($("#Marketing_year3").length>0) ? $("#Marketing_year3").attr('data-val'):0.00 ) + parseFloat( ($("#Public-Relations_year3").length>0) ? $("#Public-Relations_year3").attr('data-val'):0.00 ) + parseFloat( ($("#Administration_year3").length>0) ? $("#Administration_year3").attr('data-val'):0.00 ) + parseFloat( ($("#Other_year3").length>0) ? $("#Other_year3").attr('data-val'):0.00 );

  $("#total_y1").attr('data-val',total_y1);
  $("#total_y2").attr('data-val',total_y2);
  $("#total_y3").attr('data-val',total_y3);

  $("#total_y1").text(cur+number_format(total_y1,0,'.',','));
  $("#total_y2").text(cur+number_format(total_y2,0,'.',','));
  $("#total_y3").text(cur+number_format(total_y3,0,'.',','));
}


$(document).ready(function(){

  $('.next').click(function(){

    var nextId = $(this).parents('.tab-pane').next().attr("id");
    $('[href=#'+nextId+']').tab('show');
    return false;
    
  })
  
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    
    //update progress
    var step = $(e.target).data('step');
    var percent = (parseInt(step) / 3) * 100;
    
    $('.progress-bar').css({width: percent + '%'});
    $('.progress-bar').text("Step " + step + " of 3");
    
    //e.relatedTarget // previous tab
    
  })
  
  $('.first').click(function(){
  
    $('#myWizard a:first').tab('show')
  
  })

});



$(".wizard_1").each(function() {
  var index = 0;
  var wizard_1 = $(this);

  $(wizard_1).prepend('<div class="wizard_1Progress"></div>');
  $(wizard_1).prepend('<div class="header"></div>');

  $(wizard_1).find(".wizard_1Panel").each(function() {

    $(wizard_1).find(".wizard_1Progress").append("<div>" + $(this).data("title") + "</div>");
  });

  $(wizard_1).find(".wizard_1Progress div").click(function() {
        if ($(this).index() == 2){
            loadSummaryExpended();

            selectPanel($(this).index());
        }else{

            selectPanel($(this).index());
        }
    })

  $(wizard_1).append('<div class="footer"><button id="btnPrev" class="btn btn-default">Prev</button><button id="btnNext" class="btn btn-primary">Next</button></div>');

  $(wizard_1).find("#btnPrev").click(function() {
    selectPanel($(".wizard_1Progress .selected").index() - 1);
  });
  $(wizard_1).find("#btnNext").click(function() {
    if ($(".wizard_1Progress .selected").index() == 1){
      loadSummaryExpended();

      selectPanel($(".wizard_1Progress .selected").index() + 1);
    }else{
      selectPanel($(".wizard_1Progress .selected").index() + 1);
    }
  });

  selectPanel(0);

  function selectPanel(index) {


      if (index == 0) {
        $(wizard_1).find("#btnPrev").fadeOut();
      } else {
        $(wizard_1).find("#btnPrev").fadeIn();
      }

      if (index == $(".wizard_1Progress div").length - 1) {
        $(wizard_1).find("#btnNext").fadeOut();
      } else {
        $(wizard_1).find("#btnNext").fadeIn();
      }

      $(".wizard_1Progress .selected").removeClass("selected");
      var selectedTab = $(".wizard_1Progress div").get(index);
      $(selectedTab).addClass("selected");

      $(".wizard_1Panel").slideUp();
      var selectedPanel = $(wizard_1).find(".wizard_1Panel").get(index);
      $(selectedPanel).slideDown();
    }

  function loadSummaryExpended(){

    $.ajax({
          url: "<?php echo site_url('expenses/ajax-summary'); ?>",
          type: "GET",
          dataType: "JSON",
          success: function (data)
          {
            var cur = data.currency;
            var grand_total;

            for(i=0;i<=13;i++){

              grand_total = 0;

              //set table header
              if (i < 12){
                $('#month_'+i).html(data.table_header[i])
              }

              if (i < 13){
                $('#summary_mark_'+i).html(cur+number_format(data.total_monthly_marketing / 12,0,'.',','));

                $('#summary_public_rel_'+i).html(cur+number_format(data.total_monthly_public / 12,0,'.',','));

                $('#summary_wadmin_'+i).html(cur+number_format(data.total_monthly_administrator / 12,0,'.',','));

                $('#summary_oth_'+i).html(cur+number_format(data.total_monthly_other/ 12,0,'.',','));

                  grand_total = (data.total_monthly_marketing + data.total_monthly_public + data.total_monthly_administrator + data.total_monthly_other) / 12;

                  $('#summary_total_expenses_projections_'+i).html(cur+number_format(grand_total,0,'.',','))
              }

              if (i == 13){
                $('#summary_mark_'+i).html(cur+number_format(data.total_monthly_marketing,0,'.',','));

                $('#summary_public_rel_'+i).html(cur+number_format(data.total_monthly_public,0,'.',','));

                $('#summary_wadmin_'+i).html(cur+number_format(data.total_monthly_administrator,0,'.',','));

                $('#summary_oth_'+i).html(cur+number_format(data.total_monthly_other,0,'.',','));

                grand_total = (data.total_monthly_marketing + data.total_monthly_public + data.total_monthly_administrator + data.total_monthly_other);

                $('#summary_total_expenses_projections_'+i).html(cur+number_format(grand_total,0,'.',','))
              }
            }

            $('#total_marketing_year').html(cur+number_format(data.total_monthly_marketing,0,'.',','));

            $('#total_public_year').html(cur+number_format(data.total_monthly_public,0,'.',','));

            $('#total_administrator_year').html(cur+number_format(data.total_monthly_administrator,0,'.',','));

            $('#total_other_year').html(cur+number_format(data.total_monthly_other,0,'.',','));

          },
          error: function (jqXHR, textStatus, errorThrown)
          {
              alert('Error fetching data');
          }
        })

  }




});

  function add_expense(){
      $('#myModal2').modal('show');
      $('#expense1').trigger('click');
      save_method = 'add';
  }



<script>
var cur = '<?php echo $cur; ?>';


<?php
if ($currency == "AUD" || $currency == "USD") {
    $cur_unicode = '\u0024';
} elseif ($currency == "INR") {
    $cur_unicode = '\u20B9';
} elseif ($currency == "EUR") {
    $cur_unicode = '\u20ac';
    
} elseif ($currency == "UK") {
    $cur_unicode = '\u00a3';
    
    
    
    
} else {
    $cur_unicode = '\u0024';
}
?>
var cur = '<?php echo $cur_unicode; ?>';


); ?>assets/js/user_dashboard.js">


</script>
