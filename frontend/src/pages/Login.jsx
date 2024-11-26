import React, { useState } from 'react'

const login = () => {
  const[state,setState]=useState('SignUp')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[name,setName]=useState('')

  const onSubmitHandler =async(event)=>{
    event.preventDefault()
    // API call to register or login user

  }
  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border text-zinc-600 text-sm shadow-lg rounded-lg'>
        <p className='text-2xl font-semibold'>{state==='SignUp'?"Create Account":"Login"}</p>
        
        <p>Please {state==='SignUp'?"SIGN UP":"LOG IN"} to book appointment.</p>
        {
          state==="SignUp"&&<div className='w-full'>
          <p>Full Name</p>
          <input  className="border border-zinc-300 rounded w-full p-2 mt-1" type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        }
        
        <div className='w-full'>
          <p>Email</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state==='SignUp'?"Create Account":"Login"}</button>
        {
          state==='SignUp' ?<p>Already have an account?<span onClick={()=>setState('Login')} className='text-primary cursor-pointer underline'>Login Here</span></p>
          :<p>Create an New Account?<span onClick={()=>setState('SingUp')} className='text-primary cursor-pointer underline'>click here</span> </p>
           
        } 
      </div>

    </form>
  )
}

export default login
