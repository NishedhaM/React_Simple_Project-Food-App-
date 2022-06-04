import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/background.jpeg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div 
        className='headerContainer'
        >

        <h1>FoodyFi</h1>
        <p>Make your healthy with our food and app</p>
        <Link to="/menu">
        <button>Order Now</button>
        </Link>
      </div>

    </div>
   
  );
}

export default Home;