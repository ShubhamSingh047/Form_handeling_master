import {useEffect, useState} from 'react'

const Single_Handeling = () => {
    const [state, setState]=useState(2); //3
    const [state1, setState1]=useState(2); //3
    const [state2, setState2]=useState(2); //3
    const [state3, setState3]=useState(2); //3
    const Handler = () =>{
        setState(state+1)
    }
    useEffect(()=>{
        
    },[state1, state3])
  return (
    <>
    <h1>{state}</h1>
    <button onClick={Handler}>click</button>
    </>
  )
}

export default Single_Handeling