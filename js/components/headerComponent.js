import getLanguageUsed from "../_utils/getLanguageUsed.js"


export default function headerComponent() {

    const lang = getLanguageUsed()

    const header = document.createElement('header')
    header.className = 'header'

    const imgLogo = document.createElement('img')
    imgLogo.src = '/assets/logo/logo.svg'
    imgLogo.className = 'logo'
    imgLogo.alt = 'Logo'

    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    ul.className = 'nav-section'

    const getHref = (page) => `/${lang}/${page}`

    const liHome = document.createElement('li')
    const aHome = document.createElement('a')
    aHome.className = 'nav-element'
    aHome.textContent = lang === 'en' ? 'Home' : 'Accueil'
    aHome.href = getHref('index.html')
    liHome.appendChild(aHome)

    const liShop = document.createElement('li')
    const aShop = document.createElement('a')
    aShop.textContent = lang === 'en' ? 'Boxes' : 'Boxes'
    aShop.className = 'nav-element'
    aShop.href = getHref('shopList.html')
    liShop.appendChild(aShop)

    const liTeams = document.createElement('li')
    const aTeams = document.createElement('a')
    aTeams.textContent = lang === 'en' ? 'Teams' : 'Équipes'
    aTeams.className = 'nav-element'
    aTeams.href = getHref('teams.html')
    liTeams.appendChild(aTeams)

    ul.appendChild(liHome)
    ul.appendChild(liShop)
    ul.appendChild(liTeams)

    nav.appendChild(ul)


    const buttonSection = document.createElement('div')
    buttonSection.className = 'button-section'

    const headerSpace = document.createElement('div')
    headerSpace.className = 'header-space'

    const rentMeButton = document.createElement('a')
    rentMeButton.className = 'btn-primary'
    rentMeButton.href = 'shopList.html'
    rentMeButton.textContent = lang === 'en' ? 'Buy' : 'Acheter'

    const languages = document.createElement('div')
    languages.className = 'langage'

    const frButton = document.createElement('button')
    frButton.textContent = 'FR'
    frButton.addEventListener('click', () => {
        if (lang !== 'fr') {
            const path = window.location.pathname.split('/').pop()
            const search = window.location.search
            const hash = window.location.hash
            window.location.href = `/fr/${path}${search}${hash}`
        }
    })
    if (lang === 'fr') {
        frButton.classList.add('language-selected')
    }

    const enButton = document.createElement('button')
    enButton.textContent = 'EN'
    enButton.addEventListener('click', () => {
        if (lang !== 'en') {
            const path = window.location.pathname.split('/').pop()
            const search = window.location.search
            const hash = window.location.hash
            window.location.href = `/en/${path}${search}${hash}`
        }
    })
    if (lang === 'en') {
        enButton.classList.add('language-selected')
    }

    languages.appendChild(frButton)
    languages.appendChild(enButton)

    buttonSection.appendChild(headerSpace)
    buttonSection.appendChild(rentMeButton)
    buttonSection.appendChild(languages)

    header.appendChild(imgLogo)
    header.appendChild(ul)
    header.appendChild(buttonSection)

    const body = document.querySelector('body')
    body.prepend(header)
}