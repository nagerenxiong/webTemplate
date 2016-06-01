require("es5-shim");
require("../../css/page/huntForTalent.scss");
require('../plugins/jquery.range.js');
require('../plugins/select.js');
require('../plugins/search.js');
require('../plugins/filter.js');


$('.select_test_01').selectTest();
$('.select_test_02').selectTest();
$('.select_test_03').selectTest();

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