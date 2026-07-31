import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Serene Collective | Smart Real Estate Investments",
  description: "Veteran-operated real estate investment company based in Texas. We make real estate investing simple, secure, and impactful.",
  icons: {
    icon: "/images/Key - Favicon - 01.png",
    shortcut: "/images/Key - Favicon - 01.png",
    apple: "/images/Key - Favicon - 01.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/Key - Favicon - 01.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
