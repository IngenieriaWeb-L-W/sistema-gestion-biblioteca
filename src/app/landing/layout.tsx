import React, { Fragment } from "react";

import { DashboardFooter } from "@/components/footer/DashboardFooter";
import { PublicNavbar } from "@/components/navbar/PublicNavbar";
import { AuthLayout } from "@/components/layout/AuthLayout";

type LandingLayoutProps = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <Fragment>
      <AuthLayout unauthenticated>
        <main className="mt-5 bg-gray-800">
          <PublicNavbar />
          {children}
          <DashboardFooter />
        </main>
      </AuthLayout>
    </Fragment>
  );
};

export default LandingLayout;
