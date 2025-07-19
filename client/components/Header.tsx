import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full bg-white py-4 px-4 lg:px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Instagram Icon */}
        <div className="flex items-center">
          <a
            href="https://www.instagram.com/yediverenozelegitim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://i.imgur.com/qBZOJQd.png"
            alt="Yediveren Özel Eğitim ve Rehabilitasyon Merkezi"
            className="h-16 w-auto"
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-end text-right text-purple-700 font-bold">
          <div className="text-lg">0332 248 50 50</div>
          <div className="text-sm">yediverenozelegitim@gmail.com</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex flex-wrap justify-center gap-2 lg:gap-4 max-w-7xl mx-auto">
        <Link to="/">
          <Button className="bg-brand-blue text-white hover:bg-brand-blue/90 rounded-2xl font-bold px-8 py-4 h-auto text-lg shadow-lg drop-shadow-md">
            Anasayfa
          </Button>
        </Link>
        <Link to="/hakkimizda">
          <Button className="bg-brand-green text-white hover:bg-brand-green/90 rounded-2xl font-bold px-8 py-4 h-auto text-lg shadow-lg drop-shadow-md">
            Hakkımızda
          </Button>
        </Link>
        <Link to="/calisma-alanlari">
          <Button className="bg-brand-lime text-white hover:bg-brand-lime/90 rounded-2xl font-bold px-8 py-4 h-auto text-lg shadow-lg drop-shadow-md">
            Çalışma Alanlarımız
          </Button>
        </Link>
        <Link to="/kadromuz">
          <Button className="bg-brand-orange text-white hover:bg-brand-orange/90 rounded-2xl font-bold px-8 py-4 h-auto text-lg shadow-lg drop-shadow-md">
            Kadromuz
          </Button>
        </Link>
        <Link to="/iletisim">
          <Button className="bg-brand-pink text-white hover:bg-brand-pink/90 rounded-2xl font-bold px-8 py-4 h-auto text-lg shadow-lg drop-shadow-md">
            İletişim
          </Button>
        </Link>
      </nav>
    </header>
  );
}
