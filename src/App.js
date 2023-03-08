import React, { useState } from 'react';
//import Buttoncounter from './Buttoncounter';
// import Buttonevent from './Buttonevent';
// import List  from './List';
import './assets/css/bootstrap.min.css';
import './App.css';

//import Loginevent from './Loginevent';

//import Greeting from './Greeting';
//import LoginControl from './LoginControl';
function App() {
  const [name,setName] =useState("");
  const [handleText,setHeading] =useState();
  function handleChange(event){
    //console.log("Data Changed");
    console.log(event.target.value); 
    setName(event.target.value);
    /*console.log(event.target.type);
    console.log(event.target.placeholder); */
  }
  function handleClick(event){
    //console.log("Submit");
    setHeading(name);
    event.preventDefault();
  }
  return (
    <>
    
    <section>
      <div className='container'>
         <div className='row'>
            <div className='col-md-4'>&nbsp;</div>
            <div className='col-md-4'>
               <div className='mt-5'>
                   <h3>Hello {name}</h3>
                   <h3>Hello After {handleText}</h3>
                   <form onSubmit={handleClick}>
                    <input onChange={handleChange} className='form-control' type='text' placeholder='Enter Your Name' value={name} />
                    <div className='mt-3'>
                        <button type='submit' className='btn btn-info text-white'>Sumbit</button>
                    </div>
                   </form>
               </div>
            </div>
            <div className='col-md-4'>&nbsp;</div>
         </div>
      </div>
    </section>
    </>
  );
}

export default App;
