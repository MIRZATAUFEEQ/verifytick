// src/components/ImageSlider.jsx

import React, { useState, useEffect } from 'react';
import heroimg1 from '../../assets/heroimg1.webp';
import whatsapp2 from '../../assets/whatsapp2.png';
import whatsapp3 from '../../assets/whatsapp3.png';
import whatsapp4 from '../../assets/whatsapp4.png';
import whatsapp5 from '../../assets/whatsapp5.png';
import whatsapp6 from '../../assets/whatsapp6.png';
import whatsapp7 from '../../assets/whatsapp7.png';
import whatsapp8 from '../../assets/whatsapp8.png';
import whatsapp9 from '../../assets/whatsapp9.png';

// List of images
const images = [
  heroimg1,
  whatsapp2,
  whatsapp3,
  whatsapp4,
  whatsapp5,
  whatsapp6,
  whatsapp7,
  whatsapp8,
  whatsapp9,
];

// ImageSlider component
const SliderImage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false);

  // Image slider effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setFade(true); // Start fade out
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(false); // End fade out
      }, 1000); // Match this duration with the CSS transition duration
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageInterval); // Clean up on component unmount
  }, []);

  return (
    <div className='mt-6 w-full relative overflow-hidden'>
      <img
        src={images[currentImage]}
        alt={`Slider Image ${currentImage + 1}`}
        className={`w-full h-64 object-cover transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}
      />
      {/* Navigation Buttons */}
      <div className='mt-4 flex justify-center space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => {
              setFade(true); // Start fade out
              setTimeout(() => {
                setCurrentImage(index);
                setFade(false); // End fade out
              }, 1000); // Match this duration with the CSS transition duration
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderImage;
