import Reviews from "../reviews/reviews.js";
import DynamicStorage from "../storage/DynamicStorage.js";
import Boxes from "./boxes.js";
import BOXES_DATA from "./boxes.data.js";


const boxes = new Boxes(
    new DynamicStorage(),
    new Reviews()
)

function loadBoxesData() {
    for (let box of BOXES_DATA) {
        boxes.createBox(
            box.name,
            box.meter,
            box.price,
            box.images,
            box.address,
            box.address
        )
    }
}

const clearBoxesData = () => boxes.deleteBoxes()

document.getElementById('btn-load-boxes').addEventListener('click', loadBoxesData)
document.getElementById('btn-clear-boxes').addEventListener('click', clearBoxesData)
