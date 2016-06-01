;(function ($) {
    $.fn.extend({
        "selectTest": function (options) {
            var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
            this.each(function () {  //这里的this 就是 jQuery对象

            	var selectList = opts.data;
            	var selectId = opts.id;
                var $this = $(this); //获取当前dom 的 jQuery对象，这里的this是当前循环的dom

          		var initValue = $this.children('a').text();//获取初始化值，当选择“不限”时能显示原始值

              	 $this.children("a").on('click', function(event){
                	var list = $this.children("ul");
                	if(list.css('display') == 'block'){
                		list.slideUp(150);
                	} else {
	                	list.slideDown(150);
	                	list.parent().siblings().children('ul').slideUp(150);
	                }
	                event.stopPropagation();
                });

              	var options = $this.find("li");
                options.each(function(index){
                	var li = $(this);//此处的$(this)是指options里的li元素
                	li.on('click', function(){
                		// $this.children("input").val(li.attr("data-level"));
                		$this.children('ul').slideUp(150);
                		if(index != 0) {
	                		$this.children('a').text(li.text());
                            $this.children('a').attr("data-value", li.attr("data-value"));
	                	} else {
	                		$this.children('a').text(initValue);
                            $this.children('a').attr("data-value", 0);
	                	}
                	})
                });

            });
        }

    });
    //默认参数
    var defaluts = {};
})(window.jQuery);