import React from "react";
import { LandingNavbar } from "../navbar/LandingNavbar";
import { LandingFooter } from "../footer/LandingFooter";

type LandingLayoutProps = {
  children: React.ReactNode;
};

export const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <LandingNavbar />
      {children}
      <LandingFooter />
    </React.Fragment>
  );
};
