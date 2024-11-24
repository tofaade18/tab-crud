// src/pages/SearchableTable.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';

const TableWrapper = styled.div`
  padding: 2rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #3498db;
    color: white;
  }
`;

const SearchableTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
  ]);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (row) => {
    setEditData(row);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleSave = () => {
    setData(data.map(item => (item.id === editData.id ? editData : item)));
    setIsModalOpen(false);
  };

  return (
    <TableWrapper>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(row => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.email}</td>
              <td>
                <button onClick={() => handleEdit(row)}>Edit</button>
                <button onClick={() => handleDelete(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {isModalOpen && (
        <Modal title="Edit User" onClose={() => setIsModalOpen(false)}>
          <label>
            Name:
            <input
              type="text"
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={editData.age}
              onChange={(e) => setEditData({ ...editData, age: parseInt(e.target.value) })}
            />
          </label>
          <button onClick={handleSave}>Save</button>
        </Modal>
      )}
    </TableWrapper>
  );
};

export default SearchableTable;
