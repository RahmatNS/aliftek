import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import { ChevronRight, Code, Cloud, LineChart, ShieldCheck, Laptop } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary-100 selection:text-primary-900">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-24 sm:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_20rem_at_top,theme(colors.primary.100),white)] opacity-20"></div>
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8 flex justify-center">
                <span className="rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10">
                  Konsultan IT Terpercaya
                </span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                Solusi Teknologi untuk <span className="text-primary-600">Bisnis Modern</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Aliftek berdedikasi untuk memberikan layanan konsultasi IT terbaik, membantu transformasi digital bisnis Anda dengan teknologi terkini.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#contact"
                  className="rounded-full bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-primary-500/25 hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all"
                >
                  Konsultasi Gratis
                </a>
                <a href="#services" className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1 group">
                  Lihat Layanan <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-600 uppercase tracking-wide">Layanan Kami</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Segala yang anda butuhkan untuk tumbuh cepat
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Kami menawarkan berbagai solusi teknologi yang dirancang khusus untuk memenuhi kebutuhan spesifik industri Anda.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                {[
                  {
                    name: 'Odoo ERP Implementation',
                    description: 'Solusi ERP terintegrasi untuk Accounting, Inventory, dan CRM sesuai standar bisnis Anda.',
                    icon: Code,
                    href: '/odoo',
                  },
                  {
                    name: 'Cloud Infrastructure',
                    description: 'Solusi cloud yang aman dan skalabel untuk infrastruktur bisnis Anda.',
                    icon: Cloud,
                  },
                  {
                    name: 'IT Consulting',
                    description: 'Konsultasi strategi teknologi untuk efisiensi operasional maksimal.',
                    icon: LineChart,
                  },
                  {
                    name: 'Cyber Security',
                    description: 'Perlindungan data dan sistem dari ancaman siber dengan standar global.',
                    icon: ShieldCheck,
                  },
                ].map((feature) => (
                  <div key={feature.name} className="relative pl-16 group">
                    <dt className="text-base font-semibold leading-7 text-slate-900">
                      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg border border-slate-100 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-slate-600">
                      {feature.description}
                      {feature.href && (
                        <div className="mt-2">
                          <a href={feature.href} className="text-sm font-semibold text-primary-600 hover:text-primary-700">
                            Pelajari Selengkapnya &rarr;
                          </a>
                        </div>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="lg:flex lg:items-center lg:gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-base font-semibold leading-7 text-primary-600 uppercase tracking-wide">Tentang Aliftek</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Partner Transformasi Digital Anda
                </p>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Aliftek lahir dari visi untuk menjembatani kesenjangan antara potensi bisnis dan implementasi teknologi. Kami bukan sekadar vendor, tapi partner yang peduli pada pertumbuhan jangka panjang Anda.
                </p>
              </div>
              <div className="mt-16 lg:mt-0 lg:w-1/2">
                <div className="aspect-[4/3] rounded-3xl bg-slate-100 overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-700 flex items-center justify-center">
                    <Laptop className="h-32 w-32 text-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-primary-600 text-white">
                  <h2 className="text-3xl font-bold mb-6">Ayo Diskusi</h2>
                  <p className="text-primary-100 mb-8">
                    Punya ide proyek atau butuh solusi IT? Tim kami siap membantu Anda mewujudkannya.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <span>Keamanan Data Terjamin</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Code className="h-5 w-5" />
                      </div>
                      <span>Kode Standar Industri</span>
                    </div>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
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
