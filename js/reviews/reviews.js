import DynamicStorage from "../storage/DynamicStorage.js"
import Review from "./review.model.js"


export default class Reviews {

    key = 'REVIEWS'

    /**
     * Reviews
     * @param {DynamicStorage} dynamicStorage 
     */
    constructor(dynamicStorage) {
        this.dynamicStorage = dynamicStorage
    }

    /**
     * Get reviews
     * @returns {Review[]}
     */
    getReviews() {
        try {
            const data = this.dynamicStorage.getData(this.key)
            if (data) {
                const reviewsData = data.map(d => Object.assign(new Review(), d))
                return reviewsData
            }
            return []
        } catch (err) {
            console.error(`Error getting reviews: ${err}`)
        }
    }

    /**
     * Delete reviews
     */
    deleteReviews() {
        try {
            this.dynamicStorage.deleteData(this.key)
        } catch (err) {
            console.error(`Error deleting review: ${err}`)
        }
    }

    /**
     * Update reviews
     * @param {Review[]} reviews 
     */
    updateReviews(reviews) {
        try {
            this.dynamicStorage.addData(reviews, this.key)
        } catch (err) {
            console.error(`Error adding reviews: ${err}`)
        }
    }

    /**
     * Create new review
     * @param {string} name 
     * @param {number} stars 
     * @param {string} content 
     * @param {string} type 
     */
    createReview(name, stars, content, type) {
        const newReview = new Review(name, stars, content, type)

        const actualReviews = this.getReviews()
        actualReviews.push(newReview)
        this.updateReviews(actualReviews)
    }
}