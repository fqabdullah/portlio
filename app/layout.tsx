import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";
// Self-hosted (no runtime fetch to Google Fonts — avoids network-flake dev/build failures)
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "@fontsource/jetbrains-mono/latin-500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdullah Farooq — DevOps Engineer",
  description:
    "DevOps Engineer specializing in CI/CD, cloud infrastructure, and Kubernetes. Portfolio of infrastructure, automation, and reliability projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body bg-bg text-text antialiased">
        <ThemeProvider>
          <Header />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
