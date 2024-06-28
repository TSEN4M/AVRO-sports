import { Link } from "react-router-dom"
import React, { useState } from 'react'

import logo from "../assets/logo_white.png"
const Header = ()=> {
    let [open,setOpen]=useState(false);
   
  return (
    <>
       <header className="sticky top-0 z-10 bg-black text-white font-assistant text-xl">
            <nav className="flex flex-col w-full md:flex-row justify-between md:items-center md:h-[90px] md:w-[90vw]">
               <div>
                <Link to="/"><img className="ml-10 sm:mx-5 w-28 cursor-pointer" src={logo} alt="logo" /></Link>
               </div>
               <div onClick={()=>setOpen(!open)} className= 'text-white text-3xl absolute right-8 top-8 cursor-pointer md:hidden'>
               <ion-icon  name={open ? 'close':'menu'}></ion-icon>
               </div>
    
                <div className=" md:mt-0 md:pl-0 md:w-[80vw] md:flex md:justify-around bg-[#ccff00] md:bg-black md:text-white text-black font-bold ">
                    <ul className={` py-6 md:py-0 w-[100vw]  md:w-full md:flex md:justify-between items-center bg-[#ccff00]  md:bg-black absolute md:static transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                        <li className="hover:text-gray-300 py-2 md:py-0 text-center mx-1"><Link to="/" >HOME</Link></li>
                        <li className="hover:text-gray-300 py-2 md:py-0 text-center mx-1"><a href="#" >ABOUT US</a></li>
                        <li className="hover:text-gray-300 py-2 md:py-0 text-center mx-1"><a href="#" >CONTACT US</a></li>
                        <li className="text-center">
                            <button className="bg-black md:bg-[#ccff00] text-white md:text-black font-Assistant mx-1 my-2 px-5 py-2">
                                <Link to="/booking">BOOK MY SPORT</Link>
                            </button>
                        </li>
                        <li className="text-center">
                            <button className="bg-black md:bg-[#ccff00] text-white md:text-black font-Assistant mx-1 my-2 px-5 py-2">
                                <Link to="/community">COMMUNITY</Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header
