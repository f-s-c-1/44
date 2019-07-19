(function(doc,win){
    var docEl =doc.documentElement,   
    resizeEvt='orientationchange' in window?'orientationchange':'resize',

    relalc=function(){
        var clientWidth=docEl.clientWidth;
        if(!clientWidth) return;
        docEl.style.fontSize=clientWidth/3.75+"px";
// iphon6    375
    };
    if(!addEventListener) return
    win.addEventListener(resizeEvt,relalc,false);  
    doc.addEventListener("DOMContentLoaded",relalc,false)
    // DOMContentLoaded===>当HTML结构加载完毕后执行

})(document,window);


