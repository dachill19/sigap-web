"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 w-full bg-card/95 backdrop-blur-md border-b border-border/50 z-50 shadow-lg shadow-primary/5">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
                {/* Logo with hover effect */}
                <div className="flex items-center space-x-2 group">
                    <div className="relative overflow-hidden rounded-lg p-1 transition-all duration-300 group-hover:bg-primary/10">
                        <Image
                            src="/sigap-logo.png"
                            alt="SIGAP Logo"
                            width={80}
                            height={80}
                            className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                            priority
                        />
                    </div>
                </div>

                {/* Desktop Navigation with enhanced styling */}
                <nav className="hidden md:flex items-center space-x-1">
                    {[
                        { id: "problem", label: "Masalah" },
                        { id: "solution", label: "Solusi" },
                        { id: "faq", label: "FAQ" },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/10 group font-medium"
                        >
                            <span className="relative z-10">{item.label}</span>
                            {/* Hover underline effect */}
                            <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-8 group-hover:left-1/2 transform -translate-x-1/2"></div>
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Button with animation */}
                <button
                    className="md:hidden relative p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-6 relative">
                        <span
                            className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                                isMenuOpen ? "rotate-45 top-2.5" : ""
                            }`}
                        ></span>
                        <span
                            className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                                isMenuOpen ? "opacity-0" : ""
                            }`}
                        ></span>
                        <span
                            className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                                isMenuOpen ? "-rotate-45 top-2.5" : ""
                            }`}
                        ></span>
                    </div>
                </button>

                {/* Enhanced Login Button */}
                <Button
                    asChild
                    variant="outline"
                    className="hidden md:flex border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                >
                    <Link href="/login" className="relative overflow-hidden">
                        <span className="relative z-10">Masuk Mitra Dinas</span>
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent hover:translate-x-full transition-transform duration-700"></div>
                    </Link>
                </Button>
            </div>

            {/* Enhanced Mobile Menu */}
            <div
                className={`md:hidden bg-card/95 backdrop-blur-md border-b border-border/50 transition-all duration-300 ${
                    isMenuOpen
                        ? "max-h-80 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                <nav className="container mx-auto px-4 py-4 space-y-2">
                    {[
                        { id: "problem", label: "Masalah" },
                        { id: "solution", label: "Solusi" },
                        { id: "faq", label: "FAQ" },
                    ].map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="block w-full text-left px-4 py-3 text-foreground hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/10 transform hover:translate-x-2"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: isMenuOpen
                                    ? "slideInLeft 0.3s ease-out forwards"
                                    : "",
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                    <div className="pt-2">
                        <Button
                            asChild
                            variant="outline"
                            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                        >
                            <Link href="/login">Masuk Mitra Dinas</Link>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
