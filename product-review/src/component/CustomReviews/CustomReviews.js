import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import CustomerReview from '../CustomerReview/CustomerReview';
import './CustomReviews.css'

const CustomReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('bookreview.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);
    return (
        <React.Fragment>
            <h2>Customer Review({reviews.length})</h2>
            <div className='CustomReviews'>
                {
                    reviews.map(review => <CustomerReview
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