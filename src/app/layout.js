import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hemant's Web Novel",
  description: "New chapters every week.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </head>
      <body suppressHydrationWarning = {true}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
