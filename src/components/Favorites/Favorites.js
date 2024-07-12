import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import CharacterCard from '../CharacterCard/CharacterCard';


const Favorites = () => {
  const { favorites } = useContext(AuthContext);

  return (
    <div className="favorites">
      <h2 className='favorites-heading'>Your Favorite Characters</h2>
      {favorites.length === 0 ? (
        <p className="no-favorites-message">No favorite characters yet.</p>
      ) : (
        <div className="character-list">
          {favorites.map(character => (
            <CharacterCard key={character.url} character={character} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
