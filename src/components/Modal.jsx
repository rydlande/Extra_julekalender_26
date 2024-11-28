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
    setShowBackside((prev) => !prev);
  };

  return (
    <div 
      className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center text-red-dark" 
      onClick={handleBackdropClick}
    >
      <div
        className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
          content.type === 'text' && (content.format === 'flipping-card' || content.format === 'paragraphs')
            ? 'w-[320px] h-[570px]'
            : content.aspectRatio === '9:16'
            ? 'aspect-[9/16] w-[90%] max-w-[360px]'
            : content.aspectRatio === '16:9'
            ? 'aspect-[16/9] w-[90%] max-w-[640px]'
            : 'aspect-[1/1] w-[90%] max-w-[360px]'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black font-bold"
        >
          &times;
        </button>

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

        {content.type === 'text' && content.format === 'flipping-card' && (
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
              {content.front.map((item, index) => (
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
              {content.back.map((item, index) => (
                <p
                  key={index}
                  className={item.style}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></p> 
              ))}
            </div>
          </div>
        )}

        {content.type === 'text' && content.format === 'paragraphs' && (
          <div className="relative w-full h-full flex flex-col items-center justify-around p-14 transition-transform duration-500 ease-in-out">
            {content.paragraphs.map((para, index) => (
              <p
                key={index}
                className={para.style}
                dangerouslySetInnerHTML={{ __html: para.text }}
              ></p>
            ))}
          </div>
        )}

        {content.type === 'image-and-text' && (
          <div className="relative w-full h-full flex flex-col items-center justify-around p-14 transition-transform duration-500 ease-in-out">
            <img
              src={content.image.src}
              alt={content.image.alt}
              className="w-full max-w-sm mb-4"
            />
            {content.text.map((textItem, index) => (
              <p key={index} className={textItem.style}>
                {textItem.text}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );

}

export default Modal;