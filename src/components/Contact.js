import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import Skills from './Skills';

import { Container, Card } from 'react-bootstrap'

const Contact = () => {
  return (
    <div id="contact">
      <Container style={{alignItems:'center',height: "100vh",justifyContent: 'center',display:'flex'}}>
        <div>
          <h1 style={{textAlign:'center'}}>Contact me</h1>
          <div style={{display:"flex", justifyContent:'center', gap: '5em'}}>
            <a target="_blank" href='https://github.com/reverendheat'><AiFillGithub size={70} color="black" /></a>
            <a target="_blank" href='https://www.linkedin.com/in/brandon-sharp-23a87210/'><AiFillLinkedin size={70} color='#0e76a8' /></a>
          </div>
          <div style={{paddingTop:'8em'}}>
            <Skills />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
