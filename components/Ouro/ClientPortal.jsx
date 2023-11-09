/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Competition,
  CompetitionAnalysis,
  ProjectContainer,
} from "../Project/ProjectSummary";

export default function ClientPortal() {
  return (
    <ProjectContainer>
      <div className="flex flex-col">
        <h3 className="pt-4 mb-[0.35em] text-4xl sm:text-5xl">Client Portal</h3>
        <p className="mb-4">
          The client portal would be accessible to clients and approved
          employees.{" "}
          <span className="font-semibold">
            Include the necessary tools that allow for the setting of a client&apos;s
            status from active to inactive.
          </span>{" "}
          These tools were important due to the subscription-based nature of
          Ouro&apos;s products. Access must be able to be revoked when need be.
        </p>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="basis-1/2">
            <p className="mb-2 font-semibold">
              The client would be able to do the following:
            </p>
            <ul className="list-disc pb-[1rem] list-inside">
              <li>Upload files and documents to the Ouro systems</li>
              <li>Download newsletters</li>
              <li>Download files uploaded by Ouro</li>
              <li>Download product updates</li>
            </ul>
          </div>

          <div className="basis-1/2">
            <p className="mb-2 font-semibold">
              Ouro would be able to do the following:
            </p>
            <ul className="list-disc pb-[1rem] list-inside">
              <li>
                Upload client files, product updates and newsletters to the Ouro
                systems
              </li>
              <li>Download client files</li>
              <li>Disable client accounts</li>
              <li>Create client accounts</li>
              <li>Reset client passwords</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-end gap-4 lg:gap-6 pb-12">
          <div className="basis-1/2">
            <img src="/images/Ouro/Upload.png" width="100%" alt="upload files process" />
            <p className="mb-[0.35em] italic text-center">
              Upload Files Process
            </p>
          </div>
          <div className="basis-1/2">
            <img src="/images/Ouro/Download.png" width="100%" alt="download files process" />
            <p className="mb-[0.35em] italic text-center">
              Download Files Process
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-4xl sm:text-5xl mb-[0.35em]">Contributions</h3>
      <p className="pb-12">
        I worked together in a small team of two with the project manager. In my
        role as UX designer and developer I analyzed user research, created
        wireframes, and communicated with the project manager to create a final
        prototyped solution. Once approved, I also developed the website and
        deployed it.
      </p>
    </ProjectContainer>
  );
}
