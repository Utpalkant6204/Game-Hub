import  Axios  from "axios";

export default Axios.create({
    baseURL : 'https://api.rawg.io/api',
    params :{
        key : '8857803a44ed4ca592b521e3123c10e3'
    }
})