import React from 'react';
import Chart from '../Chart/Chart';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <React.Fragment>
            <h1 className='dashCenter'>Dashboard</h1>
            <div>
                <Chart></Chart>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;