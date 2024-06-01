import React from "react";

import { DashboardFooter } from "../footer/DashboardFooter";
import { PrivateNavbar } from "../navbar/PrivateNavbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <React.Fragment>
      <PrivateNavbar />
      <main className="mt-5 bg-gray-800">{children}</main>
      <DashboardFooter />
    </React.Fragment>
  );
};
