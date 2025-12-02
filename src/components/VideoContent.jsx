const VideoContent = ({ src, aspectRatio, height }) => (
  <div className={`relative w-full ${height} ${aspectRatio} bg-transparent`}>
    <video controls className="absolute inset-0 w-full h-full object-cover rounded-md lg:rounded-lg">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoContent;