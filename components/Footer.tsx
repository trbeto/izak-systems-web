import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 items-center">
        
        {/* 1. LOGO Y DESCRIPCIÓN CORTA */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            <div className="text-lg font-black tracking-tighter text-white">
              IZAK<span className="text-blue-500">SYSTEMS</span>
            </div>
          </Link>
          <p className="text-slate-500 text-xs leading-relaxed">
            Soluciones integrales de TI desde Guadalajara, Jalisco.
          </p>
        </div>

        {/* 2. CONTACTO DIRECTO COMPACTO (Con Iconos Vectoriales Premium) */}
        <div className="flex flex-col md:items-center text-sm">
          <div className="space-y-2">
            <p className="text-slate-400 flex items-center gap-3">
              {/* Icono de Smartphone SVG */}
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              <a href="https://wa.me/523300000000" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                +52 33 0000 0000
              </a>
            </p>
            <p className="text-slate-400 flex items-center gap-3">
              {/* Icono de Correo SVG */}
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:contacto.izaksystems@gmail.com" className="hover:text-blue-400 transition-colors">
                contacto.izaksystems@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* 3. REDES SOCIALES */}
        <div className="md:text-right flex flex-col md:items-end mt-4 md:mt-0">
          <div className="flex gap-3">
            {/* Facebook / Web */}
            <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all text-slate-400 hover:text-white shadow-sm hover:shadow-blue-500/20">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-pink-600 hover:border-pink-500 transition-all text-slate-400 hover:text-white shadow-sm hover:shadow-pink-500/20">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* 4. COPYRIGHT ULTRA FINO */}
      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] sm:text-xs">
        <p>© {new Date().getFullYear()} Izak Systems. Todos los derechos reservados.</p>
        <p className="mt-2 md:mt-0 uppercase tracking-wider">Desarrollado en Guadalajara</p>
      </div>
    </footer>
  );
}