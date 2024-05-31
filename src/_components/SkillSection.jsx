import React from "react";
import { SectionWrapper } from "./atom/SectionWrapper";
import { DotNetLogo } from "./icons/DotNetLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { SqlServerLogo } from "./icons/SqlServerLogo";
import { VuejsLogo } from "./icons/VuejsLogo";

export const SkillSection = () => {
  return (
    <SectionWrapper title="Skills">
      <div className="flex flex-wrap justify-center gap-8"></div>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>
      <div className="flex gap-4 max-md:flex-col">
        <div className="flex flex-col flex-1 gap-2">
          <ReactLogo
            size={66}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <VuejsLogo
            size={66}
          />
          <h3 className="text-2xl font-semibold tracking-tight">Vue.js</h3>
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <DotNetLogo
            size={66}
          />
          <h3 className="text-2xl font-semibold tracking-tight">DotNet</h3>
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <SqlServerLogo
            size={66}
          />
          <h3 className="text-2xl font-semibold tracking-tight">SQL Server</h3>
        </div>
      </div>
    </SectionWrapper>
  );
};
