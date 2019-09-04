import Axios from 'axios';

const API = {
    authenticate: () => {
        return this.doPostCall("http://")
    },

    doPostCall: (url,data) => Axios.post(url,data,{})
};
export default API;
