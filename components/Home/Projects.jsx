import React from "react";
import Container from "../Styled/Container";
import {
  ProjectCard,
  CardImage,
  CardContent,
  CardLink,
} from "../Styled/ProjectCard";
import Chip from "../Styled/Chip";
import Button from "../Styled/Button";

export default function Projects() {
  return (
    <div className="pb-16">
      <Container>
        <h2
          id="projects"
          className="text-4xl sm:text-2xl md:text-4xl font-semibold pb-8 underline decoration-8 decoration-violet-500 underline-offset-[12px]"
        >
          Projects 📋
        </h2>
        <h3 className="text-2xl font-medium pb-5">Development Projects</h3>
        <div className="grid lg:grid-cols-2 gap-8 pb-14">
          <ProjectCard>
            <CardImage image="/images/AnimeGen.png" alt="Anime Gen Cover" />
            <CardContent>
              <h4 className="text-[2rem] font-semibold pb-2 uppercase">
                Anime Gen
              </h4>
              <p className="text-base">
                A React application that generates a random Anime for user to
                watch. Includes an anime ranking list for current season and
                overall.
              </p>
              <div className="flex gap-2 pt-4">
                <Chip label="React" className="border-2 border-slate-600" />
                <Chip label="Next.js" className="border-2 border-slate-600" />
                <Chip label="API" className="border-2 border-slate-600" />
                <Chip label="Tailwind" className="border-2 border-slate-600" />
              </div>
            </CardContent>
            <CardLink>
              <Button
                href="https://anime-gen.vercel.app/"
                target="_blank"
                className="bg-violet-900 hover:bg-violet-800 text-lg shadow-md font-medium uppercase text-white"
              >
                Live
              </Button>
              <Button
                href="https://github.com/CholeM/anime-gen"
                target="_blank"
                className="bg-violet-900 hover:bg-violet-800 text-lg shadow-md font-medium uppercase text-white"
              >
                GitHub
              </Button>
            </CardLink>
          </ProjectCard>

          <ProjectCard>
            <CardImage
              image="/images/jammming.png"
              alt="Jammming Spotify Cover"
            />
            <CardContent>
              <h4 className="text-[2rem] font-semibold pb-2 uppercase">
                Jammming
              </h4>
              <p className="text-base">
                A simple React application that helps you quickly add playlists
                to your Spotify account.
              </p>
              <div className="flex gap-2 pt-4">
                <Chip label="React" className="border-2 border-slate-600" />
                <Chip
                  label="HTML / CSS"
                  className="border-2 border-slate-600"
                />
                <Chip label="API" className="border-2 border-slate-600" />
              </div>
            </CardContent>
            <CardLink>
              <Button
                href="https://jammming-cm.netlify.app/"
                target="_blank"
                className="bg-violet-900 hover:bg-violet-800 text-lg shadow-md font-medium uppercase text-white"
              >
                Live
              </Button>
              <Button
                href="https://github.com/CholeM/jammming"
                target="_blank"
                className="bg-violet-900 hover:bg-violet-800 text-lg shadow-md font-medium uppercase text-white"
              >
                GitHub
              </Button>
            </CardLink>
          </ProjectCard>

          <ProjectCard>
            <CardImage
              image="/images/work/AnimeKonExpoWebsite.png"
              alt="AnimeKon Expo Website Cover"
            />
            <CardContent>
              <h4 className="text-[2rem] font-semibold pb-2 uppercase">
                AnimeKon Expo
              </h4>
              <p className="text-base">
                Pop culture convention website designed, and built on Wordpress
                for client.
              </p>
              <div className="flex gap-2 pt-4">
                <Chip label="Wordpress" className="border-2 border-slate-600" />
                <Chip label="PHP" className="border-2 border-slate-600" />
              </div>
            </CardContent>
            <CardLink>
              <Button
                href="https://animekonexpo.com/"
                target="_blanket"
                className="bg-violet-900 hover:bg-violet-800 text-lg shadow-md font-medium uppercase text-white"
              >
                Live
              </Button>
            </CardLink>
          </ProjectCard>
        </div>

        <h3 className="text-2xl font-medium pb-5">UX Case Studies</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          <ProjectCard>
            <CardImage image="/images/SaveUp/SaveUp Cover.png" alt="Save Up" />
            <CardContent>
              <h4 className="text-[2rem] font-semibold pb-2 uppercase">
                Save Up - Budgeting App
              </h4>
              <p className="text-base">
                Budgeting and saving mobile app for young Barbadians. Proving
                them with financial freedom.
              </p>
            </CardContent>
            <CardLink>
              <Button
                href="/saveup"
                className="text-white hover:bg-violet-800 bg-violet-900 text-lg shadow-md font-medium uppercase"
              >
                View Case Study
              </Button>
            </CardLink>
          </ProjectCard>

          <ProjectCard>
            <CardImage image="/images/ThePub/ThePub.png" alt="ThePub" />
            <CardContent>
              <h4 className="text-[2rem] font-semibold pb-2 uppercase">
                ThePub - Food Ordering App
              </h4>
              <p className="text-base">
                Food ordering mobile app for young people who are on the go, and
                want to dine at or order from ThePub.
              </p>
            </CardContent>
            <CardLink>
              <Button
                href="/thepub"
                className="text-white hover:bg-violet-800 bg-violet-900 text-lg shadow-md font-medium uppercase"
              >
                View Case Study
              </Button>
            </CardLink>
          </ProjectCard>

          <ProjectCard>
            <CardImage image="/images/Ouro/Ouro-App.png" alt="Ouro" />
            <CardContent>
              <h4 className="text-[2rem] font-semibold pb-2 uppercase">
                Ouro - Corporate Website
              </h4>
              <p className="text-base">
                Designing a corporate website and client portal for IT consulting and support services company
              </p>
            </CardContent>
            <CardLink>
              <Button
                href="/ouro"
                className="text-white hover:bg-violet-800 bg-violet-900 text-lg shadow-md font-medium uppercase"
              >
                View Case Study
              </Button>
            </CardLink>
          </ProjectCard>
        </div>
      </Container>
    </div>
  );
}
