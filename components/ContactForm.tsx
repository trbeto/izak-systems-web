"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "", // 🔥 Nuevo campo agregado al estado
    mensaje: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const enviarMensaje = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const promesaEnvio = fetch('/api/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (!res.ok) throw new Error("Error en el servidor");
      return res;
    });

    toast.promise(promesaEnvio, {
      loading: 'Enviando tu mensaje...',
      success: '¡Mensaje enviado con éxito! Un ingeniero te contactará.',
      error: 'Hubo un problema al enviar el mensaje. Intenta de nuevo.',
    });

    try {
      await promesaEnvio;
      // 🔥 Aseguramos limpiar también el campo de teléfono al terminar
      setFormData({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
    } catch (error) {
      console.error(error); 
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <form onSubmit={enviarMensaje} className="bg-slate-950/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 space-y-4 text-left shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      
      {/* FILA 1: Nombre y Empresa */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-2 font-medium">Nombre *</label>
          <input required type="text" name="nombre" value={formData.nombre} onChange={handleChange} disabled={isSubmitting} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50 shadow-inner" placeholder="Tu nombre" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-2 font-medium">Empresa</label>
          <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} disabled={isSubmitting} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50 shadow-inner" placeholder="Tu empresa" />
        </div>
      </div>
      
      {/* FILA 2: Correo y Teléfono */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-2 font-medium">Correo Electrónico *</label>
          <input required type="email" name="email" value={formData.email} onChange={handleChange} disabled={isSubmitting} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50 shadow-inner" placeholder="correo@empresa.com" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-2 font-medium">WhatsApp / Teléfono</label>
          {/* Usamos type="tel" para que en celulares se abra el teclado numérico directamente */}
          <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} disabled={isSubmitting} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50 shadow-inner" placeholder="Ej. 33 0000 0000" />
        </div>
      </div>
      
      {/* FILA 3: Mensaje */}
      <div>
        <label className="block text-sm text-slate-400 mb-2 font-medium">¿En qué podemos ayudarte? *</label>
        <textarea required rows={4} name="mensaje" value={formData.mensaje} onChange={handleChange} disabled={isSubmitting} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50 shadow-inner resize-none" placeholder="Describe tu proyecto o problema técnico..."></textarea>
      </div>

      {/* BOTÓN DE ENVÍO */}
      <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all mt-4 flex justify-center items-center gap-2">
        {isSubmitting ? "Procesando..." : "Enviar Mensaje"}
        {!isSubmitting && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>}
      </button>
    </form>
  );
}