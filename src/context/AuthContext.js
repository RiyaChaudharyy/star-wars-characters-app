import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (user) {
      const storedFavorites = JSON.parse(localStorage.getItem(`${user.email}-favorites`)) || [];
      setFavorites(storedFavorites);
    } else {
      setFavorites([]);
    }
  }, [user]);

  const login = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user)); 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user from localStorage
  };

  const addFavorite = (character) => {
    if (user) {
      const updatedFavorites = [...favorites, character];
      setFavorites(updatedFavorites);
      localStorage.setItem(`${user.email}-favorites`, JSON.stringify(updatedFavorites));
    }
  };

  const removeFavorite = (character) => {
    if (user) {
      const updatedFavorites = favorites.filter(fav => fav.url !== character.url);
      setFavorites(updatedFavorites);
      localStorage.setItem(`${user.email}-favorites`, JSON.stringify(updatedFavorites));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, favorites, addFavorite, removeFavorite }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
