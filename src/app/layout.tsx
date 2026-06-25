import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/components/AuthProvider";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const montserratHeading = Montserrat({ subsets: ['latin'], variable: '--font-heading' });

const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tysons Advisory",
  description: "Tysons Advisory, LLC is a women owned business founded in 2017, headquartered in Virginia. Our team is comprised of seasoned professionals, many with over 20 years of experience delivering complex solutions for the U.S. government and enterprise clients. This includes technology specialists, program managers and system integrators focused on automation, AI, Machine Learning, document forensics, cloud and IoT. We partner with the best technology solutions to bring in meaningful and sustainable transformations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full dark", "antialiased", geistSans.variable, geistMono.variable, "font-sans", roboto.variable, montserratHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
