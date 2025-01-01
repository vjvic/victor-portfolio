import React from "react";

const Button = ({
  title,
  icon,
  position,
  handleClick,
  otherClass,
}: {
  title?: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClass?: string;
}) => {
  return (
    <div>
      <button
        className={`w-full inline-flex h-12 animate-shimmer items-center
       justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
       bg-[length:200%_100%] px-6 py-5 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2
     focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-5 gap-3 ${otherClass}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </button>
    </div>
  );
};

export default Button;
