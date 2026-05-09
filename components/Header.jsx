import { Laptop, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Laptop className="h-6 w-6 text-primary-600" />
          <span className="text-xl font-bold tracking-tight text-slate-900">HasnaLabs</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/#services" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Layanan</a>
          <a href="/odoo" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors font-semibold text-primary-600">Odoo ERP</a>
          <a href="/#about" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Tentang Kami</a>
          <a href="/#contact" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Kontak</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 text-slate-600">
            <Menu className="h-6 w-6" />
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-all hover:scale-105 active:scale-95"
          >
            Mulai Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}
