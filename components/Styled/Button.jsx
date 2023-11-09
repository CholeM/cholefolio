import React from "react";

const Button = ({ children, href, className, target }) => {
  return (
    <a href={href} target={target}>
      <div className={`rounded-lg min-w-[64px] px-4 py-1.5 my-2 block ${className}`}>
        {children}
      </div>
    </a>
  )
}

export default Button;