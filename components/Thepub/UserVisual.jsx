/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProjectContainer } from "../Project/ProjectSummary";

export default function UserVisual() {
  return (
    <>
      <div className="pb-12">
        <ProjectContainer>
          <div className="flex flex-col">
            <h3 className="text-4xl sm:text-5xl mb-[0.35em]">Our Users</h3>
            <p className="mb-4">
              Based on the research insights and competitive analysis, I
              developed two persona illustrating our target users, their goals
              and pain points.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap lg:flex-row border-box gap-6">
            <div className="lg:basis-1/2 shadow-lg">
              <img
                src="/images/ThePub/User Persona - Alyssa.png"
                alt="alyssa user persona"
              />
            </div>
            <div className="lg:basis-1/2 shadow-lg">
              <img
                src="/images/ThePub/User Persona - Ben.png"
                alt="ben user persona"
              />
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
          Based on the user research, I created a user journey table to understand the crucial 
          pain points and mindsets one may encounter while ordering from The Pub.
          </p>

          <img
            src="/images/ThePub/user-journey-map.png"
            alt="user journey map"
            className="shadow-lg"
            width="100%"
          />
        </ProjectContainer>
      </div>
    </>
  );
}
