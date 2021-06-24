import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/Login/PrivateRoute";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute path="/contact">
            <Contact />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
