// src/components/ImageSlider.jsx

import React, { useState, useEffect } from 'react';
import heroimg1 from '../../assets/heroimg1.webp';
import heroimg2 from '../../assets/heroimg2.jpg';
import heroimg3 from '../../assets/heroimg3.jpg';
import heroimg4 from '../../assets/heroimg4.jpg';
import heroimg5 from '../../assets/heroimg5.jpg';
import heroimg6 from '../../assets/heroimg6.jpg';
import heroimg7 from '../../assets/heroimg7.jpg';
import heroimg8 from '../../assets/heroimg8.jpg';
import heroimg9 from '../../assets/heroimg9.jpg';

// List of images
const images = [
  heroimg1,
  heroimg2,
  heroimg3,
  heroimg4,
  heroimg5,
  heroimg6,
  heroimg7,
  heroimg8,
  heroimg9,
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
