import React from "react";

import { DashboardFooter } from "../footer/DashboardFooter";
import { AdminNavbar } from "../navbar/AdminNavbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <React.Fragment>
      <AdminNavbar />
      {children}
      <DashboardFooter />
    </React.Fragment>
  );
};
