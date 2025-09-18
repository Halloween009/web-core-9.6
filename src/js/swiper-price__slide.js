const slides = [
  {
    service: 'Диагностика',
    price: 'Бесплатно',
    time: '30 мин'
  },
  {
    service: 'Замена дисплея',
    price: 'от 2 500 ₽',
    time: '30-120 мин'
  },
  {
    service: 'Замена полифонического динамика',
    price: 'от 1 500 ₽',
    time: '30-120 мин'
  },
  {
    service: 'Тестирование с выдачей заключения',
    price: 'от 1 000 ₽',
    time: '30-120 мин'
  },
  {
    service: 'Замена програмного обеспечения',
    price: 'от 1 000 ₽',
    time: '30-120 мин'
  }
]
function createSlide(service, price, time) {
  return `<div class="swiper-price__slide swiper-slide">
    <div class="price__slide">
    <h3>Ремонтные услуги</h3>
      <p class="price__service small-text">${service}</p>
      <h3>Цена</h3>
      <p class="price__price small-text">${price}</p>
      <h3>Срок</h3>
      <p class="price__time small-text">${time}</p>
      <div class="price__order"><img src="./img/order.png" alt="order" /></div>
    </div>
  </div>`
}
document.querySelector('.swiper-price__wrapper').innerHTML = slides
  .map(({ service, price, time }) => createSlide(service, price, time))
  .join('')
