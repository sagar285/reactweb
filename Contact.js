import React from 'react'
import { Link } from "react-router-dom";
function Contact() {
  return (
   <>
    <div className="w-full h-[4rem] bg-black rounded-lg ">
      <nav className='flex text-white float-right py-4  list-none mr-8 '>

        <li>
      <Link to="/" className='pr-2'>
           Home
            </Link>
            </li>
            <li>
            <Link to="/About" className='pr-2'>
              About us
            </Link>
            </li>
            <li>
            <Link to="/contact" className='pr-2'>
              Contact us
            </Link>
            </li>
       <li >
            <Link to="/driver" className='pr-2'>
            Become a driver
            </Link>
            </li>
     </nav>
    </div>
    <div className='flex mt-[20rem]'>
  <div className=' w-[25%] h-[12rem] ml-16 mt-4 pt-16 bg-neutral-300 text-center'> CONTACT US  <br/>
   Eazyway@gmil.com</div>
  <div className=' w-[25%] h-[12rem] ml-16 mt-4 pt-16 bg-neutral-300 text-center'> CONTACT US  <br/>
  8120763387</div>
  <div className=' w-[25%] h-[12rem] ml-16 mt-4 pt-16 bg-neutral-300 text-center'> Contact us  <br/>
  <a href='https://www.instagram.com/itzzz.sagar_gupta/'>instagram</a></div>
  </div>


<div  className=' footer w-full h-[14rem] bg-black mt-[32rem] p-5'>
<div  className=' w-[23%] h-[10rem] float-left   bg-slate-700  text-white   m-2 p-9 list-none  text-center '>
<li >
            <Link to="/" className='p-2'>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className='p-2'>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className='p-2'>Home
            </Link>
            </li>
            <li >
            <Link to= "/" className='p-2' >
              Home
            </Link>
            </li>
</div>
<div  className=' w-[23%] h-[10rem] float-left bg-slate-700 text-white m-2 p-9 list-none  text-center'> <li >
            <Link to="/" className='pr-2'>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className='pr-2'>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className='pr-2'>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className='pr-2'>
              Home
            </Link>
            </li>
      </div>
<div  className=' w-[23%] h-[10rem] float-left bg-slate-700 text-white m-2 p-9 list-none  text-center'>  <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li></div>
<div  className=' w-[23%] h-[10rem] float-left bg-slate-700 text-white p-9
  m-2    list-none  text-center '>  <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li></div>

</div>
</>
  )
}

export default Contact