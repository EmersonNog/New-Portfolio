function addingStyleToHeader() {
    const header = document.querySelector('.top-bar')
    if (window.scrollY >= 10) {
      header.classList.add('scroll')
    } else {
      header.classList.remove('scroll')
    }
  }
  
  window.addEventListener('scroll', function () {
    addingStyleToHeader()
  })