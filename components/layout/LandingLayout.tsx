import React from "react";

import { LandingFooter } from "../footer/LandingFooter";
import { LandingNavbar } from "../navbar/LandingNavbar";

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
