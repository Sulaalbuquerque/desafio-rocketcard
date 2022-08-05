const purple = document.querySelector('.purple')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const black = document.querySelector('.black')

const card = document.querySelector('.card-content')

purple.addEventListener('click', () => {
    card.style.backgroundColor = '#6959CD'
})

blue.addEventListener('click', () => {
    card.style.backgroundColor = '#6495ED'
})

pink.addEventListener('click', () => {
    card.style.backgroundColor = '#DA70D6'
})

green.addEventListener('click', () => {
    card.style.backgroundColor = '#2E8B57'
})

black.addEventListener('click', () => {
    card.style.backgroundColor = '#0E1218'
})








