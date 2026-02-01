import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Venkat Yashwanth | Frontend Developer",
  description: "Frontend Developer | React | Next.js",
  icons: {
    icon: [
      {
        url: "/resicon.svg",
        type: "image/svg+xml",
      }
    ]
  },
  openGraph: {
    title: "Venkat Yashwanth | Frontend Developer",
    description:
      "Frontend Developer specializing in React and Next.js, with experience building accessible, scalable, production-ready user interfaces.",
    url: "https://resume-mvyashwanth92.netlify.app/",
    siteName: "Venkat Yashwanth Portfolio",
    images: [
      {
        url: "https://resume-mvyashwanth92.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Venkat Yashwanth Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
