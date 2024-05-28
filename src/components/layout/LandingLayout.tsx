import React from "react";

import { LandingFooter } from "../footer/LandingFooter";
import { LandingNavbar } from "../navbar/LandingNavbar";

type LandingLayoutProps = {
  children: React.ReactNode;
};

export const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <React.Fragment>
      <LandingNavbar />
      <main className="mt-5 bg-gray-800">{children}</main>
      <LandingFooter />
    </React.Fragment>
  );
};
