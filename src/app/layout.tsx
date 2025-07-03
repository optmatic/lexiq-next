import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lexiq - Your Modern Political Lexicon",
    template: "%s | Lexiq",
  },
  description:
    "Cut through the political noise with clear, unbiased definitions of contemporary political terms. Explore our comprehensive political lexicon organized by categories.",
  keywords: [
    "political terms",
    "political lexicon",
    "political definitions",
    "democracy",
    "politics",
    "political education",
    "political vocabulary",
  ],
  authors: [{ name: "Optimatic" }],
  creator: "Optimatic",
  publisher: "Lexiq",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lexiq.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lexiq.com",
    title: "Lexiq - Your Modern Political Lexicon",
    description:
      "Cut through the political noise with clear, unbiased definitions of contemporary political terms.",
    siteName: "Lexiq",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Lexiq - Political Lexicon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexiq - Your Modern Political Lexicon",
    description:
      "Cut through the political noise with clear, unbiased definitions of contemporary political terms.",
    images: ["/og-image.jpg"], // Same as Open Graph image
    creator: "@optimatic", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your verification code
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
