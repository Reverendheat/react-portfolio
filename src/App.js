import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { UserContext } from "./Context/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css";

function App() {

  const [user,setUser] = useState(null);

  return (
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Switch>
            <Route exact path="/">
              <Navigation />
              <Hero />
              <About />
              <Contact />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
  );
}

export default App;

