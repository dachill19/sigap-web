"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Users } from "lucide-react";

const SolutionSection = () => {
    const features = [
        {
            icon: Brain,
            title: "Cerdas & Efisien",
            description:
                "AI kami secara otomatis mengarahkan laporan Anda ke dinas yang tepat dan memprioritaskan masalah paling mendesak.",
        },
        {
            icon: Shield,
            title: "Transparan & Terpercaya",
            description:
                "Setiap langkah penanganan dicatat di Blockchain, menciptakan jejak digital yang tidak bisa diubah dan dapat Anda lihat.",
        },
        {
            icon: Users,
            title: "Kolaboratif & Responsif",
            description:
                "Menghubungkan warga, dinas terkait, dan pimpinan daerah dalam satu platform terpadu.",
        },
    ];

    return (
        <section id="solusi" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Dashboard Mockup */}
                    <div className="relative order-2 lg:order-1">
                        <div className="bg-card rounded-2xl shadow-elegant p-6">
                            {/* Laptop Frame */}
                            <div className="bg-foreground rounded-xl p-4">
                                <div className="bg-card rounded-lg aspect-video p-6">
                                    {/* Dashboard Content */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-semibold text-foreground">
                                                Dashboard Dinas
                                            </h3>
                                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="bg-muted rounded-lg p-3">
                                                <div className="w-full h-2 bg-primary rounded mb-2"></div>
                                                <div className="text-xs text-muted-foreground">
                                                    Laporan Aktif
                                                </div>
                                                <div className="font-bold text-foreground">
                                                    247
                                                </div>
                                            </div>
                                            <div className="bg-muted rounded-lg p-3">
                                                <div className="w-full h-2 bg-secondary rounded mb-2"></div>
                                                <div className="text-xs text-muted-foreground">
                                                    Selesai
                                                </div>
                                                <div className="font-bold text-foreground">
                                                    1,052
                                                </div>
                                            </div>
                                            <div className="bg-muted rounded-lg p-3">
                                                <div className="w-full h-2 bg-accent rounded mb-2"></div>
                                                <div className="text-xs text-muted-foreground">
                                                    Rating
                                                </div>
                                                <div className="font-bold text-foreground">
                                                    4.8
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            {[1, 2, 3].map((i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center space-x-3 p-2 bg-muted/50 rounded"
                                                >
                                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                    <div className="flex-1 h-2 bg-muted rounded"></div>
                                                    <div className="w-16 h-2 bg-muted rounded"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                                SIGAP: Merevolusi{" "}
                                <span className="text-primary">
                                    Pelayanan Publik
                                </span>
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Teknologi canggih yang mengubah cara pemerintah
                                melayani masyarakat
                            </p>
                        </div>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <Card
                                    key={index}
                                    className="border-border/50 hover:shadow-card transition-all duration-300"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <feature.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
