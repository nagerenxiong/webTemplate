$(function(){
	
	  $(".menu_box_more").hover(function(){
       	$(".menu_box_more>ul").css("display","block");
       },function(){	
       	$(".menu_box_more>ul").css("display","none");})
	  
     $('#email_agree').change(function(){
			
		
		if ($("input[name='email']:checked").val()) {
			$(".xuanzhong_1").css("display",'block');
		}
		else{
			$(".xuanzhong_1").css("display",'none');
		}
	})
      $('#phone_agree').change(function(){
			
		
		if ($("input[name='phone']:checked").val()) {
			$(".xuanzhong_2").css("display",'block');
		}
		else{
			$(".xuanzhong_2").css("display",'none');
		}
	})

	$(".register_method a").each(function(){
		
		
		$(this).bind("click",function(){
			var index=$(this).index();
			$(".register_method a").removeClass("method_active");
			if (index==1) {
				$('.register_content').css("height","510px");
				$("#register_email").css("display","none");
				$("#register_phone").css("display","block");
               $(this).addClass("method_active");
			}
			else{
				$('.register_content').css("height","450px");
				$("#register_email").css("display","block");
				$("#register_phone").css("display","none");
               $(this).addClass("method_active");
			}
		})
	})
/*
	$("#phone").bind("blur",function(){
           var phone=$("#phone").val();
           var reg = /\w+[@]{1}\w+[.]\w+/;

          if(reg.test(phone)){
           	      $(".S_code").slideDown();
           	        console.log('aa');
           }
           else{
           	
           	 $(".S_code").css("display","none");
           }

	})*/
	$(".people_type span").each(function(){
		$(this).click(function(){
			$(".people_type span").removeClass('people_active');
			$(this).addClass('people_active')
		})
	})
	$('input').focus(function(){
		$(this).css("borderColor","#00baff");
	})
	$('input').blur(function(){
		$(this).css("borderColor","#d9d9d9");
	})
})

