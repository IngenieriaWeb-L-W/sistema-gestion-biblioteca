import React from "react";

import { DashboardFooter } from "../footer/DashboardFooter";
import { AdminNavbar } from "../navbar/AdminNavbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <React.Fragment>
      <AdminNavbar />
      <main className="mt-5 bg-gray-800">{children}</main>
      <DashboardFooter />
    </React.Fragment>
  );
};
