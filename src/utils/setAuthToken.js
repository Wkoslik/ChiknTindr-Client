//This utility will add the authorized users JWT to the request header
//any protected routes will require JWT to access them
import axios from 'axios'

const setAuthToken = token =>{
    if(token){
        //apply the token to every request header
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        console.log(axios.defaults.headers.common)
    } else{
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthToken