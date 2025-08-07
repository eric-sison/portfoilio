import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { DotBackground } from "@/components/DotBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ECS",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <DotBackground>
            <div className="h-screen w-screen">{children}</div>
          </DotBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
