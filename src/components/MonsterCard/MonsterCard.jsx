import React, {useState} from 'react'
import {Card, Col} from "react-bootstrap";
import PropTypes from "prop-types";

function MonsterCard({monster}) {
    return (
        <Col
            key={monster.id}
            sm={12}
            md={6}
            lg={4}
            className="mb-4 d-flex justify-content-center"
        >
            <Card style={{ width: '18rem' }} className="bg-dark text-white">
                <Card.Img
                    variant="top"
                    src={`https://robohash.org/${monster.id}?set=set2&size=150x150`}
                    alt="Card image cap"
                />
                <Card.Body>
                    <Card.Title>{monster.name}</Card.Title>
                    <Card.Text>Email: {monster.email}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

MonsterCard.propTypes = {
    monster: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};

export default MonsterCard
