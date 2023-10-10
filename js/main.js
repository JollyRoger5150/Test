
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
    
}) ()