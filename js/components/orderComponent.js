import Boxes from "../boxes/boxes.js"
import Reviews from "../reviews/reviews.js"
import DynamicStorage from '../storage/DynamicStorage.js'


const dynamicStorage = new DynamicStorage()
const reviews = new Reviews(dynamicStorage)
const boxes = new Boxes(dynamicStorage, reviews)

/**
 * Create order component
 * @param {string} boxId 
 * @param {string} containerId 
 */
export default function orderComponent(boxId, containerId) {
    
    const box = boxes.getBox(boxId)

    const boxName = box.name
    const boxPrice = box.price
    const boxImage = box.images[0]
    const boxDescription = box.description
    

    const orderTitle = document.createElement('h2')
    orderTitle.className = 'title-h2'
    orderTitle.textContent = 'Order List'


    const line = document.createElement('div')
    line.className = 'separator'


    const image = document.createElement("img")  
    image.src = boxImage
    image.className = 'shop-image'
    image.alt = 'Box image'


    const price = document.createElement("p")
    price.className = 'text'
    price.textContent = `${boxPrice}$/month`

    const description = document.createElement('p')
    description.className = 'text'
    description.innerHTML = `
        <span class="description-title">${boxName}</span>
        ${boxDescription}
    `

    const articleSection = document.createElement('div')
    articleSection.className = 'article-section'
    articleSection.appendChild(image)
    articleSection.appendChild(description)
    articleSection.appendChild(price)

    const orderListSection = document.createElement('div')
    orderListSection.className = 'order-list-section'
    orderListSection.appendChild(orderTitle)
    orderListSection.appendChild(line)
    orderListSection.appendChild(articleSection)
    
    const root = document.getElementById(containerId)
    root.prepend(orderListSection)
}