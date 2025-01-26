import React from "react";

export const ProjectSummary = ({ children }) => {
  return (
    <div className="pt-4 pb-[2rem] dark:bg-gray-900 bg-gray-100">
      {children}
    </div>
  )
}


export const Tagline = ({ children }) => {
  return (
    <p className="mb-4 pb-4 text-base font-normal leading-[1.75]">{children}</p>
  )
}

export const Statement = ({ title, children }) => {
  return (
    <>
      <h3 className="mb-1.5 text-[2.125rem] leading-[1.235] font-normal">{title}</h3>
      <p className="text-base mb-4 leading-[1.5]">{children}</p>
    </>
  )
}

export const Question = ({ children }) => {
  return (
    <p className="text-2xl leading-[1.334] pb-4 mb-4 italic">
      {children}
    </p>
  )
}

export const Competition = ({ title, children }) => {
  return (
    <div className="basis-1/3">
        <h6 className="mb-2 bg-violet-200 dark:bg-violet-900 text-xl">
          {title}
        </h6>
        <p className="pb-4">
          {children}
        </p>
    </div>
  )
} 

export const CompetitionAnalysis = ({ title, children }) => {
  return (
    <div className="basis-1/3">
        <h2 className="text-center text-[3.75rem] leading-[1.2] dark:text-violet-300 text-violet-900 font-light">
          {title}
        </h2>
        <p className="pb-4">
          {children}
        </p>
    </div>
  )
} 

export const ProjectContainer = ({ className, children }) => {
  return (
      <div className={`lg:container mx-auto flex w-full items-center flex-wrap px-4 sm:px-6 grid`}>
        {children}
      </div>
  )
} 

export const VisualPoints = ({ title, children }) => {
  return (
    <div> 
      <h6 className="font-semibold text-violet-900 dark:text-violet-300 text-lg sm:text-xl mb-2">
        {title}
      </h6>
      <p>
        {children}
      </p>
    </div>
  )
}

export const Findings = ({ title, children }) => {
  return (
    <div> 
      <h6 className="font-semibold text-violet-900 dark:text-violet-300 text-lg sm:text-xl mb-2">
        {title}
      </h6>
      <>
        {children}
      </>
    </div>
  )
}