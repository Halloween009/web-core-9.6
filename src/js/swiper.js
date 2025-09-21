import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

let swiper = []

function swiperOn() {
  document.querySelectorAll('.swiper').forEach((el, i) => {
    swiper[i] = new Swiper(el, {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: el.querySelector('.swiper-pagination'),
        clickable: true
      }
    })
  })
}
function swiperOff() {
  swiper.forEach((swiper) => {
    if (swiper && typeof swiper.destroy === 'function') {
      swiper.destroy(true, true)
    }
  })
  swiper = []
}
function swiperToggle() {
  if (window.innerWidth <= 768) {
    if (swiper.length === 0) {
      swiperOn()
      console.log('SWIPER ON')
    }
  } else {
    swiperOff()
    console.log('SWIPER OFF')
  }
}
swiperToggle()
window.addEventListener('resize', swiperToggle)
