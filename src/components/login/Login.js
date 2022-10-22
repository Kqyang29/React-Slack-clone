import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../../firebase';

function Login() {

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt=""
        />
        <h1>Sign into the Account</h1>
        <p>Slack.com</p>
        <Button type='submit' onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;

`;

const LoginInnerContainer = styled.div`

  padding: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    >img{
      object-fit: contain;
      height: 100px;
      margin-bottom: 40px;
      border-radius: 50%;
    }

    >Button{
      margin-top: 50px;
      text-transform: inherit !important;
      background-color: #1e1f1d !important;
      color: whitesmoke;
    }
`;

