/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProjectContainer } from "../Project/ProjectSummary";

export default function UserVisual() {
  return (
    <>
      <div className="pb-12">
        <ProjectContainer>
          <div className="flex flex-col">
            <h3 className="text-4xl sm:text-5xl mb-[0.35em]">
              Our Users
            </h3>
            <p className="mb-4">
              From the insights and data gathered, we were able to come up with the user persona 
              and prioritize features to support them. 
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap lg:flex-row border-box gap-6">
            <div className="lg:basis-1/2 shadow-lg">
              <img src="/images/SaveUp/User Persona - Jennifer.png" alt="jennifer user persona" width="100%" />
            </div>
            <div className="lg:basis-1/2 shadow-lg">
              <img src="/images/SaveUp/User Persona - George.png" alt="george user persona" width="100%" />
            </div>
          </div>
        </ProjectContainer>
      </div>

      <div className="pb-12">
        <ProjectContainer>
          <h3 className="text-4xl sm:text-5xl mb-[0.35em]">
            Visualising the User Journey
          </h3>
          <p className="mb-4">
            The user journey showcases the significant steps taken by users, starting from the 
            moment they access the SaveUp app.
          </p>
          
          <img src="/images/SaveUp/SaveUp Task Flow.png" alt="saveup task flow" className="shadow-lg" width="100%" />
        </ProjectContainer>
      </div>
    </>
  )
}