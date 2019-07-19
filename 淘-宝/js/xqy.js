$(function () {
    $('.gengduo').hover(function () {
        $(this).children('.gd_xl').slideToggle()
    })

    $('.zst_xt>li').mouseover(function () {
        // console.log(111)
        $(this).css('borderColor', 'red').siblings().css('borderColor', 'transparent')
        $('.zhs_dt img').attr('src', $(this).children('img').attr('src'))
        $('.fahez img').attr('src', $(this).children('img').attr('src'))
    })

    $('.zhs_dt').mouseover(function () {
        $('.faj').css('display', 'block')
        $('.fahez').css('display', 'block')
    })
    $('.zhs_dt').mouseout(function () {
        $('.faj').css('display', 'none')
        $('.fahez').css('display', 'none')
    })


    //放大镜

    $('.zhs_dt').mousemove(function (ev) {
        var x = ev.pageX - $(this).offset().left - $('.faj').width() / 2
        // console.log($(this).offset().left)
        var y = ev.pageY - $(this).offset().top - $('.faj').height() / 2
        // console.log(ev.clientY )
        if (x < 0) {
            x = 0
        }
        if (y < 0) {
            y = 0
        }

        var kuan = $(this).width() - $('.faj').width()
        var gao = $(this).height() - $('.faj').height()
        if (x > kuan) {
            x = kuan
        }
        if (y > gao) {
            y = gao
        }
        $('.faj').css('left', x)
        $('.faj').css('top', y)
        $('.fahez img').css('left', -x * 2)
        $('.fahez img').css('top', -y * 2)
    })
    $('.nr_fenlei a').attr('href', 'javascrpt:')
  


    //调取数据
    function getUrlParams(name) {
        var re = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        var r = window.location.search.substr(1).match(re)
        if (r == null) {
            return;
        } else {
            return r[2];
        }
    }
    // 让页面有东西
    // console.log(getUrlParams('index'))
    if (getUrlParams('index')) {
        var ii = getUrlParams('index')
        $.ajax({
            type: 'get',
            url: './main.json',
            dade: {},
            dateType: 'json'
        }).then(function (str) {
            var q = str.content[ii]
            $('.img__1').attr('src', q.imgSrc)
            $('.img__2').attr('src', q.imgSrc)
            $('.a1').attr('src', q.imgSrc)
            $('.tb_title').html(q.title)
            $('.tb_jiaqian').html(q.price)
        })
    }

    //购物数量加减
    var i = 0
    $('#shuliang').blur(function () {
        i = $(this).val()
        console.log(i)
    })

    $('.bnt1').click(function () {
        i--
        if (i < 0) {
            i = 0
        }
        $('#shuliang').val(1 + i)
    })
    $('.bnt2').click(function () {
        i++
        if (i >= 100) {
            i = 100
        }
        $('#shuliang').val(1 + i)
    })


    $('.ljtj').click(function () {
        
        if (getUrlParams('username')) {
            
            if (localStorage.getItem(getUrlParams('username')) != null) {
                
                var obj = JSON.parse(localStorage.getItem(getUrlParams('username')))
                console.log(obj)
                 if (obj[getUrlParams('index')] != null) {
                    
                    var yuanben = parseInt(obj[getUrlParams('index')].num)
                    var xianzai = parseInt($('#shuliang').val())
                    var num = yuanben + xianzai
                    obj[getUrlParams('index')] = {
                        num: num,
                        index: getUrlParams('index')
                    }
                    console.log(obj[getUrlParams('index')])

                } else {
                    obj[getUrlParams('index')] = {
                        num: $('#shuliang').val(),
                        index: getUrlParams('index')
                    }
                }
                localStorage.setItem(getUrlParams('username'), JSON.stringify(obj))
                window.open('./gouwuche.html?' + 'username=' + getUrlParams('username')+'&&index=' + getUrlParams('index'))
            } else {
                var obj = new Object()
                obj.username = getUrlParams('username')
                obj[getUrlParams('index')] = {
                    num: $('#shuliang').val(),
                    index: getUrlParams('index')
                }

                localStorage.setItem(getUrlParams('username'), JSON.stringify(obj))
                window.open('./gouwuche.html?' + 'username=' + getUrlParams('username') + '&&index=' + getUrlParams('index'))
            }
        } else {
            alert('请登录')
            window.open('./denglu.html')
        }

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
})