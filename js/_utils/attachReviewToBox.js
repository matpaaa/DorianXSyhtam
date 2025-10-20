import Boxes from "../boxes/boxes.js"
import Reviews from "../reviews/reviews.js"
import DynamicStorage from "../storage/DynamicStorage.js"
import generateRandomNumber from "./generateRandomNumber.js"

const dynamicStorage = new DynamicStorage()

const reviews = new Reviews(dynamicStorage)
const boxes = new Boxes(dynamicStorage, reviews)


export default function attachReviewToBox() {

    const reviewAttached = []
    const reviewsData = reviews.getReviews()

    for (let box of boxes.getBoxes()) {

        const numberReviews = generateRandomNumber(reviewsData.length / 4)
        let numberReviewsAdded = 0

        for (let review of reviewsData) {
            if (reviewAttached.includes(review.reviewId)) continue

            reviewAttached.push(review.reviewId)
            boxes.addReview(review.reviewId, box.boxId)
            numberReviewsAdded++

            if (numberReviewsAdded >= numberReviews) break
        }
    }
}

document.getElementById('btn-attach-reviews').addEventListener('click', attachReviewToBox)
