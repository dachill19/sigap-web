"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (email === "admin@example.com" && password === "1234567") {
            toast.success("Login berhasil! Mengarahkan ke dashboard...");
            setTimeout(() => {
                router.push("/dashboard");
            }, 1000);
        } else {
            toast.error("Email atau password salah!");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Back to Home Link */}
                <Link
                    href="/"
                    className="inline-flex items-center text-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Kembali ke Beranda
                </Link>

                <Card className="shadow-elegant border-border/50 bg-card/95 backdrop-blur-sm">
                    <CardHeader className="text-center space-y-4">
                        <div className="flex items-center justify-center">
                            <img
                                src="/sigap-logo.png"
                                alt="SIGAP Logo"
                                className="h-20 w-auto"
                            />
                        </div>
                        <CardTitle className="text-2xl text-foreground">
                            Portal Mitra Dinas SIGAP
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                            Masuk untuk mengakses dashboard operasional
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <form className="space-y-4" onSubmit={handleLogin}>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="text-foreground"
                                >
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="admin@example.com"
                                    value={email}
                                    onChange={(e: any) =>
                                        setEmail(e.target.value)
                                    }
                                    className="border-border focus:ring-primary"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="password"
                                    className="text-foreground"
                                >
                                    Kata Sandi
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="1234567"
                                    value={password}
                                    onChange={(e: any) =>
                                        setPassword(e.target.value)
                                    }
                                    className="border-border focus:ring-primary"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                                size="lg"
                            >
                                Masuk
                            </Button>
                        </form>

                        <div className="text-center">
                            <Link
                                href="/forgot-password"
                                className="text-sm text-primary hover:text-primary/80 transition-colors"
                            >
                                Lupa Kata Sandi?
                            </Link>
                        </div>

                        <div className="flex justify-center items-center text-xs text-muted-foreground text-center border-t border-border pt-4">
                            <Shield className="h-4 w-4 mr-1" />
                            Akses terbatas hanya untuk personel yang berwenang
                        </div>
                    </CardContent>
                </Card>

                {/* Demo Credentials */}
                <div className="mt-6 p-4 bg-card/80 rounded-lg border border-border/50">
                    <p className="text-xs text-muted-foreground text-center">
                        <strong>Demo Login:</strong>
                        <br />
                        Email: admin@example.com
                        <br />
                        Password: 1234567
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
