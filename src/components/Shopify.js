import React from 'react';
import ShopifyImage from "../assets/Shopify.png";
import Stars from "../assets/Stars.svg";
import Avatar from "../assets/Sarah.png";
import Image1 from "../assets/Image.png";
import Image2 from "../assets/Image-1.png";
import Image3 from "../assets/Image-2.png";
import Image4 from "../assets/Image-3.png";
import Image5 from "../assets/Image-4.png";

function Shopify() {
    return (
        <div className='flex max-w-7xl mx-auto justify-between mb-20'>
            <div>
                <img className='w-30 mb-10 my-20' src={ShopifyImage} alt="shopify" />
                <img className='w-30 mb-10' src={Stars} alt="stars" />

                <h3 className='text-gray-900 leading-10 text-4xl font-medium tracking-normal mb-10'>ClearLink has upgraded our <br /> remote meetings. High-quality <br /> video, screen sharing, and <br /> top-notch security make it <br /> essential for our team.</h3>

                <div className='flex justify-between'>
                    <div className='flex'>
                        <img className='w-14 h-14' src={Avatar} alt="sarah" />
                        <div className='mx-3'>
                            <h4 className='text-xl font-semibold text-gray-900 leading-7'>Sarah Thompson</h4>
                            <p className='text-lg text-gray-600 font-normal leading-7'>Project Manager, Shopify</p>
                        </div>
                    </div>
                    <div className='flex space-x-6'>
                        <div className='border w-12 h-12 bg-white rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-5 h-5 mx-3 my-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </div>

                        <div className='border w-12 h-12 bg-white rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-5 h-5 mx-3 my-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-24'>
                <div className='flex items-center justify-center'>
                    <img className='w-34 h-34 my-10 mr-4' src={Image5} alt="" />
                    <img className='w-34 h-50 mb-4 ' src={Image1} alt="" />
                </div>
                <div className='flex -mb-7'>
                    <img className='w-48 h-32 mr-4' src={Image4} alt="" />
                    <img className='w-40 h-50' src={Image3} alt="" />
                    <img className='w-48 h-32 mx-4' src={Image2} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Shopify;