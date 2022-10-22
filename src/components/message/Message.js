import { TodayTwoTone } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

function Message({user,userImage,timestamp,message}) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />

      <MessageInfo>
        <h4>
          {user}{' '}
          <span>
            {new Date(timestamp?.seconds*1000).toUTCString()}
          </span>
        </h4>

        <p>{message}</p>
        
      </MessageInfo>
    </MessageContainer>
  )
}

export default Message

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  >img{
    height: 50px;
    border-radius: 8px;
    object-fit: cover;
  }

`;

const MessageInfo = styled.div`
  padding-left: 10px;
  >h4>span{
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 16px;
  }

`;