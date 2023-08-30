let nav = document.querySelector('.nav')

document.querySelector('.hum').onclick = () => {
  console.log('hello')

  nav.classList.toggle('active')
}
window.onscroll = () => {
  nav.classList.remove('active')
}
