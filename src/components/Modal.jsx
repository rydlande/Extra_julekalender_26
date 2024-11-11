function Modal({ content, onClose }) {
  if (!content) return null; // Safeguard in case content is missing

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg text-center relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black font-bold"
        >
          &times;
        </button>

        {/* Dynamic Content Display */}
        {content.type === 'image' && (
          <img src={content.src} alt={content.description} className="w-full h-auto" />
        )}
        {content.type === 'video' && (
          <video controls className="w-full">
            <source src={content.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {content.type === 'text' && <p>{content.description}</p>}

        <p className="mt-4">{content.description}</p>
      </div>
    </div>
  );
}

export default Modal;