const showMoreBtn = document.querySelector('.show-moreBtn')
const arrow = document.querySelector('.arrow')
const showMore = document.querySelector('.show-more')
showMoreBtn.addEventListener('click', () => {
  document.querySelector('.content-text2').classList.toggle('hide')
  if (showMore.textContent === 'Читать далее') {
    showMore.textContent = 'Свернуть'
    arrow.classList.toggle('rotate')
  } else {
    showMore.textContent = 'Читать далее'
    arrow.classList.toggle('rotate')
  }
})
