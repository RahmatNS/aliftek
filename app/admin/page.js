import Header from '../../components/Header';
import { getContacts } from '../../lib/db';
import { Mail, User, Calendar, MessageSquare, LogOut } from 'lucide-react';
import LogoutButton from '../../components/LogoutButton';

export const metadata = {
    title: "Mini CRM Dashboard | HasnaLabs",
    description: "Dashboard backend untuk melihat pesan dari klien.",
};

export default function AdminPage() {
    const contacts = getContacts();

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <main className="py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-8 flex justify-between items-end">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 border-l-4 border-primary-600 pl-4">
                                Mini CRM Dashboard
                            </h1>
                            <p className="text-slate-600 mt-2">Daftar pesan masuk dari form kontak HasnaLabs.</p>
                        </div>
                        <LogoutButton />
                    </div>

                    <div className="grid gap-6">
                        {contacts.length === 0 ? (
                            <div className="bg-white p-12 text-center rounded-2xl shadow-sm border border-slate-100">
                                <MessageSquare className="h-12 w-12 text-slate-200 mx-auto mb-4" />
                                <p className="text-slate-500 font-medium">Belum ada pesan yang masuk.</p>
                            </div>
                        ) : (
                            contacts.map((contact) => (
                                <div key={contact.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="flex flex-wrap gap-6 mb-4 pb-4 border-b border-slate-50">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <User className="h-4 w-4 text-primary-500" />
                                            <span className="font-semibold text-slate-900">{contact.name}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Mail className="h-4 w-4 text-primary-500" />
                                            <span>{contact.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500 ml-auto">
                                            <Calendar className="h-4 w-4" />
                                            <span>{new Date(contact.created_at).toLocaleString('id-ID')}</span>
                                        </div>
                                    </div>
                                    <div className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                                        {contact.message}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </main>

            <footer className="bg-white py-12 border-t border-slate-200 mt-auto">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} HasnaLabs. Admin Dashboard.
                    </p>
                </div>
            </footer>
        </div>
    );
}
