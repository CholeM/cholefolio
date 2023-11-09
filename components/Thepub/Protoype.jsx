/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Findings, ProjectContainer } from "../Project/ProjectSummary";

export default function Prototype() {
  return (
    <div className="pb-16">
      <ProjectContainer>
        <h3 className="text-4xl sm:text-5xl mb-[0.35em]">Prototype</h3>

        <div className="flex flex-wrap pb-8 lg:flex-nowrap lg:flex-row gap-6">
          <div className="lg:basis-2/3">
            <h4 className="text-3xl sm:text-4xl mb-[0.35em]">
              Paper Wireframes
            </h4>
            <p className="mb-4">
              Drafting iterations of each screen on paper ensured that necessary
              elements that made it to the digital wireframe would be
              well-suited to address the user's pain points. For the home
              screen, I focused on an easy ordering process.
            </p>
          </div>

          <div className="lg:basis-2/3">
            <img
              src="/images/ThePub/paper-wireframe.png"
              alt="paper wireframe"
              className="dark:bg-slate-900 shadow-lg"
              width="100%"
            />
          </div>
        </div>

        <div className="flex flex-wrap flex-col-reverse pb-8 lg:flex-nowrap lg:flex-row gap-2 lg:gap-6">
          <div className="lg:basis-2/3">
            <img
              src="/images/ThePub/Original.png"
              alt="final low fidelity"
              className="dark:bg-slate-900 shadow-lg"
              width="100%"
            />
          </div>

          <div className="lg:basis-1/3">
            <h4 className="text-3xl sm:text-4xl mb-[0.35em]">
              Low-Fidelity Wireframes
            </h4>
            <p className="mb-4">
              I refined the paper wireframes of the mobile app, and after
              multiple iterations, I developed the low-fidelity wireframes.{" "}
            </p>
          </div>
        </div>

        <h4 className="text-3xl sm:text-4xl mb-[0.35em]">Usability Study</h4>
        <p className="mb-4">
          I then conducted a usability study based on these wireframes. The
          feedback received aided in further refining and developing the
          high-fidelity wireframes. The findings of the first and second round
          are as follows:
        </p>

        <div className="pb-8 flex flex-col lg:flex-row gap-2 lg:gap-10 justify-content">
          <Findings title="Round 1 Findings">
            <ol className="list-decimal pb-[1rem] list-inside">
              <li>Users want to order meals quickly</li>
              <li>Users want to customize their meals</li>
              <li>Users want a pickup/delivery option</li>
            </ol>
          </Findings>
          <Findings title="Round 2 Findings">
            <ol className="list-decimal pb-[1rem] list-inside">
              <li>Meal customization process was confusing</li>
              <li>The profile creation was not straightforward</li>
              <li>There was no way to edit meal orders</li>
            </ol>
          </Findings>
        </div>

        <div className="flex flex-wrap flex-col-reverse pb-6 lg:flex-nowrap lg:flex-row-reverse gap-2 lg:gap-6">
          <div className="lg:basis-2/3">
            <img
              src="/images/ThePub/Updated.png"
              alt="refined fidelity"
              className="dark:bg-slate-900 shadow-lg"
              width="100%"
            />
          </div>

          <div className="lg:basis-1/3">
            <h4 className="text-3xl sm:text-4xl mb-[0.35em]">
              Refined Wireframes
            </h4>
            <p className="mb-4">
              After conducting an initial usability study, the author improved
              the customization section of their app by making it more distinct
              and providing additional information. However, a second study
              revealed that users still found the process tedious. To address
              this, the author added a "quick-add meals" option to the homepage
              to streamline the ordering process.
            </p>
          </div>
        </div>
      </ProjectContainer>
    </div>
  );
}
