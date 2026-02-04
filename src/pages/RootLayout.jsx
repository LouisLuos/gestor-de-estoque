import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout() {
  return (
    <div className="container-fluid px-3 bg-dark text-white d-flex flex-column min-vh-100">
      <header className="header py-3 border-bottom border-secondary mb-4">
        <nav className="d-flex justify-content-between align-items-center">
          <h1 className="h5 mb-0">Stock React</h1>
          <div className="d-flex gap-3">
            <Link to="/" className="btn btn-outline-light">
              Início
            </Link>
            <Link to="/items" className="btn btn-outline-light">
              Itens
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow-1 ">
        <Outlet />
      </main>

      <footer className="py-3 border-top border-secondary mt-4 px-3 text-secondary d-flex justify-content-between align-items-center">
        <div>
          <p className="mb-0 small">Feito com React Router</p>
        </div>
        <div className="d-flex gap-3">
          <p className="mb-0 small">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-light"
            >
              Github
            </a>
          </p>
          <p className="mb-0 small">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-light"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
