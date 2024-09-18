import React from 'react'
import {Row} from "react-bootstrap";
import MonsterCard from "../MonsterCard/MonsterCard.jsx";
import PropTypes from 'prop-types';

function MonsterList({monsters}) {
    return (
        <Row className="justify-content-center w-100">
            {monsters.map((monster) => (
                <MonsterCard key={monster.id} monster={monster} />

            ))}
        </Row>
    )
}

MonsterList.propTypes = {
    monsters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default MonsterList
