"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Search,
    Filter,
    MapPin,
    Calendar,
    User,
    AlertTriangle,
    Clock,
    CheckCircle,
    LogOut,
    ArrowLeft,
    Plus,
} from "lucide-react";
import Link from "next/link";

const ReportsManagement = () => {
    const columns = [
        { id: "new", title: "Laporan Baru", color: "bg-blue-500", count: 12 },
        {
            id: "verified",
            title: "Diverifikasi",
            color: "bg-purple-500",
            count: 8,
        },
        {
            id: "inprogress",
            title: "Dalam Proses",
            color: "bg-orange-500",
            count: 15,
        },
        { id: "completed", title: "Selesai", color: "bg-green-500", count: 23 },
        { id: "rejected", title: "Ditolak", color: "bg-red-500", count: 3 },
    ];

    const reports = {
        new: [
            {
                id: "RPT-001",
                title: "Jalan Berlubang Besar",
                location: "Jl. Sudirman No. 45",
                urgency: "Tinggi",
                time: "2 jam lalu",
                reporter: "Ahmad S.",
            },
            {
                id: "RPT-002",
                title: "Lampu Jalan Mati",
                location: "Jl. Thamrin Raya",
                urgency: "Sedang",
                time: "4 jam lalu",
                reporter: "Siti M.",
            },
        ],
        verified: [
            {
                id: "RPT-003",
                title: "Saluran Air Tersumbat",
                location: "Jl. Gatot Subroto",
                urgency: "Tinggi",
                time: "6 jam lalu",
                reporter: "Budi H.",
            },
        ],
        inprogress: [
            {
                id: "RPT-004",
                title: "Pohon Tumbang",
                location: "Jl. Diponegoro",
                urgency: "Sedang",
                time: "8 jam lalu",
                reporter: "Rina P.",
            },
            {
                id: "RPT-005",
                title: "Trotoar Rusak",
                location: "Jl. Ahmad Yani",
                urgency: "Rendah",
                time: "1 hari lalu",
                reporter: "Dedi K.",
            },
        ],
        completed: [
            {
                id: "RPT-006",
                title: "Perbaikan Jalan Raya",
                location: "Jl. Veteran",
                urgency: "Sedang",
                time: "2 hari lalu",
                reporter: "Maya L.",
            },
        ],
        rejected: [],
    };

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

    const getUrgencyIcon = (urgency: string) => {
        switch (urgency) {
            case "Tinggi":
                return <AlertTriangle className="h-3 w-3" />;
            case "Sedang":
                return <Clock className="h-3 w-3" />;
            case "Rendah":
                return <CheckCircle className="h-3 w-3" />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
            {/* Header */}
            <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
                <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link href="/dashboard">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Dashboard
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-foreground">
                                Manajemen Laporan
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Kelola dan pantau semua laporan warga
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

            <div className="p-6 space-y-6">
                {/* Filters & Search */}
                <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                        <div className="flex flex-wrap gap-4 items-center">
                            <div className="flex-1 min-w-64">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                    <Input
                                        placeholder="Cari laporan berdasarkan ID, judul, atau lokasi..."
                                        className="pl-10 bg-background/50"
                                    />
                                </div>
                            </div>

                            <Select>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="Kategori" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        Semua Kategori
                                    </SelectItem>
                                    <SelectItem value="jalan">
                                        Jalan Raya
                                    </SelectItem>
                                    <SelectItem value="lampu">
                                        Penerangan
                                    </SelectItem>
                                    <SelectItem value="saluran">
                                        Saluran Air
                                    </SelectItem>
                                    <SelectItem value="taman">
                                        Taman Kota
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="Urgensi" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Semua</SelectItem>
                                    <SelectItem value="tinggi">
                                        Tinggi
                                    </SelectItem>
                                    <SelectItem value="sedang">
                                        Sedang
                                    </SelectItem>
                                    <SelectItem value="rendah">
                                        Rendah
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            <Button variant="outline">
                                <Filter className="h-4 w-4 mr-2" />
                                Filter Lainnya
                            </Button>

                            <Button className="bg-primary hover:bg-primary/90">
                                <Plus className="h-4 w-4 mr-2" />
                                Tambah Laporan
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Kanban Board */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {columns.map((column) => (
                        <Card
                            key={column.id}
                            className="border-border/50 bg-card/80 backdrop-blur-sm min-h-96"
                        >
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center justify-between text-base">
                                    <div className="flex items-center space-x-3">
                                        <div
                                            className={`w-4 h-4 rounded-full ${column.color}`}
                                        ></div>
                                        <span className="font-semibold">
                                            {column.title}
                                        </span>
                                    </div>
                                    <Badge
                                        variant="secondary"
                                        className="bg-primary/10 text-primary font-semibold"
                                    >
                                        {column.count}
                                    </Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {reports[column.id as keyof typeof reports].map(
                                    (report) => (
                                        <Link
                                            key={report.id}
                                            href={`/reports/${report.id}`}
                                        >
                                            <Card className="cursor-pointer hover:shadow-md transition-all duration-200 bg-background/50 border-border/50 hover:border-primary/30 mb-4">
                                                <CardContent className="p-4">
                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-xs font-mono text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                                                                {report.id}
                                                            </span>
                                                            <Badge
                                                                className={getUrgencyColor(
                                                                    report.urgency
                                                                )}
                                                                variant="secondary"
                                                            >
                                                                <div className="flex items-center space-x-1">
                                                                    {getUrgencyIcon(
                                                                        report.urgency
                                                                    )}
                                                                    <span className="text-xs">
                                                                        {
                                                                            report.urgency
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </Badge>
                                                        </div>

                                                        <h4 className="font-semibold text-sm text-foreground leading-tight">
                                                            {report.title}
                                                        </h4>

                                                        <div className="space-y-2 text-xs text-muted-foreground">
                                                            <div className="flex items-center space-x-1">
                                                                <MapPin className="h-3 w-3 text-primary" />
                                                                <span className="truncate">
                                                                    {
                                                                        report.location
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <div className="flex items-center space-x-1">
                                                                    <User className="h-3 w-3 text-primary" />
                                                                    <span>
                                                                        {
                                                                            report.reporter
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center space-x-1">
                                                                    <Calendar className="h-3 w-3 text-primary" />
                                                                    <span>
                                                                        {
                                                                            report.time
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    )
                                )}

                                {/* Drop Zone */}
                                <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                                    <Plus className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
                                    <p className="text-xs text-muted-foreground">
                                        Seret laporan ke sini atau klik untuk
                                        menambah
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReportsManagement;
