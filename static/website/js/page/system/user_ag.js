require("es5-shim");
require("../../../css/page/system/user_ag.scss");
$(".up_down").click(function() {
	$(this).parent().next("div").slideToggle();
	$(this).toggleClass("rotate1");

})

$(".problem_list>li").each(function(index) {
	$(this).bind("click", function() {
		$(".problem_list>li").removeClass("active");
		$(this).addClass("active");
		var t = $(this).index();
		$(".conmmon_problem>div").removeClass("Dis_content");
		$(".conmmon_problem>div").eq(t).addClass("Dis_content");
	})

})

$(".Nav_bar>li").each(function() {
	$(this).bind("click", function() {
		$(".Nav_bar>li").removeClass("bg");
		$(".Nav_bar>li a").removeClass("color");
		$(this).addClass("bg");
		$(this).find("a").addClass("color");
		var j = $(this).index();
		$(".content>div").removeClass("type_content");
		$(".content>div").eq(j).addClass("type_content");
	})
})