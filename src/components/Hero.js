import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'

const Hero = () => {
 
  const titles = ['Software Engineer', '☕ Roaster', 'Tinkerer'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex(index => index >= titles.length -1  ? 0 : index + 1);
    }, 2000)
    return () => clearInterval(interval)
  }, [titles.length]); 

  return (
    <div id="home">
      <Container style={{alignItems:'center',height: "100vh",justifyContent: 'center',display:'flex', flexDirection:'column'}}>
        <div>
            <h1>Hi <div className='wave'>👋</div> I'm Brandon, a <strong>{titles[index]}</strong></h1>
        </div>
      </Container>
    </div>
  )
}

export default Hero
