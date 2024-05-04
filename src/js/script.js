/* 1st option */

$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/chevron/chevron_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/chevron/chevron_right.png"></button>',
        // responsive: [
        // {
        //     breakpoint: 768,
        //     settings: {
        //         arrows: false,
        //         dots: true,
        //     }
        // },
        // {
        //     breakpoint: 1024,
        //     settings: {
        //         // slidesToShow: 3,
        //         // slidesToScroll: 3,
        //         arrows: false,
        //         dots: false
        //     }
        // },
        // {
        //     breakpoint: 600,
        //     settings: {
        //         // slidesToShow: 2,
        //         // slidesToScroll: 2
        //         arrows: false,
        //         dots: false
        //     }
        // },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }
        // ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // $('.catalog-item__link').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })

    // $('.catalog-item__back').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});

/* 2nd option */

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,/* убираем стрелки созданные в tiny-slider */
//     nav: false/* убираем точки созданные в tiny-slider */
// });
// /* (наши стрелки создаем в html 138-143 строки)навешиваем на наши стрелки определенные события */
// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
// });