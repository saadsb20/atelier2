$(function () {
    $('#corriger').click(function () {
        var cor = true;
        var res = 0;

/************************* Q1 **************************/        
        if ($('#first3').is("input:checked")) {
            if (!$('#first1').is("input:checked") &&  !$('#first2').is("input:checked")) {
                 $('#Q1').css("color", "#1A7806");
                $('#labelf3').css("color", "#1A7806");
                $('#labelf1').css("color", "#000");
                $('#labelf2').css("color", "#000" );
              
               $('#first1,#first2,#first3').attr('disabled', true);
             
                res++;
                cor = false;
            } else {
                  $('#Q1').css("color", "#F45048");
                  $('#labelf1').css("color", "#F45048");
                  $('#labelf2').css("color", "#F45048");
                  $('#labelf3').css("color", "#1A7806");
                  $('.input1').attr('disabled', true);
 
                cor = false;
            }
           
        }
        else if( $('#first2').is("input:checked") || $('#first1').is("input:checked")) {
             $('#Q1').css("color", "#F45048");
            $('#labelf1').css("color", "#F45048");
            $('#labelf2').css("color", "#F45048");
            $('#labelf3').css("color", "#1A7806");
            cor = false;
            $('#first1,#first2,#first3').attr('disabled', true);
          
        }
         else  {
           
           $('#Q1').css("color", "#f97b04");
            $('#labelf1').css("color", "#f97b04");
            $('#labelf2').css("color", "#f97b04");
            $('#labelf3').css("color", "#f97b04");
            cor = false;
           
        }

/************************* Q2 **************************/

        if ($('#second2').is("input:checked")) {
            if (!$('#second1').is("input:checked") && !$('#second3').is("input:checked")) {
                $('#Q2').css("color", "#1A7806");
             $('#labels2').css("color", "#1A7806");
                $('#labels1').css("color", "#000");
                $('#labels3').css("color", "#000");
             $('#second1,#second2,#second3').attr('disabled', true);
              
                cor = false;
                res++;
            } else {
                $('#Q2').css("color", "#F45048");
            $('#labels1').css("color", "#F45048");
            $('#labels2').css("color", "#1A7806");
            $('#labels3').css("color", "#F45048" );
            $('#second1,#second2,#second3').attr('disabled', true);
        
             cor = false;
                
            }
            
        }

        else if ($('#second1').is("input:checked")||$('#second3').is("input:checked")) {
            $('#Q2').css("color", "#F45048");
            $('#labels1').css("color", "#F45048");
            $('#labels2').css("color", "#1A7806");
            $('#labels3').css("color", "#F45048" );
            $('#second1,#second2,#second3').attr('disabled', true);
    
             cor = false;
        }
        else{
            $('#Q2').css("color", "#f97b04");
            $('#labels1').css("color", "#f97b04");
            $('#labels2').css("color", "#f97b04");
            $('#labels3').css("color", "#f97b04" );
            
             cor = false;
        }
/************************* Q3 **************************/        
        if ($('#third2').is("input:checked")) {
            if (!$('#third1').is("input:checked") && !$('#third3').is("input:checked")) {
                $('#Q3').css("color", "#1A7806");
                $('#labelt2').css("color", "#1A7806");
                $('#labelt3').css("color", "#000");
                $('#labelt1').css("color", "#000");
                $('#third1,#third2,#third3').attr('disabled', true);

                res++;
                cor = false;
            } else {
                 $('#Q3').css("color", "#F45048");
                 $('#labelt1').css("color", "#F45048");
                 $('#labelt2').css("color", "#1A7806");
                 $('#labelt3').css("color", "#F45048" );
                 $('#third1,#third2,#third3').attr('disabled', true);

             cor = false;
                
            }
            
        }

        else if ($('#third1').is("input:checked")||$('#third3').is("input:checked")) {
            $('#Q3').css("color", "#F45048");
            $('#labelt1').css("color", "#F45048");
            $('#labelt2').css("color", "#1A7806");
            $('#labelt3').css("color", "#F45048" );
            $('#third1,#third2,#third3').attr('disabled', true);
             cor = false;
        }

        else {
            $('#Q3').css("color", "#f97b04");
            $('#labelt1').css("color", "#f97b04");
            $('#labelt2').css("color", "#f97b04");
            $('#labelt3').css("color", "#f97b04" );
            
             cor = false;
        }
/************************* Q4 **************************/        
        if ($('#fourth1').is("input:checked") && $('#fourth3').is("input:checked")) {
            if (!$('#fourth2').is("input:checked")) {
                $('#Q4').css("color", "#1A7806");
                $('#labelft1').css("color", "#1A7806");
                $('#labelft3').css("color", "#1A7806");
                $('#labelft2').css("color", "#000");
                $('#fourth1,#fourth2,#fourth3').attr('disabled', true);
                res++;
                cor = false;
            } else {

                $('#Q4').css("color", "#F45048");
            $('#labelft1').css("color", "#1A7806");
            $('#labelft2').css("color", "#F45048");
            $('#labelft3').css("color", "#1A7806" );
            $('#fourth1,#fourth2,#fourth3').attr('disabled', true);
             cor = false;
            }
            
        }
        else if ($('#fourth1').is("input:checked") || $('#fourth3').is("input:checked")) {
            $('#Q4').css("color", "#F45048");
            $('#labelft1').css("color", "#1A7806");
            $('#labelft2').css("color", "#F45048");
            $('#labelft3').css("color", "#1A7806" );
            $('#fourth1,#fourth2,#fourth3').attr('disabled', true);
             cor = false;
            
            
        }

        else if ($('#fourth2').is("input:checked")) {
            $('#Q4').css("color", "#F45048");
            $('#labelft1').css("color", "#1A7806");
            $('#labelft2').css("color", "#F45048");
            $('#labelft3').css("color", "#1A7806" );
             $('#fourth1,#fourth2,#fourth3').attr('disabled', true);
             cor = false;
        }

        else {
            $('#Q4').css("color", "#f97b04");
            $('#labelft1').css("color", "#f97b04");
            $('#labelft2').css("color", "#f97b04");
            $('#labelft3').css("color", "#f97b04" );
            
             cor = false;
        }
/************************* Q5 **************************/        
        if ($('#fifth1').is("input:checked")) {
            if (!$('#fifth2').is("input:checked") && !$('#fifth3').is("input:checked")) {
                
                $('#Q5').css("color", "#1A7806");
                $('#labelfth1').css("color", "#1A7806");
                $('#labelfth2').css("color", "#000");
                $('#labelfth3').css("color", "#000");
                $('#fifth1,#fifth2,#fifth3').attr('disabled', true);
                cor = false;
                res++;


            } else {
                $('#Q5').css("color", "#F45048");
                $('#labelfth2').css("color", "#F45048");
                $('#labelfth1').css("color", "#1A7806");
                $('#labelfth3').css("color", "#F45048" );
                $('#fifth1,#fifth2,#fifth3').attr('disabled', true);
             cor = false;
                
            }
            
        }

        else if($('#fifth2').is("input:checked")||$('#fifth3').is("input:checked")) {
            $('#Q5').css("color", "#F45048");
            $('#labelfth2').css("color", "#F45048");
            $('#labelfth1').css("color", "#1A7806");
            $('#labelfth3').css("color", "#F45048" );
            $('#fifth1,#fifth2,#fifth3').attr('disabled', true);
             cor = false;
        }
        
        else {
            $('#Q5').css("color", "#f97b04");
            $('#labelfth2').css("color", "#f97b04");
            $('#labelfth1').css("color", "#f97b04");
            $('#labelfth3').css("color", "#f97b04" );
            
             cor = false;
        }
        
        
        
        if (res == 5) {
            $('#res').css("color" , "#1A7806");
        }
        else if (res == 0 ) {
            $('#res').css("color" , "#F45048");
        }
        else {
             $('#res').css("color" , "#f97b04");
        }
        $('#res').fadeIn().text("Votre score est : " + res + " / 5");
        return cor;

    });
   
});