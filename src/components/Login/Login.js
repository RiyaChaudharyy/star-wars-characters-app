import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import starWar1 from '../../assets/img1.png';
import starWar2 from '../../assets/img2.png';
import starWar3 from '../../assets/img13.png';
import starWar4 from '../../assets/img5.png';
import starWar5 from '../../assets/img7.png';
import starWar6 from '../../assets/img8.png';
import starWar7 from '../../assets/img9.png';
import starWar8 from '../../assets/img10.png';
import starWar9 from '../../assets/img12.png';

const images = [starWar1, starWar2, starWar3, starWar4, starWar5, starWar6, starWar7, starWar8, starWar9];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      setError('')
      login(user);
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="login-heading">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="register-link">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
          <button className='btn-login' type="submit" >Login</button>
        </form>
      </div>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Star War"
            className={`login-character-image ${currentImageIndex === index ? 'visible' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};
export default Login