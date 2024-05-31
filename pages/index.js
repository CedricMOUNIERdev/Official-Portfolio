import Head from "next/head";
import React from "react";
import { Footer } from "../src/_components/Footer";
import { Header } from "../src/_components/Header";
import { SkillSection } from "../src/_components/SkillSection";
import { HeroSection } from "../src/_components/hero/HeroSection";
import { ProjectSection } from "../src/_components/project/ProjectSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio CM</title>
      </Head>
      <div className="flex flex-col gap-40">
        <Header />
        <HeroSection/>
        <ProjectSection/>
        <SkillSection/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
