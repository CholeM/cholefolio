import ClientPortal from "@/components/Ouro/ClientPortal";
import Design from "@/components/Ouro/Design";
import Development from "@/components/Ouro/Development";
import ProjectIntro from "@/components/Ouro/ProjectIntro";
import React from "react";

export default function Ouro() {
  return (
    <>
      <ProjectIntro />
      <ClientPortal />
      <Design />
      <Development />
    </>
  )
}