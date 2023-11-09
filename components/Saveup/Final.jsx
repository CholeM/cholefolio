/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProjectContainer, VisualPoints } from "../Project/ProjectSummary";

export default function Final() {
  return (
    <>
      <div className="pb-12">
        <ProjectContainer>
          <h3 className="text-4xl sm:text-5xl mb-[0.35em]">
            Visualising the Experience
          </h3>
          <p className="mb-4">
            Between the low-fidelity and high-fidelity wireframes, I iterated
            upon the design. I followed design principles and stayed true to the
            branding that I created for the app.
          </p>
          <div className="pb-10 flex flex-col lg:flex-row gap-2 lg:gap-6">
            <div className="shadow-lg dark:bg-slate-900">
              <img
                src="/images/SaveUp/onboarding.png"
                alt="onboarding"
                width="100%"
              />
            </div>
            <VisualPoints title="Onboarding">
              When a user enters the app for the first time they are greeted
              with a minimal, intuitive and clean onboarding guiding them
              through the first phase of the app.
            </VisualPoints>
          </div>
          <div className="pb-10 flex flex-col-reverse lg:flex-row gap-2 lg:gap-6">
            <VisualPoints title="Add Savings Goal">
              From the app homepage, users can begin the process of adding their
              first savings goal. The goal is easily trackable from the
              homepage.
            </VisualPoints>
            <div className="shadow-lg dark:bg-slate-900">
              <img
                src="/images/SaveUp/add savings goal.png"
                alt="add savings goal"
                width="100%"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
            <div className="shadow-lg dark:bg-slate-900">
              <img
                src="/images/SaveUp/community.png"
                alt="community"
                width="100%"
              />
            </div>
            <div>
              <VisualPoints title="Community">
                Users have access to the community for added information and
                help on achieving their savings goals. The community is divided
                into forums and articles.
              </VisualPoints>
            </div>
          </div>
        </ProjectContainer>
      </div>

      <div className="pb-12">
        <ProjectContainer>
          <div className="flex flex-col">
            <h3 className="text-4xl sm:text-5xl mb-[0.35em]">Testing</h3>
            <h4 className="text-3xl sm:text-4xl mb-[0.35em]">
              Usability Testing
            </h4>
            <p className="mb-6">
              The team finally conducted an unmoderated usability study with 20
              participants remotely in Barbados to get feedback on SaveUp. Each
              participant was given 60 minutes to test the app, ensuring that
              users could share their honest opinions.
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-3xl sm:text-4xl mb-[0.35em]">Insights</h4>
            <p className="mb-4">
              Thanks to the feedback from real-time users, we can proceed with
              another round of iterating and improving the app. Some insights we
              determined:
            </p>
            <ul className="list-disc pb-[1rem] list-inside">
              <li>Bring more focus to the tips and insights for users.</li>
              <li>
                Edit expenses, bills, goals and deposits to be more intuitive
                for users by adding a button.
              </li>
            </ul>
          </div>
        </ProjectContainer>
      </div>

      <div className="pb-12">
        <ProjectContainer>
          <h3 className="text-4xl sm:text-5xl mb-[0.35em]">Retrospective</h3>
          <p className="mb-4">
            One of the biggest challenges of this project was balancing the
            needs of the target audience with the constraints of the Barbados
            banking system.
          </p>
          <p className="mb-4">
            Designing an app (or any tool) for social good requires dedication
            and multiple revisions. This dedication ensures the product
            accomplishes its goal instead of marginalizing the target audience.
            <span className="font-semibold">
              {" "}
              One must listen and internalize the user feedback to meet their
              needs.
            </span>
          </p>
        </ProjectContainer>
      </div>
    </>
  );
};
