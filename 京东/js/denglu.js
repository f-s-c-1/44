//切换
var flag = true;
$(".txt-planBLogin").click(function(){
    if(flag){
        $(".DXlogin").show()
        $(".login").hide()
        $(this).text("账号密码登录")
        flag = false;
    }else{
        $(".DXlogin").hide();
        $(".login").show();
        $(this).text("短信验证码登录")
        flag = true;
    }
    
})

//跳转
$(".quickReg span").click(function(){
    $(location).attr("href","./zhuce.html")
})
$('.icon-goback').click(function(){
    location.href="./zhuce3.html";
})