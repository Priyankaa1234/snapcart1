'use client'
import { ArrowBigLeftDash, EyeIcon, EyeOff, Key, Leaf, LockKeyhole, Mail, User } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
type propType={
previouStep:(s:number)=>void
}

function RegisterForm({previouStep}:propType) {
  const [Name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const[showpassword , setshowpassword]=useState(false)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative'>
        <div className='absolute top-6 left-6 flex item-center gap-2 text-green-700 hover:text-green-800 transition-colors cursor-pointer'
        onClick={()=>previouStep(1)}
        >
            <ArrowBigLeftDash className='w-5 h-5'/>  
            <span className='font-medium'>Back</span>
        </div>
          <motion.h1
          initial={{
            y:-10,
            opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:0.6
          }}
           className='text-4xl font-extrabold text-green-700 mb-2'>Create Account</motion.h1>
           <p className='text-grey-600 mb-8 flex item-center'>Join Snapcart today <Leaf className='w-5 h-5 text-green-600'/></p>
           <motion.form
           initial={{
            opacity:0
          }}
          animate={{
            opacity:1
          }}
          transition={{
            duration:0.6
          }} className='flex flex-col gap-5 w-full max-w-sm'>

            <div className='relative'>
              <User className='absolute left-3 top-3.5 h-5 w-5 text-grey-400'/>
              <input type="text" placeholder='Your Name'className='w-full border border-grey-300 rounded-xl py-3 pl-10 pr-4 text-grey-800 focus:ring-2 focus:ring-green-500 focus:outline-none'
              onChange={(e)=>setName(e.target.value)}
              value={Name}
              />
            </div>

            <div className='relative'>
              <Mail className='absolute left-3 top-3.5 h-5 w-5 text-grey-400'/>
              <input type="text" placeholder='Email 'className='w-full border border-grey-300 rounded-xl py-3 pl-10 pr-4 text-grey-800 focus:ring-2 focus:ring-green-500 focus:outline-none'
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              />
            </div>

            <div className='relative'>
              <LockKeyhole className='absolute left-3 top-3.5 h-5 w-5 text-grey-400'/>
              <input type={showpassword?"text":"password"} placeholder='Password'className='w-full border border-grey-300 rounded-xl py-3 pl-10 pr-4 text-grey-800 focus:ring-2 focus:ring-green-500 focus:outline-none'
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              />
              {
                showpassword?<EyeOff className='absolute right-3 top-3.5 w-5 h-5 text-grey-500 cursor-pointer' onClick={()=>setshowpassword(false)}/>:<EyeIcon className='absolute right-3 top-3.5 w-5 h-5 text-grey-500 cursor-pointer'
                onClick={()=>setshowpassword(true )}/>
              }
            </div>

            


           </motion.form>
        
    </div>
  )
}

export default RegisterForm