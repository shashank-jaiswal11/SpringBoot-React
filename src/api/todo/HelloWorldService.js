import axios from 'axios';

 class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:8085/hello');
    }
    executeHelloWorldPathvariableService(name){
        // let username = 'shashank'
        // let password = 'dummy'
        // let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8085/hellobean/${name}`);
    }

}
export default new HelloWorldService()