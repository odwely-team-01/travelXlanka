type AccordionItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  return (
    <div className="border border-gray-300 bg-white self-start">
      <div
        className="flex justify-between items-center p-4 cursor-pointer border-b-[1px] border-gray-300"
        onClick={onClick}
      >
        <h3 className="font-medium text-lg">{title}</h3>
        <span className="text-green-500 text-2xl">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="px-4 p-4">
          <p className="text-gray-600">{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;