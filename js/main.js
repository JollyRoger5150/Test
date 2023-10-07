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
}) ()