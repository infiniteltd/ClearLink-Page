import React from 'react';
import Shopify from "../assets/Shopify.png";
import Coinbase from "../assets/Vector.png";
import Dropbox from "../assets/Dropbox.png";
import Intercom from "../assets/Intercom.png";
import Marvel from "../assets/Marvel.png";
import Automatic from "../assets/Automatic.png";
import Rectangle from "../assets/Rectangle1.png";
import HandDrawn from "../assets/Hand-drawn-arrow.png";

function Company() {
    return (
        <>
            <div className='items-center justify-center mt-12'>
                <p className='text-center mt-6 mb-8 font-semibold text-lg text-gray-500'>Join 1,500+ companies already video conferencing the ClearLink way</p>
                <div className='flex items-center justify-center space-x-14 '>
                    <img className='w-36 object-contain' src={Shopify} alt="shopify" />
                    <img className='w-36 object-contain' src={Coinbase} alt="coinbase" />
                    <img className='w-36 object-contain' src={Dropbox} alt="dropbox" />
                    <img className='w-36 object-contain' src={Intercom} alt="intercom" />
                    <img className='w-36 h-8 object-contain' src={Marvel} alt="marvel" />
                    <img className='w-36 object-contain' src={Automatic} alt="Automatic" />
                </div>
            </div>

            <div className='max-w-7xl mx-auto justify-center my-36'>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-blue-700 font-semibold text-lg leading-7'>The ClearLink Advantage</p>
                        <h2 className='text-gray-800 leading-12 text-5xl font-semibold my-2'>Why choose ClearLink?</h2>
                        <p className='text-gray-500 leading-8 text-2xl font-normal my-7'>In a world where connection is everything, ClearLink takes the lead. <br /> Our cutting-edge video conferencing app offers:</p>
                    </div>
                    <div>
                        <img className='w-56 h-48 rotate-160 mr-36 my-10 top-1' src={HandDrawn} alt="" />
                    </div>
                </div>

                <div className='flex items-center justify-between -my-14'>
                    <div className='grid grid-cols-2 gap-10'>
                        <div >
                            <div className='w-8 h-8 p-5 border border-gray-100 bg-gray-100 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 -my-3 -mx-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </div>

                            <h3 className='font-semibold text-2xl leading-8 text-gray-900'>Crystal-clear HD video</h3>
                            <p className='text-gray-600 leading-7 text-lg font-normal'>No more pixelation or blurriness - just <br /> stunning, lifelike clarity that brings your <br /> team closer in meetings.</p>
                        </div>

                        <div>
                            <div className='w-8 h-8 p-5 border border-gray-100 bg-gray-100 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 -my-3 -mx-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                </svg>

                            </div>
                            <h3 className='font-semibold text-2xl leading-8 text-gray-900'>Noise-canceling audio</h3>
                            <p className='text-gray-600 leading-7 text-lg font-normal'>Say goodbye to distractions with our <br /> advanced audio tech for crisp, <br /> interruption-free conversations.</p>
                        </div>

                        <div>
                            <div className='w-8 h-8 p-5 border border-gray-100 bg-gray-100 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6 -my-3 -mx-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg>
                            </div>


                            <h3 className='font-semibold text-2xl leading-8 text-gray-900'>Scheduling made easy</h3>
                            <p className='text-gray-600 leading-7 text-lg font-normal'>Sreamline your agenda with ClearLink's <br /> intuitive scheduling. Set up meetings, <br /> send invitations, and receive reminders in <br /> one place.</p>
                        </div>

                        <div>
                            <div className='w-8 h-8 p-5 border border-gray-100 bg-gray-100 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 -my-3 -mx-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </div>

                            <h3 className='font-semibold text-2xl leading-8 text-gray-900'>Bank-grade security</h3>
                            <p className='text-gray-600 leading-7 text-lg font-normal text-wrap'>Your privacy is our priority with bank- <br />grade security protocols safeguarding <br /> your meetings and data from unwanted <br /> intruders.</p>
                        </div>
                    </div>
                    <div>
                        <img className='w-full h-96 relative mix-blend-overlay mr-38' src={Rectangle} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Company;