import  Axios from "axios";
import {TokenProperties} from "../config/TokenProperties";
import {URLConfig} from "../config/urls";

export const API = {
    authenticate: (email,password) => {
        return API.POSTRequest('authenticate',{
            email,
            password
        },false);
    },

    POSTRequest: (url:string,params:object = {},authenticated:boolean = true) =>Axios.post(URLConfig.protocol+'://'+URLConfig.address+'/'+url,params,!authenticated?undefined:{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem(TokenProperties.name)
        }
    }),
    GETRequest: (url:string,params:object = {},authenticated:boolean = true) =>Axios.get(URLConfig.protocol+'://'+URLConfig.address+'/'+url,!authenticated?undefined:{
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem(TokenProperties.name)
    }
}),
    user: () => {
        return API.GETRequest('user');
    },
};
