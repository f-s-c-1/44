$(function () {
    var myDate = new Date(); //实例一个时间对象；
    var hours = myDate.getHours(); //获取系统时，
    var Minutes = myDate.getMinutes(); //分
    var Seconds = myDate.getSeconds(); //秒
    var newHours = null;
    var hourschange = null;

    function time1() {
        setInterval(function () {
            myDate = new Date();
            hours = myDate.getHours();
            Minutes = myDate.getMinutes();
            Seconds = myDate.getSeconds();
        }, 1000)
        if (hours % 2 == 1) {
            $('.seckill_tit_box1').html(hours - 1 + "点场");
            newHours = hours + 1;
        } else {
            $('.seckill_tit_box1').html(hours + "点场");
            newHours = hours + 2;
        }
    }
    time1();
    var time2 = setInterval(function time3() {
        hourschange = newHours - hours;
        $('.hours').html('0' + (hourschange - 1));
        var Minuteschange = 59 - Minutes;
        if (Minuteschange < 10) {
            $('.minutes').html('0' + Minuteschange);
        } else {
            $('.minutes').html(Minuteschange);
        }
        var Secondschange = 59 - Seconds;
        if (Secondschange < 10) {
            $('.Seconds').html('0' + Secondschange);
        } else {
            $('.Seconds').html(Secondschange);
        }
        if (hourschange - 1 == 0) {
            if (Minuteschange == 59 && Secondschange == 59) {
                time1();
            }
        }
    }, 1000)

    function ajaxmiaosha() {
        // $('.jdms_bottom_list').html("")
        $.ajax({
            type: "get",
            url: "./js/miaosha.json",
            data: {},
            dataType: "json",
        }).done(function (str) {

            $.each(str, function (i) {
                var result = str.result;
                // console.log(result)
                $.each(result, function (j) {
                    $(`
                    	<div class="swiper-slide">		
                    		<div class='imgbox'>
                    			<img src='${result[j].pic}'>
                    		</div>
                            <div class='p1'>￥${result[j].new}</div>
                            <div class='p2'>￥${result[j].old}</p>
                                </div>`).appendTo($('.jdms_bottom_list'))
                })
            })

        })
    }
    ajaxmiaosha()

    function meiriguang() {
        var result = index.meiriguang.data.list;
        for (var i = 0; i < result.length; i++) {
            var shuxing = result[i].p;
            var title = result[i].title1;
            var txt = result[i].title2;
            var imgsrc = result[i].img;
            var html = `
         <div class="mrg_center_box">
         <div class="mrg_center_boxli">
             <div class="txt_box">
                <div style="${shuxing}" class="titletxt">${title}</div>
                <div class="txt2">${txt}</div>
             </div>
             <div class="img_box">
                <img src="${imgsrc}" alt="">
             </div>
        </div>
        </div>
         `
            $(html).appendTo($('.main_mrg_center'))
        }
    }
    meiriguang()
    setInterval(function () {
        $('.jdkb_list').animate({ "top": -30 }, 800, function () {
            $(".jdkb_list li").first().appendTo($('.jdkb_list'))
            $('.jdkb_list').css('top', 0)
        })
    }, 3800)


    function wntj() {
        var result = index.weinituijian;
        var list = result.data.list1;
        for (var i in list) {
            var html = `
            <li>
            <div class="libaidi">
            <div class="wntjli_box">
                <div class="img_box"><img src="${list[i].srcimg}" alt=""></div>
            </div>
            <span class="txt1"><span class="ziying"><img src="${list[i].ziying}" alt=""></span>${list[i].title}</span>
            <p class="txt2">
                <span class="jiage">￥<span class="jiage1">${list[i].jiage}</span></span><span class="manjian">满减</span>
                <span class="leisi">看相似</span>
            </p>
            <p class="txt2">
                <span class="jiage2"><span class="jiage22">${list[i].jiage2}</span></span>
            </p>
            </div>
        </li>
            `
            $(html).appendTo($(".main_wntj_box"))
        }
    }
    wntj();

    $('.main_wntj_bottom .p2 a').click(function(){
        wntj();
        return false;
    })
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = $(document).height();     
    var windowHeight = $(this).height();
    $(window).scroll(function () {
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        scrollHeight = $(document).height();     
        windowHeight = $(this).height();
        // $(".footer").attr("top",(scrollTop + windowHeight-66)/100+"rem")
        if (scrollTop + windowHeight == scrollHeight) {
            wntj();
        }
        if(scrollTop>0){
            $('.header').css("background","rgb(228,49,48)")
        }else{
            $('.header').css("background","rgba(255,255,255,0)")
        }
        if(scrollTop>1000){
            $('.top').fadeIn();
        }else{
            $('.top').fadeOut();
        }
    });
    $('.top').click(function(){
        $('html,body').animate({'scrollTop':0},500)
    })









})