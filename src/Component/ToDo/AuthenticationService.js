

class AuthenticationService {

    registerSuccessfulLogin(username,password){
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username);
       // this.setupAxiosInterceptors();
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }
    getUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ''
        return user
    }
    // setupAxiosInterceptors() {
    //     let username = 'shashank'
    //     let password = 'dummy'

    //     let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

    //     axios.interceptors.request.use(
    //         (config) => {
    //             if(this.isUserLoggedIn()) {
    //                 config.headers.authorization = basicAuthHeader
    //             }
    //             return config
    //         }
    //     )
    // }
}

export default new AuthenticationService()