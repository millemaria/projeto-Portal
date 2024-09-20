 'use client';
// components/ScrollToTop.js
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mostrar o botão quando a rolagem for maior que 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}  // Quando o mouse entra
      onMouseLeave={() => setIsHovered(false)} // Quando o mouse sai
      style={{
        ...styles.scrollToTop,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        backgroundColor: isHovered ? 'rgba(0, 123, 255, 0.5)' : '#007bff', // Transparente no hover
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="24px"
        height="24px"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M4 12l1.41 1.41L11 7.83v8.59h2V7.83l5.59 5.58L20 12l-8-8-8 8z" />
      </svg>
    </div>
  );
};

const styles = {
  scrollToTop: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    backgroundColor: '#007bff',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'opacity 0.4s ease, background-color 0.3s ease', // Adiciona transição suave para a cor de fundo
    opacity: 0, // O botão começa invisível
    visibility: 'hidden', // O botão começa oculto
    zIndex: 9999,
  },
};

export default ScrollToTop;
