import React from 'react';
import './assets/css/bootstrap.min.css';
import LoggingEvent from './LoggingEvent';
function Loginevent()
{
    function handleClick()
    {
        console.log("I am working");
    }
    let MyEvent=()=>console.log("I am working arrow function");
  return(
     <div className='App'>
         <button onClick={handleClick} className="btn btn-success">Login</button>
         <button onClick={MyEvent} className="btn btn-info">Arrow Function</button>
         <LoggingEvent ></LoggingEvent>
     </div>

  );
}
export default Loginevent;