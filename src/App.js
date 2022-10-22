import React from 'react';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import './App.css';
import Chat from './components/chat/Chat';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import Login from './components/login/Login';
import Spinner from 'react-spinkit';

function App() {

  const [user, loading] = useAuthState(auth);
  
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContainer>
          <img
            src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt=""
          />

          <Spinner
            name="ball-spin-fade-loader"
            color='purple'
            fadeIn="none"
          />
        </AppLoadingContainer>
      </AppLoading>
    );
  }

  console.log(user);

  return (
    <div className="app">
      {!user ? (
      <Login/>
      ): (
          <>
             <Header />
         <AppBody>
           <Sidebar/>
         <Routes>
           <Route path="/" element={<Chat/>} />
           
           </Routes>
           </AppBody>
          </>
     )}
    </div>
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;

`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContainer = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >img{
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;