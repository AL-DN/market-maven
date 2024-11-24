// This layout is used to store fonts, styles, metadata, etc

import type { Metadata } from "next";
// getting fonts from google
import {Inter, IBM_Plex_Serif} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"], variable: '--font-inter'})
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"], 
  weight: ['400','700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "MarketMaven",
  description: "Developled by ALDN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // allows the ability to use font across app
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
