import CryptoJS from "crypto-js";

export const decrypt = (hash,master_password_list) => {
    // iterates through a list of passwords, if it found one that matched then it would return the outcome of the password!
    master_password_list.forEach(password => {
        let values = {};
        try{
            values = JSON.parse(CryptoJS.AES.decrypt(hash,password).toString(CryptoJS.enc.Utf8));
        }catch (e) {
            // no errors should be shown since its known to fail.
        }
        if(values.readable){
            return values
        }

    });
        return {readable: false};
};
