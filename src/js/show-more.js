const showMoreBtn = document.querySelector('.show-moreBtn')
const arrow = document.querySelector('.arrow')
const text = document.querySelector('.show-more')

showMoreBtn.addEventListener('click', () => {
  document.querySelector('.content-text2').classList.toggle('hide')
  const hide = text.textContent === 'Показать больше'
  text.textContent = hide ? 'Скрыть' : 'Показать больше'
  arrow.classList.toggle('rotate', hide)
})

function showMoreSwiper(btn, content, arrow, hide, slides, countRule) {
  btn.addEventListener('click', () => {
    const contentElement = document.querySelector(content)
    const hide = contentElement.textContent === 'Показать больше'
    contentElement.textContent = hide ? 'Скрыть' : 'Показать больше'
    arrow.classList.toggle('rotate', hide)

    const windowWidth = window.innerWidth
    let count = 0
    if (windowWidth >= 768 && windowWidth < 1440) {
      count = countRule.mid
    } else if (windowWidth >= 1440) {
      count = countRule.big
    }
    for (let i = slides.length - count; i < slides.length; i++) {
      slides[i].classList.toggle('hide', !hide)
    }
  })
}

const logoBtn = document.querySelector('.logo-btn')
const logoArrow = document.querySelector('.logo-arrow')
const logoSlides = document.querySelectorAll('.swiper-logo__slide')

showMoreSwiper(logoBtn, '.logo-text', logoArrow, false, logoSlides, {
  mid: 3,
  big: 1
})

const textBtn = document.querySelector('.text-btn')
const textArrow = document.querySelector('.text-arrow')
const textSlides = document.querySelectorAll('.swiper-text__slide')

showMoreSwiper(textBtn, '.text-text', textArrow, false, textSlides, {
  mid: 6,
  big: 5
})
