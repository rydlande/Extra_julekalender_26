import { useState } from 'react';

const FlippingCardContent = ({ front, back }) => {
  const [showBackside, setShowBackside] = useState(false);

  const toggleFlippingCard = () => {
    setShowBackside((prev) => !prev);
  };

  return (
    <div
      className="relative w-full h-full flex cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={toggleFlippingCard}
    >
      <div
        className={`absolute w-full h-full flex flex-col items-center justify-around p-14 transition-transform duration-500 ease-in-out ${
          showBackside ? 'rotate-y-180' : 'rotate-y-0'
        }`}
        style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
      >
        {front.map((item, index) => (
          <p
            key={index}
            className={item.style}
            dangerouslySetInnerHTML={{ __html: item.text }}
          ></p>
        ))}
      </div>
      <div
        className={`absolute w-full h-full flex flex-col items-center justify-around p-14 transition-transform duration-500 ease-in-out ${
          showBackside ? 'rotate-y-0' : 'rotate-y-180'
        }`}
        style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
      >
        {back.map((item, index) => (
          <p
            key={index}
            className={item.style}
            dangerouslySetInnerHTML={{ __html: item.text }}
          ></p>
        ))}
      </div>
    </div>
  );
};

export default FlippingCardContent;