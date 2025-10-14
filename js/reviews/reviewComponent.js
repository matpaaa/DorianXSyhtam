import Review from "./review.model.js";

/**
 * Generate Review component
 * @param {Review} review 
 * @param {string} containerId 
 */
export default function reviewComponent(review, containerId) {
    const reviewContainer = document.createElement('div')
    reviewContainer.className = 'review-container'

    const reviewHeader = document.createElement('div')
    reviewHeader.className = 'review-header'

    const reviewName = document.createElement('p')
    reviewName.textContent = review.name

    const reviewStarsContainer = document.createElement('div')
    reviewStarsContainer.className = 'review-stars'

    for (let i = 0; i<review.stars; i++) {
        const star = document.createElement('div')
        star.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#D10028" viewBox="0 0 256 256">
            <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
            </svg>
        `
        reviewStarsContainer.appendChild(star)
    }

    reviewHeader.appendChild(reviewName)
    reviewHeader.appendChild(reviewStarsContainer)
    reviewContainer.appendChild(reviewHeader)



    const reviewText = document.createElement('p')
    reviewText.className = 'review-text'
    reviewText.textContent = review.content
    reviewContainer.appendChild(reviewText)



    const reviewFooter = document.createElement('div')
    reviewFooter.className = 'review-footer'

    const reviewDate = document.createElement('p')
    reviewDate.textContent = review.date

    reviewFooter.appendChild(reviewDate)
    reviewContainer.appendChild(reviewFooter)

    const container = document.getElementById(containerId)
    container.appendChild(reviewContainer)
}