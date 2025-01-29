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
      <head>
        <title>Hemant&apos;s Web Novel</title>
        <meta name="description" content={`A tale of mystery and adventure, updated daily`} />
      </head>
      <body className="max-w-6xl mx-auto bg-[#151515]">
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
