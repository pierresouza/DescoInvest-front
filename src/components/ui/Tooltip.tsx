import React, { useState, ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouse = () => {
    setIsTooltipVisible((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <div
        className="tooltip-container relative"
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        {isTooltipVisible && (
          <div className="tooltip bg-gray-700 text-white text-sm p-2 rounded absolute top-full left-1/2 transform -translate-x-1/2">
            {text}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
