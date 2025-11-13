import Box from "../boxes/box.model.js";
import Reviews from "../reviews/reviews.js";
import DynamicStorage from "../storage/DynamicStorage.js";
import Boxes from "../boxes/boxes.js";
import reviewComponent from "./reviewComponent.js";


const dynamicStorage = new DynamicStorage()
const reviews = new Reviews(dynamicStorage)

const boxes = new Boxes(
    dynamicStorage,
    reviews
)

/**
 * Create shop component
 * @param {Box} boxId 
 * @param {string} containerId 
 */
export default function shopComponent(boxId, containerId) {

    const box = boxes.getBox(boxId)

    const shopContainer = document.createElement('div')
    shopContainer.className = 'shop-container'

    const shopImg = document.createElement('img')
    shopImg.className = 'shop-img'
    shopImg.src = box.images[0]
    shopImg.alt = 'Box image'

    const shopLeftContainer = document.createElement('div')
    shopLeftContainer.className = 'shop-left-container' 

    shopLeftContainer.appendChild(shopImg)

    const shopRightContainer = document.createElement('div')
    shopRightContainer.className = 'shop-right-container'

    const informationsContainer = document.createElement('div')
    informationsContainer.className = 'informations-container'

    const informationsHeader = document.createElement('div')
    informationsHeader.className = 'informations-header'

    const boxTitle = document.createElement('h2')
    boxTitle.className = 'title-h2'
    boxTitle.textContent = box.name

    const reviewsContainer = document.createElement('div')
    reviewsContainer.className = 'reviews-container'

    const starsContainer = document.createElement('div')
    starsContainer.className = 'stars-container'

    for (let i = 0; i < boxes.getReviewsStars(box.boxId); i++) {
        const star = document.createElement('div')
        star.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#D10028" viewBox="0 0 256 256">
            <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
            </svg>
        `
        starsContainer.appendChild(star)
    }

    const reviewsNumber = document.createElement('p')
    reviewsNumber.className = 'stars-title'
    reviewsNumber.textContent = `(${box.reviews.length} reviews)`

    reviewsContainer.appendChild(starsContainer)
    reviewsContainer.appendChild(reviewsNumber)

    const price = document.createElement('p')
    price.className = 'price'
    price.textContent = `${box.price}$/month`

    informationsHeader.appendChild(boxTitle)
    informationsHeader.appendChild(reviewsContainer)
    informationsHeader.appendChild(price)

    const description = document.createElement('p')
    description.className = 'text'
    description.textContent = box.description
    
    informationsContainer.appendChild(informationsHeader)
    informationsContainer.appendChild(description)

    const btnBuy = document.createElement('a')
    btnBuy.className = 'btn-primary'
    btnBuy.innerHTML = `
        Buy
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M233.21,56.31A12,12,0,0,0,224,52H66L60.53,21.85A12,12,0,0,0,48.73,12H24a12,12,0,0,0,0,24H38.71L63.62,173a28,28,0,0,0,4.07,10.21A32,32,0,1,0,123,196h34a32,32,0,1,0,31-24H91.17a4,4,0,0,1-3.93-3.28L84.92,156H196.1a28,28,0,0,0,27.55-23l12.16-66.86A12,12,0,0,0,233.21,56.31ZM100,204a8,8,0,1,1-8-8A8,8,0,0,1,100,204Zm88,8a8,8,0,1,1,8-8A8,8,0,0,1,188,212Zm12-83.28A4,4,0,0,1,196.1,132H80.56L70.38,76H209.62Z"></path></svg>
    `
    btnBuy.onclick = () => {
        document.location.href = `order.html?id=${boxId}`
    }

    shopRightContainer.appendChild(informationsContainer)
    shopRightContainer.appendChild(btnBuy)

    shopContainer.appendChild(shopLeftContainer)
    shopContainer.appendChild(shopRightContainer)





    const imagesContainer = document.createElement('div')
    imagesContainer.className = 'images-container'

    for (let image of box.images) {
        const imgBox = document.createElement('img')
        imgBox.src = image
        imgBox.alt = 'Box image'
        
        imgBox.onclick = () => {
            const mainImage = document.querySelector('.shop-img')
            mainImage.src = box.images[box.images.indexOf(image)]
        }

        imagesContainer.appendChild(imgBox)
    }


    shopLeftContainer.appendChild(imagesContainer)


    const shopDetailsContainer = document.createElement('div')
    shopDetailsContainer.className = 'shop-details-container'

    const detailsTitle = document.createElement('h2')
    detailsTitle.className = 'title-h2'
    detailsTitle.textContent = 'Details'

    const detailsContainer = document.createElement('div')
    detailsContainer.className = 'details-container'

    const detailsListContainer = document.createElement('div')
    detailsListContainer.className = 'details-list-container'

    const detailsAddressElement = document.createElement('div')
    detailsAddressElement.className = 'details-element'
    detailsAddressElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#6A6262" viewBox="0 0 256 256"><path d="M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"></path></svg>
        <p class="details-text">${box.address}</p>
    `

    const detailsPriceElement = document.createElement('div')
    detailsPriceElement.className = 'details-element'
    detailsPriceElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#6A6262" viewBox="0 0 256 256"><path d="M152,116H140V60h4a28,28,0,0,1,28,28,12,12,0,0,0,24,0,52.06,52.06,0,0,0-52-52h-4V24a12,12,0,0,0-24,0V36h-4a52,52,0,0,0,0,104h4v56H104a28,28,0,0,1-28-28,12,12,0,0,0-24,0,52.06,52.06,0,0,0,52,52h12v12a12,12,0,0,0,24,0V220h12a52,52,0,0,0,0-104Zm-40,0a28,28,0,0,1,0-56h4v56Zm40,80H140V140h12a28,28,0,0,1,0,56Z"></path></svg>
        <p class="details-text">${box.price} per meter</p>
    `

    const detailsSizeElement = document.createElement('div')
    detailsSizeElement.className = 'details-element'
    detailsSizeElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#6A6262" viewBox="0 0 256 256"><path d="M152,116H140V60h4a28,28,0,0,1,28,28,12,12,0,0,0,24,0,52.06,52.06,0,0,0-52-52h-4V24a12,12,0,0,0-24,0V36h-4a52,52,0,0,0,0,104h4v56H104a28,28,0,0,1-28-28,12,12,0,0,0-24,0,52.06,52.06,0,0,0,52,52h12v12a12,12,0,0,0,24,0V220h12a52,52,0,0,0,0-104Zm-40,0a28,28,0,0,1,0-56h4v56Zm40,80H140V140h12a28,28,0,0,1,0,56Z"></path></svg>
        <p class="details-text">${box.meter}m²</p>
    `

    detailsListContainer.appendChild(detailsAddressElement)
    detailsListContainer.appendChild(detailsPriceElement)
    detailsListContainer.appendChild(detailsSizeElement)


    const moreDetails = document.createElement('div')
    moreDetails.className = 'text'
    moreDetails.textContent = 'Our storage solutions are available for purchase or hire, depending on your needs. Hire is available for flexible periods, with a commitment tailored to your situation. Purchasing gives you permanent access to a dedicated space. In both cases, booking is quick and easy: a clear contract, transparent pricing and personalised support. Our teams are available to answer all your questions and guide you through the process.'

    detailsContainer.appendChild(detailsListContainer)
    detailsContainer.appendChild(moreDetails)

    shopDetailsContainer.appendChild(detailsTitle)
    shopDetailsContainer.appendChild(detailsContainer)



    const reviewsSection = document.createElement('div')
    reviewsSection.className = 'last-reviews-container'

    const reviewsTitle = document.createElement('h2')
    reviewsTitle.className = 'title-h2'
    reviewsTitle.textContent = 'Last Reviews'

    const reviewsList = document.createElement('div')
    reviewsList.className = 'reviews-list'
    reviewsList.id = 'reviews-list'

    reviewsSection.appendChild(reviewsTitle)
    reviewsSection.appendChild(reviewsList)



    const root = document.getElementById(containerId)
    root.appendChild(shopContainer)
    root.appendChild(shopDetailsContainer)
    root.appendChild(reviewsSection)


    // Load reviews element

    for (let reviewId of box.reviews.slice(0, 3)) {
        const review = reviews.getReview(reviewId)
        reviewComponent(review, 'reviews-list')
    }
}