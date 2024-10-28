import type { Metadata } from "next";
import "./globals.css";
import TopMenu from "@/components/top-menu";

export const metadata: Metadata = {
  title: "Mj TODO",
  description: "simple todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopMenu />
        {children}
      </body>
    </html>
  );
}
