
(function(){
    document.addEventListener ('click', BurgerInit)
    function BurgerInit(e) {
        const target = e.target
        const burgerIcon = target.closest('.burger-icon')
        const BurgerLink = target.closest('.header__nav--link')

        if (!burgerIcon && !BurgerLink) return

        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains ('body--opened--menu')){
            document.body.classList.add ('body--opened--menu')
        } else {
            document.body.classList.remove ('body--opened--menu')
        }
        
    }

    const modal = document.querySelector ('.modal')
    const modalButton = document.querySelector('.about__modal--open')

    modalButton.addEventListener ('click', openModal)
    modal.addEventListener ('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('modal__open')
    }

    function closeModal (e) {
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

    const accordionLists = document.querySelectorAll ('.accordion-list')
    accordionLists.forEach (eL => {

        eL.addEventListener ('click', (e) => {

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
    
}) ()