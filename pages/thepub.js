import Final from "@/components/Thepub/Final";
import ProjectIntro from "@/components/Thepub/ProjectIntro";
import Prototype from "@/components/Thepub/Protoype";
import Research from "@/components/Thepub/Research";
import UserVisual from "@/components/Thepub/UserVisual";
import React from "react";

export default function SaveUp() {
  return (
    <div className="pt-14 pb-12">
      <ProjectIntro />
      <Research />
      <UserVisual />
      <Prototype />
      <Final />
    </div>
  );
}
