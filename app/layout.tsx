import { Space_Grotesk, Geist_Mono } from "next/font/google";
import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import TopNavigation from "@/components/ui/top-navigation";
import Footer from "@/components/ui/footer";
import AnimatedBackground from "@/components/ui/animated-background";
import { Metadata } from "next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-space-grotesk",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Muhamad Rizki - Software Engineer",
  description:
    "Software Engineer with expertise in web and mobile development since 2017. Experienced in JavaScript, TypeScript, React, React Native, and more.",
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title: "Muhamad Rizki - Software Engineer",
    description:
      "Software Engineer with expertise in web and mobile development since 2017",
    images: [{ url: "/profile.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <AnimatedBackground />
          <TopNavigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
