import React from 'react';
import AI from '../assets/Frame-10.png';
import Image1 from "../assets/animoji-1.png";
import Image2 from "../assets/animoji-2.png";
import Image3 from "../assets/animoji-3.png";
import Image4 from "../assets/animoji.png";
import Image5 from "../assets/animoji-8.png";
import Image6 from "../assets/image-100.png";
import Stars from "../assets/Stars.svg";
import Avatar1 from "../assets/Avatar.png";
import Avatar2 from "../assets/Avatar1.png";
import Avatar3 from "../assets/Avatar2.png";
import Avatar4 from "../assets/Avatar3.png";
import Avatar5 from "../assets/Avatar4.png";


function Hero() {
    return (
        <>

            <div className='flex justify-between p-10 mt-20 mb-10'>
                <div className='flex flex-col mt-1'>
                    <h1 className='font-semibold text-6xl text-gray-800 leading-16 mb-4 mt-1'>Uniting the world, <br /> one video call at a time</h1>
                    <p className='text-xl font-normal text-gray-500 leading-7'>Experience the future of communication with ClearLink – <br /> where crystal-clear video conferencing meets <br /> unparalleled simplicity. </p>

                    <div className='flex mt-7'>
                        <button className='text-white border bg-blue-700 rounded-full p-3 text-xs font-bold'>Start your free trial</button>
                        <div className='flex items-center mx-3'>
                            <img className='w-5 h-5 mb-1' src={AI} alt="AI" />
                            <p className='text-sm font-bold text-blue-700 mx-2'>
                                Discover AI assistant
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row my-8'>
                        <div className='flex'>
                            <img className='-mx-4' src={Avatar3} alt="" />
                            <img className='-mr-4' src={Avatar4} alt="" />
                            <img className='-mr-4' src={Avatar5} alt="" />
                            <img className='-mr-4' src={Avatar1} alt="" />
                            <img className='-mr-4' src={Avatar2} alt="" />
                        </div>
                        <div className='mx-6'>
                            <div className='flex'>
                                <img className='w-12' src={Stars} alt="" />
                                <p className='text-xs font-bold mx-1'>5.0</p>
                            </div>
                            <p className='text-sm'>from 3,000<span className='text-xs items-center'>+</span> reviews</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-5/12 border border-blue-200 bg-blue-50 rounded-2xl'>
                    <div className='grid grid-cols-3 p-4'>
                        <img className='p-2' src={Image2} alt="" />
                        <img className='p-2' src={Image6} alt="" />
                        <img className='p-2' src={Image5} alt="" />
                        <img className='p-2' src={Image4} alt="" />
                        <img className='p-2' src={Image1} alt="" />
                        <img className='p-2' src={Image3} alt="" />
                    </div>

                    <div className=' flex items-center space-x-4 justify-center mb-6 cursor-pointer'>
                        <div className='w-8 h-8 p-5 border border-gray-100 bg-white rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 -my-3 -mx-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                            </svg>
                        </div>

                        <div className='w-8 h-8 p-5 border border-gray-100 bg-white rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 -my-3 -mx-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </div>

                        <div className='w-8 h-8 p-5 border border-gray-100 bg-white rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 -my-3 -mx-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                            </svg>
                        </div>

                        <div className='w-8 h-8 p-5 border border-gray-100 bg-white rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 -my-3 -mx-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg>
                        </div>

                        <div className='w-8 h-8 p-5 border border-gray-100 bg-white rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 -my-3 -mx-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                            </svg>
                        </div>

                        <div className='w-8 h-8 p-5 border border-gray-100 bg-white rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 -my-3 -mx-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>


                    </div>
                </div>
            </div>


        </>
    );
}

export default Hero;