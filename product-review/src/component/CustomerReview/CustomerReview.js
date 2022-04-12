import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import './CustomerReview.css';
const CustomerReview = ({review}) => {
    const {name, reviewText, ratting} = review;
    return (
        <div className='singleReview'>
            <h2>Name: {name}</h2>
            <p className='reviewPara'><span>Review:</span> {reviewText}</p>
            <p className='reviewRatting'><span>Ratting:</span>
             <Rating>
                initialRating={3.5}
                emptySymbol={<FontAwesomeIcon icon={faStarHalf} />}
                fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStarHalf} />}
                fractions={2}
             </Rating> {ratting}
            </p>
        </div>
    );
};

export default CustomerReview;