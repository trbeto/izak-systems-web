"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function Contacto() {
  return (
    <main className="relative py-20 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* FONDO DE IMAGEN LOCAL */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/fondo-tech.png" 
          alt="Fondo de red tecnológica" 
          className="w-full h-full object-cover opacity-80" 
        />
        <div className="absolute inset-0 bg-slate-950/75"></div>
      </div>
      
      {/* CONTENIDO CENTRADO */}
      <div className="max-w-3xl w-full mx-auto text-center relative z-10 mt-10">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
        >
          Atención Inmediata
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-6 drop-shadow-lg"
        >
          ¿Listo para optimizar tu TI?
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-slate-300 mb-12 drop-shadow-md"
        >
          Déjanos un mensaje con los detalles de tu proyecto o requerimiento. Uno de nuestros ingenieros se pondrá en contacto contigo a la brevedad.
        </motion.p>
        
        {/* EL FORMULARIO ENTRA DESDE ABAJO */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-2xl text-left"
        >
          <ContactForm />
        </motion.div>

      </div>
    </main>
  );
}