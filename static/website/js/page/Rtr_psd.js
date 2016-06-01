$(function(){
	$('.find_content>p span').each(function(){
		$(this).bind("click",function(){
			var index=$(this).index();

			$('.find_type>p span').each(function(){
				$('.find_type>p span').removeClass('steps');
				$('.find_type>p span').eq(0).addClass('steps');			
			})
			$(".find_email>div").each(function(){
	              $(".find_email>div").removeClass('S_down');
			      $(".find_email>div").eq(0).addClass('S_down');
			})
			$(".find_phone>div").each(function(){
	              $(".find_phone>div").removeClass('S_down');
			      $(".find_phone>div").eq(0).addClass('S_down');
			})
				
			$('.find_content>p span').removeClass("color_active");
			$(this).addClass("color_active");
			if (index==0) {
				$(".find_email").css("display",'block');
				$(".find_phone").css("display",'none');
			}else{
				$(".find_email").css("display",'none');
				$(".find_phone").css("display",'block');
			}
		})
	})
	$(".btn_email").bind("click",function(){
		$('.find_type>p span').each(function(){
			$('.find_type>p span').removeClass('steps');
			$('.find_type>p span').eq(1).addClass('steps');
		})
		$(".find_email>div").removeClass('S_down');
		$(".find_email>div").eq(1).addClass('S_down');
		
	})
	$(".btn_phone").bind("click",function(){
		$('.find_type>p span').each(function(){
			$('.find_type>p span').removeClass('steps');
			$('.find_type>p span').eq(1).addClass('steps');
		})
		$(".find_phone>div").removeClass('S_down');
		$(".find_phone>div").eq(1).addClass('S_down');
		
	})
	
})