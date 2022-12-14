const buttonCard = document.querySelector('.button-card') 
const input = document.querySelector('.input') 
const popup = document.querySelector('.popup') 
const buttonPopup = document.querySelector('.button-popup') 


//enable and disable button

input.addEventListener('input', () => {
        
    let inputValue = input.value

    if (inputValue !== null || inputValue !== '') {
        buttonCard.disabled = false
    } if (inputValue === '') {
        buttonCard.disabled = true
    }
})


//prevent special characters

input.addEventListener("keypress", (e) => {
    if(!checkChar(e)) {
      e.preventDefault()
    }
})

const checkChar = (e) => {

    let char = String.fromCharCode(e.keyCode)
  
    let pattern = '[a-zA-Z0-9]'

    if (char.match(pattern)) {
      return true;
    }
}


//github API

buttonCard.addEventListener('click', () => {

    const nameUser = document.querySelector('.name-user') 
    const profileImage = document.querySelector('.img-user') 

    const followers = document.querySelector('.followers') 
    const following = document.querySelector('.following') 
    const repository = document.querySelector('.repository') 
    const company = document.querySelector('.company') 
    const place = document.querySelector('.location') 

    let user = input.value
    const url = `https://api.github.com/users/${user}`

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.message !== 'Not Found'){
                nameUser.textContent = data.login
                profileImage.src = data.avatar_url
                followers.textContent = `${data.followers} Seguidores`
                following.textContent = `${data.following} Seguindo`
                repository.textContent = `${data.public_repos} Repositórios`
                company.textContent = data.company
                place.textContent = data.location
            } else {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                })
                popup.style.display = 'flex'
                document.documentElement.style.overflow = 'hidden';
            }
        })
})


//close popup

buttonPopup.addEventListener('click', () => {
    popup.style.display = 'none'
    document.documentElement.style.overflow = 'auto';
    input.focus()
})


//customization

const card = document.querySelector('.card-content')
const data = document.querySelector('.datas')
const imgUser = document.querySelector('.img-user')

//background
const purple = document.querySelector('.purple')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const original = document.querySelector('.original')

purple.addEventListener('click', () => {
    card.style.backgroundColor = 'var(--purple)'
    imgUser.style.border = 'solid .4rem var(--purple-dark)'
})

blue.addEventListener('click', () => {
    card.style.backgroundColor = 'var(--blue)'
    imgUser.style.border = 'solid .4rem var(--blue-dark)'
})

pink.addEventListener('click', () => {
    card.style.backgroundColor = 'var(--pink)'
    imgUser.style.border = 'solid .4rem var(--pink-dark)'
})

green.addEventListener('click', () => {
    card.style.backgroundColor = 'var(--green)'
    imgUser.style.border = 'solid .4rem var(--green-dark)'
})

original.addEventListener('click', () => {
    card.style.backgroundColor = 'var(--bg-card)'
    imgUser.style.border = 'solid .4rem var(--img-profile)'
    card.style.color = 'var(--text)'
    data.style.backgroundImage = 'linear-gradient(black, transparent, black)'
})

//color-text
const white = document.querySelector('.white')
const black = document.querySelector('.black')

white.addEventListener('click', () => {
    card.style.color = 'var(--text)'
    data.style.backgroundImage = 'linear-gradient(black, transparent, black)'
})

black.addEventListener('click', () => {
    card.style.color = 'var(--black)'
    data.style.backgroundImage = 'linear-gradient(#A9A9A9, transparent, #A9A9A9)'
})








