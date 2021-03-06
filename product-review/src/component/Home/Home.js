import React from 'react';
import CustomReviews from '../CustomReviews/CustomReviews';
import './Home.css';

const Home = () => {
    return (
        <React.Fragment>
            <div className='headerPart'>
                <div className="header-right">
                    <h1>হাতেকলমে জাভাস্ক্রিপ্ট</h1>
                    <h3>Author: <small>জুনায়েদ আহমেদ</small></h3>
                    <p> প্রধানত স্ক্রিপ্টিং ল্যাংগুয়েজ হিসেবে পরিচিত থাকলেও জাভাস্ক্রিপ্ট এখন বিভিন্নভাবে ব্যবহৃত হচ্ছে। নােড জেএস আসার পর থেকে এখন বিভিন্ন প্রতিযােগিতামূলক প্রােগ্রামেও জাভস্ক্রিপ্ট ব্যবহার করে প্রবলেম সল্ভ করার সুযােগ থাকছে। একই সঙ্গে এর সাহায্যে ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট থেকে শুরু করে ক্রস প্ল্যাটফর্ম মােবাইল অ্যাপ্লিকেশন ডেভেলপমেন্ট, ডেস্কটপ অ্যাপ্লিকেশন ডেভেলপমেন্ট- সবই সম্ভব হচ্ছে। জাভাস্ক্রিপ্টের এত পপুলারিটির পেছনে আসল কারণ হচ্ছে এর সহজলভ্যতা। সব রকমের ডিভাইসেই কোনাে না কোনােভাবে জাভাস্ক্রিপ্ট বাই ডিফল্টভাবেই রান করানাে যায়। আপনার ডিভাইসে যদি ওয়েব ব্রাউজার সাপাের্ট করে, তাহলে অনেকটাই ধরে নেওয়া যায় আপনার ডিভাইসে একটা জাভাস্ক্রিপ্টের ইঞ্জিনও আছে। আর তাই আপনার ক্লাইন্টকে কোনাে অতিরিক্ত সেটআপের ঝামেলায় যাওয়া লাগে না জটিল বা সিম্পল যেকোনাে রকমের ওয়েব অ্যাপ্লিকেশন চালানাের জন্য।</p>
                    <a href="https://js.zonayed.me/" className='btn'>Live Demo</a>
                </div>
                <div className="header-left">
                    <div className="bookImg">
                        <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/e53af8191_202772.jpg" alt="হাতেকলমে জাভাস্ক্রিপ্ট" />
                    </div>
                </div>
            </div>
            <div className="customerReview">
                <CustomReviews></CustomReviews>
            </div>
        </React.Fragment>
    );
};

export default Home;