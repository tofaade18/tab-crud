// src/pages/GorestTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GorestTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://gorest.co.in/public/v2/users')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Gorest API Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GorestTable;
