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
      <div className="w-full bg-[#77BB7D] flex flex-wrap flex-row justify-end md:justify-center border-box">
        <img
          src="/images/SaveUp/SaveUp Cover.png"
          alt="cover image"
          className="max-w-[790px]"
        />
      </div>

      <ProjectSummary>
        <ProjectContainer>
          <div className="flex flex-col">
            <h2 className="text-6xl font-light leading-[1.2] text-left">
              Save Up
            </h2>
            <Tagline>
              Designing a mobile app that helps the youth to save and make
              better financial decisions.
            </Tagline>
          </div>

          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="lg:basis-3/4">
              <Statement title="The Problem in My Country Barbados">
                Many young Barbadians struggle to meet their financial goals due
                to a lack of financial literacy, difficulty managing expenses,
                and limited access to resources.
              </Statement>
              <Question>
                “How might we address these challenges and empower young
                Barbadians to take control of their finances and build a strong
                foundation for their future?”
              </Question>
              <Statement title="Solution for Budgeting">
                SaveUp is a mobile application that allows users to set
                financial goals and track expenses and provides a community of
                peers and information on finance topics.
              </Statement>
              <Statement title="Results">
                The app&apos;s look and feel was satisfactory for all users, and
                19 out of 20 users were able to complete the sign and login
                process. However, half of the users did not find the tips and
                insights engaging or noticeable. The majority of users enjoyed
                the goal-setting section the most, but had difficulty editing
                their expenses, bills, and goal deposits.
              </Statement>
            </div>
            <div>
              <ProjectDetail type="Project Type">
                Design Challenge, Team Project
              </ProjectDetail>
              <ProjectDetail type="Team">
              UX Designer, Project Manager, Design Team
              </ProjectDetail>
              <ProjectDetail type="Role">
                UX Designer
              </ProjectDetail>
              <ProjectDetail type="Deliverables">
                Mobile App Prototype
              </ProjectDetail>
              <ProjectDetail type="Duration">
                2 months
              </ProjectDetail>
              <ProjectDetail type="Tools">
                Figma
              </ProjectDetail>
            </div>
          </div>
        </ProjectContainer>
      </ProjectSummary>
    </>
  );
}
