import React from "react";
import './assets/css/bootstrap.min.css';


class LoggingEvent extends React.Component
{
    constructor(props){
        super()
        console.log(this)
    }

    handleClick(){
        console.log("Class Method is working");
        console.log(this);
    }
    handleMyClick=(e)=>{
       alert("Clicked.");
       console.log(e);
    }

    render(){
        return(
            <div>
                 <button onClick={this.handleMyClick} className="btn btn-primary">ClickME</button>
            </div>
        )
    }
}

export default LoggingEvent;