import { useEffect, useState } from 'react';

function Modal({ content, onClose }) {
  const [showBackside, setShowBackside] = useState(false);
  if (!content) return null;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleFlippingCard = () => {
    //setShowBackside(!showBackside);
    setShowBackside((prev) => !prev);
  };

  return (
    <div 
      className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center" 
      onClick={handleBackdropClick}
    >
      <div
        className={`relative bg-white rounded-lg shadow-lg overflow-hidden  ${
          content.aspectRatio === '9:16'
            ? 'aspect-[9/16] w-[90%] max-w-[360px]'
            : content.aspectRatio === '16:9'
            ? 'aspect-[16/9] w-[90%] max-w-[640px]'
            : 'aspect-[1/1] w-[90%] max-w-[360px]'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black font-bold"
        >
          &times;
        </button>

        {/* Media Content */}
        {content.type === 'image' && (
          <img
            src={content.src}
            alt={content.description}
            className="w-full h-full object-cover"
          />
        )}
        {content.type === 'video' && (
          <video controls className="w-full h-full">
            <source src={content.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Flipping Card for Text */}
        {content.type === 'text' && content.format === 'flipping-card' && (
          <div
            className="relative w-full h-full flex items-center justify-center cursor-pointer"
            style={{
              perspective: '1000px',
            }}
            onClick={toggleFlippingCard}
          >
            {/* Front Side */}
            <div
              className={`absolute w-full h-full flex items-center justify-center text-red-dark p-8 transition-transform duration-500 ease-in-out ${
                showBackside ? 'rotate-y-180' : 'rotate-y-0'
              }`}
              style={{
                backfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d',
                transform: showBackside ? 'rotateY(180deg)' : 'rotateY(0)',
              }}
            >
              <p className="text-3xl text-center">{content.setup}</p>
            </div>

            {/* Back Side */}
            <div
              className={`absolute w-full h-full flex items-center justify-center text-red-dark p-8 transition-transform duration-500 ease-in-out ${
                showBackside ? 'rotate-y-0' : 'rotate-y-180'
              }`}
              style={{
                backfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d',
                transform: showBackside ? 'rotateY(0)' : 'rotateY(180deg)',
              }}
            >
              <p className="text-3xl text-center">{content.backside}</p>
            </div>
          </div>
        )}

        {/* Paragraph Content with Custom Styles */}
        {content.type === 'text' && content.format === 'paragraphs' && (
          <div className="p-6 text-left space-y-4">
            {content.paragraphs.map((para, index) => (
              <p key={index} className={para.style}>
                {para.text}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;