import { Space_Grotesk, Geist_Mono } from "next/font/google";
import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import TopNavigation from "@/components/ui/top-navigation";
import Footer from "@/components/ui/footer";
import AnimatedBackground from "@/components/ui/animated-background";
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
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
