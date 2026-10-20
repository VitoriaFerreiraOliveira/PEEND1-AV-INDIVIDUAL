import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Gerenciador de Treinamentos',
  description: 'Sistema de Gestão de Treinamentos Corporativos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <div className="container">
            <Link href="/" className="navbar-brand fw-bold text-primary">
              Onboard<span className="text-white">Flow</span>
            </Link>
            <div className="navbar-nav ms-auto">
              <Link href="/" className="nav-link">
                Início
              </Link>
              <Link href="/material" className="nav-link">
                Treinamentos
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-white border-top py-3 mt-auto">
          <div className="container text-center text-muted small">
            <p className="mb-0">
              © {new Date().getFullYear()} Sistema de Treinamentos Corporativos 
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}