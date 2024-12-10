import React from "react";
class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count : 0
        }
    }
    increment=()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement=()=>{
        this.setState({
            count : this.state.count - 1
        })
    }
    reset(){
        this.setState({
            count: this.state.count -this.state.count
        })
    }
    render(){
        return(
            <>
            <div className="counter">
                <div><button class="but" onClick={this.increment}>+</button></div>
                <div><button class="but" id="counter-count">{this.state.count}</button></div>
                <div><button class="but" onClick={this.decrement}>-</button></div>
            </div>
            <div><button class="reset" onClick={this.reset}>Reset</button></div>
            </>
        );
    }    
}
export default Counter;