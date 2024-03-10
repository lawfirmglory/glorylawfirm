$(document).ready(function(){
    $('#send_message').click(function(){
        
          //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration
        var error = false;
        // const regex1 = /^[가-힣]+$/;
        // const regex = /^[|0-9|]+$/;
        // const regex2 = /^[가-힣|a-z|A-Z|0-9\s+]+$/;
        
        // var name = $('#name').val();
        // var phone = $('#phone').val();
        // var agree = $('#agree11').is(":checked");
        


         // Form field validation
         $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdm5vsYTitPy8THoka-HZDVK_gRLKjsBzEOleOtyjvPxE-uPg/formResponse");
         $('#send_message').attr({'disabled' : 'true', 'value' : '잠시만 기다려주세요' });
         
          
   $('#send_message').prop("disabled", false);
  $('#send_message').css({transition:"1s"});
  $('#send_message').css({background:"#222222"});
  $('#send_message').css({color:"#fff"});
  $('#hidden_iframe11').attr("onload", "hoa3();");
    });    

   

});


function dll(){
    // var f = document.fm;
    // f.submit();
    // $('[name="fm"],[name="fm1"]').submit();
    alert("빠른 안내를 통해 도움 드리겠습니다.\n신청해주셔서 감사합니다.");

}
 
function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}
 
 function hoa3(){ 

      $(window).scrollTop(0);
      window.location.href = 'https://maxsave.jptax.kr';
        // $(window).scrollTop(0);
        //  window.location.reload();
 }
 
 function site1111(){
  //$('#mc-embedded-subscribe').click();
  

//   $(window).scrollTop(0);
//   window.location.href = './thanks.html';
//   window.location.reload();
 }


 function form_check(){

    const regex1 = /^[|가-힣|]+$/;
    const regex = /^[|0-9|]+$/;
    const regex2 = /^[가-힣|a-z|A-Z|0-9\s+]+$/;
  
    var name = $('#name').val();
    var phone = $('#phone').val();
    var agree = $('#agree11').is(":checked");

    // if (mf != null)
    // {
        // if(regex2.test(model) && model.length>1)
        // {
            if(regex1.test(name) && name.length > 1 )
            {
                   
                    // if(regex.test(age) && age.length == 2 && age >=30 && age <75)
                    // {
                    
                     
                            
                               

                                    if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone))
                                    {
                        
                                        if (agree == true)
                                        {
                                            $('#send_message').css({transition:"1s"});
                                            $('#send_message').prop("disabled", false);
                                            $('#send_message').prop("value", "무료 조회 신청하기");
                                            $('#send_message').css({background:"#0e3b64"});
                                            $('#send_message').css({cursor:"pointer"});
                                        }
                                        else
                                        {
                                            $('#send_message').css({transition:"1s"});
                                            $('#send_message').prop("disabled", true);
                                            $('#send_message').prop("value", "개인정보 동의를 확인해주세요");
                                            $('#send_message').css({background:"#121212"});
                                            $('#send_message').css({cursor:"default"});     
                                        }
                            
                                     }
                                     else if(phone.length == 0)
                                     {
                                         $('#send_message').css({transition:"1s"});
                                         $('#send_message').prop("disabled", true);
                                         $('#send_message').prop("value", "전화번호를 확인하세요.");
                                         $('#send_message').css({background:"#121212"});
                                         $('#send_message').css({cursor:"default"});     
                                     }
                                     else
                                     {
                                         $('#send_message').css({transition:"1s"});
                                         $('#send_message').prop("disabled", true);
                                         $('#send_message').prop("value", "전화번호 입력을 확인하세요.");
                                         $('#send_message').css({background:"#121212"});
                                         $('#send_message').css({cursor:"default"});     
                                     }

                            
                    
                          
                    // }
                    // else if(age.length==0)
                    // {
                    // $('#send_message').css({transition:"1s"});
                    // $('#send_message').prop("disabled", true);
                    // $('#send_message').prop("value", "연령을 입력을 확인하세요.");
                    // $('#send_message').css({background:"#121212"});
                    // $('#send_message').css({cursor:"default"});     
                    // }
                    // else 
                    // {
                    // $('#send_message').css({transition:"1s"});
                    // $('#send_message').prop("disabled", true);
                    // $('#send_message').prop("value", "30세 ~ 75까지 가능합니다.");
                    // $('#send_message').css({background:"#121212"});
                    // $('#send_message').css({cursor:"default"});     
                    // }
                
            }
            else if(name.length == 0)
            {
                $('#send_message').css({transition:"1s"});
                $('#send_message').prop("disabled", true);
                $('#send_message').prop("value", "성함 입력을 확인하세요.");
                $('#send_message').css({background:"#121212"});
                $('#send_message').css({cursor:"default"});     
            }
            else
            {
                $('#send_message').css({transition:"1s"});
                $('#send_message').prop("disabled", true);
                $('#send_message').prop("value", "성함 입력을 확인하세요.");
                $('#send_message').css({background:"#121212"});
                $('#send_message').css({cursor:"default"});     
            }

        // }
        // else if(model.length == 0)
        // {
        //     $('#send_message').css({transition:"1s"});
        //     $('#send_message').prop("disabled", true);
        //     $('#send_message').prop("value", "차종 입력을 확인하세요.");
        //     $('#send_message').css({background:"#121212"});
        //     $('#send_message').css({cursor:"default"});     
        // }
        // else
        // {
        //     $('#send_message').css({transition:"1s"});
        //     $('#send_message').prop("disabled", true);
        //     $('#send_message').prop("value", "차종 입력을 확인하세요.");
        //     $('#send_message').css({background:"#121212"});
        //     $('#send_message').css({cursor:"default"});     
        // }            
    // }
   
    // else
    // {
    //     $('#send_message').css({transition:"1s"});
    //     $('#send_message').prop("disabled", true);
    //     $('#send_message').prop("value", "견적 유형을 선택하세요");
    //     $('#send_message').css({background:"#121212"});
    //     $('#send_message').css({cursor:"default"});        
    // }

   
 }
  


   




$(function(){
 $('#name,#phone,#car_type,#car,#message,#agree11,#now-wg,#hope-wg,#height').bind("keyup click change",form_check);
 $('#name,#phone,#car_type,#car,#message,#agree11,#now-wg,#hope-wg,#height').bind("keyup click change",form_check1);
//  $('#license').bind("keyup click change",lic_pick);
})