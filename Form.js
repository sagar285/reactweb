import {React,useState} from 'react'

function Form() {
  const [show, setshow] = useState(false);
  return (
    <div className='bg-slate-800'><form className=' w-[20rem] h-[24rem]  rounded bg-white border-solid  border-1 border-white  float-right text-center'>

    <h1 className=' text-slate-700  bg-transparent text-4xl ' >THANK YOU FOR REGISTRATION</h1><br/>
   

    <h3 className=''>We will get back to you shortly</h3>
  

    
  
  
  <button type='submit' className='bg-blue-500 w-[20rem] h-[3rem] mt-[12rem] ' onClick={() =>setshow(true) }>REGISTER</button>
 

    </form> </div>
  )
}

export default Form