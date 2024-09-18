import React from 'react'
import {Row} from "react-bootstrap";
import MonsterCard from "../MonsterCard/MonsterCard.jsx";

function MonsterList({monsters}) {
    return (
        <Row className="justify-content-center w-100">
            {monsters.map((monster) => (
                <MonsterCard key={monster.id} monster={monster} />

            ))}
        </Row>
    )
}

export default MonsterList
