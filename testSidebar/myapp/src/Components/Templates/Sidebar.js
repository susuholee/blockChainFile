import React from 'react';
import styled from 'styled-components';
import SidebarItem from '../Molecules/SidebarItem';
import Logo from '../Atoms/TextLabel/Logo';

const SidebarWrap = styled.div`
  width: 230px;
  background-color: #ffff;
  height: 100vh;
  padding-top: 20px;
`;

const Sidebar = () => {
  return (
    <SidebarWrap>
      <Logo />
      <SidebarItem items={['개인 페이지', '개인']} />
    </SidebarWrap>
  );
};

export default Sidebar;
