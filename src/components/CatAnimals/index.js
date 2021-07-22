import React, { useState, useEffect } from 'react';
import axios from 'axios';

import animalData from 'src/data/animals.json';

import AnimalCard from './AnimalCard';

import './styles.scss';

const CatAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://run.mocky.io/v3/300c3218-6db4-4303-985b-1e02c0b0a3df')
      .then((response) => {
        setAnimals(response.data.animals);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   console.log(animals);
  // }, [animals]);

  return (
    <div className="category animals">
      <h1>Your pets</h1>
      {!loading && (
        <div className="category-container">
          {animals ? animals.map((animal) => (
            <AnimalCard
              key={animal.id}
              id={animal.id}
              title={animal.title}
              type={animal.type}
              todos={animal.todos}
            />
          )) : (
            <h2>No animals</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default CatAnimals;
