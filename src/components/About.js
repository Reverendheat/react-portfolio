import React from 'react'

import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <div id="about">
      <Container style={{alignItems:'center',height: "100vh",justifyContent: 'center',display:'flex'}}>
        <div>
          <h1>This is an about me section.</h1>
        </div>
      </Container>
    </div>
  )
}

export default About
