import React, {useContext} from 'react'
import {UserContext} from '../Context/User'
import { Redirect } from 'react-router';
import { Container } from 'react-bootstrap';

const Profile = () => {

  const {user, setUser} = useContext(UserContext);
  
  return (
    <div id="profile">
    {user ? 
      <Container style={{alignItems:'center',height: "100vh",justifyContent: 'center',display:'flex'}}>
      <div>
        <h1>🤫 Only a logged in person can see this, welcome aboard.</h1>
        <strong><p className='pulse' style={{textAlign:'center'}}>This is for demonstration purposes only, your account will be deleted after 12h via Lambda.</p></strong>
        <div style={{textAlign:'center'}}>
        <img alt='Rick dances'  src='https://c.tenor.com/4gPD1ccxrVgAAAAC/rick-ashley-dance.gif' />
        </div>
      </div>
    </Container>
    : <Redirect to='/' />}
    </div>
  )
}

export default Profile
