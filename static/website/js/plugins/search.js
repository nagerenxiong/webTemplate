;(function ($) {
    $.fn.extend({
        "autoShow": function (options) {
            var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
            this.each(function () {  //这里的this 就是 jQuery对象

                var $this = $(this); //获取当前dom 的 jQuery对象，这里的this是当前循环的dom
                var input = $this.children('input')
                var searchBtn = $this.children('a');
                var searchShow = $this.children('.search_show');
                var li = $this.find("li");
                var liFlag = 0;

                function clearChose() {
                    li.removeClass("active");
                    liFlag = 0;
                }

                function arrowChose(liIndex) {//方向键控制选项
                    for(var i = 0; i < li.length; i++) {
                        if(i == liIndex - 1) {
                            $(li[i]).addClass("active");
                         } else {
                            $(li[i]).removeClass("active");
                         }
                    }
                    if(liIndex >= 0 && liIndex < li.length) {
                        input.val($(li[liIndex-1]).children('span:first-child').text());
                    } else {
                        input.val($(li[li.length-1]).children('span:first-child').text());
                    }
                }

                input.on('keyup', function(e){
                    var nullVal = /^\s+$/.test(input.val());
                    // console.log(e.keyCode + "|" + nullVal);
                    if(e.keyCode !== 32) {
                        searchShow.show();
                    }

                    //当为空或者全是空格时不弹出
                    if(e.keyCode == 8 && nullVal || input.val() == "") {
                        searchShow.hide();
                    }

                    //当按回车时直接搜索并隐藏
                    if(e.keyCode == 13) {
                       //搜索...
                       searchShow.hide();
                       input.blur();
                    }

                    //向左与向上键
                    if(e.keyCode == 37 || e.keyCode == 38) {
                        if(liFlag > 1) {
                            liFlag -- ;
                        } else {
                            liFlag = li.length;
                        }
                        arrowChose(liFlag);
                        // console.log("向上"+liFlag);
                        
                    }

                    //向右与向下键
                    if(e.keyCode == 39 || e.keyCode == 40) {
                        if(liFlag == li.length) {
                            liFlag = 1;
                        } else {
                            liFlag ++;
                        }
                        arrowChose(liFlag);
                        // console.log("向下"+liFlag);
                    }

                });

                input.on("click", function(event){
                    if(input.val() != "") {
                        searchShow.show();
                        clearChose();
                        //搜索...
                        event.stopPropagation();
                    }
                });


                li.each(function(){
                    var liCurr = $(this);
                    liCurr.on('click', function() {
                        //搜索...
                        input.val(liCurr.children('span:first-child').text());
                        searchShow.hide();
                    });
                    liCurr.on('mouseover', function() {
                        li.removeClass("active");
                        liCurr.addClass("active");
                    });
                    liCurr.on('mouseleave', function() {
                        li.removeClass("active");
                    });
                });

                searchBtn.on('click', function() {
                    searchShow.hide();
                });

                $('body').click(function() {
                    searchShow.hide();
                })
            });
        }

    });
    //默认参数
    var defaluts = {};
})(window.jQuery);

$(function(){
    $('.search_input').autoShow();
});