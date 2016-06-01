require("es5-shim");
require("../../css/page/headhunterList.scss")
require("../plugins/jquery.SuperSlide.2.1.1.js");
require("../plugins/wipeUp.js");
$(".hhnt_list a.item").wipeUp({height:'393px',selector:'.introduce_box'});
$(".slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:false});
