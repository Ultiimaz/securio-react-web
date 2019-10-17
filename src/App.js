import React, {useEffect, useState} from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import {Homepage} from "./views/Homepage";
import Dashboard from "./views/Dashboard";
import SomethingWentWrong from "./views/General/SomethingWentWrong";
import NewPassword from "./views/General/NewPassword";
import {useDispatch, useSelector} from "react-redux";
import Authentication from "./views/Authentication";
import AdministrationPage from "./views/AdministrationPage";
import ListCredential from "./views/General/ListCredential";
import {TokenProperties} from "./config/TokenProperties";
import {API} from "./Networking/API";
import SignUp from "./views/SignUp";
import MasterPassword from "./views/InitialSteps/MasterPassword";
import MasterPasswordDialog from "./components/MasterPasswordDialog";

function App() {
    const [authenticated,setAuthenticated] = useState(false);
    const [user,setUser] = useState({});
    const [token,setToken] = useState(null);
    const [error, setError] = useState(false);
    const masterPassword = useSelector(state => state.master_password);
    const dispatch = useDispatch();
    useEffect(() => {
        setToken(localStorage.getItem(TokenProperties.name));
    },[]);

    useEffect(() => {
    if(token){

            API.user()
            .then(response => {
                setUser(response.data);
                dispatch({
                    type: 'SET_USER_INFO',
                    payload: response.data
                });
                setAuthenticated(true);

                API.credentials()
                    .then(response => {
                        dispatch({
                            type: 'SET_PASSWORDS',
                            payload: response.data
                        });
                    }).catch(err=>{
                    console.error(err);
                });
            })
            .catch(fetchError =>
            {
                setAuthenticated(false);
            });

    }


    },[token]);
  if(!authenticated)
  {
      return<Router>
          <Route exact path={'/register'} component={SignUp} />
          <Route exact path="/" component={Homepage} />
              <Route exact path="/authenticate" component={Authentication} />
      </Router>
  }

  if(error){
      return <SomethingWentWrong />
  }

  if(!masterPassword)
  {
      return <MasterPasswordDialog/>
  }
    return (
      <Router>
        <div>
            <Header user={{first_name: 'Sven',middle_name: '',last_name: 'Tjeerdsma'}} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path={"/administration/:administration"} component={AdministrationPage} />
            {/*<Route exact path={'/:administration_id/new'} component={NewPassword}/>*/}
            <Route exact path={'/new'} component={NewPassword} />
            <Route exact path={'/list'} component={ListCredential} />

        </div>
      </Router>
  );
}

export default App;

