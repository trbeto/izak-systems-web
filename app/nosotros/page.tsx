"use client";

import { motion } from "framer-motion";

export default function Nosotros() {
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

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10 mt-10">
        
        {/* TEXTOS (Entran deslizando desde la izquierda) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-block border border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            Sobre Nosotros
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Soporte de Nivel Laboratorio. <br/><span className="text-blue-500">Resultados Reales.</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-6 drop-shadow-md">
            En Izak Systems no creemos en las soluciones de "talla única". Entendemos que la infraestructura de cada empresa es un ecosistema crítico que no puede detenerse. 
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-8 drop-shadow-md">
            Con sede en Guadalajara, nuestra ventaja radica en la ejecución técnica impecable. Si tu operación requiere hardware especializado, armamos la Workstation exacta. Si los ERPs comerciales no encajan con tus procesos, nosotros diseñamos y codificamos tu propio sistema de gestión desde cero.
          </p>
          
          <ul className="space-y-4 text-slate-200 font-medium">
            {[
              "Desarrollo de Software Custom (ERPs, Scripts, Web)",
              "Armado de Workstations y PCs de Alto Rendimiento",
              "Soporte Técnico y Mantenimiento de Equipos"
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-sm p-3 rounded-lg border border-slate-800 shadow-md"
              >
                <span className="text-blue-500 text-xl">✓</span> <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        {/* CAJA DE ESTADÍSTICAS (Entra deslizando desde la derecha) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="bg-slate-900/70 backdrop-blur-md rounded-3xl p-10 border border-slate-700 relative overflow-hidden shadow-2xl"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
           <div className="relative z-10">
              <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-4">100%</div>
              <div className="text-xl text-blue-400 font-bold mb-10 tracking-wide uppercase">Enfoque en Resolución</div>
              <div className="space-y-6">
                
                {/* Barras de progreso animadas */}
                <div>
                  <div className="flex justify-between text-sm text-slate-300 mb-2"><span>Hardware & Redes</span><span>95%</span></div>
                  <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                      className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-slate-300 mb-2"><span>Desarrollo de Software</span><span>88%</span></div>
                  <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                      className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-slate-300 mb-2"><span>Soporte Técnico</span><span>100%</span></div>
                  <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                      className="h-full bg-blue-700 shadow-[0_0_10px_rgba(29,78,216,0.5)]"
                    ></motion.div>
                  </div>
                </div>

              </div>
           </div>
        </motion.div>
      </div>
    </main>
  );
}