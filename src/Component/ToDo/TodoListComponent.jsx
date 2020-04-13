import React, {Component} from 'react'
import TodoService from '../../api/todo/TodoService.js'
import AuthenticationService from '../ToDo/AuthenticationService.js'

export default class ListTodosComponent extends Component {
    constructor(props){
        console.log('inside constructor')
        super(props)
        this.state = {
            todos :[],
            message:null 
             
        }
        this.deleteTodos=this.deleteTodos.bind(this);
        this.refreshTodos=this.refreshTodos.bind(this);
        this.updateTodos=this.updateTodos.bind(this);
        this.addClick=this.addClick.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }
    componentDidMount(){
        console.log('inside did mount')
       this.refreshTodos();
       
    }
    refreshTodos(){
        console.log('inside refresh')
        let username= AuthenticationService.getUserName();
        TodoService.executeTodoGetAllService(username).then(
            response => {
                console.log(response);
                this.setState({
                    todos:response.data
                })
            }
        )
    }
    render() {
        
        console.log('inside render')
        return (
            <div>
                 <h1>List Todos</h1>
                { this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                 <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                                <th>Update</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.completed.toString()}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodos(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodos(todo.id)}>Delete</button></td>
                                    </tr>
                            )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addClick}>Add</button>
                    </div>
                 </div>
                 
            </div>
        )
    }
    deleteTodos(id){
        let username= AuthenticationService.getUserName();
        TodoService.executeTodoDeleteByIdService(username,id).then(
            response =>{
                this.setState({ message:`Successfully Deleted the record for ${id}`})
                this.refreshTodos();
            }
        )

    }
    updateTodos(id){
        this.props.history.push(`/todos/${id}`)

    }
    addClick(){
        this.props.history.push(`/todos/-1`)
    }
}

