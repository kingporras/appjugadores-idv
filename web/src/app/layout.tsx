import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inter de Verdún",
  description: "Hub del equipo: convocatoria, calendario, club, alineación y MVP.",
};

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/calendario", label: "Calendario" },
  { href: "/convocatoria", label: "Convocatoria" },
  { href: "/club", label: "Club" },
  { href: "/alineacion", label: "Alineación" },
  { href: "/admin", label: "Admin" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="idv-watermark">INTER DE VERDÚN</div>

        <header className="sticky top-0 z-10 border-b border-white/30 bg-white/35 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/70 ring-1 ring-white/40">
                <Image
                  src="/images/escudo.png"
                  alt="Escudo Inter de Verdún"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide">Inter de Verdún</div>
                <div className="text-xs text-black/60">Velòdrom F7 · Jueves</div>
              </div>
            </div>

            <nav className="hidden gap-2 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-black/70 hover:bg-white/50 hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* nav móvil */}
          <div className="md:hidden">
            <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-full bg-white/45 px-3 py-1.5 text-sm font-medium text-black/70"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>

        <footer className="mx-auto max-w-6xl px-4 pb-8 text-xs text-black/60">
          <div className="flex items-center justify-between">
            <span>© {new Date().getFullYear()} Inter de Verdún</span>
            <span className="font-medium text-black/70">Celeste · Blanco · Dorado</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
