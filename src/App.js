import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import {Homepage} from "./views/Homepage";
import Dashboard from "./views/Dashboard";
import SomethingWentWrong from "./views/General/SomethingWentWrong";
import NewPassword from "./views/General/NewPassword";
import {Provider, useDispatch} from "react-redux";
import {store} from "./redux/store";
import Authentication from "./views/Authentication";
function App() {

    const [authenticated,setAuthenticated] = useState(false);
    const [user,setUser] = useState({});
    const [token,setToken] = useState({});
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    },[]);

    useEffect(() => {
    if(JSON.stringify(token) !== "{}" && token){
        fetch("http://localhost/authenicate")
            .then(response => {
                response = response.json();
                setUser(response.user);
                dispatch({
                    type: 'SET_USER_INFO',
                    payload: response.user
                });
                setAuthenticated(true);
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
              <Route exact path="/" component={Homepage} />
              <Route exact path="/authenticate" component={Authentication} />
      </Router>
  }

  if(error){
      return <SomethingWentWrong />
  }
    return (
      <Router>
        <div>
            <Header user={{first_name: 'Sven',middle_name: '',last_name: 'Tjeerdsma'}} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path={'/:administration_id/new'} component={NewPassword}/>
        </div>
      </Router>
  );
}

export default App;

