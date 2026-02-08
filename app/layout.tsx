import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shalmoly - Data Engineer & Creative Soul",
  description: "Portfolio of Shalmoly - Data Engineer passionate about building scalable data pipelines and creating beautiful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
