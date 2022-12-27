import React from "react";

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:1,
            username:"sathish"
        };
    }

    render(){
        return(
            <div>
            <p>{this.state.id}</p>
            <p>{this.state.username}</p>
            </div>
        );
    }
}

export default Test;