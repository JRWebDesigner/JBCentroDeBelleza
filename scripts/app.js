const ham = document.querySelector('.Banner')
const navMobile = document.querySelector('.navMobile')
ham.addEventListener('click', () => {
    if (navMobile.classList.toggle('descNav')) {
        navMobile.classList.remove('descNav')
    }
    else {
        navMobile.classList.add('descNav')
    }
})