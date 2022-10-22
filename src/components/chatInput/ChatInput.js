import { Button } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import { auth, db } from '../../firebase';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ ChannelName, ChannelId,ChatRef }) {
  
  const [input, setInput] = useState('');
  const [user] = useAuthState(auth);

  const SendMessage = (e) => {
    e.preventDefault();

    if (!ChannelId) {
      return false;
    }

    db.collection('rooms').doc(ChannelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
      
    });

    ChatRef?.current?.scrollIntoView({
      behavior: 'smooth'
    });

    setInput('');
  }

  return (
    <ChatInputContainer>
      <form action="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`Message ${ChannelName}`}
        />
        <Button hidden type='submit' onClick={SendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > Form{
    position: relative;
    display: flex;
    justify-content: center;

    >input{
      position: fixed;
      bottom: 30px;
      width: 60%;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 20px;
      outline: none;
    }

    >Button{
      display: none !important;
    }
  }
`;