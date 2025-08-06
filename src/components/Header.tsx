"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Catálogo", href: "/products" },
    { label: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href.split("#")[0]); // para soportar /#contacto

  return (
    <header className="bg-background shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo + Branding */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold tracking-wide">SC</span>
          </div>
          <span className="text-foreground text-lg font-semibold tracking-tight">
            SkincareCol
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map(({ label, href }) => (
            <Button
              key={href}
              variant="ghost"
              className={`text-sm font-medium transition-colors ${
                isActive(href)
                  ? "text-primary underline underline-offset-4"
                  : "text-foreground hover:text-primary"
              }`}
              asChild
            >
              <Link href={href}>{label}</Link>
            </Button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg width="24" height="24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-2 bg-background border-t border-border">
          {links.map(({ label, href }) => (
            <Button
              key={href}
              variant="ghost"
              className={`w-full text-left text-sm font-medium ${
                isActive(href)
                  ? "text-primary underline underline-offset-4"
                  : "text-foreground hover:text-primary"
              }`}
              asChild
            >
              <Link href={href}>{label}</Link>
            </Button>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
