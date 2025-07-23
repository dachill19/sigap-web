"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileStack, HelpCircle, Clock } from "lucide-react";

const ProblemSection = () => {
    const problems = [
        {
            icon: FileStack,
            title: "Birokrasi Lambat",
            description: "Proses pelaporan yang rumit dan memakan waktu",
        },
        {
            icon: HelpCircle,
            title: "Tidak Transparan",
            description:
                "Tidak ada kejelasan status dan tindak lanjut dari laporan Anda",
        },
        {
            icon: Clock,
            title: "Kurang Responsif",
            description:
                "Penanganan masalah yang seringkali tertunda tanpa alasan yang jelas",
        },
    ];

    return (
        <section id="problem" className="py-20 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Merasa Laporan Anda Tidak Terdengar?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Kami memahami frustasi Anda dengan sistem pelaporan
                        tradisional yang tidak efektif
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-card transition-all duration-300 border-border/50"
                        >
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-destructive/20 transition-colors">
                                    <problem.icon className="h-8 w-8 text-destructive" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-4">
                                    {problem.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {problem.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
