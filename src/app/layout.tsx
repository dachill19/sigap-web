import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "SIGAP",
    description: "Platform pengaduan layanan masyarakat terpadu",
    icons: {
        icon: "/sigap.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
