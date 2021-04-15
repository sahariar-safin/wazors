import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './componants/Home/Home/Home';
import Admin from './componants/Admin/Admin/Admin';
import { createContext, useContext, useState } from 'react';
import Login from './componants/Login/Login/Login';
import PrivateRoute from './componants/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/book">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
