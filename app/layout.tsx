import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import AppThemeProvider from "@/components/AppThemeProvider";
import "./globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wander Trails",
  description:
    "Wander Trails is a web site for discovering and experiencing the Himalayan trails and the legends behind them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={poppins.className}>
          <AppThemeProvider>
            <Navbar />
            <MobileNavbar />
            <main className="root-container">{children}</main>
          </AppThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
