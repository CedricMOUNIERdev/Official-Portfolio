import React from "react";
import { FULL_NAME, SOCIAL_NETWORKS } from "../lib/config";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { SocialNetworks } from "./atom/SocialNetworks";

export const Header = () => {
  return (
    <header className="flex py-8">
      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-extrabold text-transparent drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
        {FULL_NAME}
      </span>
      <SocialNetworks className="ml-auto" socialNetworks={SOCIAL_NETWORKS} />
      <ToggleThemeButton />
    </header>
  );
};
