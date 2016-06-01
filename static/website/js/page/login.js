$(function(){
       $(".menu_box_more").hover(function(){
       	$(".menu_box_more>ul").css("display","block");
       },function(){	
       	$(".menu_box_more>ul").css("display","none");})


	changeColor_1("#user",'.icon-zhanghu2');
	changeColor_2("#user",'.icon-zhanghu2');
	changeColor_1("#psd",'.icon-mima');
	changeColor_2("#psd",'.icon-mima');
	$('#user').bind('input propertychange', function() {
         
		if ($("#user").val() =="") {
			$(".del").css("display","none");
		}
		 $(".del").css("display","block");
});
	$(".del").click(function(){
		$("#user").val(null);
		$(this).css("display","none");
	})
	$("#xuanzhong").change(function(){
		
		if ($("input[type='checkbox']:checked").val()) {
			$(".icon-xuanzhong").css("display",'block');
		}
		else{
			$(".icon-xuanzhong").css("display",'none');
		}
	})
	
	$("#user").bind("blur",function(){
           var email=$("#user").val();
           var reg = /\w+[@]{1}\w+[.]\w+/;
           if (email &&  /^1[3|4|5|8]\d{9}$/.test(email)) {
                $(".user_tip").css("display","none");
           }else if(reg.test(email)){
           	      $(".user_tip").css("display","none");
           }
           else{
           	
           	 $(".user_tip").css("display","block");
             $(".user_tip").html("格式不正确！");
           }

	})

	
})


function  changeColor_1(obj,logo){
	$(obj).focus(function(){
		
		$(this).css({borderColor:"#00baff"});
		$(this).siblings().css({borderColor:"#00baff",background:"white"});
		$(logo).css("color","#00baff");
	})
}
function changeColor_2(obj,logo){

	$(obj).blur(function(){
		
		$(this).css({borderColor:"#d9d9d9"});
		$(this).siblings().css({borderColor:"#d9d9d9",background:"#f9f9f9"});
		$(logo).css("color","#c8c8c8");

	})
}