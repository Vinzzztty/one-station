import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.URL_PUBLIC}`),
  title: {
    default: "Custom ERP Development Indonesia | One Station",
    template: "%s | One Station",
  },
  description:
    "We build custom ERP systems for companies that have outgrown off-the-shelf solutions. Full-stack development, mobile integration, AI automation. Based in Surabaya, Indonesia.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "custom ERP Indonesia, pengembangan ERP, ERP software development, sistem ERP custom, ERP Surabaya, bespoke ERP systems Indonesia",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "One Station - Solusi Inovasi Digital",
    description:
      "Partner terbaik untuk transformasi digital dan pengembangan website modern.",
    url: `${process.env.URL_PUBLIC}`,
    siteName: "One Station",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "One Station Banner",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
