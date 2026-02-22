import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Alpha Trading Pro",
    description: "Professional Trading Dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="en">
                <body>{children}</body>body>
          </html>html>
        );
}</html>
