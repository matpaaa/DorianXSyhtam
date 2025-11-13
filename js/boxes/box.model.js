import generateRandomNumber from "../_utils/generateRandomNumber.js"


export default class Box {

    /**
     * Create new box
     * @param {string} name 
     * @param {number} price 
     * @param {string[]} images 
     * @param {number} meter 
     * @param {string} descriptionEn
     * @param {string} descriptionFr
     * @param {string} address
     * @param {string} city 
     * @param {number} tvaPercentage
     */
    constructor(name, price, images, meter, descriptionEn, descriptionFr, address, city, tvaPercentage=20) {
        this.name = name
        this.price = price
        this.images = images
        this.meter = meter
        this.descriptionEn = descriptionEn
        this.descriptionFr = descriptionFr
        this.address = address
        this.city = city
        this.tvaPercentage = tvaPercentage

        this.boxId = generateRandomNumber()
    }

    /**
     * Box name
     */
    name = null

    /**
     * Box price
     */
    price = 0

    /**
     * Box images
     */
    images = []

    /**
     * Box description EN
     */
    descriptionEn = null

    /**
     * Box description FR
     */
    descriptionFr = null

    /**
     * Box meter square
     */
    meter = 0

    /**
     * Box reviews
     */
    reviews = []

    /**
     * Box physical address
     */
    address = null

    /**
     * Box Id
     */
    boxId = null

    /**
     * City Paris | Lyon | Marseille | Bordeaux
     */
    city = null

    /**
     * TVA Percentage 
     */
    tvaPercentage = 20

    /**
     * Get TVA value
     */
    getTvaValue() {
        return this.price * (this.tvaPercentage / 100)
    }

    /**
     * Price with the TVA
     */
    getPriceTtc() {
        return this.price + this.getTvaValue()

    }
}