/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProjectContainer, VisualPoints } from "../Project/ProjectSummary";

export default function Development() {
  return (
    <>
      <div className="pb-12">
        <ProjectContainer>
          <h3 className="text-4xl sm:text-5xl mb-[0.35em]">Development</h3>
          <p className="mb-4">
            I developed the website using LAMP Stack (using Laravel framework).
            Since the design was custom, I built the website's functionality
            from the bottom up. I chose AWS Lightsail due to its scalability,
            and the anticipated small size of the website and the files to be
            uploaded. The previous host provider transferred the domain to Ouro
            for in-house management.
          </p>
          <p className="mb-4 font-semibold">
            The development process took approximately 6 months of total effort.
          </p>
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
              I conducted user testing to get feedback on the website and client
              portal. The study was an unmoderated usability study. I conducted
              the study among the stakeholders at their leisure. They presented
              any issues or concerns that they may have encountered.
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-3xl sm:text-4xl mb-[0.35em]">Insights</h4>
            <ul className="list-disc pb-[1rem] list-inside">
              <li>
                All users were satisfied with the look and feel of the site and
                portal
              </li>
              <li>
                Users found the process of logging into the portal very
                intuitive
              </li>
              <li>
                The stakeholders requested that the website be updated to
                dissuade plagiarism
              </li>
              <li>
                Users requested that there be an easy way to bulk-upload client
                information
              </li>
            </ul>
            <p className="mb-4">
              Due to this feedback, I made another round of updates; and the
              website was then at the stage to launch.
            </p>
          </div>
        </ProjectContainer>
      </div>

      <div className="pb-12">
        <ProjectContainer>
          <h3 className="text-4xl sm:text-5xl mb-[0.35em]">Results</h3>
          <p className="mb-4">
            The Ouro website and client portal revamp project was successful and
            received positive user feedback due to the use of custom development
            and the incorporation of user feedback throughout the design and
            development process. The project could be further improved in future
            by establishing clear timelines and project scope from the beginning
            and incorporating more user research and testing. The collaboration
            between the client and developer resulted in a professional,
            user-friendly final product.
          </p>

          <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 w-full items-center">
            <div className="basis-1/3">
              <h3 className="text-4xl sm:text-5xl mb-[0.35em] font-semibold text-violet-900 dark:text-violet-300">
                55%
              </h3>
              <p className="text-2xl text-violet-950 dark:text-violet-200 font-medium">
                Decreased Bounce Rate
              </p>
            </div>
            <div className="basis-1/3">
              <h3 className="text-4xl sm:text-5xl mb-[0.35em] font-semibold text-violet-900 dark:text-violet-300">
                67%
              </h3>
              <p className="text-2xl text-violet-950 dark:text-violet-200 font-medium">
                Increased Traffic Rate
              </p>
            </div>
            <div className="basis-1/3">
              <h3 className="text-4xl sm:text-5xl mb-[0.35em] font-semibold text-violet-900 dark:text-violet-300">
                60+
              </h3>
              <p className="text-2xl text-violet-950 dark:text-violet-200 font-medium">
                Positive Ouro Client Reviews
              </p>
            </div>
          </div>
        </ProjectContainer>
      </div>
    </>
  );
}
