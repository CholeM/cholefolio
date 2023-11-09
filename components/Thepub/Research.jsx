import React from "react";
import {
  Competition,
  CompetitionAnalysis,
  ProjectContainer,
} from "../Project/ProjectSummary";

export default function Research() {
  return (
    <ProjectContainer>
      <div className="flex flex-col">
        <h3 className="pt-4 mb-[0.35em] text-4xl sm:text-5xl">Research</h3>
        <h4 className="text-3xl sm:text-4xl mb-[0.35em]">
          User Interviews and Surveys
        </h4>
        <p className="mb-4">
          ThePub team decided to use surveys and user interviews to gather
          feedback from their regular patrons, who are considered busy, working
          adults aged between 21-50 years old. The UX researcher also conducted
          interviews with a smaller group of survey participants to gain a
          better understanding of the group and discovered that factors like
          obligations, disabilities, and dietary concerns posed challenges in
          ordering food from ThePub, in addition to time constraints.
        </p>

        <p className="mb-2 font-semibold">Pain points:</p>
        <ul className="list-disc pb-[1rem] list-inside">
          <li>
            Food ordering platforms are not well-equipped with assistive
            technology.
          </li>
          <li>
            Busy customers do not have time to order from The Pub via phone.
          </li>
          <li>
            It is not easy to place orders during ThePub’s peak hours, making it
            frustrating for customers.
          </li>
          <li>
            Users want to know more about the food they order and customize it.
          </li>
        </ul>

        <p className="pb-4 mb-4">
          The user interviews and surveys conducted were crucial in the UX
          design process. It helped the team understand the users&apos; needs,
          behaviours, and attitudes. By gathering insights about users, we can
          create a design that is more effective, efficient, and satisfying to
          use.
        </p>
      </div>

      <h4 className="text-3xl sm:text-4xl mb-[0.35em]">Competitive Analysis</h4>
      <p className="pb-4 font-semibold">
        During the competitive analysis process, I determined that three apps
        filled the needs of our users. These are:
      </p>
      <div className="pb-8 flex flex-col lg:flex-row gap-6">
        <Competition title="Chipotle">
          Mexican fast-food chain from America, is an indirect competitor.
        </Competition>

        <Competition title="Jack Astor's Bar and Grill">
          Rrestaurant chain from Canada that provides a fun environment, is a
          direct competitor.
        </Competition>

        <Competition title="Red Lobster">
          Seafood restaurant chain from America, is an indirect competitor.
        </Competition>
      </div>

      <h5 className="pb-8 mb-2 leading-[1.334] text-center text-2xl font-normal italic">
        The goal of the competitive audit compare the ordering process and ease
        of use of each competitior&apos;s app. We determined the following during the
        audit:
      </h5>

      <div className="pb-2 flex flex-col lg:flex-row gap-6">
        <CompetitionAnalysis title="1">
          Each service had one of the following: strong brand identity, great
          mobile experience, easy-to-use or unique features.
        </CompetitionAnalysis>

        <CompetitionAnalysis title="2">
          There was a lack of accessibility on their mobile app or website
        </CompetitionAnalysis>

        <CompetitionAnalysis title="3">
          For some competitiors, the user flow wasn&apos;t always intuitive
        </CompetitionAnalysis>
      </div>

      <p className="pb-12">
        ThePub team identified gaps and weaknesses in our competitors, allowing
        us to determine how to improve our product. We plan to make the app more
        accessible for users with disabilities by including alt text on images
        and optimizing the app for screen reader use. Additionally, we aim to
        provide an intuitive ordering process that is similar to in-person
        ordering at the restaurant.
      </p>
    </ProjectContainer>
  );
}
