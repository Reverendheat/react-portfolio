import React, {useState, useContext} from 'react'
import { Auth } from 'aws-amplify';
import { Container, Form, Button } from 'react-bootstrap';

import { UserContext } from '../Context/User';

const SignIn = () => {
  
  const {user, setUser} = useContext(UserContext);

  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    newUser: false
  });

  const showPassConfirm = () => {
    if(userForm.newUser) {
      return (
        <Form.Group className="mb-3" controlId="formConfirmBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control value={userForm.confirmPassword} onChange={(e) => setUserForm({...userForm, confirmPassword: e.target.value})} type="password" placeholder="Confirm Password" />
          </Form.Group>
      )
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userForm.newUser) {
      await signUp();
    } else {
      await signIn();
    }
  }

  const signUp = async () => {
    try {
        const { user } = await Auth.signUp({
            username: userForm.username,
            password: userForm.password,
            attributes: {
                email: userForm.username,
            }
        });
        if (user) {
          setUser(user);
        } else {
          setUser(null)
        }
    } catch (error) {
        console.log('error signing up:', error);
        setUser(null);
    }
  }

  const signIn = async () => {
    try {
      const user = await Auth.signIn(userForm.username, userForm.password);
      if (user) {
        setUser(user);
      } else {
        setUser(null)
      }
    } catch (error) {
        console.log('error signing in', error);
        setUser(null);
    }
  }

  return (
    <div id='login'>
      <Container style={{alignItems:'center',height: "100vh",justifyContent: 'center',display:'flex'}}>
          <div>
            <h1 style={{textAlign: 'center'}}>Sign in, or up</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="username" value={userForm.username} onChange={(e) => setUserForm({...userForm,username: e.target.value})} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" value={userForm.password} onChange={(e) => setUserForm({...userForm,password: e.target.value})} type="password" placeholder="Password" />
            </Form.Group>

            {showPassConfirm()}

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="New User" name="confirmPassword" checked={userForm.newUser} onChange={() => setUserForm({...userForm, newUser: !userForm.newUser })} />
            </Form.Group>
            <Button variant="primary" color="teal" type="submit">
              Submit
            </Button>
        </Form>
        </div>
      </Container>
    </div>
  )
}

export default SignIn
