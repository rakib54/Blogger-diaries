import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
