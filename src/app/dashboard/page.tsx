"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    FileText,
    Clock,
    AlertTriangle,
    CheckCircle,
    MapPin,
    Calendar,
    Filter,
    Search,
    User,
    LogOut,
    TrendingUp,
    Activity,
    Eye,
} from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
    const kpiData = [
        {
            title: "Laporan Baru",
            count: 23,
            icon: FileText,
            color: "bg-blue-500",
            trend: "+5%",
        },
        {
            title: "Dalam Proses",
            count: 15,
            icon: Clock,
            color: "bg-yellow-500",
            trend: "-2%",
        },
        {
            title: "Prioritas Tinggi",
            count: 4,
            icon: AlertTriangle,
            color: "bg-red-500",
            trend: "+1%",
        },
        {
            title: "Selesai Hari Ini",
            count: 8,
            icon: CheckCircle,
            color: "bg-green-500",
            trend: "+12%",
        },
    ];

    const recentReports = [
        {
            id: "RPT-001",
            title: "Jalan Berlubang di Jl. Sudirman",
            location: "Jl. Sudirman No. 45",
            urgency: "Tinggi",
            time: "2 jam lalu",
            reporter: "Ahmad S.",
            status: "Baru",
        },
        {
            id: "RPT-002",
            title: "Lampu Jalan Mati",
            location: "Jl. Thamrin Raya",
            urgency: "Sedang",
            time: "4 jam lalu",
            reporter: "Siti M.",
            status: "Diproses",
        },
        {
            id: "RPT-003",
            title: "Saluran Air Tersumbat",
            location: "Jl. Gatot Subroto",
            urgency: "Tinggi",
            time: "6 jam lalu",
            reporter: "Budi H.",
            status: "Verifikasi",
        },
    ];

    const getUrgencyColor = (urgency: string) => {
        switch (urgency) {
            case "Tinggi":
                return "bg-red-100 text-red-800 border-red-200";
            case "Sedang":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "Rendah":
                return "bg-green-100 text-green-800 border-green-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Baru":
                return "bg-blue-100 text-blue-800";
            case "Diproses":
                return "bg-orange-100 text-orange-800";
            case "Verifikasi":
                return "bg-purple-100 text-purple-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
            {/* Header */}
            <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
                <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img
                            src="/sigap-logo.png"
                            alt="SIGAP Logo"
                            className="h-16 w-auto"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-foreground">
                                Dashboard Operasional
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Selamat datang kembali, Dinas Pekerjaan Umum
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="/reports">
                            <Button
                                variant="outline"
                                className="hidden md:flex"
                            >
                                <Activity className="h-4 w-4 mr-2" />
                                Kelola Laporan
                            </Button>
                        </Link>
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

            <div className="p-6 space-y-8">
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {kpiData.map((kpi, index) => (
                        <Card
                            key={index}
                            className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-muted-foreground">
                                            {kpi.title}
                                        </p>
                                        <div className="flex items-baseline space-x-2">
                                            <p className="text-3xl font-bold text-foreground">
                                                {kpi.count}
                                            </p>
                                            <div className="flex items-center space-x-1">
                                                <TrendingUp className="h-3 w-3 text-green-500" />
                                                <span className="text-xs text-green-500 font-medium">
                                                    {kpi.trend}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`p-4 rounded-xl ${kpi.color}`}
                                    >
                                        <kpi.icon className="h-6 w-6 text-white" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Recent Reports */}
                    <div className="lg:col-span-2">
                        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle className="text-xl">
                                        Laporan Terbaru
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Laporan yang baru masuk hari ini
                                    </p>
                                </div>
                                <Link href="/reports">
                                    <Button variant="outline" size="sm">
                                        <Eye className="h-4 w-4 mr-2" />
                                        Lihat Semua
                                    </Button>
                                </Link>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {recentReports.map((report) => (
                                    <div
                                        key={report.id}
                                        className="p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer border border-border/30"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1 space-y-2">
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-sm font-mono text-primary font-semibold">
                                                        {report.id}
                                                    </span>
                                                    <Badge
                                                        className={getUrgencyColor(
                                                            report.urgency
                                                        )}
                                                        variant="secondary"
                                                    >
                                                        {report.urgency}
                                                    </Badge>
                                                    <Badge
                                                        className={getStatusColor(
                                                            report.status
                                                        )}
                                                        variant="secondary"
                                                    >
                                                        {report.status}
                                                    </Badge>
                                                </div>
                                                <h4 className="font-semibold text-foreground text-lg">
                                                    {report.title}
                                                </h4>
                                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                                    <span className="flex items-center space-x-1">
                                                        <MapPin className="h-3 w-3" />
                                                        <span>
                                                            {report.location}
                                                        </span>
                                                    </span>
                                                    <span className="flex items-center space-x-1">
                                                        <User className="h-3 w-3" />
                                                        <span>
                                                            {report.reporter}
                                                        </span>
                                                    </span>
                                                    <span className="flex items-center space-x-1">
                                                        <Calendar className="h-3 w-3" />
                                                        <span>
                                                            {report.time}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <Link
                                                href={`/reports/${report.id}`}
                                            >
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Detail
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Stats & Actions */}
                    <div className="space-y-6">
                        {/* Operational Heatmap */}
                        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    Peta Operasional
                                </CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    Distribusi laporan hari ini
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center border border-border/30">
                                    <div className="text-center space-y-2">
                                        <MapPin className="h-8 w-8 text-primary mx-auto" />
                                        <p className="text-sm font-medium text-foreground">
                                            Peta Konsentrasi Laporan
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Menampilkan distribusi geografis
                                            <br />
                                            untuk optimasi rute kerja
                                        </p>
                                    </div>
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
                                <Button className="w-full justify-start bg-primary hover:bg-primary/90">
                                    <FileText className="h-4 w-4 mr-2" />
                                    Buat Laporan Manual
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                >
                                    <Filter className="h-4 w-4 mr-2" />
                                    Filter Laporan
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                >
                                    <Search className="h-4 w-4 mr-2" />
                                    Pencarian Lanjutan
                                </Button>
                                <Link href="/reports" className="block">
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start"
                                    >
                                        <CheckCircle className="h-4 w-4 mr-2" />
                                        Kelola Semua Laporan
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
