import React from "react";

interface CustomHeaderProps {
  children: React.ReactNode;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ children }) => {
  return (
    <div className="w-full bg-black flex items-center justify-center h-[300px]">
      <p className="text-5xl text-white font-bold">{children}</p>
    </div>
  );
};

export default CustomHeader;
