import reviewsDAO from '../dao/reviewsDAO.js'

export default class ReviewsController{
    static async apiPostReview(req,res,next){
        try{
            const movieId = req.body.movie_id
            const review = req.body.review
            const userInfo = {
                name: req.body.name,
                _id: req.body.user_id
            }

            const date = new Date()

            const ReviewResponse = await reviewsDAO.addReview(
                movieId,
                userInfo,
                review,
                date
            )
            res.json({ status: "success "})
        }catch(e){
            res.status(500).json({ error: e.message})
        }
    }
    static async apiUpdateReview(req,res,next){
        try{
            const reviewId = req.body.review_id
            const review = req.body.review

            const date = new Date()

            const ReviewResponse = await reviewsDAO.updateReview(
                reviewId,
                req.body.user_id,
                review,
                date
            )

            var { error } = ReviewResponse;
            if (error) {
                res.status(400).json({ error }); // Set appropriate status code (e.g., 400 Bad Request)
            }

            if(ReviewResponse.modifiedCount === 0){
                throw new Error ("Unable to update review. User may not be original poster")
            }            
            res.json({ status: "success"})
        }catch(e){
            res.status(500).json({ error: e.message})
        }
    }
    static async apiDeleteReview(req,res,next){
        try{
            const reviewId = req.body.review_id
            const userId = req.body.user_id
            const ReviewResponse = await reviewsDAO.deleteReview(
                reviewId,
                userId
            )
            res.json({ status: "success "})
        }catch(e){
            res.status(500).json({ error: e.message})
        }
    }
}