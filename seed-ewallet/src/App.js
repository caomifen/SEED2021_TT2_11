
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginForm from './component/Login.js';

function App() {
    return(
      <Router>
        <div>
            <div className="header">
              <ul>
                  <li><Link to="/" >Home</Link></li>
                  <li><Link to="/login" >Login</Link></li>
              </ul>
            </div>

            <Switch>
              <Route exact path="/">
                <h1>Welcome</h1>
              </Route>
              <Route path="/login">
                <LoginForm />
              </Route>
            </Switch>
        </div>
      </Router>
    )
  
}

export default App;
