import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-reveal fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          <span className="text-blue-500">Petta</span> Tech
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">

          <a href="/#servicos"
            className="text-slate-300 hover:text-white transition">
            Serviços
          </a>

          <Link
            to="/sites"
            className="text-slate-300 hover:text-white transition"
          >
            Sites
          </Link>

          <a href="/#sobre"
            className="text-slate-300 hover:text-white transition">
            Sobre
          </a>

          <a href="/#contato"
            className="text-slate-300 hover:text-white transition">
            Contato
          </a>

          <a
            href="https://wa.me/5511911543874"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl font-medium shadow-lg shadow-blue-600/20"
          >
            Solicitar Diagnóstico
          </a>

        </nav>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          <Menu size={28} />
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <nav className="flex flex-col p-6 gap-5">

            <a href="/#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>

            <Link to="/sites" onClick={() => setMenuOpen(false)}>Sites</Link>

            <a href="/#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>

            <a href="/#contato" onClick={() => setMenuOpen(false)}>Contato</a>

            <a
              href="https://wa.me/5511911543874"
              className="bg-blue-600 rounded-xl text-center py-3 mt-3"
            >
              Solicitar Diagnóstico
            </a>

          </nav>

        </div>
      )}
    </header>
  );
}