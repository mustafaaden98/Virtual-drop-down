import React, { useState } from 'react';
import './App.css';

import Dropdown from './components/Functional/Dropdown';

function App() {
  const [selectedAnimal, setAnimal] = useState({
    url: 'bird.png',
    name: 'Bird'
  })

  const onChange = (data) => {
    setAnimal(data);
  }

  const data = [
    {
      id: '1',
      name: 'Tiger',
      url: 'tiger.png',
    },
    {
      id: '2',
      name: 'Lion',
      url: 'lion.png',
    },
    {
      id: '3',
      name: 'Leopard',
      url: 'Leopard.png'
    },
    {
      id: '4',
      name: 'Elephant',
      url: 'elephant.png'
    },
    {
      id: '5',
      name: 'Bird',
      url: 'bird.png'
    },

  ]


  return (
    <div className="app" id='app'
      style={{ backgroundImage: `url(${selectedAnimal.url})` }}>
      <span className="name">{selectedAnimal.name}</span>
      <Dropdown
        data={data}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
