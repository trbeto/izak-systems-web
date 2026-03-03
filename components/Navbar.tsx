"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Lista centralizada de links
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // 🔥 AQUÍ REGRESAMOS AL COLOR ORIGINAL Y ELEGANTE
      className="fixed w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-40"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg className="w-8 h-8 text-blue-500 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          <div className="text-2xl font-black tracking-tighter text-white group-hover:opacity-80 transition-opacity">
            IZAK<span className="text-blue-500">SYSTEMS</span>
          </div>
        </Link>

        {/* MENÚ ESCRITORIO */}
        <div className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative group h-full flex items-center"
              >
                <span className={`text-sm font-medium transition-colors ${isActive ? "text-blue-400" : "text-slate-300 hover:text-white"}`}>
                  {link.name}
                </span>
                
                {/* LÍNEA ANIMADA INFERIOR */}
                {isActive ? (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-center" />
                )}
              </Link>
            )
          })}
        </div>

        {/* BOTÓN HAMBURGUESA MÓVIL (Animado) */}
        <button 
          className="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div animate={isMenuOpen ? "open" : "closed"} className="w-6 h-5 flex flex-col justify-between items-center relative">
            <motion.span 
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 9 } }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-current block rounded-full"
            ></motion.span>
            <motion.span 
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-current block rounded-full"
            ></motion.span>
            <motion.span 
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -9 } }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-current block rounded-full"
            ></motion.span>
          </motion.div>
        </button>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE ANIMADO */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-slate-900 border-b border-slate-800 shadow-2xl absolute w-full top-20 left-0"
          >
            <div className="flex flex-col px-6 py-4 space-y-2 text-center pb-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className={`py-3 text-base font-medium rounded-xl transition-all ${
                      isActive 
                        ? "bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-inner" 
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}