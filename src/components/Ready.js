import React from 'react';
import Mockup from "../assets/Screen-mockup.png";

function Ready() {
    return (
        <div className='mb-20 flex'>
            <div className='flex flex-col mx-60'>
                <h2 className='text-gray-900 text-5xl font-semibold mb-8'>Ready to clear the path to <br />  perfect communication?</h2>

                <p className='flex gap-3 text-gray-600 text-2xl font-normal mb-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 my-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    30 days free trial
                </p>
                <p className='flex gap-3 text-gray-600 text-2xl font-normal mb-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 my-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Cancel at any time
                </p>
                <p className='flex gap-3 text-gray-600 text-2xl font-normal mb-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 my-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Access to all features
                </p>
                <p className='flex gap-3 text-gray-600 text-2xl font-normal mb-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 my-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Personalized onboarding
                </p>
                <div className='space-x-2 mr-2 my-7'>
                    <button className='text-gray-700 border border-gray-400 bg-white rounded-full p-2 text-xs font-bold '>Talk to sales</button>

                    <button className='text-white border bg-blue-700 rounded-full p-4 text-xs font-bold '>Sign up for free</button>
                </div>
            </div>



            <div className='-mx-20'>
                <img className='border-solid border-8 border-b-0  border-black rounded-t-3xl' src={Mockup} alt="screen mockup" />
            </div>

        </div>
    );
};

export default Ready;
