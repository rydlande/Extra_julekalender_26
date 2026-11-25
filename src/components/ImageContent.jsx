const ImageContent = ({
  src,
  description,
  aspectRatio = 'aspect-[602/510]',
  height = 'h-[300px] md:h-[600px]',
}) => (
    <div className={`relative w-full ${height} ${aspectRatio} bg-transparent`}>
      <img
        src={src}
        alt={description}
        className="absolute inset-0 w-full h-full object-cover rounded-md lg:rounded-lg"
      />
    </div>
  );
  
  export default ImageContent;