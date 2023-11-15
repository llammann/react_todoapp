import React from 'react'
import { useState } from 'react'

function FirstNumber(){
  const [first, setfirst] = useState(0)
  // console.log(e)

  const handleInputChange = (e) => {
    console.log(e.target.value)
    setfirst(e.target.value);
  };



  return (
    <>
    <input onKeyUp={handleInputChange}
    firstnumber={first}
     type="number" placeholder='First Number'/>
    </>
  )
  }
export default FirstNumber


