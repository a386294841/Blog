$(document).ready(function(){
    NowTimer();
    //setInterval(NowTimer,1000);
    FZ();
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
;$(function()
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

function showList(o) {
    hideList("drop-content" + o.id);
    document.getElementById("drop-" + o.id).classList.toggle("show");
}


function hideList(option) {
    var dropdowns = document.getElementsByClassName("drop-content");

    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.id != option) {
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        hideList("");
    }
}

function FZ(){
    var curIndex = 0,nextIndex, t = null;  // t 保存的是定时器的id
    var lunbo = document.getElementById("lunbo"),
        advs = lunbo.getElementsByTagName("li"),
        itemArr = lunbo.getElementsByClassName("item"),
        btns = lunbo.getElementsByClassName("btn");

//    轮播
    function scroll() {
        nextIndex = curIndex + 1;
        if (nextIndex >= advs.length) nextIndex = 0;
        toggleAdv();
        t = setTimeout(scroll, 2000);
    }

//    定时器  2000ms之后 执行scroll function
    t = setTimeout(scroll, 2000);

//    给轮播监听鼠标移上来的事件
    lunbo.onmouseover = function () {
        clearTimeout(t); // 清除定时器
        btns[0].style.display = "block";
        btns[1].style.display = "block";
    };
    //    给轮播监听鼠标移出去的事件
    lunbo.onmouseout = function () {
//        clearTimeout(t); // 清除定时器
        t = setTimeout(scroll, 2000);
        btns[0].style.display = "none";
        btns[1].style.display = "none";
    };
    
    for (var i = 0; i < btns.length; i++) {
//        给按钮绑定点击事件
        btns[i].onclick = function () {
            if (this.id === "left") {
                nextIndex = curIndex - 1;
                if (nextIndex === -1) {
                    nextIndex = advs.length - 1;
                }
            } else {
                nextIndex = curIndex + 1;
                if (nextIndex === 8) {
                    nextIndex = 0;
                }
            }
            toggleAdv();

        }
    }

    for (var i = 0; i < itemArr.length; i++) {
        itemArr[i].onmouseover = function () {
            for (var i = 0; i < itemArr.length; i++) {
                if (itemArr[i] === this) {
                    nextIndex = i;
                }
            }
            toggleAdv();
        }
    }

//    切换广告
    function toggleAdv() {
        advs[curIndex].classList.remove("active");
        advs[nextIndex].classList.add("active");
        itemArr[curIndex].classList.remove("active");
        itemArr[nextIndex].classList.add("active");
        curIndex = nextIndex; // 重置curIndex
    }
}
