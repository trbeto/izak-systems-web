import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ¡Tu marca real en la pestaña del navegador para el SEO!
export const metadata: Metadata = {
  title: "Izak Systems | Soluciones TI",
  description: "Soluciones integrales de TI, Desarrollo de Software y Workstations en Guadalajara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500 selection:text-white scroll-smooth`}
      >
        {/* 1. EL MENÚ HASTA ARRIBA */}
        <Navbar />
        
        {/* 2. EL CONTENIDO EN MEDIO (Le ponemos pt-20 para que el menú fijo no lo tape) */}
        <div className="pt-20">
          {children}
        </div>

        {/* 3. EL FOOTER HASTA ABAJO */}
        <Footer />

        {/* 🔥 Configuramos las notificaciones elegantes en modo oscuro */}
        <Toaster 
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#0f172a', // slate-900
              color: '#f8fafc', // text-slate-50
              border: '1px solid #1e293b', // border-slate-800
            },
            success: {
              iconTheme: {
                primary: '#3b82f6', // blue-500
                secondary: '#ffffff',
              },
            },
          }}
        />
        
        {/* 4. EL BOT FLOTANDO */}
        <ChatBot />
      </body>
    </html>
  );
}