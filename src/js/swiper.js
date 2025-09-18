import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

let swiper = null
function swiperOn() {
  swiper = new Swiper('.swiper', {
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}
swiperOn()
