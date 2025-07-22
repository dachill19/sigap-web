"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
    const faqs = [
        {
            question: "Apa itu SIGAP?",
            answer: "SIGAP adalah platform digital yang menghubungkan langsung masyarakat dengan dinas pemerintah terkait. Melalui aplikasi mobile kami, Anda dapat dengan mudah melaporkan masalah perkotaan seperti jalan rusak, tumpukan sampah, atau lampu jalan mati, dan memantau proses penanganannya secara transparan.",
        },
        {
            question:
                "Apa bedanya SIGAP dengan melapor via media sosial atau kanal lain?",
            answer: "SIGAP menawarkan tiga keunggulan utama: Tepat Sasaran dengan AI yang cerdas, Transparan & Terlacak dengan monitoring real-time dan teknologi Blockchain, serta Partisipasi Dihargai dengan sistem poin insentif untuk setiap laporan valid.",
        },
        {
            question: "Apakah data dan identitas saya aman saat melapor?",
            answer: "Tentu saja. Keamanan dan privasi Anda adalah prioritas utama kami. Data pribadi Anda dilindungi dengan standar enkripsi modern dan hanya diakses oleh petugas dinas yang berwenang untuk keperluan verifikasi.",
        },
        {
            question: "Masalah apa saja yang bisa saya laporkan melalui SIGAP?",
            answer: "Anda bisa melaporkan berbagai masalah perkotaan non-darurat, mulai dari infrastruktur (jalan rusak, lampu mati), lingkungan (sampah liar, selokan mampet), ketertiban umum (parkir liar, pelanggaran bangunan), hingga masalah fasilitas umum (taman tidak terawat, halte rusak).",
        },
        {
            question: "Bagaimana cara kerja sistem poin insentif?",
            answer: "Sangat sederhana: Buat laporan yang valid dan terverifikasi, setelah laporan selesai ditangani poin otomatis masuk ke akun Anda, kumpulkan poin dan tukarkan dengan berbagai hadiah menarik seperti pulsa, voucher belanja, atau produk lainnya dari mitra kami.",
        },
        {
            question:
                "Bagaimana saya bisa yakin laporan saya benar-benar ditindaklanjuti?",
            answer: "Anda akan menerima notifikasi real-time untuk setiap pembaruan status, mulai dari 'Diterima', 'Dikerjakan', hingga 'Selesai', lengkap dengan foto bukti dari petugas. Seluruh riwayat tercatat permanen di Blockchain, menciptakan sistem yang sepenuhnya akuntabel.",
        },
        {
            question: "Apakah aplikasi ini gratis digunakan?",
            answer: "Ya, 100% gratis untuk seluruh masyarakat. Misi kami adalah memberdayakan partisipasi warga tanpa memungut biaya apapun.",
        },
        {
            question:
                "Saya dari instansi pemerintah, bagaimana cara kami bisa berkolaborasi?",
            answer: "Kami sangat terbuka untuk bermitra dengan pemerintah kota/kabupaten di seluruh Indonesia. Silakan hubungi tim kemitraan kami melalui email di mitra@sigap.id atau melalui halaman kontak di website ini.",
        },
    ];

    return (
        <section id="faq" className="py-20 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Temukan jawaban untuk pertanyaan umum tentang SIGAP dan
                        cara kerjanya
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-border/50"
                            >
                                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
