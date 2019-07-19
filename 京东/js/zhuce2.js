$(function () {
    var user = getCookie('User');
    var yzm = getCookie(user + "yzm");
    setTimeout(() => {
        alert(yzm);
    }, 1000);

    $('.mobile-span').html(getCookie('User'));
    $(".telCode").on("input", function (e) {
        window.e || event
        if ($(".telCode").val() == "") {
            $(".xiayibu").css("opacity", "0.3")
            $(".icon-clear").hide()
        } else {
            $(".icon-clear").show()
            $(".xiayibu").css("opacity", "1")
            $(".xiayibu").css("color", "white")
        }
        e.stopPropagation()
    });
    

    $('.mesg-code').click(function () {
        var code = ''; /*存放验证码*/
        var codes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];  /*声明一个数组,用来放所有数字字母*/
        for (var i = 0; i < 4; i++) {  /*获取长度为4的验证码*/
            var j = Math.floor(Math.random() * 62);/*从codes数组下标随机获取数字0-61,存入arr*/
            code += codes[j];
        }
        alert(code);
        setCookie(user+'yzm',code);
    })

    $(".xiayibu").click(function () {
        var yzmval = $('.telCode').val();
        yzm = getCookie(user + "yzm");
        if (yzmval == yzm) {
            window.location.href = './zhuce3.html';
        } else {
            $(".toast-ui").fadeIn()
            setInterval(function () {
                $(".toast-ui").fadeOut()
            }, 3000)
        }
    })
    $('.fanhui').click(function(){
        location.href = "./zhuce.html"
    })
    
})