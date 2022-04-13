import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './ReviewContent.css';

const ReviewContent = ({review}) => {
    const{name, reviewText, ratting} = review;
    return (
        <div className='singleReview singleReview1'>
            <h2>Name: {name}</h2>
            <p className='reviewPara'><span>Review:</span> {reviewText}</p>
            <p className='reviewRatting'><span>Ratting:</span>
            <Rating
                 initialRating={4.5}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                readonly
             /> {ratting}
            </p>
        </div>
    );
};

export default ReviewContent;