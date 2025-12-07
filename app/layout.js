export const metadata = {
  title: "Aliftek | IT Consultant",
  description: "Solusi teknologi untuk bisnis modern.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
