import { useState } from 'react';

const FlippingCardContent = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="relative h-full w-full" style={{ perspective: '1000px' }}>
      <div
        className={`absolute inset-0 h-full w-full transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
        }}
        onClick={toggleFlip}
      >
        {/* Front Side */}
          <div className="absolute inset-0 h-full w-full flex flex-col items-center bg-transparent cursor-pointer"
            style={{
              backfaceVisibility: 'hidden',
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
          className="absolute inset-0 h-full w-full flex flex-col items-center  rounded-xl cursor-pointer"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
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