"use client";

import { Button } from "@/components/ui/button";
import { Download, Star } from "lucide-react";

const FinalCTASection = () => {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="space-y-6 mb-12">
                        <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground">
                            Siap Menjadi Bagian dari Solusi?
                        </h2>
                        <p className="text-xl lg:text-2xl text-primary-foreground/90 font-medium">
                            Jadilah Pahlawan di Kota Anda
                        </p>
                        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                            Bergabunglah dengan ribuan warga yang telah
                            merasakan perubahan nyata melalui SIGAP. Download
                            sekarang dan rasakan perbedaannya.
                        </p>
                    </div>

                    {/* Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="bg-card text-foreground hover:bg-card/90 shadow-elegant px-8 py-4 text-lg"
                        >
                            <Download className="mr-3 h-6 w-6" />
                            Download untuk Android
                        </Button>
                        <Button
                            size="lg"
                            variant="secondary"
                            className="bg-card text-foreground hover:bg-card/90 shadow-elegant px-8 py-4 text-lg"
                        >
                            <Download className="mr-3 h-6 w-6" />
                            Download untuk iOS
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
                                50K+
                            </div>
                            <div className="text-primary-foreground/80">
                                Laporan Selesai
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
                                25K+
                            </div>
                            <div className="text-primary-foreground/80">
                                Pengguna Aktif
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
                                4.8{" "}
                                <Star className="h-6 w-6 ml-1 fill-current" />
                            </div>
                            <div className="text-primary-foreground/80">
                                Rating App Store
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
                                15
                            </div>
                            <div className="text-primary-foreground/80">
                                Kota Partner
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </section>
    );
};

export default FinalCTASection;
