const ParagraphsContent = ({ paragraphs }) => (
    <div className="px-6 md:px-8 lg:px-16 py-4 bg-white h-auto w-80 md:w-[340px] lg:w-[580px] rounded-lg lg:rounded-[0.9rem]">
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