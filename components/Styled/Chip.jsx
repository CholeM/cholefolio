import React from "react";

const Chip = ({ label, className }) => {

  return (
    <div className={`px-3 font-medium rounded-2xl justify-center uppercase text-sm inline-flex h-[32px] whitespace-nowrap items-center ${className}`}>
      {label}
    </div>
  )
}

export default Chip;