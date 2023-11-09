/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  ProjectContainer,
  ProjectSummary,
  Question,
  Statement,
  Tagline,
} from "../Project/ProjectSummary";
import { ProjectDetail } from "../Project/ProjectDetail";

export default function ProjectIntro() {
  return (
    <>
      <div className="w-full bg-[#F9B03E] flex flex-wrap flex-row justify-end md:justify-center border-box">
        <img
          src="/images/ThePub/ThePub.png"
          alt="cover image"
          className="max-w-[790px]"
        />
      </div>

      <ProjectSummary>
        <ProjectContainer>
          <div className="flex flex-col">
            <h2 className="text-6xl font-light leading-[1.2] text-left">
              ThePub
            </h2>
            <Tagline>
              Designing a mobile app for those who want to order from ThePub
              restaurant while on the go.
            </Tagline>
          </div>

          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="lg:basis-3/4">
              <Statement title="ThePub's Problem">
                ThePub is a popular restaurant in Toronto. In this era, they
                want to expand their business’ online presence. Their target
                audiences are busy, young professionals and remote workers.
              </Statement>
              <Statement>
                To get their order during peak hours, users have long wait
                times. Busy professionals and remote workers do not have easy
                access to the restaurant and must travel to eat there.
              </Statement>
              <Question>
                “How might we allow potential customers to order and receive
                their food from the restaurant with ease?”
              </Question>
              <Statement title="Solution for Food Ordering">
                ThePub, a mobile application that allows users to order from the
                restaurant of the same name. Users will be be able to order and
                have their desired meal ready for pick-up, delivery or dine-in.
              </Statement>
              <Statement title="Results">
                The mobile application for ThePub was designed with
                accessibility in mind to ensure usability for people with
                disabilities. The app has been successful in addressing user
                needs and has received positive feedback, expected to contribute
                to the expansion of the restaurant’s online presence. The team
                intends to measure the success of the product by conducting a
                final usability study, looking at app downloads, and user
                engagement.
              </Statement>
            </div>
            <div>
              <ProjectDetail type="Project Type">
                Design Challenge, Team Project
              </ProjectDetail>
              <ProjectDetail type="Team">
                UX Designer, Project Manager, UX Manager, Marketing Manager
              </ProjectDetail>
              <ProjectDetail type="Role">UX Designer</ProjectDetail>
              <ProjectDetail type="Deliverables">
                Mobile App Prototype
              </ProjectDetail>
              <ProjectDetail type="Duration">1 month</ProjectDetail>
              <ProjectDetail type="Tools">Figma</ProjectDetail>
            </div>
          </div>
        </ProjectContainer>
      </ProjectSummary>
    </>
  );
}
