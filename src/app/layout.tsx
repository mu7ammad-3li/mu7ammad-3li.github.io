import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Ali - Full Stack Product Engineer",
  description: "Full Stack Product Engineer with 3+ years experience in AWS, MERN Stack, and AI Integration. Specialized in cloud automation, cost optimization, and building scalable applications.",
  keywords: ["Full Stack Developer", "AWS", "React", "Node.js", "TypeScript", "Cloud Engineer"],
  authors: [{ name: "Muhammad Ali", url: "https://mu7ammad-3li.github.io" }],
  openGraph: {
    title: "Muhammad Ali - Full Stack Product Engineer",
    description: "AWS Cloud Specialist | MERN Stack Developer | AI Integration Expert",
    url: "https://mu7ammad-3li.github.io",
    siteName: "Muhammad Ali Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ali - Full Stack Product Engineer",
    description: "AWS Cloud Specialist | MERN Stack Developer | AI Integration Expert",
    creator: "@Mu7ammad_3lii",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
