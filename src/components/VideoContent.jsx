const VideoContent = ({ src }) => (
    <div className="relative w-full h-[500px] md:h-[750px] aspect-[9/16] bg-transparent">
      <video controls className="absolute inset-0 w-full h-full object-cover rounded-md lg:rounded-lg">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
  
  export default VideoContent;