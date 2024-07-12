import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import CharacterDetail from '../components/CharacterDetail/CharacterDetail';

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        const homeworld = await axios.get(response.data.homeworld);
        setCharacter({ ...response.data, homeworld: homeworld.data, charId:id });
      } catch (err) {
        setError('Error fetching data');
      }
      setLoading(false);
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return <CharacterDetail character={character} />;
};

export default CharacterPage;
