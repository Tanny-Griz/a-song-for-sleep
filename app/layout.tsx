import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Song for Sleep | Multimodal Literary Analysis",
  description:
    "An interactive multimodal literary analysis of Bora Chung's A Song for Sleep through a Marxist critical lens.",
  authors: [{ name: "Tanya Kovalenko" }],
  openGraph: {
    title: "A Song for Sleep | Multimodal Literary Analysis",
    description:
      "An interactive multimodal literary analysis of Bora Chung's A Song for Sleep through a Marxist critical lens.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
