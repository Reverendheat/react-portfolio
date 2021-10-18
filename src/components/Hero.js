import React, {useState, useEffect, useContext} from 'react'
import {Container} from 'react-bootstrap'
import { UserContext } from '../Context/User'

const Hero = () => {
  const {user, setUser} = useContext(UserContext)
 
  const titles = ['Network', 'Software', 'Buzzword' , 'Site Reliability', 'Full Stack', 'Network Automation', '☕', 'NetDevOps'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex(index => index >= titles.length -1  ? 0 : index + 1);
    }, 2000)
    return () => clearInterval(interval)
  }, []); 

  return (
    <div id="home">
      <Container style={{alignItems:'center',height: "100vh",justifyContent: 'center',display:'flex'}}>
        <div>
          <h1>Hi <div className='wave'>👋</div> I'm Brandon, a <strong>{titles[index]}</strong> engineer</h1>
        </div>
      </Container>
    </div>
  )
}

export default Hero
