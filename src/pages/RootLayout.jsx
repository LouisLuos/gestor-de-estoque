import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout() {
  return (
    // bg-dark e text-white aplicam o fundo escuro e texto claro do Bootstrap
    <div className="container-fluid bg-dark text-white d-flex flex-column min-vh-100">
      
      <header className="header py-3 border-bottom border-secondary mb-4">
        <nav className="d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0">Stock React</h1>
          <div className="d-flex gap-3">
            <Link to="/" className="btn btn-outline-light">Início</Link>
            <Link to="/items" className="btn btn-outline-light">Itens</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <footer className="py-3 border-top border-secondary mt-4 px-3 text-secondary">
        <p className="mb-0 small">Feito com React Router</p>
      </footer>

    </div>
  );
}