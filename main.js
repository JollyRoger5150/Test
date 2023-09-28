const button = document.querySelector ('.button')
const modal = document.querySelector ('.modal')
const modalWindow = document.querySelector ('.modal--window')
const modalClose = document.querySelector ('modal__close')

button.addEventListener ('click', () => {
    modal.classList.add ('modal__open')
})
modal.addEventListener ('click', event => {
    const target = event.target
    if (target && target.classList.contains ('modal') || target.classList.contains ('modal__close') ){
        modal.classList.remove ('modal__open')
    }
})
