import React from "react";
import { AdminNavbar } from "../navbar/AdminNavbar";
import { DashboardFooter } from "../footer/DashboardFooter";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <AdminNavbar />
      {children}
      <DashboardFooter />
    </React.Fragment>
  );
};
