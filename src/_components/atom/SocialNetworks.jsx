import clsx from "clsx";
import React from "react";

export const SocialNetworks = ({ socialNetworks, className }) => {
  return (
    <div className={clsx("flex gap-4", className)}>
      {socialNetworks.map(({ url, name, icon }) => (
        <a
          key={url}
          href={url}
          className="flex items-center gap-1 text-base text text-primary"
        >
          {icon} <span className="underline">{name}</span>
        </a>
      ))}
    </div>
  );
};
