
(function () {
    document.addEventListener('click', BurgerInit)
    function BurgerInit(e) {
        const target = e.target
        const burgerIcon = target.closest('.burger-icon')
        const BurgerLink = target.closest('.header-nav__item')

        if (!burgerIcon && !BurgerLink) return

        if (document.documentElement.clientWidth > 1030) return

        if (!document.body.classList.contains('body--opened--menu')) {
            document.body.classList.add('body--opened--menu')
        } else {
            document.body.classList.remove('body--opened--menu')
        }

    }


    const picker = new DateRangePicker('#daterange', {
        // options
    });

    const choiceLocation = document.querySelector(".location-select")
    const choicesLocation = new Choices(choiceLocation)


    const choiceAmount = document.querySelector(".people-amount")
    const choicesAmount = new Choices(choiceAmount)

    const popularSwiper = new Swiper('.popular__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        spaceBetween: 30,
        slidesPerView: 3,
        centeredSlides: true,

        breakpoints: {

            320: {
                spaceBetween: 15,
                slidesPerView: 1,
            },
            412: {
                spaceBetween: 15,
                slidesPerView: 1.2,
            },
            450: {
                spaceBetween: 15,
                slidesPerView: 1.3,
            },
            500: {
                spaceBetween: 15,
                slidesPerView: 1.4,
            },
            // when window width is >= 480px
            600: {
                spaceBetween: 15,
                slidesPerView: 1.6,
            },
            700: {
                spaceBetween: 15,
                slidesPerView: 1.8,
            },
            800: {
                spaceBetween: 15,
                slidesPerView: 2.1,
            },
            900: {
                spaceBetween: 30,
                slidesPerView: 2.2,
            },
            1000: {
                spaceBetween: 30,
                slidesPerView: 2.6,
            },
            1170: {
                spaceBetween: 30,
                slidesPerView: 3,
            },

        }

    });

    

    const gallerySwiper = new Swiper(".gallery__swiper", {
        slidesPerView: 'auto',
        enabled: true,
        spaceBetween: 20,
        centeredSlides: true,

        
    });


})()

const blogSwiper = new Swiper(".blog__swiper", {
    slidesPerView: 1,

    enabled: true,
    spaceBetween: 0,

    breakpoints: {
        320: {
            init: true,
            spaceBetween: 15,
            slidesPerView: 'auto',
            enabled: true,
            centeredSlides: true,

        },

        548: {
            spaceBetween: 15,
            slidesPerView: 'auto',
            enabled: true,
            centeredSlides: true,

        },
        644: {
            spaceBetween: 15,
            slidesPerView: 'auto',
            enabled: true,
            centeredSlides: true,
        },
        651: {
            spaceBetween: 0,
            slidesPerView: 3,
            enabled: false,

        },
        1358: {
            spaceBetween: 15,
            slidesPerView: 2,
            enabled: false,

        },


    }

});
