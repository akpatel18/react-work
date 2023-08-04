import './App.css';
import { useState } from "react";

function Increment(){
  const [number, opporator] = useState(0)

  return (
    <div className="Increment">
      <h1 className='header'>{number}</h1>
      <button className="buttonAdd"
        type="button"
        onClick={() => opporator(number+1)}
      >Add</button>
      <button className="buttonSub"
        type="button"
        onClick={() => opporator(number-1)}
      >Subtract</button>
    </div>
  )
}

export default Increment;
