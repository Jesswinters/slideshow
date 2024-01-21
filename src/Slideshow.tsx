import React, { useEffect, useState, useCallback } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface SlideshowProps {
  images: string[];
}

function Slideshow({ images }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState<string | null>(null);
  const [viewCounts, setViewCounts] = useState<{ [key: string]: number }>(
    () => {
      const storedCounts = JSON.parse(
        localStorage.getItem('slideshowViewCounts') || '{}'
      );
      return storedCounts;
    }
  );

  const parseImageName = (imagePath: string): string => {
    return imagePath.replace('/images/', '').replace('.jpg', '');
  };

  const handleSlideChange = useCallback(
    (currentIndex: number) => {
      const currentImage = images[currentIndex];
      setCurrentSlide(parseImageName(currentImage));

      setViewCounts((prevCounts) => {
        const newCounts = { ...prevCounts };
        newCounts[parseImageName(currentImage)] =
          (newCounts[parseImageName(currentImage)] || 0) + 1;
        return newCounts;
      });
    },
    [images]
  );

  useEffect(() => {
    localStorage.setItem('slideshowViewCounts', JSON.stringify(viewCounts));
  }, [viewCounts]);

  return (
    <div className="slideshow-container">
      <Slide duration={5000} onChange={handleSlideChange}>
        {images.map((image, index) => (
          <div key={index} className="each-slide">
            <img key={currentSlide} src={image} alt={parseImageName(image)} />
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slideshow;
