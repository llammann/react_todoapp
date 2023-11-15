import React from 'react'
import { useState } from 'react'

function SecondNumber() {
  const [second, setsecond] = useState(0)

  return (
    <>
    <input onKeyUp={(e)=>{
      console.log(e.target.value)
        setsecond(e.target.value)
      // console.log(first)

    }} 
    type="text" placeholder='Second Number'/>
    </>
  )
}

export default SecondNumber
