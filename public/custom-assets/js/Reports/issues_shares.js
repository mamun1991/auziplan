function issued_shared(){

	var html = '';
	$.ajax({
	    url: "Report/IssuedShares/ajax-issued_shares",
	    type: "GET",
	    dataType: "JSON",
	      success: function (issue){

	      	html += "<form method='post' action='' id='issued_form'>"
          +"<div class='panel-group' id='issued_shares_accordion'>"
	      	+"<div class='panel panel-primary'>"
      			+"<div class='panel-heading'>"
	            +"<h4 class='panel-title'>"
	              +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#issued_table' class='accordion-toggle'>Funding Valuation</a>"
	            +"</h4>"
	          +"</div>"
	          +"<div id='issued_table' class='panel-collapse collapse in'>"
          		+"<div class='table-responsive'>"
        				+"<table id='table-issues_0' class='table table-striped table-condensed'>"
        						+"<thead>"
                      +"<tr class='warning'>"
          							+"<th width='15%'>Funding Valuations</th>"
                        +"<th width='8%'>Pre Funding</th>"
                        +"<th width='3%'>&nbsp;</th>"
                        +"<th width='8%'>Founders Issue</th>"
                        +"<th width='3%'>&nbsp;</th>"
                        +"<th width='8%'>StartUp Round</th>"
                        +"<th width='3%'>&nbsp;</th>"
                        +"<th width='8%'>Second Round</th>"
                        +"<th width='3%'>&nbsp;</th>"
                        +"<th width='7%'>Third Round</th>"
                        +"<th width='3%'>&nbsp;</th>"
                        +"<th width='7%'>Float / IPO</th>"
                        +"<th width='3%'>&nbsp;</th>"
                        +"<th width='15%'>Trade Sale after Start up</th>"
                        +"<th width='3%'>&nbsp;</th>"
                      +"</tr>"
        						+"</thead>"
        						+"<tr class='success'>"
              				+"<td colspan='15'>&nbsp;</td>"
              			+"</tr>"
        						+"<tr>"
                  		+"<td width='15%'>Share Issue</td>"
              				+"<td colspan='2'>&nbsp;</td>"
              				+"<td id='share_issue_3'>"+issue['currency']+' '+number_format(issue['share_issue_3'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
                      +"<td>"
                        +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='share_issue_5' name='share_issue_5' value='"+issue['share_issue_5']+"' onchange='calculationIssuedShare()'>"
                        +"</div>"
                      +"</td>"
                      +"<td>&nbsp;</td>"
                      +"<td>"
                        +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='share_issue_7' name='share_issue_7' value='"+issue['share_issue_7']+"' onchange='calculationIssuedShare()'>"
                        +"</div>"
                      +"</td>"
                      +"<td>&nbsp;</td>"
                      +"<td>"
                        +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='share_issue_9' name='share_issue_9' value='"+issue['share_issue_9']+"' onchange='calculationIssuedShare()'>"
                        +"</div>"
                      +"</td>"
                      +"<td>&nbsp;</td>"
                      +"<td>"
                        +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='share_issue_11' name='share_issue_11' value='"+issue['share_issue_11']+"' onchange='calculationIssuedShare()'>"
                        +"</div>"
                      +"</td>"
                      +"<td>&nbsp;</td>"
                      +"<td>"
                        +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='share_issue_13' name='share_issue_13' value='"+issue['share_issue_13']+"' onchange='calculationIssuedShare()'>"
                        +"</div>"
                      +"</td>"
                      +"<td>&nbsp;</td>"
              			+"</tr>"
              			+"<tr>"
                  		+"<td width='15%'>Price / Share</td>"
              				+"<td colspan='2'>&nbsp;</td>"
              				+"<td id='price_share_2'>"+issue['currency']+' '+number_format(issue['price_share_2'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td>"
                          +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='price_share_3' name='price_share_3' value='"+issue['price_share_3']+"' onchange='calculationIssuedShare()'>"
                          +"</div>"
                      +"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td>"
                          +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='price_share_4' name='price_share_4' value='"+issue['price_share_4']+"' onchange='calculationIssuedShare()'>"
                          +"</div>"
                      +"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td>"
                          +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='price_share_5' name='price_share_5' value='"+issue['price_share_5']+"' onchange='calculationIssuedShare()'>"
                          +"</div>"
                      +"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td>"
                          +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='price_share_6' name='price_share_6' value='"+issue['price_share_6']+"' onchange='calculationIssuedShare()'>"
                          +"</div>"
                      +"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td>"
                          +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='price_share_7' name='price_share_7' value='"+issue['price_share_7']+"' onchange='calculationIssuedShare()'>"
                          +"</div>"
                      +"</td>"
                      +"<td>&nbsp;</td>"
              			+"</tr>"
              			+"<tr class='info'>"
                  		+"<td width='15%'>Capital Raised</td>"
              				+"<td colspan='2'>&nbsp;</td>"
              				+"<td id='capital_raised_3'>"+issue['currency']+' '+number_format(issue['capital_raised_3'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='capital_raised_5'>"+issue['currency']+' '+number_format(issue['capital_raised_5'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='capital_raised_7'>"+issue['currency']+' '+number_format(issue['capital_raised_7'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='capital_raised_9'>"+issue['currency']+' '+number_format(issue['capital_raised_9'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='capital_raised_11'>"+issue['currency']+' '+number_format(issue['capital_raised_11'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='capital_raised_13'>"+issue['currency']+' '+number_format(issue['capital_raised_13'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              			+"</tr>"
              			+"<tr>"
                  		+"<td width='15%'>Issues Shares</td>"
              				+"<td>"
                          +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='issues_shared_1' name='issues_shared_1' value='"+issue['issues_shared_1']+"' onchange='calculationIssuedShare()'>"
                          +"</div>"
                      +"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='issues_shared_2'>"+issue['currency']+' '+number_format(issue['issues_shared_2'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='issues_shared_3'>"+issue['currency']+' '+number_format(issue['issues_shared_3'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='issues_shared_4'>"+issue['currency']+' '+number_format(issue['issues_shared_4'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='issues_shared_5'>"+issue['currency']+' '+number_format(issue['issues_shared_5'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='issues_shared_6'>"+issue['currency']+' '+number_format(issue['issues_shared_6'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='issues_shared_7'>"+issue['currency']+' '+number_format(issue['issues_shared_7'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              			+"</tr>"
              			+"<tr>"
                  		+"<td width='15%'>Price / Share</td>"
              				+"<td>"
                          +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='price_share2_1' name='price_share2_1' value='"+issue['price_share2_1']+"' onchange='calculationIssuedShare()'>"
                          +"</div>"
                      +"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='price_share2_2'>"+issue['currency']+' '+number_format(issue['price_share2_2'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='price_share2_3'>"+issue['currency']+' '+number_format(issue['price_share2_3'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='price_share2_4'>"+issue['currency']+' '+number_format(issue['price_share2_4'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='price_share2_5'>"+issue['currency']+' '+number_format(issue['price_share2_5'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='price_share2_6'>"+issue['currency']+' '+number_format(issue['price_share2_6'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='price_share2_7'>"+issue['currency']+' '+number_format(issue['price_share2_7'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              			+"</tr>"
              			+"<tr class='info'>"
                  		+"<td width='15%'>Capitalisation</td>"

              				+"<td id='capitalisation_1'>"+issue['currency']+' '+number_format(issue['capitalisation_1'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='capitalisation_2'>"+issue['currency']+' '+number_format(issue['capitalisation_2'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='capitalisation_3'>"+issue['currency']+' '+number_format(issue['capitalisation_3'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='capitalisation_4'>"+issue['currency']+' '+number_format(issue['capitalisation_4'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='capitalisation_5'>"+issue['currency']+' '+number_format(issue['capitalisation_5'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='capitalisation_6'>"+issue['currency']+' '+number_format(issue['capitalisation_6'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              				+"<td id='capitalisation_7'>"+issue['currency']+' '+number_format(issue['capitalisation_7'],0,'.',',')+"</td>"
                      +"<td>&nbsp;</td>"
              			+"</tr>"
            			+"</table>"
              +"</div>"
          	+"</div>"
          +"</div>"
          +"<div class='panel panel-primary'>"
            +"<div class='panel-heading'>"
              +"<h4 class='panel-title'>"
                +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#issued_table_1' class='accordion-toggle  collapsed'>Issued Shares</a>"
              +"</h4>"
            +"</div>"
            +"<div id='issued_table_1' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"

                +"<table id='table-issues_1' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                      +"<th width='15%'>Funding Valuations</th>"
                      +"<th width='8%'>Pre Funding</th>"
                      +"<th width='3%'>%</th>"
                      +"<th width='8%'>Founders Issue</th>"
                      +"<th width='3%'>%</th>"
                      +"<th width='8%'>StartUp Round</th>"
                      +"<th width='3%'>%</th>"
                      +"<th width='8%'>Second Round</th>"
                      +"<th width='3%'>%</th>"
                      +"<th width='7%'>Third Round</th>"
                      +"<th width='3%'>%</th>"
                      +"<th width='7%'>Float / IPO</th>"
                      +"<th width='3%'>%</th>"
                      +"<th width='15%'>Trade Sale after Start up</th>"
                      +"<th width='3%'>%</th>"
                    +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                    +"<td colspan='15'>&nbsp;</td>"
                  +"</tr>"
                  for(i=0;i<issue['num_director'];i++){
                    html +="<tr>"
                      +"<td width='15%'>"+issue['director_'+i]+"</td>"
                      +"<td width='8%'>"
                        +"<div class='form-group'>"
                          +"<input type='number' class='form-control inputfont' id='director_"+i+"_1' name='director_"+i+"_1' value='"+issue['director_'+i+'_1']+"' onchange='calculationIssuedShare()'>"
                        +"</div>"
                      +"</td>"
                      +"<td width='3%' id='percent_director_"+i+"_2'>"+number_format(issue['director_'+i+'_2'],0,'.',',')+"%</td>"
                      +"<td width='8%' id='director_"+i+"_3'>"+issue['currency']+' '+number_format(issue['director_'+i+'_3'],0,'.',',')+"</td>"
                      +"<td width='3%' id='percent_director_"+i+"_4'>"+number_format(issue['director_'+i+'_4'],0,'.',',')+"%</td>"
                      +"<td width='8%' id='director_"+i+"_5'>"+issue['currency']+' '+number_format(issue['director_'+i+'_5'],0,'.',',')+"</td>"
                      +"<td width='3%' id='percent_director_"+i+"_6'>"+number_format(issue['director_'+i+'_6'],0,'.',',')+"%</td>"
                      +"<td width='8%' id='director_"+i+"_7'>"+issue['currency']+' '+number_format(issue['director_'+i+'_7'],0,'.',',')+"</td>"
                      +"<td width='3%' id='percent_director_"+i+"_8'>"+number_format(issue['director_'+i+'_8'],0,'.',',')+"%</td>"
                      +"<td width='7%' id='director_"+i+"_9'>"+issue['currency']+' '+number_format(issue['director_'+i+'_9'],0,'.',',')+"</td>"
                      +"<td width='3%' id='percent_director_"+i+"_10'>"+number_format(issue['director_'+i+'_10'],0,'.',',')+"%</td>"
                      +"<td width='7%' id='director_"+i+"_11'>"+issue['currency']+' '+number_format(issue['director_'+i+'_11'],0,'.',',')+"</td>"
                      +"<td width='3%' id='percent_director_"+i+"_12'>"+number_format(issue['director_'+i+'_12'],0,'.',',')+"%</td>"
                      +"<td width='15%' id='director_"+i+"_13'>"+issue['currency']+' '+number_format(issue['director_'+i+'_13'],0,'.',',')+"</td>"
                      +"<td width='3%' id='percent_director_"+i+"_14'>"+number_format(issue['director_'+i+'_14'],0,'.',',')+"%</td>"
                    +"</tr>"
                  }
              html +="<tr>"
                    +"<td width='15%'>First Round Investor</td>"
                     +"<td colspan='4'>&nbsp;</td>"
                    +"<td id='f_round_investor_5'>"+issue['currency']+' '+number_format(issue['f_round_investor_5'],0,'.',',')+"</td>"
                    +"<td width='3%' id='f_round_investor_6'>"+number_format(issue['f_round_investor_6'],0,'.',',')+"%</td>"
                    +"<td id='f_round_investor_7'>"+issue['currency']+' '+number_format(issue['f_round_investor_7'],0,'.',',')+"</td>"
                    +"<td width='3%' id='f_round_investor_8'>"+number_format(issue['f_round_investor_8'],0,'.',',')+"%</td>"
                    +"<td id='f_round_investor_9'>"+issue['currency']+' '+number_format(issue['f_round_investor_9'],0,'.',',')+"</td>"
                    +"<td width='3%' id='f_round_investor_10'>"+number_format(issue['f_round_investor_10'],0,'.',',')+"%</td>"
                    +"<td id='f_round_investor_11'>"+issue['currency']+' '+number_format(issue['f_round_investor_11'],0,'.',',')+"</td>"
                    +"<td width='3%' id='f_round_investor_12'>"+number_format(issue['f_round_investor_12'],0,'.',',')+"%</td>"
                    +"<td id='f_round_investor_13'>"+issue['currency']+' '+number_format(issue['f_round_investor_13'],0,'.',',')+"</td>"
                    +"<td width='3%' id='f_round_investor_14'>"+number_format(issue['f_round_investor_14'],0,'.',',')+"%</td>"
                +"</tr>"
                +"<tr>"
                    +"<td width='15%'>Second Round Investor</td>"
                     +"<td colspan='6'>&nbsp;</td>"
                    +"<td id='s_round_investor_7'>"+issue['currency']+' '+number_format(issue['s_round_investor_7'],0,'.',',')+"</td>"
                    +"<td width='3%' id='s_round_investor_8'>"+number_format(issue['s_round_investor_8'],0,'.',',')+"%</td>"
                    +"<td id='s_round_investor_9'>"+issue['currency']+' '+number_format(issue['s_round_investor_9'],0,'.',',')+"</td>"
                    +"<td width='3%' id='s_round_investor_10'>"+number_format(issue['s_round_investor_10'],0,'.',',')+"%</td>"
                    +"<td id='s_round_investor_11'>"+issue['currency']+' '+number_format(issue['s_round_investor_11'],0,'.',',')+"</td>"
                    +"<td width='3%' id='s_round_investor_12'>"+number_format(issue['s_round_investor_12'],0,'.',',')+"%</td>"
                    +"<td id='s_round_investor_13'>"+issue['currency']+' '+number_format(issue['s_round_investor_13'],0,'.',',')+"</td>"
                    +"<td width='3%' id='s_round_investor_14'>"+number_format(issue['s_round_investor_14'],0,'.',',')+"%</td>"
                +"</tr>"
                +"<tr>"
                    +"<td width='15%'>Third Round Investor</td>"
                     +"<td colspan='8'>&nbsp;</td>"
                    +"<td id='t_round_investor_9'>"+issue['currency']+' '+number_format(issue['t_round_investor_9'],0,'.',',')+"</td>"
                    +"<td width='3%' id='t_round_investor_10'>"+number_format(issue['t_round_investor_10'],0,'.',',')+"%</td>"
                    +"<td id='t_round_investor_11'>"+issue['currency']+' '+number_format(issue['t_round_investor_11'],0,'.',',')+"</td>"
                    +"<td width='3%' id='t_round_investor_12'>"+number_format(issue['t_round_investor_12'],0,'.',',')+"%</td>"
                    +"<td colspan='2'>&nbsp;</td>"
                +"</tr>"
                +"<tr>"
                    +"<td width='15%'>Public Float</td>"
                    +"<td colspan='10'>&nbsp;</td>"
                    +"<td id='public_float_11'>"+issue['currency']+' '+number_format(issue['public_float_11'],0,'.',',')+"</td>"
                    +"<td width='3%' id='public_float_12'>"+number_format(issue['public_float_12'],0,'.',',')+"%</td>"
                    +"<td colspan='2'>&nbsp;</td>"
                +"</tr>"
                +"<tr class='info'>"
                    +"<td width='15%'>Total</td>"
                    +"<td id='issue_total_1'>"+issue['currency']+' '+number_format(issue['issue_total_1'],0,'.',',')+"</td>"
                      +"<td width='3%' id='issue_total_2'>"+number_format(issue['issue_total_2'],0,'.',',')+"%</td>"
                      +"<td id='issue_total_3'>"+issue['currency']+' '+number_format(issue['issue_total_3'],0,'.',',')+"</td>"
                      +"<td width='3%' id='issue_total_4'>"+number_format(issue['issue_total_4'],0,'.',',')+"%</td>"
                      +"<td id='issue_total_5'>"+issue['currency']+' '+number_format(issue['issue_total_5'],0,'.',',')+"</td>"
                      +"<td width='3%' id='issue_total_6'>"+number_format(issue['issue_total_6'],0,'.',',')+"%</td>"
                      +"<td id='issue_total_7'>"+issue['currency']+' '+number_format(issue['issue_total_7'],0,'.',',')+"</td>"
                      +"<td width='3%' id='issue_total_8'>"+number_format(issue['issue_total_8'],0,'.',',')+"%</td>"
                      +"<td id='issue_total_9'>"+issue['currency']+' '+number_format(issue['issue_total_9'],0,'.',',')+"</td>"
                      +"<td width='3%' id='issue_total_10'>"+number_format(issue['issue_total_10'],0,'.',',')+"%</td>"
                      +"<td id='issue_total_11'>"+issue['currency']+' '+number_format(issue['issue_total_11'],0,'.',',')+"</td>"
                      +"<td width='3%' id='issue_total_12'>"+number_format(issue['issue_total_12'],0,'.',',')+"%</td>"
                      +"<td id='issue_total_13'>"+issue['currency']+' '+number_format(issue['issue_total_13'],0,'.',',')+"</td>"
                      +"<td width='3%' id='issue_total_14'>"+number_format(issue['issue_total_14'],0,'.',',')+"%</td>"
                +"</tr>"

                +"</table>"
              +"</div>"
            +"</div>"
          +"</div>"
          +"<div class='panel panel-primary'>"
            +"<div class='panel-heading'>"
              +"<h4 class='panel-title'>"
                +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#issued_table_2' class='accordion-toggle  collapsed'>Valuation of Issued Shares</a>"
              +"</h4>"
            +"</div>"
            +"<div id='issued_table_2' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"

                +"<table id='table-issues_2' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                      +"<th width='15%'>Funding Valuations</th>"
                        +"<th width='8%'>Pre Funding</th>"
                        +"<th width='3%'>&nbsp;</th>"
                        +"<th width='8%'>Founders Issue</th>"
                        +"<th width='3%'>&nbsp;</th>"
                        +"<th width='8%'>StartUp Round</th>"
                        +"<th width='3%'>&nbsp;</th>"
                        +"<th width='8%'>Second Round</th>"
                        +"<th width='3%'>&nbsp;</th>"
                        +"<th width='7%'>Third Round</th>"
                        +"<th width='3%'>&nbsp;</th>"
                        +"<th width='7%'>Float / IPO</th>"
                        +"<th width='3%'>&nbsp;</th>"
                        +"<th width='15%'>Trade Sale after Start up</th>"
                        +"<th width='3%'>&nbsp;</th>"
                    +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                    +"<td colspan='15'>&nbsp;</td>"
                  +"</tr>"
                  for(j=0;j<issue['num_director'];j++){
                    html +="<tr>"
                        +"<td width='15%'>"+issue['director_'+j]+"</td>"
                        +"<td width='8%' id='valuation_director_"+j+"_1'>"+issue['currency']+' '+number_format(issue['director_'+j+'_1'],0,'.',',')+"</td>"
                        +"<td>&nbsp;</td>"
                        +"<td id='valuation_director_"+j+"_2'>"+issue['currency']+' '+number_format(issue['director_'+j+'_2'],0,'.',',')+"</td>"
                        +"<td>&nbsp;</td>"
                        +"<td id='valuation_director_"+j+"_3'>"+issue['currency']+' '+number_format(issue['director_'+j+'_3'],0,'.',',')+"</td>"
                        +"<td>&nbsp;</td>"
                        +"<td id='valuation_director_"+j+"_4'>"+issue['currency']+' '+number_format(issue['director_'+j+'_4'],0,'.',',')+"</td>"
                        +"<td>&nbsp;</td>"
                        +"<td id='valuation_director_"+j+"_5'>"+issue['currency']+' '+number_format(issue['director_'+j+'_5'],0,'.',',')+"</td>"
                        +"<td>&nbsp;</td>"
                        +"<td id='valuation_director_"+j+"_6'>"+issue['currency']+' '+number_format(issue['director_'+j+'_6'],0,'.',',')+"</td>"
                        +"<td>&nbsp;</td>"
                        +"<td id='valuation_director_"+j+"_7'>"+issue['currency']+' '+number_format(issue['director_'+j+'_7'],0,'.',',')+"</td>"
                        +"<td>&nbsp;</td>"
                      +"</tr>"
                    }
                    html +="<tr>"
                          +"<td width='15%'>First Round Investor</td>"
                           +"<td width='8%' colspan='4'>&nbsp;</td>"
                          +"<td id='valuation_f_round_investor_5'>"+issue['currency']+' '+number_format(issue['valuation_f_round_investor_5'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_f_round_investor_7'>"+issue['currency']+' '+number_format(issue['valuation_f_round_investor_7'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_f_round_investor_9'>"+issue['currency']+' '+number_format(issue['valuation_f_round_investor_9'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_f_round_investor_11'>"+issue['currency']+' '+number_format(issue['valuation_f_round_investor_11'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_f_round_investor_13'>"+issue['currency']+' '+number_format(issue['valuation_f_round_investor_13'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                      +"</tr>"
                      +"<tr>"
                          +"<td width='15%'>Second Round Investor</td>"
                           +"<td width='8%' colspan='6'>&nbsp;</td>"
                          +"<td id='valuation_s_round_investor_7'>"+issue['currency']+' '+number_format(issue['valuation_s_round_investor_7'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_s_round_investor_9'>"+issue['currency']+' '+number_format(issue['valuation_s_round_investor_9'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_s_round_investor_11'>"+issue['currency']+' '+number_format(issue['valuation_s_round_investor_11'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_s_round_investor_13'>"+issue['currency']+' '+number_format(issue['valuation_s_round_investor_13'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                      +"</tr>"
                      +"<tr>"
                          +"<td width='15%'>Third Round Investor</td>"
                          +"<td width='8%' colspan='8'>&nbsp;</td>"
                          +"<td id='valuation_t_round_investor_9'>"+issue['currency']+' '+number_format(issue['valuation_t_round_investor_9'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_t_round_investor_11'>"+issue['currency']+' '+number_format(issue['valuation_t_round_investor_11'],0,'.',',')+"</td>"
                          +"<td colspan='3'>&nbsp;</td>"
                      +"</tr>"
                      +"<tr>"
                          +"<td width='15%'>Public Float</td>"
                          +"<td width='8%' colspan='10'>&nbsp;</td>"
                          +"<td id='valuation_public_float_11'>"+issue['currency']+' '+number_format(issue['valuation_public_float_11'],0,'.',',')+"</td>"
                          +"<td colspan='3'>&nbsp;</td>"
                      +"</tr>"
                      +"<tr class='info'>"
                          +"<td width='15%'>Total</td>"
                          +"<td width='8%' id='total_valuation_1'>"+issue['currency']+' '+number_format(issue['valuation_total_1'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_total_3'>"+issue['currency']+' '+number_format(issue['valuation_total_3'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_total_5'>"+issue['currency']+' '+number_format(issue['valuation_total_5'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_total_7'>"+issue['currency']+' '+number_format(issue['valuation_total_7'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_total_9'>"+issue['currency']+' '+number_format(issue['valuation_total_9'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_total_11'>"+issue['currency']+' '+number_format(issue['valuation_total_11'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                          +"<td id='valuation_total_13'>"+issue['currency']+' '+number_format(issue['valuation_total_13'],0,'.',',')+"</td>"
                          +"<td>&nbsp;</td>"
                      +"</tr>"
                      +"<tr>"
                            +"<td width='15%'>Pre Funding Valuation</td>"
                            +"<td width='8%' colspan='4'>&nbsp;</td>"
                            +"<td id='valuation_funding_5'>"+issue['currency']+' '+number_format(issue['valuation_funding_5'],0,'.',',')+"</td>"
                            +"<td>&nbsp;</td>"
                            +"<td id='valuation_funding_7'>"+issue['currency']+' '+number_format(issue['valuation_funding_7'],0,'.',',')+"</td>"
                            +"<td>&nbsp;</td>"
                            +"<td id='valuation_funding_9'>"+issue['currency']+' '+number_format(issue['valuation_funding_9'],0,'.',',')+"</td>"
                            +"<td>&nbsp;</td>"
                            +"<td id='valuation_funding_11'>"+issue['currency']+' '+number_format(issue['valuation_funding_11'],0,'.',',')+"</td>"
                            +"<td colspan='3'>&nbsp;</td>"
                      +"</tr>"
                      +"<tr>"
                            +"<td width='15%'>Fund Raised</td>"
                            +"<td width='8%' colspan='4'>&nbsp;</td>"
                            +"<td id='valuation_raise_5'>"+issue['currency']+' '+number_format(issue['valuation_raise_5'],0,'.',',')+"</td>"
                            +"<td>&nbsp;</td>"
                            +"<td id='valuation_raise_7'>"+issue['currency']+' '+number_format(issue['valuation_raise_7'],0,'.',',')+"</td>"
                            +"<td>&nbsp;</td>"
                            +"<td id='valuation_raise_9'>"+issue['currency']+' '+number_format(issue['valuation_raise_9'],0,'.',',')+"</td>"
                            +"<td>&nbsp;</td>"
                            +"<td id='valuation_raise_11'>"+issue['currency']+' '+number_format(issue['valuation_raise_11'],0,'.',',')+"</td>"
                            +"<td colspan='3'>&nbsp;</td>"
                      +"</tr>"
                      +"<tr>"
                            +"<td width='15%'>Post Funding Valuation</td>"
                            +"<td width='8%' colspan='4'>&nbsp;</td>"
                            +"<td id='valuation_post_5'>"+issue['currency']+' '+number_format(issue['valuation_post_5'],0,'.',',')+"</td>"
                            +"<td>&nbsp;</td>"
                            +"<td id='valuation_post_7'>"+issue['currency']+' '+number_format(issue['valuation_post_7'],0,'.',',')+"</td>"
                            +"<td>&nbsp;</td>"
                            +"<td id='valuation_post_9'>"+issue['currency']+' '+number_format(issue['valuation_post_9'],0,'.',',')+"</td>"
                            +"<td>&nbsp;</td>"
                            +"<td id='valuation_post_11'>"+issue['currency']+' '+number_format(issue['valuation_raise_11'],0,'.',',')+"</td>"
                            +"<td colspan='3'>&nbsp;</td>"

                      +"</tr>"

                  +"</table>"
              +"</div>"
            +"</div>"
            +"</div>"
            +"<div class='panel panel-primary'>"
            +"<div class='panel-heading'>"
              +"<h4 class='panel-title'>"
                +"<a data-toggle='collapse' data-parent='#issued_shares_accordion' href='#issued_table_3' class='accordion-toggle collapsed'>Share Split</a>"
              +"</h4>"
            +"</div>"
            +"<div id='issued_table_3' class='panel-collapse collapse'>"
              +"<div class='table-responsive'>"
                +"<table id='table-issues_3' class='table table-striped table-condensed'>"
                  +"<thead>"
                    +"<tr class='warning'>"
                        +"<th width='15%'>Share Split</th>"
                        +"<th width='8%'>Share</th>"
                        +"<th width='3%'>%</th>"
                        +"<th width='74%' colspan='11'>&nbsp;</th>"
                    +"</tr>"
                  +"</thead>"
                  +"<tr class='success'>"
                    +"<td colspan='3'><strong>Pre Split Shareholding</strong></td>"
                  +"</tr>"
                    for(k=0;k<issue['num_director'];k++){
                      html +="<tr>"
                          +"<td width='15%'>"+issue['director_'+k]+"</td>"
                          +"<td width='8%' id='pre_director_"+k+"_1'>"+issue['currency']+' '+number_format(issue['director_'+k+'_1'],0,'.',',')+"</td>"
                          +"<td width='3%' id='percent_pre_director_"+k+"_2'>"+number_format(issue['director_'+k+'_2'],0,'.',',')+"%</td>"
                        +"</tr>"
                      }
                  html +="<tr class='info'>"
                      +"<td width='15%'>Total Shares</td>"
                      +"<td width='8%' id='share_total_1'>"+issue['currency']+' '+number_format(issue['share_total_1'],0,'.',',')+"</td>"
                      +"<td width='3%' id='share_total_2'>"+number_format(issue['share_total_2'],0,'.',',')+" %</td>"
                    +"</tr>"
                    +"<tr class='success'>"
                      +"<td colspan='3'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr>"
                      +"<td width='15%'>Required Shares</td>"
                      +"<td width='8%'>"
                        +"<div class='form-group'>"
                            +"<input type='number' class='form-control inputfont' id='required_shares_1' name='required_shares_1' value='"+issue['required_shares_1']+"' onchange='calculationIssuedShare()''>"
                        +"</div>"
                      +"</td>"
                      +"<td width='15%'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr>"
                      +"<td width='15%'>New Shares</td>"
                      +"<td width='8%' id='new_shares_1'>"+issue['currency']+' '+number_format(issue['new_shares_1'],0,'.',',')+"</td>"
                      +"<td width='3%'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr>"
                      +"<td width='15%'>Shares Split (one for:</td>"
                      +"<td width='8%' id='split_shares_1'>"+number_format(issue['split_shares_1'],0,'.',',')+"</td>"
                      +"<td width='3%'>&nbsp;</td>"
                    +"</tr>"
                    +"<tr class='success'>"
                      +"<td colspan='3'><strong>Post Split Shareholding</strong></td>"
                    +"</tr>"
                    for(k=0;k<issue['num_director'];k++){
                      html +="<tr>"
                          +"<td width='15%'>"+issue['director_'+k]+"</td>"
                          +"<td width='8%' id='post_director_"+k+"_1'>"+issue['currency']+' '+number_format(issue['director_'+k+'_1'],0,'.',',')+"</td>"
                          +"<td width='3%' id='percent_post_director_"+k+"_2'>"+number_format(issue['director_'+k+'_2'],0,'.',',')+"%</td>"
                        +"</tr>"
                      }
                    html +="<tr class='info'>"
                      +"<td width='15%'>Issued Share After Split</td>"
                      +"<td width='8%' id='share_after_1'>"+issue['currency']+' '+number_format(issue['share_after_1'],0,'.',',')+"</td>"
                      +"<td width='3%' id='share_after_2'>"+number_format(issue['share_after_2'],0,'.',',')+"%</td>"
                    +"</tr>"
                    +"</form>"
                +"</table>"
              +"</div>"
            +"</div>"
            +"</div>"

	      	+"</div>"
	      	+"</div>"
          +"</form>"

	      	$('.btn_pdf').attr('href', 'Report/IssuedShares/issued_shared_pdf');

	        $('#ReportModalBody').append(html);

	        $('#ReportModalTitle').html('Issued Shares Table Report');

	        $('#ReportModal').modal('show');

	        for (k=0;k<=4;k++){

	          $("#table-issues_"+k).tableHeadFixer({'left' : 1});

	          $("#table-issues_"+k).css({
	               "min-width": "1020px",
                 "font-size": "12px"
	          });
            $('.form-group').css({
              "margin-bottom": "1px"
            })

	        }

          calculationProcess(issue['currency'], issue['num_director']);

	      },
	      error: function (jqXHR, textStatus, errorThrown) {
	      	alert(errorThrown);
	      }
	});

  $('#ReportModal').on('hidden.bs.modal', function(){

    $('#ReportModalBody').html("");

    active = true;

  })

}

function calculationIssuedShare(){

  var $form = $("#issued_form").serialize();

  $.ajax({
    url: "Report/IssuedShares/save_issued",
    type: "POST",
    data: $form,
    dataType: 'json',
    encode: true,
    success: function (issues){
      calculationProcess(issues['currency'], issues['director_num']);
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(textStatus, errorThrown);
    }
  })
}

function calculationProcess(cur, director_num){

  var issues_shared_1 = $('#issues_shared_1').val();
  var price_share2_1 = $('#price_share2_1').val();
  var total_issues_1 = 0;
  var total_percent_1 = 0;
  var total_valuation_1 = 0;
  var total_valuation_2 = 0;
  var total_pre_shares_1 = 0;
  var total_post = 0;
  var total_post_percent = 0;
  var total_director_5 = 0;
  var total_director_7 = 0;
  var total_director_9 = 0;
  var total_director_11 = 0;
  var total_director_13 = 0;
  var total_percent_director_6 = 0;
  var total_percent_director_8 = 0;
  var total_percent_director_10 = 0;
  var total_percent_director_12 = 0;
  var total_percent_director_14 = 0;
  var total_valuation_3 = 0;
  var total_valuation_4 = 0;
  var total_valuation_5 = 0;
  var total_valuation_6 = 0;
  var total_valuation_7 = 0;

    $('#price_share_2').html(cur+' '+price_share2_1);

    $('#price_share2_2').html(cur+' '+price_share2_1);

    $('#capitalisation_1').html(cur+' '+number_format(parseFloat(issues_shared_1) * parseFloat(price_share2_1)),0,'.',',');
    /*$('#required_shares_1').val(issues_shared_1);*/


    $('#capital_raised_5').html(cur+' '+number_format(parseFloat($('#share_issue_5').val()) * parseFloat($('#price_share_3').val()),0,'.',','));

    $('#capital_raised_7').html(cur+' '+number_format(parseFloat($('#share_issue_7').val()) * parseFloat($('#price_share_4').val()),0,'.',','));

    $('#capital_raised_9').html(cur+' '+number_format(parseFloat($('#share_issue_9').val()) * parseFloat($('#price_share_5').val()),0,'.',','));

    $('#capital_raised_11').html(cur+' '+number_format(parseFloat($('#share_issue_11').val()) * parseFloat($('#price_share_6').val()),0,'.',','));

    $('#capital_raised_13').html(cur+' '+number_format(parseFloat($('#share_issue_13').val()) * parseFloat($('#price_share_7').val()),0,'.',','));

    for (i=0;i<director_num;i++){
      total_issues_1 += parseFloat($('#director_'+i+'_1').val());

    }

    for (j=0;j<director_num;j++){
      $('#percent_director_'+j+'_2').html(number_format(parseFloat($('#director_'+j+'_1').val() / total_issues_1) * 100,0,'.',',')+' %');

        total_percent_1 += parseFloat($('#percent_director_'+j+'_2').html());

      $('#valuation_director_'+j+'_1').html(cur+' '+number_format(parseFloat($('#director_'+j+'_1').val()) * parseFloat(price_share2_1),0,'.',','));

      total_valuation_1 += parseFloat($('#valuation_director_'+j+'_1').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,''));

      $('#pre_director_'+j+'_1').html(cur+' '+number_format($('#director_'+j+'_1').val(),0,'.',','));

      $('#percent_pre_director_'+j+'_2').html(number_format(parseFloat($('#pre_director_'+j+'_1').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '') / total_issues_1) * 100,0,'.',',')+' %');
    }

    $('#issue_total_1').html(cur+' '+number_format(total_issues_1,0,'.',','));
    $('#issue_total_2').html(number_format(total_percent_1,0,'.',',')+' %');
    $('#total_valuation_1').html(cur+' '+number_format(total_valuation_1,0,'.',','));
    $('#share_total_1').html(cur+' '+number_format(total_issues_1,0,'.',','));
    $('#share_total_2').html(number_format(total_percent_1,0,'.',',')+' %');
    $('#new_shares_1').html(cur+' '+number_format(parseFloat($('#required_shares_1').val()) - parseFloat($('#share_total_1').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,'')),0,'.',','));
    $('#split_shares_1').html(number_format(parseFloat($('#required_shares_1').val()) / parseFloat($('#share_total_1').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,'')),0,'.',','));

    for (m=0;m<director_num;m++){
        $('#post_director_'+m+'_1').html(cur+' '+number_format(parseFloat($('#pre_director_'+m+'_1').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#split_shares_1').html().replace(/,/g,'')),0,'.',','));

        total_post +=parseFloat($('#post_director_'+m+'_1').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));

        $('#director_'+m+'_3').html(cur+' '+number_format($('#post_director_'+m+'_1').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''),0,'.',','));

        $('#director_'+m+'_5').html(cur+' '+number_format($('#director_'+m+'_3').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''),0,'.',','));
        total_director_5 += parseFloat($('#director_'+m+'_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));

        $('#director_'+m+'_7').html(cur+' '+number_format($('#director_'+m+'_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''),0,'.',','));
        total_director_7 += parseFloat($('#director_'+m+'_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));

        $('#director_'+m+'_9').html(cur+' '+number_format($('#director_'+m+'_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''),0,'.',','));
        total_director_9 += parseFloat($('#director_'+m+'_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));

        $('#director_'+m+'_11').html(cur+' '+number_format($('#director_'+m+'_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''),0,'.',','));
        total_director_11 += parseFloat($('#director_'+m+'_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));

        $('#director_'+m+'_13').html(cur+' '+number_format($('#director_'+m+'_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''),0,'.',','));
        total_director_13 += parseFloat($('#director_'+m+'_13').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));

    }

    for (n=0;n<director_num;n++){

        $('#percent_post_director_'+n+'_2').html(number_format(parseFloat($('#post_director_'+n+'_1').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '') / total_post) * 100,0,'.',',')+' %');

       $('#valuation_director_'+n+'_2').html(cur+' '+number_format(parseFloat($('#director_'+n+'_3').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_2').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,'')),0,'.',','));

       $('#valuation_director_'+n+'_3').html(cur+' '+number_format(parseFloat($('#director_'+n+'_3').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_3').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,'')),0,'.',','));
       $('#valuation_director_'+n+'_4').html(cur+' '+number_format(parseFloat($('#director_'+n+'_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_3').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,'')),0,'.',','));
       $('#valuation_director_'+n+'_5').html(cur+' '+number_format(parseFloat($('#director_'+n+'_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_4').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,'')),0,'.',','));
       $('#valuation_director_'+n+'_6').html(cur+' '+number_format(parseFloat($('#director_'+n+'_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_5').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,'')),0,'.',','));
       $('#valuation_director_'+n+'_7').html(cur+' '+number_format(parseFloat($('#director_'+n+'_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_6').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,'')),0,'.',','));

       total_valuation_2 += parseFloat($('#valuation_director_'+n+'_2').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));
       total_valuation_3 += parseFloat($('#valuation_director_'+n+'_3').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));
       total_valuation_4 += parseFloat($('#valuation_director_'+n+'_4').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));
       total_valuation_5 += parseFloat($('#valuation_director_'+n+'_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));
       total_valuation_6 += parseFloat($('#valuation_director_'+n+'_6').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));
       total_valuation_7 += parseFloat($('#valuation_director_'+n+'_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));

       total_post_percent += parseFloat($('#percent_post_director_'+n+'_2').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));

        $('#percent_director_'+n+'_4').html(number_format(parseFloat($('#director_'+n+'_3').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '') / total_post) * 100,0,'.',',')+' %');
    }

    $('#share_after_1').html(cur+' '+number_format(total_post,0,'.',','));
    $('#share_after_2').html(number_format(total_post_percent,0,'.',',')+' %');

    $('#share_issue_3').html(cur+' '+number_format($('#share_after_1').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''),0,'.',','));

    $('#capital_raised_3').html(cur+' '+number_format(parseFloat($('#share_issue_3').html().replace(/,/g,'')) * parseFloat($('#price_share_2').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#issues_shared_2').html(cur+' '+number_format($('#share_issue_3').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''),0,'.',','));
    $('#issues_shared_3').html(cur+' '+number_format(parseFloat($('#issues_shared_2').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''))+parseFloat($('#share_issue_5').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#issues_shared_4').html(cur+' '+number_format(parseFloat($('#issues_shared_3').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#share_issue_7').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#issues_shared_5').html(cur+' '+number_format(parseFloat($('#issues_shared_4').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#share_issue_9').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#issues_shared_6').html(cur+' '+number_format(parseFloat($('#issues_shared_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#share_issue_11').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#issues_shared_7').html(cur+' '+number_format(parseFloat($('#issues_shared_6').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#share_issue_13').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));


    $('#f_round_investor_5').html(cur+' '+number_format($('#share_issue_5').val(),0,'.',','));

    $('#f_round_investor_7').html(cur+' '+number_format($('#share_issue_5').val(),0,'.',','));
    $('#s_round_investor_7').html(cur+' '+number_format($('#share_issue_7').val(),0,'.',','));

    $('#f_round_investor_9').html(cur+' '+number_format($('#share_issue_5').val(),0,'.',','));
    $('#s_round_investor_9').html(cur+' '+number_format($('#share_issue_7').val(),0,'.',','));
    $('#t_round_investor_9').html(cur+' '+number_format($('#share_issue_9').val(),0,'.',','));

    $('#f_round_investor_11').html(cur+' '+number_format($('#share_issue_5').val(),0,'.',','));
    $('#s_round_investor_11').html(cur+' '+number_format($('#share_issue_7').val(),0,'.',','));
    $('#t_round_investor_11').html(cur+' '+number_format($('#share_issue_9').val(),0,'.',','));

    $('#f_round_investor_13').html(cur+' '+number_format($('#share_issue_5').val(),0,'.',','));
    $('#s_round_investor_13').html(cur+' '+number_format($('#share_issue_7').val(),0,'.',','));

    $('#public_float_11').html(cur+' '+number_format($('#share_issue_11').val(),0,'.',','));

    for (n=0;n<director_num;n++){

        $('#percent_director_'+n+'_6').html(number_format(parseFloat($('#director_'+n+'_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '') / (total_director_5 + parseFloat($('#share_issue_5').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')))* 100,0,'.',','))+' %');
        total_percent_director_6 += parseFloat($('#percent_director_'+n+'_6').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));

        $('#percent_director_'+n+'_8').html(number_format(parseFloat($('#director_'+n+'_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '') / (total_director_7 + parseFloat($('#share_issue_5').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#share_issue_7').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')))) * 100,0,'.',',')+' %');
        total_percent_director_8 += parseFloat($('#percent_director_'+n+'_8').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));

        $('#percent_director_'+n+'_10').html(number_format(parseFloat($('#director_'+n+'_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '') / (total_director_9 + parseFloat($('#share_issue_5').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#share_issue_7').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#share_issue_9').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')))) * 100,0,'.',',')+' %');
        total_percent_director_10 += parseFloat($('#percent_director_'+n+'_10').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));

        $('#percent_director_'+n+'_12').html(number_format(parseFloat($('#director_'+n+'_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '') / (total_director_11 + parseFloat($('#share_issue_5').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#share_issue_7').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#share_issue_9').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''))+ parseFloat($('#share_issue_11').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')))) * 100,0,'.',',')+' %');
        total_percent_director_12 += parseFloat($('#percent_director_'+n+'_12').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));

        $('#percent_director_'+n+'_14').html(number_format(parseFloat($('#director_'+n+'_13').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '') / (total_director_13 + parseFloat($('#share_issue_5').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#share_issue_7').val().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')))) * 100,0,'.',',')+' %');
        total_percent_director_14 += parseFloat($('#percent_director_'+n+'_14').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));
      }

    $('#issue_total_3').html(cur+' '+number_format(total_post,0,'.',','));
    $('#issue_total_4').html(number_format(total_post_percent,0,'.',',')+' %');

    $('#issue_total_5').html(cur+' '+number_format(total_director_5 + parseFloat($('#f_round_investor_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#f_round_investor_6').html(cur+' '+number_format(parseFloat($('#f_round_investor_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) / parseFloat($('#issue_total_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * 100,0,'.',',')+' %');
    $('#issue_total_6').html(number_format(total_percent_director_6 + parseFloat($('#f_round_investor_6').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',',')+' %');

    $('#issue_total_7').html(cur+' '+number_format(total_director_7 + parseFloat($('#f_round_investor_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#s_round_investor_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#f_round_investor_8').html(cur+' '+number_format(parseFloat($('#f_round_investor_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) / parseFloat($('#issue_total_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * 100,0,'.',',')+' %');
    $('#s_round_investor_8').html(cur+' '+number_format(parseFloat($('#s_round_investor_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) / parseFloat($('#issue_total_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * 100,0,'.',',')+' %');
    $('#issue_total_8').html(number_format(total_percent_director_8 + parseFloat($('#f_round_investor_8').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#s_round_investor_8').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',',')+' %');


    $('#issue_total_9').html(cur+' '+number_format(total_director_9 + parseFloat($('#f_round_investor_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#s_round_investor_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#t_round_investor_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#f_round_investor_10').html(cur+' '+number_format(parseFloat($('#f_round_investor_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) / parseFloat($('#issue_total_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * 100,0,'.',',')+' %');
    $('#s_round_investor_10').html(cur+' '+number_format(parseFloat($('#s_round_investor_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) / parseFloat($('#issue_total_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * 100,0,'.',',')+' %');
    $('#t_round_investor_10').html(cur+' '+number_format(parseFloat($('#t_round_investor_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) / parseFloat($('#issue_total_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * 100,0,'.',',')+' %');

    $('#issue_total_10').html(number_format(total_percent_director_10 + parseFloat($('#f_round_investor_10').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#s_round_investor_10').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#t_round_investor_10').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',',')+' %');

    $('#issue_total_11').html(cur+' '+number_format(total_director_11 + parseFloat($('#f_round_investor_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#s_round_investor_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#t_round_investor_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#public_float_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#f_round_investor_12').html(cur+' '+number_format(parseFloat($('#f_round_investor_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) / parseFloat($('#issue_total_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * 100,0,'.',',')+' %');
    $('#s_round_investor_12').html(cur+' '+number_format(parseFloat($('#s_round_investor_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) / parseFloat($('#issue_total_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * 100,0,'.',',')+' %');
    $('#t_round_investor_12').html(cur+' '+number_format(parseFloat($('#t_round_investor_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) / parseFloat($('#issue_total_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * 100,0,'.',',')+' %');
    $('#public_float_12').html(cur+' '+number_format(parseFloat($('#public_float_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) / parseFloat($('#issue_total_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * 100,0,'.',',')+' %');

    $('#issue_total_12').html(number_format(total_percent_director_12 + parseFloat($('#f_round_investor_12').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#s_round_investor_12').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#t_round_investor_12').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#public_float_12').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',',')+' %');

    $('#issue_total_13').html(cur+' '+number_format(total_director_13 + parseFloat($('#f_round_investor_13').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#s_round_investor_13').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#f_round_investor_14').html(cur+' '+number_format(parseFloat($('#f_round_investor_13').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) / parseFloat($('#issue_total_13').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * 100,0,'.',',')+' %');
    $('#s_round_investor_14').html(cur+' '+number_format(parseFloat($('#s_round_investor_13').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) / parseFloat($('#issue_total_13').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * 100,0,'.',',')+' %');

    $('#issue_total_14').html(number_format(total_percent_director_14 + parseFloat($('#f_round_investor_14').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#s_round_investor_14').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',',')+' %');

    $('#valuation_total_3').html(cur+' '+number_format(total_valuation_2,0,'.',','))
    $('#valuation_total_5').html(cur+' '+number_format(total_valuation_3,0,'.',','))
    $('#valuation_total_7').html(cur+' '+number_format(total_valuation_4,0,'.',','))
    $('#valuation_total_9').html(cur+' '+number_format(total_valuation_5,0,'.',','))
    $('#valuation_total_11').html(cur+' '+number_format(total_valuation_6,0,'.',','))
    $('#valuation_total_13').html(cur+' '+number_format(total_valuation_7,0,'.',','))

    $('#price_share2_3').html(cur+' '+$('#price_share_3').val());
    $('#price_share2_4').html(cur+' '+$('#price_share_4').val());
    $('#price_share2_5').html(cur+' '+$('#price_share_5').val());
    $('#price_share2_6').html(cur+' '+$('#price_share_6').val());
    $('#price_share2_7').html(cur+' '+$('#price_share_7').val());

    $('#capitalisation_3').html(cur+' '+number_format(parseFloat($('#issues_shared_3').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_3').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#valuation_f_round_investor_5').html(cur+' '+number_format(parseFloat($('#f_round_investor_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_3').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#valuation_f_round_investor_7').html(cur+' '+number_format(parseFloat($('#f_round_investor_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_4').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#valuation_f_round_investor_9').html(cur+' '+number_format(parseFloat($('#f_round_investor_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#valuation_f_round_investor_11').html(cur+' '+number_format(parseFloat($('#f_round_investor_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_6').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#valuation_f_round_investor_13').html(cur+' '+number_format(parseFloat($('#f_round_investor_13').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));


    $('#valuation_s_round_investor_7').html(cur+' '+number_format(parseFloat($('#s_round_investor_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_4').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#valuation_s_round_investor_9').html(cur+' '+number_format(parseFloat($('#s_round_investor_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#valuation_s_round_investor_11').html(cur+' '+number_format(parseFloat($('#s_round_investor_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_6').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#valuation_s_round_investor_13').html(cur+' '+number_format(parseFloat($('#s_round_investor_13').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));


    $('#valuation_t_round_investor_9').html(cur+' '+number_format(parseFloat($('#t_round_investor_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#valuation_t_round_investor_11').html(cur+' '+number_format(parseFloat($('#t_round_investor_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_6').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#valuation_public_float_11').html(cur+' '+number_format(parseFloat($('#public_float_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_6').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));


    for (n=0;n<director_num;n++){


       $('#valuation_director_'+n+'_3').html(cur+' '+number_format(parseFloat($('#director_'+n+'_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_3').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,'')),0,'.',','));
       $('#valuation_director_'+n+'_4').html(cur+' '+number_format(parseFloat($('#director_'+n+'_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_4').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,'')),0,'.',','));
       $('#valuation_director_'+n+'_5').html(cur+' '+number_format(parseFloat($('#director_'+n+'_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_5').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,'')),0,'.',','));
       $('#valuation_director_'+n+'_6').html(cur+' '+number_format(parseFloat($('#director_'+n+'_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_6').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,'')),0,'.',','));
       $('#valuation_director_'+n+'_7').html(cur+' '+number_format(parseFloat($('#director_'+n+'_13').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_7').html().replace(/\$ |\€ |\₹ | /g, '').replace(/,/g,'')),0,'.',','));

         total_valuation_3 += parseFloat($('#valuation_director_'+n+'_3').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));
         total_valuation_4 += parseFloat($('#valuation_director_'+n+'_4').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));
         total_valuation_5 += parseFloat($('#valuation_director_'+n+'_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));
         total_valuation_6 += parseFloat($('#valuation_director_'+n+'_6').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));
         total_valuation_7 += parseFloat($('#valuation_director_'+n+'_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, ''));

    }

    $('#capitalisation_2').html(cur+' '+number_format(parseFloat($('#issues_shared_2').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_2').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#capitalisation_3').html(cur+' '+number_format(parseFloat($('#issues_shared_3').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_3').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#capitalisation_4').html(cur+' '+number_format(parseFloat($('#issues_shared_4').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_4').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#capitalisation_5').html(cur+' '+number_format(parseFloat($('#issues_shared_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#capitalisation_6').html(cur+' '+number_format(parseFloat($('#issues_shared_6').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_6').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));
    $('#capitalisation_7').html(cur+' '+number_format(parseFloat($('#issues_shared_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) * parseFloat($('#price_share2_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#valuation_total_3').html(cur+' '+number_format(total_valuation_2,0,'.',','))
    $('#valuation_total_5').html(cur+' '+number_format(total_valuation_3 + parseFloat($('#valuation_f_round_investor_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','))

    $('#valuation_total_7').html(cur+' '+number_format(total_valuation_4 + parseFloat($('#valuation_f_round_investor_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#valuation_s_round_investor_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','))


    $('#valuation_total_9').html(cur+' '+number_format(total_valuation_5 + parseFloat($('#valuation_f_round_investor_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#valuation_s_round_investor_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#valuation_t_round_investor_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','))

    $('#valuation_total_11').html(cur+' '+number_format(total_valuation_6 + parseFloat($('#valuation_f_round_investor_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#valuation_s_round_investor_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#valuation_t_round_investor_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#valuation_public_float_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','))


    $('#valuation_total_13').html(cur+' '+number_format(total_valuation_7 + parseFloat($('#valuation_f_round_investor_13').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#valuation_s_round_investor_13').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#valuation_funding_5').html(cur+' '+number_format(parseFloat($('#valuation_total_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) - parseFloat($('#capital_raised_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#valuation_raise_5').html(cur+' '+number_format(parseFloat($('#capital_raised_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#valuation_post_5').html(cur+' '+number_format(parseFloat($('#valuation_funding_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#valuation_raise_5').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

   $('#valuation_funding_7').html(cur+' '+number_format(parseFloat($('#valuation_total_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) - parseFloat($('#capital_raised_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#valuation_raise_7').html(cur+' '+number_format(parseFloat($('#capital_raised_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#valuation_post_7').html(cur+' '+number_format(parseFloat($('#valuation_funding_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#valuation_raise_7').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#valuation_funding_9').html(cur+' '+number_format(parseFloat($('#valuation_total_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) - parseFloat($('#capital_raised_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#valuation_raise_9').html(cur+' '+number_format(parseFloat($('#capital_raised_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#valuation_post_9').html(cur+' '+number_format(parseFloat($('#valuation_funding_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#valuation_raise_9').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

   $('#valuation_funding_11').html(cur+' '+number_format(parseFloat($('#valuation_total_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) - parseFloat($('#capital_raised_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#valuation_raise_11').html(cur+' '+number_format(parseFloat($('#capital_raised_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

    $('#valuation_post_11').html(cur+' '+number_format(parseFloat($('#valuation_funding_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')) + parseFloat($('#valuation_raise_11').html().replace(/,/g,'').replace(/\$ |\€ |\₹ | /g, '')),0,'.',','));

}