import { useEffect, useState } from 'react';
import { isDoorOpen } from '../utils/dataHelpers';
import VideoContent from './VideoContent';
import ImageContent from './ImageContent';
import FlippingCardContent from './FlippingCardContent';
import ParagraphsContent from './ParagraphsContent';
import ImageAndTextContent from './ImageAndTextContent';

function Modal2({ content, onClose }) {
    if (!content) return null;

    const { width = '320px', height = '500px', backgroundColor = 'bg-white' } = content.styles || {};

    const aspectRatioClass =
        content.aspectRatio === '9:16'
        ? 'aspect-[9/16]'
        : content.aspectRatio === '16:9'
        ? 'aspect-[16/9]'
        : 'aspect-[1/1]';

    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
    <div className="static">
        <div
            className="fixed h-screen w-screen bg-black z-10 top-0 left-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center text-red-dark"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative rounded-lg shadow-lg overflow-hidden text-center ${backgroundColor}`}
                style={{
                    width,
                    height,
                }}
            >
                <button
                    onClick={onClose}
                className="absolute top-2 right-2 text-black font-bold text-2xl z-10"
                >
                &times;
                </button>

                {content.type === 'video' && (
                    <div className={`relative w-full ${aspectRatioClass}`}>
                        <video controls className="absolute inset-0 w-full h-full object-cover">
                            <source src={content.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}

                {content.type === 'image' && (
                    <div className={`relative w-full ${aspectRatioClass}`}>
                        <img 
                            src={content.src} 
                            alt={content.description} 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                )}

                {content.type === 'text' && content.format === 'flipping-card' && (
                    <div
                        className="relative w-full h-full"
                        style={{ perspective: '1000px' }} // Enable 3D perspective
                    >
                        <div
                        className={`absolute w-full h-full transition-transform duration-500 ${
                            isFlipped ? 'rotate-y-180' : ''
                        }`}
                        style={{
                            transformStyle: 'preserve-3d',
                        }}
                        onClick={toggleFlip} // Toggle flip on click
                        >
                        {/* Front Side */}
                        <div
                            className="absolute w-full h-full flex flex-col items-center justify-center bg-white"
                            style={{
                            backfaceVisibility: 'hidden',
                            }}
                        >
                            {content.front.map((item, index) => (
                            <p key={index} className={item.style}>
                                {item.text}
                            </p>
                            ))}
                        </div>

                        {/* Back Side */}
                        <div
                            className="absolute w-full h-full flex flex-col items-center justify-center bg-gray-100 rotate-y-180"
                            style={{
                            backfaceVisibility: 'hidden',
                            }}
                        >
                            {content.back.map((item, index) => (
                            <p key={index} className={item.style}>
                                {item.text}
                            </p>
                            ))}
                        </div>
                        </div>
                    </div>
                )}

                {content.type === 'text' && content.format === 'paragraphs' && (
                    <div className="p-4">
                        {content.paragraphs.map((para, index) => (
                        <p
                            key={index}
                            className={para.style}
                            dangerouslySetInnerHTML={{ __html: para.text }}
                        ></p>
                        ))}
                    </div>
                )}

            </div>
        </div>
    </div>
    );
}

export default Modal2;