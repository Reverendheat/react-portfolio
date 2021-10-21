import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Login from "./components/Login";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import DrunkardsWalk from "./components/DrunkardsWalk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { UserContext } from "./Context/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css";

function App() {

  const [user,setUser] = useState(null);

  return (
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Navigation />
          <Switch>
            <Route exact path="/">  
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Contact />
              {/* {user ? <Profile /> : <></>} */}
            </Route>
            <Route path='/drunkardswalk'>
              <DrunkardsWalk />
            </Route>
            {/* <Route path='/login'>
              <Login />
            </Route> */}
          </Switch>
        </UserContext.Provider>
      </Router>
  );
}

export default App;

