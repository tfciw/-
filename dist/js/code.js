(function ($) {
    $.fn.placeholder = function (options) {
        var defaults = {
            attr: "place-holder"
        };
        options = $.extend(defaults, options);
        return $(this).map(function () {
            var text = $(this).attr(options.attr);
            if (text != undefined) {
                if ($(this).attr("type") == "password") {
                    $(this).val(text);
                    $(this).attr("type", "text");
                    $(this).focusin(function () {
                        var on = $(this).val();

                        if (on == text) {
                            $(this).val("");
                            $(this).attr("type", "password");
                        }
                    }).focusout(function () {
                        var on = $(this).val();
                        if (on == "") {
                            $(this).val(text);
                            $(this).attr("type", "text");
                        }
                    });
                } else {
                    $(this).val(text);
                    $(this).focusin(function () {
                        var on = $(this).val();
                        if (on == text) {
                            $(this).val("");
                        }
                    }).focusout(function () {
                        var on = $(this).val();
                        if (on == "") {
                            $(this).val(text);
                        }
                    });
                }
            }
        });
    }
})(jQuery);
(function ($) {
    $.fn.flash = function (options) {
        var defaults = {
            color1: "#ffde5b",
            color2: "#ff0000",
            isIcon: false,
            timer: 300
        };
        options = $.extend(defaults, options);
        return $(this).map(function () {
            var self = $(this);
            self.flag = true;
            if(options.isIcon){
                setInterval(function () {
                    if(self.flag){
                        self.css("color",options.color1).find('.iconfont').css("color",options.color1);
                        self.flag = false;
                    }else {
                        self.css("color",options.color2).find('.iconfont').css("color",options.color2);
                        self.flag = true;
                    }
                },options.timer);
            }else {
                setInterval(function () {
                    if(self.flag){
                        self.css("color",options.color1);
                        self.flag = false;
                    }else {
                        self.css("color",options.color2);
                        self.flag = true;
                    }
                },options.timer);
            }
        });
    }
})(jQuery);
(function ($) {
    $.fn.frame = function (options) {
        var defaults = {
            width: "525",
            height: "320",
            address: "license.html"
        };
        options = $.extend(defaults, options);
        return $(this).map(function () {
            var self = $(this);
            self.click(function () {
                $("" +
                    "<div id='mask' class='mask'>" +
                    "<iframe id='frame' " +
                    "src='license.html' " +
                    "style='position:fixed;z-index:999999;top: 50%;left: 50%;margin-left: -"+ parseInt(options.width)/2 +"px;margin-top: -"+ parseInt(options.height)/2 +"px;' " +
                    "width='"+ options.width +"' " +
                    "height='"+ options.height +"'>" +
                    "</iframe>" +
                    "</div>").appendTo("body");
            });
        });
    }
})(jQuery);
var code = { };
code.app ={};
code.app.float = function(){
    if($(".float").length == 0) return false;
	var menuYloc = $(".float").offset().top;
    $(window).scroll(function () {
        var offsetTop = menuYloc + $(window).scrollTop() + "px";
        $(".float-left").animate({ top: offsetTop }, { duration: 600, queue: false });
        $(".float-right").animate({ top: offsetTop }, { duration: 600, queue: false });
    });
    var float_box = $('.float');
  	float_box.find('.close-btn').click(function(){
  		$(this).parents('.float').fadeOut();
  	});
}
code.app.time = function (obj,isbj){
  function CurentTime()
     {
         var now = new Date();

         var year = now.getFullYear();       //年
         var month = now.getMonth() + 1;     //月
         var day = now.getDate();            //日

         var hh = now.getHours();            //时
         var mm = now.getMinutes();          //分
         var ss = now.getSeconds();
         var clock = year + "-";

         if(month < 10)
             clock += "0";

         clock += month + "-";

         if(day < 10)
             clock += "0";
          if(isbj){
            if(hh < 12){
              var sit = 12 - hh;
              hh = 24 - sit;
              day -= 1;
            }else{
              hh -= 12;
            }
          }
         clock += day + " ("+getDayofWeek()+") ";

         if(hh < 10)
             clock += "0";
         clock += hh + ":";
         if (mm < 10) clock += '0';
         clock += mm;
         clock += ":";
         if (ss < 10) clock += '0';
         clock += ss;
         return(clock);
     }
     function getDayofWeek() {
            var day = "";
            var time = new Date();
            var numOfWeek = time.getDay();
            switch (numOfWeek) {
                case 0:
                    day = "日";
                    break;
                case 1:
                    day="一";
                    break;
                case 2:
                    day = "二";
                    break;
                case 3:
                    day = "三";
                    break;
                case 4:
                    day = "四";
                    break;
                case 5:
                    day = "五";
                    break;
                case 6:
                    day = "六";
                    break;
            }
            return day;
        }
     var time_obj = $(obj);
     var address = null;
     if(isbj){
       address = "北京时间"
     }else{
       address = "美东时间"
     }
     time_obj.html(address+ "：<em class='time'>"+CurentTime()+"</em>");
     setInterval(function(){
       time_obj.html(address+"：<em class='time'>"+CurentTime()+"</em>");
     },1000);
}
$(function(){

  $(".flash").flash();
  $(".green-flash").flash({
    color1: "#0cde01",
    color2: "#ffde5b"
  });
  code.app.time('.time',false);
  $("input").placeholder();
  $(".menu li").hover(function (){
    $(this).find(".sub-content").stop().slideDown();
  },function(){
    $(this).find(".sub-content").stop().slideUp();
  });
  $(".banner").slide({
    mainCell: ">.bd ul",
    autoPlay: true
  });
  $(".address-slide").slide({mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true,vis:1});
  $(".news").slide({
    mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",interTime:50,trigger:"click"
  })
  $(".contact-wrap .item").hover(function(){
    $(this).find('.hover-box').stop().slideDown();
  },function(){
    $(this).find('.hover-box').stop().slideUp();
  });
});
