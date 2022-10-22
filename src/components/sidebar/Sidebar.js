import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import { auth, db } from '../../firebase';
import SidebarOptions from '../sidebarOption/SidebarOptions';

function Sidebar() {
  const [user] = useAuthState(auth);
  const [channels, loading, error] = useCollection(db.collection('rooms'));
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>PAPA FAM HQ</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <Create/>
      </SidebarHeader>

      <SidebarOptions Icon={InsertComment} title="Threads" />
      <SidebarOptions Icon={Inbox} title="Mentions & reactions" />
      <SidebarOptions Icon={Drafts} title="Saved items" />
      <SidebarOptions Icon={BookmarkBorder} title="Channal browser" />
      <SidebarOptions Icon={PeopleAlt} title="People & user groups" />
      <SidebarOptions Icon={Apps} title="Apps" />
      <SidebarOptions Icon={FileCopy} title="File browser" />
      <SidebarOptions Icon={ExpandLess} title="Show Less" />
      {/* <SidebarOptions title="Show Less" /> */}
      
      <hr />
      <SidebarOptions Icon={ExpandMore} title="Channels" />

      <hr />
      <SidebarOptions Icon={Add} title="Add Channel" addChannelOption />

      {channels?.docs.map(doc => (
        <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr{
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  >.MuiSvgIcon-root{
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2{
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3{
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;

    > .MuiSvgIcon-root{
      color: green;
      font-size: 14px;
      margin-right: 2px;
      margin-top: 1px;
    }
  }
`;
