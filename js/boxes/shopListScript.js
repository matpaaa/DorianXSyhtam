import Reviews from "../reviews/reviews.js"
import DynamicStorage from "../storage/DynamicStorage.js"
import Boxes from "./boxes.js"
import shopListComponent from "../components/shopListComponent.js"
import Box from "./box.model.js"


const BOXES_CONTAINER_ID = 'boxes-container'

const dynamicStorage = new DynamicStorage()

const boxes = new Boxes(
    dynamicStorage,
    new Reviews(dynamicStorage)
)

class FilterBoxes {

    constructor(boxes) {
        this.boxes = boxes
    }

    resetBoxes() {
        const container = document.getElementById(BOXES_CONTAINER_ID)
        container.replaceChildren()
    }

    /**
     * 
     * @param {Box[]} boxes 
     */
    showBoxes(boxes) {
        this.resetBoxes()
        for (let box of boxes) {
            shopListComponent(box, BOXES_CONTAINER_ID)
        }
    }

    search() {
        const input = document.getElementById('searchbar-input')
        if (input.value) {
            const boxesFiltered = this.boxes.getBoxes().filter(box => box.name.toLowerCase().includes(input.value.toLowerCase()))
            // this.showBoxes(boxesFiltered)
            return boxesFiltered
        } else {
            // this.showBoxes(this.boxes.getBoxes())
            return this.boxes.getBoxes()
        }
    }

    priceFilter(boxes) {
        const priceRange = document.getElementById('range-price')
        return boxes.filter(box => box.price <= priceRange.value)
    }

    sizeFilter(boxes) {
        const sizeRange = document.getElementById('range-size')
        return boxes.filter(box => box.meter <= sizeRange.value)
    }

    locationFilter(boxes) {
        const locations = []

        const checkParis = document.getElementById('check-paris')
        if (checkParis.checked) {
            locations.push('Paris')
        }

        const checkLyon = document.getElementById('check-lyon')
        if (checkLyon.checked) {
            locations.push('Lyon')
        }

        const checkMarseille = document.getElementById('check-marseille')
        if (checkMarseille.checked) {
            locations.push('Marseille')
        }

        const checkBordeaux = document.getElementById('check-bordeaux')
        if (checkBordeaux.checked) {
            locations.push('Bordeaux')
        }

        if (locations.length === 0) {
            return boxes
        }

        return boxes.filter(box => locations.includes(box.city))
    }

    filter() {
        const boxesSearch = this.search()
        const boxesPrice = this.priceFilter(boxesSearch)
        const boxesSize = this.sizeFilter(boxesPrice)
        const boxesLocation = this.locationFilter(boxesSize)
        this.showBoxes(boxesLocation)
    }
}

const filterBoxes = new FilterBoxes(boxes)
filterBoxes.showBoxes(boxes.getBoxes())

document.getElementById('searchbar-input').addEventListener('keypress', () => filterBoxes.filter())
document.getElementById('searchbar-input').addEventListener('keydown', () => filterBoxes.filter())
document.getElementById('searchbar-input').addEventListener('keyup', () => filterBoxes.filter())

document.getElementById('range-price').addEventListener('change', () => filterBoxes.filter())
document.getElementById('range-size').addEventListener('change', () => filterBoxes.filter())

document.getElementById('check-paris').addEventListener('change', () => filterBoxes.filter())
document.getElementById('check-lyon').addEventListener('change', () => filterBoxes.filter())
document.getElementById('check-marseille').addEventListener('change', () => filterBoxes.filter())
document.getElementById('check-bordeaux').addEventListener('change', () => filterBoxes.filter())