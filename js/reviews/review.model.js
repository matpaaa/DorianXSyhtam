

export default class Review {

    /**
     * Create new review
     * @param {string} name 
     * @param {string} stars 
     * @param {string} content 
     */
    constructor(name, stars, content) {
        this.name = name
        this.stars = stars
        this.content = content

        this.date = new Date().getDate()
        this.reviewId = JSON.stringify(new Date().getTime())
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
}