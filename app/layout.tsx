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
    default: "One Station - Solusi Inovasi Digital & Web Development",
    template: "%s | One Station",
  },
  description:
    "One Station adalah platform edukasi dan jasa pengembangan teknologi yang fokus pada AI, Web Development, dan transformasi digital untuk bisnis Anda.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Jasa Pembuatan Website",
    "Web Development Indonesia",
    "Digital Agency",
    "One Station",
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
