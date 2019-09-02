import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import {Homepage} from "./views/Homepage";
import Dashboard from "./views/Dashboard";
import SomethingWentWrong from "./views/General/SomethingWentWrong";


function App() {

    const [authenticated,setAuthenticated] = useState(false);
    const [user,setUser] = useState({});
    const [token,setToken] = useState({});
    const [error, setError] = useState(false);
    const [count, setCount] = useState(0);
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    },[]);

    useEffect(() => {

        if(token && Object.keys(token).length){
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
              {/*<Header user={null} />*/}
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
        <Header user={null} />
          <Route exact path="/" component={Dashboard} />
        </div>
      </Router>
  );
}

export default App;
