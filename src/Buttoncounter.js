import React from 'react';
import './assets/css/bootstrap.min.css';

class Buttoncounter extends React.Component{
    constructor(props)
    {
        super(props);

        //Must initialize state first
        this.state={count:0};
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
          count:this.state.count + 1
        },function(){
            console.log("Job's Done")
        });
    }

   render(){
      return(
         <div className='app'>
                <div className='click-count text-info'>
                     Button Presses:{this.state.count}
                </div>
                <button onClick={this.handleClick} className="btn btn-success">
                    Add One
                </button>
                
         </div>
      );
   }
}

export default Buttoncounter;