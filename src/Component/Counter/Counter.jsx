import React, {Component} from 'react';
import './Counter.css';

export default class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    }
    render(){
        return(
            <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10}incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <div><button onClick={this.reset}> Reset</button></div>
           
            <span className="count">{this.state.counter}</span>
            </div>
        );
    
}
reset(){
    this.setState({
        counter: 0
    });
}
increment(by){
    this.setState({
        counter: this.state.counter + by
    });
}
decrement(by){
    this.setState({
        counter: this.state.counter - by
    });
}
}

class CounterButton extends Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
        //this.increment=this.increment.bind(this);
        //this.decrement=this.decrement.bind(this);
    }
    render() {
        return(
            <div className="counter">
             <button onClick={() =>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
             <button onClick={() =>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
           
          </div>
      
        );
    }
    
//     increment(){
//         this.setState({
//             counter: this.state.counter + this.props.by
//         });
//         this.props.incrementMethod(this.props.by)
    
// }
//     decrement(){
//     this.setState({
//         counter: this.state.counter - this.props.by
//     });
//     this.props.incrementMethod(this.props.by)
//     this.props.decrementMethod(this.props.by)

//}
}


