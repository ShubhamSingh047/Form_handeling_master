import React,{useState} from 'react'

const FormExampleForm = () => {
  const[state, nextState]= useState({
    name:"", 
    rollNumber:"",
    checkbox:false
});

const inputHandler=(e)=>{
    e.preventDefault();
    const inputname=e.target.name;
    const value=e.target.value;
    nextState((prevState)=> {
        return{...prevState,[inputname]:[value]}
    })
}

const checkedHandler=(e)=>{
    nextState((prevState)=>{
        return{...prevState,[e.target.name]:e.target.checked}
    })
}

return(
  <>
    <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={inputHandler}/>
        <br />
        <label htmlFor="roll_numb">Roll Number:</label>
        <input type="number" id="roll_numb" name="rollNumber" onChange={inputHandler}/>
        <br/>
        <label htmlFor="check_box">Term & Condition:</label>
        <input type="checkbox" id="check_box" name="checkbox" onChange={checkedHandler}/>
        <br/>
        <input type="submit" value="Submit"/>
    </form>
    {JSON.stringify(state)}
  </>
  )
}

export default FormExampleForm
