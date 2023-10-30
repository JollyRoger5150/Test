
(function(){
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

})()