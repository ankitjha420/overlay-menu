const menuButton = document.getElementById('menu')
const closeMenuButton = document.getElementById('close')
menuButton.addEventListener('click', (e) => {
    menuDown()
})

function menuDown() {
    gsap.to('.menu', {duration: 1,
    y: '0%'})
}

closeMenuButton.addEventListener('click', (e) => {
    menuUp()
})

function menuUp() {
    gsap.to('.menu', {duration: 1,
    y: '-100%'})
}

console.log('ok')