import React from "react";

export const IconButton = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`inline-flex flex-[0_0_auto] rounded-[50%] overflow-visible text-center items-center relative border-box bg-transparent outline-0 ${className}`}>
      {children}
    </button>
  )
}