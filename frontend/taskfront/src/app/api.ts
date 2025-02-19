
import { ACCESS_TOKEN } from "./constants"
import axios from "axios"


function api (){
    // creation d'une instance de axios 
    const api = axios.create({baseURL:'http://127.0.0.1:800'})
    //definition de l'entete a ajouter a chaque requette 
    api.interceptors.request.use(
        (config) => {
            //recuperation du token d'access
            const token =localStorage.getItem(ACCESS_TOKEN)
            if(token){
                //ajout du token d'access a l'entete de chaque requette
              config.headers.Authorization=`Bearer ${token}`
            }
          return config
        }
        
    )
 
}
export default api