// src/components/Table.js
import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #3498db;
    color: white;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;

const Table = ({ columns, data, onEdit, onDelete }) => (
  <StyledTable>
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col}>{col}</th>
        ))}
        {(onEdit || onDelete) && <th>Actions</th>}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {columns.map((col) => (
            <td key={col}>{row[col]}</td>
          ))}
          {(onEdit || onDelete) && (
            <td>
              {onEdit && <button onClick={() => onEdit(row)}>Edit</button>}
              {onDelete && <button onClick={() => onDelete(row)}>Delete</button>}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

export default Table;
