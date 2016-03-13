$(document).ready(function(){
    //updateDescriptions();
   // getDescription();
    
    //loadPage();
    
    $('#body_table_row1_data1_small_div1').hide();
    $('#ptag_click').css('curson','default');
    
    // $('#shiva_animated_img').hover(
    //     function(){
    //         $('#shiva_animated_img').attr('src','./Images/profile.jpg');
    //         $('#shiva_animated_img').attr('width','15%');
    //         $('#shiva_animated_img').attr('width','20%');
    //     },
    //     function(){
    //         $('#shiva_animated_img').attr('src','./Images/Shiva-Animated.jpg');
    //         $('#shiva_animated_img').attr('width','15%');
    //         $('#shiva_animated_img').attr('width','20%');   
    //     });
    
    $('#ptag_click').click( function() {
            $('#body_table_row1_data1_empty_div1').show();
            $('#body_table_row1_data1_div1_p2_span').show('slow');
            $('#shiva_animated_img').show('slow');
            $('#body_table_row1_data1_main_page_div').css('height','70%');
            // $('#shiva_animated_img').css('display', 'block');
            $('#body_table_row1_data1_div1_p2_span').css('display', 'block');
            $('#body_table_row1_data1_div1_hello_p_tag').css('display', 'block');
            $('#body_table_row1_data1_div').css('height','auto');
            $("#body_table_row1_data1_div")
            .html('');
    });
    
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
            $('#body_table_row1_data1_empty_div1').hide();
            $('#body_table_row1_data1_div1_p2_span').slideUp('slow');
            $('#shiva_animated_img').slideUp('slow');
            $('#body_table_row1_data1_main_page_div').css('height','10%');
            $('#body_table_row1_data1_div1_hello_p_tag').css('display', 'none');
            $('#body_table_row1_data1_div').css('height','85%');
            // $('#ptag_click').css('curson','pointer');
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
            $('#body_table_row1_data1_empty_div1').hide();
            $('#body_table_row1_data1_div1_p2_span').slideUp('slow');
            $('#shiva_animated_img').slideUp('slow');
            $('#body_table_row1_data1_main_page_div').css('height','10%');
            $('#body_table_row1_data1_div1_hello_p_tag').css('display', 'none');
            $('#body_table_row1_data1_div').css('height','85%');
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
            $('#body_table_row1_data1_empty_div1').hide();
            $('#body_table_row1_data1_div1_p2_span').slideUp('slow');
            $('#shiva_animated_img').slideUp('slow');
            $('#body_table_row1_data1_main_page_div').css('height','10%');
            $('#body_table_row1_data1_div1_hello_p_tag').css('display', 'none');
            $('#body_table_row1_data1_div').css('height','85%');
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
            $('#body_table_row1_data1_empty_div1').hide();
            $('#body_table_row1_data1_div1_p2_span').slideUp('slow');
            $('#shiva_animated_img').slideUp('slow');
            $('#body_table_row1_data1_main_page_div').css('height','10%');
            $('#body_table_row1_data1_div1_hello_p_tag').css('display', 'none');
            $('#body_table_row1_data1_div').css('height','85%');
            $("#body_table_row1_data1_div")
            .html('<object data="./blog.html"/>');
           
        });
  });
  
  
  function loadPage(){
      $("#body_table_row1_data1_div")
            .html('<object data="./home.html"/>');
  }