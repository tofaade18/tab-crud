// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #2c3e50;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: white;

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
  }
`;

const Navbar = () => (
  <NavbarWrapper>
    <div>
      <Link to="/">Home</Link>
      <Link to="/table">Searchable Table</Link>
      <Link to="/gorest">Gorest API Table</Link>
      <Link to="/register">Register User</Link>
    </div>
  </NavbarWrapper>
);

export default Navbar;
