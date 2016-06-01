/*滑动背景特效*/
(function($) {
	$.fn.slideBackground = function(options) {
		$.fn.slideBackground.defaults = {
			left: 0,//背景距离父元素左边的宽度
			top: 0,//背景距离父元素上边的高度
			selector: '.slideBackground' //指定要滑动的背景选择器
		};
		return this.each(function() {
			var opts = $.extend({}, $.fn.slide.defaults, options);
			var slider = $(this);
			var left = opts.left;
			var top = opts.top;
			var selector = opts.selector;
			slider.mouseover(function(event) {
				$(this).children(selector).stop(true, false).animate({
					left: left,
					top: top
				}, 150);
			});
			slider.mouseout(function(e) {
				e = e || evnet;
				var pageX = e.pageX - $(this).offset().left;
				var pageY = e.pageY - $(this).offset().top;
				if (pageX <= 0) {
					$(this).children(selector).stop(true, false).animate({
						left: "-100%"
					}, 150);
				}
				if (pageX >= $(this).width()) {
					$(this).children(selector).stop(true, false).animate({
						left: "100%"
					}, 150);
				}
				if (pageY <= 0) {
					$(this).children(selector).stop(true, false).animate({
						top: "-100%"
					}, 150);
				}
				if (pageY >= $(this).height()) {
					$(this).children(selector).stop(true, false).animate({
						top: "100%"
					}, 150);
				}

			});

		}); //each End

	}; //slideBackground End
})(jQuery);