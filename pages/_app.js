// @ts-nocheck
// @ts-ignore

import clsx from "clsx";
import React from "react";
import { ThemeProvider, useTheme } from "../src/context/ThemeProvider";
import "../src/styles/globals.css";
import "../src/styles/theme.css";

const AppWithTheme = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div
      id="app"
      className={clsx({
        dark: isDark,
      })}
    >
      {children}
    </div>
  );
};

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <AppWithTheme>
      <div className="h-full px-4 m-auto max-w-7xl">
        <Component {...pageProps} />
      </div>
    </AppWithTheme>
  </ThemeProvider>
);

export default MyApp;
