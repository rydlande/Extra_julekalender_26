const VideoContent = ({ src }) => (
    <video controls className="w-full h-full">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
  
  export default VideoContent;