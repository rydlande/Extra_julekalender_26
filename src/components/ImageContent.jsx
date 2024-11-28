const ImageContent = ({ src, description }) => (
    <img
      src={src}
      alt={description}
      className="w-full h-full object-cover"
    />
  );
  
  export default ImageContent;