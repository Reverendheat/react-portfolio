import Navigation from "./components/Navigation";
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from "./components/Experience";
import DrunkardsWalk from "./components/DrunkardsWalk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css";

function App() {

  return (
      <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">  
              <Hero />
              <Experience />
              <Contact />
            </Route>
            <Route path='/drunkardswalk'>
              <DrunkardsWalk />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;

