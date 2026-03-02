"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: ""
  });
  
  const [estado, setEstado] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const enviarMensaje = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstado("loading");

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setEstado("success");
        setFormData({ nombre: "", empresa: "", email: "", mensaje: "" }); // Limpiamos
      } else {
        setEstado("error");
      }
    } catch (error) {
      setEstado("error");
    }
  };

  if (estado === "success") {
    return (
      <div className="bg-slate-900 border border-blue-500/50 p-8 rounded-2xl text-center shadow-2xl">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
        <p className="text-slate-400">Gracias por contactarnos. Un ingeniero de Izak Systems revisará tu caso y te responderemos a la brevedad.</p>
        <button onClick={() => setEstado("idle")} className="mt-6 text-blue-400 hover:text-blue-300 font-medium transition-colors">
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={enviarMensaje} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-4 text-left shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-2">Nombre *</label>
          <input required type="text" name="nombre" value={formData.nombre} onChange={handleChange} disabled={estado === "loading"} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50" placeholder="Tu nombre" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-2">Empresa</label>
          <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} disabled={estado === "loading"} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50" placeholder="Tu empresa" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-2">Correo Electrónico *</label>
        <input required type="email" name="email" value={formData.email} onChange={handleChange} disabled={estado === "loading"} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50" placeholder="correo@empresa.com" />
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-2">¿En qué podemos ayudarte? *</label>
        <textarea required rows={4} name="mensaje" value={formData.mensaje} onChange={handleChange} disabled={estado === "loading"} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50" placeholder="Describe tu proyecto o problema técnico..."></textarea>
      </div>
      
      {estado === "error" && (
        <p className="text-red-400 text-sm">Hubo un problema al enviar el mensaje. Por favor intenta de nuevo.</p>
      )}

      <button type="submit" disabled={estado === "loading"} className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold py-4 rounded-lg transition-colors mt-4">
        {estado === "loading" ? "Enviando..." : "Enviar Mensaje"}
      </button>
    </form>
  );
}