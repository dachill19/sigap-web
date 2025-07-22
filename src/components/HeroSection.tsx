"use client";

import { Button } from "@/components/ui/button";
import {
    Download,
    Play,
    Shield,
    Zap,
    Users,
    AlertTriangle,
    Clock,
    CheckCircle,
    MessageSquare,
} from "lucide-react";
import { useCallback } from "react";

const HeroSection = () => {
    const scrollToHowItWorks = useCallback(() => {
        const element = document.getElementById("how-it-works");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <section className="relative min-h-screen bg-gradient-hero flex items-center pt-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
                <div className="absolute top-60 right-20 w-20 h-20 border-2 border-primary/60 rounded-full"></div>
                <div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-primary/40 rounded-full"></div>
                <div className="absolute bottom-20 right-1/3 w-24 h-24 border-2 border-primary/50 rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Emergency Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            <span className="text-sm font-medium text-red-500">
                                Sistem Pelaporan Darurat
                            </span>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                                <span className="text-primary">SIGAP</span>
                                <br />
                                Sistem Informasi
                                <br />
                                <span className="text-primary">
                                    Gangguan & Pelaporan
                                </span>
                            </h1>

                            <p className="text-xl text-foreground/80 leading-relaxed">
                                Platform digital yang menghubungkan warga dengan
                                instansi pemerintah untuk pelaporan dan
                                penanganan masalah publik secara{" "}
                                <span className="text-primary font-semibold">
                                    cepat, transparan, dan terpercaya
                                </span>
                                .
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-primary">
                                    24/7
                                </div>
                                <div className="text-sm text-foreground/70">
                                    Siaga
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-primary">
                                    &lt;15
                                </div>
                                <div className="text-sm text-foreground/70">
                                    Menit Respon
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-primary">
                                    100%
                                </div>
                                <div className="text-sm text-foreground/70">
                                    Transparansi
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant text-lg px-8 py-4 border-2 border-primary hover:scale-105 transition-all duration-300"
                            >
                                <Download className="mr-2 h-6 w-6" />
                                Unduh Aplikasi
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
                                onClick={scrollToHowItWorks}
                            >
                                <Play className="mr-2 h-6 w-6" />
                                Lihat Demo
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Visual */}
                    <div className="relative">
                        <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-border/20">
                            {/* Mock Phone Interface */}
                            <div className="bg-background rounded-2xl p-6 shadow-inner">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-bold text-lg">
                                        Laporan Darurat
                                    </h3>
                                    <div className="flex items-center gap-2 text-green-500">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium">
                                            Online
                                        </span>
                                    </div>
                                </div>

                                {/* Emergency Options */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center hover:scale-105 transition-transform cursor-pointer">
                                        <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                                        <div className="text-sm font-medium text-red-700">
                                            Darurat
                                        </div>
                                    </div>
                                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center hover:scale-105 transition-transform cursor-pointer">
                                        <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                                        <div className="text-sm font-medium text-orange-700">
                                            Mendesak
                                        </div>
                                    </div>
                                </div>

                                {/* Recent Reports */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <div className="flex-1">
                                            <div className="text-sm font-medium">
                                                Jalan rusak diperbaiki
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                Laporan #1234 • Selesai
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                                        <MessageSquare className="h-5 w-5 text-blue-500" />
                                        <div className="flex-1">
                                            <div className="text-sm font-medium">
                                                Lampu jalan mati
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                Laporan #1235 • Dalam proses
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                <Shield className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                <CheckCircle className="h-5 w-5 text-white" />
                            </div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl -z-10 scale-110"></div>
                    </div>
                </div>

                {/* Bottom Features */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 text-center border border-border/30 hover:bg-card/80 transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">
                            Respon Cepat
                        </h3>
                        <p className="text-sm text-foreground/70">
                            Notifikasi real-time untuk tindakan cepat
                        </p>
                    </div>

                    <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 text-center border border-border/30 hover:bg-card/80 transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">
                            Blockchain Secure
                        </h3>
                        <p className="text-sm text-foreground/70">
                            Data terenkripsi dan tidak dapat diubah
                        </p>
                    </div>

                    <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 text-center border border-border/30 hover:bg-card/80 transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <Users className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">
                            Kolaborasi
                        </h3>
                        <p className="text-sm text-foreground/70">
                            Koordinasi antar instansi terpadu
                        </p>
                    </div>

                    <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 text-center border border-border/30 hover:bg-card/80 transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">
                            24/7 Siaga
                        </h3>
                        <p className="text-sm text-foreground/70">
                            Monitoring berkelanjutan setiap saat
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
