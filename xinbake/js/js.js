var mySwiper = new Swiper('.swiper-container', {
    autoplay: 5000,//可选选项，自动滑动
    loop: true,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    autoplayDisableOnInteraction: false,
})



$('.body2 a').attr('href', 'javascript:')
$('.body2 a').css('text-decoration', 'none')

$('.trigger').click(function () {
    console.log(12121212)
    $('.body2').fadeToggle()
    $('.primary ul').toggleClass('primary_ul')
    $('.content').toggleClass('yy')
})
$(window).resize(function () {
    console.log($(window).width())
})


var arr1 = ["https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-2.jpg",
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-3.jpg",
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-1.jpg",
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/delivery-0628.gif",
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-4.jpg",
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-2.jpg",
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-3.jpg"]
            
var arr2 = ["https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-4-mobile.jpg",
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/delivery-0701-mobile.jpg",
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-1-mobile.jpg",
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-2-mobile.jpg",
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-3-mobile.jpg",
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-4-mobile.jpg",
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/delivery-0701-mobile.jpg"]
if ($(window).width() < 639) {
    for (var i = 0; i < $('.img_1').length; i++) {
        $('.img_1')[i].src=arr2[i]
    }
} else {
    for (var i = 0; i < $('.img_1').length; i++) {
        $('.img_1')[i].src=arr1[i]
    }
}

$(window).resize(function () {
    if ($(window).width() < 639) {
        for (var i = 0; i < $('.img_1').length; i++) {
            $('.img_1')[i].src=arr2[i]
        }
    } else {
        for (var i = 0; i < $('.img_1').length; i++) {
            $('.img_1')[i].src=arr1[i]
        }
    }
})