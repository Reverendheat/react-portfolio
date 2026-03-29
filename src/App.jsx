import Navigation from "./components/Navigation";
import Hero from './components/Hero';
import Contact from './components/Contact';
import Experience from "./components/Experience";
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
          </Switch>
      </Router>
  );
}

export default App;

