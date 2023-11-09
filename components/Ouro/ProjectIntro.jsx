/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  ProjectContainer,
  ProjectSummary,
  Statement,
  Tagline,
} from "../Project/ProjectSummary";
import { ProjectDetail } from "../Project/ProjectDetail";

export default function ProjectIntro() {
  return (
    <>
      <div className="w-full bg-[#8EABD3] flex flex-wrap flex-row justify-end md:justify-center border-box">
        <img
          src="/images/Ouro/Ouro-App.png"
          alt="cover image"
          className="max-w-[790px]"
        />
      </div>

      <ProjectSummary>
        <ProjectContainer>
          <div className="flex flex-col">
            <h2 className="text-6xl font-light leading-[1.2] text-left">
              Ouro
            </h2>
            <Tagline>
              Designing a corporate website and client portal for IT consulting
              and support services company
            </Tagline>
          </div>

          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="lg:basis-3/4">
              <Statement title="Background">
                Ouro is an IT consulting and support company that provides a
                wide range of services, including software development, network
                design, cybersecurity, data backup and recovery, and IT project
                management, and is known for its dependable and efficient IT
                solutions.
              </Statement>
              <Statement title="The Problem">
                The CEO of Ouro approached me to revamp the company&apos;s website.
                Their website at the time was outdated and with many
                non-functional pages. The website essetianlly could not be used.
                They wanted the site to be a hub for all information related to
                the company; for clients and partners alike. In addition, the
                website should feature an updated client portal in which they
                can easily send product updates to clients.
              </Statement>
              <Statement title="Solution for Ouro">
                Build a custom system for Ouro that includes a client portal
                accessible to approved employees and clients. The portal should
                include tools to manage client status and allow for file uploads
                and downloads, newsletter access, and product updates. The
                website should be responsive and reflect Ouro&apos;s brand while
                providing easy access to the necessary features.
              </Statement>
              <Statement title="Results">
                After launching in 2021,{" "}
                <span className="font-semibold">
                  traffic increased to the site by 67%
                </span>
                , with a{" "}
                <span className="font-semibold">
                  decreased bounce rate of 55%
                </span>
                . The company also received
                <span className="font-semibold">
                  {" "}
                  positive feedback from over 60 different clients and partners
                </span>{" "}
                who utilized the client portal.
              </Statement>
            </div>
            <div>
              <ProjectDetail type="Project Type">Client Project</ProjectDetail>
              <ProjectDetail type="Team">
                UX Designer & Developer, Project Manager
              </ProjectDetail>
              <ProjectDetail type="Role">UX Designer, Developer</ProjectDetail>
              <ProjectDetail type="Deliverables">
                Website Prototype, code and resources, user manual, functional
                specification document
              </ProjectDetail>
              <ProjectDetail type="Duration">6 months</ProjectDetail>
              <ProjectDetail type="Tools">
                Figma, Laravel, MySQL, Microsoft Teams, AWS Lightsail
              </ProjectDetail>
            </div>
          </div>
        </ProjectContainer>
      </ProjectSummary>
    </>
  );
}
