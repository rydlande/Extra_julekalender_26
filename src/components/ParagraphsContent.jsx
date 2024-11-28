const ParagraphsContent = ({ paragraphs }) => (
    <div className="relative w-full h-full flex flex-col items-center justify-between p-14 transition-transform duration-500 ease-in-out">
      {paragraphs.map((para, index) => (
        <p
          key={index}
          className={para.style}
          dangerouslySetInnerHTML={{ __html: para.text }}
        ></p>
      ))}
    </div>
  );
  
  export default ParagraphsContent;