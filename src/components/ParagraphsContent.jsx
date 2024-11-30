const ParagraphsContent = ({ paragraphs }) => {
  return (
    <div className="px-6 md:px-8 lg:px-16 py-4 bg-white h-auto w-80 md:w-[340px] lg:w-[580px] rounded-lg lg:rounded-[0.9rem]">
      {paragraphs.map((item, index) =>
        item.text ? (
          <p
            key={index}
            className={item.style}
            dangerouslySetInnerHTML={{ __html: item.text }}
          ></p>
        ) : item.image ? (
          <img
            key={index}
            src={item.image}
            alt={item.alt || 'Image'}
            className={item.style}
          />
        ) : null
      )}
    </div>
  );
};

export default ParagraphsContent;