import React from 'react';
import useReview from '../../hook/useReview';
import ReviewContent from '../ReviewContent/ReviewContent';
import './Review.css';

const Review = () => {
    const [reviews] = useReview(); // use hook
    return (
        <React.Fragment>
            <h1 className='headingReviewText'>What our customer say!({reviews.length})</h1>
            <div className='review'>
                {
                    reviews.map(review => <ReviewContent 
                    key={review.id}
                    review={review}
                    ></ReviewContent>)
                }
            </div>
        </React.Fragment>
    );
};

export default Review;