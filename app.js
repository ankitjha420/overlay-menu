const menuButton = document.getElementById('menu')
const closeMenuButton = document.getElementById('close')
menuButton.addEventListener('click', (e) => {
    menuDown()
})

function menuDown() {
    gsap.to('.menu', {duration: 0.75,
    y: '0%',
    ease: 'Power4.out'})
}

closeMenuButton.addEventListener('click', (e) => {
    menuUp()
})

function menuUp() {
    gsap.to('.menu', {duration: 0.5,
    y: '-100%',
    })
}

console.log('ok')