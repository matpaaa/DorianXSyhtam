import Boxes from "../boxes/boxes.js"
import Reviews from "../reviews/reviews.js"
import DynamicStorage from '../storage/DynamicStorage.js'
import orderComponent from '../components/orderComponent.js'


const url = new URL(document.URL)

const boxId = url.searchParams.get("id")

const dynamicStorage = new DynamicStorage()
const reviews = new Reviews(dynamicStorage)
const boxes = new Boxes(dynamicStorage, reviews)

const box = boxes.getBox(boxId)

const boxPrice = box.price
const boxTvaValue = box.getTvaValue()
const boxPriceTtc = box.getPriceTtc()

orderComponent(boxId, 'order-section-id')

document.querySelector('.summary-price').textContent = `${boxPrice}$/month`
document.querySelector('.summary-tva').textContent = `${boxTvaValue}$`
document.querySelector('.summary-total').textContent = `${boxPriceTtc}$`