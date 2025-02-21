import "./reset.css";
import "./globals.css";
import type { Metadata } from "next";
import Noise from "@/components/Noise";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Raphaël Robert | Portfolio",
  description: "Portfolio de Raphaël Robert",
  icons: [
    { rel: "apple-touch-icon", sizes: "57x57", url: "/apple-touch-icon-57x57.png" },
    { rel: "apple-touch-icon", sizes: "72x72", url: "/apple-touch-icon-72x72.png" },
    { rel: "apple-touch-icon", sizes: "76x76", url: "/apple-touch-icon-76x76.png" },
    { rel: "apple-touch-icon", sizes: "114x114", url: "/apple-touch-icon-114x114.png" },
    { rel: "apple-touch-icon", sizes: "120x120", url: "/apple-touch-icon-120x120.png" },
    { rel: "apple-touch-icon", sizes: "144x144", url: "/apple-touch-icon-144x144.png" },
    { rel: "apple-touch-icon", sizes: "152x152", url: "/apple-touch-icon-152x152.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon-180x180.png" },
  ],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-NeueHaasGroteskDisplayPro text-curr_white">
        <Noise />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
