import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "table",
  description: "table",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="кг">
      <body>
        {children}
      </body>
    </html>
  );
}
