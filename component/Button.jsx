import React from "react";

const Button = ({ text, onClick, className,type = "button" }) => {
  return (
    <button type={type} onClick={onClick} className={`${className} px-6 py-5 bg-[#FF900E] cursor-pointer hover:border-[#FF900E] border border-transparent hover:text-black hover:bg-amber-50 text-white rounded font-semibold text-xl mt-7.5 `}>
      {text}
    </button>
  );
};

export default Button;
