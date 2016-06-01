/*滑动背景特效*/
(function($) {
	$.fn.wipeUp = function(options) {
		$.fn.wipeUp.defaults = {
			height: '100%', //背景距离父元素左边的宽度
			selector: '.wipeUpBackground' //指定要滑动的背景选择器
		};
		return this.each(function() {
			var opts = $.extend({}, $.fn.slide.defaults, options);
			var slider = $(this);
			var height = opts.height;
			var selector = opts.selector;
			slider.mouseover(function(event) {
				slider.children(selector).show();
				slider.children(selector).stop(true, false).animate({
					height: height,
					display: 'block'
				}, 380, "linear");
			});
			slider.mouseout(function(e) {
				slider.children(selector).stop(true, false).animate({
					height: '0'
				}, 380, "linear", function() {
					slider.children(selector).hide();
				});

			});
		});
	};
})(jQuery);