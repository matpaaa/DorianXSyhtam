import generateRandomNumber from "../_utils/generateRandomNumber.js"


export default class Review {

    /**
     * Create new review
     * @param {string} name 
     * @param {string} stars 
     * @param {string} content 
     * @param {string} type 
     */
    constructor(name, stars, content, type) {
        this.name = name
        this.stars = stars
        this.content = content
        this.type = type

        this.date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
        this.reviewId = generateRandomNumber()
    }

    /**
     * Name of user
     */
    name = 'Unknown'

    /**
     * Numbers of stars
     */
    stars = 1

    /**
     * Content of review
     */
    content = 'Content undefined'

    /**
     * Review Id
     */
    reviewId = null

    /**
     * Date
     */
    date = null

    /**
     * Type of review
     * tripadvisor | google | trustpilot
     */
    type = 'tripadvisor'
}