import React from 'react';
import { Link } from "react-router-dom";
import useReview from '../../hook/useReview';
import CustomerReview from '../CustomerReview/CustomerReview';
import './CustomReviews.css'

const CustomReviews = () => {
    const [reviews] = useReview();
    const review = reviews.slice(0, 3);
    return (
        <React.Fragment>
            <h2>Customer Review({review.length})</h2>
            <div className='CustomReviews'>
                {
                    review.map(review => <CustomerReview
                    key={review.id}
                    review={review}
                    ></CustomerReview>)
                }
            </div>
            <Link to='/review' className='btn btnAll'>See All Review</Link>
        </React.Fragment>
    );
};

export default CustomReviews;