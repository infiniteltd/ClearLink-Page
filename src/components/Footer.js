import React from 'react';
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import GitHub from "../assets/github.png";
import Youtube from "../assets/youtube.png";


function Footer() {
    return (
        <footer className='flex max-w-7xl mx-auto justify-between'>
            <p className='text-gray-400 font-semibold text-sm'>&copy; 2023 ClearLink. All rights reserved</p>
            <div className='flex gap-6 cursor-pointer'>
                <img className='w-5 h-5' src={LinkedIn} alt="linkedin" />
                <img className='w-5 h-5' src={Twitter} alt="twitter" />
                <img className='w-5 h-5' src={Facebook} alt="facebook" />
                <img className='w-5 h-5' src={Instagram} alt="instagram" />
                <img className='w-5 h-5' src={GitHub} alt="github" />
                <img className='w-5 h-5' src={Youtube} alt="youtube" />
            </div>
        </footer>
    );
}

export default Footer;