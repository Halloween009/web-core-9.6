const menu = document.querySelector('.menu')
const closeBtn = document.querySelector('.closeBtn')
const openBtn = document.querySelector('.openBtn')
openBtn.addEventListener('click', () => {
  menu.classList.add('open')
})
closeBtn.addEventListener('click', () => {
  menu.classList.remove('open')
})
