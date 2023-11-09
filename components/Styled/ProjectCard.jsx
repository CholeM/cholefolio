/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CardImage = ({ image, alt }) => {

  return (
    <img 
      src={image} 
      alt={alt}
      className="block object-cover bg-cover bg-no-repeat bg-center"
    />
  )
}

export const CardLink = ({ children }) => {

  return (
    <div className="px-4 pb-4 flex items-center pt-5 [&>:not(:first-child)]:ml-3">
      {children}
    </div>
  )
}

export const ProjectCard = ({ children }) => {

  return (
    <div className="bg-white dark:bg-slate-800 text-slate-950 dark:text-slate-50 rounded-lg transition-shadow shadow-md overflow-hidden relative">
      {children}
    </div>
  )
}

export const CardContent = ({ children }) => {

  return (
    <div className="px-4 pt-4">{children}</div>
  )
}