import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "Обо мне" },
  { href: "/methodology", label: "Копилка" },
  { href: "/parents", label: "Родителям" },
  { href: "/students", label: "Ученикам" },
];

export default function Header({ className }: HeaderProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className={`text-sm uppercase tracking-wide font-semibold ${isHome ? "text-white" : "text-neutral-900"}`}
        >
          Интеллектуальный мир
        </Link>
        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`transition-colors duration-300 uppercase text-sm ${
                location.pathname === link.href
                  ? isHome
                    ? "text-white font-semibold"
                    : "text-neutral-900 font-semibold"
                  : isHome
                  ? "text-white/70 hover:text-white"
                  : "text-neutral-400 hover:text-neutral-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}