$(document).ready(function(){
    //updateDescriptions();
    getDescription();
    
    loadPage();
    
    
    //cursor:pointer
    
    $('#body_table_row1_data2_table2_row1_data1').hover(
        function(){
            //hover
            $("#body_table_row1_data2_table2_row1_data1").attr('class', 'body_table_row1_data2_table2_row_data_css_class_hover');
            },
        function(){
            //un hover
            $("#body_table_row1_data2_table2_row1_data1").attr('class', 'body_table_row1_data2_table2_row_data_css_class');
        });
    $('#body_table_row1_data2_table2_row1_data1').click(
        function(){
            $("#body_table_row1_data1_div")
            .html('<object data="./official.html"/>');
        });
    $('#body_table_row1_data2_table2_row2_data1').hover(
        function(){
            //hover
            $("#body_table_row1_data2_table2_row2_data1").attr('class', 'body_table_row1_data2_table2_row_data_css_class_hover');
            },
        function(){
            //un hover
            $("#body_table_row1_data2_table2_row2_data1").attr('class', 'body_table_row1_data2_table2_row_data_css_class');
        });
    $('#body_table_row1_data2_table2_row2_data1').click(
        function(){
            $("#body_table_row1_data1_div")
            .html('<object data="./social.html"/>');
        });
    $('#body_table_row1_data2_table2_row3_data1').hover(
       function(){
            //hover
            $("#body_table_row1_data2_table2_row3_data1").attr('class', 'body_table_row1_data2_table2_row_data_css_class_hover');
            },
        function(){
            //un hover
            $("#body_table_row1_data2_table2_row3_data1").attr('class', 'body_table_row1_data2_table2_row_data_css_class');
        });
    $('#body_table_row1_data2_table2_row3_data1').click(
        function(){
            $("#body_table_row1_data1_div")
            .html('<object data="./Personal.html"/>');
        });
    $('#body_table_row1_data2_table2_row4_data1').hover(
        function(){
            //hover
            $("#body_table_row1_data2_table2_row4_data1").attr('class', 'body_table_row1_data2_table2_row_data_css_class_hover');
            },
        function(){
            //un hover
            $("#body_table_row1_data2_table2_row4_data1").attr('class', 'body_table_row1_data2_table2_row_data_css_class');
        });
    $('#body_table_row1_data2_table2_row4_data1').click(
        function(){
            $("#body_table_row1_data1_div")
            .html('<object data="./blog.html"/>');
        });
  });
  
  
  function loadPage(){
      $("#body_table_row1_data1_div")
            .html('<object data="./home.html"/>');
  }
  
  function getDescription() {
      try {
          var finalData;
      $.ajax({
          //https://mighty-crag-35032.herokuapp.com/shivatejam/home/Description
            url: 'https://mighty-crag-35032.herokuapp.com/shivatejam/home/Description',
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
                    console.log("this is it: "+data.responseJSON[0].MainDescription);
                    //SubDescription
                    console.log("this is it: "+data.responseJSON[0].SubDescription[0]);
                    finalData = data;
                    
                    //updating main Description
                    $("#body_table_row1_data1_div1_p3").html(data.responseJSON[0].MainDescription);
                    
                    //updating sub Description
                    //body_table_row1_data1_div2_table1_row1_data2
                    //$('#loanList').html(html);
                    var html;
                    for(var i=0; i < data.responseJSON[0].SubDescription.length; i++){
                        
                        html += "<p> &rarr; " + data.responseJSON[0].SubDescription[i] + "</p>"; 
                    }
                    //var html = "<p>" + data.responseJSON[0].SubDescription[0] + "</p>";
                    
                    console.log("html: "+ html);
                     
                    $("#body_table_row1_data1_div2_table1_row1_data2").html(html);
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
          console.log("error have been throughed "+ err);
      }
  }