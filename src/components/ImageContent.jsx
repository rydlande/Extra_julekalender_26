const ImageContent = ({ src, description }) => (
    <div className="relative w-full h-[500px] md:h-[750px] aspect-[602/510] bg-transparent">
      <img
        src={src}
        alt={description}
        className="absolute inset-0 w-full h-full object-cover rounded-md lg:rounded-lg"
      />
    </div>
  );
  
  export default ImageContent;