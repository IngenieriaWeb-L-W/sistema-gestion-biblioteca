import React, { Fragment } from "react";

import { DashboardFooter } from "@/components/footer/DashboardFooter";
import { LandingNavbar } from "@/components/navbar/LandingNavbar";
import { AuthLayout } from "@/components/layout/AuthLayout";

type LandingLayoutProps = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <Fragment>
      <AuthLayout unauthenticated allowedRoles={[]} fallbackUrl="/not-found">
        <main className="mt-5 bg-gray-800">
          <LandingNavbar />
          {children}
          <DashboardFooter />
        </main>
      </AuthLayout>
    </Fragment>
  );
};

export default LandingLayout;
