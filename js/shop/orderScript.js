import orderComponent from '../components/orderComponent.js'


const url = new URL(document.URL)
const boxId = url.searchParams.get('id')

orderComponent(boxId, 'order-section-id')

const btnBuy = document.createElement('a')
btnBuy.className = 'btn-primary'
btnBuy.innerHTML = `
    Buy
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M233.21,56.31A12,12,0,0,0,224,52H66L60.53,21.85A12,12,0,0,0,48.73,12H24a12,12,0,0,0,0,24H38.71L63.62,173a28,28,0,0,0,4.07,10.21A32,32,0,1,0,123,196h34a32,32,0,1,0,31-24H91.17a4,4,0,0,1-3.93-3.28L84.92,156H196.1a28,28,0,0,0,27.55-23l12.16-66.86A12,12,0,0,0,233.21,56.31ZM100,204a8,8,0,1,1-8-8A8,8,0,0,1,100,204Zm88,8a8,8,0,1,1,8-8A8,8,0,0,1,188,212Zm12-83.28A4,4,0,0,1,196.1,132H80.56L70.38,76H209.62Z"></path></svg>
`



btnBuy.onclick = () => {

    const orderError = document.getElementById('order-error')

    orderError.className = ['text-error', 'hidden']
    orderError.innerText = ''

    const inputFirstname = document.getElementById('input-firstname')
    const inputLastname = document.getElementById('input-lastname')
    const inputEmail = document.getElementById('input-email')

    if (inputFirstname.value && inputEmail.value && inputLastname.value) {
        const url = new URL('shopOrderConfirmation.html', window.location.origin)

        url.searchParams.set('id', boxId)
        url.searchParams.set('firstname', inputFirstname.value)
        url.searchParams.set('lastname', inputLastname.value)
        url.searchParams.set('email', inputEmail.value)

        document.location.href = url.toString()
    } else {
        orderError.className = 'text-error'
        orderError.innerText = 'Invalid fields'
    }

} 

const detailsElementContainer = document.querySelector('.details-container')
detailsElementContainer.appendChild(btnBuy)