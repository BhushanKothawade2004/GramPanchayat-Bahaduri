import { useState, useEffect } from 'react';
import PageHero from '../PageHero';
import About from '../About';
import Leadership from '../Leadership';
import gavImage from '../../images/gav.jpeg';
import infoImage from '../../images/info.jpeg';

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [gavImage, infoImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <PageHero 
        title="आमच्याबद्दल" 
        subtitle="माहिती"
        image={gavImage}
      />
      
      {/* Image Carousel Section */}
      <section className="py-8 bg-white">
        <div className="w-full overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Carousel Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <About />
      <Leadership />
    </div>
  );
};

export default AboutPage;

