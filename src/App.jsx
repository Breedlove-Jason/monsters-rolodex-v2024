import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchMonsters, setSearchMonsters] = useState('');

  useEffect(() => {
    return () => {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          setMonsters(response.data);
        });
    };
  });

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchMonsters.toLowerCase()),
  );
  let onSearchChange = (event) => {
    setSearchMonsters(event.target.value);
  };
  return (
    <>
      <Container className="d-flex flex-column align-items-center">
        <Form.Control
          type="search"
          placeholder="Search monsters"
          className="mb-5 mt-5 w-50"
          onChange={onSearchChange}
        />
        <Row className="justify-content-center w-100">
          {filteredMonsters.map((monster) => (
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
          ))}
        </Row>
      </Container>{' '}
    </>
  );
}

export default App;
