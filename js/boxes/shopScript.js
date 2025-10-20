import shopComponent from "../components/shopComponent.js"
import Reviews from "../reviews/reviews.js";
import DynamicStorage from "../storage/DynamicStorage.js";
import Boxes from "../boxes/boxes.js";


const SHOP_CONTAINER_ID = 'shop-section'
const REVIEWS_CONTAINER_ID = 'shop-section'

const dynamicStorage = new DynamicStorage()

const boxes = new Boxes(
    dynamicStorage,
    new Reviews(dynamicStorage)
)



const url = new URL(document.URL)
const boxId = url.searchParams.get('id')

shopComponent(boxId, SHOP_CONTAINER_ID)