export const rootReducer = (state = {},action) =>{
    switch(action.type) {
        case "GET_USER_INFO":
            return state.user;

        case "GET_AUTH_TOKEN":
            return state.authToken;

        case "SET_USER_INFO":
            return state.user = action.payload;

        case "SET_PASSWORDS":
             state.passwords = action.payload;
            return {...state};

        case "SET_MASTER_PASSWORD":
            state.master_password = action.payload;
            return {...state};

        case "SET_ERROR":
            return state.error = action.payload;
        default:
            return state
    }
};
