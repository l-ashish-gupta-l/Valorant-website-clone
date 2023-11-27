import React from 'react'
import logo from '../assest/logo.jpg'
import logovector from '../assest/logovector.png'
import searchlogo from "../assest/searchlogo.png"
import english from "../assest/english.png"
function Navbar() {
    return (
        <nav className='bg-black w-full  px-5  h-16 flex ' >
            <div className="left flex justify-evenly items-center w-3/4 h-full">
                <img src={logo} alt="logo" />
                <img src={logovector} alt="logo" />
                <ul className='flex justify-evenly font-bold w-4/5 text-white '>
                    <li><a href="#home">GAME INFO</a></li>
                    <li><a href="#home">MEDIA</a></li>
                    <li><a href="#home">NEWS</a></li>
                    <li><a href="#home">LEADERBOARDS</a></li>
                    <li><a href="#home">SUPPORTS</a></li>
                    <li><a href="#home">OUR SOCIALS</a></li>
                    <li><a href="#home">MORE</a></li>
                </ul>

            </div>
            <div className="right flex  w-1/4 gap-7  justify-end items-center">
                <button className='bg-black p-1 text-white'>
                 <img src={searchlogo}/>
                </button>
                <button className=' text-white'>
                 <img src={english} />
                </button>
                <button className='w-[112.23px] h-8 pl-[18.22px] pr-[18.02px] py-2 bg-gradient-to-r from-red-500 via-red-500 to-red-400 rounded-xl  items-center inline-flex font-bold text-black'>PLAY NOW</button>

            </div>
        </nav>
    )
}

export default Navbar