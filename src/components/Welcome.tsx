'use client'
import React  from 'react'
import { motion } from "framer-motion"
import { ArrowBigRightDash, ShoppingBasket, TruckElectric } from 'lucide-react'
type propType={
nextStep:(s:number)=>void

}

function Welcome({nextStep}:propType) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-6'>
      <motion.div
      initial={{
        opacity:0,
        y:-10
      }}
      animate={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:0.6
      }}
      className='flex items-center gap-3'
      >
      <ShoppingBasket className='w-10 h-10 text-green-600' />
      <h1 className='text-4xl md:text-5xl font-extrabold text-green-700'>Snapcart</h1>
      
      </motion.div>
    <motion.p
     initial={{
        opacity:0,
        y:10
      }}
      animate={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:0.6,
        delay:0.3
      }}
      className='mt-4 text-grey-700 text-lg md:text-xl max-w-2xl text-center'

    >
      <span className="block">
    Fresh groceries, delivered at your doorstep — fast, reliable.
  </span>
  <span className="block mt-1">
    Order now. Unpack in minutes.
  </span>

    </motion.p>
    <motion.div
    initial={{
        opacity:0,
        scale:0.9
      }}
      animate={{
        opacity:1,
        scale:1
      }}
      transition={{
        duration:0.6,
        delay:0.6
      }}
      className='flex item-center justify-center gap-10 mt-7'

    >
      <ShoppingBasket className='w-22 h-22 md:w-30 md:h-30 text-green-600 drop-shadow-md'/>
      <TruckElectric className='w-22 h-22 md:w-30 md:h-30 text-orange-500 drop-shadow-md'/>
    </motion.div>

    <motion.button
    initial={{
        opacity:0,
        y:20
      }}
      animate={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:0.6,
        delay:0.8
      }}
      className='inline flex item-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-md transition-all duration-200 mt-5'
      onClick={()=>nextStep(2)}
    >
      <ArrowBigRightDash />




    </motion.button>
   

    </div>
  )
}

export default Welcome