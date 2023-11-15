import React from 'react'

function Additon({firstnum}) {
  const addOp=(e)=> {
    console.log(firstnum)
  }
  return (
   <>
   <button onClick={addOp}>Additon</button>
   </>
  )
}

export default Additon

