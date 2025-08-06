"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft } from "lucide-react";
import Image from "next/image";
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
        }
        if (email === "admin123@example.com" && password === "81818") {
            toast.success("Login berhasil! Mengarahkan ke dashboard...");
            setTimeout(() => {
                router.push("/pemda/dashboard");
            }, 1000);
        } else {
            toast.error("Email atau password salah!");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Back to Home Link */}
                <Link href="/">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-primary/10 hover:text-primary transition-all mb-4"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Kembali ke Beranda
                    </Button>
                </Link>

                <Card className="shadow-elegant border-border/50 bg-card/95 backdrop-blur-sm">
                    <CardHeader className="text-center space-y-4">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/sigap-logo.png"
                                alt="SIGAP Logo"
                                width={80}
                                height={80}
                                className="h-20 w-auto"
                                priority
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
                <div className="mt-6 space-y-4">
                    {/* Dinas Credentials */}
                    <div className="p-4 bg-card/80 rounded-lg border border-border/50">
                        <div className="flex items-center space-x-2 mb-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <p className="text-sm font-medium text-foreground">
                                Demo Login - Dashboard Dinas
                            </p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                            <p>
                                <strong>Email:</strong> admin@example.com
                            </p>
                            <p>
                                <strong>Password:</strong> 1234567
                            </p>
                            <p className="mt-1 text-xs opacity-75">
                                Akses ke dashboard operasional dinas terkait
                            </p>
                        </div>
                    </div>

                    {/* Pemda Credentials */}
                    <div className="p-4 bg-card/80 rounded-lg border border-border/50">
                        <div className="flex items-center space-x-2 mb-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <p className="text-sm font-medium text-foreground">
                                Demo Login - Dashboard Pemerintah Daerah
                            </p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                            <p>
                                <strong>Email:</strong> admin123@example.com
                            </p>
                            <p>
                                <strong>Password:</strong> 81818
                            </p>
                            <p className="mt-1 text-xs opacity-75">
                                Akses ke dashboard eksekutif pemerintah daerah
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
