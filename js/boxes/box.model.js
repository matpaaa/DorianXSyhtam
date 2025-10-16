

export default class Box {

    /**
     * Create new box
     * @param {string} name 
     * @param {number} price 
     * @param {string[]} images 
     * @param {number} meter 
     * @param {string} description 
     * @param {string} address
     * @param {string} city 
     */
    constructor(name, price, images, meter, description, address, city) {
        this.name = name
        this.price = price
        this.images = images
        this.meter = meter
        this.description = description
        this.address = address
        this.city = city

        this.boxId = JSON.stringify(new Date().getTime())
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
     * Box description
     */
    description = null

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
}