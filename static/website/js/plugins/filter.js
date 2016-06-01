$(function(){

	function addActive(obj) {
		var aIndex = $(obj).index();
		$(obj).addClass("active").siblings().removeClass("active");
	}

	function addShowTemp(obj,wrap) {
		var text = $(obj).text();
		var textHTML = '<a class="active show_temp">' + text + "</a>";
		$('.'+ wrap).append(textHTML);
	}


	//======= 行业选择 子模块 start ======
	var fmIndustry01,
		fmIndustry02;
	$(".industry_item a").click(function(){
		var aIndex = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent().siblings("div.industry_item").children("a").removeClass("active");
		if(!$(this).hasClass("for_all")) {
			$(".fm_industry").addClass("height_auto");
			var itemDetail = $(".fm_industry > .item_detail").clone(true);
			$(".fm_industry > .item_detail").remove();
			$(itemDetail).insertAfter($(this).parent());
			$(".fm_industry > .item_detail").show();
			if($(".fm_industry").hasClass("height_auto")) {
				$(".for_more_01 > i").addClass("rotate180");
				$(".for_more_01 > span").text("收起");
			} else {
				$(".for_more_01 > i").removeClass("rotate180");
				$(".for_more_01 > span").text("更多");
			}
			$(".industry_item_detail > a").removeClass("active");
		} else if($(this).hasClass("for_all")) {
			$('.fm_industry a').removeClass('active');
			$(".industry_item_detail").hide();
			$('.fm_type_01 .show_temp').remove();
			$(this).addClass("active");
		}
		fmIndustry01 = $(this).parent().index('.industry_item');
		fmIndustry02 = aIndex;
	});
	$(".industry_item_detail > a").click(function(){
		addActive(this);
	});
	
	$(".for_more_01").click(function(){
		$(this).children("i").toggleClass("rotate180");
		$(".fm_industry").toggleClass("height_auto");

		if($('.fm_industry .for_all').hasClass('active')) {
			$('.fm_industry a').removeClass('active');
			$('.for_all').addClass("active");
		}

		if(fmIndustry01 == 0 && fmIndustry02 > 0) {
			if($(".fm_industry").hasClass("height_auto")) {
				$(".industry_item").eq(0).children("a").eq(fmIndustry02).addClass("active");
			} else {
				$('.fm_type_01 .show_temp').remove();
				$(".industry_item").eq(0).children("a").eq(fmIndustry02).removeClass("active");
			}
		}

		if($(".industry_item_detail > a.active").length == 1) {
			var obj = $(".industry_item_detail > a.active");
			$('.fm_type_01 .show_temp').remove();
			addShowTemp(obj,"fm_type_01");
		}

		if($(".fm_industry").hasClass("height_auto")) {
			$(".for_more_01 > span").text("收起");
		} else {
			$(".for_more_01 > span").text("更多");
		}

	});
	//======= 行业选择 子模块 end ======

	//======= 期望地点 子模块 start ======
	$(".fm_type_02 .fm_city a").click(function(){
		addActive(this);
	});
	$(".fm_type_02 .fm_city .default_item a").click(function(){
		$('.fm_type_02 .city_item a,.fm_type_02 .city_item_detail a').removeClass("active");
		$('.fm_type_02 .city_item_detail').hide();
		$('.fm_type_02 .show_temp').remove();
	});
	$(".fm_type_02 .city_item a").click(function(){
		$(".fm_type_02 .fm_city .default_item a").removeClass("active");
		$(this).parent().siblings(".city_item").children("a").removeClass("active");
		$(".fm_type_02 .fm_city > .item_detail > a").removeClass("active");
		var itemDetail = $(".fm_type_02 .fm_city > .item_detail").clone(true);
		$(".fm_type_02 .fm_city > .item_detail").remove();
		$(itemDetail).insertAfter($(this).parent());
		$(".fm_type_02 .fm_city > .item_detail").show();
	});
	$(".fm_type_02 .city_item_detail > a").click(function(){
		$('.fm_type_02 > .show_temp').remove();
	});
	$(".for_more_02").click(function(){
		$(this).children("i").toggleClass("rotate180");
		$(".fm_type_02 .fm_city").toggleClass("height_auto");

		if($(".fm_type_02 .city_item_detail > a.active").length == 1) {
			var obj = $(".fm_type_02 .city_item_detail > a.active");
			$(".fm_type_02 .show_temp").remove();
			addShowTemp(obj,"fm_type_02");
		} else if($(".fm_type_02 .city_item > a.active").length == 1) {
			var obj = $(".fm_type_02 .city_item a.active");
			$(".fm_type_02 .show_temp").remove();
			addShowTemp(obj,"fm_type_02");
		}

		if($(".fm_type_02 .fm_city").hasClass("height_auto")) {
			$(".for_more_02 > span").text("收起");
		} else {
			$(".for_more_02 > span").text("更多");
		}

	});
	//======= 期望地点 子模块 end ======

	//======= 所在城市 子模块 start ======
	$(".fm_type_03 .fm_city a").click(function(){
		addActive(this);
	});
	$(".fm_type_03 .fm_city .default_item a").click(function(){
		$('.fm_type_03 .city_item a,.fm_type_03 .city_item_detail a').removeClass("active");
		$('.fm_type_03 .city_item_detail').hide();
		$('.fm_type_03 .show_temp').remove();
	});
	$(".fm_type_03 .city_item a").click(function(){
		$(".fm_type_03 .fm_city .default_item a").removeClass("active");
		$(this).parent().siblings(".city_item").children("a").removeClass("active");
		$(".fm_type_03 .fm_city > .item_detail > a").removeClass("active");
		var itemDetail = $(".fm_type_03 .fm_city > .item_detail").clone(true);
		$(".fm_type_03 .fm_city > .item_detail").remove();
		$(itemDetail).insertAfter($(this).parent());
		$(".fm_type_03 .fm_city > .item_detail").show();
	});
	$(".fm_type_03 .city_item_detail > a").click(function(){
		$('.fm_type_03 > .show_temp').remove();
	});
	$(".for_more_03").click(function(){
		$(this).children("i").toggleClass("rotate180");
		$(".fm_type_03 .fm_city").toggleClass("height_auto");

		if($(".fm_type_03 .city_item_detail > a.active").length == 1) {
			var obj = $(".fm_type_03 .city_item_detail > a.active");
			$('.fm_type_03 .show_temp').remove();
			addShowTemp(obj,"fm_type_03");
		} else if($(".fm_type_03 .city_item > a.active").length == 1) {
			var obj = $(".fm_type_03 .city_item a.active");
			$('.fm_type_03 .show_temp').remove();
			addShowTemp(obj,"fm_type_03");
		}

		if($(".fm_type_03 .fm_city").hasClass("height_auto")) {
			$(".for_more_03 > span").text("收起");
		} else {
			$(".for_more_03 > span").text("更多");
		}
	});
	//======= 所在城市 子模块 end ======


	//======= 通用模块 只有一行 start ======
	$(".fm_type_04 a").click(function(){
		addActive(this);
	});
	//======= 通用模块 只有一行 end   ======

});