import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnimalComponent = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://run.mocky.io/v3/300c3218-6db4-4303-985b-1e02c0b0a3df')
      .then((response) => {
        setAnimals(response.data.animals);
        console.log(response.data.animals);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
        console.log(animals);
      });
  }, []);

  return (
    <div className="animalComponent">
      {!loading && (
        <h1>New Component</h1>
      )}
    </div>
  );
};

export default AnimalComponent;
