import axios from 'axios';

class TodoService{
    executeTodoGetAllService(username){
        return axios.get(`http://localhost:8085/jpa/users/${username}/todos`);
    }
    executeTodoDeleteByIdService(username,id){
        return axios.delete(`http://localhost:8085/jpa/users/${username}/todos/${id}`);
    }
    executeTodoGetByIdService(username,id){
        return axios.get(`http://localhost:8085/jpa/users/${username}/todos/${id}`);
    }
    executeUpdateTodoService(username,id,todo){
        return axios.put(`http://localhost:8085/jpa/users/${username}/todos/${id}`, todo);
    }
    executeInsertTodoService(username,todo){
        return axios.post(`http://localhost:8085/jpa/users/${username}/todos`, todo);
    }
   
   

}
export default new TodoService()