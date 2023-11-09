import React from "react";

const Bar = ({ children }) => {
  return (
    <div className="fixed bg-white dark:bg-[#0d1117] flex flex-col w-full top-0 left-auto right-0 shrink-0 box-border z-[1100] shadow-xl dark:border-b dark:border-slate-700">
      {children}
    </div>
  )
}

export default Bar;