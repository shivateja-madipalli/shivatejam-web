// official js

var serverUrl = "https://mighty-crag-35032.herokuapp.com/shivatejam/";

$(document).ready(function(){
    getDescription();   
    getGitData();
    
});

function getDescription() {
      try {
          var finalData;
      $.ajax({
          //https://mighty-crag-35032.herokuapp.com/shivatejam/home/Description
            url: serverUrl + 'home/Description',
            type: 'GET',
            success: function(data) {
                if(data != null) {
                        console.log("Data is not null");
                    }
                },
            complete: function(data) {
                console.log("data.status: "+data.status);
                if(data.status == 200) {
                    //MainDescription
                    console.log("Main Description: "+data.responseJSON[0].MainDescription);
                    //SubDescription
                    console.log("Sub Description: "+data.responseJSON[0].SubDescription[0]);
                    finalData = data;
                    
                    //updating main Description
                    $("#official_body_div1").html(data.responseJSON[0].MainDescription);
                    
                    //updating sub Description
                    //body_table_row1_data1_div2_table1_row1_data2
                    //$('#loanList').html(html);
                    var html;
                    for(var i=0; i < data.responseJSON[0].SubDescription.length; i++){
                        
                        html += "<p> &rarr; " + data.responseJSON[0].SubDescription[i] + "</p>"; 
                    }
                    //var html = "<p>" + data.responseJSON[0].SubDescription[0] + "</p>";
                    
                    console.log("html: "+ html);
                     
                    $("#official_body_div2_div1").html(html);
                }
                else {
                    console.log("Something is wrong");
                    }
                },
            error : function(err) {
                    console.log("error is: " + err.error);
                    window.alert("As a Developer I do hate these issues, an error :( please refresh the page");
                },
            });          
      }
      catch(err) {
          console.log("error is caught "+ err);
      }
  }
  
  var anchortagclassname = "git_proj_names_a_class";  
  var tdrightclassname = "git_proj_names_td_right_class";  
  var tdleftclassname = "git_proj_names_td_left_class";  
  var trclassname ="git_proj_rows_class";
  var descriptiontdrightclassname = "git_proj_description_right_class";
  var descriptiontdleftclassname = "git_proj_description_left_class";
  
  function getGitData() {
      try {
          
            $.ajax({
          //https://mighty-crag-35032.herokuapp.com/shivatejam/home/Description
            url: serverUrl + 'githubrepos',
            type: 'GET',
            success: function(data) {
                if(data != null) {
                        console.log("Git Data is not null");
                    }
                },
            complete: function(data) {
                console.log("git data.status: "+data.status);
                if(data.status == 200) {
                    dataAsString = JSON.stringify(data);
                    console.log(dataAsString);
                    // jsonData = JSON.parse(JSON.stringify(data.responseJSON.data));
                    
                    jsonData = data.responseJSON.data;
                    console.log("git full data: " + jsonData);
                    //official_body_div3_table
                    //official_body_div3_table_row1
                    var htmlContent;
                    console.log("data.length: " + jsonData.length);
                    for(i=0; i < jsonData.length; i++) 
                    {                        
                        htmlContent += "<tr class="+trclassname+">";
                            if(i % 2 == 0) {
                                htmlContent += "<td class="+tdrightclassname+">";    
                                htmlContent += "<a src = "+jsonData[i].html_url+"class="+anchortagclassname+">"+jsonData[i].name+"</a>";
                                htmlContent += "</td>";
                                
                                htmlContent += "<td class="+descriptiontdleftclassname+">";
                                htmlContent += "<p>description : "+jsonData[i].description+", created_at : " +jsonData[i].created_at+", language : "+jsonData[i].language+"</p>";
                                htmlContent += "</td>";
                            }
                            else {
                                htmlContent += "<td class="+descriptiontdrightclassname+">";
                                
                                htmlContent += "<p>description : "+jsonData[i].description+", created_at : " +jsonData[i].created_at+", language : "+jsonData[i].language+"</p>";
                                htmlContent += "</td>";
                                
                                htmlContent += "<td class="+tdleftclassname+">";
                                htmlContent += "<a src = "+jsonData[i].html_url+"class="+anchortagclassname+">"+jsonData[i].name+"</a>";
                                htmlContent += "</td>";
                            }
                            
                            
                        htmlContent += "</tr>";                        
                    }
                    //actual Html Content Of the Row
                    var actualHtml = $('#official_body_div3_table_row1').html();
                    $('#official_body_div3_table_row1').html(actualHtml + htmlContent);
                }
                else {
                    console.log("git Something is wrong");
                    }
                },
            error : function(err) {
                    console.log("git error is: " + err.error);
                    window.alert("As a Developer I do hate these issues, an error :( please refresh the page");
                },
            });          
    
          
      }
      catch(err){
          console.log("error is caught"+ err);
      }
  }