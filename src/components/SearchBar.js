

// src/components/SearchBar.js
import React from 'react';
import { Form } from 'react-bootstrap';

function SearchBar({ query, onSearch }) {
  return (
    <Form.Control
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
