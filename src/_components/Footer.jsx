// @ts-nocheck
import React from "react";
import { EMAIL, SOCIAL_NETWORKS } from "../lib/config";
import { SocialNetworks } from "./atom/SocialNetworks";
import { Typography } from "./atom/Typography";


export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 p-4 md:p-8 ">
      <Typography variant="h2">Contact me !</Typography>
      <div className="flex flex-col items-center gap-2">
        <Typography variant="body2">
          I’ll be happy to chat with you about a potential job !
        </Typography>
        <a
          className="text-base underline text-primary"
          href={`mailto:${EMAIL}`}
        >
          {EMAIL}
        </a>
        <
// @ts-ignore
        SocialNetworks socialNetworks={SOCIAL_NETWORKS} />
      </div>
      <p>@Copywrite 2024 Cédric Mounier</p>
    </footer>
  );
};
