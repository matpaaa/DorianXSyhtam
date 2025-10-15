

export default class Box {

    /**
     * Create new box
     * @param {string} name 
     * @param {number} price 
     * @param {string[]} images 
     * @param {number} meter 
     * @param {string} description 
     * @param {string} address 
     */
    constructor(name, price, images, meter, description, address) {
        this.name = name
        this.price = price
        this.images = images
        this.meter = meter
        this.description = description
        this.address = address
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
}