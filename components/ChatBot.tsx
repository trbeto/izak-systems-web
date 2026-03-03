"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 🔥 Importamos el motor de animación

export default function ChatBot() {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Hacemos que la 'e' sea opcional para poder llamarla con el teclado
  const enviarMensaje = async (e?: any) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const mensajeUsuario = input.trim();
    setInput(""); 
    setIsLoading(true);

    const historial = [...messages, { role: 'user', content: mensajeUsuario }];
    setMessages(historial);

    // --- EL DETECTIVE DE LEADS ---
    const contieneContacto = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)|(\d{8,12})/gi.test(mensajeUsuario);

    if (contieneContacto) {
      const chatCompleto = historial.map(m => `${m.role === 'user' ? '👤 Cliente' : '🤖 Bot'}: ${m.content}`).join('\n\n');
      
      fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: "🚨 LEAD CAPTURADO POR CHATBOT",
          empresa: "Izak Systems Bot",
          email: "bot@izaksystems.com", 
          mensaje: `¡El bot logró sacarle datos a un prospecto!\n\nMensaje clave:\n"${mensajeUsuario}"\n\n--- HISTORIAL DE CONVERSACIÓN ---\n\n${chatCompleto}`
        }),
      }).catch(() => console.log("Fallo silencioso del detective"));
    }
    // --- FIN DEL DETECTIVE ---

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: historial }),
      });

      // --- EL DETECTOR DE ERRORES DE VERCEL ---
      if (!response.ok) {
        throw new Error(`Error ${response.status}: Vercel no pudo conectar con OpenAI.`);
      }
      // ----------------------------------------

      if (!response.body) throw new Error("Sin respuesta del servidor");

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let respuestaBot = "";
      let buffer = "";

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lineas = buffer.split('\n');
        buffer = lineas.pop() || ""; 

        for (const linea of lineas) {
          if (linea.trim() === '' || linea.includes('[DONE]')) continue;
          if (linea.startsWith('data: ')) {
            try {
              const data = JSON.parse(linea.replace('data: ', ''));
              const token = data.choices[0]?.delta?.content || '';
              respuestaBot += token;

              setMessages((prev) => {
                const copia = [...prev];
                copia[copia.length - 1].content = respuestaBot;
                return copia;
              });
            } catch (err) {
              // Ignorar fragmentos rotos
            }
          }
        }
      }
    } catch (error: any) {
      console.error(error);
      // Ahora si hay error, lo va a imprimir en la pantalla para que lo podamos ver
      setMessages((prev) => [...prev, { role: 'assistant', content: `❌ Error de conexión: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* 1. ANIMACIÓN DE LA VENTANA DEL CHAT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ transformOrigin: "bottom right" }}
            className="mb-4 w-80 sm:w-96 h-[500px] bg-slate-900 rounded-2xl flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-slate-700 overflow-hidden"
          >
            <div className="bg-blue-600 p-4 flex justify-between items-center shadow-md z-10">
              <h3 className="text-white font-bold flex items-center gap-2 tracking-wide">
                <span className="text-xl">🤖</span> Soporte Izak Systems
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-slate-200 text-xl font-bold transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-blue-700">
                ✕
              </button>
            </div>

            <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-900/50">
              {messages.length === 0 && (
                  <div className="text-slate-400 text-center text-sm mt-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    ¡Hola! 👋 Soy el asistente virtual de Izak Systems.
                    <br /><br />
                    Puedo ayudarte con:
                    <br />• Armado y mantenimiento de PCs
                    <br />• Desarrollo de software empresarial
                    <br />• Sistemas ERP a la medida
                    <br />• Soporte e infraestructura IT
                  </div>
              )}

              {messages.map((m, index) => (
                <div key={index} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-sm whitespace-pre-wrap shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={enviarMensaje} className="p-3 border-t border-slate-800 bg-slate-950 z-10">
              <div className="flex gap-2 items-end">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      enviarMensaje();
                    }
                  }}
                  disabled={isLoading}
                  rows={1}
                  placeholder={isLoading ? "Escribiendo..." : "Mensaje... "}
                  className="flex-grow bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 resize-none text-sm shadow-inner"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-400 text-white px-4 py-3 rounded-lg transition-colors h-full flex items-center justify-center shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. ANIMACIÓN DEL BOTÓN FLOTANTE */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-3xl shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center relative ml-auto"
          >
            {/* Puntito verde de "En línea" */}
            <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-green-400 border-2 border-slate-950 rounded-full z-10"></span>
            💬
          </motion.button>
        )}
      </AnimatePresence>
      
    </div>
  );
}