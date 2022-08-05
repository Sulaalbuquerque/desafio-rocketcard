//github API

const nameUser = document.querySelector('.name-user') 
const profileImage = document.querySelector('.img-user') 

const followers = document.querySelector('.followers') 
const following = document.querySelector('.following') 
const repository = document.querySelector('.repository') 
const company = document.querySelector('.company') 
const place = document.querySelector('.location') 

const buttonCard = document.querySelector('.button-card') 
const input = document.querySelector('.input') 

buttonCard.addEventListener('click', () => {

    let user = input.value
    const url = `https://api.github.com/users/${user}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            nameUser.textContent = data.login
            profileImage.src = data.avatar_url
            followers.textContent = `${data.followers} Seguidores`
            following.textContent = `${data.following} Seguindo`
            repository.textContent = `${data.public_repos} Repositórios`
            company.textContent = data.company
            place.textContent = data.location
        })
})


//customization

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


//download










