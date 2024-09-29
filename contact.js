let parallax = document.querySelectorAll('parallax')
window.addEventListener('scroll', function() {
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * 0.7+'px'
})