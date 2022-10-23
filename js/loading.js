function showLoading() {
    let display = document.getElementById('tela')
    let body = document.body
    display.style.display = 'none'
    body.style.overflow = 'visible'
}

setTimeout(showLoading, 3000)
