import { LandingNavbar } from "@/components/navbar/LandingNavbar";
import React from "react";
import { LandingFooter } from "../footer/LandingFooter";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <LandingNavbar />
      {children}
      <LandingFooter />
    </React.Fragment>
  );
};
