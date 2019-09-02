import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import {Homepage} from "./views/Homepage";
import Dashboard from "./views/Dashboard";
import SomethingWentWrong from "./views/General/SomethingWentWrong";
import NewPassword from "./views/General/NewPassword";
function App() {

    const [authenticated,setAuthenticated] = useState(true);
    const [user,setUser] = useState({});
    const [token,setToken] = useState({});
    const [error, setError] = useState(false);
    const [count, setCount] = useState(0);
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    },[]);

    useEffect(() => {
    if(JSON.stringify(token) !== "{}" && token){
        fetch("http://localhost/authenicate")
            .then(response => {
                response = response.json();
                setUser(response.user);
            })
            .catch(fetchError =>
            {
                setAuthenticated(true);
                setError(true);
            });
    }


    },[token]);
  if(!authenticated)
  {

      return  <Router>
          <div>
              <Route exact path="/" component={Homepage} />
          </div>
      </Router>
  }

  if(error){
      return <SomethingWentWrong />
  }

  return (
      <Router>
        <div>

            <Header user={{id: 1,first_name: 'Sven',middle_name: '',last_name: 'Tjeerdsma'}} />
          <Route exact path="/" component={Dashboard} />
            <Route exact path={'/:administration_id/new'} component={NewPassword}/>
        </div>
      </Router>
  );
}

export default App;

