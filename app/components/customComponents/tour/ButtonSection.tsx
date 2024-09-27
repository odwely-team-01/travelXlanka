import React from 'react';

type ButtonProps = {
  text: string;
};

const ButtonSection = ({ text }: ButtonProps) => {
  return (
    <button className="text-sm text-white p-4 border  hover:text-[#F85959] hover:bg-white border-[#F85959] bg-[#F85959]">
      {text}
    </button>
  );
};

export default ButtonSection;
