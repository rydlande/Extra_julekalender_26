import { useState } from 'react';

const FlippingCardContent = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <div 
      className="relative h-full w-full"
      style={{ perspective: '1000px' }}
    >
      <div
        className={`absolute h-full w-full transition-transform duration-500 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
        }}
        onClick={toggleFlip}
      >

        {/* ---------------- FRONT SIDE ---------------- */}
        <div
          className="absolute h-full w-full flex flex-col items-center justify-center cursor-pointer"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
        >
          {front.map((item, index) => {
            if (item.text)
              return (
                <p key={index} className={item.style} dangerouslySetInnerHTML={{ __html: item.text }} />
              );
            if (item.image)
              return (
                <img key={index} src={item.image} alt={item.alt || ''} className={item.style} />
              );
            if (item.video)
              return (
                <video key={index} controls className={item.style}>
                  <source src={item.video} type="video/mp4" />
                </video>
              );
            return null;
          })}
        </div>

        {/* ---------------- BACK SIDE ---------------- */}
        <div
          className="absolute inset-0 h-full w-full flex flex-col items-center justify-center cursor-pointer"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {back.map((item, index) => {
            if (item.text)
              return (
                <p key={index} className={item.style} dangerouslySetInnerHTML={{ __html: item.text }} />
              );
            if (item.image)
              return (
                <img key={index} src={item.image} alt={item.alt || ''} className={item.style} />
              );
            if (item.video)
              return (
                <video key={index} controls className={item.style}>
                  <source src={item.video} type="video/mp4" />
                </video>
              );
            return null;
          })}
        </div>

      </div>
    </div>
  );
};

export default FlippingCardContent;