const hamburgerMenu = document.querySelector('.hamburger')
const nav = document.getElementsByTagName('nav')[0]



hamburgerMenu.addEventListener('click', e => {
  nav.classList.toggle('mobile-open')
})

window.addEventListener('resize', e => {
  const width = e.target.innerWidth;
  if (width >= 700) {
    nav.classList.remove('mobile-open')
  }
})