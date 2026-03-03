"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative pt-20 pb-20 px-6 flex flex-col items-center justify-center text-center min-h-screen overflow-hidden">
      
      {/* FONDO DE IMAGEN LOCAL */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/fondo-tech.png" 
          alt="Fondo de red tecnológica" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-slate-950/80"></div>
      </div>
      
      {/* CONTENIDO PRINCIPAL ANIMADO */}
      <div className="max-w-4xl space-y-8 mt-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block border border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-4 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
        >
          Soluciones IT Profesionales
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tight leading-tight"
        >
          Tecnología que Impulsa tu Negocio
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto"
        >
          Soluciones integrales de TI en Guadalajara. Desde el armado de Workstations de alto rendimiento y para el gaming, hasta el desarrollo de sistemas a la medida para automatizar tu empresa.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <Link href="/contacto" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
            Cotizar Proyecto
          </Link>
          <Link href="/servicios" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold border border-slate-700 hover:border-slate-500 transition-all">
            Ver Servicios
          </Link>
        </motion.div>
      </div>

      {/* BANDA DE TECNOLOGÍAS (TECH STACK) REDISEÑADA Y ANIMADA */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 w-full overflow-hidden border-t border-blue-500/20 bg-slate-950/40 backdrop-blur-md py-4 z-10 hidden md:block"
      >
        <div className="relative flex items-center overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25, // Tiempo que tarda en dar la vuelta completa
            }}
            className="flex items-center whitespace-nowrap gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            {/* Repetimos la lista dos veces para crear el bucle infinito */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 px-8">
                <span className="font-bold text-sm tracking-widest text-blue-200/80 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">PHP / LARAVEL</span>
                <span className="font-bold text-sm tracking-widest text-blue-200/80 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">JAVASCRIPT / REACT</span>
                <span className="font-bold text-sm tracking-widest text-blue-200/80 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">MYSQL / POSTGRESQL</span>
                <span className="font-bold text-sm tracking-widest text-blue-200/80 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">WINDOWS SERVER</span>
                <span className="font-bold text-sm tracking-widest text-blue-200/80 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">LINUX / DOCKER</span>
                <span className="font-bold text-sm tracking-widest text-blue-200/80 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">POWERSHELL SCRIPTS</span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Sombras laterales para difuminar los bordes */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
      </motion.div>

    </main>
  );
}