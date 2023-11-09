import React from "react";

const HeadContainer = ({ children }) => {
  return (
    <div className="w-full mx-auto border-box block px-[16px] sm:px-[24px]">
      {children}
    </div>
  )
}

export default HeadContainer;