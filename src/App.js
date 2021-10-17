import Navigation from "./components/Navigation";
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Contact />
    </>
  );
}

export default App;
