import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Login from "./components/Login";

import { UserContext } from "./Context/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css";

function App() {

  const [user,setUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Navigation />
        <Hero />
        <About />
        <Contact />
        <div id='login'>
          <Login />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;

