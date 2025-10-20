import DynamicStorage from "../storage/DynamicStorage.js";
import reviewComponent from "../components/reviewComponent.js";
import Reviews from "./reviews.js";


const REVIEWS_TRIPADVISOR_ID = 'reviews-list-tripadvisor-id'
const REVIEWS_TRUSTPILOT_ID = 'reviews-list-trustpilot-id'
const REVIEWS_GOOGLE_ID = 'reviews-list-google-id'


const reviews = new Reviews(new DynamicStorage())

for (let review of reviews.getReviews()) {

    switch (review.type) {
        case 'tripadvisor':
            reviewComponent(review, REVIEWS_TRIPADVISOR_ID)
            break

        case 'trustpilot':
            reviewComponent(review, REVIEWS_TRUSTPILOT_ID)
            break
        
        case 'google':
            reviewComponent(review, REVIEWS_GOOGLE_ID)
            break
    }
}