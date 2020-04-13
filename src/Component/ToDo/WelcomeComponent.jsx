import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

export default class WelcomeComponent extends Component {
    constructor(){
        super();
        this.state={
            welcomemsg:''
        }
        this.getCustomizemsessage=this.getCustomizemsessage.bind(this);
        this.getSuccessResponse=this.getSuccessResponse.bind(this);
        this.handleError=this.handleError.bind(this);
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
                <div className="container ">Click here to get your customize message. <button className="btn btn-info" onClick={this.getCustomizemsessage}> Get Message </button>
                <div className="container ">
                    {this.state.welcomemsg}
                </div>
               
                </div>
                
                    
                
                </div>
            </>
        )        
    }

    getCustomizemsessage(){
       // HelloWorldService.executeHelloWorldService().then(response => this.getSuccessResponse(response))
        HelloWorldService.executeHelloWorldPathvariableService(this.props.match.params.name).then(response => this.getSuccessResponse(response))
        .catch(error => this.handleError(error))
    }

    getSuccessResponse(response){
        this.setState({
            welcomemsg:response.data.message
        })
           
    }
    handleError(error){
        console.log(error.response)
        let errorMessage = '';
        
        if(error.message) 
            errorMessage += error.message

        if(error.response && error.response.data) {
            errorMessage += error.response.data.message
        }

        this.setState({welcomemsg: errorMessage})
    }
}