import {React,useState, useNavigate} from 'react'
import { Link } from "react-router-dom";
import logo from "./hero.png";
import eazy from "./eazy.jpg"

function Registration() {
 const requirement =(e)=>{
   console.log(e.target.value);
   setwhichshow(e.target.value)

 }
 
  const [whichshow, setwhichshow] = useState("PERSONAL");
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
    <div>
    <img src={eazy}  className = "w-[full] h-[18rem] mt-1 "/>
          </div>

    <div className=' bg-blue-100 w-full flex'>
   
      <form className='  ml-4 flex' >
  
    <input type="text" name="name" placeholder='City' className='bg-gray-300 w-[10%] ' />

  <input type="text"placeholder='pickupaddress'  className='bg-gray-300 w-[10%] '/>
  <input type="text" placeholder='Dropoffaddress' className='bg-gray-300 w-[10%] ' />
  <input type= "tel" placeholder='enter mobile number'  className='bg-gray-300 w-[10%] ' />
  <input type="text"placeholder='name'  className='bg-gray-300 w-[10%] ' />
  
  <div >
  <select  className='bg-gray-300 w-[12rem]' onChange={requirement}>
    
    <option  ></option>
    <option >PERSONAL</option>
    <option >HOUSE SHIFTING</option>
    <option >DELIVERY</option>
    <option >BUSSINESS</option>
  </select>
  </div>
  <button type='button' className='bg-gray-300 w-[10%]' ><Link to ="/div">ESTIMATE  </Link></button>
</form>
</div>
 <div className=' bg-slate-200 w-full'>
<div className='bg-slate-100 w-[50%]  h-[4rem] float-left flex'>
  <h1 className='text-6xl text-slate-400  '>1 </h1>
  <p className='mt-4 font-extrabold  font-medium   text-xl '> Pickup and drop anywhere within the city</p>
</div>
<div className='bg-slate-100 w-[50%] h-[12rem]'>
<p className=' '>Choose your pickup {"&"} drop location from within the city
</p>
</div>

<hr className='outline-[18rem] outline-black '/>
 </div>
 
<div  className=' footer w-full h-[40rem] bg-black flex p-5'>
<div  className=' w-[23%] h-[10rem] float-left   bg-slate-700  text-white   m-2 p-9 list-none  text-center'>
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

export default Registration