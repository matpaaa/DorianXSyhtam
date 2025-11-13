import boxHomeComponent from "../components/boxHomeComponent.js"
import Reviews from "../reviews/reviews.js"
import DynamicStorage from "../storage/DynamicStorage.js"
import Boxes from "./boxes.js"


const BOXES_CONTAINER_ID = 'boxes-list-container'

const dynamicStorage = new DynamicStorage()

const boxes = new Boxes(
    dynamicStorage,
    new Reviews(dynamicStorage)
)

for (let box of boxes.getBoxes().slice(0, 4)) {
    boxHomeComponent(box, BOXES_CONTAINER_ID)
}