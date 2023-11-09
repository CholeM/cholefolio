import React from "react";

export const ProjectDetail = ({ children, type }) => {

  return (
    <div className="pb-2">
      <h6 className="font-medium text-xl">
        {type}
      </h6>
      <p className="text-base">
        {children}
      </p>
    </div>
  )
}