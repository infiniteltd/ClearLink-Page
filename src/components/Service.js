import React from 'react';
import AppStore from "../assets/apple-store.png";
import GoogleStore from "../assets/google-store.png";
import ClearlinkLogo from '../assets/Group-1.png';

function Service() {
    return (
        <div className='flex max-w-7xl mx-auto justify-between mb-20'>
            <div>
                <div className='flex flex-grow space-x-2 font-semibold mx-2 cursor-pointer gap-2.5 w-8 mb-6'>
                    <img className='w-6 h-7' src={ClearlinkLogo} />
                    <h2 className='font-bold text-xl mt-1.5'>ClearLink<span className='text-blue-500 text-lg'>.</span></h2>
                </div>
                <p className='text-gray-600 text-lg font-normal'>ClearLink is your gateway to effortless, high- <br />quality video conferencing. Join us in shaping <br /> the future of communication!</p>
            </div>


            <div className='list-none cursor-pointer'>
                <p className='text-gray-500 text-base font-semibold mb-2'>Product</p>
                <li className='mb-2 font-semibold'>Overview</li>
                <li className='mb-2 font-semibold '>Features</li>
                <li className='mb-2 font-semibold '>Solutions</li>
                <li className='mb-2 font-semibold '>Tutorials</li>
                <li className='mb-2 font-semibold '>Pricing</li>
            </div>

            <div className='list-none cursor-pointer'>
                <p className='text-gray-500 text-base font-semibold mb-2'>Company</p>
                <li className='mb-2 font-semibold '>About us</li>
                <li className='mb-2 font-semibold '>Careers</li>
                <li className='mb-2 font-semibold '>Press</li>
                <li className='mb-2 font-semibold '>News</li>
                <li className='mb-2 font-semibold '>Contact</li>
            </div>

            <div className='list-none cursor-pointer'>
                <p className='text-gray-500 text-base font-semibold mb-2'>Resources</p>
                <li className='mb-2 font-semibold '>Blog</li>
                <li className='mb-2 font-semibold '>Events</li>
                <li className='mb-2 font-semibold '>Help centre</li>
                <li className='mb-2 font-semibold '>Tutorials</li>
                <li className='mb-2 font-semibold '>Support</li>
            </div>

            <div className='list-none cursor-pointer'>
                <p className='text-gray-500 text-base font-semibold mb-2'>Legal</p>
                <li className='mb-2 font-semibold '>Terms</li>
                <li className='mb-2 font-semibold '>Privacy</li>
                <li className='mb-2 font-semibold '>Cookies</li>
                <li className='mb-2 font-semibold '>Licenses</li>
                <li className='mb-2 font-semibold '>Contact</li>
            </div>

            <div className='gap-4 cursor-pointer'>
                <p className='text-blue-700 text-base font-semibold mb-3'>Get the app</p>
                <img className='mb-3' src={AppStore} alt="app store" />
                <img src={GoogleStore} alt="google store" />
            </div>
        </div>
    );
}

export default Service;