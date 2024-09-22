import React from 'react';

type InputTextProps = {
  placeholder: string;
};

const InputText = ({ placeholder }: InputTextProps) => {
  return (
    <input
      type="text"
      className="text-sm placeholder:text-[#4D4D4D] p-4 border focus:outline-[#b4b1b1] border-[#b4b1b1] bg-white"
      name=""
      id=""
      placeholder={placeholder} // Fixed here
    />
  );
};

export default InputText;
