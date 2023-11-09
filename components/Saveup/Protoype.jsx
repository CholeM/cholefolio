/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProjectContainer } from "../Project/ProjectSummary";

export default function Prototype() {
  return (
    <div className="pb-12">
      <ProjectContainer>
        <h3 className="text-4xl sm:text-5xl mb-[0.35em]">Prototype</h3>

        <div className="flex flex-wrap pb-6 lg:flex-nowrap lg:flex-row gap-6">
          <div className="lg:basis-1/3">
            <h4 className="text-3xl sm:text-4xl mb-[0.35em]">
              Low-Fidelity Wireframes
            </h4>
            <p className="mb-4">
              I visualised the flow into sketches. After multiple iterations and
              refinement, I developed low-fidelity wireframes.
            </p>
            <p className="pb-2 font-semibold">Goals:</p>

            <ul className="list-disc pb-[1rem] list-inside">
              <li>Brainstorm content to show on the homepage</li>
              <li>
                Consider how to best showcase the user&apos;s data at a glance
              </li>
            </ul>
          </div>

          <div className="lg:basis-2/3">
            <img
              src="/images/SaveUp/initial low fidelity.png"
              alt="low fideltiy"
              className="dark:bg-slate-900 shadow-lg"
              width="100%"
            />
          </div>
        </div>

        <h5 className="pb-8 text-center italic text-lg sm:text-2xl">
          Feedback indicated that the home page, and onboarding process needed
          improvements.
        </h5>

        <div className="flex flex-wrap flex-col-reverse pb-6 lg:flex-nowrap lg:flex-row gap-2 lg:gap-6">
          <div className="lg:basis-2/3">
            <img
              src="/images/SaveUp/final low fidelity.png"
              alt="final low fidelity"
              className="dark:bg-slate-900 shadow-lg"
              width="100%"
            />
          </div>

          <div className="lg:basis-1/3">
            <h4 className="text-3xl sm:text-4xl mb-[0.35em]">
              Refined Wireframes
            </h4>
            <p className="mb-4">
              I applied this feedback and updated the lowfidelity wireframes.
            </p>
            <ul className="list-disc pb-[1rem] list-inside">
              <li>Refine the home screen</li>
              <li>Add an onboarding process</li>
              <li>Refine the visual design</li>
            </ul>
          </div>
        </div>
      </ProjectContainer>
    </div>
  );
};
