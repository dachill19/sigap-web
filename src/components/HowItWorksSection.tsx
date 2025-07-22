import { Card, CardContent } from "@/components/ui/card";
import { Camera, Brain, ShieldCheck } from "lucide-react";

const HowItWorksSection = () => {
    const steps = [
        {
            number: "01",
            icon: Camera,
            title: "LAPOR",
            description:
                "Ambil foto, tambahkan deskripsi singkat, dan kirim laporan Anda dalam hitungan detik.",
        },
        {
            number: "02",
            icon: Brain,
            title: "PROSES",
            description:
                "AI kami menganalisis dan mendelegasikan laporan Anda. Petugas dinas menerima tugas di dashboard mereka.",
        },
        {
            number: "03",
            icon: ShieldCheck,
            title: "SELESAI & TRANSPARAN",
            description:
                "Anda menerima notifikasi progres hingga selesai. Beri rating dan lihat bukti kerjanya yang tercatat abadi di Blockchain.",
        },
    ];

    return (
        <section id="how-it-works" className="py-20 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Hanya{" "}
                        <span className="text-primary">3 Langkah Mudah</span>{" "}
                        Menuju Perubahan
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Proses yang sederhana namun didukung teknologi canggih
                        untuk hasil maksimal
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 z-0"></div>

                    <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-gradient-card border-border/50"
                            >
                                <CardContent className="p-8 text-center relative">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                        <step.icon className="h-10 w-10 text-primary" />
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-4">
                                        {step.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
