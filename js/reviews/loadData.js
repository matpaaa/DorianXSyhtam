import DynamicStorage from "../storage/DynamicStorage.js";
import Reviews from "./reviews.js";
import REVIEWS_DATA from "./reviews.data.js";


const reviews = new Reviews(new DynamicStorage())

function loadReviewsData() {
    for (let review of REVIEWS_DATA) {
        reviews.createReview(
            review.name,
            review.stars,
            review.content
        )
    }
}

const clearReviewsData = () => reviews.deleteReviews()


document.getElementById('btn-load-reviews').addEventListener('click', loadReviewsData)
document.getElementById('btn-clear-reviews').addEventListener('click', clearReviewsData)
