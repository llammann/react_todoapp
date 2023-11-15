import { useState } from 'react'
import './App.css'
import FirstNumber from './FirstNumber'
import SecondNumber from './SecondNumber'
import Addition from './addition'
import Subtraction from './Subtraction'
import Multiplication from './Multiplication'
import Division from './Division'
import Result from './Result'

function App({firstnumber}) {
  const [first, setfirst] = useState(firstnumber);

  return (
    <>
    <h1>Calculator</h1>
      <FirstNumber />{<br/>}
      <SecondNumber/>{<br/>}
      <Addition  firstnum={first} />
      <Subtraction/>
      <Multiplication/>
      <Division/>
      <Result/>
    </>
  )
}

export default App