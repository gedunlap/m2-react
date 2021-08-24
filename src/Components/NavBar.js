import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  position: fixed;
  /* bottom: 0; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    img{
        max-width: 3rem;
        border-radius: 25px;
        margin-left: 10px;
    }
  }
`

function NavBar(props) {
  return (
    <Nav>
      <div className="logo">
        <img src="https://i.imgur.com/S10uG78.jpg" alt="" />
      </div>
      <Burger />
    </Nav>
  )
}

export default NavBar