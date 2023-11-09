import React from "react";

const Toolbar = ({ children }) => {
  return (
    <div className="relative flex items-center px-4 sm:px-6 min-h-[56px] sm:min-h-[64px]">
      {children}
    </div>
  )
}

export default Toolbar;