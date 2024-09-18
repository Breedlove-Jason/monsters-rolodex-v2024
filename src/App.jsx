// src/App.jsx
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import SearchBox from '../src/components/SearchBox/SearchBox.jsx';
import MonsterList from '../src/components/MonsterList/MonsterList.jsx';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchMonsters, setSearchMonsters] = useState('');

  useEffect(() => {
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          setMonsters(response.data);
        });
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchMonsters.toLowerCase())
  );

  const onSearchChange = (event) => {
    setSearchMonsters(event.target.value);
  };

  return (
      <Container className="d-flex flex-column align-items-center">
        <SearchBox onSearchChange={onSearchChange} />
        <MonsterList monsters={filteredMonsters} />
      </Container>
  );
}

export default App;
