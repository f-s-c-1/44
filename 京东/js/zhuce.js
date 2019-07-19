
$(function () {
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;

    $("#telphone").on("input", function (e) {
        window.e || event
        if ($("#telphone").val() == "") {
            $(".xiayibu").css("opacity", "0.3")
            $(".icon-clear").hide()
        } else {
            $(".icon-clear").show()
            $(".xiayibu").css("opacity", "1")
            $(".xiayibu").css("color", "white")
        }
        e.stopPropagation()
    })
    $(".xiayibu").click(function () {
        if (reg.test($("#telphone").val())) {
            var code=''; /*存放验证码*/
            var codes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];  /*声明一个数组,用来放所有数字字母*/
            for (var i = 0; i < 4; i++) {  /*获取长度为4的验证码*/
                var j = Math.floor(Math.random() * 62);/*从codes数组下标随机获取数字0-61,存入arr*/
                code += codes[j];
            }
            console.log(code)
            setCookie($("#telphone").val()+"yzm",code)
            setCookie("User",$("#telphone").val())
           alert("验证码已经发到您的手机请注意查收");
           window.location.href="./zhuce2.html"
        } else {
            $(".toast-ui").fadeIn()
            setInterval(function () {
                $(".toast-ui").fadeOut()
            }, 3000)
        }
    })


    // var docu=document.cookie;
    // var arr1=docu.split("; ")
    // var oUser=[];
    // for(var i=0;i<arr1.length;i++){
    //     var ooc = arr1[i].split('=')
    //     oUser.push(ooc[0])
        
    // }
    // getCookie()

    $(".icon-clear").click(function () {
        $("#telphone").val("")
        $(this).hide()
        $(".xiayibu").css("opacity", "0.3")
    })

    $('.btn-complete').click(function () {
        $(".black_bg").hide()
    })











































})