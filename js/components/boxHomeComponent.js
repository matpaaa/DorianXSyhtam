import Box from "../boxes/box.model.js"
import getLanguageUsed from "../_utils/getLanguageUsed.js"


/**
 * Create box compoment for page index.html
 * @param {Box} box 
 * @param {string} containerId 
 */
export default function boxHomeComponent(box, containerId) {

    const lang = getLanguageUsed()

    const boxItem = document.createElement('div')
    boxItem.className = 'box-item'

    boxItem.style.backgroundImage = `url(${box.images[0]})`
    boxItem.onclick = () => {
        document.location.href = `/${lang}/shop.html?id=${box.boxId}`
    }

    const boxTag = document.createElement('div')
    boxTag.className = 'box-tag'

    const boxTagTitle = document.createElement('p')
    boxTagTitle.className = 'box-tag-title'
    boxTagTitle.textContent = box.city

    const boxFooter = document.createElement('div')
    boxFooter.className = 'box-footer'

    const boxFooterTitle = document.createElement('p')
    boxFooterTitle.className = 'box-footer-title'
    boxFooterTitle.textContent = box.name

    const boxFooterText = document.createElement('p')
    boxFooterText.className = 'box-footer-text'
    const description = lang === 'en' ? box.descriptionEn : box.descriptionFr
    boxFooterText.textContent = description.length >= 75 ? description.slice(0, 75) + '...' : description



    boxTag.appendChild(boxTagTitle)
    boxFooter.appendChild(boxFooterTitle)
    boxFooter.appendChild(boxFooterText)

    boxItem.appendChild(boxTag)
    boxItem.appendChild(boxFooter)

    document.getElementById(containerId).appendChild(boxItem)
}