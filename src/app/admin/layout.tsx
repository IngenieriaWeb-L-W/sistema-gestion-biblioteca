import React from "react";

import { DashboardFooter } from "@/components/footer/DashboardFooter";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { PrivateNavbar } from "@/components/navbar/PrivateNavbar";
import UserRole from "@/interfaces/user/Role";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <AuthLayout allowedRoles={[UserRole.ROLE_ADMIN]} fallbackUrl="/dashboard">
      <PrivateNavbar />
      <main className="mt-5 bg-gray-800">{children}</main>
      <DashboardFooter />
    </AuthLayout>
  );
};

export default AdminLayout;
