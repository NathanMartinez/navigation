const hamburgerMenu = document.querySelector('.hamburger')
const nav = document.getElementsByTagName('nav')[0]



hamburgerMenu.addEventListener('click', e => {
  nav.classList.toggle('mobile-open')
})