import Boxes from "../boxes/boxes.js"
import Reviews from "../reviews/reviews.js"
import DynamicStorage from '../storage/DynamicStorage.js'
import orderComponent from '../components/orderComponent.js'
import getLanguageUsed from "../_utils/getLanguageUsed.js"


const lang = getLanguageUsed()
const url = new URL(document.URL)

const boxId = url.searchParams.get("id")
const firstname = url.searchParams.get("firstname")
const lastname = url.searchParams.get("lastname")
const email = url.searchParams.get("email")

const dynamicStorage = new DynamicStorage()
const reviews = new Reviews(dynamicStorage)
const boxes = new Boxes(dynamicStorage, reviews)

const box = boxes.getBox(boxId)

const boxPrice = box.price
const boxAddress = box.address
const boxTvaValue = box.getTvaValue()
const boxPriceTtc = box.getPriceTtc()

orderComponent(boxId, 'order-section-id')

document.querySelector('.summary-price').textContent = lang === 'en' ? `${boxPrice}$/month` : `${boxPrice}€/mois`
document.querySelector('.summary-tva').textContent = lang === 'en' ? `${boxTvaValue}$` : `${boxTvaValue}€`
document.querySelector('.summary-total').textContent = lang === 'en' ? `${boxPriceTtc}$` : `${boxPriceTtc}€`

document.getElementById('email').textContent = email

const nameContainers = document.querySelectorAll('#name')
for (let nameContainer of nameContainers) {
    nameContainer.textContent = `${firstname} ${lastname}`
}

const addressContainers = document.querySelectorAll('#address')
for (let addressContainer of addressContainers) {
    addressContainer.textContent = boxAddress
}

const btnBack = document.querySelector('.btn-back')
btnBack.href = `/${lang}/index.html`