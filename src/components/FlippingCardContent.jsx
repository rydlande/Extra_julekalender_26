import { useState } from 'react';

const FlippingCardContent = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

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
        {/* Front Side */}
          <div className="absolute h-full w-full flex flex-col items-center justify-center cursor-pointer"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(0deg)',
            }}
          >
            {front.map((item, index) => (
              <p key={index} className={item.style}>
                {item.text}
              </p>
            ))}
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 h-full w-full flex flex-col items-center justify-center cursor-pointer"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
            {back.map((item, index) => (
              <p key={index} className={item.style}>
                {item.text}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};


export default FlippingCardContent;