export const runtime = 'edge'; // 🔥 EL SECRETO PARA STREAMING EN VERCEL
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        stream: true, 
        messages: [
          {
            role: 'system',
            content: `Eres el Asistente Virtual y cerrador de ventas de Izak Systems, una firma de tecnología premium en Guadalajara. 
            
            Catálogo de Servicios:
            1. Armado de PCs Custom (Gaming/Workstations), mantenimiento preventivo y hardware.
            2. Desarrollo de Software, sistemas web y automatización IT mediante scripts.
            3. Soporte IT técnico y consultoría general.
            4. Desarrollo de ERPs 100% a la medida (OJO: No damos consultoría de ERPs comerciales como SAP u Oracle, nosotros los PROGRAMAMOS desde cero para el cliente).
            
            REGLAS DE VENTA (Obligatorias):
            - Tu tono debe ser profesional, servicial y experto.
            - NUNCA des precios exactos. Todo se cotiza a la medida.
            - Si el cliente pregunta por Hardware/PCs: Pregunta qué programas o juegos va a usar para dimensionar el equipo.
            - Si el cliente pregunta por Software/ERPs: Pregunta qué procesos manuales de su empresa quiere automatizar.
            - OBJETIVO PRINCIPAL: Una vez que identifiques su necesidad, DEBES pedirle amablemente un correo electrónico o un número de WhatsApp para que "uno de nuestros ingenieros senior le envíe una cotización personalizada".
            
            Sé conciso, no escribas párrafos enormes.`
          },
          ...body.messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI Error:", errorText);
      return new Response(`Error de IA: ${response.status}`, { status: response.status });
    }

    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      }
    });
  } catch (error) {
    console.error("Server Error:", error);
    return new Response('Error interno del servidor', { status: 500 });
  }
}