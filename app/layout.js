import './globals.css';

export const metadata = {
  title: "HasnaLabs | Konsultan IT & Solusi Digital Terpercaya",
  description: "HasnaLabs menyediakan layanan konsultasi IT, pengembangan software, infrastruktur cloud, dan keamanan siber untuk transformasi digital bisnis Anda.",
  keywords: ["IT Consultant", "Software Development", "Cloud Solutions", "HasnaLabs", "Digital Transformation"],
  authors: [{ name: "HasnaLabs Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "HasnaLabs | Konsultan IT & Solusi Digital",
    description: "Solusi teknologi modern untuk pertumbuhan bisnis Anda.",
    url: "https://hasnalabs.com",
    siteName: "HasnaLabs",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://hasnalabs.com",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HasnaLabs",
    "url": "https://hasnalabs.com",
    "logo": "https://hasnalabs.com/logo.png",
    "description": "Konsultan IT & Solusi Digital Terpercaya di Indonesia.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://www.linkedin.com/company/hasnalabs",
      "https://github.com/hasnalabs"
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
