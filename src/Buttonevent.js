import React from "react";

class Buttonevent extends React.Component
{
    constructor()
    {
        super();
        this.state={buttonText:"Click Me Please"};
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(()=>{
           return {buttonText:"Thanks, Been Clicked !"};
        });
    }

    render(){
        const {buttonText}=this.state;
        return <button onClick={this.handleClick}>{buttonText}</button>
    }
}

export default Buttonevent;