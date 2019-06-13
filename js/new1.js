function showTime(){
            var theStr="";
            var myTime=new Date();

            var year=myTime.getFullYear();
            var month=myTime.getMonth()+1;
            var date=myTime.getDate();

            var str=0;
            var str3="";

        if(month==1 && date==1)
			{
				str3="今天是"+year+"年新年";
            }
            else { 
				if(month!=1 && date!=1){
                for(i=1;i<month;i++){
                 nowTime=new Date(year,i,0);
                 str+=nowTime.getDate();
            }
             str+=date;
             str3="离"+(year+1)+"年新年还有"+(366-str)+"天";
    }
}
    theTime=str3;
	return theTime;
}
$(document).ready(function(){
	alert(showTime());
    NowTimer();
    //setInterval(NowTimer,1000);
});

    function NowTimer(){
            var theStr="";
            var myTime=new Date();

            var year=myTime.getFullYear();
            var month=myTime.getMonth()+1;
            var date=myTime.getDate();
			var hours=myTime.getHours();
			var minutes=myTime.getMinutes();
			var seconds=myTime.getSeconds();

            var str=0;
            var str3="";

        	var suf="AM"
			if(hours>12){
				suf="PM";
			}
			theStr=year+"年"+month+"月"+date+"日";
		theTime="当前时间:"+theStr+" "+hours+"时"+minutes+"分"+seconds+"秒"+suf;
		Timer.innerHTML=theTime;
        setTimeout(NowTimer,1000);
}

$(function()  
{
    'use strict';
    var backButton = $('.back-to-top');     //选择返回菜单

    backButton.on('click',function(){       //监听返回按钮点击事件
        $('html,body').animate({
            scrollTop:0
        },300)
    })

    $(window).on('scroll',function(){       //监听window的scroll事件
        //如果滚动的部分高于窗口的高度
        if($(window).scrollTop()>$(window).height())
        {
            $(".back-to-top").animate({
                top:'-264px'
            },0.2)          //显示返回按钮
        }
        else{
            $(".back-to-top").animate({
                top:'-900px'
            },0.2)          //隐藏返回按钮
        }
    })

    $(window).trigger('scroll');     //触发scroll事件

      $("li").hover(function(){
      $(this).find(".txt").stop().animate({height:"100px"},150)
      $(this).find("p").stop().animate({paddingTop:"0px"},150)
    },function(){
      $(this).find(".txt").stop().animate({height:"50px"},150)
      $(this).find("p").stop().animate({paddingTop:"30px"},150)
    })

})

