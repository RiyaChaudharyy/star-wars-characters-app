import React from 'react';
import CharacterList from '../components/CharacterList/CharacterList';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="main-heading">Star Wars Characters</h1>
      <CharacterList />
      <Footer/>
    </div>
  );
};

export default Home;
