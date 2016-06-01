require("es5-shim");
require("../../../css/page/position/findJobs.scss");
require('../../plugins/jquery.range.js');
require('../../plugins/select.js');
require('../../plugins/search.js');
require('../../plugins/filter.js');

$(".paging .right").on("click", function() {
	var pr_num = $(".private_page").text();
	var to_num = $(".total_page").text();
	if (pr_num == to_num) {
		alert("已经是最后一页了，没有下一页！")
		return false;
	};
	pr_num = parseInt(pr_num) + 1;
	$(".private_page").text(pr_num);
})
$(".paging .left").on("click", function() {
	var pr_num = parseInt($(".private_page").text());
	if (pr_num == 1) {
		alert("已经是第一页了，没有上一页！")
		return false;
	};
	pr_num = pr_num - 1;
	$(".private_page").text(pr_num);
})

var selectListData01 = {
	"title": "发布时间",
	"items": {
		"11": "不限",
		"12": "最近三天",
		"13": "最近一周",
		"14": "最近一月"
		
	}
};
var selectListData02 = {
	"title": "职位类型",
	"items": {
		"21": "不限",
		"22": "类型01",
		"23": "类型02",
		"24": "类型03",
		"25": "类型01"
	}
};
var selectListData03 = {
	"title": "是否悬赏",
	"items": {
		"30": "不限",
		"31": "是",
		"32": "否"
	}
};
$('.select').select();
$('.select_test_01').selectTest({
	"data": selectListData01,
	"id": "select_test_01"
});
$('.select_test_02').selectTest({
	"data": selectListData02,
	"id": "select_test_02"
});
$('.select_test_03').selectTest({
	"data": selectListData03,
	"id": "select_test_03"
});

$('.select_style > a').click(function() {
	$('.select_range > div').slideUp(150);
});

$('.select_range > a').click(function(event) {
	if ($('.select_range > div').css("display") == "block") {
		$('.select_range > div').slideUp(150);
	} else {
		$('.select_range > div').slideDown(150);
	}
	$('.select_style > ul').slideUp(150);
	event.stopPropagation();
})
$('.select_range > div').click(function(event) {
	event.stopPropagation();
});
$('.range-slider').jRange({
	from: 18,
	to: 48,
	step: 1,
	scale: [18, 23, 28, 33, 38, 43, 48],
	format: '%s',
	width: 300,
	showLabels: true,
	isRange: true
});
$('#get_range').click(function() {
	var rangeVal = $('.range-slider').val();
	var aVal = rangeVal.split(",")[0] + "-" + rangeVal.split(",")[1] + "岁";
	$('.select_range > a').text(aVal);
	if (rangeVal == "18,48") {
		$('.select_range > a').text("年龄范围");
	}
	$('.select_range > div').slideUp(150);
});

$('body').click(function() {
	$('.select_style > ul').slideUp(150);
	$('.select_range > div').slideUp(150);
})
