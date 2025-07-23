"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
    ArrowLeft,
    MapPin,
    Calendar,
    User,
    Phone,
    Mail,
    Camera,
    MessageSquare,
    Upload,
    CheckCircle,
    AlertTriangle,
    Clock,
    LogOut,
    Brain,
    Link as LinkIcon,
    Star,
    BarChart3,
} from "lucide-react";
import Link from "next/link";

const ReportDetail = () => {
    const reportData = {
        id: "RPT-001",
        title: "Jalan Berlubang Besar di Jl. Sudirman",
        description:
            "Terdapat lubang besar dengan diameter sekitar 2 meter di tengah jalan yang sangat membahayakan pengendara. Kondisi semakin parah setelah hujan kemarin dan mulai mengancam keselamatan pengguna jalan.",
        location: "Jl. Sudirman No. 45, Jakarta Pusat",
        coordinates: "-6.1944, 106.8229",
        urgency: "Tinggi",
        category: "Jalan Raya",
        status: "Diverifikasi",
        createdAt: "15 Januari 2024, 08:30",
        reporter: {
            name: "Ahmad Santoso",
            phone: "081234567890",
            email: "ahmad.santoso@email.com",
            rating: 4.8,
        },
        aiAnalysis: {
            suggestedCategory: "Infrastruktur Jalan Raya",
            urgencyScore: 85,
            estimatedCost: "Rp 5.000.000 - Rp 8.000.000",
            estimatedTime: "3-5 hari kerja",
            similarReports: 3,
            confidence: 92,
        },
    };

    const activityLog = [
        {
            time: "15 Jan 2024, 08:30",
            action: "Laporan dibuat oleh warga",
            user: "Ahmad Santoso",
            type: "create",
        },
        {
            time: "15 Jan 2024, 09:15",
            action: "Laporan diterima dan dianalisis sistem",
            user: "SIGAP AI",
            type: "system",
        },
        {
            time: "15 Jan 2024, 09:20",
            action: "Analisis AI selesai - Prioritas Tinggi",
            user: "SIGAP AI",
            type: "ai",
        },
        {
            time: "15 Jan 2024, 10:45",
            action: "Laporan diverifikasi dan disetujui",
            user: "Budi Hartono",
            type: "verify",
        },
        {
            time: "15 Jan 2024, 11:00",
            action: "Ditugaskan ke Tim Lapangan Zona A",
            user: "Budi Hartono",
            type: "assign",
        },
    ];

    const getActivityIcon = (type: string) => {
        switch (type) {
            case "create":
                return <User className="h-4 w-4 text-blue-500" />;
            case "system":
                return <CheckCircle className="h-4 w-4 text-green-500" />;
            case "ai":
                return <Brain className="h-4 w-4 text-purple-500" />;
            case "verify":
                return <CheckCircle className="h-4 w-4 text-green-500" />;
            case "assign":
                return <User className="h-4 w-4 text-orange-500" />;
            default:
                return <Clock className="h-4 w-4 text-gray-500" />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
            {/* Header */}
            <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
                <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link href="/reports">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Kembali ke Laporan
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-foreground">
                                Detail Laporan
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Informasi lengkap dan pengelolaan laporan
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                            <User className="h-4 w-4" />
                            <span>Admin Dinas PU</span>
                        </div>
                        <Link href="/">
                            <Button variant="outline" size="sm">
                                <LogOut className="h-4 w-4 mr-2" />
                                Keluar
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="p-6 max-w-7xl mx-auto space-y-8">
                {/* Report Header */}
                <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <span className="text-lg font-mono text-primary font-bold bg-primary/10 px-3 py-1 rounded-lg">
                                        {reportData.id}
                                    </span>
                                    <Badge
                                        className="bg-red-100 text-red-800 border-red-200"
                                        variant="outline"
                                    >
                                        <AlertTriangle className="h-3 w-3 mr-1" />
                                        {reportData.urgency}
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="bg-purple-100 text-purple-800 border-purple-200"
                                    >
                                        {reportData.status}
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="bg-blue-100 text-blue-800 border-blue-200"
                                    >
                                        {reportData.category}
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl text-foreground">
                                    {reportData.title}
                                </CardTitle>
                                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                                    <span className="flex items-center space-x-1">
                                        <MapPin className="h-4 w-4" />
                                        <span>{reportData.location}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <Calendar className="h-4 w-4" />
                                        <span>{reportData.createdAt}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <Button variant="outline">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    Lihat di Peta
                                </Button>
                                <Button className="bg-primary hover:bg-primary/90">
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Selesaikan
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                </Card>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Report Details */}
                        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-xl">
                                    Deskripsi Laporan
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-muted-foreground leading-relaxed text-base">
                                    {reportData.description}
                                </p>

                                {/* Photos */}
                                <div>
                                    <h4 className="font-semibold mb-4 text-lg">
                                        Dokumentasi Foto
                                    </h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center border border-border/50 hover:shadow-md transition-shadow"
                                            >
                                                <Camera className="h-10 w-10 text-muted-foreground" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* AI Analysis */}
                        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-3">
                                    <Brain className="h-6 w-6 text-purple-500" />
                                    <span className="text-xl">
                                        Analisis AI SIGAP
                                    </span>
                                    <Badge className="bg-purple-100 text-purple-800">
                                        Akurasi{" "}
                                        {reportData.aiAnalysis.confidence}%
                                    </Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="p-4 bg-muted/30 rounded-lg">
                                            <p className="text-sm font-medium text-muted-foreground mb-1">
                                                Kategori yang Disarankan
                                            </p>
                                            <p className="font-semibold text-foreground">
                                                {
                                                    reportData.aiAnalysis
                                                        .suggestedCategory
                                                }
                                            </p>
                                        </div>
                                        <div className="p-4 bg-muted/30 rounded-lg">
                                            <p className="text-sm font-medium text-muted-foreground mb-2">
                                                Skor Urgensi
                                            </p>
                                            <div className="flex items-center space-x-3">
                                                <div className="flex-1 bg-muted rounded-full h-3">
                                                    <div
                                                        className="bg-red-500 h-3 rounded-full transition-all duration-500"
                                                        style={{
                                                            width: `${reportData.aiAnalysis.urgencyScore}%`,
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-lg font-bold text-foreground">
                                                    {
                                                        reportData.aiAnalysis
                                                            .urgencyScore
                                                    }
                                                    /100
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-muted/30 rounded-lg">
                                            <p className="text-sm font-medium text-muted-foreground mb-1">
                                                Estimasi Biaya
                                            </p>
                                            <p className="font-semibold text-foreground">
                                                {
                                                    reportData.aiAnalysis
                                                        .estimatedCost
                                                }
                                            </p>
                                        </div>
                                        <div className="p-4 bg-muted/30 rounded-lg">
                                            <p className="text-sm font-medium text-muted-foreground mb-1">
                                                Estimasi Waktu
                                            </p>
                                            <p className="font-semibold text-foreground">
                                                {
                                                    reportData.aiAnalysis
                                                        .estimatedTime
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 p-4 bg-primary/5 rounded-lg border border-primary/20">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <LinkIcon className="h-4 w-4 text-primary" />
                                            <p className="text-sm font-medium text-primary">
                                                Laporan Serupa
                                            </p>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Ditemukan{" "}
                                            <span className="font-semibold text-primary">
                                                {
                                                    reportData.aiAnalysis
                                                        .similarReports
                                                }{" "}
                                                laporan serupa
                                            </span>{" "}
                                            yang dapat dijadikan referensi
                                            penanganan
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Progress Update */}
                        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-xl">
                                    Update Progress & Koordinasi
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Textarea
                                    placeholder="Tambahkan update progress, catatan internal, koordinasi tim, atau laporan kemajuan pekerjaan..."
                                    rows={4}
                                    className="bg-background/50"
                                />
                                <div className="flex items-center space-x-4">
                                    <Button className="bg-primary hover:bg-primary/90">
                                        <MessageSquare className="h-4 w-4 mr-2" />
                                        Kirim Update
                                    </Button>
                                    <Button variant="outline">
                                        <Upload className="h-4 w-4 mr-2" />
                                        Upload Foto Progress
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Reporter Info */}
                        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    Informasi Pelapor
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Avatar className="h-12 w-12">
                                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                                            AS
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="font-semibold text-foreground">
                                            {reportData.reporter.name}
                                        </p>
                                        <div className="flex items-center space-x-2">
                                            <p className="text-sm text-muted-foreground">
                                                Warga Aktif
                                            </p>
                                            <div className="flex items-center space-x-1">
                                                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                                <span className="text-xs font-medium text-yellow-600">
                                                    {reportData.reporter.rating}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Separator />
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 p-2 bg-muted/30 rounded-lg">
                                        <Phone className="h-4 w-4 text-primary" />
                                        <span className="text-sm">
                                            {reportData.reporter.phone}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-2 bg-muted/30 rounded-lg">
                                        <Mail className="h-4 w-4 text-primary" />
                                        <span className="text-sm">
                                            {reportData.reporter.email}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Activity Log */}
                        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center space-x-2">
                                    <BarChart3 className="h-5 w-5 text-primary" />
                                    <span>Timeline Aktivitas</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {activityLog.map((activity, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg"
                                        >
                                            <div className="mt-1 p-1 bg-background rounded-full">
                                                {getActivityIcon(activity.type)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-foreground">
                                                    {activity.action}
                                                </p>
                                                <p className="text-xs text-primary font-medium">
                                                    {activity.user}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {activity.time}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    Aksi Cepat
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button className="w-full justify-start bg-green-500 hover:bg-green-600 text-white">
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Selesaikan Laporan
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                >
                                    <User className="h-4 w-4 mr-2" />
                                    Tugaskan ke Tim Lain
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                >
                                    <MapPin className="h-4 w-4 mr-2" />
                                    Lihat Lokasi di Peta
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                >
                                    <MessageSquare className="h-4 w-4 mr-2" />
                                    Hubungi Pelapor
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportDetail;
