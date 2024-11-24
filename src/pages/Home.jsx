// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  text-align: center;
  margin: 2rem;
`;

const Home = () => (
  <HomeWrapper>
    <h1>Welcome to the React SPA</h1>
    <p>
      Explore features like:
      <ul>
        <li>Searchable and editable tables</li>
        <li>Data fetching from external APIs</li>
        <li>User registration forms</li>
      </ul>
    </p>
    <p>Use the navigation bar to explore the application.</p>
  </HomeWrapper>
);

export default Home;
