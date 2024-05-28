import React, { Fragment } from "react";

import { DashboardFooter } from "@/components/footer/DashboardFooter";
import { AdminNavbar } from "@/components/navbar/AdminNavbar";
import { LandingNavbar } from "@/components/navbar/LandingNavbar";

type LandingLayoutProps = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <Fragment>
      <main className="mt-5 bg-gray-800">
        <LandingNavbar />
        {children}
        <DashboardFooter />
      </main>
    </Fragment>
  );
};

export default LandingLayout;
