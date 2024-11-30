import { useEffect, useState } from 'react';
import { isDoorOpen } from '../utils/dataHelpers';
import VideoContent from './VideoContent';
import ImageContent from './ImageContent';
import FlippingCardContent from './FlippingCardContent';
import ParagraphsContent from './ParagraphsContent';
import ImageAndTextContent from './ImageAndTextContent';

function Modal2({ content, onClose, luke }) {
    if (!content) return null;

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
                className={`relative rounded-lg shadow-lg text-center`}
            >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red text-white rounded-full w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 flex items-center justify-center font-ExtraRound-Medium text-3xl md:text-4xl lg:text-5xl z-20"
                >
                    <span className="-mb-1 md:-mb-1.5 lg:-mb-2">{luke}</span>
                </div> 
                <button
                    onClick={onClose}
                    className="absolute top-2 right-1 md:right-1.5 lg:right-2 font-bold text-3xl md:text-4xl lg:text-5xl z-10 text-red-dark text-center w-8 h-8"
                >
                &times;
                </button>

                {content.type === 'video' && <VideoContent src={content.src} />}
                {content.type === 'image' && <ImageContent src={content.src} description={content.description} />}
                {content.type === 'text' && content.format === 'paragraphs' && (
                    <ParagraphsContent paragraphs={content.paragraphs} />
                )}

                {/* <div className='mx-6 md:mx-8 lg:mx-16 py-4 bg-white rounded-lg lg:rounded-[0.9rem]'>
                    {content.type === 'text' && content.format === 'flipping-card' && (
                        <FlippingCardContent front={content.front} back={content.back} />
                    )}
                </div> */}
                {content.type === 'text' && content.format === 'flipping-card' && (
                <div className={`group px-6 md:px-8 lg:px-16 py-4 w-80 md:w-[340px] lg:w-[580px] bg-white rounded-lg lg:rounded-[0.9rem] [perspective:1000px] ${
                    content.heightClass
                  }`}>
                    <FlippingCardContent front={content.front} back={content.back} />
                </div>
                )}
                {/* {content.type === 'text' && content.format === 'flipping-card' && (
                    <div
                        className="relative w-full h-full"
                        style={{ perspective: '1000px' }}
                    >
                        <div
                        className={`absolute w-full h-full transition-transform duration-500 ${
                            isFlipped ? 'rotate-y-180' : ''
                        }`}
                        style={{
                            transformStyle: 'preserve-3d',
                        }}
                        onClick={toggleFlip} 
                        >
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
                )} */}

            </div>
        </div>
    </div>
    );
}

export default Modal2;