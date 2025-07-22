"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, CheckCircle } from "lucide-react";

const BlockchainSection = () => {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                                Akuntabilitas yang{" "}
                                <span className="text-primary">
                                    Tak Terbantahkan
                                </span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Teknologi Blockchain memastikan setiap pembaruan
                                status dari dinas bersifat permanen dan tidak
                                dapat dimanipulasi. Ini adalah era baru
                                transparansi pemerintah, di mana 'katanya'
                                digantikan oleh 'bukti nyata'.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Card className="border-border/50">
                                <CardContent className="p-4 text-center">
                                    <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <div className="text-sm font-semibold text-foreground">
                                        Tidak Dapat Diubah
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-border/50">
                                <CardContent className="p-4 text-center">
                                    <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <div className="text-sm font-semibold text-foreground">
                                        Transparan
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-border/50">
                                <CardContent className="p-4 text-center">
                                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <div className="text-sm font-semibold text-foreground">
                                        Aman
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-border/50">
                                <CardContent className="p-4 text-center">
                                    <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <div className="text-sm font-semibold text-foreground">
                                        Terverifikasi
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Blockchain Illustration - Simplified */}
                    <div className="relative">
                        <div className="flex items-center justify-center">
                            <div className="relative w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                                    <Shield className="h-16 w-16 text-primary" />
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/5 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlockchainSection;
