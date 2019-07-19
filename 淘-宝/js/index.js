function head() {
    $('.head').load('./head.html')
}
head()

function nav() {
    $('.nav-search-hd>li').click(function () {
        $(this).removeClass('ho').siblings().addClass('ho')
        $(this).addClass('selected').siblings().removeClass('selected')
    })
}
nav()




function aj() {
    $.ajax({
        type: 'get',
        url: '../head.json',
        DATE: {},
        dateType: 'json'
    }).then(function (str) {
        var x = -1
        for (var a in str.baner[0]) {
            x++;
            for (var m in str.baner[0][a]) {
                var binaliang = str.baner[0][a][m]
                if (binaliang.length == 24) {
                    for (let i = 0; i < binaliang.length; i++) {
                        var html = `<a>${binaliang[i]}<a>`
                        $('.banerone').eq(x).append(html)
                    }
                }
                if (binaliang.length == 13) {
                    for (let i = 0; i < binaliang.length; i++) {
                        var html = `<a>${binaliang[i]}<a>`
                        $('.banerTwo').eq(x).append(html)
                    }
                }
                if (binaliang.length == 9) {
                    for (let i = 0; i < binaliang.length; i++) {
                        var html = `<a>${binaliang[i]}<a>`
                        $('.banerThree').eq(x).append(html)
                    }
                }
            }
        }
    })
    for (var j = 0; j < $('.baner-black').length; j++) {
        $('.baner-black').eq(j).css('top', -j * 32 + 'px')
    }
    for (var o = 0; o < $('.baner-left span').length; o++) {
        var zhi = $('.baner-left span').eq(o).text()
        $('.baner-p').eq(o).html(`${zhi}<i style="float: right;font-style: normal">更多</i>`)
    }
}
aj()


function  sp(){
    $.ajax({
        type:'get',
        url:'../main.json',
        data:{},
        dataType:'JSON'
    }).done(function(att){ 
            for(var s in att.content){
                var lis=att.content[s]
                var html=`
                <div class="item" name=${lis.id}>
                <div class="item-img">
                    <img src= ${lis.imgSrc }>
                </div>
                <h4>${lis.title}</h4>
                <p class="infoo">
                    <span class="price"><em>¥</em>${lis.price}</span>
                    <span class="sales">销量:71</span>
                </p>
            </div>
                `
                $(html).appendTo('.center')
            }
    })}
sp()
function baner() {
    var mySwiper = new Swiper('.baner-au', {
        autoplay: true, //可选选项，自动滑动
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar1',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })
    $('.baner-au').mouseover(function () {
        $('.baner-au .swiper-button-next').removeClass('hide')
        $('.baner-au .swiper-button-prev').removeClass('hide');
    }).mouseout(function () {
        $('.baner-au .swiper-button-next').addClass('hide');
        $('.baner-au .swiper-button-prev').addClass('hide');
    })
    var mySwiper = new Swiper('.baner-auto', {
        autoplay: true, //可选选项，自动滑动
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 2000,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })
    $('.baner-auto').mouseover(function () {
        $('.baner-auto .swiper-button-next').removeClass('hide')
        $('.baner-auto .swiper-button-prev').removeClass('hide');
    }).mouseout(function () {
        $('.baner-auto .swiper-button-next').addClass('hide');
        $('.baner-auto .swiper-button-prev').addClass('hide');
    })
}
baner()

function aj2() {
    $.ajax({
        type: 'get',
        url: '../head.json',
        dade: {},
        dateType: 'json'
    }).then(function (str) {
        var ee = str.main[0].youhaohuo
        $(ee).each(function (i, item) {
            var html = `
            <li>
            <div class="youha-img">
            <img src="${item.imgSrc}">
            </div>
            <h4>${item.youfa} </h4>
            <p>${item.tedian}</p>
            <h6>${item.haochu} </h6>
        </li>
            `
            $('.youhaoh-wrap').eq(0).append(html)
        })
        var ff = str.main[0].aiguangjie
        $(ff).each(function (i, item) {
            var html = `
            <li>
            <div class="youha-img">
            <img src="${item.imgSrc}">
            </div>
            <h4>${item.youfa} </h4>
            <p>${item.tedian}</p>
          </li>
            `
            $('.youhaoh-wrap').eq(1).append(html)
        })
    })
}
aj2()

function one() {
    timer = setInterval(function () {
        $('.b-b-rig').animate({
            'top': '-75px'
        }, 5000, function () {
            $('.b-r-cont:first').appendTo('.b-b-rig')
            $('.b-b-rig').css({
                'top': '0'
            })
        })
    }, 3000)
}
one()

var s=window.location.search

// var name1=getCookie('name'+a)
$('.center').delegate('.item','click',function(){
    window.open('./detail.html?' + 'username=' + getUrlParams('username')+'&&index='+$(this).attr('name'))
})


function getUrlParams(name) {
    var re = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(re)
    if (r == null) {
        return;
    } else {
        return r[2];
    }
}
