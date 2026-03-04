import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

// 🔥 Conectamos con tu nueva Base de Datos de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
  try {
    // Recibimos los datos del formulario
    const { nombre, empresa, email, telefono, mensaje } = await req.json();

    // 1️⃣ PRIMERA TAREA: Guardar el prospecto en la Base de Datos
    const { error: dbError } = await supabase
      .from('prospectos')
      .insert([
        { 
          nombre: nombre, 
          empresa: empresa || null, 
          email: email, 
          telefono: telefono || null, 
          mensaje: mensaje 
        }
      ]);

    if (dbError) {
      // Si falla la base de datos, lo registramos en la consola, 
      // pero dejamos que el código continúe para que al menos te llegue el correo.
      console.error('Error al guardar en Supabase:', dbError);
    }

    // 2️⃣ SEGUNDA TAREA: Enviarte tu alerta por correo
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Si usas Outlook u otro, esto cambia
      auth: {
        user: process.env.CORREO_IZAK,
        pass: process.env.PASSWORD_IZAK,
      },
    });

    // Armamos el correo que te va a llegar a ti
    const mailOptions = {
      from: process.env.CORREO_IZAK,
      to: process.env.CORREO_IZAK, // Te lo envías a ti mismo como alerta
      subject: `🔥 Nuevo Lead Izak Systems: ${nombre} de ${empresa || 'Independiente'}`,
      text: `Tienes un nuevo prospecto desde la página web:
        
Nombre: ${nombre}
Empresa: ${empresa || 'No especificada'}
Email: ${email}
WhatsApp/Teléfono: ${telefono || 'No proporcionado'}
        
Mensaje:
${mensaje}
      `,
    };

    // Damos la orden de envío del correo
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error procesando contacto:', error);
    return new Response(JSON.stringify({ error: 'Fallo al procesar el mensaje' }), { status: 500 });
  }
}