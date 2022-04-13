import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css'

const Error404 = () => {
    return (
        <div>
            <div className="errorPage">
                <img src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg" alt="404 page" />
                <h4>Don't Be Sad😑😥 Please try again Right location</h4>
                <Link to='/home' className='btn'>Back To Home </Link>
            </div>
        </div>
    );
};

export default Error404;