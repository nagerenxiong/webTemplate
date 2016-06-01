require("es5-shim");
require("../../css/page/index.scss");
require('../plugins/jquery.SuperSlide.2.1.1.js');
require('../plugins/slideBackground.js');
require("../plugins/wipeUp.js");
$(".star_headhunter_photo a").wipeUp({
	height: '384px',
	selector: '.introduce_box'
});
$(".why_choice_box a").wipeUp({
	height: "100%",
	selector: '.introduce_box'
});
$(".slideBox").slide({
	mainCell: ".bd ul",
	effect: "left",
	autoPlay: false,
	trigger: "click",
	startFun: function(i, c) {
		if (i != 0) {
			$(".slideBox .index_slider").animate({
				left: "0",
				marginLeft:'-700px'
			}, 700);
		}
		if (i==0) {
			$(".slideBox .index_slider").animate({
				left: "50%",
				marginLeft:'-350px'
			}, 500);
		}
	}
});
$(".picScroll-left").slide({
	titCell: ".hd ul",
	mainCell: ".bd ul",
	autoPage: true,
	effect: "leftLoop",
	autoPlay: true,
	scroll: 4,
	vis: 4
});
$(".interline").css('overflow', 'hidden');
$(".search .select").click(function() {
	if ($(this).children('.xiala').css("display") == "none") {
		$(this).children('.xiala').slideDown(100);
	} else {
		$(this).children('.xiala').slideUp(100);
	}
})
$(".sousuo").keyup(function(event) {
	$(".search_show").show();
});
// $(".search_show dd").click(function(){
// 	$(".sousuo").
// })