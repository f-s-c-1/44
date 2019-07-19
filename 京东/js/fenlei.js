$('#footer').load('./footer.html')

$.ajax({
    type: 'get',
    url: './index.json',
    dade: {},
    dateType: 'json'
}).then(function (str) {
    for (var a in str.fenlei) {
        $(`<li index=${a}>${str.fenlei[a].left}</li>`).appendTo('.main-left>ul')
    }
    $('.main-left>ul>li').eq(0).addClass('houlai')
    // 点击事件
    $('.main-left>ul').on('click', 'li', function () {
        $(this).addClass('houlai').siblings('.main-left>ul>li').removeClass('houlai')
        var i = $(this).index('.main-left>ul>li')
        $('.main-left').scrollTop(46 * i)
        huoqu()
    })
    // 获取哪组数据并刷新页面数据
    huoqu()
    function huoqu() {
        $('.main-right').html('')
        var ff = -1
        var index
        // 获取点击的盒子
        for (var b = 0; b < $('.main-left>ul>li').length; b++) {
            if ($('.main-left>ul>li').eq(b).hasClass('houlai')) {
                index = b;
            }
        }
        for (var d in str.fenlei[index].right) {
            ff++
            if (d == '暂无数据') {
                $('.main-right').html(` <div class="wrap-main">
                    <h4>暂无数据</h4></div>`)

            } else {
                $(` <div class="wrap-main">
                     <h4> ${d}</h4> <ul class="clearfix"></ul></div>`).appendTo('.main-right')
                for (var e in str.fenlei[index].right[d]) {
                    $(` <li>
                         <img src=${str.fenlei[index].right[d][e]}
                             alt="">
                         <span>${e}</span>
                     </li>`).appendTo($('.wrap-main ul').eq(ff))
                }
            }
        }
        if (index == 0) {
            $(`<span class="one-right"> <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFRJREFUSA1jYBjqgJEYD7y0tv2PTZ340cME9TNh00hNsVELCIbm0A8iFoJ+JEIBvmQ89INo6PsAHMn4IomIOMarZOgH0agP8EYwSHLoBxFBLw56BQDOMwwsaZRV+QAAAABJRU5ErkJggg=="
                alt=""> 排行榜 <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT9JREFUSA3dlDuuwjAQRUnMMthEPptAokSPb08DYiN0dK99eghS8FlI0tOzDJJwB8WSZTxOTCqIFNkZz9xj+9rpdD798bgFZFnWL4ril8Y9z1tHUXTkcm1xnxusxHsY75VlmQA44XJtcRagFQkA/96BsAAhxBKQXAG9BWEBQRBcsPczBjJWwNYua7KsStN0BA/+8S1kDG3u+/48DMO9EjN2awFU1QbSCNAG0hhgg2BsGMfxmXL0hzVZT6RvXLaDyXgMbU35FHMCVCKlQcwUe6Y5AWD2D07UDpXqibrjzqwMUDdAJa4f1zttGd0ZDtDIZEW8qwjlEJ/Cl0SJvXRrAW3EiWb1wCI+q5u5XAq7AogPYOgJifq2kPhBCtS17AogvmkrTnAWoM2MDHWauaxnAfhbLpB0xXvDO3TZFin+He0DdXuUHqDBwt8AAAAASUVORK5CYII="
                alt=""></span>`).appendTo($('.wrap-main h4').eq(0))
        }

    }

})
$('.main-left').on({
    'touchstart': function (e) {
        var y = e.originalEvent.targetTouches[0].pageY
        console.log(y)
    },
    'touchmove':function(e){
        moy=e.originalEvent.targetTouches[0].pageY;
        $('.main-left ul').css('transform',)
    }
})
// 返回上一级
$('.head-left>img').click(function(){
    history.back(-1)
})