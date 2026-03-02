import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500 selection:text-white scroll-smooth">
      
      {/* NAVEGACIÓN */}
      <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-white">
            IZAK<span className="text-blue-500">SYSTEMS</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-blue-400 transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center min-h-[90vh]">
        <div className="max-w-4xl space-y-8 mt-12">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tight leading-tight">
            Tecnología que Impulsa tu Negocio
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Soluciones integrales de TI en Guadalajara. Desde el armado de Workstations de alto rendimiento, hasta el desarrollo de sistemas a la medida para automatizar tu empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#contacto" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Cotizar Proyecto
            </a>
            <a href="#servicios" className="bg-transparent hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold border border-slate-600 transition-all">
              Ver Servicios
            </a>
          </div>
        </div>
      </main>

      {/* SECCIÓN DE SERVICIOS */}
      <section id="servicios" className="py-24 bg-slate-900 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Nuestras Soluciones</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Cubrimos todo el espectro tecnológico para que tú te enfoques en hacer crecer tu negocio.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💻</div>
              <h3 className="text-xl font-bold text-white mb-3">Desarrollo de Software</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Creación de sistemas web, automatización de procesos mediante scripts y desarrollo de ERPs construidos 100% a la medida de tu flujo de trabajo.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-3">Armado y Mantenimiento</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ensamblaje de PCs Custom (Workstations profesionales y Rigs), mantenimiento preventivo/correctivo y provisión de hardware de nivel laboratorio.
              </p>
            </div>

            {/* SERVICIO 3 ACTUALIZADO (Ajustado a la realidad) */}
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
              <h3 className="text-xl font-bold text-white mb-3">Soporte Técnico Especializado</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Diagnóstico de equipos, optimización de sistemas operativos, consultoría tecnológica y soporte técnico directo para que tu entorno digital no se detenga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN NOSOTROS */}
      <section id="nosotros" className="py-24 bg-slate-950 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Soporte de Nivel Laboratorio. <br/><span className="text-blue-500">Resultados Reales.</span></h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              En Izak Systems no creemos en las soluciones de "talla única". Entendemos que la infraestructura de cada empresa es un ecosistema crítico que no puede detenerse. 
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Con sede en Guadalajara, nuestra ventaja radica en la ejecución técnica impecable. Si tu operación requiere hardware especializado, armamos la Workstation exacta. Si los ERPs comerciales no encajan con tus procesos o resultan demasiado complejos, nosotros diseñamos y codificamos tu propio sistema de gestión desde cero.
            </p>
            
            {/* BULLETS ACTUALIZADOS */}
            <ul className="space-y-3 text-slate-300 font-medium">
              <li className="flex items-center gap-3">✓ <span className="text-sm">Desarrollo de Software Custom (ERPs, Scripts, Web)</span></li>
              <li className="flex items-center gap-3">✓ <span className="text-sm">Armado de Workstations y PCs de Alto Rendimiento</span></li>
              <li className="flex items-center gap-3">✓ <span className="text-sm">Soporte Técnico y Mantenimiento de Equipos</span></li>
            </ul>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
             <div className="relative z-10">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-2">100%</div>
                <div className="text-blue-400 font-bold mb-8">Enfoque en Resolución</div>
                <div className="space-y-4">
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[95%]"></div></div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-cyan-400 w-[88%]"></div></div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-blue-700 w-[100%]"></div></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" className="py-24 bg-slate-900 px-6 border-t border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">¿Listo para optimizar tu TI?</h2>
          <p className="text-slate-400 mb-10">Déjanos un mensaje o abre el chat en la esquina inferior derecha para una atención inmediata.</p>
          
          <ContactForm />
        </div>
      </section>

      {/* FOOTER MULTICOLUMNA (ACTUALIZADO CON CONTACTO) */}
      <footer className="bg-slate-950 py-16 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          
          {/* Columna 1: Marca */}
          <div>
            <div className="text-2xl font-black tracking-tighter text-white mb-4">
              IZAK<span className="text-blue-500">SYSTEMS</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Soluciones integrales de TI, operando con excelencia y honestidad desde Guadalajara, Jalisco.
            </p>
          </div>

          {/* Columna 2: Contacto Directo */}
          <div>
            <h4 className="text-white font-bold mb-6">Contacto Directo</h4>
            <div className="space-y-3 text-sm">
              <p className="text-slate-400 flex items-center gap-3">
                <span className="text-xl">📱</span> 
                {/* Cambia estos números por los tuyos */}
                <a href="https://wa.me/523348808769" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  +52 33 48808769
                </a>
              </p>
              <p className="text-slate-400 flex items-center gap-3">
                <span className="text-xl">✉️</span> 
                {/* Cambia este correo por el tuyo */}
                <a href="mailto:contacto.izaksystems@gmail.com" className="hover:text-blue-400 transition-colors">
                  contacto.izaksystems@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="md:text-right">
            <h4 className="text-white font-bold mb-6">Conecta con nosotros</h4>
            <div className="flex gap-4 md:justify-end">
              {/* Estos son botones provisionales listos para tus links */}
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all text-slate-400 hover:text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-pink-600 hover:border-pink-500 transition-all text-slate-400 hover:text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Derechos de Autor */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800/50 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} Izak Systems. Todos los derechos reservados.
        </div>
      </footer>

    </div>
  );
}