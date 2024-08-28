
'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DynamicSlider = dynamic(() => import('react-slick'), {
  ssr: false,
});

export default function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="carousel-container z-[0]">
      <DynamicSlider {...settings}>
        <div >
          <img src="/images/carta.png" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/ouro.png" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/saibatudo.png" alt="Slide 3" />
        </div>
      </DynamicSlider>
    </div>
  );
}
