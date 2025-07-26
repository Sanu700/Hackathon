import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "Connect with Trusted Suppliers",
    desc: "Browse and find the best suppliers for your street food business.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop&crop=center"
  },
  {
    title: "Track Orders Easily",
    desc: "Keep track of your orders and manage your business efficiently.",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop&crop=center"
  },
  {
    title: "Compare Prices Dynamically",
    desc: "See real-time market and wholesale prices to make informed decisions.",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop&crop=center"
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [current, isPaused]);

  return (
    <div 
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button onClick={prevSlide}>‹</button>
      <div className="carousel-slide">
        <img src={slides[current].img} alt={slides[current].title} className="carousel-img" />
        <h3>{slides[current].title}</h3>
        <p>{slides[current].desc}</p>
      </div>
      <button onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;
