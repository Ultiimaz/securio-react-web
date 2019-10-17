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
    register: (first_name,last_name,email,password) => {
        return API.POSTRequest('register',{
            first_name,
            last_name,
            email,
            password
        })
    },
    newPassword: (application_name,encrypted_data) => {
        return API.POSTRequest('password',{
            data: encrypted_data,
            application_name: application_name
        })
    },
    credentials: () => {
        return API.GETRequest('password');
    },
    user: () => {
        return API.GETRequest('user');
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
    UPDATERequest: (url:string,params:object = {},authenticated:boolean = true) =>Axios.post(URLConfig.protocol+'://'+URLConfig.address+'/'+url,params,!authenticated?undefined:{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem(TokenProperties.name)
        }
    }),
    DELETERequest: (url:string,params:object = {},authenticated:boolean = true) =>Axios.post(URLConfig.protocol+'://'+URLConfig.address+'/'+url,params,!authenticated?undefined:{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem(TokenProperties.name)
        }
    }),

};
