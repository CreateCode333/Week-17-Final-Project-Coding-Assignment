

// src/components/Pagination.js
import React from 'react';
import { Pagination } from 'react-bootstrap';

function PaginationComponent({ currentPage, totalPages, onPageChange }) {
  const handleSelect = (eventKey) => {
    onPageChange(eventKey);
  };

  return (
    <Pagination>
      {[...Array(totalPages).keys()].map(number => (
        <Pagination.Item
          key={number + 1}
          active={number + 1 === currentPage}
          onClick={() => handleSelect(number + 1)}
        >
          {number + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

export default PaginationComponent;
