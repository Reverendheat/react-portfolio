import React, {useContext, useEffect} from 'react'

import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';


import { UserContext } from '../Context/User';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const {setUser} = useContext(UserContext);

  useEffect(() =>{
    return onAuthUIStateChange(newAuthState => {
      if(newAuthState == 'signedin') {
        setUser(Auth.user);
        history.push({
          pathname: '/'
        });
      } else {
        setUser(null);
      }
    });
  },[])

  return (
    <>
    </>
  )
}

export default withAuthenticator(Login);
