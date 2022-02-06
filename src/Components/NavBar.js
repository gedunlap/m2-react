import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from './Logo';

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    img{
        max-width: 3rem;
        border-radius: 25px;
    }
  }
`

function NavBar(props) {
  return (
    <Nav>
      <Logo />
      <Burger />
    </Nav>
  )
}

export default NavBar