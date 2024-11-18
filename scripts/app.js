const ham = document.querySelectorAll('.ham')
const navMobile = document.querySelector('.navMobile')

ham.forEach(item => {
    item.addEventListener('click', () => {
        navMobile.classList.toggle('descNav')
    })
})