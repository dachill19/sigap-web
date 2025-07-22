"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-card backdrop-blur-sm border-b border-border z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Image
                        src="/sigap-logo.png"
                        alt="SIGAP Logo"
                        width={80}
                        height={80}
                        className="h-10 w-auto"
                        priority
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <a
                        href="#masalah"
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        Masalah
                    </a>
                    <a
                        href="#solusi"
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        Solusi
                    </a>
                    <a
                        href="#faq"
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        FAQ
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <Button
                    asChild
                    variant="outline"
                    className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                    <Link href="/login">Masuk Mitra Dinas</Link>
                </Button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-card border-b border-border">
                    <nav className="container mx-auto px-4 py-4 space-y-4">
                        <a
                            href="#masalah"
                            className="block text-foreground hover:text-primary transition-colors"
                        >
                            Masalah
                        </a>
                        <a
                            href="#solusi"
                            className="block text-foreground hover:text-primary transition-colors"
                        >
                            Solusi
                        </a>
                        <a
                            href="#faq"
                            className="block text-foreground hover:text-primary transition-colors"
                        >
                            FAQ
                        </a>
                        <Button
                            asChild
                            variant="outline"
                            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                            <Link href="/login">Masuk Mitra Dinas</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
