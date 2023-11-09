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
            Converting the low-fidelity into high-fidelity mockups, I iterated
            upon the design. I followed design principles and stayed true to the
            branding provided by the marketing team.
          </p>
          <div className="pb-10 flex flex-col lg:flex-row-reverse gap-2 lg:gap-6">
            <div className="shadow-lg dark:bg-slate-900">
              <img
                src="/images/ThePub/Homepage-Meal-Favorites.png"
                alt="Homepage, Meal, Favourites"
                width="100%"
              />
            </div>
            <VisualPoints title="Homepage, Meal, Favourites">
              When a user enters the app, they are met with the homepage of the
              app, displaying the day&apos;s special for quick ordering, the ability
              to browse by category and popular meals. They are also able to add
              meals to their favourites lists, and customise the meal before
              adding it to their order.
            </VisualPoints>
          </div>
          <div className="pb-10 flex flex-col-reverse lg:flex-row-reverse gap-2 lg:gap-6">
            <VisualPoints title="Ordering Process">
              The order process is simplified for the user, they can add meals
              to their order, check out, choose their dining experience, enter
              their payment details and submit their order.
            </VisualPoints>
            <div className="shadow-lg dark:bg-slate-900">
              <img
                src="/images/ThePub/Order-Process.png"
                alt="Ordering Process"
                width="100%"
              />
            </div>
          </div>
        </ProjectContainer>
      </div>

      <div className="pb-12">
        <ProjectContainer>
          <h3 className="text-4xl sm:text-5xl mb-[0.35em]">
            Accessibility Concerns
          </h3>

          <p className="mb-4">
            It&apos;s important to consider accessibility concerns when designing
            products or services. I strive to incorporate inclusive design
            practices that ensure usability for all, including people with
            disabilities such as visual, auditory, physical, or cognitive
            impairments.
          </p>
          <p className="mb-2 font-semibold">
            For the app, this has been addressed via the following:
          </p>
          <ol className="list-decimal pb-[1rem] list-inside">
            <li>Added alt text to images for screen readers.</li>
            <li>Used icons to help make navigation easier.</li>
            <li>
              Used distinct colours to differentiate between
              selected/highlighted text and buttons.
            </li>
          </ol>
        </ProjectContainer>
      </div>

      <div className="pb-12">
        <ProjectContainer>
          <div className="flex flex-col">
            <h3 className="text-4xl sm:text-5xl mb-[0.35em]">Going Forward</h3>
            <h4 className="text-3xl sm:text-4xl mb-[0.35em]">Takeaways</h4>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="basis-1/2">
                <h5 className="mb-[0.35em] text-2xl">Impact</h5>
                <p className="mb-4">
                  The app makes users feel like ThePub really wants to meet
                  their needs.
                </p>
                <p className="mb-4 italic font-medium">
                  “This app makes it so easy to customize my meal. I’m able to
                  exclude the ingredients I am allergic to. I would definitely
                  use this when I’m on the go and need a fast, healthy meal!”
                </p>
                <p className="mb-4">- Peer feedback participant</p>
              </div>
              <div className="basis-1/2">
                <h5 className="mb-[0.35em] text-2xl">What I learned</h5>
                <p className="mb-4">
                  Designing an app is a complex process that requires continuous
                  refinement to meet user needs. The initial designs serve as a
                  foundation for further development, and peer feedback and
                  usability studies are crucial to the app&apos;s design and overall
                  development.
                </p>
              </div>
            </div>

            <h4 className="pt-3 text-3xl sm:text-4xl mb-[0.35em]">
              Next Steps
            </h4>
            <p className="mb-4 font-semibold">
              In the future, I plan to take the following steps for the app:
            </p>
            <ol className="list-decimal pb-[1rem] list-inside">
              <li>
                Conduct more user research to determine any new areas of need
              </li>
              <li>
                Conduct another round of usability studies to determine if all
                pain points have been addressed and corrected
              </li>
            </ol>
          </div>
        </ProjectContainer>
      </div>

      <div className="pb-12">
        <ProjectContainer>
          <h3 className="text-4xl sm:text-5xl mb-[0.35em]">Retrospective</h3>
          <p className="mb-4">
            I am proud of achieving accessibility and customization in the app,
            but faced challenges in finding the right balance between simplicity
            and customization. They learned about the importance of
            incorporating accessibility features from the start, balancing
            simplicity and customization, and testing and iterating on designs
            for future projects.
          </p>
          <p className="mb-4">
            Working with a team contributed to me a growing a designer, as it
            was important to get feedback from other members of the UX team.
          </p>
        </ProjectContainer>
      </div>
    </>
  );
}
