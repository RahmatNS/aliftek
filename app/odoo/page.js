import Header from '../../components/Header';
import { CheckCircle2, LayoutDashboard, Calculator, Users, Package, Settings } from 'lucide-react';

export const metadata = {
    title: "Odoo ERP Implementation | Aliftek",
    description: "Transformasi bisnis Anda dengan sistem ERP Odoo yang terintegrasi untuk Accounting, Inventory, CRM, dan lainnya.",
};

export default function OdooPage() {
    const features = [
        {
            title: 'Accounting & Finance',
            description: 'Laporan keuangan real-time, manajemen invoice, dan rekonsiliasi bank otomatis.',
            icon: Calculator
        },
        {
            title: 'Inventory & Warehouse',
            description: 'Pelacakan stok akurat, manajemen multi-gudang, dan integrasi rantai pasokan.',
            icon: Package
        },
        {
            title: 'CRM & Sales',
            description: 'Kelola pipeline penjualan, otomatisasi penawaran, dan tingkatkan retensi klien.',
            icon: Users
        },
        {
            title: 'Dashboard & Reporting',
            description: 'Visualisasi data bisnis Anda untuk pengambilan keputusan yang lebih strategis.',
            icon: LayoutDashboard
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <main>
                {/* Odoo Hero */}
                <section className="bg-primary-900 py-24 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
                                Optimalkan Bisnis Anda dengan <span className="text-primary-400">Odoo ERP</span>
                            </h1>
                            <p className="text-xl text-primary-100 mb-10">
                                Kami hadir untuk membantu implementasi, kustomisasi, dan maintenance sistem Odoo agar sesuai dengan alur kerja spesifik perusahaan Anda.
                            </p>
                            <div className="flex gap-4">
                                <a href="/#contact" className="bg-white text-primary-900 px-8 py-3 rounded-full font-bold hover:bg-primary-50 transition-colors">
                                    Konsultasi Odoo
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Odoo */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-slate-900">Mengapa Memilih Odoo?</h2>
                                <div className="space-y-6">
                                    {[
                                        'Terintegrasi Penuh: Semua modul saling terhubung.',
                                        'Skalabel: Mulai dari kecil dan tumbuh bersama bisnis Anda.',
                                        'User-Friendly: Antarmuka modern yang mudah dipelajari.',
                                        'Cost-Effective: Solusi premium dengan biaya yang terjangkau.'
                                    ].map((text, i) => (
                                        <div key={i} className="flex gap-4">
                                            <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                                            <p className="text-slate-600">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {features.map((f, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                        <f.icon className="h-8 w-8 text-primary-600 mb-4" />
                                        <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                                        <p className="text-sm text-slate-500">{f.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Odoo Implementation Steps */}
                <section className="py-24 bg-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900">Tahapan Implementasi</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            {[
                                { step: '01', title: 'Analisis Kebutuhan', desc: 'Kami mempelajari proses bisnis Anda secara mendalam.' },
                                { step: '02', title: 'Konfigurasi & Dev', desc: 'Instalasi dan kustomisasi modul Odoo sesuai standarisasi.' },
                                { step: '03', title: 'Training & Go Live', desc: 'Pelatihan bagi user dan pendampingan saat sistem mulai berjalan.' }
                            ].map((s, i) => (
                                <div key={i} className="relative p-8">
                                    <div className="text-5xl font-black text-primary-600/10 absolute top-0 left-1/2 -translate-x-1/2">{s.step}</div>
                                    <h3 className="text-xl font-bold mb-4 relative z-10">{s.title}</h3>
                                    <p className="text-slate-600 relative z-10">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section id="contact-odoo" className="py-24 bg-primary-600 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6">Siap Bertransformasi Digital?</h2>
                        <p className="text-primary-100 mb-10 max-w-2xl mx-auto text-lg">
                            Hubungi tim Aliftek hari ini untuk demo Odoo gratis dan konsultasikan kebutuhan ERP perusahaan Anda.
                        </p>
                        <a href="/#contact" className="bg-white text-primary-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all inline-block">
                            Hubungi Kami Sekarang
                        </a>
                    </div>
                </section>
            </main>

            <footer className="bg-white py-12 border-t border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Aliftek. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
