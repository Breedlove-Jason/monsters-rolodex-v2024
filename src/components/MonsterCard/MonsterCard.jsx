import React from 'react'
import {Card, Col} from "react-bootstrap";

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
                    src="https://via.placeholder.com/150"
                    alt="Card image cap"
                />
                <Card.Body>
                    <Card.Title>{monster.name}</Card.Title>
                    <Card.Text>Email: {monster.email}</Card.Text>
                    <Card.Text>Phone: {monster.phone}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default MonsterCard
