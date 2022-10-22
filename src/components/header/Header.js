import React from 'react'
import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { AccessTime, HelpOutline, Search } from '@mui/icons-material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

function Header() {
  const [user] = useAuthState(auth);
  return (
    <HeaderCotainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
          // TODOS add onClick
          alt={user?.displayName}
          src={user?.photoURL}
          onClick={()=>{auth.signOut()}}
        />
        <AccessTime/>
      </HeaderLeft>
     
      {/* Header Search */}
      <HeaderSearch>
        <Search />
        <input type="text" placeholder='Search' />
      </HeaderSearch>

      {/* Header Right */}
      <HeaderRight>
        <HelpOutline/>
      </HeaderRight>
    </HeaderCotainer>
  )
}

export default Header

const HeaderCotainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  /* background-color: whitesmoke; */
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root{
    margin-left: auto;
    margin-right:30px ;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover{
    opacity: 0.8;
  }

`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0 50px;
  display: flex;
  color: gray;
  border: 1px solid gray;

  > input{
    background-color: transparent;
    outline: none;
    border: none;
    min-width: 30vw;
    text-align: center;
    color: white;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 20px;
  }
`;