$(document).ready(function(){
    // 下拉選單
    $('.menu > li > a').click(function(event){
        event.preventDefault();
        $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
        $(this).parent().find('ul').slideToggle().parent().siblings().find('ul').slideUp();
    });

    // scroll to top
    $('.top').click(function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        },1000);
    });

    // Swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
    
        // If we need pagination
        navigation: {
        el: '.swiper-pagination',
        },

        autoplay: {
            delay: 3000,
        },
    });

    // lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
});
