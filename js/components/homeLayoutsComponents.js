import footerComponent from "./footerComponent.js";
import getLanguageUsed from "../_utils/getLanguageUsed.js"


footerComponent()
const lang = getLanguageUsed()

const frButton = document.getElementById('lang-fr')
frButton.textContent = 'FR'
frButton.addEventListener('click', () => {
    if (lang !== 'fr') {
        const currentPage = window.location.pathname.split('/').pop()
        window.location.href = `/fr/${currentPage}`
    }
})
if (lang === 'fr') {
    frButton.classList.add('language-selected')
}

const enButton = document.getElementById('lang-en')
enButton.textContent = 'EN'
enButton.addEventListener('click', () => {
    if (lang !== 'en') {
        const currentPage = window.location.pathname.split('/').pop()
        window.location.href = `/en/${currentPage}`
    }
})
if (lang === 'en') {
    enButton.classList.add('language-selected')
}



const aboutBtn = document.querySelector('.about-btn')
aboutBtn.href = `/${lang}/about.html`

const shopListBtn = document.querySelector('.shop-list-btn')
shopListBtn.href = `/${lang}/shopList.html`

const reviewsBtn = document.querySelector('.reviews-btn')
reviewsBtn.href = `/${lang}/reviews.html`