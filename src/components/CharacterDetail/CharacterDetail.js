import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './CharacterDetail.css';

const CharacterDetail = ({ character }) => {
  const { user, favorites, addFavorite, removeFavorite } = useContext(AuthContext);
  
  if (!character) return null;

  const isFavorite = favorites.some(fav => fav.url === character.url);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(character);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div className="character-detail-wrapper">
      <h1 className="character-name-outside">{character.name}</h1>
      <div className="character-detail-container">
        <img 
          src={`https://picsum.photos/200?random=${character.id}`} 
          alt={character.name} 
          className="character-image"
        />
        <div className="character-text">
          <p className="character-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a magna vel lorem convallis laoreet.
          </p>
          <div className="detail-character-info">
            <div className="info-item"><strong>Height:</strong> {character.height / 100} meters</div>
            <div className="info-item"><strong>Mass:</strong> {character.mass} kg</div>
            <div className="info-item"><strong>Date Added:</strong> {new Date(character.created).toLocaleDateString('en-GB')}</div>
            <div className="info-item"><strong>Number of Films:</strong> {character.films.length}</div>
            <div className="info-item"><strong>Birth Year:</strong> {character.birth_year}</div>
          </div>
          <div className="favorite-action-detail">
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
    </div>
  );
};

export default CharacterDetail;
