import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SplashScreen.css';
import moonImg from '../assets/moon.jpg';
import eggImg from '../assets/eggImg.png'; // Imagem do ovo de Páscoa

function SplashScreen() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    // Aguarda 3 segundos para terminar a animação antes de navegar
    setTimeout(() => {
      navigate('/vouchers');
    }, 3000);
  };

  return (
    <div 
      className="splash-container" 
      style={{ backgroundImage: `url(${moonImg})` }}
    >
      <h1>
        <span className="blinking">Você foi sorteada a ganhar um presente de Páscoa!</span>
      </h1>
      <button onClick={handleClick} disabled={animate}>
        Abrir meu presente
      </button>

      {animate && (
        <div className="animation-overlay">
          <img src={eggImg} alt="Ovo de Páscoa" className="egg-animation" />
          <div className="confetti-wrapper">
            {Array.from({ length: 500 }).map((_, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${1.5 + Math.random() * 2}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SplashScreen;
