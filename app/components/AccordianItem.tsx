import { useRef, useState, useEffect } from 'react';

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
  const [height, setHeight] = useState<number | 'auto'>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const contentHeight = contentRef.current
        ? contentRef.current.scrollHeight
        : 0;
      setHeight(contentHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-300 bg-white self-start w-full">
      <div
        className="flex justify-between items-center p-4 cursor-pointer border-b-[1px] border-gray-300"
        onClick={onClick}
      >
        <h3 className="font-medium text-lg">{title}</h3>
        <div className="h-5 w-5 p-1 bg-green-500 flex items-center justify-center rounded-full">
          <span className="text-white text-2xl">
            {isOpen ? (
              <span className="flex -translate-y-[2px]">-</span>
            ) : (
              <span>+</span>
            )}
          </span>
        </div>
      </div>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: `${height}px` }}
        ref={contentRef}
      >
        <div className="px-4 p-4">
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
