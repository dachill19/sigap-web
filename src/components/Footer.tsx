import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-foreground text-background py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div className="space-y-4">
                        <div className="inline-block p-2 bg-background/30 backdrop-blur-sm rounded-lg border border-background/20">
                            <Image
                                src="/sigap-logo.png"
                                alt="SIGAP Logo"
                                width={64}
                                height={64}
                                className="h-10 w-auto"
                                priority={false}
                            />
                        </div>

                        <p className="text-background/80 text-sm leading-relaxed">
                            Platform pelaporan cerdas yang menghubungkan warga
                            dengan pemerintah daerah untuk menciptakan kota yang
                            lebih baik dan responsif.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Navigasi</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="#fitur"
                                    className="text-background/80 hover:text-background transition-colors"
                                >
                                    Fitur
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#tentang"
                                    className="text-background/80 hover:text-background transition-colors"
                                >
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#faq"
                                    className="text-background/80 hover:text-background transition-colors"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/login"
                                    className="text-background/80 hover:text-background transition-colors"
                                >
                                    Portal Mitra
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="text-background/80 hover:text-background transition-colors"
                                >
                                    Kebijakan Privasi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms-conditions"
                                    className="text-background/80 hover:text-background transition-colors"
                                >
                                    Syarat & Ketentuan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/user-guide"
                                    className="text-background/80 hover:text-background transition-colors"
                                >
                                    Panduan Penggunaan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">
                            Ikuti Kami
                        </h4>
                        <div className="flex space-x-4">
                            <Link
                                href="https://facebook.com/sigap"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-background/80 hover:text-background transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://twitter.com/sigap"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-background/80 hover:text-background transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://instagram.com/sigap"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-background/80 hover:text-background transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://youtube.com/@sigap"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-background/80 hover:text-background transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-background/20 mt-8 pt-8 text-center">
                    <p className="text-background/60 text-sm">
                        © {new Date().getFullYear()} SIGAP. Semua hak
                        dilindungi. Dikembangkan untuk menciptakan transparansi
                        pemerintahan.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
