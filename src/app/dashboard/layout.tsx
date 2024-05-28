import React from "react";

import { DashboardFooter } from "@/components/footer/DashboardFooter";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { AdminNavbar } from "@/components/navbar/AdminNavbar";
import UserRole from "@/interfaces/user/Role";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <AuthLayout allowedRoles={[UserRole.ALL]}>
      <AdminNavbar />
      <main className="mt-5 bg-gray-800">{children}</main>
      <DashboardFooter />
    </AuthLayout>
  );
};

export default DashboardLayout;
