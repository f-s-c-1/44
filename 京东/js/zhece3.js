$(function () {


    var flag = true;
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


    $(".yanjing").click(function () {

        if (flag) {
            $("#telphone").prop("type", "tel");
            $(".yanjing_box").css("background-image", "url(./img/yanjing.png)")
            flag = false
        } else {
            $("#telphone").prop("type", "password");
            $(".yanjing_box").css("background-image", "url(./img/yanjing1.png)")
            flag = true
        }
    })

    $(".icon-clear").click(function () {
        $("#telphone").val('')
        $(".xiayibu").css("opacity", "0.3")
        $(".icon-clear").hide()
    })
    var Name = getCookie("User")

    $(".xiayibu").click(function () {

        if ($("#telphone").val().length < 5) {
            alert("您的密码不符合要求")
        } else {
            setCookie(Name, $("#telphone").val())
            location.href = "./denglu.html"
        }

    })

    $('.fanhui').click(function(){
        location.href = "./zhuce2.html"
    })















})