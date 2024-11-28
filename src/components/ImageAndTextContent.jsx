const ImageAndTextContent = ({ image, text }) => (
    <div className="relative w-full h-full flex flex-col items-center justify-around p-14 transition-transform duration-500 ease-in-out">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full max-w-sm mb-4"
      />
      {text.map((textItem, index) => (
        <p key={index} className={textItem.style}>
          {textItem.text}
        </p>
      ))}
    </div>
  );
  
  export default ImageAndTextContent;