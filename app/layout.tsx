import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
});

export const metadata: Metadata = {
    title: "TRIPLE i - Dashboard",
    description: "Mcq exams",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
            <link rel="icon" href="/favicon.png" />
            </head>
            <body
                className={`${inter.className} antialiased flex max-md:flex-col bg-[#E6E9EE]`}
            >
                <Sidebar />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    
                    <main className="flex flex-grow">{children}</main>
                </div>
            </body>
        </html>
    );
}
