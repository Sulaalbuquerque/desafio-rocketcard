const purple = document.querySelector('.purple')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const black = document.querySelector('.black')

const card = document.querySelector('.card-content')

purple.addEventListener('click', () => {
    card.style.backgroundColor = 'var(--purple)'
})

blue.addEventListener('click', () => {
    card.style.backgroundColor = 'var(--blue)'
})

pink.addEventListener('click', () => {
    card.style.backgroundColor = 'var(--pink)'
})

green.addEventListener('click', () => {
    card.style.backgroundColor = 'var(--green)'
})

black.addEventListener('click', () => {
    card.style.backgroundColor = 'var(--bg-card)'
})








