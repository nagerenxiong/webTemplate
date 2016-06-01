require("es5-shim");
require("../../css/page/industrySpecial.scss");
require('imports?$=jquery!../plugins/jquery.SuperSlide.2.1.1.js');
require('../plugins/search.js');



$('.nav_top > li').click(function(){
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
});

$('.nav_side > li').mouseenter(function(){
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(this).parent().css('height', 'auto');
	$('.nav_side > li').show();

	if(index > 0) {
		$('.nav_item_more').css('top', Math.ceil($(this).position().top)+1);
	} else {
		$('.nav_item_more').css('top', 0);
	}
	$('.nav_item_more').show();
	$('.nav_item_more > ul').eq(index).show().siblings('ul').hide();
});
$('.nav_side > li').mouseleave(function(){
	$(this).siblings().removeClass("active");
});

$('.nav_item_more').mouseleave(function(){
	$('.nav_side > li').removeClass("active");
	$('.nav_item_more,.nav_item_more > ul').hide();
	$('.nav_side').css('height', '518px');
});

$('body').on("mousemove", function(e){
	var navSidePos = $('.nav_side').offset();
	var navSideW = $('.nav_side').innerWidth() + 2;
	var navSideH = $('.nav_side').innerHeight() + 2;
	var pageScrollH = $('html').scrollTop() || $('body').scrollTop();
	if(e.clientX < navSidePos.left || 
	   (e.clientY + pageScrollH < navSidePos.top) || 
	   ((e.clientY + pageScrollH > navSidePos.top + navSideH) && (e.clientX < navSidePos.left + navSideW))
	   ) {
		$('.nav_item_more,.nav_item_more > ul').hide();
		$('.nav_side').css('height', '518px');
	}
});

$(".picFocus").slide({ mainCell:".bd ul",effect:"left",autoPlay:true });
