const elems = document.querySelectorAll('.elems-to-hide')
function toggleElems() {
  const windowWidth = window.innerWidth
  elems.forEach((elem) => {
    if (windowWidth > 768) {
      elem.classList.remove('hide')
    } else {
      elem.classList.add('hide')
    }
  })
}
toggleElems()
window.addEventListener('resize', toggleElems)
