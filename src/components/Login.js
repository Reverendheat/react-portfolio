import React, {useContext, useEffect} from 'react'

import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

import {Container, Button} from 'react-bootstrap';

import { UserContext } from '../Context/User';

const Login = () => {
  const {user, setUser} = useContext(UserContext);

  const signOut = async () => {
    setUser(null);
  }

  useEffect(() =>{
    return onAuthUIStateChange(newAuthState => {
      console.log(newAuthState);
      newAuthState == 'signedin' ? setUser(Auth.user) : setUser(null);
    });
  })

  return (
    <Container style={{alignItems:'center',height: "100vh",justifyContent: 'center',display:'flex'}}>
      <h1 style={{textAlign:'center'}}>🤫 This is only for logged in users, like you!</h1>
      <AmplifySignOut />
    </Container>
    )
}

export default withAuthenticator(Login);
