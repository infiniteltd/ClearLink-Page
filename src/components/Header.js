import React from 'react';
import ClearlinkLogo from '../assets/Group-1.png';
import { ExpandMore } from '@mui/icons-material';


function Header() {
    return (
        <div className='max-w-7xl mx-auto flex p-3 border border-gray-300 mt-4 rounded-full bg-gray-100'>
            <div className='flex flex-grow space-x-2 mx-2 cursor-pointer'>
                <img src={ClearlinkLogo} />
                <h2 className='font-bold text-xl mt-1.5'>ClearLink<span className='text-blue-500 text-lg'>.</span></h2>
            </div>

            <div className='flex flex-grow items-center text-gray-500 gap-5 text-lg font-medium cursor-pointer'>

                <h3>
                    Products
                    <ExpandMore />
                </h3>


                <h3>Solutions

                    <ExpandMore className='items-center !important ' />
                </h3>


                <h3>Resources

                    <ExpandMore className='items-center !important' />
                </h3>


                <h3>Pricing</h3>
            </div>

            <div className='space-x-2 mr-2'>
                <button className='text-gray-700 border border-gray-400 bg-white rounded-full p-2 text-xs font-bold'>Talk to sales</button>

                <button className='text-white border bg-blue-700 rounded-full p-3 text-xs font-bold'>Sign up for free</button>
            </div>
        </div>
    );
}

export default Header;
