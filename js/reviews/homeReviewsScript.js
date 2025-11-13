import DynamicStorage from "../storage/DynamicStorage.js";
import reviewComponent from "../components/reviewComponent.js";
import Reviews from "./reviews.js";


const REVIEWS_CONTAINER_1_ID = 'reviews-col-container-1'
const REVIEWS_CONTAINER_2_ID = 'reviews-col-container-2'

const reviews = new Reviews(new DynamicStorage())

for (let review of reviews.getReviews().slice(0, 3)) {
    reviewComponent(review, REVIEWS_CONTAINER_1_ID)
}

for (let review of reviews.getReviews().slice(3, 5)) {
    reviewComponent(review, REVIEWS_CONTAINER_2_ID)
}