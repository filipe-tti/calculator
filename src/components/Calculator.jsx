import React, {useState} from 'react'
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculator() {
  
  const[num, setNum] = useState(0)
  const[oldNum, setOldNum] = useState(0)
  const[operator, setOperator] = useState()

  function inputNum(e){
    var input = e.target.value

    if(num===0){
      setNum(input)
     }
     else{
      setNum(num + input)
     }

    
  }

  function clear(){
    setNum(0)
  }

  function porcentage(){
     setNum(num/100) 
  }

  function changeSign (){
    if(num>0){
      setNum(-num)
    }else{
      setNum(Math.abs(num))
    }
  }

  function operatorHandler(e){
      var operatorInput=e.target.value
      setOperator(operatorInput)
      setOldNum(num)
      setNum(0)
  }

  
  
  
  function calculate(){
      
    if(operator ==='/'){
      setNum(oldNum/num)
    }

    else if(operator==='X'){
      setNum(oldNum*num)
    }

    else if(operator==='+'){
      setNum(parseFloat(oldNum)+ parseFloat(num))
    }

    else if(operator==='-'){
      setNum(oldNum-num)
    }
    
    
    console.log(oldNum)
      console.log(operator)
      console.log(num)
  }

 
  
  return (

    
    <div>
      
      <Box m={5} />
   
    <Container maxWidth="xs">
    
    <div className='wrapper'>

        <Box m={12} />

        <h1 className='resultado'>{num}</h1>

        <button className='grey' onClick={clear}>AC</button>
        <button className='grey' onClick={changeSign}>+/-</button>
        <button className='grey' onClick={porcentage}>%</button>
        <button className='orange' onClick={operatorHandler} value={'/'}>/</button>
        <button className='grey' onClick={inputNum} value={7}>7</button>
        <button className='grey' onClick={inputNum} value={8}>8</button>
        <button className='grey' onClick={inputNum} value={9}>9</button>
        <button className='orange' onClick={operatorHandler} value={'X'}>X</button>
        <button className='grey' onClick={inputNum} value={4}>4</button>
        <button className='grey' onClick={inputNum} value={5}>5</button>
        <button className='grey' onClick={inputNum} value={6}>6</button>
        <button className='orange'  onClick={operatorHandler} value={'-'}>-</button>
        <button className='grey' onClick={inputNum} value={1}>1</button>
        <button className='grey' onClick={inputNum} value={2}>2</button>
        <button className='grey' onClick={inputNum} value={3}>3</button>
        <button className='orange' onClick={operatorHandler} value={'+'}>+</button>
        <button className='grey' onClick={inputNum} value={0}>0</button>
        <button className='grey' onClick={inputNum} value={'.'}>,</button>
        <button className='grey' style={{visibility: "hidden"}}>,</button>
        <button className='orange' onClick={calculate}>=</button>
      
    </div>

    </Container>

    </div>
  )
}
