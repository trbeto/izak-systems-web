import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google"; // 🔥 El componente oficial de Google

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔥 ESTO ES EL SEO TÉCNICO Y OPENGRAPH PARA REDES SOCIALES
export const metadata: Metadata = {
  title: "Izak Systems | Soluciones TI en Guadalajara",
  description: "Desarrollo de software a la medida (PHP/React/Bases de Datos), armado de Workstations y soporte corporativo de infraestructura.",
  openGraph: {
    title: "Izak Systems | Tecnología que Impulsa tu Negocio",
    description: "No vendemos cajas, resolvemos cuellos de botella operativos. Conoce nuestras soluciones IT corporativas.",
    url: "https://izak-systems-web.vercel.app/", // ⚠️ Recuerda cambiar esto por tu dominio real de Vercel
    siteName: "Izak Systems",
    images: [
      {
        url: "/fondo-tech.png", // Usaremos tu fondo como miniatura de WhatsApp por ahora
        width: 1200,
        height: 630,
        alt: "Izak Systems Portada",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
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
        <Navbar />
        
        <div className="pt-20">
          {children}
        </div>

        <Footer />
        
        <Toaster 
          position="bottom-center"
          toastOptions={{
            style: { background: '#0f172a', color: '#f8fafc', border: '1px solid #1e293b' },
            success: { iconTheme: { primary: '#3b82f6', secondary: '#ffffff' } },
          }}
        />

        <ChatBot />

        {/* 🔥 EL ESPÍA DE GOOGLE ANALYTICS */}
        {/* Cambia "G-XXXXXXXXXX" por el ID real que te dé Google Analytics */}
        <GoogleAnalytics gaId="G-QWHS50WLM7" />
      </body>
    </html>
  );
}