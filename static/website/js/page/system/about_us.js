require("es5-shim");
require("../../../css/page/system/about_us.scss");
$(".left_arrow").click(function(){
	$(".active_theme>ul").css("left","0px");
})
$(".right_arrow").click(function(){
	$(".active_theme>ul").css("left","-1040px");
})
