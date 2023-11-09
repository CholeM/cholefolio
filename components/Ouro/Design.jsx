/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProjectContainer } from "../Project/ProjectSummary";

export default function Design() {
  return (
    <div className="pb-12">
      <ProjectContainer>
        <h3 className="text-4xl sm:text-5xl mb-[0.35em]">Design</h3>

        <p className="mb-4">
          I researched similar corporate website designs and possible client
          portal designs. I based the website design around Ouro&apos;s required
          pages and color scheme.
        </p>
        <h4 className="text-3xl sm:text-4xl mb-[0.35em]">
          Low-Fidelity Wireframes
        </h4>
        <p className="mb-4">
          I proceeded with sketching initial designs for the website. After
          multiple iterations and refinement, I developed low-fidelity
          wireframes. I presented the lo-fi wireframes to the Ouro stakeholders
          and explained the process and low-level design. Once satisfied with
          the presentation, I created the high-fidelity wireframe and the
          prototype.
        </p>

        <div className="flex flex-col lg:flex-row items-end gap-4 lg:gap-6 pb-12">
          <div className="basis-1/2">
            <img src="/images/Ouro/Low-Website-1.png" alt="homepage about us" className="w-full" />
            <p className="mb-[0.35em] italic text-center">
              Homepage / About Us
            </p>
          </div>
          <div className="basis-1/2">
            <img src="/images/Ouro/Low-Portal-2.png" alt="my products uploads" className="w-full" />
            <p className="mb-[0.35em] italic text-center">
              Client Portal - My Products / My Uploads
            </p>
          </div>
        </div>

        <h4 className="text-3xl sm:text-4xl mb-[0.35em]">
          High-Fidelity Wireframes
        </h4>
        <p className="mb-4">
          I iterated to ensure I followed design principles and stayed true to
          the company&apos;s branding. I presented these hi-fi wireframes to Ouro and
          allowed them to test the prototype. Afterwards, I proceeded with the
          development process.
        </p>

        <div className="flex flex-col lg:flex-row items-end gap-4 lg:gap-6 pb-12">
          <div className="basis-1/2">
            <img src="/images/Ouro/Website-1.png" alt="high fidelity website" className="w-full" />
            <p className="mb-[0.35em] italic text-center">
              Homepage / About Us
            </p>
          </div>
          <div className="basis-1/2">
            <img src="/images/Ouro/Portal-2.png" alt="high fidelity portal" className="w-full" />
            <p className="mb-[0.35em] italic text-center">
              My Products / My Uploads
            </p>
          </div>
        </div>
      </ProjectContainer>
    </div>
  );
}
