'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api.php?action=contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Failed to send');

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error(err);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <div className="p-8 md:p-12">
            {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <Send className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Pesan Terkirim!</h3>
                    <p className="text-slate-600">Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-primary-600 font-semibold hover:text-primary-700"
                    >
                        Kirim Pesan Lain
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Pesan</label>
                        <textarea
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                            rows="4"
                            placeholder="Ceritakan kebutuhan Anda..."
                        ></textarea>
                    </div>

                    {status === 'error' && (
                        <p className="text-red-600 text-sm italic">Terjadi kesalahan. Silakan coba lagi nanti.</p>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-primary-600 text-white font-bold py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Mengaktifkan...
                            </>
                        ) : (
                            'Kirim Pesan'
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}
