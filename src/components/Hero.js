import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import "../styles/main.css";

const Hero = () => {
  const [title, setTitle] = useState();

  const startTimer = () => {
    setInterval(() => {
      setTitle(changeTitles());
    }, 3000)
  }

  const changeTitles = () => {
    let titles = ['Network', 'Software', 'Coffee','Network Automation', 'NetDevOps'];
    let rndInt = Math.floor(Math.random() * titles.length);
    if (titles[rndInt] == title) {
      changeTitles();
    }
    else {
      return titles[rndInt];
    }
  }

  useEffect(() => {
    setTitle(changeTitles());
    startTimer();
  }, []); 

  return (
    <div id="home">
      <Container style={{alignItems:'center',height: "100vh",justifyContent: 'center',display:'flex'}}>
        <div>
          <h1>Hi! <div className='wave'>👋</div> I'm Brandon, a <strong>{title}</strong> engineer</h1>
        </div>
      </Container>
    </div>
  )
}

export default Hero
