import getLanguageUsed from "../_utils/getLanguageUsed.js"


const lang = getLanguageUsed()

const contactBtn = document.querySelector('.contact-btn')
contactBtn.href = `/${lang}/contact.html`