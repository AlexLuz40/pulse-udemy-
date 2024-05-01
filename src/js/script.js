/* 1st option */

// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icon/chevron/chevron_left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icon/chevron/chevron_right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     arrows: false,
//                     dots: true,
//                 }
//             },
//         ]
//     });
// });

/* 2nd option */

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,/* убираем стрелки созданные в tiny-slider */
    nav: false/* убираем точки созданные в tiny-slider */
});
/* (наши стрелки создаем в html 138-143 строки)навешиваем на наши стрелки определенные события */
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});