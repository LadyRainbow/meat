$(document).ready(function () {
    var $window = $(window);
    var windowHeight = $window.height();
    var windowWidth = $window.width();
    var $header = $('header');

    var $popUpGeneralBlock = $('.pop-up-general-block');

    var $overlayPopUpWRP = $('.pop-up-overlay-wrapper');
    var $overlay = $('.overlay-pop-up');
    var $closePopUpBtn = $('.pop-up-general-block-close-btn');


    $('.main-slider').slick({
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-main-arrow'),
        nextArrow: $('.next-main-arrow'),
        fade: true,
        dots: true,
        appendDots: '.slick-dots-wrp',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            },
        ]
    });

    // 2 block tabs
    $('.carte-tabs li').click(function () {
        $('.carte-tabs li').removeClass('active');
        $(this).addClass('active');
    });

    // menu
    $('.burger').click(function () {
        $('.menu').addClass('active');
        $('body').addClass('active');
        setTimeout(function () {
            $('.menu-content').addClass('active');
            $('.btn-menu-close').addClass('active');
        }, 100);
    });
    $('.btn-menu-close').click(function () {
        $('.menu-content').removeClass('active');
        $('.btn-menu-close').removeClass('active');
        setTimeout(function () {
            $('.menu').removeClass('active');
            $('body').removeClass('active');
        }, 200);

    });
    $('.menu-overlay').click(function () {
        $('.menu-content').removeClass('active');
        setTimeout(function () {
            $('.menu').removeClass('active');
            $('body').removeClass('active');
        }, 200);
    });


    // soft scroll
    $(".scrollTo").on("click", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 500);
        // находим высоту, на которой расположен блок
    });

    $(".scrollToMinusHeader").on("click", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
        var id  = $(this).attr('href');
        if($(window).width() > 991) {
            var top = $(id).offset().top - 100;
            $('body,html').animate({scrollTop: top}, 500);
        } else {
            var top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        }
    });

    function headerChange () {
        if($window.scrollTop() > 50) {
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    };
    headerChange();
    $window.scroll(function(){
        headerChange();
     });
     $('.main-text.first').addClass('line');
     $('.img-main').addClass('show');


    // only number
    $(".input-number").keypress(function(event){
      event = event || window.event;
      if (event.charCode && event.charCode!=0 && event.charCode!=8 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
        return false;
    });

    // masked
    $('.mask-phone').mask('+380 (99)999-99-99');



    // pop-ups
    $overlay.click(function () {
        $overlayPopUpWRP.removeClass('active');
        $('body, html').removeClass('active');
        $popUpGeneralBlock.removeClass('active');
        $popUpFilterMob.removeClass('active');
        $popupServicesNavMob.removeClass('active');
    });
    $closePopUpBtn.click(function () {
        $overlayPopUpWRP.removeClass('active');
        $('body, html').removeClass('active');
        $popUpGeneralBlock.removeClass('active');
        $popUpFilterMob.removeClass('active');
        $popupServicesNavMob.removeClass('active');
    });
});
