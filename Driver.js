import {React, useState} from 'react'
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import Form from './Form';
function Driver() {
  const getname =(e)=>{
    console.log(e.target.value);
    setname(e.target.value);
  }
  const metname =(e)=>{
    console.log(e.target.value);
    setPhone(e.target.value);
  }
  const petname =(e)=>{
    console.log(e.target.value);
    setvehicle(e.target.value);
  }
  const jetname =(e)=>{
    console.log(e.target.value);
    setcity(e.target.value);
  }
  const retname =(e)=>{
    console.log(e.target.value);
    setsource(e.target.value);
  }
  const onSubmit = ()=>{
    setfullname(name);
  }

const [show, setshow] = useState(true);
const [name,setname]= useState("sagar");
const [Phone, setPhone] = useState("");
const [city, setcity] = useState("");
const [vehicle, setvehicle] = useState("");
const [source, setsource] = useState("");
const [fullname, setfullname] = useState("");

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
            <Link to="/" className='pr-2'>
            Become a driver
            </Link>
            </li>
     </nav>
    </div>
 <div className="mt-0 ml-2 rounded flex ">   

 <img src = {logo} className="relative w-full h-[26rem] bg-slate-800"  />
 <div>

  {
    show ?
<form className=' w-[20rem] h-[26rem]  bg-slate-800 border-solid  border-1 border-white  float-right text-center' onsubmit = {onSubmit}>

    <h1 className='text-white ' >Attach Vehicle Now</h1><br/>
    <input type="text"  placeholder='Name' onChange={getname} value={name} className='text-left p-1 w-[18rem] h-[2.5rem] rounded'/><br/><br/>

    <input type="tel" name='phone ' value="+91-"  placeholder='Mobile number' className=" w-[18rem] ml-3  h-[2.5rem] rounded flex" />
    <input type="tel" name='phone ' onChange={metname} placeholder=' Enter mobile number ' className='w-[18rem]  h-[2.5rem] ml-3 rounded flex -mt-10  pl-9 '/>
    <div className='w-[9rem] h-[3rem] justify-start float-left ml-3 bg-white  mt-5 text-center ' >
      <select className='w-[9rem] h-[3rem] bg-white ' onChange={jetname}>
    <option  >city</option>
    <option >indore</option>
    <option >pithampur</option>
    <option >dewas</option>
    <option >jaipur</option>
  </select>
  </div>
  <div className='w-[9rem] h-[3rem] justify-start float-left  ml-[0.5rem]  bg-white text-center   mt-5' >
    <select className='w-[9rem] h-[3rem] bg-white'onChange={petname}>
    <option  >Vehicle</option>
    <option >Tata ace</option>
    <option >Truck</option>
    <option >Bike</option>
    <option >Loader</option>
  </select>
  </div>
  <div><select className='w-[18rem] h-[3rem] bg-white  mt-6 'onChange={retname}>
    <option  >Source</option>
    <option >Ads</option>
    <option >News</option>
    <option >Newspaper</option>
    <option >Friend</option>
  </select>
  </div>
  <button type='button' className='bg-blue-500 w-[20rem] h-[3rem] mt-5 '  onClick={() =>setshow(!show) }>REGISTER</button>
 

    </form> : <Form />
   
  
  }
            
  

   

    </div>
   
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
              Home my-0 
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

export default Driver