// src/components/SearchBox/SearchBox.jsx
import { Form } from 'react-bootstrap';
import PropTypes from "prop-types";

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

SearchBox.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;
