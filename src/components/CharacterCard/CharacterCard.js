import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  const { user, favorites, addFavorite, removeFavorite } = useContext(AuthContext);
  const isFavorite = favorites.some(fav => fav.url === character.url);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(character);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div className="character-card">
      <Link to={`/character/${character.url.split('/').slice(-2, -1)[0]}`}>
        <img 
          src={`https://picsum.photos/200?random=${character.url.split('/').slice(-2, -1)[0]}`} 
          alt={character.name} 
          className="character-image"
        />
      </Link>
      <div className="character-info">
        <div className="character-name">
          <Link to={`/character/${character.url.split('/').slice(-2, -1)[0]}`}>
            <h3>{character.name}</h3>
          </Link>
        </div>
        <div className="favorite-action">
          <button 
            onClick={handleFavorite} 
            disabled={!user} 
            className={`favorite-btn ${isFavorite ? 'favorite' : ''}`}
          >
            {isFavorite ? '❤️' : '♡'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
