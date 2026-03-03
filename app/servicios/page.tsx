"use client";

import { motion } from "framer-motion";

export default function Servicios() {
  return (
    <main className="py-20 px-6 relative overflow-hidden min-h-screen">
      
      {/* FONDO SUTIL PARA MANTENER COHERENCIA */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/fondo-tech.png" 
          alt="Fondo de red" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-slate-950/80"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-10">
        
        {/* CABECERA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">Nuestras Soluciones</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Cubrimos todo el espectro tecnológico para que tú te enfoques en hacer crecer tu negocio, sin preocuparte por la infraestructura.
          </p>
        </motion.div>

        {/* GRID DE SERVICIOS PRINCIPALES CON EFECTO GLOW */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: "💻",
              title: "Desarrollo de Software",
              // 🔥 Actualizado: Quitamos ADVPL y pusimos Bases de Datos
              desc: "Creación de sistemas web interactivos, paneles de administración en PHP y arquitectura de bases de datos construidos 100% a la medida de tu flujo de trabajo."
            },
            {
              icon: "⚙️",
              title: "Armado y Hardware",
              desc: "Ensamblaje de PCs Custom (Workstations profesionales y Rigs), mantenimiento preventivo/correctivo y provisión de hardware de alto rendimiento."
            },
            {
              icon: "🛠️",
              title: "Redes y Soporte IT",
              // 🔥 Actualizado: Quitamos Fortinet y Ruijie, lo dejamos como infraestructura y PowerShell
              desc: "Implementación de infraestructura de red, configuración de PBX (Grandstream), scripts de automatización (PowerShell) y soporte técnico corporativo."
            }
          ].map((servicio, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]">{servicio.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{servicio.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {servicio.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SECCIÓN: PROBLEMA VS SOLUCIÓN */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-slate-800/50 pt-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">El Enfoque Izak Systems</h2>
            <p className="text-slate-400">No vendemos cajas, resolvemos cuellos de botella operativos.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* CASO 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-0 sm:gap-4 bg-slate-900/40 rounded-2xl overflow-hidden border border-slate-800/80 hover:border-red-500/30 transition-colors"
            >
              <div className="bg-red-500/10 p-6 sm:w-1/2 border-b sm:border-b-0 sm:border-r border-slate-800/80">
                <span className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2 block">El Problema Frecuente</span>
                <p className="text-slate-300 text-sm">Sistemas comerciales rígidos o paneles de usuario que no se adaptan a los procesos reales de la empresa, generando trabajo doble.</p>
              </div>
              <div className="bg-blue-500/10 p-6 sm:w-1/2">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 block">La Solución Izak</span>
                {/* 🔥 Actualizado: Web / PHP / Bases de Datos en lugar de ADVPL */}
                <p className="text-slate-300 text-sm">Auditoría del proceso y desarrollo de sistemas a la medida (Web / PHP / Bases de Datos) que automatizan y centralizan la información.</p>
              </div>
            </motion.div>

            {/* CASO 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-0 sm:gap-4 bg-slate-900/40 rounded-2xl overflow-hidden border border-slate-800/80 hover:border-blue-500/30 transition-colors"
            >
              <div className="bg-red-500/10 p-6 sm:w-1/2 border-b sm:border-b-0 sm:border-r border-slate-800/80">
                <span className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2 block">El Problema Frecuente</span>
                <p className="text-slate-300 text-sm">Redes corporativas inestables, caídas constantes de internet o equipos de cómputo lentos que frenan la productividad del personal.</p>
              </div>
              <div className="bg-blue-500/10 p-6 sm:w-1/2">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 block">La Solución Izak</span>
                {/* 🔥 Actualizado: Quitamos lo del Firewall Fortinet */}
                <p className="text-slate-300 text-sm">Implementación de hardware empresarial, configuración de redes estructuradas seguras y optimización profunda de Sistemas Operativos.</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </main>
  );
}