import React from 'react';

function Support() {
    return (
        <div className="max-w-7xl mx-auto flex justify-between gap-10 mb-40">
            <div className="flex flex-col">
                <p className='text-blue-700 text-lg font-semibold'>Support</p>
                <h2 className='font-semibold text-4xl text-gray-800 mb-2'>FAQs</h2>
                <p className='text-gray-500 font-normal text-xl '>Everything you need to know about the product and billing. Can&#39;t find the answer you&#39;re looking for? Please <span className='underline'>chat to our friendly team</span>.</p>
            </div>
            <div>
                <div className='border bg-gray-50 p-6 rounded-3xl'>
                    <div className='flex justify-between'>
                        <h5 className='text-gray-900 font-bold text-lg'>How many participants can join a ClearLink video conference?
                        </h5>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <p className='text-gray-600 text-lg font-normal'>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
                </div>

                <div className='flex justify-between my-5 mb-5'>
                    <h5 className='text-gray-900 font-bold text-lg'>
                        Can I use ClearLink on multiple devices?
                    </h5>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>

                <hr />

                <div className='flex justify-between my-5 mb-5'>
                    <h5 className='text-gray-900 font-bold text-lg'>
                        Is ClearLink compatible with other video conferencing platforms?
                    </h5>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>

                <hr />

                <div className='flex justify-between my-5 mb-5'>
                    <h5 className='text-gray-900 font-bold text-lg'>
                        How does ClearLink ensure the security of my video conferences?
                    </h5>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>

                <hr />

                <div className='flex justify-between my-5 mb-5'>
                    <h5 className='text-gray-900 font-bold text-lg'>
                        Do I need to download any software to use ClearLink?
                    </h5>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>

                <hr />

                <div className='flex justify-between my-5 mb-5'>
                    <h5 className='text-gray-900 font-bold text-lg'>
                        What kind of customer support does ClearLink provide?
                    </h5>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Support;
