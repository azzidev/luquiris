import React from 'react';
import { Layout, Menu, Image } from 'antd';
import menuNavItems from './Header-Config';
const { Header } = Layout;

const HeaderNav = () => {
  return (
      <Header
        style={headerStyle}
      >
        <Image 
          src='/logo-dark.png'
          preview={false}
          style={logoStyle}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuNavItems}
          style={menuStyle}
        />
      </Header>
  );
};

export default HeaderNav;

const headerStyle: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
}

const logoStyle: React.CSSProperties = {
  height: '40px',
  display: 'flex',
  alignItems: 'center',
}

const menuStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  justifyContent: 'end',
  userSelect: 'none',
}