import React, {useEffect, useState} from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import {Homepage} from "./views/Homepage";
import Dashboard from "./views/Dashboard";
import SomethingWentWrong from "./views/General/SomethingWentWrong";
import NewPassword from "./views/General/NewPassword";
import { useDispatch} from "react-redux";
import Authentication from "./views/Authentication";
import AdministrationPage from "./views/AdministrationPage";
import ListCredential from "./views/General/ListCredential";

function App() {
    const [authenticated,setAuthenticated] = useState(false);
    const [user,setUser] = useState({});
    const [token,setToken] = useState(null);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    },[]);

    // useEffect(() => {
    // if(token){
    //     fetch("http://localhost/user")
    //         .then(response => {
    //             response = response.json();
    //             setUser(response.user);
    //             dispatch({
    //                 type: 'SET_USER_INFO',
    //                 payload: response.user
    //             });
    //             setAuthenticated(true);
    //         })
    //         .catch(fetchError =>
    //         {
    //             setAuthenticated(false);
    //         });
    // }
    //
    //
    // },[token]);
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
            <Route exact path={"/administration/:administration"} component={AdministrationPage} />
            {/*<Route exact path={'/:administration_id/new'} component={NewPassword}/>*/}
            <Route exact path={'/new'} component={NewPassword} />
            <Route exact path={'/list'} component={ListCredential} />
        </div>
      </Router>
  );
}

export default App;

