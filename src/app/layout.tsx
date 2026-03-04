import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "William Le Pec | Salon de coiffure à Paris pour homme et femme",
  description: "Un espace dédié à l’excellence. Spécialiste des cheveux bouclés, colorations végétales, et coupes Mémorielles® au cœur de Paris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased bg-cream dark:bg-charcoal-dark`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
