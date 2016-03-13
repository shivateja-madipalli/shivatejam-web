// official js

$(document).ready(function(){
    getDescription();   
    
});

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
          console.log("error have been throughed "+ err);
      }
  }