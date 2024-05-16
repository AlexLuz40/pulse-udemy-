/* 1st option */

$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/chevron/chevron_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/chevron/chevron_right.png"></button>'
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

    // modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "введите имя",
                    minlength: jQuery.validator.format("введите {0} символа")
                },
                phone: "введите номер телефона",
                email: {
                    required: "введите адрес почты",
                    email: "Ваш почтовый адресс должен быть в формате name@domain.com"
                }
            }
        });
    };

    validForm('#consultation-form');
    validForm('#consultation form');
    validForm('#order form');

    $('input[name=phone]').mask("+7 (999) 999-9999");

    $('form').submit(function (e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: 'POST',
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function () {
            $(this).find('input').val('');
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

});





