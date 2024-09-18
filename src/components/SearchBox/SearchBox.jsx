// src/components/SearchBox/SearchBox.jsx
import React from 'react';
import { Form } from 'react-bootstrap';

function SearchBox({ onSearchChange }) {
    return (
        <Form.Control
            type="search"
            placeholder="Search monsters"
            className="mb-5 mt-5 w-50"
            onChange={onSearchChange}
        />
    );
}

export default SearchBox;
