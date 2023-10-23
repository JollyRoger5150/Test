
(function () {
    document.addEventListener('click', BurgerInit)
    function BurgerInit(e) {
        const target = e.target
        const burgerIcon = target.closest('.burger-icon')
        const BurgerLink = target.closest('.header__nav--link')

        if (!burgerIcon && !BurgerLink) return

        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened--menu')) {
            document.body.classList.add('body--opened--menu')
        } else {
            document.body.classList.remove('body--opened--menu')
        }

    }

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__modal--open')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('modal__open')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__close-btn') || target.classList.contains('modal')) {
            document.body.classList.remove('modal__open')
        }
    }

    const tabControls = document.querySelector('.tab-control')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-control__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-control__link--active')) return

        const tabContentID = tabControl.getAttribute('href')

        document.querySelector('.tab-content--show').classList.remove('tab-content--show')
        document.querySelector(tabContentID).classList.add('tab-content--show')

        document.querySelector('.tab-control__link--active').classList.remove('tab-control__link--active')
        tabControl.classList.add('tab-control__link--active')
    }

    const accordionLists = document.querySelectorAll('.accordion-list')
    accordionLists.forEach(eL => {

        eL.addEventListener('click', (e) => {

            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });

    const gallerySwiper = new Swiper('.galerry__slider', {
        spaceBetween: 32,
        slidesPerView: 4,

        // If we need pagination
        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {

            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            800: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 32
            },
            1000: {
                slidesPerView: 4,
                spaceBetween: 32
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 32
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 32
            },
            // when window width is >= 640px

        }
    });

    const testimonialsSwiper = new Swiper('.testimonials__swiper', {
        spaceBetween: 10,
        slidesPerView: 2.037,
        centeredSlides: true,

        // Navigation arrows
        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.testimonials__scrollbar',
            draggable: false,
        },
        
        
    });

    const telInputs = document.querySelectorAll('input[type="tel"]')

    const im = new Inputmask ('+7 (999) 999-99-99');
    im.mask(telInputs);


})()