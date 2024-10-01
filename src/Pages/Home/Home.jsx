
// src/pages/Home.jsx

import React, { useState, useEffect } from 'react';
import Joinbtn from '../../components/Joinbtn';
import ImageSlider from './SliderImage'; // Import the ImageSlider component

// Placeholder function to simulate fetching quotes
const fetchQuote = async () => {
  const quotes = [
    "Seamless conversations that elevate customer support and drive engagement.",
    "AI-powered messaging for exceptional customer experiences.",
    "Transform your customer support with intelligent conversations.",
    "Engage, retain, and delight customers with AI-driven messaging.",
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export const Home = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const getNewQuote = async () => {
      const newQuote = await fetchQuote();
      setQuote(newQuote);
    };

    getNewQuote(); // Initial quote fetch

    const quoteInterval = setInterval(getNewQuote, 5000); // Fetch new quote every 5 seconds

    return () => clearInterval(quoteInterval); // Clean up on component unmount
  }, []);

  return (
    <>
      <div id='paragraf' className='flex flex-col items-center justify-center mt-14 p-4'>
        <p className='text-center w-full sm:w-80 md:w-96 lg:w-128 text-wrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-wider mb-4'>
          {quote}
        </p>
        <p className='text-center mt-2 w-full sm:w-80 md:w-96 lg:w-112 text-gray-500'>
          Combine the power of AI with messaging to lower CAC, enhance retention, and deliver exceptional support.
        </p>
        <div id='button' className='mt-4'>
          <Joinbtn />
        </div>

        {/* Image Slider */}
        {/* <ImageSlider /> Use the ImageSlider component here */}
      </div>
    </>
  );
}

export default Home;
