import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://a-song-for-sleep.vercel.app"),
  title: "A Song for Sleep | Multimodal Literary Analysis",
  description:
    "An interactive multimodal literary analysis of Bora Chung's A Song for Sleep through a Marxist critical lens.",
  authors: [{ name: "Tanya Kovalenko" }],
  creator: "Tanya Kovalenko",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "A Song for Sleep | Multimodal Literary Analysis",
    description:
      "An interactive multimodal literary analysis of Bora Chung's A Song for Sleep through a Marxist critical lens.",
    url: "https://a-song-for-sleep.vercel.app",
    siteName: "A Song for Sleep",
    images: [
      {
        url: "/images/elevator-5.png",
        width: 1672,
        height: 941,
        alt: "A bright automated elevator lobby for A Song for Sleep."
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "A Song for Sleep | Multimodal Literary Analysis",
    description:
      "An interactive multimodal literary analysis of Bora Chung's A Song for Sleep through a Marxist critical lens.",
    images: ["/images/elevator-5.png"]
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
        <Footer />
      </body>
    </html>
  );
}
