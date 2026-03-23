import "../styles/globals.css";

export const metadata = {
  title: "Sistema Gestão Interna 17º BPM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="antialiased">{children}</body>
    </html>
  );
}