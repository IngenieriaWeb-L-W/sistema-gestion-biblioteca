import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ToastAlert } from "@/components/toast/ToastAlert";
import { AuthProvider } from "@/config/auth/AuthProvider";
import { StateProvider } from "@/config/redux/StateProvider";

import "boxicons/css/boxicons.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import AuthWrapper from "@/config/auth/AuthWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookHub - Home",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider>
          <AuthProvider>
            <AuthWrapper>{children}</AuthWrapper>
          </AuthProvider>
          <ToastAlert />
        </StateProvider>
      </body>
    </html>
  );
}
