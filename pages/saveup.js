import Final from "@/components/Saveup/Final";
import ProjectIntro from "@/components/Saveup/ProjectIntro";
import Prototype from "@/components/Saveup/Protoype";
import Research from "@/components/Saveup/Research";
import UserVisual from "@/components/Saveup/UserVisual";
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
