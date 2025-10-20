import Box from "./box.model.js"


export default class Boxes {

    key = 'BOXES'

    /**
     * Boxes
     * @param {DynamicStorage} dynamicStorage 
     * @param {Reviews} reviews 
     */
    constructor(dynamicStorage, reviews) {
        this.dynamicStorage = dynamicStorage
        this.reviews = reviews
    }

    /**
     * Get boxes
     * @returns {Box[]}
     */
    getBoxes() {
        try {
            const data = this.dynamicStorage.getData(this.key)
            if (data) {
                const boxesData = data.map(d => Object.assign(new Box(), d))
                return boxesData
            }
            return []
        } catch (err) {
            console.error(`Error getting boxes: ${err}`)
        }
    }

    /**
     * Get box with boxId
     * @param {string} boxId 
     * @returns {Box | null}
     */
    getBox(boxId) {
        const boxes = this.getBoxes()
        return boxes.filter(box => box.boxId == boxId)[0]
    }

    /**
     * Delete all boxes
     */
    deleteBoxes() {
        try {
            this.dynamicStorage.deleteData(this.key)
        } catch (err) {
            console.error(`Error deleting boxes: ${err}`)
        }
    }

    /**
     * Update boxes
     * @param {Box[]} boxes 
     */
    updateBoxes(boxes) {
        try {
            this.dynamicStorage.addData(boxes, this.key)
        } catch (err) {
            console.error(`Error adding boxes: ${err}`)
        }
    }

    /**
     * Create new box
     * @param {string} name 
     * @param {number} meter 
     * @param {number} price 
     * @param {string[]} images 
     * @param {string} address 
     * @param {string} description
     * @param {string} city 
     */
    createBox(
        name,
        meter,
        price,
        images,
        address,
        description,
        city
    ) {
        const newBox = new Box(
            name,
            price,
            images,
            meter,
            description,
            address,
            city
        )
        
        const actualBoxes = this.getBoxes()
        actualBoxes.push(newBox)
        this.updateBoxes(actualBoxes)
    }

    /**
     * Get numbers of stars
     * @param {string} boxId 
     * @returns {number}
     */
    getReviewsStars(boxId) {
        const box = this.getBox(boxId)
        const stars = []
        
        for (let reviewId of box.reviews) {
            const review = this.reviews.getReview(reviewId)

            if (review) {
                stars.push(review.stars)
            }
        }

        return Math.round(stars.reduce((acc, curr) => acc + curr, 0) / stars.length)
    }

    addReview(reviewId, boxId) {

        const boxes = this.getBoxes()

        const boxesUpdated = boxes.map(box => {
            if (box.boxId == boxId) {
                return {
                    ...box,
                    reviews: [...box.reviews, reviewId]
                }
            }
            return box
        })

        this.updateBoxes(boxesUpdated)
    }
}