import './globals.css';

export const metadata = {
  title: "Aliftek | Konsultan IT & Solusi Digital Terpercaya",
  description: "Aliftek menyediakan layanan konsultasi IT, pengembangan software, infrastruktur cloud, dan keamanan siber untuk transformasi digital bisnis Anda.",
  keywords: ["IT Consultant", "Software Development", "Cloud Solutions", "Aliftek", "Digital Transformation"],
  authors: [{ name: "Aliftek Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Aliftek | Konsultan IT & Solusi Digital",
    description: "Solusi teknologi modern untuk pertumbuhan bisnis Anda.",
    url: "https://aliftek.id",
    siteName: "Aliftek",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://aliftek.id",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aliftek",
    "url": "https://aliftek.id",
    "logo": "https://aliftek.id/logo.png",
    "description": "Konsultan IT & Solusi Digital Terpercaya di Indonesia.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://www.linkedin.com/company/aliftek",
      "https://github.com/aliftek"
    ]
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
