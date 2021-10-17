import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from "./components/SignIn";

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
        <SignIn />
      </UserContext.Provider>
    </>
  );
}

export default App;

