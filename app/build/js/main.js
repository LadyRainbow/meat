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

     // 3 block
     $('.about-slider-nav').slick({
         slidesToShow: 3,
         slidesToScroll: 3,
         verticalSwiping: true,
         vertical: true,
         arrows: false,
         dots: false,
         asNavFor: '.about-slider-main',
         focusOnSelect: true,
         swipe: false
     });
     $('.about-slider-main').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         prevArrow: $('.prev-about-arrow'),
         nextArrow: $('.next-about-arrow'),
         fade: true,
         dots: true,
         appendDots: '.about-dots-wrp',
         asNavFor: '.about-slider-nav',
         adaptiveHeight: true
     });


    // show/hide password
    $('.show-pass').click(function(){
        var $thisField = $(this).siblings($('input'));
        var type = $thisField.attr('type') == "text" ? "password" : 'text';
        $(this).toggleClass('open-eye');
        $thisField.attr('type', type);
    });

    // only number
    $(".input-number").keypress(function(event){
      event = event || window.event;
      if (event.charCode && event.charCode!=0 && event.charCode!=8 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
        return false;
    });

    // masked
    $('.mask-phone').mask('+999999?9999999999', {placeholder:""});

    // lk
    $('.lk-tab-btn').click(function (e) {
        e.preventDefault();
        $('.lk-tab-btn').removeClass('active');
        var idBlockContent = $(this).attr('data-tab');
        $(".lk-tab-btn[data-tab='" + idBlockContent + "']").addClass('active');
        $('.lk-body').removeClass('active');
        $('#' + idBlockContent + '').addClass('active');
        // if($(this).hasClass('exit')) {
        //     setTimeout(function () {
        //         window.location.href = "http://stackoverflow.com";
        //     }, 5000);
        // }
    });
    // address
    $('.redact-address-btn').click(function () {
        var idBlockContent = $(this).attr('data-tab');
        $('.lk-address-body').removeClass('active');
        $('#' + idBlockContent + '').addClass('active');
    });
    // profil
    // $('.redact-profil-btn').click(function () {
    //     var idBlockContent = $(this).attr('data-tab');
    //     $('.lk-profil-body').removeClass('active');
    //     $('#' + idBlockContent + '').addClass('active');
    // });

    // checkout
    $('.checkout-tabs li').click(function () {
        $('.checkout-tabs li').removeClass('active');
        $(this).addClass('active');
        var idBlockContent = $(this).attr('data-tab');
        $('.checkout-body').removeClass('active');
        $('#' + idBlockContent + '').addClass('active');
        $('#' + idBlockContent + '1').addClass('active');
    });

    // kupon
    $('.open-kupon').click(function () {
        $(this).toggleClass('active');
        $('.kupon-wrp').toggleClass('active');
    });


    // pop-ups
    function openEnterRegistr () {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#enter').addClass('active');
    };

    $('.open-enter-mob').click(function () {
        $('.menu-content').removeClass('active');
        $('.btn-menu-close').removeClass('active');
        $('.menu').removeClass('active');
        openEnterRegistr ();
    });
    $('.open-enter').click(function () {
        openEnterRegistr ();
    });
    $('.reorder-btn').click(function () {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#reorder').addClass('active');
    });

    $overlay.click(function () {
        $overlayPopUpWRP.removeClass('active');
        $('body, html').removeClass('active');
        $popUpGeneralBlock.removeClass('active');
    });
    $closePopUpBtn.click(function () {
        $overlayPopUpWRP.removeClass('active');
        $('body, html').removeClass('active');
        $popUpGeneralBlock.removeClass('active');
    });
});
