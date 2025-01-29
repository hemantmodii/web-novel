import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hemant's Web Novel",
  description: "A tale of mystery and adventure, updated daily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning = {true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
