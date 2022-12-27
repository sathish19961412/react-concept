import React from 'react';


class Buttoncounter extends React.Component{
    constructor(props)
    {
        super(props);

        //Must initialize state first
        this.state={count:0};
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
                <div className='click-count'>
                     Button Presses:{this.state.count}
                </div>
                <button onClick={this.handleClick.bind(this)}>
                    Add One
                </button>
                
         </div>
      );
   }
}

export default Buttoncounter;