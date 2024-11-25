import React from "react";
import { createRoot } from "react-dom/client";
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from "react-icons/fi";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  style?: "compact" | "longer";
}

const iconClasses = {
  success: "text-success-500",
  error: "text-danger-500",
  info: "text-warning-500",
};

const icon = {
  success: <FiCheckCircle />,
  error: <FiAlertCircle />,
  info: <FiInfo />,
};

const borderClasses = {
  success: "border-success-500",
  error: "border-danger-500",
  info: "border-warning-500",
};
const ToastToRender: React.FC<ToastProps> = ({
  message,
  type,
  style = "compact",
}) => {
  return style === "compact" ? (
    <div
      className={`absolute z-[999] top-2 max-w-[375px] translate-x-[50%] p-2 bg-[transparent] text-white rounded-md sm:top-8 right-[50%]  flex items-center border ${borderClasses[type]}`}
    >
      <span>
        <span
          className={`flex justify-between mb-2 text-sm font-semibold ${iconClasses[type]} text-opacity-90`}
        >
          <div className={`mr-2 flex items-center gap-1 ${iconClasses[type]} `}>
            {icon[type]} {type}
          </div>
          <FiX />
        </span>
        <p
          className={`text-sm font-semibold ${iconClasses[type]} text-opacity-90`}
        >
          {message}
        </p>
      </span>
    </div>
  ) : (
    <p
      className={`absolute z-[999] top-2 max-w-[375px] translate-x-[50%] p-2 bg-[transparent] text-black rounded-md sm:top-8 right-[50%]  flex items-center border ${borderClasses[type]}`}
    >
      pão de batata
    </p>
  );
};

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  time?: number;
}

export const useToast = () => {
  const root = document.getElementById("root");

  const toast = ({ message, type, time = 3000 }: ToastProps) => {
    const children = document.createElement("div");

    root?.appendChild(children);
    createRoot(children).render(
      <ToastToRender message={message} type={type} />,
    );

    setTimeout(() => {
      root?.removeChild(children);
    }, time);
  };

  return [toast];
};
