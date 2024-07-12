import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterCard/CharacterCard';
import Loader from '../Loader/Loader';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
        setCharacters(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10)); 
      } catch (err) {
        setError('Error fetching data');
      }
      setLoading(false);
    };

    fetchCharacters();
  }, [page]);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="character-list">
        {characters.map((character) => (
          <CharacterCard key={character.url} character={character} />
        ))}
      </div>
      <div className="pagination-buttons">
        <button onClick={handlePrev} disabled={page === 1} className="prev-button">
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={handleNext} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
