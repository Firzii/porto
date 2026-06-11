import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: {
    default: "MUHAMMAD FIRZI RYADI - Product-Focused Fullstack Developer",
    template: "%s | MUHAMMAD FIRZI RYADI",
  },
  description:
    "Portfolio of MUHAMMAD FIRZI RYADI: building thoughtful web products, design systems, and resilient engineering workflows.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "MUHAMMAD FIRZI RYADI - Product-Focused Fullstack Developer",
    description:
      "Portfolio of MUHAMMAD FIRZI RYADI: building thoughtful web products, design systems, and resilient engineering workflows.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MUHAMMAD FIRZI RYADI - Product-Focused Fullstack Developer",
    description:
      "Portfolio of MUHAMMAD FIRZI RYADI: building thoughtful web products, design systems, and resilient engineering workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
