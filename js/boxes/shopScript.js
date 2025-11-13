import shopComponent from "../components/shopComponent.js"


const SHOP_CONTAINER_ID = 'shop-section'

const url = new URL(document.URL)
const boxId = url.searchParams.get('id')

shopComponent(boxId, SHOP_CONTAINER_ID)