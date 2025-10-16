import Box from "../boxes/box.model.js"

/**
 * Generate Shop List Component
 * @param {Box} box 
 * @param {string} containerId 
 */
export default function shopListComponent(box, containerId) {

    const boxContainer = document.createElement('div')
    boxContainer.className = 'box-container'

    const img = document.createElement('img')
    img.className = 'box-image'
    img.src = box.images[0]
    img.alt = 'Box image'

    const rightContainer = document.createElement('div')
    rightContainer.className = 'box-right-container'

    const informationsContainer = document.createElement('div')
    informationsContainer.className = 'box-informations-container'

    const cityContainer = document.createElement('div')
    cityContainer.className = 'box-city-container'

    const cityTitle = document.createElement('p')
    cityTitle.className = 'box-city-title'
    cityTitle.textContent = box.city

    cityContainer.appendChild(cityTitle)

    const boxInformations = document.createElement('p')
    boxInformations.className = 'box-informations'

    const boxName = document.createElement('span')
    boxName.className = 'box-name'
    boxName.textContent = `${box.name} - ${box.meter}m`

    const boxDescription = document.createElement('p')
    boxDescription.textContent = box.description

    boxInformations.appendChild(boxName)
    boxInformations.appendChild(boxDescription)

    const price = document.createElement('p')
    price.className = 'box-price'
    price.textContent = `${box.price}$/month`

    informationsContainer.appendChild(cityContainer)
    informationsContainer.appendChild(boxInformations)
    informationsContainer.appendChild(price)



    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'box-button-container'

    const buttonPrimary = document.createElement('a')
    buttonPrimary.classList = 'btn-primary'
    buttonPrimary.innerHTML = `
        See More
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg>
    `

    buttonContainer.appendChild(buttonPrimary)

    rightContainer.appendChild(informationsContainer)
    rightContainer.appendChild(buttonContainer)

    boxContainer.appendChild(img)
    boxContainer.appendChild(rightContainer)

    const root = document.getElementById(containerId)
    root.appendChild(boxContainer)
}