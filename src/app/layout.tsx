"use client";

import GlobalStyle from "@/styles/globalStyle";
import { Global } from "@emotion/react";
import { Inter } from "next/font/google";
import { OverlayProvider } from "@toss/use-overlay";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  2;
  return (
    <html lang="en">
      <Global styles={GlobalStyle} />
      <body className={inter.className}>
        <OverlayProvider>{children}</OverlayProvider>
      </body>
    </html>
  );
}
