import './App.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'

function App() {

  //state to hold values
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInterest] = useState(0)

  //conditionally render
  const [isPrinciple,setIsPrinciple] = useState(true)
  const [isRate,setIsRate] = useState(true)
  const [isYear,setIsYear] = useState(true)


  const validate=(e)=>{
    const {name,value} = e.target
    console.log(name);
    console.log(value);
    //regular expression  - value.match(/^[0-9]*$/)

    // console.log(!!value.match(/^[0-9]*$/));

    if(!!value.match(/^[0-9]*$/))
    {
      if(name=='principle')
      {
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name=='rate')
      {
        setRate(value)
        setIsRate(true)
      }
      else
      {
        setYear(value)
        setIsYear(true)
      }
    }
    else
    {
      if(name=='principle')
      {
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if(name=='rate')
      {
        setRate(value)
        setIsRate(false)
      }
      else
      {
        setYear(value)
        setIsYear(false)
      }
    }

  }

  //function to reset
  const handleReset = () => {
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }

  //function to calculate simple interest
  const handleCalculate = () => {
    setInterest((principle*rate*year)/100)
  }

  return (
     <>
      <div className='main'>
        <div className='sub p-5'>
          <h1>Simple Interest App</h1>
          <p>Calculate your Simple Interest Easily</p>

          <div className='result w-100 d-flex justify-content-center align-items-center rounded mt-5 shadow flex-column'>
            <h1>₹ {interest}</h1>
            <p>Total Simple Interest</p>
          </div>

          <form action="" className='mt-5'>
            <TextField id="outlined-basic" name='principle' value={principle || ''} label="₹ Principle Amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
            {!isPrinciple  && <p className='text-danger'>Invalid Input</p>}
            <TextField id="outlined-basic" name='rate' value={rate || ''} label="Rate of Intrest (p.a) %" variant="outlined" className='w-100 mt-3' onChange={(e)=>validate(e)}/>
            {!isRate && <p className='text-danger'>Invalid Input</p>}
            <TextField id="outlined-basic" name='year' value={year || ''} label="Year (Yr)" variant="outlined" className='w-100 mt-3' onChange={(e)=>validate(e)}/>
            {!isYear && <p className='text-danger'>Invalid Input</p>}

            <div className='d-flex mt-4 justify-content-between'>
              <Button variant="contained" color='success' className='w-50 p-3' disabled={isPrinciple && isRate && isYear?false:true} onClick={handleCalculate}>Calculate</Button>
              <Button variant="outlined" color='primary' className='w-50 p-3 ms-3' onClick={handleReset}>Reset</Button>
            </div>

          </form>

        </div>
      </div>
    </>
  )
}

export default App
