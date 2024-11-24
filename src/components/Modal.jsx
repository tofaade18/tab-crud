// src/components/Modal.js
import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  min-width: 300px;

  h2 {
    margin-top: 0;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    background: #3498db;
    color: white;
    cursor: pointer;
    border-radius: 4px;
  }
`;

const Modal = ({ title, children, onClose }) => (
  <ModalOverlay onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <h2>{title}</h2>
      {children}
    </ModalContent>
  </ModalOverlay>
);

export default Modal;
