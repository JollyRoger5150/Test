const button = document.querySelector ('.button')
const modal = document.querySelector ('.modal')
const modalWindow = document.querySelector ('.modal--window')
const modalClose = document.querySelector ('modal__close')
const body = document.body


button.addEventListener ('click', () =>{
    modal.classList.add('modal__open')
    body.classList.add ('body--fixed')
})

modal.addEventListener ('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close') 
    ) {
    modal.classList.remove ('modal__open')}
    body.classList.remove ('body--fixed')
})

document.addEventListener ('keydown', event =>{
    if (event.code === 'Escape'){
        modal.classList.remove ('modal__open')
        body.classList.remove ('body--fixed')
    }
} )